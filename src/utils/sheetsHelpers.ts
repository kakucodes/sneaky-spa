import { z } from "zod";

export type SheetConfig = {
  apiKey: string;
  spreadsheetId: string;
  range: string;
};

export type ValidationError = {
  row: number;
  message: string;
};

const fetchSheetData = async (config: SheetConfig) => {
  const { apiKey, spreadsheetId, range } = config;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(
    range
  )}?key=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch sheet data: ${response.statusText}`);
  }

  const data = await response.json();
  const rows = data.values;

  if (!rows || rows.length < 2) {
    throw new Error("Sheet is empty or missing headers");
  }

  return rows;
};

export const loadSheetData = async <T extends z.ZodType>(
  config: SheetConfig,
  schema: T
): Promise<{
  items: z.infer<T>[];
  errors: ValidationError[];
}> => {
  try {
    const rows = await fetchSheetData(config);
    const [headers, ...dataRows] = rows;

    const results: ({ item: z.infer<T> } | { error: ValidationError })[] =
      dataRows.map((row: string[], index: number) => {
        console.log(row, index);
        try {
          const rowData = rowToObject(headers, row);
          const item = schema.parse(rowData);
          return { item };
        } catch (error) {
          if (error instanceof z.ZodError) {
            return {
              error: {
                row: index + 2,
                message: error.errors.map((e) => e.message).join(", "),
              },
            };
          }
          return {
            error: {
              row: index + 2,
              message: "Unknown validation error",
            },
          };
        }
      });

    return {
      items: results.flatMap((result) =>
        "item" in result ? [result.item] : []
      ),
      errors: results.flatMap((result) =>
        "error" in result ? [result.error] : []
      ),
    };
  } catch (error) {
    throw new Error(
      `Failed to load sheet data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};

const validateRow = <T extends z.ZodType>(
  schema: T,
  rowData: Record<string, string>,
  rowIndex: number
): { item?: z.infer<T>; error?: ValidationError } => {
  try {
    const item = schema.parse(rowData);
    return { item };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: {
          row: rowIndex,
          message: error.errors.map((e) => e.message).join(", "),
        },
      };
    }
    return {
      error: {
        row: rowIndex,
        message: "Unknown validation error",
      },
    };
  }
};

const rowToObject = (headers: string[], row: string[]) =>
  headers.reduce(
    (obj, header, index) => ({
      ...obj,
      [header]: row[index]?.trim() || "",
    }),
    {}
  );
