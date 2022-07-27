import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useUser } from "./useUser";
function filterDoc(value: string, doc: string) {
  return value === doc;
}
export const useStore = () => {
  const { setList } = useUser();
  const getStore = (type: string, id: string) => {
    const q = query(collection(db, type));
    onSnapshot(q, (querySnapshot) => {
      setList(
        querySnapshot.docs
          .filter((doc) => filterDoc(doc.data().userId.toString(), id))
          .map((doc) => {
            return {
              id: doc.id,
              date: new Date(doc.data().date),
              title: doc.data().title,
              value: doc.data().value,
              userId: doc.data().userId.toString(),
              category: doc.data().category,
            };
          })
      );
    });
  };

  const addStore = async (type: string, value: any, id: string) => {
    const fireStore = collection(db, type);
    await addDoc(fireStore, {
      ...value,
      userId: id,
    });
  };
  return { getStore, addStore };
};
