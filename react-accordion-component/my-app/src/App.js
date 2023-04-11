import './App.css';
import { useState } from 'react';
import Accordion from './Accordian';
// import Info from './Accordian';





function App() {
const [toggle, setToggle] = useState(1)
  if (toggle ===1) {
    return (
      <>
        <Accordion heading={'heading'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
        <p className='info two'>Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae.</p>
        <Accordion heading={'heading 2'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
        <Accordion heading={'heading 3'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
      </>
    );
  } else if (toggle === 2) {
    return (
      <>
        <Accordion heading={'heading '} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />

        <Accordion heading={'heading 2'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
        <p className='info two'> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        <Accordion heading={'heading 3'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
      </>
    )
  } else if (toggle === 3) {
    return (
      <>
        <Accordion heading={'heading '} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
        <Accordion heading={'heading 2'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />

        <Accordion heading={'heading 3'} info=' Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.' />
        <p className='info two'> ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </>
    )
  }

}

export default App;
