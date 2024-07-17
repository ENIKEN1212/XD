import { create } from 'zustand';
import { doc, getDoc } from 'firebase/firestore'; // Use full Firestore imports
import { db } from './firebase';

export const useUserStore = create((set) => ({
  CurrentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ CurrentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ CurrentUser: docSnap.data(), isLoading: false });
      } else {
        set({ CurrentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      set({ CurrentUser: null, isLoading: false });
    }
  },
  setLoading: (isLoading) => set({ isLoading }),
}));
