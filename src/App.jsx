// App.jsx
import React from 'react';
import { firestore } from './firebase/config';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc as firebaseUpdateDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {
  // getting data
  const handleClick = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'products'));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
      });
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  // sending data
  const addProduct = async (product) => {
    try {
      const productsCollection = collection(firestore, 'products');

      const docRef = await addDoc(productsCollection, product);

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  const newProduct = {
    name: 'Samsung',
    price: 40000,
    type: 'mobile',
  };

  function addData() {
    addProduct(newProduct);
  }

  // deleting doc
  const deleteProduct = async (docId) => {
    try {
      const productDoc = doc(firestore, 'products', docId);

      // Delete the document
      await deleteDoc(productDoc);

      console.log('Document deleted successfully');
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  };

  function deleteItem() {
    deleteProduct('1yoRLsPRM65fFJwFiAKb'); //specify the doc id
  }

  //update doc
  const updateProduct = async (docId, updatedFields) => {
    try {
      const productDoc = doc(firestore, 'products', docId);

      // Update the document
      await firebaseUpdateDoc(productDoc, updatedFields);

      console.log('Document updated successfully');
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  };

  const updatedFields = {
    price: 55000,
  };

  function updateDoc() {
    updateProduct('3Wv371AKSnvf9Qto5IXb', updatedFields);
  }

  // user signup
  function sigupUser() {
    const auth = getAuth();
    const email = 'albin@gmail.com'
    const password = '123456'
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('signed in')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div>
      <button onClick={handleClick}>Get</button>
      <button onClick={addData}>Send</button>
      <button onClick={deleteItem}>Delete</button>
      <button onClick={updateDoc}>Update</button><br />
      <button onClick={sigupUser}>signup</button>
    </div>
  );
}

export default App;
