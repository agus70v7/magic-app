import React from 'react'


const promesa = new Promise ((res, rej)) => {
  setTimeout(() => {
    res(initialProducts);
  }, 4000);
}

export const ItemListContainer = () => {
  return (
    <>
    <div></div>
    <div>
    <div></div >
    <div></div >
    <div></div >
    <div></div >
    </div>
    </>
  )
}
