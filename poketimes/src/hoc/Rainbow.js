export const Rainbow = (WrappedComponent) =>
{
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
    const randomCOlor = colors[Math.floor(Math.random() * 5)]//get random number between 0 and 5
    const className = randomCOlor + '-text'
    return (props) =>
    {
        return (

            <div className={className}>
                <WrappedComponent {...props}></WrappedComponent>
            </div >

        )
    }

}

//export default Rainbow
