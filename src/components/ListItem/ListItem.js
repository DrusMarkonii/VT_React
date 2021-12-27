// import React, {useState} from 'react';
// import './style.css'

// function ListItem() {
//     const [value, setValue] = useState('');

//    function chengeSelect(event) {
//       setValue(event.target.value);
//    }

//    return (
//         <div>
//             <select value={value} onChange={chengeSelect}>
//                 <option value="mouse">Мышь</option>
//                 <option value="cat">Кот</option>
//                 <option value="cheese">Сыр</option>
//                 <option value="milk">Молоко</option>
//             </select>
//              <p>
//                 {value == 'mouse' && 'Вы выбрали Мышь'}
//                 {value == 'cat' && 'Вы выбрали Кота'}
//                 {value == 'cheese' && 'Вы выбрали Сыр'}
//                 {value == 'milk' && 'Вы выбрали Молоко'}
//             </p>
//         </div>
//    )
// }
// export default ListItem