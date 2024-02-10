import styles from "../styles/content.module.css";
import Image from "next/image";
import topImage from "../images/SiteTop.jpeg";
import logoImage from "../images/clear_logo.png";
import React, { useEffect, useState } from "react";
import { XMLHttpRequest } from "xmlhttprequest-ts";

function getNumber(readyState: number, status: number, text: string): number[] {
  var res = [-1, -1];
  if (readyState === 4 && status === 200) {
    for (var i = 0; i <= 22; i++) {
      // man
      var keyWord = new RegExp("m" + i.toString() + ".png");
      if (text.match(keyWord) !== null) {
        res[0] = i;
      }
      // woman
      keyWord = new RegExp("w" + i.toString() + ".png");
      if (text.match(keyWord) !== null) {
        res[1] = i;
      }
    }
  }
  return res;
}

export default function ContentHomeTop() {
  const [manCnt, setManCnt] = useState(0);
  const [womanCnt, setMomanCnt] = useState(0);
  const obj = new XMLHttpRequest();
  obj.open("GET", "https://fimit-official.com", true); //true:非同期通信
  obj.send(null);
  obj.onreadystatechange = function () {
    const res = getNumber(obj.readyState, obj.status, obj.responseText);
    if (res[0] !== -1) {
      setManCnt(res[0]);
      setMomanCnt(res[1]);
    }
  };
  return (
    <div>
      <div className={styles.topImageContainer}>
        <Image className={styles.topImage} src={topImage} alt="" />
        <p className={styles.topImageText1}>1 on 1</p>
        <p className={styles.topImageText2}>Matching Lounge</p>
        <Image className={styles.topLogoImage} src={logoImage} alt="" />
        <p className={styles.topImageText3}>素敵な出会いがあなたを待っている</p>
      </div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th} colSpan={2}>
              来店状況
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td2}>Men</td>
            <td className={styles.td1}>Women</td>
          </tr>
          <tr>
            <td className={styles.td2}>{manCnt}名</td>
            <td className={styles.td1}>{womanCnt}名</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
