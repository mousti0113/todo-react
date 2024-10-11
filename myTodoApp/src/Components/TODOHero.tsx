function TODOHero(nums_todos_completati:number,num_totale_todo:number){
return(
    <section>
      <div>
        <p>Task Già fatti</p>
        <p>Non fermarti!!!</p>
      </div>
      <div>
        {nums_todos_completati}/{num_totale_todo}
      </div>
    </section>
  
);
}
export default TODOHero