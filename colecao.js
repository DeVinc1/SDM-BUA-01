let map = new Map();

map.set("nome", "Lewis Hamilton")
map.set("idade", 40)
map.set("altura", 1.74)

console.log(map.get("nome")) 
console.log(map.has(40))

console.log(map.size)

map.forEach((valor, chave) => {
  console.log(`${chave}: ${valor}`)
})

map.clear()
console.log(map.size)