export default async function ContactPage(){

        const response = await fetch("http://localhost:3001/repos")
        const data = await response.json()


    return(
        <>
        <ul>
            {

                    data.map((repo) =>(

                        <li key={repo.id}>

                        <div>{repo.title}</div>
                        </li>



                    ))



            }

</ul>
        </>
    )
}