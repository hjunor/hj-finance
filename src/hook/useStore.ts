import {
  collection,
  query,
  setDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useUser } from "./useUser";
import { v4 as uuid } from "uuid";

export const useStore = () => {
  const { setList } = useUser();
  const getStore = async (type: string, id: string) => {
    const q = query(collection(db, type, id, "list"));
    await onSnapshot(q, (querySnapshot) => {
      setList(
        querySnapshot.docs.map((doc) => {
          console.log({ ...doc.data() });
          return {
            date: new Date(doc.data().date),
            title: doc.data().title,
            value: doc.data().value,
            category: doc.data().category,
            id: doc.data().id,
          };
        })
      );
    });
  };

  const addStore = async (type: string, value: any, id: string) => {
    const uuidV4 = uuid();
    const fireStore = doc(db, type, id, "list", uuidV4);

    await setDoc(fireStore, {
      ...value,
    });
  };
  return { getStore, addStore };
};
