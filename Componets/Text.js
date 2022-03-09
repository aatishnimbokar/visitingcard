import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InputLabel,TextField } from "@mui/material";
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import { Resizable, ResizableBox } from 'react-resizable';
import '../Componets/Style.css'
import { green } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { createUndoRedo} from "react-undo-redo";
import { isWidthDown } from "@material-ui/core";




// import Box from '@mui/material/Box';


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "1px", transform: "scale(0.8)" }}
  >
    
  </Box>
);

const card = ()=> (
  
  <React.Fragment style={{backgroundColor:"#f3efef"}}>
    {/* <CardContent>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 6, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {/* <div >
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Full Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Software Development"
        />
        <TextField
         required
          id="outlined-required"
          label="Required"
          // type="password"
          defaultValue="Email/Other"
        />
        <TextField
        required
          id="outlined-required"
          label="Required"
          defaultValue="Phone/Other"
          InputProps={{
            readOnly: false,
          }}
        />
        <TextField
          id="outlined-required"
          label="Required"
          defaultValue="Web/Other"

          type="text"
          InputLabelProps={{
            readOnly: false,
          }}
        />
        <TextField
          id="outlined-required"
          label="Required"
          defaultValue="Mobile/Other"
          helperText="Some important text"
        />        
        <TextField
          id="outlined-required"
          label="Required"
          defaultValue="Mobile/Other"
          helperText="Some important text"
        /> */}
      {/* </div> */}

     
    {/* </Box> */}


    {/* </CardContent> */} 

    
  </React.Fragment>
);

 function Text() {
  const [name,setname]=React.useState('')
  const [desg,setdesg]=React.useState('')
  const [email,setemail]=React.useState('')
  const [web,setweb]=React.useState('')
  const [phone,setphone]=React.useState('')
  const [xyz,setxyz]=React.useState('')


  const [ state,setposition ]=React.useState( {
    activeDrags: 0,
    deltaPosition: {
      x: 0, y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    }
  })

  // let state = {
  //   activeDrags: 0,
  //   deltaPosition: {
  //     x: 0, y: 0
  //   },
  //   controlledPosition: {
  //     x: -400, y: 200
  //   }
  // };

  let handleDrag = (e, ui) => {
    const {x, y} =state.deltaPosition;
    setposition({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  };

  let onStart = () => {
    setposition({activeDrags: ++state.activeDrags});
  };

  let onStop = () => {
    setposition({activeDrags: --state.activeDrags});
  };



 // const [name,setname]=React.useState('')

// Drag and function start....


// Drag and function end ....


const [nameheight,setnameheight]=React.useState({width:200,height:200})
const [undo, redo] = React.useState()
// const { UndoRedoProvider, usePresent, useUndoRedo } = createUndoRedo(reducer)

let isPossible

const deleteClick=(id1,id2)=>
 {
	
  document.getElementById(id1).style.display='none'
  document.getElementById(id2).style.display='none'
			
            // deleteUser(name)
		
		}
	









  return (
    // <Box sx={{ minWidth: 50 }}>
    
      
<div style={{height:"100vh",display:"flex"}}>
  <div style={{display:"flex",flexDirection:"column"}}>
  {/* <ResizableBox width={200} height={200} 
          minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <span>Contents</span>
      </ResizableBox> */}
<div  id='name' style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>
<input onChange={e=>setname(e.target.value)} value={name} type="text" style={{width:"100%",
marginTop:'0%',padding:"14px",height:"fit-content",marginTop:"0px",marginLeft:"25px",marginRight:'5px'
         ,fontSize:"15px", outlineWidth:0,border:"none"}} placeholder="your name" ></input>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon onClick={()=>deleteClick('name','name2')}/>
            </IconButton>
       </div>  
         {/* <div className="toolbar-button client-side-delete"></div> */}

         <div  id='role' style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>

         <input id='role' onChange={e=>setdesg(e.target.value)} value={desg} type="text" style={{width:"100%",
marginTop:'100%',padding:"14px",height:"fit-content",marginTop:"25px",marginLeft:"25px"
         ,fontSize:"15px", outlineWidth:0,border:"none"}} placeholder="your role" ></input>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon onClick={()=>deleteClick('role','role2')}/>
            </IconButton>
            </div>
          <div  id='email' style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>

         <input id="email" onChange={e=>setemail(e.target.value)} value={email} type="text" style={{width:"100%",
marginTop:'0%',padding:"14px",height:"fit-content",marginTop:"25px",marginLeft:"25px"
         ,fontSize:"15px", outlineWidth:0,border:"none"}} placeholder="your email" ></input>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon  onClick={()=>deleteClick('email','email2')}/>
            </IconButton>
          </div>
          <div  id='web' style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>

         <input id='web' onChange={e=>setweb(e.target.value)} value={web} type="text" style={{width:"100%",
marginTop:'0%',padding:"14px",height:"fit-content",marginTop:"25px",marginLeft:"25px"
         ,fontSize:"15px", outlineWidth:0,border:"none"}} placeholder="your phone" ></input>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon onClick={()=>deleteClick('web','web2')} />
            </IconButton>
           </div>

           <div  id='phone' style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>

<input id='phone' onChange={e=>setphone(e.target.value)} value={phone} type="text" style={{width:"100%",
marginTop:'0%',padding:"14px",height:"fit-content",marginTop:"25px",marginLeft:"25px"
         ,fontSize:"15px", outlineWidth:0,border:"none"}} placeholder="your website"  onClick={e=>setphone(e.target.value)} ></input>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon onClick={()=>deleteClick('phone','phone2')}/>
            </IconButton>
          </div>

          <div  id='xyz' style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"25px"}}>

<input id='xyz' onChange={e=>setxyz(e.target.value)} value={xyz} type="text" style={{width:"100%",
marginTop:'0%',padding:"14px",height:"fit-content",marginTop:"25px",marginLeft:"25px"
         ,fontSize:"15px", outlineWidth:0,border:"none"}} placeholder="your desigantion" onClick={e=>setxyz(e.target.value)}  ></input>
          <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <DeleteIcon onClick={()=>deleteClick('xyz','xyz2')}/>
            </IconButton>
           </div>

         </div>
         

      <div
       style={{margin:"auto",marginTop:'102',backgroundColor:'#ffffff',border:"dotted  blue 3px",
       width:window.innerWidth/1.8,height:window.innerWidth/3,marginTop:"30px"}}>
<div id="name2">
 <ResizableBox width={300} height={75} 
          minConstraints={[50, 50]} maxConstraints={[600, 600]}>
<Draggable
        //axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // scale={1}
        // onStart={onStart}
        // onDrag={handleDrag}
        // onStop={onStop}
        >
          <div style={{background:'green',width:'inherit',height:"inherit"}} >
         <input autoComplete="false"  type="text" style={{width:"inherit",height:'inherit'
         ,padding:"14px",paddingLeft:"54px"
         ,fontSize:"30px", outlineWidth:0,border:"none",border:"dotted  blue 3px",width:'inherit',marginBottom:12}} placeholder="your name" onChange={e=>setname(e.target.value)} value={name}></input>
         
</div>
       </Draggable> 
       </ResizableBox>
       </div>
       <div id="role2">

    <ResizableBox width={400} height={75} 
          minConstraints={[50, 50]} maxConstraints={[600, 600]}>
<Draggable
        //axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // scale={1}
        // onStart={onStart}
        // onDrag={handleDrag}
        // onStop={onStop}
        >
         <input type="text" style={{background:"transparent", padding:"10px",fontSize:"30px",
          padding:"14px",paddingLeft:"54px",outlineWidth:0,border:"none",border:"dotted  blue 3px",marginBottom:20,width:"inherit",height:"inherit"}} placeholder="your role in your station" onChange={e=>setdesg(e.target.value)} value={desg}></input>
      </Draggable>
      </ResizableBox>
      </div>
      
        <div style={{display:"flex"}}>
         <div>
         <div id="email2">

           <ResizableBox width={250} height={75} 
          minConstraints={[50, 50]} maxConstraints={[600, 600]}>
<Draggable
        //axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // scale={1}
        // onStart={onStart}
        // onDrag={handleDrag}
        // onStop={onStop}
        >   
         <input type="text" style={{ background:"transparent",padding:"10px",fontSize:"25px", paddingLeft:"54px",outlineWidth:0,border:"none",border:"dotted  blue 3px",marginBottom:5,width:"inherit",height:"inherit"}} onChange={e=>setemail(e.target.value)} value={email} placeholder="your f email" ></input>
         </Draggable>
         </ResizableBox>
         </div>

         <div id="web2">

         <ResizableBox width={300} height={75} 
          minConstraints={[50, 50]} maxConstraints={[600, 600]}>
<Draggable
        //axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // scale={1}
        // onStart={onStart}
        // onDrag={handleDrag}
        // onStop={onStop}
        >  
         <input type="text" style={{ background:"transparent",padding:"14px",fontSize:"25px", paddingLeft:"54px",outlineWidth:0,border:"none",border:"dotted  blue 3px",marginBottom:5,width:"inherit",height:"inherit"} } onChange={e=>setweb(e.target.value)} value={web} placeholder="your website" ></input>
         </Draggable>
         </ResizableBox>
         </div>
         
         <div id="phone2">

         <ResizableBox width={350} height={75} 
          minConstraints={[50, 50]} maxConstraints={[600, 600]}>
<Draggable
        //axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // scale={1}
        // onStart={onStart}
        // onDrag={handleDrag}
        // onStop={onStop}
        >  
         <input type="text" style={{ background:"transparent",padding:"14px",paddingLeft:"54px",fontSize:"25px", outlineWidth:0,border:"none",border:"dotted  blue 3px",width:"inherit",height:"inherit"}} placeholder="your phone"  onChange={e=>setphone(e.target.value)} value={phone}  ></input>

         {/* <button disabled={!undo.isPossible} onClick={() => undo()}>
        Undo
      </button>

      <button disabled={!redo.isPossible} onClick={() => redo()}>
        Redo
      </button> */}




         </Draggable>
         </ResizableBox>
         </div>

         <div id="xyz2">

         <ResizableBox width={360} height={75} 
          minConstraints={[50, 50]} maxConstraints={[600, 600]}>
<Draggable
        //axis="x"
        // handle=".handle"
        // defaultPosition={{x: 0, y: 0}}
        // position={null}
        // grid={[25, 25]}
        // scale={1}
        // onStart={onStart}
        // onDrag={handleDrag}
        // onStop={onStop}
        >
         <input type="text" style={{ background:"transparent",padding:"14px",paddingLeft:"54px",fontSize:"25px", outlineWidth:0,border:"dotted  blue 3px",width:"inherit",height:"inherit"}} placeholder="your xyz" onChange={e=>setxyz(e.target.value)} value={xyz} ></input>
         </Draggable>
         </ResizableBox>
        </div>
         </div>  
         </div>

       </div>
</div>
    // </Box>
  );
}

export default Text;