import * as React from 'react';
import { useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import Ha from './components/footer'
import Dialog from './components/DialogFoot'
import { useRef } from 'react';
import './components/index.css'
const MapGl = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiYWRvbGZoZWlyIiwiYSI6ImNrNjNwdGU5YjAyeXczbG9keDB6dGc3dWgifQ.sPE1XhdGGPwDsuFl_BPXqQ"
});


function Map() {
  const [drop,setDrop] = useState(false);
  const box = React.useRef();
  // useref可以很方便地保存任何可变值
  const timeoutRef = useRef();

  const DropDown = () => {
    return(
      <div className="drop-down"
      style={{
        position:"absolute",
        top:"20px",
        left:"96px",
        fontSize:"12px",
        backgroundColor:"#fff",
        border:"1px solid #eee",
        display:"none",
      }}
        ref={box}
        onMouseOver={async () => {
          clearTimeout(timeoutRef.current);
        }}
        onMouseOut={async () => {
          fadeAway();
      }}
      >
        <div>下载场景图</div>
        <div>下载摘要图</div>
      </div>
    )
  }
  // 鼠标移出图标外，延时10ms后下拉框消失,当鼠标移入下拉框中时清除定时器
  const fadeAway = () => {
    timeoutRef.current = setTimeout(() => {
      box.current.style.display = 'none'
    }, 10);
  }
  return(
    // 图标放入插槽
    <Dialog
      left={()=>{
        return(
          <>
            <span className="icon iconfont icon-add"></span>
            <span className="icon iconfont icon-add"></span>
            <span className="icon iconfont icon-add"></span>
            <span className="icon iconfont icon-add"
              onMouseOver={() => {
                  // setDrop(true);
                box.current.style.display = 'block';
                clearTimeout(timeoutRef.current);
              }}
              onMouseOut={() => {
                fadeAway();
              }}
            ></span>
            <DropDown></DropDown>
          </>
        )
      }}
      center={()=>{
        return(
          <span className="icon iconfont icon-bofangqiehuan"></span>
        )
      }}
      right={()=>{
        return(
          <>
            <span className="icon iconfont icon-add"></span>
            <span className="icon iconfont icon-add"></span>
            <span style={{
              display:"inline-box",
              width:"39px",
              height:"18px",
              background:"rgba(255,255,255,1)",
              border:"1px solid rgba(77,77,77,1)",
              fontSize:"12px",
              color:"#4D4D4D",
              textAlign:'center'
            }}>50%</span>
            <span className="icon iconfont icon-add"></span>
          </>
        )
      }}
    />
  )
}

export default Map