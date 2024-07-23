import React, { useState } from 'react'

function TodoList() {
    const[activity,SetActivity]=useState("");
    const[listData,setListData]= useState("");

    function addActivity(){
        //setListData([...listData,activity])
        //console.log(listData)
        setListData((listData)=>{
            const update=[...listData,activity]
            console.log(update)
            SetActivity('');
            return update
        })
    }     
function removeActivity (i){
     const updatedListData = listData.filter((elem,id)=>{
        return i!=id;

     })
         setListData(updatedListData)


    }


  function removeAllActivities() {
    setListData([]); // Clear the list by setting it to an empty array
  }

  return (
   <>
   <div className='container'>
    <div className='header'>TodoList</div>
    <input type='text' placeholder='Add activity' value={activity} onChange={(e)=>SetActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='list-heading'>Here is your list</p>
    {listData!=[] && listData.map((data,i)=>{
        return(
            <>
            <p key={i}>
                <div className='listData'>{data}</div>
                <div className='btn-position'>
                    <button onClick={()=>removeActivity(i)}>Delete</button>
                </div>
            </p>
            </>


        )



    })}
    {listData.length>=1 && <button onClick={removeAllActivities}>Remove all</button>}
    
   </div>
   </>
  )
}

export default TodoList
