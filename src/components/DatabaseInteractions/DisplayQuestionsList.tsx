// function Question({ question, page }: { question: IQuestion; page: IPage }) {
//     const [answerVisibility, setAnswerVisibility] = useState(false);
//     return (
//         <div key={question.id}>
//             <button
//                 onClick={() => {
//                     // switches the lights on or off according to their curr state
//                     answerVisibility
//                         ? setAnswerVisibility(false)
//                         : setAnswerVisibility(true);
//                 }}
//             >
//                 {question.title}
//             </button>
//             {answerVisibility && (
//                 <div>
//                     {page.pageName === "forum" && <p>Answer</p>}
//                     {page.pageName === "faq" && (
//                         <div>
//                             <p className="AnswerParagraph">{question.answer}</p>
//                             <RateButtons question={question} page={page} />
//                         </div>
//                     )}

//                     <hr className="LinesSeparatingAnswers" />
//                 </div>
//             )}
//         </div>
//     );
// }
