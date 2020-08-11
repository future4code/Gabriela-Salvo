


let checkAnagram=(s:String, t:String)=>{
s = s.split('').sort().join('');
t = t.split('').sort().join('')

return s===t

}

console.log(checkAnagram("banana", "banana"))


