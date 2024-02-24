"use client";
import { usePathname } from "next/navigation";
import styles from "./breadCrumps.module.css";
import Link from "next/link";
import { MdArrowRightAlt, MdOutlineMonitor } from "react-icons/md";

const BreadCrumps = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  return (
    <div className={styles.container}>
      <MdOutlineMonitor />
      {pathSegments.map((path, index) => {
        if (path === "") return null;
        return (
          <Link
            key={index}
            href={`${pathSegments.slice(0, index + 1).join("/")}`}
          >
            <span className={styles.path}>
              <MdArrowRightAlt size="16" /> {path}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumps;
