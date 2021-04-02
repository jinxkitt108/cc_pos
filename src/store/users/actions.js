import { db, auth, timestamp } from "src/boot/firebase";
import { Loading, Notify } from "quasar";
import { firestoreAction } from "vuexfire";

export function addUser({ commit }, payload) {
  Loading.show();
  auth
    .createUser({
      email: payload.email,
      emailVerified: false,
      password: payload.password,
      displayName: payload.name
    })
    .then(user => {
      let userId = user.uid;
      let ref = db.collection("users").doc(userId);
      ref
        .set({
          name: payload.name,
          email: payload.email,
          username: payload.username,
          created_at: timestamp.now()
        })
        .then(res => {
          Loading.hide();
          Notify.create({
            message: "User successfuly added!",
            position: "center",
            type: "positive"
          });
        });
    });
}

export function updateUser({ commit }, payload) {
  Loading.show();
}

export const setUsersRef = firestoreAction(({ bindFirestoreRef }) => {
  return bindFirestoreRef("users", db.collection("users"));
});

// User Authentication
export function handleAuthState({ commit }) {
  auth.onAuthStateChanged(user => {
    if (user) {
    } else {
      console.log("user is not signed in.");
    }
  });
}

export function logIn({ commit }, payload) {
  auth
    .signInWithEmailAndPassword(payload.username, payload.password)
    .then(() => {
      this.$router.push("/admin");
    })
    .catch(error => {
      commit("setLoginError", error);
    });
}

export function logOut() {
  auth.signOut();
  this.$router.replace("/");
}
