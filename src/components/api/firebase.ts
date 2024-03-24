import { database } from "../../app/firebaseConfig";
import { ref, get } from "firebase/database";

export const getData = async () => {
  try {
    const headerRef = ref(database, "project");
    const snapshot = await get(headerRef);
    return snapshot.val();
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};

export const getTravelData = async () => {
  try {
    const headerRef = ref(database, "travel");
    const snapshot = await get(headerRef);
    return snapshot.val();
  } catch (error) {
    console.error("Error getting data:", error);
    throw error;
  }
};
