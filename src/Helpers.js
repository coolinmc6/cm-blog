export const generateID = () => Math.floor(Math.random()*1000000);


export const findByID = (id, list) => list.find(item => item.id === id)

