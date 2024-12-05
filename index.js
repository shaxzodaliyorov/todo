const table_body = document.querySelector(".table_body");
const TODO = [
  {
    title: "Bozorga borish",
    isDone: false,
    date: Date(),
  },
];

function renderTodo() {
  let elements = ``;

  TODO.forEach((element, index) => {
    elements += `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
       <td  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >${
         index + 1
       }</td>
         <td  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >${
           element.title
         }</td>
         <td  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
               <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
              <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>
         </td>
    </tr>`;
  });

  table_body.innerHTML = elements;
}

renderTodo();
