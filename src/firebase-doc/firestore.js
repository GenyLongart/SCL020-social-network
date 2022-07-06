import {
  db,
  collection,
  addDoc,
  doc,
  updateDoc,
  auth,
  Timestamp,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  deleteDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
} from "../firebase-doc/firebase.js";
console.log(addDoc);

const creatingNewPost = async (comment) => {
  try {
    const docRef = await addDoc(collection(db, "Publications"), {
      Photo: auth.currentUser.photoURL,
      Name: auth.currentUser.displayName,
      UserId: auth.currentUser.uid,
      Time: Timestamp.fromDate(new Date()),
      Comment: comment,
      PublicationLikes: [],
      LikesSum: 0,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const updatingPublications = (callback) => {
  const q = query(collection(db, 'Publications'), orderBy('Time', 'desc'));
  onSnapshot(q, callback);
};

const getPublication = id => getDoc(doc(db, 'Publications', id));

//Editing publication

const editingComment = async (id, Comment) => {
  const postRef = doc(db, 'Publications', id);
  await updateDoc(postRef, {
    Comment,
  });
};

const likingPub = async (id, UserId) => {
  try {
  const docRef = await doc(db, "Publications", id );
  const hold = await getDoc(docRef);
  if (hold.exists()) {
  let PubLikes = hold.data().PublicationLikes;
  let pubCount = hold.data().LikesSum;
  if (!PubLikes.includes(UserId)){
    await updateDoc(docRef,{
    PublicationLikes: arrayUnion(UserId),
    LikesSum: pubCount + 1,
    });
  } else {
    await updateDoc(docRef, {
      PublicationLikes: arrayRemove(UserId),
      LikesSum: pubCount - 1,
    })
  }
 } 
  } catch (error) {
    console.error("Error adding likes :(");
    throw error.message;
};
};
//   const publicationInfo = getDoc();
//   console.log(publicationInfo);
//   const arrUserLiked = publicationInfo.PublicationLikes;
//   const likeCount = publicationInfo.LikesSum;
//   if (arrUserLiked.includes(UserId)) {
//     await updateDoc(publicationInfo.docRef, {
//       PublicationLikes: arrayRemove(UserId),
//       LikesSum: likeCount - 1,
//     });
//     return true;
//   } else {
//     // arrUserLiked: arrayUnion(userUid);
//     await updateDoc(publicationInfo.docRef, {
//       PublicationLikes: arrayUnion(UserId),
//       LikesSum: likeCount + 1,
//     });
//     return false;
//   }
// };

//Add and remove Likes
/*const addLike = async (id, uid) => {
  await updateDoc(doc(db, 'Publications', id), {
    usersLikes: arrayUnion(id),
  });
};
const removeLike = async (id, uid) => {
  await updateDoc(doc(db, 'Publications', id), {
    usersLikes: arrayRemove(id),
  });
};*/

// Deleting publication
const deletingPublication = (id) => deleteDoc(doc(db, 'Publications', id));


 /*const editingPublication = async (id, editPublication) => {
     await updateDoc(doc(db, 'Publications', id), { Comment: editPublication });
};*/
const editingPublication = async (id, Comment) => {
  const postRef = doc(db, 'Publications', id);
  await updateDoc(postRef, {
    Comment,
  });
};

export { creatingNewPost, updatingPublications, editingPublication, deletingPublication,
getPublication, editingComment, likingPub };
