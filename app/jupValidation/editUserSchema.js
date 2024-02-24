import { boolean, object, ref, string, mixed } from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,30}$/;

const userSchema = object({
  previewAvatar: mixed()
    .test("fileType", "Unsupported file type", (value) => {
      if (!value) {
        return true; // Allow empty value (optional field)
      }
      const supportedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/avif",
        "image/svg+xml",
        "image/apng",
      ]; // Add more supported types as needed
      return supportedTypes.includes(value.type);
    })
    .test("fileSize", "File size is too large", (value) => {
      if (!value) {
        return true; // Allow empty value (optional field)
      }
      const maxSizeInBytes = 100 * 1024; // 300KB for avatars
      return value.size <= maxSizeInBytes;
    }),
  firstName: string()
    .min(3, "min. 3 Felder")
    .max(40, "max 40 Felder")
    .required("Obligatoriches feld"),
  lastName: string()
    .min(3, "min. 3 Felder")
    .max(40, "max 40 Felder")
    .required("Obligatoriches feld"),
  userName: string()
    .min(3, "min. 3 Felder")
    .max(40, "max 10 Felder")
    .required("Obligatoriches feld"),
  email: string()
    .matches(
      /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,})$/i,
      "ist nicht valide"
    )
    .required("Obligatoriches feld"),

  phone: string().min(3, "min. 3 Felder").max(12, "max. 12 Felder"),
  password: string()
    .min(5, "min. 5 Felder")
    .matches(passwordRules, "min. 1 Großbuchtabe")
    .max(30, "max.30 Felder"),

  confirmPassword: string()
    .min(5, "min. 5 Felder")
    .matches(passwordRules, "min. 1 Gross und 1 Kleinbuchtabe")
    .max(30, "max.30 Felder")
    .oneOf([ref("password"), null], "nicht identisch"),

  status: string()
    .oneOf(["Done", "Pending", "Cancelled"], "Bitte Status auswählen")
    .required("Obligatoriches feld"),

  range: string()
    .oneOf(
      ["isAdmin", "isOffice", "isCustomer", "isMerchant"],
      "Bitte Status auswählen"
    )
    .required("Obligatoriches feld"),

  onlyBilling: boolean(),

  billingAddress: object({
    billingCountry: string()
      .required("Obligatoriches feld")
      .min(2, "min. 2 Felder")
      .max(30, "max. 30 Felder"),
    billingStreetMain: string()
      .required("Obligatoriches feld")
      .min(3, "min. 3 Felder")
      .max(30, "max. 30 Felder"),
    billingStreetAdditive: string()
      .min(3, "min. 30 Felder")
      .max(30, "max. 30 Felder"),
    billingCity: string()
      .required("Obligatoriches feld")
      .min(3, "min. 3 Felder")
      .max(30, "max. 30 Felder"),
    billingLand: string()
      .required("Obligatoriches feld")
      .min(3, "min. 3 Felder")
      .max(30, "max. 30 Felder"),
    billingZip: string()
      .required("Obligatoriches feld")
      .min(3, "min. 3 Felder")
      .max(30, "max. 30 Felder"),
  }),

  shippingAddress: object().when("onlyBilling", {
    is: (onlyBilling) => onlyBilling === false,
    then: () =>
      object({
        shippingCountry: string()
          .required("Obligatoriches feld")
          .min(2, "min. 2 Felder")
          .max(30, "max. 30 Felder"),
        shippingStreetMain: string()
          .required("Obligatoriches feld")
          .min(3, "min. 3 Felder")
          .max(30, "max. 30 Felder"),
        shippingStreetAdditive: string()
          .min(3, "min. 30 Felder")
          .max(30, "max. 30 Felder"),
        shippingCity: string()
          .required("Obligatoriches feld")
          .min(3, "min. 3 Felder")
          .max(30, "max. 30 Felder"),
        shippingLand: string()
          .required("Obligatoriches feld")
          .min(3, "min. 3 Felder")
          .max(30, "max. 30 Felder"),
        shippingZip: string()
          .required("Obligatoriches feld")
          .min(3, "min. 3 Felder")
          .max(30, "max. 30 Felder"),
      }),
  }),
});

export default userSchema;
