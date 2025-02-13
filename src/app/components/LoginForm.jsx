"use client"
import React from 'react';

const Login = () => {
  return <section><div style={{width: 391, height: 415, padding: 20, background: 'white', borderRadius: 10, border: '1px #E6E8F0 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 21, display: 'inline-flex'}}>
  <div style={{alignSelf: 'stretch', color: '#001965', fontSize: 24, fontFamily: 'Apis', fontWeight: '400', wordWrap: 'break-word'}}>Username</div>
  <div style={{width: 351, height: 54, position: 'relative'}}>
    <div style={{width: 351, height: 54, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 15, border: '1px #767676 solid'}} />
    <div style={{left: 45, top: 10, position: 'absolute', color: '#7F7F7F', fontSize: 24, fontFamily: 'Apis', fontWeight: '400', wordWrap: 'break-word'}}>PSOH</div>
  </div>
  <div style={{alignSelf: 'stretch', color: '#001965', fontSize: 24, fontFamily: 'Apis', fontWeight: '400', wordWrap: 'break-word'}}>Password</div>
  <div style={{width: 351, height: 54, position: 'relative'}}>
    <div style={{width: 351, height: 54, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 15, border: '1px #767676 solid'}} />
    <div style={{width: 30, height: 30, left: 299, top: 14.50, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
      <img style={{width: 30, height: 30}} src="https://placehold.co/30x30" />
    </div>
    <div style={{width: 80, height: 25, left: 44, top: 14.50, position: 'absolute', color: '#7F7F7F', fontSize: 24, fontFamily: 'Apis', fontWeight: '400', wordWrap: 'break-word'}}>******</div>
  </div>
  <div style={{width: 351, height: 40, position: 'relative', borderRadius: 15}}>
    <div style={{width: 351, height: 40, left: 0, top: 0, position: 'absolute', background: '#001965', borderRadius: 8}} />
    <div style={{width: 109, padding: 10, left: 121, top: -4, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div style={{textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Apis', fontWeight: '500', wordWrap: 'break-word'}}>Sign in</div>
    </div>
  </div>
  <div style={{alignSelf: 'stretch', color: '#001965', fontSize: 20, fontFamily: 'Apis', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Forgot password?</div>
</div></section>
};

export default Login;