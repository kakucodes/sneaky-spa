import { z } from "zod";
import { loadSheetData, ValidationError } from "./sheetsHelpers";
import {
  SHOP_CARDS_SHEETS_CONFIG,
  SHOP_PLUSHIES_SHEETS_CONFIG,
} from "@/config";

const StoreItemSchema = z.object({
  image: z.string().min(1, "Image URL is required"),
  name: z.string().min(1, "Name is required"),
  basedOn: z.string().optional(),

  // Transform "TRUE"/"FALSE" string to boolean
  isBundleDeal: z
    .string()
    .transform((str) => str.toUpperCase())
    .pipe(z.enum(["TRUE", "FALSE"]).transform((val) => val === "TRUE")),

  // Optional date fields that handle string input
  shippingStart: z
    .string()
    .optional()
    .transform((str) => (str ? new Date(str) : undefined))
    .pipe(
      z
        .date()
        .optional()
        .refine((date) => !date || !isNaN(date.getTime()), {
          message: "Invalid shipping start date format",
        })
    ),

  presaleUntil: z
    .string()
    .optional()
    .transform((str) => (str ? new Date(str) : undefined))
    .pipe(
      z
        .date()
        .optional()
        .refine((date) => !date || !isNaN(date.getTime()), {
          message: "Invalid presale until date format",
        })
    ),

  // Optional string fields
  stargazeLink: z.string().optional(),
  stripeLink: z.string().optional(),
  note: z.string().optional(),
});

export type StoreItem = z.infer<typeof StoreItemSchema>;

export const getStorePlushies = async (): Promise<
  | { success: true; items: StoreItem[] }
  | { success: false; errors: ValidationError[] }
  | "Failed to load items"
> => {
  try {
    let storeItems = await loadSheetData(
      SHOP_PLUSHIES_SHEETS_CONFIG,
      StoreItemSchema
    );

    if (storeItems.items.length > 0) {
      if (storeItems.errors.length > 0)
        console.error("Errors loading store items", storeItems.errors);
      return { success: true, items: storeItems.items };
    }
    return { success: false, errors: storeItems.errors };
  } catch (error) {
    console.error("Error loading store items", error);
    return "Failed to load items";
  }
};

export const getStoreCards = async (): Promise<
  | { success: true; items: StoreItem[] }
  | { success: false; errors: ValidationError[] }
  | "Failed to load items"
> => {
  try {
    let storeItems = await loadSheetData(
      SHOP_CARDS_SHEETS_CONFIG,
      StoreItemSchema
    );

    if (storeItems.items.length > 0) {
      if (storeItems.errors.length > 0)
        console.error("Errors loading store items", storeItems.errors);
      return { success: true, items: storeItems.items };
    }
    return { success: false, errors: storeItems.errors };
  } catch (error) {
    console.error("Error loading store items", error);
    return "Failed to load items";
  }
};
