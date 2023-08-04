export default function BookList() {
   let pageTitle = "Books to Love!";
   let book1 = "https://m.media-amazon.com/images/P/1538714655.01._SCLZZZZZZZ_SX500_.jpg";
   let book2 = "https://d374oxlv7wyffd.cloudfront.net/B091M75X6J/eaef0052/cover.jpeg";
   let book3 = "https://d374oxlv7wyffd.cloudfront.net/B093XTN3B7/f71a100d/cover.jpeg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Silent Wife" />
         <img src={book2} alt="Twenty Years Later" />
         <img src={book3} alt="The Saints of Swallow Hill" />
      </div>      
   );
}