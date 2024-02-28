
const List = ({ animalArray }) => {
    return (
        <ul>
            {animalArray.map((animal, index) => (
                <li key={index}>{animal}</li>
            ))}
        </ul>
    );
};

export default List;