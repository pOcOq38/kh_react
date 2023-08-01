function Animal({animal}){
    return(
        <div>
            <p>{animal.name}</p>
            <p>{animal.age}</p>
            <p>{animal.gender}</p>
        </div>
    );

}
function AnimalsList() {
    const animals = [
        {
            id: 1,
            name: "Donkey",
            age: 1,
            gender: "M"

        },
        {
            id: 2,
            name: "Dog",
            age: 3,
            gender: "F"
        }
    ];
    return (
        <div>
           <Animal animal={animals[0]}/>
           <Animal animal={animals[1]}/>
        </div>
    );
}
export default AnimalsList;