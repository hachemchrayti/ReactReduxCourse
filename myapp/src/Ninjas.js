import React, { Component } from 'react'


//const Ninjas = (props) =>
const Ninjas = ({ ninjas }) =>
{
    let color = '';
    const ninjasList = ninjas.map(ninja =>
    {
        return (
            <div className='ninja' key={ninja.id}>
                {color = ninja.name.startsWith('h') ? 'green' : 'red'}
                <div style={{ color: color }}>Name: {ninja.name}</div>
                <div>age: {ninja.age}</div>
                <div>belt: {ninja.belt}</div>
                <p>**********************</p>
            </div>
        )

    })
    return (
        <div>
            {ninjasList}
        </div>
    )
}
export default Ninjas;

// export default class Ninjas extends Component
// {
//     render()
//     {
//         const { ninjas } = this.props
//         const ninjasList = ninjas.map(ninja =>
//         {
//             return (
//                 <div className='ninja' key={ninja.id}>
//                     <div>Name: {ninja.name}</div>
//                     <div>age: {ninja.age}</div>
//                     <div>belt: {ninja.belt}</div>
//                     <p>**********************</p>
//                 </div>
//             ) 
//         })
//         return (
//             <div>
//                 {ninjasList}
//             </div>
//         )
//     }
// }
