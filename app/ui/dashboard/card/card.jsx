import Image from "next/image";
import styles from "./card.module.css";
import {
  MdArrowRightAlt,
  MdOutlineAvTimer,
  MdOutlineEmail,
  MdOutlinePhoneIphone,
} from "react-icons/md";
import Link from "next/link";
import Status from "../../status/status";

const Card = ({
  id,
  img,
  lastName,
  firstName,
  email,
  phone,
  createdAt,
  status,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {status && (
          <p className={styles.userStatus}>
            <Status status={status} />
          </p>
        )}
        <div className={styles.colorCorner}></div>

        <Link href={`/dashboard/users/${id}`}>
          <h6 className={styles.headerTitle}>
            Details
            <span>
              <MdArrowRightAlt size="25" />
            </span>
          </h6>
        </Link>

        <div className={styles.userDetails}>
          <p>
            <MdOutlineEmail size="25" /> {email}
          </p>
          <p>
            <MdOutlinePhoneIphone size="28" /> {phone}
          </p>
          <p>
            <MdOutlineAvTimer size="30" /> {createdAt.toString().slice(3, 30)}
          </p>
        </div>
        <div className={styles.body}>
          <h6 className={styles.bodyTitle}>
            {lastName} {firstName}
          </h6>
          <div className={styles.userImage}>
            <Image src={img} width="50" height="50" alt="User image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
