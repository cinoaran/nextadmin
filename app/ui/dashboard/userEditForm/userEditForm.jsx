"use client";
import userSchema from "@/app/jupValidation/editUserSchema";
import {
  MdClose,
  MdDone,
  MdOutlineCancel,
  MdOutlineDone,
} from "react-icons/md";
import { useFormik } from "formik";

import styles from "./userEditForm.module.css";
import Image from "next/image";
import Status from "../../status/status";
import { useState } from "react";

const UserForm = ({ userById }) => {
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const {
    avatar,
    firstName,
    lastName,
    userName,
    email,
    phone,
    id,
    status,
    range,
    password,
    confirmPassword,
    emailVerified,
    onlyBilling,
    billingAddress,
    shippingAddress,
  } = userById;

  const initialFormData = {
    previewAvatar: previewAvatar || "",
    avatar: avatar,
    firstName: firstName || "",
    lastName: lastName || "",
    userName: userName || "",
    email: email || "",
    phone: phone || "",
    password: password || "",
    confirmPassword: confirmPassword || "",
    range: range || "",
    emailVerified: emailVerified || false,
    status: status || "",
    id: id || "",
    onlyBilling: onlyBilling || false,
    billingAddress: {
      billingCountry: billingAddress?.billingCountry || "",
      billingStreetMain: billingAddress?.billingStreetMain || "",
      billingStreetAdditive: billingAddress?.billingStreetAdditive || "",
      billingCity: billingAddress?.billingCity || "",
      billingLand: billingAddress?.billingLand || "",
      billingZip: billingAddress?.billingZip || "",
    },
    shippingAddress: {
      shippingCountry: shippingAddress?.shippingCountry || "",
      shippingStreetMain: shippingAddress?.shippingStreetMain || "",
      shippingStreetAdditive: shippingAddress?.shippingStreetAdditive || "",
      shippingCity: shippingAddress?.shippingCity || "",
      shippingLand: shippingAddress?.shippingLand || "",
      shippingZip: shippingAddress?.shippingZip || "",
    },
  };

  const onSubmit = (values, actions) => {
    actions.resetForm();
    console.log(values);
    console.log(actions);
  };

  const handleImageChange = (event, setFieldValue) => {
    const file = event?.target?.files?.[0];
    setFieldValue("previewAvatar", file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewAvatar(null);
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialFormData,
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        {values.status && (
          <p className={styles.status}>
            <Status status={values.status} />
          </p>
        )}
        <div className={styles.colorCorner}></div>

        <div className={styles.formHeader}>
          <h2 className={styles.title}>Edit user</h2>
          <div className={styles.checkboxContainer}>
            <label htmlFor="emailVerified" className={styles.checkboxLabel}>
              {values.emailVerified ? (
                <>
                  <span>Email is verified</span>
                  <MdDone className={styles.checkboxSvg} />
                </>
              ) : (
                <>
                  <span>Email is not verified</span>
                  <MdOutlineCancel className={styles.checkboxSvg} />
                </>
              )}
            </label>
            <div>
              <input
                type="checkbox"
                value={values.emailVerified}
                onChange={handleChange}
                name="emailVerified"
                id="emailVerified"
                onBlur={handleBlur}
                checked={values.emailVerified}
              />
            </div>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <div>
              <label htmlFor="firstName">
                {errors.firstName && touched.firstName ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    First name {errors.firstName}
                  </span>
                ) : (
                  <span className={styles.label}>
                    First name
                    {values.firstName ? <MdOutlineDone size="0.8em" /> : " *"}
                  </span>
                )}
              </label>
              <input
                value={values.firstName}
                onChange={handleChange}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Max"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={styles.label}>
                {errors.lastName && touched.lastName ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Last name {errors.lastName}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Last name
                    {values.lastName ? <MdOutlineDone size="0.8em" /> : " *"}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.lastName}
                onChange={handleChange}
                name="lastName"
                id="lastName"
                placeholder="Last name"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="userName" className={styles.label}>
                {errors.userName && touched.userName ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    User name {errors.userName}
                  </span>
                ) : (
                  <span className={styles.label}>
                    User name
                    {values.userName ? <MdOutlineDone size="0.8em" /> : " *"}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.userName}
                onChange={handleChange}
                name="userName"
                id="useName"
                placeholder="User name"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>
                {errors.email && touched.email ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Email {errors.email}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Email
                    {values.email ? <MdOutlineDone size="0.8em" /> : " *"}
                  </span>
                )}
              </label>
              <input
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Email address"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="phone" className={styles.label}>
                {errors.phone && touched.phone ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Phone {errors.phone}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Phone
                    {values.phone ? <MdOutlineDone size="0.8em" /> : ""}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.phone}
                onChange={handleChange}
                name="phone"
                id="phone"
                placeholder="Phone number"
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className={styles.formContainer}>
            <div>
              <label htmlFor="password" className={styles.label}>
                {errors.password && touched.password ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Neues password {errors.password}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Neues password
                    {values.password ? <MdOutlineDone size="0.8em" /> : ""}
                  </span>
                )}
              </label>
              <input
                type="password"
                value={values.password}
                onChange={handleChange}
                name="password"
                id="password"
                placeholder="Password"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className={styles.label}>
                {errors.confirmPassword && touched.confirmPassword ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Passwort wiederholen {errors.confirmPassword}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Neues passwort wiederholen
                    {values.confirmPassword ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      ""
                    )}
                  </span>
                )}
              </label>
              <input
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirmed password"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="status" className={styles.label}>
                {errors.status && touched.status ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    User status {errors.status}
                  </span>
                ) : (
                  <span className={styles.label}>
                    User status
                    {values.status || touched.status ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <select
                name="status"
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                id="status"
                className={styles.select}
              >
                <option value="general" className={styles.option}>
                  Please select a status
                </option>
                <option value="Done" className={styles.option}>
                  Done
                </option>
                <option value="Pending" className={styles.option}>
                  Pending
                </option>
                <option value="Cancelled" className={styles.option}>
                  Cancelled
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="range" className={styles.label}>
                {errors.range && touched.range ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    User range {errors.range}
                  </span>
                ) : (
                  <span className={styles.label}>
                    User is
                    {values.range || touched.range ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <select
                name="range"
                value={values.range}
                onChange={handleChange}
                onBlur={handleBlur}
                id="range"
                className={styles.select}
              >
                <option value="general" className={styles.option}>
                  Please select a status
                </option>
                <option value="isCustomer" className={styles.option}>
                  Customer
                </option>
                <option value="isAdmin" className={styles.option}>
                  Admin
                </option>
                <option value="isOffice" className={styles.option}>
                  Office
                </option>
                <option value="isMerchant" className={styles.option}>
                  Merchant
                </option>
              </select>
            </div>
            <div className={styles.avatarImage}>
              <div>
                <label htmlFor="previewAvatar" className={styles.label}>
                  <Image
                    src={previewAvatar ? previewAvatar : values.avatar}
                    height="80"
                    width="80"
                    alt="New avatar"
                  />
                </label>
              </div>
              {previewAvatar ? (
                <span
                  onClick={(e) => handleImageChange(e, setFieldValue)}
                  className={styles.deleteImage}
                >
                  <MdClose />
                  {values.previewAvatar && errors.previewAvatar ? (
                    <b className={styles.labelError}>{errors.previewAvatar}</b>
                  ) : (
                    "Delete selection"
                  )}
                </span>
              ) : (
                <span className={styles.selectImage}>
                  Click on image for a new avatar
                </span>
              )}

              <input
                type="file"
                onChange={(e) => handleImageChange(e, setFieldValue)}
                name={previewAvatar ? "previewAvatar" : "avatar"}
                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                className={styles.inputFile}
                id="previewAvatar"
              />
            </div>
          </div>
        </div>
        <div className={styles.addressContainer}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <div className={styles.checkboxContainer}>
                <label htmlFor="onlyBilling" className={styles.checkboxLabel}>
                  {values.onlyBilling ? (
                    <>
                      <span>Only billing address</span>
                      <MdDone className={styles.checkboxSvg} />
                    </>
                  ) : (
                    <>
                      <span>Billing address</span>
                      <MdDone className={styles.checkboxSvg} />
                    </>
                  )}
                </label>
                <input
                  type="checkbox"
                  value={values.onlyBilling}
                  onChange={handleChange}
                  name="onlyBilling"
                  id="onlyBilling"
                  onBlur={handleBlur}
                  checked={values.onlyBilling}
                />
              </div>
            </div>

            <div>
              <label htmlFor="billingCountry">
                {errors.billingAddress?.billingCountry &&
                touched.billingAddress?.billingCountry ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Country {errors.billingAddress.billingCountry}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Country
                    {values.billingAddress?.billingCountry ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.billingAddress.billingCountry}
                onChange={handleChange}
                name="billingAddress.billingCountry"
                id="billingCountry"
                placeholder="Deutschland"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="billingStreetMain">
                {errors.billingAddress?.billingStreetMain &&
                touched.billingAddress?.billingStreetMain ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Street & number {errors.billingAddress.billingStreetMain}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Street & Number
                    {values.billingAddress?.billingStreetMain ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.billingAddress.billingStreetMain}
                onChange={handleChange}
                name="billingAddress.billingStreetMain"
                id="billingStreetMain"
                placeholder="Rechnungsstraße 14"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="billingStreetAdditive">
                {errors.billingAddress?.billingStreetAdditive &&
                touched.billingAddress?.billingStreetAdditive ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Street & number additive
                    {errors.billingAddress.billingStreetAdditive}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Street & number additive
                    {values.billingAddress?.billingStreetAdditive ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      ""
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.billingAddress.billingStreetAdditive}
                onChange={handleChange}
                name="billingAddress.billingStreetAdditive"
                id="billingStreetAdditive"
                placeholder="2 Hinterhof EG rechts"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="billingCity">
                {errors.billingAddress?.billingCity &&
                touched.billingAddress?.billingCity ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    City {errors.billingAddress.billingCity}
                  </span>
                ) : (
                  <span className={styles.label}>
                    City
                    {values.billingAddress?.billingCity ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.billingAddress.billingCity}
                onChange={handleChange}
                name="billingAddress.billingCity"
                id="billingCity"
                placeholder="Rechnungsstadt"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="billingLand">
                {errors.billingAddress?.billingLand &&
                touched.billingAddress?.billingLand ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Land {errors.billingAddress.billingLand}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Land
                    {values.billingAddress?.billingLand ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.billingAddress.billingLand}
                onChange={handleChange}
                name="billingAddress.billingLand"
                id="billingLand"
                placeholder="Rechnungsland"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="billingZip">
                {errors.billingAddress?.billingZip &&
                touched.billingAddress?.billingZip ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Zip {errors.billingAddress.billingZip}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Zip
                    {values.billingAddress?.billingZip ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.billingAddress.billingZip}
                onChange={handleChange}
                name="billingAddress.billingZip"
                id="billingZip"
                placeholder="XY 12345"
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div
            className={
              !values.onlyBilling
                ? styles.formContainer
                : styles.formContainerBlocked
            }
          >
            <div className={styles.formHeader}>
              <div className={styles.checkboxContainer}>
                <label
                  htmlFor="onlyBillingShippingSide"
                  className={styles.checkboxLabel}
                >
                  {!values.onlyBilling ? (
                    <>
                      <span>Shipping address</span>
                      <MdDone className={styles.checkboxSvg} />
                    </>
                  ) : (
                    <span>Shipping address</span>
                  )}
                </label>
                <input
                  type="checkbox"
                  value={values.onlyBilling}
                  onChange={handleChange}
                  name="onlyBilling"
                  id="onlyBillingShippingSide"
                  onBlur={handleBlur}
                  checked={values.onlyBilling}
                />
              </div>
            </div>
            <div>
              <label htmlFor="shippingCountry">
                {errors.shippingAddress?.shippingCountry &&
                touched.shippingAddress?.shippingCountry ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Country {errors.shippingAddress.shippingCountry}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Country
                    {values.shippingAddress?.shippingCountry ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.shippingAddress.shippingCountry}
                onChange={handleChange}
                name="shippingAddress.shippingCountry"
                id="shippingCountry"
                placeholder="Deutschland"
                onBlur={handleBlur}
              />
            </div>

            <div>
              <label htmlFor="shippingStreetMain">
                {errors.shippingAddress?.shippingStreetMain &&
                touched.shippingAddress?.shippingStreetMain ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Street & number {errors.shippingAddress.shippingStreetMain}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Street & number
                    {values.shippingAddress?.shippingStreetMain ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.shippingAddress.shippingStreetMain}
                onChange={handleChange}
                name="shippingAddress.shippingStreetMain"
                id="shippingStreetMain"
                placeholder="Lieferstraße 0815"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="shippingStreetAdditive">
                {errors.shippingAddress?.shippingStreetAdditive &&
                touched.shippingAddress?.shippingStreetAdditive ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Street & number additive
                    {errors.shippingAddress.shippingStreetAdditive}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Street & number additive
                    {values.shippingAddress?.shippingStreetAdditive ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      ""
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.shippingAddress.shippingStreetAdditive}
                onChange={handleChange}
                name="shippingAddress.shippingStreetAdditive"
                id="shippingStreetAdditive"
                placeholder="2 Hinterhof EG rechts"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="shippingCity">
                {errors.shippingAddress?.shippingCity &&
                touched.shippingAddress?.shippingCity ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    City {errors.shippingAddress.shippingCity}
                  </span>
                ) : (
                  <span className={styles.label}>
                    City
                    {values.shippingAddress?.shippingCity ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.shippingAddress.shippingCity}
                onChange={handleChange}
                name="shippingAddress.shippingCity"
                id="shippingCity"
                placeholder="Lieferstadt"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="shippingLand">
                {errors.shippingAddress?.shippingLand &&
                touched.shippingAddress?.shippingLand ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Land {errors.shippingAddress.shippingLand}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Land
                    {values.shippingAddress?.shippingLand ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.shippingAddress.shippingLand}
                onChange={handleChange}
                name="shippingAddress.shippingLand"
                id="shippingLand"
                placeholder="Lieferland"
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label htmlFor="shippingZip">
                {errors.shippingAddress?.shippingZip &&
                touched.shippingAddress?.shippingZip ? (
                  <span className={`${styles.label} ${styles.labelError}`}>
                    Zip {errors.shippingAddress.shippingZip}
                  </span>
                ) : (
                  <span className={styles.label}>
                    Zip
                    {values.shippingAddress?.shippingZip ? (
                      <MdOutlineDone size="0.8em" />
                    ) : (
                      " *"
                    )}
                  </span>
                )}
              </label>
              <input
                type="text"
                value={values.shippingAddress.shippingZip}
                onChange={handleChange}
                name="shippingAddress.shippingZip"
                id="shippingZip"
                placeholder="LS 0815"
                onBlur={handleBlur}
              />
            </div>
            {/* ... (other shipping address input fields) ... */}
          </div>
        </div>
        <div className={styles.button}>
          {Object.keys(errors).length > 0 ? (
            <button type="submit" disabled={true} className={styles.addButton}>
              Bitte alle notwendigen Felder ausfüllen
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.addButton}
            >
              Edit User {values.lastName}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
