// Conditional Rendering Example

// export default function ToDo({task, isDone, time = 0}) {
//   if (isDone) {
//     return (
//       <div className="todo">
//         <h3>Task: {task}</h3>
//         <h4>Status: Completed</h4>
//         <h4>Time Taken: {time} hours</h4>
//       </div>
//     )
//   } else {
//     return (
//       <div className="todo">
//         <h3>Task: {task}</h3>
//         <h4>Status: Pending</h4>
//       </div>
//     )
//   }
// }

// export default function ToDo({task, isDone, time = 0}) {
//   if (isDone === true) {
//     return (
//       <div className="todo">
//         <h3>Task: {task}</h3>
//         <h4>Status: Completed</h4>
//         <h4>Time Taken: {time} hours</h4>
//       </div>
//     )
//   }
//   return (
//     <div className="todo">
//       <h3>Task: {task}</h3>
//       <h4>Status: Pending</h4>
//     </div>
//   )
// }

// Using Ternary Operator for Conditional Rendering

// export default function ToDo({task, isDone, time = 0}) {
//   return isDone ? <li>Task Done : {task}, Time : {time} hours</li> : <li>Pending : {task}</li>
// }

// Using Logical AND (&&) Operator for Conditional Rendering

function Too({task, isDone, time = 0}) {
  return (
    <div className="todo">
      <h3>Task: {task}</h3>
      {isDone && <h4>Status: Completed</h4>}
      {isDone && <h4>Time Taken: {time} hours</h4>}
      {!isDone && <h4>Status: Pending</h4>}
    </div>
  )
}

function tD({isDone, task, time = 0}) {
  return isDone && <li>Task Done : {task}, Time : {time} hours</li>
}

// Using Logical OR (||) Operator for Conditional Rendering

function Tofo({task, isDone, time = 0}) {
  return (
    <div >
      <h3>Task: {task}</h3>
      {isDone || <h4>Status: Pending</h4>}
      {isDone && <h4>Status: Completed</h4>}
      {isDone && <h4>Time Taken: {time} hours</h4>}
    </div>
  )
}

// Use Variable to Hold JSX for Conditional Rendering

export default function ToDo({task, isDone, time = 0}) {
  let status;
  if (isDone) {
    status = (
      <div className="todo">
        <h3>Task: {task}</h3>
        <h4>Status: Completed</h4>
        <h4>Time Taken: {time} hours</h4>
      </div>
    );
  } else {
    status =  <div className="todo">
      <h3>Task: {task}</h3>
      <h4>Status: Pending</h4>
    </div>;
  }
  return status;
}