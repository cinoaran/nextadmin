import styles from "./user.module.css";

const userPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.colorCorner}></div>
        <h2 className={styles.title}>Add new User</h2>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <div>
              <label htmlFor="firstName" className={styles.label}>
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
            </div>
            <div>
              <label htmlFor="lastName" className={styles.label}>
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name"
              />
            </div>
            <div>
              <label htmlFor="userName" className={styles.label}>
                User name
              </label>
              <input
                type="text"
                name="username"
                id="useName"
                placeholder="User name"
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="phone" className={styles.label}>
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className={styles.formContainer}>
            <div>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className={styles.label}>
                Please confirm your password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirmed password"
              />
            </div>
            <div>
              <label htmlFor="status" className={styles.label}>
                Status
              </label>
              <select name="status" id="status" className={styles.select}>
                <option value="general" className={styles.option}>
                  Please select a status
                </option>
                <option value="isUser" className={styles.option}>
                  As user
                </option>
                <option value="isAdmin" className={styles.option}>
                  As admin
                </option>
                <option value="isMerchant" className={styles.option}>
                  As merchant
                </option>
              </select>
            </div>
            <div className={styles.checkboxContainer}>
              <div>
                <label htmlFor="verified" className={styles.label}>
                  Email is verified
                </label>
              </div>
              <div>
                <input type="checkbox" name="verified" id="verified" />
              </div>
            </div>
            <div>
              <label htmlFor="avatar" className={styles.label}>
                Your avatar image
              </label>
              <input
                type="file"
                name="myImage"
                accept="image/x-png,image/gif,image/jpeg"
                id="avatar"
              />
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.addButton}>Add new User</button>
        </div>
      </form>
    </div>
  );
};

export default userPage;
