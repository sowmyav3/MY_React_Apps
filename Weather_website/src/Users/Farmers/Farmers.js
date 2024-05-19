import React, { useState } from 'react'
import {Box, styled} from '@mui/material';
import farmimg from '../../Assets/bg_Framers.jpg';
import Form from '../../Components/Form';
import Information from '../../Components/Information';
const Component = styled(Box)({
    height:'100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%',
  })
  
  const Image = styled(Box)({
    backgroundImage: `url(${farmimg})`,
    width: '30%',
    height: '90%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
  })

  const  path="farmer";

export default function Farmers() {
    const [result,setResult] = useState({});
    return (
      <Component>
          <Image/>
              <Box style={{width:'80%', height:'90%'}}>
                  <Form setResult={setResult} />
                  <Information result={result} path= {path}/>
              </Box>
      </Component>
    )
}
