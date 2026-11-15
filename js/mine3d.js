var MINE3D=(()=>{var Mh=Object.defineProperty;var n0=Object.getOwnPropertyDescriptor;var i0=Object.getOwnPropertyNames;var s0=Object.prototype.hasOwnProperty;var r0=(n,t)=>{for(var e in t)Mh(n,e,{get:t[e],enumerable:!0})},o0=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of i0(t))!s0.call(n,s)&&s!==e&&Mh(n,s,{get:()=>t[s],enumerable:!(i=n0(t,s))||i.enumerable});return n};var a0=n=>o0(Mh({},"__esModule",{value:!0}),n);var Mv={};r0(Mv,{GROUPS:()=>gf,H:()=>ce,VIEWS:()=>co,createShow:()=>qm,createStage:()=>Jm,mount:()=>Lm});var ud=0,au=1,fd=2;var cu=1,zc=2,Ci=3,ui=0,vn=1,Mn=2,Zi=0,Bs=1,ra=2,lu=3,hu=4,dd=5,hs=100,pd=101,md=102,gd=103,xd=104,_d=200,yd=201,vd=202,Md=203,ac=204,cc=205,bd=206,Sd=207,Ed=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Id=214,kc=0,Hc=1,Vc=2,Os=3,Gc=4,Wc=5,Xc=6,qc=7,uu=0,Pd=1,Dd=2,Ji=0,Ld=1,Fd=2,Ud=3,Nd=4,Bd=5,Od=6,Yc=7;var fu=300,Xs=301,qs=302,Zc=303,Jc=304,oa=306,lc=1e3,ls=1001,hc=1002,wn=1003,zd=1004;var aa=1005;var fi=1006,$c=1007;var ms=1008;var gi=1009,du=1010,pu=1011,Or=1012,Qc=1013,gs=1014,xi=1015,zr=1016,jc=1017,Kc=1018,kr=1020,mu=35902,gu=35899,xu=1021,_u=1022,Kn=1023,wr=1026,Hr=1027,tl=1028,el=1029,yu=1030,nl=1031;var il=1033,ca=33776,la=33777,ha=33778,ua=33779,sl=35840,rl=35841,ol=35842,al=35843,cl=36196,ll=37492,hl=37496,ul=37808,fl=37809,dl=37810,pl=37811,ml=37812,gl=37813,xl=37814,_l=37815,yl=37816,vl=37817,Ml=37818,bl=37819,Sl=37820,El=37821,wl=36492,Tl=36494,Al=36495,Rl=36283,Cl=36284,Il=36285,Pl=36286;var Co=2300,uc=2301,oc=2302,Jh=2400,$h=2401,Qh=2402;var kd=3200,Dl=3201;var vu=0,Hd=1,$i="",Bn="srgb",zs="srgb-linear",Io="linear",Se="srgb";var Ns=7680;var jh=519,Vd=512,Gd=513,Wd=514,Mu=515,Xd=516,qd=517,Yd=518,Zd=519,Kh=35044;var bu="300 es",hi=2e3,Po=2001;var Xi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lf=1234567,Sr=Math.PI/180,Tr=180/Math.PI;function Vr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function Su(n,t){return(n%t+t)%t}function c0(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function l0(n,t,e){return n!==t?(e-n)/(t-n):0}function To(n,t,e){return(1-e)*n+e*t}function h0(n,t,e,i){return To(n,t,1-Math.exp(-e*i))}function u0(n,t=1){return t-Math.abs(Su(n,t*2)-t)}function f0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function d0(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function p0(n,t){return n+Math.floor(Math.random()*(t-n+1))}function m0(n,t){return n+Math.random()*(t-n)}function g0(n){return n*(.5-Math.random())}function x0(n){n!==void 0&&(Lf=n);let t=Lf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _0(n){return n*Sr}function y0(n){return n*Tr}function v0(n){return(n&n-1)===0&&n!==0}function M0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function b0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function S0(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),d=o((t-i)/2),f=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*d,a*l);break;case"YZY":n.set(c*d,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*d,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*f,a*l);break;case"YXY":n.set(c*f,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function br(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ll={DEG2RAD:Sr,RAD2DEG:Tr,generateUUID:Vr,clamp:oe,euclideanModulo:Su,mapLinear:c0,inverseLerp:l0,lerp:To,damp:h0,pingpong:u0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:x0,degToRad:_0,radToDeg:y0,isPowerOfTwo:v0,ceilPowerOfTwo:M0,floorPowerOfTwo:b0,setQuaternionFromProperEuler:S0,normalize:yn,denormalize:br},Ht=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},di=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let S=Math.sqrt(y),T=Math.atan2(S,p*_);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}let v=a*_;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ff.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ff.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bh.copy(this).projectOnVector(t),this.sub(bh)}reflect(t){return this.sub(bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bh=new O,Ff=new di,te=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],y=s[4],v=s[7],S=s[2],T=s[5],w=s[8];return r[0]=o*x+a*_+c*S,r[3]=o*m+a*y+c*T,r[6]=o*p+a*v+c*w,r[1]=l*x+h*_+u*S,r[4]=l*m+h*y+u*T,r[7]=l*p+h*v+u*w,r[2]=d*x+f*_+g*S,r[5]=d*m+f*y+g*T,r[8]=d*p+f*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sh.makeScale(t,e)),this}rotate(t){return this.premultiply(Sh.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sh=new te;function Eu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Do(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){let n=Do("canvas");return n.style.display="block",n}var Uf={};function Ar(n){n in Uf||(Uf[n]=!0,console.warn(n))}function $d(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Nf=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bf=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){let n={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$i?Io:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[zs]:{primaries:t,whitePoint:i,transfer:Io,toXYZ:Nf,fromXYZ:Bf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:t,whitePoint:i,transfer:Se,toXYZ:Nf,fromXYZ:Bf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}var ge=E0();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lr,fc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lr===void 0&&(lr=Do("canvas")),lr.width=t.width,lr.height=t.height;let s=lr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Do("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wi(e[i]/255)*255):e[i]=Wi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},w0=0,Rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eh(s[o].image)):r.push(Eh(s[o]))}else r=Eh(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Eh(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?fc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var T0=0,wh=new O,Tn=class n extends Xi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=ls,s=ls,r=fi,o=ms,a=Kn,c=gi,l=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Vr(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lc:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lc:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=fu;Tn.DEFAULT_ANISOTROPY=1;var De=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(f+1)/2,S=(p+1)/2,T=(h+d)/4,w=(u+x)/4,A=(g+m)/4;return y>v&&y>S?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=w/i):v>S?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=A/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=w/r,s=A/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dc=class extends Xi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);let s={width:t,height:e,depth:i.depth},r=new Tn(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ai=class extends dc{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Lo=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pc=class extends Tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ai):ai.fromBufferAttribute(r,o),ai.applyMatrix4(t.matrixWorld),this.expandByPoint(ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),La.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),La.copy(i.boundingBox)),La.applyMatrix4(t.matrixWorld),this.union(La)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),Fa.subVectors(this.max,_o),hr.subVectors(t.a,_o),ur.subVectors(t.b,_o),fr.subVectors(t.c,_o),is.subVectors(ur,hr),ss.subVectors(fr,ur),Ds.subVectors(hr,fr);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ds.z,Ds.y,is.z,0,-is.x,ss.z,0,-ss.x,Ds.z,0,-Ds.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ds.y,Ds.x,0];return!Th(e,hr,ur,fr,Fa)||(e=[1,0,0,0,1,0,0,0,1],!Th(e,hr,ur,fr,Fa))?!1:(Ua.crossVectors(is,ss),e=[Ua.x,Ua.y,Ua.z],Th(e,hr,ur,fr,Fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Oi=[new O,new O,new O,new O,new O,new O,new O,new O],ai=new O,La=new $n,hr=new O,ur=new O,fr=new O,is=new O,ss=new O,Ds=new O,_o=new O,Fa=new O,Ua=new O,Ls=new O;function Th(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ls.fromArray(n,r);let a=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),c=t.dot(Ls),l=e.dot(Ls),h=i.dot(Ls);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var A0=new $n,yo=new O,Ah=new O,qi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):A0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);let e=yo.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ah.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(Ah)),this.expandByPoint(yo.copy(t.center).sub(Ah))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zi=new O,Rh=new O,Na=new O,rs=new O,Ch=new O,Ba=new O,Ih=new O,Cr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Rh.copy(t).add(e).multiplyScalar(.5),Na.copy(e).sub(t).normalize(),rs.copy(this.origin).sub(Rh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Na),a=rs.dot(this.direction),c=-rs.dot(Na),l=rs.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Rh).addScaledVector(Na,d),f}intersectSphere(t,e){zi.subVectors(t.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,s,r){Ch.subVectors(e,t),Ba.subVectors(i,t),Ih.crossVectors(Ch,Ba);let o=this.direction.dot(Ih),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rs.subVectors(this.origin,t);let c=a*this.direction.dot(Ba.crossVectors(rs,Ba));if(c<0)return null;let l=a*this.direction.dot(Ch.cross(rs));if(l<0||c+l>o)return null;let h=-a*rs.dot(Ih);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class n{constructor(t,e,i,s,r,o,a,c,l,h,u,d,f,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(t,e,i,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,C0)}lookAt(t,e,i){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),os.crossVectors(i,Un),os.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),os.crossVectors(i,Un)),os.normalize(),Oa.crossVectors(Un,os),s[0]=os.x,s[4]=Oa.x,s[8]=Un.x,s[1]=os.y,s[5]=Oa.y,s[9]=Un.y,s[2]=os.z,s[6]=Oa.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],y=i[7],v=i[11],S=i[15],T=s[0],w=s[4],A=s[8],b=s[12],M=s[1],C=s[5],P=s[9],U=s[13],k=s[2],L=s[6],V=s[10],j=s[14],H=s[3],B=s[7],q=s[11],tt=s[15];return r[0]=o*T+a*M+c*k+l*H,r[4]=o*w+a*C+c*L+l*B,r[8]=o*A+a*P+c*V+l*q,r[12]=o*b+a*U+c*j+l*tt,r[1]=h*T+u*M+d*k+f*H,r[5]=h*w+u*C+d*L+f*B,r[9]=h*A+u*P+d*V+f*q,r[13]=h*b+u*U+d*j+f*tt,r[2]=g*T+x*M+m*k+p*H,r[6]=g*w+x*C+m*L+p*B,r[10]=g*A+x*P+m*V+p*q,r[14]=g*b+x*U+m*j+p*tt,r[3]=_*T+y*M+v*k+S*H,r[7]=_*w+y*C+v*L+S*B,r[11]=_*A+y*P+v*V+S*q,r[15]=_*b+y*U+v*j+S*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+i*l*d+s*a*f-i*c*f)+x*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+i*o*f+r*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],_=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,S=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,T=e*_+i*y+s*v+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/T;return t[0]=_*w,t[1]=(x*d*r-u*m*r-x*s*f+i*m*f+u*s*p-i*d*p)*w,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*p+i*c*p)*w,t[3]=(u*c*r-a*d*r-u*s*l+i*d*l+a*s*f-i*c*f)*w,t[4]=y*w,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*w,t[8]=v*w,t[9]=(g*u*r-h*x*r-g*i*f+e*x*f+h*i*p-e*u*p)*w,t[10]=(o*x*r-g*a*r+g*i*l-e*x*l-o*i*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*f-e*a*f)*w,t[12]=S*w,t[13]=(h*x*s-g*u*s+g*i*d-e*x*d-h*i*m+e*u*m)*w,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*d+e*a*d)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,_=c*l,y=c*h,v=c*u,S=i.x,T=i.y,w=i.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+y)*w,s[9]=(m-_)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=dr.set(s[0],s[1],s[2]).length(),o=dr.set(s[4],s[5],s[6]).length(),a=dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ci.copy(this);let l=1/r,h=1/o,u=1/a;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,e.setFromRotationMatrix(ci),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=hi,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===hi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Po)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=hi,c=!1){let l=this.elements,h=2/(e-t),u=2/(i-s),d=-(e+t)/(e-t),f=-(i+s)/(i-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===hi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Po)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},dr=new O,ci=new Me,R0=new O(0,0,0),C0=new O(1,1,1),os=new O,Oa=new O,Un=new O,Of=new Me,zf=new di,pi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Of.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Of,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zf.setFromEuler(this),this.setFromQuaternion(zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},I0=0,kf=new O,pr=new di,ki=new Me,za=new O,vo=new O,P0=new O,D0=new di,Hf=new O(1,0,0),Vf=new O(0,1,0),Gf=new O(0,0,1),Wf={type:"added"},L0={type:"removed"},mr={type:"childadded",child:null},Ph={type:"childremoved",child:null},cn=class n extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new pi,i=new di,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new te}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(Hf,t)}rotateY(t){return this.rotateOnAxis(Vf,t)}rotateZ(t){return this.rotateOnAxis(Gf,t)}translateOnAxis(t,e){return kf.copy(t).applyQuaternion(this.quaternion),this.position.add(kf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hf,t)}translateY(t){return this.translateOnAxis(Vf,t)}translateZ(t){return this.translateOnAxis(Gf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?za.copy(t):za.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(vo,za,this.up):ki.lookAt(za,vo,this.up),this.quaternion.setFromRotationMatrix(ki),s&&(ki.extractRotation(s.matrixWorld),pr.setFromRotationMatrix(ki),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wf),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(L0),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wf),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,t,P0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vo,D0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};cn.DEFAULT_UP=new O(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=new O,Hi=new O,Dh=new O,Vi=new O,gr=new O,xr=new O,Xf=new O,Lh=new O,Fh=new O,Uh=new O,Nh=new De,Bh=new De,Oh=new De,Gi=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){li.subVectors(s,e),Hi.subVectors(i,e),Dh.subVectors(t,e);let o=li.dot(li),a=li.dot(Hi),c=li.dot(Dh),l=Hi.dot(Hi),h=Hi.dot(Dh),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Nh.setScalar(0),Bh.setScalar(0),Oh.setScalar(0),Nh.fromBufferAttribute(t,e),Bh.fromBufferAttribute(t,i),Oh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nh,r.x),o.addScaledVector(Bh,r.y),o.addScaledVector(Oh,r.z),o}static isFrontFacing(t,e,i,s){return li.subVectors(i,e),Hi.subVectors(t,e),li.cross(Hi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),li.cross(Hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;gr.subVectors(s,i),xr.subVectors(r,i),Lh.subVectors(t,i);let c=gr.dot(Lh),l=xr.dot(Lh);if(c<=0&&l<=0)return e.copy(i);Fh.subVectors(t,s);let h=gr.dot(Fh),u=xr.dot(Fh);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(gr,o);Uh.subVectors(t,r);let f=gr.dot(Uh),g=xr.dot(Uh);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(xr,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Xf.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Xf,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(gr,o).addScaledVector(xr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},ka={h:0,s:0,l:0};function zh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ee=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ge.workingColorSpace){return this.r=t,this.g=e,this.b=i,ge.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ge.workingColorSpace){if(t=Su(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=zh(o,r,t+1/3),this.g=zh(o,r,t),this.b=zh(o,r,t-1/3)}return ge.colorSpaceToWorking(this,s),this}setStyle(t,e=Bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){let i=Qd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return ge.workingToColorSpace(fn.copy(this),t),Math.round(oe(fn.r*255,0,255))*65536+Math.round(oe(fn.g*255,0,255))*256+Math.round(oe(fn.b*255,0,255))}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(fn.copy(this),e);let i=fn.r,s=fn.g,r=fn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=Bn){ge.workingToColorSpace(fn.copy(this),t);let e=fn.r,i=fn.g,s=fn.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(as),this.setHSL(as.h+t,as.s+e,as.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(as),t.getHSL(ka);let i=To(as.h,ka.h,e),s=To(as.s,ka.s,e),r=To(as.l,ka.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ee;ee.NAMES=Qd;var F0=0,Yi=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Bs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=cc,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ac&&(i.blendSrc=this.blendSrc),this.blendDst!==cc&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ue=class extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Qe=new O,Ha=new Ht,U0=0,Ve=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ha.fromBufferAttribute(this,e),Ha.applyMatrix3(t),this.setXY(e,Ha.x,Ha.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=br(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=yn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=br(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=br(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=br(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),i=yn(i,this.array),s=yn(s,this.array),r=yn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kh&&(t.usage=this.usage),t}};var Fo=class extends Ve{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Uo=class extends Ve{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends Ve{constructor(t,e,i){super(new Float32Array(t),e,i)}},N0=0,Zn=new Me,kh=new cn,_r=new O,Nn=new $n,Mo=new $n,rn=new O,qe=class n extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eu(t)?Uo:Fo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,i){return Zn.makeTranslation(t,e,i),this.applyMatrix4(Zn),this}scale(t,e,i){return Zn.makeScale(t,e,i),this.applyMatrix4(Zn),this}lookAt(t){return kh.lookAt(t),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Nn.min,Mo.min),Nn.expandByPoint(rn),rn.addVectors(Nn.max,Mo.max),Nn.expandByPoint(rn)):(Nn.expandByPoint(Mo.min),Nn.expandByPoint(Mo.max))}Nn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(_r.fromBufferAttribute(t,l),rn.add(_r)),s=Math.max(s,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<i.count;A++)a[A]=new O,c[A]=new O;let l=new O,h=new O,u=new O,d=new Ht,f=new Ht,g=new Ht,x=new O,m=new O;function p(A,b,M){l.fromBufferAttribute(i,A),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[A].add(x),a[b].add(x),a[M].add(x),c[A].add(m),c[b].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let A=0,b=_.length;A<b;++A){let M=_[A],C=M.start,P=M.count;for(let U=C,k=C+P;U<k;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let y=new O,v=new O,S=new O,T=new O;function w(A){S.fromBufferAttribute(s,A),T.copy(S);let b=a[A];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(T,b);let C=v.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,C)}for(let A=0,b=_.length;A<b;++A){let M=_[A],C=M.start,P=M.count;for(let U=C,k=C+P;U<k;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,h=new O,u=new O;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Ve(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qf=new Me,Fs=new Cr,Va=new qi,Yf=new O,Ga=new O,Wa=new O,Xa=new O,Hh=new O,qa=new O,Zf=new O,Ya=new O,Kt=class extends cn{constructor(t=new qe,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Hh.fromBufferAttribute(u,t),o?qa.addScaledVector(Hh,h):qa.addScaledVector(Hh.sub(e),h))}e.add(qa)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Va.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Va,Yf)===null||Fs.origin.distanceToSquared(Yf)>(t.far-t.near)**2))&&(qf.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(qf),!(i.boundingBox!==null&&Fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=y;v<S;v+=3){let T=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);s=Za(this,p,t,i,l,h,u,T,w,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Za(this,o,t,i,l,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=y;v<S;v+=3){let T=v,w=v+1,A=v+2;s=Za(this,p,t,i,l,h,u,T,w,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,v=m+2;s=Za(this,o,t,i,l,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function B0(n,t,e,i,s,r,o,a){let c;if(t.side===vn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ui,a),c===null)return null;Ya.copy(a),Ya.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Ya);return l<e.near||l>e.far?null:{distance:l,point:Ya.clone(),object:n}}function Za(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Ga),n.getVertexPosition(c,Wa),n.getVertexPosition(l,Xa);let h=B0(n,t,e,i,Ga,Wa,Xa,Zf);if(h){let u=new O;Gi.getBarycoord(Zf,Ga,Wa,Xa,u),s&&(h.uv=Gi.getInterpolatedAttribute(s,a,c,l,u,new Ht)),r&&(h.uv1=Gi.getInterpolatedAttribute(r,a,c,l,u,new Ht)),o&&(h.normal=Gi.getInterpolatedAttribute(o,a,c,l,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new O,materialIndex:0};Gi.getNormal(Ga,Wa,Xa,d.normal),h.face=d,h.barycoord=u}return h}var Qn=class n extends qe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(x,m,p,_,y,v,S,T,w,A,b){let M=v/w,C=S/A,P=v/2,U=S/2,k=T/2,L=w+1,V=A+1,j=0,H=0,B=new O;for(let q=0;q<V;q++){let tt=q*C-U;for(let W=0;W<L;W++){let Q=W*M-P;B[x]=Q*_,B[m]=tt*y,B[p]=k,l.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=T>0?1:-1,h.push(B.x,B.y,B.z),u.push(W/w),u.push(1-q/A),j+=1}}for(let q=0;q<A;q++)for(let tt=0;tt<w;tt++){let W=d+tt+L*q,Q=d+tt+L*(q+1),rt=d+(tt+1)+L*(q+1),nt=d+(tt+1)+L*q;c.push(W,Q,nt),c.push(Q,rt,nt),H+=6}a.addGroup(f,H,b),f+=H,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pn(n){let t={};for(let e=0;e<n.length;e++){let i=Ys(n[e]);for(let s in i)t[s]=i[s]}return t}function O0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var jd={clone:Ys,merge:pn},z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=k0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=O0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},No=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},cs=new O,Jf=new Ht,$f=new Ht,dn=class extends No{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cs.x,cs.y).multiplyScalar(-t/cs.z),cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cs.x,cs.y).multiplyScalar(-t/cs.z)}getViewSize(t,e){return this.getViewBounds(t,Jf,$f),e.subVectors($f,Jf)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yr=-90,vr=1,mc=class extends cn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(yr,vr,t,e);s.layers=this.layers,this.add(s);let r=new dn(yr,vr,t,e);r.layers=this.layers,this.add(r);let o=new dn(yr,vr,t,e);o.layers=this.layers,this.add(o);let a=new dn(yr,vr,t,e);a.layers=this.layers,this.add(a);let c=new dn(yr,vr,t,e);c.layers=this.layers,this.add(c);let l=new dn(yr,vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===hi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bo=class extends Tn{constructor(t=[],e=Xs,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gc=class extends Ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qn(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Zi});r.uniforms.tEquirect.value=e;let o=new Kt(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=fi),new mc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},ye=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Oo=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var xc=class extends Tn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=wn,h=wn,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zo=class extends Ve{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Mr=new Me,Qf=new Me,Ja=[],jf=new $n,V0=new Me,bo=new Kt,So=new qi,ko=class extends Kt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,V0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),jf.copy(t.boundingBox).applyMatrix4(Mr),this.boundingBox.union(jf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Mr),So.copy(t.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(So)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),So.copy(this.boundingSphere),So.applyMatrix4(i),t.ray.intersectsSphere(So)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),Qf.multiplyMatrices(i,Mr),bo.matrixWorld=Qf,bo.raycast(t,Ja);for(let o=0,a=Ja.length;o<a;o++){let c=Ja[o];c.instanceId=r,c.object=this,e.push(c)}Ja.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xc(new Float32Array(s*this.count),s,this.count,tl,xi));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vh=new O,G0=new O,W0=new te,Jn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Vh.subVectors(i,e).cross(G0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Vh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||W0.getNormalMatrix(t),s=this.coplanarPoint(Vh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new qi,X0=new Ht(.5,.5),$a=new O,Dr=class{constructor(t=new Jn,e=new Jn,i=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=hi,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],y=r[13],v=r[14],S=r[15];if(s[0].setComponents(l-o,f-h,p-g,S-_).normalize(),s[1].setComponents(l+o,f+h,p+g,S+_).normalize(),s[2].setComponents(l+a,f+u,p+x,S+y).normalize(),s[3].setComponents(l-a,f-u,p-x,S-y).normalize(),i)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,f-d,p-m,S-v).normalize();else if(s[4].setComponents(l-c,f-d,p-m,S-v).normalize(),e===hi)s[5].setComponents(l+c,f+d,p+m,S+v).normalize();else if(e===Po)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);let e=X0.distanceTo(t.center);return Us.radius=.7071067811865476+e,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if($a.x=s.normal.x>0?t.max.x:t.min.x,$a.y=s.normal.y>0?t.max.y:t.min.y,$a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},_c=new O,yc=new O,Kf=new Me,Eo=new Cr,Qa=new qi,Gh=new O,td=new O,vc=class extends cn{constructor(t=new qe,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)_c.fromBufferAttribute(e,s-1),yc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_c.distanceTo(yc);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,t.ray.intersectsSphere(Qa)===!1)return;Kf.copy(s).invert(),Eo.copy(t.ray).applyMatrix4(Kf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),y=ja(this,t,Eo,c,p,_,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ja(this,t,Eo,c,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=l){let p=ja(this,t,Eo,c,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=ja(this,t,Eo,c,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ja(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(_c.fromBufferAttribute(a,s),yc.fromBufferAttribute(a,r),e.distanceSqToSegment(_c,yc,Gh,td)>i)return;Gh.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Gh);if(!(l<t.near||l>t.far))return{distance:l,point:td.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var ed=new O,nd=new O,Ho=class extends vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)ed.fromBufferAttribute(e,s),nd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ed.distanceTo(nd);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vo=class extends Tn{constructor(t,e,i=gs,s,r,o,a=wn,c=wn,l,h=wr,u=1){if(h!==wr&&h!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Go=class extends Tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Wo=class n extends qe{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=i*2+r,x=s+1,m=new O,p=new O;for(let _=0;_<=g;_++){let y=0,v=0,S=0,T=0;if(_<=i){let b=_/i,M=b*Math.PI/2;v=-h-t*Math.cos(M),S=t*Math.sin(M),T=-t*Math.cos(M),y=b*u}else if(_<=i+r){let b=(_-i)/r;v=-h+b*e,S=t,T=0,y=u+b*d}else{let b=(_-i-r)/i,M=b*Math.PI/2;v=h+t*Math.sin(M),S=t*Math.cos(M),T=t*Math.sin(M),y=u+d+b*u}let w=Math.max(0,Math.min(1,y/f)),A=0;_===0?A=.5/s:_===g&&(A=-.5/s);for(let b=0;b<=s;b++){let M=b/s,C=M*Math.PI*2,P=Math.sin(C),U=Math.cos(C);p.x=-S*U,p.y=v,p.z=S*P,a.push(p.x,p.y,p.z),m.set(-S*U,T,S*P),m.normalize(),c.push(m.x,m.y,m.z),l.push(M+A,w)}if(_>0){let b=(_-1)*x;for(let M=0;M<s;M++){let C=b+M,P=b+M+1,U=_*x+M,k=_*x+M+1;o.push(C,P,U),o.push(P,k,U)}}}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ks=class n extends qe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new O,h=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=i+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ri=class n extends qe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function _(){let v=new O,S=new O,T=0,w=(e-t)/i;for(let A=0;A<=r;A++){let b=[],M=A/r,C=M*(e-t)+t;for(let P=0;P<=s;P++){let U=P/s,k=U*c+a,L=Math.sin(k),V=Math.cos(k);S.x=C*L,S.y=-M*i+m,S.z=C*V,u.push(S.x,S.y,S.z),v.set(L,w,V).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-M),b.push(g++)}x.push(b)}for(let A=0;A<s;A++)for(let b=0;b<r;b++){let M=x[b][A],C=x[b+1][A],P=x[b+1][A+1],U=x[b][A+1];(t>0||b!==0)&&(h.push(M,C,U),T+=3),(e>0||b!==r-1)&&(h.push(C,P,U),T+=3)}l.addGroup(p,T,0),p+=T}function y(v){let S=g,T=new Ht,w=new O,A=0,b=v===!0?t:e,M=v===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let C=g;for(let P=0;P<=s;P++){let k=P/s*c+a,L=Math.cos(k),V=Math.sin(k);w.x=b*V,w.y=m*M,w.z=b*L,u.push(w.x,w.y,w.z),d.push(0,M,0),T.x=L*.5+.5,T.y=V*.5*M+.5,f.push(T.x,T.y),g++}for(let P=0;P<s;P++){let U=S+P,k=C+P;v===!0?h.push(k,k+1,U):h.push(k+1,k,U),A+=3}l.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},us=class n extends Ri{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mc=class n extends qe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let y=new O,v=new O,S=new O;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],v),f(e[T+2],S),c(y,v,S,_)}function c(_,y,v,S){let T=S+1,w=[];for(let A=0;A<=T;A++){w[A]=[];let b=_.clone().lerp(v,A/T),M=y.clone().lerp(v,A/T),C=T-A;for(let P=0;P<=C;P++)P===0&&A===T?w[A][P]=b:w[A][P]=b.clone().lerp(M,P/C)}for(let A=0;A<T;A++)for(let b=0;b<2*(T-A)-1;b++){let M=Math.floor(b/2);b%2===0?(d(w[A][M+1]),d(w[A+1][M]),d(w[A][M])):(d(w[A][M+1]),d(w[A+1][M+1]),d(w[A+1][M]))}}function l(_){let y=new O;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new O;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,S=p(_)/Math.PI+.5;o.push(v,1-S)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){let y=o[_+0],v=o[_+2],S=o[_+4],T=Math.max(y,v,S),w=Math.min(y,v,S);T>.9&&w<.1&&(y<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let _=new O,y=new O,v=new O,S=new O,T=new Ht,w=new Ht,A=new Ht;for(let b=0,M=0;b<r.length;b+=9,M+=6){_.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),T.set(o[M+0],o[M+1]),w.set(o[M+2],o[M+3]),A.set(o[M+4],o[M+5]),S.copy(_).add(y).add(v).divideScalar(3);let C=m(S);x(T,M+0,_,C),x(w,M+2,y,C),x(A,M+4,v,C)}}function x(_,y,v,S){S<0&&_.x===1&&(o[y]=_.x-1),v.x===0&&v.z===0&&(o[y]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Ka=new O,tc=new O,Wh=new O,ec=new Gi,Xo=class extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(Sr*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);let{a:x,b:m,c:p}=ec;if(x.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),ec.getNormal(Wh),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){let y=(_+1)%3,v=u[_],S=u[y],T=ec[h[_]],w=ec[h[y]],A=`${v}_${S}`,b=`${S}_${v}`;b in d&&d[b]?(Wh.dot(d[b].normal)<=r&&(f.push(T.x,T.y,T.z),f.push(w.x,w.y,w.z)),d[b]=null):A in d||(d[A]={index0:l[_],index1:l[y],normal:Wh.clone()})}}for(let g in d)if(d[g]){let{index0:x,index1:m}=d[g];Ka.fromBufferAttribute(a,x),tc.fromBufferAttribute(a,m),f.push(Ka.x,Ka.y,Ka.z),f.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new de(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ht:new O);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,s=[],r=[],o=[],a=new O,c=new Me;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qo=class extends An{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ht){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},bc=class extends qo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tu(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var nc=new O,Xh=new Tu,qh=new Tu,Yh=new Tu,Hs=class extends An{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(nc.subVectors(s[0],s[1]).add(s[0]),l=nc);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(nc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=nc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Xh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),qh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Yh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Xh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),qh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Yh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Xh.calc(c),qh.calc(c),Yh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function id(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function q0(n,t){let e=1-n;return e*e*t}function Y0(n,t){return 2*(1-n)*n*t}function Z0(n,t){return n*n*t}function Ao(n,t,e,i){return q0(n,t)+Y0(n,e)+Z0(n,i)}function J0(n,t){let e=1-n;return e*e*e*t}function $0(n,t){let e=1-n;return 3*e*e*n*t}function Q0(n,t){return 3*(1-n)*n*n*t}function j0(n,t){return n*n*n*t}function Ro(n,t,e,i,s){return J0(n,t)+$0(n,e)+Q0(n,i)+j0(n,s)}var Sc=class extends An{constructor(t=new Ht,e=new Ht,i=new Ht,s=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Ht){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ro(t,s.x,r.x,o.x,a.x),Ro(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ec=class extends An{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ro(t,s.x,r.x,o.x,a.x),Ro(t,s.y,r.y,o.y,a.y),Ro(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wc=class extends An{constructor(t=new Ht,e=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends An{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tc=class extends An{constructor(t=new Ht,e=new Ht,i=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Ht){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ao(t,s.x,r.x,o.x),Ao(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yo=class extends An{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Ao(t,s.x,r.x,o.x),Ao(t,s.y,r.y,o.y),Ao(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ht){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(id(a,c.x,l.x,h.x,u.x),id(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new Ht().fromArray(s))}return this}},K0=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Hs,CubicBezierCurve:Sc,CubicBezierCurve3:Ec,EllipseCurve:qo,LineCurve:wc,LineCurve3:Fr,QuadraticBezierCurve:Tc,QuadraticBezierCurve3:Yo,SplineCurve:Ac});function t1(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Kd(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=r1(n,t,r,e)),n.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=n[d],g=n[d+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Zo(r,o,e,a,c,l,0),o}function Kd(n,t,e,i,s){let r;if(s===g1(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=sd(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=sd(o/i|0,n[o],n[o+1],r);return r&&Ur(r,r.next)&&($o(r),r=r.next),r}function Vs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ur(e,e.next)||He(e.prev,e,e.next)===0)){if($o(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Zo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&h1(n,i,s,r);let a=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?n1(n,i,s,r):e1(n)){t.push(c.i,n.i,l.i),$o(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=i1(Vs(n),t),Zo(n,t,e,i,s,r,2)):o===2&&s1(n,t,e,i,s,r):Zo(Vs(n),t,e,i,s,r,1);break}}}function e1(n){let t=n.prev,e=n,i=n.next;if(He(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&wo(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function n1(n,t,e,i){let s=n.prev,r=n,o=n.next;if(He(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),g=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),p=tu(f,g,t,e,i),_=tu(x,m,t,e,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&wo(a,h,c,u,l,d,y.x,y.y)&&He(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&wo(a,h,c,u,l,d,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&wo(a,h,c,u,l,d,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&wo(a,h,c,u,l,d,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function i1(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ur(i,s)&&ep(i,e,e.next,s)&&Jo(i,s)&&Jo(s,i)&&(t.push(i.i,e.i,s.i),$o(e),$o(e.next),e=n=s),e=e.next}while(e!==n);return Vs(e)}function s1(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&d1(o,a)){let c=np(o,a);o=Vs(o,o.next),c=Vs(c,c.next),Zo(o,t,e,i,s,r,0),Zo(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function r1(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Kd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(f1(l))}s.sort(o1);for(let r=0;r<s.length;r++)e=a1(s[r],e);return e}function o1(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function a1(n,t){let e=c1(n,t);if(!e)return t;let i=np(e,n);return Vs(i,i.next),Vs(e,e.next)}function c1(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Ur(n,e))return e;do{if(Ur(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&tp(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);Jo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&l1(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function l1(n,t){return He(n.prev,n,t.prev)<0&&He(t.next,n,n.next)<0}function h1(n,t,e,i){let s=n;do s.z===0&&(s.z=tu(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,u1(s)}function u1(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function tu(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function f1(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function tp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function wo(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&tp(n,t,e,i,s,r,o,a)}function d1(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!p1(n,t)&&(Jo(n,t)&&Jo(t,n)&&m1(n,t)&&(He(n.prev,n,t.prev)||He(n,t.prev,t))||Ur(n,t)&&He(n.prev,n,n.next)>0&&He(t.prev,t,t.next)>0)}function He(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ur(n,t){return n.x===t.x&&n.y===t.y}function ep(n,t,e,i){let s=sc(He(n,t,e)),r=sc(He(n,t,i)),o=sc(He(e,i,n)),a=sc(He(e,i,t));return!!(s!==r&&o!==a||s===0&&ic(n,e,t)||r===0&&ic(n,i,t)||o===0&&ic(e,n,i)||a===0&&ic(e,t,i))}function ic(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function sc(n){return n>0?1:n<0?-1:0}function p1(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ep(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Jo(n,t){return He(n.prev,n,n.next)<0?He(n,t,n.next)>=0&&He(n,n.prev,t)>=0:He(n,t,n.prev)<0||He(n,n.next,t)<0}function m1(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function np(n,t){let e=eu(n.i,n.x,n.y),i=eu(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function sd(n,t,e,i){let s=eu(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function $o(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eu(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g1(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var nu=class{static triangulate(t,e,i=2){return t1(t,e,i)}},Qo=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];rd(t),od(i,t);let o=t.length;e.forEach(rd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,od(i,e[c]);let a=nu.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function rd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function od(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var mi=class n extends Mc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Gs=class n extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-o;for(let y=0;y<l;y++){let v=y*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){let y=_+l*p,v=_+l*(p+1),S=_+1+l*(p+1),T=_+1+l*p;f.push(y,v,T),f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},fs=class n extends qe{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new O,g=new Ht;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let _=p+m,y=_,v=_+i+1,S=_+i+2,T=_+1;a.push(y,v,T),a.push(v,S,T)}}this.setIndex(a),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var jo=class n extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new O,d=new O,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let _=[],y=p/i,v=0;p===0&&o===0?v=.5/e:p===i&&c===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let T=S/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-y),_.push(l++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){let y=h[p][_+1],v=h[p][_],S=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&f.push(y,v,T),(p!==i-1||c<Math.PI)&&f.push(v,S,T)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nr=class n extends qe{constructor(t=new Yo(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new O,c=new O,l=new Ht,h=new O,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),p()}function m(y){h=t.getPointAt(y/e,h);let v=o.normals[y],S=o.binormals[y];for(let T=0;T<=s;T++){let w=T/s*Math.PI*2,A=Math.sin(w),b=-Math.cos(w);c.x=b*v.x+A*S.x,c.y=b*v.y+A*S.y,c.z=b*v.z+A*S.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){let S=(s+1)*(y-1)+(v-1),T=(s+1)*y+(v-1),w=(s+1)*y+v,A=(s+1)*(y-1)+v;g.push(S,T,A),g.push(T,w,A)}}function _(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new K0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var jn=class extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Br=class extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Rc=class extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rc(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function x1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $h:r=t,a=2*e-i;break;case Qh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $h:o=t,c=2*i-e;break;case Qh:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+_*o[l+S]+y*o[c+S]+v*o[u+S];return r}},Ic=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Pc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},zn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rc(e,this.TimeBufferType),this.values=rc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:rc(t.times,Array),values:rc(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Pc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Cc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Co:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case oc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Co;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return oc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&x1(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===oc,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};zn.prototype.ValueTypeName="";zn.prototype.TimeBufferType=Float32Array;zn.prototype.ValueBufferType=Float32Array;zn.prototype.DefaultInterpolation=uc;var ds=class extends zn{constructor(t,e,i){super(t,e,i)}};ds.prototype.ValueTypeName="bool";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Co;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Dc=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Dc.prototype.ValueTypeName="color";var Lc=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Lc.prototype.ValueTypeName="number";var Fc=class extends Ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)di.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ko=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}};Ko.prototype.ValueTypeName="quaternion";Ko.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends zn{constructor(t,e,i){super(t,e,i)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Co;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends zn{constructor(t,e,i,s){super(t,e,i,s)}};Uc.prototype.ValueTypeName="vector";var Nc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ip=new Nc,Bc=class{constructor(t){this.manager=t!==void 0?t:ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var ta=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ea=class extends ta{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Zh=new Me,ad=new O,cd=new O,iu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ad.setFromMatrixPosition(t.matrixWorld),e.position.copy(ad),cd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cd),e.updateMatrixWorld(),Zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var na=class extends No{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},su=class extends iu{constructor(){super(new na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends ta{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new su}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Oc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Au="\\[\\]\\.:\\/",_1=new RegExp("["+Au+"]","g"),Ru="[^"+Au+"]",y1="[^"+Au.replace("\\.","")+"]",v1=/((?:WC+[\/:])*)/.source.replace("WC",Ru),M1=/(WCOD+)?/.source.replace("WCOD",y1),b1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ru),S1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ru),E1=new RegExp("^"+v1+M1+b1+S1+"$"),w1=["material","materials","bones","map"],ru=class{constructor(t,e,i){let s=i||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Fe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_1,"")}static parseTrackName(t){let e=E1.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);w1.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=ru;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sv=new Float32Array(1);var ld=new Me,sa=class{constructor(t,e,i=0,s=1/0){this.ray=new Cr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ld.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(t,e=!0,i=[]){return ou(t,this,i,e),i.sort(hd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ou(t[s],this,i,e);return i.sort(hd),i}};function hd(n,t){return n.distance-t.distance}function ou(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)ou(r[o],t,e,!0)}}function Cu(n,t,e,i){let s=T1(i);switch(e){case xu:return n*t;case tl:return n*t/s.components*s.byteLength;case el:return n*t/s.components*s.byteLength;case yu:return n*t*2/s.components*s.byteLength;case nl:return n*t*2/s.components*s.byteLength;case _u:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case il:return n*t*4/s.components*s.byteLength;case ca:case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rl:case al:return Math.max(n,16)*Math.max(t,8)/4;case sl:case ol:return Math.max(n,8)*Math.max(t,8)/2;case cl:case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ul:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case dl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case gl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case yl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ml:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Sl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case El:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case wl:case Tl:case Al:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rl:case Cl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Il:case Pl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function T1(n){switch(n){case gi:case du:return{byteLength:1,components:1};case Or:case pu:case zr:return{byteLength:2,components:1};case jc:case Kc:return{byteLength:2,components:4};case gs:case Qc:case xi:return{byteLength:4,components:1};case mu:case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ap(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function R1(n){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,N1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,V1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,j1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,K1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rg="gl_FragColor = linearToOutputTexel( gl_FragColor );",og=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ag=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ag=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Og=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ex=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,px=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ux=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$x=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:C1,alphahash_pars_fragment:I1,alphamap_fragment:P1,alphamap_pars_fragment:D1,alphatest_fragment:L1,alphatest_pars_fragment:F1,aomap_fragment:U1,aomap_pars_fragment:N1,batching_pars_vertex:B1,batching_vertex:O1,begin_vertex:z1,beginnormal_vertex:k1,bsdfs:H1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:q1,clipping_planes_vertex:Y1,color_fragment:Z1,color_pars_fragment:J1,color_pars_vertex:$1,color_vertex:Q1,common:j1,cube_uv_reflection_fragment:K1,defaultnormal_vertex:tg,displacementmap_pars_vertex:eg,displacementmap_vertex:ng,emissivemap_fragment:ig,emissivemap_pars_fragment:sg,colorspace_fragment:rg,colorspace_pars_fragment:og,envmap_fragment:ag,envmap_common_pars_fragment:cg,envmap_pars_fragment:lg,envmap_pars_vertex:hg,envmap_physical_pars_fragment:Mg,envmap_vertex:ug,fog_vertex:fg,fog_pars_vertex:dg,fog_fragment:pg,fog_pars_fragment:mg,gradientmap_pars_fragment:gg,lightmap_pars_fragment:xg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:yg,lights_pars_begin:vg,lights_toon_fragment:bg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Eg,lights_phong_pars_fragment:wg,lights_physical_fragment:Tg,lights_physical_pars_fragment:Ag,lights_fragment_begin:Rg,lights_fragment_maps:Cg,lights_fragment_end:Ig,logdepthbuf_fragment:Pg,logdepthbuf_pars_fragment:Dg,logdepthbuf_pars_vertex:Lg,logdepthbuf_vertex:Fg,map_fragment:Ug,map_pars_fragment:Ng,map_particle_fragment:Bg,map_particle_pars_fragment:Og,metalnessmap_fragment:zg,metalnessmap_pars_fragment:kg,morphinstance_vertex:Hg,morphcolor_vertex:Vg,morphnormal_vertex:Gg,morphtarget_pars_vertex:Wg,morphtarget_vertex:Xg,normal_fragment_begin:qg,normal_fragment_maps:Yg,normal_pars_fragment:Zg,normal_pars_vertex:Jg,normal_vertex:$g,normalmap_pars_fragment:Qg,clearcoat_normal_fragment_begin:jg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:tx,iridescence_pars_fragment:ex,opaque_fragment:nx,packing:ix,premultiplied_alpha_fragment:sx,project_vertex:rx,dithering_fragment:ox,dithering_pars_fragment:ax,roughnessmap_fragment:cx,roughnessmap_pars_fragment:lx,shadowmap_pars_fragment:hx,shadowmap_pars_vertex:ux,shadowmap_vertex:fx,shadowmask_pars_fragment:dx,skinbase_vertex:px,skinning_pars_vertex:mx,skinning_vertex:gx,skinnormal_vertex:xx,specularmap_fragment:_x,specularmap_pars_fragment:yx,tonemapping_fragment:vx,tonemapping_pars_fragment:Mx,transmission_fragment:bx,transmission_pars_fragment:Sx,uv_pars_fragment:Ex,uv_pars_vertex:wx,uv_vertex:Tx,worldpos_vertex:Ax,background_vert:Rx,background_frag:Cx,backgroundCube_vert:Ix,backgroundCube_frag:Px,cube_vert:Dx,cube_frag:Lx,depth_vert:Fx,depth_frag:Ux,distanceRGBA_vert:Nx,distanceRGBA_frag:Bx,equirect_vert:Ox,equirect_frag:zx,linedashed_vert:kx,linedashed_frag:Hx,meshbasic_vert:Vx,meshbasic_frag:Gx,meshlambert_vert:Wx,meshlambert_frag:Xx,meshmatcap_vert:qx,meshmatcap_frag:Yx,meshnormal_vert:Zx,meshnormal_frag:Jx,meshphong_vert:$x,meshphong_frag:Qx,meshphysical_vert:jx,meshphysical_frag:Kx,meshtoon_vert:t_,meshtoon_frag:e_,points_vert:n_,points_frag:i_,shadow_vert:s_,shadow_frag:r_,sprite_vert:o_,sprite_frag:a_},At={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Ii={basic:{uniforms:pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ee(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:pn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:pn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:pn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new ee(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:pn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:pn([At.points,At.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:pn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:pn([At.common,At.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:pn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:pn([At.sprite,At.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:pn([At.common,At.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:pn([At.lights,At.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};Ii.physical={uniforms:pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Fl={r:0,b:0,g:0},Zs=new pi,c_=new Me;function l_(n,t,e,i,s,r,o){let a=new ee(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1,S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,v){let S=g(v);S&&(S.isCubeTexture||S.mapping===oa)?(h===void 0&&(h=new Kt(new Qn(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ys(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zs.copy(v.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c_.makeRotationFromEuler(Zs)),h.material.toneMapped=ge.getTransfer(S.colorSpace)!==Se,(u!==S||d!==S.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Kt(new Gs(2,2),new On({name:"BackgroundMaterial",uniforms:Ys(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ge.getTransfer(S.colorSpace)!==Se,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(Fl,wu(n)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,v,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:x,addToRenderList:m,dispose:_}}function h_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,o=!1;function a(M,C,P,U,k){let L=!1,V=u(U,P,C);r!==V&&(r=V,l(r.object)),L=f(M,U,P,k),L&&g(M,U,P,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(L||o)&&(o=!1,v(M,C,P,U),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return n.createVertexArray()}function l(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,C,P){let U=P.wireframe===!0,k=i[M.id];k===void 0&&(k={},i[M.id]=k);let L=k[C.id];L===void 0&&(L={},k[C.id]=L);let V=L[U];return V===void 0&&(V=d(c()),L[U]=V),V}function d(M){let C=[],P=[],U=[];for(let k=0;k<e;k++)C[k]=0,P[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:U,object:M,attributes:{},index:null}}function f(M,C,P,U){let k=r.attributes,L=C.attributes,V=0,j=P.getAttributes();for(let H in j)if(j[H].location>=0){let q=k[H],tt=L[H];if(tt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),q===void 0||q.attribute!==tt||tt&&q.data!==tt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(M,C,P,U){let k={},L=C.attributes,V=0,j=P.getAttributes();for(let H in j)if(j[H].location>=0){let q=L[H];q===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));let tt={};tt.attribute=q,q&&q.data&&(tt.data=q.data),k[H]=tt,V++}r.attributes=k,r.attributesNum=V,r.index=U}function x(){let M=r.newAttributes;for(let C=0,P=M.length;C<P;C++)M[C]=0}function m(M){p(M,0)}function p(M,C){let P=r.newAttributes,U=r.enabledAttributes,k=r.attributeDivisors;P[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),k[M]!==C&&(n.vertexAttribDivisor(M,C),k[M]=C)}function _(){let M=r.newAttributes,C=r.enabledAttributes;for(let P=0,U=C.length;P<U;P++)C[P]!==M[P]&&(n.disableVertexAttribArray(P),C[P]=0)}function y(M,C,P,U,k,L,V){V===!0?n.vertexAttribIPointer(M,C,P,k,L):n.vertexAttribPointer(M,C,P,U,k,L)}function v(M,C,P,U){x();let k=U.attributes,L=P.getAttributes(),V=C.defaultAttributeValues;for(let j in L){let H=L[j];if(H.location>=0){let B=k[j];if(B===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),B!==void 0){let q=B.normalized,tt=B.itemSize,W=t.get(B);if(W===void 0)continue;let Q=W.buffer,rt=W.type,nt=W.bytesPerElement,G=rt===n.INT||rt===n.UNSIGNED_INT||B.gpuType===Qc;if(B.isInterleavedBufferAttribute){let z=B.data,J=z.stride,F=B.offset;if(z.isInstancedInterleavedBuffer){for(let N=0;N<H.locationSize;N++)p(H.location+N,z.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let N=0;N<H.locationSize;N++)m(H.location+N);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let N=0;N<H.locationSize;N++)y(H.location+N,tt/H.locationSize,rt,q,J*nt,(F+tt/H.locationSize*N)*nt,G)}else{if(B.isInstancedBufferAttribute){for(let z=0;z<H.locationSize;z++)p(H.location+z,B.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let z=0;z<H.locationSize;z++)m(H.location+z);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let z=0;z<H.locationSize;z++)y(H.location+z,tt/H.locationSize,rt,q,tt*nt,tt/H.locationSize*z*nt,G)}}else if(V!==void 0){let q=V[j];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(H.location,q);break;case 3:n.vertexAttrib3fv(H.location,q);break;case 4:n.vertexAttrib4fv(H.location,q);break;default:n.vertexAttrib1fv(H.location,q)}}}}_()}function S(){A();for(let M in i){let C=i[M];for(let P in C){let U=C[P];for(let k in U)h(U[k].object),delete U[k];delete C[P]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let C=i[M.id];for(let P in C){let U=C[P];for(let k in U)h(U[k].object),delete U[k];delete C[P]}delete i[M.id]}function w(M){for(let C in i){let P=i[C];if(P[M.id]===void 0)continue;let U=P[M.id];for(let k in U)h(U[k].object),delete U[k];delete P[M.id]}}function A(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function u_(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function f_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Kn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==gi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xi&&!A)}function c(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:T}}function d_(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Jn,a=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:i,y=_*4,v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let S=0;S!==y;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function p_(n){let t=new WeakMap;function e(o,a){return a===Zc?o.mapping=Xs:a===Jc&&(o.mapping=qs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Zc||a===Jc)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new gc(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Wr=4,sp=[.125,.215,.35,.446,.526,.582],Qs=20,Iu=new na,rp=new ee,Pu=null,Du=0,Lu=0,Fu=!1,$s=(1+Math.sqrt(5))/2,Gr=1/$s,op=[new O(-$s,Gr,0),new O($s,Gr,0),new O(-Gr,0,$s),new O(Gr,0,$s),new O(0,$s,-Gr),new O(0,$s,Gr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],m_=new O,Bl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=m_}=r;Pu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pu,Du,Lu),this._renderer.xr.enabled=Fu,t.scissorTest=!1,Ul(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pu=this._renderer.getRenderTarget(),Du=this._renderer.getActiveCubeFace(),Lu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:zr,format:Kn,colorSpace:zs,depthBuffer:!1},s=ap(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ap(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g_(r)),this._blurMaterial=x_(r,t,e)}return s}_compileMaterial(t){let e=new Kt(this._lodPlanes[0],t);this._renderer.compile(e,Iu)}_sceneToCubeUV(t,e,i,s,r){let c=new dn(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(rp),u.toneMapping=Ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Ue({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),m=new Kt(new Qn,x),p=!1,_=t.background;_?_.isColor&&(x.color.copy(_),t.background=null,p=!0):(x.color.copy(rp),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):v===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Ul(s,v*S,y>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=_}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Xs||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ul(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Iu)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=op[(s-r-1)%op.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Kt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Qs;m>Qs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qs}`);let p=[],_=0;for(let w=0;w<Qs;++w){let A=w/x,b=Math.exp(-A*A/2);p.push(b),w===0?_+=b:w<m&&(_+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;let v=this._sizeLods[s],S=3*v*(s>y-Wr?s-y+Wr:0),T=4*(this._cubeSize-v);Ul(e,S,T,3*v,2*v),c.setRenderTarget(e),c.render(u,Iu)}};function g_(n){let t=[],e=[],i=[],s=n,r=n-Wr+1+sp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Wr?c=sp[o-n+Wr-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let w=T%3*2/3-1,A=T>2?0:-1,b=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];_.set(b,x*g*T),y.set(d,m*g*T);let M=[T,T,T,T,T,T];v.set(M,p*g*T)}let S=new qe;S.setAttribute("position",new Ve(_,x)),S.setAttribute("uv",new Ve(y,m)),S.setAttribute("faceIndex",new Ve(v,p)),t.push(S),s>Wr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ap(n,t,e){let i=new Ai(n,t,e);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function x_(n,t,e){let i=new Float32Array(Qs),s=new O(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function cp(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function lp(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function __(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Zc||c===Jc,h=c===Xs||c===qs;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Bl(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Bl(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function y_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function v_(n,t,e,i){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],n.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let S=_[y+0],T=_[y+1],w=_[y+2];d.push(S,T,T,w,w,S)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let S=y+0,T=y+1,w=y+2;d.push(S,T,T,w,w,S)}}else return;let m=new(Eu(d)?Uo:Fo)(d,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function M_(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),e.update(f,i,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,i,1)}function u(d,f,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function S_(n,t,e){let i=new WeakMap,s=new De;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let b=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*S*4*u),w=new Lo(T,v,S,u);w.type=xi,w.needsUpdate=!0;let A=y*4;for(let M=0;M<u;M++){let C=m[M],P=p[M],U=_[M],k=v*S*4*M;for(let L=0;L<C.count;L++){let V=L*A;f===!0&&(s.fromBufferAttribute(C,L),T[k+V+0]=s.x,T[k+V+1]=s.y,T[k+V+2]=s.z,T[k+V+3]=0),g===!0&&(s.fromBufferAttribute(P,L),T[k+V+4]=s.x,T[k+V+5]=s.y,T[k+V+6]=s.z,T[k+V+7]=0),x===!0&&(s.fromBufferAttribute(U,L),T[k+V+8]=s.x,T[k+V+9]=s.y,T[k+V+10]=s.z,T[k+V+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Ht(v,S)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function E_(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Rp=new Tn,hp=new Vo(1,1),Cp=new Lo,Ip=new pc,Pp=new Bo,up=[],fp=[],dp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function qr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=up[s];if(r===void 0&&(r=new Float32Array(s),up[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function en(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function nn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function zl(n,t){let e=fp[t];e===void 0&&(e=new Int32Array(t),fp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function w_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function T_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2fv(this.addr,t),nn(e,t)}}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;n.uniform3fv(this.addr,t),nn(e,t)}}function R_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4fv(this.addr,t),nn(e,t)}}function C_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;mp.set(i),n.uniformMatrix2fv(this.addr,!1,mp),nn(e,i)}}function I_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;pp.set(i),n.uniformMatrix3fv(this.addr,!1,pp),nn(e,i)}}function P_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(en(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,i))return;dp.set(i),n.uniformMatrix4fv(this.addr,!1,dp),nn(e,i)}}function D_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function L_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2iv(this.addr,t),nn(e,t)}}function F_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3iv(this.addr,t),nn(e,t)}}function U_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4iv(this.addr,t),nn(e,t)}}function N_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function B_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;n.uniform2uiv(this.addr,t),nn(e,t)}}function O_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;n.uniform3uiv(this.addr,t),nn(e,t)}}function z_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;n.uniform4uiv(this.addr,t),nn(e,t)}}function k_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hp.compareFunction=Mu,r=hp):r=Rp,e.setTexture2D(t||r,s)}function H_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ip,s)}function V_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Pp,s)}function G_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Cp,s)}function W_(n){switch(n){case 5126:return w_;case 35664:return T_;case 35665:return A_;case 35666:return R_;case 35674:return C_;case 35675:return I_;case 35676:return P_;case 5124:case 35670:return D_;case 35667:case 35671:return L_;case 35668:case 35672:return F_;case 35669:case 35673:return U_;case 5125:return N_;case 36294:return B_;case 36295:return O_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return G_}}function X_(n,t){n.uniform1fv(this.addr,t)}function q_(n,t){let e=qr(t,this.size,2);n.uniform2fv(this.addr,e)}function Y_(n,t){let e=qr(t,this.size,3);n.uniform3fv(this.addr,e)}function Z_(n,t){let e=qr(t,this.size,4);n.uniform4fv(this.addr,e)}function J_(n,t){let e=qr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function $_(n,t){let e=qr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Q_(n,t){let e=qr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function j_(n,t){n.uniform1iv(this.addr,t)}function K_(n,t){n.uniform2iv(this.addr,t)}function t2(n,t){n.uniform3iv(this.addr,t)}function e2(n,t){n.uniform4iv(this.addr,t)}function n2(n,t){n.uniform1uiv(this.addr,t)}function i2(n,t){n.uniform2uiv(this.addr,t)}function s2(n,t){n.uniform3uiv(this.addr,t)}function r2(n,t){n.uniform4uiv(this.addr,t)}function o2(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rp,r[o])}function a2(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ip,r[o])}function c2(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Pp,r[o])}function l2(n,t,e){let i=this.cache,s=t.length,r=zl(e,s);en(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Cp,r[o])}function h2(n){switch(n){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return J_;case 35675:return $_;case 35676:return Q_;case 5124:case 35670:return j_;case 35667:case 35671:return K_;case 35668:case 35672:return t2;case 35669:case 35673:return e2;case 5125:return n2;case 36294:return i2;case 36295:return s2;case 36296:return r2;case 35678:case 36198:case 36298:case 36306:case 35682:return o2;case 35679:case 36299:case 36307:return a2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return l2}}var Nu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=W_(e.type)}},Bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h2(e.type)}},Ou=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Uu=/(\w+)(\])?(\[|\.)?/g;function gp(n,t){n.seq.push(t),n.map[t.id]=t}function u2(n,t,e){let i=n.name,s=i.length;for(Uu.lastIndex=0;;){let r=Uu.exec(i),o=Uu.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){gp(e,l===void 0?new Nu(a,n,t):new Bu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ou(a),gp(e,u)),e=u}}}var Xr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);u2(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function xp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var f2=37297,d2=0;function p2(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var _p=new te;function m2(n){ge._getMatrix(_p,ge.workingColorSpace,n);let t=`mat3( ${_p.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(n)){case Io:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function yp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+p2(n.getShaderSource(t),a)}else return r}function g2(n,t){let e=m2(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x2(n,t){let e;switch(t){case Ld:e="Linear";break;case Fd:e="Reinhard";break;case Ud:e="Cineon";break;case Nd:e="ACESFilmic";break;case Od:e="AgX";break;case Yc:e="Neutral";break;case Bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nl=new O;function _2(){ge.getLuminanceCoefficients(Nl);let n=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function v2(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function M2(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function fa(n){return n!==""}function vp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b2=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(n){return n.replace(b2,E2)}var S2=new Map;function E2(n,t){let e=se[t];if(e===void 0){let i=S2.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zu(e)}var w2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(n){return n.replace(w2,T2)}function T2(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Sp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function A2(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(t="SHADOWMAP_TYPE_VSM"),t}function R2(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xs:case qs:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C2(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function I2(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uu:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function P2(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function D2(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=A2(e),l=R2(e),h=C2(e),u=I2(e),d=P2(e),f=y2(e),g=v2(r),x=s.createProgram(),m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fa).join(`
`),p.length>0&&(p+=`
`)):(m=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),p=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?se.tonemapping_pars_fragment:"",e.toneMapping!==Ji?x2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,g2("linearToOutputTexel",e.outputColorSpace),_2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fa).join(`
`)),o=zu(o),o=vp(o,e),o=Mp(o,e),a=zu(a),a=vp(a,e),a=Mp(a,e),o=bp(o),a=bp(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+o,v=_+p+a,S=xp(s,s.VERTEX_SHADER,y),T=xp(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",U=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",L=P.trim(),V=U.trim(),j=k.trim(),H=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,T);else{let q=yp(s,S,"vertex"),tt=yp(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+q+`
`+tt)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(V===""||j==="")&&(B=!1);B&&(C.diagnostics={runnable:H,programLog:L,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(S),s.deleteShader(T),A=new Xr(s,x),b=M2(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,f2)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d2++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}var L2=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Hu(t),e.set(t,i)),i}},Hu=class{constructor(t){this.id=L2++,this.code=t,this.usedTimes=0}};function F2(n,t,e,i,s,r,o){let a=new Ir,c=new ku,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,C,P,U){let k=P.fog,L=U.geometry,V=b.isMeshStandardMaterial?P.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||V),H=j&&j.mapping===oa?j.image.height:null,B=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=q!==void 0?q.length:0,W=0;L.morphAttributes.position!==void 0&&(W=1),L.morphAttributes.normal!==void 0&&(W=2),L.morphAttributes.color!==void 0&&(W=3);let Q,rt,nt,G;if(B){let ve=Ii[B];Q=ve.vertexShader,rt=ve.fragmentShader}else Q=b.vertexShader,rt=b.fragmentShader,c.update(b),nt=c.getVertexShaderID(b),G=c.getFragmentShaderID(b);let z=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),F=U.isInstancedMesh===!0,N=U.isBatchedMesh===!0,it=!!b.map,at=!!b.matcap,E=!!j,lt=!!b.aoMap,ot=!!b.lightMap,$=!!b.bumpMap,st=!!b.normalMap,gt=!!b.displacementMap,ct=!!b.emissiveMap,yt=!!b.metalnessMap,Rt=!!b.roughnessMap,Ft=b.anisotropy>0,D=b.clearcoat>0,R=b.dispersion>0,Y=b.iridescence>0,ut=b.sheen>0,mt=b.transmission>0,dt=Ft&&!!b.anisotropyMap,Ot=D&&!!b.clearcoatMap,Et=D&&!!b.clearcoatNormalMap,Nt=D&&!!b.clearcoatRoughnessMap,zt=Y&&!!b.iridescenceMap,vt=Y&&!!b.iridescenceThicknessMap,Ct=ut&&!!b.sheenColorMap,Yt=ut&&!!b.sheenRoughnessMap,Vt=!!b.specularMap,Tt=!!b.specularColorMap,ie=!!b.specularIntensityMap,X=mt&&!!b.transmissionMap,St=mt&&!!b.thicknessMap,wt=!!b.gradientMap,Ut=!!b.alphaMap,Mt=b.alphaTest>0,xt=!!b.alphaHash,kt=!!b.extensions,jt=Ji;b.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(jt=n.toneMapping);let Pe={shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:rt,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:N,batchingColor:N&&U._colorsTexture!==null,instancing:F,instancingColor:F&&U.instanceColor!==null,instancingMorph:F&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:zs,alphaToCoverage:!!b.alphaToCoverage,map:it,matcap:at,envMap:E,envMapMode:E&&j.mapping,envMapCubeUVHeight:H,aoMap:lt,lightMap:ot,bumpMap:$,normalMap:st,displacementMap:d&&gt,emissiveMap:ct,normalMapObjectSpace:st&&b.normalMapType===Hd,normalMapTangentSpace:st&&b.normalMapType===vu,metalnessMap:yt,roughnessMap:Rt,anisotropy:Ft,anisotropyMap:dt,clearcoat:D,clearcoatMap:Ot,clearcoatNormalMap:Et,clearcoatRoughnessMap:Nt,dispersion:R,iridescence:Y,iridescenceMap:zt,iridescenceThicknessMap:vt,sheen:ut,sheenColorMap:Ct,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Tt,specularIntensityMap:ie,transmission:mt,transmissionMap:X,thicknessMap:St,gradientMap:wt,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:Ut,alphaTest:Mt,alphaHash:xt,combine:b.combine,mapUv:it&&x(b.map.channel),aoMapUv:lt&&x(b.aoMap.channel),lightMapUv:ot&&x(b.lightMap.channel),bumpMapUv:$&&x(b.bumpMap.channel),normalMapUv:st&&x(b.normalMap.channel),displacementMapUv:gt&&x(b.displacementMap.channel),emissiveMapUv:ct&&x(b.emissiveMap.channel),metalnessMapUv:yt&&x(b.metalnessMap.channel),roughnessMapUv:Rt&&x(b.roughnessMap.channel),anisotropyMapUv:dt&&x(b.anisotropyMap.channel),clearcoatMapUv:Ot&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Et&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&x(b.sheenRoughnessMap.channel),specularMapUv:Vt&&x(b.specularMap.channel),specularColorMapUv:Tt&&x(b.specularColorMap.channel),specularIntensityMapUv:ie&&x(b.specularIntensityMap.channel),transmissionMapUv:X&&x(b.transmissionMap.channel),thicknessMapUv:St&&x(b.thicknessMap.channel),alphaMapUv:Ut&&x(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(st||Ft),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(it||Ut),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:W,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:jt,decodeVideoTexture:it&&b.map.isVideoTexture===!0&&ge.getTransfer(b.map.colorSpace)===Se,decodeVideoTextureEmissive:ct&&b.emissiveMap.isVideoTexture===!0&&ge.getTransfer(b.emissiveMap.colorSpace)===Se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Mn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:kt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&b.extensions.multiDraw===!0||N)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let C in b.defines)M.push(C),M.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(_(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],C;if(M){let P=Ii[M];C=jd.clone(P.uniforms)}else C=b.uniforms;return C}function S(b,M){let C;for(let P=0,U=h.length;P<U;P++){let k=h[P];if(k.cacheKey===M){C=k,++C.usedTimes;break}}return C===void 0&&(C=new D2(n,M,b,r),h.push(C)),C}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){c.remove(b)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:h,dispose:A}}function U2(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function N2(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ep(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,d,f,g,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||N2),i.length>1&&i.sort(d||Ep),s.length>1&&s.sort(d||Ep)}function h(){for(let u=t,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function B2(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new wp,n.set(i,[o])):s>=r.length?(o=new wp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function O2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new ee};break;case"SpotLight":e={position:new O,direction:new O,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function z2(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var k2=0;function H2(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function V2(n){let t=new O2,e=z2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new Me,o=new Me;function a(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,S=0,T=0,w=0;l.sort(H2);for(let b=0,M=l.length;b<M;b++){let C=l[b],P=C.color,U=C.intensity,k=C.distance,L=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=P.r*U,u+=P.g*U,d+=P.b*U;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],U);w++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[f]=H,i.directionalShadowMap[f]=L,i.directionalShadowMatrix[f]=C.shadow.matrix,_++}i.directional[f]=V,f++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(P).multiplyScalar(U),V.distance=k,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[x]=V;let j=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,j.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=j.matrix,C.castShadow){let H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=L,v++}x++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(P).multiplyScalar(U),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=L,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=V,g++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(U),V.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==_||A.numPointShadows!==y||A.numSpotShadows!==v||A.numSpotMaps!==S||A.numLightProbes!==w)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=v+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,A.directionalLength=f,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=_,A.numPointShadows=y,A.numSpotShadows=v,A.numSpotMaps=S,A.numLightProbes=w,i.version=k2++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let y=l[p];if(y.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function Tp(n){let t=new V2(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function G2(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Tp(n),t.set(s,[a])):r>=o.length?(a=new Tp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var W2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q2(n,t,e){let i=new Dr,s=new Ht,r=new Ht,o=new De,a=new Br({depthPacking:Dl}),c=new Rc,l={},h=e.maxTextureSize,u={[ui]:vn,[vn]:ui,[Mn]:Mn},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:W2,fragmentShader:X2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new qe;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Kt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let p=this.type;this.render=function(T,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=n.getRenderTarget(),M=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Zi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let U=p!==Ci&&this.type===Ci,k=p===Ci&&this.type!==Ci;for(let L=0,V=T.length;L<V;L++){let j=T[L],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let B=H.getFrameExtents();if(s.multiply(B),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,H.mapSize.y=r.y)),H.map===null||U===!0||k===!0){let tt=this.type!==Ci?{minFilter:wn,magFilter:wn}:{};H.map!==null&&H.map.dispose(),H.map=new Ai(s.x,s.y,tt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let q=H.getViewportCount();for(let tt=0;tt<q;tt++){let W=H.getViewport(tt);o.set(r.x*W.x,r.y*W.y,r.x*W.z,r.y*W.w),P.viewport(o),H.updateMatrices(j,tt),i=H.getFrustum(),v(w,A,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===Ci&&_(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,C)};function _(T,w){let A=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ai(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,A,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,A,f,x,null)}function y(T,w,A,b){let M=null,C=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=A.isPointLight===!0?c:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let P=M.uuid,U=w.uuid,k=l[P];k===void 0&&(k={},l[P]=k);let L=k[U];L===void 0&&(L=M.clone(),k[U]=L,w.addEventListener("dispose",S)),M=L}if(M.visible=w.visible,M.wireframe=w.wireframe,b===Ci?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let P=n.properties.get(M);P.light=A}return M}function v(T,w,A,b,M){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Ci)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let U=t.update(T),k=T.material;if(Array.isArray(k)){let L=U.groups;for(let V=0,j=L.length;V<j;V++){let H=L[V],B=k[H.materialIndex];if(B&&B.visible){let q=y(T,B,b,M);T.onBeforeShadow(n,T,w,A,U,q,H),n.renderBufferDirect(A,null,U,q,T,H),T.onAfterShadow(n,T,w,A,U,q,H)}}}else if(k.visible){let L=y(T,k,b,M);T.onBeforeShadow(n,T,w,A,U,L,null),n.renderBufferDirect(A,null,U,L,T,null),T.onAfterShadow(n,T,w,A,U,L,null)}}let P=T.children;for(let U=0,k=P.length;U<k;U++)v(P[U],w,A,b,M)}function S(T){T.target.removeEventListener("dispose",S);for(let A in l){let b=l[A],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var Y2={[kc]:Hc,[Vc]:Xc,[Gc]:qc,[Os]:Wc,[Hc]:kc,[Xc]:Vc,[qc]:Gc,[Wc]:Os};function Z2(n,t){function e(){let X=!1,St=new De,wt=null,Ut=new De(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!X&&(n.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,xt,kt,jt,Pe){Pe===!0&&(Mt*=jt,xt*=jt,kt*=jt),St.set(Mt,xt,kt,jt),Ut.equals(St)===!1&&(n.clearColor(Mt,xt,kt,jt),Ut.copy(St))},reset:function(){X=!1,wt=null,Ut.set(-1,0,0,0)}}}function i(){let X=!1,St=!1,wt=null,Ut=null,Mt=null;return{setReversed:function(xt){if(St!==xt){let kt=t.get("EXT_clip_control");xt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),St=xt;let jt=Mt;Mt=null,this.setClear(jt)}},getReversed:function(){return St},setTest:function(xt){xt?z(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(xt){wt!==xt&&!X&&(n.depthMask(xt),wt=xt)},setFunc:function(xt){if(St&&(xt=Y2[xt]),Ut!==xt){switch(xt){case kc:n.depthFunc(n.NEVER);break;case Hc:n.depthFunc(n.ALWAYS);break;case Vc:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case Gc:n.depthFunc(n.EQUAL);break;case Wc:n.depthFunc(n.GEQUAL);break;case Xc:n.depthFunc(n.GREATER);break;case qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ut=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Mt!==xt&&(St&&(xt=1-xt),n.clearDepth(xt),Mt=xt)},reset:function(){X=!1,wt=null,Ut=null,Mt=null,St=!1}}}function s(){let X=!1,St=null,wt=null,Ut=null,Mt=null,xt=null,kt=null,jt=null,Pe=null;return{setTest:function(ve){X||(ve?z(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(ve){St!==ve&&!X&&(n.stencilMask(ve),St=ve)},setFunc:function(ve,Bi,Ti){(wt!==ve||Ut!==Bi||Mt!==Ti)&&(n.stencilFunc(ve,Bi,Ti),wt=ve,Ut=Bi,Mt=Ti)},setOp:function(ve,Bi,Ti){(xt!==ve||kt!==Bi||jt!==Ti)&&(n.stencilOp(ve,Bi,Ti),xt=ve,kt=Bi,jt=Ti)},setLocked:function(ve){X=ve},setClear:function(ve){Pe!==ve&&(n.clearStencil(ve),Pe=ve)},reset:function(){X=!1,St=null,wt=null,Ut=null,Mt=null,xt=null,kt=null,jt=null,Pe=null}}}let r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,S=null,T=null,w=new ee(0,0,0),A=0,b=!1,M=null,C=null,P=null,U=null,k=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=j>=2);let B=null,q={},tt=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),Q=new De().fromArray(tt),rt=new De().fromArray(W);function nt(X,St,wt,Ut){let Mt=new Uint8Array(4),xt=n.createTexture();n.bindTexture(X,xt),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let kt=0;kt<wt;kt++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,Ut,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(St+kt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return xt}let G={};G[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(n.DEPTH_TEST),o.setFunc(Os),$(!1),st(au),z(n.CULL_FACE),lt(Zi);function z(X){h[X]!==!0&&(n.enable(X),h[X]=!0)}function J(X){h[X]!==!1&&(n.disable(X),h[X]=!1)}function F(X,St){return u[X]!==St?(n.bindFramebuffer(X,St),u[X]=St,X===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=St),X===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=St),!0):!1}function N(X,St){let wt=f,Ut=!1;if(X){wt=d.get(St),wt===void 0&&(wt=[],d.set(St,wt));let Mt=X.textures;if(wt.length!==Mt.length||wt[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,kt=Mt.length;xt<kt;xt++)wt[xt]=n.COLOR_ATTACHMENT0+xt;wt.length=Mt.length,Ut=!0}}else wt[0]!==n.BACK&&(wt[0]=n.BACK,Ut=!0);Ut&&n.drawBuffers(wt)}function it(X){return g!==X?(n.useProgram(X),g=X,!0):!1}let at={[hs]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[md]:n.FUNC_REVERSE_SUBTRACT};at[gd]=n.MIN,at[xd]=n.MAX;let E={[_d]:n.ZERO,[yd]:n.ONE,[vd]:n.SRC_COLOR,[ac]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[Ed]:n.DST_COLOR,[bd]:n.DST_ALPHA,[Md]:n.ONE_MINUS_SRC_COLOR,[cc]:n.ONE_MINUS_SRC_ALPHA,[wd]:n.ONE_MINUS_DST_COLOR,[Sd]:n.ONE_MINUS_DST_ALPHA,[Ad]:n.CONSTANT_COLOR,[Rd]:n.ONE_MINUS_CONSTANT_COLOR,[Cd]:n.CONSTANT_ALPHA,[Id]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(X,St,wt,Ut,Mt,xt,kt,jt,Pe,ve){if(X===Zi){x===!0&&(J(n.BLEND),x=!1);return}if(x===!1&&(z(n.BLEND),x=!0),X!==dd){if(X!==m||ve!==b){if((p!==hs||v!==hs)&&(n.blendEquation(n.FUNC_ADD),p=hs,v=hs),ve)switch(X){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ra:n.blendFunc(n.ONE,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ra:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case lu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}_=null,y=null,S=null,T=null,w.set(0,0,0),A=0,m=X,b=ve}return}Mt=Mt||St,xt=xt||wt,kt=kt||Ut,(St!==p||Mt!==v)&&(n.blendEquationSeparate(at[St],at[Mt]),p=St,v=Mt),(wt!==_||Ut!==y||xt!==S||kt!==T)&&(n.blendFuncSeparate(E[wt],E[Ut],E[xt],E[kt]),_=wt,y=Ut,S=xt,T=kt),(jt.equals(w)===!1||Pe!==A)&&(n.blendColor(jt.r,jt.g,jt.b,Pe),w.copy(jt),A=Pe),m=X,b=!1}function ot(X,St){X.side===Mn?J(n.CULL_FACE):z(n.CULL_FACE);let wt=X.side===vn;St&&(wt=!wt),$(wt),X.blending===Bs&&X.transparent===!1?lt(Zi):lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ut=X.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(X){M!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),M=X)}function st(X){X!==ud?(z(n.CULL_FACE),X!==C&&(X===au?n.cullFace(n.BACK):X===fd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),C=X}function gt(X){X!==P&&(V&&n.lineWidth(X),P=X)}function ct(X,St,wt){X?(z(n.POLYGON_OFFSET_FILL),(U!==St||k!==wt)&&(n.polygonOffset(St,wt),U=St,k=wt)):J(n.POLYGON_OFFSET_FILL)}function yt(X){X?z(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function Rt(X){X===void 0&&(X=n.TEXTURE0+L-1),B!==X&&(n.activeTexture(X),B=X)}function Ft(X,St,wt){wt===void 0&&(B===null?wt=n.TEXTURE0+L-1:wt=B);let Ut=q[wt];Ut===void 0&&(Ut={type:void 0,texture:void 0},q[wt]=Ut),(Ut.type!==X||Ut.texture!==St)&&(B!==wt&&(n.activeTexture(wt),B=wt),n.bindTexture(X,St||G[X]),Ut.type=X,Ut.texture=St)}function D(){let X=q[B];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function R(){try{n.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{n.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{n.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{n.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{n.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{n.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{n.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(){try{n.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function vt(){try{n.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(X){Q.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Q.copy(X))}function Yt(X){rt.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),rt.copy(X))}function Vt(X,St){let wt=l.get(St);wt===void 0&&(wt=new WeakMap,l.set(St,wt));let Ut=wt.get(X);Ut===void 0&&(Ut=n.getUniformBlockIndex(St,X.name),wt.set(X,Ut))}function Tt(X,St){let Ut=l.get(St).get(X);c.get(St)!==Ut&&(n.uniformBlockBinding(St,Ut,X.__bindingPointIndex),c.set(St,Ut))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},B=null,q={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,S=null,T=null,w=new ee(0,0,0),A=0,b=!1,M=null,C=null,P=null,U=null,k=null,Q.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:J,bindFramebuffer:F,drawBuffers:N,useProgram:it,setBlending:lt,setMaterial:ot,setFlipSided:$,setCullFace:st,setLineWidth:gt,setPolygonOffset:ct,setScissorTest:yt,activeTexture:Rt,bindTexture:Ft,unbindTexture:D,compressedTexImage2D:R,compressedTexImage3D:Y,texImage2D:zt,texImage3D:vt,updateUBOMapping:Vt,uniformBlockBinding:Tt,texStorage2D:Et,texStorage3D:Nt,texSubImage2D:ut,texSubImage3D:mt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Ot,scissor:Ct,viewport:Yt,reset:ie}}function J2(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return f?new OffscreenCanvas(D,R):Do("canvas")}function x(D,R,Y){let ut=1,mt=Ft(D);if((mt.width>Y||mt.height>Y)&&(ut=Y/Math.max(mt.width,mt.height)),ut<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let dt=Math.floor(ut*mt.width),Ot=Math.floor(ut*mt.height);u===void 0&&(u=g(dt,Ot));let Et=R?g(dt,Ot):u;return Et.width=dt,Et.height=Ot,Et.getContext("2d").drawImage(D,0,0,dt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+dt+"x"+Ot+")."),Et}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(D,R,Y,ut,mt=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let dt=R;if(R===n.RED&&(Y===n.FLOAT&&(dt=n.R32F),Y===n.HALF_FLOAT&&(dt=n.R16F),Y===n.UNSIGNED_BYTE&&(dt=n.R8)),R===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.R8UI),Y===n.UNSIGNED_SHORT&&(dt=n.R16UI),Y===n.UNSIGNED_INT&&(dt=n.R32UI),Y===n.BYTE&&(dt=n.R8I),Y===n.SHORT&&(dt=n.R16I),Y===n.INT&&(dt=n.R32I)),R===n.RG&&(Y===n.FLOAT&&(dt=n.RG32F),Y===n.HALF_FLOAT&&(dt=n.RG16F),Y===n.UNSIGNED_BYTE&&(dt=n.RG8)),R===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.RG8UI),Y===n.UNSIGNED_SHORT&&(dt=n.RG16UI),Y===n.UNSIGNED_INT&&(dt=n.RG32UI),Y===n.BYTE&&(dt=n.RG8I),Y===n.SHORT&&(dt=n.RG16I),Y===n.INT&&(dt=n.RG32I)),R===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(dt=n.RGB16UI),Y===n.UNSIGNED_INT&&(dt=n.RGB32UI),Y===n.BYTE&&(dt=n.RGB8I),Y===n.SHORT&&(dt=n.RGB16I),Y===n.INT&&(dt=n.RGB32I)),R===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(dt=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(dt=n.RGBA16UI),Y===n.UNSIGNED_INT&&(dt=n.RGBA32UI),Y===n.BYTE&&(dt=n.RGBA8I),Y===n.SHORT&&(dt=n.RGBA16I),Y===n.INT&&(dt=n.RGBA32I)),R===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(dt=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(dt=n.R11F_G11F_B10F)),R===n.RGBA){let Ot=mt?Io:ge.getTransfer(ut);Y===n.FLOAT&&(dt=n.RGBA32F),Y===n.HALF_FLOAT&&(dt=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(dt=Ot===Se?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(dt=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(dt=n.RGB5_A1)}return(dt===n.R16F||dt===n.R32F||dt===n.RG16F||dt===n.RG32F||dt===n.RGBA16F||dt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function v(D,R){let Y;return D?R===null||R===gs||R===kr?Y=n.DEPTH24_STENCIL8:R===xi?Y=n.DEPTH32F_STENCIL8:R===Or&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===gs||R===kr?Y=n.DEPTH_COMPONENT24:R===xi?Y=n.DEPTH_COMPONENT32F:R===Or&&(Y=n.DEPTH_COMPONENT16),Y}function S(D,R){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==fi?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function T(D){let R=D.target;R.removeEventListener("dispose",T),A(R),R.isVideoTexture&&h.delete(R)}function w(D){let R=D.target;R.removeEventListener("dispose",w),M(R)}function A(D){let R=i.get(D);if(R.__webglInit===void 0)return;let Y=D.source,ut=d.get(Y);if(ut){let mt=ut[R.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(D),Object.keys(ut).length===0&&d.delete(Y)}i.remove(D)}function b(D){let R=i.get(D);n.deleteTexture(R.__webglTexture);let Y=D.source,ut=d.get(Y);delete ut[R.__cacheKey],o.memory.textures--}function M(D){let R=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(R.__webglFramebuffer[ut]))for(let mt=0;mt<R.__webglFramebuffer[ut].length;mt++)n.deleteFramebuffer(R.__webglFramebuffer[ut][mt]);else n.deleteFramebuffer(R.__webglFramebuffer[ut]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ut])}else{if(Array.isArray(R.__webglFramebuffer))for(let ut=0;ut<R.__webglFramebuffer.length;ut++)n.deleteFramebuffer(R.__webglFramebuffer[ut]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ut=0;ut<R.__webglColorRenderbuffer.length;ut++)R.__webglColorRenderbuffer[ut]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ut]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Y=D.textures;for(let ut=0,mt=Y.length;ut<mt;ut++){let dt=i.get(Y[ut]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(Y[ut])}i.remove(D)}let C=0;function P(){C=0}function U(){let D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function k(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function L(D,R){let Y=i.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){let ut=D.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(Y,D,R);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+R)}function V(D,R){let Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){G(Y,D,R);return}e.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+R)}function j(D,R){let Y=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){G(Y,D,R);return}e.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+R)}function H(D,R){let Y=i.get(D);if(D.version>0&&Y.__version!==D.version){z(Y,D,R);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+R)}let B={[lc]:n.REPEAT,[ls]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},q={[wn]:n.NEAREST,[zd]:n.NEAREST_MIPMAP_NEAREST,[aa]:n.NEAREST_MIPMAP_LINEAR,[fi]:n.LINEAR,[$c]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},tt={[Vd]:n.NEVER,[Zd]:n.ALWAYS,[Gd]:n.LESS,[Mu]:n.LEQUAL,[Wd]:n.EQUAL,[Yd]:n.GEQUAL,[Xd]:n.GREATER,[qd]:n.NOTEQUAL};function W(D,R){if(R.type===xi&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===fi||R.magFilter===$c||R.magFilter===aa||R.magFilter===ms||R.minFilter===fi||R.minFilter===$c||R.minFilter===aa||R.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,B[R.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,B[R.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,B[R.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,q[R.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,q[R.minFilter]),R.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,tt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===wn||R.minFilter!==aa&&R.minFilter!==ms||R.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Q(D,R){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",T));let ut=R.source,mt=d.get(ut);mt===void 0&&(mt={},d.set(ut,mt));let dt=k(R);if(dt!==D.__cacheKey){mt[dt]===void 0&&(mt[dt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),mt[dt].usedTimes++;let Ot=mt[D.__cacheKey];Ot!==void 0&&(mt[D.__cacheKey].usedTimes--,Ot.usedTimes===0&&b(R)),D.__cacheKey=dt,D.__webglTexture=mt[dt].texture}return Y}function rt(D,R,Y){return Math.floor(Math.floor(D/Y)/R)}function nt(D,R,Y,ut){let dt=D.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,Y,ut,R.data);else{dt.sort((vt,Ct)=>vt.start-Ct.start);let Ot=0;for(let vt=1;vt<dt.length;vt++){let Ct=dt[Ot],Yt=dt[vt],Vt=Ct.start+Ct.count,Tt=rt(Yt.start,R.width,4),ie=rt(Ct.start,R.width,4);Yt.start<=Vt+1&&Tt===ie&&rt(Yt.start+Yt.count-1,R.width,4)===Tt?Ct.count=Math.max(Ct.count,Yt.start+Yt.count-Ct.start):(++Ot,dt[Ot]=Yt)}dt.length=Ot+1;let Et=n.getParameter(n.UNPACK_ROW_LENGTH),Nt=n.getParameter(n.UNPACK_SKIP_PIXELS),zt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let vt=0,Ct=dt.length;vt<Ct;vt++){let Yt=dt[vt],Vt=Math.floor(Yt.start/4),Tt=Math.ceil(Yt.count/4),ie=Vt%R.width,X=Math.floor(Vt/R.width),St=Tt,wt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,X),e.texSubImage2D(n.TEXTURE_2D,0,ie,X,St,wt,Y,ut,R.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Et),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Nt),n.pixelStorei(n.UNPACK_SKIP_ROWS,zt)}}function G(D,R,Y){let ut=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ut=n.TEXTURE_3D);let mt=Q(D,R),dt=R.source;e.bindTexture(ut,D.__webglTexture,n.TEXTURE0+Y);let Ot=i.get(dt);if(dt.version!==Ot.__version||mt===!0){e.activeTexture(n.TEXTURE0+Y);let Et=ge.getPrimaries(ge.workingColorSpace),Nt=R.colorSpace===$i?null:ge.getPrimaries(R.colorSpace),zt=R.colorSpace===$i||Et===Nt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let vt=x(R.image,!1,s.maxTextureSize);vt=Rt(R,vt);let Ct=r.convert(R.format,R.colorSpace),Yt=r.convert(R.type),Vt=y(R.internalFormat,Ct,Yt,R.colorSpace,R.isVideoTexture);W(ut,R);let Tt,ie=R.mipmaps,X=R.isVideoTexture!==!0,St=Ot.__version===void 0||mt===!0,wt=dt.dataReady,Ut=S(R,vt);if(R.isDepthTexture)Vt=v(R.format===Hr,R.type),St&&(X?e.texStorage2D(n.TEXTURE_2D,1,Vt,vt.width,vt.height):e.texImage2D(n.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Ct,Yt,null));else if(R.isDataTexture)if(ie.length>0){X&&St&&e.texStorage2D(n.TEXTURE_2D,Ut,Vt,ie[0].width,ie[0].height);for(let Mt=0,xt=ie.length;Mt<xt;Mt++)Tt=ie[Mt],X?wt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Tt.width,Tt.height,Ct,Yt,Tt.data):e.texImage2D(n.TEXTURE_2D,Mt,Vt,Tt.width,Tt.height,0,Ct,Yt,Tt.data);R.generateMipmaps=!1}else X?(St&&e.texStorage2D(n.TEXTURE_2D,Ut,Vt,vt.width,vt.height),wt&&nt(R,vt,Ct,Yt)):e.texImage2D(n.TEXTURE_2D,0,Vt,vt.width,vt.height,0,Ct,Yt,vt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){X&&St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,Vt,ie[0].width,ie[0].height,vt.depth);for(let Mt=0,xt=ie.length;Mt<xt;Mt++)if(Tt=ie[Mt],R.format!==Kn)if(Ct!==null)if(X){if(wt)if(R.layerUpdates.size>0){let kt=Cu(Tt.width,Tt.height,R.format,R.type);for(let jt of R.layerUpdates){let Pe=Tt.data.subarray(jt*kt/Tt.data.BYTES_PER_ELEMENT,(jt+1)*kt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,jt,Tt.width,Tt.height,1,Ct,Pe)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Tt.width,Tt.height,vt.depth,Ct,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Mt,Vt,Tt.width,Tt.height,vt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Tt.width,Tt.height,vt.depth,Ct,Yt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Mt,Vt,Tt.width,Tt.height,vt.depth,0,Ct,Yt,Tt.data)}else{X&&St&&e.texStorage2D(n.TEXTURE_2D,Ut,Vt,ie[0].width,ie[0].height);for(let Mt=0,xt=ie.length;Mt<xt;Mt++)Tt=ie[Mt],R.format!==Kn?Ct!==null?X?wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Mt,0,0,Tt.width,Tt.height,Ct,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,Mt,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Tt.width,Tt.height,Ct,Yt,Tt.data):e.texImage2D(n.TEXTURE_2D,Mt,Vt,Tt.width,Tt.height,0,Ct,Yt,Tt.data)}else if(R.isDataArrayTexture)if(X){if(St&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,Vt,vt.width,vt.height,vt.depth),wt)if(R.layerUpdates.size>0){let Mt=Cu(vt.width,vt.height,R.format,R.type);for(let xt of R.layerUpdates){let kt=vt.data.subarray(xt*Mt/vt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,vt.width,vt.height,1,Ct,Yt,kt)}R.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Ct,Yt,vt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,vt.width,vt.height,vt.depth,0,Ct,Yt,vt.data);else if(R.isData3DTexture)X?(St&&e.texStorage3D(n.TEXTURE_3D,Ut,Vt,vt.width,vt.height,vt.depth),wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Ct,Yt,vt.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,vt.width,vt.height,vt.depth,0,Ct,Yt,vt.data);else if(R.isFramebufferTexture){if(St)if(X)e.texStorage2D(n.TEXTURE_2D,Ut,Vt,vt.width,vt.height);else{let Mt=vt.width,xt=vt.height;for(let kt=0;kt<Ut;kt++)e.texImage2D(n.TEXTURE_2D,kt,Vt,Mt,xt,0,Ct,Yt,null),Mt>>=1,xt>>=1}}else if(ie.length>0){if(X&&St){let Mt=Ft(ie[0]);e.texStorage2D(n.TEXTURE_2D,Ut,Vt,Mt.width,Mt.height)}for(let Mt=0,xt=ie.length;Mt<xt;Mt++)Tt=ie[Mt],X?wt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Ct,Yt,Tt):e.texImage2D(n.TEXTURE_2D,Mt,Vt,Ct,Yt,Tt);R.generateMipmaps=!1}else if(X){if(St){let Mt=Ft(vt);e.texStorage2D(n.TEXTURE_2D,Ut,Vt,Mt.width,Mt.height)}wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,Yt,vt)}else e.texImage2D(n.TEXTURE_2D,0,Vt,Ct,Yt,vt);m(R)&&p(ut),Ot.__version=dt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function z(D,R,Y){if(R.image.length!==6)return;let ut=Q(D,R),mt=R.source;e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+Y);let dt=i.get(mt);if(mt.version!==dt.__version||ut===!0){e.activeTexture(n.TEXTURE0+Y);let Ot=ge.getPrimaries(ge.workingColorSpace),Et=R.colorSpace===$i?null:ge.getPrimaries(R.colorSpace),Nt=R.colorSpace===$i||Ot===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let zt=R.isCompressedTexture||R.image[0].isCompressedTexture,vt=R.image[0]&&R.image[0].isDataTexture,Ct=[];for(let xt=0;xt<6;xt++)!zt&&!vt?Ct[xt]=x(R.image[xt],!0,s.maxCubemapSize):Ct[xt]=vt?R.image[xt].image:R.image[xt],Ct[xt]=Rt(R,Ct[xt]);let Yt=Ct[0],Vt=r.convert(R.format,R.colorSpace),Tt=r.convert(R.type),ie=y(R.internalFormat,Vt,Tt,R.colorSpace),X=R.isVideoTexture!==!0,St=dt.__version===void 0||ut===!0,wt=mt.dataReady,Ut=S(R,Yt);W(n.TEXTURE_CUBE_MAP,R);let Mt;if(zt){X&&St&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ie,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){Mt=Ct[xt].mipmaps;for(let kt=0;kt<Mt.length;kt++){let jt=Mt[kt];R.format!==Kn?Vt!==null?X?wt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,jt.width,jt.height,Vt,jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,ie,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,0,0,jt.width,jt.height,Vt,Tt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt,ie,jt.width,jt.height,0,Vt,Tt,jt.data)}}}else{if(Mt=R.mipmaps,X&&St){Mt.length>0&&Ut++;let xt=Ft(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,ie,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(vt){X?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ct[xt].width,Ct[xt].height,Vt,Tt,Ct[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ie,Ct[xt].width,Ct[xt].height,0,Vt,Tt,Ct[xt].data);for(let kt=0;kt<Mt.length;kt++){let Pe=Mt[kt].image[xt].image;X?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,Pe.width,Pe.height,Vt,Tt,Pe.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,ie,Pe.width,Pe.height,0,Vt,Tt,Pe.data)}}else{X?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt,Tt,Ct[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ie,Vt,Tt,Ct[xt]);for(let kt=0;kt<Mt.length;kt++){let jt=Mt[kt];X?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,0,0,Vt,Tt,jt.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,kt+1,ie,Vt,Tt,jt.image[xt])}}}m(R)&&p(n.TEXTURE_CUBE_MAP),dt.__version=mt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function J(D,R,Y,ut,mt,dt){let Ot=r.convert(Y.format,Y.colorSpace),Et=r.convert(Y.type),Nt=y(Y.internalFormat,Ot,Et,Y.colorSpace),zt=i.get(R),vt=i.get(Y);if(vt.__renderTarget=R,!zt.__hasExternalTextures){let Ct=Math.max(1,R.width>>dt),Yt=Math.max(1,R.height>>dt);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,dt,Nt,Ct,Yt,R.depth,0,Ot,Et,null):e.texImage2D(mt,dt,Nt,Ct,Yt,0,Ot,Et,null)}e.bindFramebuffer(n.FRAMEBUFFER,D),ct(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,mt,vt.__webglTexture,0,gt(R)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,mt,vt.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function F(D,R,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,D),R.depthBuffer){let ut=R.depthTexture,mt=ut&&ut.isDepthTexture?ut.type:null,dt=v(R.stencilBuffer,mt),Ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=gt(R);ct(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et,dt,R.width,R.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et,dt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,dt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ot,n.RENDERBUFFER,D)}else{let ut=R.textures;for(let mt=0;mt<ut.length;mt++){let dt=ut[mt],Ot=r.convert(dt.format,dt.colorSpace),Et=r.convert(dt.type),Nt=y(dt.internalFormat,Ot,Et,dt.colorSpace),zt=gt(R);Y&&ct(R)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Nt,R.width,R.height):ct(R)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,Nt,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Nt,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function N(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ut=i.get(R.depthTexture);ut.__renderTarget=R,(!ut.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),L(R.depthTexture,0);let mt=ut.__webglTexture,dt=gt(R);if(R.depthTexture.format===wr)ct(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,mt,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,mt,0);else if(R.depthTexture.format===Hr)ct(R)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,mt,0,dt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function it(D){let R=i.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let ut=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ut){let mt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ut.removeEventListener("dispose",mt)};ut.addEventListener("dispose",mt),R.__depthDisposeCallback=mt}R.__boundDepthTexture=ut}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ut=D.texture.mipmaps;ut&&ut.length>0?N(R.__webglFramebuffer[0],D):N(R.__webglFramebuffer,D)}else if(Y){R.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ut]),R.__webglDepthbuffer[ut]===void 0)R.__webglDepthbuffer[ut]=n.createRenderbuffer(),F(R.__webglDepthbuffer[ut],D,!1);else{let mt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,dt)}}else{let ut=D.texture.mipmaps;if(ut&&ut.length>0?e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),F(R.__webglDepthbuffer,D,!1);else{let mt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(D,R,Y){let ut=i.get(D);R!==void 0&&J(ut.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&it(D)}function E(D){let R=D.texture,Y=i.get(D),ut=i.get(R);D.addEventListener("dispose",w);let mt=D.textures,dt=D.isWebGLCubeRenderTarget===!0,Ot=mt.length>1;if(Ot||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=R.version,o.memory.textures++),dt){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let Nt=0;Nt<R.mipmaps.length;Nt++)Y.__webglFramebuffer[Et][Nt]=n.createFramebuffer()}else Y.__webglFramebuffer[Et]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<R.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ot)for(let Et=0,Nt=mt.length;Et<Nt;Et++){let zt=i.get(mt[Et]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(D.samples>0&&ct(D)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<mt.length;Et++){let Nt=mt[Et];Y.__webglColorRenderbuffer[Et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);let zt=r.convert(Nt.format,Nt.colorSpace),vt=r.convert(Nt.type),Ct=y(Nt.internalFormat,zt,vt,Nt.colorSpace,D.isXRRenderTarget===!0),Yt=gt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,Ct,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),F(Y.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),W(n.TEXTURE_CUBE_MAP,R);for(let Et=0;Et<6;Et++)if(R.mipmaps&&R.mipmaps.length>0)for(let Nt=0;Nt<R.mipmaps.length;Nt++)J(Y.__webglFramebuffer[Et][Nt],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Nt);else J(Y.__webglFramebuffer[Et],D,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);m(R)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let Et=0,Nt=mt.length;Et<Nt;Et++){let zt=mt[Et],vt=i.get(zt),Ct=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,vt.__webglTexture),W(Ct,zt),J(Y.__webglFramebuffer,D,zt,n.COLOR_ATTACHMENT0+Et,Ct,0),m(zt)&&p(Ct)}e.unbindTexture()}else{let Et=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Et=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,ut.__webglTexture),W(Et,R),R.mipmaps&&R.mipmaps.length>0)for(let Nt=0;Nt<R.mipmaps.length;Nt++)J(Y.__webglFramebuffer[Nt],D,R,n.COLOR_ATTACHMENT0,Et,Nt);else J(Y.__webglFramebuffer,D,R,n.COLOR_ATTACHMENT0,Et,0);m(R)&&p(Et),e.unbindTexture()}D.depthBuffer&&it(D)}function lt(D){let R=D.textures;for(let Y=0,ut=R.length;Y<ut;Y++){let mt=R[Y];if(m(mt)){let dt=_(D),Ot=i.get(mt).__webglTexture;e.bindTexture(dt,Ot),p(dt),e.unbindTexture()}}}let ot=[],$=[];function st(D){if(D.samples>0){if(ct(D)===!1){let R=D.textures,Y=D.width,ut=D.height,mt=n.COLOR_BUFFER_BIT,dt=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ot=i.get(D),Et=R.length>1;if(Et)for(let zt=0;zt<R.length;zt++)e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);let Nt=D.texture.mipmaps;Nt&&Nt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let zt=0;zt<R.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),Et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ot.__webglColorRenderbuffer[zt]);let vt=i.get(R[zt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,vt,0)}n.blitFramebuffer(0,0,Y,ut,0,0,Y,ut,mt,n.NEAREST),c===!0&&(ot.length=0,$.length=0,ot.push(n.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ot.push(dt),$.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Et)for(let zt=0;zt<R.length;zt++){e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.RENDERBUFFER,Ot.__webglColorRenderbuffer[zt]);let vt=i.get(R[zt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+zt,n.TEXTURE_2D,vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let R=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function gt(D){return Math.min(s.maxSamples,D.samples)}function ct(D){let R=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function yt(D){let R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function Rt(D,R){let Y=D.colorSpace,ut=D.format,mt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==zs&&Y!==$i&&(ge.getTransfer(Y)===Se?(ut!==Kn||mt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),R}function Ft(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=L,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=at,this.setupRenderTarget=E,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ct}function $2(n,t){function e(i,s=$i){let r,o=ge.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===du)return n.BYTE;if(i===pu)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===Qc)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===zr)return n.HALF_FLOAT;if(i===xu)return n.ALPHA;if(i===_u)return n.RGB;if(i===Kn)return n.RGBA;if(i===wr)return n.DEPTH_COMPONENT;if(i===Hr)return n.DEPTH_STENCIL;if(i===tl)return n.RED;if(i===el)return n.RED_INTEGER;if(i===yu)return n.RG;if(i===nl)return n.RG_INTEGER;if(i===il)return n.RGBA_INTEGER;if(i===ca||i===la||i===ha||i===ua)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sl||i===rl||i===ol||i===al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===ll||i===hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===ll)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l||i===yl||i===vl||i===Ml||i===bl||i===Sl||i===El)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ul)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_l)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ml)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===El)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===Tl||i===Al)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===wl)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rl||i===Cl||i===Il||i===Pl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Q2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Go(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new On({vertexShader:Q2,fragmentShader:j2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends Xi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new Vu,p={},_=e.getContextAttributes(),y=null,v=null,S=[],T=[],w=new Ht,A=null,b=new dn;b.viewport=new De;let M=new dn;M.viewport=new De;let C=[b,M],P=new Oc,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let z=S[G];return z===void 0&&(z=new Pr,S[G]=z),z.getTargetRaySpace()},this.getControllerGrip=function(G){let z=S[G];return z===void 0&&(z=new Pr,S[G]=z),z.getGripSpace()},this.getHand=function(G){let z=S[G];return z===void 0&&(z=new Pr,S[G]=z),z.getHandSpace()};function L(G){let z=T.indexOf(G.inputSource);if(z===-1)return;let J=S[z];J!==void 0&&(J.update(G.inputSource,G.frame,l||o),J.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let G=0;G<S.length;G++){let z=T[G];z!==null&&(T[G]=null,S[G].disconnect(z))}U=null,k=null,m.reset();for(let G in p)delete p[G];t.setRenderTarget(y),f=null,d=null,u=null,s=null,v=null,nt.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,F=null,N=null;_.depth&&(N=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=_.stencil?Hr:wr,F=_.stencil?kr:gs);let it={colorFormat:e.RGBA8,depthFormat:N,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(it),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Ai(d.textureWidth,d.textureHeight,{format:Kn,type:gi,depthTexture:new Vo(d.textureWidth,d.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let J={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Ai(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),nt.setContext(s),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(G){for(let z=0;z<G.removed.length;z++){let J=G.removed[z],F=T.indexOf(J);F>=0&&(T[F]=null,S[F].disconnect(J))}for(let z=0;z<G.added.length;z++){let J=G.added[z],F=T.indexOf(J);if(F===-1){for(let it=0;it<S.length;it++)if(it>=T.length){T.push(J),F=it;break}else if(T[it]===null){T[it]=J,F=it;break}if(F===-1)break}let N=S[F];N&&N.connect(J)}}let H=new O,B=new O;function q(G,z,J){H.setFromMatrixPosition(z.matrixWorld),B.setFromMatrixPosition(J.matrixWorld);let F=H.distanceTo(B),N=z.projectionMatrix.elements,it=J.projectionMatrix.elements,at=N[14]/(N[10]-1),E=N[14]/(N[10]+1),lt=(N[9]+1)/N[5],ot=(N[9]-1)/N[5],$=(N[8]-1)/N[0],st=(it[8]+1)/it[0],gt=at*$,ct=at*st,yt=F/(-$+st),Rt=yt*-$;if(z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Rt),G.translateZ(yt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),N[10]===-1)G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{let Ft=at+yt,D=E+yt,R=gt-Rt,Y=ct+(F-Rt),ut=lt*E/D*Ft,mt=ot*E/D*Ft;G.projectionMatrix.makePerspective(R,Y,ut,mt,Ft,D),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function tt(G,z){z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let z=G.near,J=G.far;m.texture!==null&&(m.depthNear>0&&(z=m.depthNear),m.depthFar>0&&(J=m.depthFar)),P.near=M.near=b.near=z,P.far=M.far=b.far=J,(U!==P.near||k!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),U=P.near,k=P.far),P.layers.mask=G.layers.mask|6,b.layers.mask=P.layers.mask&3,M.layers.mask=P.layers.mask&5;let F=G.parent,N=P.cameras;tt(P,F);for(let it=0;it<N.length;it++)tt(N[it],F);N.length===2?q(P,b,M):P.projectionMatrix.copy(b.projectionMatrix),W(G,P,F)};function W(G,z,J){J===null?G.matrix.copy(z.matrixWorld):(G.matrix.copy(J.matrixWorld),G.matrix.invert(),G.matrix.multiply(z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Tr*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(G){return p[G]};let Q=null;function rt(G,z){if(h=z.getViewerPose(l||o),g=z,h!==null){let J=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let F=!1;J.length!==P.cameras.length&&(P.cameras.length=0,F=!0);for(let E=0;E<J.length;E++){let lt=J[E],ot=null;if(f!==null)ot=f.getViewport(lt);else{let st=u.getViewSubImage(d,lt);ot=st.viewport,E===0&&(t.setRenderTargetTextures(v,st.colorTexture,st.depthStencilTexture),t.setRenderTarget(v))}let $=C[E];$===void 0&&($=new dn,$.layers.enable(E),$.viewport=new De,C[E]=$),$.matrix.fromArray(lt.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(lt.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ot.x,ot.y,ot.width,ot.height),E===0&&(P.matrix.copy($.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),F===!0&&P.cameras.push($)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let E=u.getDepthInformation(J[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(N&&N.includes("camera-access")&&x){t.state.unbindTexture(),u=i.getBinding();for(let E=0;E<J.length;E++){let lt=J[E].camera;if(lt){let ot=p[lt];ot||(ot=new Go,p[lt]=ot);let $=u.getCameraImage(lt);ot.sourceTexture=$}}}}for(let J=0;J<S.length;J++){let F=T[J],N=S[J];F!==null&&N!==void 0&&N.update(F,z,l||o)}Q&&Q(G,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),g=null}let nt=new Ap;nt.setAnimationLoop(rt),this.setAnimationLoop=function(G){Q=G},this.dispose=function(){}}},Js=new pi,K2=new Me;function ty(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===vn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===vn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=t.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,Js.copy(v),Js.x*=-1,Js.y*=-1,Js.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),m.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(Js)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===vn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ey(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){let v=y.program;i.uniformBlockBinding(_,v)}function l(_,y){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let S=y.program;i.updateUBOMapping(_,S);let T=t.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let y=u();_.__bindingPointIndex=y;let v=n.createBuffer(),S=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],v=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,w=v.length;T<w;T++){let A=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,M=A.length;b<M;b++){let C=A[b];if(f(C,T,b,S)===!0){let P=C.__offset,U=Array.isArray(C.value)?C.value:[C.value],k=0;for(let L=0;L<U.length;L++){let V=U[L],j=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,P+k,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,y,v,S){let T=_.value,w=y+"_"+v;if(S[w]===void 0)return typeof T=="number"||typeof T=="boolean"?S[w]=T:S[w]=T.clone(),!0;{let A=S[w];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return S[w]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(_){let y=_.uniforms,v=0,S=16;for(let w=0,A=y.length;w<A;w++){let b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,C=b.length;M<C;M++){let P=b[M],U=Array.isArray(P.value)?P.value:[P.value];for(let k=0,L=U.length;k<L;k++){let V=U[k],j=x(V),H=v%S,B=H%j.boundary,q=H+B;v+=B,q!==0&&S-q<j.storage&&(v+=S-q),P.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=j.storage}}}let T=v%S;return T>0&&(v+=S-T),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ol=class{constructor(t={}){let{canvas:e=Jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,S=!1;this._outputColorSpace=Bn;let T=0,w=0,A=null,b=-1,M=null,C=new De,P=new De,U=null,k=new ee(0),L=0,V=e.width,j=e.height,H=1,B=null,q=null,tt=new De(0,0,V,j),W=new De(0,0,V,j),Q=!1,rt=new Dr,nt=!1,G=!1,z=new Me,J=new O,F=new De,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function at(){return A===null?H:1}let E=i;function lt(I,K){return e.getContext(I,K)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),E===null){let K="webgl2";if(E=lt(K,I),E===null)throw lt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ot,$,st,gt,ct,yt,Rt,Ft,D,R,Y,ut,mt,dt,Ot,Et,Nt,zt,vt,Ct,Yt,Vt,Tt,ie;function X(){ot=new y_(E),ot.init(),Vt=new $2(E,ot),$=new f_(E,ot,t,Vt),st=new Z2(E,ot),$.reversedDepthBuffer&&d&&st.buffers.depth.setReversed(!0),gt=new b_(E),ct=new U2,yt=new J2(E,ot,st,ct,$,Vt,gt),Rt=new p_(v),Ft=new __(v),D=new R1(E),Tt=new h_(E,D),R=new v_(E,D,gt,Tt),Y=new E_(E,R,D,gt),vt=new S_(E,$,yt),Et=new d_(ct),ut=new F2(v,Rt,Ft,ot,$,Tt,Et),mt=new ty(v,ct),dt=new B2,Ot=new G2(ot),zt=new l_(v,Rt,Ft,st,Y,f,c),Nt=new q2(v,Y,$),ie=new ey(E,gt,$,st),Ct=new u_(E,ot,gt),Yt=new M_(E,ot,gt),gt.programs=ut.programs,v.capabilities=$,v.extensions=ot,v.properties=ct,v.renderLists=dt,v.shadowMap=Nt,v.state=st,v.info=gt}X();let St=new Gu(v,E);this.xr=St,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let I=ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(V,j,!1))},this.getSize=function(I){return I.set(V,j)},this.setSize=function(I,K,ht=!0){if(St.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=I,j=K,e.width=Math.floor(I*H),e.height=Math.floor(K*H),ht===!0&&(e.style.width=I+"px",e.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(V*H,j*H).floor()},this.setDrawingBufferSize=function(I,K,ht){V=I,j=K,H=ht,e.width=Math.floor(I*ht),e.height=Math.floor(K*ht),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(tt)},this.setViewport=function(I,K,ht,ft){I.isVector4?tt.set(I.x,I.y,I.z,I.w):tt.set(I,K,ht,ft),st.viewport(C.copy(tt).multiplyScalar(H).round())},this.getScissor=function(I){return I.copy(W)},this.setScissor=function(I,K,ht,ft){I.isVector4?W.set(I.x,I.y,I.z,I.w):W.set(I,K,ht,ft),st.scissor(P.copy(W).multiplyScalar(H).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(I){st.setScissorTest(Q=I)},this.setOpaqueSort=function(I){B=I},this.setTransparentSort=function(I){q=I},this.getClearColor=function(I){return I.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(I=!0,K=!0,ht=!0){let ft=0;if(I){let et=!1;if(A!==null){let bt=A.texture.format;et=bt===il||bt===nl||bt===el}if(et){let bt=A.texture.type,It=bt===gi||bt===gs||bt===Or||bt===kr||bt===jc||bt===Kc,Bt=zt.getClearColor(),Dt=zt.getClearAlpha(),Jt=Bt.r,Qt=Bt.g,Wt=Bt.b;It?(g[0]=Jt,g[1]=Qt,g[2]=Wt,g[3]=Dt,E.clearBufferuiv(E.COLOR,0,g)):(x[0]=Jt,x[1]=Qt,x[2]=Wt,x[3]=Dt,E.clearBufferiv(E.COLOR,0,x))}else ft|=E.COLOR_BUFFER_BIT}K&&(ft|=E.DEPTH_BUFFER_BIT),ht&&(ft|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),zt.dispose(),dt.dispose(),Ot.dispose(),ct.dispose(),Rt.dispose(),Ft.dispose(),Y.dispose(),Tt.dispose(),ie.dispose(),ut.dispose(),St.dispose(),St.removeEventListener("sessionstart",Ti),St.removeEventListener("sessionend",Af),Is.stop()};function wt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let I=gt.autoReset,K=Nt.enabled,ht=Nt.autoUpdate,ft=Nt.needsUpdate,et=Nt.type;X(),gt.autoReset=I,Nt.enabled=K,Nt.autoUpdate=ht,Nt.needsUpdate=ft,Nt.type=et}function Mt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function xt(I){let K=I.target;K.removeEventListener("dispose",xt),kt(K)}function kt(I){jt(I),ct.remove(I)}function jt(I){let K=ct.get(I).programs;K!==void 0&&(K.forEach(function(ht){ut.releaseProgram(ht)}),I.isShaderMaterial&&ut.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,ht,ft,et,bt){K===null&&(K=N);let It=et.isMesh&&et.matrixWorld.determinant()<0,Bt=$m(I,K,ht,ft,et);st.setMaterial(ft,It);let Dt=ht.index,Jt=1;if(ft.wireframe===!0){if(Dt=R.getWireframeAttribute(ht),Dt===void 0)return;Jt=2}let Qt=ht.drawRange,Wt=ht.attributes.position,le=Qt.start*Jt,Ae=(Qt.start+Qt.count)*Jt;bt!==null&&(le=Math.max(le,bt.start*Jt),Ae=Math.min(Ae,(bt.start+bt.count)*Jt)),Dt!==null?(le=Math.max(le,0),Ae=Math.min(Ae,Dt.count)):Wt!=null&&(le=Math.max(le,0),Ae=Math.min(Ae,Wt.count));let Xe=Ae-le;if(Xe<0||Xe===1/0)return;Tt.setup(et,ft,Bt,ht,Dt);let Le,Ce=Ct;if(Dt!==null&&(Le=D.get(Dt),Ce=Yt,Ce.setIndex(Le)),et.isMesh)ft.wireframe===!0?(st.setLineWidth(ft.wireframeLinewidth*at()),Ce.setMode(E.LINES)):Ce.setMode(E.TRIANGLES);else if(et.isLine){let Xt=ft.linewidth;Xt===void 0&&(Xt=1),st.setLineWidth(Xt*at()),et.isLineSegments?Ce.setMode(E.LINES):et.isLineLoop?Ce.setMode(E.LINE_LOOP):Ce.setMode(E.LINE_STRIP)}else et.isPoints?Ce.setMode(E.POINTS):et.isSprite&&Ce.setMode(E.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))Ce.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let Xt=et._multiDrawStarts,ze=et._multiDrawCounts,_e=et._multiDrawCount,Ln=Dt?D.get(Dt).bytesPerElement:1,cr=ct.get(ft).currentProgram.getUniforms();for(let Fn=0;Fn<_e;Fn++)cr.setValue(E,"_gl_DrawID",Fn),Ce.render(Xt[Fn]/Ln,ze[Fn])}else if(et.isInstancedMesh)Ce.renderInstances(le,Xe,et.count);else if(ht.isInstancedBufferGeometry){let Xt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,ze=Math.min(ht.instanceCount,Xt);Ce.renderInstances(le,Xe,ze)}else Ce.render(le,Xe)};function Pe(I,K,ht){I.transparent===!0&&I.side===Mn&&I.forceSinglePass===!1?(I.side=vn,I.needsUpdate=!0,Da(I,K,ht),I.side=ui,I.needsUpdate=!0,Da(I,K,ht),I.side=Mn):Da(I,K,ht)}this.compile=function(I,K,ht=null){ht===null&&(ht=I),p=Ot.get(ht),p.init(K),y.push(p),ht.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),I!==ht&&I.traverseVisible(function(et){et.isLight&&et.layers.test(K.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights();let ft=new Set;return I.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let bt=et.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){let Bt=bt[It];Pe(Bt,ht,et),ft.add(Bt)}else Pe(bt,ht,et),ft.add(bt)}),p=y.pop(),ft},this.compileAsync=function(I,K,ht=null){let ft=this.compile(I,K,ht);return new Promise(et=>{function bt(){if(ft.forEach(function(It){ct.get(It).currentProgram.isReady()&&ft.delete(It)}),ft.size===0){et(I);return}setTimeout(bt,10)}ot.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ve=null;function Bi(I){ve&&ve(I)}function Ti(){Is.stop()}function Af(){Is.start()}let Is=new Ap;Is.setAnimationLoop(Bi),typeof self!="undefined"&&Is.setContext(self),this.setAnimationLoop=function(I){ve=I,St.setAnimationLoop(I),I===null?Is.stop():Is.start()},St.addEventListener("sessionstart",Ti),St.addEventListener("sessionend",Af),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),St.enabled===!0&&St.isPresenting===!0&&(St.cameraAutoUpdate===!0&&St.updateCamera(K),K=St.getCamera()),I.isScene===!0&&I.onBeforeRender(v,I,K,A),p=Ot.get(I,y.length),p.init(K),y.push(p),z.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),rt.setFromProjectionMatrix(z,hi,K.reversedDepth),G=this.localClippingEnabled,nt=Et.init(this.clippingPlanes,G),m=dt.get(I,_.length),m.init(),_.push(m),St.enabled===!0&&St.isPresenting===!0){let bt=v.xr.getDepthSensingMesh();bt!==null&&yh(bt,K,-1/0,v.sortObjects)}yh(I,K,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(B,q),it=St.enabled===!1||St.isPresenting===!1||St.hasDepthSensing()===!1,it&&zt.addToRenderList(m,I),this.info.render.frame++,nt===!0&&Et.beginShadows();let ht=p.state.shadowsArray;Nt.render(ht,I,K),nt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();let ft=m.opaque,et=m.transmissive;if(p.setupLights(),K.isArrayCamera){let bt=K.cameras;if(et.length>0)for(let It=0,Bt=bt.length;It<Bt;It++){let Dt=bt[It];Cf(ft,et,I,Dt)}it&&zt.render(I);for(let It=0,Bt=bt.length;It<Bt;It++){let Dt=bt[It];Rf(m,I,Dt,Dt.viewport)}}else et.length>0&&Cf(ft,et,I,K),it&&zt.render(I),Rf(m,I,K);A!==null&&w===0&&(yt.updateMultisampleRenderTarget(A),yt.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(v,I,K),Tt.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&Et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function yh(I,K,ht,ft){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)ht=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||rt.intersectsSprite(I)){ft&&F.setFromMatrixPosition(I.matrixWorld).applyMatrix4(z);let It=Y.update(I),Bt=I.material;Bt.visible&&m.push(I,It,Bt,ht,F.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||rt.intersectsObject(I))){let It=Y.update(I),Bt=I.material;if(ft&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),F.copy(I.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),F.copy(It.boundingSphere.center)),F.applyMatrix4(I.matrixWorld).applyMatrix4(z)),Array.isArray(Bt)){let Dt=It.groups;for(let Jt=0,Qt=Dt.length;Jt<Qt;Jt++){let Wt=Dt[Jt],le=Bt[Wt.materialIndex];le&&le.visible&&m.push(I,It,le,ht,F.z,Wt)}}else Bt.visible&&m.push(I,It,Bt,ht,F.z,null)}}let bt=I.children;for(let It=0,Bt=bt.length;It<Bt;It++)yh(bt[It],K,ht,ft)}function Rf(I,K,ht,ft){let et=I.opaque,bt=I.transmissive,It=I.transparent;p.setupLightsView(ht),nt===!0&&Et.setGlobalState(v.clippingPlanes,ht),ft&&st.viewport(C.copy(ft)),et.length>0&&Pa(et,K,ht),bt.length>0&&Pa(bt,K,ht),It.length>0&&Pa(It,K,ht),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Cf(I,K,ht,ft){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ft.id]===void 0&&(p.state.transmissionRenderTarget[ft.id]=new Ai(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?zr:gi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));let bt=p.state.transmissionRenderTarget[ft.id],It=ft.viewport||C;bt.setSize(It.z*v.transmissionResolutionScale,It.w*v.transmissionResolutionScale);let Bt=v.getRenderTarget(),Dt=v.getActiveCubeFace(),Jt=v.getActiveMipmapLevel();v.setRenderTarget(bt),v.getClearColor(k),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),it&&zt.render(ht);let Qt=v.toneMapping;v.toneMapping=Ji;let Wt=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),p.setupLightsView(ft),nt===!0&&Et.setGlobalState(v.clippingPlanes,ft),Pa(I,ht,ft),yt.updateMultisampleRenderTarget(bt),yt.updateRenderTargetMipmap(bt),ot.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ae=0,Xe=K.length;Ae<Xe;Ae++){let Le=K[Ae],Ce=Le.object,Xt=Le.geometry,ze=Le.material,_e=Le.group;if(ze.side===Mn&&Ce.layers.test(ft.layers)){let Ln=ze.side;ze.side=vn,ze.needsUpdate=!0,If(Ce,ht,ft,Xt,ze,_e),ze.side=Ln,ze.needsUpdate=!0,le=!0}}le===!0&&(yt.updateMultisampleRenderTarget(bt),yt.updateRenderTargetMipmap(bt))}v.setRenderTarget(Bt,Dt,Jt),v.setClearColor(k,L),Wt!==void 0&&(ft.viewport=Wt),v.toneMapping=Qt}function Pa(I,K,ht){let ft=K.isScene===!0?K.overrideMaterial:null;for(let et=0,bt=I.length;et<bt;et++){let It=I[et],Bt=It.object,Dt=It.geometry,Jt=It.group,Qt=It.material;Qt.allowOverride===!0&&ft!==null&&(Qt=ft),Bt.layers.test(ht.layers)&&If(Bt,K,ht,Dt,Qt,Jt)}}function If(I,K,ht,ft,et,bt){I.onBeforeRender(v,K,ht,ft,et,bt),I.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),et.onBeforeRender(v,K,ht,ft,I,bt),et.transparent===!0&&et.side===Mn&&et.forceSinglePass===!1?(et.side=vn,et.needsUpdate=!0,v.renderBufferDirect(ht,K,ft,et,I,bt),et.side=ui,et.needsUpdate=!0,v.renderBufferDirect(ht,K,ft,et,I,bt),et.side=Mn):v.renderBufferDirect(ht,K,ft,et,I,bt),I.onAfterRender(v,K,ht,ft,et,bt)}function Da(I,K,ht){K.isScene!==!0&&(K=N);let ft=ct.get(I),et=p.state.lights,bt=p.state.shadowsArray,It=et.state.version,Bt=ut.getParameters(I,et.state,bt,K,ht),Dt=ut.getProgramCacheKey(Bt),Jt=ft.programs;ft.environment=I.isMeshStandardMaterial?K.environment:null,ft.fog=K.fog,ft.envMap=(I.isMeshStandardMaterial?Ft:Rt).get(I.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,Jt===void 0&&(I.addEventListener("dispose",xt),Jt=new Map,ft.programs=Jt);let Qt=Jt.get(Dt);if(Qt!==void 0){if(ft.currentProgram===Qt&&ft.lightsStateVersion===It)return Df(I,Bt),Qt}else Bt.uniforms=ut.getUniforms(I),I.onBeforeCompile(Bt,v),Qt=ut.acquireProgram(Bt,Dt),Jt.set(Dt,Qt),ft.uniforms=Bt.uniforms;let Wt=ft.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Wt.clippingPlanes=Et.uniform),Df(I,Bt),ft.needsLights=jm(I),ft.lightsStateVersion=It,ft.needsLights&&(Wt.ambientLightColor.value=et.state.ambient,Wt.lightProbe.value=et.state.probe,Wt.directionalLights.value=et.state.directional,Wt.directionalLightShadows.value=et.state.directionalShadow,Wt.spotLights.value=et.state.spot,Wt.spotLightShadows.value=et.state.spotShadow,Wt.rectAreaLights.value=et.state.rectArea,Wt.ltc_1.value=et.state.rectAreaLTC1,Wt.ltc_2.value=et.state.rectAreaLTC2,Wt.pointLights.value=et.state.point,Wt.pointLightShadows.value=et.state.pointShadow,Wt.hemisphereLights.value=et.state.hemi,Wt.directionalShadowMap.value=et.state.directionalShadowMap,Wt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Wt.spotShadowMap.value=et.state.spotShadowMap,Wt.spotLightMatrix.value=et.state.spotLightMatrix,Wt.spotLightMap.value=et.state.spotLightMap,Wt.pointShadowMap.value=et.state.pointShadowMap,Wt.pointShadowMatrix.value=et.state.pointShadowMatrix),ft.currentProgram=Qt,ft.uniformsList=null,Qt}function Pf(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=Xr.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function Df(I,K){let ht=ct.get(I);ht.outputColorSpace=K.outputColorSpace,ht.batching=K.batching,ht.batchingColor=K.batchingColor,ht.instancing=K.instancing,ht.instancingColor=K.instancingColor,ht.instancingMorph=K.instancingMorph,ht.skinning=K.skinning,ht.morphTargets=K.morphTargets,ht.morphNormals=K.morphNormals,ht.morphColors=K.morphColors,ht.morphTargetsCount=K.morphTargetsCount,ht.numClippingPlanes=K.numClippingPlanes,ht.numIntersection=K.numClipIntersection,ht.vertexAlphas=K.vertexAlphas,ht.vertexTangents=K.vertexTangents,ht.toneMapping=K.toneMapping}function $m(I,K,ht,ft,et){K.isScene!==!0&&(K=N),yt.resetTextureUnits();let bt=K.fog,It=ft.isMeshStandardMaterial?K.environment:null,Bt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zs,Dt=(ft.isMeshStandardMaterial?Ft:Rt).get(ft.envMap||It),Jt=ft.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,Qt=!!ht.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Wt=!!ht.morphAttributes.position,le=!!ht.morphAttributes.normal,Ae=!!ht.morphAttributes.color,Xe=Ji;ft.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Xe=v.toneMapping);let Le=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Ce=Le!==void 0?Le.length:0,Xt=ct.get(ft),ze=p.state.lights;if(nt===!0&&(G===!0||I!==M)){let _n=I===M&&ft.id===b;Et.setState(ft,I,_n)}let _e=!1;ft.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ze.state.version||Xt.outputColorSpace!==Bt||et.isBatchedMesh&&Xt.batching===!1||!et.isBatchedMesh&&Xt.batching===!0||et.isBatchedMesh&&Xt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Xt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Xt.instancing===!1||!et.isInstancedMesh&&Xt.instancing===!0||et.isSkinnedMesh&&Xt.skinning===!1||!et.isSkinnedMesh&&Xt.skinning===!0||et.isInstancedMesh&&Xt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Xt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Xt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Xt.instancingMorph===!1&&et.morphTexture!==null||Xt.envMap!==Dt||ft.fog===!0&&Xt.fog!==bt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Et.numPlanes||Xt.numIntersection!==Et.numIntersection)||Xt.vertexAlphas!==Jt||Xt.vertexTangents!==Qt||Xt.morphTargets!==Wt||Xt.morphNormals!==le||Xt.morphColors!==Ae||Xt.toneMapping!==Xe||Xt.morphTargetsCount!==Ce)&&(_e=!0):(_e=!0,Xt.__version=ft.version);let Ln=Xt.currentProgram;_e===!0&&(Ln=Da(ft,K,et));let cr=!1,Fn=!1,xo=!1,ke=Ln.getUniforms(),qn=Xt.uniforms;if(st.useProgram(Ln.program)&&(cr=!0,Fn=!0,xo=!0),ft.id!==b&&(b=ft.id,Fn=!0),cr||M!==I){st.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),ke.setValue(E,"projectionMatrix",I.projectionMatrix),ke.setValue(E,"viewMatrix",I.matrixWorldInverse);let En=ke.map.cameraPosition;En!==void 0&&En.setValue(E,J.setFromMatrixPosition(I.matrixWorld)),$.logarithmicDepthBuffer&&ke.setValue(E,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&ke.setValue(E,"isOrthographic",I.isOrthographicCamera===!0),M!==I&&(M=I,Fn=!0,xo=!0)}if(et.isSkinnedMesh){ke.setOptional(E,et,"bindMatrix"),ke.setOptional(E,et,"bindMatrixInverse");let _n=et.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),ke.setValue(E,"boneTexture",_n.boneTexture,yt))}et.isBatchedMesh&&(ke.setOptional(E,et,"batchingTexture"),ke.setValue(E,"batchingTexture",et._matricesTexture,yt),ke.setOptional(E,et,"batchingIdTexture"),ke.setValue(E,"batchingIdTexture",et._indirectTexture,yt),ke.setOptional(E,et,"batchingColorTexture"),et._colorsTexture!==null&&ke.setValue(E,"batchingColorTexture",et._colorsTexture,yt));let Yn=ht.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&vt.update(et,ht,Ln),(Fn||Xt.receiveShadow!==et.receiveShadow)&&(Xt.receiveShadow=et.receiveShadow,ke.setValue(E,"receiveShadow",et.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(qn.envMap.value=Dt,qn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&K.environment!==null&&(qn.envMapIntensity.value=K.environmentIntensity),Fn&&(ke.setValue(E,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&Qm(qn,xo),bt&&ft.fog===!0&&mt.refreshFogUniforms(qn,bt),mt.refreshMaterialUniforms(qn,ft,H,j,p.state.transmissionRenderTarget[I.id]),Xr.upload(E,Pf(Xt),qn,yt)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Xr.upload(E,Pf(Xt),qn,yt),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&ke.setValue(E,"center",et.center),ke.setValue(E,"modelViewMatrix",et.modelViewMatrix),ke.setValue(E,"normalMatrix",et.normalMatrix),ke.setValue(E,"modelMatrix",et.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){let _n=ft.uniformsGroups;for(let En=0,vh=_n.length;En<vh;En++){let Ps=_n[En];ie.update(Ps,Ln),ie.bind(Ps,Ln)}}return Ln}function Qm(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function jm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,K,ht){let ft=ct.get(I);ft.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),ct.get(I.texture).__webglTexture=K,ct.get(I.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ht,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,K){let ht=ct.get(I);ht.__webglFramebuffer=K,ht.__useDefaultFramebuffer=K===void 0};let Km=E.createFramebuffer();this.setRenderTarget=function(I,K=0,ht=0){A=I,T=K,w=ht;let ft=!0,et=null,bt=!1,It=!1;if(I){let Dt=ct.get(I);if(Dt.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(E.FRAMEBUFFER,null),ft=!1;else if(Dt.__webglFramebuffer===void 0)yt.setupRenderTarget(I);else if(Dt.__hasExternalTextures)yt.rebindTextures(I,ct.get(I.texture).__webglTexture,ct.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Wt=I.depthTexture;if(Dt.__boundDepthTexture!==Wt){if(Wt!==null&&ct.has(Wt)&&(I.width!==Wt.image.width||I.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");yt.setupDepthRenderbuffer(I)}}let Jt=I.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(It=!0);let Qt=ct.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Qt[K])?et=Qt[K][ht]:et=Qt[K],bt=!0):I.samples>0&&yt.useMultisampledRTT(I)===!1?et=ct.get(I).__webglMultisampledFramebuffer:Array.isArray(Qt)?et=Qt[ht]:et=Qt,C.copy(I.viewport),P.copy(I.scissor),U=I.scissorTest}else C.copy(tt).multiplyScalar(H).floor(),P.copy(W).multiplyScalar(H).floor(),U=Q;if(ht!==0&&(et=Km),st.bindFramebuffer(E.FRAMEBUFFER,et)&&ft&&st.drawBuffers(I,et),st.viewport(C),st.scissor(P),st.setScissorTest(U),bt){let Dt=ct.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,ht)}else if(It){let Dt=K;for(let Jt=0;Jt<I.textures.length;Jt++){let Qt=ct.get(I.textures[Jt]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Jt,Qt.__webglTexture,ht,Dt)}}else if(I!==null&&ht!==0){let Dt=ct.get(I.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Dt.__webglTexture,ht)}b=-1},this.readRenderTargetPixels=function(I,K,ht,ft,et,bt,It,Bt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt){st.bindFramebuffer(E.FRAMEBUFFER,Dt);try{let Jt=I.textures[Bt],Qt=Jt.format,Wt=Jt.type;if(!$.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ft&&ht>=0&&ht<=I.height-et&&(I.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Bt),E.readPixels(K,ht,ft,et,Vt.convert(Qt),Vt.convert(Wt),bt))}finally{let Jt=A!==null?ct.get(A).__webglFramebuffer:null;st.bindFramebuffer(E.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(I,K,ht,ft,et,bt,It,Bt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ct.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&It!==void 0&&(Dt=Dt[It]),Dt)if(K>=0&&K<=I.width-ft&&ht>=0&&ht<=I.height-et){st.bindFramebuffer(E.FRAMEBUFFER,Dt);let Jt=I.textures[Bt],Qt=Jt.format,Wt=Jt.type;if(!$.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,le),E.bufferData(E.PIXEL_PACK_BUFFER,bt.byteLength,E.STREAM_READ),I.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Bt),E.readPixels(K,ht,ft,et,Vt.convert(Qt),Vt.convert(Wt),0);let Ae=A!==null?ct.get(A).__webglFramebuffer:null;st.bindFramebuffer(E.FRAMEBUFFER,Ae);let Xe=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await $d(E,Xe,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,le),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,bt),E.deleteBuffer(le),E.deleteSync(Xe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,K=null,ht=0){let ft=Math.pow(2,-ht),et=Math.floor(I.image.width*ft),bt=Math.floor(I.image.height*ft),It=K!==null?K.x:0,Bt=K!==null?K.y:0;yt.setTexture2D(I,0),E.copyTexSubImage2D(E.TEXTURE_2D,ht,0,0,It,Bt,et,bt),st.unbindTexture()};let t0=E.createFramebuffer(),e0=E.createFramebuffer();this.copyTextureToTexture=function(I,K,ht=null,ft=null,et=0,bt=null){bt===null&&(et!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=et,et=0):bt=0);let It,Bt,Dt,Jt,Qt,Wt,le,Ae,Xe,Le=I.isCompressedTexture?I.mipmaps[bt]:I.image;if(ht!==null)It=ht.max.x-ht.min.x,Bt=ht.max.y-ht.min.y,Dt=ht.isBox3?ht.max.z-ht.min.z:1,Jt=ht.min.x,Qt=ht.min.y,Wt=ht.isBox3?ht.min.z:0;else{let Yn=Math.pow(2,-et);It=Math.floor(Le.width*Yn),Bt=Math.floor(Le.height*Yn),I.isDataArrayTexture?Dt=Le.depth:I.isData3DTexture?Dt=Math.floor(Le.depth*Yn):Dt=1,Jt=0,Qt=0,Wt=0}ft!==null?(le=ft.x,Ae=ft.y,Xe=ft.z):(le=0,Ae=0,Xe=0);let Ce=Vt.convert(K.format),Xt=Vt.convert(K.type),ze;K.isData3DTexture?(yt.setTexture3D(K,0),ze=E.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(yt.setTexture2DArray(K,0),ze=E.TEXTURE_2D_ARRAY):(yt.setTexture2D(K,0),ze=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,K.unpackAlignment);let _e=E.getParameter(E.UNPACK_ROW_LENGTH),Ln=E.getParameter(E.UNPACK_IMAGE_HEIGHT),cr=E.getParameter(E.UNPACK_SKIP_PIXELS),Fn=E.getParameter(E.UNPACK_SKIP_ROWS),xo=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Le.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Le.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Jt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Qt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Wt);let ke=I.isDataArrayTexture||I.isData3DTexture,qn=K.isDataArrayTexture||K.isData3DTexture;if(I.isDepthTexture){let Yn=ct.get(I),_n=ct.get(K),En=ct.get(Yn.__renderTarget),vh=ct.get(_n.__renderTarget);st.bindFramebuffer(E.READ_FRAMEBUFFER,En.__webglFramebuffer),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,vh.__webglFramebuffer);for(let Ps=0;Ps<Dt;Ps++)ke&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ct.get(I).__webglTexture,et,Wt+Ps),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ct.get(K).__webglTexture,bt,Xe+Ps)),E.blitFramebuffer(Jt,Qt,It,Bt,le,Ae,It,Bt,E.DEPTH_BUFFER_BIT,E.NEAREST);st.bindFramebuffer(E.READ_FRAMEBUFFER,null),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(et!==0||I.isRenderTargetTexture||ct.has(I)){let Yn=ct.get(I),_n=ct.get(K);st.bindFramebuffer(E.READ_FRAMEBUFFER,t0),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,e0);for(let En=0;En<Dt;En++)ke?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Yn.__webglTexture,et,Wt+En):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Yn.__webglTexture,et),qn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,_n.__webglTexture,bt,Xe+En):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,_n.__webglTexture,bt),et!==0?E.blitFramebuffer(Jt,Qt,It,Bt,le,Ae,It,Bt,E.COLOR_BUFFER_BIT,E.NEAREST):qn?E.copyTexSubImage3D(ze,bt,le,Ae,Xe+En,Jt,Qt,It,Bt):E.copyTexSubImage2D(ze,bt,le,Ae,Jt,Qt,It,Bt);st.bindFramebuffer(E.READ_FRAMEBUFFER,null),st.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else qn?I.isDataTexture||I.isData3DTexture?E.texSubImage3D(ze,bt,le,Ae,Xe,It,Bt,Dt,Ce,Xt,Le.data):K.isCompressedArrayTexture?E.compressedTexSubImage3D(ze,bt,le,Ae,Xe,It,Bt,Dt,Ce,Le.data):E.texSubImage3D(ze,bt,le,Ae,Xe,It,Bt,Dt,Ce,Xt,Le):I.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,bt,le,Ae,It,Bt,Ce,Xt,Le.data):I.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,bt,le,Ae,Le.width,Le.height,Ce,Le.data):E.texSubImage2D(E.TEXTURE_2D,bt,le,Ae,It,Bt,Ce,Xt,Le);E.pixelStorei(E.UNPACK_ROW_LENGTH,_e),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ln),E.pixelStorei(E.UNPACK_SKIP_PIXELS,cr),E.pixelStorei(E.UNPACK_SKIP_ROWS,Fn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,xo),bt===0&&K.generateMipmaps&&E.generateMipmap(ze),st.unbindTexture()},this.initRenderTarget=function(I){ct.get(I).__webglFramebuffer===void 0&&yt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?yt.setTextureCube(I,0):I.isData3DTexture?yt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?yt.setTexture2DArray(I,0):yt.setTexture2D(I,0),st.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,st.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};function Dp(n,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,o=0,a=Object.keys(n.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let _=0,y=a.length;_<y;_++){let v=a[_],S=n.attributes[v];c[v]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let T=n.morphAttributes[v];T&&(l[v]||(l[v]=[]),T.forEach((w,A)=>{let b=new w.array.constructor(w.count*w.itemSize);l[v][A]=new w.constructor(b,w.itemSize,w.normalized)}))}let f=t*.5,g=Math.log10(1/t),x=Math.pow(10,g),m=f*x;for(let _=0;_<r;_++){let y=i?i.getX(_):_,v="";for(let S=0,T=a.length;S<T;S++){let w=a[S],A=n.getAttribute(w),b=A.itemSize;for(let M=0;M<b;M++)v+=`${~~(A[u[M]](y)*x+m)},`}if(v in e)h.push(e[v]);else{for(let S=0,T=a.length;S<T;S++){let w=a[S],A=n.getAttribute(w),b=n.morphAttributes[w],M=A.itemSize,C=c[w],P=l[w];for(let U=0;U<M;U++){let k=u[U],L=d[U];if(C[L](o,A[k](y)),b)for(let V=0,j=b.length;V<j;V++)P[V][L](o,b[V][k](y))}}e[v]=o,h.push(o),o++}}let p=n.clone();for(let _ in n.attributes){let y=c[_];if(p.setAttribute(_,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),_ in l)for(let v=0;v<l[_].length;v++){let S=l[_][v];p.morphAttributes[_][v]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var Xu=n=>n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4),Lp=new Map;function Fp(n){if(Array.isArray(n))return n;let t=Lp.get(n);if(t)return t;let e=parseInt(n.slice(1),16);return t=[Xu((e>>16&255)/255),Xu((e>>8&255)/255),Xu((e&255)/255)],Lp.set(n,t),t}function _s(n,t){let e=Fp(n);return[Math.min(1,e[0]*t),Math.min(1,e[1]*t),Math.min(1,e[2]*t)]}var xs=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,i,s,r){let o=this.buf(t),a=Fp(e),c=s[0]-i[0],l=s[1]-i[1],h=s[2]-i[2],u=r[0]-i[0],d=r[1]-i[1],f=r[2]-i[2],g=l*f-h*d,x=h*u-c*f,m=c*d-l*u,p=Math.hypot(g,x,m)||1;g/=p,x/=p,m/=p,o.p.push(i[0],i[1],i[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(g,x,m,g,x,m,g,x,m),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,i,s,r,o){this.tri(t,e,i,s,r),this.tri(t,e,i,r,o)}trih(t,e,i,s,r,o,a,c){this.tri(t,e,i,s,r);let l=this.L[t];(l.h||(l.h=[])).push(o,a,c)}box(t,e,i,s,r,o,a,c,l=""){if(i>o&&([i,o]=[o,i]),s>a&&([s,a]=[a,s]),r>c&&([r,c]=[c,r]),o-i<1e-4||a-s<1e-4||c-r<1e-4)return;let h=(u,d,f)=>[u,d,f];l.includes("t")||this.quad(t,e,h(i,a,c),h(o,a,c),h(o,a,r),h(i,a,r)),l.includes("b")||this.quad(t,e,h(i,s,r),h(o,s,r),h(o,s,c),h(i,s,c)),this.quad(t,e,h(i,s,c),h(o,s,c),h(o,a,c),h(i,a,c)),this.quad(t,e,h(o,s,r),h(i,s,r),h(i,a,r),h(o,a,r)),this.quad(t,e,h(o,s,c),h(o,s,r),h(o,a,r),h(o,a,c)),this.quad(t,e,h(i,s,r),h(i,s,c),h(i,a,c),h(i,a,r))}obox(t,e,i,s,r,o){let a=(l,h,u)=>[i[0]+l*s[0]+h*r[0]+u*o[0],i[1]+l*s[1]+h*r[1]+u*o[1],i[2]+l*s[2]+h*r[2]+u*o[2]],c=(l,h,u,d)=>this.quad(t,e,l,h,u,d);c(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),c(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),c(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),c(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),c(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),c(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,i,s,r,o,a,c,l=0){let h=Math.cos(l),u=Math.sin(l);this.obox(t,e,[i,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*c/2,0,h*c/2])}beam(t,e,i,s,r,o=r){let a=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],c=Math.hypot(...a)||1,l=a.map(g=>g/c),h=Math.abs(l[1])<.95?[l[2],0,-l[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(g=>g/u);let d=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],f=[(i[0]+s[0])/2,(i[1]+s[1])/2,(i[2]+s[2])/2];this.obox(t,e,f,h.map(g=>g*r/2),d.map(g=>g*o/2),l.map(g=>g*c/2))}prism(t,e,i,s,r,o={}){var d,f;let a=i.length,c=0;for(let g=0;g<a;g++){let x=i[g],m=i[(g+1)%a];c+=x[0]*m[1]-m[0]*x[1]}let l=c>0?i:[...i].reverse(),h=(d=o.top)!=null?d:e,u=(f=o.side)!=null?f:e;if(o.top!==!1)for(let g=1;g<a-1;g++)this.tri(t,h,[l[0][0],r,l[0][1]],[l[g+1][0],r,l[g+1][1]],[l[g][0],r,l[g][1]]);if(o.bottom!==!1)for(let g=1;g<a-1;g++)this.tri(t,u,[l[0][0],s,l[0][1]],[l[g][0],s,l[g][1]],[l[g+1][0],s,l[g+1][1]]);if(o.sides!==!1)for(let g=0;g<a;g++){let x=l[g],m=l[(g+1)%a];this.quad(t,u,[m[0],s,m[1]],[x[0],s,x[1]],[x[0],r,x[1]],[m[0],r,m[1]])}}cyl(t,e,i,s,r,o,a,c=8,l=Math.PI/8,h={}){let u=[];for(let d=0;d<c;d++){let f=l+d*Math.PI*2/c;u.push([i+Math.cos(f)*a,s+Math.sin(f)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,i,s,r,o,a,c,l=8,h=Math.PI/8){for(let u=0;u<l;u++){let d=h+u*Math.PI*2/l,f=h+(u+1)*Math.PI*2/l,g=[i+Math.cos(d)*a,r,s+Math.sin(d)*a],x=[i+Math.cos(f)*a,r,s+Math.sin(f)*a],m=[i+Math.cos(d)*c,o,s+Math.sin(d)*c],p=[i+Math.cos(f)*c,o,s+Math.sin(f)*c];this.quad(t,e,g,m,p,x),c>.001&&this.tri(t,e,[i,o,s],p,m),this.tri(t,e,[i,r,s],g,x)}}wall(t,e,i,s,r,o,a,c=[],l={}){let h=s[0]-i[0],u=s[1]-i[1],d=Math.hypot(h,u);if(d<.001)return null;let f=h/d,g=u/d,x=-g,m=f,p=o-r,_=(w,A,b=0)=>[i[0]+f*w+x*b,r+A,i[1]+g*w+m*b],y=new Set([0,d]),v=c.map(w=>{var A,b;return{s0:Math.max(0,w.a),s1:Math.min(d,w.a+w.w),y0:(A=w.y0)!=null?A:0,y1:Math.min(p,(b=w.y1)!=null?b:p)}}).filter(w=>w.s1>w.s0+.001);for(let w of v)y.add(w.s0),y.add(w.s1);let S=[...y].sort((w,A)=>w-A),T=Math.atan2(g,f);for(let w=0;w<S.length-1;w++){let A=S[w],b=S[w+1];if(b-A<.001)continue;let M=(A+b)/2,C=v.filter(k=>k.s0<=M&&k.s1>=M).sort((k,L)=>k.y0-L.y0),P=0,U=[];for(let k of C)k.y0>P+.001&&U.push([P,k.y0]),P=Math.max(P,k.y1);P<p-.001&&U.push([P,p]);for(let[k,L]of U){let V=_(M,(k+L)/2);this.ybox(t,e,V[0],V[1],V[2],b-A,L-k,a,T)}}return{at:_,L:d,ux:f,uz:g,nx:x,nz:m,yaw:T}}rail(t,e,i,s,r=1.05,o=.5,a={}){var h,u;let c=(h=a.w)!=null?h:.07,l=(u=a.top)!=null?u:.12;for(let d=0;d<i.length-1;d++){let f=i[d],g=i[d+1],x=Math.hypot(g[0]-f[0],g[1]-f[1]);if(x<.05)continue;this.beam(t,e,[f[0],s+r,f[1]],[g[0],s+r,g[1]],l,.08),this.beam(t,e,[f[0],s+.12,f[1]],[g[0],s+.12,g[1]],c,c);let m=Math.max(1,Math.round(x/o));for(let p=0;p<=m;p++){if(p===0&&d>0)continue;let _=f[0]+(g[0]-f[0])*p/m,y=f[1]+(g[1]-f[1])*p/m,v=p===0||p===m;this.box(t,e,_-(v?.09:c/2),s,y-(v?.09:c/2),_+(v?.09:c/2),s+r,y+(v?.09:c/2))}}}stairs(t,e,i,s,r,o,a,c,l,h){let u=Math.cos(o),d=Math.sin(o);for(let f=0;f<a;f++){let g=l*(f+.5),x=i+u*g,m=s+d*g,p=r+c*(f+1);this.ybox(t,e,x,(r+p)/2,m,l,p-r,h,o)}}slab(t,e,i,s,r,o,a={}){var p,_;let c=y=>new Ht(y[0],y[1]),l=y=>{let v=0;for(let S=0;S<y.length;S++){let T=y[S],w=y[(S+1)%y.length];v+=T[0]*w[1]-w[0]*T[1]}return v},h=l(i)>0?i:[...i].reverse(),u=s.map(y=>l(y)>0?[...y].reverse():y),d=[...h,...u.flat()],f=Qo.triangulateShape(h.map(c),u.map(y=>y.map(c))),g=(p=a.top)!=null?p:e,x=(_=a.side)!=null?_:e;for(let[y,v,S]of f){let T=d[y],w=d[v],A=d[S],b=(A[0]-T[0])*(w[1]-T[1])-(w[0]-T[0])*(A[1]-T[1]),[M,C]=b>0?[w,A]:[A,w];a.top!==!1&&this.tri(t,g,[T[0],o,T[1]],[M[0],o,M[1]],[C[0],o,C[1]]),a.bottom!==!1&&this.tri(t,x,[T[0],r,T[1]],[C[0],r,C[1]],[M[0],r,M[1]])}let m=y=>{for(let v=0;v<y.length;v++){let S=y[v],T=y[(v+1)%y.length];this.quad(t,x,[T[0],r,T[1]],[S[0],r,S[1]],[S[0],o,S[1]],[T[0],o,T[1]])}};if(a.sides!==!1){m(h);for(let y of u)m(y)}}plate(t,e,i,s=.3){let r=0;for(let c=0;c<4;c++){let l=i[c],h=i[(c+1)%4];r+=l[0]*h[2]-h[0]*l[2]}let o=r>0?[...i].reverse():i,a=o.map(c=>[c[0],c[1]-s,c[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let c=0;c<4;c++){let l=(c+1)%4;this.quad(t,e,a[c],a[l],o[l],o[c])}}out(){let t={};for(let[e,i]of Object.entries(this.L))t[e]={p:new Float32Array(i.p),n:new Float32Array(i.n),c:new Float32Array(i.c)},i.h&&(t[e].h=new Float32Array(i.h));return t}};var Ge={x0:-165,x1:165,z0:-238,z1:88,base:-50},Qi={y:15,x0:-170,x1:128,z0:-200,z1:-7},ny=[[-90,100],[-60,66],[-44,52],[-34,47.2],[-28.4,46.6],[-26.2,50.4],[-23.4,54.4],[-18.6,57.6],[-12.6,59.4],[-8,58.6],[-3.4,55],[1.4,49.4],[5.6,43.2],[9.4,38.8],[14,38.2],[20,39.6],[26,42.6],[32,46],[45,54],[60,66],[90,100]],Zu=n=>{let t=ny;if(n<=t[0][0])return t[0][1];if(n>=t[t.length-1][0])return t[t.length-1][1];let e=1;for(;t[e][0]<n;)e++;let i=t[e-1],s=t[e],r=s[0]-i[0],o=(n-i[0])/r,a=d=>{let f=t[Math.max(0,d-1)],g=t[Math.min(t.length-1,d+1)],x=(t[d][1]-f[1])/(t[d][0]-f[0]||1),m=(g[1]-t[d][1])/(g[0]-t[d][0]||1);return x*m<=0?0:2/(1/x+1/m)},c=a(e-1)*r,l=a(e)*r,h=o*o,u=h*o;return(2*u-3*h+1)*i[1]+(u-2*h+o)*c+(-2*u+3*h)*s[1]+(u-h)*l},qu=[[-3.6,55.4],[-8.6,58.2],[-12,59.4],[-16.5,62],[-19.8,65.4],[-23.6,70.4],[-25,75.6],[-25.8,81],[-26.6,86.6],[-28,96],[-31,125]];function iy(n,t){let e=1e9,i=1;for(let s=0;s<qu.length-1;s++){let r=qu[s],o=qu[s+1],a=o[0]-r[0],c=o[1]-r[1],l=Math.max(0,Math.min(1,((n-r[0])*a+(t-r[1])*c)/(a*a+c*c))),h=Math.hypot(n-r[0]-a*l,t-r[1]-c*l);h<e&&(e=h,i=a*(t-r[1])-c*(n-r[0])>=0?1:-1)}return e*i}var Jr=(n,t)=>{let e=Zu(n)-t;return n>-4||t<40?e:Math.max(e,iy(n,t))},kl=[[-29.7,44.3],[-29.6,50],[-29.2,55.4],[-28.2,60.2],[-26.4,64],[-22.8,67.8]],ti={z:22.6,y0:2,y1:8,w:5,k:.0062,c:-2},da=n=>ti.z+ti.k*(n-ti.c)*(n-ti.c),_i={ox:-11,oz:36,x:-6,z:52,rot:35*Math.PI/180},$r=(n,t)=>{let e=n-_i.ox,i=t-_i.oz,s=Math.cos(_i.rot),r=Math.sin(_i.rot);return[_i.x+e*s+i*r,_i.z-e*r+i*s]},pe={x0:-18,x1:-4,z0:30,z1:42,y:2.3},Re={x0:-13.2,x1:-8.8,z0:42,z1:54,y:2.1},ji={x:-11,z:61.8,len:15,w:5},Up={x0:-16.6,x1:-5.4,z0:30.4,z1:35.6,h:3.4},$t={x:-11,z:37.6},Rn={x:-4,z0:32.6,z1:37.4},mn={x:-7.6,z:28.4},Np={x0:12,x1:24,z0:37,z1:43,y:2},Bp=[[-23,-7],[-26.5,1],[-30,9],[-32,17],[-30,23],[-28.6,30],[-28.8,38],[-29.4,46],[-29.4,54],[-28.4,60],[-26.2,64.2],[-22.4,68.2],[-20.4,72],[-21.2,80],[-22.6,90],[32,90],[28.6,50],[26.8,44],[26,36],[25.2,28],[24.4,20],[23,13],[21,7],[21,-7]],Zr=[[-6.4,25.6],[-9.5,24.2],[-14,23.1],[-19,22.2],[-24,21.6],[-27.8,20.2],[-29.6,17.4],[-29.4,14],[-27.4,11],[-24,9],[-20.6,7.6],[-18.8,5.4]],sy=[[0,1.9],[4,2],[21,8.2],[23.6,8.45],[33,11.75],[38,12],[99,12]],Yu=n=>{let t=sy,e=1;for(;e<t.length-1&&t[e][0]<n;)e++;let i=t[e-1],s=t[e],r=Math.max(0,Math.min(1,(n-i[0])/(s[0]-i[0])));return i[1]+(s[1]-i[1])*r},ei=(()=>{let n=[Zr[0],...Zr,Zr[Zr.length-1]],t=[];for(let i=1;i<n.length-2;i++){let s=n[i-1],r=n[i],o=n[i+1],a=n[i+2],c=Math.max(2,Math.ceil(Math.hypot(o[0]-r[0],o[1]-r[1])/.6));for(let l=0;l<c;l++){let h=l/c,u=h*h,d=u*h;t.push([0,1].map(f=>.5*(2*r[f]+(o[f]-s[f])*h+(2*s[f]-5*r[f]+4*o[f]-a[f])*u+(3*r[f]-s[f]-3*o[f]+a[f])*d)))}}t.push(Zr[Zr.length-1]);let e=0;return t.map((i,s)=>(s&&(e+=Math.hypot(i[0]-t[s-1][0],i[1]-t[s-1][1])),[i[0],i[1],+((Yu(e-1.2)+2*Yu(e)+Yu(e+1.2))/4).toFixed(3),e]))})(),Op=ei[ei.length-1][3];function on(n){let t=ei,e=1;for(;e<t.length-1&&t[e][3]<n;)e++;let i=t[e-1],s=t[e],r=s[3]-i[3]||1,o=Math.max(0,Math.min(1,(n-i[3])/r));return[i[0]+(s[0]-i[0])*o,i[1]+(s[1]-i[1])*o,i[2]+(s[2]-i[2])*o,(s[0]-i[0])/r,(s[1]-i[1])/r]}var Ju=[[4.4,20.8],[24,33.4]].flatMap(([n,t])=>{let e=on(n)[2],i=on(t)[2],s=Math.round((i-e)/.3),r=[],o=a=>{let c=n,l=t;for(let h=0;h<30;h++){let u=(c+l)/2;on(u)[2]<a?c=u:l=u}return(c+l)/2};for(let a=0;a<s;a++)r.push([a?o(e+(i-e)*a/s):n,a<s-1?o(e+(i-e)*(a+1)/s):t,+(e+(i-e)*(a+1)/s).toFixed(3)]);return r}),$u=2.5;function zp(n,t){let e=1e9,i=0;for(let s=0;s<ei.length-1;s++){let r=ei[s],o=ei[s+1],a=o[0]-r[0],c=o[1]-r[1],l=Math.max(0,Math.min(1,((n-r[0])*a+(t-r[1])*c)/(a*a+c*c))),h=Math.hypot(n-r[0]-a*l,t-r[1]-c*l);h<e&&(e=h,i=r[3]+(o[3]-r[3])*l)}if(e>$u/2+.05)return null;for(let s of Ju)if(i>=s[0]&&i<s[1])return s[2];return null}var Qr=3.2,xe={y:12,x0:-22,x1:20.4,z0:-6,z1:11.4},bn={x:20.4,z:-.6,w:8.6,h:6.4},Qu={x:19.6,z1:11.4},Cn={pas:-2.4,fre:1.2},In={x0:-19,x1:-6,z0:-.9,z1:2.3,y:12.9},Pi={x0:-1.6,x1:8.6,z0:7.4,z1:10.2,y:12.9},pa={a:[15.6,13.6,10.8],b:[18.4,4.2,31.2]},Pn={C:[[17.4,-.6],[30,-.6],[46,-.6],[58.6,-3],[67,-10.4],[70.2,-21],[67,-31.6],[58.6,-38.8],[44,-41.3],[22,-43.2],[0,-43.7],[-20,-42.5],[-37,-40.2],[-43.5,-41.7],[-48.3,-46.5],[-50,-53]],pre:[5,-.6],post:[-50,-58],yk:[[0,12],[.22,11.8],[.4,11.2],[.92,9.9],[1,9.5]],runZ:-42.5,w:7.2,h:5.4},kp=[{x:39,z:-.6,side:"n",w:5.4,d:4.4},{x:-21,z:-40.4,side:"n",w:6,d:4.2}],Lt={floor:5.5,top:14,hi:9.5,hA:8.5,hB:10,sumps:[[-70.2,-119.6,5.8,5,1.9],[-66,-125,4.4,3.6,1.3],[-72.4,-114,3.2,3.4,1]],wy:-.7,pit:{c:[[-55.4,-107.6,3.4],[-51,-109.4,3.6],[-54.2,-111.2,2.6]],d:2.8},lobes:[{x:-58,z:-72,r:24},{x:-54.6,z:-97,r:15.6},{x:-55,z:-116,r:19}],bays:[[-33.2,-79,5.2],[-36.9,-103.5,4.4],[-71.8,-101.5,4.6],[-73.8,-121.5,5.2],[-68.5,-131,4],[-44.5,-132.4,4.2]],SWR:[[-88,-66.6],[-81.6,-63.2],[-77.7,-60.5],[-73.7,-58.3],[-70.2,-56.7],[-65.9,-55.9],[-60.4,-54.3],[-56.4,-52.3],[-54.1,-49.5],[-52.3,-47.5],[-51.6,-44],[-58,-36],[-90,-36]],SER:[[-29,-72.6],[-34.4,-69.5],[-38.3,-67.8],[-42.2,-65],[-45.2,-62.6],[-47,-60.2],[-47.5,-56.7],[-46.6,-53.5],[-45.8,-50.7],[-45.3,-47],[-43,-38],[-26,-38]],HG:[[-70.6,-55.6],[-70.4,-59.2],[-68.4,-61.1],[-64.6,-62.6],[-61.1,-65.5],[-58.2,-66.9],[-56,-64.8],[-53.6,-63],[-46.2,-62.4],[-44.2,-60.6],[-44.2,-49],[-51.5,-44.4],[-62,-50.2]],A:[[-86,-91.2],[-74.6,-90.8],[-73.5,-86.5],[-72.2,-82.9],[-69.6,-78.6],[-69.2,-75.2],[-70.6,-72.7],[-75.3,-70.8],[-78.5,-69.6],[-82,-70.6],[-86,-71]],B:[[-56.9,-91],[-56.7,-84],[-56.2,-78.6],[-53.9,-75.9],[-49.6,-75.6],[-46.5,-77.6],[-45.3,-81.3],[-45.9,-85.5],[-47.6,-91]],RAMPS:[{P:[[-57.4,-66.2],[-54.6,-69.4],[-50.1,-68],[-45.7,-67.1],[-45.3,-62.3],[-47,-62.3],[-53.6,-62.9],[-56,-64.6]],a:[-46.4,-63.4],b:[-55.6,-68.6],ya:9.5,yb:5.5},{P:[[-75.4,-91.6],[-70.4,-93.2],[-67.8,-88.2],[-72.3,-82.8],[-73.6,-86.4]],a:[-73.1,-84],b:[-70.3,-91.9],ya:8.5,yb:5.5}],P:[[-55.4,-101.5],[-48.6,-101.2],[-48.9,-90],[-55.4,-90]],nook:{x:-37.5,z:-122},gate:{x:-58,z:-134.4}},pt={floor:-10,top:22,cut:14.2,E:{x:9.5,z:-88,y:7},CL:{x0:17,x1:25,z0:-91,z1:-83,y:3},P4:{x:31.5,z:-77.5,s:4,y:4},BP:{x0:44.5,x1:59,z0:-98.5,z1:-73.5,y:2.5},WALL:57,B1:{x0:59.5,x1:71.5,z0:-93,z1:-79,f2:7,top:10.8,fx:59.3,niche:[55,59.5,-93.7,-78.3,12.4],ST:{x0:61,x1:66.4,z:-92.15,w:1.3},EX:[67.4,68.8]},B1X:[[68.1,7,-92.4],[67.4,7.1,-97.2],[61.4,7.3,-100.4],[59.6,7.3,-101.2]],PIL:{x:37,z:-94.5,r:3,y:10},SH:{x:31.2,z:-94.6,rx:5.2,rz:5.4,r:5.2,y:15,up:16.2,wx:30},WPC:[27.4,-116],WP:{x0:26,x1:38.5,z0:-126,z1:-112,y:10},B2:{x0:28.4,x1:35.4,z0:-131.8,z1:-125.6,top:13.4,fz:-125.5,niche:[27.6,36.2,-125.45,-121.5,13.8]},DP:{x0:40,x1:53,z0:-126,z1:-108,y:0},DOOR:{x:47,z:-124.2,w:5,h:5.2},CPY:9.6,PK:[[27.7,-83.5,-2.9,.8,2.4],[29.7,-81.7,-1.6,.8,2.4],[36.2,-75.2,-1.9,.85,2.6],[39.3,-74.7,-4.4,.9,2.8],[42.5,-75.7,-2.7,.85,2.6],[21.8,-78.2,-6.7,.85,2],[20.6,-79.7,-4.7,.8,1.6],[40.8,-84.6,-6.8,.85,2],[42.4,-83.4,-5,.8,1.6],[56.3,-113,-7,.85,2],[28.9,-105.9,4.4,1.1,3.6]],JUMP:[5,2,2,1,1],CLIMB:[[31.2,-77.6,4,1],[47,-76.5,2.5,4],[20.6,-83,3,6],[46.4,-83.5,2.5,8],[51.6,-113.1,0,9]],ZIP:{a:[34,-98.2],b:[48.6,-119.4],ha:2.8,hb:3.2,sag:.75,ya:16.2,yb:0},RANGED:[[33.6,-90.6],[31.9,-93.8],[32.2,-97.2]],STAL:[[15.5,-103.5,-6.6,1.2,3.6],[21.5,-114,-3.4,.9,3.4],[11.5,-70,-9,1.1,3.2],[19.6,-66.4,-8,.9,3],[38.6,-66.6,-6.4,.8,2.8],[8.6,-108.6,-8.4,1,3.2]],RUB:[[12.6,-104.6,4.6,3.2,-6.4],[24.4,-66.8,5.4,3.4,-6.6],[40.4,-62.2,4.4,3,-6.3],[52.6,-104.2,3.4,2.6,-6.6],[9.4,-72,3.6,4.4,-6.5]],F:{EC:{P:[[-8,-96],[6,-96.6],[11.6,-95.8],[15.8,-94.6],[19.6,-93.2],[24.4,-93],[26.6,-90.6],[26.4,-85.4],[25,-81.8],[20.6,-80.6],[17.8,-79.9],[15.6,-78.6],[13.4,-78],[11,-78.6],[8.6,-79.6],[6,-80.2],[-8,-80]],h:3,rim:.8,wp:.9,B:[[11.6,-93.4,1.8,.9],[9.6,-94.4,2,1.3],[26,-92.4,1.6,.9]]},P4:{P:[[29.3,-79.2],[31.6,-79.9],[33.7,-78.8],[33.6,-76.2],[31.4,-75.2],[29.4,-75.9]],h:4,rim:.3,wp:.4,foot:2.2,amp:.4,B:[]},BP:{P:[[44,-97],[46.6,-99.6],[51.8,-99.9],[56.4,-101.4],[76,-102],[76,-70],[59,-71],[55,-73.2],[50.8,-72.6],[46.4,-73.6],[43.6,-77],[44.6,-80.2],[44,-85],[44.8,-90.6],[43.6,-93.6]],h:2.5,rim:.8,T:(n,t)=>.5*Math.min(1,Math.max(0,(n-52.4)/3))*Math.min(1,Math.max(0,(t+97.6)/2.4))*Math.min(1,Math.max(0,(-74.6-t)/2.4)),und:.55,B:[[45.4,-96.6,2.6,1.5],[57.2,-75.2,4.4,1.7,"t"],[44.6,-86.4,1.6,.8],[51.4,-84.6,3.6,.7]]},WP:{P:[[23.6,-142],[24,-123],[24.8,-116.2],[27.4,-112],[32.4,-110.6],[36.2,-111.4],[38.2,-115.4],[38.8,-120.4],[38.8,-142]],h:10,rim:.8,und:.5,B:[[25.6,-121.4,2.6,1.3,"t"],[31.4,-112.6,1.6,.8]]},DP:{P:[[40.4,-142],[40,-121],[40.6,-113],[42.6,-108.4],[46.6,-106.6],[51.2,-107.4],[53.8,-111],[54.2,-118],[53.4,-142]],h:0,rim:.7,und:.4,B:[[52.6,-111,2.4,1.1],[41.6,-116.6,1.6,.7],[52.2,-120.4,2.6,1.2,"t"]]}},FALL:{x:61,z:-60.4,w:5,lip:13.8,brx:6.4,brz:4.8,by:3.2},SKY:[[31.4,-95.2,2.2,32.5,-93.4,15],[52.4,-86,2.8,56.6,-86,3]]},ae={x0:15,x1:33.4,z0:-159,z1:-144,y:0,h:7,pil:[19.2,-155.6,1.15]};var jr={x:94,z:-164,w:30,h:26},Kr=-30;function Hl(n,t){let e=Math.imul(n,668265261)^Math.imul(t,374761393);return e=Math.imul(e^e>>>15,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,(e>>>0)/4294967296}function ue(n,t){let e=Math.floor(n),i=Math.floor(t),s=n-e,r=t-i,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Hl(e,i),l=Hl(e+1,i),h=Hl(e,i+1),u=Hl(e+1,i+1);return(c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a)*2-1}function ni(n,t,e=4){let i=0,s=.5,r=1;for(let o=0;o<e;o++)i+=s*ue(n*r,t*r),r*=2.03,s*=.5;return i}var qt=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)},ma=(n,t,e)=>Math.max(t,Math.min(e,n)),Ne=(n,t,e)=>n+(t-n)*e,ry=(n,t,e)=>{let i=ma(.5+.5*(n-t)/e,0,1);return Ne(t,n,i)+e*i*(1-i)},kn=n=>{let t=Math.max(0,n-30,-30-n);return-6-2.4*Math.exp(-(((n+1)/15)**2))+.8*ue(n*.085+2.3,1.1)-.006*t*t},Vp=n=>-164.2+1.6*Math.sin(n*.05+.6)-6.2*Math.exp(-(((n-71.5)/5.2)**2)),Ye=n=>Vp(n)-1*Math.exp(-(((n-48.5)/2.6)**2))+2.2*Math.exp(-(((n-55)/3.2)**2)),xa=n=>Vp(n)-.6*Math.exp(-(((n-48.5)/2.6)**2))+1.25,yi=n=>-.2+1.2*qt(57,64,n)*(1-qt(74.5,78.5,n)),Ku=n=>qt(30,36,n)*(1-qt(110,118,n)),to=n=>(2.6+.5*Math.sin(n*.4+1))*(1-.74*Math.exp(-(((n-55)/3.6)**2)))+5.5*qt(80,86,n)*(1-qt(104,110,n)),oy=[[-66,-90,50,52],[-8,-110,62,66],[88,-106,45,50]];function ay(n,t){let e=n+10*ni(n*.012+11,t*.012-5,2),i=t+10*ni(n*.012-3,t*.012+7,2),s=30+6*ni(e*.012+3,i*.012-2,3);for(let[a,c,l,h]of oy){let u=((e-a)**2+((i-c)*1.15)**2)/(h*h);s+=l*Math.exp(-u*2.1)}let r=1-Math.abs(ue(e*.032+5,i*.032-1)),o=1-Math.abs(ue(e*.075-2,i*.075+3));return s+=(r*r*10-5+(o*o*3-1.5))*qt(32,64,s),s+=2.2*ni(n*.07,t*.07,2),s-=11*Math.exp(-(((n+37)/13)**2+((t+100)/34)**2)),s-=16*Math.exp(-(((n-38)/26)**2+((t+92)/22)**2)),s-=22*qt(100,155,Math.abs(n-10)),s}var Vl=(()=>{let n=ei.map(e=>e[0]),t=ei.map(e=>e[1]);return[Math.min(...n)-7,Math.max(...n)+7,Math.min(...t)-7,Math.max(...t)+7]})();function tf(n,t){let e=1e9,i=0;if(n<Vl[0]||n>Vl[1]||t<Vl[2]||t>Vl[3])return{d:e,y:i};for(let s=0;s<ei.length-1;s++){let r=ei[s],o=ei[s+1],a=o[0]-r[0],c=o[1]-r[1],l=a*a+c*c,h=ma(((n-r[0])*a+(t-r[1])*c)/l,0,1),u=r[0]+a*h,d=r[1]+c*h,f=Math.hypot(n-u,t-d);f<e&&(e=f,i=Ne(r[2],o[2],h))}return{d:e,y:i}}var Gp=tf;function cy(n,t,e){let i=1e9,s=1;for(let r=0,o=n.length-1;r<n.length;o=r++){let a=n[o],c=n[r],l=c[0]-a[0],h=c[1]-a[1],u=t-a[0],d=e-a[1],f=ma((u*l+d*h)/(l*l+h*h),0,1);i=Math.min(i,Math.hypot(u-l*f,d-h*f)),a[1]>e!=c[1]>e&&t<a[0]+(e-a[1])*l/h&&(s=-s)}return s*i}var Xl=(n,t)=>{let e=qt(14,26,t);return cy(Bp,n+Ne(4.6,1.6,e)*ue(t*.042,2.7)+1.6*ue(t*.12,8.2),t+3*ue(n*.05,6.1))+Ne(1.4,.8,e)*ue(n*.12+1.3,t*.12-2)};function Hp(n,t){let e=Jr(n,t),i=2+26*qt(-3,40,e)+5*ni(n*.035+1.7,t*.035,3),s=1-Math.abs(ue(n*.05+3,t*.05-1));i+=(s*s*7-2.5)*qt(5,20,i),i=ry(i,0,2);let r=da(n)+.9*ue(n*.14,3.7),o=ti.w+1.1*ue(n*.1,9.1),a;if(t>r){let f=ma((t-r)/Math.max(3,t-r+e),0,1);a=ti.y0-(ti.y0-.25)*Math.pow(f,1.25)+.15*ni(n*.3,t*.3,2)}else if(t>r-o){let f=(r-t)/o,g=1-Math.abs(ue(n*.17+4,2.2));a=Ne(ti.y1,ti.y0,qt(r-o,r,t))+.35*ni(n*.2,t*.2,2)+(1.5*g*g-.62)*Math.sin(Math.PI*f)**1.3}else{let f=ma((r-o-t)/Math.max(2,r-o-xe.z1),0,1);a=ti.y1+(xe.y-.4-ti.y1)*qt(0,1,f)+.6*ni(n*.09,t*.09,3)}let c=qt(14,26,t),l=Xl(n,t),h=Ne(24,13,c)+Ne(9,4,c)*ue(n*.03+4.4,t*.03-1.9),u=Math.pow(qt(-1.5,h,l),Ne(1.3,.8,c)),d=Ne(a,Math.max(a,i),u);return e<0&&(d=Math.min(d,-.3+.32*e)),Math.max(d,-7)}function ly(n,t,e){let i=xe.x1+.3*ue(t*.3,4.4)+qt(8,13,t)*(1.2+3.2*qt(9,16,t)+.8*ue(t*.2,7.7))+.9*qt(-7,-10,t)*ue(t*.25,1.9),s=Math.max(e,25+4*ni(n*.05+2,t*.05-3,3)+5*qt(26,50,n)-7*qt(6,16,t)),r=2.2+3.2*qt(9,15,t),o=Ne(xe.y,s,Math.pow(qt(i,i+r,n),.8))+.5*ue(n*.6,t*.6)*qt(i,i+1,n);return Ne(o,e,qt(14,24,t))}function ce(n,t,e){let i=kn(n),s=Ye(n),r;if(t>i)r=Hp(n,t);else{let u=ay(n,t),d=Hp(n,i),f=i-t,g=qt(-31,-21,n)*(1-qt(18.8,20.2,n)),x=Ne(d,u,Math.pow(qt(0,Ne(18,5.5,qt(-40,-26,n)*(1-qt(19,30,n))),f),.8));if(g>0){let m=ue(n*.07+3.1,1.7),p=ue(n*.05-2.2,5.3),_=ue(n*.09+7,2.9),y=6.2+2.2*p,v=6.8+2.4*_,S=.25*ue(n*.4,t*.4)+1.15*m,T=d+y*Math.pow(qt(.2,2.2,f),.9)+v*Math.pow(qt(4.7+S,6.7+S,f),.9)-.35*qt(2.2,4.7,f)*(1-qt(4.7,5.2,f));T+=.4*ue(n*.35,t*.35)*qt(2.2,3,f)*(1-qt(4.3,4.8,f));let w=Math.max(0,ue(n*.42+1.1,7.1))*1.6;T-=w*(qt(.4,1.2,f)*(1-qt(1.8,2.3,f))+qt(5,5.8,f)*(1-qt(6.3,6.8,f))),T=f<9?T+.2*ue(n*.7,2):Ne(T,Math.max(u,T),qt(9,18,f)),T=Math.min(T,Math.max(u,d+y*qt(.2,2.2,f))),r=Ne(x,T,g)}else r=x}let o=n+2.4*ue(t*.07+4.1,2.2),a=t+1.6*ue(n*.06,8.3),c=Math.max(xe.x0-o,0),l=Math.max(xe.z0-t,a-xe.z1,0),h=Math.hypot(c,l);if(t>i-.5&&n<xe.x1+4&&(r=Ne(xe.y,r,qt(0,6,h))),n>xe.x1-1.2&&t>i-14&&t<25&&(r=Math.max(r,ly(n,t,r))),!e){let u=tf(n,t),d=Qr/2;u.d<d+2.6&&(r=r<u.y?Ne(u.y,r,qt(d+.45,d+1.25,u.d)):Ne(u.y,r,qt(d,d+2.6,u.d)))}if(t<s+9){let u=Ku(n),d=to(n),f=r,g=yi(n),x=s+d,m,p=(1-Math.abs(ue(n*.19+7,3.3)))**2,_=(1-Math.abs(ue(n*.12+2,8.1)))**2;t>=x?m=Ne(g,f,Math.pow(qt(x,x+2.3+3.2*(1-p),t),.7)):t>=s?m=g+.1*ue(n*.5,t*.5):m=Ne(Kr+2+3*ni(n*.04,t*.04,2),g,Math.pow(qt(s-6-4*_,s,t),1.6));let y=t>=s?Ne(Kr,f,Math.pow(qt(s,s+9,t),.58+.45*p)):Ne(Kr+2+3*ni(n*.04,t*.04,2),Kr,qt(s-6,s,t));r=Ne(y,m,u)}if(t<s-6){let u=Math.abs(t-(-183+4*Math.sin(n*.03)));r=Math.min(r,Ne(Kr-2.6,r,qt(4,9,u)))}return t<-188&&(r+=qt(-188,-234,t)*(50+16*ni(n*.015+3,t*.02,2))*(.85+.15*Math.sin(n*.02+1.3))),r}var Gl=96,ju=[[0,0],[10,.3],[36,.655],[Gl,1]],Wp=n=>{let t=1;for(;ju[t][0]<n;)t++;let e=ju[t-1],i=ju[t];return e[1]+(i[1]-e[1])*(n-e[0])/(i[0]-e[0])},hy=n=>Math.round(75+29*qt(64,86,n)),uy=(n,t)=>t<Gl?Ge.z1-(Ge.z1-kn(n)-Wl[0])*Wp(t):kn(n)+Wl[t-Gl],fy=n=>n>Qu.x?uy(n,hy(n)):-1e9;function ga(n,t){return t>Ye(n)+(Ku(n)>.5?to(n):-1)&&t<kn(n)-.2?!0:n>Qu.x&&t<fy(n)-.01&&t>Ye(n)}function dy(n,t,e,i){let s=Zu(n);return t<Ye(n)+to(n)+.2&&t>Ye(n)-.3&&Ku(n)>.5&&Math.abs(e-yi(n))<.6?"ledge":e<-26.5&&t<Ye(n)-6?"river":t<kn(n)&&t>kn(n)-9.5&&n>-28&&n<20.4&&e<30?i<.62?"qface":"bench":i<.62?e>3?"rock":"bankrock":Jr(n,t)<1.2&&e<.9?"wet":tf(n,t).d<Qr/2+.2?"path":t<=xe.z1+.5&&t>=kn(n)-.5&&n>xe.x0-1&&n<xe.x1+.3&&Math.abs(e-xe.y)<.4?"yard":t>da(n)-.4&&Jr(n,t)>-2&&e<3.2&&Xl(n,t)<1?"beach":t<Ye(n)-4?"valley":e>60?"high":"grass"}var py={qface:"#AFA493",bench:"#BDB19C",wet:"#C9BC9D",beach:"#D9CDB0",path:"#C9B795",yard:"#C4B293",grass:"#A3AC82",valley:"#9EAA7E",high:"#B3B19A",rock:"#A69D8E",bankrock:"#B4A68C",ledge:"#B9AD98",river:"#8FA39A"},Wl=[7,5,3.5,2.4,1.5,.8,.3,0,-.2,-.7,-1.2,-1.7,-2.2,-2.5,-3.5,-4.4,-4.7,-5.2,-5.7,-6.2,-6.7,-7,-8,-9,-10.5,-12.5,-15];function Xp(n){let t=kn(n),e=Ye(n),i=to(n),s=[],r=Ge.z1,o=t+Wl[0];for(let f=0;f<Gl;f++)s.push(r-(r-o)*Wp(f));for(let f of Wl)s.push(t+f);let a=t-17,c=e+i+6,l=96;for(let f=0;f<l;f++)s.push(a-(a-c)*f/l);for(let f of[4.5,3.2,2.2,1.3,.6,.2,0])s.push(e+i+f);for(let f of[i*.66,i*.33,.25,0,-.4,-1,-2,-3.2,-4.6,-6.2,-8])s.push(e+f);let h=e-10,u=Ge.z0,d=34;for(let f=0;f<=d;f++)s.push(h-(h-u)*f/d);return s}var LS=Xp(0).length;function qp(n,t){let i=Ge.x0,s=Ge.x1,r=[];for(let x=i;x<s-1e-6;x+=x>=-39&&x<30?1.5/2:1.5)r.push(+x.toFixed(4));r.push(s);let o=r.length-1,a=[];for(let x=0;x<=o;x++){let m=r[x],p=Xp(m);a.push(p.map(_=>[m,ce(m,_),_]))}let c=a[0].length,l=a.map((x,m)=>x.map((p,_)=>{let y=a[Math.max(0,m-1)][_],v=a[Math.min(o,m+1)][_],S=x[Math.max(0,_-1)],T=x[Math.min(c-1,_+1)],w=v[0]-y[0],A=v[1]-y[1],b=v[2]-y[2],M=T[0]-S[0],C=T[1]-S[1],P=T[2]-S[2],U=A*P-b*C,k=b*M-w*P,L=w*C-A*M,V=Math.hypot(U,k,L)||1,j=Math.abs(k/V),H=dy(p[0],p[2],p[1],j),B=1;return H==="rock"||H==="bankrock"?B=.93+.1*Math.sin(p[1]*.55+ue(p[0]*.05,p[2]*.05)*2):H==="qface"?B=.9+.09*Math.sin(p[1]*1.15+p[0]*.06+ue(p[0]*.08,3.3)*2.2)+.03*ue(p[0]*.6,p[1]*.6):H==="grass"||H==="valley"||H==="high"?B=.94+.08*ue(p[0]*.08,p[2]*.08)+.03*ue(p[0]*.5,p[2]*.5):B=.97+.04*ue(p[0]*.3,p[2]*.3),_s(py[H],B)})),h=n.buf("ground"),u=n.buf("mount"),d=(x,m,p,_,y,v)=>{let S=(x[0]+m[0]+p[0])/3,T=(x[1]+m[1]+p[1])/3,w=(x[2]+m[2]+p[2])/3;if(t&&t(S,T,w))return;let A=ga(S,w)?u:h,b=m[0]-x[0],M=m[1]-x[1],C=m[2]-x[2],P=p[0]-x[0],U=p[1]-x[1],k=p[2]-x[2],L=M*k-C*U,V=C*P-b*k,j=b*U-M*P,H=Math.hypot(L,V,j)||1;L/=H,V/=H,j/=H,A.p.push(...x,...m,...p),A.n.push(L,V,j,L,V,j,L,V,j),A.c.push(..._,...y,...v)};for(let x=0;x<o;x++){let m=a[x],p=a[x+1],_=l[x],y=l[x+1];for(let v=0;v<c-1;v++)d(m[v],p[v+1],m[v+1],_[v],y[v+1],_[v+1]),d(m[v],p[v],p[v+1],_[v],y[v],y[v+1])}let f=Ge.base,g=(x,m)=>{let p="#9C8A70",_=ga((x[0]+m[0])/2,(x[2]+m[2])/2);n.quad(_?"mount":"skirt",p,[x[0],f,x[2]],[m[0],f,m[2]],[m[0],m[1],m[2]],[x[0],x[1],x[2]])};for(let x=0;x<c-1;x++)g(a[0][x+1],a[0][x]),g(a[o][x],a[o][x+1]);for(let x=0;x<o;x++)g(a[x][0],a[x+1][0]),g(a[x+1][c-1],a[x][c-1]);return n.quad("base","#8A7A63",[i,f,Ge.z0],[s,f,Ge.z0],[s,f,Ge.z1],[i,f,Ge.z1]),{cols:a}}var Ke=(n,t,e)=>Math.max(t,Math.min(e,n)),Je=(n,t,e)=>n+(t-n)*e,Gt=(n,t,e)=>{let i=Ke((e-n)/(t-n),0,1);return i*i*(3-2*i)},re=(n,t)=>Math.sqrt(n*n+t*t),no=(n,t,e)=>Math.sqrt(n*n+t*t+e*e),si=(n,t,e)=>{let i=Ke(.5+.5*(n-t)/e,0,1);return Je(t,n,i)+e*i*(1-i)},ys=(n,t,e)=>{let i=Ke(.5+.5*(t-n)/e,0,1);return Je(t,n,i)-e*i*(1-i)},sn=new Uint8Array(512),Hn=new Float32Array(256);{let n=1234567,t=()=>((n=Math.imul(n^n>>>15,739982445)+1831565813|0)>>>0)/4294967296,e=[...Array(256).keys()];for(let i=255;i>0;i--){let s=Math.floor(t()*(i+1));[e[i],e[s]]=[e[s],e[i]]}for(let i=0;i<512;i++)sn[i]=e[i&255];for(let i=0;i<256;i++)Hn[i]=t()}function Zt(n,t,e){let i=Math.floor(n),s=Math.floor(t),r=Math.floor(e),o=n-i,a=t-s,c=e-r,l=i&255,h=s&255,u=r&255,d=o*o*(3-2*o),f=a*a*(3-2*a),g=c*c*(3-2*c),x=sn[l]+h,m=sn[l+1]+h,p=sn[x]+u,_=sn[x+1]+u,y=sn[m]+u,v=sn[m+1]+u,S=Hn[sn[p]]+(Hn[sn[y]]-Hn[sn[p]])*d,T=Hn[sn[_]]+(Hn[sn[v]]-Hn[sn[_]])*d,w=Hn[sn[p+1]]+(Hn[sn[y+1]]-Hn[sn[p+1]])*d,A=Hn[sn[_+1]]+(Hn[sn[v+1]]-Hn[sn[_+1]])*d,b=S+(T-S)*f,M=w+(A-w)*f;return(b+(M-b)*g)*2-1}function eo(n,t,e){let i=1/0,s=1;for(let r=0,o=n.length-1;r<n.length;o=r++){let a=n[o][0],c=n[o][1],l=n[r][0]-a,h=n[r][1]-c,u=t-a,d=e-c,f=Ke((u*l+d*h)/(l*l+h*h),0,1),g=u-l*f,x=d-h*f;i=Math.min(i,g*g+x*x);let m=e>=c,p=e<n[r][1],_=l*d>h*u;(m&&p&&_||!m&&!p&&!_)&&(s=-s)}return s*Math.sqrt(i)}function ii(n,t,e,i,s,r,o,a,c,l){let h=Math.abs(n-i)-o+l,u=Math.abs(t-s)-a+l,d=Math.abs(e-r)-c+l;return no(Math.max(h,0),Math.max(u,0),Math.max(d,0))+Math.min(Math.max(h,u,d),0)-l}function sf(n,t,e,i,s,r,o,a,c,l,h,u){let d=o-i,f=c-r,g=d*d+f*f||1,x=Ke(((n-i)*d+(e-r)*f)/g,0,1),m=re(n-i-d*x,e-r-f*x),p=t-(s+(a-s)*x)-h/2,_=m-l+u,y=Math.abs(p)-h/2+u;return Math.min(Math.max(_,y),0)+re(Math.max(_,0),Math.max(y,0))-u}function ql(n,t){let e=0;for(let o=0;o<n.length;o++){let a=n[o],c=n[(o+1)%n.length];e+=a[0]*c[1]-c[0]*a[1]}let i=e>0?1:-1,s=n.length,r=[];for(let o=0;o<s;o++){let a=n[o],c=n[(o+1)%s],l=c[0]-a[0],h=c[1]-a[1],u=re(l,h),d=-h/u*i,f=l/u*i;r.push([a[0]+d*t,a[1]+f*t,l,h])}return r.map((o,a)=>{let c=r[(a+s-1)%s],l=c[2]*o[3]-c[3]*o[2];if(Math.abs(l)<1e-9)return[o[0],o[1]];let h=((o[0]-c[0])*o[3]-(o[1]-c[1])*o[2])/l;return[c[0]+c[2]*h,c[1]+c[3]*h]})}var Yp=(n,t,e,i,s,r)=>si(eo(n,e,s)-t-.08*Math.max(0,r-i),i-r,.45);function $l(n,t,e=1.2){let i=[],s=n.map(a=>a.slice()),r=(a,c,l)=>{let h=i[i.length-1],u=h?h[3]+re(a-h[0],c-h[1]):0;(!h||u-h[3]>.05)&&i.push([a,c,l,u])},o=s[0];r(o[0],o[1],o[2]);for(let a=1;a<s.length;a++){let c=s[a];if(a<s.length-1){let l=s[a+1],h=c[0]-o[0],u=c[1]-o[1],d=re(h,u),f=l[0]-c[0],g=l[1]-c[1],x=re(f,g),m=[h/d,u/d],p=[f/x,g/x],_=Ke(m[0]*p[0]+m[1]*p[1],-1,1),y=Math.acos(_),v=Math.min((Array.isArray(t)?t[a]:t)*Math.tan(y/2),d*.45,x*.45),S=[c[0]-m[0]*v,c[1]-m[1]*v],T=[c[0]+p[0]*v,c[1]+p[1]*v],w=Math.max(1,Math.ceil(d/e));for(let b=1;b<=w;b++){let M=b/w;r(Je(o[0],S[0],M),Je(o[1],S[1],M),Je(o[2],c[2],M*(d-v)/d))}let A=8;for(let b=1;b<=A;b++){let M=b/A,C=(1-M)*(1-M),P=2*M*(1-M),U=M*M;r(C*S[0]+P*c[0]+U*T[0],C*S[1]+P*c[1]+U*T[1],c[2])}o=[T[0],T[1],c[2]]}else{let l=re(c[0]-o[0],c[1]-o[1]),h=Math.max(1,Math.ceil(l/e));for(let u=1;u<=h;u++){let d=u/h;r(Je(o[0],c[0],d),Je(o[1],c[1],d),Je(o[2],c[2],d))}}}return i}var $e=(()=>{let n=[Pn.pre,...Pn.C,Pn.post],t=[];for(let o=1;o<n.length-2;o++){let a=n[o-1],c=n[o],l=n[o+1],h=n[o+2],u=Math.max(2,Math.ceil(re(l[0]-c[0],l[1]-c[1])/2.4));for(let d=0;d<u;d++){let f=d/u,g=f*f,x=g*f;t.push([0,1].map(m=>.5*(2*c[m]+(l[m]-a[m])*f+(2*a[m]-5*c[m]+4*l[m]-h[m])*g+(3*c[m]-a[m]-3*l[m]+h[m])*x)))}}t.push(Pn.C[Pn.C.length-1]);let e=0,i=t.map((o,a)=>a?e+=re(o[0]-t[a-1][0],o[1]-t[a-1][1]):0),s=Pn.yk,r=o=>{let a=1;for(;a<s.length-1&&s[a][0]<o;)a++;return Je(s[a-1][1],s[a][1],Ke((o-s[a-1][0])/(s[a][0]-s[a-1][0]),0,1))};return t.map((o,a)=>[o[0],o[1],r(i[a]/e),i[a]])})(),my=n=>{let t=$e[$e.length-1][3],e=Gt(16,30,n)*Gt(t-3,t-16,n);return[Pn.w/2+e*(.14+.36*Math.sin(n*.105+1.1)+.2*Math.sin(n*.043+2.6)),Pn.h+e*(.4*Math.sin(n*.083+.4)+.2*Math.sin(n*.21))]},Zp=$e.slice(0,-1).map((n,t)=>my((n[3]+$e[t+1][3])/2));function Ql(n,t){let e=null,i=1e9;for(let s=0;s<$e.length-1;s++){let r=$e[s],o=$e[s+1],a=o[0]-r[0],c=o[1]-r[1],l=a*a+c*c||1,h=Ke(((n-r[0])*a+(t-r[1])*c)/l,0,1),u=r[0]+a*h,d=r[1]+c*h,f=re(n-u,t-d),g=Math.sqrt(l);f<i&&(i=f,e=[u,d,Je(r[2],o[2],h),r[3]+(o[3]-r[3])*h,a/g,c/g])}return e}var an=kp.map(n=>{let t=Ql(n.x,n.z),e={n:[0,-1],s:[0,1],e:[1,0],w:[-1,0]}[n.side],i=Math.abs(e[0])>0?"z":"x",s=Pn.w/2+n.d/2-.4,r=t[0]+e[0]*s,o=t[1]+e[1]*s;return{cx:r,cz:o,y:t[2],hx:i==="x"?n.w/2:n.d/2+1,hz:i==="x"?n.d/2+1:n.w/2,out:e,back:[t[0]+e[0]*(Pn.w/2+n.d-.3),t[1]+e[1]*(Pn.w/2+n.d-.3)]}}),gy=[[-42.6,-43.3,9.75],[-57,-45,7.9],[-71.5,-49.6,5.7],[-78.6,-55.6,5.5],[-77.2,-62.2,5.5],[-69.4,-68.6,5.5],[-64.2,-76.6,5.5],[-63.6,-100,5.5],[-62,-112,5.5]],Jl=$l(gy,7),ef=(()=>{let n=0,t=1e9;Jl.forEach((i,s)=>{let r=re(i[0]+75.4,i[1]+63.8);r<t&&(t=r,n=s)});let e=Jl.slice(0,n+1);return e.filter((i,s)=>s===0||s===e.length-1||s%3===0)})(),Ie={nodes:{S:[-33.4,5.5,-122],s1:[-29,2.6,-123.2],J1:[-24.5,-.5,-121.2],f1:[-19.6,-.3,-118.2],f2:[-15.8,3,-113.8],J2:[-11.2,3.2,-112.6],f3:[-6.4,3.3,-111.6],f4:[-1.6,5.6,-113.8],J3:[1,5.8,-107.4],C:[-2.6,6.4,-98.2],X:[10.5,7,-88],a1:[-26.2,-1.2,-127.6],D1:[-26,-1.4,-130.2],D1x:[-24.9,-3.8,-132.8],d1:[-23.2,-3.8,-133.8],e1:[-18.8,-4.8,-135],M1:[-13.2,-5.4,-133.2],m1x:[-12.6,-6,-139.6],e2:[-8.6,-6.6,-129.4],R1:[-4.6,-8,-124.6],x3a:[-3.8,-5,-118.2],x3b:[-4.4,-1.8,-110.2],M2:[-11.6,1,-104.4],x3c:[-9.2,4,-98.8],c3:[-7.1,6.4,-95.2],r2a:[-15.8,2.4,-108.2],R2:[-21.4,1.6,-106]},edges:[["S","s1",0],["s1","J1",.1],["J1","f1",-.16],["f1","f2",.14],["f2","J2",-.1],["J2","f3",.12],["f3","f4",-.2],["f4","J3",.18],["J3","C",-.15],["C","X",.1],["J1","a1",.14],["a1","D1",-.1],["d1","e1",.12],["e1","M1",-.15],["M1","m1x",.1],["M1","e2",.18],["e2","R1",-.12],["R1","x3a",.1],["x3a","x3b",-.12],["x3b","M2",.16],["M2","x3c",-.14],["x3c","c3",.1],["J2","r2a",.15],["r2a","R2",-.1]],rooms:[["J1",3,2.8,3.6],["M1",4.2,3.4,4.2],["m1x",2,1.8,2.9],["R1",4,3.6,4.4],["M2",3.9,3.5,4.6],["R2",2.8,2.6,3.4],["C",5,4.4,4.8],["J2",2.4,2.2,3.3],["c3",1.9,1.6,3.4]],drop:{n:"D1x",hx:2.5,hz:2.2,h:5.6},pillar:{n:"M2",dx:.3,dz:.2,r:1.15},fin:{P:[[-6.2,-100.7],[-5.4,-97.4],[-5.8,-95.6]],r:.62},lamps:[["J1","f1"],["J2","f3"],["J3","C"],["x3c","c3",-1],["C","X"]],hw:1.3,h:2.9,cut:2.75},vs={nodes:{N0:[47,0,-128.6],K1:[45.6,.15,-133.4],w1:[51.6,.1,-135.4],w2:[56,0,-138],K2:[41,.3,-139.2],e1:[35,.35,-137],e2:[31.6,.4,-133.6],D2:[39.4,.45,-146.6],h1:[33.4,.2,-147.6],ex1:[40.6,.3,-154.6],ex2:[42.4,-.2,-161.2]},edges:[["N0","K1",.08],["K1","w1",-.1],["w1","w2",.12],["K1","K2",-.08],["K2","e1",.1],["e1","e2",-.12],["K2","D2",.06],["D2","h1",0],["D2","ex1",-.06],["ex1","ex2",.08]],hw:1.4,h:3.2,cut:2.75};function xy(n,t,e,i,s=1.6){let r=n.nodes[t],o=n.nodes[e],a=o[0]-r[0],c=o[2]-r[2],l=Math.hypot(a,c)||1,h=(r[0]+o[0])/2-c/l*i*l,u=(r[2]+o[2])/2+a/l*i*l,d=Math.max(1,Math.ceil(l*(1+Math.abs(i))/s)),f=[];for(let m=0;m<=d;m++){let p=m/d,_=1-p;f.push([_*_*r[0]+2*_*p*h+p*p*o[0],0,_*_*r[2]+2*_*p*u+p*p*o[2]])}let g=0,x=[0];for(let m=1;m<=d;m++)g+=Math.hypot(f[m][0]-f[m-1][0],f[m][2]-f[m-1][2]),x.push(g);for(let m=0;m<=d;m++)f[m][1]=Je(r[1],o[1],x[m]/g);return f}function tm(n){let t=[],e=[];for(let[i,s,r]of n.edges){let o=xy(n,i,s,r||0);e.push({a:i,b:s,P:o});let a=e.length,c=.2*Math.sin(a*2.4+1),l=.14*Math.sin(a*1.7+2.2),h=a*1.3;for(let u=0;u<o.length-1;u++){let d=o[u],f=o[u+1],g=(u+.5)/(o.length-1),x=Math.sin(Math.PI*g),m=n.hw*(1+x*(c+.12*Math.sin(g*9+h))),p=n.h*(1+x*(l+.08*Math.sin(g*7+h*1.7)));t.push([d[0],d[1],d[2],f[0],f[1],f[2],Math.min(d[0],f[0])-n.hw-2.5,Math.max(d[0],f[0])+n.hw+2.5,Math.min(d[2],f[2])-n.hw-2.5,Math.max(d[2],f[2])+n.hw+2.5,Math.min(d[1],f[1])-2.5,Math.max(d[1],f[1])+n.h+2.5,m,p])}}return{segs:t,lines:e}}var em=tm(Ie),nm=tm(vs),Mi=em.lines,im=nm.lines,rf=0;function sm(n,t,e,i,s){let r=1e9,o=0;for(let a of n.segs){if(e<a[6]||e>a[7]||s<a[8]||s>a[9]||i<a[10]||i>a[11])continue;let c=a[3]-a[0],l=a[5]-a[2],h=c*c+l*l||1,u=Ke(((e-a[0])*c+(s-a[2])*l)/h,0,1),d=a[1]+(a[4]-a[1])*u,f=re(e-a[0]-c*u,s-a[2]-l*u),g=i-d-a[13]/2,x=.5,m=f-a[12]+x,p=Math.abs(g)-a[13]/2+x,_=Math.min(Math.max(m,p),0)+re(Math.max(m,0),Math.max(p,0))-x;_<r&&(r=_,o=d)}return rf=o,r}function _y(n,t,e,i,s,r,o){let a=i[1]+o*.25,c=o*.8,l=(n-i[0])/s,h=(t-a)/c,u=(e-i[2])/r;return Math.max((no(l,h,u)-1)*Math.min(s,r,c),i[1]-t)}var jl=[],io=(n,t,e)=>jl.push({bb:n,f:t,cut:e}),Jp=12,$p=0,Qp=0;io([-82,4,-62,84,20,8],(n,t,e)=>{let i=1e9,s=12;for(let r=0;r<$e.length-1;r++){let o=$e[r],a=$e[r+1];if(n<Math.min(o[0],a[0])-9||n>Math.max(o[0],a[0])+9||e<Math.min(o[1],a[1])-9||e>Math.max(o[1],a[1])+9)continue;let c=sf(n,t,e,o[0],o[2],o[1],a[0],a[2],a[1],Zp[r][0],Zp[r][1],2.4);c<i&&(i=c,s=Math.min(o[2],a[2]))}Math.abs(i)<1.6&&(i+=(.3*Zt(n*.2,t*.2,e*.2)+.12*Zt(n*.62+3,t*.62,e*.62))*Gt(s+.3,s+1.4,t)*Gt(15,22,re(n-$e[0][0],e-$e[0][1])));for(let r=0;r<ef.length-1;r++){let o=ef[r],a=ef[r+1],c=sf(n,t,e,o[0],o[2],o[1],a[0],a[2],a[1],2.7,4.6,1.6);c<i&&(i=c,s=Math.min(o[2],a[2])-.6)}for(let r of an)i=Math.min(i,ii(n,t,e,r.cx,r.y+1.6,r.cz,r.hx,1.6,r.hz,.5));return Jp=s,i},()=>Jp+4.4);var yy=Lt.lobes,Zl={HG:ql(Lt.HG,1.2),A:ql(Lt.A,1.2),B:ql(Lt.B,1.2),P:ql(Lt.P,1.8)},vy=[[Zl.HG,1.2,Lt.hi],[Zl.A,1.2,Lt.hA],[Zl.B,1.2,Lt.hB]],My=(n,t,e)=>{let i=n.b[0]-n.a[0],s=n.b[1]-n.a[1];return Je(n.ya,n.yb,Ke(((t-n.a[0])*i+(e-n.a[1])*s)/(i*i+s*s),0,1))},bs=(n,t)=>{let e=0;if(n<-56&&t<-106)for(let[i,s,r,o,a]of Lt.sumps)e=Math.max(e,a*Math.exp(-(((n-i)/r)**2+((t-s)/o)**2)));return Lt.floor-e},of=(n,t)=>{let e=1e9;for(let[i,s,r]of Lt.pit.c)e=ys(e,re(n-i,t-s)-r,2.2);return e};function by(n,t){let e=1e9;for(let i of yy)e=ys(e,re(n-i.x,t-i.z)-i.r,7);for(let i of Lt.bays){let s=re(n-i[0],t-i[1])-i[2];s<6&&(e=ys(e,s,2.4))}return t>-76&&(e=si(e,-eo(Lt.SWR,n,t),1.6),e=si(e,-eo(Lt.SER,n,t),1.6)),e}io([-90,1.8,-142,-24,18,-40],(n,t,e)=>{let i=by(n,e),s=3.2,r=bs(n,e),o=(Lt.top-r)/2,a=(Lt.top+r)/2,c=i+s,l=Math.abs(t-a)-o+s,h=Math.min(Math.max(c,l),0)+re(Math.max(c,0),Math.max(l,0))-s;if(Math.abs(h)<4&&(h+=(1.25*Zt(n*.15,t*.15,e*.15)+.45*Zt(n*.42,t*.42,e*.42))*Gt(Lt.floor+.2,Lt.floor+2.2,t)),h<2.5){let u=.35*Zt(n*.5,t*.5,e*.5),d=1.1*(Zt(n*.11+5,t*.11,e*.11)-.5);for(let[f,g,x]of vy)h=Math.max(h,-(Yp(f,g,n,t,e,x)+(u+d)*Gt(x-.3,x-2.4,t)));h=Math.max(h,-(Yp(Zl.P,1.8,n,t,e,21)+u*1.6+d*1.4));for(let f of Lt.RAMPS){let g=My(f,n,e);h=Math.max(h,-(si(eo(f.P,n,e)-.08*Math.max(0,g-t),(t-g)*.92,.45)+(u+d*.6)*Gt(g-.3,g-2.4,t)))}}if(e<-100&&e>-118&&n>-62&&n<-44){let u=of(n,e);if(u<3){let d=si(u+.35*Zt(n*.4+7,t*.4,e*.4),Math.abs(t-(Lt.floor-Lt.pit.d/2+.45))-(Lt.pit.d/2+.45),.6);h=ys(h,d,.5)}}return h=Math.min(h,ii(n,t,e,Lt.nook.x,Lt.floor+1.9,Lt.nook.z,3.4,1.9,2.4,.5)),h=Math.min(h,ii(n,t,e,Lt.gate.x,Lt.floor+3.4,Lt.gate.z-2,4.6,3.4,3,.6)),h},()=>12.6);io([-38,-11,-144,14,14,-84],(n,t,e)=>{let i=Ie.nodes,s=sm(em,Ie,n,t,e),r=rf;for(let[d,f,g,x]of Ie.rooms){let m=i[d];if(Math.abs(n-m[0])>f+3||Math.abs(e-m[2])>g+3||t<m[1]-2||t>m[1]+x+3)continue;let p=_y(n,t,e,m,f,g,x);p<s&&(r=m[1]),s=ys(s,p,.8)}let o=Ie.drop,a=i[o.n],c=Math.max(ii(n,t,e,a[0],a[1]+o.h/2-.5,a[2],o.hx,o.h/2+.5,o.hz,.5),a[1]-t);c<s&&(s=c,r=a[1]);let l=Ie.pillar,h=i[l.n];s=Math.max(s,-(re(n-h[0]-l.dx,e-h[2]-l.dz)-l.r-.25*Zt(n*.6,t*.6,e*.6)));let u=Ie.fin;if(n>-9&&n<-3&&e>-103&&e<-93){let d=1e9;for(let f=0;f<u.P.length-1;f++){let g=u.P[f],x=u.P[f+1],m=x[0]-g[0],p=x[1]-g[1],_=Ke(((n-g[0])*m+(e-g[1])*p)/(m*m+p*p),0,1),y=(f+_)/(u.P.length-1);d=Math.min(d,re(n-g[0]-m*_,e-g[1]-p*_)-u.r*(1-.3*y))}s=Math.max(s,-(d-.18*Zt(n*.7+4,t*.45,e*.7)+.12*Gt(i.C[1]+.4,i.C[1],t)))}return Math.abs(s)<1.5&&(s+=(.42*Zt(n*.33+2,t*.33,e*.33)+.14*Zt(n*1.1,t*1.1,e*1.1))*Gt(r+.15,r+.9,t)),$p=r,s},()=>$p+Ie.cut);var Be=pt,Sy=[[6.5,-64],[5.4,-80],[5.8,-96],[7.6,-109],[13,-119.6],[22,-124],[34,-124.6],[44,-124.4],[52,-123.8],[58.8,-119.2],[61.2,-110],[60.8,-101.4],[57.4,-96.2],[57,-86],[57.4,-75.6],[60.4,-69.4],[61.6,-61],[56.4,-55.2],[44,-53.4],[28,-54.2],[15,-56.6]];function Ey(n,t){let e=[],i=n.length;for(let s=0;s<i;s++){let r=n[(s-1+i)%i],o=n[s],a=n[(s+1)%i],c=n[(s+2)%i],l=Math.max(2,Math.ceil(re(a[0]-o[0],a[1]-o[1])/t));for(let h=0;h<l;h++){let u=h/l,d=u*u,f=d*u;e.push([0,1].map(g=>.5*(2*o[g]+(a[g]-r[g])*u+(2*r[g]-5*o[g]+4*a[g]-c[g])*d+(3*o[g]-r[g]-3*a[g]+c[g])*f)))}}return e}function rm(n,t,e,i,s,r){let o=Math.ceil((e-t)/r)+1,a=Math.ceil((s-i)/r)+1,c=new Float32Array(o*a);for(let l=0;l<a;l++)for(let h=0;h<o;h++)c[h+o*l]=eo(n,t+h*r,i+l*r);return(l,h)=>{let u=(l-t)/r,d=(h-i)/r;if(u<0||d<0||u>=o-1||d>=a-1)return 40;let f=Math.floor(u),g=Math.floor(d),x=u-f,m=d-g,p=f+o*g;return(c[p]*(1-x)+c[p+1]*x)*(1-m)+(c[p+o]*(1-x)+c[p+o+1]*x)*m}}var ri=Ey(Sy,.8),Ms=rm(ri,-4,72,-136,-44,.6);function wy(n,t){let e=Gt(-117,-121,t)*Gt(14,20,n)*(1-Gt(62,66,n)),i=Gt(53.5,56,n)*Gt(-104,-100,t)*(1-Gt(-74,-71,t)),s=Gt(51,55,n)*Gt(-99,-103,t),r=(1-Gt(9,13,n))*Gt(-114,-106,t)*(1-Gt(-80,-74,t))*.6;return Math.max(e,i,s,r)}var Sn={s1:-103.6,s2:-112,gap:-108,gw:1.1};function ya(n,t){return t>-113?7.3+1.1*Gt(Sn.s1+.4,Sn.s1-.4,t)+1.2*Gt(Sn.s2+.4,Sn.s2-.4,t):Ty(n)}var Ty=n=>Be.CPY+.4*Gt(41,37.5,n),af=(n,t)=>Ke(2.5+.8*Math.sin(t*.52+n*.33+1.2)+.35*Zt(n*.4,3,t*.4),1.7,3.3);function Ay(n,t,e){let i=Math.min(Math.max(e+99.6,-121.5-e,50-n),Math.max(36.5-n,n-63,e+112)),s=ya(n,e),r=si(si(-af(n,e)-Ms(n,e),Math.max(t-s,s-1.9-t),.35),i,.35);return n>55&&e>-113&&(r=si(r,Sn.gw-Math.abs(e-Sn.gap),.3)),r}io([-6,-14,-140,76,72,-44],(n,t,e)=>{let i=8*Gt(9,22,t),s=6,r=Ms(n,e)+i+s,o=Math.max(Be.floor-t,t-Be.top)+s,a=Math.min(Math.max(r,o),0)+re(Math.max(r,0),Math.max(o,0))-s;if(Math.abs(a)<9){let d=1-wy(n,e),f=Gt(Be.floor+.4,Be.floor+3,t);a+=(4.4*Zt(n*.032+3.1,t*.045,e*.032-1.7)+1.9*Zt(n*.09,t*.09,e*.09))*d*f+(.6*Zt(n*.3,t*.3,e*.3)+.25*Zt(n*.8,t*.8,e*.8))*f}a<2.5&&(a=Math.max(a,-Py(n,t,e)));let c=Be.B1,l=c.niche;if(n>50&&e>-106&&e<-72){a=Math.min(a,Math.max(ii(n,t,e,(l[0]+l[1])/2,7.4,(l[2]+l[3])/2,(l[1]-l[0])/2,l[4]-7.4,(l[3]-l[2])/2,.6)+.4*Math.abs(Zt(n*.45,t*.45,e*.45)),3-t)),a=Math.min(a,Math.max(ii(n,t,e,(c.fx+.05+c.x1)/2,7,(c.z0+c.z1)/2,(c.x1-c.fx-.05)/2,4.1,(c.z1-c.z0)/2,.4)+.12*Zt(n*.7,t*.7,e*.7),3-t));let d=Be.B1X;for(let f=0;f<d.length-1;f++){let g=d[f],x=d[f+1];a=Math.min(a,sf(n,t,e,g[0],g[1],g[2],x[0],x[1],x[2],1.05,2.6,.45))}}let h=Be.B2,u=h.niche;e<-116&&n>22&&n<42&&(a=Math.min(a,Math.max(ii(n,t,e,(u[0]+u[1])/2,11.9,(u[2]+u[3])/2,(u[1]-u[0])/2,u[4]-11.9,(u[3]-u[2])/2,.5)+.35*Math.abs(Zt(n*.45,t*.45,e*.45)),10-t)),a=Math.min(a,Math.max(ii(n,t,e,(h.x0+h.x1)/2,11.7,(h.z0+h.fz+.15)/2,(h.x1-h.x0)/2,1.7,(h.fz+.15-h.z0)/2,.35),10-t))),a=Math.min(a,Math.max(ii(n,t,e,Be.DOOR.x,2.6,Be.DOOR.z-2.2,2.6,2.6,2.4,.2),-t));{let d=Be.FALL;a=Math.min(a,ii(n,t,e,52.4,Be.floor-.5,d.z,5,1.6,4.5,1.5)),n>56&&e>-67&&e<-54&&t>10&&(a=Math.min(a,ii(n,t,e,63.2,d.lip+1.2,d.z,2.9,1.25,d.w/2+.15,.7)+.3*Zt(n*.5,t*.5,e*.5)))}for(let[d,f,g]of Be.SKY)a=ys(a,Math.max(re(n-d,e-f)-g-.5*Zt(n*.3,t*.1,e*.3),15-t),2);return a},(n,t,e)=>Be.cut+5.6*Gt(13,9,re(n-Be.PIL.x,e-Be.PIL.z)));var vi=pt.F,Ry=[[25.4,-82.9],[29.5,-78.7],[33.6,-77.5],[43.8,-77.5],[27.9,-111.8],[37.6,-121.4],[59.3,-86],[31.9,-125.4],[47,-123.4],[21,-87]];for(let n of Object.values(vi)){let t=n.P.map(i=>i[0]),e=n.P.map(i=>i[1]);n.g=rm(n.P,Math.min(...t)-7,Math.max(...t)+7,Math.min(...e)-7,Math.max(...e)+7,.5)}var om=(n,t,e)=>{let i=0;for(let[s,r,o,a,c]of e){let l=(n-s)**2+(t-r)**2;if(!(l>o*o))if(c)i+=a*Gt(o,o*.55,Math.sqrt(l));else{let h=l/(o*o);i+=a*(1-h)*(1-h)}}return i},am=(n,t)=>{let e=1e9;for(let[i,s]of Ry)e=Math.min(e,re(n-i,t-s));return Gt(1.6,4.2,e)};function Yl(n,t,e){var r;let i=n.g(t,e),s=am(t,e);return n.h+s*(((r=n.und)!=null?r:.45)*Zt(t*.085+5,n.h*.7,e*.085)+n.rim*Gt(-2.6,-.2,i)*(Zt(t*.17+3,n.h*.3,e*.17)+.25))+om(t,e,n.B)+(n.T?n.T(t,e):0)}var gn={UP:[[2,-97.4],[8,-96.8],[11.6,-95],[12.9,-94.4],[14.2,-93.3],[14.8,-92.5],[15.2,-91],[15.3,-89.4],[15,-88],[14.6,-86.7],[14,-85.7],[13.3,-84.8],[12.5,-84],[11.5,-83.7],[10.3,-83.9],[9.2,-84.5],[8.2,-85.4],[2,-85.8]],RAMP:[[7.6,-85.2],[8,-83.7],[8.7,-82.5],[9.6,-81.8],[10.6,-81.2],[11.5,-80.4],[12.4,-79.7],[13.5,-79.3],[14.6,-79.3],[15.6,-79.9],[16.6,-80.8],[17.6,-81.6],[18.6,-82]],hi:7,lo:3,rw:1.6},nf=(()=>{let n=[0];for(let t=1;t<gn.RAMP.length;t++)n.push(n[t-1]+re(gn.RAMP[t][0]-gn.RAMP[t-1][0],gn.RAMP[t][1]-gn.RAMP[t-1][1]));return n})();function Cy(n,t){let e=gn.RAMP,i=1e9,s=0;for(let r=0;r<e.length-1;r++){let o=e[r],a=e[r+1],c=a[0]-o[0],l=a[1]-o[1],h=c*c+l*l,u=Ke(((n-o[0])*c+(t-o[1])*l)/h,0,1),d=re(n-o[0]-c*u,t-o[1]-l*u);d<i&&(i=d,s=nf[r]+u*Math.sqrt(h))}return{d:i,h:Je(gn.hi,gn.lo,s/nf[nf.length-1])}}function Iy(n,t){let e=vi.EC,i=am(n,t),s=eo(gn.UP,n,t)+.45*Zt(n*.35+2,3.1,t*.35)+.22*Zt(n*1.1,1.7,t*1.1),r=Je(gn.hi,gn.lo,Ke(s/1.15,0,1)**.8),o=Cy(n,t),a=1-Gt(gn.rw,gn.rw+.8,o.d),c=Je(o.h,gn.lo,Gt(gn.rw+.6,gn.rw+2.6,o.d)),l=Math.max(a,Gt(1.4,-.4,s)*.5);return Math.max(r,c)+.12*Zt(n*.5,2.2,t*.5)+om(n,t,e.B)+i*(1-.75*l)*(.3*Zt(n*.1+5,2.1,t*.1)+e.rim*(1-.5*a)*Gt(-2.6,-.2,e.g(n,t))*(Zt(n*.17+3,2.1,t*.17)+.25))}function _a(n,t,e,i,s,r){var x,m,p,_,y;let o=(x=i.wp)!=null?x:1,a=n+o*Zt(n*.07+1.7,3.3,e*.07),c=e+o*Zt(n*.07-4.2,7.1,e*.07),l=Math.max(0,s-t),h=(m=i.band)!=null?m:2.5,u=l/h+.5*Zt(n*.05+2,t*.04,e*.05),d=u-Math.floor(u),f=d<.8?1-1.2*d:Je(.04,1,(d-.8)/.2),g=((p=i.tp)!=null?p:.06)*l+((_=i.amp)!=null?_:.55)*f*Gt(.4,1.8,l)+((y=i.foot)!=null?y:2.8)*Gt(-2.5,-9.5,t);return si(i.g(a,c)-g,t-s,.7)+r*Gt(s-.25,s-1.5,t)}function jp(n,t,e,i,s,r,o,a,c){let l=Math.max(0,r-t),h=l/2.1+.4*Zt(n*.2,t*.05,e*.2),u=h-Math.floor(h),d=o+(a-o)*Math.pow(Ke(l/(r+10),0,1),1.4)+.35*(u<.8?1-1.2*u:Je(.04,1,(u-.8)/.2))*Gt(.3,1.2,l);return si(re(n-i,e-s)-d+.45*c,t-r,.5)}var Kp=(n,t,e)=>(re((n-e.x)/e.rx,(t-e.z)/e.rz)-1)*Math.min(e.rx,e.rz);function Py(n,t,e){let i=1.1*Zt(n*.2+7,t*.2,e*.2)+.45*Zt(n*.55,t*.55,e*.55),s=1e9;n<30&&e>-100&&e<-74&&(s=_a(n,t,e,vi.EC,Iy(n,e),i)),n>25&&n<38&&e>-84&&e<-71&&(s=Math.min(s,_a(n,t,e,vi.P4,Yl(vi.P4,n,e),i))),n>38&&e>-106&&e<-64&&(s=Math.min(s,_a(n,t,e,vi.BP,Yl(vi.BP,n,e),i))),n>18&&n<46&&e<-104&&(s=Math.min(s,_a(n,t,e,vi.WP,Yl(vi.WP,n,e),i))),n>34&&n<60&&e<-101&&(s=Math.min(s,_a(n,t,e,vi.DP,Yl(vi.DP,n,e),i)));let r=Be.PIL,o=re(n-r.x,e-r.z);if(o<14){let c=Ke((t-Be.floor)/(22-Be.floor),0,1),l=Math.atan2(e-r.z,n-r.x),h=t/2.3+.6*Zt(Math.cos(l)*1.1,t*.05,Math.sin(l)*1.1),u=h-Math.floor(h),d=r.r+1.5*(1-Math.sin(Math.PI*c))+.9*Zt(Math.cos(l)*1.3+4,t*.12,Math.sin(l)*1.3)+.5*Gt(2,-6,t)+.55*Math.abs(Math.sin(l*3.5+1.4*Zt(Math.cos(l),t*.06,Math.sin(l))))+.3*(u<.8?1-1.2*u:Je(.04,1,(u-.8)/.2));s=Math.min(s,o-d+.3*i);let f=Be.SH,g=Math.pow(Ke((f.y-t)/10.5,0,1),1.15),x=1-.72*g,m={x:Je(f.x,r.x,.8*g),z:Je(f.z,r.z,.8*g),rx:f.rx*x,rz:f.rz*x},p=(f.y-t)/1.7+.5*Zt(n*.25,2,e*.25),_=p-Math.floor(p),y=Kp(n,e,m)+.8*Zt(n*.16,5.5+t*.05,e*.16)-.45*(_<.8?1-1.2*_:Je(.04,1,(_-.8)/.2))*Gt(.4,1.4,f.y-t),v=f.y+(f.up-f.y)*Gt(6.3,5.6,o)+.7*Gt(-1.6,-.1,y)*Math.max(0,Zt(n*.35,9.1,e*.35)-.1)*Gt(1.6,3,re(n-29.6,e+99.4))*Gt(1.5,3,re(n-32.4,e+99.8));s=Math.min(s,si(y+.25*i*Gt(f.y-.4,f.y-1.6,t),t-v,.45))}let a=Be.FALL;if(n>49&&e>-68&&e<-52&&t<6){let c=Ke((a.by-t)/6.5,0,1),l=1-.7*Math.pow(c,1.2),h=Kp(n,e,{x:a.x+1.4*c,z:a.z,rx:a.brx*l,rz:a.brz*l})+.45*Zt(n*.3,t*.2+3,e*.3),u=a.by+.55*Gt(-1.4,-.2,h)*Gt(1.3,2.4,Math.abs(e-a.z))-.85*Gt(3.3,1.3,re((n-a.x+2.4)/1.3,e-a.z));s=Math.min(s,si(h,t-u,.35))}n>55&&e>-66&&e<-55&&t>14&&(s=Math.min(s,(no((n-a.x+.6)/2.2,(t-a.lip-3)/1.15,(e-a.z)/4.2)-1)*1.15+.35*i));for(let[c,l,h,u,d]of Be.PK)Math.abs(n-c)<9&&Math.abs(e-l)<9&&(s=Math.min(s,jp(n,t,e,c,l,h,u,d,i*.6)));if(s=Math.min(s,Ay(n,t,e)+.2*i*Gt(7.4,5.4,t)),t<4){for(let[c,l,h,u,d]of Be.STAL)Math.abs(n-c)<7&&Math.abs(e-l)<7&&(s=Math.min(s,jp(n,t,e,c,l,h,u,d,i)));for(let[c,l,h,u,d]of Be.RUB)t<d+5&&Math.abs(n-c)<h+5&&Math.abs(e-l)<u+5&&(s=Math.min(s,(re((n-c)/h,(e-l)/u)-1)*Math.min(h,u)+(t-d)*.8+1.2*i+.9*Math.abs(Zt(n*.4,t*.4,e*.4))))}return s}function so(n,t,e,i=3){for(let s=e;s>e-i;s-=.04)if(je(n,s,t)>0)return s+.04;return null}var Vn=-7.2;function cm(n){for(let o=-6;o<76;o+=.7)for(let a=-134;a<-46;a+=.7){let c=[je(o,Vn,a),je(o+.7,Vn,a),je(o+.7,Vn,a+.7),je(o,Vn,a+.7)];if(c.every(h=>h>.15)||Ms(o+.7/2,a+.7/2)>2.5)continue;let l=[[o,a],[o+.7,a],[o+.7,a+.7],[o,a+.7]].map((h,u)=>c[u]<.15?h:[o+.7/2+(h[0]-o-.7/2)*.4,a+.7/2+(h[1]-a-.7/2)*.4]);n.quad("pool","#6A8A8B",[l[0][0],Vn,l[0][1]],[l[3][0],Vn,l[3][1]],[l[2][0],Vn,l[2][1]],[l[1][0],Vn,l[1][1]])}}io([10,-3,-166,62,10,-122],(n,t,e)=>{let i=sm(nm,vs,n,t,e),s=rf,r=(ae.x0+ae.x1)/2,o=(ae.z0+ae.z1)/2,a=(ae.x1-ae.x0)/2,c=(ae.z1-ae.z0)/2,l=1e9;if(n<ae.x1+4&&n>ae.x0-7&&e>ae.z0-4&&e<ae.z1+4){let h=Math.abs(n-r)-a+3.4,u=Math.abs(e-o)-c+3.4;l=Math.min(Math.max(h,u),0)+re(Math.max(h,0),Math.max(u,0))-3.4+1.1*Zt(n*.13+2,.5,e*.13)+.5*Zt(n*.3,t*.3,e*.3)*Gt(.3,1.5,t)-1.3*Gt(4,1.5,re(n-ae.x1,e+147.6)),l=Math.max(l,(no((n-r)/(a+2.2),t/7.3,(e-o)/(c+2.2))-1)*7),l=ys(l,Math.max(ii(n,t,e,ae.x0-.6,1.7,ae.z1-3.4,2.9,1.7,2.5,1.3),-t),1.2),l=Math.max(l,-(re(n-ae.pil[0],e-ae.pil[1])-ae.pil[2]-.5*Gt(2.2,0,t)-.7*Gt(4,6.5,t)-.22*Zt(n*.7,t*.7,e*.7))),l=Math.max(l,-t)}return l<i&&(i=l,s=0),Math.abs(i)<1.2&&(i+=.25*Zt(n*.4+9,t*.4,e*.4)*Gt(s+.15,s+.9,t)),Qp=s,i},()=>Qp+vs.cut);io([70,-4,-180,120,44,-120],(n,t,e)=>{let i=(t-.05)/jr.h,s=Ke(i,0,1),r=(n-jr.x-4.2*s*(1.25-s))/(jr.w/2*(1-.16*s)*(1+.1*Gt(.35,0,s)*(n<jr.x?1:0))),o=Math.max(re(r,Math.max(i,0))-1,-i)*(jr.w/2),a=Math.max(o,-168-e+0);return a=Math.max(a,e+136),a=ys(a,no((n-95)/1.15,(t-9)/1,(e+140)/.95)-20,8),a=Math.max(a,-1.7-t),Math.abs(a)<5&&(a+=(1.7*Zt(n*.08,t*.08,e*.08)+.9*Zt(n*.17+4,t*.13,e*.17)+.5*Zt(n*.3,t*.3,e*.3))*Gt(.2,2.5,t)),a},()=>16);function je(n,t,e){let i=1e9;for(let s of jl){let r=s.bb;n<r[0]-3||n>r[3]+3||t<r[1]-3||t>r[4]+3||e<r[2]-3||e>r[5]+3||(i=Math.min(i,s.f(n,t,e)))}return i}var Ss=(n,t,e)=>je(n,t,e)<0;function bi(n,t,e,i,s,r=6){for(let o=0;o<r;o+=.08)if(je(n+i*o,t,e+s*o)>0)return o;return r}function Ki(n,t,e,i,s,r=30){let o=Math.hypot(i,s),a=i/o,c=s/o,l=0;for(let h=0;h<r;h+=.1)if(je(n+a*h,e-.25,t+c*h)>0)l=h;else if(h>.5)break;return[n+a*l,t+c*l]}function lm(n=2.4){let t=ri,e=(o,a)=>{let c=0,l=1e9;return t.forEach((h,u)=>{let d=Math.hypot(h[0]-o,h[1]-a);d<l&&(l=d,c=u)}),c},i=e(37,-124.5),s=e(60.6,-101),r=[];for(let o=s;o>=i;o--){let a=t[o],c=t[Math.min(o+1,t.length-1)],l=t[Math.max(o-1,0)],h=c[0]-l[0],u=c[1]-l[1],d=Math.hypot(h,u)||1,f=-u/d,g=h/d;Ms(a[0]+f,a[1]+g)>Ms(a[0],a[1])&&(f=-f,g=-g);let x=a[0]+f*1.25,m=a[1]+g*1.25;x<38.4||(!r.length||Math.hypot(x-r[r.length-1][0],m-r[r.length-1][2])>n)&&r.push([+x.toFixed(2),+(ya(x,m)+.02).toFixed(2),+m.toFixed(2)])}return r}function va(n,t,e){let i=1e9,s=99;for(let r of jl){let o=r.bb;if(n<o[0]-3||n>o[3]+3||t<o[1]-3||t>o[4]+3||e<o[2]-3||e>o[5]+3)continue;let a=r.f(n,t,e);a<i&&(i=a,s=r.cut(n,t,e))}return s}var js=[];{let n=pt.B1,t=pt.B2;for(let e of an)js.push([e.cx-e.hx-.6,e.y-.6,e.cz-e.hz-.6,e.cx+e.hx+.6,e.y+3.8,e.cz+e.hz+.6]);js.push([Lt.nook.x-4,Lt.floor-.5,Lt.nook.z-3,Lt.nook.x+4,Lt.floor+4.4,Lt.nook.z+3]),js.push([Lt.gate.x-5.3,Lt.floor-.5,Lt.gate.z-5.7,Lt.gate.x+5.3,Lt.floor+7.4,Lt.gate.z+1.6]),js.push([n.niche[0]-.6,2.5,n.z0-1.6,n.x1+.8,n.niche[4]+.5,n.z1+1.6]),js.push([t.niche[0]-.6,9.5,t.z0-.8,t.niche[1]+.6,pt.cut,t.niche[3]+.6]),js.push([pt.DOOR.x-3.3,-.5,pt.DOOR.z-5,pt.DOOR.x+3.3,5.9,pt.DOOR.z+.8])}function Dy(n,t,e){for(let s of js)if(n>s[0]&&n<s[3]&&t>s[1]&&t<s[4]&&e>s[2]&&e<s[5])return!0;let i=pt.B1X;if(t<11&&n>57&&e<-90)for(let s=0;s<i.length-1;s++){let r=i[s],o=i[s+1],a=o[0]-r[0],c=o[2]-r[2],l=Ke(((n-r[0])*a+(e-r[2])*c)/(a*a+c*c),0,1);if(re(n-r[0]-a*l,e-r[2]-c*l)<2.2)return!0}return!1}function hm(n){let t=Ie.nodes,e=Ie.pillar,i=t[e.n],s=Lt.P,r=[[i[0]+e.dx,i[1]+Ie.cut,i[2]+e.dz],[s.reduce((c,l)=>c+l[0],0)/s.length,12.6,s.reduce((c,l)=>c+l[1],0)/s.length],[pt.PIL.x,pt.cut+5.6,pt.PIL.z]],o="#7C7266",a=[];for(let[c,l,h]of r){let u=l-.04,d=[];for(let f=0;f<72;f++){let g=f/72*Math.PI*2,x=Math.cos(g),m=Math.sin(g),p=0;for(;p<14&&je(c+x*(p+.05),l,h+m*(p+.05))>0;)p+=.05;d.push([c+x*(p+.06),u,h+m*(p+.06)])}for(let f=0;f<d.length;f++){let g=d[f],x=d[(f+1)%d.length];n.trih("cave",o,[c,u,h],x,g,-1,-1,-1)}a.push({c:[c,l,h],r:d.reduce((f,g)=>f+re(g[0]-c,g[2]-h),0)/d.length})}return a}var Ly=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]];function*um(n,t={}){var q,tt,W;let e=(q=t.voxel)!=null?q:.7,i=6,s=-92,r=-14,o=-182,a=124,c=66,l=8,h=Math.ceil((a-s)/e)+1,u=Math.ceil((c-r)/e)+1,d=Math.ceil((l-o)/e)+1,f=Math.ceil(h/i),g=Math.ceil(u/i),x=Math.ceil(d/i),m=new Map,p=[],_=[],y=.5*Math.sqrt(3)*i*e*((tt=t.rk)!=null?tt:1.35)+((W=t.rc)!=null?W:1),v=new Float32Array((i+1)**3),S=new Float64Array(8),T=0;for(let Q=0;Q<x;Q++)for(let rt=0;rt<g;rt++)for(let nt=0;nt<f;nt++){let G=s+(nt+.5)*i*e,z=r+(rt+.5)*i*e,J=o+(Q+.5)*i*e,F=!1;for(let lt of jl){let ot=lt.bb;if(G>ot[0]-y-3&&G<ot[3]+y+3&&z>ot[1]-y-3&&z<ot[4]+y+3&&J>ot[2]-y-3&&J<ot[5]+y+3){F=!0;break}}if(!F||Math.abs(je(G,z,J))>y)continue;++T%24===0&&(yield);let N=nt*i,it=rt*i,at=Q*i,E=i+1;for(let lt=0;lt<=i;lt++)for(let ot=0;ot<=i;ot++)for(let $=0;$<=i;$++)v[$+E*(ot+E*lt)]=je(s+(N+$)*e,r+(it+ot)*e,o+(at+lt)*e);for(let lt=0;lt<i;lt++)for(let ot=0;ot<i;ot++)for(let $=0;$<i;$++){let st=N+$,gt=it+ot,ct=at+lt;if(st>=h-1||gt>=u-1||ct>=d-1)continue;let yt=0;for(let mt=0;mt<8;mt++){let dt=v[$+(mt&1)+E*(ot+(mt>>1&1)+E*(lt+(mt>>2&1)))];S[mt]=dt,dt<0&&(yt|=1<<mt)}if(yt===0||yt===255)continue;let Rt=0,Ft=0,D=0,R=0;for(let[mt,dt]of Ly){let Ot=S[mt],Et=S[dt];if(Ot<0==Et<0)continue;let Nt=Ot/(Ot-Et),zt=mt&1,vt=mt>>1&1,Ct=mt>>2&1,Yt=dt&1,Vt=dt>>1&1,Tt=dt>>2&1;Rt+=zt+(Yt-zt)*Nt,Ft+=vt+(Vt-vt)*Nt,D+=Ct+(Tt-Ct)*Nt,R++}let Y=st+h*(gt+u*ct);m.set(Y,p.length/3),p.push(s+(st+Rt/R)*e,r+(gt+Ft/R)*e,o+(ct+D/R)*e);let ut=S[0];ut<0!=S[1]<0&&gt>0&&ct>0&&_.push(Y,0,ut<0?1:0),ut<0!=S[2]<0&&st>0&&ct>0&&_.push(Y,1,ut<0?1:0),ut<0!=S[4]<0&&st>0&&gt>0&&_.push(Y,2,ut<0?1:0)}}let w=4,A=Math.ceil((a-s)/w)+1,b=Math.ceil((l-o)/w)+1,M=new Float32Array(A*b);for(let Q=0;Q<b;Q++)for(let rt=0;rt<A;rt++){let nt=s+rt*w,G=o+Q*w;M[rt+A*Q]=Math.min(ce(nt,G),ce(nt+w,G),ce(nt,G+w),ce(nt+w,G+w),ce(nt+w/2,G+w/2))-3,rt===0&&Q%8===0&&(yield)}let C=(Q,rt,nt)=>{let G=Math.floor((Q-s)/w),z=Math.floor((nt-o)/w);return G>=0&&z>=0&&G<A&&z<b&&rt<M[G+A*z]},P=1,U=h,k=h*u,L=Q=>[p[Q*3],p[Q*3+1],p[Q*3+2]],V=0,j=(Q,rt,nt,G)=>{let z=L(Q),J=L(rt),F=L(nt),N=(z[0]+J[0]+F[0])/3,it=(z[1]+J[1]+F[1])/3,at=(z[2]+J[2]+F[2])/3;if(!C(N,it,at)&&it>ce(N,at)+.12)return;let E=J[0]-z[0],lt=J[1]-z[1],ot=J[2]-z[2],$=F[0]-z[0],st=F[1]-z[1],gt=F[2]-z[2],ct=(ot*$-E*gt)/(no(lt*gt-ot*st,ot*$-E*gt,E*st-lt*$)||1);if(ct>.6&&!C(N,it,at)&&Math.abs(it-ce(N,at))<.35&&[[0,0],[1.6,0],[-1.6,0],[0,1.6],[0,-1.6]].every(([Y,ut])=>je(N+Y,ce(N+Y,at+ut),at+ut)>=0))return;let yt=ct<-.3?"ceil":"cave",Rt=it+.1*N-.06*at,Ft=Zt(N*.06,it*.06,at*.06),D=.94+.07*Math.sin(Rt*.9+Ft*2.5)-(ct<.6?.07*Gt(.82,1,Math.sin(Rt*2.1+1+Ft*3))+.05*Gt(.9,1,Math.sin(N*.5+at*.8+Ft*5)):0),R=ct>.6?"#A39887":"#958B7D";yt==="ceil"&&Dy(N,it,at)?n.trih(yt,_s(R,D),z,J,F,99,99,99):n.trih(yt,_s(R,D),z,J,F,B(Q),B(rt),B(nt)),V++},H=new Float32Array(p.length/3).fill(NaN);function B(Q){let rt=H[Q];if(rt!==rt){let nt=p[Q*3],G=p[Q*3+1],z=p[Q*3+2];rt=H[Q]=G-va(nt,G,z)}return rt}for(let Q=0;Q<_.length;Q+=3){Q%6e3===0&&(yield);let rt=_[Q],nt=_[Q+1],G=_[Q+2],z;nt===0?z=[rt-U-k,rt-k,rt,rt-U]:nt===1?z=[rt-P-k,rt-P,rt,rt-k]:z=[rt-P-U,rt-U,rt,rt-P];let J=z.map(F=>m.get(F));J.some(F=>F===void 0)||(G?(j(J[0],J[2],J[1]),j(J[0],J[3],J[2])):(j(J[0],J[1],J[2]),j(J[0],J[2],J[3])))}return t.keys&&t.keys(m,p),{bricks:T,verts:p.length/3,tris:V}}var ne={a:"#A39887",b:"#978D7F",c:"#8C8275",top:"#ADA291",paint:"#D9B23C",moss:"#8E9B6A",soil:"#C2B08E",log:"#806B53",logL:"#A08A6C",post:"#6E5C48",plank:"#B7A07F"};function Ks(n){let t=Math.abs(Math.round(n*7919))%2147483646+1;return()=>(t=t*16807%2147483647,(t-1)/2147483646)}var fm=(n,t,e)=>n+(t-n)*e;function Oe(n,t,e,i,s,r,o,a,c={}){var _,y,v,S,T,w,A,b,M,C;let l=Ks((_=c.seed)!=null?_:e*13.1+i*7.3+a*3.7),h=(y=c.n)!=null?y:7,u=(v=c.jit)!=null?v:.2,d=(S=c.flare)!=null?S:.1,f=(T=c.layers)!=null?T:Math.max(1,Math.round((a-o)/1.1)),g=Math.cos((w=c.rot)!=null?w:0),x=Math.sin((A=c.rot)!=null?A:0),m=l()*6.2832,p=[];for(let P=0;P<h;P++){let U=m+(P+(l()-.5)*.55)/h*6.2832,k=1+(l()-.5)*2*u;p.push([Math.cos(U)*s*k,Math.sin(U)*r*k])}for(let P=0;P<f;P++){let U=a-(a-o)*(P+1)/f,k=a-(a-o)*P/f,L=1+d*P,V=P?(l()-.5)*.18:0,j=P?(l()-.5)*.18:0,H=p.map(([B,q])=>[e+V+(g*B-x*q)*L,i+j+(x*B+g*q)*L]);n.prism(t,_s((b=c.c)!=null?b:ne.b,.95+.1*l()),H,U,k,{top:_s(P?(M=c.c)!=null?M:ne.b:(C=c.top)!=null?C:ne.top,.97+.06*l()),bottom:!!c.bottom})}}function Ma(n,t,e,i,s=1.8,r={}){var p,_,y,v;let o=i[0]-e[0],a=i[2]-e[2],c=Math.hypot(o,a),l=i[1]-e[1],h=Math.max(2,Math.round(l/((p=r.rise)!=null?p:.32))),u=o/c,d=a/c,f=-d,g=u,x=Ks((_=r.seed)!=null?_:e[0]*3.1+e[2]*1.7),m=Math.atan2(d,u);for(let S=0;S<h;S++){let T=(S+.5)/h,w=e[1]+l*(S+1)/h,A=(x()-.5)*s*.22,b=s*(.86+.3*x()),M=c/h*(1.25+.3*x()),C=e[0]+o*T+f*A,P=e[2]+a*T+g*A;Oe(n,t,C,P,M/2*1.2,b/2,(v=r.base)!=null?v:w-((y=r.depth)!=null?y:.55),w,{n:6,jit:.13,rot:m,layers:1,seed:x()*999,c:S%2?ne.b:ne.c,top:r.top})}}function Es(n,t,e,i,s,r,o,a,c,l={}){var m,p,_;let h=Ks((m=l.seed)!=null?m:e*5.3+i*2.9),u=Math.hypot(r,o)||1,d=r/u,f=o/u,g=(p=l.n)!=null?p:12,x=(_=l.w)!=null?_:2.4;for(let y=0;y<g;y++){let v=Math.pow((y+.5)/g,.85),S=(h()-.5)*x*(.5+v),T=fm(.75,.32,v)*(.8+.5*h()),w=fm(s,c,v)+T*.35;Oe(n,t,e+d*a*v-f*S,i+f*a*v+d*S,T*1.25,T,w-T*1.3,w,{n:6,jit:.25,rot:h()*3,layers:1,seed:h()*999,c:y%3?ne.b:ne.c})}}function dm(n,t,e,i,s,r={}){var f,g,x;let o=i[0]-e[0],a=i[1]-e[1],c=Math.hypot(o,a),l=Math.atan2(a,o),h=(e[0]+i[0])/2,u=(e[1]+i[1])/2,d=(f=r.d)!=null?f:.4;n.ybox(t,ne.b,h,s-.2,u,c,.4,d,l),n.ybox(t,ne.paint,h-Math.sin(l)*((g=r.side)!=null?g:1)*(d/2-.04),s-.09,u+Math.cos(l)*((x=r.side)!=null?x:1)*(d/2-.04),c*.92,.2,.1,l)}function pm(n,t,e,i,s,r,o,a=.7,c=.22){n.ybox(t,ne.paint,e,i,s,a,c,.05,Math.atan2(o,r)+Math.PI/2)}function Kl(n,t,e,i,s,r,o={}){var x;let a=i[0]-e[0],c=i[2]-e[2],l=Math.hypot(a,c),h=i[1]-e[1],u=Math.max(2,Math.round(Math.abs(h)/.2)),d=Math.atan2(c,a),f=-c/l,g=a/l;for(let m=0;m<u;m++){let p=(m+.5)/u,_=e[1]+h*(m+(h>0?1:0))/u;n.ybox(t,m%2?ne.plank:ne.logL,e[0]+a*p,_-.04,e[2]+c*p,l/u+.03,.08,s,d)}for(let m of[-1,1]){let p=f*m*s/2,_=g*m*s/2;if(n.beam(t,ne.post,[e[0]+p,e[1]-.16,e[2]+_],[i[0]+p,i[1]-.16,i[2]+_],.1,.26),o.rail!==!1&&o.open!==m){n.beam(t,ne.logL,[e[0]+p,e[1]+1,e[2]+_],[i[0]+p,i[1]+1,i[2]+_],.08,.08);for(let y of[0,.5,1]){let v=e[0]+a*y+p,S=e[2]+c*y+_,T=e[1]+h*y;n.box(t,ne.post,v-.05,T-.1,S-.05,v+.05,T+1.04,S+.05)}}for(let y of(x=o.posts)!=null?x:[.5,1]){let v=e[0]+a*y+p,S=e[2]+c*y+_,T=e[1]+h*y,w=r(v,S);T-w>.5&&n.box(t,ne.post,v-.09,w-.1,S-.09,v+.09,T-.1,S+.09)}}if(o.brace!==!1){let m=i[0],p=i[2],_=i[1],y=r(m,p);_-y>1.8&&(n.beam(t,ne.post,[m+f*s/2,y+.2,p+g*s/2],[m-f*s/2,_-.4,p-g*s/2],.07,.07),n.beam(t,ne.post,[m-f*s/2,y+.2,p-g*s/2],[m+f*s/2,_-.4,p+g*s/2],.07,.07))}}function cf(n,t,e,i,s,r,o,a,c,l={}){let h=Math.cos(a),u=Math.sin(a),d=(x,m)=>[e+h*x-u*m,i+u*x+h*m],f=Math.max(2,Math.round(o/.42));for(let x=0;x<f;x++){let m=-o/2+o*(x+.5)/f,p=d(0,m);n.ybox(t,x%3===1?ne.logL:ne.plank,p[0],s-.05,p[1],r,.1,o/f-.04,a)}for(let x of[-r/2+.1,r/2-.1]){let m=d(x,0);n.ybox(t,ne.post,m[0],s-.2,m[1],.14,.2,o,a)}let g=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,m])=>d(x*(r/2-.1),m*(o/2-.1)));for(let x of g){let m=c(x[0],x[1]);n.box(t,ne.post,x[0]-.1,m-.1,x[1]-.1,x[0]+.1,s+(l.tall?1.05:-.1),x[1]+.1)}if(l.brace!==!1)for(let[x,m]of[[0,1],[2,3]]){let p=g[x],_=g[m],y=Math.max(c(p[0],p[1]),c(_[0],_[1]));s-y>1.6&&(n.beam(t,ne.post,[p[0],y+.25,p[1]],[_[0],s-.35,_[1]],.07,.07),n.beam(t,ne.post,[_[0],y+.25,_[1]],[p[0],s-.35,p[1]],.07,.07))}for(let x of l.rails||[]){let[m,p]=x==="+u"?[d(r/2-.05,-o/2),d(r/2-.05,o/2)]:x==="-u"?[d(-r/2+.05,-o/2),d(-r/2+.05,o/2)]:x==="+v"?[d(-r/2,o/2-.05),d(r/2,o/2-.05)]:[d(-r/2,-o/2+.05),d(r/2,-o/2+.05)];n.beam(t,ne.logL,[m[0],s+1,m[1]],[p[0],s+1,p[1]],.08,.08),n.beam(t,ne.logL,[m[0],s+.5,m[1]],[p[0],s+.5,p[1]],.06,.06);for(let _ of[m,p])n.box(t,ne.post,_[0]-.05,s,_[1]-.05,_[0]+.05,s+1.04,_[1]+.05)}return d}function mm(n,t,e,i,s,r,o=0,a={}){let c=Math.cos(o),l=Math.sin(o);for(let u of[-.28,.28])n.box(t,ne.log,e+c*u-.04,s,i+l*u-.04,e+c*u+.04,r+.7,i+l*u+.04);let h=0;for(let u=s+.3;u<r+.5;u+=.32,h++)n.ybox(t,a.paint&&u>r-.7?ne.paint:ne.logL,e,u,i,.6,.05,.06,o)}var ba=ce,Aa={},oo={broad:[],pine:[]},ws=(()=>{let n=pt.WPC,t=[pt.SH.x,pt.SH.z],e=Ki(n[0],n[1],pt.WP.y,t[0]-n[0],t[1]-n[1]),i=Ki(t[0],t[1],pt.SH.y-.6,n[0]-t[0],n[1]-t[1]),s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=so(i[0]+(t[0]-i[0])/s*.5,i[1]+(t[1]-i[1])/s*.5,pt.SH.y+1.2,2.4);return{a:e,b:i,ya:pt.WP.y,yb:+(r!=null?r:pt.SH.y).toFixed(2)}})(),Z={wood:"#A08A6C",woodD:"#806B53",plank:"#B7A07F",post:"#6E5C48",sleeper:"#7C6852",rail:"#6B6966",stone:"#BDB5A7",stoneD:"#A39B8E",roof:"#7F7064",roofL:"#93857A",canvas:"#D8CFBD",metal:"#6F7478",ore:"#857B6F",coal:"#57524C",lamp:"#FFD38A",rope:"#BCA57F",paper:"#EFE8D8",red:"#A85E49",board:"#C9B48F",hull:"#8B7358",hullD:"#6F5B45",water:"#B9D3D3"},Ee=(n,t,e)=>n+(t-n)*e;function fe(n,t,e,i,s,r,o=.22,a=Z.post){n.box(t,a,e-o/2,s,i-o/2,e+o/2,r,i+o/2)}function Ea(n,t,e,i,s,r,o,a="x",c={}){var g,x,m,p;let l=(g=c.t)!=null?g:.14,h=(x=c.pw)!=null?x:.42,u=.05,d=(m=c.c)!=null?m:Z.plank,f=(p=c.c2)!=null?p:Z.wood;if(a==="x"){let _=0;for(let y=s;y<r-.01;y+=h,_++)n.box(t,_%3===1?f:d,e,o-l,y,i,o,Math.min(r,y+h-u))}else{let _=0;for(let y=e;y<i-.01;y+=h,_++)n.box(t,_%3===1?f:d,y,o-l,s,Math.min(i,y+h-u),o,r)}if(c.joist!==!1){let _=o-l,y=Math.max(1,Math.round((a==="x"?i-e:r-s)/2.5));for(let v=0;v<=y;v++){let S=v/y;if(a==="x"){let T=Ee(e+.1,i-.1,S);n.box(t,Z.post,T-.09,_-.22,s,T+.09,_,r)}else{let T=Ee(s+.1,r-.1,S);n.box(t,Z.post,e,_-.22,T-.09,i,_,T+.09)}}}}function xn(n,t,e,i,s,r=2.6){fe(n,t,e,s,i,i+r,.12,Z.post),n.box(t,Z.post,e-.05,i+r-.05,s-.05,e+.45,i+r+.05,s+.05),n.box(t+":e",Z.lamp,e+.3,i+r-.42,s-.13,e+.56,i+r-.1,s+.13)}function Dn(n,t,e,i,s,r,o){n.box(t+":e",Z.lamp,e-.14+r*.12,i-.16,s-.14+o*.12,e+.14+r*.12,i+.16,s+.14+o*.12),n.box(t,Z.post,e-.07-0,i+.16,s-.07,e+.07,i+.26,s+.07)}function me(n,t,e,i,s,r=1,o=0){n.ybox(t,Z.wood,e,i+r/2,s,r,r,r,o),n.ybox(t,Z.woodD,e,i+r/2,s,r*1.02,r*.16,r*1.02,o)}function We(n,t,e,i,s,r=.34){n.cyl(t,Z.woodD,e,s,i,i+.95,r,8),n.cyl(t,Z.metal,e,s,i+.28,i+.34,r+.02,8),n.cyl(t,Z.metal,e,s,i+.64,i+.7,r+.02,8)}function tr(n,t,e,i,s,r=0,o=!0){let a=Math.cos(r),c=Math.sin(r),l=(h,u)=>[e+a*h-c*u,s+c*h+a*u];n.ybox(t,Z.metal,e,i+.62,s,1.7,.62,1.05,r),n.ybox(t,"#5E6367",e,i+.32,s,1.4,.14,.8,r);for(let[h,u]of[[-.5,-.52],[.5,-.52],[-.5,.52],[.5,.52]]){let d=l(h,u);n.ybox(t,"#3F4245",d[0],i+.26,d[1],.44,.44,.1,r)}o&&n.ybox(t,Z.ore,e,i+1,s,1.5,.22,.9,r)}function er(n,t,e,i=1,s={}){let r=[];for(let a=0;a<e.length-1;a++){let c=e[a],l=e[a+1],h=Math.hypot(l[0]-c[0],l[1]-c[1]),u=Math.max(1,Math.ceil(h/.8));for(let d=0;d<u;d++)r.push([Ee(c[0],l[0],d/u),Ee(c[1],l[1],d/u),Ee(c[2],l[2],d/u)])}r.push(e[e.length-1]);let o=[];for(let a=0;a<r.length;a++){let c=r[Math.max(0,a-1)],l=r[Math.min(r.length-1,a+1)],h=Math.hypot(l[0]-c[0],l[1]-c[1])||1,u=(l[0]-c[0])/h,d=(l[1]-c[1])/h;o.push([-d,u])}for(let a=0;a<r.length;a++){let c=r[a],l=o[a],h=Math.atan2(l[1],l[0]);s.sleepers!==!1&&n.ybox(t,Z.sleeper,c[0],c[2]+.07,c[1],i+.7,.13,.22,h)}for(let a of[-1,1])for(let c=0;c<r.length-1;c++){let l=r[c],h=r[c+1],u=o[c],d=o[c+1];n.beam(t+":g",Z.rail,[l[0]+u[0]*a*i/2,l[2]+.2,l[1]+u[1]*a*i/2],[h[0]+d[0]*a*i/2,h[2]+.2,h[1]+d[1]*a*i/2],.08,.11)}if(s.stop){let a=r[r.length-1],c=o[o.length-1],l=Math.atan2(c[1],c[0]);n.ybox(t,Z.red,a[0],a[2]+.55,a[1],i+.5,.5,.4,l)}}function gm(n,t){return n.map((e,i)=>{let s=n[Math.max(0,i-1)],r=n[Math.min(n.length-1,i+1)],o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[e[0]-(r[1]-s[1])/o*t,e[1]+(r[0]-s[0])/o*t,e[2]]})}function wa(n,t,e,i,s=1.6,r={}){var m;let o=i[0]-e[0],a=i[2]-e[2],c=Math.hypot(o,a),l=o/c,h=a/c,u=-h,d=l,f=Math.atan2(h,l),g=Math.max(2,Math.round(c/.36)),x=(m=r.sag)!=null?m:0;for(let p=0;p<g;p++){let _=(p+.5)/g,y=e[0]+o*_,v=e[2]+a*_,S=Ee(e[1],i[1],_)-x*4*_*(1-_);n.ybox(t,p%4===1?Z.wood:Z.plank,y,S-.07,v,c/g-.05,.14,s,f)}for(let p of[-1,1]){let _=u*p*(s/2-.06),y=d*p*(s/2-.06),v=Math.max(1,Math.round(c/2.2));for(let S=0;S<=v;S++){let T=S/v,w=e[0]+o*T+_,A=e[2]+a*T+y,b=Ee(e[1],i[1],T)-x*4*T*(1-T);fe(n,t,w,A,b-.14,b+1.05,.1)}if(r.rope)for(let S=0;S<v;S++){let T=S/v,w=(S+1)/v,A=Ee(e[1],i[1],T)-x*4*T*(1-T),b=Ee(e[1],i[1],w)-x*4*w*(1-w);n.beam(t,Z.rope,[e[0]+o*T+_,A+.95,e[2]+a*T+y],[e[0]+o*w+_,b+.95,e[2]+a*w+y],.05,.05)}else n.beam(t,Z.wood,[e[0]+_,e[1]+1,e[2]+y],[i[0]+_,i[1]+1,i[2]+y],.09,.09)}return r.under&&n.beam(t,Z.post,[e[0],e[1]-.26,e[2]],[i[0],i[1]-.26,i[2]],.2,.24),{ux:l,uz:h,nx:u,nz:d,len:c,yaw:f}}function lf(n,t,e,i,s){let r=i+.4,o=e.length;for(let a=0;a<o-1;a++){let c=e[a].slice(),l=e[a+1].slice(),h=l[0]-c[0],u=l[2]-c[2],d=Math.hypot(h,u),f=h/d,g=u/d;if(a>0&&(c[0]+=f*r/2,c[2]+=g*r/2),a+1<o-1&&(l[0]-=f*r/2,l[2]-=g*r/2),Math.abs(c[1]-l[1])<.05){let x=Math.hypot(l[0]-c[0],l[2]-c[2]);x>.2&&cf(n,t,(c[0]+l[0])/2,(c[2]+l[2])/2,c[1],x+.1,i,Math.atan2(g,f),s,{rails:["+v","-v"]})}else{let x=c[1]<l[1]?c:l,m=c[1]<l[1]?l:c;Kl(n,t,x,m,i,s,{posts:[.5,1]})}}for(let a=1;a<o-1;a++){let c=e[a],l=e[a-1],h=Math.atan2(c[2]-l[2],c[0]-l[0]);cf(n,t,c[0],c[2],c[1],r,r,h,s,{})}}function Mm(n,t,e,i,s=1.4,r={}){let o=i[0]-e[0],a=i[2]-e[2],c=Math.hypot(o,a),l=i[1]-e[1],h=Math.max(2,Math.round(l/.19)),u=Math.atan2(a,o);for(let g=0;g<h;g++){let x=(g+.5)/h,m=e[0]+o*x,p=e[2]+a*x,_=e[1]+l*(g+1)/h;n.ybox(t,g%2?Z.plank:Z.wood,m,_-.09,p,c/h+.02,.18,s,u)}let d=-a/c,f=o/c;for(let g of[-1,1]){let x=d*g*s/2,m=f*g*s/2;n.beam(t,Z.post,[e[0]+x,e[1]-.1,e[2]+m],[i[0]+x,i[1]-.1,i[2]+m],.12,.3),r.rail!==!1&&(n.beam(t,Z.wood,[e[0]+x,e[1]+1,e[2]+m],[i[0]+x,i[1]+1,i[2]+m],.08,.08),fe(n,t,e[0]+x,e[2]+m,e[1],e[1]+1.05,.1),fe(n,t,i[0]+x,i[2]+m,i[1],i[1]+1.05,.1))}}function df(n,t,e,i,s,r,o,a,c={}){var _,y,v,S,T;let h=c.doors||[],u=c.wins||[],d=w=>[...h.filter(A=>A.side===w).map(A=>{var b;return{a:A.at-A.w/2,w:A.w,y0:0,y1:(b=A.h)!=null?b:2.2}}),...u.filter(A=>A.side===w).map(A=>{var b,M;return{a:A.at-A.w/2,w:A.w,y0:(b=A.y0)!=null?b:1,y1:(M=A.y1)!=null?M:1.9}})],f=(_=c.wall)!=null?_:Z.wood;n.wall(t,f,[e,r-.18/2],[i,r-.18/2],o,o+a,.18,d("s")),n.wall(t,f,[i,s+.18/2],[e,s+.18/2],o,o+a,.18,d("n")),n.wall(t,f,[i-.18/2,r],[i-.18/2,s],o,o+a,.18,d("e")),n.wall(t,f,[e+.18/2,s],[e+.18/2,r],o,o+a,.18,d("w"));for(let w of h){let[A,b,M]=w.side==="s"?[e+w.at,r,"x"]:w.side==="n"?[i-w.at,s,"x"]:w.side==="e"?[i,r-w.at,"z"]:[e,s+w.at,"z"],C=(y=w.h)!=null?y:2.2;M==="x"?(n.box(t,Z.post,A-w.w/2-.1,o,b-.14,A-w.w/2,o+C+.1,b+.14),n.box(t,Z.post,A+w.w/2,o,b-.14,A+w.w/2+.1,o+C+.1,b+.14),n.box(t,Z.post,A-w.w/2-.1,o+C,b-.14,A+w.w/2+.1,o+C+.12,b+.14)):(n.box(t,Z.post,A-.14,o,b-w.w/2-.1,A+.14,o+C+.1,b-w.w/2),n.box(t,Z.post,A-.14,o,b+w.w/2,A+.14,o+C+.1,b+w.w/2+.1),n.box(t,Z.post,A-.14,o+C,b-w.w/2-.1,A+.14,o+C+.12,b+w.w/2+.1))}n.box(t,Z.post,e-.05,o,s-.05,e+.2,o+a,s+.2),n.box(t,Z.post,i-.2,o,s-.05,i+.05,o+a,s+.2),n.box(t,Z.post,e-.05,o,r-.2,e+.2,o+a,r+.05),n.box(t,Z.post,i-.2,o,r-.2,i+.05,o+a,r+.05),c.floor!==!1&&n.box(t,Z.plank,e+.1,o-.12,s+.1,i-.1,o+.02,r-.1);let g=(v=c.over)!=null?v:.5,x=(S=c.rh)!=null?S:1.4,m=o+a,p=(T=c.roofC)!=null?T:Z.roof;if(c.roof==="gable-x"){let w=(s+r)/2;n.plate(t,p,[[e-g,m+x,w],[i+g,m+x,w],[i+g,m-.15,r+g],[e-g,m-.15,r+g]],.16),n.plate(t,p,[[e-g,m-.15,s-g],[i+g,m-.15,s-g],[i+g,m+x,w],[e-g,m+x,w]],.16);for(let A of[e,i])n.prism(t,f,[[A-.09,s],[A+.09,s],[A+.09,r],[A-.09,r]],m,m+.01,{top:!1,bottom:!1,sides:!1}),n.tri(t,f,[A,m,s+.1],[A,m+x-.1,w],[A,m,r-.1]),n.tri(t,f,[A,m,r-.1],[A,m+x-.1,w],[A,m,s+.1])}else if(c.roof==="gable-z"){let w=(e+i)/2;n.plate(t,p,[[w,m+x,s-g],[w,m+x,r+g],[i+g,m-.15,r+g],[i+g,m-.15,s-g]],.16),n.plate(t,p,[[e-g,m-.15,s-g],[e-g,m-.15,r+g],[w,m+x,r+g],[w,m+x,s-g]],.16);for(let A of[s,r])n.tri(t,f,[e+.1,m,A],[w,m+x-.1,A],[i-.1,m,A]),n.tri(t,f,[i-.1,m,A],[w,m+x-.1,A],[e+.1,m,A])}else c.roof==="shed-w"?n.plate(t,p,[[e-g,m,s-g],[i+g,m+x*.6,s-g],[i+g,m+x*.6,r+g],[e-g,m,r+g]],.16):c.roof==="shed-s"?n.plate(t,p,[[e-g,m+x*.6,s-g],[i+g,m+x*.6,s-g],[i+g,m,r+g],[e-g,m,r+g]],.16):c.roof==="flat"&&n.box(t,p,e-g,m,s-g,i+g,m+.2,r+g)}function hf(n,t,e,i,s=1.05){n.rail(t,Z.wood,e,i,s,1.6,{w:.08,top:.1})}function ro(n,t,e,i,s,r=0){let o=Math.cos(r),a=Math.sin(r);for(let c of[-.55,.55])fe(n,t,e+o*c,s+a*c,i,i+1.8,.1);n.ybox(t,Z.board,e,i+1.3,s,1.3,.8,.08,r),n.ybox(t,Z.paper,e+a*.05,i+1.32,s-o*.05,.5,.36,.02,r),n.ybox(t,Z.paper,e+a*.05+o*.32,i+1.22,s-o*.05+a*.32,.3,.26,.02,r)}function ao(n,t,e,i,s,r=1.4,o=.8,a=0){n.ybox(t,Z.wood,e,i+.76,s,r,.06,o,a);let c=Math.cos(a),l=Math.sin(a);for(let[h,u]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let d=e+c*h*(r/2-.08)-l*u*(o/2-.08),f=s+l*h*(r/2-.08)+c*u*(o/2-.08);n.box(t,Z.post,d-.04,i,f-.04,d+.04,i+.74,f+.04)}}function ts(n,t,e,i,s,r,o,a=Z.ore){n.frustum(t,a,e,s,i,i+o,r,r*.25,7,.3)}function Fi(n,t){let e=new xs;return Aa[n]={g:t,k:e},e}function Fy(n){let e=pe.y,i=new xs,s=(x,m)=>ba(...$r(x,m));Ea(i,"out",pe.x0,pe.x1,pe.z0,pe.z1,e,"x");for(let x=pe.x0+.3;x<=pe.x1-.2;x+=3.2)for(let m=pe.z0+.3;m<=pe.z1-.2;m+=3.6)fe(i,"out",x,m,Math.min(s(x,m),0)-.6,e-.14,.26);hf(i,"out",[[pe.x0+.1,pe.z0+.1],[pe.x0+.1,pe.z1-.1],[Re.x0,pe.z1-.1]],e),hf(i,"out",[[Re.x1,pe.z1-.1],[pe.x1-.1,pe.z1-.1],[pe.x1-.1,Rn.z1+.1]],e),hf(i,"out",[[pe.x1-.1,Rn.z0-.1],[pe.x1-.1,pe.z0+.1]],e),Ea(i,"out",Re.x0,Re.x1,Re.z0,Re.z1,Re.y,"z",{pw:.4});for(let x=Re.z0+1.5;x<=Re.z1;x+=3)for(let m of[Re.x0+.15,Re.x1-.15])fe(i,"out",m,x,-2.4,Re.y-.14,.26);for(let x of[Re.x0+.3,Re.x1-.3])i.cyl("out",Z.metal,x,Re.z1-.4,Re.y,Re.y+.5,.16,6);let r=ji.x,o=ji.z-ji.len/2,a=ji.z+ji.len/2,c=ji.w/2,l=[[r,o-.4],[r+c*.7,o+2],[r+c,o+5],[r+c,a-1.5],[r+c*.8,a],[r-c*.8,a],[r-c,a-1.5],[r-c,o+5],[r-c*.7,o+2]];i.prism("out",Z.hull,l,-.7,1.1),i.prism("out",Z.hullD,l.map(([x,m])=>[r+(x-r)*.93,ji.z+(m-ji.z)*.97]),1.1,1.35,{sides:!0}),Ea(i,"out",r-c+.5,r+c-.5,o+3.5,a-.8,1.32,"z",{pw:.45,joist:!1}),df(i,"out",r-1.6,r+1.6,a-5.2,a-1.4,1.32,2.1,{doors:[{side:"n",at:1.6,w:.9,h:1.8}],wins:[{side:"e",at:1.9,w:1.2,y0:1.1,y1:1.7},{side:"w",at:1.9,w:1.2,y0:1.1,y1:1.7}],roof:"flat",over:.3,floor:!1}),fe(i,"out",r,o+4.5,1.32,8.5,.2),i.beam("out",Z.post,[r,6.2,o+4.5],[r,3.2,o+8.5],.12,.12),wa(i,"out",[r,Re.y,Re.z1-.6],[r,1.35,o+1.2],1);let h=Up;df(i,"out",h.x0,h.x1,h.z0,h.z1,e,h.h,{doors:[{side:"s",at:5.6,w:1.2}],wins:[{side:"s",at:2.4,w:1.6},{side:"s",at:8.8,w:1.6},{side:"e",at:2.6,w:1.4},{side:"w",at:2.6,w:1.4}],roof:"gable-x",rh:1.5,wall:"#B19B7B"}),ao(i,"out",$t.x,e,$t.z,2.6,.9),i.box("out",Z.paper,$t.x-.6,e+.79,$t.z-.25,$t.x+.1,e+.82,$t.z+.2),i.box("out","#5B5650",$t.x+.5,e+.79,$t.z-.1,$t.x+.8,e+1,$t.z+.15),me(i,"out",h.x1+.6,e,31.4,1.1,.2),me(i,"out",h.x1+1.1,e,32.7,.9,-.1),me(i,"out",h.x1+.7,e+1.1,31.5,.8,.5),We(i,"out",pe.x0+.8,e,38.6),We(i,"out",pe.x0+.7,e,39.5),xn(i,"out",pe.x0+.4,e,pe.z1-.5,3),xn(i,"out",pe.x1-.5,e,pe.z1-.5,3),xn(i,"out",Re.x1-.2,Re.y,Re.z1-1,3);let u=s(Rn.x+3.2,(Rn.z0+Rn.z1)/2);Mm(i,"out",[Rn.x+3.6,u,(Rn.z0+Rn.z1)/2],[Rn.x,e,(Rn.z0+Rn.z1)/2],Rn.z1-Rn.z0-.2,{rail:!1});let d=Math.cos(_i.rot),f=Math.sin(_i.rot);for(let[x,m]of Object.entries(i.L)){let p=n.buf(x);if(m.h)throw new Error("dock layer with cut heights");for(let _=0;_<m.p.length;_+=3){let[y,v]=$r(m.p[_],m.p[_+2]);p.p.push(y,m.p[_+1],v);let S=m.n[_],T=m.n[_+2];p.n.push(S*d+T*f,m.n[_+1],-S*f+T*d)}for(let _=0;_<m.c.length;_++)p.c.push(m.c[_])}let g=mn;ro(n,"out",g.x-1.2,ba(g.x-1.2,g.z-2.6),g.z-2.6,.5),me(n,"out",g.x+2.6,ba(g.x+2.6,g.z-1.6),g.z-1.6,1,.3),me(n,"out",g.x+3.6,ba(g.x+3.6,g.z-1.1),g.z-1.1,.9,.1),xn(n,"out",g.x+1.2,ba(g.x+1.2,g.z-3.4),g.z-3.4,3)}function Uy(n){let e=Np;n.box("out",Z.stone,e.x0,-2.5,e.z0,e.x1,e.y,e.z1),n.box("out",Z.stoneD,e.x0-.1,e.y-.25,e.z1-.4,e.x1+.1,e.y+.05,e.z1+.1);for(let f of[e.x0+2,e.x1-2])n.cyl("out",Z.metal,f,e.z1-.5,e.y,e.y+.5,.18,6);ts(n,"out",e.x0+4.5,e.y,40,2.2,1.9),ts(n,"out",e.x0+1.6,e.y,41.6,1.4,1.2),tr(n,"out",e.x1-2.6,e.y,39.4,Math.PI/2),tr(n,"out",e.x1-2.6,e.y,41.8,Math.PI/2,!1);let i=e.x1-.8;fe(n,"out",i,42.4,e.y,e.y+6.4,.3),n.beam("out",Z.post,[i,e.y+5.8,42.4],[i,e.y+3,47.6],.16,.16),n.beam("out",Z.rope,[i,e.y+5.6,47],[i,e.y+2,47],.04,.04);let[s,r,o]=pa.a,[a,c,l]=pa.b,h=Math.hypot(a-s,l-o),u=Math.round(h/5.2);n.beam("out",Z.woodD,[s,r,o],[a,c,l],1.3,.45),n.beam("out","#5E5A55",[s,r+.26,o],[a,c+.26,l],1,.08);for(let f=1;f<u;f++){let g=f/u,x=Ee(s,a,g),m=Ee(o,l,g),p=Ee(r,c,g),_=ce(x,m),y=(l-o)/h*.75,v=-(a-s)/h*.75;for(let S of[-1,1])fe(n,"out",x+y*S,m+v*S,_-.3,p-.2,.2);n.beam("out",Z.post,[x-y,p-.3,m-v],[x+y,p-.3,m+v],.16,.16),p-_>3&&n.beam("out",Z.post,[x-y,_+.4,m-v],[x+y,p-.6,m+v],.1,.1)}n.frustum("out",Z.woodD,a,l+1.2,c-1.6,c+.2,.5,1.2,4,Math.PI/4);let d=ce(a,l+2.6);er(n,"out",[[a,l+2.6,d],[a+.4,e.z0-1.5,ce(a+.4,e.z0-1.5)],[a+.6,e.z0+2,e.y]],.9),df(n,"out",s-1.5,s+2.5,o-4.5,o-.5,xe.y,3,{doors:[{side:"w",at:2,w:1.1}],roof:"shed-s",wall:"#A99377"})}function Ny(n){let e=$u/2,i=Qr/2,s=Ks(77),r=(o,a)=>[o[0]-o[4]*a,o[1]+o[3]*a];Ju.forEach(([o,a,c],l)=>{let h=on(o),u=on(a);n.prism("out",l%2?"#C6B491":"#CEBC99",[r(h,e),r(h,-e),r(u,-e),r(u,e)],c-.6,c+.01,{bottom:!1});let d=r(h,e+.12),f=r(h,-e-.12);n.beam("out",l%3?Z.woodD:Z.wood,[d[0]-h[3]*.06,c-.1,d[1]-h[4]*.06],[f[0]-h[3]*.06,c-.1,f[1]-h[4]*.06],.2,.22);for(let g of[r(h,e-.1),r(h,-e+.1)])fe(n,"out",g[0]-h[3]*.22,g[1]-h[4]*.22,c-.7,c+.06,.12)});for(let o of[1,-1]){let a=null;for(let c=1;c<=Op-3;c+=1.1){let l=on(c),h=r(l,o*(i+1.5)),u=l[2]-ce(h[0],h[1],1),d=r(l,o*(i+.62)),f=u>.6?[d[0],d[1],l[2]+.14,Math.min(u,2.4)]:null;if(f&&a){let g=Math.max(2,Math.round(Math.max(f[3],a[3])/.24));for(let x=0;x<g;x++)n.beam("out",x%2?Z.woodD:Z.wood,[a[0],a[2]-.12-x*.24,a[1]],[f[0],f[2]-.12-x*.24,f[1]],.2,.23);fe(n,"out",f[0]+(f[0]-l[0])*.07,f[1]+(f[1]-l[1])*.07,f[2]-f[3]-.5,f[2]+.1,.17)}else f&&fe(n,"out",f[0]+(f[0]-l[0])*.07,f[1]+(f[1]-l[1])*.07,f[2]-f[3]-.5,f[2]+.1,.17);if(a=f,u<-.7&&s()<.3){let g=r(l,o*(i+.5+s()*.9)),x=.3+s()*.35;Oe(n,"out",g[0],g[1],x*1.2,x,ce(g[0],g[1])-.3,ce(g[0],g[1])+x*.8,{n:6,layers:1,seed:s()*99,c:"#A69D8E",top:"#B4AB9B"})}}}[3.5,11.5,19.5,27.5,35.5,41.6].forEach((o,a)=>{let c=on(o),l=r(c,(a%2?1:-1)*(i+1.1));xn(n,"out",l[0],Math.max(ce(l[0],l[1]),a%2?-9:c[2]-.3),l[1],2.8)});{let o=on(22.6),a=r(o,-i-1.5),c=Math.atan2(o[4],o[3]),l=ce(a[0],a[1]);for(let h=0;h<5;h++){let u=h%3*.34-.34+(h>2?.17:0),d=l+.17+(h>2?.3:0);n.beam("out",h%2?Z.woodD:Z.wood,[a[0]-o[3]*1.5-o[4]*u*-1,d,a[1]-o[4]*1.5+o[3]*u*-1],[a[0]+o[3]*1.5-o[4]*u*-1,d,a[1]+o[4]*1.5+o[3]*u*-1],.3,.3)}}}function bm(n,t,e,i,s,r){let o=Math.cos(r),a=Math.sin(r);Em(n,t,s,()=>({x:e,z:i,c:o,s:a,d0:0}))}function xm(n,t){let e=1;for(;e<n.length-1&&n[e][3]<t;)e++;let i=n[e-1],s=n[e],r=Math.max(0,Math.min(1,(t-i[3])/(s[3]-i[3]||1)));return[Ee(i[0],s[0],r),Ee(i[1],s[1],r),Ee(i[2],s[2],r)]}var Sm=(n,t)=>(e,i)=>{let s=xm(n,t-e),r=xm(n,t-i),o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return{x:s[0],z:s[1],c:(s[0]-r[0])/o,s:(s[1]-r[1])/o,d0:e}};function By(n,t,e,i,s){Em(n,t,s,Sm(e,i))}function Oy(n,t,e,i,s){let[r,o]=i<4.2?[0,4]:i<9.8?[4.4,9.6]:[10,15.2],a=Sm(n,t)(r,o),c=i-a.d0;return[+(a.x-a.c*c-a.s*s).toFixed(2),+(e+.85).toFixed(2),+(a.z-a.s*c+a.c*s).toFixed(2)]}function Em(n,t,e,i){let s=e+.2,r=o=>[(a,c=0)=>[o.x-o.c*(a-o.d0)-o.s*c,o.z-o.s*(a-o.d0)+o.c*c],Math.atan2(o.s,o.c)];{let[o,a]=r(i(0,4)),c=o(2);n.ybox(t,"#5E6569",c[0],s+1.2,c[1],4,1.8,2.2,a),c=o(2.9),n.ybox(t,"#4F5458",c[0],s+2.65,c[1],2.1,1.1,1.8,a),c=o(.9),n.cyl(t,"#4F5458",c[0],c[1],s+2.1,s+3.3,.25,6)}for(let[o,a,c]of[[7,4.4,9.6],[12.6,10,15.2]]){let[l,h]=r(i(a,c)),u=l(o);n.ybox(t,"#6E5A48",u[0],s+.45,u[1],5.2,.3,2.1,h);for(let d of[-1,1]){let f=l(o,d);n.ybox(t,"#8C6F57",f[0],s+.9,f[1],5.2,.6,.1,h)}for(let d of[-2.55,2.55]){let f=l(o+d);n.ybox(t,"#8C6F57",f[0],s+.9,f[1],.1,.6,2.1,h)}for(let d of[-1.7,0,1.7]){let f=l(o+d);n.ybox(t,Z.wood,f[0],s+.96,f[1],.42,.08,1.9,h);let g=l(o+d+.3);n.ybox(t,Z.wood,g[0],s+1.3,g[1],.08,.6,1.9,h)}}}var _m={pas:[[$e[0][0],Cn.pas,12],[-21.5,Cn.pas,12]],fre:$l([[$e[0][0],Cn.fre,12],[11.6,Cn.fre,12],[7.2,5.8,12],[-3.4,5.8,12]],4.5).map(n=>[n[0],n[1],n[2]])};function zy(n){let e=xe.y;er(n,"out",_m.pas,1,{stop:!0}),er(n,"out",_m.fre,1,{stop:!0});for(let u of[In,Pi])n.box("out",Z.stone,u.x0,e-.1,u.z0,u.x1,u.y,u.z1),n.box("out","#D9CFBF",u.x0,u.y-.02,u.z0,u.x1,u.y+.02,u.z0+.3),Mm(n,"out",[u.x0-1.8,e,(u.z0+u.z1)/2],[u.x0,u.y,(u.z0+u.z1)/2],1.6,{rail:!1});for(let u of[-15.5,-10.5])n.box("out",Z.wood,u-.9,In.y,In.z1-1.1,u+.9,In.y+.45,In.z1-.7),n.box("out",Z.wood,u-.9,In.y+.45,In.z1-.7,u+.9,In.y+.9,In.z1-.6);ro(n,"out",-7.4,In.y,In.z1-.6,0),bm(Fi("trainS","out"),"out",-3.4,Cn.pas,e,0);for(let u=0;u<4;u++)tr(n,"out",-1.4+u*2.3,e+.05,5.8,0,u<3);me(n,"out",2.4,Pi.y,9.4,1.1),me(n,"out",3.7,Pi.y,9.5,1),We(n,"out",6,Pi.y,9.5),We(n,"out",6.8,Pi.y,9.1);for(let u=0;u<6;u++)n.beam("out",Z.woodD,[-8.6+u%3*.32,e+.16+Math.floor(u/3)*.3,5.2],[-3.2+u%3*.32,e+.16+Math.floor(u/3)*.3,5.2],.3,.3);me(n,"out",11.6,e,10.4,1.2,.2),me(n,"out",12.8,e,10.7,1,-.2),me(n,"out",12.2,e+1.2,10.5,.9,.4),xn(n,"out",-21,e,7.4,3.4),xn(n,"out",-4.6,e,3.6,3.4),xn(n,"out",9.6,e,11,3.4);let i=bn,s=i.x-.7,r=i.x+.5,o=i.z-i.w/2,a=i.z+i.w/2,c=(s+r)/2,l=i.z-7.5,h=a+1.6;n.wall("out",Z.stone,[c,l],[c,h],e,e+8.6,r-s,[{a:o-l,w:i.w,y0:0,y1:i.h}]),n.box("out",Z.stoneD,s-.2,e+8.6,l-.4,r+.2,e+9.2,h+.4),n.box("out",Z.stoneD,s-.3,e,o-.5,s,e+i.h+.6,o),n.box("out",Z.stoneD,s-.3,e,a,s,e+i.h+.6,a+.5),n.box("out",Z.stoneD,s-.3,e+i.h,o-.5,s,e+i.h+.7,a+.5),n.box("out",Z.board,s-.2,e+7.1,i.z-2.2,s-.05,e+8.2,i.z+2.2),Dn(n,"out",s-.25,e+4.6,o-.9,-1,0),Dn(n,"out",s-.25,e+4.6,a+.9,-1,0)}var nr={pas:gm($e.map(n=>[n[0],n[1],n[2]]),-1.8),fre:gm($e.map(n=>[n[0],n[1],n[2]]),1.8)};function th(n){let t=Ql(n,Pn.runZ);return[+(t[0]+1.8*t[5]).toFixed(2),+(t[1]-1.8*t[4]).toFixed(2),+t[2].toFixed(2),Math.atan2(t[5],t[4])]}var uf=nr.pas[nr.pas.length-3],ff=nr.pas[nr.pas.length-2],Ta=$l([[uf[0],uf[1],uf[2]],[ff[0],ff[1],ff[2]],[-53.5,-55.6,9.5],[-58.4,-62.6,9.5]],8),wm=Ta[Ta.length-1][3]-.6,Tm=(n,t)=>Oy(Ta,wm,Lt.hi,n,t),Am=(n,t,e,i=8)=>{for(let s=0;s<i;s+=.08)if(je(n,t+s,e)>0)return s;return i};function ky(n){let t="under";er(n,t,nr.pas.slice(0,-2),1),er(n,t,Ta.map(a=>[a[0],a[1],a[2]]),1,{stop:!0}),er(n,t,nr.fre.filter(a=>a[1]>-51.4),1,{stop:!0});let e=th(-14);bm(Fi("trainT","under"),t,e[0],e[1],e[2]+.06,e[3]),By(Fi("trainH","under"),t,Ta,wm,Lt.hi);{let a=Jl,c=nr.fre.reduce((l,h)=>Math.hypot(h[0]-a[0][0]-3,h[1]-a[0][1])<Math.hypot(l[0]-a[0][0]-3,l[1]-a[0][1])?h:l);er(n,t,[[c[0],c[1],c[2]],...a.map(l=>[l[0],l[1],l[2]])],1,{stop:!0})}let i=0,s=1;for(let a=1;a<$e.length;a++){let c=$e[a-1],l=$e[a],h=Math.hypot(l[0]-c[0],l[1]-c[1]);if(i+=h,i>11){i=0,s=-s;let u=(l[0]-c[0])/h,d=(l[1]-c[1])/h,f=-d*s,g=u*s,x=bi(l[0],l[2]+3.2,l[1],f,g,6)-.22;Dn(n,t,l[0]+f*x,l[2]+3.4,l[1]+g*x,-f,-g)}}let r=$e[0],o=r[1];for(let a=bn.x+1.2;a<=bn.x+10.5;a+=3){let c=Ql(a,o)[2];fe(n,t,a,o-3.3,c,c+4.6,.3),fe(n,t,a,o+3.3,c,c+4.6,.3),n.box(t,Z.post,a-.16,c+4.6,o-3.5,a+.16,c+5,o+3.5)}for(let a of an){let[c,l]=a.out,h=a.back[0],u=a.back[1],d=-l,f=c;ao(n,t,h-c*1.1,a.y,u-l*1.1,1.2,.8,Math.atan2(f,d)),me(n,t,h-c*.6+d*2,a.y,u-l*.6+f*2,.7),We(n,t,h-c*.6-d*2,a.y,u-l*.6-f*2),Dn(n,t,h+c*.2,a.y+2.2,u+l*.2,-c,-l)}}function Hy(n){var d;let t="under",e=Lt.floor,i=Lt.hi,s=Lt.hA,r=Lt.hB,o=(f,g)=>bs(f,g);for(let[f,g,x,m]of[[[-68.6,i,-59.7],[-76.9,s,-71.2],[.3,.76],{under:!0}],[[-71.4,s,-79.8],[-54.4,r,-83.2],[.28,.68],{under:!0,sag:.15}]]){let p=wa(n,t,f,g,1.8,m);for(let _ of x){let y=Ee(f[0],g[0],_),v=Ee(f[2],g[2],_),S=Ee(f[1],g[1],_)-((d=m.sag)!=null?d:0)*4*_*(1-_)-.12;for(let T of[-1,1])fe(n,t,y+p.nx*T*.8,v+p.nz*T*.8,o(y,v),S-.3,.26);n.beam(t,Z.post,[y+p.nx*1,S-.4,v+p.nz*1],[y-p.nx*1,S-.4,v-p.nz*1],.2,.2),n.beam(t,Z.post,[y+p.nx*.8,o(y,v)+.3,v+p.nz*.8],[y-p.nx*.8,S-.6,v-p.nz*.8],.09,.09)}}lf(n,t,[[-65.2,i,-62.4],[-65.8,i,-63.6],[-61.3,e,-68.5]],1.5,o),lf(n,t,[[-70.2,s,-73.4],[-69.3,s,-72.6],[-65.9,e,-77.9]],1.4,o),lf(n,t,[[-46.2,r,-80.4],[-42.7,8.6,-80],[-43.2,e,-86.3]],1.4,o);{let[f,g]=Lt.sumps[0],x=e+Lt.wy,m=[],p=40;for(let _=0;_<p;_++){let y=_/p*6.2832,v=Math.cos(y),S=Math.sin(y),T=.5;for(;T<16&&bs(f+v*T,g+S*T)<x-.02;)T+=.1;m.push([f+v*(T+.25),g+S*(T+.25)])}for(let _=0;_<p;_++)n.tri("pool","#6F8C8B",[f,x,g],[m[(_+1)%p][0],x,m[(_+1)%p][1]],[m[_][0],x,m[_][1]]);n.beam(t,Z.plank,[-63.2,e+.04,-118.6],[-66.8,x+.12,-119.6],.5,.08),We(n,t,-62.6,e,-117.4),We(n,t,-62.1,e,-118.4);{let v=e,S=.7;n.ybox(t,Z.metal,-60.2,v+.31,-122.8,1.7,.62,1.05,S),n.ybox(t,"#5E6367",-60.2,v+.69,-122.8,1.4,.14,.8,S);for(let[T,w]of[[-.5,-.52],[.5,-.52],[-.5,.52],[.5,.52]])n.ybox(t,"#3F4245",-60.2+Math.cos(S)*T-Math.sin(S)*w,v+.9,-122.8+Math.sin(S)*T+Math.cos(S)*w,.44,.44,.1,S);ts(n,t,-60.2+1.2,e,-122.8+.7,.9,.45)}}{let f=e-Lt.pit.d;for(let m of[-106.7,-109.5])fe(n,t,-59.3,m,e-.3,e+3.6,.3);n.beam(t,Z.post,[-59.5,e+3.5,-106.5],[-59.5,e+3.5,-109.7],.26,.3),n.beam(t,Z.post,[-59.6,e+3.3,-108.1],[-55.6,e+3.3,-108.1],.3,.3),n.beam(t,Z.post,[-59.3,e+2.2,-108.1],[-57.4,e+3.2,-108.1],.14,.14),n.cyl(t,Z.metal,-55.9,-108.1,e+2.9,e+3.15,.22,8),n.beam(t,Z.rope,[-55.9,e+2.9,-108.1],[-55.9,f+1.3,-108.1],.04,.04),n.cyl(t,Z.woodD,-55.9,-108.1,f+.55,f+1.3,.38,8),n.beam(t,Z.rope,[-59.6,e+3.3,-108.1],[-61.2,e+1.1,-108.1],.04,.04);for(let m of[-107.1,-109.1])n.box(t,Z.post,-61.6,e,m-.1,-60.8,e+1.3,m+.1);n.cyl(t,Z.woodD,-61.2,-108.1,e+.95,e+1.25,.3,8),n.beam(t,Z.woodD,[-61.2,e+1.1,-107.1],[-61.2,e+1.1,-109.1],.5,.5),n.beam(t,Z.metal,[-61.2,e+1.1,-106.9],[-61.8,e+1.5,-106.7],.06,.06);{let m=[-53.5,e+.05,-113.9],p=[-53.3,f+.05,-108.9],_=p[0]-m[0],y=p[2]-m[2],v=Math.hypot(_,y),S=Math.atan2(y,_);n.beam(t,Z.plank,m,p,1.3,.1);for(let T=.08;T<1;T+=.14)n.ybox(t,Z.post,m[0]+_*T,Ee(m[1],p[1],T)+.07,m[2]+y*T,.1,.08,1.3,S);fe(n,t,p[0],p[2]+.6,f,Ee(m[1],p[1],.9)-.1,.16)}mm(n,t,-47.75,-109.4,f,e+.4,Math.PI/2);let g=[];for(let m=0;m<=40;m++){let p=m/40*6.2832,_=Math.cos(p),y=Math.sin(p),v=2;for(;v<9&&of(-53.4+_*v,-109.2+y*v)<0;)v+=.1;g.push([-53.4+_*(v+.7),-109.2+y*(v+.7),p])}let x=null;for(let[m,p,_]of g){let y=_*57.3;if(!(y>205&&y<262||y>278&&y<349||y>9&&y<42)){x=null;continue}x&&Math.hypot(m-x[0],p-x[1])<1.9||(fe(n,t,m,p,e,e+1.05,.12),x&&Math.hypot(m-x[0],p-x[1])<2.8&&n.beam(t,Z.rope,[x[0],e+.9,x[1]],[m,e+.9,p],.04,.04),x=[m,p])}tr(n,t,-51.6,f+.05,-108.6,.4),ts(n,t,-55.8,f,-106.8,1.3,.8),ts(n,t,-49.6,f,-110.4,1,.7,Z.coal),Oe(n,t,-57.6,-110.2,.9,.7,f-.2,f+.7,{layers:1,seed:61}),Oe(n,t,-50.4,-106.8,.7,.6,f-.2,f+.5,{layers:1,seed:62}),xn(n,t,-57.4,e,-113.4,2.8)}Oe(n,t,-65.6,-131.2,2.3,1.7,e-.3,e+3.1,{layers:3,seed:71,rot:.4}),Oe(n,t,-63.4,-132.4,1.1,.9,e-.2,e+1.3,{layers:1,seed:72}),Oe(n,t,-41.4,-128.4,1.9,1.5,e-.3,e+2.6,{layers:2,seed:73,rot:1.1}),Oe(n,t,-68.4,-107.2,1.7,1.3,e-.3,e+2.2,{layers:2,seed:74,rot:.3}),Oe(n,t,-38.8,-112.6,1.4,1.1,e-.2,e+1.6,{layers:2,seed:75}),Oe(n,t,-70.2,-105.2,.8,.6,e-.2,e+.8,{layers:1,seed:76});for(let f=0;f<7;f++){let g=f<3?0:f<5?1:2,x=f<3?f:f<5?f-3:f-5,m=-40.6+(x-(g===0?1:g===1?.5:0))*.46,p=e+.22+g*.4;n.beam(t,f%2?Z.wood:Z.woodD,[m,p,-115.6],[m,p,-119.6],.42,.42)}me(n,t,-52.8,e,-126.1,1),me(n,t,-53.9,e,-126.7,.9,.4),me(n,t,-53.2,e+1,-126.3,.8,.2),We(n,t,-51.5,e,-127.1),We(n,t,-50.8,e,-126.4),ro(n,t,-49.6,i,-60.2,Math.PI),ro(n,t,-79.5,s,-77,Math.PI/2),ro(n,t,-50.5,r,-86,0),ro(n,t,-47,e,-124.5,Math.PI/2+.4),tr(n,t,-63.46,e+.05,-92,Math.PI/2),tr(n,t,-63.51,e+.05,-95,Math.PI/2),tr(n,t,-63.57,e+.05,-98,Math.PI/2,!1),ts(n,t,-77,e,-103,3.4,2.4),ts(n,t,-73.5,bs(-73.5,-110),-110,2.4,1.8),ts(n,t,-40.4,e,-104.6,1.4,1.1,Z.coal),me(n,t,-48.9,i,-55.4,1.1,.3),me(n,t,-49.4,i,-56.9,.9),We(n,t,-48.6,i,-58.2),ts(n,t,-41.8,e,-70.4,1.5,1.1),We(n,t,-38.6,e,-74),We(n,t,-38.4,e,-75);for(let[f,g]of[[-82.5,-100],[-80.5,-110],[-70,-125],[-41.5,-116],[-40,-86],[-84.5,-60],[-66,-128],[-46,-130]])Ss(f,e+1,g)&&Ss(f,e+7.6,g)&&fe(n,t,f,g,bs(f,g)-.1,e+7.8,.3);for(let[f,g]of[[-59.6,-70.6],[-67.5,-86],[-63,-104],[-56,-126],[-41.2,-110],[-41,-95.5]])xn(n,t,f,e,g,3);xn(n,t,-57.5,i,-55.6,2.8),xn(n,t,-77,s,-72.6,2.8),xn(n,t,-52,r,-77.4,2.8),xn(n,t,-52.6,e,-71.4,2.6),Es(n,t,-56.3,-96,e+2.1,-1,-.1,3,e,{n:9,w:3.2,seed:11}),Es(n,t,-52.2,-102.4,e+1.8,.1,-1,2.6,e,{n:8,w:3,seed:12}),Lt.bays.forEach(([f,g,x],m)=>{let p=Lt.lobes.reduce((P,U)=>Math.hypot(f-U.x,g-U.z)-U.r<Math.hypot(f-P.x,g-P.z)-P.r?U:P),_=Math.hypot(f-p.x,g-p.z),y=(f-p.x)/_,v=(g-p.z)/_,S=f-y*x,T=g-v*x,w=bi(S,e+1.2,T,y,v,14);if(Es(n,t,S+y*(w-.4),T+v*(w-.4),e+1.5,-y,-v,2.6,bs(S+y*(w-3),T+v*(w-3)),{n:7,w:2.6,seed:m+21}),m%2)return;let A=f-y*x*.5,b=g-v*x*.5,M=Math.min(x*.6,2.5),C=[];for(let P of[-1,1]){let U=A-v*M*P,k=b+y*M*P,L=bs(U,k),V=L+Am(U,L+.3,k,10)+.25;C.push([U,V-.5,k]),n.box(t,Z.post,U-.15,L,k-.15,U+.15,V,k+.15)}n.beam(t,Z.post,[C[0][0],Math.min(C[0][1],C[1][1]),C[0][2]],[C[1][0],Math.min(C[0][1],C[1][1]),C[1][2]],.26,.26)});let a=Lt.nook;n.box(t,Z.woodD,a.x+.6,e,a.z+1.4,a.x+1.5,e+1.2,a.z+2.1),n.beam(t,Z.metal,[a.x+1,e+1.2,a.z+1.75],[a.x+.5,e+2.1,a.z+1.75],.08,.08),me(n,t,a.x-1.8,e,a.z-1.5,.9),We(n,t,a.x-2.4,e,a.z+1.2),Fi("nookDoor","under").box(t,"#8E8475",a.x+3.3,e,a.z-1.4,a.x+3.9,e+3,a.z+1.4),Fi("nookDoorO","under").box(t,"#8E8475",a.x+3.3,e,a.z+1.4,a.x+3.9,e+3,a.z+4.1);let h=Lt.gate,u=Fi("gate","under");u.box(t,Z.woodD,h.x-4.4,e,h.z-3.6,h.x,e+6,h.z-3.2),u.box(t,Z.woodD,h.x,e,h.z-3.6,h.x+4.4,e+6,h.z-3.2);for(let f of[-4.4,-2.2,0,2.2,4.4])u.box(t,Z.post,h.x+f-.08,e,h.z-3.7,h.x+f+.08,e+6.05,h.z-3.1);u.box(t,Z.metal,h.x-4.4,e+4.5,h.z-3.75,h.x+4.4,e+4.7,h.z-3.05),u.box(t,Z.metal,h.x-4.4,e+1.3,h.z-3.75,h.x+4.4,e+1.5,h.z-3.05);for(let f of[-5.6,5.6])fe(n,t,h.x+f,h.z+1,e,e+2.4,.14),n.box(t+":e","#FFB25A",h.x+f-.2,e+2.4,h.z+.8,h.x+f+.2,e+2.8,h.z+1.2)}function Sa(n,t,e){for(let i of n){if(i.a===t&&i.b===e)return i.P;if(i.a===e&&i.b===t)return[...i.P].reverse()}return null}function ym(n){let t=0;for(let e=0;e<n.length-1;e++)t+=Math.hypot(n[e+1][0]-n[e][0],n[e+1][2]-n[e][2]);return t}function Di(n,t){let e=0;for(let i=0;i<n.length-1;i++){let s=n[i],r=n[i+1],o=Math.hypot(r[0]-s[0],r[2]-s[2])||1e-6;if(e+o>=t||i===n.length-2){let a=Math.min(1,Math.max(0,(t-e)/o));return[Ee(s[0],r[0],a),Ee(s[1],r[1],a),Ee(s[2],r[2],a),(r[0]-s[0])/o,(r[2]-s[2])/o]}e+=o}}function Vy(n){var g,x,m;let t="under",e=Ie.nodes,i=Ie.hw,s=Object.fromEntries(Ie.rooms.map(p=>[p[0],Math.max(p[1],p[2])]));for(let{a:p,b:_,P:y}of Mi){let v=ym(y),S=((g=s[p])!=null?g:.6)+1.2,T=_==="X"?3.2:((x=s[_])!=null?x:.6)+1.2,w=v-S-T,A=_==="X"?[6.6,9.9]:null;if(w>.4&&_!=="c3"){let M=A?A.length:Math.max(1,Math.round(w/4.6));for(let C=0;C<M;C++){let P=A?A[C]:S+(C+.5)*w/M,[U,k,L,V,j]=Di(y,P),H=-j,B=V,q=Math.min(i+.2,bi(U,k+1.2,L,H,B))-.14,tt=Math.min(i+.2,bi(U,k+1.2,L,-H,-B))-.14;fe(n,t,U+H*q,L+B*q,k-.2,k+2.42,.2),fe(n,t,U-H*tt,L-B*tt,k-.2,k+2.42,.2),n.beam(t,Z.post,[U+H*(q+.12),k+2.5,L+B*(q+.12)],[U-H*(tt+.12),k+2.5,L-B*(tt+.12)],.2,.2)}}let b=Math.abs(y[y.length-1][1]-y[0][1]);if(b/v>.3){let M=Math.round(b/.3),C=Ks(y[0][0]*3+y[0][2]);for(let P=0;P<M;P++){let U=P*v/M,k=(P+1)*v/M,[L,V,j,H,B]=Di(y,(U+k)/2),q=Math.max(Di(y,U)[1],Di(y,k)[1])+.02;Oe(n,t,L-B*(C()-.5)*.3,j+H*(C()-.5)*.3,v/M*(.62+.18*C()),i-.42+.16*C(),q-.5,q,{n:6,jit:.12,rot:Math.atan2(B,H),layers:1,seed:C()*999,c:P%2?ne.b:ne.c})}}}for(let[p,_,y=1]of Ie.lamps){let v=Sa(Mi,p,_),[S,T,w,A,b]=Di(v,((m=s[p])!=null?m:.4)+.9),M=-b*y,C=A*y,P=bi(S,T+2,w,M,C)-.1;Dn(n,t,S+M*P,T+2.05,w+C*P,-M,-C)}{let p=e.D1x,_=e.D1,y=Sa(Mi,"a1","D1"),v=ym(y),S=Di(y,v);for(let q=v-2.4;q<v+1.4;q+=.05){let tt=Di(y,Math.min(q,v)),W=Math.max(0,q-v),Q=tt[0]+tt[3]*W,rt=tt[2]+tt[4]*W;if(Ss(Q,_[1]-.5,rt)){S=[Q,_[1],rt,tt[3],tt[4]];break}}let[T,,w,A,b]=S,M=-b,C=A,P=Math.atan2(b,A);Oe(n,t,T+A*.12,w+b*.12,.62,1.45,_[1]-.6,_[1]+.03,{n:6,jit:.12,rot:P,layers:1,seed:4,c:ne.c});for(let[q,tt,W]of[[-1,.36,-.45],[-.4,.3,.2],[.2,.34,.75],[.82,.32,-.05],[1.25,.3,-.75]])Oe(n,t,T+A*.4+M*q,w+b*.4+C*q,.28,tt,_[1]+1.5+W,_[1]+3.3,{n:5,jit:.2,rot:P,layers:1,seed:q*7+9,c:ne.c,top:ne.c,bottom:!0});n.beam(t,Z.woodD,[T+A*1-M*.3,p[1]+.06,w+b*1-C*.3],[T+A*2.4-M*.1,p[1]+.25,w+b*2.4+C*.2],.08,.08),n.beam(t,Z.woodD,[T+A*1+M*.3,p[1]+.06,w+b*1+C*.3],[T+A*2.4+M*.5,p[1]+.2,w+b*2.4+C*.7],.08,.08),Es(n,t,T+A*.7,w+b*.7,p[1]+.45,A,b,1.1,p[1],{n:5,w:1.8,seed:6});let U=Sa(Mi,"d1","e1"),[k,L,V,j,H]=Di(U,3.2),B=bi(k,L+2,V,-H,j)-.1;Dn(n,t,k-H*B,L+2.05,V+j*B,H,-j)}let r=e.M1;me(n,t,r[0]+1.6,r[1],r[2]-1.2,1,.3),me(n,t,r[0]+2.4,r[1],r[2]-.2,.8,-.2),We(n,t,r[0]-2,r[1],r[2]+1.1),ao(n,t,r[0]-.4,r[1],r[2]-1.6,1.6,.7,.3),n.box(t,"#5B5650",r[0]-.3,r[1]+.79,r[2]-1.7,r[0],r[1]+1.05,r[2]-1.45);let o=e.m1x;me(n,t,o[0]-.6,o[1],o[2]-.4,.7,.5),n.beam(t,Z.woodD,[o[0]+.5,o[1]+.05,o[2]-.6],[o[0]+.9,o[1]+.9,o[2]+.3],.06,.06),n.ybox(t,Z.metal,o[0]+.92,o[1]+.95,o[2]+.35,.5,.08,.1,.6);let a=e.R1;n.box(t,Z.woodD,a[0]+1.2,a[1],a[2]-1.1,a[0]+2.6,a[1]+.7,a[2]-.3),n.box(t,"#C9A14F",a[0]+1.18,a[1]+.5,a[2]-1.12,a[0]+2.62,a[1]+.6,a[2]-.28);{let p=bi(a[0]+1.9,a[1]+2,a[2],0,-1);Dn(n,t,a[0]+1.9,a[1]+2.1,a[2]-p+.1,0,1)}let c=Sa(Mi,"J2","r2a"),[l,h,u]=Di(c,3.2);for(let[p,_,y,v]of[[0,0,1.1,.9],[.7,.5,.8,.6],[-.6,-.4,.7,.5],[.2,-.8,.6,.45]])n.frustum(t,"#9A9184",l+p,u+_,h-.1,h+v,y,y*.3,6,p);let d=e.R2;n.ybox(t,Z.metal,d[0]-.6,d[1]+.52,d[2]+.2,1.7,1,.62,.6),n.beam(t,Z.post,[d[0]+.8,d[1]+.1,d[2]-1],[d[0]-.4,d[1]+1.6,d[2]-1.8],.2,.2),n.frustum(t,"#9A9184",d[0]-1.6,d[2]-.8,d[1]-.1,d[1]+1.1,1.3,.4,6,.3);let f=e.C;me(n,t,f[0]-1.1,f[1],f[2]+3.4,1,.2),me(n,t,f[0]-.1,f[1],f[2]+3.7,.8,-.3),We(n,t,f[0]+2.8,f[1],f[2]-2.2);{let p=Sa(Mi,"S","s1"),[_,y,v,S,T]=Di(p,.8),w=-T,A=S,b=bi(_,y+2,v,w,A)-.1;Dn(n,t,_+w*b,y+2.1,v+A*b,-w,-A)}}function vm(n,t,e,i,s,r,o,a={}){var _,y,v;let c=(_=a.stone)!=null?_:"#B8AE9C",l=n.wall(t,c,e,i,s,r,.24,o),{at:h,L:u,nx:d,nz:f,yaw:g}=l,x=(y=a.out)!=null?y:1,m=d*x,p=f*x;n.ybox(t,"#A0978A",...h(u/2,.25,.1*x),u,.5,.44,g);for(let S of[.25,u-.25])n.ybox(t,"#A0978A",...h(S,(r-s)/2,.12*x),.5,r-s,.5,g);for(let S of o){let T=S.a,w=S.a+S.w,A=(v=S.y0)!=null?v:0,b=S.y1;for(let M of[T-.07,w+.07])n.ybox(t,Z.post,...h(M,(A+b)/2,.14*x),.14,b-A+.14,.2,g);n.ybox(t,Z.post,...h((T+w)/2,b+.07,.14*x),S.w+.3,.16,.22,g),A>.05&&(n.ybox(t,Z.post,...h((T+w)/2,A-.05,.16*x),S.w+.3,.1,.3,g),n.ybox(t,Z.woodD,...h((T+w)/2,(A+b)/2,0),.08,b-A,.1,g))}for(let S of a.eaves||[]){let T=h(-.2,S.y-s,0),w=h(u+.2,S.y-s,0),A=S.d;n.plate(t,Z.roof,[[T[0],T[1]+.1,T[2]],[w[0],w[1]+.1,w[2]],[w[0]+m*A,w[1]-.45,w[2]+p*A],[T[0]+m*A,T[1]-.45,T[2]+p*A]],.14);for(let b=.8;b<u;b+=2.4){let M=h(b,S.y-s-.35,0);n.beam(t,Z.post,[M[0],M[1],M[2]],[M[0]+m*A*.8,M[1]+.08,M[2]+p*A*.8],.14,.16)}}return l}function Gy(n,t,e,i,s,r,o){let a=-o,c=r,l=1.2,h=i+1.65;n.ybox(t,Z.wood,e,i+.1,s,2.4,.2,3.6,Math.atan2(o,r));for(let x of[-1.55,1.55])fe(n,t,e+a*x,s+c*x,i+.2,i+3.1,.28,Z.woodD),Dn(n,t,e+a*x+r*.2,i+2.75,s+c*x+o*.2,r,o);n.beam(t,Z.woodD,[e-a*1.75,i+3.1,s-c*1.75],[e+a*1.75,i+3.1,s+c*1.75],.28,.26);let u=e+r*.25,d=s+o*.25,f=x=>[u+a*l*Math.sin(x),h+l*Math.cos(x),d+c*l*Math.sin(x)];for(let x=0;x<10;x++)n.beam(t,Z.metal,f(x*Math.PI/5),f((x+1)*Math.PI/5),.16,.16);for(let x=0;x<5;x++)n.beam(t,Z.woodD,f(x*Math.PI/5),f(x*Math.PI/5+Math.PI),.1,.1);n.beam(t,Z.metal,[u+r*.25,h,d+o*.25],[e-r*.9,h,s-o*.9],.22,.22),fe(n,t,e-r*.9,s-o*.9,i+.2,h+.2,.3,Z.woodD);let g=f(Math.PI*.3);return n.beam(t,Z.woodD,g,[g[0]+r*.7,g[1],g[2]+o*.7],.12,.12),[e-r*.9,h-.3,s-o*.9]}function Wy(n){let t="under",e=[(pt.CL.x0+pt.CL.x1)/2,(pt.CL.z0+pt.CL.z1)/2],i=[pt.P4.x,pt.P4.z],s=[pt.BP.x0+4,pt.P4.z],r=pt.CL.y,o=pt.P4.y,a=pt.BP.y,c=Ki(e[0],e[1],r,i[0]-e[0],i[1]-e[1]),l=Ki(i[0],i[1],o,e[0]-i[0],e[1]-i[1]);wa(n,t,[c[0]-.3,r,c[1]-.3],[l[0]+.3,o,l[1]+.3],1.6,{rope:!0,sag:.25});let h=Ki(i[0],i[1],o,1,0),u=Ki(s[0],s[1],a,-1,0);wa(n,t,[h[0]-.4,o,h[1]],[u[0]+.4,a,u[1]],1.7,{rope:!0,sag:.45}),pt.BR={a:[h[0],h[1]],b:[u[0],u[1]]};for(let[B,q,tt,W,Q,rt]of[[16.2,-84.6,.9,.7,.8,3],[16.5,-87.6,.6,.5,.5,4],[14.2,-82.6,.8,.6,.7,5]]){let nt=Li(B,q,4.5);Oe(n,t,B,q,tt,W,nt-.4,nt+Q,{n:8,jit:.3,flare:.2,rot:rt*1.3,layers:2,seed:rt*13,c:ne.c,top:ne.c})}{let B=pt.PK,q=pt.JUMP,tt=0,W=(Q,rt)=>{let[nt,G,z,J]=B[Q];if(Oe(n,t,nt,G,J*1.1,J*1.04,z-.45,z+.03,{n:7,jit:.08,layers:1,seed:Q+3,c:ne.b}),rt){let F=rt[0]-nt,N=rt[1]-G,it=Math.hypot(F,N)||1;pm(n,t,nt+F/it*(J*1.02),z-.2,G+N/it*(J*1.02),F/it,N/it,J*1.1,.22)}};W(0,[c[0],c[1]]),W(1,B[0]),W(2,[h[0],h[1]]),W(3,B[2]),W(4,B[3]),tt=q[0];for(let Q=1;Q<=3;Q++){let rt=q[Q];for(let nt=0;nt<rt;nt++){let G=B[tt+nt],z=pt.CLIMB.find(F=>F[3]===tt+nt),J=nt?B[tt+nt-1]:rt>1?B[tt+1]:[z[0],z[1]];W(tt+nt,nt?J:[2*G[0]-J[0],2*G[1]-J[1]])}tt+=rt}for(let[Q,rt,nt,G]of pt.CLIMB){let z=B[G],J=Math.hypot(z[0]-Q,z[1]-rt),F=(z[0]-Q)/J,N=(z[1]-rt)/J,it=-N,at=F,E=Ki(Q,rt,nt,F,N),lt=(E[0]-Q)*F+(E[1]-rt)*N;dm(n,t,[E[0]-it*.9+F*.1,E[1]-at*.9+N*.1],[E[0]+it*.9+F*.1,E[1]+at*.9+N*.1],Li(E[0]-F*.4,E[1]-N*.4,nt)+.02,{side:1}),fe(n,t,E[0]-F*.3+it*.5,E[1]-N*.3+at*.5,nt-.1,nt+.5,.12);let ot=z[2]+1.1,$=[];for(let st=nt+.1;;st-=.9){let gt=Math.max(st,ot),ct=Ki(E[0]-F*2.5,E[1]-N*2.5,gt+.25,F,N),yt=(ct[0]-Q)*F+(ct[1]-rt)*N,Rt=Math.max(lt+.32,yt+.3);if($.push([Q+F*Rt+it*.5,gt,rt+N*Rt+at*.5]),gt<=ot)break}for(let st=0;st<$.length-1;st++)n.beam(t,Z.rope,$[st],$[st+1],.06,.06)}W(tt)}let d=pt.B1,f=d.fx+.12,g=-86,x=B=>({a:B-.6,w:1.2}),m=[{a:8-1.2,w:2.4,y0:0,y1:3.2},...[1.9,4.5,11.5,14.1].flatMap(B=>[{...x(B),y0:1.25,y1:2.85},{...x(B),y0:5,y1:6.5}])];vm(n,t,[f,-78],[f,-94],3,11.4,m,{out:-1,eaves:[{y:7,d:1.3},{y:11.25,d:1.5}]});for(let B of[-2.1,2.1])fe(n,t,f-.5,g+B,3,5.4,.16),n.box(t+":e",Z.lamp,f-.7,5.4,g+B-.2,f-.3,5.8,g+B+.2);let p=d.ST,_=p.z+p.w/2+.15;Ea(n,t,63.6,d.x1-.1,_,d.z1-.15,d.f2,"z",{joist:!1}),Ea(n,t,p.x1,d.x1-.1,d.z0+.15,_,d.f2,"z",{joist:!1}),n.box(t,Z.post,63.4,d.f2-.45,_,63.7,d.f2-.14,d.z1-.1),n.box(t,Z.post,63.6,d.f2-.45,_-.02,p.x1,d.f2-.14,_+.28);for(let B of[67.6,d.x1-.5])n.box(t,Z.post,B-.15,d.f2-.45,d.z0+.1,B+.15,d.f2-.14,d.z1-.1);for(let B of[_+1.4,-86,d.z1-2.6])fe(n,t,63.55,B,3,d.f2-.4,.26);for(let B of[-89.4,-82.6])fe(n,t,67.6,B,3,d.f2-.4,.24);{let B=d.f2,q=(tt,W)=>{n.beam(t,Z.post,[tt[0],B+1,tt[1]],[W[0],B+1,W[1]],.08,.08),n.beam(t,Z.post,[tt[0],B+.5,tt[1]],[W[0],B+.5,W[1]],.06,.06);let Q=Math.max(1,Math.round(Math.hypot(W[0]-tt[0],W[1]-tt[1])/2.2));for(let rt=0;rt<=Q;rt++){let nt=Ee(tt[0],W[0],rt/Q),G=Ee(tt[1],W[1],rt/Q);n.box(t,Z.post,nt-.05,B,G-.05,nt+.05,B+1.04,G+.05)}};q([63.66,_+.1],[63.66,d.z1-.3]),q([63.66,_+.1],[p.x1-.1,_+.1])}Kl(n,t,[p.x0,3,p.z],[p.x1,d.f2,p.z],p.w,()=>3,{posts:[.5],brace:!1,open:-1}),We(n,t,61.2,3,-81.6),We(n,t,61.9,3,-80.9),me(n,t,70.3,3,-81.4,1.1,.1),me(n,t,70.5,3,-82.7,1,-.2),me(n,t,70.4,4.1,-81.9,.9,.3),We(n,t,70.6,3,-89.8),We(n,t,69.8,3,-90.5),me(n,t,70.4,d.f2,-84.2,1,.2),me(n,t,70.6,d.f2,-85.4,.9,-.1),We(n,t,70.7,d.f2,-80.4),Ma(n,t,[53,2.5,-86],[55.2,3,-86],4.6,{rise:.25,depth:.45,seed:21}),ao(n,t,61.8,3,-84.4,1.8,.9,Math.PI/2);{let[B,q]=d.EX,tt=d.z0+.05;n.box(t,Z.post,B-.14,d.f2,tt-.2,B,d.f2+2.4,tt+.2),n.box(t,Z.post,q,d.f2,tt-.2,q+.14,d.f2+2.4,tt+.2),n.box(t,Z.post,B-.14,d.f2+2.3,tt-.2,q+.14,d.f2+2.46,tt+.2)}Dn(n,t,d.x1-.2,5.6,-86,-1,0),Dn(n,t,67.4,d.f2+2.3,d.z1-.2,0,-1),Dn(n,t,d.EX[1]+.7,d.f2+2.1,d.z0+.2,0,1);{let B=pt.B1X,q=B[1];fe(n,t,q[0]-.9,q[2],q[1],q[1]+2.2,.18),fe(n,t,q[0]+.9,q[2],q[1],q[1]+2.2,.18),n.box(t,Z.post,q[0]-1.05,q[1]+2.2,q[2]-.1,q[0]+1.05,q[1]+2.4,q[2]+.1)}{let B=ri.map((z,J)=>J),q=(z,J)=>B.reduce((F,N)=>Math.hypot(ri[N][0]-z,ri[N][1]-J)<Math.hypot(ri[F][0]-z,ri[F][1]-J)?N:F,0),tt=q(37,-124.5),W=q(60.6,-101),Q=[],rt=(z,J)=>J>Sn.s1+1||J<-116&&z>41.6&&z<52.8,nt=z=>{let J=ri[z],F=ri[Math.min(z+1,ri.length-1)],N=ri[Math.max(z-1,0)],it=F[0]-N[0],at=F[1]-N[1],E=Math.hypot(it,at)||1,lt=-at/E,ot=it/E;return Ms(J[0]+lt,J[1]+ot)>Ms(J[0],J[1])&&(lt=-lt,ot=-ot),[J[0],J[1],lt,ot]};for(let z=tt;z<=W;z++){let[J,F,N,it]=nt(z),at=2.4;for(let ot=0;ot<2;ot++)at=af(J+N*at,F+it*at)-.2;let E=J+N*at,lt=F+it*at;E<38.6||(!Q.length||Math.hypot(E-Q[Q.length-1][0],lt-Q[Q.length-1][1])>1.5)&&Q.push([E,lt,ya(E,lt),rt(E,lt)])}for(let z=0;z<Q.length;z++){let[J,F,N,it]=Q[z];if(it&&(fe(n,t,J,F,N-.1,N+1.05,.1),z&&Q[z-1][3])){let[at,E,lt]=Q[z-1];n.beam(t,Z.wood,[at,lt+1,E],[J,N+1,F],.09,.09),n.beam(t,Z.wood,[at,lt+.5,E],[J,N+.5,F],.06,.06)}}pt.RAIL=Q;let G=z=>{let J=null;for(let F=tt;F<=W;F++){let N=nt(F);N[0]<55||(!J||Math.abs(N[1]-z)<Math.abs(J[1]-z))&&(J=N)}return[J[0]+J[2]*1.2,J[1]+J[3]*1.2]};for(let[z,J,F]of[[Sn.s1,7.3,8.4],[Sn.s2,8.4,9.6]]){let N=G(z);Ma(n,t,[N[0],J,z+.95],[N[0],F,z-.75],1.7,{depth:.7,seed:z})}for(let z of[1,-1]){let J=Sn.gap+z*(Sn.gw+.15),F=G(J),N=ya(F[0],J);n.ybox(t,Z.plank,F[0],N+.05,J-z*.3,1.5,.1,.9,0),n.ybox(t,Z.wood,F[0]+.3,N+.05,J-z*.78,.5,.1,.5,.3),fe(n,t,F[0]-.8,J+z*.1,N-.2,N+.9,.12)}{let z=G(Sn.gap);n.beam(t,Z.plank,[z[0]-.2,8.1,Sn.gap+.9],[z[0]+.5,6.6,Sn.gap-.3],.4,.08)}Oe(n,t,52.6,-123,1.9,1.7,11,12.7,{n:7,layers:2,flare:-.12,c:ne.c,top:ne.c,bottom:!0,seed:31})}let y=pt.B2,v=y.fz+.12;vm(n,t,[27.2,v],[36.6,v],10,13.5,[{a:4.7-.7,w:1.4,y0:0,y1:2.4},{a:2.2-.55,w:1.1,y0:1,y1:2.2},{a:7.2-.55,w:1.1,y0:1,y1:2.2}],{out:1,eaves:[{y:12.75,d:1.1}]}),ao(n,t,33.6,10,-128.6,1.4,.8),me(n,t,29.6,10,-130.2,1),me(n,t,30.6,10,-130.6,.8,.3),Dn(n,t,31.9,12.4,y.z0+.2,0,1);let S=pt.WPC,T=[pt.SH.x,pt.SH.z],w=ws.ya,A=ws.yb,b=ws.a,M=ws.b;{let B=Math.hypot(M[0]-b[0],M[1]-b[1]),q=(M[0]-b[0])/B,tt=(M[1]-b[1])/B,W=-tt,Q=q,rt=nt=>Ee(w,A,Xy(nt/B));Kl(n,t,[b[0]-q*.4,w,b[1]-tt*.4],[M[0]+q*.4,A,M[1]+tt*.4],1.6,()=>-99,{posts:[],brace:!1});for(let[nt,G,z,J]of[[b,1,w,3.4],[M,-1,A,B-3.4]])for(let F of[-.62,.62]){let N=[b[0]+q*J+W*F,rt(J)-.3,b[1]+tt*J+Q*F],it=[nt[0]-q*G*.5+W*F,z-3.7,nt[1]-tt*G*.5+Q*F];n.beam(t,Z.post,it,N,.17,.17)}for(let nt of[3.4,B-3.4]){let G=b[0]+q*nt,z=b[1]+tt*nt;n.beam(t,Z.post,[G-W*.9,rt(nt)-.36,z-Q*.9],[G+W*.9,rt(nt)-.36,z+Q*.9],.22,.2)}{let nt=pt.PK[pt.PK.length-1],G=(nt[0]-b[0])*q+(nt[1]-b[1])*tt,z=b[0]+q*G,J=b[1]+tt*G,F=rt(G)-.32,N=nt[2];for(let at of[-.62,.62]){fe(n,t,z+W*at,J+Q*at,N-.1,F,.2);for(let E of[-1.6,1.6])n.beam(t,Z.post,[z+W*at+q*E,rt(G+E)-.4,J+Q*at+tt*E],[z+W*at,F-2.2,J+Q*at],.1,.1)}for(let at of[N+.9,(N+F)/2,F])n.beam(t,Z.post,[z-W*.9,at,J-Q*.9],[z+W*.9,at,J+Q*.9],.2,.18);let it=(N+F)/2;for(let[at,E]of[[N+.9,it],[it,F]])n.beam(t,Z.post,[z-W*.62,at,J-Q*.62],[z+W*.62,E,J+Q*.62],.09,.09),n.beam(t,Z.post,[z+W*.62,at,J+Q*.62],[z-W*.62,E,J-Q*.62],.09,.09)}pt.TR={a:b,b:M}}let C=pt.E,P=C.x-pt.SH.x,U=C.z-pt.SH.z,k=Math.hypot(P,U);Gy(n,t,pt.SH.wx,pt.SH.y,pt.SH.z,P/k,U/k);{let B=pt.PIL,q=pt.SH.up,tt=pt.SH.y;for(let W of[128,152,178,236]){let Q=W*Math.PI/180,rt=B.x+5.95*Math.cos(Q),nt=B.z+5.95*Math.sin(Q);Oe(n,t,rt,nt,.62,1.3,tt-.1,q+.04,{n:6,jit:.12,rot:Q,layers:1,seed:W,c:ne.b})}Ma(n,t,[30.4,tt,-98.1],[32.2,q,-96.9],1.4,{depth:.6,seed:41})}let L=pt.DOOR,V=Fi("ncDoor","under"),j=L.z-.1;V.box(t,Z.woodD,L.x-L.w/2,0,j-.5,L.x+L.w/2,L.h,j-.1);for(let B of[-1.6,0,1.6])V.box(t,Z.post,L.x+B-.1,0,j-.55,L.x+B+.1,L.h,j-.05);V.box(t,Z.metal,L.x-L.w/2,3.9,j-.6,L.x+L.w/2,4.1,j),Fi("ncDoorO","under").box(t,Z.woodD,L.x-L.w/2,L.h-.5,j-2.4,L.x+L.w/2,L.h-.1,j-.1),n.box(t,Z.stoneD,L.x-L.w/2-.6,0,j-.2,L.x-L.w/2,L.h+.7,j+.45),n.box(t,Z.stoneD,L.x+L.w/2,0,j-.2,L.x+L.w/2+.6,L.h+.7,j+.45),n.box(t,Z.stoneD,L.x-L.w/2-.6,L.h,j-.2,L.x+L.w/2+.6,L.h+.7,j+.45);for(let B of[-L.w/2-1.3,L.w/2+1.3])fe(n,t,L.x+B,L.z+1.6,0,2.6,.16),n.box(t+":e",Z.lamp,L.x+B-.2,2.6,L.z+1.4,L.x+B+.2,3,L.z+1.8);for(let B=0;B<30;B++){let q=B*2.4,tt=1.4+B%5*.5,W=12.2+Math.cos(q)*tt*.6,Q=-88.6+Math.sin(q)*tt*1.6,rt=Li(W,Q,7)-.05;for(let nt=0;nt<4;nt++){let G=q+nt*1.57+.4,z=.3+(B+nt)%3*.1;n.beam(t,nt%2?"#8E9B6A":"#7F8E5C",[W,rt,Q],[W+Math.cos(G)*.18,rt+z,Q+Math.sin(G)*.18],.05,.02)}}{let B=pt.FALL,q=["#E6F0EF","#CFE2E1","#F5F9F8","#C2D8D7","#DCEAE9","#EDF5F4"],tt=($,st)=>{let gt=46;for(;gt<68&&je(gt,$,st)<-.15;)gt+=.1;return gt},W=($,st)=>{for(let gt=0;gt<$.length-1;gt++){let ct=$[gt],yt=$[gt+1];for(let Rt=0;Rt<ct.length-1;Rt++){let Ft=q[(gt*5+st+Math.floor(Rt/5+gt*.37)%2*2)%q.length];n.quad("pool",Ft,ct[Rt],yt[Rt],yt[Rt+1],ct[Rt+1]),n.quad("pool",Ft,ct[Rt],ct[Rt+1],yt[Rt+1],yt[Rt])}}},Q=($,st,gt)=>{let ct=[];for(let yt=$;yt>st;yt-=gt)ct.push(yt);return ct.push(st),ct},rt=B.lip+.12,nt=B.by-.25,G=Q(rt-.3,nt,.55),z=[],J=16;for(let $=0;$<=J;$++){let st=$/J-.5,gt=B.z+st*(B.w-.7),ct=tt(rt-.6,gt)-.1,yt=Math.abs(st)*2,Rt=[[ct+1.6,rt+.05*Math.sin($),gt],[ct+.5,rt,gt],[ct,rt-.12,gt]];for(let Ft of G){let D=(rt-.3-Ft)/(rt-.3-nt),R=gt+st*1.2*D;Rt.push([Math.min(ct-.2-2.4*Math.sqrt(D)*(1-.12*yt),tt(Ft,R)-.35),Ft+yt*.5*D*($%2?1:.4),R])}z.push(Rt)}W(z,0);for(let $=B.x-6.5;$<B.x;$+=.5)for(let st=B.z-3.6;st<B.z+3.6;st+=.5)Math.hypot(($+.25-B.x+2.4)/1.3,st+.25-B.z)>3.4||[[$,st],[$+.5,st],[$,st+.5],[$+.5,st+.5]].some(([gt,ct])=>je(gt,B.by-.3,ct)>0)||n.quad("pool","#86A9A8",[$,B.by-.3,st],[$,B.by-.3,st+.5],[$+.5,B.by-.3,st+.5],[$+.5,B.by-.3,st]);let F=B.by-.3,N=Q(F,Vn,.6),it=[],at=10;for(let $=0;$<=at;$++){let st=$/at-.5,gt=B.z+st*3.4,ct=Math.abs(st)*2,yt=B.x-2;for(;yt>46&&je(yt,F-.4,gt)>0;)yt-=.1;it.push(N.map(Rt=>{let Ft=(F-Rt)/(F-Vn),D=gt+st*1.6*Ft;return[yt-.25-2*Math.sqrt(Ft)*(1-.15*ct),Rt+ct*.4*Ft*($%2?1:.3),D]}))}W(it,3);let E=($,st,gt,ct,yt)=>{let Ft=[],D=[],R=[$,st+yt,gt];for(let Y=0;Y<7;Y++){let ut=Y/7*6.2832+ct;Ft.push([$+Math.cos(ut)*ct,st,gt+Math.sin(ut)*ct]),D.push([$+Math.cos(ut+.45)*ct*.72,st+yt*.62,gt+Math.sin(ut+.45)*ct*.72])}for(let Y=0;Y<7;Y++){let ut=(Y+1)%7;n.tri("pool","#EEF4F3",Ft[Y],D[Y],Ft[ut]),n.tri("pool","#EEF4F3",Ft[ut],D[Y],D[ut]),n.tri("pool","#F7FAFA",D[Y],R,D[ut])}},lt=z[J/2][z[J/2].length-1],ot=it[at/2][it[at/2].length-1];for(let $=0;$<9;$++)E(lt[0]+Math.cos($*2.4)*(.4+$*.12),B.by-.32,lt[2]+Math.sin($*2.4)*(.8+$*.22),.55+$%3*.2,.35+$%2*.2);for(let $=0;$<13;$++)E(ot[0]+Math.cos($*2.2)*(.5+$*.16),Vn-.02,ot[2]+Math.sin($*2.2)*(.9+$*.2),.7+$%3*.25,.4+$%2*.25);pt.FALLC=[...z.filter(($,st)=>st%3===1).map($=>$.map(st=>[st[0]-.07,st[1],st[2]])),...it.filter(($,st)=>st%3===1).map($=>$.map(st=>[st[0]-.07,st[1],st[2]]))],pt.FALLM=[[lt[0]-.4,B.by+.1,lt[2],1.4],[ot[0]-.6,Vn+.4,ot[2],2.2]]}We(n,t,21,Li(21,-86.2,3),-86.2,.5);for(let[B,q,tt,W]of[[22,3,-88.4,2.6],[47.6,3,-75.2,2.8],[51.2,0,-113.6,2.6],[36.2,10,-114.2,2.6]])xn(n,t,B,Li(B,tt,q),tt,W);{let B=pt.ZIP,q=Li(B.a[0],B.a[1],B.ya),tt=Li(B.b[0],B.b[1],B.yb),W=[B.a[0],q+B.ha,B.a[1]],Q=[B.b[0],tt+B.hb,B.b[1]],rt=Q[0]-W[0],nt=Q[2]-W[2],G=Math.hypot(rt,nt),z=rt/G,J=nt/G,F=-J,N=z;for(let[E,lt,ot]of[[W,q,-1],[Q,tt,1]]){for(let $ of[-1,1])n.beam(t,Z.post,[E[0]+F*$*.85+z*ot*.25,lt,E[2]+N*$*.85+J*ot*.25],[E[0],E[1]+.2,E[2]],.2);n.beam(t,Z.post,[E[0]+F*.55,E[1]-.9,E[2]+N*.55],[E[0]-F*.55,E[1]-.9,E[2]-N*.55],.14),n.beam(t,Z.metal,[E[0],E[1]+.05,E[2]],[E[0]+z*ot*2.4,lt+.05,E[2]+J*ot*2.4],.05),n.box(t,Z.metal,E[0]-.16,E[1]-.1,E[2]-.16,E[0]+.16,E[1]+.14,E[2]+.16)}let it=E=>[W[0]+rt*E,W[1]+(Q[1]-W[1])*E-B.sag*4*E*(1-E),W[2]+nt*E];for(let E=0;E<18;E++)n.beam(t,Z.metal,it(E/18),it((E+1)/18),.07);let at=it(.06);n.box(t,Z.metal,at[0]-.14,at[1]-.2,at[2]-.14,at[0]+.14,at[1]+.02,at[2]+.14),n.beam(t,Z.metal,[at[0],at[1]-.2,at[2]],[at[0],at[1]-.95,at[2]],.05),n.beam(t,Z.woodD,[at[0]-F*.3,at[1]-.95,at[2]-N*.3],[at[0]+F*.3,at[1]-.95,at[2]+N*.3],.08)}me(n,t,49,Li(49,-95.2,3),-95.2,1),me(n,t,50.2,Li(50.2,-95.6,3),-95.6,.8),We(n,t,48.6,Li(48.6,-93.4,3),-93.4)}var Xy=n=>Math.max(0,Math.min(1,n)),Li=(n,t,e)=>{var i;return(i=so(n,t,e+2.4,4.8))!=null?i:e};function qy(n){let t="under",e=vs.nodes;for(let p of["N0","K1","K2","D2","ex1"]){let _=e[p],y=null;for(let[w,A]of[[1,0],[-1,0],[0,1],[0,-1]]){let b=bi(_[0],_[1]+2.2,_[2],w,A);(!y||b<y[0])&&(y=[b,w,A])}let[v,S,T]=y;Dn(n,t,_[0]+S*(v-.1),_[1]+2.3,_[2]+T*(v-.1),-S,-T)}let i=Fi("t2Door","under"),s=Fi("t2DoorO","under"),r=e.D2,o=e.ex1,a=Math.hypot(o[0]-r[0],o[2]-r[2]),c=(o[0]-r[0])/a,l=(o[2]-r[2])/a,h=r[0]+c*2.4,u=r[2]+l*2.4,d=Math.atan2(l,c)+Math.PI/2;i.ybox(t,"#7A5C3E",h,1.4,u,2.6,2.8,.3,d),i.ybox(t,"#C9A14F",h,2.2,u,2.7,.14,.36,d),s.ybox(t,"#7A5C3E",h-Math.cos(d)*1.2+c*1.2,1.4,u-Math.sin(d)*1.2+l*1.2,.3,2.8,2.6,d),n.box(t+":e",Z.lamp,h-.2+Math.cos(d)*1.7,2.6,u-.2+Math.sin(d)*1.7,h+.2+Math.cos(d)*1.7,3,u+.2+Math.sin(d)*1.7);let f=ae,g=(f.x0+f.x1)/2;for(let p=f.x0+5.6;p<f.x1-4;p+=3.2){let _=-153-bi(p+1.2,f.y+1.2,-153,0,-1,9)+.25;n.box(t,Z.woodD,p,f.y,_,p+2.4,f.y+2.2,_+.6);for(let y=f.y+.5;y<f.y+2.2;y+=.55)n.box(t,Z.wood,p,y,_,p+2.4,y+.05,_+.7)}ao(n,t,g,f.y,-151.5,2.2,1.1),me(n,t,f.x0-.2,f.y,-147.9,1.1,.2),me(n,t,f.x0+1.1,f.y,-146.9,.9),me(n,t,f.x0-.3,f.y+1.1,-147.8,.8,.5),We(n,t,f.x1-3,f.y,-146.9),xn(n,t,g+2,f.y,-149,2.4),Es(n,t,f.pil[0]+.9,f.pil[1]+.9,f.y+.9,1,1,1.9,f.y,{n:6,w:1.6,seed:5});for(let p of[-145.6,-149.9])n.box(t,Z.post,f.x0+2.2-.11,f.y,p-.11,f.x0+2.2+.11,f.y+Am(f.x0+2.2,f.y+.3,p),p+.11);let x=[],m="out";for(let p=37.5;p<=65.6;p+=1.4)x.push([p,xa(p),yi(p)+.04]);for(let p=0;p<x.length-1;p++){let _=x[p],y=x[p+1],v=(_[0]+y[0])/2;if(Math.abs(v-52.9)<.7){n.beam(m,Z.wood,[_[0]-.2,_[2]-.06,_[1]+.35],[y[0]+.2,y[2]-.06,y[1]+.35],.34,.1);continue}if(wa(n,m,[_[0],_[2],_[1]],[y[0],y[2],y[1]],1.9),y[2]-_[2]>.08)for(let S of[.25,.75])n.ybox(m,Z.woodD,Ee(_[0],y[0],S),Ee(_[2],y[2],S)+.03,Ee(_[1],y[1],S),.1,.06,1.7,Math.atan2(y[1]-_[1],y[0]-_[0]));if(_[1]<Ye(_[0])+.5){let S=Ye(_[0])+.3;n.beam(m,Z.post,[_[0],_[2]-.3,_[1]-1.05],[_[0],_[2]-.3,S+.4],.2,.22),n.beam(m,Z.post,[_[0],_[2]-.4,_[1]-.9],[_[0],_[2]-2.6,S-.5],.16,.16)}}Ma(n,m,[78.9,yi(78.9),Ye(78.9)+1.5],[74.6,yi(74.6),Ye(74.6)+1.4],2.3,{depth:.6,seed:51,c:"#B9AD98"}),n.ybox("out",Z.metal,89,.6,Ye(89)+4.5,1.7,1.05,.62,.9);for(let[p,_,y]of[[84,3,1.1],[101,2.2,1.4],[97,6.6,.8],[106,4,.9],[80.4,7.2,2],[108,7,2.3],[103.4,1.6,.7],[86.6,1.8,.6]])Oe(n,"out",p,Ye(p)+_,y*1.15,y*.9,yi(p)-.4,yi(p)+y*1.05,{seed:p,n:7,jit:.24,flare:.14,rot:p*.7});Oe(n,"out",110.6,Ye(110.6)+8.6,2.7,2.3,-2.5,6.4,{seed:71,n:8,jit:.2,flare:.1,layers:6}),Oe(n,"out",77.2,Ye(77.2)+8.8,2.5,2.2,-2.5,5.6,{seed:72,n:8,jit:.2,flare:.1,layers:5}),Es(n,"out",79.6,Ye(79.6)+8.4,1.5,.9,-.5,4,-.1,{n:9,w:2.6,seed:61}),Es(n,"out",109.2,Ye(109.2)+8.2,1.7,-.9,-.5,4.2,-.1,{n:9,w:2.8,seed:62})}var Yy=[[-26.6,24,4.2],[-22.6,17.4,2.4]];function Zy(){let n=oo,t=7,e=()=>(t=t*16807%2147483647,(t-1)/2147483646),i=(r,o,a=.55)=>{let l=(ce(r+1.2,o)-ce(r-1.2,o))/2.4,h=(ce(r,o+1.2)-ce(r,o-1.2))/(2*1.2);return 1/Math.hypot(l,h,1)>a},s=(r,o)=>{let[a,,c]=pa.a,[l,,h]=pa.b,u=(l-a)**2+(h-c)**2,d=Math.max(0,Math.min(1,((r-a)*(l-a)+(o-c)*(h-c))/u));return Math.hypot(r-a-(l-a)*d,o-c-(h-c)*d)<4.5};for(let r=-164;r<164;r+=3.6)for(let o=-236;o<86;o+=3.6){t=((Math.imul(Math.round(r*10)+4e3,73856093)^Math.imul(Math.round(o*10)+4e3,19349663))>>>0)%2147483646+1,e(),e();let a=r+e()*3,c=o+e()*3,l=ce(a,c),h=e();if(l<.8||Jr(a,c)<3)continue;let u=Xl(a,c),d=da(a);if(c>d-.5&&u<1.5||c>kn(a)-1&&c<xe.z1+1.2&&a>xe.x0-2.5&&a<xe.x1+1||Gp(a,c).d<Qr/2+2||Yy.some(([_,y,v])=>Math.hypot(a-_,c-y)<v)||s(a,c)||!i(a,c,.68)||l>58||c<kn(a)+.5&&c>kn(a)-18&&a>-30&&a<xe.x1+3||a>xe.x1-1&&a<xe.x1+9&&c>kn(a)-6&&c<xe.z1+2||c<Ye(a)+to(a)+2&&c>Ye(a)-8)continue;let f=c>xe.z1&&c<d&&u<2,g=l>46,x=a>8&&a<26&&c>xe.z1+1&&c<19,m=f||x?x?.95:.85:c<Ye(a)?.5:g?.06:l>30?.22:.42;if(h>m||Ss(a,l-1,c)||Ss(a,l-3,c))continue;((c<-20||l>26?e()<.75:e()<.3)?n.pine:n.broad).push([+a.toFixed(2),+c.toFixed(2),+(1.05+e()*.55).toFixed(2)])}for(let[r,o,a,c]of[[12.4,16.6,1.6,0],[9.8,14.8,1.55,1],[13.3,13.3,1.6,1],[7.6,17.8,1.5,0],[11,18.8,1.5,1],[14.2,18.9,1.45,0],[14.3,15.5,1.65,1],[14.5,12.7,1.6,0]])(c?n.pine:n.broad).push([r,o,a])}function Jy(n){let t=Ks(17);for(let e=0;e<kl.length-1;e++){let i=kl[e],s=kl[e+1],r=Math.hypot(s[0]-i[0],s[1]-i[1]),o=(s[0]-i[0])/r,a=(s[1]-i[1])/r,c=-a,l=o,h=Math.max(1,Math.round(r/4.2));for(let u=0;u<h;u++){let d=(u+.2+t()*.6)/h,f=.6+t()*1.8,g=i[0]+(s[0]-i[0])*d+c*f,x=i[1]+(s[1]-i[1])*d+l*f,m=1+Math.floor(t()*2.6);for(let p=0;p<m;p++){let _=p===0,y=_?.9+t()*.9:.35+t()*.45,v=g+(_?0:(t()-.5)*3),S=x+(_?0:(t()-.5)*3),T=Math.max(ce(v,S),-.6);Oe(n,"out",v,S,y*(1.1+t()*.4),y*(.8+t()*.3),T-.6,T+y*(_?.9+t()*.8:.6),{seed:v*3.1+S,n:7,jit:.28,rot:t()*3,flare:.16,layers:_&&y>1.3?2:1})}}}for(let[e,i,s]of[[-24.4,70.8,1.1],[-25.2,74.2,.7],[-24.6,78.6,.9],[-21.6,68.6,.6],[-18.4,64.6,.5]]){let r=Math.max(ce(e,i),-.6);Oe(n,"out",e,i,s*1.25,s*.9,r-.6,r+s*.8,{seed:e*3.1,n:7,jit:.25,rot:e*1.7,flare:.16})}}function Rm(n){Fy(n),Uy(n),Ny(n),zy(n),ky(n),Hy(n),Vy(n),Wy(n),qy(n),Jy(n),oo.broad.length=0,oo.pine.length=0,Zy()}var eh=class{constructor(t,e,i={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},i),this.cur={th:0,ph:.9,r:500,t:new O},this.goal={th:0,ph:.9,r:500,t:new O},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let i=this.goal;t.th!==void 0&&(i.th=t.th),t.ph!==void 0&&(i.ph=t.ph),t.r!==void 0&&(i.r=t.r),t.t&&i.t.copy(t.t),this._clamp(),e&&(this.cur.th=i.th,this.cur.ph=i.ph,this.cur.r=i.r,this.cur.t.copy(i.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,c;let i={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:i.th;for(;s-i.th>Math.PI;)s-=Math.PI*2;for(;s-i.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:i.ph,r:(c=t.r)!=null?c:i.r,t:(t.t||i.t).clone()};this.fly={from:i,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let i=e.bounds;t.t.x=Math.min(i.x1,Math.max(i.x0,t.t.x)),t.t.z=Math.min(i.z1,Math.max(i.z0,t.t.z))}}update(t){let e=this.cur,i=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(i.th-e.th)*s,e.ph+=(i.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(i.r)-Math.log(e.r))*s),e.t.lerp(i.t,s)}return this._apply(),!!this.fly||Math.abs(i.th-e.th)>1e-4||Math.abs(i.ph-e.ph)>1e-4||Math.abs(i.r-e.r)>.01||i.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,i){let s=this.dom.getBoundingClientRect(),r=new Ht((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new sa;o.setFromCamera(r,this.cam);let a=new O;return o.ray.intersectPlane(new Jn(new O(0,1,0),-i),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,i){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,i,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let i=this.goal,s=this.dom.clientHeight||600,r=2*i.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),c=-Math.sin(o),l=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));i.t.x+=(-t*a+e*l*Math.min(u,2.2))*r,i.t.z+=(-t*c+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",i=>i.preventDefault()),t.addEventListener("pointerdown",i=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(i.pointerId,{x:i.clientX,y:i.clientY,b:i.button,sh:i.shiftKey,t:i.pointerType});try{t.setPointerCapture(i.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=i=>{var s,r;this.ptrs.delete(i.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",i=>{let s=this.ptrs.get(i.pointerId);if(!s||!this.enabled)return;let r=i.clientX-s.x,o=i.clientY-s.y;if(s.x=i.clientX,s.y=i.clientY,this.ptrs.size>=2){let[a,c]=[...this.ptrs.values()],l=(a.x+c.x)/2,h=(a.y+c.y)/2,u=Math.hypot(a.x-c.x,a.y-c.y),d=Math.atan2(c.y-a.y,c.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let f=d-this._pinch.a;f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),this.rotate(f,0)}this._pinch={d:u,mx:l,my:h,a:d};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||i.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",i=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}i.preventDefault();let s=i.deltaMode===1?i.deltaY*16:i.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),i.clientX,i.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var gf=["ground","mount","skirt","base","cave","ceil","pool","out","under","trees","mtrees","water","fx","ghost"],co={ov:{t:[-4,0,-52],r:430,ph:.78,th:.5},ext:{t:[-6,14,-30],r:420,ph:1.08,th:.16}},Cm=new Set(["cave","ceil","under","pool"]),ih={value:new De(0,pt.cut,Qi.x0,Qi.x1)},sh={value:new De(Qi.z0,Qi.z1,0,0)},Pm=(n,t)=>{n.uniforms.uCut=ih,n.uniforms.uCutB=sh,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`+(t?`
attribute float hc;
varying float vHc;`:"")).replace("#include <project_vertex>",`#include <project_vertex>
      vec4 mwp = vec4(transformed, 1.0);
      #ifdef USE_INSTANCING
      mwp = instanceMatrix * mwp;
      #endif
      vWP = (modelMatrix * mwp).xyz;${t?`
vHc = hc;`:""}`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
uniform vec4 uCut, uCutB;`+(t?`
varying float vHc;`:"")+`
bool inCut(vec3 p) { return p.x > uCut.z && p.x < uCut.w && p.z > uCutB.x && p.z < uCutB.y; }`)},Dm=n=>n.hc?"if (uCut.x > .5 && vHc > 0.0) discard;":n.plane?"if (uCut.x > .5 && inCut(vWP) && vWP.y > uCut.y) discard;":"";function es(n,t={}){return n.side=t.single?ui:Mn,n.onBeforeCompile=e=>{Pm(e,t.hc),e.fragmentShader=e.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+Dm(t)),t.back&&(e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
if (!gl_FrontFacing) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.62, .58, .52), .45);`))},n.customProgramCacheKey=()=>"cut"+(t.hc?"h":"")+(t.plane?"p":"")+(t.single?"s":"")+(t.back?"b":""),n}function Qy(n){let t=new Br({depthPacking:Dl});return t.onBeforeCompile=e=>{Pm(e,n.hc),e.fragmentShader=e.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+Dm(n))},t.customProgramCacheKey=()=>"cutd"+(n.hc?"h":""),t}function jy(){let n=new jn({vertexColors:!0,roughness:1,metalness:0,transparent:!0,depthWrite:!1});return n.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
      float c1 = vWP.y / 4.0, l1 = 1.0 - smoothstep(.55, 1.5, abs(fract(c1 - .5) - .5) / max(fwidth(c1), 1e-4));
      float c2 = vWP.y / 20.0, l2 = 1.0 - smoothstep(.7, 1.9, abs(fract(c2 - .5) - .5) / max(fwidth(c2), 1e-4));
      float fr = pow(1.0 - abs(dot(normal, normalize(vViewPosition))), 3.0);
      vec3 base = mix(gl_FragColor.rgb, vec3(.93, .93, .9), .32);
      gl_FragColor.rgb = mix(base, vec3(.32, .36, .3), max(l1 * .38, l2 * .6));
      gl_FragColor.a = clamp(.2 + .2 * fr + max(l1 * .18, l2 * .36), 0.0, .7);`)},n.customProgramCacheKey=()=>"ghost",n}function mf(n){let t=n.length/3,e=new Float32Array(t),i=mf.cache||(mf.cache=new Map);for(let s=0;s<t;s++){let r=n[s*3],o=n[s*3+1],a=n[s*3+2],c=Math.round(r*4)+","+Math.round(o*4)+","+Math.round(a*4),l=i.get(c);l===void 0&&(l=va(r,o,a),i.set(c,l)),e[s]=o-l}return e}function Ky(n){let t=new qe;return t.setAttribute("position",new Ve(n.p,3)),t.setAttribute("normal",new Ve(n.n,3)),t.setAttribute("color",new Ve(n.c,3)),n.h&&t.setAttribute("hc",new Ve(n.h,1)),t.computeBoundingSphere(),t}function nh(n,t){let e=n.attributes.position.count,i=new Float32Array(e*3);for(let s=0;s<e;s++)i.set(t,s*3);return n.setAttribute("color",new Ve(i,3)),n}function pf(n){let t=new qe;for(let e of["position","normal","color"]){let i=n.reduce((o,a)=>o+a.attributes[e].array.length,0),s=new Float32Array(i),r=0;for(let o of n)s.set(o.attributes[e].array,r),r+=o.attributes[e].array.length;t.setAttribute(e,new Ve(s,3))}return t}function tv(){let n=(c,l,h,u)=>{let d=Dp(new mi(c,1).deleteAttribute("normal").deleteAttribute("uv"));return d.computeVertexNormals(),d.translate(l,h,u).toNonIndexed()},t=pf([n(1.35,0,3.9,0),n(1.05,.9,3.35,.4),n(1,-.75,3.5,-.6),n(.85,.1,4.75,-.25)].map(c=>nh(c,[1,1,1]))),e=new ee("#7A6A58"),i=nh(new Ri(.16,.24,2.8,5,1,!0).translate(0,1.4,0).deleteAttribute("uv").toNonIndexed(),[e.r,e.g,e.b]),s=pf([t,i]),r=(c,l,h)=>nh(new us(c,l,7,1,!1).translate(0,h,0).deleteAttribute("uv").toNonIndexed(),[1,1,1]),o=nh(new Ri(.14,.2,2.2,5,1,!0).translate(0,1.1,0).deleteAttribute("uv").toNonIndexed(),[e.r,e.g,e.b]),a=pf([r(1.7,3.2,3.1),r(1.35,2.8,4.6),r(.95,2.4,6),o]);return{broad:s,pine:a}}var Im=null;function ev(n={}){let t=new xs;for(let w of Object.keys(Aa))delete Aa[w];let e=performance.now();qp(t,(w,A,b)=>b<12&&A>-40&&Ss(w,A,b)),Rm(t),cm(t),hm(t);let i=t.out(),s=new ye,r={};for(let w of gf)r[w]=new ye,r[w].name=w,s.add(r[w]);let o=w=>new jn({vertexColors:!0,roughness:.92,metalness:0,...w}),a=()=>new Ue({vertexColors:!0,toneMapped:!1}),c={ground:o({}),mount:o({}),skirt:o({roughness:1}),base:o({roughness:1}),cave:es(o({}),{hc:!0,back:!0}),ceil:es(o({}),{hc:!0,back:!0}),out:es(o({})),"out:e":es(a(),{single:!0}),"out:g":es(o({roughness:.35,metalness:.2})),under:es(o({}),{hc:!0}),"under:e":es(a(),{hc:!0,single:!0}),"under:g":es(o({roughness:.35,metalness:.2}),{hc:!0}),pool:es(o({roughness:.3,metalness:.05}),{hc:!0,single:!0}),pre:new Ue({colorWrite:!1,transparent:!0,depthWrite:!0}),ghost:jy()},l={h:Qy({hc:!0})},h=[],u=(w,A,b)=>{let M=w.split(":")[0],C=c[w]||c[M];if(!C)return null;Cm.has(M)&&!A.h&&(A.h=mf(A.p));let P=new Kt(Ky(A),C),U=w.endsWith(":e");if(P.castShadow=!U&&M!=="skirt"&&M!=="base",P.receiveShadow=!U,!U&&Cm.has(M)&&(P.customDepthMaterial=l.h),(b||r[M]).add(P),h.push(P),M==="mount"){let k=new Kt(P.geometry,c.pre),L=new Kt(P.geometry,c.ghost);k.renderOrder=50,L.renderOrder=51,r.ghost.add(k,L)}return P};for(let[w,A]of Object.entries(i))u(w,A);let d={};for(let[w,{g:A,k:b}]of Object.entries(Aa)){let M=new ye,C=new ye;C.name=w,C.add(M),r[A].add(C);for(let[k,L]of Object.entries(b.out()))u(k,L,M);let P=new $n().setFromObject(M),U=P.getCenter(new O);M.position.copy(U).negate(),C.position.copy(U),C.userData={center:U.clone(),box:P,home:U.clone(),group:A},d[w]=C}let f=new jn({color:"#7FA3A6",roughness:.25,metalness:.05,transparent:!0,opacity:.82,depthWrite:!1}),g=(w,A,b,M,C)=>{let P=new Gs(A-w,M-b).rotateX(-Math.PI/2).translate((w+A)/2,C,(b+M)/2),U=new Kt(P,f);return U.receiveShadow=!0,U.renderOrder=1,r.water.add(U),U};g(Ge.x0,Ge.x1,28,Ge.z1,0),g(Ge.x0,Ge.x1,Ge.z0,-174,-30+.05);let x=new On({uniforms:{uCut:ih,uCutB:sh,uCol:{value:new ee("#FFE7B0")}},transparent:!0,depthWrite:!1,blending:ra,vertexShader:`varying vec3 vWP; varying vec3 vN; varying float vT;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vWP = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vT = uv.y; gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`uniform vec4 uCut, uCutB; uniform vec3 uCol; varying vec3 vWP; varying vec3 vN; varying float vT;
void main() { if (uCut.x > .5 && vWP.x > uCut.z && vWP.x < uCut.w && vWP.z > uCutB.x && vWP.z < uCutB.y && vWP.y > uCut.y) discard;
  float f = abs(dot(normalize(vN), normalize(cameraPosition - vWP))); float a = f * f * (.07 + .2 * vT); gl_FragColor = vec4(uCol, a); }`});for(let[w,A,b,M,C,P]of pt.SKY){let U=new O(w,21.5,A),k=new O(M,P,C),L=U.distanceTo(k),V=new Kt(new Ri(b*.85,b*1.2,L,28,1,!0),x);V.position.copy(U).add(k).multiplyScalar(.5),V.quaternion.setFromUnitVectors(new O(0,1,0),U.clone().sub(k).normalize()),V.renderOrder=2,r.fx.add(V)}let m=tv(),p=o({roughness:.95}),_=(w,A,b,M)=>{if(!A.length)return null;let C=new ko(w,p,A.length),P=new Me,U=new di,k=new O,L=new O,V=new ee,j=new O(0,1,0),H=new ee(b),B=new ee(M);return A.forEach(([q,tt,W,Q],rt)=>{let nt=Math.sin(q*12.9898+tt*78.233)*43758.5453,G=nt-Math.floor(nt);U.setFromAxisAngle(j,G*6.28),k.set(W*(.9+G*.2),W*(.92+G*.25),W*(.9+G*.2)),L.set(q,(Q!=null?Q:ce(q,tt))-.1,tt),P.compose(L,U,k),C.setMatrixAt(rt,P),V.copy(H).lerp(B,G),C.setColorAt(rt,V)}),C.castShadow=!0,C.receiveShadow=!0,C.frustumCulled=!1,C};for(let[w,A,b,M]of[[oo.broad,m.broad,"#7F9468","#A0AC7C"],[oo.pine,m.pine,"#6E8463","#8E9E72"]]){let C=w.filter(L=>ga(L[0],L[1])),P=w.filter(L=>!ga(L[0],L[1])),U=_(A,P,b,M),k=_(A,C,b,M);U&&r.trees.add(U),k&&r.mtrees.add(k)}let y=new xs,v={syncMs:Math.round(performance.now()-e)},S=n.voxel?null:Im,T={it:S?(function*(){return S.r})():um(y,{voxel:n.voxel}),done:!1,t0:performance.now(),finish(w){let A=S?S.out:y.out();!S&&!n.voxel&&(Im={out:A,r:w});for(let[b,M]of Object.entries(A))u(b,M);y.L={},Object.assign(v,w,{caveMs:Math.round(performance.now()-this.t0)}),this.done=!0}};return{root:s,groups:r,parts:d,M:c,meshes:h,stats:v,caves:T}}function Lm(n,t={}){var it,at;let e=(it=t.mobile)!=null?it:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),i=new Ol({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=zc,i.shadowMap.autoUpdate=!1,i.toneMapping=Yc,i.toneMappingExposure=(at=t.exposure)!=null?at:1,i.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",n.appendChild(i.domElement);let s=new Oo,r=new dn(30,1,.4,4e3),o=ev(t);s.add(o.root),s.add(new ea("#EEF2F5","#B5AB9A",1.25));let a=new ia("#FFF2DF",2.6),c=new O(-.42,.8,.43).normalize(),l=new O(0,0,-30);a.position.copy(l).addScaledVector(c,500),a.target.position.copy(l),s.add(a,a.target),a.castShadow=!0;let h=e?2048:4096;a.shadow.mapSize.set(h,h),a.shadow.bias=-4e-4,a.shadow.normalBias=.05,a.shadow.radius=2;let u=E=>{let lt=a.shadow.camera,ot=new Me().lookAt(a.position,a.target.position,new O(0,1,0)).setPosition(a.position).invert(),$=1e9,st=-1e9,gt=1e9,ct=-1e9,yt=1e9,Rt=-1e9,Ft=new O;for(let D of[E.x0,E.x1])for(let R of[E.y0,E.y1])for(let Y of[E.z0,E.z1])Ft.set(D,R,Y).applyMatrix4(ot),$=Math.min($,Ft.x),st=Math.max(st,Ft.x),gt=Math.min(gt,Ft.y),ct=Math.max(ct,Ft.y),yt=Math.min(yt,Ft.z),Rt=Math.max(Rt,Ft.z);Object.assign(lt,{left:$,right:st,bottom:gt,top:ct,near:-Rt-5,far:-yt+5}),lt.updateProjectionMatrix(),i.shadowMap.needsUpdate=!0},d=t.shadowBox||{x0:Ge.x0,x1:Ge.x1,z0:Ge.z0,z1:Ge.z1,y0:-30,y1:130};u(d);let f=!0,g=!0,x=!0,m=performance.now(),p=[],_=[],y=new eh(r,i.domElement,{minR:5,maxR:900,minPhi:.08,maxPhi:1.52,bounds:{x0:-170,x1:170,z0:-200,z1:145},onChange:()=>{f=!0},onStart:()=>{for(let E of p)E()},onWheelHint:()=>{for(let E of _)E()},...t.controls||{}}),v=null,S=y.o.maxPhi,T=(E,lt)=>{var gt,ct,yt,Rt;let ot=typeof E=="string"?co[E]:E,$={th:ot.th,ph:ot.ph,r:ot.r,t:new O(...ot.t)},st=(gt=ot.fov)!=null?gt:30;y.o.maxPhi=Math.max(S,((ct=ot.ph)!=null?ct:0)+.001),lt?(y.set($,!0),v=null,r.fov=st,r.updateProjectionMatrix()):(y.flyTo($,(yt=ot.dur)!=null?yt:1.3),v=r.fov===st?null:{a:r.fov,b:st,t0:performance.now(),dur:((Rt=ot.dur)!=null?Rt:1.3)*1e3})},w=()=>{if(!v)return!1;let E=Math.min(1,(performance.now()-v.t0)/v.dur),lt=E*E*(3-2*E);return r.fov=v.a+(v.b-v.a)*lt,r.updateProjectionMatrix(),E>=1&&(v=null),!0};T(t.view||"ov",!0);let A=null,b=ih.value.clone(),M=sh.value.clone();function C(E){var ct,yt,Rt,Ft,D;E=typeof E=="string"?{kind:E}:E;let lt=JSON.stringify(E);if(lt===A)return;A=lt;let ot=b,$=E.kind==="in",st=E.kind!=="ext"&&!$;for(let R of o.meshes){let Y=R.parent&&R.parent.name;(Y==="ground"||Y==="mount"||Y==="ceil")&&(R.castShadow=!$)}for(let R of["trees","mtrees"])for(let Y of o.groups[R].children)Y.castShadow=!$;let gt=o.groups;gt.mount.visible=!st,gt.ghost.visible=st,gt.base.visible=!st,gt.mtrees.visible=!st,st?(ot.x=1,ot.y=(ct=E.y)!=null?ct:pt.cut,ot.z=(yt=E.x0)!=null?yt:Qi.x0,ot.w=(Rt=E.x1)!=null?Rt:Qi.x1,M.x=(Ft=E.z0)!=null?Ft:Qi.z0,M.y=(D=E.z1)!=null?D:Qi.z1):ot.x=0,i.shadowMap.needsUpdate=!0,f=!0}C(t.mode||"ov");let P={x:.5,y:.5,tx:.5,ty:.5},U=()=>{let E=n.clientWidth||800,lt=n.clientHeight||500;Math.abs(P.x-.5)<1e-4&&Math.abs(P.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(E,lt,(.5-P.x)*E,(.5-P.y)*lt,E,lt)},k=E=>{if(P.x===P.tx&&P.y===P.ty)return!1;let lt=1-Math.exp(-E*5);return P.x+=(P.tx-P.x)*lt,P.y+=(P.ty-P.y)*lt,Math.abs(P.tx-P.x)+Math.abs(P.ty-P.y)<.001&&(P.x=P.tx,P.y=P.ty),U(),!0},L=()=>{let E=n.clientWidth||800,lt=n.clientHeight||500;i.setSize(E,lt,!1),r.aspect=E/lt,r.updateProjectionMatrix(),U(),f=!0},V=new ResizeObserver(L);V.observe(n),L();let j=new IntersectionObserver(E=>{g=E[0].isIntersecting,g&&(f=!0)});j.observe(n);let H=[],B=[],q=[],tt=()=>{ih.value.copy(b),sh.value.copy(M);for(let E of q)E(r);i.render(s,r);for(let E of H)E(r)},W=0,Q=!1,rt=0,nt=E=>{if(!x||(requestAnimationFrame(nt),Q))return;let lt=Math.max(0,Math.min(.05,(E-m)/1e3));if(m=E,!g||document.hidden)return;let ot=N.animating||E<N.animUntil,$=!ot&&N.ambient&&E-W>50;if(ot||$){for(let yt of B)yt(lt,E/1e3);$&&(W=E)}let st=y.update(lt),gt=k(lt),ct=w();(f||st||gt||ct||ot||$)&&(tt(),f=!1)};requestAnimationFrame(nt);let G=[],z=!1,J=(()=>{if(typeof MessageChannel!="undefined"){let E=new MessageChannel,lt=null;return E.port1.onmessage=()=>{let ot=lt;lt=null,ot&&ot()},ot=>{lt=ot,E.port2.postMessage(0)}}return E=>setTimeout(E,0)})(),F=()=>{if(!x)return;let E=o.caves,lt=performance.now();try{for(;performance.now()-lt<12;){let ot=E.it.next();if(ot.done){E.finish(ot.value);let $=A;A=null,C(JSON.parse($)),z=!0,i.shadowMap.needsUpdate=!0,f=!0;for(let st of G.splice(0))st();return}}}catch(ot){console.error(ot),z=!0;for(let $ of G.splice(0))$(ot);return}J(F)};if(t.sync){let E;for(;!(E=o.caves.it.next()).done;);o.caves.finish(E.value);let lt=A;A=null,C(JSON.parse(lt)),z=!0}else J(F);let N={renderer:i,scene:s,camera:r,controls:y,world:o,parts:o.parts,setView:T,VIEWS:co,setMode:C,mode:()=>JSON.parse(A),animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{f=!0},setCenter:(E,lt,ot)=>{P.tx=E,P.ty=lt,ot&&(P.x=E,P.y=lt,U(),f=!0)},hold:E=>{Q=E,E?(rt=performance.now()/1e3,y.now=()=>rt*1e3):y.now=()=>performance.now()},step:E=>{rt+=E;for(let lt of B)lt(E,rt);y.update(E),tt()},setShadowBox:E=>{u(E||d),f=!0},shadowDirty:()=>{i.shadowMap.needsUpdate=!0,f=!0},renderNow:()=>{y.update(1),tt()},onReady:E=>{z?E():G.push(E)},get ready(){return z},onRender:E=>H.push(E),onBeforeRender:E=>q.push(E),onFrame:E=>B.push(E),onUserStart:E=>p.push(E),onWheelHint:E=>_.push(E),dispose:()=>{x=!1,V.disconnect(),j.disconnect(),i.dispose(),i.domElement.remove()}};return N}var be=(n,t)=>{var e;return+(((e=zp(n,t))!=null?e:ce(n,t))+.02).toFixed(2)},we=(n,t=0)=>{let e=on(n),i=+(e[0]-e[4]*t).toFixed(2),s=+(e[1]+e[3]*t).toFixed(2);return[i,be(i,s),s]},Gn=(n,t,e,i,s)=>{let r=we(t,e),o=on(i);return s?[n,r[0],r[1],r[2],o[0],o[1],s]:[n,r[0],r[1],r[2],o[0],o[1]]},Ei={kind:"ext"},tn={kind:"ov"},rr={kind:"in"},lh=Re.y+.02,Si=pe.y+.02,ir=xe.y+.02,ns=In.y+.02,he=Lt.hi+.02,Pt=Lt.floor+.02,Ui=Lt.hA+.02,ln=Lt.hB+.02,_t=Ie.nodes,Ze=vs.nodes,xf=pe.x1;function lo(n,t,e={}){var w,A,b,M,C,P,U;let i=(w=e.back)!=null?w:4,s=(A=e.up)!=null?A:2.3,r=(b=e.ahead)!=null?b:9,o=(M=e.side)!=null?M:0,a=(C=e.tUp)!=null?C:1.3,c=t[0]-n[0],l=t[1]-n[2],h=Math.hypot(c,l),u=c/h,d=l/h,f=n[0]-u*i-d*o,g=n[2]-d*i+u*o,x=n[1]+s,m=n[0]+u*r,p=n[2]+d*r,_=n[1]+a,y=f-m,v=x-_,S=g-p,T=Math.hypot(y,v,S);return{t:[+m.toFixed(2),+_.toFixed(2),+p.toFixed(2)],r:+T.toFixed(2),ph:+Math.acos(v/T).toFixed(3),th:+Math.atan2(y,S).toFixed(3),fov:(P=e.fov)!=null?P:52,dur:(U=e.dur)!=null?U:1.5}}function Om(n,t,e,i,s,r){let o=Math.cos(i),a=Math.sin(i);return[+(n-o*s-a*r).toFixed(2),+(e+.85).toFixed(2),+(t-a*s+o*r).toFixed(2)]}var hn=th(-14),sr=(n,t)=>Om(-3.4,Cn.pas,xe.y,0,n,t),ho=(n,t)=>Om(hn[0],hn[1],hn[2]+.06,hn[3],n,t),hh=Tm,Wn=(n,t,e,i)=>[n,t[0],t[1],t[2],e!=null?e:t[0]+10,i!=null?i:t[2],"sit"];function oi(n,t,e=52,i=1.5){let s=n[0]-t[0],r=n[1]-t[1],o=n[2]-t[2],a=Math.hypot(s,r,o);return{t,r:+a.toFixed(2),ph:+Math.acos(r/a).toFixed(3),th:+Math.atan2(s,o).toFixed(3),fov:e,dur:i}}var Rs=[{b:[0,1,2,3],mode:Ei,cam:{t:[1,2,53],r:90,ph:.95,th:.3},at:[-6,4,52]},{b:[4,5,6],mode:Ei,cam:{t:[-8,6,12],r:72,ph:.88,th:.62},at:[-22,8,18]},{b:[7,8],mode:tn,cam:{t:[8,6,-18],r:160,ph:.74,th:.42},at:[-8,14,4]},{b:[9,10,11,12,13],mode:tn,cam:{t:[-58,5,-92],r:125,ph:.78,th:.35},at:[-56,12,-60]},{b:[14,15,16],mode:tn,cam:{t:[-12,0,-116],r:84,ph:.64,th:.18},at:[-29,8,-123]},{b:[17,18,19,20],mode:tn,cam:{t:[34,0,-94],r:118,ph:.78,th:.3},at:[12,11,-88]},{b:[21,22,23],mode:tn,cam:{t:[54,0,-150],r:120,ph:.82,th:.45},at:[44,6,-140]}],zm={nookDoor:13,ncDoor:20,t2Door:23},km={trainS:[8,10,0],trainT:[8,8,1],trainH:[9,10,1]},Ra=(n,t,e)=>{let[i,s]=$r(n,e);return[+i.toFixed(2),t,+s.toFixed(2)]},bf=(n,t)=>{let[e,i]=$r(n,t);return[+e.toFixed(2),+i.toFixed(2)]},Xn=(n,t,e,i,s,r,o)=>{let a=Ra(t,e,i),c=bf(s,r);return o?[n,a[0],e,a[2],c[0],c[1],o]:[n,a[0],e,a[2],c[0],c[1]]},Ts=(n,t,e,i,s)=>{let r=Ra(t,e,i);return[n,r[0],e,r[2],s]},Fm=Ra(Re.x0+2.2,lh,52.4),nv=Ra($t.x,Si,$t.z+1.7),Um=[5.2,be(5.2,39.6),39.6],uo=[-3.6,be(-3.6,31.4),31.4],_f=[-19.6,be(-19.6,7.4),7.4],iv=hh(7,.5),As=[-67.6,he,-59.9],or=[12.6,7.02,-88],rh=ws.a,oh=ws.b,sv=lm(3),Nm=(()=>{let n=pt.E.x-pt.SH.x,t=pt.E.z-pt.SH.z,e=Math.hypot(n,t);return[n/e,t/e]})(),Ni=[+(pt.SH.wx-Nm[1]*2.3).toFixed(2),pt.SH.y+.02,+(pt.SH.z+Nm[0]*2.3).toFixed(2)],ah=(n,t,e)=>pt.RANGED.map(([i,s])=>["e",i,pt.SH.up+.02,s,n,t,e]),fo=pt.ZIP.a,uh=pt.ZIP.b,yf=[pt.ZIP.ya+pt.ZIP.ha-1.2,pt.ZIP.yb+pt.ZIP.hb-1.2],Bm=[0,.25,.5,.75,1].map(n=>[fo[0]+(uh[0]-fo[0])*n,yf[0]+(yf[1]-yf[0])*n-pt.ZIP.sag*4*n*(1-n),fo[1]+(uh[1]-fo[1])*n]),rv=[[[Ni[0],pt.SH.y+.1,Ni[2]],[fo[0],pt.ZIP.ya+.1,fo[1]],"move"],...Bm.slice(0,-1).map((n,t)=>[n,Bm[t+1],"route"]),[[uh[0],.1,uh[1]],[pt.DOOR.x,.1,pt.DOOR.z+1.6],"move"]],ch=(n,t=.02)=>[_t[n][0],+(_t[n][1]+t).toFixed(2),_t[n][2]],ov=(n,t,e)=>{for(let i of n){if(i.a===t&&i.b===e)return i.P;if(i.a===e&&i.b===t)return i.P.slice().reverse()}return null},Hm=(n,t)=>(...e)=>{let i=[];for(let s=0;s<e.length-1;s++)(ov(t,e[s],e[s+1])||[n.nodes[e[s]],n.nodes[e[s+1]]]).forEach((r,o)=>{(o||!i.length)&&i.push([+r[0].toFixed(2),+(r[1]+.02).toFixed(2),+r[2].toFixed(2)])});return i},vf=Hm(Ie,Mi),Mf=Hm(vs,im),av=n=>{let t=[_t.M2[0]+Ie.pillar.dx,_t.M2[2]+Ie.pillar.dz],e=[],i=!1;for(let s of n)Math.hypot(s[0]-t[0],s[2]-t[1])<2.4?i||(e.push([+(t[0]+2.05).toFixed(2),+(_t.M2[1]+.02).toFixed(2),t[1]]),i=!0):e.push(s);return e},Te=[{p:Fm,pl:bf(-11,38),pose:"walk",mode:Ei,u:[Xn("n",-11.6,lh,49.4,-11.6,38,"walk"),Xn("n",-10.4,lh,47,-10.4,38,"walk"),Xn("n",-11.3,lh,44.6,-11.3,38,"walk"),Xn("e",Re.x1+1,Si,40.6,-11,48,"talk"),Xn("e",pe.x0+.9,Si,38,-11,38),Xn("f",$t.x,Si,$t.z-1.1,$t.x,48),["n",19.6,be(19.6,34.6),34.6,18,41,"walk"],["n",17.8,be(17.8,36.6),36.6,18,41,"walk"]],lab:[Ts("\u6808\u6865\u5341\u51E0\u7C73",Re.x0-.4,4.2,48,"note"),Ts("\u5DE6\u4FA7\u62A4\u680F\uFF0C\u5B88\u536B\u7AD9\u5C97",pe.x0+.9,5,38,"warn"),Ts("\u6B63\u524D\u65B9\uFF1A\u529E\u516C\u5BA4\u548C\u767B\u8BB0\u684C",$t.x,7.6,34,"item"),Ts("\u53F3\u4FA7\u77EE\u53F0\u9636\u4E0B\u5230\u6D45\u6EE9",xf+2.4,4,35,"note"),["6m \u9AD8\u5DEE\u4E0A\u6811\u6728\u5BC6\u5E03\uFF0C\u6321\u4F4F\u540E\u9762\u7684\u77FF\u6D1E\u5165\u53E3",-6,15,19,"note"],["\u4F20\u9001\u5E26\u628A\u77FF\u77F3\u4ECE\u9AD8\u5904\u8FD0\u4E0B\u6765",17.6,11,22,"item"],["\u5C71\u5B57\u5F62\u7684\u77FF\u5C71",-8,66,-108,"mk"]],cam:lo(Fm,[-3.8,36.3],{back:5,up:2.2,ahead:14,tUp:3.4,fov:55})},{p:nv,pl:bf($t.x,$t.z),mode:Ei,u:[Xn("f",$t.x,Si,$t.z-1.1,$t.x,48,"talk"),Xn("n",$t.x+.2,Si,$t.z+1.6,$t.x,$t.z),Xn("n",$t.x-.2,Si,$t.z+3.1,$t.x,$t.z),Xn("n",$t.x+.1,Si,$t.z+4.4,$t.x,$t.z),Xn("e",$t.x-3.6,Si,$t.z+2.6,$t.x,$t.z+3),Xn("e",pe.x0+.9,Si,38,$t.x,38),Xn("n",$t.x+3.6,Si,$t.z+.4,xf+2,35,"walk")],lab:[Ts("\u529E\u4E8B\u5458\uFF1A\u767B\u8BB0",$t.x,4.8,$t.z-1.1,"mk"),Ts("\u5B88\u536B\u50AC\u4FC3\u6392\u961F",$t.x-3.6,4.8,$t.z+2.6,"warn"),Ts("\u529E\u516C\u5BA4\u4E5F\u6321\u4F4F\u4E86\u540E\u9762\u7684\u89C6\u7EBF",$t.x-3,6.8,32.6,"note"),Ts("\u767B\u8BB0\u5B8C\u7684\u5DE5\u4EBA\u8D70\u4E0B\u53F3\u4FA7\u53F0\u9636\u53BB\u6D45\u6EE9",xf+2.6,4.2,35,"note")],cam:{t:Ra($t.x+1,3.6,$t.z+1.5),r:13,ph:1.18,th:+(.62+_i.rot).toFixed(3),fov:46}},{p:Um,pl:[16,31],mode:Ei,u:[["e",9.4,be(9.4,33.2),33.2,10.8,32.4,"slam"],["n",10.8,be(10.8,32.4),32.4,9.4,33.2,"down"],["e",21.6,be(21.6,34.2),34.2,25,35.6,"grab"],["n",20.6,be(20.6,34.6),34.6,25,35.6,"down"],["n",2.2,be(2.2,33.8),33.8,5.6,33.6,"talk"],["n",3.6,be(3.6,32.6),32.6,5.6,33.6],["n",7.8,be(7.8,36.4),36.4,9.4,33.2]],lab:[["\u5728\u4E00\u5C0F\u7247\u6D45\u6EE9\u4E0A\u81EA\u7531\u8D70\u52A8\u3001\u67E5\u770B",3.4,4.4,37.4,"note"],["\u5B88\u536B\u97AD\u6253\u5DE5\u4EBA",10,5,32.8,"warn"],["\u5B88\u536B\u628A\u6B7B\u53BB\u5DE5\u4EBA\u7684\u5C38\u4F53\u62D6\u53BB\u5CB8\u8FB9\u89D2\u843D",21.6,4.6,34.4,"warn"],["\u62AC\u5934\uFF1A6m \u9AD8\u5DEE\u4E0A\u6811\u6728\u5BC6\u5E03\uFF0C\u770B\u4E0D\u5230\u540E\u9762\u7684\u77FF\u6D1E\u5165\u53E3",8,13.4,21,"note"]],cam:lo(Um,[16,31],{back:4.5,up:2.4,ahead:11,tUp:2.2,side:-.8,fov:56})},{p:uo,pl:[mn.x,mn.z-.8],mode:Ei,u:[["f",mn.x,be(mn.x,mn.z-.8),mn.z-.8,uo[0],uo[2],"talk"],["e",-11.7,be(-11.7,27.2),27.2,mn.x,29.8],["e",-3.5,be(-3.5,27),27,mn.x,29.8],["n",-10.1,be(-10.1,29.4),29.4,mn.x,27.6,"talk"],["n",-11.1,be(-11.1,30.7),30.7,-10.1,29.4,"talk"],["n",-8.7,be(-8.7,31.1),31.1,mn.x,27.6],["n",-3.1,be(-3.1,29.2),29.2,mn.x,27.6]],lab:[["\u5DE5\u5934\u548C\u4E24\u4E2A\u5B88\u536B",mn.x,4.6,mn.z-.8,"mk"],["\u5DE5\u4EBA\u7A83\u7A83\u79C1\u8BED\uFF0C\u62C5\u5FC3\u91CC\u9762\u7684\u60C5\u51B5",-10.7,4.4,30.4,"note"],["\u5DE6\u524D\u65B9\uFF1A\u8D34\u7740\u571F\u574E\u4E0A\u53BB\u7684\u6797\u95F4\u8DEF",-16.5,8.6,22.2,"item"]],cam:oi([2.5,be(2.5,31)+4.2,31],[-9.5,2.4,27.4],50)},{p:we(3.6),pl:[on(9)[0],on(9)[1]],pose:"walk",mode:Ei,path:[[uo[0],uo[1],uo[2]],[-5,be(-5,28.2),28.2],we(0),we(3.6)],u:[Gn("f",13,0,17,"walk"),Gn("n",10.4,.5,14,"walk"),Gn("n",8.6,-.5,14,"walk"),Gn("n",6.6,.4,14,"walk"),Gn("e",15.4,-.3,19,"walk"),Gn("e",.8,.3,6)],fx:[["ring",we(8)[0],we(8)[1]+.5,we(8)[2],6,"#E7A537"],["ring",we(8)[0],we(8)[1]+.5,we(8)[2],12,"#D2452F"]],lab:[["\u79BB\u5F00\u961F\u4F0D\uFF1A\u88AB\u8B66\u544A",-12.4,be(-12.4,28.6)+2.6,28.6,"warn"],["\u79BB\u5F97\u592A\u8FDC\uFF1A\u5B88\u536B\u76F4\u63A5\u653B\u51FB\uFF0C\u8F6C\u5165\u5F00\u6218\u6D41\u7A0B\uFF0C\u4E00\u8DEF\u6253\u5230\u7981\u5730\u77FF\u9053\u5165\u53E3",-2.6,be(-2.6,21.6)+2.6,21.6,"warn"],["\u5DE5\u5934\u5E26\u961F\uFF0C\u5B88\u536B\u524D\u540E\u62BC\u9001",we(13)[0],we(13)[1]+2.6,we(13)[2],"mk"],["\u8D34\u7740\u571F\u574E\u659C\u7740\u4E0A\u53BB\uFF1A\u539F\u6728\u53F0\u9636",we(17.5)[0],we(17.5)[1]+3,we(17.5)[2],"note"]],cam:{t:[-15.5,4.6,23],r:30,ph:1.06,th:.62,fov:42}},{p:we(19.6),pl:[on(24)[0],on(24)[1]],pose:"walk",mode:Ei,path:[we(3.6),we(8),we(12),we(16),we(19.6)],u:[Gn("f",31.5,0,35,"walk"),Gn("n",29.4,.4,33,"walk"),Gn("n",27.4,-.4,31,"walk"),Gn("e",33.4,-.3,37,"walk"),Gn("n",23,-1.3,22,"down"),Gn("e",22,-.5,23,"stab"),Gn("e",17.6,-.9,21,"walk")],lab:[["\u4E00\u540D\u5DE5\u4EBA\u4E0D\u613F\u518D\u8D70\uFF0C\u53CD\u6297\u88AB\u6740\uFF08\u6F14\u51FA\uFF09",we(23,-1.3)[0],we(23,-1.3)[1]+2.6,we(23,-1.3)[2],"warn"],["\u6797\u95F4\u4E0A\u5761\u8DEF\uFF1A\u4E00\u9053\u5927\u5F2F\u7ED5\u4E0A\u53BB\uFF0C\u7EA6 45 \u79D2",we(29)[0],we(29)[1]+3.2,we(29)[2],"note"]],cam:lo(we(19.6),[on(24.5)[0],on(24.5)[1]],{back:5.6,up:3.1,ahead:8,tUp:1.6,side:1.2,fov:54})},{p:_f,pl:[18,.6],mode:Ei,u:[["f",-16.8,ns,1.2,-10,1,"walk"],["n",-20.6,ir,4.6,-20.8,.7,"walk"],["n",-21.6,ir,6.4,-20.8,.7,"walk"],["e",-21.4,ir,9.2,-19.6,5],["n",5.6,Pi.y+.02,8.8,15.6,10.8,"walk"],["n",3.4,Pi.y+.02,9.2,15.6,10.8,"walk"],["n",13.6,ir,11,15.6,10.8,"grab"],["e",1.2,Pi.y+.02,9.4,5,9],["e",18.4,ir,-5.2,10,-2],["e",18.2,ir,4.4,10,2]],lab:[["\u659C\u524D\u65B9\uFF1A\u663E\u773C\u7684\u77FF\u6D1E\u5165\u53E3",bn.x-.8,23.4,bn.z,"mk"],["\u8FD1\u5904\u7AD9\u53F0\uFF1A\u8F7D\u4EBA\u7684\u5217\u8F66",-12,17.6,.7,"item"],["\u8FDC\u5904\u7AD9\u53F0\uFF1A\u5206\u53C9\u7684\u8FD0\u8D27\u8F68\u9053\u548C\u88C5\u7740\u77FF\u7684\u8F66",3.5,16.2,6.8,"item"],["\u5DE5\u4EBA\u628A\u77FF\u8FD0\u5230\u4F20\u9001\u5E26\u4E0A",14.4,17.4,10.4,"note"]],cam:lo(_f,[18,.6],{back:7,up:4.5,ahead:22,tUp:2.2,side:-1.2,fov:54})},{p:sr(8.7,.5),pl:[10,Cn.pas],pose:"sit",mode:Ei,path:[_f,[-20.9,ir,.7],[-19,ns,.7],[-13.5,ns,.9],[-12.1,ns,.1],[...sr(8.7,.5),1]],u:[Wn("n",sr(8.7,-.5)),Wn("n",sr(7,.5)),Wn("n",sr(7,-.5)),Wn("n",sr(10.9,.5)),Wn("n",sr(12.6,-.5)),["f",-8.4,ns,1.4,-9.6,Cn.pas,"talk"],["e",-16.6,ns,1.9,-12,Cn.pas],["e",-6.8,ns,2,-8,Cn.pas]],lab:[["\u5DE5\u5934\u5E26\u5927\u5BB6\u4E0A\u77FF\u8F66",-8.4,16.2,1.4,"mk"],["\u8F66\u4E0A\u7684\u5BF9\u767D\u548C\u73AF\u5883\u53D9\u4E8B",-13,15.6,Cn.pas,"note"]],cam:oi([-23.5,ns+3.6,5.6],[-8,ns+.9,-1.6],52)},{p:ho(7,.5),pl:[-40,hn[1]-.5],pose:"sit",mode:rr,u:[Wn("n",ho(5.3,-.5),-40,hn[1]+.5),Wn("n",ho(5.3,.5),-40,hn[1]-.5),Wn("n",ho(8.7,-.5),-40,hn[1]+.5),Wn("n",ho(10.9,.5),-40,hn[1]-.5),Wn("n",ho(12.6,-.5),-40,hn[1]+.5),["e",an[1].cx-1,an[1].y+.02,an[1].cz+.6,an[1].cx,an[1].cz-1,"sit"],["e",an[1].cx+1,an[1].y+.02,an[1].cz+.4,an[1].cx,an[1].cz+3,"talk"]],lab:[["\u96A7\u9053\u7EA6 30 \u79D2\uFF1A\u4E24\u6B21\u8F6C\u5F2F",-34,14.4,hn[1]-1.8,"note"],["\u7B2C\u4E8C\u5904\u5B88\u536B\u4F11\u606F\u7684\u7A7A\u95F4\uFF08\u6709\u8868\u6F14\uFF09",an[1].cx,an[1].y+3.2,an[1].cz+1,"warn"]],cam:oi([hn[0]+18.4,hn[2]+4,hn[1]-.4],[hn[0]-2,hn[2]+1.9,hn[1]-2.8],54)},{p:iv,pl:[-58,-100],pose:"sit",mode:rr,u:[Wn("n",hh(5.3,-.5)),Wn("n",hh(8.7,-.5),-58,-100),Wn("n",hh(12.6,.5)),["e",-56.6,he,-64,-55.4,-58.6,"talk"],["f",-58.6,he,-63.4,-55.4,-58.4],["n",-52,ln,-84,-48,-82,"grab"],["n",-49.6,ln,-82.6,-52,-84],["f",-53.6,ln,-80.6,-50,-83],["e",-66,Pt,-90,-66,-70,"walk"],["n",-75.4,Ui,-78,-78,-80,"grab"]],lab:[["\u51FA\u96A7\u9053\u53F3\u5F2F\u8FDB\u6D1E\uFF1A\u8F68\u9053\u5C3D\u5934\uFF0C\u5217\u8F66\u505C\u9760\u5904",-58.2,13,-62.6,"mk"],["\u521A\u8FDB\u6765\u7684\u5730\u65B9\u672C\u8EAB\u662F\u9AD8\u5730\uFF1A\u7B2C\u4E00\u6B21\u770B\u6E05\u6574\u4E2A\u77FF\u6D1E",-58,14,-66,"note"],["\u6D1E\u9AD8\u7EA6 8m\uFF0C\u538B\u6291\u4F46\u6709\u9AD8\u4F4E\u5DEE",-64,12.6,-100,"note"]],cam:oi([-52.6,12.8,-58.8],[-60,6.5,-86],60)},{p:As,pl:[-72.5,-61.5],pose:"grab",mode:rr,u:[["e",-62.2,he,-61.5,-67.6,-59.9],["n",-74.6,Pt,-68.6,-76.6,-70.6,"grab"],["n",-58.6,Pt,-69.6,-58.4,-67,"grab"],["n",-52,ln,-84,-48,-82,"grab"],["n",-49.6,ln,-82.6,-52,-84],["f",-53.6,ln,-80.6,-50,-83],["n",-75.4,Ui,-78,-78,-80,"grab"],["e",-66,Pt,-90,-66,-70,"walk"]],lab:[["\u88AB\u6D3E\u5230\u5DE6\u4FA7\u6316\u77FF\uFF0C\u5B88\u536B\u5728\u8EAB\u540E\u770B\u7740",-68.6,12.4,-61.2,"warn"],["\u5DE6\u4FA7\uFF1A\u5BBD\uFF0C\u6709\u77FF\u8F66\u8F68\u9053",-66.5,9.2,-92,"item"],["\u518D\u5DE6\uFF1A\u77EE\u4E00\u4E9B\u7684\u9AD8\u53F0\uFF0C\u6728\u677F\u6865\u8FDE\u8FC7\u53BB\uFF0C\u7F13\u5761\u548C\u6728\u68AF\u4E0B\u5230\u6D1E\u5E95",-78.5,12.8,-76,"note"],["\u4E2D\u90E8\u9AD8\u53F0\uFF08\u6700\u9AD8\uFF09\uFF1A\u51E0\u4E2A\u5DE5\u4EBA\u548C\u4E00\u4E2A\u76D1\u5DE5",-51.5,14,-82,"mk"],["\u53F3\u8FB9\uFF1A\u8F83\u7A84\u7684\u5C0F\u8DEF",-43.2,9,-96,"item"],["\u9AD8\u5730\u4E1C\u5317\u4E00\u9053\u7F13\u5761\u4E0B\u5230\u6D1E\u5E95",-50.4,10.9,-66,"note"]],cam:lo(As,[-66,-84],{back:1.2,up:3.2,ahead:14,tUp:-1.6,side:2,fov:60})},{p:[-65.8,Pt,-73.6],pl:[-66,-60],pose:"push",mode:tn,path:[[-67.6,he,-59.9],[-65.2,he,-62.4],[-65.8,he,-63.6],[-61.3,Pt,-68.5],[-63.8,Pt,-71.6],[-65.8,Pt,-73.6]],u:[["e",-60.4,Pt,-79.6,-65.8,-73.6,"talk"],["e",-62.2,he,-61.5,-66,-66]],ar:[[[-66.4,Pt+.6,-72.6],[-75.4,Pt+.6,-62.6],"move"],[[-66.8,Pt+.6,-76.4],[-66.6,Pt+.6,-98],"alt"],[[-60.4,Pt+1.6,-79.6],[-65.8,Pt+1.2,-73.6],"look"]],fx:[["ring",-62.2,he,-61.5,7,"#E7A537"]],lab:[["\u88AB\u5B88\u536B\u53EB\u53BB\u63A8\u8F66\uFF1A\u76EE\u7684\u5730\u660E\u663E\u504F\u79BB\u76EE\u6807",-71,9.4,-63,"warn"],["\u534A\u8DEF\u8D81\u5B88\u536B\u4E0D\u6CE8\u610F\u6E9C\u53F7",-66.6,9,-94,"item"],["\u5F53\u7740\u5B88\u536B\u62D2\u7EDD\u5E72\u6D3B\u6216\u79BB\u5C97\uFF1A\u8B66\u544A \u2192 \u653B\u51FB \u2192 \u5F00\u6218",-62.2,14,-61.5,"warn"],["\u8D3F\u8D42\uFF0C\u6216\u7B49\u5B88\u536B\u53BB\u7BA1\u522B\u7684\u4E8B\u518D\u6E9C",-54,12.2,-62,"note"]],cam:{t:[-64,6,-73],r:45,ph:.8,th:.62,fov:36}},{p:[-50,ln,-80.4],pl:[-52,-83.4],pose:"talk",mode:tn,path:[[-65.8,Pt,-73.6],[-65.9,Pt,-77.9],[-69.3,Ui,-72.6],[-70.2,Ui,-73.4],[-71.2,Ui,-77.6],[-71.4,Ui,-79.8],[-54.4,ln,-83.2],[-50,ln,-80.4]],u:[["n",-52,ln,-84,-50,-80.4,"talk"],["n",-49,ln,-83.6,-50,-80.4],["f",-53.8,ln,-78.6,-50,-80.4],["n",-48.2,ln,-86.4,-49.6,-84,"grab"]],ar:[[[-56.4,ln+.3,-83],[-70.4,Ui+.3,-80],"alt"],[[-72.6,Ui+.3,-84.6],[-70.2,Pt+.4,-91.4],"alt"],[[-70.2,Pt+.4,-91.4],[-66,Pt+.4,-100],"alt"],[[-66,Pt+.4,-100],[-64.8,Pt+.4,-111.6],"alt"],[[-64.8,Pt+.4,-111.6],[-55,Pt+.4,-119],"alt"],[[-46.4,ln+.3,-80.4],[-42.8,8.9,-80.2],"alt"],[[-42.8,8.9,-80.8],[-43.2,Pt+.4,-86.6],"alt"],[[-43.2,Pt+.4,-86.6],[-43.6,Pt+.4,-100],"alt"],[[-43.6,Pt+.4,-100],[-48,Pt+.4,-119],"alt"]],lab:[["\u4E2D\u90E8\u9AD8\u53F0\uFF1A\u5411\u5DE5\u4EBA\u8FDB\u4E00\u6B65\u6253\u63A2",-51,13.8,-82,"mk"],["\u5DE6\uFF1A\u8FC7\u6865\u4ECE\u7F13\u5761\u4E0B\u53BB\uFF0C\u6CBF\u77FF\u8F66\u8F68\u9053\u6E9C\u8FC7\u53BB",-67,8.8,-104,"item"],["\u53F3\uFF1A\u8D70\u6728\u68AF\u4E0B\u53BB\uFF0C\u8D70\u8F83\u7A84\u7684\u5C0F\u8DEF",-42.8,8.8,-104,"item"],["\u4E24\u6761\u8DEF\u5728\u524D\u65B9\u7684\u5DE5\u4EBA\u805A\u96C6\u5904\u6C47\u5408",-51,9.6,-121,"mk"]],cam:{t:[-55,6,-97],r:56,ph:.78,th:.28,fov:36}},{p:[-38.8,Pt,-121.4],pl:[-34,-122],pose:"push",mode:tn,path:[[-50,ln,-80.4],[-46.2,ln,-80.4],[-42.7,8.6,-80],[-43.2,Pt,-86.3],[-43.8,Pt,-100],[-45.6,Pt,-113],[-46.8,Pt,-120.2],[-42.4,Pt,-121.4],[-38.8,Pt,-121.4]],u:[["n",-48.6,Pt,-124.4,-46,-121,"talk"],["n",-50.4,Pt,-122.6,-46,-121],["e",-60.4,Pt,-130.6,-58,-110],["e",-56,Pt,-131,-56,-110],["e",-58,Pt,-128.2,-52,-115,"walk"]],lab:[["\u4EA4\u6C47\u5904\u7684\u5DE5\u4EBA\uFF1A\u51B3\u5B9A\u6027\u7684\u7EBF\u7D22\u2014\u2014\u6DF1\u5904\u6709\u4E00\u4E2A\u673A\u5173",-49.4,8.9,-123.6,"mk"],["\u7981\u5730\u6B63\u95E8\uFF1A\u51E0\u540D\u5B88\u536B\u770B\u5B88",-58,13.2,-133.4,"warn"],["\u504F\u50FB\u7684\u89D2\u843D\uFF1A\u673A\u5173",-36.8,8.6,-120,"item"],["\u6253\u5F00\u673A\u5173\uFF1A\u79D8\u5BC6\u77FF\u9053\u5165\u53E3",-33.6,9,-123.6,"item"]],cam:{t:[-47,6,-125],r:40,ph:.86,th:.28,fov:38}},{p:[_t.J1[0]-.8,_t.J1[1]+.02,_t.J1[2]-.4],pl:[_t.f1[0],_t.f1[2]],mode:tn,path:[...vf("S","s1","J1").slice(0,-1),[_t.J1[0]-.8,_t.J1[1]+.02,_t.J1[2]-.4]],ar:[[[_t.J1[0]+.6,_t.J1[1]+.4,_t.J1[2]+.2],[_t.f1[0],_t.f1[1]+.4,_t.f1[2]],"look"],[[_t.J1[0]-.4,_t.J1[1]+.4,_t.J1[2]-1.2],[_t.a1[0],_t.a1[1]+.4,_t.a1[2]],"alt"]],lab:[["\u6B63\u524D\u65B9\uFF1A\u5FEB\u7EBF\uFF08\u4E0A\u5761\uFF09",_t.f1[0]+1.4,_t.f1[1]+4.2,_t.f1[2],"item"],["\u4FA7\u540E\u65B9\uFF1A\u66F4\u957F\u7684\u989D\u5916\u8DEF\u7EBF\uFF08\u4E0B\u5761\uFF09",_t.a1[0]-.6,_t.a1[1]+4.6,_t.a1[2]-.8,"note"],["\u5165\u53E3\u53F0\u9636\uFF1A\u4ECE\u6697\u95E8\u4E0B\u5230\u7B2C\u4E00\u4E2A\u8154\u5BA4",_t.s1[0],_t.s1[1]+4.4,_t.s1[2]+1.4,"note"],["\u5165\u53E3\u6302\u77FF\u706F\u4F5C\u53C2\u7167",_t.J1[0]+2.6,_t.J1[1]+3.6,_t.J1[2]+2.2,"note"]],cam:{t:[_t.J1[0]-.5,_t.J1[1],_t.J1[2]-1.5],r:46,ph:.42,th:.3,fov:38}},{p:ch("d1"),pl:[_t.e1[0],_t.e1[2]],pose:"fall",mode:tn,path:[...vf("J1","a1","D1"),[_t.D1x[0],_t.D1x[1]+.02,_t.D1x[2],1],...av(vf("d1","e1","M1","e2","R1","x3a","x3b","M2","x3c","c3"))],lab:[["\u5355\u5411\u843D\u5DEE\uFF1A\u4ECE\u4E0B\u9762\u51E0\u4E4E\u53D1\u73B0\u4E0D\u4E86\u8FD9\u91CC\u6709\u8DEF\uFF08\u6697\u3001\u7EA6 2m \u9AD8\u5DEE\uFF09",_t.D1[0]-1.2,_t.D1[1]+4.6,_t.D1[2]-.6,"warn"],["\u8154\u5BA4\uFF1A\u6B47\u811A\u5904\uFF0C\u5C0F\u5C94\u6D1E\u662F\u6B7B\u8DEF",_t.M1[0],_t.M1[1]+5.2,_t.M1[2],"note"],["\u5956\u52B1\u8154\u5BA4",_t.R1[0],_t.R1[1]+5.4,_t.R1[2],"item"],["\u4E0B\u5761\uFF1A\u79BB\u51FA\u53E3\u8D8A\u6765\u8D8A\u8FDC",_t.e2[0]-.6,_t.e2[1]+4.2,_t.e2[2]+.4,"note"],["\u9661\u5761\u4E0A\u884C\uFF0C\u4ECE\u5FEB\u7EBF\u4E0B\u9762\u7A7F\u8FC7",_t.x3b[0]+.4,_t.x3b[1]+4.6,_t.x3b[2]-2.2,"note"],["\u7ED5\u5CA9\u67F1\u7684\u8154\u5BA4",_t.M2[0],_t.M2[1]+5.4,_t.M2[2],"note"],["\u6B7B\u8DEF\uFF08\u4E0B\u5761\uFF0C\u584C\u843D\u7684\u788E\u77F3\u6321\u4E86\u4E00\u534A\uFF09",_t.R2[0],_t.R2[1]+4.4,_t.R2[2],"note"]],cam:{t:[-12,-1,-119],r:74,ph:.58,th:.16,fov:36}},{p:ch("C"),pl:[_t.X[0],_t.X[2]],pose:"walk",mode:tn,path:[ch("c3"),[-5.3,+(_t.c3[1]+.02).toFixed(2),-94.2],ch("C")],ar:[[[_t.J3[0]-.4,_t.J3[1]+.5,_t.J3[2]+1],[_t.C[0]+1.3,_t.C[1]+.5,_t.C[2]-2.4],"alt"],[[_t.C[0]+1.2,_t.C[1]+.4,_t.C[2]+.8],[_t.X[0]-1.4,_t.X[1]+.4,_t.X[2]-.6],"look"]],lab:[["\u4EA4\u6C47\u70B9\uFF1A\u5FEB\u7EBF\u548C\u989D\u5916\u8DEF\u7EBF\u5728\u8FD9\u4E2A\u8154\u5BA4\u6C47\u5408",_t.C[0]-.6,_t.C[1]+5.6,_t.C[2]+.4,"mk"],["\u552F\u4E00\u7684\u51FA\u53E3\uFF1A\u5929\u7136\u6D1E\u7A74",_t.X[0]-1,_t.X[1]+3.8,_t.X[2],"item"],["\u989D\u5916\u8DEF\u7EBF\u7684\u51FA\u53E3\uFF1A\u8EB2\u5728\u5CA9\u7247\u540E\u9762\u3001\u4E0D\u6302\u706F\uFF0C\u4ECE\u5385\u91CC\u770B\u4E0D\u5230\uFF0C\u8D70\u51FA\u6765\u624D\u77E5\u9053\uFF08\u8F6F\u6027\u5355\u5411\u95E8\uFF09",_t.c3[0]-1.2,_t.c3[1]+3.6,_t.c3[2]+.4,"note"],["\u5FEB\u7EBF\u7684\u51FA\u53E3",_t.J3[0],_t.J3[1]+3.6,_t.J3[2],"note"]],cam:{t:[_t.C[0]+2.4,_t.C[1]+.6,_t.C[2]-1.2],r:36,ph:.66,th:.26,fov:38}},{p:or,pl:[40,-92],pose:"crouch",mode:rr,u:[["e",20.2,3.02,-86.6,30,-84],["e",21.8,3.02,-85.8,30,-84],["e",52,3.02,-80.2,40,-78,"walk"],["e",50.4,3.02,-77.4,40,-77,"walk"],["e",53.8,3.02,-75.6,40,-76,"walk"],...ah(14,-88)],lab:[["\u663E\u773C\u7684\u673A\u5173\uFF1A\u6BD4\u73A9\u5BB6\u9AD8\u4E0D\u5C11\uFF0C\u8DF3\u4E0D\u4E0A\u53BB",pt.SH.x,pt.SH.y+4.6,pt.SH.z,"mk"],["8m\xD78m \u5C0F\u7A7A\u5730\uFF1A\u4E24\u4E2A\u5B88\u536B\u62B1\u7740\u9152\u7F50\uFF0C\u80CC\u5BF9\u73A9\u5BB6",21,6.4,-86.2,"warn"],["\u540A\u6865 \u2192 4m\xD74m \u77F3\u53F0 \u2192 \u540A\u6865",31.5,7,-77.5,"item"],["\u9AD8\u4EAE\u7684\u4E8C\u5C42\u5EFA\u7B51\uFF1A\u5D4C\u5728\u5CA9\u58C1\u91CC\uFF0C\u524D\u9762\u662F 15m\xD725m \u5E73\u53F0",57.4,13.8,-86,"item"],["\u4E09\u4E2A\u5B88\u536B\u4ECE\u8FDC\u5904\u8D70\u8FC7\u6765",52,6.6,-78,"warn"],["\u5DE6\u4FA7\u8FDC\u5904\u8F83\u4F4E\u7684\u5E73\u53F0\uFF0C\u6CA1\u6709\u9AD8\u4EAE",46.5,3.4,-116,"note"],["\u6700\u53F3\u4FA7\uFF1A\u7011\u5E03",57.4,15.6,-60.4,"note"]],vars:{goal:{lab:[["\u957F\u671F\u76EE\u6807\uFF1A\u663E\u773C\u7684\u673A\u5173",pt.SH.x,pt.SH.y+4.6,pt.SH.z,"mk"],["\u4E0B\u4E00\u6B65\uFF1A\u8FC7\u6865\u8FDB\u90A3\u5EA7\u5EFA\u7B51",57.4,13.8,-86,"item"],["\u8DEF\u7EBF\uFF1A\u540A\u6865 \u2192 \u77F3\u53F0 \u2192 \u540A\u6865",31.5,7,-77.5,"item"]],ar:[[[14,7.6,-88],[24,3.6,-84.2],"look"],[[30.6,4.6,-78.4],[45.4,3.2,-77.5],"look"],[[45.8,3.2,-79],[57.6,4,-86],"look"]]},risk:{lab:[["\u6321\u4F4F\u53BB\u8DEF\u7684\u5B88\u536B\uFF1A\u5C0F\u7A7A\u5730\u4E24\u4E2A",21,6.4,-86.2,"warn"],["\u5E73\u53F0\u4E0A\u4E09\u4E2A\uFF0C\u6B63\u8D70\u8FC7\u6765",52,6.6,-78,"warn"],["\u673A\u5173\u5E73\u53F0\u4E0A\u7684\u8FDC\u7A0B\u5175\uFF1A\u4E00\u5F00\u6218\u5C31\u4ECE\u9AD8\u5904\u653B\u51FB",28.6,pt.SH.up+2,-99.4,"warn"],["\u5E73\u53F0\u4EE5\u5916\u5230\u6D1E\u5E95\u81F3\u5C11\u5341\u591A\u7C73\uFF1A\u6389\u4E0B\u53BB\u5FC5\u6B7B",32,-3.2,-90,"warn"]]},tool:{lab:[["\u53EF\u4EE5\u7528\u706B\u6253\u788E\u5E76\u5F15\u71C3\u7684\u9152\u7F50",21,6.4,-86.2,"item"],["\u6613\u788E\u3001\u53EF\u70E7\u65AD\u7684\u540A\u6865\uFF08\u5B88\u536B\u6B63\u5728\u6865\u4E0A\u8D70\uFF09",39.4,6.2,-77.5,"item"],["\u6865\u4E0B\u7684\u6DF1\u6E0A",36,-3.8,-84,"item"],["\u6865\u70E7\u65AD\u4E5F\u4E0D\u6321\u73A9\u5BB6\uFF1A\u8DF3\u5230\u6865\u4E0B\u7684\u77EE\u77F3\u7B0B\u4E0A\uFF0C\u62C9\u7740\u7EF3\u5B50\u722C\u4E0A\u5BF9\u9762",28.7,5.4,-82.6,"note"]],fx:[["fire",21,3.2,-86.2,.7]]},live:{lab:[["\u52A8\uFF1A\u7011\u5E03",57.4,15.6,-60.4,"note"],["\u52A8\uFF1A\u8D70\u8FC7\u6765\u7684\u5B88\u536B",52,6.6,-78,"note"],["\u9759\uFF1A\u673A\u5173\u3001\u5EFA\u7B51\u3001\u6865",pt.SH.x,pt.SH.y+4.6,pt.SH.z,"note"]]}},cam:oi([7.6,11.2,-85.2],[37.3,10.4,-89.4],60)},{p:[18.8,3.02,-89.2],pl:[21,-86.2],pose:"cast",mode:tn,path:[[or[0],or[1],or[2]],[14.2,7.02,-90.2],[15,7.02,-91.3],[16.2,6.5,-91.6,1],[17.3,4.6,-91.4,1],[18,3.02,-91,1],[18.8,3.02,-89.2]],u:[["e",21.6,3.02,-84.4,18,-88,"burn"],["e",23,3.02,-86.8,18,-88,"burn"],["e",38.6,3,-77.5,30,-77.5,"fall"],["e",42,2.72,-77.6,30,-77.5,"walk"],["e",47.2,2.52,-79.6,30,-77.5,"walk"],...ah(18.8,-89.2,"aim")],fx:[["fire",21,3.2,-86.2,1.4],["fire",36.4,3.3,-77.5,.9],["puff",21,4.4,-86.2,1.6]],ar:[[[18.8,4.6,-89.2],[21,4,-86.2],"fire"],[[38.6,2.4,-77.5],[38.6,-6.6,-79],"move"],[[32.2,pt.SH.up+1.6,-97.2],[19.4,4.4,-89.8],"atk"],[[33.6,pt.SH.up+1.6,-90.6],[19.6,4.4,-88.8],"atk"],[[22.9,-6.9,-76.4],[21.8,-6.3,-78.2],"alt"],[[21.8,-6.3,-78.2],[20.6,-4.3,-79.7],"alt"],[[20.4,-4,-79.9],[20.3,3.3,-81.2],"alt"],[[7.9,7.4,-84.6],[11.5,5.7,-80.4],"alt"],[[11.5,5.7,-80.4],[15.6,4.4,-79.9],"alt"],[[15.6,4.4,-79.9],[18.4,3.4,-82.2],"alt"]],lab:[["\u5F00\u6218\uFF1A\u673A\u5173\u5E73\u53F0\u4E0A\u7684\u8FDC\u7A0B\u5175\u4ECE\u9AD8\u5904\u653B\u51FB",30.6,pt.SH.up+1.7,-92.6,"warn"],["\u7528\u706B\u6253\u788E\u5E76\u5F15\u71C3\u9152\u7F50",21,6.6,-86.2,"item"],["\u70E7\u65AD\u540A\u6865\uFF1A\u6865\u4E0A\u7684\u5B88\u536B\u6389\u8FDB\u6DF1\u6E0A",37.4,6.8,-77.5,"warn"],["\u6389\u4E0B\u53BB\uFF1A\u654C\u4EBA\u5FC5\u6B7B\uFF1B\u73A9\u5BB6\u8E29\u7740\u9732\u51FA\u6C34\u9762\u7684\u77F3\u7B0B\u3001\u62C9\u7740\u7EF3\u5B50\u722C\u56DE\u6765",21.6,-3.4,-76.4,"note"],["\u51FA\u53E3\u5E73\u53F0\u5206\u4E24\u5C42\uFF1A\u5DE6\u4FA7\u7F13\u5761\u6B63\u5E38\u8D70\u4E0B\u53BB",10.6,8.2,-79.4,"note"],["\u4E5F\u53EF\u4EE5\u4ECE\u4E0A\u5C42\u5317\u6CBF\u76F4\u63A5\u8DF3\u4E0B\u53BB\uFF08\u7EA6 4m\uFF09",16.2,9.4,-93,"note"]],cam:{t:[31,2,-82],r:46,ph:.9,th:.12,fov:38}},{p:[47.4,2.52,-92],pl:[46.4,-122],mode:rr,path:[[18.8,3.02,-89.2],[23.4,3.02,-84.8],[27.3,3.3,-81.3],[30.6,4.02,-78.4],[31.6,4.02,-77.5],[33.6,4.02,-77.5],[39.4,2.9,-77.5],[45,2.52,-77.5],[46.6,2.52,-81],[47.4,2.52,-92]],u:[["e",52.4,2.52,-88.2,47,-92,"down"],["e",54.6,3.02,-83.6,47,-92,"down"],["e",50.2,2.52,-95.2,47,-92,"down"],...ah(47.4,-92,"aim")],lab:[["\u7279\u522B\u663E\u773C\u3001\u4F46\u660E\u663E\u5173\u7740\u7684\u5927\u95E8\uFF0C\u95E8\u53E3\u6709\u706F",pt.DOOR.x,7.6,pt.DOOR.z+.8,"item"],["\u95E8\u7684\u4E0A\u65B9\uFF1A\u60AC\u5D16\u8FB9\u7684\u8DEF\uFF0C\u4E00\u5934\u901A\u5230\u5EFA\u7B51\uFF0C\u4E00\u5934\u901A\u5230\u5DE6\u4FA7\u5E73\u53F0",53,12.6,-121.6,"note"],["\u5DE6\u4FA7\u5E73\u53F0\uFF08\u6BD4\u673A\u5173\u4F4E 5m\uFF09\uFF0C\u4E0A\u9762\u8FD8\u6709\u4E00\u5EA7\u5D4C\u8FDB\u5CA9\u58C1\u7684\u5EFA\u7B51",31.8,15.6,-120,"note"],["\u6808\u9053\u697C\u68AF\u722C\u4E0A\u673A\u5173\u6240\u5728\u7684\u5E73\u53F0\uFF08\u4ECE\u4E0B\u9762\u8DF3\u4E0D\u4E0A\u53BB\uFF09",(rh[0]+oh[0])/2,15.6,(rh[1]+oh[1])/2,"item"]],cam:lo([47.4,2.52,-89.4],[44.6,-122],{back:3.4,up:2.8,ahead:14,tUp:4.2,side:.9,fov:60})},{p:Ni,pl:[pt.SH.wx,pt.SH.z],pose:"push",mode:tn,path:[[47.4,2.52,-92],[pt.B1.fx-.4,3.02,-86],[60.2,3.02,-88.4],[60.3,3.02,-91.4],[61,3.02,-92.15],[pt.B1.ST.x1,pt.B1.f2+.02,-92.15],[68,7.02,-92.3],[67.4,7.12,-97.2],[61.4,7.32,-100.4],...sv,[36.6,10.02,-118.4],[rh[0],10.02,rh[1]],[oh[0],ws.yb+.02,oh[1]],Ni],u:[["e",31.4,10.02,-121.6,34,-116,"down"],["e",30,10.02,-116.4,36,-116,"down"],["e",62.8,3.02,-87.6,50,-86,"down"],...ah(31,-94,"down")],ar:[[[Ni[0],Ni[1]+1.6,Ni[2]],[pt.DOOR.x,3.4,pt.DOOR.z+.8],"look"],...rv],lab:[["\u4E24\u5C42\u534A\u5F00\u653E\u5EFA\u7B51\uFF1A\u8FDB\u95E8\u5DE6\u624B\u8FB9\u7684\u697C\u68AF\u76F4\u4E0A\u4E8C\u5C42\uFF0C\u51FA\u53E3\u7684\u95E8\u5C31\u5728\u697C\u68AF\u53E3",65,13.4,-88.6,"note"],["\u4E8C\u5C42\u51FA\u53E3 \u2192 \u5D16\u8FB9\u7684\u8DEF\uFF08\u7EA6 25m\uFF09",59.4,12.6,-109,"item"],["\u5DE6\u4FA7\u5E73\u53F0\u548C\u5EFA\u7B51\u91CC\u7684\u654C\u4EBA\uFF1A\u6253\u4E0D\u6253\u53EF\u9009",31.4,15.2,-117,"note"],["\u957F\u6309\u64CD\u7EB5\u673A\u5173\uFF08\u5148\u89E3\u51B3\u5E73\u53F0\u4E0A\u7684\u8FDC\u7A0B\u5175\uFF09",pt.SH.x,pt.SH.y+4.2,pt.SH.z,"mk"],["\u4ECE\u673A\u5173\u7684\u4F4D\u7F6E\u6B63\u597D\u770B\u5230\u5927\u95E8\u6253\u5F00",pt.DOOR.x,8.2,pt.DOOR.z+.8,"item"],["\u4E0B\u964D\u6ED1\u7D22\uFF1A\u673A\u5173\u5E73\u53F0 \u2192 \u95E8\u524D\uFF08\u7EA6 26m\uFF09",41.8,14.6,-108.6,"item"],["\u8DEF\u65AD\u4E86\u4E00\u622A\uFF1A\u8DF3\u8FC7\u53BB",60,10.8,-108,"note"]],cam:{t:[45,4,-104],r:70,ph:.74,th:-.36,fov:38}},{p:[Ze.D2[0]+.6,Ze.D2[1]+.02,Ze.D2[2]+1.2],pl:[Ze.ex1[0],Ze.ex1[2]],pose:"walk",mode:tn,path:[[pt.DOOR.x,.02,pt.DOOR.z+1.4],[pt.DOOR.x,.02,pt.DOOR.z-2],...Mf("N0","K1","K2","D2").slice(0,-1),[Ze.D2[0]+.6,Ze.D2[1]+.02,Ze.D2[2]+1.2]],lab:[["\u77FF\u706F\u6807\u51FA\u6B63\u786E\u7684\u8DEF",Ze.K1[0]+1.6,4.2,Ze.K1[2],"item"],["\u6CA1\u6302\u706F\u7684\u5C94\u8DEF",Ze.w2[0],3.8,Ze.w2[2],"note"],["\u6CA1\u6302\u706F\u7684\u5C94\u8DEF",Ze.e2[0],3.8,Ze.e2[2],"note"],["\u663E\u773C\u7684\u95E8",Ze.D2[0]+1.6,4.4,Ze.D2[2]-2.6,"mk"]],cam:{t:[44,1,-142],r:42,ph:.64,th:.3,fov:36}},{p:[ae.x1-6.8,ae.y+.02,-150.6],pl:[ae.x1-11.4,-151],mode:tn,path:[[Ze.D2[0]+.6,Ze.D2[1]+.02,Ze.D2[2]+1.2],...Mf("D2","h1"),[ae.x1-2.4,.02,-148.6],[ae.x1-6.8,.02,-150.6]],u:[["s",ae.x1-5,.02,-149,ae.x1-6.8,-150.6,"talk"],["e",ae.x1-12.8,.02,-152.4,ae.x1-6.8,-150.6,"aim"],["e",ae.x1-14,.02,-149.6,ae.x1-6.8,-150.6]],lab:[["\u88AB\u4E00\u4E2A\u4EBA\u62C9\u8FDB\u9690\u853D\u3001\u7A7A\u95F4\u8F83\u5927\u7684\u5730\u65B9",ae.x1-5,4.2,-149,"mk"],["\u7EA6 3 \u5206\u949F\u5267\u60C5 + \u4E00\u573A\u6559\u5B66\u6027\u8D28\u7684\u6218\u6597",ae.x1-12.8,4.4,-153,"note"]],cam:{t:[(ae.x0+ae.x1)/2,1,-151.5],r:34,ph:.74,th:.38,fov:36}},{p:[77.4,be(77.4,-167.4),-167.4],pl:[94,-164],pose:"walk",mode:Ei,path:[[Ze.D2[0]+.6,Ze.D2[1]+.02,Ze.D2[2]+1.2],...Mf("D2","ex1","ex2"),...[44.6,48.5,52.9,57,61,65].map(n=>[n,+(yi(n)+.06).toFixed(2),+xa(n).toFixed(2)]),[68.4,be(68.4,-169.2),-169.2],[72,be(72,-170.6),-170.6],[75.4,be(75.4,-169),-169],[77.4,be(77.4,-167.4),-167.4]],u:[["s",79.4,be(79.4,-165.6),-165.6,94,-164,"walk"]],lab:[["\u8D34\u7740\u5D16\u8FB9\u7684\u6808\u9053\u8D70 20\u201330m\uFF0C\u5916\u9762\u662F\u5C71\u8C37",55,3.6,-164.6,"note"],["\u7ED5\u8FC7\u4E00\u5757\u5927\u5CA9\u77F3\uFF0C\u4ECE\u77F3\u9636\u4E0B\u53BB",71.2,7.4,-171.4,"item"],["\u5DE8\u5927\u7684\u6D1E\u53E3\u4E00\u4E0B\u5B50\u51FA\u73B0\u5728\u753B\u9762\u91CC",94,21,-166,"mk"]],cam:oi([64,6.5,-179.5],[88,8,-166],56)}];{let n=(t,e,i)=>{let s=so(t,i,e+1.4,2.8);return s==null?e:+(s+.02).toFixed(2)};for(let t of Te.slice(17,21)){t.p&&(t.p[1]=n(t.p[0],t.p[1],t.p[2]));for(let e of t.u||[])e[2]=n(e[1],e[2],e[3]);for(let e of t.path||[])e[3]||(e[1]=n(e[0],e[1],e[2]))}}for(let n of[Te[15],Te[16]])for(let t of n.path||[])if(!t[3]){let e=so(t[0],t[2],t[1]+1,3.6);e!=null&&(t[1]=+(e+.02).toFixed(2))}{let n=[bn.x,+(xe.y+bn.h/2).toFixed(2),bn.z],t=(l,h=2.6,u=.6,d=0)=>{let f=n[0]-l[0],g=n[2]-l[2],x=Math.hypot(f,g);return oi([+(l[0]-f/x*h-g/x*d).toFixed(2),+(l[1]+1.65+u).toFixed(2),+(l[2]-g/x*h+f/x*d).toFixed(2)],n,58)},e=(l,h,u)=>{let d=Te[l];d.vars={...d.vars||{},[h]:u}};for(let[l,h,u,d,f]of[[0,0,2.6,.6,0],[2,0,2.6,.6,0],[5,0,2.6,.6,0],[6,1,2,.9,.6]])e(l,"eye",{cam:t(Te[l].p,u,d,f),lab:[[h?"\u77FF\u6D1E\u5165\u53E3\uFF1A\u4E0A\u5230\u5E73\u5730\uFF0C\u4E00\u4E0B\u5B50\u5168\u770B\u5230":"\u77FF\u6D1E\u5165\u53E3\u5728\u8FD9\u91CC\uFF1A\u88AB\u6321\u4F4F\uFF0C\u770B\u4E0D\u5230",n[0],n[1]+4.2,n[2],h?"seen":"hid"]],fx:[...Te[l].fx||[],["xr",n[0],n[1],n[2],1.4,bn.h,bn.w,h?"#D2872C":"#D2452F"]]});let i=(l,h,u=2.6)=>{let d=Te[l].u[h];return[d[1],+(d[2]+u).toFixed(2),d[3]]},s=(l,h,u)=>[l,h[0],h[1],h[2],u];e(0,"mood",{lab:[s("\u62A4\u680F\u8FB9\uFF0C\u5B88\u536B\u7AD9\u5C97",i(0,4),"warn"),s("\u529E\u4E8B\u5458\u5728\u767B\u8BB0\u684C\u540E\u7B49\u7740",i(0,5),"note"),s("\u5DE5\u4EBA\u642C\u8FD0\u77FF\u77F3",i(0,6),"note")]}),e(1,"mood",{lab:[s("\u5B88\u536B\u50AC\u4FC3\u6392\u961F\u767B\u8BB0",i(1,4),"warn"),s("\u529E\u4E8B\u5458\uFF1A\u767B\u8BB0",i(1,0),"mk")]}),e(2,"mood",{lab:[s("\u5B88\u536B\u97AD\u6253\u5DE5\u4EBA",i(2,0),"warn"),s("\u5B88\u536B\u628A\u6B7B\u53BB\u5DE5\u4EBA\u7684\u5C38\u4F53\u62D6\u5230\u5CB8\u8FB9\u89D2\u843D\u6254\u6389",i(2,2),"warn")]}),e(3,"mood",{lab:[s("\u5DE5\u5934\u548C\u4E24\u4E2A\u5B88\u536B\u7AD9\u5728\u8FB9\u4E0A",i(3,0),"mk"),s("\u5DE5\u4EBA\u7A83\u7A83\u79C1\u8BED\uFF0C\u62C5\u5FC3\u91CC\u9762\u7684\u60C5\u51B5",i(3,4),"note")]}),e(4,"mood",{lab:Te[4].lab.slice(0,3)}),e(5,"mood",{lab:Te[5].lab.slice(0,1)}),e(7,"mood",{lab:Te[7].lab.slice(0,2)}),e(8,"mood",{lab:Te[8].lab.slice(0,2)});let r={t:[-64.2,8,-64.6],r:29,ph:.9,th:.6,fov:40};e(10,"work",{mode:tn,cam:r,lab:[s("\u5728\u5DE6\u4FA7\u6316\u77FF\uFF1A\u8FB9\u5E72\u6D3B\u8FB9\u548C\u8EAB\u8FB9\u7684\u5DE5\u4EBA\u642D\u8BDD",[As[0],As[1]+2.6,As[2]],"mk"),s("\u5B88\u536B\u5728\u8EAB\u540E\u770B\u7740",[-62.2,he+2.6,-61.5],"warn"),s("\u4E00\u8D77\u5E72\u6D3B\u7684\u5DE5\u4EBA",i(10,1),"note"),s("\u53EA\u5F97\u5230\u201C\u5F80\u6DF1\u5904\u8D70\u201D\u7684\u6307\u5F15",[-63.6,Pt+2.4,-78],"item")],ar:[[[As[0]+.6,As[1]+.5,As[2]-1.4],[-63.6,Pt+.6,-78],"look"]]}),e(10,"mood",{mode:tn,cam:r,u:[...Te[10].u,["e",-60.4,Pt,-71.2,-58.6,-69.6,"slam"]],lab:[s("\u5B88\u536B\u5728\u8EAB\u540E\u770B\u7740\u73A9\u5BB6\u5E72\u6D3B",i(10,0),"warn"),s("\u5B88\u536B\u50AC\u4FC3\u52B3\u52A8\u3001\u8650\u5F85\u5DE5\u4EBA",[-60.4,Pt+2.6,-71.2],"warn"),s("\u4E00\u8D77\u5E72\u6D3B\u7684\u5DE5\u4EBA",i(10,1),"note")]});let o=[-62.2,he,-61.5],a=[[-65.2,he,-62.4],[-65.8,he,-63.6],[-61.3,Pt,-68.5]],c={t:[-64.6,8.6,-63.2],r:28,ph:.92,th:.62,fov:38};e(11,"cart",{lab:Te[11].lab.slice(0,2)}),e(11,"refuse",{p:[-65.6,he,-62.4],pl:[-64.4,-66],pose:"walk",mode:tn,cam:c,path:null,u:[["e",o[0],o[1],o[2],-65.6,-62.4,"aim"],["e",-57.4,he,-63.2,-64.6,-62.6,"run"],["n",-68.4,he,-59.4,-69.6,-58.4,"grab"]],ar:[[[o[0]-.4,o[1]+1.4,o[2]-.2],[-65.2,he+1.2,-62.2],"atk"],[[-57.4,he+.5,-63.2],[-62.6,he+.5,-63],"move"]],fx:[["ring",-65.6,he,-62.4,2.4,"#D2452F"]],lab:[s("\u5F53\u7740\u5B88\u536B\u62D2\u7EDD\u5E72\u6D3B\u3001\u79BB\u5F00\u5C97\u4F4D\uFF1A\u5148\u8B66\u544A",[o[0],he+2.6,o[2]],"warn"),s("\u518D\u72AF\uFF1A\u5B88\u536B\u653B\u51FB",[-65.6,he+2.5,-62.4],"warn"),s("\u518D\u53CD\u6297\uFF1A\u5F00\u6218\uFF08\u975E\u5E38\u89C4\u6218\u6597\uFF0C\u548C\u6253\u63A2\u6D41\u7A0B\u5206\u5F00\u6807\u6CE8\uFF09",[-57.4,he+2.6,-63.2],"warn")]}),e(11,"bribe",{p:[-63.6,he,-61],pl:[o[0],o[2]],pose:"talk",mode:tn,cam:c,path:[[-63.6,he,-61],...a,[-62.6,Pt,-74.4]],u:[["e",o[0],o[1],o[2],-63.6,-61,"talk"],["n",-68.4,he,-59.4,-69.6,-58.4,"grab"]],ar:[],fx:[],lab:[s("\u8D3F\u8D42\u5B88\u536B\uFF1A\u653E\u884C",[o[0],he+2.6,o[2]],"item"),s("\u7528\u4EE3\u4EF7\u6362\u8DEF\u7EBF\uFF0C\u4E0D\u7528\u6253",[-62.6,Pt+2.4,-74.4],"note")]}),e(11,"wait",{p:[-71.4,9.1,-63.8],pl:[-74.4,-67.6],pose:"walk",mode:tn,cam:{t:[-65.6,8.4,-64],r:30,ph:.9,th:.5,fov:38},path:[[-67.6,he,-59.9],[-68.6,he,-59.7],[-76.9,Ui,-71.2],[-75.6,Ui,-75.6]],u:[["e",-57.6,he,-60,-54,-58.8,"walk"],["n",-54,he,-58.8,-57.6,-60,"down"],["e",-52.8,he,-60.2,-54,-58.8,"slam"],["n",-68.4,he,-59.4,-69.6,-58.4,"grab"]],ar:[[[o[0],he+.5,o[2]],[-58.2,he+.5,-60.1],"move"]],fx:[],lab:[s("\u5B88\u536B\u88AB\u522B\u7684\u4E8B\u53EB\u8D70",[-57.6,he+2.6,-60],"warn"),s("\u8D81\u4ED6\u8F6C\u8EAB\uFF0C\u6E9C\u5230\u522B\u5904",[-72.8,10.8,-65.4],"item")]}),e(13,"meet",{p:[-46.8,Pt,-120.2],pl:[-49.4,-123.4],pose:"talk",cam:{t:[-50,6,-118.6],r:30,ph:.86,th:.12,fov:38},path:[[-43.8,Pt,-100],[-45.6,Pt,-113],[-46.8,Pt,-120.2]],ar:[[[-62.4,Pt+.4,-113.4],[-51.6,Pt+.4,-120.4],"alt"]],lab:[s("\u4EA4\u6C47\u5904\u7684\u5DE5\u4EBA\uFF1A\u51B3\u5B9A\u6027\u7684\u7EBF\u7D22\u2014\u2014\u6DF1\u5904\u6709\u4E00\u4E2A\u673A\u5173",[-49.4,Pt+3.2,-123.6],"mk"),s("\u5DE6\u8FB9\u6CBF\u77FF\u8F66\u8F68\u9053\u8FC7\u6765\u7684\u8DEF",[-60.6,Pt+2.4,-114.4],"note"),s("\u53F3\u8FB9\u8F83\u7A84\u7684\u5C0F\u8DEF",[-45.4,Pt+2.2,-111.5],"note"),s("\u7981\u5730\u6B63\u95E8\uFF1A\u51E0\u540D\u5B88\u536B\u770B\u5B88",[-58,Pt+7.6,-133.4],"warn")]})}{let n=(x,m,p)=>{let _=Te[x];_.vars={..._.vars||{},[m]:p}},t=(x,m,p,_,y,v,S)=>["xr",x,m,p,_,y,v,S?"#D2872C":"#D2452F"],e=(x,m,p={})=>{var A,b,M,C;let _=(A=p.back)!=null?A:2.6,y=(b=p.up)!=null?b:.7,v=(M=p.side)!=null?M:0,S=m[0]-x[0],T=m[2]-x[2],w=Math.hypot(S,T);return oi([+(x[0]-S/w*_-T/w*v).toFixed(2),+(x[1]+1.65+y).toFixed(2),+(x[2]-T/w*_+S/w*v).toFixed(2)],m,(C=p.fov)!=null?C:58)},i=[bn.x,+(xe.y+bn.h/2).toFixed(2),bn.z],s=(x,m)=>[x,i[0],i[1]+4.2,i[2],m];Te[0].vars.eye.lab=[s("\u77FF\u6D1E\u5165\u53E3\uFF1A\u88AB 6m \u9AD8\u5DEE\u3001\u5761\u9876\u7684\u5BC6\u6797\u548C\u529E\u516C\u5BA4\u6321\u4F4F","hid"),["\u62AC\u5934\u770B\u5F97\u5230\u5C71\u5B57\u5F62\u7684\u77FF\u5C71",-8,60,-108,"mk"]],Te[2].vars.eye.lab=[s("\u77FF\u6D1E\u5165\u53E3\uFF1A\u7AD9\u5728\u9AD8\u5DEE\u811A\u4E0B\uFF0C\u8FD8\u662F\u88AB\u6321\u4F4F","hid")],Te[5].vars.eye.lab=[s("\u77FF\u6D1E\u5165\u53E3\uFF1A\u8DEF\u5F2F\u3001\u6811\u5BC6\uFF0C\u8FD8\u770B\u4E0D\u5230","hid")];{let x=[-13.6,+(xe.y+.02).toFixed(2),7.4],m=Te[6].vars.eye;Object.assign(m,{p:x,pl:[i[0],i[2]],cam:e(x,[i[0],i[1]-.6,i[2]-4.4],{back:2.6,up:.9,side:.6,fov:58}),lab:[s("\u77FF\u6D1E\u5165\u53E3\uFF1A\u4E0A\u5230\u5E73\u5730\uFF0C\u4E00\u4E0B\u5B50\u5168\u770B\u5230","seen"),["\u8FD1\u5904\u7AD9\u53F0\uFF1A\u8F7D\u4EBA\u7684\u5217\u8F66",-7.5,15.6,Cn.pas,"item"],["\u4F20\u9001\u5E26\u7684\u53E6\u4E00\u5934\uFF1A\u5DE5\u4EBA\u628A\u77FF\u8FD0\u4E0A\u53BB",14.4,15.6,10.4,"note"]]})}let r=th(-44);n(8,"rv",{cam:oi([-5.4,13.5,-42.7],[-30,11.6,-39.8],62),ar:[],u:Te[8].u.filter(x=>x[6]!=="sit"||x[1]<-7.5),lab:[["\u4E24\u6B21\u8F6C\u5F2F\uFF1A\u770B\u4E0D\u5230\u96A7\u9053\u90A3\u5934",r[0],+(r[2]+3).toFixed(2),r[1],"hid"]]}),n(9,"rv",{lab:[["\u51FA\u96A7\u9053\u53F3\u8F6C\uFF1A\u521A\u8FDB\u6765\u7684\u5730\u65B9\u662F\u9AD8\u5730\uFF0C\u7B2C\u4E00\u6B21\u770B\u6E05\u6574\u4E2A\u77FF\u6D1E",-58,14,-66,"seen"],["\u6D1E\u9AD8\u7EA6 8m\uFF0C\u6709\u9AD8\u5730\u548C\u811A\u624B\u67B6\u5E73\u53F0",-64,12.6,-100,"note"]]});let o=[-46.8,Pt,-120.2],a=[Lt.gate.x,Pt+3,Lt.gate.z],c=[Lt.nook.x+3.6,Pt+1.5,Lt.nook.z],l=Te[13].u;n(13,"gate",{p:o,pl:[a[0],a[2]],pose:"",path:null,ar:[],at:12,u:l,mode:rr,cam:e(o,a,{back:3,up:.8,side:-.9,fov:54}),fx:[t(a[0],Pt+3.2,a[2]-.2,8,6.4,1.2,1)],lab:[["\u7981\u5730\u6B63\u95E8\uFF1A\u6253\u63A2\u4E2D\u9014\u5C31\u770B\u5F97\u5230",a[0],Pt+7.6,a[2],"seen"],["\u95E8\u524D\u51E0\u540D\u5B88\u536B\u770B\u5B88",-58,Pt+2.7,-129.6,"warn"]]}),n(13,"nook",{p:o,pl:[c[0],c[2]],pose:"",path:null,ar:[],at:12,u:l,mode:rr,cam:e(o,c,{back:3,up:.8,side:1.3,fov:54}),fx:[t(c[0],Pt+1.5,c[2],.8,3,2.8,0)],lab:[["\u673A\u5173\uFF1A\u85CF\u5728\u4EA4\u6C47\u5904\u4E0D\u8FDC\u7684\u504F\u50FB\u89D2\u843D",c[0],Pt+4.4,c[2],"hid"]]}),n(17,"rv",{lab:[["\u51FA\u53E3\u5728\u9AD8\u5904\u3001\u6709\u6742\u8349\u906E\u6321\uFF1A\u5B89\u5168\u5730\u770B\u6E05\u6574\u4E2A\u573A\u666F",or[0]+2.4,or[1]+2.2,or[2]-.8,"seen"],["\u4E0A\u4E0B\u7EA6 30m\uFF0C\u9876\u4E0A\u7684\u5B54\u6D1E\u900F\u8FDB\u81EA\u7136\u5149",52.4,24,-86,"note"]]});let h=[pt.DOOR.x,3.4,pt.DOOR.z+.8];n(20,"rv",{cam:oi([+(Ni[0]+1.47).toFixed(2),+(Ni[1]+2.5).toFixed(2),+(Ni[2]-2.3).toFixed(2)],h,54),path:null,noRoute:!0,u:[],ar:[],fx:[t(pt.DOOR.x,3.6,pt.DOOR.z+.6,7,7,1,1)],lab:[["\u4ECE\u64CD\u7EB5\u673A\u5173\u7684\u4F4D\u7F6E\uFF0C\u6B63\u597D\u770B\u5230\u5927\u95E8\u6253\u5F00",h[0],9.6,h[2],"seen"]]});let u=[94,10,-157.5],d=x=>[x,+(yi(x)+.06).toFixed(2),+xa(x).toFixed(2)],f=d(60),g=Te[23].p;n(23,"rv0",{p:f,pl:[u[0],u[2]],pose:"walk",path:null,ar:[],u:[["s",...d(63.6),94,-164,"walk"]],cam:oi([53,2.6,-162.4],[90,8,-160],56),fx:[],lab:[["\u7981\u5730\u7684\u6D1E\u53E3\uFF1A\u5728\u5927\u5CA9\u77F3\u540E\u9762\uFF0C\u8FD8\u770B\u4E0D\u5230",u[0],26,u[2],"hid"],["\u8D34\u7740\u5D16\u8FB9\u7684\u6808\u9053\uFF0C\u5916\u9762\u662F\u5C71\u8C37",55,2.6,-166,"note"]]}),n(23,"rv1",{p:g,pl:[u[0],u[2]],pose:"walk",path:null,ar:[],cam:oi([72.5,6.5,-176],[93,11,-159],60),fx:[],lab:[["\u7ED5\u8FC7\u5CA9\u77F3\uFF1A\u5DE8\u5927\u7684\u6D1E\u53E3\u4E00\u4E0B\u5B50\u51FA\u73B0\u5728\u753B\u9762\u91CC",u[0],26,u[2],"seen"]]})}for(let n of Te.slice(17,21)){n.fx=[...n.fx||[],["falls",0,0,0]];for(let t of Object.values(n.vars||{}))t.fx&&(t.fx=[...t.fx,["falls",0,0,0]])}var fh=(n,t={})=>new jn({color:n,roughness:.75,metalness:0,...t}),cv={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",ring:"#E7A537"},s:{H:1.72,body:"#3E7F86",head:"#E3BC93",limb:"#2F656B",ring:"#4FA3A8"},f:{H:1.76,body:"#6C8A9A",head:"#E3BC93",limb:"#556F7C",ring:"#4FA3A8"},n:{H:1.72,body:"#9A9184",head:"#D9C3A8",limb:"#807869",ring:"#B9B2A5"},e:{H:1.82,body:"#3A403E",head:"#56605C",limb:"#2C3230",ring:"#B5462F"},h:{H:2.25,body:"#2F3533",head:"#46504D",limb:"#232A28",club:"#6E5A45",ring:"#B5462F"},l:{H:1.95,body:"#5B2E2A",head:"#E3BC93",limb:"#3F211E",ring:"#B5462F"}};function dh(n){let t=cv[n],e=t.H,i=new ye,s=new ye;i.add(s),s.position.y=e*.5;let r=fh(t.body),o=fh(t.head),a=fh(t.limb),c=new Kt(new Wo(e*.13,e*.26,4,10),r);c.position.y=e*.2,s.add(c);let l=new Kt(new jo(e*.1,14,10),o);l.position.y=e*.44,s.add(l);let h=(p,_,y)=>{let v=new ye,S=new Kt(new Qn(p,_,p),y);return S.position.y=-_/2,v.add(S),v},u=h(e*.07,e*.34,a),d=h(e*.07,e*.34,a);u.position.set(-e*.17,e*.33,0),d.position.set(e*.17,e*.33,0);let f=h(e*.085,e*.46,a),g=h(e*.085,e*.46,a);if(f.position.set(-e*.07,0,0),g.position.set(e*.07,0,0),s.add(u,d,f,g),t.club){let p=new Kt(new Ri(e*.03,e*.05,e*.55,8),fh(t.club));p.position.set(0,-e*.34,e*.12),p.rotation.x=Math.PI/2.4,d.add(p)}let x=new Kt(new fs(e*.32,e*.42,28),new Ue({color:t.ring,transparent:!0,opacity:.85,depthWrite:!1}));x.rotation.x=-Math.PI/2,x.position.y=.04,x.renderOrder=2,i.add(x),i.traverse(p=>{p.isMesh&&p!==x&&(p.castShadow=!0,p.receiveShadow=!1)});let m={root:i,hips:s,torso:c,armL:u,armR:d,legL:f,legR:g,H:e,kind:n,ring:x,pose(p="idle",_=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let S of[u,d,f,g])S.rotation.set(0,0,0);let y=Math.sin(_*9),v=!1;switch(p){case"walk":{let S=Math.sin(_*5.5);f.rotation.x=.38*S,g.rotation.x=-.38*S,u.rotation.x=-.3*S,d.rotation.x=v?-.15:.3*S;break}case"run":s.rotation.x=.22,f.rotation.x=.7*y,g.rotation.x=-.7*y,u.rotation.x=-.6*y,d.rotation.x=v?-.3:.6*y;break;case"stumble":s.rotation.x=.5,f.rotation.x=.5*y,g.rotation.x=-.5*y,u.rotation.z=-1.1,d.rotation.z=1.1,s.position.y=e*.46;break;case"throw":d.rotation.x=-2.1,u.rotation.x=.5,f.rotation.x=-.35,g.rotation.x=.3;break;case"cast":u.rotation.set(-2.7,0,-.35),d.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,u.rotation.x=-3,d.rotation.x=-3;break;case"charge":s.rotation.x=.55,d.rotation.x=-1.35,u.rotation.x=-.6,f.rotation.x=.8*y,g.rotation.x=-.8*y;break;case"fly":s.rotation.x=.35,f.rotation.x=.7,g.rotation.x=.5,u.rotation.z=-.9,d.rotation.z=.9;break;case"fall":s.rotation.x=-.4,u.rotation.z=-2.2,d.rotation.z=2.2,f.rotation.x=-.6,g.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,u.rotation.z=-.5,d.rotation.z=.5,f.rotation.x=.1;break;case"grab":s.rotation.x=.3,u.rotation.x=-1.5,v?d.rotation.x=-1.5:d.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,f.rotation.x=.5,g.rotation.x=.2,u.rotation.z=-1.2,d.rotation.z=1.2,s.position.y=e*.62;break;case"burn":u.rotation.set(-.6+.4*y,0,-1.1),d.rotation.set(-.6-.4*y,0,1.1),s.rotation.z=.1*y;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,f.rotation.x=-.9,g.rotation.x=.6,u.rotation.z=-1;break;case"push":s.rotation.x=-.35,f.rotation.x=-.5,g.rotation.x=.4,u.rotation.x=-1.4,d.rotation.x=-1.4;break;case"crouch":s.position.y=e*.36,s.rotation.x=.35,f.rotation.x=-1.1,g.rotation.x=-.5,u.rotation.x=-.5,d.rotation.x=-.7;break;case"stab":s.rotation.x=.25,d.rotation.x=-1.6,u.rotation.x=-.9,f.rotation.x=-.5,g.rotation.x=.35;break;case"talk":d.rotation.set(-.7+.15*Math.sin(_*3),0,.2),u.rotation.z=-.1;break;case"aim":d.rotation.x=-1.5,u.rotation.x=-.3;break;case"sit":s.position.y=e*.2,f.rotation.x=-1.5,g.rotation.x=-1.5,u.rotation.x=-.4,d.rotation.x=-.4;break;default:u.rotation.z=-.08,d.rotation.z=.08}}};return m.pose("idle"),m}function ar(n=1.5,t=1,e={}){let i=new ye,s=new Ue({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new Ue({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(n*3.2));for(let a=0;a<o;a++){let c=a*2.39996+t,l=n*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new Kt(new us(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(c)*l,h/2,Math.sin(c)*l),u.userData.h=h,u.userData.k=a*1.7+t,i.add(u)}if(e.spot!==!1){let a=new Kt(new ks(n*1.15,28),new Ue({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.05,i.add(a)}return i.userData.tick=a=>{for(let c of i.children)c.userData.h&&(c.scale.y=.8+.35*Math.abs(Math.sin(a*6+c.userData.k)))},i}function ph(n=1){let t=new ye,e=new Ue({color:"#F4F1EA",transparent:!0,opacity:.55,depthWrite:!1});for(let i=0;i<6;i++){let s=new Kt(new mi(n*(.35+i%3*.12),1),e);s.position.set(Math.cos(i*2.2)*n*.4,n*(.2+i*.28),Math.sin(i*2.2)*n*.4),s.userData.k=i,t.add(s)}return t.userData.tick=i=>{for(let s of t.children)s.position.y=n*(.2+s.userData.k*.28)+.15*Math.sin(i*2+s.userData.k)},t}function Vm(n,t=[]){let e=new ye,i=3,s=new Float32Array(n.length*i*18),r=new qe;r.setAttribute("position",new Ve(s,3));let o=new Kt(r,new Ue({color:"#FFFFFF",transparent:!0,opacity:.8,depthWrite:!1,side:Mn}));o.frustumCulled=!1,e.add(o);let a=n.map(d=>{let f=[0];for(let g=1;g<d.length;g++)f.push(f[g-1]+Math.hypot(d[g][0]-d[g-1][0],d[g][1]-d[g-1][1],d[g][2]-d[g-1][2]));return f}),c=(d,f)=>{let g=n[d],x=a[d];f=Math.max(0,Math.min(x[x.length-1],f));let m=1;for(;m<x.length-1&&x[m]<f;)m++;let p=(f-x[m-1])/(x[m]-x[m-1]||1);return[0,1,2].map(_=>g[m-1][_]+(g[m][_]-g[m-1][_])*p)},l=new Ue({color:"#F4F8F8",transparent:!0,opacity:.28,depthWrite:!1}),h=[];for(let[d,f,g,x]of t)for(let m=0;m<4;m++){let p=new Kt(new mi(x*(.55+.15*m),1),l);p.position.set(d+Math.cos(m*2.3)*x*.5,f+m*x*.18,g+Math.sin(m*2.3)*x*.7),p.userData.k=m,e.add(p),h.push(p)}let u=d=>{let f=0;for(let g=0;g<n.length;g++){let x=a[g][a[g].length-1];for(let m=0;m<i;m++){let p=(d*5.5+g*1.37+m*x/i)%x,_=c(g,p),y=c(g,p+1.6),v=.12,S=[[_[0],_[1],_[2]-v],[_[0],_[1],_[2]+v],[y[0],y[1],y[2]+v],[y[0],y[1],y[2]-v]];for(let T of[0,1,2,0,2,3])s[f++]=S[T][0],s[f++]=S[T][1],s[f++]=S[T][2]}}r.attributes.position.needsUpdate=!0;for(let g of h)g.scale.setScalar(.85+.2*Math.sin(d*2.4+g.userData.k*1.7))};return u(0),e.userData.tick=u,e}function Gm(n=1){let t=new Ue({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new Kt(new mi(n,1),t);return e.userData.at=i=>{e.scale.setScalar(.3+1.2*i),t.opacity=.9*(1-i)},e}function po(n=4){let t=new Ue({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:Mn}),e=new Kt(new fs(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=i=>{e.scale.setScalar(.4+n*i),t.opacity=.8*(1-i)},e}function Wm(){let n=new ye,t=new Ue({color:"#EC6E2A",transparent:!0,opacity:.85}),e=new Ue({color:"#FFD27A"}),i=new Kt(new mi(.42,1),e);n.add(i);let s=[0,1,2,3].map(r=>{let o=new Kt(new mi(.36-r*.07,1),t);return n.add(o),o});return n.userData.tail=s,n.userData.head=i,n}function lv(n,t=1.6){let e=n.map(s=>new O(s[0],s[1],s[2]));if(e.length<3)return e;let i=[e[0].clone()];for(let s=1;s<e.length-1;s++){let r=i[i.length-1],o=e[s],a=e[s+1],c=o.clone().sub(r),l=a.clone().sub(o),h=c.length(),u=l.length();if(h<.02||u<.02)continue;c.divideScalar(h),l.divideScalar(u);let d=Math.acos(Ll.clamp(c.dot(l),-1,1));if(d<.03){i.push(o.clone());continue}let f=Math.min(t*Math.tan(d/2),h*.48,u*.48),g=o.clone().addScaledVector(c,-f),x=o.clone().addScaledVector(l,f),m=Math.max(2,Math.ceil(d*5));i.push(g);for(let p=1;p<m;p++){let _=p/m,y=1-_;i.push(new O().addScaledVector(g,y*y).addScaledVector(o,2*y*_).addScaledVector(x,_*_))}i.push(x)}return i.push(e[e.length-1].clone()),i}var Sf=class extends An{constructor(t){super(),this.V=t,this.S=[0];for(let e=1;e<t.length;e++)this.S.push(this.S[e-1]+t[e].distanceTo(t[e-1]));this.L=Math.max(1e-6,this.S[this.S.length-1])}getPoint(t,e=new O){let i=Ll.clamp(t,0,1)*this.L,s=this.S,r=0,o=s.length-1;for(;o-r>1;){let c=r+o>>1;s[c]<=i?r=c:o=c}let a=s[o]-s[r];return e.copy(this.V[r]).lerp(this.V[o],a>1e-9?(i-s[r])/a:0)}getPointAt(t,e){return this.getPoint(t,e)}getTangentAt(t,e){return this.getTangent(t,e)}getLength(){return this.L}};function mo(n,t,e,i={}){var f,g;let s=i.lift||0,r=i.round?lv(n,i.round):n.map(x=>new O(...x));if(s)for(let x of r)x.y+=s;let o=i.round&&r.length>1?new Sf(r):r.length>2?new Hs(r,!1,"centripetal",.2):new Fr(r[0],r[1]||r[0].clone().add(new O(0,.01,0))),a=o.getLength(),c=Math.max(8,Math.round(a*3)),l=[];if(i.dash){let[x,m]=i.dash,p=Math.max(1,Math.floor(a/(x+m)));for(let _=0;_<p;_++){let y=_*(x+m)/a,v=Math.min(1,(_*(x+m)+x)/a),S=[];for(let T=0;T<=4;T++)S.push(o.getPointAt(y+(v-y)*T/4));l.push(new Nr(new Hs(S),4,t,6,!1))}}else l.push(new Nr(o,c,t,7,!1));let h=new ye,u=new Ue({color:e,transparent:!!i.opacity,opacity:(f=i.opacity)!=null?f:1}),d=new Ue({color:e,transparent:!0,opacity:(g=i.xray)!=null?g:.22,depthTest:!1,depthWrite:!1});for(let x of l){let m=new Kt(x,u),p=new Kt(x,d);p.renderOrder=5,h.add(m,p)}if(i.every){let x=new us(t*2.6,t*5,10);x.rotateX(Math.PI/2);let m=Math.max(1,Math.floor(a/i.every));for(let p=1;p<=m;p++){let _=Math.min(.999,(p-(i.last?0:.5))/m),y=o.getPointAt(_),v=o.getTangentAt(_);for(let S of[u,d]){let T=new Kt(x,S);T.position.copy(y),T.lookAt(y.clone().add(v)),S===d&&(T.renderOrder=5),h.add(T)}}}return h.userData.length=a,h.userData.curve=o,h}function mh(n,t,e,i={}){var c,l;let s=new O(...n),r=new O(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((c=i.arc)!=null?c:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,d=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([d.x,d.y,d.z])}return mo(a,(l=i.r)!=null?l:.12,e,{dash:i.dash,every:999,last:!0,xray:.3})}function gh(n){let t=n.parts,e=(r,o)=>{t[r]&&(t[r].visible=o)};function i(r,o){e(r,!o),e(r==="horn"?"hornX":r+"O",o)}function s(r,o={}){for(let[a,c]of Object.entries(zm))i(a,r>=0&&r>=c);for(let[a,[c,l,h]]of Object.entries(km||{})){let u=r>=c&&r<=l;e(a,h?u:!u)}e("cover2",o.cover!==!1),n.shadowDirty&&n.shadowDirty()}return s(-1),{set:i,at:s}}function xh(n,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("aria-hidden","true"),i.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(i);let s=[],r=new O,o=[];for(let m=8;m<=48;m+=8)o.push([0,-m],[0,m],[m,0],[-m,0]);let a="",c=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",l=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();l=[...t.querySelectorAll(c)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let _=p.getBoundingClientRect();return[_.left-m.left-3,_.top-m.top-3,_.right-m.left+3,_.bottom-m.top+3]})};function d(m,p,_,y){let v=document.createElement(y?"button":"span");y&&(v.type="button"),v.className=m,v.innerHTML=p,v.style.display="none",e.appendChild(v);let S={e:v,p:typeof _=="function"?null:new O(..._),fn:typeof _=="function"?_:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(S),S}function f(m){let p=s.indexOf(m);p>=0&&s.splice(p,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},x=(m,p,_)=>{m.e.style.transform=`translate(${p.toFixed(1)}px,${_.toFixed(1)}px)`};return n.onRender(m=>{let p=performance.now();p-h>400&&(u(),h=p);let _=t.clientWidth,y=t.clientHeight,v=l.slice(),S=[],T=[];for(let M of s){if(!M.on){g(M);continue}if(r.copy(M.fn?M.fn():M.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(M);continue}M.shown||(M.e.style.display="",M.shown=!0);let C=(r.x+1)/2*_,P=(1-r.y)/2*y;(M.lab?S:T).push([M,C,P])}let w=(M,C,P)=>{let U=M.bw||(M.bw=M.e.offsetWidth);return U>40?[C-16,P-16,C-16+U,P+16]:[C-15,P-15,C+15,P+15]},A=M=>!v.some(C=>M[0]<C[2]&&M[2]>C[0]&&M[1]<C[3]&&M[3]>C[1]);T.sort((M,C)=>C[0].e.classList.contains("on")-M[0].e.classList.contains("on"));let b="";for(let[M,C,P]of T){let U=C,k=P,L=w(M,C,P);if(!A(L))for(let[V,j]of o){let H=w(M,C+V,P+j);if(H[0]>=0&&H[2]<=_&&H[1]>=0&&H[3]<=y&&A(H)){U=C+V,k=P+j,L=H;break}}x(M,U,k),v.push(L),Math.hypot(U-C,k-P)>13&&(b+=`<line x1="${C.toFixed(1)}" y1="${P.toFixed(1)}" x2="${U.toFixed(1)}" y2="${k.toFixed(1)}"/><circle cx="${C.toFixed(1)}" cy="${P.toFixed(1)}" r="3"/>`)}b!==a&&(a=b,i.innerHTML=b?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${b}</g>`:""),S.sort((M,C)=>C[2]-M[2]);for(let[M,C,P]of S){M.w||(M.w=M.e.offsetWidth,M.h=M.e.offsetHeight);let U=M.w+8>=_?_/2:Math.min(Math.max(C,M.w/2+4),_-M.w/2-4),k=P;for(let L=0;L<10;L++){let V=U-M.w/2,j=k-11-M.h,H=U+M.w/2,B=k-11,q=v.find(tt=>V<tt[2]&&H>tt[0]&&j<tt[3]&&B>tt[1]);if(!q||q[1]+11-3-11-M.h<0)break;k=q[1]+11-3}v.push([U-M.w/2,k-11-M.h,U+M.w/2,k-11]),x(M,U,k)}}),{lay:e,add:d,remove:f,marks:s}}var Cs={route:"#D2872C",look:"#4F7A96",fire:"#EC6E2A",throw:"#8B6B4A",atk:"#D2452F",move:"#B5462F",drop:"#D2872C",alt:"#C9A46A"},wf={look:[.55,.4],move:[.9,.55],drop:[.6,.45],alt:[.4,.4]},hv=n=>String(n+1).padStart(2,"0"),Tf=n=>n==="item"?"<i>\u25C6</i>":n==="mk"||n==="mkx"?"<i>\u25C9</i>":"";function uv(n){let t=[],e=null;for(let i=1;i<n.length;i++){let s=n[i][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[n[i-1].slice(0,3)]},t.push(e)),e.pts.push(n[i].slice(0,3))}return t}function _h(n,t,e,i={}){var r,o;let s=new ye;for(let a of uv(n))a.pts.length<2||a.pts.reduce((l,h,u)=>u?l+Math.hypot(h[0]-a.pts[u-1][0],h[1]-a.pts[u-1][1],h[2]-a.pts[u-1][2]):0,0)<.05||s.add(a.air?mo(a.pts,e*.8,t,{dash:[.7,.55],xray:i.xray,opacity:i.opacity,lift:e*.6}):mo(a.pts,e,t,{every:(r=i.every)!=null?r:7,xray:i.xray,opacity:i.opacity,round:(o=i.round)!=null?o:1.6,lift:e*.6}));return s}var Xm=n=>n.traverse(t=>{t.geometry&&t.geometry.dispose()}),fv=(n,t,e)=>{let i=n.th+(t.th-n.th)*e,s=n.ph+(t.ph-n.ph)*e,r=Math.sin(Math.PI*e)*Math.min(.35,n.t.distanceTo(t.t)/900),o=Math.exp(Math.log(n.r)+(Math.log(t.r)-Math.log(n.r))*e)*(1+r),a=n.t.clone().lerp(t.t,e),c=Math.sin(s);return[a.x+o*c*Math.sin(i),a.y+o*Math.cos(s),a.z+o*c*Math.cos(i)]},Ef=n=>!!n&&n.kind!=="in"&&n.kind!=="ext";function dv(n,t,e,i){let s=je(n,t,e);return s<-.3?!1:i?s<3&&t<va(n,t,e)-.2||s>=1e8&&t<ce(n,e)-.3:t<ce(n,e)+.3}function pv(n,t,e){let i=Ef(e);for(let s=1;s<14;s++){let r=fv(n,t,s/14);if(dv(r[0],r[1],r[2],i))return!1}return!0}var mv=(n,t,e)=>{for(let i of n){if(i.a===t&&i.b===e)return i.P;if(i.a===e&&i.b===t)return i.P.slice().reverse()}return null},gv=(n,t,e)=>{let i=n[0]-t[0],s=n[1]-t[1],r=n[2]-t[2],o=Math.hypot(i,s,r);return{t,r:o,ph:Math.acos(s/o),th:Math.atan2(i,r),fov:e}};function xv(n,t,e={}){var u,d,f;let i=(u=e.back)!=null?u:2.2,s=(d=e.up)!=null?d:.5,r=t[0]-n[0],o=t[2]-n[2],a=Math.hypot(r,o)||1,c=r/a,l=o/a,h=0;for(let g=.1;g<=i+1e-6;g+=.1){let x=n[0]-c*g,m=n[2]-l*g,p=n[1]+s*g/i,_=je(x,p,m);if(_<1e8?_>-.5:p<ce(x,m)+.6)break;h=g}return gv([n[0]-c*h,n[1]+s*h/i,n[2]-l*h],t,(f=e.fov)!=null?f:62)}function qm(n,t,e={}){var J;let i=n.world,s=new ye;s.name="show",n.scene.add(s);let r={route:new ye,units:new ye};s.add(r.route,r.units);let o=xh(n,t),a=o.lay,c=gh(n),l=(J=e.scale)!=null?J:1.2,h="",u=F=>{let N=Te[F];return h&&N.vars&&N.vars[h]?{...N,...N.vars[h]}:h==="before"&&N.before?{...N,...N.before}:N},d=-1,f=-1,g={route:!0,marks:!0,units:!0,labels:!0},x=Rs.map(F=>{let N=new ye,it=[],at=()=>{it.length>1&&N.add(_h(it,Cs.route,.24,{every:8})),it=[]};for(let E of F.b)(Te[E].path||[]).forEach((lt,ot)=>{let $=it[it.length-1];if($){let st=Math.hypot($[0]-lt[0],$[1]-lt[1],$[2]-lt[2]);if(st<.01)return;ot===0&&st>1.5&&at()}it.push(lt)});return at(),r.route.add(N),N}),m=(F,N)=>F.traverse(it=>{if(it.material){let at=it.material;at.depthTest?(at.transparent=N<1,at.opacity=N):at.opacity=.22*N,at.needsUpdate=!0}}),p=(F,N,it,at)=>o.add(F,N,it,at),_=Rs.map((F,N)=>{let it=p("bs-phm",`<b>${N+1}</b><span>${(e.phaseNames||[])[N]||""}</span>`,[F.at[0],F.at[1]+4,F.at[2]],1);return it.e.dataset.k=N,it.e.addEventListener("click",at=>{at.stopPropagation(),e.onPhase&&e.onPhase(N)}),it}),y=Te.map((F,N)=>{let it=p("bs-pin",`<span>${hv(N)}</span>`,[F.p[0],F.p[1]+4.4,F.p[2]],1);return it.e.dataset.i=N,it.e.title=(e.names||[])[N]||"",it.e.addEventListener("click",at=>{at.stopPropagation(),e.onPick&&e.onPick(N)}),it}),v=[],S=()=>{_.forEach((F,N)=>{F.on=g.marks&&d<0,F.e.classList.toggle("on",N===d)}),y.forEach((F,N)=>{let it=d>=0&&Rs[d].b.includes(N);F.on=g.marks&&it,F.e.classList.toggle("on",N===f),F.e.setAttribute("aria-pressed",N===f)});for(let F of v)F.on=g.labels;n.invalidate()},T=(F,N)=>c.at(F,N),w=[],A=(F,N)=>Math.atan2(N[0]-F[0],N[2]-F[2]);function b(){for(let F of[...r.units.children])r.units.remove(F),Xm(F);for(let F of v)o.remove(F);v=[],w=[],n.ambient=!1}function M(F,N){let[it,at,E,lt,ot,$,st]=F,gt=dh(it);return gt.root.position.set(at,E,lt),gt.root.rotation.y=A([at,E,lt],[ot!=null?ot:at,E,$!=null?$:lt+1]),gt.root.scale.setScalar(l),gt.pose(st||"idle"),["walk","run","charge","burn","talk"].includes(st)&&N.push(ct=>gt.pose(st,ct)),r.units.add(gt.root),gt}function C(F){b(),F>=0&&P(u(F))}function P(F){b();let N=[],it=F.cam&&F.cam.fov>=50;F.path&&F.path.length>1&&r.units.add(_h(F.path,Cs.route,it?.11:.3,{every:it?3:5,xray:.35}));for(let[E,lt,ot]of F.ar||[])r.units.add(mh(E,lt,Cs[ot]||Cs.atk,{dash:wf[ot]||null,r:ot==="look"||ot==="alt"?.1:.14,arc:ot==="look"?.02:ot==="drop"?.25:.12}));F.p&&M(["p",...F.p,...F.pl||[F.p[0],F.p[2]+1],F.pose],N);for(let E of F.u||[])M(E,N);for(let E of F.fx||[]){let[lt,ot,$,st,gt]=E,ct=null;if(lt==="fire")ct=ar(gt,ot+st);else if(lt==="flame")ct=ar(gt||.3,5,{spot:!1}),ct.scale.setScalar(.55);else if(lt==="puff")ct=ph(gt);else if(lt==="falls")pt.FALLC&&(ct=Vm(pt.FALLC,pt.FALLM));else if(lt==="shock"){ct=po(gt);let yt=ct.userData.at;N.push(Rt=>yt(Rt*.55%1))}else if(lt==="ring"){let yt=E[5]||"#D2452F";ct=new Kt(new fs(gt-.14,gt+.14,72).rotateX(-Math.PI/2),new Ue({color:yt,transparent:!0,opacity:.75,depthTest:!1,depthWrite:!1})),ct.renderOrder=5;let Rt=new Kt(new ks(gt,72).rotateX(-Math.PI/2),new Ue({color:yt,transparent:!0,opacity:.07,depthTest:!1,depthWrite:!1}));Rt.renderOrder=4,ct.add(Rt)}else lt==="xr"&&(ct=new Ho(new Xo(new Qn(E[4],E[5],E[6])),new Lr({color:E[7]||"#D2452F",transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1})),ct.renderOrder=6);ct&&(ct.position.set(ot,$,st),r.units.add(ct),ct.userData.tick&&N.push(ct.userData.tick))}let at=[];for(let[E,lt,ot,$,st]of F.lab||[])if(e.pins&&st!=="lamp"){let gt=at.length+1;at.push({n:gt,t:E,k:st||"note"});let ct=p("bs-lab bs-lp k-"+(st||"note"),`<b>${gt}</b>`,[lt,ot,$]);ct.e.title=E,v.push(ct)}else v.push(p("bs-lab k-"+(st||"note"),Tf(st)+E,[lt,ot,$]));e.onLegend&&e.onLegend(at),w=N,n.ambient=N.length>0}n.onFrame((F,N)=>{for(let it of w)it(N)});let U=F=>{var ot;let N=t.clientWidth/Math.max(1,t.clientHeight);if(F.fov>=50){let $=N<1.25?Math.pow(1.25/N,.75):1;return $===1?F:{...F,fov:Math.min(72,F.fov*Math.min(1.3,$))}}let it=1.5;if(N>=it)return F;let at=(ot=F.fov)!=null?ot:30,E=Math.tan(at*Math.PI/360)*it/N,lt=Math.tan(25*Math.PI/180);return{...F,fov:Math.max(at,2*Math.atan(Math.min(E,lt))*180/Math.PI),r:F.r*Math.max(1,E/lt)}};function k(F,N){n.setView(U(F),N),n.animUntil=performance.now()+1600}let L=0,V=()=>[n.renderer.domElement,a];function j(F,N,it,at){var D;let E=typeof N=="string"?{kind:N}:N,lt=++L;if(it.fly===!1||it.instant||!F){n.setMode(E),at(),it.fly!==!1&&F&&k(F,it.instant);return}let ot=n.mode(),$=n.controls.cur,st={th:$.th,ph:$.ph,r:$.r,t:$.t.clone()},gt=U(F),ct=gt.th;for(;ct-st.th>Math.PI;)ct-=Math.PI*2;for(;ct-st.th<-Math.PI;)ct+=Math.PI*2;let yt={th:ct,ph:gt.ph,r:gt.r,t:new O(...gt.t)},Rt=Ef(E)?E:Ef(ot)?ot:E;if(!it.fade&&pv(st,yt,Rt)){n.setMode(Rt),at(),k(F),Rt!==E&&setTimeout(()=>{L===lt&&n.setMode(E)},((D=gt.dur)!=null?D:1.3)*1e3+40);return}let Ft=V();for(let R of Ft)R.style.transition="opacity .16s ease",R.style.opacity="0";setTimeout(()=>{L===lt&&(n.setMode(E),at(),k(F,!0),n.renderNow(),requestAnimationFrame(()=>{if(L===lt)for(let R of Ft)R.style.transition="opacity .3s ease",R.style.opacity="1"}))},170)}function H(F,N={}){d=F,f=-1,h="";let it=Rs[F];j(F<0?co.ov:it.cam,F<0?"ov":it.mode,N,()=>{C(-1),x.forEach((at,E)=>{at.visible=g.route&&(F<0||E===F),m(at,1)}),T(F<0?-1:it.b[0]),S()})}function B(F,N={}){if(F<0){H(d,{fly:!1});return}let it=Rs.findIndex(lt=>lt.b.includes(F));d=it,f=F,h=N.v||"";let at=u(F),E=Rs[it];j(at.cam||E.cam,at.mode||E.mode,N,()=>{var lt;T((lt=at.at)!=null?lt:F,{cover:at.cover}),x.forEach((ot,$)=>{ot.visible=g.route&&$===it&&!at.noRoute,m(ot,.35)}),C(F),r.units.visible=g.units,S()})}function q(F,N={}){d=-1,f=-1,h="";let it=F.cam&&F.cam.eye?xv(F.cam.eye,F.cam.look,F.cam):F.cam;j(it,F.mode||"in",N,()=>{var at;T((at=F.at)!=null?at:-1),x.forEach(E=>{E.visible=!1}),P(F),r.units.visible=!0,S()})}let tt=F=>{let N=0;for(let it of v)it.e.classList.contains("bs-lp")&&(N++,it.e.classList.toggle("hi",N===F))},W=(()=>{let F={},N=(it,at)=>{(F[it]=F[it]||[]).push(at),(F[at]=F[at]||[]).push(it)};for(let[it,at]of Ie.edges)N(it,at);return N("D1","D1x"),N("D1x","d1"),N("c3","C"),F})(),Q=(F,N)=>mv(Mi,F,N)||[Ie.nodes[F],Ie.nodes[N]],rt=(F,N)=>{if(F===N)return null;let it={[F]:null},at=[F];for(;at.length;){let E=at.shift();for(let lt of W[E]||[])if(!(lt in it)){if(it[lt]=E,lt===N){let ot=N;for(;it[ot]!==F;)ot=it[ot];return ot}at.push(lt)}}return null},nt=(F,N)=>{let it=0;for(let at=1;at<F.length;at++){let E=Math.hypot(F[at][0]-F[at-1][0],F[at][1]-F[at-1][1],F[at][2]-F[at-1][2]);if(it+E>=N){let lt=(N-it)/E;return[0,1,2].map(ot=>F[at-1][ot]+(F[at][ot]-F[at-1][ot])*lt)}it+=E}return F[F.length-1].slice(0,3)};function G(F,N,it={}){var st,gt,ct,yt;let at=Ie.nodes,E=at[F];if(!E)return;let lt=rt(F,N)||(W[F]||[])[0],ot=nt(Q(F,lt),4.5),$=[];for(let Rt of it.exits||[]){let Ft=rt(F,Rt.to);if(!Ft)continue;let D=nt(Q(F,Ft),(st=Rt.d)!=null?st:2.6);$.push([Rt.t,+D[0].toFixed(2),+(D[1]+((gt=Rt.dy)!=null?gt:1.9)).toFixed(2),+D[2].toFixed(2),Rt.k||"note"])}for(let[Rt,Ft]of Ie.lamps)if(Rt===F){let D=nt(Q(Rt,Ft),1.2);$.push(["\u77FF\u706F",+D[0].toFixed(2),+(D[1]+2.6).toFixed(2),+D[2].toFixed(2),"lamp"])}q({mode:"in",at:15,cam:{eye:[E[0],E[1]+1.55,E[2]],look:[ot[0],ot[1]+1.1,ot[2]],back:(ct=it.back)!=null?ct:3,up:.3,fov:(yt=it.fov)!=null?yt:74},lab:[...$,...it.lab||[]]},it)}function z(F,N){g[F]=N,F==="route"&&x.forEach((it,at)=>{it.visible=N&&(d<0||at===d)}),F==="units"&&(r.units.visible=N),S(),n.invalidate()}return H(-1,{fly:!1}),{setPhase:H,setBeat:B,setFree:q,mazeView:G,hiPin:tt,setLayer:z,overview:F=>H(-1,F||{}),partsAt:T,get phase(){return d},get beat(){return f},get variant(){return h},hasBefore:F=>!!(Te[F]&&Te[F].before),phases:Rs.length,beats:Te.length,dispose(){b(),a.remove(),n.scene.remove(s),Xm(s)}}}var Ca={};var wi=n=>Math.max(0,Math.min(1,n)),Ym=n=>n*n*(3-2*n),go=(n,t,e)=>n+(t-n)*e,Zm=(n,t,e)=>{let i=t-n;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;return n+i*e},_v=["fall","fly","held"];function yv(n){let t=[],e=0;return n.forEach((i,s)=>{let r=i[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-i[1],r.face[1]-i[3]);else if(s>0){let o=n[s-1],a=i[1]-o[1],c=i[3]-o[3];Math.hypot(a,c)>.05&&(e=Math.atan2(a,c))}t.push(e)}),i=>{let s=n.length,r=0;for(;r<s&&n[r][0]<=i;)r++;let o=!0;for(let f=0;f<r;f++){let g=n[f][5];g&&g.hide&&(o=!1),g&&g.show&&(o=!0)}if(r===0)return{x:n[0][1],y:n[0][2],z:n[0][3],pose:n[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let f=n[s-1];return{x:f[1],y:f[2],z:f[3],pose:f[4],yaw:t[s-1],vis:o,air:!1}}let a=n[r-1],c=n[r],l=c[5]||{},h=c[0]-a[0],u=h>0?wi((i-a[0])/h):1;l.ease&&(u=Ym(u));let d=go(a[2],c[2],l.fall?u*u:u);return l.arc&&(d+=4*l.arc*u*(1-u)),{x:go(a[1],c[1],u),y:d,z:go(a[3],c[3],u),pose:c[4],yaw:Zm(t[r-1],t[r],wi((i-a[0])/.2)),vis:o,air:!!(l.arc||l.fall)}}}function vv(n,t){let e=0;for(;e<n.length&&n[e][0]<=t;)e++;if(e===0)return n[0][1];if(e>=n.length)return n[n.length-1][1];let[i,s]=n[e-1],[r,o]=n[e],a=Ym(wi((t-i)/(r-i)));return{t:s.t.map((c,l)=>go(c,o.t[l],a)),r:Math.exp(go(Math.log(s.r),Math.log(o.r),a)),ph:go(s.ph,o.ph,a),th:Zm(s.th,o.th,a)}}var Ia=(n,t,e)=>n>=t&&n<e;function Jm(n,t,e={}){let i=gh(n),s=xh(n,t),r=new ye;r.name="stage",n.scene.add(r);let o=document.createElement("div");o.className="bs-mask",o.innerHTML="<span></span>",t.appendChild(o);let a=null,c=null,l=0,h=!1,u=!0,d="",f="",g=0,x={},m=[],p=[],_=[],y=[],v=null,S=(L,V=0)=>typeof L=="string"?()=>{let j=x[L];return new O(j.F.root.position.x,j.F.root.position.y+V,j.F.root.position.z)}:null,T=(L,V=0)=>{if(typeof L!="string")return new O(...L);let j=x[L];return new O(j.F.root.position.x,j.F.root.position.y+V,j.F.root.position.z)};function w(){for(let L of[...r.children])r.remove(L),L.traverse(V=>{V.geometry&&V.geometry.dispose()});for(let L of y)s.remove(L.m);x={},m=[],p=[],_=[],y=[],v=null,d="",f=""}function A(){var V;let L=(V=a.scale)!=null?V:1.2;for(let[j,H]of Object.entries(a.act)){let B=dh(H.k);B.root.scale.setScalar(H.k==="g"?1:L),r.add(B.root),x[j]={F:B,at:yv(H.keys)}}if(a.route!==!1&&a.act.p){let j=[[]];a.act.p.keys.forEach((H,B)=>{let q=H[5]||{};q.cut&&j.push([]);let tt=j[j.length-1],W=tt[tt.length-1];(!W||Math.hypot(W[0]-H[1],W[1]-H[2]-.12,W[2]-H[3])>.05)&&tt.push([H[1],H[2]+.12,H[3],B&&(q.arc||q.fall)?1:0])}),v=new ye,r.add(v);for(let H of j)H.length>1&&v.add(_h(H,Cs.route,.16,{every:6,xray:.18,opacity:.5}))}for(let j of a.fx||[]){let[H,B,q,tt,W,Q,rt]=j,nt=null;if(q==="fire")nt=ar(rt||1.5,(typeof tt=="number"?tt:3)+(Q||0));else if(q==="flame")nt=ar(rt||.8,5,{spot:!1});else if(q==="puff")nt=ph(rt||1);else if(q==="spark")nt=Gm(rt||1);else if(q==="shock")nt=po(rt||4);else if(q==="warn")nt=po(rt||1),nt.userData.at=null,nt.material.color.set("#D2452F");else if(q==="debris"){nt=new ye;let G=new Kt(new Qn(1.3,.32,.5),new jn({color:"#5E4636",roughness:.9}));G.castShadow=!0,nt.add(G);let z=ar(.35,3,{spot:!1});z.position.y=.15,z.scale.setScalar(.75),nt.add(z),nt.userData.b=G,nt.userData.fl=z;let J=po(1);J.material.color.set("#D2452F"),nt.add(J),nt.userData.ring=J}nt&&(typeof tt!="string"&&nt.position.set(tt,W,Q),nt.visible=!1,r.add(nt),m.push({t0:H,t1:B,kind:q,g:nt,ref:typeof tt=="string"?tt:null,dy:typeof tt=="string"?W:0}))}for(let[j,H,B,q,tt,W]of a.proj||[]){let Q=Wm();tt==="throw"&&(Q.userData.head.material=new jn({color:"#8B6B4A"}),Q.userData.tail.forEach(rt=>{rt.visible=!1})),Q.visible=!1,r.add(Q),p.push({t0:j,t1:H,from:B,to:q,arc:W!=null?W:.15,g:Q})}for(let[j,H,B,q,tt,W]of a.arr||[]){let Q=wf[tt]||null,rt=Cs[tt]||Cs.atk,nt=Array.isArray(B[0])?mo(B,.2,rt,{dash:Q,every:999,last:!0,xray:.3}):mh(B,q,rt,{dash:Q,r:tt==="look"?.1:.14,arc:tt==="look"?.02:.12,...W||{}});nt.visible=!1,r.add(nt),_.push({t0:j,t1:H,g:nt})}for(let j of a.lab||[]){let[H,B,q,tt,W,Q,rt]=j,nt=rt==="qte",G=s.add("bs-lab k-"+(rt||"note"),(nt?"<i>\u25C6</i>":Tf(rt))+q+(nt?"<s></s>":""),typeof tt=="string"?S(tt,W):[tt,W,Q]);y.push({t0:H,t1:B,m:G,q:nt})}}function b(){if(!a)return;let L=l,V=a.mode;for(let[W,Q]of a.modes||[])L>=W&&(V=Q);let j=JSON.stringify(V);j!==f&&(f=j,n.setMode(V));let H=(a.door||[]).filter(W=>L>=W[0]).map(W=>[W[1],W[2]]),B=JSON.stringify(H);if(B!==d){d=B,i.at(a.init,{cover:a.cover});for(let[W,Q]of H)i.set(W,Q)}for(let W of Object.values(x)){let Q=W.at(L),rt=W.F;rt.root.visible=Q.vis,rt.root.position.set(Q.x,Q.y,Q.z),rt.root.rotation.y=Q.yaw,rt.pose(Q.pose||"idle",L),rt.ring.visible=!_v.includes(Q.pose)&&!Q.air}for(let W of m){let Q=Ia(L,W.t0,W.t1);if(W.g.visible=Q,!Q)continue;let rt=L-W.t0,nt=W.g;if(W.ref){let G=T(W.ref,W.dy);nt.position.copy(G)}if(W.kind==="fire"||W.kind==="flame"||W.kind==="puff")nt.scale.setScalar(.25+.75*wi(rt/.4)),nt.userData.tick&&nt.userData.tick(L);else if(W.kind==="spark"||W.kind==="shock")nt.userData.at(wi(rt/(W.t1-W.t0)));else if(W.kind==="warn"){let G=rt*2.2%1;nt.scale.setScalar(.5+1.1*G),nt.material.opacity=.85*(1-G)}else if(W.kind==="debris"){let J=wi((rt-.6)/.55),F=nt.userData.b,N=nt.userData.fl,it=nt.userData.ring,at=rt<.6?7:7*(1-J*J);if(F.visible=N.visible=rt>=.6-.05,F.position.y=at+.16,N.position.y=at+.3,F.rotation.set(J<1?rt*3.2:.05,.6,J<1?rt*2.1:0),N.userData.tick(L),it.visible=J<1,J<1){let E=rt*2.4%1;it.scale.setScalar(.6+.9*E),it.material.opacity=.9*(1-E)}}}for(let W of p){let Q=Ia(L,W.t0,W.t1);if(W.g.visible=Q,!Q)continue;let rt=N=>typeof N[0]=="string"?T(N[0],N[1]||0):T(N),nt=rt(W.from),G=rt(W.to),z=nt.distanceTo(G),J=N=>{let it=nt.clone().lerp(G,N);return it.y+=4*W.arc*z*N*(1-N)*.25,it},F=wi((L-W.t0)/(W.t1-W.t0));W.g.userData.head.position.copy(J(F)),W.g.userData.tail.forEach((N,it)=>N.position.copy(J(Math.max(0,F-.035*(it+1)))))}for(let W of _)W.g.visible=Ia(L,W.t0,W.t1);for(let W of y)W.m.on=Ia(L,W.t0,W.t1),W.q&&W.m.on&&W.m.e.style.setProperty("--q",(1-wi((L-W.t0)/(W.t1-W.t0))).toFixed(3));let q=0,tt="";for(let[W,Q,rt]of a.mask||[])L>=W-.25&&L<Q+.25&&(q=Math.max(q,Math.min(wi((L-W+.25)/.25),wi((Q+.25-L)/.25))),tt=rt);o.style.opacity=q.toFixed(3),o.style.display=q>0?"":"none",tt&&o.firstChild.textContent!==tt&&(o.firstChild.textContent=tt),u&&a.cam&&performance.now()>g&&C(L,!0),n.shadowDirty(),e.onT&&e.onT(a.dur?L/a.dur:0)}let M=L=>{let V=t.clientWidth/Math.max(1,t.clientHeight),j=V<1.25?Math.pow(1.25/V,.75):1;return{...L,r:L.r*j}};function C(L,V){let j=M(vv(a.cam,L)),H=j.t[0],B=j.t[1],q=j.t[2];for(let[W,Q,rt]of a.shake||[])if(Ia(L,W,Q)){let nt=Math.sin(Math.PI*(L-W)/(Q-W))*rt;H+=Math.sin(L*53)*nt,B+=Math.sin(L*41+1)*nt*.6,q+=Math.cos(L*47)*nt}let tt={th:j.th,ph:j.ph,r:j.r,t:new O(H,B,q)};V?n.controls.set(tt,!0):n.controls.flyTo(tt,.9)}n.onFrame(L=>{!h||!a||(l=Math.min(a.dur,l+L),b(),l>=a.dur&&(U(),e.onEnd&&e.onEnd()))});function P(){a&&(l>=a.dur-.001&&(l=0),h=!0,n.animating=!0,e.onPlay&&e.onPlay(!0))}function U(){h=!1,n.animating=!1,n.invalidate(),e.onPlay&&e.onPlay(!1)}n.onUserStart(()=>{u&&(u=!1,e.onFollow&&e.onFollow(!1))});function k(L,V={}){Ca[L]&&(U(),w(),c=L,a=Ca[L],l=0,u=!0,e.onFollow&&e.onFollow(!0),a.sb&&n.setShadowBox(a.sb),A(),V.fly&&a.cam?(C(0,!1),g=performance.now()+950,n.animUntil=g+150):g=0,b())}return{load:k,play:P,pause:U,isPlaying:()=>h,setT(L){a&&(l=wi(L)*a.dur,b(),n.invalidate())},get t(){return a?l/a.dur:0},get id(){return c},get follow(){return u},setFollow(L){u=L,L&&a&&(C(l,!1),g=performance.now()+950,n.animUntil=g+150),e.onFollow&&e.onFollow(L)},resetView(){this.setFollow(!0)},info:L=>{let V=Ca[L||c];return V?{dur:V.dur,ch:V.ch,ctl:V.ctl}:null},scenes:Object.keys(Ca),dispose(){U(),w(),o.remove(),s.lay.remove(),n.scene.remove(r)}}}return a0(Mv);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
