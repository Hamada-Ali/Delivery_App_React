// saving new items to firebase (submit)

import { fireStore } from "../firebase.config";
import { collection, orderBy ,query ,doc, setDoc, getDocs } from "firebase/firestore";

export const saveItem = async (data) => {
  await setDoc(doc(fireStore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};


export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(fireStore, "foodItems"), orderBy("id", "desc"))
  )
  return items.docs.map((doc) => doc.data())
}
