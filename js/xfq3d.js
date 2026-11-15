(()=>{var Us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gf=0,yh=1,yf=2;var _h=1,vl=2,Xi=3,Ii=0,kn=1,cn=2,cs=0,to=1,xh=2,Mh=3,vh=4,_f=5,Cs=100,xf=101,Mf=102,vf=103,bf=104,Sf=200,wf=201,Ef=202,Tf=203,Ya=204,$a=205,Af=206,Rf=207,Cf=208,Pf=209,If=210,Lf=211,Df=212,Uf=213,Nf=214,bl=0,Sl=1,wl=2,eo=3,El=4,Tl=5,Qo=6,Al=7,bh=0,zf=1,Ff=2,hs=0,kf=1,Of=2,Bf=3,Rl=4,Hf=5,Vf=6,Wf=7;var Sh=300,lo=301,co=302,Cl=303,Pl=304,oa=306,Li=1e3,Rs=1001,Za=1002,Qn=1003,Gf=1004;var ra=1005;var Di=1006,Il=1007;var zs=1008;var Ui=1009,wh=1010,Eh=1011,tr=1012,Ll=1013,Fs=1014,Ni=1015,er=1016,Dl=1017,Ul=1018,nr=1020,Th=35902,Ah=35899,Rh=1021,Ch=1022,_i=1023,ko=1026,ir=1027,Nl=1028,zl=1029,Ph=1030,Fl=1031;var kl=1033,aa=33776,la=33777,ca=33778,ha=33779,Ol=35840,Bl=35841,Hl=35842,Vl=35843,Wl=36196,Gl=37492,Xl=37496,ql=37808,Yl=37809,$l=37810,Zl=37811,jl=37812,Kl=37813,Jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,oc=37821,rc=36492,ac=36494,lc=36495,cc=36283,hc=36284,uc=36285,fc=36286;var Sr=2300,ja=2301,qa=2302,oh=2400,rh=2401,ah=2402;var Xf=3200,qf=3201;var Ih=0,Yf=1,us="",vn="srgb",no="srgb-linear",wr="linear",rn="srgb";var Qs=7680;var lh=519,$f=512,Zf=513,jf=514,Lh=515,Kf=516,Jf=517,Qf=518,td=519,Ka=35044;var Dh="300 es",Ci=2e3,Er=2001;var Bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zu=1234567,xr=Math.PI/180,Oo=180/Math.PI;function Oi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[t&255]+Wn[t>>8&255]+"-"+Wn[t>>16&15|64]+Wn[t>>24&255]+"-"+Wn[e&63|128]+Wn[e>>8&255]+"-"+Wn[e>>16&255]+Wn[e>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Uh(i,t){return(i%t+t)%t}function u0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function f0(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function d0(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function p0(i,t=1){return t-Math.abs(Uh(i,t*2)-t)}function m0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function g0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function y0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _0(i,t){return i+Math.random()*(t-i)}function x0(i){return i*(.5-Math.random())}function M0(i){i!==void 0&&(zu=i);let t=zu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function v0(i){return i*xr}function b0(i){return i*Oo}function S0(i){return(i&i-1)===0&&i!==0}function w0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function E0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function T0(i,t,e,n,s){let o=Math.cos,r=Math.sin,a=o(e/2),l=r(e/2),c=o((t+n)/2),u=r((t+n)/2),h=o((t-n)/2),p=r((t-n)/2),d=o((n-t)/2),f=r((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*f,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*f,a*c);break;case"ZYZ":i.set(l*f,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ua={DEG2RAD:xr,RAD2DEG:Oo,generateUUID:Oi,clamp:Fe,euclideanModulo:Uh,mapLinear:u0,inverseLerp:f0,lerp:Mr,damp:d0,pingpong:p0,smoothstep:m0,smootherstep:g0,randInt:y0,randFloat:_0,randFloatSpread:x0,seededRandom:M0,degToRad:v0,radToDeg:b0,isPowerOfTwo:S0,ceilPowerOfTwo:w0,floorPowerOfTwo:E0,setQuaternionFromProperEuler:T0,normalize:on,denormalize:Ri},oe=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Fe(this.x,t.x,e.x),this.y=Fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Fe(this.x,t,e),this.y=Fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],p=o[r+0],d=o[r+1],f=o[r+2],y=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=f,t[e+3]=y;return}if(h!==y||l!==p||c!==d||u!==f){let g=1-a,m=l*p+c*d+u*f+h*y,M=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let v=Math.sqrt(x),T=Math.atan2(v,m*M);g=Math.sin(g*T)/v,a=Math.sin(a*T)/v}let _=a*M;if(l=l*g+p*_,c=c*g+d*_,u=u*g+f*_,h=h*g+y*_,g===1-a){let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=o[r],p=o[r+1],d=o[r+2],f=o[r+3];return t[e]=a*f+u*h+l*d-c*p,t[e+1]=l*f+u*p+c*h-a*d,t[e+2]=c*f+u*d+a*p-l*h,t[e+3]=u*f-a*h-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(o/2),p=l(n/2),d=l(s/2),f=l(o/2);switch(r){case"XYZ":this._x=p*u*h+c*d*f,this._y=c*d*h-p*u*f,this._z=c*u*f+p*d*h,this._w=c*u*h-p*d*f;break;case"YXZ":this._x=p*u*h+c*d*f,this._y=c*d*h-p*u*f,this._z=c*u*f-p*d*h,this._w=c*u*h+p*d*f;break;case"ZXY":this._x=p*u*h-c*d*f,this._y=c*d*h+p*u*f,this._z=c*u*f+p*d*h,this._w=c*u*h-p*d*f;break;case"ZYX":this._x=p*u*h-c*d*f,this._y=c*d*h+p*u*f,this._z=c*u*f-p*d*h,this._w=c*u*h+p*d*f;break;case"YZX":this._x=p*u*h+c*d*f,this._y=c*d*h+p*u*f,this._z=c*u*f-p*d*h,this._w=c*u*h-p*d*f;break;case"XZY":this._x=p*u*h-c*d*f,this._y=c*d*h-p*u*f,this._z=c*u*f+p*d*h,this._w=c*u*h+p*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],p=n+a+h;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(o-c)*d,this._z=(r-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(o+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(o-c)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(r-s)/d,this._x=(o+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*a+s*c-o*l,this._y=s*u+r*l+o*a-n*c,this._z=o*u+r*c+n*l-s*a,this._w=r*u-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=r*h+this._w*p,this._x=n*h+this._x*p,this._y=s*h+this._y*p,this._z=o*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nt=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),u=2*(a*e-o*s),h=2*(o*n-r*e);return this.x=e+l*c+r*h-a*u,this.y=n+l*u+a*c-o*h,this.z=s+l*h+o*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Fe(this.x,t.x,e.x),this.y=Fe(this.y,t.y,e.y),this.z=Fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Fe(this.x,t,e),this.y=Fe(this.y,t,e),this.z=Fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dc.copy(this).projectOnVector(t),this.sub(Dc)}reflect(t){return this.sub(Dc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new nt,Fu=new Cn,He=class i{constructor(t,e,n,s,o,r,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=o,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],p=n[2],d=n[5],f=n[8],y=s[0],g=s[3],m=s[6],M=s[1],x=s[4],_=s[7],v=s[2],T=s[5],E=s[8];return o[0]=r*y+a*M+l*v,o[3]=r*g+a*x+l*T,o[6]=r*m+a*_+l*E,o[1]=c*y+u*M+h*v,o[4]=c*g+u*x+h*T,o[7]=c*m+u*_+h*E,o[2]=p*y+d*M+f*v,o[5]=p*g+d*x+f*T,o[8]=p*m+d*_+f*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*a*c-n*o*u+n*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*r-a*c,p=a*l-u*o,d=c*o-r*l,f=e*h+n*p+s*d;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return t[0]=h*y,t[1]=(s*c-u*n)*y,t[2]=(a*n-s*r)*y,t[3]=p*y,t[4]=(u*e-s*l)*y,t[5]=(s*o-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(r*e-n*o)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uc=new He;function Nh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){let i=Tr("canvas");return i.style.display="block",i}var ku={};function Bo(i){i in ku||(ku[i]=!0,console.warn(i))}function nd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Ou=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A0(){let i={enabled:!0,workingColorSpace:no,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===rn&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===rn&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Bo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Bo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[no]:{primaries:t,whitePoint:n,transfer:wr,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:t,whitePoint:n,transfer:rn,toXYZ:Ou,fromXYZ:Bu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),i}var tn=A0();function rs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bo,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bo===void 0&&(bo=Tr("canvas")),bo.width=t.width,bo.height=t.height;let s=bo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=rs(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(rs(e[n]/255)*255):e[n]=rs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},R0=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Nc(s[r].image)):o.push(Nc(s[r]))}else o=Nc(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function Nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var C0=0,zc=new nt,Dn=class i extends Bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rs,s=Rs,o=Di,r=zs,a=_i,l=Ui,c=i.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Oi(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Li:t.x=t.x-Math.floor(t.x);break;case Rs:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Li:t.y=t.y-Math.floor(t.y);break;case Rs:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Sh;Dn.DEFAULT_ANISOTROPY=1;var an=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,l=t.elements,c=l[0],u=l[4],h=l[8],p=l[1],d=l[5],f=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(h-y)<.01&&Math.abs(f-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+y)<.1&&Math.abs(f+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,_=(d+1)/2,v=(m+1)/2,T=(u+p)/4,E=(h+y)/4,R=(f+g)/4;return x>_&&x>v?x<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(x),s=T/n,o=E/n):_>v?_<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(_),n=T/s,o=R/s):v<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(v),n=E/o,s=R/o),this.set(n,s,o,e),this}let M=Math.sqrt((g-f)*(g-f)+(h-y)*(h-y)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(g-f)/M,this.y=(h-y)/M,this.z=(p-u)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Fe(this.x,t.x,e.x),this.y=Fe(this.y,t.y,e.y),this.z=Fe(this.z,t.z,e.z),this.w=Fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Fe(this.x,t,e),this.y=Fe(this.y,t,e),this.z=Fe(this.z,t,e),this.w=Fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qa=class extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new an(0,0,t,e),this.scissorTest=!1,this.viewport=new an(0,0,t,e);let s={width:t,height:e,depth:n.depth},o=new Dn(s);this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ho(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends Qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends Dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends Dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Un=class{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Ei):Ei.fromBufferAttribute(o,r),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ma.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ma.copy(n.boundingBox)),Ma.applyMatrix4(t.matrixWorld),this.union(Ma)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),va.subVectors(this.max,fr),So.subVectors(t.a,fr),wo.subVectors(t.b,fr),Eo.subVectors(t.c,fr),vs.subVectors(wo,So),bs.subVectors(Eo,wo),Zs.subVectors(So,Eo);let e=[0,-vs.z,vs.y,0,-bs.z,bs.y,0,-Zs.z,Zs.y,vs.z,0,-vs.x,bs.z,0,-bs.x,Zs.z,0,-Zs.x,-vs.y,vs.x,0,-bs.y,bs.x,0,-Zs.y,Zs.x,0];return!Fc(e,So,wo,Eo,va)||(e=[1,0,0,0,1,0,0,0,1],!Fc(e,So,wo,Eo,va))?!1:(ba.crossVectors(vs,bs),e=[ba.x,ba.y,ba.z],Fc(e,So,wo,Eo,va))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(es),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},es=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Ei=new nt,Ma=new Un,So=new nt,wo=new nt,Eo=new nt,vs=new nt,bs=new nt,Zs=new nt,fr=new nt,va=new nt,ba=new nt,js=new nt;function Fc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){js.fromArray(i,o);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=t.dot(js),c=e.dot(js),u=n.dot(js);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var P0=new Un,dr=new nt,kc=new nt,jn=class{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):P0.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(kc)),this.expandByPoint(dr.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ns=new nt,Oc=new nt,Sa=new nt,Ss=new nt,Bc=new nt,wa=new nt,Hc=new nt,Ps=class{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ns)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ns.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ns.copy(this.origin).addScaledVector(this.direction,e),ns.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Oc.copy(t).add(e).multiplyScalar(.5),Sa.copy(e).sub(t).normalize(),Ss.copy(this.origin).sub(Oc);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Sa),a=Ss.dot(this.direction),l=-Ss.dot(Sa),c=Ss.lengthSq(),u=Math.abs(1-r*r),h,p,d,f;if(u>0)if(h=r*l-a,p=r*a-l,f=o*u,h>=0)if(p>=-f)if(p<=f){let y=1/u;h*=y,p*=y,d=h*(h+r*p+2*a)+p*(r*h+p+2*l)+c}else p=o,h=Math.max(0,-(r*p+a)),d=-h*h+p*(p+2*l)+c;else p=-o,h=Math.max(0,-(r*p+a)),d=-h*h+p*(p+2*l)+c;else p<=-f?(h=Math.max(0,-(-r*o+a)),p=h>0?-o:Math.min(Math.max(-o,-l),o),d=-h*h+p*(p+2*l)+c):p<=f?(h=0,p=Math.min(Math.max(-o,-l),o),d=p*(p+2*l)+c):(h=Math.max(0,-(r*o+a)),p=h>0?o:Math.min(Math.max(-o,-l),o),d=-h*h+p*(p+2*l)+c);else p=r>0?-o:o,h=Math.max(0,-(r*p+a)),d=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Oc).addScaledVector(Sa,p),d}intersectSphere(t,e){ns.subVectors(t.center,this.origin);let n=ns.dot(this.direction),s=ns.dot(ns)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),u>=0?(o=(t.min.y-p.y)*u,r=(t.max.y-p.y)*u):(o=(t.max.y-p.y)*u,r=(t.min.y-p.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(a=(t.min.z-p.z)*h,l=(t.max.z-p.z)*h):(a=(t.max.z-p.z)*h,l=(t.min.z-p.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ns)!==null}intersectTriangle(t,e,n,s,o){Bc.subVectors(e,t),wa.subVectors(n,t),Hc.crossVectors(Bc,wa);let r=this.direction.dot(Hc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Ss.subVectors(this.origin,t);let l=a*this.direction.dot(wa.crossVectors(Ss,wa));if(l<0)return null;let c=a*this.direction.dot(Bc.cross(Ss));if(c<0||l+c>r)return null;let u=-a*Ss.dot(Hc);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class i{constructor(t,e,n,s,o,r,a,l,c,u,h,p,d,f,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,u,h,p,d,f,y,g)}set(t,e,n,s,o,r,a,l,c,u,h,p,d,f,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=p,m[3]=d,m[7]=f,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/To.setFromMatrixColumn(t,0).length(),o=1/To.setFromMatrixColumn(t,1).length(),r=1/To.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){let p=r*u,d=r*h,f=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+f*c,e[5]=p-y*c,e[9]=-a*l,e[2]=y-p*c,e[6]=f+d*c,e[10]=r*l}else if(t.order==="YXZ"){let p=l*u,d=l*h,f=c*u,y=c*h;e[0]=p+y*a,e[4]=f*a-d,e[8]=r*c,e[1]=r*h,e[5]=r*u,e[9]=-a,e[2]=d*a-f,e[6]=y+p*a,e[10]=r*l}else if(t.order==="ZXY"){let p=l*u,d=l*h,f=c*u,y=c*h;e[0]=p-y*a,e[4]=-r*h,e[8]=f+d*a,e[1]=d+f*a,e[5]=r*u,e[9]=y-p*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let p=r*u,d=r*h,f=a*u,y=a*h;e[0]=l*u,e[4]=f*c-d,e[8]=p*c+y,e[1]=l*h,e[5]=y*c+p,e[9]=d*c-f,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let p=r*l,d=r*c,f=a*l,y=a*c;e[0]=l*u,e[4]=y-p*h,e[8]=f*h+d,e[1]=h,e[5]=r*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+f,e[10]=p-y*h}else if(t.order==="XZY"){let p=r*l,d=r*c,f=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=p*h+y,e[5]=r*u,e[9]=d*h-f,e[2]=f*h-d,e[6]=a*u,e[10]=y*h+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(I0,t,L0)}lookAt(t,e,n){let s=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),ws.crossVectors(n,si),ws.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),ws.crossVectors(n,si)),ws.normalize(),Ea.crossVectors(si,ws),s[0]=ws.x,s[4]=Ea.x,s[8]=si.x,s[1]=ws.y,s[5]=Ea.y,s[9]=si.y,s[2]=ws.z,s[6]=Ea.z,s[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],p=n[9],d=n[13],f=n[2],y=n[6],g=n[10],m=n[14],M=n[3],x=n[7],_=n[11],v=n[15],T=s[0],E=s[4],R=s[8],S=s[12],b=s[1],P=s[5],N=s[9],z=s[13],O=s[2],G=s[6],j=s[10],et=s[14],tt=s[3],mt=s[7],Q=s[11],ft=s[15];return o[0]=r*T+a*b+l*O+c*tt,o[4]=r*E+a*P+l*G+c*mt,o[8]=r*R+a*N+l*j+c*Q,o[12]=r*S+a*z+l*et+c*ft,o[1]=u*T+h*b+p*O+d*tt,o[5]=u*E+h*P+p*G+d*mt,o[9]=u*R+h*N+p*j+d*Q,o[13]=u*S+h*z+p*et+d*ft,o[2]=f*T+y*b+g*O+m*tt,o[6]=f*E+y*P+g*G+m*mt,o[10]=f*R+y*N+g*j+m*Q,o[14]=f*S+y*z+g*et+m*ft,o[3]=M*T+x*b+_*O+v*tt,o[7]=M*E+x*P+_*G+v*mt,o[11]=M*R+x*N+_*j+v*Q,o[15]=M*S+x*z+_*et+v*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],p=t[10],d=t[14],f=t[3],y=t[7],g=t[11],m=t[15];return f*(+o*l*h-s*c*h-o*a*p+n*c*p+s*a*d-n*l*d)+y*(+e*l*d-e*c*p+o*r*p-s*r*d+s*c*u-o*l*u)+g*(+e*c*h-e*a*d-o*r*h+n*r*d+o*a*u-n*c*u)+m*(-s*a*u-e*l*h+e*a*p+s*r*h-n*r*p+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],p=t[10],d=t[11],f=t[12],y=t[13],g=t[14],m=t[15],M=h*g*c-y*p*c+y*l*d-a*g*d-h*l*m+a*p*m,x=f*p*c-u*g*c-f*l*d+r*g*d+u*l*m-r*p*m,_=u*y*c-f*h*c+f*a*d-r*y*d-u*a*m+r*h*m,v=f*h*l-u*y*l-f*a*p+r*y*p+u*a*g-r*h*g,T=e*M+n*x+s*_+o*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=M*E,t[1]=(y*p*o-h*g*o-y*s*d+n*g*d+h*s*m-n*p*m)*E,t[2]=(a*g*o-y*l*o+y*s*c-n*g*c-a*s*m+n*l*m)*E,t[3]=(h*l*o-a*p*o-h*s*c+n*p*c+a*s*d-n*l*d)*E,t[4]=x*E,t[5]=(u*g*o-f*p*o+f*s*d-e*g*d-u*s*m+e*p*m)*E,t[6]=(f*l*o-r*g*o-f*s*c+e*g*c+r*s*m-e*l*m)*E,t[7]=(r*p*o-u*l*o+u*s*c-e*p*c-r*s*d+e*l*d)*E,t[8]=_*E,t[9]=(f*h*o-u*y*o-f*n*d+e*y*d+u*n*m-e*h*m)*E,t[10]=(r*y*o-f*a*o+f*n*c-e*y*c-r*n*m+e*a*m)*E,t[11]=(u*a*o-r*h*o-u*n*c+e*h*c+r*n*d-e*a*d)*E,t[12]=v*E,t[13]=(u*y*s-f*h*s+f*n*p-e*y*p-u*n*g+e*h*g)*E,t[14]=(f*a*s-r*y*s-f*n*l+e*y*l+r*n*g-e*a*g)*E,t[15]=(r*h*s-u*a*s+u*n*l-e*h*l-r*n*p+e*a*p)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,u=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*r,0,c*l-s*a,u*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,u=r+r,h=a+a,p=o*c,d=o*u,f=o*h,y=r*u,g=r*h,m=a*h,M=l*c,x=l*u,_=l*h,v=n.x,T=n.y,E=n.z;return s[0]=(1-(y+m))*v,s[1]=(d+_)*v,s[2]=(f-x)*v,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(p+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(f+x)*E,s[9]=(g-M)*E,s[10]=(1-(p+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,o=To.set(s[0],s[1],s[2]).length(),r=To.set(s[4],s[5],s[6]).length(),a=To.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Ti.copy(this);let c=1/o,u=1/r,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,e.setFromRotationMatrix(Ti),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Ci,l=!1){let c=this.elements,u=2*o/(e-t),h=2*o/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),f,y;if(l)f=o/(r-o),y=r*o/(r-o);else if(a===Ci)f=-(r+o)/(r-o),y=-2*r*o/(r-o);else if(a===Er)f=-r/(r-o),y=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Ci,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s),f,y;if(l)f=1/(r-o),y=r/(r-o);else if(a===Ci)f=-2/(r-o),y=-(r+o)/(r-o);else if(a===Er)f=-1/(r-o),y=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},To=new nt,Ti=new Ze,I0=new nt(0,0,0),L0=new nt(1,1,1),ws=new nt,Ea=new nt,si=new nt,Hu=new Ze,Vu=new Cn,ri=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},D0=0,Wu=new nt,Ao=new Cn,is=new Ze,Ta=new nt,pr=new nt,U0=new nt,N0=new Cn,Gu=new nt(1,0,0),Xu=new nt(0,1,0),qu=new nt(0,0,1),Yu={type:"added"},z0={type:"removed"},Ro={type:"childadded",child:null},Vc={type:"childremoved",child:null},Pn=class i extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new nt,e=new ri,n=new Cn,s=new nt(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new He}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(Gu,t)}rotateY(t){return this.rotateOnAxis(Xu,t)}rotateZ(t){return this.rotateOnAxis(qu,t)}translateOnAxis(t,e){return Wu.copy(t).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gu,t)}translateY(t){return this.translateOnAxis(Xu,t)}translateZ(t){return this.translateOnAxis(qu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ta.copy(t):Ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(pr,Ta,this.up):is.lookAt(Ta,pr,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(is),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yu),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(z0),Vc.child=t,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yu),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,U0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,N0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),h=r(t.shapes),p=r(t.skeletons),d=r(t.animations),f=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),f.length>0&&(n.nodes=f)}return n.object=s,n;function r(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pn.DEFAULT_UP=new nt(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new nt,ss=new nt,Wc=new nt,os=new nt,Co=new nt,Po=new nt,$u=new nt,Gc=new nt,Xc=new nt,qc=new nt,Yc=new an,$c=new an,Zc=new an,As=class i{constructor(t=new nt,e=new nt,n=new nt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ai.subVectors(t,e),s.cross(Ai);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Ai.subVectors(s,e),ss.subVectors(n,e),Wc.subVectors(t,e);let r=Ai.dot(Ai),a=Ai.dot(ss),l=Ai.dot(Wc),c=ss.dot(ss),u=ss.dot(Wc),h=r*c-a*a;if(h===0)return o.set(0,0,0),null;let p=1/h,d=(c*l-a*u)*p,f=(r*u-a*l)*p;return o.set(1-d-f,f,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,os.x),l.addScaledVector(r,os.y),l.addScaledVector(a,os.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Yc.setScalar(0),$c.setScalar(0),Zc.setScalar(0),Yc.fromBufferAttribute(t,e),$c.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Yc,o.x),r.addScaledVector($c,o.y),r.addScaledVector(Zc,o.z),r}static isFrontFacing(t,e,n,s){return Ai.subVectors(n,e),ss.subVectors(t,e),Ai.cross(ss).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Ai.cross(ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,a;Co.subVectors(s,n),Po.subVectors(o,n),Gc.subVectors(t,n);let l=Co.dot(Gc),c=Po.dot(Gc);if(l<=0&&c<=0)return e.copy(n);Xc.subVectors(t,s);let u=Co.dot(Xc),h=Po.dot(Xc);if(u>=0&&h<=u)return e.copy(s);let p=l*h-u*c;if(p<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Co,r);qc.subVectors(t,o);let d=Co.dot(qc),f=Po.dot(qc);if(f>=0&&d<=f)return e.copy(o);let y=d*c-l*f;if(y<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(Po,a);let g=u*f-d*h;if(g<=0&&h-u>=0&&d-f>=0)return $u.subVectors(o,s),a=(h-u)/(h-u+(d-f)),e.copy(s).addScaledVector($u,a);let m=1/(g+y+p);return r=y*m,a=p*m,e.copy(n).addScaledVector(Co,r).addScaledVector(Po,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function jc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ce=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,tn.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=tn.workingColorSpace){return this.r=t,this.g=e,this.b=n,tn.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=tn.workingColorSpace){if(t=Uh(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=jc(r,o,t+1/3),this.g=jc(r,o,t),this.b=jc(r,o,t-1/3)}return tn.colorSpaceToWorking(this,s),this}setStyle(t,e=vn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){let n=id[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return tn.workingToColorSpace(Gn.copy(this),t),Math.round(Fe(Gn.r*255,0,255))*65536+Math.round(Fe(Gn.g*255,0,255))*256+Math.round(Fe(Gn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=tn.workingColorSpace){tn.workingToColorSpace(Gn.copy(this),e);let n=Gn.r,s=Gn.g,o=Gn.b,r=Math.max(n,s,o),a=Math.min(n,s,o),l,c,u=(a+r)/2;if(a===r)l=0,c=0;else{let h=r-a;switch(c=u<=.5?h/(r+a):h/(2-r-a),r){case n:l=(s-o)/h+(s<o?6:0);break;case s:l=(o-n)/h+2;break;case o:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=tn.workingColorSpace){return tn.workingToColorSpace(Gn.copy(this),e),t.r=Gn.r,t.g=Gn.g,t.b=Gn.b,t}getStyle(t=vn){tn.workingToColorSpace(Gn.copy(this),t);let e=Gn.r,n=Gn.g,s=Gn.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Es),this.setHSL(Es.h+t,Es.s+e,Es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Es),t.getHSL(Aa);let n=Mr(Es.h,Aa.h,e),s=Mr(Es.s,Aa.s,e),o=Mr(Es.l,Aa.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new Ce;Ce.NAMES=id;var F0=0,as=class extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=to,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=$a,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Nn=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var bn=new nt,Ra=new oe,k0=0,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ra.fromBufferAttribute(this,e),Ra.applyMatrix3(t),this.setXY(e,Ra.x,Ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix3(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyMatrix4(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.applyNormalMatrix(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)bn.fromBufferAttribute(this,e),bn.transformDirection(t),this.setXYZ(e,bn.x,bn.y,bn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),o=on(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ka&&(t.usage=this.usage),t}};var Rr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ue=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},O0=0,di=new Ze,Kc=new Pn,Io=new nt,oi=new Un,mr=new Un,Rn=new nt,We=class i extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nh(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new He().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,n){return di.makeTranslation(t,e,n),this.applyMatrix4(di),this}scale(t,e,n){return di.makeScale(t,e,n),this.applyMatrix4(di),this}lookAt(t){return Kc.lookAt(t),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];oi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rn.addVectors(oi.min,mr.min),oi.expandByPoint(Rn),Rn.addVectors(oi.max,mr.max),oi.expandByPoint(Rn)):(oi.expandByPoint(mr.min),oi.expandByPoint(mr.max))}oi.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Rn.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Rn));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rn.fromBufferAttribute(a,c),l&&(Io.fromBufferAttribute(t,c),Rn.add(Io)),s=Math.max(s,n.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new nt,l[R]=new nt;let c=new nt,u=new nt,h=new nt,p=new oe,d=new oe,f=new oe,y=new nt,g=new nt;function m(R,S,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),p.fromBufferAttribute(o,R),d.fromBufferAttribute(o,S),f.fromBufferAttribute(o,b),u.sub(c),h.sub(c),d.sub(p),f.sub(p);let P=1/(d.x*f.y-f.x*d.y);isFinite(P)&&(y.copy(u).multiplyScalar(f.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-f.x).multiplyScalar(P),a[R].add(y),a[S].add(y),a[b].add(y),l[R].add(g),l[S].add(g),l[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,S=M.length;R<S;++R){let b=M[R],P=b.start,N=b.count;for(let z=P,O=P+N;z<O;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let x=new nt,_=new nt,v=new nt,T=new nt;function E(R){v.fromBufferAttribute(s,R),T.copy(v);let S=a[R];x.copy(S),x.sub(v.multiplyScalar(v.dot(S))).normalize(),_.crossVectors(T,S);let P=_.dot(l[R])<0?-1:1;r.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=M.length;R<S;++R){let b=M[R],P=b.start,N=b.count;for(let z=P,O=P+N;z<O;z+=3)E(t.getX(z+0)),E(t.getX(z+1)),E(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new nt,o=new nt,r=new nt,a=new nt,l=new nt,c=new nt,u=new nt,h=new nt;if(t)for(let p=0,d=t.count;p<d;p+=3){let f=t.getX(p+0),y=t.getX(p+1),g=t.getX(p+2);s.fromBufferAttribute(e,f),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,g),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),o.fromBufferAttribute(e,p+1),r.fromBufferAttribute(e,p+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Rn.fromBufferAttribute(t,e),Rn.normalize(),t.setXYZ(e,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,p=new c.constructor(l.length*u),d=0,f=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let m=0;m<u;m++)p[f++]=c[d++]}return new je(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let u=0,h=c.length;u<h;u++){let p=c[u],d=t(p,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,p=c.length;h<p;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let o=t.morphAttributes;for(let c in o){let u=[],h=o[c];for(let p=0,d=h.length;p<d;p++)u.push(h[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zu=new Ze,Ks=new Ps,Ca=new jn,ju=new nt,Pa=new nt,Ia=new nt,La=new nt,Jc=new nt,Da=new nt,Ku=new nt,Ua=new nt,Te=class extends Pn{constructor(t=new We,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Da.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let u=a[l],h=o[l];u!==0&&(Jc.fromBufferAttribute(h,t),r?Da.addScaledVector(Jc,u):Da.addScaledVector(Jc.sub(e),u))}e.add(Da)}return e}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(o),Ks.copy(t.ray).recast(t.near),!(Ca.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Ca,ju)===null||Ks.origin.distanceToSquared(ju)>(t.far-t.near)**2))&&(Zu.copy(o).invert(),Ks.copy(t.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ks)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,p=o.groups,d=o.drawRange;if(a!==null)if(Array.isArray(r))for(let f=0,y=p.length;f<y;f++){let g=p[f],m=r[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,v=x;_<v;_+=3){let T=a.getX(_),E=a.getX(_+1),R=a.getX(_+2);s=Na(this,m,t,n,c,u,h,T,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let f=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let g=f,m=y;g<m;g+=3){let M=a.getX(g),x=a.getX(g+1),_=a.getX(g+2);s=Na(this,r,t,n,c,u,h,M,x,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,y=p.length;f<y;f++){let g=p[f],m=r[g.materialIndex],M=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,v=x;_<v;_+=3){let T=_,E=_+1,R=_+2;s=Na(this,m,t,n,c,u,h,T,E,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let f=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let g=f,m=y;g<m;g+=3){let M=g,x=g+1,_=g+2;s=Na(this,r,t,n,c,u,h,M,x,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function B0(i,t,e,n,s,o,r,a){let l;if(t.side===kn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===Ii,a),l===null)return null;Ua.copy(a),Ua.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ua);return c<e.near||c>e.far?null:{distance:c,point:Ua.clone(),object:i}}function Na(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Pa),i.getVertexPosition(l,Ia),i.getVertexPosition(c,La);let u=B0(i,t,e,n,Pa,Ia,La,Ku);if(u){let h=new nt;As.getBarycoord(Ku,Pa,Ia,La,h),s&&(u.uv=As.getInterpolatedAttribute(s,a,l,c,h,new oe)),o&&(u.uv1=As.getInterpolatedAttribute(o,a,l,c,h,new oe)),r&&(u.normal=As.getInterpolatedAttribute(r,a,l,c,h,new nt),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new nt,materialIndex:0};As.getNormal(Pa,Ia,La,p.normal),u.face=p,u.barycoord=h}return u}var nn=class i extends We{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],u=[],h=[],p=0,d=0;f("z","y","x",-1,-1,n,e,t,r,o,0),f("z","y","x",1,-1,n,e,-t,r,o,1),f("x","z","y",1,1,t,n,e,s,r,2),f("x","z","y",1,-1,t,n,-e,s,r,3),f("x","y","z",1,-1,t,e,n,s,o,4),f("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function f(y,g,m,M,x,_,v,T,E,R,S){let b=_/E,P=v/R,N=_/2,z=v/2,O=T/2,G=E+1,j=R+1,et=0,tt=0,mt=new nt;for(let Q=0;Q<j;Q++){let ft=Q*P-z;for(let Et=0;Et<G;Et++){let rt=Et*b-N;mt[y]=rt*M,mt[g]=ft*x,mt[m]=O,c.push(mt.x,mt.y,mt.z),mt[y]=0,mt[g]=0,mt[m]=T>0?1:-1,u.push(mt.x,mt.y,mt.z),h.push(Et/E),h.push(1-Q/R),et+=1}}for(let Q=0;Q<R;Q++)for(let ft=0;ft<E;ft++){let Et=p+ft+G*Q,rt=p+ft+G*(Q+1),it=p+(ft+1)+G*(Q+1),ct=p+(ft+1)+G*Q;l.push(Et,rt,ct),l.push(rt,it,ct),tt+=6}a.addGroup(d,tt,S),d+=tt,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ho(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qn(i){let t={};for(let e=0;e<i.length;e++){let n=ho(i[e]);for(let s in n)t[s]=n[s]}return t}function H0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:tn.workingColorSpace}var fa={clone:ho,merge:qn},V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ho(t.uniforms),this.uniformsGroups=H0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Pr=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ts=new nt,Ju=new oe,Qu=new oe,Xn=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-t/Ts.z)}getViewSize(t,e){return this.getViewBounds(t,Ju,Qu),e.subVectors(Qu,Ju)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Lo=-90,Do=1,el=class extends Pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xn(Lo,Do,t,e);s.layers=this.layers,this.add(s);let o=new Xn(Lo,Do,t,e);o.layers=this.layers,this.add(o);let r=new Xn(Lo,Do,t,e);r.layers=this.layers,this.add(r);let a=new Xn(Lo,Do,t,e);a.layers=this.layers,this.add(a);let l=new Xn(Lo,Do,t,e);l.layers=this.layers,this.add(l);let c=new Xn(Lo,Do,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,u]=this.children,h=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,p,d),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ir=class extends Dn{constructor(t=[],e=lo,n,s,o,r,a,l,c,u){super(t,e,n,s,o,r,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nl=class extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ir(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),o=new zn({name:"CubemapFromEquirect",uniforms:ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:cs});o.uniforms.tEquirect.value=e;let r=new Te(s,o),a=e.minFilter;return e.minFilter===zs&&(e.minFilter=Di),new el(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},$e=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},G0={type:"move"},Wo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=u.position.distanceTo(h.position),d=.02,f=.005;c.inputState.pinching&&p>d+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Lr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Go=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zn=new nt,mi=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Zn.fromBufferAttribute(this,e),Zn.applyMatrix4(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zn.fromBufferAttribute(this,e),Zn.applyNormalMatrix(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zn.fromBufferAttribute(this,e),Zn.transformDirection(t),this.setXYZ(e,Zn.x,Zn.y,Zn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),o=on(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var za=new nt,tf=new nt,Xo=class extends Pn{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);let e=t.levels;for(let n=0,s=e.length;n<s;n++){let o=e[n];this.addLevel(o.object.clone(),o.distance,o.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);let s=this.levels,o;for(o=0;o<s.length&&!(e<s[o].distance);o++);return s.splice(o,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){let e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){let s=e.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){let e=this.levels;if(e.length>0){let n,s;for(n=1,s=e.length;n<s;n++){let o=e[n].distance;if(e[n].object.visible&&(o-=o*e[n].hysteresis),t<o)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){za.setFromMatrixPosition(this.matrixWorld);let s=t.ray.origin.distanceTo(za);this.getObjectForDistance(s).raycast(t,e)}}update(t){let e=this.levels;if(e.length>1){za.setFromMatrixPosition(t.matrixWorld),tf.setFromMatrixPosition(this.matrixWorld);let n=za.distanceTo(tf)/t.zoom;e[0].object.visible=!0;let s,o;for(s=1,o=e.length;s<o;s++){let r=e[s].distance;if(e[s].object.visible&&(r-=r*e[s].hysteresis),n>=r)e[s-1].object.visible=!1,e[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<o;s++)e[s].object.visible=!1}}toJSON(t){let e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];let n=this.levels;for(let s=0,o=n.length;s<o;s++){let r=n[s];e.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return e}};var il=class extends Dn{constructor(t=null,e=1,n=1,s,o,r,a,l,c=Qn,u=Qn,h,p){super(null,r,a,l,c,u,s,o,h,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qo=class extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Uo=new Ze,ef=new Ze,Fa=[],nf=new Un,X0=new Ze,gr=new Te,yr=new jn,gi=class extends Te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,X0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Un),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Uo),nf.copy(t.boundingBox).applyMatrix4(Uo),this.boundingBox.union(nf)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Uo),yr.copy(t.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Uo),ef.multiplyMatrices(n,Uo),gr.matrixWorld=ef,gr.raycast(t,Fa);for(let r=0,a=Fa.length;r<a;r++){let l=Fa[r];l.instanceId=o,l.object=this,e.push(l)}Fa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new qo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new il(new Float32Array(s*this.count),s,this.count,Nl,Ni));let o=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let a=this.geometry.morphTargetsRelative?1:1-r,l=s*t;o[l]=a,o.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qc=new nt,q0=new nt,Y0=new He,pi=class{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Qc.subVectors(n,e).cross(q0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Y0.getNormalMatrix(t),s=this.coplanarPoint(Qc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new jn,$0=new oe(.5,.5),ka=new nt,Yo=class{constructor(t=new pi,e=new pi,n=new pi,s=new pi,o=new pi,r=new pi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){let s=this.planes,o=t.elements,r=o[0],a=o[1],l=o[2],c=o[3],u=o[4],h=o[5],p=o[6],d=o[7],f=o[8],y=o[9],g=o[10],m=o[11],M=o[12],x=o[13],_=o[14],v=o[15];if(s[0].setComponents(c-r,d-u,m-f,v-M).normalize(),s[1].setComponents(c+r,d+u,m+f,v+M).normalize(),s[2].setComponents(c+a,d+h,m+y,v+x).normalize(),s[3].setComponents(c-a,d-h,m-y,v-x).normalize(),n)s[4].setComponents(l,p,g,_).normalize(),s[5].setComponents(c-l,d-p,m-g,v-_).normalize();else if(s[4].setComponents(c-l,d-p,m-g,v-_).normalize(),e===Ci)s[5].setComponents(c+l,d+p,m+g,v+_).normalize();else if(e===Er)s[5].setComponents(l,p,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(t){Js.center.set(0,0,0);let e=$0.distanceTo(t.center);return Js.radius=.7071067811865476+e,Js.applyMatrix4(t.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ka.x=s.normal.x>0?t.max.x:t.min.x,ka.y=s.normal.y>0?t.max.y:t.min.y,ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ls=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sf=new Ze,ch=new Ps,Oa=new jn,Ba=new nt,Vi=class extends Pn{constructor(t=new We,e=new ls){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),Oa.radius+=o,t.ray.intersectsSphere(Oa)===!1)return;sf.copy(s).invert(),ch.copy(t.ray).applyMatrix4(sf);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let p=Math.max(0,r.start),d=Math.min(c.count,r.start+r.count);for(let f=p,y=d;f<y;f++){let g=c.getX(f);Ba.fromBufferAttribute(h,g),of(Ba,g,l,s,t,e,this)}}else{let p=Math.max(0,r.start),d=Math.min(h.count,r.start+r.count);for(let f=p,y=d;f<y;f++)Ba.fromBufferAttribute(h,f),of(Ba,f,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function of(i,t,e,n,s,o,r){let a=ch.distanceSqToPoint(i);if(a<e){let l=new nt;ch.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var Fn=class extends Dn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ur=class extends Dn{constructor(t,e,n=Fs,s,o,r,a=Qn,l=Qn,c,u=ko,h=1){if(u!==ko&&u!==ir)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:h};super(p,s,o,r,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ho(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nr=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zr=class i extends We{constructor(t=1,e=1,n=4,s=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:o},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),o=Math.max(1,Math.floor(o));let r=[],a=[],l=[],c=[],u=e/2,h=Math.PI/2*t,p=e,d=2*h+p,f=n*2+o,y=s+1,g=new nt,m=new nt;for(let M=0;M<=f;M++){let x=0,_=0,v=0,T=0;if(M<=n){let S=M/n,b=S*Math.PI/2;_=-u-t*Math.cos(b),v=t*Math.sin(b),T=-t*Math.cos(b),x=S*h}else if(M<=n+o){let S=(M-n)/o;_=-u+S*e,v=t,T=0,x=h+S*p}else{let S=(M-n-o)/n,b=S*Math.PI/2;_=u+t*Math.sin(b),v=t*Math.cos(b),T=t*Math.sin(b),x=h+p+S*h}let E=Math.max(0,Math.min(1,x/d)),R=0;M===0?R=.5/s:M===f&&(R=-.5/s);for(let S=0;S<=s;S++){let b=S/s,P=b*Math.PI*2,N=Math.sin(P),z=Math.cos(P);m.x=-v*z,m.y=_,m.z=v*N,a.push(m.x,m.y,m.z),g.set(-v*z,T,v*N),g.normalize(),l.push(g.x,g.y,g.z),c.push(b+R,E)}if(M>0){let S=(M-1)*y;for(let b=0;b<s;b++){let P=S+b,N=S+b+1,z=M*y+b,O=M*y+b+1;r.push(P,N,z),r.push(N,O,z)}}}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Fr=class i extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let o=[],r=[],a=[],l=[],c=new nt,u=new oe;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=e;h++,p+=3){let d=n+h/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),r.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(r[p]/t+1)/2,u.y=(r[p+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},qe=class i extends We{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),o=Math.floor(o);let u=[],h=[],p=[],d=[],f=0,y=[],g=n/2,m=0;M(),r===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(p,3)),this.setAttribute("uv",new Ue(d,2));function M(){let _=new nt,v=new nt,T=0,E=(e-t)/n;for(let R=0;R<=o;R++){let S=[],b=R/o,P=b*(e-t)+t;for(let N=0;N<=s;N++){let z=N/s,O=z*l+a,G=Math.sin(O),j=Math.cos(O);v.x=P*G,v.y=-b*n+g,v.z=P*j,h.push(v.x,v.y,v.z),_.set(G,E,j).normalize(),p.push(_.x,_.y,_.z),d.push(z,1-b),S.push(f++)}y.push(S)}for(let R=0;R<s;R++)for(let S=0;S<o;S++){let b=y[S][R],P=y[S+1][R],N=y[S+1][R+1],z=y[S][R+1];(t>0||S!==0)&&(u.push(b,P,z),T+=3),(e>0||S!==o-1)&&(u.push(P,N,z),T+=3)}c.addGroup(m,T,0),m+=T}function x(_){let v=f,T=new oe,E=new nt,R=0,S=_===!0?t:e,b=_===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,g*b,0),p.push(0,b,0),d.push(.5,.5),f++;let P=f;for(let N=0;N<=s;N++){let O=N/s*l+a,G=Math.cos(O),j=Math.sin(O);E.x=S*j,E.y=g*b,E.z=S*G,h.push(E.x,E.y,E.z),p.push(0,b,0),T.x=G*.5+.5,T.y=j*.5*b+.5,d.push(T.x,T.y),f++}for(let N=0;N<s;N++){let z=v+N,O=P+N;_===!0?u.push(O,O+1,z):u.push(O+1,O,z),R+=3}c.addGroup(m,R,_===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var kr=class i extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let o=[],r=[];a(s),c(n),u(),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(o.slice(),3)),this.setAttribute("uv",new Ue(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new nt,_=new nt,v=new nt;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],_),d(e[T+2],v),l(x,_,v,M)}function l(M,x,_,v){let T=v+1,E=[];for(let R=0;R<=T;R++){E[R]=[];let S=M.clone().lerp(_,R/T),b=x.clone().lerp(_,R/T),P=T-R;for(let N=0;N<=P;N++)N===0&&R===T?E[R][N]=S:E[R][N]=S.clone().lerp(b,N/P)}for(let R=0;R<T;R++)for(let S=0;S<2*(T-R)-1;S++){let b=Math.floor(S/2);S%2===0?(p(E[R][b+1]),p(E[R+1][b]),p(E[R][b])):(p(E[R][b+1]),p(E[R+1][b+1]),p(E[R+1][b]))}}function c(M){let x=new nt;for(let _=0;_<o.length;_+=3)x.x=o[_+0],x.y=o[_+1],x.z=o[_+2],x.normalize().multiplyScalar(M),o[_+0]=x.x,o[_+1]=x.y,o[_+2]=x.z}function u(){let M=new nt;for(let x=0;x<o.length;x+=3){M.x=o[x+0],M.y=o[x+1],M.z=o[x+2];let _=g(M)/2/Math.PI+.5,v=m(M)/Math.PI+.5;r.push(_,1-v)}f(),h()}function h(){for(let M=0;M<r.length;M+=6){let x=r[M+0],_=r[M+2],v=r[M+4],T=Math.max(x,_,v),E=Math.min(x,_,v);T>.9&&E<.1&&(x<.2&&(r[M+0]+=1),_<.2&&(r[M+2]+=1),v<.2&&(r[M+4]+=1))}}function p(M){o.push(M.x,M.y,M.z)}function d(M,x){let _=M*3;x.x=t[_+0],x.y=t[_+1],x.z=t[_+2]}function f(){let M=new nt,x=new nt,_=new nt,v=new nt,T=new oe,E=new oe,R=new oe;for(let S=0,b=0;S<o.length;S+=9,b+=6){M.set(o[S+0],o[S+1],o[S+2]),x.set(o[S+3],o[S+4],o[S+5]),_.set(o[S+6],o[S+7],o[S+8]),T.set(r[b+0],r[b+1]),E.set(r[b+2],r[b+3]),R.set(r[b+4],r[b+5]),v.copy(M).add(x).add(_).divideScalar(3);let P=g(v);y(T,b+0,M,P),y(E,b+2,x,P),y(R,b+4,_,P)}}function y(M,x,_,v){v<0&&M.x===1&&(r[x]=M.x-1),_.x===0&&_.z===0&&(r[x]=v/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},io=class i extends kr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);let u=n[s],p=n[s+1]-u,d=(r-u)/p;return(s+d)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new oe:new nt);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new nt,s=[],o=[],r=[],a=new nt,l=new Ze;for(let d=0;d<=t;d++){let f=d/t;s[d]=this.getTangentAt(f,new nt)}o[0]=new nt,r[0]=new nt;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let d=1;d<=t;d++){if(o[d]=o[d-1].clone(),r[d]=r[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos(Fe(s[d-1].dot(s[d]),-1,1));o[d].applyMatrix4(l.makeRotationAxis(a,f))}r[d].crossVectors(s[d],o[d])}if(e===!0){let d=Math.acos(Fe(o[0].dot(o[t]),-1,1));d/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(d=-d);for(let f=1;f<=t;f++)o[f].applyMatrix4(l.makeRotationAxis(s[f],d*f)),r[f].crossVectors(s[f],o[f])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$o=class extends ai{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new oe){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*u-d*h+this.aX,c=p*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},sl=class extends $o{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Fh(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,u,h){let p=(r-o)/c-(a-o)/(c+u)+(a-r)/u,d=(a-r)/u-(l-r)/(u+h)+(l-a)/h;p*=u,d*=u,s(r,a,p,d)},calc:function(o){let r=o*o,a=r*o;return i+t*o+e*r+n*a}}}var Ha=new nt,th=new Fh,eh=new Fh,nh=new Fh,Zo=class extends ai{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new nt){let n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%o]:(Ha.subVectors(s[0],s[1]).add(s[0]),c=Ha);let h=s[a%o],p=s[(a+1)%o];if(this.closed||a+2<o?u=s[(a+2)%o]:(Ha.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);y<1e-4&&(y=1),f<1e-4&&(f=y),g<1e-4&&(g=y),th.initNonuniformCatmullRom(c.x,h.x,p.x,u.x,f,y,g),eh.initNonuniformCatmullRom(c.y,h.y,p.y,u.y,f,y,g),nh.initNonuniformCatmullRom(c.z,h.z,p.z,u.z,f,y,g)}else this.curveType==="catmullrom"&&(th.initCatmullRom(c.x,h.x,p.x,u.x,this.tension),eh.initCatmullRom(c.y,h.y,p.y,u.y,this.tension),nh.initCatmullRom(c.z,h.z,p.z,u.z,this.tension));return n.set(th.calc(l),eh.calc(l),nh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new nt().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rf(i,t,e,n,s){let o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function Z0(i,t){let e=1-i;return e*e*t}function j0(i,t){return 2*(1-i)*i*t}function K0(i,t){return i*i*t}function vr(i,t,e,n){return Z0(i,t)+j0(i,e)+K0(i,n)}function J0(i,t){let e=1-i;return e*e*e*t}function Q0(i,t){let e=1-i;return 3*e*e*i*t}function tm(i,t){return 3*(1-i)*i*i*t}function em(i,t){return i*i*i*t}function br(i,t,e,n,s){return J0(i,t)+Q0(i,e)+tm(i,n)+em(i,s)}var Or=class extends ai{constructor(t=new oe,e=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new oe){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(br(t,s.x,o.x,r.x,a.x),br(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends ai{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(br(t,s.x,o.x,r.x,a.x),br(t,s.y,o.y,r.y,a.y),br(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Br=class extends ai{constructor(t=new oe,e=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new oe){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new oe){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends ai{constructor(t=new nt,e=new nt){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends ai{constructor(t=new oe,e=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new oe){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(vr(t,s.x,o.x,r.x),vr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends ai{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(vr(t,s.x,o.x,r.x),vr(t,s.y,o.y,r.y),vr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends ai{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new oe){let n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],h=s[r>s.length-3?s.length-1:r+2];return n.set(rf(a,l.x,c.x,u.x,h.x),rf(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new oe().fromArray(s))}return this}},al=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:Zo,CubicBezierCurve:Or,CubicBezierCurve3:ol,EllipseCurve:$o,LineCurve:Br,LineCurve3:rl,QuadraticBezierCurve:Hr,QuadraticBezierCurve3:Vr,SplineCurve:Wr}),ll=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new al[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new al[s.type]().fromJSON(s))}return this}},Gr=class extends ll{constructor(t){super(),this.type="Path",this.currentPoint=new oe,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Br(this.currentPoint.clone(),new oe(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new Hr(this.currentPoint.clone(),new oe(t,e),new oe(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){let a=new Or(this.currentPoint.clone(),new oe(t,e),new oe(n,s),new oe(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){let c=new $o(t,e,n,s,o,r,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},so=class extends Gr{constructor(t){super(t),this.uuid=Oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Gr().fromJSON(s))}return this}};function nm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,o=sd(i,0,s,e,!0),r=[];if(!o||o.next===o.prev)return r;let a,l,c;if(n&&(o=am(i,t,o,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let p=e;p<s;p+=e){let d=i[p],f=i[p+1];d<a&&(a=d),f<l&&(l=f),d>u&&(u=d),f>h&&(h=f)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Xr(o,r,e,a,l,c,0),r}function sd(i,t,e,n,s){let o;if(s===_m(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=af(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=af(r/n|0,i[r],i[r+1],o);return o&&jo(o,o.next)&&(Yr(o),o=o.next),o}function oo(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jo(e,e.next)||yn(e.prev,e,e.next)===0)){if(Yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xr(i,t,e,n,s,o,r){if(!i)return;!r&&o&&fm(i,n,s,o);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(o?sm(i,n,s,o):im(i)){t.push(l.i,i.i,c.i),Yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){r?r===1?(i=om(oo(i),t),Xr(i,t,e,n,s,o,2)):r===2&&rm(i,t,e,n,s,o):Xr(oo(i),t,e,n,s,o,1);break}}}function im(i){let t=i.prev,e=i,n=i.next;if(yn(t,e,n)>=0)return!1;let s=t.x,o=e.x,r=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,o,r),h=Math.min(a,l,c),p=Math.max(s,o,r),d=Math.max(a,l,c),f=n.next;for(;f!==t;){if(f.x>=u&&f.x<=p&&f.y>=h&&f.y<=d&&_r(s,a,o,l,r,c,f.x,f.y)&&yn(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function sm(i,t,e,n){let s=i.prev,o=i,r=i.next;if(yn(s,o,r)>=0)return!1;let a=s.x,l=o.x,c=r.x,u=s.y,h=o.y,p=r.y,d=Math.min(a,l,c),f=Math.min(u,h,p),y=Math.max(a,l,c),g=Math.max(u,h,p),m=hh(d,f,t,e,n),M=hh(y,g,t,e,n),x=i.prevZ,_=i.nextZ;for(;x&&x.z>=m&&_&&_.z<=M;){if(x.x>=d&&x.x<=y&&x.y>=f&&x.y<=g&&x!==s&&x!==r&&_r(a,u,l,h,c,p,x.x,x.y)&&yn(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=y&&_.y>=f&&_.y<=g&&_!==s&&_!==r&&_r(a,u,l,h,c,p,_.x,_.y)&&yn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=y&&x.y>=f&&x.y<=g&&x!==s&&x!==r&&_r(a,u,l,h,c,p,x.x,x.y)&&yn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=y&&_.y>=f&&_.y<=g&&_!==s&&_!==r&&_r(a,u,l,h,c,p,_.x,_.y)&&yn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function om(i,t){let e=i;do{let n=e.prev,s=e.next.next;!jo(n,s)&&rd(n,e,e.next,s)&&qr(n,s)&&qr(s,n)&&(t.push(n.i,e.i,s.i),Yr(e),Yr(e.next),e=i=s),e=e.next}while(e!==i);return oo(e)}function rm(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&mm(r,a)){let l=ad(r,a);r=oo(r,r.next),l=oo(l,l.next),Xr(r,t,e,n,s,o,0),Xr(l,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function am(i,t,e,n){let s=[];for(let o=0,r=t.length;o<r;o++){let a=t[o]*n,l=o<r-1?t[o+1]*n:i.length,c=sd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pm(c))}s.sort(lm);for(let o=0;o<s.length;o++)e=cm(s[o],e);return e}function lm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cm(i,t){let e=hm(i,t);if(!e)return t;let n=ad(e,i);return oo(n,n.next),oo(e,e.next)}function hm(i,t){let e=t,n=i.x,s=i.y,o=-1/0,r;if(jo(i,e))return e;do{if(jo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>o&&(o=h,r=e.x<e.next.x?e:e.next,h===n))return r}e=e.next}while(e!==t);if(!r)return null;let a=r,l=r.x,c=r.y,u=1/0;e=r;do{if(n>=e.x&&e.x>=l&&n!==e.x&&od(s<c?n:o,s,l,c,s<c?o:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);qr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&um(r,e)))&&(r=e,u=h)}e=e.next}while(e!==a);return r}function um(i,t){return yn(i.prev,i,t.prev)<0&&yn(t.next,i,i.next)<0}function fm(i,t,e,n){let s=i;do s.z===0&&(s.z=hh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,dm(s)}function dm(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,a=0;for(let c=0;c<e&&(a++,r=r.nextZ,!!r);c++);let l=e;for(;a>0||l>0&&r;)a!==0&&(l===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,a--):(s=r,r=r.nextZ,l--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function hh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function od(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function _r(i,t,e,n,s,o,r,a){return!(i===r&&t===a)&&od(i,t,e,n,s,o,r,a)}function mm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gm(i,t)&&(qr(i,t)&&qr(t,i)&&ym(i,t)&&(yn(i.prev,i,t.prev)||yn(i,t.prev,t))||jo(i,t)&&yn(i.prev,i,i.next)>0&&yn(t.prev,t,t.next)>0)}function yn(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jo(i,t){return i.x===t.x&&i.y===t.y}function rd(i,t,e,n){let s=Wa(yn(i,t,e)),o=Wa(yn(i,t,n)),r=Wa(yn(e,n,i)),a=Wa(yn(e,n,t));return!!(s!==o&&r!==a||s===0&&Va(i,e,t)||o===0&&Va(i,n,t)||r===0&&Va(e,i,n)||a===0&&Va(e,t,n))}function Va(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wa(i){return i>0?1:i<0?-1:0}function gm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qr(i,t){return yn(i.prev,i,i.next)<0?yn(i,t,i.next)>=0&&yn(i,i.prev,t)>=0:yn(i,t,i.prev)<0||yn(i,i.next,t)<0}function ym(i,t){let e=i,n=!1,s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ad(i,t){let e=uh(i.i,i.x,i.y),n=uh(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function af(i,t,e,n){let s=uh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function uh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _m(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}var fh=class{static triangulate(t,e,n=2){return nm(t,e,n)}},Pi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],o=[];lf(t),cf(n,t);let r=t.length;e.forEach(lf);for(let l=0;l<e.length;l++)s.push(r),r+=e[l].length,cf(n,e[l]);let a=fh.triangulate(n,s);for(let l=0;l<a.length;l+=3)o.push(a.slice(l,l+3));return o}};function lf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function cf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ko=class i extends We{constructor(t=new so([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];r(c)}this.setAttribute("position",new Ue(s,3)),this.setAttribute("uv",new Ue(o,2)),this.computeVertexNormals();function r(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,f=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:xm,x,_=!1,v,T,E,R;m&&(x=m.getSpacedPoints(u),_=!0,p=!1,v=m.computeFrenetFrames(u,!1),T=new nt,E=new nt,R=new nt),p||(g=0,d=0,f=0,y=0);let S=a.extractPoints(c),b=S.shape,P=S.holes;if(!Pi.isClockWise(b)){b=b.reverse();for(let dt=0,xt=P.length;dt<xt;dt++){let At=P[dt];Pi.isClockWise(At)&&(P[dt]=At.reverse())}}function z(dt){let At=10000000000000001e-36,Lt=dt[0];for(let Qt=1;Qt<=dt.length;Qt++){let jt=Qt%dt.length,Kt=dt[jt],_e=Kt.x-Lt.x,Pe=Kt.y-Lt.y,Y=_e*_e+Pe*Pe,D=Math.max(Math.abs(Kt.x),Math.abs(Kt.y),Math.abs(Lt.x),Math.abs(Lt.y)),St=At*D*D;if(Y<=St){dt.splice(jt,1),Qt--;continue}Lt=Kt}}z(b),P.forEach(z);let O=P.length,G=b;for(let dt=0;dt<O;dt++){let xt=P[dt];b=b.concat(xt)}function j(dt,xt,At){return xt||console.error("THREE.ExtrudeGeometry: vec does not exist"),dt.clone().addScaledVector(xt,At)}let et=b.length;function tt(dt,xt,At){let Lt,Qt,jt,Kt=dt.x-xt.x,_e=dt.y-xt.y,Pe=At.x-dt.x,Y=At.y-dt.y,D=Kt*Kt+_e*_e,St=Kt*Y-_e*Pe;if(Math.abs(St)>Number.EPSILON){let Xt=Math.sqrt(D),qt=Math.sqrt(Pe*Pe+Y*Y),Nt=xt.x-_e/Xt,be=xt.y+Kt/Xt,ae=At.x-Y/qt,ve=At.y+Pe/qt,we=((ae-Nt)*Y-(ve-be)*Pe)/(Kt*Y-_e*Pe);Lt=Nt+Kt*we-dt.x,Qt=be+_e*we-dt.y;let se=Lt*Lt+Qt*Qt;if(se<=2)return new oe(Lt,Qt);jt=Math.sqrt(se/2)}else{let Xt=!1;Kt>Number.EPSILON?Pe>Number.EPSILON&&(Xt=!0):Kt<-Number.EPSILON?Pe<-Number.EPSILON&&(Xt=!0):Math.sign(_e)===Math.sign(Y)&&(Xt=!0),Xt?(Lt=-_e,Qt=Kt,jt=Math.sqrt(D)):(Lt=Kt,Qt=_e,jt=Math.sqrt(D/2))}return new oe(Lt/jt,Qt/jt)}let mt=[];for(let dt=0,xt=G.length,At=xt-1,Lt=dt+1;dt<xt;dt++,At++,Lt++)At===xt&&(At=0),Lt===xt&&(Lt=0),mt[dt]=tt(G[dt],G[At],G[Lt]);let Q=[],ft,Et=mt.concat();for(let dt=0,xt=O;dt<xt;dt++){let At=P[dt];ft=[];for(let Lt=0,Qt=At.length,jt=Qt-1,Kt=Lt+1;Lt<Qt;Lt++,jt++,Kt++)jt===Qt&&(jt=0),Kt===Qt&&(Kt=0),ft[Lt]=tt(At[Lt],At[jt],At[Kt]);Q.push(ft),Et=Et.concat(ft)}let rt;if(g===0)rt=Pi.triangulateShape(G,P);else{let dt=[],xt=[];for(let At=0;At<g;At++){let Lt=At/g,Qt=d*Math.cos(Lt*Math.PI/2),jt=f*Math.sin(Lt*Math.PI/2)+y;for(let Kt=0,_e=G.length;Kt<_e;Kt++){let Pe=j(G[Kt],mt[Kt],jt);Dt(Pe.x,Pe.y,-Qt),Lt===0&&dt.push(Pe)}for(let Kt=0,_e=O;Kt<_e;Kt++){let Pe=P[Kt];ft=Q[Kt];let Y=[];for(let D=0,St=Pe.length;D<St;D++){let Xt=j(Pe[D],ft[D],jt);Dt(Xt.x,Xt.y,-Qt),Lt===0&&Y.push(Xt)}Lt===0&&xt.push(Y)}}rt=Pi.triangulateShape(dt,xt)}let it=rt.length,ct=f+y;for(let dt=0;dt<et;dt++){let xt=p?j(b[dt],Et[dt],ct):b[dt];_?(E.copy(v.normals[0]).multiplyScalar(xt.x),T.copy(v.binormals[0]).multiplyScalar(xt.y),R.copy(x[0]).add(E).add(T),Dt(R.x,R.y,R.z)):Dt(xt.x,xt.y,0)}for(let dt=1;dt<=u;dt++)for(let xt=0;xt<et;xt++){let At=p?j(b[xt],Et[xt],ct):b[xt];_?(E.copy(v.normals[dt]).multiplyScalar(At.x),T.copy(v.binormals[dt]).multiplyScalar(At.y),R.copy(x[dt]).add(E).add(T),Dt(R.x,R.y,R.z)):Dt(At.x,At.y,h/u*dt)}for(let dt=g-1;dt>=0;dt--){let xt=dt/g,At=d*Math.cos(xt*Math.PI/2),Lt=f*Math.sin(xt*Math.PI/2)+y;for(let Qt=0,jt=G.length;Qt<jt;Qt++){let Kt=j(G[Qt],mt[Qt],Lt);Dt(Kt.x,Kt.y,h+At)}for(let Qt=0,jt=P.length;Qt<jt;Qt++){let Kt=P[Qt];ft=Q[Qt];for(let _e=0,Pe=Kt.length;_e<Pe;_e++){let Y=j(Kt[_e],ft[_e],Lt);_?Dt(Y.x,Y.y+x[u-1].y,x[u-1].x+At):Dt(Y.x,Y.y,h+At)}}}J(),st();function J(){let dt=s.length/3;if(p){let xt=0,At=et*xt;for(let Lt=0;Lt<it;Lt++){let Qt=rt[Lt];Ft(Qt[2]+At,Qt[1]+At,Qt[0]+At)}xt=u+g*2,At=et*xt;for(let Lt=0;Lt<it;Lt++){let Qt=rt[Lt];Ft(Qt[0]+At,Qt[1]+At,Qt[2]+At)}}else{for(let xt=0;xt<it;xt++){let At=rt[xt];Ft(At[2],At[1],At[0])}for(let xt=0;xt<it;xt++){let At=rt[xt];Ft(At[0]+et*u,At[1]+et*u,At[2]+et*u)}}n.addGroup(dt,s.length/3-dt,0)}function st(){let dt=s.length/3,xt=0;ht(G,xt),xt+=G.length;for(let At=0,Lt=P.length;At<Lt;At++){let Qt=P[At];ht(Qt,xt),xt+=Qt.length}n.addGroup(dt,s.length/3-dt,1)}function ht(dt,xt){let At=dt.length;for(;--At>=0;){let Lt=At,Qt=At-1;Qt<0&&(Qt=dt.length-1);for(let jt=0,Kt=u+g*2;jt<Kt;jt++){let _e=et*jt,Pe=et*(jt+1),Y=xt+Lt+_e,D=xt+Qt+_e,St=xt+Qt+Pe,Xt=xt+Lt+Pe;Tt(Y,D,St,Xt)}}}function Dt(dt,xt,At){l.push(dt),l.push(xt),l.push(At)}function Ft(dt,xt,At){Gt(dt),Gt(xt),Gt(At);let Lt=s.length/3,Qt=M.generateTopUV(n,s,Lt-3,Lt-2,Lt-1);q(Qt[0]),q(Qt[1]),q(Qt[2])}function Tt(dt,xt,At,Lt){Gt(dt),Gt(xt),Gt(Lt),Gt(xt),Gt(At),Gt(Lt);let Qt=s.length/3,jt=M.generateSideWallUV(n,s,Qt-6,Qt-3,Qt-2,Qt-1);q(jt[0]),q(jt[1]),q(jt[3]),q(jt[1]),q(jt[2]),q(jt[3])}function Gt(dt){s.push(l[dt*3+0]),s.push(l[dt*3+1]),s.push(l[dt*3+2])}function q(dt){o.push(dt.x),o.push(dt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mm(e,n,t)}static fromJSON(t,e){let n=[];for(let o=0,r=t.shapes.length;o<r;o++){let a=e[t.shapes[o]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new al[s.type]().fromJSON(s)),new i(n,t.options)}},xm={generateTopUV:function(i,t,e,n,s){let o=t[e*3],r=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new oe(o,r),new oe(a,l),new oe(c,u)]},generateSideWallUV:function(i,t,e,n,s,o){let r=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],p=t[s*3],d=t[s*3+1],f=t[s*3+2],y=t[o*3],g=t[o*3+1],m=t[o*3+2];return Math.abs(a-u)<Math.abs(r-c)?[new oe(r,1-l),new oe(c,1-h),new oe(p,1-f),new oe(y,1-m)]:[new oe(a,1-l),new oe(u,1-h),new oe(d,1-f),new oe(g,1-m)]}};function Mm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wi=class i extends kr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gi=class i extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,p=e/l,d=[],f=[],y=[],g=[];for(let m=0;m<u;m++){let M=m*p-r;for(let x=0;x<c;x++){let _=x*h-o;f.push(_,-M,0),y.push(0,0,1),g.push(x/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let x=M+c*m,_=M+c*(m+1),v=M+1+c*(m+1),T=M+1+c*m;d.push(x,_,T),d.push(_,v,T)}this.setIndex(d),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$r=class i extends We{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=t,p=(e-t)/s,d=new nt,f=new oe;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let m=o+g/n*r;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),f.x=(d.x/e+1)/2,f.y=(d.y/e+1)/2,u.push(f.x,f.y)}h+=p}for(let y=0;y<s;y++){let g=y*(n+1);for(let m=0;m<n;m++){let M=m+g,x=M,_=M+n+1,v=M+n+2,T=M+1;a.push(x,_,T),a.push(_,v,T)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var li=class i extends We{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(r+a,Math.PI),c=0,u=[],h=new nt,p=new nt,d=[],f=[],y=[],g=[];for(let m=0;m<=n;m++){let M=[],x=m/n,_=0;m===0&&r===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let v=0;v<=e;v++){let T=v/e;h.x=-t*Math.cos(s+T*o)*Math.sin(r+x*a),h.y=t*Math.cos(r+x*a),h.z=t*Math.sin(s+T*o)*Math.sin(r+x*a),f.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),g.push(T+_,1-x),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let x=u[m][M+1],_=u[m][M],v=u[m+1][M],T=u[m+1][M+1];(m!==0||r>0)&&d.push(x,_,T),(m!==n-1||l<Math.PI)&&d.push(_,v,T)}this.setIndex(d),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(y,3)),this.setAttribute("uv",new Ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var yi=class i extends We{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);let r=[],a=[],l=[],c=[],u=new nt,h=new nt,p=new nt;for(let d=0;d<=n;d++)for(let f=0;f<=s;f++){let y=f/s*o,g=d/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(y),h.y=(t+e*Math.cos(g))*Math.sin(y),h.z=e*Math.sin(g),a.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),p.subVectors(h,u).normalize(),l.push(p.x,p.y,p.z),c.push(f/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let f=1;f<=s;f++){let y=(s+1)*d+f-1,g=(s+1)*(d-1)+f-1,m=(s+1)*(d-1)+f,M=(s+1)*d+f;r.push(y,g,M),r.push(g,m,M)}this.setIndex(r),this.setAttribute("position",new Ue(a,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zr=class i extends We{constructor(t=new Vr(new nt(-1,-1,0),new nt(-1,1,0),new nt(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};let r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let a=new nt,l=new nt,c=new oe,u=new nt,h=[],p=[],d=[],f=[];y(),this.setIndex(f),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(p,3)),this.setAttribute("uv",new Ue(d,2));function y(){for(let x=0;x<e;x++)g(x);g(o===!1?e:0),M(),m()}function g(x){u=t.getPointAt(x/e,u);let _=r.normals[x],v=r.binormals[x];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,R=Math.sin(E),S=-Math.cos(E);l.x=S*_.x+R*v.x,l.y=S*_.y+R*v.y,l.z=S*_.z+R*v.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=e;x++)for(let _=1;_<=s;_++){let v=(s+1)*(x-1)+(_-1),T=(s+1)*x+(_-1),E=(s+1)*x+_,R=(s+1)*(x-1)+_;f.push(v,T,R),f.push(T,E,R)}}function M(){for(let x=0;x<=e;x++)for(let _=0;_<=s;_++)c.x=x/e,c.y=_/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new al[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},jr=class extends We{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,s=new nt,o=new nt;if(t.index!==null){let r=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],p=h.start,d=h.count;for(let f=p,y=p+d;f<y;f+=3)for(let g=0;g<3;g++){let m=a.getX(f+g),M=a.getX(f+(g+1)%3);s.fromBufferAttribute(r,m),o.fromBufferAttribute(r,M),hf(s,o,n)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}}else{let r=t.attributes.position;for(let a=0,l=r.count/3;a<l;a++)for(let c=0;c<3;c++){let u=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(r,u),o.fromBufferAttribute(r,h),hf(s,o,n)===!0&&(e.push(s.x,s.y,s.z),e.push(o.x,o.y,o.z))}}this.setAttribute("position",new Ue(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function hf(i,t,e){let n=`${i.x},${i.y},${i.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${i.x},${i.y},${i.z}`;return e.has(n)===!0||e.has(s)===!0?!1:(e.add(n),e.add(s),!0)}var ke=class extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cl=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ga(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vm(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ro=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ul=class extends ro{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case rh:o=t,a=2*e-n;break;case ah:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rh:r=t,l=2*n-e;break;case ah:r=1,l=n+s[1]-s[0];break;default:r=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*u,this._offsetNext=r*u}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,d=this._weightNext,f=(n-e)/(s-e),y=f*f,g=y*f,m=-p*g+2*p*y-p*f,M=(1+p)*g+(-1.5-2*p)*y+(-.5+p)*f+1,x=(-1-d)*g+(1.5+d)*y+.5*f,_=d*g-d*y;for(let v=0;v!==a;++v)o[v]=m*r[u+v]+M*r[c+v]+x*r[l+v]+_*r[h+v];return o}},fl=class extends ro{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),h=1-u;for(let p=0;p!==a;++p)o[p]=r[c+p]*h+r[l+p]*u;return o}},dl=class extends ro{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ga(e,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ga(t.times,Array),values:Ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case ja:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return ja;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&vm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,p=h-n,d=h+n;for(let f=0;f!==n;++f){let y=e[h+f];if(y!==e[p+f]||y!==e[d+f]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let h=a*n,p=r*n;for(let d=0;d!==n;++d)e[p+d]=e[h+d]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=ja;var Is=class extends ci{constructor(t,e,n){super(t,e,n)}};Is.prototype.ValueTypeName="bool";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Sr;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}};pl.prototype.ValueTypeName="color";var ml=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}};ml.prototype.ValueTypeName="number";var gl=class extends ro{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Cn.slerpFlat(o,0,r,c-a,r,c,l);return o}},Kr=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ls=class extends ci{constructor(t,e,n){super(t,e,n)}};Ls.prototype.ValueTypeName="string";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Sr;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends ci{constructor(t,e,n,s){super(t,e,n,s)}};yl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,n){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,a),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=c.length;h<p;h+=2){let d=c[h],f=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return f}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ld=new _l,xl=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Jr=class extends Pn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Qr=class extends Jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ih=new Ze,uf=new nt,ff=new nt,dh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(uf),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),ih.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ih)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ta=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ph=class extends dh{constructor(){super(new ta(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ea=class extends Jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var na=class extends We{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Ml=class extends Xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kh="\\[\\]\\.:\\/",bm=new RegExp("["+kh+"]","g"),Oh="[^"+kh+"]",Sm="[^"+kh.replace("\\.","")+"]",wm=/((?:WC+[\/:])*)/.source.replace("WC",Oh),Em=/(WCOD+)?/.source.replace("WCOD",Sm),Tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oh),Am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oh),Rm=new RegExp("^"+wm+Em+Tm+Am+"$"),Cm=["material","materials","bones","map"],mh=class{constructor(t,e,n){let s=n||pn.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},pn=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(bm,"")}static parseTrackName(t){let e=Rm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);Cm.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pn.Composite=mh;pn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pn.prototype.GetterByBindingType=[pn.prototype._getValue_direct,pn.prototype._getValue_array,pn.prototype._getValue_arrayElement,pn.prototype._getValue_toArray];pn.prototype.SetterByBindingTypeAndVersioning=[[pn.prototype._setValue_direct,pn.prototype._setValue_direct_setNeedsUpdate,pn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_array,pn.prototype._setValue_array_setNeedsUpdate,pn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_arrayElement,pn.prototype._setValue_arrayElement_setNeedsUpdate,pn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pn.prototype._setValue_fromArray,pn.prototype._setValue_fromArray_setNeedsUpdate,pn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pM=new Float32Array(1);var Ds=class extends Dr{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var df=new Ze,ao=class{constructor(t,e,n=0,s=1/0){this.ray=new Ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(df),this}intersectObject(t,e=!0,n=[]){return gh(t,this,n,e),n.sort(pf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)gh(t[s],this,n,e);return n.sort(pf),n}};function pf(i,t){return i.distance-t.distance}function gh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let o=i.children;for(let r=0,a=o.length;r<a;r++)gh(o[r],t,e,!0)}}var Jo=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var mf=new nt,Xa=new nt,No=new nt,zo=new nt,sh=new nt,Pm=new nt,Im=new nt,ia=class{constructor(t=new nt,e=new nt){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){mf.subVectors(t,this.start),Xa.subVectors(this.end,this.start);let n=Xa.dot(Xa),o=Xa.dot(mf)/n;return e&&(o=Fe(o,0,1)),o}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Pm,n=Im){let s=10000000000000001e-32,o,r,a=this.start,l=t.start,c=this.end,u=t.end;No.subVectors(c,a),zo.subVectors(u,l),sh.subVectors(a,l);let h=No.dot(No),p=zo.dot(zo),d=zo.dot(sh);if(h<=s&&p<=s)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(h<=s)o=0,r=d/p,r=Fe(r,0,1);else{let f=No.dot(sh);if(p<=s)r=0,o=Fe(-f/h,0,1);else{let y=No.dot(zo),g=h*p-y*y;g!==0?o=Fe((y*d-f*p)/g,0,1):o=0,r=(y*o+d)/p,r<0?(r=0,o=Fe(-f/h,0,1)):r>1&&(r=1,o=Fe((y-f)/h,0,1))}}return e.copy(a).add(No.multiplyScalar(o)),n.copy(l).add(zo.multiplyScalar(r)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var sa=class extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Bh(i,t,e,n){let s=Lm(n);switch(e){case Rh:return i*t;case Nl:return i*t/s.components*s.byteLength;case zl:return i*t/s.components*s.byteLength;case Ph:return i*t*2/s.components*s.byteLength;case Fl:return i*t*2/s.components*s.byteLength;case Ch:return i*t*3/s.components*s.byteLength;case _i:return i*t*4/s.components*s.byteLength;case kl:return i*t*4/s.components*s.byteLength;case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Vl:return Math.max(i,16)*Math.max(t,8)/4;case Ol:case Hl:return Math.max(i,8)*Math.max(t,8)/2;case Wl:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rc:case ac:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case uc:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lm(i){switch(i){case Ui:case wh:return{byteLength:1,components:1};case tr:case Eh:case er:return{byteLength:2,components:1};case Dl:case Ul:return{byteLength:2,components:4};case Fs:case Ll:case Ni:return{byteLength:4,components:1};case Th:case Ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ld(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Fm(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,f)=>d.start-f.start);let p=0;for(let d=1;d<h.length;d++){let f=h[p],y=h[d];y.start<=f.start+f.count+1?f.count=Math.max(f.count,y.start+y.count-f.start):(++p,h[p]=y)}h.length=p+1;for(let d=0,f=h.length;d<f;d++){let y=h[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Om=`#ifdef USE_ALPHAHASH
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
#endif`,Bm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
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
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Km=`#ifdef USE_IRIDESCENCE
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
#endif`,Jm=`#ifdef USE_BUMPMAP
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,l1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,c1=`vec3 transformedNormal = objectNormal;
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
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p1="gl_FragColor = linearToOutputTexel( gl_FragColor );",m1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
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
}`,T1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
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
#endif`,z1=`struct PhysicalMaterial {
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
}`,F1=`
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
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
#endif`,O1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,X1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
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
#endif`,tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,Sg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wg=`#ifdef USE_SKINNING
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
#endif`,Eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
}`,Xg=`#define DISTANCE
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
}`,qg=`#define DISTANCE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Qg=`#define LAMBERT
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
}`,ty=`#define LAMBERT
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
}`,ey=`#define MATCAP
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
}`,ny=`#define MATCAP
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
}`,iy=`#define NORMAL
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
}`,sy=`#define NORMAL
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
}`,oy=`#define PHONG
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
}`,ry=`#define PHONG
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
}`,ay=`#define STANDARD
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
}`,ly=`#define STANDARD
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
}`,cy=`#define TOON
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
}`,hy=`#define TOON
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
}`,uy=`uniform float size;
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
}`,fy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,py=`uniform vec3 color;
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
}`,my=`uniform float rotation;
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
}`,gy=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:km,alphahash_pars_fragment:Om,alphamap_fragment:Bm,alphamap_pars_fragment:Hm,alphatest_fragment:Vm,alphatest_pars_fragment:Wm,aomap_fragment:Gm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:$m,beginnormal_vertex:Zm,bsdfs:jm,iridescence_fragment:Km,bumpmap_pars_fragment:Jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:e1,clipping_planes_vertex:n1,color_fragment:i1,color_pars_fragment:s1,color_pars_vertex:o1,color_vertex:r1,common:a1,cube_uv_reflection_fragment:l1,defaultnormal_vertex:c1,displacementmap_pars_vertex:h1,displacementmap_vertex:u1,emissivemap_fragment:f1,emissivemap_pars_fragment:d1,colorspace_fragment:p1,colorspace_pars_fragment:m1,envmap_fragment:g1,envmap_common_pars_fragment:y1,envmap_pars_fragment:_1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:P1,envmap_vertex:M1,fog_vertex:v1,fog_pars_vertex:b1,fog_fragment:S1,fog_pars_fragment:w1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:T1,lights_lambert_fragment:A1,lights_lambert_pars_fragment:R1,lights_pars_begin:C1,lights_toon_fragment:I1,lights_toon_pars_fragment:L1,lights_phong_fragment:D1,lights_phong_pars_fragment:U1,lights_physical_fragment:N1,lights_physical_pars_fragment:z1,lights_fragment_begin:F1,lights_fragment_maps:k1,lights_fragment_end:O1,logdepthbuf_fragment:B1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:V1,logdepthbuf_vertex:W1,map_fragment:G1,map_pars_fragment:X1,map_particle_fragment:q1,map_particle_pars_fragment:Y1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:Z1,morphinstance_vertex:j1,morphcolor_vertex:K1,morphnormal_vertex:J1,morphtarget_pars_vertex:Q1,morphtarget_vertex:tg,normal_fragment_begin:eg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:og,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:fg,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:yg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:xg,shadowmap_pars_vertex:Mg,shadowmap_vertex:vg,shadowmask_pars_fragment:bg,skinbase_vertex:Sg,skinning_pars_vertex:wg,skinning_vertex:Eg,skinnormal_vertex:Tg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Pg,transmission_fragment:Ig,transmission_pars_fragment:Lg,uv_pars_fragment:Dg,uv_pars_vertex:Ug,uv_vertex:Ng,worldpos_vertex:zg,background_vert:Fg,background_frag:kg,backgroundCube_vert:Og,backgroundCube_frag:Bg,cube_vert:Hg,cube_frag:Vg,depth_vert:Wg,depth_frag:Gg,distanceRGBA_vert:Xg,distanceRGBA_frag:qg,equirect_vert:Yg,equirect_frag:$g,linedashed_vert:Zg,linedashed_frag:jg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:Qg,meshlambert_frag:ty,meshmatcap_vert:ey,meshmatcap_frag:ny,meshnormal_vert:iy,meshnormal_frag:sy,meshphong_vert:oy,meshphong_frag:ry,meshphysical_vert:ay,meshphysical_frag:ly,meshtoon_vert:cy,meshtoon_frag:hy,points_vert:uy,points_frag:fy,shadow_vert:dy,shadow_frag:py,sprite_vert:my,sprite_frag:gy},ge={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Kn={basic:{uniforms:qn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:qn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:qn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:qn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:qn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:qn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:qn([ge.points,ge.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:qn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:qn([ge.common,ge.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:qn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:qn([ge.sprite,ge.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:qn([ge.common,ge.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:qn([ge.lights,ge.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Kn.physical={uniforms:qn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var dc={r:0,b:0,g:0},uo=new ri,yy=new Ze;function _y(i,t,e,n,s,o,r){let a=new Ce(0),l=o===!0?0:1,c,u,h=null,p=0,d=null;function f(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?e:t).get(_)),_}function y(x){let _=!1,v=f(x);v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(x,_){let v=f(_);v&&(v.isCubeTexture||v.mapping===oa)?(u===void 0&&(u=new Te(new nn(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:ho(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),uo.copy(_.backgroundRotation),uo.x*=-1,uo.y*=-1,uo.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(uo.y*=-1,uo.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yy.makeRotationFromEuler(uo)),u.material.toneMapped=tn.getTransfer(v.colorSpace)!==rn,(h!==v||p!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Te(new Gi(2,2),new zn({name:"BackgroundMaterial",uniforms:ho(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=tn.getTransfer(v.colorSpace)!==rn,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,_){x.getRGB(dc,zh(i)),n.buffers.color.setClear(dc.r,dc.g,dc.b,_,r)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:y,addToRenderList:g,dispose:M}}function xy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),o=s,r=!1;function a(b,P,N,z,O){let G=!1,j=h(z,N,P);o!==j&&(o=j,c(o.object)),G=d(b,z,N,O),G&&f(b,z,N,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,_(b,P,N,z),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,N){let z=N.wireframe===!0,O=n[b.id];O===void 0&&(O={},n[b.id]=O);let G=O[P.id];G===void 0&&(G={},O[P.id]=G);let j=G[z];return j===void 0&&(j=p(l()),G[z]=j),j}function p(b){let P=[],N=[],z=[];for(let O=0;O<e;O++)P[O]=0,N[O]=0,z[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:z,object:b,attributes:{},index:null}}function d(b,P,N,z){let O=o.attributes,G=P.attributes,j=0,et=N.getAttributes();for(let tt in et)if(et[tt].location>=0){let Q=O[tt],ft=G[tt];if(ft===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(ft=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(ft=b.instanceColor)),Q===void 0||Q.attribute!==ft||ft&&Q.data!==ft.data)return!0;j++}return o.attributesNum!==j||o.index!==z}function f(b,P,N,z){let O={},G=P.attributes,j=0,et=N.getAttributes();for(let tt in et)if(et[tt].location>=0){let Q=G[tt];Q===void 0&&(tt==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),tt==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));let ft={};ft.attribute=Q,Q&&Q.data&&(ft.data=Q.data),O[tt]=ft,j++}o.attributes=O,o.attributesNum=j,o.index=z}function y(){let b=o.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function g(b){m(b,0)}function m(b,P){let N=o.newAttributes,z=o.enabledAttributes,O=o.attributeDivisors;N[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),O[b]!==P&&(i.vertexAttribDivisor(b,P),O[b]=P)}function M(){let b=o.newAttributes,P=o.enabledAttributes;for(let N=0,z=P.length;N<z;N++)P[N]!==b[N]&&(i.disableVertexAttribArray(N),P[N]=0)}function x(b,P,N,z,O,G,j){j===!0?i.vertexAttribIPointer(b,P,N,O,G):i.vertexAttribPointer(b,P,N,z,O,G)}function _(b,P,N,z){y();let O=z.attributes,G=N.getAttributes(),j=P.defaultAttributeValues;for(let et in G){let tt=G[et];if(tt.location>=0){let mt=O[et];if(mt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),mt!==void 0){let Q=mt.normalized,ft=mt.itemSize,Et=t.get(mt);if(Et===void 0)continue;let rt=Et.buffer,it=Et.type,ct=Et.bytesPerElement,J=it===i.INT||it===i.UNSIGNED_INT||mt.gpuType===Ll;if(mt.isInterleavedBufferAttribute){let st=mt.data,ht=st.stride,Dt=mt.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<tt.locationSize;Ft++)m(tt.location+Ft,st.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<tt.locationSize;Ft++)g(tt.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ft=0;Ft<tt.locationSize;Ft++)x(tt.location+Ft,ft/tt.locationSize,it,Q,ht*ct,(Dt+ft/tt.locationSize*Ft)*ct,J)}else{if(mt.isInstancedBufferAttribute){for(let st=0;st<tt.locationSize;st++)m(tt.location+st,mt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let st=0;st<tt.locationSize;st++)g(tt.location+st);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let st=0;st<tt.locationSize;st++)x(tt.location+st,ft/tt.locationSize,it,Q,ft*ct,ft/tt.locationSize*st*ct,J)}}else if(j!==void 0){let Q=j[et];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(tt.location,Q);break;case 3:i.vertexAttrib3fv(tt.location,Q);break;case 4:i.vertexAttrib4fv(tt.location,Q);break;default:i.vertexAttrib1fv(tt.location,Q)}}}}M()}function v(){R();for(let b in n){let P=n[b];for(let N in P){let z=P[N];for(let O in z)u(z[O].object),delete z[O];delete P[N]}delete n[b]}}function T(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let N in P){let z=P[N];for(let O in z)u(z[O].object),delete z[O];delete P[N]}delete n[b.id]}function E(b){for(let P in n){let N=n[P];if(N[b.id]===void 0)continue;let z=N[b.id];for(let O in z)u(z[O].object),delete z[O];delete N[b.id]}}function R(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function My(i,t,e){let n;function s(c){n=c}function o(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function r(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let f=0;f<h;f++)d+=u[f];e.update(d,n,1)}function l(c,u,h,p){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<c.length;f++)r(c[f],u[f],p[f]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,p,0,h);let f=0;for(let y=0;y<h;y++)f+=u[y]*p[y];e.update(f,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vy(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==_i&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ui&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ni&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:f,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:v,maxSamples:T}}function by(i){let t=this,e=null,n=0,s=!1,o=!1,r=new pi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let d=h.length!==0||p||n!==0||s;return s=p,n=h.length,d},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,p){e=u(h,p,0)},this.setState=function(h,p,d){let f=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||f===null||f.length===0||o&&!g)o?u(null):c();else{let M=o?0:n,x=M*4,_=m.clippingState||null;l.value=_,_=u(f,p,x,d);for(let v=0;v!==x;++v)_[v]=e[v];m.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,p,d,f){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=l.value,f!==!0||g===null){let m=d+y*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,_=d;x!==y;++x,_+=4)r.copy(h[x]).applyMatrix4(M,a),r.normal.toArray(g,_),g[_+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function Sy(i){let t=new WeakMap;function e(r,a){return a===Cl?r.mapping=lo:a===Pl&&(r.mapping=co),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===Cl||a===Pl)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new nl(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}var or=4,cd=[.125,.215,.35,.446,.526,.582],mo=20,Hh=new ta,hd=new Ce,Vh=null,Wh=0,Gh=0,Xh=!1,po=(1+Math.sqrt(5))/2,sr=1/po,ud=[new nt(-po,sr,0),new nt(po,sr,0),new nt(-sr,0,po),new nt(sr,0,po),new nt(0,po,-sr),new nt(0,po,sr),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],wy=new nt,ar=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){let{size:r=256,position:a=wy}=o;Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vh,Wh,Gh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===lo||t.mapping===co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:er,format:_i,colorSpace:no,depthBuffer:!1},s=fd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ey(o)),this._blurMaterial=Ty(o,t,e)}return s}_compileMaterial(t){let e=new Te(this._lodPlanes[0],t);this._renderer.compile(e,Hh)}_sceneToCubeUV(t,e,n,s,o){let l=new Xn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(hd),h.toneMapping=hs,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new Nn({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new Te(new nn,y),m=!1,M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,m=!0):(y.color.copy(hd),m=!0);for(let x=0;x<6;x++){let _=x%3;_===0?(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[x],o.y,o.z)):_===1?(l.up.set(0,0,c[x]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[x],o.z)):(l.up.set(0,c[x],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[x]));let v=this._cubeSize;pc(s,_*v,x>2?v:0,v,v),h.setRenderTarget(s),m&&h.render(g,l),h.render(t,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=p,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===lo||t.mapping===co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new Te(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;pc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Hh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ud[(s-o-1)%ud.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Te(this._lodPlanes[s],c),p=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*mo-1),y=o/f,g=isFinite(o)?1+Math.floor(u*y):mo;g>mo&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mo}`);let m=[],M=0;for(let E=0;E<mo;++E){let R=E/y,S=Math.exp(-R*R/2);m.push(S),E===0?M+=S:E<g&&(M+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;p.envMap.value=t.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=r==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:x}=this;p.dTheta.value=f,p.mipInt.value=x-n;let _=this._sizeLods[s],v=3*_*(s>x-or?s-x+or:0),T=4*(this._cubeSize-_);pc(e,v,T,3*_,2*_),l.setRenderTarget(e),l.render(h,Hh)}};function Ey(i){let t=[],e=[],n=[],s=i,o=i-or+1+cd.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>i-or?l=cd[r-i+or-1]:r===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,p=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,f=6,y=3,g=2,m=1,M=new Float32Array(y*f*d),x=new Float32Array(g*f*d),_=new Float32Array(m*f*d);for(let T=0;T<d;T++){let E=T%3*2/3-1,R=T>2?0:-1,S=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(S,y*f*T),x.set(p,g*f*T);let b=[T,T,T,T,T,T];_.set(b,m*f*T)}let v=new We;v.setAttribute("position",new je(M,y)),v.setAttribute("uv",new je(x,g)),v.setAttribute("faceIndex",new je(_,m)),t.push(v),s>or&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fd(i,t,e){let n=new Hi(i,t,e);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ty(i,t,e){let n=new Float32Array(mo),s=new nt(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:eu(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function dd(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eu(),fragmentShader:`

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
		`,blending:cs,depthTest:!1,depthWrite:!1})}function pd(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function eu(){return`

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
	`}function Ay(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cl||l===Pl,u=l===lo||l===co;if(c||u){let h=t.get(a),p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new ar(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ar(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ry(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Bo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cy(i,t,e,n){let s={},o=new WeakMap;function r(h){let p=h.target;p.index!==null&&t.remove(p.index);for(let f in p.attributes)t.remove(p.attributes[f]);p.removeEventListener("dispose",r),delete s[p.id];let d=o.get(p);d&&(t.remove(d),o.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",r),s[p.id]=!0,e.memory.geometries++),p}function l(h){let p=h.attributes;for(let d in p)t.update(p[d],i.ARRAY_BUFFER)}function c(h){let p=[],d=h.index,f=h.attributes.position,y=0;if(d!==null){let M=d.array;y=d.version;for(let x=0,_=M.length;x<_;x+=3){let v=M[x+0],T=M[x+1],E=M[x+2];p.push(v,T,T,E,E,v)}}else if(f!==void 0){let M=f.array;y=f.version;for(let x=0,_=M.length/3-1;x<_;x+=3){let v=x+0,T=x+1,E=x+2;p.push(v,T,T,E,E,v)}}else return;let g=new(Nh(p)?Cr:Rr)(p,1);g.version=y;let m=o.get(h);m&&t.remove(m),o.set(h,g)}function u(h){let p=o.get(h);if(p){let d=h.index;d!==null&&p.version<d.version&&c(h)}else c(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Py(i,t,e){let n;function s(p){n=p}let o,r;function a(p){o=p.type,r=p.bytesPerElement}function l(p,d){i.drawElements(n,d,o,p*r),e.update(d,n,1)}function c(p,d,f){f!==0&&(i.drawElementsInstanced(n,d,o,p*r,f),e.update(d,n,f))}function u(p,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,o,p,0,f);let g=0;for(let m=0;m<f;m++)g+=d[m];e.update(g,n,1)}function h(p,d,f,y){if(f===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<p.length;m++)c(p[m]/r,d[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,o,p,0,y,0,f);let m=0;for(let M=0;M<f;M++)m+=d[M]*y[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Iy(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ly(i,t,e){let n=new WeakMap,s=new an;function o(r,a,l){let c=r.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,p=n.get(a);if(p===void 0||p.count!==h){let S=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,f=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;d===!0&&(x=1),f===!0&&(x=2),y===!0&&(x=3);let _=a.attributes.position.count*x,v=1;_>t.maxTextureSize&&(v=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let T=new Float32Array(_*v*4*h),E=new Ar(T,_,v,h);E.type=Ni,E.needsUpdate=!0;let R=x*4;for(let b=0;b<h;b++){let P=g[b],N=m[b],z=M[b],O=_*v*4*b;for(let G=0;G<P.count;G++){let j=G*R;d===!0&&(s.fromBufferAttribute(P,G),T[O+j+0]=s.x,T[O+j+1]=s.y,T[O+j+2]=s.z,T[O+j+3]=0),f===!0&&(s.fromBufferAttribute(N,G),T[O+j+4]=s.x,T[O+j+5]=s.y,T[O+j+6]=s.z,T[O+j+7]=0),y===!0&&(s.fromBufferAttribute(z,G),T[O+j+8]=s.x,T[O+j+9]=s.y,T[O+j+10]=s.z,T[O+j+11]=z.itemSize===4?s.w:1)}}p={count:h,texture:E,size:new oe(_,v)},n.set(a,p),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let f=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:o}}function Dy(i,t,e,n){let s=new WeakMap;function o(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return h}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var Dd=new Dn,md=new Ur(1,1),Ud=new Ar,Nd=new tl,zd=new Ir,gd=[],yd=[],_d=new Float32Array(16),xd=new Float32Array(9),Md=new Float32Array(4);function lr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=gd[s];if(o===void 0&&(o=new Float32Array(s),gd[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function En(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function yc(i,t){let e=yd[t];e===void 0&&(e=new Int32Array(t),yd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Uy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2fv(this.addr,t),Tn(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(En(e,t))return;i.uniform3fv(this.addr,t),Tn(e,t)}}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4fv(this.addr,t),Tn(e,t)}}function ky(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;Md.set(n),i.uniformMatrix2fv(this.addr,!1,Md),Tn(e,n)}}function Oy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),Tn(e,n)}}function By(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(En(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Tn(e,t)}else{if(En(e,n))return;_d.set(n),i.uniformMatrix4fv(this.addr,!1,_d),Tn(e,n)}}function Hy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2iv(this.addr,t),Tn(e,t)}}function Wy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3iv(this.addr,t),Tn(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4iv(this.addr,t),Tn(e,t)}}function Xy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(En(e,t))return;i.uniform2uiv(this.addr,t),Tn(e,t)}}function Yy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(En(e,t))return;i.uniform3uiv(this.addr,t),Tn(e,t)}}function $y(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(En(e,t))return;i.uniform4uiv(this.addr,t),Tn(e,t)}}function Zy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(md.compareFunction=Lh,o=md):o=Dd,e.setTexture2D(t||o,s)}function jy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nd,s)}function Ky(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zd,s)}function Jy(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ud,s)}function Qy(i){switch(i){case 5126:return Uy;case 35664:return Ny;case 35665:return zy;case 35666:return Fy;case 35674:return ky;case 35675:return Oy;case 35676:return By;case 5124:case 35670:return Hy;case 35667:case 35671:return Vy;case 35668:case 35672:return Wy;case 35669:case 35673:return Gy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Jy}}function t_(i,t){i.uniform1fv(this.addr,t)}function e_(i,t){let e=lr(t,this.size,2);i.uniform2fv(this.addr,e)}function n_(i,t){let e=lr(t,this.size,3);i.uniform3fv(this.addr,e)}function i_(i,t){let e=lr(t,this.size,4);i.uniform4fv(this.addr,e)}function s_(i,t){let e=lr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function o_(i,t){let e=lr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r_(i,t){let e=lr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a_(i,t){i.uniform1iv(this.addr,t)}function l_(i,t){i.uniform2iv(this.addr,t)}function c_(i,t){i.uniform3iv(this.addr,t)}function h_(i,t){i.uniform4iv(this.addr,t)}function u_(i,t){i.uniform1uiv(this.addr,t)}function f_(i,t){i.uniform2uiv(this.addr,t)}function d_(i,t){i.uniform3uiv(this.addr,t)}function p_(i,t){i.uniform4uiv(this.addr,t)}function m_(i,t,e){let n=this.cache,s=t.length,o=yc(e,s);En(n,o)||(i.uniform1iv(this.addr,o),Tn(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Dd,o[r])}function g_(i,t,e){let n=this.cache,s=t.length,o=yc(e,s);En(n,o)||(i.uniform1iv(this.addr,o),Tn(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Nd,o[r])}function y_(i,t,e){let n=this.cache,s=t.length,o=yc(e,s);En(n,o)||(i.uniform1iv(this.addr,o),Tn(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||zd,o[r])}function __(i,t,e){let n=this.cache,s=t.length,o=yc(e,s);En(n,o)||(i.uniform1iv(this.addr,o),Tn(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ud,o[r])}function x_(i){switch(i){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return o_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return y_;case 36289:case 36303:case 36311:case 36292:return __}}var Yh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qy(e.type)}},$h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=x_(e.type)}},Zh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],n)}}},qh=/(\w+)(\])?(\[|\.)?/g;function vd(i,t){i.seq.push(t),i.map[t.id]=t}function M_(i,t,e){let n=i.name,s=n.length;for(qh.lastIndex=0;;){let o=qh.exec(n),r=qh.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){vd(e,c===void 0?new Yh(a,i,t):new $h(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Zh(a),vd(e,h)),e=h}}}var rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);M_(o,r,this)}}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function bd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v_=37297,b_=0;function S_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var Sd=new He;function w_(i){tn._getMatrix(Sd,tn.workingColorSpace,i);let t=`mat3( ${Sd.elements.map(e=>e.toFixed(4))} )`;switch(tn.getTransfer(i)){case wr:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+S_(i.getShaderSource(t),a)}else return o}function E_(i,t){let e=w_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function T_(i,t){let e;switch(t){case kf:e="Linear";break;case Of:e="Reinhard";break;case Bf:e="Cineon";break;case Rl:e="ACESFilmic";break;case Vf:e="AgX";break;case Wf:e="Neutral";break;case Hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new nt;function A_(){tn.getLuminanceCoefficients(mc);let i=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function C_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function da(i){return i!==""}function Ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I_=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(i){return i.replace(I_,D_)}var L_=new Map;function D_(i,t){let e=Ge[t];if(e===void 0){let n=L_.get(t);if(n!==void 0)e=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jh(e)}var U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(U_,N_)}function N_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Rd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function z_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(t="SHADOWMAP_TYPE_VSM"),t}function F_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lo:case co:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function k_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case co:t="ENVMAP_MODE_REFRACTION";break}return t}function O_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bh:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case Ff:t="ENVMAP_BLENDING_ADD";break}return t}function B_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=z_(e),c=F_(e),u=k_(e),h=O_(e),p=B_(e),d=R_(e),f=C_(o),y=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(da).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(da).join(`
`),m.length>0&&(m+=`
`)):(g=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),m=[Rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hs?"#define TONE_MAPPING":"",e.toneMapping!==hs?Ge.tonemapping_pars_fragment:"",e.toneMapping!==hs?T_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),A_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(da).join(`
`)),r=jh(r),r=Ed(r,e),r=Td(r,e),a=jh(a),a=Ed(a,e),a=Td(a,e),r=Ad(r),a=Ad(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=M+g+r,_=M+m+a,v=bd(s,s.VERTEX_SHADER,x),T=bd(s,s.FRAGMENT_SHADER,_);s.attachShader(y,v),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(v)||"",O=s.getShaderInfoLog(T)||"",G=N.trim(),j=z.trim(),et=O.trim(),tt=!0,mt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,T);else{let Q=wd(s,v,"vertex"),ft=wd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+Q+`
`+ft)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(j===""||et==="")&&(mt=!1);mt&&(P.diagnostics={runnable:tt,programLog:G,vertexShader:{log:j,prefix:g},fragmentShader:{log:et,prefix:m}})}s.deleteShader(v),s.deleteShader(T),R=new rr(s,y),S=P_(s,y)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,v_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=b_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=T,this}var V_=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jh(t),e.set(t,n)),n}},Jh=class{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}};function W_(i,t,e,n,s,o,r){let a=new Vo,l=new Kh,c=new Set,u=[],h=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,P,N,z){let O=N.fog,G=z.geometry,j=S.isMeshStandardMaterial?N.environment:null,et=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),tt=et&&et.mapping===oa?et.image.height:null,mt=f[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let Q=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ft=Q!==void 0?Q.length:0,Et=0;G.morphAttributes.position!==void 0&&(Et=1),G.morphAttributes.normal!==void 0&&(Et=2),G.morphAttributes.color!==void 0&&(Et=3);let rt,it,ct,J;if(mt){let xe=Kn[mt];rt=xe.vertexShader,it=xe.fragmentShader}else rt=S.vertexShader,it=S.fragmentShader,l.update(S),ct=l.getVertexShaderID(S),J=l.getFragmentShaderID(S);let st=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),Dt=z.isInstancedMesh===!0,Ft=z.isBatchedMesh===!0,Tt=!!S.map,Gt=!!S.matcap,q=!!et,dt=!!S.aoMap,xt=!!S.lightMap,At=!!S.bumpMap,Lt=!!S.normalMap,Qt=!!S.displacementMap,jt=!!S.emissiveMap,Kt=!!S.metalnessMap,_e=!!S.roughnessMap,Pe=S.anisotropy>0,Y=S.clearcoat>0,D=S.dispersion>0,St=S.iridescence>0,Xt=S.sheen>0,qt=S.transmission>0,Nt=Pe&&!!S.anisotropyMap,be=Y&&!!S.clearcoatMap,ae=Y&&!!S.clearcoatNormalMap,ve=Y&&!!S.clearcoatRoughnessMap,we=St&&!!S.iridescenceMap,se=St&&!!S.iridescenceThicknessMap,ye=Xt&&!!S.sheenColorMap,at=Xt&&!!S.sheenRoughnessMap,X=!!S.specularMap,K=!!S.specularColorMap,Wt=!!S.specularIntensityMap,$=qt&&!!S.transmissionMap,It=qt&&!!S.thicknessMap,k=!!S.gradientMap,$t=!!S.alphaMap,Yt=S.alphaTest>0,ut=!!S.alphaHash,Ut=!!S.extensions,Bt=hs;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let me={shaderID:mt,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:it,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&z._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&z.instanceColor!==null,instancingMorph:Dt&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:no,alphaToCoverage:!!S.alphaToCoverage,map:Tt,matcap:Gt,envMap:q,envMapMode:q&&et.mapping,envMapCubeUVHeight:tt,aoMap:dt,lightMap:xt,bumpMap:At,normalMap:Lt,displacementMap:p&&Qt,emissiveMap:jt,normalMapObjectSpace:Lt&&S.normalMapType===Yf,normalMapTangentSpace:Lt&&S.normalMapType===Ih,metalnessMap:Kt,roughnessMap:_e,anisotropy:Pe,anisotropyMap:Nt,clearcoat:Y,clearcoatMap:be,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:D,iridescence:St,iridescenceMap:we,iridescenceThicknessMap:se,sheen:Xt,sheenColorMap:ye,sheenRoughnessMap:at,specularMap:X,specularColorMap:K,specularIntensityMap:Wt,transmission:qt,transmissionMap:$,thicknessMap:It,gradientMap:k,opaque:S.transparent===!1&&S.blending===to&&S.alphaToCoverage===!1,alphaMap:$t,alphaTest:Yt,alphaHash:ut,combine:S.combine,mapUv:Tt&&y(S.map.channel),aoMapUv:dt&&y(S.aoMap.channel),lightMapUv:xt&&y(S.lightMap.channel),bumpMapUv:At&&y(S.bumpMap.channel),normalMapUv:Lt&&y(S.normalMap.channel),displacementMapUv:Qt&&y(S.displacementMap.channel),emissiveMapUv:jt&&y(S.emissiveMap.channel),metalnessMapUv:Kt&&y(S.metalnessMap.channel),roughnessMapUv:_e&&y(S.roughnessMap.channel),anisotropyMapUv:Nt&&y(S.anisotropyMap.channel),clearcoatMapUv:be&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:at&&y(S.sheenRoughnessMap.channel),specularMapUv:X&&y(S.specularMap.channel),specularColorMapUv:K&&y(S.specularColorMap.channel),specularIntensityMapUv:Wt&&y(S.specularIntensityMap.channel),transmissionMapUv:$&&y(S.transmissionMap.channel),thicknessMapUv:It&&y(S.thicknessMap.channel),alphaMapUv:$t&&y(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Lt||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(Tt||$t),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ht,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Tt&&S.map.isVideoTexture===!0&&tn.getTransfer(S.map.colorSpace)===rn,decodeVideoTextureEmissive:jt&&S.emissiveMap.isVideoTexture===!0&&tn.getTransfer(S.emissiveMap.colorSpace)===rn,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===cn,flipSided:S.side===kn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function M(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let b=f[S.type],P;if(b){let N=Kn[b];P=fa.clone(N.uniforms)}else P=S.uniforms;return P}function v(S,b){let P;for(let N=0,z=u.length;N<z;N++){let O=u[N];if(O.cacheKey===b){P=O,++P.usedTimes;break}}return P===void 0&&(P=new H_(i,b,S,o),u.push(P)),P}function T(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:R}}function G_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pd(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,p,d,f,y,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:p,material:d,groupOrder:f,renderOrder:h.renderOrder,z:y,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=p,m.material=d,m.groupOrder=f,m.renderOrder=h.renderOrder,m.z=y,m.group=g),t++,m}function a(h,p,d,f,y,g){let m=r(h,p,d,f,y,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(h,p,d,f,y,g){let m=r(h,p,d,f,y,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(h,p){e.length>1&&e.sort(h||X_),n.length>1&&n.sort(p||Cd),s.length>1&&s.sort(p||Cd)}function u(){for(let h=t,p=i.length;h<p;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:u,sort:c}}function q_(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new Pd,i.set(n,[r])):s>=o.length?(r=new Pd,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Y_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new Ce};break;case"SpotLight":e={position:new nt,direction:new nt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":e={color:new Ce,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return i[t.id]=e,e}}}function $_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Z_=0;function j_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K_(i){let t=new Y_,e=$_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new nt);let s=new nt,o=new Ze,r=new Ze;function a(c){let u=0,h=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,f=0,y=0,g=0,m=0,M=0,x=0,_=0,v=0,T=0,E=0;c.sort(j_);for(let S=0,b=c.length;S<b;S++){let P=c[S],N=P.color,z=P.intensity,O=P.distance,G=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*z,h+=N.g*z,p+=N.b*z;else if(P.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(P.sh.coefficients[j],z);E++}else if(P.isDirectionalLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let et=P.shadow,tt=e.get(P);tt.shadowIntensity=et.intensity,tt.shadowBias=et.bias,tt.shadowNormalBias=et.normalBias,tt.shadowRadius=et.radius,tt.shadowMapSize=et.mapSize,n.directionalShadow[d]=tt,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=j,d++}else if(P.isSpotLight){let j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(N).multiplyScalar(z),j.distance=O,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,n.spot[y]=j;let et=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,et.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[y]=et.matrix,P.castShadow){let tt=e.get(P);tt.shadowIntensity=et.intensity,tt.shadowBias=et.bias,tt.shadowNormalBias=et.normalBias,tt.shadowRadius=et.radius,tt.shadowMapSize=et.mapSize,n.spotShadow[y]=tt,n.spotShadowMap[y]=G,_++}y++}else if(P.isRectAreaLight){let j=t.get(P);j.color.copy(N).multiplyScalar(z),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=j,g++}else if(P.isPointLight){let j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){let et=P.shadow,tt=e.get(P);tt.shadowIntensity=et.intensity,tt.shadowBias=et.bias,tt.shadowNormalBias=et.normalBias,tt.shadowRadius=et.radius,tt.shadowMapSize=et.mapSize,tt.shadowCameraNear=et.camera.near,tt.shadowCameraFar=et.camera.far,n.pointShadow[f]=tt,n.pointShadowMap[f]=G,n.pointShadowMatrix[f]=P.shadow.matrix,x++}n.point[f]=j,f++}else if(P.isHemisphereLight){let j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(z),j.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[m]=j,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;let R=n.hash;(R.directionalLength!==d||R.pointLength!==f||R.spotLength!==y||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==v||R.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=g,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=d,R.pointLength=f,R.spotLength=y,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=v,R.numLightProbes=E,n.version=Z_++)}function l(c,u){let h=0,p=0,d=0,f=0,y=0,g=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){let x=c[m];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(x.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(x.isRectAreaLight){let _=n.rectArea[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),r.identity(),o.copy(x.matrixWorld),o.premultiply(g),r.extractRotation(o),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(r),_.halfHeight.applyMatrix4(r),f++}else if(x.isPointLight){let _=n.point[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),p++}else if(x.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:n}}function Id(i){let t=new K_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function J_(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new Id(i),t.set(s,[a])):o>=r.length?(a=new Id(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`;function ex(i,t,e){let n=new Yo,s=new oe,o=new oe,r=new an,a=new cl({depthPacking:qf}),l=new hl,c={},u=e.maxTextureSize,h={[Ii]:kn,[kn]:Ii,[cn]:cn},p=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Q_,fragmentShader:tx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let f=new We;f.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Te(f,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let m=this.type;this.render=function(T,E,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(cs),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=m!==Xi&&this.type===Xi,O=m===Xi&&this.type!==Xi;for(let G=0,j=T.length;G<j;G++){let et=T[G],tt=et.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;s.copy(tt.mapSize);let mt=tt.getFrameExtents();if(s.multiply(mt),o.copy(tt.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/mt.x),s.x=o.x*mt.x,tt.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/mt.y),s.y=o.y*mt.y,tt.mapSize.y=o.y)),tt.map===null||z===!0||O===!0){let ft=this.type!==Xi?{minFilter:Qn,magFilter:Qn}:{};tt.map!==null&&tt.map.dispose(),tt.map=new Hi(s.x,s.y,ft),tt.map.texture.name=et.name+".shadowMap",tt.camera.updateProjectionMatrix()}i.setRenderTarget(tt.map),i.clear();let Q=tt.getViewportCount();for(let ft=0;ft<Q;ft++){let Et=tt.getViewport(ft);r.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),N.viewport(r),tt.updateMatrices(et,ft),n=tt.getFrustum(),_(E,R,tt.camera,et,this.type)}tt.isPointLightShadow!==!0&&this.type===Xi&&M(tt,R),tt.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,P)};function M(T,E){let R=t.update(y);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Hi(s.x,s.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,R,p,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,R,d,y,null)}function x(T,E,R,S){let b=null,P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let N=b.uuid,z=E.uuid,O=c[N];O===void 0&&(O={},c[N]=O);let G=O[z];G===void 0&&(G=b.clone(),O[z]=G,E.addEventListener("dispose",v)),b=G}if(b.visible=E.visible,b.wireframe=E.wireframe,S===Xi?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:h[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=i.properties.get(b);N.light=R}return b}function _(T,E,R,S,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Xi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let z=t.update(T),O=T.material;if(Array.isArray(O)){let G=z.groups;for(let j=0,et=G.length;j<et;j++){let tt=G[j],mt=O[tt.materialIndex];if(mt&&mt.visible){let Q=x(T,mt,S,b);T.onBeforeShadow(i,T,E,R,z,Q,tt),i.renderBufferDirect(R,null,z,Q,T,tt),T.onAfterShadow(i,T,E,R,z,Q,tt)}}}else if(O.visible){let G=x(T,O,S,b);T.onBeforeShadow(i,T,E,R,z,G,null),i.renderBufferDirect(R,null,z,G,T,null),T.onAfterShadow(i,T,E,R,z,G,null)}}let N=T.children;for(let z=0,O=N.length;z<O;z++)_(N[z],E,R,S,b)}function v(T){T.target.removeEventListener("dispose",v);for(let R in c){let S=c[R],b=T.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var nx={[bl]:Sl,[wl]:Qo,[El]:Al,[eo]:Tl,[Sl]:bl,[Qo]:wl,[Al]:El,[Tl]:eo};function ix(i,t){function e(){let $=!1,It=new an,k=null,$t=new an(0,0,0,0);return{setMask:function(Yt){k!==Yt&&!$&&(i.colorMask(Yt,Yt,Yt,Yt),k=Yt)},setLocked:function(Yt){$=Yt},setClear:function(Yt,ut,Ut,Bt,me){me===!0&&(Yt*=Bt,ut*=Bt,Ut*=Bt),It.set(Yt,ut,Ut,Bt),$t.equals(It)===!1&&(i.clearColor(Yt,ut,Ut,Bt),$t.copy(It))},reset:function(){$=!1,k=null,$t.set(-1,0,0,0)}}}function n(){let $=!1,It=!1,k=null,$t=null,Yt=null;return{setReversed:function(ut){if(It!==ut){let Ut=t.get("EXT_clip_control");ut?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),It=ut;let Bt=Yt;Yt=null,this.setClear(Bt)}},getReversed:function(){return It},setTest:function(ut){ut?st(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(ut){k!==ut&&!$&&(i.depthMask(ut),k=ut)},setFunc:function(ut){if(It&&(ut=nx[ut]),$t!==ut){switch(ut){case bl:i.depthFunc(i.NEVER);break;case Sl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case eo:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case Qo:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$t=ut}},setLocked:function(ut){$=ut},setClear:function(ut){Yt!==ut&&(It&&(ut=1-ut),i.clearDepth(ut),Yt=ut)},reset:function(){$=!1,k=null,$t=null,Yt=null,It=!1}}}function s(){let $=!1,It=null,k=null,$t=null,Yt=null,ut=null,Ut=null,Bt=null,me=null;return{setTest:function(xe){$||(xe?st(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(xe){It!==xe&&!$&&(i.stencilMask(xe),It=xe)},setFunc:function(xe,Ne,De){(k!==xe||$t!==Ne||Yt!==De)&&(i.stencilFunc(xe,Ne,De),k=xe,$t=Ne,Yt=De)},setOp:function(xe,Ne,De){(ut!==xe||Ut!==Ne||Bt!==De)&&(i.stencilOp(xe,Ne,De),ut=xe,Ut=Ne,Bt=De)},setLocked:function(xe){$=xe},setClear:function(xe){me!==xe&&(i.clearStencil(xe),me=xe)},reset:function(){$=!1,It=null,k=null,$t=null,Yt=null,ut=null,Ut=null,Bt=null,me=null}}}let o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},p=new WeakMap,d=[],f=null,y=!1,g=null,m=null,M=null,x=null,_=null,v=null,T=null,E=new Ce(0,0,0),R=0,S=!1,b=null,P=null,N=null,z=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,et=0,tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(tt)[1]),j=et>=1):tt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),j=et>=2);let mt=null,Q={},ft=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),rt=new an().fromArray(ft),it=new an().fromArray(Et);function ct($,It,k,$t){let Yt=new Uint8Array(4),ut=i.createTexture();i.bindTexture($,ut),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<k;Ut++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(It,0,i.RGBA,1,1,$t,0,i.RGBA,i.UNSIGNED_BYTE,Yt):i.texImage2D(It+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Yt);return ut}let J={};J[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(i.DEPTH_TEST),r.setFunc(eo),At(!1),Lt(yh),st(i.CULL_FACE),dt(cs);function st($){u[$]!==!0&&(i.enable($),u[$]=!0)}function ht($){u[$]!==!1&&(i.disable($),u[$]=!1)}function Dt($,It){return h[$]!==It?(i.bindFramebuffer($,It),h[$]=It,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=It),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=It),!0):!1}function Ft($,It){let k=d,$t=!1;if($){k=p.get(It),k===void 0&&(k=[],p.set(It,k));let Yt=$.textures;if(k.length!==Yt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Ut=Yt.length;ut<Ut;ut++)k[ut]=i.COLOR_ATTACHMENT0+ut;k.length=Yt.length,$t=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,$t=!0);$t&&i.drawBuffers(k)}function Tt($){return f!==$?(i.useProgram($),f=$,!0):!1}let Gt={[Cs]:i.FUNC_ADD,[xf]:i.FUNC_SUBTRACT,[Mf]:i.FUNC_REVERSE_SUBTRACT};Gt[vf]=i.MIN,Gt[bf]=i.MAX;let q={[Sf]:i.ZERO,[wf]:i.ONE,[Ef]:i.SRC_COLOR,[Ya]:i.SRC_ALPHA,[If]:i.SRC_ALPHA_SATURATE,[Cf]:i.DST_COLOR,[Af]:i.DST_ALPHA,[Tf]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[Pf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[Lf]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Nf]:i.ONE_MINUS_CONSTANT_ALPHA};function dt($,It,k,$t,Yt,ut,Ut,Bt,me,xe){if($===cs){y===!0&&(ht(i.BLEND),y=!1);return}if(y===!1&&(st(i.BLEND),y=!0),$!==_f){if($!==g||xe!==S){if((m!==Cs||_!==Cs)&&(i.blendEquation(i.FUNC_ADD),m=Cs,_=Cs),xe)switch($){case to:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case to:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}M=null,x=null,v=null,T=null,E.set(0,0,0),R=0,g=$,S=xe}return}Yt=Yt||It,ut=ut||k,Ut=Ut||$t,(It!==m||Yt!==_)&&(i.blendEquationSeparate(Gt[It],Gt[Yt]),m=It,_=Yt),(k!==M||$t!==x||ut!==v||Ut!==T)&&(i.blendFuncSeparate(q[k],q[$t],q[ut],q[Ut]),M=k,x=$t,v=ut,T=Ut),(Bt.equals(E)===!1||me!==R)&&(i.blendColor(Bt.r,Bt.g,Bt.b,me),E.copy(Bt),R=me),g=$,S=!1}function xt($,It){$.side===cn?ht(i.CULL_FACE):st(i.CULL_FACE);let k=$.side===kn;It&&(k=!k),At(k),$.blending===to&&$.transparent===!1?dt(cs):dt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),o.setMask($.colorWrite);let $t=$.stencilWrite;a.setTest($t),$t&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),jt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function At($){b!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),b=$)}function Lt($){$!==gf?(st(i.CULL_FACE),$!==P&&($===yh?i.cullFace(i.BACK):$===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),P=$}function Qt($){$!==N&&(j&&i.lineWidth($),N=$)}function jt($,It,k){$?(st(i.POLYGON_OFFSET_FILL),(z!==It||O!==k)&&(i.polygonOffset(It,k),z=It,O=k)):ht(i.POLYGON_OFFSET_FILL)}function Kt($){$?st(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function _e($){$===void 0&&($=i.TEXTURE0+G-1),mt!==$&&(i.activeTexture($),mt=$)}function Pe($,It,k){k===void 0&&(mt===null?k=i.TEXTURE0+G-1:k=mt);let $t=Q[k];$t===void 0&&($t={type:void 0,texture:void 0},Q[k]=$t),($t.type!==$||$t.texture!==It)&&(mt!==k&&(i.activeTexture(k),mt=k),i.bindTexture($,It||J[$]),$t.type=$,$t.texture=It)}function Y(){let $=Q[mt];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function D(){try{i.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function St(){try{i.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xt(){try{i.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function qt(){try{i.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Nt(){try{i.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ae(){try{i.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{i.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function we(){try{i.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function se(){try{i.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ye($){rt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),rt.copy($))}function at($){it.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),it.copy($))}function X($,It){let k=c.get(It);k===void 0&&(k=new WeakMap,c.set(It,k));let $t=k.get($);$t===void 0&&($t=i.getUniformBlockIndex(It,$.name),k.set($,$t))}function K($,It){let $t=c.get(It).get($);l.get(It)!==$t&&(i.uniformBlockBinding(It,$t,$.__bindingPointIndex),l.set(It,$t))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},mt=null,Q={},h={},p=new WeakMap,d=[],f=null,y=!1,g=null,m=null,M=null,x=null,_=null,v=null,T=null,E=new Ce(0,0,0),R=0,S=!1,b=null,P=null,N=null,z=null,O=null,rt.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:st,disable:ht,bindFramebuffer:Dt,drawBuffers:Ft,useProgram:Tt,setBlending:dt,setMaterial:xt,setFlipSided:At,setCullFace:Lt,setLineWidth:Qt,setPolygonOffset:jt,setScissorTest:Kt,activeTexture:_e,bindTexture:Pe,unbindTexture:Y,compressedTexImage2D:D,compressedTexImage3D:St,texImage2D:we,texImage3D:se,updateUBOMapping:X,uniformBlockBinding:K,texStorage2D:ae,texStorage3D:ve,texSubImage2D:Xt,texSubImage3D:qt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:be,scissor:ye,viewport:at,reset:Wt}}function sx(i,t,e,n,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,u=new WeakMap,h,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(Y,D){return d?new OffscreenCanvas(Y,D):Tr("canvas")}function y(Y,D,St){let Xt=1,qt=Pe(Y);if((qt.width>St||qt.height>St)&&(Xt=St/Math.max(qt.width,qt.height)),Xt<1)if(typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&Y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&Y instanceof ImageBitmap||typeof VideoFrame<"u"&&Y instanceof VideoFrame){let Nt=Math.floor(Xt*qt.width),be=Math.floor(Xt*qt.height);h===void 0&&(h=f(Nt,be));let ae=D?f(Nt,be):h;return ae.width=Nt,ae.height=be,ae.getContext("2d").drawImage(Y,0,0,Nt,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+qt.width+"x"+qt.height+") to ("+Nt+"x"+be+")."),ae}else return"data"in Y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+qt.width+"x"+qt.height+")."),Y;return Y}function g(Y){return Y.generateMipmaps}function m(Y){i.generateMipmap(Y)}function M(Y){return Y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:Y.isWebGL3DRenderTarget?i.TEXTURE_3D:Y.isWebGLArrayRenderTarget||Y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(Y,D,St,Xt,qt=!1){if(Y!==null){if(i[Y]!==void 0)return i[Y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+Y+"'")}let Nt=D;if(D===i.RED&&(St===i.FLOAT&&(Nt=i.R32F),St===i.HALF_FLOAT&&(Nt=i.R16F),St===i.UNSIGNED_BYTE&&(Nt=i.R8)),D===i.RED_INTEGER&&(St===i.UNSIGNED_BYTE&&(Nt=i.R8UI),St===i.UNSIGNED_SHORT&&(Nt=i.R16UI),St===i.UNSIGNED_INT&&(Nt=i.R32UI),St===i.BYTE&&(Nt=i.R8I),St===i.SHORT&&(Nt=i.R16I),St===i.INT&&(Nt=i.R32I)),D===i.RG&&(St===i.FLOAT&&(Nt=i.RG32F),St===i.HALF_FLOAT&&(Nt=i.RG16F),St===i.UNSIGNED_BYTE&&(Nt=i.RG8)),D===i.RG_INTEGER&&(St===i.UNSIGNED_BYTE&&(Nt=i.RG8UI),St===i.UNSIGNED_SHORT&&(Nt=i.RG16UI),St===i.UNSIGNED_INT&&(Nt=i.RG32UI),St===i.BYTE&&(Nt=i.RG8I),St===i.SHORT&&(Nt=i.RG16I),St===i.INT&&(Nt=i.RG32I)),D===i.RGB_INTEGER&&(St===i.UNSIGNED_BYTE&&(Nt=i.RGB8UI),St===i.UNSIGNED_SHORT&&(Nt=i.RGB16UI),St===i.UNSIGNED_INT&&(Nt=i.RGB32UI),St===i.BYTE&&(Nt=i.RGB8I),St===i.SHORT&&(Nt=i.RGB16I),St===i.INT&&(Nt=i.RGB32I)),D===i.RGBA_INTEGER&&(St===i.UNSIGNED_BYTE&&(Nt=i.RGBA8UI),St===i.UNSIGNED_SHORT&&(Nt=i.RGBA16UI),St===i.UNSIGNED_INT&&(Nt=i.RGBA32UI),St===i.BYTE&&(Nt=i.RGBA8I),St===i.SHORT&&(Nt=i.RGBA16I),St===i.INT&&(Nt=i.RGBA32I)),D===i.RGB&&(St===i.UNSIGNED_INT_5_9_9_9_REV&&(Nt=i.RGB9_E5),St===i.UNSIGNED_INT_10F_11F_11F_REV&&(Nt=i.R11F_G11F_B10F)),D===i.RGBA){let be=qt?wr:tn.getTransfer(Xt);St===i.FLOAT&&(Nt=i.RGBA32F),St===i.HALF_FLOAT&&(Nt=i.RGBA16F),St===i.UNSIGNED_BYTE&&(Nt=be===rn?i.SRGB8_ALPHA8:i.RGBA8),St===i.UNSIGNED_SHORT_4_4_4_4&&(Nt=i.RGBA4),St===i.UNSIGNED_SHORT_5_5_5_1&&(Nt=i.RGB5_A1)}return(Nt===i.R16F||Nt===i.R32F||Nt===i.RG16F||Nt===i.RG32F||Nt===i.RGBA16F||Nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Nt}function _(Y,D){let St;return Y?D===null||D===Fs||D===nr?St=i.DEPTH24_STENCIL8:D===Ni?St=i.DEPTH32F_STENCIL8:D===tr&&(St=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Fs||D===nr?St=i.DEPTH_COMPONENT24:D===Ni?St=i.DEPTH_COMPONENT32F:D===tr&&(St=i.DEPTH_COMPONENT16),St}function v(Y,D){return g(Y)===!0||Y.isFramebufferTexture&&Y.minFilter!==Qn&&Y.minFilter!==Di?Math.log2(Math.max(D.width,D.height))+1:Y.mipmaps!==void 0&&Y.mipmaps.length>0?Y.mipmaps.length:Y.isCompressedTexture&&Array.isArray(Y.image)?D.mipmaps.length:1}function T(Y){let D=Y.target;D.removeEventListener("dispose",T),R(D),D.isVideoTexture&&u.delete(D)}function E(Y){let D=Y.target;D.removeEventListener("dispose",E),b(D)}function R(Y){let D=n.get(Y);if(D.__webglInit===void 0)return;let St=Y.source,Xt=p.get(St);if(Xt){let qt=Xt[D.__cacheKey];qt.usedTimes--,qt.usedTimes===0&&S(Y),Object.keys(Xt).length===0&&p.delete(St)}n.remove(Y)}function S(Y){let D=n.get(Y);i.deleteTexture(D.__webglTexture);let St=Y.source,Xt=p.get(St);delete Xt[D.__cacheKey],r.memory.textures--}function b(Y){let D=n.get(Y);if(Y.depthTexture&&(Y.depthTexture.dispose(),n.remove(Y.depthTexture)),Y.isWebGLCubeRenderTarget)for(let Xt=0;Xt<6;Xt++){if(Array.isArray(D.__webglFramebuffer[Xt]))for(let qt=0;qt<D.__webglFramebuffer[Xt].length;qt++)i.deleteFramebuffer(D.__webglFramebuffer[Xt][qt]);else i.deleteFramebuffer(D.__webglFramebuffer[Xt]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[Xt])}else{if(Array.isArray(D.__webglFramebuffer))for(let Xt=0;Xt<D.__webglFramebuffer.length;Xt++)i.deleteFramebuffer(D.__webglFramebuffer[Xt]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let Xt=0;Xt<D.__webglColorRenderbuffer.length;Xt++)D.__webglColorRenderbuffer[Xt]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[Xt]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let St=Y.textures;for(let Xt=0,qt=St.length;Xt<qt;Xt++){let Nt=n.get(St[Xt]);Nt.__webglTexture&&(i.deleteTexture(Nt.__webglTexture),r.memory.textures--),n.remove(St[Xt])}n.remove(Y)}let P=0;function N(){P=0}function z(){let Y=P;return Y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+Y+" texture units while this GPU supports only "+s.maxTextures),P+=1,Y}function O(Y){let D=[];return D.push(Y.wrapS),D.push(Y.wrapT),D.push(Y.wrapR||0),D.push(Y.magFilter),D.push(Y.minFilter),D.push(Y.anisotropy),D.push(Y.internalFormat),D.push(Y.format),D.push(Y.type),D.push(Y.generateMipmaps),D.push(Y.premultiplyAlpha),D.push(Y.flipY),D.push(Y.unpackAlignment),D.push(Y.colorSpace),D.join()}function G(Y,D){let St=n.get(Y);if(Y.isVideoTexture&&Kt(Y),Y.isRenderTargetTexture===!1&&Y.isExternalTexture!==!0&&Y.version>0&&St.__version!==Y.version){let Xt=Y.image;if(Xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(St,Y,D);return}}else Y.isExternalTexture&&(St.__webglTexture=Y.sourceTexture?Y.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,St.__webglTexture,i.TEXTURE0+D)}function j(Y,D){let St=n.get(Y);if(Y.isRenderTargetTexture===!1&&Y.version>0&&St.__version!==Y.version){J(St,Y,D);return}e.bindTexture(i.TEXTURE_2D_ARRAY,St.__webglTexture,i.TEXTURE0+D)}function et(Y,D){let St=n.get(Y);if(Y.isRenderTargetTexture===!1&&Y.version>0&&St.__version!==Y.version){J(St,Y,D);return}e.bindTexture(i.TEXTURE_3D,St.__webglTexture,i.TEXTURE0+D)}function tt(Y,D){let St=n.get(Y);if(Y.version>0&&St.__version!==Y.version){st(St,Y,D);return}e.bindTexture(i.TEXTURE_CUBE_MAP,St.__webglTexture,i.TEXTURE0+D)}let mt={[Li]:i.REPEAT,[Rs]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},Q={[Qn]:i.NEAREST,[Gf]:i.NEAREST_MIPMAP_NEAREST,[ra]:i.NEAREST_MIPMAP_LINEAR,[Di]:i.LINEAR,[Il]:i.LINEAR_MIPMAP_NEAREST,[zs]:i.LINEAR_MIPMAP_LINEAR},ft={[$f]:i.NEVER,[td]:i.ALWAYS,[Zf]:i.LESS,[Lh]:i.LEQUAL,[jf]:i.EQUAL,[Qf]:i.GEQUAL,[Kf]:i.GREATER,[Jf]:i.NOTEQUAL};function Et(Y,D){if(D.type===Ni&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Di||D.magFilter===Il||D.magFilter===ra||D.magFilter===zs||D.minFilter===Di||D.minFilter===Il||D.minFilter===ra||D.minFilter===zs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(Y,i.TEXTURE_WRAP_S,mt[D.wrapS]),i.texParameteri(Y,i.TEXTURE_WRAP_T,mt[D.wrapT]),(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(Y,i.TEXTURE_WRAP_R,mt[D.wrapR]),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,Q[D.magFilter]),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,Q[D.minFilter]),D.compareFunction&&(i.texParameteri(Y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(Y,i.TEXTURE_COMPARE_FUNC,ft[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Qn||D.minFilter!==ra&&D.minFilter!==zs||D.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){let St=t.get("EXT_texture_filter_anisotropic");i.texParameterf(Y,St.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function rt(Y,D){let St=!1;Y.__webglInit===void 0&&(Y.__webglInit=!0,D.addEventListener("dispose",T));let Xt=D.source,qt=p.get(Xt);qt===void 0&&(qt={},p.set(Xt,qt));let Nt=O(D);if(Nt!==Y.__cacheKey){qt[Nt]===void 0&&(qt[Nt]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,St=!0),qt[Nt].usedTimes++;let be=qt[Y.__cacheKey];be!==void 0&&(qt[Y.__cacheKey].usedTimes--,be.usedTimes===0&&S(D)),Y.__cacheKey=Nt,Y.__webglTexture=qt[Nt].texture}return St}function it(Y,D,St){return Math.floor(Math.floor(Y/St)/D)}function ct(Y,D,St,Xt){let Nt=Y.updateRanges;if(Nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,St,Xt,D.data);else{Nt.sort((se,ye)=>se.start-ye.start);let be=0;for(let se=1;se<Nt.length;se++){let ye=Nt[be],at=Nt[se],X=ye.start+ye.count,K=it(at.start,D.width,4),Wt=it(ye.start,D.width,4);at.start<=X+1&&K===Wt&&it(at.start+at.count-1,D.width,4)===K?ye.count=Math.max(ye.count,at.start+at.count-ye.start):(++be,Nt[be]=at)}Nt.length=be+1;let ae=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),we=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,D.width);for(let se=0,ye=Nt.length;se<ye;se++){let at=Nt[se],X=Math.floor(at.start/4),K=Math.ceil(at.count/4),Wt=X%D.width,$=Math.floor(X/D.width),It=K,k=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),i.pixelStorei(i.UNPACK_SKIP_ROWS,$),e.texSubImage2D(i.TEXTURE_2D,0,Wt,$,It,k,St,Xt,D.data)}Y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function J(Y,D,St){let Xt=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(Xt=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(Xt=i.TEXTURE_3D);let qt=rt(Y,D),Nt=D.source;e.bindTexture(Xt,Y.__webglTexture,i.TEXTURE0+St);let be=n.get(Nt);if(Nt.version!==be.__version||qt===!0){e.activeTexture(i.TEXTURE0+St);let ae=tn.getPrimaries(tn.workingColorSpace),ve=D.colorSpace===us?null:tn.getPrimaries(D.colorSpace),we=D.colorSpace===us||ae===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=y(D.image,!1,s.maxTextureSize);se=_e(D,se);let ye=o.convert(D.format,D.colorSpace),at=o.convert(D.type),X=x(D.internalFormat,ye,at,D.colorSpace,D.isVideoTexture);Et(Xt,D);let K,Wt=D.mipmaps,$=D.isVideoTexture!==!0,It=be.__version===void 0||qt===!0,k=Nt.dataReady,$t=v(D,se);if(D.isDepthTexture)X=_(D.format===ir,D.type),It&&($?e.texStorage2D(i.TEXTURE_2D,1,X,se.width,se.height):e.texImage2D(i.TEXTURE_2D,0,X,se.width,se.height,0,ye,at,null));else if(D.isDataTexture)if(Wt.length>0){$&&It&&e.texStorage2D(i.TEXTURE_2D,$t,X,Wt[0].width,Wt[0].height);for(let Yt=0,ut=Wt.length;Yt<ut;Yt++)K=Wt[Yt],$?k&&e.texSubImage2D(i.TEXTURE_2D,Yt,0,0,K.width,K.height,ye,at,K.data):e.texImage2D(i.TEXTURE_2D,Yt,X,K.width,K.height,0,ye,at,K.data);D.generateMipmaps=!1}else $?(It&&e.texStorage2D(i.TEXTURE_2D,$t,X,se.width,se.height),k&&ct(D,se,ye,at)):e.texImage2D(i.TEXTURE_2D,0,X,se.width,se.height,0,ye,at,se.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){$&&It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,X,Wt[0].width,Wt[0].height,se.depth);for(let Yt=0,ut=Wt.length;Yt<ut;Yt++)if(K=Wt[Yt],D.format!==_i)if(ye!==null)if($){if(k)if(D.layerUpdates.size>0){let Ut=Bh(K.width,K.height,D.format,D.type);for(let Bt of D.layerUpdates){let me=K.data.subarray(Bt*Ut/K.data.BYTES_PER_ELEMENT,(Bt+1)*Ut/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Yt,0,0,Bt,K.width,K.height,1,ye,me)}D.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Yt,0,0,0,K.width,K.height,se.depth,ye,K.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Yt,X,K.width,K.height,se.depth,0,K.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Yt,0,0,0,K.width,K.height,se.depth,ye,at,K.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Yt,X,K.width,K.height,se.depth,0,ye,at,K.data)}else{$&&It&&e.texStorage2D(i.TEXTURE_2D,$t,X,Wt[0].width,Wt[0].height);for(let Yt=0,ut=Wt.length;Yt<ut;Yt++)K=Wt[Yt],D.format!==_i?ye!==null?$?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,Yt,0,0,K.width,K.height,ye,K.data):e.compressedTexImage2D(i.TEXTURE_2D,Yt,X,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?k&&e.texSubImage2D(i.TEXTURE_2D,Yt,0,0,K.width,K.height,ye,at,K.data):e.texImage2D(i.TEXTURE_2D,Yt,X,K.width,K.height,0,ye,at,K.data)}else if(D.isDataArrayTexture)if($){if(It&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,X,se.width,se.height,se.depth),k)if(D.layerUpdates.size>0){let Yt=Bh(se.width,se.height,D.format,D.type);for(let ut of D.layerUpdates){let Ut=se.data.subarray(ut*Yt/se.data.BYTES_PER_ELEMENT,(ut+1)*Yt/se.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,se.width,se.height,1,ye,at,Ut)}D.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ye,at,se.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,X,se.width,se.height,se.depth,0,ye,at,se.data);else if(D.isData3DTexture)$?(It&&e.texStorage3D(i.TEXTURE_3D,$t,X,se.width,se.height,se.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ye,at,se.data)):e.texImage3D(i.TEXTURE_3D,0,X,se.width,se.height,se.depth,0,ye,at,se.data);else if(D.isFramebufferTexture){if(It)if($)e.texStorage2D(i.TEXTURE_2D,$t,X,se.width,se.height);else{let Yt=se.width,ut=se.height;for(let Ut=0;Ut<$t;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,X,Yt,ut,0,ye,at,null),Yt>>=1,ut>>=1}}else if(Wt.length>0){if($&&It){let Yt=Pe(Wt[0]);e.texStorage2D(i.TEXTURE_2D,$t,X,Yt.width,Yt.height)}for(let Yt=0,ut=Wt.length;Yt<ut;Yt++)K=Wt[Yt],$?k&&e.texSubImage2D(i.TEXTURE_2D,Yt,0,0,ye,at,K):e.texImage2D(i.TEXTURE_2D,Yt,X,ye,at,K);D.generateMipmaps=!1}else if($){if(It){let Yt=Pe(se);e.texStorage2D(i.TEXTURE_2D,$t,X,Yt.width,Yt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,at,se)}else e.texImage2D(i.TEXTURE_2D,0,X,ye,at,se);g(D)&&m(Xt),be.__version=Nt.version,D.onUpdate&&D.onUpdate(D)}Y.__version=D.version}function st(Y,D,St){if(D.image.length!==6)return;let Xt=rt(Y,D),qt=D.source;e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+St);let Nt=n.get(qt);if(qt.version!==Nt.__version||Xt===!0){e.activeTexture(i.TEXTURE0+St);let be=tn.getPrimaries(tn.workingColorSpace),ae=D.colorSpace===us?null:tn.getPrimaries(D.colorSpace),ve=D.colorSpace===us||be===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let we=D.isCompressedTexture||D.image[0].isCompressedTexture,se=D.image[0]&&D.image[0].isDataTexture,ye=[];for(let ut=0;ut<6;ut++)!we&&!se?ye[ut]=y(D.image[ut],!0,s.maxCubemapSize):ye[ut]=se?D.image[ut].image:D.image[ut],ye[ut]=_e(D,ye[ut]);let at=ye[0],X=o.convert(D.format,D.colorSpace),K=o.convert(D.type),Wt=x(D.internalFormat,X,K,D.colorSpace),$=D.isVideoTexture!==!0,It=Nt.__version===void 0||Xt===!0,k=qt.dataReady,$t=v(D,at);Et(i.TEXTURE_CUBE_MAP,D);let Yt;if(we){$&&It&&e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Wt,at.width,at.height);for(let ut=0;ut<6;ut++){Yt=ye[ut].mipmaps;for(let Ut=0;Ut<Yt.length;Ut++){let Bt=Yt[Ut];D.format!==_i?X!==null?$?k&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,0,0,Bt.width,Bt.height,X,Bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,Wt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,0,0,Bt.width,Bt.height,X,K,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut,Wt,Bt.width,Bt.height,0,X,K,Bt.data)}}}else{if(Yt=D.mipmaps,$&&It){Yt.length>0&&$t++;let ut=Pe(ye[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,$t,Wt,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(se){$?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,ye[ut].width,ye[ut].height,X,K,ye[ut].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Wt,ye[ut].width,ye[ut].height,0,X,K,ye[ut].data);for(let Ut=0;Ut<Yt.length;Ut++){let me=Yt[Ut].image[ut].image;$?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,0,0,me.width,me.height,X,K,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,Wt,me.width,me.height,0,X,K,me.data)}}else{$?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,X,K,ye[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,Wt,X,K,ye[ut]);for(let Ut=0;Ut<Yt.length;Ut++){let Bt=Yt[Ut];$?k&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,0,0,X,K,Bt.image[ut]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,Ut+1,Wt,X,K,Bt.image[ut])}}}g(D)&&m(i.TEXTURE_CUBE_MAP),Nt.__version=qt.version,D.onUpdate&&D.onUpdate(D)}Y.__version=D.version}function ht(Y,D,St,Xt,qt,Nt){let be=o.convert(St.format,St.colorSpace),ae=o.convert(St.type),ve=x(St.internalFormat,be,ae,St.colorSpace),we=n.get(D),se=n.get(St);if(se.__renderTarget=D,!we.__hasExternalTextures){let ye=Math.max(1,D.width>>Nt),at=Math.max(1,D.height>>Nt);qt===i.TEXTURE_3D||qt===i.TEXTURE_2D_ARRAY?e.texImage3D(qt,Nt,ve,ye,at,D.depth,0,be,ae,null):e.texImage2D(qt,Nt,ve,ye,at,0,be,ae,null)}e.bindFramebuffer(i.FRAMEBUFFER,Y),jt(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Xt,qt,se.__webglTexture,0,Qt(D)):(qt===i.TEXTURE_2D||qt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&qt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Xt,qt,se.__webglTexture,Nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(Y,D,St){if(i.bindRenderbuffer(i.RENDERBUFFER,Y),D.depthBuffer){let Xt=D.depthTexture,qt=Xt&&Xt.isDepthTexture?Xt.type:null,Nt=_(D.stencilBuffer,qt),be=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Qt(D);jt(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Nt,D.width,D.height):St?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Nt,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,Nt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,Y)}else{let Xt=D.textures;for(let qt=0;qt<Xt.length;qt++){let Nt=Xt[qt],be=o.convert(Nt.format,Nt.colorSpace),ae=o.convert(Nt.type),ve=x(Nt.internalFormat,be,ae,Nt.colorSpace),we=Qt(D);St&&jt(D)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ve,D.width,D.height):jt(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ve,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ve,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(Y,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,Y),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Xt=n.get(D.depthTexture);Xt.__renderTarget=D,(!Xt.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),G(D.depthTexture,0);let qt=Xt.__webglTexture,Nt=Qt(D);if(D.depthTexture.format===ko)jt(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,qt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,qt,0);else if(D.depthTexture.format===ir)jt(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,qt,0,Nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,qt,0);else throw new Error("Unknown depthTexture format")}function Tt(Y){let D=n.get(Y),St=Y.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==Y.depthTexture){let Xt=Y.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),Xt){let qt=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,Xt.removeEventListener("dispose",qt)};Xt.addEventListener("dispose",qt),D.__depthDisposeCallback=qt}D.__boundDepthTexture=Xt}if(Y.depthTexture&&!D.__autoAllocateDepthBuffer){if(St)throw new Error("target.depthTexture not supported in Cube render targets");let Xt=Y.texture.mipmaps;Xt&&Xt.length>0?Ft(D.__webglFramebuffer[0],Y):Ft(D.__webglFramebuffer,Y)}else if(St){D.__webglDepthbuffer=[];for(let Xt=0;Xt<6;Xt++)if(e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[Xt]),D.__webglDepthbuffer[Xt]===void 0)D.__webglDepthbuffer[Xt]=i.createRenderbuffer(),Dt(D.__webglDepthbuffer[Xt],Y,!1);else{let qt=Y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=D.__webglDepthbuffer[Xt];i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,qt,i.RENDERBUFFER,Nt)}}else{let Xt=Y.texture.mipmaps;if(Xt&&Xt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),Dt(D.__webglDepthbuffer,Y,!1);else{let qt=Y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,qt,i.RENDERBUFFER,Nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(Y,D,St){let Xt=n.get(Y);D!==void 0&&ht(Xt.__webglFramebuffer,Y,Y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),St!==void 0&&Tt(Y)}function q(Y){let D=Y.texture,St=n.get(Y),Xt=n.get(D);Y.addEventListener("dispose",E);let qt=Y.textures,Nt=Y.isWebGLCubeRenderTarget===!0,be=qt.length>1;if(be||(Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture()),Xt.__version=D.version,r.memory.textures++),Nt){St.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(D.mipmaps&&D.mipmaps.length>0){St.__webglFramebuffer[ae]=[];for(let ve=0;ve<D.mipmaps.length;ve++)St.__webglFramebuffer[ae][ve]=i.createFramebuffer()}else St.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){St.__webglFramebuffer=[];for(let ae=0;ae<D.mipmaps.length;ae++)St.__webglFramebuffer[ae]=i.createFramebuffer()}else St.__webglFramebuffer=i.createFramebuffer();if(be)for(let ae=0,ve=qt.length;ae<ve;ae++){let we=n.get(qt[ae]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),r.memory.textures++)}if(Y.samples>0&&jt(Y)===!1){St.__webglMultisampledFramebuffer=i.createFramebuffer(),St.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer);for(let ae=0;ae<qt.length;ae++){let ve=qt[ae];St.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,St.__webglColorRenderbuffer[ae]);let we=o.convert(ve.format,ve.colorSpace),se=o.convert(ve.type),ye=x(ve.internalFormat,we,se,ve.colorSpace,Y.isXRRenderTarget===!0),at=Qt(Y);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,ye,Y.width,Y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,St.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),Y.depthBuffer&&(St.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(St.__webglDepthRenderbuffer,Y,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Nt){e.bindTexture(i.TEXTURE_CUBE_MAP,Xt.__webglTexture),Et(i.TEXTURE_CUBE_MAP,D);for(let ae=0;ae<6;ae++)if(D.mipmaps&&D.mipmaps.length>0)for(let ve=0;ve<D.mipmaps.length;ve++)ht(St.__webglFramebuffer[ae][ve],Y,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ve);else ht(St.__webglFramebuffer[ae],Y,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(D)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(be){for(let ae=0,ve=qt.length;ae<ve;ae++){let we=qt[ae],se=n.get(we),ye=i.TEXTURE_2D;(Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(ye=Y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ye,se.__webglTexture),Et(ye,we),ht(St.__webglFramebuffer,Y,we,i.COLOR_ATTACHMENT0+ae,ye,0),g(we)&&m(ye)}e.unbindTexture()}else{let ae=i.TEXTURE_2D;if((Y.isWebGL3DRenderTarget||Y.isWebGLArrayRenderTarget)&&(ae=Y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ae,Xt.__webglTexture),Et(ae,D),D.mipmaps&&D.mipmaps.length>0)for(let ve=0;ve<D.mipmaps.length;ve++)ht(St.__webglFramebuffer[ve],Y,D,i.COLOR_ATTACHMENT0,ae,ve);else ht(St.__webglFramebuffer,Y,D,i.COLOR_ATTACHMENT0,ae,0);g(D)&&m(ae),e.unbindTexture()}Y.depthBuffer&&Tt(Y)}function dt(Y){let D=Y.textures;for(let St=0,Xt=D.length;St<Xt;St++){let qt=D[St];if(g(qt)){let Nt=M(Y),be=n.get(qt).__webglTexture;e.bindTexture(Nt,be),m(Nt),e.unbindTexture()}}}let xt=[],At=[];function Lt(Y){if(Y.samples>0){if(jt(Y)===!1){let D=Y.textures,St=Y.width,Xt=Y.height,qt=i.COLOR_BUFFER_BIT,Nt=Y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(Y),ae=D.length>1;if(ae)for(let we=0;we<D.length;we++)e.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ve=Y.texture.mipmaps;ve&&ve.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let we=0;we<D.length;we++){if(Y.resolveDepthBuffer&&(Y.depthBuffer&&(qt|=i.DEPTH_BUFFER_BIT),Y.stencilBuffer&&Y.resolveStencilBuffer&&(qt|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[we]);let se=n.get(D[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,St,Xt,0,0,St,Xt,qt,i.NEAREST),l===!0&&(xt.length=0,At.length=0,xt.push(i.COLOR_ATTACHMENT0+we),Y.depthBuffer&&Y.resolveDepthBuffer===!1&&(xt.push(Nt),At.push(Nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<D.length;we++){e.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,be.__webglColorRenderbuffer[we]);let se=n.get(D[we]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,se,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(Y.depthBuffer&&Y.resolveDepthBuffer===!1&&l){let D=Y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function Qt(Y){return Math.min(s.maxSamples,Y.samples)}function jt(Y){let D=n.get(Y);return Y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Kt(Y){let D=r.render.frame;u.get(Y)!==D&&(u.set(Y,D),Y.update())}function _e(Y,D){let St=Y.colorSpace,Xt=Y.format,qt=Y.type;return Y.isCompressedTexture===!0||Y.isVideoTexture===!0||St!==no&&St!==us&&(tn.getTransfer(St)===rn?(Xt!==_i||qt!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",St)),D}function Pe(Y){return typeof HTMLImageElement<"u"&&Y instanceof HTMLImageElement?(c.width=Y.naturalWidth||Y.width,c.height=Y.naturalHeight||Y.height):typeof VideoFrame<"u"&&Y instanceof VideoFrame?(c.width=Y.displayWidth,c.height=Y.displayHeight):(c.width=Y.width,c.height=Y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=j,this.setTexture3D=et,this.setTextureCube=tt,this.rebindTextures=Gt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=jt}function ox(i,t){function e(n,s=us){let o,r=tn.getTransfer(s);if(n===Ui)return i.UNSIGNED_BYTE;if(n===Dl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ul)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Eh)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Fs)return i.UNSIGNED_INT;if(n===Ni)return i.FLOAT;if(n===er)return i.HALF_FLOAT;if(n===Rh)return i.ALPHA;if(n===Ch)return i.RGB;if(n===_i)return i.RGBA;if(n===ko)return i.DEPTH_COMPONENT;if(n===ir)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===Ph)return i.RG;if(n===Fl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ha)if(r===rn)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===aa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===aa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Bl||n===Hl||n===Vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ol)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wl||n===Gl||n===Xl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Wl||n===Gl)return r===rn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Xl)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ql||n===Yl||n===$l||n===Zl||n===jl||n===Kl||n===Jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===oc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ql)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$l)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jl)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oc)return r===rn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rc||n===ac||n===lc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===rc)return r===rn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ac)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===cc||n===hc||n===uc||n===fc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===cc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
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

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Nr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new zn({vertexShader:rx,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Te(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends Bi{constructor(t,e){super();let n=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,u=null,h=null,p=null,d=null,f=null,y=typeof XRWebGLBinding<"u",g=new Qh,m={},M=e.getContextAttributes(),x=null,_=null,v=[],T=[],E=new oe,R=null,S=new Xn;S.viewport=new an;let b=new Xn;b.viewport=new an;let P=[S,b],N=new Ml,z=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let st=v[J];return st===void 0&&(st=new Wo,v[J]=st),st.getTargetRaySpace()},this.getControllerGrip=function(J){let st=v[J];return st===void 0&&(st=new Wo,v[J]=st),st.getGripSpace()},this.getHand=function(J){let st=v[J];return st===void 0&&(st=new Wo,v[J]=st),st.getHandSpace()};function G(J){let st=T.indexOf(J.inputSource);if(st===-1)return;let ht=v[st];ht!==void 0&&(ht.update(J.inputSource,J.frame,c||r),ht.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",et);for(let J=0;J<v.length;J++){let st=T[J];st!==null&&(T[J]=null,v[J].disconnect(st))}z=null,O=null,g.reset();for(let J in m)delete m[J];t.setRenderTarget(x),d=null,p=null,h=null,s=null,_=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",j),s.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Dt=null,Ft=null;M.depth&&(Ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=M.stencil?ir:ko,Dt=M.stencil?nr:Fs);let Tt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:o};h=this.getBinding(),p=h.createProjectionLayer(Tt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new Hi(p.textureWidth,p.textureHeight,{format:_i,type:Ui,depthTexture:new Ur(p.textureWidth,p.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ht={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Hi(d.framebufferWidth,d.framebufferHeight,{format:_i,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(J){for(let st=0;st<J.removed.length;st++){let ht=J.removed[st],Dt=T.indexOf(ht);Dt>=0&&(T[Dt]=null,v[Dt].disconnect(ht))}for(let st=0;st<J.added.length;st++){let ht=J.added[st],Dt=T.indexOf(ht);if(Dt===-1){for(let Tt=0;Tt<v.length;Tt++)if(Tt>=T.length){T.push(ht),Dt=Tt;break}else if(T[Tt]===null){T[Tt]=ht,Dt=Tt;break}if(Dt===-1)break}let Ft=v[Dt];Ft&&Ft.connect(ht)}}let tt=new nt,mt=new nt;function Q(J,st,ht){tt.setFromMatrixPosition(st.matrixWorld),mt.setFromMatrixPosition(ht.matrixWorld);let Dt=tt.distanceTo(mt),Ft=st.projectionMatrix.elements,Tt=ht.projectionMatrix.elements,Gt=Ft[14]/(Ft[10]-1),q=Ft[14]/(Ft[10]+1),dt=(Ft[9]+1)/Ft[5],xt=(Ft[9]-1)/Ft[5],At=(Ft[8]-1)/Ft[0],Lt=(Tt[8]+1)/Tt[0],Qt=Gt*At,jt=Gt*Lt,Kt=Dt/(-At+Lt),_e=Kt*-At;if(st.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_e),J.translateZ(Kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ft[10]===-1)J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Pe=Gt+Kt,Y=q+Kt,D=Qt-_e,St=jt+(Dt-_e),Xt=dt*q/Y*Pe,qt=xt*q/Y*Pe;J.projectionMatrix.makePerspective(D,St,Xt,qt,Pe,Y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ft(J,st){st===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(st.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let st=J.near,ht=J.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(ht=g.depthFar)),N.near=b.near=S.near=st,N.far=b.far=S.far=ht,(z!==N.near||O!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,O=N.far),N.layers.mask=J.layers.mask|6,S.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;let Dt=J.parent,Ft=N.cameras;ft(N,Dt);for(let Tt=0;Tt<Ft.length;Tt++)ft(Ft[Tt],Dt);Ft.length===2?Q(N,S,b):N.projectionMatrix.copy(S.projectionMatrix),Et(J,N,Dt)};function Et(J,st,ht){ht===null?J.matrix.copy(st.matrixWorld):(J.matrix.copy(ht.matrixWorld),J.matrix.invert(),J.matrix.multiply(st.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(st.projectionMatrix),J.projectionMatrixInverse.copy(st.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Oo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return m[J]};let rt=null;function it(J,st){if(u=st.getViewerPose(c||r),f=st,u!==null){let ht=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Dt=!1;ht.length!==N.cameras.length&&(N.cameras.length=0,Dt=!0);for(let q=0;q<ht.length;q++){let dt=ht[q],xt=null;if(d!==null)xt=d.getViewport(dt);else{let Lt=h.getViewSubImage(p,dt);xt=Lt.viewport,q===0&&(t.setRenderTargetTextures(_,Lt.colorTexture,Lt.depthStencilTexture),t.setRenderTarget(_))}let At=P[q];At===void 0&&(At=new Xn,At.layers.enable(q),At.viewport=new an,P[q]=At),At.matrix.fromArray(dt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(dt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(xt.x,xt.y,xt.width,xt.height),q===0&&(N.matrix.copy(At.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Dt===!0&&N.cameras.push(At)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let q=h.getDepthInformation(ht[0]);q&&q.isValid&&q.texture&&g.init(q,s.renderState)}if(Ft&&Ft.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let q=0;q<ht.length;q++){let dt=ht[q].camera;if(dt){let xt=m[dt];xt||(xt=new Nr,m[dt]=xt);let At=h.getCameraImage(dt);xt.sourceTexture=At}}}}for(let ht=0;ht<v.length;ht++){let Dt=T[ht],Ft=v[ht];Dt!==null&&Ft!==void 0&&Ft.update(Dt,st,c||r)}rt&&rt(J,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),f=null}let ct=new Ld;ct.setAnimationLoop(it),this.setAnimationLoop=function(J){rt=J},this.dispose=function(){}}},fo=new ri,lx=new Ze;function cx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,zh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),p(g,m),m.isMeshPhysicalMaterial&&d(g,m,_)):m.isMeshMatcapMaterial?(o(g,m),f(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),y(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===kn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===kn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),x=M.envMap,_=M.envMapRotation;x&&(g.envMap.value=x,fo.copy(_),fo.x*=-1,fo.y*=-1,fo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fo.y*=-1,fo.z*=-1),g.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(fo)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===kn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hx(i,t,e,n){let s={},o={},r=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=s[M.id];_===void 0&&(f(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",g));let v=x.program;n.updateUBOMapping(M,v);let T=t.render.frame;o[M.id]!==T&&(p(M),o[M.id]=T)}function u(M){let x=h();M.__bindingPointIndex=x;let _=i.createBuffer(),v=M.__size,T=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let x=s[M.id],_=M.uniforms,v=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,E=_.length;T<E;T++){let R=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,b=R.length;S<b;S++){let P=R[S];if(d(P,T,S,v)===!0){let N=P.__offset,z=Array.isArray(P.value)?P.value:[P.value],O=0;for(let G=0;G<z.length;G++){let j=z[G],et=y(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,N+O,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,O),O+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,x,_,v){let T=M.value,E=x+"_"+_;if(v[E]===void 0)return typeof T=="number"||typeof T=="boolean"?v[E]=T:v[E]=T.clone(),!0;{let R=v[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return v[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function f(M){let x=M.uniforms,_=0,v=16;for(let E=0,R=x.length;E<R;E++){let S=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,P=S.length;b<P;b++){let N=S[b],z=Array.isArray(N.value)?N.value:[N.value];for(let O=0,G=z.length;O<G;O++){let j=z[O],et=y(j),tt=_%v,mt=tt%et.boundary,Q=tt+mt;_+=mt,Q!==0&&v-Q<et.storage&&(_+=v-Q),N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=et.storage}}}let T=_%v;return T>0&&(_+=v-T),M.__size=_,M.__cache={},this}function y(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){let x=M.target;x.removeEventListener("dispose",g);let _=r.indexOf(x.__bindingPointIndex);r.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete o[x.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:l,update:c,dispose:m}}var gc=class{constructor(t={}){let{canvas:e=ed(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;let f=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,v=!1;this._outputColorSpace=vn;let T=0,E=0,R=null,S=-1,b=null,P=new an,N=new an,z=null,O=new Ce(0),G=0,j=e.width,et=e.height,tt=1,mt=null,Q=null,ft=new an(0,0,j,et),Et=new an(0,0,j,et),rt=!1,it=new Yo,ct=!1,J=!1,st=new Ze,ht=new nt,Dt=new an,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Gt(){return R===null?tt:1}let q=n;function dt(V,bt){return e.getContext(V,bt)}try{let V={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",$t,!1),e.addEventListener("webglcontextcreationerror",Yt,!1),q===null){let bt="webgl2";if(q=dt(bt,V),q===null)throw dt(bt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(V){throw console.error("THREE.WebGLRenderer: "+V.message),V}let xt,At,Lt,Qt,jt,Kt,_e,Pe,Y,D,St,Xt,qt,Nt,be,ae,ve,we,se,ye,at,X,K,Wt;function $(){xt=new Ry(q),xt.init(),X=new ox(q,xt),At=new vy(q,xt,t,X),Lt=new ix(q,xt),At.reversedDepthBuffer&&p&&Lt.buffers.depth.setReversed(!0),Qt=new Iy(q),jt=new G_,Kt=new sx(q,xt,Lt,jt,At,X,Qt),_e=new Sy(_),Pe=new Ay(_),Y=new Fm(q),K=new xy(q,Y),D=new Cy(q,Y,Qt,K),St=new Dy(q,D,Y,Qt),se=new Ly(q,At,Kt),ae=new by(jt),Xt=new W_(_,_e,Pe,xt,At,K,ae),qt=new cx(_,jt),Nt=new q_,be=new J_(xt),we=new _y(_,_e,Pe,Lt,St,d,l),ve=new ex(_,St,At),Wt=new hx(q,Qt,At,Lt),ye=new My(q,xt,Qt),at=new Py(q,xt,Qt),Qt.programs=Xt.programs,_.capabilities=At,_.extensions=xt,_.properties=jt,_.renderLists=Nt,_.shadowMap=ve,_.state=Lt,_.info=Qt}$();let It=new tu(_,q);this.xr=It,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let V=xt.get("WEBGL_lose_context");V&&V.loseContext()},this.forceContextRestore=function(){let V=xt.get("WEBGL_lose_context");V&&V.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(V){V!==void 0&&(tt=V,this.setSize(j,et,!1))},this.getSize=function(V){return V.set(j,et)},this.setSize=function(V,bt,Vt=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=V,et=bt,e.width=Math.floor(V*tt),e.height=Math.floor(bt*tt),Vt===!0&&(e.style.width=V+"px",e.style.height=bt+"px"),this.setViewport(0,0,V,bt)},this.getDrawingBufferSize=function(V){return V.set(j*tt,et*tt).floor()},this.setDrawingBufferSize=function(V,bt,Vt){j=V,et=bt,tt=Vt,e.width=Math.floor(V*Vt),e.height=Math.floor(bt*Vt),this.setViewport(0,0,V,bt)},this.getCurrentViewport=function(V){return V.copy(P)},this.getViewport=function(V){return V.copy(ft)},this.setViewport=function(V,bt,Vt,U){V.isVector4?ft.set(V.x,V.y,V.z,V.w):ft.set(V,bt,Vt,U),Lt.viewport(P.copy(ft).multiplyScalar(tt).round())},this.getScissor=function(V){return V.copy(Et)},this.setScissor=function(V,bt,Vt,U){V.isVector4?Et.set(V.x,V.y,V.z,V.w):Et.set(V,bt,Vt,U),Lt.scissor(N.copy(Et).multiplyScalar(tt).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(V){Lt.setScissorTest(rt=V)},this.setOpaqueSort=function(V){mt=V},this.setTransparentSort=function(V){Q=V},this.getClearColor=function(V){return V.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(V=!0,bt=!0,Vt=!0){let U=0;if(V){let Z=!1;if(R!==null){let gt=R.texture.format;Z=gt===kl||gt===Fl||gt===zl}if(Z){let gt=R.texture.type,zt=gt===Ui||gt===Fs||gt===tr||gt===nr||gt===Dl||gt===Ul,Zt=we.getClearColor(),A=we.getClearAlpha(),le=Zt.r,de=Zt.g,fe=Zt.b;zt?(f[0]=le,f[1]=de,f[2]=fe,f[3]=A,q.clearBufferuiv(q.COLOR,0,f)):(y[0]=le,y[1]=de,y[2]=fe,y[3]=A,q.clearBufferiv(q.COLOR,0,y))}else U|=q.COLOR_BUFFER_BIT}bt&&(U|=q.DEPTH_BUFFER_BIT),Vt&&(U|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",$t,!1),e.removeEventListener("webglcontextcreationerror",Yt,!1),we.dispose(),Nt.dispose(),be.dispose(),jt.dispose(),_e.dispose(),Pe.dispose(),St.dispose(),K.dispose(),Wt.dispose(),Xt.dispose(),It.dispose(),It.removeEventListener("sessionstart",De),It.removeEventListener("sessionend",Qe),Ve.stop()};function k(V){V.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function $t(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let V=Qt.autoReset,bt=ve.enabled,Vt=ve.autoUpdate,U=ve.needsUpdate,Z=ve.type;$(),Qt.autoReset=V,ve.enabled=bt,ve.autoUpdate=Vt,ve.needsUpdate=U,ve.type=Z}function Yt(V){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function ut(V){let bt=V.target;bt.removeEventListener("dispose",ut),Ut(bt)}function Ut(V){Bt(V),jt.remove(V)}function Bt(V){let bt=jt.get(V).programs;bt!==void 0&&(bt.forEach(function(Vt){Xt.releaseProgram(Vt)}),V.isShaderMaterial&&Xt.releaseShaderCache(V))}this.renderBufferDirect=function(V,bt,Vt,U,Z,gt){bt===null&&(bt=Ft);let zt=Z.isMesh&&Z.matrixWorld.determinant()<0,Zt=Vs(V,bt,Vt,U,Z);Lt.setMaterial(U,zt);let A=Vt.index,le=1;if(U.wireframe===!0){if(A=D.getWireframeAttribute(Vt),A===void 0)return;le=2}let de=Vt.drawRange,fe=Vt.attributes.position,Se=de.start*le,Me=(de.start+de.count)*le;gt!==null&&(Se=Math.max(Se,gt.start*le),Me=Math.min(Me,(gt.start+gt.count)*le)),A!==null?(Se=Math.max(Se,0),Me=Math.min(Me,A.count)):fe!=null&&(Se=Math.max(Se,0),Me=Math.min(Me,fe.count));let Re=Me-Se;if(Re<0||Re===1/0)return;K.setup(Z,U,Zt,Vt,A);let Oe,Ae=ye;if(A!==null&&(Oe=Y.get(A),Ae=at,Ae.setIndex(Oe)),Z.isMesh)U.wireframe===!0?(Lt.setLineWidth(U.wireframeLinewidth*Gt()),Ae.setMode(q.LINES)):Ae.setMode(q.TRIANGLES);else if(Z.isLine){let pe=U.linewidth;pe===void 0&&(pe=1),Lt.setLineWidth(pe*Gt()),Z.isLineSegments?Ae.setMode(q.LINES):Z.isLineLoop?Ae.setMode(q.LINE_LOOP):Ae.setMode(q.LINE_STRIP)}else Z.isPoints?Ae.setMode(q.POINTS):Z.isSprite&&Ae.setMode(q.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let pe=Z._multiDrawStarts,Ye=Z._multiDrawCounts,ze=Z._multiDrawCount,dn=A?Y.get(A).bytesPerElement:1,Ln=jt.get(U).currentProgram.getUniforms();for(let _n=0;_n<ze;_n++)Ln.setValue(q,"_gl_DrawID",_n),Ae.render(pe[_n]/dn,Ye[_n])}else if(Z.isInstancedMesh)Ae.renderInstances(Se,Re,Z.count);else if(Vt.isInstancedBufferGeometry){let pe=Vt._maxInstanceCount!==void 0?Vt._maxInstanceCount:1/0,Ye=Math.min(Vt.instanceCount,pe);Ae.renderInstances(Se,Re,Ye)}else Ae.render(Se,Re)};function me(V,bt,Vt){V.transparent===!0&&V.side===cn&&V.forceSinglePass===!1?(V.side=kn,V.needsUpdate=!0,ii(V,bt,Vt),V.side=Ii,V.needsUpdate=!0,ii(V,bt,Vt),V.side=cn):ii(V,bt,Vt)}this.compile=function(V,bt,Vt=null){Vt===null&&(Vt=V),m=be.get(Vt),m.init(bt),x.push(m),Vt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(bt.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),V!==Vt&&V.traverseVisible(function(Z){Z.isLight&&Z.layers.test(bt.layers)&&(m.pushLight(Z),Z.castShadow&&m.pushShadow(Z))}),m.setupLights();let U=new Set;return V.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let gt=Z.material;if(gt)if(Array.isArray(gt))for(let zt=0;zt<gt.length;zt++){let Zt=gt[zt];me(Zt,Vt,Z),U.add(Zt)}else me(gt,Vt,Z),U.add(gt)}),m=x.pop(),U},this.compileAsync=function(V,bt,Vt=null){let U=this.compile(V,bt,Vt);return new Promise(Z=>{function gt(){if(U.forEach(function(zt){jt.get(zt).currentProgram.isReady()&&U.delete(zt)}),U.size===0){Z(V);return}setTimeout(gt,10)}xt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let xe=null;function Ne(V){xe&&xe(V)}function De(){Ve.stop()}function Qe(){Ve.start()}let Ve=new Ld;Ve.setAnimationLoop(Ne),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(V){xe=V,It.setAnimationLoop(V),V===null?Ve.stop():Ve.start()},It.addEventListener("sessionstart",De),It.addEventListener("sessionend",Qe),this.render=function(V,bt){if(bt!==void 0&&bt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),bt.parent===null&&bt.matrixWorldAutoUpdate===!0&&bt.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(bt),bt=It.getCamera()),V.isScene===!0&&V.onBeforeRender(_,V,bt,R),m=be.get(V,x.length),m.init(bt),x.push(m),st.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),it.setFromProjectionMatrix(st,Ci,bt.reversedDepth),J=this.localClippingEnabled,ct=ae.init(this.clippingPlanes,J),g=Nt.get(V,M.length),g.init(),M.push(g),It.enabled===!0&&It.isPresenting===!0){let gt=_.xr.getDepthSensingMesh();gt!==null&&Vn(gt,bt,-1/0,_.sortObjects)}Vn(V,bt,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(mt,Q),Tt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Tt&&we.addToRenderList(g,V),this.info.render.frame++,ct===!0&&ae.beginShadows();let Vt=m.state.shadowsArray;ve.render(Vt,V,bt),ct===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let U=g.opaque,Z=g.transmissive;if(m.setupLights(),bt.isArrayCamera){let gt=bt.cameras;if(Z.length>0)for(let zt=0,Zt=gt.length;zt<Zt;zt++){let A=gt[zt];Yn(U,Z,V,A)}Tt&&we.render(V);for(let zt=0,Zt=gt.length;zt<Zt;zt++){let A=gt[zt];ni(g,V,A,A.viewport)}}else Z.length>0&&Yn(U,Z,V,bt),Tt&&we.render(V),ni(g,V,bt);R!==null&&E===0&&(Kt.updateMultisampleRenderTarget(R),Kt.updateRenderTargetMipmap(R)),V.isScene===!0&&V.onAfterRender(_,V,bt),K.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(m=x[x.length-1],ct===!0&&ae.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Vn(V,bt,Vt,U){if(V.visible===!1)return;if(V.layers.test(bt.layers)){if(V.isGroup)Vt=V.renderOrder;else if(V.isLOD)V.autoUpdate===!0&&V.update(bt);else if(V.isLight)m.pushLight(V),V.castShadow&&m.pushShadow(V);else if(V.isSprite){if(!V.frustumCulled||it.intersectsSprite(V)){U&&Dt.setFromMatrixPosition(V.matrixWorld).applyMatrix4(st);let zt=St.update(V),Zt=V.material;Zt.visible&&g.push(V,zt,Zt,Vt,Dt.z,null)}}else if((V.isMesh||V.isLine||V.isPoints)&&(!V.frustumCulled||it.intersectsObject(V))){let zt=St.update(V),Zt=V.material;if(U&&(V.boundingSphere!==void 0?(V.boundingSphere===null&&V.computeBoundingSphere(),Dt.copy(V.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Dt.copy(zt.boundingSphere.center)),Dt.applyMatrix4(V.matrixWorld).applyMatrix4(st)),Array.isArray(Zt)){let A=zt.groups;for(let le=0,de=A.length;le<de;le++){let fe=A[le],Se=Zt[fe.materialIndex];Se&&Se.visible&&g.push(V,zt,Se,Vt,Dt.z,fe)}}else Zt.visible&&g.push(V,zt,Zt,Vt,Dt.z,null)}}let gt=V.children;for(let zt=0,Zt=gt.length;zt<Zt;zt++)Vn(gt[zt],bt,Vt,U)}function ni(V,bt,Vt,U){let Z=V.opaque,gt=V.transmissive,zt=V.transparent;m.setupLightsView(Vt),ct===!0&&ae.setGlobalState(_.clippingPlanes,Vt),U&&Lt.viewport(P.copy(U)),Z.length>0&&$n(Z,bt,Vt),gt.length>0&&$n(gt,bt,Vt),zt.length>0&&$n(zt,bt,Vt),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function Yn(V,bt,Vt,U){if((Vt.isScene===!0?Vt.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[U.id]===void 0&&(m.state.transmissionRenderTarget[U.id]=new Hi(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?er:Ui,minFilter:zs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tn.workingColorSpace}));let gt=m.state.transmissionRenderTarget[U.id],zt=U.viewport||P;gt.setSize(zt.z*_.transmissionResolutionScale,zt.w*_.transmissionResolutionScale);let Zt=_.getRenderTarget(),A=_.getActiveCubeFace(),le=_.getActiveMipmapLevel();_.setRenderTarget(gt),_.getClearColor(O),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear(),Tt&&we.render(Vt);let de=_.toneMapping;_.toneMapping=hs;let fe=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),m.setupLightsView(U),ct===!0&&ae.setGlobalState(_.clippingPlanes,U),$n(V,Vt,U),Kt.updateMultisampleRenderTarget(gt),Kt.updateRenderTargetMipmap(gt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let Me=0,Re=bt.length;Me<Re;Me++){let Oe=bt[Me],Ae=Oe.object,pe=Oe.geometry,Ye=Oe.material,ze=Oe.group;if(Ye.side===cn&&Ae.layers.test(U.layers)){let dn=Ye.side;Ye.side=kn,Ye.needsUpdate=!0,ui(Ae,Vt,U,pe,Ye,ze),Ye.side=dn,Ye.needsUpdate=!0,Se=!0}}Se===!0&&(Kt.updateMultisampleRenderTarget(gt),Kt.updateRenderTargetMipmap(gt))}_.setRenderTarget(Zt,A,le),_.setClearColor(O,G),fe!==void 0&&(U.viewport=fe),_.toneMapping=de}function $n(V,bt,Vt){let U=bt.isScene===!0?bt.overrideMaterial:null;for(let Z=0,gt=V.length;Z<gt;Z++){let zt=V[Z],Zt=zt.object,A=zt.geometry,le=zt.group,de=zt.material;de.allowOverride===!0&&U!==null&&(de=U),Zt.layers.test(Vt.layers)&&ui(Zt,bt,Vt,A,de,le)}}function ui(V,bt,Vt,U,Z,gt){V.onBeforeRender(_,bt,Vt,U,Z,gt),V.modelViewMatrix.multiplyMatrices(Vt.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),Z.onBeforeRender(_,bt,Vt,U,V,gt),Z.transparent===!0&&Z.side===cn&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,_.renderBufferDirect(Vt,bt,U,Z,V,gt),Z.side=Ii,Z.needsUpdate=!0,_.renderBufferDirect(Vt,bt,U,Z,V,gt),Z.side=cn):_.renderBufferDirect(Vt,bt,U,Z,V,gt),V.onAfterRender(_,bt,Vt,U,Z,gt)}function ii(V,bt,Vt){bt.isScene!==!0&&(bt=Ft);let U=jt.get(V),Z=m.state.lights,gt=m.state.shadowsArray,zt=Z.state.version,Zt=Xt.getParameters(V,Z.state,gt,bt,Vt),A=Xt.getProgramCacheKey(Zt),le=U.programs;U.environment=V.isMeshStandardMaterial?bt.environment:null,U.fog=bt.fog,U.envMap=(V.isMeshStandardMaterial?Pe:_e).get(V.envMap||U.environment),U.envMapRotation=U.environment!==null&&V.envMap===null?bt.environmentRotation:V.envMapRotation,le===void 0&&(V.addEventListener("dispose",ut),le=new Map,U.programs=le);let de=le.get(A);if(de!==void 0){if(U.currentProgram===de&&U.lightsStateVersion===zt)return Fi(V,Zt),de}else Zt.uniforms=Xt.getUniforms(V),V.onBeforeCompile(Zt,_),de=Xt.acquireProgram(Zt,A),le.set(A,de),U.uniforms=Zt.uniforms;let fe=U.uniforms;return(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)&&(fe.clippingPlanes=ae.uniform),Fi(V,Zt),U.needsLights=_o(V),U.lightsStateVersion=zt,U.needsLights&&(fe.ambientLightColor.value=Z.state.ambient,fe.lightProbe.value=Z.state.probe,fe.directionalLights.value=Z.state.directional,fe.directionalLightShadows.value=Z.state.directionalShadow,fe.spotLights.value=Z.state.spot,fe.spotLightShadows.value=Z.state.spotShadow,fe.rectAreaLights.value=Z.state.rectArea,fe.ltc_1.value=Z.state.rectAreaLTC1,fe.ltc_2.value=Z.state.rectAreaLTC2,fe.pointLights.value=Z.state.point,fe.pointLightShadows.value=Z.state.pointShadow,fe.hemisphereLights.value=Z.state.hemi,fe.directionalShadowMap.value=Z.state.directionalShadowMap,fe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,fe.spotShadowMap.value=Z.state.spotShadowMap,fe.spotLightMatrix.value=Z.state.spotLightMatrix,fe.spotLightMap.value=Z.state.spotLightMap,fe.pointShadowMap.value=Z.state.pointShadowMap,fe.pointShadowMatrix.value=Z.state.pointShadowMatrix),U.currentProgram=de,U.uniformsList=null,de}function gs(V){if(V.uniformsList===null){let bt=V.currentProgram.getUniforms();V.uniformsList=rr.seqWithValue(bt.seq,V.uniforms)}return V.uniformsList}function Fi(V,bt){let Vt=jt.get(V);Vt.outputColorSpace=bt.outputColorSpace,Vt.batching=bt.batching,Vt.batchingColor=bt.batchingColor,Vt.instancing=bt.instancing,Vt.instancingColor=bt.instancingColor,Vt.instancingMorph=bt.instancingMorph,Vt.skinning=bt.skinning,Vt.morphTargets=bt.morphTargets,Vt.morphNormals=bt.morphNormals,Vt.morphColors=bt.morphColors,Vt.morphTargetsCount=bt.morphTargetsCount,Vt.numClippingPlanes=bt.numClippingPlanes,Vt.numIntersection=bt.numClipIntersection,Vt.vertexAlphas=bt.vertexAlphas,Vt.vertexTangents=bt.vertexTangents,Vt.toneMapping=bt.toneMapping}function Vs(V,bt,Vt,U,Z){bt.isScene!==!0&&(bt=Ft),Kt.resetTextureUnits();let gt=bt.fog,zt=U.isMeshStandardMaterial?bt.environment:null,Zt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:no,A=(U.isMeshStandardMaterial?Pe:_e).get(U.envMap||zt),le=U.vertexColors===!0&&!!Vt.attributes.color&&Vt.attributes.color.itemSize===4,de=!!Vt.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),fe=!!Vt.morphAttributes.position,Se=!!Vt.morphAttributes.normal,Me=!!Vt.morphAttributes.color,Re=hs;U.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=_.toneMapping);let Oe=Vt.morphAttributes.position||Vt.morphAttributes.normal||Vt.morphAttributes.color,Ae=Oe!==void 0?Oe.length:0,pe=jt.get(U),Ye=m.state.lights;if(ct===!0&&(J===!0||V!==b)){let fn=V===b&&U.id===S;ae.setState(U,V,fn)}let ze=!1;U.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==Ye.state.version||pe.outputColorSpace!==Zt||Z.isBatchedMesh&&pe.batching===!1||!Z.isBatchedMesh&&pe.batching===!0||Z.isBatchedMesh&&pe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&pe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&pe.instancing===!1||!Z.isInstancedMesh&&pe.instancing===!0||Z.isSkinnedMesh&&pe.skinning===!1||!Z.isSkinnedMesh&&pe.skinning===!0||Z.isInstancedMesh&&pe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&pe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&pe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&pe.instancingMorph===!1&&Z.morphTexture!==null||pe.envMap!==A||U.fog===!0&&pe.fog!==gt||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==ae.numPlanes||pe.numIntersection!==ae.numIntersection)||pe.vertexAlphas!==le||pe.vertexTangents!==de||pe.morphTargets!==fe||pe.morphNormals!==Se||pe.morphColors!==Me||pe.toneMapping!==Re||pe.morphTargetsCount!==Ae)&&(ze=!0):(ze=!0,pe.__version=U.version);let dn=pe.currentProgram;ze===!0&&(dn=ii(U,bt,Z));let Ln=!1,_n=!1,wi=!1,Ee=dn.getUniforms(),Le=pe.uniforms;if(Lt.useProgram(dn.program)&&(Ln=!0,_n=!0,wi=!0),U.id!==S&&(S=U.id,_n=!0),Ln||b!==V){Lt.buffers.depth.getReversed()&&V.reversedDepth!==!0&&(V._reversedDepth=!0,V.updateProjectionMatrix()),Ee.setValue(q,"projectionMatrix",V.projectionMatrix),Ee.setValue(q,"viewMatrix",V.matrixWorldInverse);let sn=Ee.map.cameraPosition;sn!==void 0&&sn.setValue(q,ht.setFromMatrixPosition(V.matrixWorld)),At.logarithmicDepthBuffer&&Ee.setValue(q,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ee.setValue(q,"isOrthographic",V.isOrthographicCamera===!0),b!==V&&(b=V,_n=!0,wi=!0)}if(Z.isSkinnedMesh){Ee.setOptional(q,Z,"bindMatrix"),Ee.setOptional(q,Z,"bindMatrixInverse");let fn=Z.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ee.setValue(q,"boneTexture",fn.boneTexture,Kt))}Z.isBatchedMesh&&(Ee.setOptional(q,Z,"batchingTexture"),Ee.setValue(q,"batchingTexture",Z._matricesTexture,Kt),Ee.setOptional(q,Z,"batchingIdTexture"),Ee.setValue(q,"batchingIdTexture",Z._indirectTexture,Kt),Ee.setOptional(q,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ee.setValue(q,"batchingColorTexture",Z._colorsTexture,Kt));let Xe=Vt.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&se.update(Z,Vt,dn),(_n||pe.receiveShadow!==Z.receiveShadow)&&(pe.receiveShadow=Z.receiveShadow,Ee.setValue(q,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Le.envMap.value=A,Le.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&bt.environment!==null&&(Le.envMapIntensity.value=bt.environmentIntensity),_n&&(Ee.setValue(q,"toneMappingExposure",_.toneMappingExposure),pe.needsLights&&ys(Le,wi),gt&&U.fog===!0&&qt.refreshFogUniforms(Le,gt),qt.refreshMaterialUniforms(Le,U,tt,et,m.state.transmissionRenderTarget[V.id]),rr.upload(q,gs(pe),Le,Kt)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(rr.upload(q,gs(pe),Le,Kt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ee.setValue(q,"center",Z.center),Ee.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Ee.setValue(q,"normalMatrix",Z.normalMatrix),Ee.setValue(q,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let fn=U.uniformsGroups;for(let sn=0,Mn=fn.length;sn<Mn;sn++){let Jn=fn[sn];Wt.update(Jn,dn),Wt.bind(Jn,dn)}}return dn}function ys(V,bt){V.ambientLightColor.needsUpdate=bt,V.lightProbe.needsUpdate=bt,V.directionalLights.needsUpdate=bt,V.directionalLightShadows.needsUpdate=bt,V.pointLights.needsUpdate=bt,V.pointLightShadows.needsUpdate=bt,V.spotLights.needsUpdate=bt,V.spotLightShadows.needsUpdate=bt,V.rectAreaLights.needsUpdate=bt,V.hemisphereLights.needsUpdate=bt}function _o(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(V,bt,Vt){let U=jt.get(V);U.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),jt.get(V.texture).__webglTexture=bt,jt.get(V.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:Vt,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,bt){let Vt=jt.get(V);Vt.__webglFramebuffer=bt,Vt.__useDefaultFramebuffer=bt===void 0};let _s=q.createFramebuffer();this.setRenderTarget=function(V,bt=0,Vt=0){R=V,T=bt,E=Vt;let U=!0,Z=null,gt=!1,zt=!1;if(V){let A=jt.get(V);if(A.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(q.FRAMEBUFFER,null),U=!1;else if(A.__webglFramebuffer===void 0)Kt.setupRenderTarget(V);else if(A.__hasExternalTextures)Kt.rebindTextures(V,jt.get(V.texture).__webglTexture,jt.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let fe=V.depthTexture;if(A.__boundDepthTexture!==fe){if(fe!==null&&jt.has(fe)&&(V.width!==fe.image.width||V.height!==fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Kt.setupDepthRenderbuffer(V)}}let le=V.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(zt=!0);let de=jt.get(V).__webglFramebuffer;V.isWebGLCubeRenderTarget?(Array.isArray(de[bt])?Z=de[bt][Vt]:Z=de[bt],gt=!0):V.samples>0&&Kt.useMultisampledRTT(V)===!1?Z=jt.get(V).__webglMultisampledFramebuffer:Array.isArray(de)?Z=de[Vt]:Z=de,P.copy(V.viewport),N.copy(V.scissor),z=V.scissorTest}else P.copy(ft).multiplyScalar(tt).floor(),N.copy(Et).multiplyScalar(tt).floor(),z=rt;if(Vt!==0&&(Z=_s),Lt.bindFramebuffer(q.FRAMEBUFFER,Z)&&U&&Lt.drawBuffers(V,Z),Lt.viewport(P),Lt.scissor(N),Lt.setScissorTest(z),gt){let A=jt.get(V.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+bt,A.__webglTexture,Vt)}else if(zt){let A=bt;for(let le=0;le<V.textures.length;le++){let de=jt.get(V.textures[le]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+le,de.__webglTexture,Vt,A)}}else if(V!==null&&Vt!==0){let A=jt.get(V.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,A.__webglTexture,Vt)}S=-1},this.readRenderTargetPixels=function(V,bt,Vt,U,Z,gt,zt,Zt=0){if(!(V&&V.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let A=jt.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&zt!==void 0&&(A=A[zt]),A){Lt.bindFramebuffer(q.FRAMEBUFFER,A);try{let le=V.textures[Zt],de=le.format,fe=le.type;if(!At.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}bt>=0&&bt<=V.width-U&&Vt>=0&&Vt<=V.height-Z&&(V.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Zt),q.readPixels(bt,Vt,U,Z,X.convert(de),X.convert(fe),gt))}finally{let le=R!==null?jt.get(R).__webglFramebuffer:null;Lt.bindFramebuffer(q.FRAMEBUFFER,le)}}},this.readRenderTargetPixelsAsync=async function(V,bt,Vt,U,Z,gt,zt,Zt=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let A=jt.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&zt!==void 0&&(A=A[zt]),A)if(bt>=0&&bt<=V.width-U&&Vt>=0&&Vt<=V.height-Z){Lt.bindFramebuffer(q.FRAMEBUFFER,A);let le=V.textures[Zt],de=le.format,fe=le.type;if(!At.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Se=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Se),q.bufferData(q.PIXEL_PACK_BUFFER,gt.byteLength,q.STREAM_READ),V.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Zt),q.readPixels(bt,Vt,U,Z,X.convert(de),X.convert(fe),0);let Me=R!==null?jt.get(R).__webglFramebuffer:null;Lt.bindFramebuffer(q.FRAMEBUFFER,Me);let Re=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await nd(q,Re,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Se),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,gt),q.deleteBuffer(Se),q.deleteSync(Re),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,bt=null,Vt=0){let U=Math.pow(2,-Vt),Z=Math.floor(V.image.width*U),gt=Math.floor(V.image.height*U),zt=bt!==null?bt.x:0,Zt=bt!==null?bt.y:0;Kt.setTexture2D(V,0),q.copyTexSubImage2D(q.TEXTURE_2D,Vt,0,0,zt,Zt,Z,gt),Lt.unbindTexture()};let ki=q.createFramebuffer(),Qi=q.createFramebuffer();this.copyTextureToTexture=function(V,bt,Vt=null,U=null,Z=0,gt=null){gt===null&&(Z!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=Z,Z=0):gt=0);let zt,Zt,A,le,de,fe,Se,Me,Re,Oe=V.isCompressedTexture?V.mipmaps[gt]:V.image;if(Vt!==null)zt=Vt.max.x-Vt.min.x,Zt=Vt.max.y-Vt.min.y,A=Vt.isBox3?Vt.max.z-Vt.min.z:1,le=Vt.min.x,de=Vt.min.y,fe=Vt.isBox3?Vt.min.z:0;else{let Xe=Math.pow(2,-Z);zt=Math.floor(Oe.width*Xe),Zt=Math.floor(Oe.height*Xe),V.isDataArrayTexture?A=Oe.depth:V.isData3DTexture?A=Math.floor(Oe.depth*Xe):A=1,le=0,de=0,fe=0}U!==null?(Se=U.x,Me=U.y,Re=U.z):(Se=0,Me=0,Re=0);let Ae=X.convert(bt.format),pe=X.convert(bt.type),Ye;bt.isData3DTexture?(Kt.setTexture3D(bt,0),Ye=q.TEXTURE_3D):bt.isDataArrayTexture||bt.isCompressedArrayTexture?(Kt.setTexture2DArray(bt,0),Ye=q.TEXTURE_2D_ARRAY):(Kt.setTexture2D(bt,0),Ye=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,bt.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,bt.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,bt.unpackAlignment);let ze=q.getParameter(q.UNPACK_ROW_LENGTH),dn=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Ln=q.getParameter(q.UNPACK_SKIP_PIXELS),_n=q.getParameter(q.UNPACK_SKIP_ROWS),wi=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Oe.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Oe.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,le),q.pixelStorei(q.UNPACK_SKIP_ROWS,de),q.pixelStorei(q.UNPACK_SKIP_IMAGES,fe);let Ee=V.isDataArrayTexture||V.isData3DTexture,Le=bt.isDataArrayTexture||bt.isData3DTexture;if(V.isDepthTexture){let Xe=jt.get(V),fn=jt.get(bt),sn=jt.get(Xe.__renderTarget),Mn=jt.get(fn.__renderTarget);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,sn.__webglFramebuffer),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Mn.__webglFramebuffer);for(let Jn=0;Jn<A;Jn++)Ee&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,jt.get(V).__webglTexture,Z,fe+Jn),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,jt.get(bt).__webglTexture,gt,Re+Jn)),q.blitFramebuffer(le,de,zt,Zt,Se,Me,zt,Zt,q.DEPTH_BUFFER_BIT,q.NEAREST);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Z!==0||V.isRenderTargetTexture||jt.has(V)){let Xe=jt.get(V),fn=jt.get(bt);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,ki),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Qi);for(let sn=0;sn<A;sn++)Ee?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Xe.__webglTexture,Z,fe+sn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Xe.__webglTexture,Z),Le?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,fn.__webglTexture,gt,Re+sn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,fn.__webglTexture,gt),Z!==0?q.blitFramebuffer(le,de,zt,Zt,Se,Me,zt,Zt,q.COLOR_BUFFER_BIT,q.NEAREST):Le?q.copyTexSubImage3D(Ye,gt,Se,Me,Re+sn,le,de,zt,Zt):q.copyTexSubImage2D(Ye,gt,Se,Me,le,de,zt,Zt);Lt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Le?V.isDataTexture||V.isData3DTexture?q.texSubImage3D(Ye,gt,Se,Me,Re,zt,Zt,A,Ae,pe,Oe.data):bt.isCompressedArrayTexture?q.compressedTexSubImage3D(Ye,gt,Se,Me,Re,zt,Zt,A,Ae,Oe.data):q.texSubImage3D(Ye,gt,Se,Me,Re,zt,Zt,A,Ae,pe,Oe):V.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,gt,Se,Me,zt,Zt,Ae,pe,Oe.data):V.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,gt,Se,Me,Oe.width,Oe.height,Ae,Oe.data):q.texSubImage2D(q.TEXTURE_2D,gt,Se,Me,zt,Zt,Ae,pe,Oe);q.pixelStorei(q.UNPACK_ROW_LENGTH,ze),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,dn),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ln),q.pixelStorei(q.UNPACK_SKIP_ROWS,_n),q.pixelStorei(q.UNPACK_SKIP_IMAGES,wi),gt===0&&bt.generateMipmaps&&q.generateMipmap(Ye),Lt.unbindTexture()},this.initRenderTarget=function(V){jt.get(V).__webglFramebuffer===void 0&&Kt.setupRenderTarget(V)},this.initTexture=function(V){V.isCubeTexture?Kt.setTextureCube(V,0):V.isData3DTexture?Kt.setTexture3D(V,0):V.isDataArrayTexture||V.isCompressedArrayTexture?Kt.setTexture2DArray(V,0):Kt.setTexture2D(V,0),Lt.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,Lt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=tn._getDrawingBufferColorSpace(t),e.unpackColorSpace=tn._getUnpackColorSpace()}};var Fd={type:"change"},iu={type:"start"},Od={type:"end"},_c=new Ps,kd=new pi,ux=Math.cos(70*ua.DEG2RAD),An=new nt,ti=2*Math.PI,hn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nu=1e-6,xc=class extends sa{constructor(t,e=null){super(t,e),this.state=hn.NONE,this.target=new nt,this.cursor=new nt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new nt,this._lastQuaternion=new Cn,this._lastTargetPosition=new nt,this._quat=new Cn().setFromUnitVectors(t.up,new nt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jo,this._sphericalDelta=new Jo,this._scale=1,this._panOffset=new nt,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new nt,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dx.bind(this),this._onPointerDown=fx.bind(this),this._onPointerUp=px.bind(this),this._onContextMenu=vx.bind(this),this._onMouseWheel=yx.bind(this),this._onKeyDown=_x.bind(this),this._onTouchStart=xx.bind(this),this._onTouchMove=Mx.bind(this),this._onMouseDown=mx.bind(this),this._onMouseMove=gx.bind(this),this._interceptControlDown=bx.bind(this),this._interceptControlUp=Sx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fd),this.update(),this.state=hn.NONE}update(t=null){let e=this.object.position;An.copy(e).sub(this.target),An.applyQuaternion(this._quat),this._spherical.setFromVector3(An),this.autoRotate&&this.state===hn.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=ti:n>Math.PI&&(n-=ti),s<-Math.PI?s+=ti:s>Math.PI&&(s-=ti),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(An.setFromSpherical(this._spherical),An.applyQuaternion(this._quatInverse),e.copy(this.target).add(An),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=An.length();r=this._clampDistance(a*this._scale);let l=a-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){let a=new nt(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;let c=new nt(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),r=An.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(_c.origin.copy(this.object.position),_c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_c.direction))<ux?this.object.lookAt(this.target):(kd.setFromNormalAndCoplanarPoint(this.object.up,this.target),_c.intersectPlane(kd,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>nu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nu||this._lastTargetPosition.distanceToSquared(this.target)>nu?(this.dispatchEvent(Fd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ti/60*this.autoRotateSpeed*t:ti/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){An.setFromMatrixColumn(e,0),An.multiplyScalar(-t),this._panOffset.add(An)}_panUp(t,e){this.screenSpacePanning===!0?An.setFromMatrixColumn(e,1):(An.setFromMatrixColumn(e,0),An.crossVectors(this.object.up,An)),An.multiplyScalar(t),this._panOffset.add(An)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;An.copy(s).sub(this.target);let o=An.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,a=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/e.clientHeight),this._rotateUp(ti*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ti*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(ti*this._rotateDelta.x/e.clientHeight),this._rotateUp(ti*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new oe,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function fx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function dx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function px(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Od),this.state=hn.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=hn.DOLLY;break;case Us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=hn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=hn.ROTATE}break;case Us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=hn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=hn.PAN}break;default:this.state=hn.NONE}this.state!==hn.NONE&&this.dispatchEvent(iu)}function gx(i){switch(this.state){case hn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case hn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case hn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function yx(i){this.enabled===!1||this.enableZoom===!1||this.state!==hn.NONE||(i.preventDefault(),this.dispatchEvent(iu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Od))}function _x(i){this.enabled!==!1&&this._handleKeyDown(i)}function xx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=hn.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=hn.TOUCH_PAN;break;default:this.state=hn.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=hn.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=hn.TOUCH_DOLLY_ROTATE;break;default:this.state=hn.NONE}break;default:this.state=hn.NONE}this.state!==hn.NONE&&this.dispatchEvent(iu)}function Mx(i){switch(this._trackPointer(i),this.state){case hn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case hn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case hn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case hn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=hn.NONE}}function vx(i){this.enabled!==!1&&i.preventDefault()}function bx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yi={x:267.5,y:357.5,z:20};function Bd(i){Yi.x=i[0],Yi.y=i[1],Yi.z=i[2]}var I=(i,t,e)=>[i-Yi.x,e-Yi.z,t-Yi.y],Je=[0,1,0];function wx(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function xi(i){return wx(i)>=0?i.slice():i.slice().reverse()}function pa(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function $i(i,t){let e=!1,[n,s]=i;for(let o=0,r=t.length-1;o<t.length;r=o++){let[a,l]=t[o],[c,u]=t[r];l>s!=u>s&&n<(c-a)*(s-l)/(u-l)+a&&(e=!e)}return e}function su(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],o=n*n+s*s||1e-9,r=((i[0]-t[0])*n+(i[1]-t[1])*s)/o;return r=Math.max(0,Math.min(1,r)),Math.hypot(i[0]-t[0]-r*n,i[1]-t[1]-r*s)}function un(i,t){let e=i.length,n=[],s=typeof t=="number"?new Array(e).fill(t):t,o=[];for(let r=0;r<e;r++){let a=i[r],l=i[(r+1)%e],c=l[0]-a[0],u=l[1]-a[1],h=Math.hypot(c,u)||1e-9,p=u/h,d=-c/h;o.push({a:[a[0]+p*s[r],a[1]+d*s[r]],d:[c/h,u/h],n:[p,d]})}for(let r=0;r<e;r++){let a=o[(r-1+e)%e],l=o[r],c=a.d[0]*l.d[1]-a.d[1]*l.d[0];if(Math.abs(c)<.08){n.push([l.a[0],l.a[1]]);continue}let u=((l.a[0]-a.a[0])*l.d[1]-(l.a[1]-a.a[1])*l.d[0])/c,h=a.a[0]+a.d[0]*u,p=a.a[1]+a.d[1]*u,d=Math.hypot(h-i[r][0],p-i[r][1]),f=3*Math.max(s[r],s[(r-1+e)%e],.01);if(d>f){let y=f/d;h=i[r][0]+(h-i[r][0])*y,p=i[r][1]+(p-i[r][1])*y}n.push([h,p])}return n}function go(i,t,e){let n=[],s=o=>o[0]*t[0]+o[1]*t[1]-e;for(let o=0;o<i.length;o++){let r=i[o],a=i[(o+1)%i.length],l=s(r),c=s(a);if(l>=0&&n.push(r),l>=0!=c>=0){let u=l/(l-c);n.push([r[0]+(a[0]-r[0])*u,r[1]+(a[1]-r[1])*u])}}return n.length>=3?n:null}function fs(i){let t=i.map(e=>new oe(e[0],e[1]));try{return Pi.triangulateShape(t,[])}catch{return[]}}function Hd(i,t,e){let n=[];for(let o=0;o<e.length;o++){let r=e[o],a=e[(o+1)%e.length],l=a[0]-r[0],c=a[1]-r[1],u=t[0]*c-t[1]*l;if(Math.abs(u)<1e-9)continue;let h=((r[0]-i[0])*c-(r[1]-i[1])*l)/u,p=((r[0]-i[0])*t[1]-(r[1]-i[1])*t[0])/u;p>=-1e-9&&p<1-1e-9&&n.push(h)}n.sort((o,r)=>o-r);let s=[];for(let o=0;o+1<n.length;o+=2)s.push([n[o],n[o+1]]);return s}var ks=class{constructor(){this.cap=0,this.nv=0,this.col=[1,1,1],this.col2=[1,1,1],this.bid=-1}_grow(t){if(this.nv+t<=this.cap)return;let e=Math.max(3072,this.cap*2);for(;e<this.nv+t;)e*=2;let n=new Float32Array(e*3),s=new Int8Array(e*3),o=new Float32Array(e*2),r=new Uint8Array(e*3),a=new Uint8Array(e*3),l=new Int32Array(Math.ceil(e/3));this.cap&&(n.set(this.P),s.set(this.N),o.set(this.U),r.set(this.K),a.set(this.K2),l.set(this.I)),Object.assign(this,{P:n,N:s,U:o,K:r,K2:a,I:l,cap:e})}_put(t,e,n){let s=this.nv++,o=s*3,r=this.col,a=this.col2;this.P[o]=t[0],this.P[o+1]=t[1],this.P[o+2]=t[2],this.N[o]=Math.round(e[0]*127),this.N[o+1]=Math.round(e[1]*127),this.N[o+2]=Math.round(e[2]*127),this.U[s*2]=n?n[0]:0,this.U[s*2+1]=n?n[1]:0,this.K[o]=Math.min(255,r[0]*255),this.K[o+1]=Math.min(255,r[1]*255),this.K[o+2]=Math.min(255,r[2]*255),this.K2[o]=Math.min(255,a[0]*255),this.K2[o+1]=Math.min(255,a[1]*255),this.K2[o+2]=Math.min(255,a[2]*255)}tri(t,e,n,s,o,r,a){let l=e[0]-t[0],c=e[1]-t[1],u=e[2]-t[2],h=n[0]-t[0],p=n[1]-t[1],d=n[2]-t[2],f=c*d-u*p,y=u*h-l*d,g=l*p-c*h,m=Math.hypot(f,y,g);if(m<1e-10)return;if(a&&f*a[0]+y*a[1]+g*a[2]<0){let x=e;e=n,n=x;let _=o;o=r,r=_,f=-f,y=-y,g=-g}let M=[f/m,y/m,g/m];this._grow(3),this.I[this.nv/3]=this.bid,this._put(t,M,s),this._put(e,M,o),this._put(n,M,r)}triN(t,e,n,s,o,r,a,l,c){this._grow(3),this.I[this.nv/3]=this.bid,this._put(t,s,a),this._put(e,o,l),this._put(n,r,c)}quad(t,e,n,s,o,r,a,l,c){this.tri(t,e,n,o,r,a,c),this.tri(t,n,s,o,a,l,c)}box(t,e,n,s,o,r,a,l=1){let c=Math.cos(a),u=Math.sin(a),h=(g,m,M)=>I(t+c*g-u*m,e+u*g+c*m,M),p=o/2,d=r/2,f=l,y=[[-p,-d],[p,-d],[p,d],[-p,d]];for(let g=0;g<4;g++){let[m,M]=y[g],[x,_]=y[(g+1)%4],v=Math.hypot(x-m,_-M),T=(m+x)/2,E=(M+_)/2,R=[c*T-u*E,0,u*T+c*E];this.quad(h(m,M,n),h(x,_,n),h(x,_,s),h(m,M,s),[0,0],[v*f,0],[v*f,(s-n)*f],[0,(s-n)*f],R)}this.quad(h(-p,-d,s),h(p,-d,s),h(p,d,s),h(-p,d,s),[0,0],[o*f,0],[o*f,r*f],[0,r*f],Je),this.quad(h(-p,-d,n),h(p,-d,n),h(p,d,n),h(-p,d,n),[0,0],[o*f,0],[o*f,r*f],[0,r*f],[0,-1,0])}beam(t,e,n,s){let o=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.hypot(...o);if(r<1e-6)return;let a=o.map(d=>d/r),l=[a[2],0,-a[0]],c=Math.hypot(...l);c<1e-6&&(l=[1,0,0],c=1),l=l.map(d=>d/c);let u=[a[1]*l[2]-a[2]*l[1],a[2]*l[0]-a[0]*l[2],a[0]*l[1]-a[1]*l[0]],h=(d,f,y)=>[d[0]+l[0]*f*n/2+u[0]*y*s/2,d[1]+l[1]*f*n/2+u[1]*y*s/2,d[2]+l[2]*f*n/2+u[2]*y*s/2],p=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let d=0;d<4;d++){let[f,y]=p[d],[g,m]=p[(d+1)%4],M=[l[0]*(f+g)+u[0]*(y+m),l[1]*(f+g)+u[1]*(y+m),l[2]*(f+g)+u[2]*(y+m)];this.quad(h(t,f,y),h(e,f,y),h(e,g,m),h(t,g,m),[0,0],[r,0],[r,.3],[0,.3],M)}for(let[d,f]of[[t,-1],[e,1]])this.quad(h(d,-1,-1),h(d,1,-1),h(d,1,1),h(d,-1,1),[0,0],[1,0],[1,1],[0,1],a.map(y=>y*f))}cyl(t,e,n,s,o,r=8,a=!0){for(let l=0;l<r;l++){let c=l/r*Math.PI*2,u=(l+1)/r*Math.PI*2,h=[t+Math.cos(c)*o,e+Math.sin(c)*o],p=[t+Math.cos(u)*o,e+Math.sin(u)*o],d=(c+u)/2;this.quad(I(h[0],h[1],n),I(p[0],p[1],n),I(p[0],p[1],s),I(h[0],h[1],s),[l/r,0],[(l+1)/r,0],[(l+1)/r,s-n],[l/r,s-n],[Math.cos(d),0,Math.sin(d)]),a&&this.tri(I(t,e,s),I(h[0],h[1],s),I(p[0],p[1],s),[0,0],[0,0],[0,0],Je)}}prism(t,e,n,s=!0,o=!1,r=1){t=xi(t);let a=0;for(let l=0;l<t.length;l++){let c=t[l],u=t[(l+1)%t.length],h=Math.hypot(u[0]-c[0],u[1]-c[1]),p=(u[1]-c[1])/(h||1),d=-(u[0]-c[0])/(h||1);this.quad(I(c[0],c[1],e),I(u[0],u[1],e),I(u[0],u[1],n),I(c[0],c[1],n),[a*r,e*r],[(a+h)*r,e*r],[(a+h)*r,n*r],[a*r,n*r],[p,0,d]),a+=h}if(s||o){let l=fs(t);for(let[c,u,h]of l)s&&this.tri(I(t[c][0],t[c][1],n),I(t[u][0],t[u][1],n),I(t[h][0],t[h][1],n),[t[c][0]*r,t[c][1]*r],[t[u][0]*r,t[u][1]*r],[t[h][0]*r,t[h][1]*r],Je),o&&this.tri(I(t[c][0],t[c][1],e),I(t[u][0],t[u][1],e),I(t[h][0],t[h][1],e),[0,0],[0,0],[0,0],[0,-1,0])}}geometry(){let t=this.nv,e=new We;return e.setAttribute("position",new je(this.P.slice(0,t*3),3)),e.setAttribute("normal",new je(this.N.slice(0,t*3),3,!0)),e.setAttribute("uv",new je(this.U.slice(0,t*2),2)),e.setAttribute("color",new je(this.K.slice(0,t*3),3,!0)),e.userData.c1=e.attributes.color,e.userData.c2=new je(this.K2.slice(0,t*3),3,!0),e.userData.ids=this.I.slice(0,t/3),e.computeBoundingSphere(),this.P=this.N=this.U=this.K=this.K2=this.I=null,this.cap=0,this.nv=0,e}get count(){return this.nv/3}};var Vd=(i,t,e)=>Math.max(t,Math.min(e,i));function In(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)%1e5/1e5}function Sn(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var _t=256,Ie={woodD:"#35281f",woodM:"#57443a",woodL:"#76604f",red:"#66392f",redD:"#4b2e27",plaster:"#e2dbcd",plasterS:"#cfc6b6",glow:"#e3c597",glowI:"#efdfc0",lat:"#2f241c",stone:"#9a958c",stoneD:"#7b776f",brick:"#8a867e",brickJ:"#69665f",teal:"#4b5856",gold:"#9d8e70"},Gd=.68;function Ex(i,t=Gd){let e=i.getImageData(0,0,_t,_t),n=e.data;for(let s=0;s<n.length;s+=4){let o=.3*n[s]+.59*n[s+1]+.11*n[s+2];n[s]=o+(n[s]-o)*t+2,n[s+1]=o+(n[s+1]-o)*t+1,n[s+2]=o+(n[s+2]-o)*t-1}i.putImageData(e,0,0)}function Wd(){let i=document.createElement("canvas");return i.width=_t,i.height=_t,i}function wn(i,t,e,n=1,s=_t,o=_t,r=900){let a=Sn(n);i.save(),i.globalAlpha=t;for(let l=0;l<r;l++){i.fillStyle=a()<.5?"#000":"#fff";let c=1+a()*e;i.fillRect(a()*s,a()*o,c,c)}i.restore()}function Mi(i,t,e,n,s,o,r,a=2){i.fillStyle=r;for(let l=t;l<=t+n+.1;l+=o)i.fillRect(l-a/2,e,a,s);for(let l=e;l<=e+s+.1;l+=o)i.fillRect(t,l-a/2,n,a)}function vi(i,t,e,n,s,o,r=1){let a=i.createRadialGradient(t+n/2,e+s*.55,4,t+n/2,e+s*.55,Math.max(n,s)*.75);o?(a.addColorStop(0,`rgba(240,190,120,${r*.8})`),a.addColorStop(1,`rgba(190,140,80,${r*.55})`)):(a.addColorStop(0,Ie.glowI),a.addColorStop(1,Ie.glow)),i.fillStyle=a,i.fillRect(t,e,n,s)}function Tx(i,t,e,n,s,o){i.fillStyle=o?"#000":"#2b1a12",i.fillRect(t,e,n,s)}function Mc(i,t,e=14){i.fillStyle=t,i.fillRect(0,0,e,_t),i.fillRect(_t-e,0,e,_t),i.fillStyle="rgba(255,255,255,0.10)",i.fillRect(3,0,2,_t),i.fillRect(_t-e+3,0,2,_t)}function mn(i,t={}){let e=Wd(),n=Wd(),s=e.getContext("2d"),o=n.getContext("2d");i(s,!1),t.mute!==!1&&Ex(s,t.mute||Gd),o.fillStyle="#000",o.fillRect(0,0,_t,_t),i(o,!0);let r=new Fn(e);r.colorSpace=vn,r.wrapS=r.wrapT=Li,r.anisotropy=8;let a={map:r};if(!t.noEm){let l=new Fn(n);l.colorSpace=vn,l.wrapS=l.wrapT=Li,a.em=l}return a}function Xd(){let i={};return i.shopA=mn((t,e)=>{e||(t.fillStyle=Ie.woodM,t.fillRect(0,0,_t,_t),wn(t,.08,2,3));for(let n=0;n<4;n++){let s=18+n*55,o=51;e||(t.fillStyle=Ie.woodD,t.fillRect(s,40,o,192)),vi(t,s+5,46,o-10,118,e,.95),Mi(t,s+5,46,o-10,118,10,e?"#000":Ie.lat,2),e||(t.fillStyle="#5a2c18",t.fillRect(s+5,172,o-10,54),t.strokeStyle="#3a1a0e",t.lineWidth=2,t.strokeRect(s+10,178,o-20,42))}if(e)t.fillStyle="rgba(255,190,110,0.85)",t.fillRect(72,12,112,12);else{Mc(t,Ie.woodD,15),t.fillStyle=Ie.woodD,t.fillRect(0,0,_t,34),t.fillStyle="#24130b",t.fillRect(66,6,124,22),t.strokeStyle=Ie.gold,t.lineWidth=2,t.strokeRect(68,8,120,18),t.fillStyle=Ie.stone,t.fillRect(0,234,_t,22),t.fillStyle=Ie.stoneD;for(let n=0;n<_t;n+=64)t.fillRect(n,234,2,22)}}),i.shopB=mn((t,e)=>{if(e||(t.fillStyle=Ie.woodM,t.fillRect(0,0,_t,_t)),vi(t,16,34,_t-32,200,e,.8),e)t.fillStyle="#000",t.fillRect(0,0,_t,60),t.fillRect(0,168,_t,88);else{t.fillStyle="rgba(60,30,15,0.55)";for(let s=0;s<4;s++)t.fillRect(24,70+s*26,_t-48,4);let n=Sn(11);for(let s=0;s<40;s++)t.fillStyle=["#7a3b22","#a8742f","#3f5a4c","#8a2f25"][s%4],t.fillRect(26+n()*(_t-60),52+Math.floor(n()*4)*26,6+n()*10,16);t.fillStyle="#5a2c18",t.fillRect(16,168,_t-32,66),t.fillStyle="#7b4426",t.fillRect(16,168,_t-32,8),t.fillStyle="#9b3426",t.fillRect(16,34,_t-32,26),t.fillStyle="#7d281d";for(let s=16;s<_t-16;s+=24)t.fillRect(s,34,3,26);Mc(t,Ie.woodD,15),t.fillStyle=Ie.woodD,t.fillRect(0,0,_t,34),t.fillStyle="#24130b",t.fillRect(80,7,96,20),t.strokeStyle=Ie.gold,t.lineWidth=2,t.strokeRect(82,9,92,16),t.fillStyle=Ie.stone,t.fillRect(0,234,_t,22)}}),i.upT=mn((t,e)=>{e||(t.fillStyle=Ie.woodM,t.fillRect(0,0,_t,_t),wn(t,.07,2,5)),vi(t,46,58,164,120,e,.7),Mi(t,46,58,164,120,12,e?"#000":Ie.lat,2.5),e?(t.fillStyle="#000",t.fillRect(0,188,_t,68)):(t.strokeStyle=Ie.woodD,t.lineWidth=6,t.strokeRect(43,55,170,126),t.fillStyle=Ie.woodD,t.fillRect(0,226,_t,30),t.fillRect(0,0,_t,14),t.fillStyle="#5a2c18",t.fillRect(30,192,196,30),Mi(t,30,192,196,30,14,"#3a1a0e",2),Mc(t,Ie.woodD,13))}),i.upTd=mn((t,e)=>{e||(t.fillStyle=Ie.woodM,t.fillRect(0,0,_t,_t),wn(t,.07,2,6),t.fillStyle="#3a2418",t.fillRect(46,58,164,120),Mi(t,46,58,164,120,12,"#24130b",2.5),t.strokeStyle=Ie.woodD,t.lineWidth=6,t.strokeRect(43,55,170,126),t.fillStyle=Ie.woodD,t.fillRect(0,226,_t,30),t.fillRect(0,0,_t,14),Mc(t,Ie.woodD,13))}),i.upP=mn((t,e)=>{e||(t.fillStyle=Ie.plaster,t.fillRect(0,0,_t,_t),wn(t,.05,3,7)),vi(t,74,76,108,92,e,.75),Mi(t,74,76,108,92,12,e?"#000":Ie.lat,2.5),e||(t.strokeStyle=Ie.woodD,t.lineWidth=6,t.strokeRect(71,73,114,98),t.fillStyle="#5a2c18",t.fillRect(66,170,124,8),t.fillStyle=Ie.woodD,t.fillRect(0,238,_t,18),t.fillRect(0,0,_t,8),t.fillStyle="rgba(70,40,24,0.75)",t.fillRect(0,0,7,_t),t.fillRect(_t-7,0,7,_t))}),i.upPd=mn((t,e)=>{e||(t.fillStyle=Ie.plaster,t.fillRect(0,0,_t,_t),wn(t,.05,3,8),t.fillStyle="#4a3427",t.fillRect(74,76,108,92),Mi(t,74,76,108,92,12,"#2a170d",2.5),t.strokeStyle=Ie.woodD,t.lineWidth=6,t.strokeRect(71,73,114,98),t.fillStyle="#5a2c18",t.fillRect(66,170,124,8),t.fillStyle=Ie.woodD,t.fillRect(0,238,_t,18),t.fillRect(0,0,_t,8),t.fillStyle="rgba(70,40,24,0.75)",t.fillRect(0,0,7,_t),t.fillRect(_t-7,0,7,_t))}),i.court=mn((t,e)=>{e||(t.fillStyle=Ie.plaster,t.fillRect(0,0,_t,_t),wn(t,.05,3,9)),e||(t.fillStyle=Ie.woodD,t.fillRect(92,66,72,168),t.fillStyle="#4e2716",t.fillRect(98,72,29,162),t.fillRect(129,72,29,162)),vi(t,102,78,20,40,e,.5),vi(t,134,78,20,40,e,.5);for(let n of[22,190])vi(t,n,92,44,52,e,.6),Mi(t,n,92,44,52,11,e?"#000":Ie.lat,2),e||(t.strokeStyle=Ie.woodD,t.lineWidth=4,t.strokeRect(n-2,90,48,56));if(!e){t.fillStyle=Ie.brick,t.fillRect(0,206,92,50),t.fillRect(164,206,92,50),t.fillStyle=Ie.brickJ;for(let n=206;n<_t;n+=10)t.fillRect(0,n,_t,1.5);t.fillStyle=Ie.woodD,t.fillRect(0,0,_t,10)}}),i.blank=mn((t,e)=>{if(e)return;t.fillStyle=Ie.plaster,t.fillRect(0,0,_t,_t),wn(t,.06,3,10);let n=t.createLinearGradient(0,160,0,256);n.addColorStop(0,"rgba(120,100,80,0)"),n.addColorStop(1,"rgba(120,100,80,0.22)"),t.fillStyle=n,t.fillRect(0,160,_t,96),t.fillStyle=Ie.brick,t.fillRect(0,222,_t,34),t.fillStyle=Ie.brickJ;for(let s=222;s<_t;s+=9)t.fillRect(0,s,_t,1.5)},{noEm:!0}),i.hall=mn((t,e)=>{e||(t.fillStyle=Ie.redD,t.fillRect(0,0,_t,_t));for(let n=0;n<3;n++){let s=24+n*70,o=66;vi(t,s+4,46,o-8,130,e,1),Mi(t,s+4,46,o-8,130,9,e?"#000":Ie.lat,2),e||(t.fillStyle="#62261a",t.fillRect(s+4,182,o-8,52),t.strokeStyle="#3e160d",t.lineWidth=2,t.strokeRect(s+9,188,o-18,40),t.strokeStyle="#4a1a10",t.lineWidth=4,t.strokeRect(s+2,44,o-4,192))}e||(t.fillStyle=Ie.red,t.fillRect(0,0,20,_t),t.fillRect(_t-20,0,20,_t),t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(5,0,3,_t),t.fillRect(_t-15,0,3,_t),t.fillStyle=Ie.teal,t.fillRect(0,0,_t,36),t.fillStyle=Ie.gold,t.fillRect(0,16,_t,3),t.fillStyle="#1f3d3d",t.fillRect(0,30,_t,6),t.fillStyle=Ie.stone,t.fillRect(0,238,_t,18))}),i.hallU=mn((t,e)=>{e||(t.fillStyle=Ie.redD,t.fillRect(0,0,_t,_t));for(let n=0;n<2;n++){let s=30+n*100,o=96;vi(t,s,60,o-4,110,e,.85),Mi(t,s,60,o-4,110,10,e?"#000":Ie.lat,2),e||(t.strokeStyle="#3e160d",t.lineWidth=4,t.strokeRect(s-2,58,o,114))}e?(t.fillStyle="#000",t.fillRect(0,176,_t,80)):(t.fillStyle="#62261a",t.fillRect(0,180,_t,76),Mi(t,20,190,_t-40,36,12,"#3e160d",2),t.fillStyle=Ie.red,t.fillRect(0,0,18,_t),t.fillRect(_t-18,0,18,_t),t.fillStyle=Ie.teal,t.fillRect(0,0,_t,30),t.fillStyle=Ie.gold,t.fillRect(0,13,_t,3))}),i.ware=mn((t,e)=>{if(!e){t.fillStyle=Ie.brick,t.fillRect(0,0,_t,_t),t.fillStyle=Ie.brickJ;for(let n=0;n<_t;n+=9)t.fillRect(0,n,_t,1.5);for(let n=0;n<_t;n+=18)for(let s=n/18%2*14;s<_t;s+=28)t.fillRect(s,n,1.5,9);wn(t,.06,2,12)}if(!e){t.fillStyle="#5b3a24",t.fillRect(58,60,140,196),t.fillStyle="#4a2e1c";for(let n=58;n<198;n+=14)t.fillRect(n,60,2,196);t.fillStyle="#2b2a28",t.fillRect(58,120,140,6),t.fillRect(58,200,140,6),t.fillStyle=Ie.stone,t.fillRect(50,46,156,14)}vi(t,120,128,16,128,e,.55)}),i.station=mn((t,e)=>{if(!e){t.fillStyle="#a7978a",t.fillRect(0,0,_t,_t),t.fillStyle="#8c7d71";for(let n=0;n<_t;n+=9)t.fillRect(0,n,_t,1.5);wn(t,.05,2,13)}t.save(),t.beginPath(),t.moveTo(70,220),t.lineTo(70,100),t.arc(128,100,58,Math.PI,0),t.lineTo(186,220),t.closePath(),t.clip(),vi(t,70,40,116,180,e,.9),Mi(t,70,40,116,180,19,e?"#000":"#2c2a28",3),t.restore(),e||(t.strokeStyle="#efe6d6",t.lineWidth=7,t.beginPath(),t.moveTo(66,222),t.lineTo(66,100),t.arc(128,100,62,Math.PI,0),t.lineTo(190,222),t.stroke(),t.fillStyle="#d9cdb7",t.fillRect(0,232,_t,24),t.fillRect(0,0,_t,12))}),i.factory=mn((t,e)=>{if(!e){t.fillStyle="#8a5a45",t.fillRect(0,0,_t,_t);let n=Sn(31);for(let s=0;s<_t;s+=10)for(let o=s/10%2*15-15;o<_t;o+=30)t.fillStyle=`hsl(${14+n()*8},${30+n()*10}%,${30+n()*9}%)`,t.fillRect(o+1,s+1,28,8)}t.save(),t.beginPath(),t.moveTo(58,236),t.lineTo(58,86),t.arc(128,86,70,Math.PI,0),t.lineTo(198,236),t.closePath(),t.clip(),vi(t,58,16,140,220,e,.75),Mi(t,58,16,140,220,20,e?"#000":"#2a2724",3),t.restore(),e||(t.strokeStyle="#c9b49a",t.lineWidth=6,t.beginPath(),t.moveTo(55,238),t.lineTo(55,86),t.arc(128,86,73,Math.PI,0),t.lineTo(201,238),t.stroke(),t.fillStyle="#6a4636",t.fillRect(0,0,14,_t),t.fillRect(_t-14,0,14,_t),t.fillStyle="#b9a58c",t.fillRect(0,240,_t,16))}),i.stoneF=mn((t,e)=>{if(!e){t.fillStyle="#857d71",t.fillRect(0,0,_t,_t);let n=Sn(32);for(let s=0;s<70;s++){let o=26+n()*40,r=16+n()*20;t.fillStyle=`hsl(${30+n()*12},${6+n()*8}%,${44+n()*16}%)`,t.beginPath(),t.ellipse(n()*_t,n()*_t,o/2,r/2,(n()-.5)*.5,0,7),t.fill()}wn(t,.1,2,33,_t,_t,1600)}if(Tx(t,98,74,60,54,e),!e){t.fillStyle="#3a3836";for(let n=106;n<158;n+=12)t.fillRect(n,74,3,54);t.fillStyle="#b8b0a2",t.fillRect(92,128,72,8)}},{noEm:!0}),i.hut=mn((t,e)=>{if(e)return;t.fillStyle="#6b5641",t.fillRect(0,0,_t,_t);let n=Sn(34);for(let s=0;s<_t;s+=21)t.fillStyle=`hsl(28,${20+n()*12}%,${24+n()*12}%)`,t.fillRect(s+1,0,19,_t),t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(s,0,2,_t);t.fillStyle="#3e3125",t.fillRect(0,60,_t,8),t.fillRect(0,200,_t,8),wn(t,.1,2,35)},{noEm:!0}),i.ruin=mn((t,e)=>{if(e)return;t.fillStyle="#d6cab4",t.fillRect(0,0,_t,_t),wn(t,.12,4,14,_t,_t,1800);let n=Sn(15);for(let s=0;s<9;s++)t.fillStyle="rgba(120,96,74,0.35)",t.beginPath(),t.ellipse(n()*_t,n()*_t,10+n()*30,6+n()*20,n()*3,0,7),t.fill();t.fillStyle="#9a8f80";for(let s=0;s<7;s++)t.fillRect(n()*200,n()*220,26,10);t.fillStyle="#1d1712",t.fillRect(70,64,116,104),t.fillStyle="#4a3a2e",t.fillRect(70,64,116,8),t.fillRect(70,112,60,5),t.fillRect(150,64,6,104),t.strokeStyle="#2c1d14",t.lineWidth=7,t.strokeRect(66,60,124,112),t.fillStyle=Ie.brick,t.fillRect(0,214,_t,42),t.fillStyle="#5a5249",t.fillRect(0,214,_t,2)},{noEm:!0}),i}function qd(){let i={};return i.tile=mn((t,e)=>{if(!e){t.fillStyle="#4b5056",t.fillRect(0,0,_t,_t);for(let n=0;n<4;n++){let s=n*64,o=t.createLinearGradient(s,0,s+64,0);o.addColorStop(0,"#2b2e33"),o.addColorStop(.18,"#3b3f45"),o.addColorStop(.5,"#5e646b"),o.addColorStop(.82,"#3b3f45"),o.addColorStop(1,"#2b2e33"),t.fillStyle=o,t.fillRect(s+16,0,34,_t),t.fillStyle="#373b40",t.fillRect(s+50,0,30,_t);for(let r=0;r<_t;r+=85)t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(s+16,r,34,5),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(s+16,r+5,34,3)}wn(t,.06,2,21)}},{noEm:!0}).map,i.stone=mn((t,e)=>{if(e)return;t.fillStyle="#6f685d",t.fillRect(0,0,_t,_t);let n=Sn(22),s=0;for(;s<_t;){let o=28+Math.floor(n()*3)*10,r=-n()*50;for(;r<_t;){let a=46+n()*64,l=50+n()*13,c=7+n()*7;t.fillStyle=`hsl(${30+n()*10},${c}%,${l}%)`,t.fillRect(r+2,s+2,a-3,Math.min(o,_t-s)-3),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(r+2,s+2,a-3,3),r+=a}s+=o}wn(t,.12,2,23,_t,_t,2400)},{noEm:!0}).map,i.brick=mn((t,e)=>{if(e)return;t.fillStyle="#8a8378",t.fillRect(0,0,_t,_t);let n=Sn(24);for(let s=0;s<_t;s+=16)for(let o=s/16%2*24-24;o<_t;o+=48)t.fillStyle=`hsl(32,${6+n()*6}%,${44+n()*10}%)`,t.fillRect(o+1,s+1,46,14)},{noEm:!0}).map,i.wood=mn((t,e)=>{if(e)return;t.fillStyle=Ie.woodM,t.fillRect(0,0,_t,_t);let n=Sn(25);for(let s=0;s<_t;s+=32)t.fillStyle=`hsl(18,${40+n()*10}%,${22+n()*8}%)`,t.fillRect(0,s+1,_t,30);wn(t,.08,2,26)},{noEm:!0}).map,i.plaster=mn((t,e)=>{e||(t.fillStyle=Ie.plaster,t.fillRect(0,0,_t,_t),wn(t,.05,3,27,_t,_t,1400))},{noEm:!0}).map,i.rubble=mn((t,e)=>{if(e)return;t.fillStyle="#4b4741",t.fillRect(0,0,_t,_t);let n=Sn(31),s=0;for(;s<_t;){let r=30+Math.floor(n()*26),a=-n()*40;for(;a<_t+40;){let l=36+n()*52,c=44+n()*16,u=4+n()*8,h=28+n()*14,p=a+l/2,d=s+r/2,f=[];for(let y=0;y<7;y++){let g=y/7*Math.PI*2+n()*.5,m=l/2-2-n()*5,M=r/2-2-n()*4;f.push([p+Math.cos(g)*m,d+Math.sin(g)*M])}for(let y of[-_t,0,_t])for(let g of[-_t,0,_t])t.beginPath(),f.forEach(([m,M],x)=>x?t.lineTo(m+y,M+g):t.moveTo(m+y,M+g)),t.closePath(),t.fillStyle=`hsl(${h},${u}%,${c}%)`,t.fill(),t.strokeStyle="rgba(255,255,255,0.10)",t.lineWidth=2,t.beginPath(),t.moveTo(f[4][0]+y,f[4][1]+g),t.lineTo(f[5][0]+y,f[5][1]+g),t.lineTo(f[6][0]+y,f[6][1]+g),t.stroke(),t.strokeStyle="rgba(0,0,0,0.22)",t.beginPath(),t.moveTo(f[1][0]+y,f[1][1]+g),t.lineTo(f[2][0]+y,f[2][1]+g),t.lineTo(f[3][0]+y,f[3][1]+g),t.stroke();a+=l}s+=r}wn(t,.1,2,32,_t,_t,2600),t.globalAlpha=.16;let o=Sn(33);for(let r=0;r<26;r++)t.fillStyle=o()<.6?"#5f6b48":"#3a3a30",t.beginPath(),t.ellipse(o()*_t,o()*_t,6+o()*18,3+o()*8,0,0,7),t.fill();t.globalAlpha=1},{noEm:!0,mute:1}).map,i.cliff=mn((t,e)=>{if(e)return;t.fillStyle="#3f3b36",t.fillRect(0,0,_t,_t);let n=Sn(41),s=5,o=[];for(let r=0;r<=s;r++){o.push([]);for(let a=0;a<=s;a++)o[r].push([a*_t/s+(a%s?(n()-.5)*30:0),r*_t/s+(r%s?(n()-.5)*30:0)])}for(let r=0;r<=s;r++)o[s][r][0]=o[0][r][0];for(let r=0;r<=s;r++)o[r][s][1]=o[r][0][1];for(let r=0;r<s;r++)for(let a=0;a<s;a++){let l=[o[r][a],o[r][a+1],o[r+1][a+1],o[r+1][a]],c=40+n()*18,u=28+n()*12,h=4+n()*7;t.beginPath(),l.forEach(([d,f],y)=>y?t.lineTo(d,f):t.moveTo(d,f)),t.closePath(),t.fillStyle=`hsl(${u},${h}%,${c}%)`,t.fill();let p=t.createLinearGradient(0,l[0][1],0,l[3][1]);if(p.addColorStop(0,"rgba(255,255,255,0.10)"),p.addColorStop(1,"rgba(0,0,0,0.16)"),t.fillStyle=p,t.fill(),t.strokeStyle="rgba(25,22,19,0.75)",t.lineWidth=3,t.stroke(),n()<.5){t.strokeStyle="rgba(25,22,19,0.5)",t.lineWidth=1.5,t.beginPath();let d=l[0],f=l[2];t.moveTo(d[0]+(f[0]-d[0])*.2,d[1]+(f[1]-d[1])*.3),t.lineTo(d[0]+(f[0]-d[0])*.6,d[1]+(f[1]-d[1])*.7),t.stroke()}}wn(t,.12,3,42,_t,_t,3e3),t.globalAlpha=.14;for(let r=0;r<18;r++)t.fillStyle="#56603f",t.beginPath(),t.ellipse(n()*_t,n()*_t,8+n()*20,3+n()*6,0,0,7),t.fill();t.globalAlpha=1},{noEm:!0,mute:1}).map,i.plank=mn((t,e)=>{if(e)return;let n=Sn(51);for(let s=0;s<_t;s+=32){t.fillStyle=`hsl(${26+n()*8},${12+n()*8}%,${40+n()*10}%)`,t.fillRect(0,s,_t,32),t.fillStyle="rgba(20,16,12,0.7)",t.fillRect(0,s+30,_t,2);for(let o=0;o<3;o++)t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(n()*_t,s+4+n()*22,30+n()*60,1)}wn(t,.1,2,52,_t,_t,1600)},{noEm:!0,mute:1}).map,i.iron=mn((t,e)=>{if(!e){t.fillStyle="#3d3c3a",t.fillRect(0,0,_t,_t),t.fillStyle="#2c2b2a";for(let n=0;n<_t;n+=64)t.fillRect(n,0,6,_t);t.fillStyle="#56544f";for(let n=0;n<_t;n+=64)for(let s=8;s<_t;s+=24)t.fillRect(n+10,s,3,3);wn(t,.08,2,28)}},{noEm:!0}).map,i.ground=null,i}function Ax(i,t,e=.6){return n=>{let s=n/t;return s<=1?i*(e*s+(1-e)*(1-(1-s)*(1-s))):i*(1+e*(s-1))}}function Ke(i,t){let{L:e,D:n,a:s}=t,o=t.ty||"gable",r=(t.ends||["auto","auto"]).slice();if(o!=="gable"&&e<n){let rt=e;e=n,n=rt,s+=Math.PI/2,r=["auto","auto"]}let a=Math.cos(s),l=Math.sin(s),c=t.c[0],u=t.c[1],h=n/2,p=Math.max(.6,t.top-t.ze),d=t.oh??.6,f=t.ohg??.35,y=Ax(p,h,t.sag??.6),g=t.top,m=Math.max(0,e/2-h),M=.5*h,x=o==="xs"?Math.max(m+M,.18*e):m,_=o==="pyr",v=t.lift??0,T=.5*Math.min(e,n),E=(rt,it)=>{if(!v||o==="gable")return 0;let ct=Math.abs(rt)-(e/2+d),J=Math.abs(it)-(h+d),st=Math.hypot(Math.min(0,ct),Math.min(0,J)),ht=Math.max(0,1-st/T);return v*ht*ht},R=(rt,it,ct)=>I(c+a*rt-l*it,u+l*rt+a*it,ct),S=rt=>r[rt>0?1:0]==="open"?"open":o==="gable"?"gable":o,b=(rt,it)=>{let ct=S(it);return ct==="open"?e/2:ct==="gable"?e/2+f:ct==="xs"?Vd(m+rt,x,e/2+d):Math.min(m+rt,e/2+d)},P=7,N=Math.max(4,Math.min(24,Math.round(e/1.6))),z=i.tile;for(let rt of[1,-1]){let it=[];for(let ct=0;ct<=P;ct++){let J=(h+d)*ct/P,st=g-y(J),ht=-b(J,-1),Dt=b(J,1),Ft=[];for(let Tt=0;Tt<=N;Tt++){let Gt=ht+(Dt-ht)*Tt/N;Ft.push({p:R(Gt,rt*J,st+E(Gt,J)),uv:[Gt,J*1.12]})}it.push(Ft)}Yd(z,it)}for(let rt of[1,-1]){let it=S(rt);if(it!=="hip"&&it!=="xs"&&it!=="pyr")continue;let ct=it==="xs"?x:m,J=e/2+d,st=[];for(let ht=0;ht<=P;ht++){let Dt=ct+(J-ct)*ht/P,Ft=Math.min(Dt-m,h+d),Tt=g-y(Dt-m),Gt=[];for(let q=0;q<=6;q++){let dt=-Ft+2*Ft*q/6;Gt.push({p:R(rt*Dt,dt,Tt+E(Dt,dt)),uv:[dt,(Dt-m)*1.12]})}st.push(Gt)}if(Yd(z,st),it==="xs"){let ht=g-y(M),Dt=[];for(let Gt=0;Gt<=8;Gt++){let q=-M+2*M*Gt/8;Dt.push([q,g-y(Math.abs(q))])}let Ft=i.ped,Tt=rt*x;for(let Gt=0;Gt<8;Gt++){let[q,dt]=Dt[Gt],[xt,At]=Dt[Gt+1];Ft.quad(R(Tt,q,ht),R(Tt,xt,ht),R(Tt,xt,At),R(Tt,q,dt),[q,0],[xt,0],[xt,At-ht],[q,dt-ht],[a*rt,0,l*rt])}for(let Gt=0;Gt<8;Gt++){let[q,dt]=Dt[Gt],[xt,At]=Dt[Gt+1];i.wood.beam(R(Tt+rt*.12,q,dt+.05),R(Tt+rt*.12,xt,At+.05),.12,.32)}i.wood.beam(R(Tt+rt*.1,-M,ht+.06),R(Tt+rt*.1,M,ht+.06),.18,.2)}}for(let rt of[1,-1]){if(S(rt)!=="gable")continue;let it=rt*(e/2+f);for(let ct=0;ct<P;ct++){let J=(h+d)*ct/P,st=(h+d)*(ct+1)/P;for(let ht of[1,-1])i.wood.beam(R(it,ht*J,g-y(J)-.05),R(it,ht*st,g-y(st)-.05),.1,.3)}}for(let rt of[1,-1]){let it=h+d,ct=g-y(it),J=-b(it,-1),st=b(it,1),ht=N;for(let Dt=0;Dt<ht;Dt++){let Ft=J+(st-J)*Dt/ht,Tt=J+(st-J)*(Dt+1)/ht,Gt=ct+E(Ft,it),q=ct+E(Tt,it);i.wood.quad(R(Ft,rt*it,Gt),R(Tt,rt*it,q),R(Tt,rt*it,q-.24),R(Ft,rt*it,Gt-.24),[0,0],[1,0],[1,.2],[0,.2],[-l*rt,0,a*rt])}}let O=t.ridgeDeco??e>9,G=rt=>{let it=S(rt);return it==="open"?e/2:it==="gable"?e/2+f:it==="xs"?x:m},j=-G(-1),et=G(1),tt=O?.55:.36,mt=O?.7:.38;if(et-j>.3&&i.ridge.beam(R(j,0,g+mt/2-.12),R(et,0,g+mt/2-.12),tt,mt),O&&!_)for(let[rt,it]of[[j,-1],[et,1]])S(it)!=="open"&&i.ridge.beam(R(rt,0,g+.2),R(rt+it*.7,0,g+1.25),.5,.42);let Q=O?.34:.24;for(let rt of[1,-1]){let it=S(rt);if(it==="hip"||it==="pyr")for(let ct of[1,-1]){let J=e/2+d,st=h+d;i.ridge.beam(R(rt*m,0,g+.08),R(rt*J,ct*st,g-y(st)+E(J,st)+.12),Q,Q)}else if(it==="xs")for(let ct of[1,-1]){i.ridge.beam(R(rt*x,0,g+.08),R(rt*x,ct*M,g-y(M)+.1),Q,Q);let J=e/2+d,st=h+d;i.ridge.beam(R(rt*(m+M),ct*M,g-y(M)+.1),R(rt*J,ct*st,g-y(st)+E(J,st)+.14),Q,Q)}}return{zAt:(rt,it)=>{let ct=rt-c,J=it-u,st=ct*a+J*l,ht=-ct*l+J*a;return Math.abs(st)>e/2+.3||Math.abs(ht)>h+.3?null:o==="gable"||o==="xs"&&Math.abs(st)<=x?g-y(Math.abs(ht)):g-y(Math.max(Math.abs(ht),Math.abs(st)-m))},kinks:(rt,it)=>{let ct=(ht,Dt)=>-(ht-c)*l+(Dt-u)*a,J=ct(rt[0],rt[1]),st=ct(it[0],it[1]);return o==="gable"&&J>0!=st>0?[J/(J-st)]:[]}}}function Yd(i,t){for(let e=0;e+1<t.length;e++)for(let n=0;n+1<t[e].length;n++){let s=t[e][n],o=t[e][n+1],r=t[e+1][n+1],a=t[e+1][n];i.tri(s.p,o.p,r.p,s.uv,o.uv,r.uv,Je),i.tri(s.p,r.p,a.p,s.uv,r.uv,a.uv,Je)}}function ou(i,t,e){let n=e.ze,s=e.top,o=Math.max(.6,s-n),r=e.oh??.6,a=[];for(let h=0;h<t.length;h++){let p=t[h],d=p.p,[f,y]=p.r,g=y[0]-f[0],m=y[1]-f[1],M=Math.hypot(g,m)||1;g/=M,m/=M;let x=[-m,g],_=x[0]*f[0]+x[1]*f[1],v=et=>et[0]*x[0]+et[1]*x[1]-_,T=.5,E=.5;for(let et of d){let tt=v(et);tt>0?T=Math.max(T,tt):E=Math.max(E,-tt)}let R=et=>tt=>tt<=et/2?1.3*o*tt/et:.65*o+.7*o*(tt-et/2)/et,S=R(T),b=R(E),P=et=>{let tt=v(et);return s-(tt>=0?S(tt):b(-tt))},N=d.map((et,tt)=>{let mt=d[(tt+1)%d.length],Q=[(et[0]+mt[0])/2,(et[1]+mt[1])/2];for(let ft=0;ft<t.length;ft++){if(ft===h)continue;let Et=t[ft].p;for(let rt=0;rt<Et.length;rt++)if(su(Q,Et[rt],Et[(rt+1)%Et.length])<.06)return 0}return r}),z=un(d,N),O=[],G=go(z,x,_),j=go(z,[-x[0],-x[1]],-_);if(G){let et=go(G,[-x[0],-x[1]],-(_+T/2)),tt=go(G,x,_+T/2);et&&O.push(et),tt&&O.push(tt)}if(j){let et=go(j,x,_-E/2),tt=go(j,[-x[0],-x[1]],-(_-E/2));et&&O.push(et),tt&&O.push(tt)}for(let et of O)for(let[tt,mt,Q]of fs(et)){let ft=et[tt],Et=et[mt],rt=et[Q];if(e.skip&&e.skip((ft[0]+Et[0]+rt[0])/3,(ft[1]+Et[1]+rt[1])/3))continue;let it=ct=>[ct[0]*g+ct[1]*m,Math.abs(v(ct))*1.12];i.tile.tri(I(ft[0],ft[1],P(ft)),I(Et[0],Et[1],P(Et)),I(rt[0],rt[1],P(rt)),it(ft),it(Et),it(rt),Je)}for(let et=0;et<z.length;et++){if(!N[et])continue;let tt=z[et],mt=z[(et+1)%z.length],Q=P(tt),ft=P(mt),Et=mt[1]-tt[1],rt=-(mt[0]-tt[0]),it=Math.hypot(Et,rt)||1;i.wood.quad(I(tt[0],tt[1],Q),I(mt[0],mt[1],ft),I(mt[0],mt[1],ft-.22),I(tt[0],tt[1],Q-.22),[0,0],[1,0],[1,.2],[0,.2],[Et/it,0,rt/it])}for(let[et,tt]of Hd(f,[g,m],z))tt-et<.3||i.ridge.beam(I(f[0]+g*et,f[1]+m*et,s+.12),I(f[0]+g*tt,f[1]+m*tt,s+.12),.36,.38);a.push({p:d,s:v,zOf:P,Wp:T,Wm:E,n:x,nc:_})}let l=(h,p)=>{for(let y of a)if($i([h,p],y.p))return y;let d=null,f=1e9;for(let y of a)for(let g=0;g<y.p.length;g++){let m=su([h,p],y.p[g],y.p[(g+1)%y.p.length]);m<f&&(f=m,d=y)}return d};return{zAt:(h,p)=>{let d=l(h,p);return d?d.zOf([h,p]):null},kinks:(h,p)=>{let d=[(h[0]+p[0])/2,(h[1]+p[1])/2],f=l(d[0],d[1]);if(!f)return[];let y=f.s(h),g=f.s(p),m=[];for(let M of[0,f.Wp/2,-f.Wm/2])(y-M)*(g-M)<0&&m.push((y-M)/(y-g));return m.sort((M,x)=>M-x)}}}function $d(i,t,e){let n=t.v,s=t.f,o=a=>I(n[a*3],n[a*3+1],n[a*3+2]);for(let a=0;a<s.length;a+=3){let l=s[a],c=s[a+1],u=s[a+2];i.tile.tri(o(l),o(c),o(u),[n[l*3],n[l*3+1]],[n[c*3],n[c*3+1]],[n[u*3],n[u*3+1]],Je)}let r=e.ze+.28*(t.k||.7);return{zAt:()=>r,kinks:()=>[]}}function ru(i,t,e){let n=e.top,s=n-.6;for(let[r,a,l]of fs(t))i.flat.tri(I(t[r][0],t[r][1],s),I(t[a][0],t[a][1],s),I(t[l][0],t[l][1],s),t[r],t[a],t[l],Je);let o=un(t,-.3);for(let r=0;r<t.length;r++){let a=t[r],l=t[(r+1)%t.length],c=o[r],u=o[(r+1)%t.length];i.cap.quad(I(a[0],a[1],n),I(l[0],l[1],n),I(u[0],u[1],n),I(c[0],c[1],n),[0,0],[1,0],[1,.3],[0,.3],Je);let h=l[1]-a[1],p=-(l[0]-a[0]),d=Math.hypot(h,p)||1;i.flatWall.quad(I(c[0],c[1],s),I(u[0],u[1],s),I(u[0],u[1],n),I(c[0],c[1],n),[0,0],[1,0],[1,.6],[0,.6],[-h/d,0,-p/d])}return{zAt:()=>n,kinks:()=>[]}}function bi(i,t,e,n,s,o=.25){let r=un(t,n),a=un(t,-.05);for(let l=0;l<t.length;l++){let c=(l+1)%t.length,u=a[l],h=a[c],p=r[l],d=r[c],f=o,y=o;i.tile.quad(I(u[0],u[1],e),I(h[0],h[1],e),I(d[0],d[1],e-s+y),I(p[0],p[1],e-s+f),[0,0],[Math.hypot(h[0]-u[0],h[1]-u[1]),0],[Math.hypot(h[0]-u[0],h[1]-u[1]),n],[0,n],Je);let g=d[1]-p[1],m=-(d[0]-p[0]),M=Math.hypot(g,m)||1;i.wood.quad(I(p[0],p[1],e-s+f),I(d[0],d[1],e-s+y),I(d[0],d[1],e-s+y-.2),I(p[0],p[1],e-s+f-.2),[0,0],[1,0],[1,.2],[0,.2],[g/M,0,m/M])}}var Rx={shop:"\u94FA\u9762",shophouse:"\u524D\u5E97\u540E\u5B85",house:"\u6C11\u5C45",campus:"\u5B66\u9662\u623F\u820D"};var Zd={1:[.61,.571,.479],2:[.847,.539,.147],3:[.745,.216,.05],4:[.451,.06,.024]},vc=(i,t=.035)=>{let e=1+(In(i)-.5)*2*t;return[e,e*(1+(In(i+"g")-.5)*.015),e*(1+(In(i+"b")-.5)*.02)]},Cx=i=>{let t=.95+In(i+"r")*.1,e=1+(In(i+"rb")-.5)*.04;return[t,t,t*e]};function jd(i,t,e){let n=t.length,s=e.hs??3.3,o=e.h0??3.8;for(let r=0;r<n;r++){let a=t[r],l=t[(r+1)%n],c=Math.hypot(l[0]-a[0],l[1]-a[1]);if(c<.05)continue;let u=[(l[1]-a[1])/c,0,-(l[0]-a[0])/c],h=Math.max(1,Math.round(c/(e.bay||3.6))),p=v=>[a[0]+(l[0]-a[0])*v,a[1]+(l[1]-a[1])*v],d=(v,T)=>{let E=p(v);return I(E[0],E[1],T)},f=(v,T,E,R,S,b=0,P=1)=>v.quad(d(T,R),d(E,R),d(E,S),d(T,S),[T*h,b],[E*h,b],[E*h,P],[T*h,P],u);e.z-e.zb>.02&&i.stone.quad(d(0,e.zb),d(1,e.zb),d(1,e.z),d(0,e.z),[0,0],[c/1.6,0],[c/1.6,(e.z-e.zb)/1.6],[0,(e.z-e.zb)/1.6],u);let y=e.z,g=e.hole?e.hole.i.indexOf(r):-1,m=g>=0?{t1:Array.isArray(e.hole.t1)?e.hole.t1[g]:e.hole.t1,t2:Array.isArray(e.hole.t2)?e.hole.t2[g]:e.hole.t2,z1:e.hole.z1}:null;for(let v=0;v<e.st;v++){let T=v===e.st-1?e.ze:y+(v===0?o:s);if(T<=y+.05){y=T;continue}let[E,R]=e.face(r,v,c),b=T-y>5.4&&R,P=b?y+4.3:T,N=i[E]||i.blank,z=i[R]||i.blank;m&&v===0?(f(N,0,m.t1,y,P),f(N,m.t2,1,y,P),m.z1<P&&f(N,m.t1,m.t2,m.z1,P,(m.z1-y)/(P-y),1)):f(N,0,1,y,P),b&&f(z,0,1,P,T),y=T}let M=e.roof;if(!M)continue;let x=[0,...M.kinks(a,l).filter(v=>v>.001&&v<.999),1],_=x.map(v=>{let T=p(v),E=M.zAt(T[0],T[1]);return E==null?e.ze:Math.max(e.ze,E-.04)});if(_.some(v=>v>e.ze+.06)){let v=[[0,e.ze],[1,e.ze]];for(let E=x.length-1;E>=0;E--)v.push([x[E],_[E]]);let T=fs(v);for(let[E,R,S]of T){let b=v[E],P=v[R],N=v[S];i.blank.tri(d(b[0],b[1]),d(P[0],P[1]),d(N[0],N[1]),[b[0]*h,(b[1]-e.ze)/3.3],[P[0]*h,(P[1]-e.ze)/3.3],[N[0]*h,(N[1]-e.ze)/3.3],u)}}}}function Kd(i,t,e,n){for(let s in i){let o=i[s];o instanceof ks&&(o.col=t,o.col2=e,o.bid=n)}}function ma(i,t,e){for(let n of["tile","ridge","ped","flat","cap","flatWall"])i[n]&&(i[n].col=t,i[n].col2=e)}function Jd(i,t,e,n){let s=e.length,o=t.st>t.st3;e.push({kind:"bld",id:t.id,t:t.t,name:Rx[t.t]||"\u623F\u5B50",st:t.st,st3:t.st3,top:t.top,z:t.z,raised:o,rail:!!t.railcap,pid:t.pid,c:pa(t.p)});let r=Zd[Math.min(4,t.st)];Kd(i,vc(t.b),r,s),ma(i,Cx(t.b),r.map(y=>y*.85));let a=t.roof,l=xi(t.p),c,h=a.m==="flat"?t.top-.6:t.ze;a.m==="rect"?c=Ke(i,{c:a.c,L:a.L,D:a.D,a:a.a,ze:t.ze,top:t.top,ty:a.ty,oh:.6,ohg:.35,lift:a.ty==="gable"?0:.25,sag:.62,ridgeDeco:a.ty==="xs"}):a.m==="ridge"?c=ou(i,a.pc,{ze:t.ze,top:t.top,oh:.6}):a.m==="mesh"?c=$d(i,a,{ze:t.ze}):c=ru(i,l,{top:t.top}),ma(i,vc(t.b),r);let p=In(t.b+"t")<.68,d=(y,g,m)=>{let M=t.e[y];if(m<1.6||M==="party")return["blank"];if(t.t==="campus")return g===0?["hall","hallU"]:["hallU"];if(M==="street"){if(g===0)return[t.t==="house"?"court":In(t.id+"s"+y)<.5?"shopA":"shopB"];let x=In(t.id+"L"+g+y)<.62;return[p?x?"upT":"upTd":x?"upP":"upPd"]}return g===0?["court"]:[In(t.id+"L"+g+y)<.45?"upP":"upPd"]},f=a.m==="mesh"?c.zAt():h;if(jd(i,l,{zb:Math.min(t.z0,t.z)-.4,z:t.z,st:t.st,h0:3.8,hs:3.3,ze:f,roof:a.m==="rect"||a.m==="ridge"?c:null,face:d}),(t.t==="shop"||t.t==="shophouse")&&(t.prio||0)>=4.2)for(let y=0;y<l.length;y++){if(t.e[y]!=="street")continue;let g=l[y],m=l[(y+1)%l.length],M=Math.hypot(m[0]-g[0],m[1]-g[1]);if(M<3)continue;let x=(m[1]-g[1])/M,_=-(m[0]-g[0])/M,v=(m[0]-g[0])/M,T=(m[1]-g[1])/M,E=In(t.id+"aw"+y);if(E<.55&&n.awnings.push({a:[g[0]+v*.4,g[1]+T*.4],b:[m[0]-v*.4,m[1]-T*.4],n:[x,_],z:t.z+3.25,col:Math.floor(In(t.id+"ac"+y)*5)}),E>.35){let R=M>7?[.3,.7]:[.5];for(let S of R)n.lanterns.push([g[0]+(m[0]-g[0])*S+x*.7,g[1]+(m[1]-g[1])*S+_*.7,t.z+3.1])}}}function au(i,t,e){let n=Math.cos(i.a),s=Math.sin(i.a),o=t[0]-i.c[0],r=t[1]-i.c[1];return Math.abs(o*n+r*s)<=i.L/2+e&&Math.abs(-o*s+r*n)<=i.D/2+e}function Qd(i,t,e,n){if(t.sty==="tower"||t.sty==="kiosk")return;let s=e.length;e.push({kind:"key",id:t.id,name:t.name,sty:t.sty,st:t.st,top:t.top,z:t.z,c:pa(t.p)});let o=xi(t.p),r=["hall","gate","tea","colon"],a=t.stilt?0:t.plat||(r.includes(t.sty)?.45:t.sty==="station"?.3:0),l=t.z+a,c=t.h1||3.8,u=3.3,h=t.flatroof?t.top-.6:l+c+u*(t.st-1),p=t.flatroof?t.top:Math.max(t.top,h+1.6),d=t.eave||1,f=Zd[Math.min(4,t.st)];Kd(i,vc(t.id,.04),f,s),a>0&&i.stone.prism(un(o,t.plat?2.2:.7),Math.min(t.z0,t.z)-.4,l,!0),t.stilt&&Px(i,o,t.z0,l),ma(i,[1,1,1],f.map(_=>_*.85)),t.sty==="hut"&&ma(i,[.86,.74,.55],f.map(_=>_*.85));let y=r.includes(t.sty)||t.sty==="boat"?.75:.2,g=t.roof||"gable",m;if(t.flatroof)m=ru(i,o,{top:p});else if(t.rp){let _=t.sty==="ruin"?Lx(t):null;m=ou(i,t.rp,{ze:h,top:p,oh:d,skip:_})}else{let _=t.rects.map(([R,S,b,P,N])=>b>=P?{c:[R,S],L:b,D:P,a:N}:{c:[R,S],L:P,D:b,a:N+Math.PI/2});for(let R of _){if(R.L/R.D>1.6)continue;let S=Math.cos(R.a),b=Math.sin(R.a),P=[-1,1].some(z=>_.some(O=>O!==R&&au(O,[R.c[0]+S*z*R.L/2,R.c[1]+b*z*R.L/2],.3)));if([-1,1].some(z=>_.some(O=>O!==R&&au(O,[R.c[0]-b*z*R.D/2,R.c[1]+S*z*R.D/2],.3)))&&!P){let z=R.L;R.L=R.D,R.D=z,R.a+=Math.PI/2}}let v=_.reduce((R,S)=>S.L*S.D>R.L*R.D?S:R,_[0]),T=_.map(R=>{let S=Math.cos(R.a),b=Math.sin(R.a),P=["auto","auto"],N=R.L,z=R.c.slice();for(let O of[-1,1]){let G=[R.c[0]+S*O*R.L/2,R.c[1]+b*O*R.L/2],j=_.find(et=>et!==R&&au(et,G,.3));if(j){let et=Math.min(j.D/2,j.L/2);N+=et,z=[z[0]+S*O*et/2,z[1]+b*O*et/2],P[O>0?1:0]="open"}}return{c:z,L:N,D:R.D,a:R.a,ends:P,main:R===v}}),E=T.map(R=>Ke(i,{c:R.c,L:R.L,D:R.D,a:R.a,ends:R.ends,ze:h,top:R.main?p:p-Math.min(.9,.18*(p-h)),ty:g,oh:d,ohg:Math.min(.6,d*.5),lift:R.L*R.D<60?y*.5:y,sag:r.includes(t.sty)?.5:.62,ridgeDeco:!0}));if(m={zAt:(R,S)=>{let b=null;for(let P of E){let N=P.zAt(R,S);N!=null&&(b==null||N>b)&&(b=N)}return b},kinks:(R,S)=>E.flatMap(b=>b.kinks(R,S)).sort((b,P)=>b-P)},t.skylight){let R=T.find(S=>S.main);Ix(i,R,h,p)}}ma(i,vc(t.id,.04),f);let M={hall:_=>_===0?["hall","hallU"]:["hallU"],gate:_=>_===0?["hall","hallU"]:["hallU"],tea:_=>_===0?["shopA"]:["upT"],ware:()=>["ware","blank"],shed:()=>["ware","upTd"],shop:_=>_===0?["shopA"]:["upP"],ruin:()=>["ruin"],house:_=>_===0?["court"]:["upP"],boat:_=>_===0?["court"]:["upT"],station:()=>["station"],factory:()=>["factory"],stone:()=>["stoneF"],hut:()=>["hut"]}[t.sty]||(()=>["court"]),x=null;if(t.pass&&t.rects&&t.rects.length){let[_,v,T,E,R]=t.rects[0],S=Math.max(T,E),b=T>=E?R:R+Math.PI/2,P=t.passu||0,N=Math.cos(b),z=Math.sin(b),O=[],G=[],j=[];for(let et=0;et<o.length;et++){let tt=o[et],mt=o[(et+1)%o.length],Q=mt[0]-tt[0],ft=mt[1]-tt[1],Et=Math.hypot(Q,ft);if(Math.abs((Q*N+ft*z)/Et)<.95)continue;let rt=Dt=>(Dt[0]-_)*N+(Dt[1]-v)*z,it=rt(tt),ct=rt(mt),J=Dt=>(Dt-it)/(ct-it),st=Math.min(J(P-t.pass/2),J(P+t.pass/2)),ht=Math.max(J(P-t.pass/2),J(P+t.pass/2));st>0&&ht<1&&(O.push(et),G.push(st),j.push(ht))}if(O.length){x={i:O,t1:G,t2:j,z1:l+Math.min(c-.6,t.pass>5?5.2:4.4)};let et=t.pass/2,tt=Math.min(T,E)/2,mt=(Q,ft,Et)=>I(_+N*(Q+P)-z*ft,v+z*(Q+P)+N*ft,Et);for(let Q of[-1,1])i.blank.quad(mt(Q*et,-tt,l),mt(Q*et,tt,l),mt(Q*et,tt,x.z1),mt(Q*et,-tt,x.z1),[0,0],[2,0],[2,1],[0,1],[-N*Q,0,-z*Q]);i.wood.quad(mt(-et,-tt,x.z1),mt(et,-tt,x.z1),mt(et,tt,x.z1),mt(-et,tt,x.z1),[0,0],[1,0],[1,1],[0,1],[0,-1,0]),i.stone.quad(mt(-et,-tt,l+.02),mt(et,-tt,l+.02),mt(et,tt,l+.02),mt(-et,tt,l+.02),[0,0],[1,0],[1,1],[0,1],Je);for(let Q of[-1,1])n.lanterns.push([_+N*(P+Q*(et+.9))-z*(tt+.6),v+z*(P+Q*(et+.9))+N*(tt+.6),l+3.6])}}if(t.sty==="colon"){let _=un(o,-.4);for(let T=0;T<_.length;T++){let E=_[T],R=_[(T+1)%_.length],S=Math.hypot(R[0]-E[0],R[1]-E[1]),b=Math.max(1,Math.round(S/3.6));for(let P=0;P<b;P++){let N=P/b;i.red.cyl(E[0]+(R[0]-E[0])*N,E[1]+(R[1]-E[1])*N,l,h,.3,10,!1)}}let v=h-.25;for(let T=0;T<_.length;T++){let E=_[T],R=_[(T+1)%_.length];i.wood.beam(I(E[0],E[1],v),I(R[0],R[1],v),.4,.55)}}else jd(i,o,{zb:t.stilt?l:Math.min(t.z0,t.z)-.4,z:l,st:t.st,h0:c,hs:u,ze:h,roof:!t.flatroof&&(g==="gable"||t.rp)?m:null,face:(_,v)=>M(v),hole:x,bay:r.includes(t.sty)?4.2:t.sty==="factory"?4.4:3.6});if(t.door){let _=t.door,v=_.f*Math.PI/180,T=Math.cos(v),E=Math.sin(v),R=-E,S=T,b=_.w,P=_.h,N=l,z=Math.atan2(S,R),O=(tt,mt)=>[_.at[0]+R*tt+T*mt,_.at[1]+S*tt+E*mt];for(let tt of[-1,1]){let mt=O(tt*b/4,.07);i.red.box(mt[0],mt[1],N,N+P,b/2-.06,.14,z,1);for(let Q=0;Q<5;Q++)for(let ft=-1;ft<=1;ft++){let Et=O(tt*b/4+ft*b*.12,.16),rt=N+.7+Q*(P-1.2)/4;i.brassG.box(Et[0],Et[1],rt,rt+.09,.09,.05,z,1)}}for(let tt of[-1,1]){let mt=O(tt*(b/2+.18),.05);i.wood.box(mt[0],mt[1],N,N+P+.3,.32,.26,z,1)}let G=O(0,.05);i.wood.box(G[0],G[1],N+P,N+P+.36,b+.7,.28,z,1),G=O(0,.12),i.stone.box(G[0],G[1],N-.02,N+.22,b+.4,.4,z,1);let j=t.dbl&&t.st===1?l+c*.6+.75:N+P+.55,et=Math.min(j+1.25,h-.45);G=O(0,.08),i.brassG.box(G[0],G[1],j,et,2.9,.12,z,1),G=O(0,.16),i.ridge.box(G[0],G[1],j+.12,et-.12,2.6,.06,z,1);for(let tt of[-1,1]){let mt=O(tt*(b/2+1.1),.9);n.lanterns.push([mt[0],mt[1],N+P+.2])}}if(t.pent&&t.st>1)for(let _=1;_<t.st;_++)bi(i,o,l+c+u*(_-1)+.5,1.15,.55);if(t.dbl&&bi(i,o,(t.st===1?l+c*.6:l+c)+.4,d+.3,.75),(t.bal||t.gallery)&&t.st>1)for(let _=1;_<t.st;_++){let v=l+c+u*(_-1)-.1,T=un(o,t.gallery?1.6:1);i.wood.prism(T,v-.18,v,!0,!0);for(let E=0;E<T.length;E++){let R=T[E],S=T[(E+1)%T.length],b=Math.hypot(S[0]-R[0],S[1]-R[1]),P=Math.max(1,Math.round(b/1.3));for(let N=0;N<P;N++){let z=N/P;i.wood.cyl(R[0]+(S[0]-R[0])*z,R[1]+(S[1]-R[1])*z,v,v+1,.07,4,!1)}i.wood.beam(I(R[0],R[1],v+1),I(S[0],S[1],v+1),.12,.12),i.wood.beam(I(R[0],R[1],v+.5),I(S[0],S[1],v+.5),.06,.06)}}t.sty==="ruin"&&Dx(i,t,h,p)}function Px(i,t,e,n){i.plank.prism(un(t,.5),n-.35,n,!0,!0);let s=un(t,.15);for(let o=0;o<s.length;o++){let r=s[o],a=s[(o+1)%s.length],l=Math.hypot(a[0]-r[0],a[1]-r[1]),c=Math.max(1,Math.round(l/2.6));for(let h=0;h<c;h++){let p=h/c,d=r[0]+(a[0]-r[0])*p,f=r[1]+(a[1]-r[1])*p;i.wood.cyl(d,f,e-1.5,n-.35,.18,7,!1)}let u=e+(n-e)*.45;i.wood.beam(I(r[0],r[1],u),I(a[0],a[1],u),.14,.18)}}function Ix(i,t,e,n){let s=t.L*.72,o=Math.max(2.4,t.D*.26),r=n-.5,a=r+1.6,l=Math.cos(t.a),c=Math.sin(t.a),u=(p,d)=>[t.c[0]+l*p-c*d,t.c[1]+c*p+l*d],h=[u(-s/2,-o/2),u(s/2,-o/2),u(s/2,o/2),u(-s/2,o/2)];for(let p=0;p<4;p++){let d=h[p],f=h[(p+1)%4],y=Math.hypot(f[0]-d[0],f[1]-d[1]),g=[(f[1]-d[1])/y,0,-(f[0]-d[0])/y],m=Math.max(1,Math.round(y/3));i.factory.quad(I(d[0],d[1],r),I(f[0],f[1],r),I(f[0],f[1],a),I(d[0],d[1],a),[0,.15],[m,.15],[m,.75],[0,.75],g)}Ke(i,{c:t.c,L:s+.2,D:o+.2,a:t.a,ze:a,top:a+.9,ty:"gable",oh:.4,ohg:.3,lift:0,sag:.3,ridgeDeco:!1})}function tp(i){if(!(i.rp&&i.rp.length&&i.ruin))return null;let[t,e]=i.rp[0].r,n=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(n,s)||1;n/=o,s/=o;let r=-s,a=n,l=i.ruin.face*Math.PI/180;r*Math.cos(l)+a*Math.sin(l)<0&&(r=-r,a=-a);let c=i.rp.flatMap(d=>d.r),u=1e9,h=-1e9;for(let d of c){let f=(d[0]-t[0])*n+(d[1]-t[1])*s;u=Math.min(u,f),h=Math.max(h,f)}let p=(u+h)/2;return{c:[t[0]+n*p,t[1]+s*p],d:[n,s],n:[r,a]}}function Lx(i){let t=tp(i);if(t){let s=[t.c[0]+t.d[0]*1.2+t.n[0]*2,t.c[1]+t.d[1]*1.2+t.n[1]*2];return(o,r)=>{let a=(o-s[0])*t.d[0]+(r-s[1])*t.d[1],l=(o-s[0])*t.n[0]+(r-s[1])*t.n[1];return Math.hypot(a/3,l/1.9)<1}}let e=pa(i.p),n=[e[0]+2,e[1]+2.5];return(s,o)=>Math.hypot((s-n[0])/3.4,(o-n[1])/2.6)<1}function Dx(i,t,e,n){let s=tp(t);if(s){let a=[s.c[0]+s.d[0]*1.2,s.c[1]+s.d[1]*1.2];for(let u=-3;u<=3;u++){let h=[a[0]+s.d[0]*u*.75,a[1]+s.d[1]*u*.75];i.wood.beam(I(h[0]+s.n[0]*3.9,h[1]+s.n[1]*3.9,e+.4+(n-e)*.15),I(h[0]+s.n[0]*.2,h[1]+s.n[1]*.2,n-.25),.14,.18)}let l=[a[0]-s.d[0]*3+s.n[0]*3.3,a[1]-s.d[1]*3+s.n[1]*3.3],c=[a[0]+s.d[0]*3+s.n[0]*.9,a[1]+s.d[1]*3+s.n[1]*.9];i.wood.beam(I(l[0],l[1],e+1.4),I(c[0],c[1],e+.9),.22,.26);return}let o=pa(t.p),r=[o[0]+2,o[1]+2.5];for(let a=-3;a<=3;a++){let l=r[1]+a*.75;i.wood.beam(I(r[0]-4.2,l,e+.4+(n-e)*.15),I(o[0]-.2,l,n-.25),.14,.18)}i.wood.beam(I(r[0]-3.6,r[1]-3,e+1.4),I(r[0]+3.2,r[1]+3,e+.9),.22,.26)}function ep(i,t,e){for(let n of t){let s=n.p;if(!(s.length<2))for(let o=0;o+1<s.length;o++){let r=s[o],a=s[o+1],l=Math.hypot(a[0]-r[0],a[1]-r[1]);if(l<.2)continue;let c=Math.max(1,Math.ceil(l/4));for(let u=0;u<c;u++){let h=u/c,p=(u+1)/c,d=[r[0]+(a[0]-r[0])*h,r[1]+(a[1]-r[1])*h],f=[r[0]+(a[0]-r[0])*p,r[1]+(a[1]-r[1])*p],y=n.z!=null?n.z:e(d[0],d[1]),g=n.z!=null?n.z:e(f[0],f[1]),m=-(a[1]-r[1])/l,M=(a[0]-r[0])/l,x=n.t/2,_=[(d[0]+f[0])/2,(d[1]+f[1])/2],v=1/0;for(let N of[d,_,f])for(let z of[-1,1])v=Math.min(v,e(N[0]+z*m*x,N[1]+z*M*x));let T=Math.min(y,g,v)-.4,E=Math.max(y,g)+n.h,R=(d[0]+f[0])/2,S=(d[1]+f[1])/2,b=l/c+.02,P=Math.atan2(a[1]-r[1],a[0]-r[0]);i.wallBody.box(R,S,T,E-.12,b,n.t,P,.5),i.cap.box(R,S,E-.12,E+.02,b+.04,n.t+.42,P,1),i.ridge.box(R,S,E+.02,E+.24,b+.04,.22,P,1)}}}}function np(i,t,e){for(let n of t){if(n.onmark)continue;let s=(n.f||0)*Math.PI/180,o=Math.cos(s),r=Math.sin(s),a=-r,l=o,c=n.at[0],u=n.at[1],h=n.z,p=n.w||3,d=(M,x,_)=>[c+a*M+o*x,u+l*M+r*x,h+_],f=Math.atan2(l,a),y=(M,x,_=.28,v=i.red)=>{let T=d(M,0,0);v.cyl(T[0],T[1],h-.3,h+x,_,8,!0),i.stone.box(T[0],T[1],h-.3,h+.5,.9,.9,f,1)},g=(M,x,_,v,T="xs")=>Ke(i,{c:[c,u],L:M,D:x,a:f,ze:_,top:v,ty:T,oh:.45,ohg:.3,lift:.35,sag:.55,ridgeDeco:!0}),m=n.form||"";if(m==="\u724C\u574A"){let M=p/2+.35,x=n.side??2.6,_=!!n.stone,v=_?7.6:6.6,T=_?5.8:5,E=_?i.coping:i.red,R=_?i.coping:i.wood;for(let z of[-1,1])y(z*M,v,_?.42:.34,E),x>0&&y(z*(M+x),T,_?.38:.3,E);if(x>0)for(let z of[-1,1]){let O=d(z*M,0,T+.9),G=d(z*(M+x),0,T+.9);R.beam(I(O[0],O[1],T+h-.6),I(G[0],G[1],T+h-.6),.3,.5)}let S=d(-M,0,v-.7),b=d(M,0,v-.7);R.beam(I(...S),I(...b),.36,.6);let P=d(-M,0,v-1.7),N=d(M,0,v-1.7);if((_?i.coping:i.red).beam(I(...P),I(...N),.3,.4),_){let z=d(0,.05,0);i.brassG.box(z[0],z[1],h+v-1.5,h+v-.95,Math.min(3.4,p*.5),.1,f,1)}if(g(p+1.6,1.9,h+v,h+v+1.1),x>0)for(let z of[-1,1]){let O=d(z*(M+x/2),0,0);Ke(i,{c:[O[0],O[1]],L:x+.8,D:1.6,a:f,ze:h+T,top:h+T+.8,ty:"xs",oh:.35,lift:.25,sag:.55,ridgeDeco:!1})}for(let z of[-1,1])e.lanterns.push([...d(z*(M-.6),.4,4.3)].slice(0,2).concat(h+4.3))}else if(m==="\u95E8\u697C"||m==="\u5927\u95E8"){let M=p/2+.3,x=m==="\u95E8\u697C"?4.4:4,_=n.stub||[1.6,1.6];for(let E of[-1,1]){y(E*M,x);let R=_[E<0?0:1];if(R>.05){let S=d(E*(M+.1+R/2),0,0);i.wallBody.box(S[0],S[1],h-.3,h+x-.3,R,.7,f,.5)}}let v=d(-M,0,x-.2),T=d(M,0,x-.2);i.wood.beam(I(...v),I(...T),.4,.55),g(p+3.2,3,h+x+.2,h+x+1.5);for(let E of[-1,1])e.lanterns.push([...d(E*(M-.4),.9,0)].slice(0,2).concat(h+x-.7))}else if(m==="\u95E8\u6D1E"){let M=p/2;for(let _ of[-1,1]){let v=d(_*(M+.6),0,0);i.stone.box(v[0],v[1],h-.3,h+4.6,1.2,1.4,f,.7)}let x=d(0,0,0);i.stone.box(x[0],x[1],h+3.8,h+4.6,p+2.4,1.4,f,.7),g(p+3,2.2,h+4.7,h+5.5)}else if(m==="\u8FC7\u8857\u697C"){let M=p/2,x=4.3,_=h+x+3.3,v=-3,T=.35,E=M+.9;for(let S of[-1,1]){let b=d(S*(M+.5),-.15,0);i.stone.box(b[0],b[1],h-.3,h+x,1,1,f,.7)}let R=[d(-E,T,0),d(E,T,0),d(E,v,0),d(-E,v,0)];for(let S=0;S<4;S++){let b=R[S],P=R[(S+1)%4],N=Math.hypot(P[0]-b[0],P[1]-b[1]),z=[(P[1]-b[1])/N,0,-(P[0]-b[0])/N],O=Math.max(1,Math.round(N/3));i.upP.quad(I(b[0],b[1],h+x),I(P[0],P[1],h+x),I(P[0],P[1],_),I(b[0],b[1],_),[0,0],[O,0],[O,1],[0,1],z)}i.wood.quad(I(R[0][0],R[0][1],h+x),I(R[1][0],R[1][1],h+x),I(R[2][0],R[2][1],h+x),I(R[3][0],R[3][1],h+x),[0,0],[1,0],[1,1],[0,1],[0,-1,0]);{let S=d(0,(v+T)/2,0);i.coping.box(S[0],S[1],h+x-.05,h+x+.3,2*E+.3,T-v+.3,f,.6)}{let S=d(-M-.2,T+.05,x-.2),b=d(M+.2,T+.05,x-.2);i.wood.beam(I(...S),I(...b),.32,.42)}{let S=d(0,(v+T)/2,0);Ke(i,{c:[S[0],S[1]],L:2*E,D:T-v,a:f,ze:_,top:_+1.7,ty:"xs",oh:.7,ohg:.4,lift:.4,sag:.55,ridgeDeco:!0})}{let S=d(0,T+.08,0);i.brassG.box(S[0],S[1],h+x+.75,h+x+1.75,2.6,.08,f,1),i.ridge.box(S[0],S[1],h+x+.82,h+x+1.68,2.4,.1,f,1)}for(let S of[-1,1])e.lanterns.push([...d(S*(M-.3),T+.5,0)].slice(0,2).concat(h+x-.9))}else if(m==="\u5E93\u95E8"){let M=p/2;for(let v of[-1,1])y(v*M,4.6,.3,i.wood);let x=d(-M,0,4.4),_=d(M,0,4.4);i.wood.beam(I(...x),I(..._),.36,.5)}else if(m==="\u94C1\u95E8"){let M=p/2;for(let x of[-1,1]){let _=d(x*(M+.5),0,0);i.brick.box(_[0],_[1],h-.3,h+3.7,1,1,f,.5),i.coping.box(_[0],_[1],h+3.7,h+3.95,1.3,1.3,f,.6),i.coping.box(_[0],_[1],h-.3,h+.4,1.2,1.2,f,.6);let v=d(x*(M+.5),.62,0);i.iron.box(v[0],v[1],h+3,h+3.1,.1,.3,f,1),i.brassG.box(v[0],v[1],h+2.6,h+3,.3,.3,f,1)}for(let x of[-1,1]){let _=x*.04,v=x*M;for(let R=0;R<=12;R++){let S=d(_+(v-_)*R/12,0,0);i.iron.cyl(S[0],S[1],h+.1,h+2.8,.035,4,!1)}for(let R of[.25,1.35,2.55]){let S=d(_,0,R),b=d(v,0,R);i.iron.beam(I(...S),I(...b),.07,.1)}let T=d(_,0,.3),E=d(v,0,2.5);i.iron.beam(I(...T),I(...E),.05,.08)}{let x=d(-(M+.5),0,4.6),_=d(M+.5,0,4.6);i.iron.beam(I(...x),I(..._),.18,.24)}for(let x of[-1,1]){let _=d(x*(M+.5),0,3.95),v=d(x*(M+.5),0,4.7);i.iron.beam(I(..._),I(...v),.14,.14)}{let x=d(0,.03,0);i.brassG.box(x[0],x[1],h+4.72,h+5.62,3.6,.07,f,1),i.ridge.box(x[0],x[1],h+4.78,h+5.56,3.4,.11,f,1)}{let x=d(M+2.6,-2.2,0);i.brick.box(x[0],x[1],h-.2,h+2.7,2.4,2.2,f,.5),Ke(i,{c:[x[0],x[1]],L:2.4,D:2.2,a:f,ze:h+2.7,top:h+3.45,ty:"gable",oh:.35,ohg:.3,lift:0,sag:.3,ridgeDeco:!1});let _=d(M+1.37,-2.2,0);i.ridge.box(_[0],_[1],h+1.1,h+2,1.1,.06,f+Math.PI/2,1);let v=d(M+2.6,-1.07,0);i.red.box(v[0],v[1],h,h+2.1,.9,.06,f,1)}}else if(m==="\u6805\u95E8"){let M=p/2;for(let v=-M;v<=M+.01;v+=.35){let T=d(v,0,0);i.iron.cyl(T[0],T[1],h,h+2.4,.04,4,!1)}let x=d(-M,0,2.3),_=d(M,0,2.3);i.iron.beam(I(...x),I(..._),.08,.12)}else{let M=p/2+.15,x=3;for(let T of[-1,1])y(T*M,x,.2,i.wood);let _=d(-M,0,x-.15),v=d(M,0,x-.15);i.wood.beam(I(..._),I(...v),.28,.35),g(p+1.6,1.8,h+x+.05,h+x+.85,"gable")}}}function sp(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),o={},r={},a=i[0].morphTargetsRelative,l=new We,c=0;for(let u=0;u<i.length;++u){let h=i[u],p=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.morphAttributes[d])}if(t){let d;if(e)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(e){let u=0,h=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let f=0;f<d.count;++f)h.push(d.getX(f)+u);u+=i[p].attributes.position.count}l.setIndex(h)}for(let u in o){let h=ip(o[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in r){let h=r[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<h;++p){let d=[];for(let y=0;y<r[u].length;++y)d.push(r[u][y][p]);let f=ip(d);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(f)}}return l}function ip(i){let t,e,n,s=-1,o=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=u.count*e}let r=new t(o),a=new je(r,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/e;for(let p=0,d=u.count;p<d;p++)for(let f=0;f<e;f++){let y=u.getComponent(p,f);a.setComponent(p+h,f,y)}}else r.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function lu(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count,r=0,a=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let M=0,x=a.length;M<x;M++){let _=a[M],v=i.attributes[_];l[_]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let T=i.morphAttributes[_];T&&(c[_]||(c[_]=[]),T.forEach((E,R)=>{let S=new E.array.constructor(E.count*E.itemSize);c[_][R]=new E.constructor(S,E.itemSize,E.normalized)}))}let d=t*.5,f=Math.log10(1/t),y=Math.pow(10,f),g=d*y;for(let M=0;M<o;M++){let x=n?n.getX(M):M,_="";for(let v=0,T=a.length;v<T;v++){let E=a[v],R=i.getAttribute(E),S=R.itemSize;for(let b=0;b<S;b++)_+=`${~~(R[h[b]](x)*y+g)},`}if(_ in e)u.push(e[_]);else{for(let v=0,T=a.length;v<T;v++){let E=a[v],R=i.getAttribute(E),S=i.morphAttributes[E],b=R.itemSize,P=l[E],N=c[E];for(let z=0;z<b;z++){let O=h[z],G=p[z];if(P[G](r,R[O](x)),S)for(let j=0,et=S.length;j<et;j++)N[j][G](r,S[j][O](x))}}e[_]=r,u.push(r),r++}}let m=i.clone();for(let M in i.attributes){let x=l[M];if(m.setAttribute(M,new x.constructor(x.array.slice(0,r*x.itemSize),x.itemSize,x.normalized)),M in c)for(let _=0;_<c[M].length;_++){let v=c[M][_];m.morphAttributes[M][_]=new v.constructor(v.array.slice(0,r*v.itemSize),v.itemSize,v.normalized)}}return m.setIndex(u),m}var ds=-4;function rp(i){let t=i.hgt,e=atob(t.cm),n=e.length/2,s=new Float32Array(n);for(let u=0;u<n;u++){let h=e.charCodeAt(2*u)|e.charCodeAt(2*u+1)<<8;h&32768&&(h-=65536),s[u]=h/100}let{x0:o,y0:r,nx:a,ny:l}=t;return(u,h)=>{let p=u-o,d=h-r;p=Math.max(0,Math.min(a-1.001,p)),d=Math.max(0,Math.min(l-1.001,d));let f=Math.floor(p),y=Math.floor(d),g=p-f,m=d-y,M=s[y*a+f],x=s[y*a+f+1],_=s[(y+1)*a+f],v=s[(y+1)*a+f+1];return(M*(1-g)+x*g)*(1-m)+(_*(1-g)+v*g)*m}}function ap(i,t,e){let[n,s,o,r]=i.meta.bbox,a=128,l=[[1,0],[2,125],[4,330]],c=2,u=new ke({map:e,color:"#d4cbbd",alphaTest:.5,roughness:.96,metalness:0}),h=new $e;h.name="terrain";let p=(d,f)=>{let y=(t(d+1,f)-t(d-1,f))/2,g=(t(d,f+1)-t(d,f-1))/2,m=Math.hypot(y,1,g);return[-y/m,1/m,-g/m]};for(let d=s;d<r;d+=a)for(let f=n;f<o;f+=a){let y=Math.min(o,f+a),g=Math.min(r,d+a),m=y-f+1,M=g-d+1,x=[];for(let O=0;O<m;O++)x.push([O,0]);for(let O=1;O<M;O++)x.push([m-1,O]);for(let O=m-2;O>=0;O--)x.push([O,M-1]);for(let O=M-2;O>0;O--)x.push([0,O]);let _=m*M+x.length,v=new Float32Array(_*3),T=new Float32Array(_*3),E=new Float32Array(_*2),R=I((f+y)/2,(d+g)/2,t((f+y)/2,(d+g)/2)),S=(O,G,j,et)=>{let tt=I(G,j,et);v[O*3]=tt[0]-R[0],v[O*3+1]=tt[1]-R[1],v[O*3+2]=tt[2]-R[2],T.set(p(G,j),O*3),E[O*2]=(G-n)/(o-n),E[O*2+1]=1-(j-s)/(r-s)};for(let O=0;O<M;O++)for(let G=0;G<m;G++)S(O*m+G,f+G,d+O,t(f+G,d+O));let b=new Map;x.forEach(([O,G],j)=>{let et=m*M+j;S(et,f+O,d+G,t(f+O,d+G)-c),b.set(G*m+O,et)});let P={position:new je(v,3),normal:new je(T,3),uv:new je(E,2)},N=new Xo;N.position.set(R[0],R[1],R[2]),N.hysteresis=.08;let z=null;for(let[O,G]of l){let j=[],et=[];for(let rt=0;rt<m-1;rt+=O)j.push(rt);j.push(m-1);for(let rt=0;rt<M-1;rt+=O)et.push(rt);et.push(M-1);let tt=[];for(let rt=0;rt+1<et.length;rt++)for(let it=0;it+1<j.length;it++){let ct=et[rt]*m+j[it],J=et[rt]*m+j[it+1],st=et[rt+1]*m+j[it],ht=et[rt+1]*m+j[it+1];tt.push(ct,st,J,J,st,ht)}let mt=[];for(let rt of j)mt.push(rt);for(let rt of et.slice(1))mt.push(m-1+rt*m);for(let rt of j.slice(0,-1).reverse())mt.push(rt+(M-1)*m);for(let rt of et.slice(1,-1).reverse())mt.push(rt*m);mt[0]=0;let Q=[];for(let rt of mt)Q[Q.length-1]!==rt&&Q.push(rt);for(let rt=0;rt<Q.length;rt++){let it=Q[rt],ct=Q[(rt+1)%Q.length],J=b.get(it),st=b.get(ct);J==null||st==null||tt.push(it,J,ct,ct,J,st,it,ct,J,ct,st,J)}let ft=new We;for(let rt in P)ft.setAttribute(rt,P[rt]);ft.setIndex(new je(_>65535?new Uint32Array(tt):new Uint16Array(tt),1)),z?ft.boundingSphere=z:(ft.computeBoundingSphere(),z=ft.boundingSphere);let Et=new Te(ft,u);Et.receiveShadow=!0,Et.castShadow=!1,N.addLevel(Et,G)}h.add(N)}return h}function lp(i,t,e){let n=xi(i.meta.board),s=i.water.map(a=>({z:a.z,rings:a.p})),o=(a,l)=>{for(let c of s)for(let u of c.rings)if($i([a,l],u))return c.z;return null},r=0;for(let a=0;a<n.length;a++){let l=n[a],c=n[(a+1)%n.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),h=Math.max(1,Math.ceil(u/1)),p=[(c[1]-l[1])/u,0,-(c[0]-l[0])/u];for(let d=0;d<h;d++){let f=d/h,y=(d+1)/h,g=[l[0]+(c[0]-l[0])*f,l[1]+(c[1]-l[1])*f],m=[l[0]+(c[0]-l[0])*y,l[1]+(c[1]-l[1])*y],M=t(g[0],g[1]),x=t(m[0],m[1]),_=(r+u*f)/8,v=(r+u*y)/8;e.soil.quad(I(g[0],g[1],ds),I(m[0],m[1],ds),I(m[0],m[1],x),I(g[0],g[1],M),[_,ds/8],[v,ds/8],[v,x/8],[_,M/8],p);let T=o(g[0]-p[0]*.5,g[1]-p[2]*.5),E=o(m[0]-p[0]*.5,m[1]-p[2]*.5);T!=null&&E!=null&&(T>M+.02||E>x+.02)&&e.waterCut.quad(I(g[0],g[1],M),I(m[0],m[1],x),I(m[0],m[1],E),I(g[0],g[1],T),[0,0],[1,0],[1,1],[0,1],p)}r+=u}for(let[a,l,c]of fs(n))e.soil.tri(I(n[a][0],n[a][1],ds),I(n[l][0],n[l][1],ds),I(n[c][0],n[c][1],ds),[0,0],[0,0],[0,0],[0,-1,0])}function cp(i,t){let e=[];for(let n of i.water){let s=new ks;for(let r of n.p){let a=xi(r);for(let[l,c,u]of fs(a))s.tri(I(a[l][0],a[l][1],n.z),I(a[c][0],a[c][1],n.z),I(a[u][0],a[u][1],n.z),[a[l][0]/20,a[l][1]/20],[a[c][0]/20,a[c][1]/20],[a[u][0]/20,a[u][1]/20],Je)}let o=new Te(s.geometry(),t);o.receiveShadow=!0,o.userData.water=n.id,e.push(o)}return e}function hp(i,t,e){for(let n of i.ret){let s=Math.min(n.zi,n.zo)-.3,o=Math.max(n.zi,n.zo)+.3,r=(n.a[0]+n.b[0])/2,a=(n.a[1]+n.b[1])/2,l=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1])+.05,c=Math.atan2(n.b[1]-n.a[1],n.b[0]-n.a[0]);if(n.tag==="cut"||n.tag==="rock"){t.cliff.box(r,a,s,o-.25,l,n.tag==="cut"?1.5:1.2,c,.18);continue}let u=n.o?n.o[0]:0,h=n.o?n.o[1]:0,p=n.t||.55;t.stone.box(r+u,a+h,s,o,l,p,c,.6),n.nocap||t.coping.box(r+u,a+h,o,o+.12,l,p+.15,c,.6)}for(let n of i.quay){let s=(n.a[0]+n.b[0])/2-n.n[0]*.4,o=(n.a[1]+n.b[1])/2-n.n[1]*.4,r=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1])+.06,a=Math.atan2(n.b[1]-n.a[1],n.b[0]-n.a[0]);if(n.zt-n.zw>4.5){t.cliff.box(s,o,n.zw-1.8,n.zt+.05,r,2,a,.18),t.wet.box(s-n.n[0]*.03,o-n.n[1]*.03,n.zw-.25,n.zw+.3,r,2.06,a,.4);continue}t.quay.box(s,o,n.zw-1.8,n.zt+.2,r,2,a,.4),t.quay.box(s-n.n[0]*.05,o-n.n[1]*.05,n.zt+.2,n.zt+.38,r,2.15,a,.4),t.wet.box(s-n.n[0]*.03,o-n.n[1]*.03,n.zw-.25,n.zw+.32,r,2.06,a,.4)}for(let n of i.stairs)if(n.box){let[s,o,r,a]=n.box,[l,c]=n.z,u=/ramp/.test(n.id),h=u?1:Math.max(2,Math.round(Math.abs(c-l)/.16));for(let p=0;p<h;p++){let d=p/h,f=(p+1)/h,y=u?null:l+(c-l)*(l<c?f:d);if(u){let M=(S,b)=>n.ax==="x"?[s+(r-s)*S,b?a:o]:[b?r:s,o+(a-o)*S],x=l,_=c,v=M(0,0),T=M(0,1),E=M(1,0),R=M(1,1);t.stone.quad(I(v[0],v[1],x),I(E[0],E[1],_),I(R[0],R[1],_),I(T[0],T[1],x),[0,0],[4,0],[4,2],[0,2],Je);continue}let g=y,m=Math.min(l,c)-.3;n.ax==="x"?t.stone.box(s+(r-s)*(d+f)/2,(o+a)/2,m,g,Math.abs(r-s)/h+.01,Math.abs(a-o),0,.8):t.stone.box((s+r)/2,o+(a-o)*(d+f)/2,m,g,Math.abs(r-s),Math.abs(a-o)/h+.01,0,.8)}}else if(n.line){let[s,o]=n.line,[r,a]=n.z,l=Math.hypot(o[0]-s[0],o[1]-s[1]),c=Math.atan2(o[1]-s[1],o[0]-s[0]);if(Math.abs(a-r)<.2){let h=e((s[0]+o[0])/2,(s[1]+o[1])/2);r>h+.5&&t.stone.box((s[0]+o[0])/2,(s[1]+o[1])/2,r-.4,r,l,n.w,c,.6);continue}let u=Math.max(2,Math.round(Math.abs(a-r)/.16));for(let h=0;h<u;h++){let p=(h+.5)/u,d=s[0]+(o[0]-s[0])*p,f=s[1]+(o[1]-s[1])*p,y=r+(a-r)*(r<a?(h+1)/u:h/u);t.stone.box(d,f,Math.min(r,a)-.3,y,l/u+.01,n.w,c,.8)}}for(let n of i.steps3){let s=e(n.at[0],n.at[1]),o=Math.abs(n.dz||.3);t.stone.box(n.at[0],n.at[1],s-.2,s+Math.min(.45,o),1.6,1.2,0,.8)}}function up(i,t){for(let e of i.bridges){let n=e.p,s=n.length,o=n.slice(1).reduce((a,l,c)=>a+Math.hypot(l[0]-n[c][0],l[1]-n[c][1]),0),r=0;for(let a=0;a+1<s;a++){let l=n[a],c=n[a+1],u=Math.hypot(c[0]-l[0],c[1]-l[1]),h=Math.atan2(c[1]-l[1],c[0]-l[0]),p=e.z[0]+(e.z[1]-e.z[0])*r/o,d=e.z[0]+(e.z[1]-e.z[0])*(r+u)/o;r+=u;let f=(l[0]+c[0])/2,y=(l[1]+c[1])/2,g=(p+d)/2,m=-Math.sin(h),M=Math.cos(h);if(e.k==="jetty"){let x=g,_=e.w/2-.35;t.plank.box(f,y,x-.22,x,u,e.w,h,1.2);for(let E of[-1,1])t.wood.box(f+m*E*_,y+M*E*_,x-.5,x-.22,u,.24,h,1);let v=Math.max(1,Math.round(u/2.2));for(let E=0;E<=v;E++){let R=E/v,S=l[0]+(c[0]-l[0])*R,b=l[1]+(c[1]-l[1])*R;for(let P of[-1,1])t.wood.cyl(S+m*P*_,b+M*P*_,e.bed,x-.22,.16,7,!1);t.wood.box(S,b,x-.62,x-.5,.2,e.w-.3,h,1)}let T=u-2.4;if(T>.5){let E=Math.max(1,Math.round(T/2)),R=T/u;for(let S of[-1,1]){let b=m*S*(e.w/2-.08),P=M*S*(e.w/2-.08);for(let N=0;N<=E;N++){let z=N/E*R;t.wood.box(l[0]+(c[0]-l[0])*z+b,l[1]+(c[1]-l[1])*z+P,x,x+.95,.14,.14,h,1)}t.wood.beam(I(l[0]+b,l[1]+P,x+.9),I(l[0]+(c[0]-l[0])*R+b,l[1]+(c[1]-l[1])*R+P,x+.9),.1,.1)}}for(let E of[-1,1])t.wood.cyl(c[0]-Math.cos(h)*.4+m*E*(e.w/2-.25),c[1]-Math.sin(h)*.4+M*E*(e.w/2-.25),x,x+.6,.15,7,!0);continue}if(e.k==="gallery"){t.wood.box(f,y,g-.35,g,u+.3,e.w,h,1);let x=Math.max(1,Math.round(u/2.6));for(let _=0;_<=x;_++)for(let v of[-1,1]){let T=_/x;t.red.cyl(l[0]+(c[0]-l[0])*T+m*v*(e.w/2-.2),l[1]+(c[1]-l[1])*T+M*v*(e.w/2-.2),g,g+2.7,.14,6,!1)}Ke(t,{c:[f,y],L:u+.4,D:e.w+.6,a:h,ze:g+2.8,top:g+3.6,ty:"gable",oh:.4,ohg:0,ends:["open","open"],ridgeDeco:!1})}else{t.stone.box(f,y,g-.6,g,u+.25,e.w,h,.6);for(let x of[-1,1])t.coping.box(f+m*x*(e.w/2-.12),y+M*x*(e.w/2-.12),g,g+.7,u+.25,.22,h,.6);if(g-2>-4)for(let x of[.15,.85])t.stone.box(l[0]+(c[0]-l[0])*x,l[1]+(c[1]-l[1])*x,g-2.6,g-.6,.9,e.w*.8,h,.6)}}}}function fp(i,t,e){let[n,s]=i.c,o=i.r,r=(p,d=Math.PI/8)=>Array.from({length:8},(f,y)=>[n+Math.cos(d+y*Math.PI/4)*p,s+Math.sin(d+y*Math.PI/4)*p]),a=r(o*.86),l=r(o*.7),c=r(o*.56);t.brick.prism(a,i.z,41.2,!0),cu(t,a,33.5,41.2,"hallU"),bi(t,a,41.9,1.6,.9),t.red.prism(l,41.2,47.6,!0),cu(t,l,41.4,47.6,"hallU"),bi(t,l,48.2,1.4,.8),t.red.prism(c,47.6,53.4,!0),cu(t,c,47.8,53.4,"hallU");let u=57.6,h=r(o*.56+1.5);for(let p=0;p<8;p++){let d=h[p],f=h[(p+1)%8];t.tile.tri(I(d[0],d[1],53.7),I(f[0],f[1],53.7),I(n,s,u),[0,0],[2,0],[1,3],Je),t.ridge.beam(I(d[0],d[1],53.85),I(n,s,u+.1),.3,.3)}return t.wood.cyl(n,s,u-.4,60,.45,8),dp(e,n,s,61.8,4.1)}function cu(i,t,e,n,s){let o=t.length;for(let r=0;r<o;r++){let a=t[r],l=t[(r+1)%o],c=Math.hypot(l[0]-a[0],l[1]-a[1]),u=[(l[1]-a[1])/c,0,-(l[0]-a[0])/c],h=.04,p=[a[0]+u[0]*h,a[1]+u[2]*h],d=[l[0]+u[0]*h,l[1]+u[2]*h];i[s].quad(I(p[0],p[1],e),I(d[0],d[1],e),I(d[0],d[1],n),I(p[0],p[1],n),[0,0],[1,0],[1,1],[0,1],u)}}function dp(i,t,e,n,s){let[o,r,a]=I(t,e,n),l=new $e;l.position.set(o,r,a);let c=(p,d,f,y,g)=>{let m=new Te(new yi(p,d,8,64),i);return m.rotation.set(f,y,g),m.castShadow=!0,l.add(m),m};c(s,s*.035,Math.PI/2,0,0),c(s,s*.035,0,0,0),c(s,s*.035,0,Math.PI/2,0),c(s*.92,s*.03,Math.PI/2+.41,0,.3),c(s*.86,s*.028,.6,.9,0);let u=new Te(new li(s*.2,20,14),i);l.add(u);let h=new Te(new qe(s*.03,s*.03,s*2.3,8),i);return h.rotation.z=.41,l.add(h),l.userData.spin=l.children[3],l}function pp(i,t,e,n){let[s,o]=i.c,r=i.w,a=i.z;t.stone.box(s,o,a-.3,a+.45,r+1.6,r+1.6,0,.7);for(let[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.red.cyl(s+l*r/2,o+c*r/2,a+.45,a+3.9,.26,10,!1);for(let[l,c]of[[[-1,-1],[1,-1]],[[1,-1],[1,1]],[[1,1],[-1,1]],[[-1,1],[-1,-1]]])t.wood.beam(I(s+l[0]*r/2,o+l[1]*r/2,a+3.75),I(s+c[0]*r/2,o+c[1]*r/2,a+3.75),.32,.45);Ke(t,{c:[s,o],L:r,D:r,a:0,ze:a+3.95,top:a+6.7,ty:"pyr",oh:1.1,lift:.55,sag:.45,ridgeDeco:!0}),t.wood.cyl(s,o,a+6.5,a+7.3,.2,6),n.add(dp(e,s,o,a+8.45,1.15)),t.coping.box(s,o,a+.45,a+.95,1.6,1.6,0,1)}function mp(i,t,e,n,s){for(let o of i.marks){let[r,a]=o.c,l=o.z;if(o.k==="statue"){t.stone.box(r,a,l-.2,l+.6,5,5,o.a,.7),t.stone.box(r,a,l+.6,l+3,2.2,2.2,o.a,.7),t.coping.box(r,a,l+3,l+3.3,2.6,2.6,o.a,.7);let c=n.bronze,u=new $e,[h,p,d]=I(r,a,l+3.3);u.position.set(h,p,d),u.rotation.y=-Math.PI/2;let f=new Te(new qe(.45,.85,2.5,12),c);f.position.y=1.25,u.add(f);let y=new Te(new qe(.42,.48,.9,12),c);y.position.y=2.9,u.add(y);let g=new Te(new li(.3,14,10),c);g.position.y=3.6,u.add(g);let m=new Te(new qe(.2,.3,.35,10),c);m.position.y=3.95,u.add(m);let M=new Te(new qe(.09,.09,.9,8),c);M.position.set(.5,2.7,.2),M.rotation.z=1.2,u.add(M),u.traverse(x=>{x.castShadow=!0}),e.add(u)}else if(o.k==="rocks"){let c=Sn(Math.floor(In(o.id)*1e6)),u=o.screen?9:14;for(let h=0;h<u;h++){let p=(c()-.5)*o.L*.8,d=(c()-.5)*o.D*.6,f=Math.cos(o.a),y=Math.sin(o.a),g=r+f*p-y*d,m=a+y*p+f*d,M=.8+c()*(o.screen?1.6:1.3),x=new io(M,0);x.scale(1,o.screen?1.9:1.2,.8);let _=new Te(x,n.rock),v=I(g,m,s(g,m)+M*.6);_.position.set(...v),_.rotation.set(c()*3,c()*3,c()*3),_.castShadow=_.receiveShadow=!0,e.add(_)}}else if(o.k==="pavilion-v6"){let c=Math.max(2.6,o.r-.3),u=Array.from({length:8},(d,f)=>[r+Math.cos(f*Math.PI/4+Math.PI/8)*c,a+Math.sin(f*Math.PI/4+Math.PI/8)*c]);t.stone.prism(un(u,.6),l-2.2,l+.3,!0);for(let d of u)t.red.cyl(d[0],d[1],l+.3,l+3.5,.18,8,!1);for(let d=0;d<8;d++){let f=u[d],y=u[(d+1)%8];t.wood.beam(I(f[0],f[1],l+3.4),I(y[0],y[1],l+3.4),.22,.3),t.red.beam(I(f[0],f[1],l+.85),I(y[0],y[1],l+.85),.1,.08)}let h=u.map(d=>[r+(d[0]-r)*1.42,a+(d[1]-a)*1.42]),p=o.top;for(let d=0;d<8;d++){let f=h[d],y=h[(d+1)%8],g=[(f[0]+y[0])/2,(f[1]+y[1])/2];t.tile.tri(I(f[0],f[1],l+3.6+.35),I(g[0],g[1],l+3.6),I(r,a,p),[0,0],[1,0],[.5,3],Je),t.tile.tri(I(g[0],g[1],l+3.6),I(y[0],y[1],l+3.6+.35),I(r,a,p),[1,0],[2,0],[.5,3],Je),t.ridge.beam(I(f[0],f[1],l+4.05),I(r,a,p+.1),.22,.22)}t.coping.cyl(r,a,p-.1,p+.7,.22,8)}else if(o.k==="xie"){t.stone.box(r,a,l-2,l+.3,o.L+1.2,o.D+1.2,o.a,.6);let c=Math.cos(o.a),u=Math.sin(o.a);for(let[h,p]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,-1],[0,1]])t.red.cyl(r+c*h*o.L/2-u*p*o.D/2,a+u*h*o.L/2+c*p*o.D/2,l+.3,l+3.6,.2,8,!1);Ke(t,{c:[r,a],L:o.L,D:o.D,a:o.a,ze:l+3.7,top:o.top,ty:"xs",oh:1,lift:.6,sag:.5,ridgeDeco:!0});for(let h of[-1,1])t.red.beam(I(r-c*o.L/2-u*h*o.D/2,a-u*o.L/2+c*h*o.D/2,l+.9),I(r+c*o.L/2-u*h*o.D/2,a+u*o.L/2+c*h*o.D/2,l+.9),.1,.1)}else if(o.k==="well"){t.stone.cyl(r,a,l-.2,l+.75,1,12),t.wallBody.cyl(r,a,l+.7,l+.78,.7,12);for(let c of[-1,1])t.wood.box(r+c*1.25,a,l,l+2.6,.22,.22,0,1);t.wood.box(r,a,l+2.4,l+2.6,2.8,.18,0,1),Ke(t,{c:[r,a],L:3.4,D:2.4,a:0,ze:l+2.7,top:l+3.5,ty:"gable",oh:.3,ohg:.3,ridgeDeco:!1})}else if(o.k==="watertower"){let c=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>[r+u*2.2,a+h*2.2]);for(let u of c)t.iron.beam(I(u[0],u[1],l),I(r+(u[0]-r)*.7,a+(u[1]-a)*.7,33.2),.35,.35);for(let u of[25.5,29.5])for(let h=0;h<4;h++){let p=c[h],d=c[(h+1)%4],f=1-.3*(u-l)/(33.2-l);t.iron.beam(I(r+(p[0]-r)*f,a+(p[1]-a)*f,u),I(r+(d[0]-r)*f,a+(d[1]-a)*f,u),.18,.18)}t.iron.cyl(r,a,33.2,33.6,3.2,16),t.brassG.cyl(r,a,33.6,38.4,2.9,20);for(let u of[34.8,36.4,37.8])t.iron.cyl(r,a,u,u+.18,2.96,20,!1);for(let u=0;u<14;u++){let h=u/14*Math.PI*2,p=(u+1)/14*Math.PI*2;t.iron.tri(I(r+Math.cos(h)*3.1,a+Math.sin(h)*3.1,38.4),I(r+Math.cos(p)*3.1,a+Math.sin(p)*3.1,38.4),I(r,a,40),[0,0],[1,0],[.5,1],Je)}}else if(o.k==="steelstair"){let u=[[-2.3,-2.3],[2.3,-2.3],[2.3,2.3],[-2.3,2.3]].map(([d,f])=>[r+d,a+f]);for(let d of u)t.iron.box(d[0],d[1],l,31.2,.25,.25,0,1);let h=l,p=0;for(;h<31;){let d=Math.min(31.2,h+2.4);t.iron.box(r,a+(p%2?2.3-.7:-2.3+.7),d-.12,d,2*2.3,1.4,0,1);let f=[r-2.3+.3,a+(p%2?-2.3+.7:2.3-.7)],y=[r+2.3-.3,a+(p%2?2.3-.7:-2.3+.7)];t.iron.beam(I(r-2.3+.4,a,h+.1),I(r+2.3-.4,a,d),1.1,.16),h=d,p++}}else if(o.k==="crane"){let u=[[-1.4,-1.4],[1.4,-1.4],[1.4,1.4],[-1.4,1.4]].map(([y,g])=>[r+y,a+g]),h=33.5;for(let y of u)t.iron.box(y[0],y[1],l,h,.3,.3,0,1);for(let y=l+2.5;y<h;y+=3)for(let g=0;g<4;g++){let m=u[g],M=u[(g+1)%4];t.iron.beam(I(m[0],m[1],y),I(M[0],M[1],y+3),.12,.12),t.iron.beam(I(m[0],m[1],y),I(M[0],M[1],y),.14,.14)}t.wood.box(r,a,h,h+2.4,3.6,3.2,0,1),Ke(t,{c:[r,a],L:4.2,D:3.8,a:0,ze:h+2.4,top:h+3.4,ty:"gable",oh:.3,ohg:.2,ridgeDeco:!1});let p=15,d=a+p;t.iron.beam(I(r,a-6,h+1),I(r,d,h+1),.9,1.1),t.iron.beam(I(r,a,h+4.6),I(r,d-1,h+1.4),.12,.12),t.iron.beam(I(r,a,h+4.6),I(r,a-6,h+1.4),.12,.12),t.iron.cyl(r,a,h+2.4,h+4.8,.18,6),t.stone.box(r,a-5.4,h+.2,h+2,1.8,1.6,0,1);let f=o.zw??0;t.iron.beam(I(r,d-.8,h+.5),I(r,d-.8,f+5.2),.05,.05),t.wood.box(r,d-.8,f+3.6,f+5,2.2,1.6,.3,1)}else if(o.k==="tanks"){let c=[[r-1.6,a-.6],[r+1.5,a-.9],[r,a+1.6]];for(let[u,h]of c){t.brassG.cyl(u,h,l+.4,l+3.6,1.05,16);for(let p=0;p<12;p++){let d=p/12*Math.PI*2,f=(p+1)/12*Math.PI*2;t.brassG.tri(I(u+Math.cos(d)*1.05,h+Math.sin(d)*1.05,l+3.6),I(u+Math.cos(f)*1.05,h+Math.sin(f)*1.05,l+3.6),I(u,h,l+4.3),[0,0],[1,0],[.5,1],Je)}t.iron.cyl(u,h,l+1.2,l+1.35,1.1,16,!1),t.iron.cyl(u,h,l+2.8,l+2.95,1.1,16,!1),t.iron.box(u,h,l,l+.4,2.4,2.4,0,1)}t.iron.beam(I(c[0][0],c[0][1],l+3),I(c[1][0],c[1][1],l+3),.2,.2),t.iron.beam(I(c[1][0],c[1][1],l+2.2),I(c[2][0],c[2][1],l+2.2),.2,.2)}}}function gp(i,t,e,n,s){let o=i.rail,r=i.meta.board,a=o.p.map(M=>M.slice()),l=M=>$i(M,r),c=a.findIndex(l);if(c>0){let M=a[c-1],x=a[c],_=0,v=1;for(let T=0;T<30;T++){let E=(_+v)/2;l([M[0]+(x[0]-M[0])*E,M[1]+(x[1]-M[1])*E])?v=E:_=E}a=[[M[0]+(x[0]-M[0])*v,M[1]+(x[1]-M[1])*v],...a.slice(c)]}let u=a.length-1;for(;u>0&&!l(a[u]);)u--;if(u<a.length-1){let M=a[u],x=a[u+1],_=0,v=1;for(let T=0;T<30;T++){let E=(_+v)/2;l([M[0]+(x[0]-M[0])*E,M[1]+(x[1]-M[1])*E])?_=E:v=E}a=[...a.slice(0,u+1),[M[0]+(x[0]-M[0])*_,M[1]+(x[1]-M[1])*_]]}let h=[a[0]];for(let M=0;M+1<a.length;M++){let x=a[M],_=a[M+1],v=Math.hypot(_[0]-x[0],_[1]-x[1]),T=Math.max(1,Math.round(v/1.5));for(let E=1;E<=T;E++)h.push([x[0]+(_[0]-x[0])*E/T,x[1]+(_[1]-x[1])*E/T])}let p=o.w,d=o.z,f=o.lo,y=i.station?i.station.p:null,g=M=>!!y&&$i(M,y),m=M=>{let x=h[Math.max(0,M-1)],_=h[Math.min(h.length-1,M+1)],v=Math.hypot(_[0]-x[0],_[1]-x[1])||1;return[(_[0]-x[0])/v,(_[1]-x[1])/v]};for(let M=0;M+1<h.length;M++){let x=h[M],_=h[M+1],v=m(M),T=m(M+1),E=[-v[1],v[0]],R=[-T[1],T[0]],S=(P,N,z,O)=>I(P[0]+N[0]*z,P[1]+N[1]*z,O);if(!(g(x)&&g(_))){for(let P of[-1,1])t.girder.quad(S(x,E,P*p/2,f),S(_,R,P*p/2,f),S(_,R,P*p/2,d-.2),S(x,E,P*p/2,d-.2),[M*1.5/4,0],[(M+1)*1.5/4,0],[(M+1)*1.5/4,.55],[M*1.5/4,.55],[E[0]*P,0,E[1]*P]);t.girder.quad(S(x,E,-p/2,f),S(_,R,-p/2,f),S(_,R,p/2,f),S(x,E,p/2,f),[0,0],[1,0],[1,1],[0,1],[0,-1,0]);for(let P of[-1,1])t.iron.beam(S(x,E,P*(p/2-.12),d+1),S(_,R,P*(p/2-.12),d+1),.14,.12),t.iron.beam(S(x,E,P*(p/2-.12),d+.45),S(_,R,P*(p/2-.12),d+.45),.06,.06),M%2===0&&t.iron.beam(S(x,E,P*(p/2-.12),d-.2),S(x,E,P*(p/2-.12),d+1),.11,.11)}t.deck.quad(S(x,E,-p/2,d-.2),S(_,R,-p/2,d-.2),S(_,R,p/2,d-.2),S(x,E,p/2,d-.2),[0,0],[1,0],[1,1],[0,1],Je),t.ballast.quad(S(x,E,-1.7,d+.05),S(_,R,-1.7,d+.05),S(_,R,1.7,d+.05),S(x,E,1.7,d+.05),[0,0],[1,0],[1,1],[0,1],Je);for(let P of[-1,1])t.ballast.quad(S(x,E,P*1.7,d-.2),S(_,R,P*1.7,d-.2),S(_,R,P*1.7,d+.05),S(x,E,P*1.7,d+.05),[0,0],[1,0],[1,.2],[0,.2],[E[0]*P,0,E[1]*P]);for(let P of[.25,.75]){let N=[x[0]+(_[0]-x[0])*P,x[1]+(_[1]-x[1])*P],z=Math.atan2(v[1],v[0])+Math.PI/2;t.sleeper.box(N[0],N[1],d+.05,d+.2,2.6,.24,z,1)}for(let P of[-.72,.72])t.rail.beam(S(x,E,P,d+.28),S(_,R,P,d+.28),.09,.16)}for(let M of[0,h.length-1]){if(M===h.length-1&&y)continue;let x=h[M],_=m(M),v=[-_[1],_[0]],T=M===0?-1:1,E=[_[0]*T*.02,_[1]*T*.02],R=[x[0]+v[0]*p/2+E[0],x[1]+v[1]*p/2+E[1]],S=[x[0]-v[0]*p/2+E[0],x[1]-v[1]*p/2+E[1]],b=[_[0]*T,0,_[1]*T],[P,N]=T>0?[S,R]:[R,S];t.girder.quad(I(P[0],P[1],f),I(N[0],N[1],f),I(N[0],N[1],d+.05),I(P[0],P[1],d+.05),[0,0],[2,0],[2,.55],[0,.55],b)}for(let M of i.piers){if(!$i(M.at,r))continue;let x=M.a,_=[-Math.sin(x),Math.cos(x)];if(M.k==="single"){let[v,T,E]=M.cols[0];t.pier.box(v,T,E-.4,f-1,1.5,1.5,x,.5),t.pier.box(v,T,f-1.4,f,2,p-.4,x,.5),t.stone.box(v,T,E-.4,E+.8,2.4,2.4,x,.7)}else{for(let[P,N,z]of M.cols)t.pier.box(P,N,z-.4,f-1.2,.95,.95,x,.5),t.stone.box(P,N,z-.4,z+.8,1.8,1.8,x,.7);let[v,T,E]=M.cols[0],[R,S,b]=M.cols[1];t.pier.box(M.at[0],M.at[1],f-1.3,f,1.4,p+1.2,x,.5),t.iron.beam(I(v,T,E+2),I(R,S,f-1.5),.25,.25),t.iron.beam(I(R,S,b+2),I(v,T,f-1.5),.25,.25)}}if(i.station){let M=i.station,x=xi(M.p),_=M.z,v=M.deck-.2,T=1e9,E=1e9,R=-1e9,S=-1e9;for(let rt of x)T=Math.min(T,rt[0]),E=Math.min(E,rt[1]),R=Math.max(R,rt[0]),S=Math.max(S,rt[1]);let b={x0:R-3.2,x1:R+2.8,y0:E+1.6,y1:E+14.4},P=(rt,it)=>rt>b.x0-.05&&it>b.y0-.05&&it<b.y1+.05;t.stationW.prism(x,_-.4,v-.3,!1),t.stone.prism(un(x,.22),_-.4,_+.9,!0);let N=(rt,it)=>Math.max(1,Math.round(Math.hypot(it[0]-rt[0],it[1]-rt[1])/5));for(let rt=0;rt<x.length;rt++){let it=x[rt],ct=x[(rt+1)%x.length],J=Math.hypot(ct[0]-it[0],ct[1]-it[1]),st=[(ct[1]-it[1])/J,0,-(ct[0]-it[0])/J],ht=.03,Dt=[it[0]+st[0]*ht,it[1]+st[2]*ht],Ft=[ct[0]+st[0]*ht,ct[1]+st[2]*ht];for(let[xt,At]of[[_+.9,_+5.9],[_+6.5,v-.6]])t.station.quad(I(Dt[0],Dt[1],xt),I(Ft[0],Ft[1],xt),I(Ft[0],Ft[1],At),I(Dt[0],Dt[1],At),[0,0],[N(it,ct),0],[N(it,ct),1],[0,1],st);let Tt=N(it,ct),Gt=Math.atan2(ct[1]-it[1],ct[0]-it[0]),q=st[0],dt=st[2];for(let xt=0;xt<=Tt;xt++){let At=xt/Tt,Lt=it[0]+(ct[0]-it[0])*At+q*.16,Qt=it[1]+(ct[1]-it[1])*At+dt*.16;P(Lt-q*.2,Qt-dt*.2)&&Math.abs(Lt-R)<.6||t.coping.box(Lt,Qt,_+.9,v-.6,xt===0||xt===Tt?1.1:.7,.34,Gt,.5)}}t.coping.prism(un(x,.5),v-.6,v-.3,!0,!0),t.paving.prism(x,v-.3,v,!0),bi(t,x,_+6.2,1.4,.6,.15);for(let rt=0;rt<x.length;rt++){let it=x[rt],ct=x[(rt+1)%x.length],J=Math.hypot(ct[0]-it[0],ct[1]-it[1]),st=(ct[1]-it[1])/J,ht=-(ct[0]-it[0])/J,Dt=Math.atan2(ct[1]-it[1],ct[0]-it[0]),Ft=Math.abs(it[0]-R)<.01&&Math.abs(ct[0]-R)<.01?[[E,b.y0],[b.y1,S]]:null;if(Ft)for(let[Tt,Gt]of Ft)Gt-Tt>.3&&t.coping.box(R-st*.15,(Tt+Gt)/2,v-.05,v+.9,Gt-Tt,.3,Math.PI/2,.6);else t.coping.box((it[0]+ct[0])/2-st*.15,(it[1]+ct[1])/2-ht*.15,v-.05,v+.9,J,.3,Dt,.6)}{let rt=v+4.6,it=(b.y0+b.y1)/2,ct=b.x1;t.wallBody.prism(xi([[b.x0,b.y0],[b.x1,b.y0],[b.x1,b.y1],[b.x0,b.y1]]),_-.4,rt,!0),t.stone.prism(xi([[b.x0-.2,b.y0-.2],[b.x1+.2,b.y0-.2],[b.x1+.2,b.y1+.2],[b.x0-.2,b.y1+.2]]),_-.4,_+1,!0);for(let Tt of[b.y0,b.y1])t.coping.box(ct-.25,Tt,_+1,rt,.75,.75,0,.5);t.coping.box((b.x0+b.x1)/2,it,v-.6,v-.2,b.x1-b.x0+.9,b.y1-b.y0+.9,0,.5),Ke(t,{c:[(b.x0+b.x1)/2,it],L:b.y1-b.y0,D:b.x1-b.x0,a:Math.PI/2,ze:rt,top:rt+3,ty:"xs",oh:1,lift:.5,sag:.55,ridgeDeco:!0}),t.coping.box(ct+.12,it,_,_+5.4,4.9,.26,Math.PI/2,.5),t.red.box(ct+.27,it,_+.05,_+4.5,3.5,.06,Math.PI/2,.5),t.brassG.box(ct+.31,it,_+.05,_+4.5,.08,.04,Math.PI/2,1);for(let Tt of[-1,1])for(let Gt=0;Gt<4;Gt++)for(let q=0;q<2;q++)t.brassG.box(ct+.31,it+Tt*(.55+q*.75),_+1+Gt*.9,_+1.12+Gt*.9,.12,.05,Math.PI/2,1);for(let Tt of[-1,1])t.red.cyl(ct+2.4,it+Tt*2.9,_,_+4.9,.2,10,!1),t.stone.box(ct+2.4,it+Tt*2.9,_-.3,_+.45,.7,.7,0,.6);t.wood.beam(I(ct+2.4,it-3.1,_+4.75),I(ct+2.4,it+3.1,_+4.75),.3,.35),Ke(t,{c:[ct+1.5,it],L:7.4,D:3.2,a:Math.PI/2,ze:_+4.95,top:_+6,ty:"xs",oh:.45,lift:.3,sag:.55,ridgeDeco:!1}),t.brassG.box(ct+.06,it,_+6.55,_+7.75,5.4,.1,Math.PI/2,1),t.ridge.box(ct+.1,it,_+6.65,_+7.65,5.1,.1,Math.PI/2,1);for(let Tt of[-1.6,-.55,.55,1.6])t.brassG.box(ct+.16,it+Tt,_+6.9,_+7.4,.62,.04,Math.PI/2,1);for(let Tt of[-1,1])t.coping.box(ct+.06,it+Tt*3.6,_+8.2,_+11,1.5,.12,Math.PI/2,.5),t.ridge.box(ct+.1,it+Tt*3.6,_+8.4,_+10.8,1.1,.1,Math.PI/2,.5);let J=new ke({color:"#efe6d2",roughness:.6}),st=new $e;{let[Tt,Gt,q]=I(ct+.12,it,_+9.6);st.position.set(Tt,Gt,q)}let ht=new Te(new qe(1,1,.14,32),J);ht.rotation.z=Math.PI/2,st.add(ht);let Dt=new Te(new yi(1.02,.1,8,32),n.brass);Dt.rotation.y=Math.PI/2,st.add(Dt);let Ft=(Tt,Gt)=>{let q=new Te(new nn(.05,Tt,.07),n.ironM);q.geometry.translate(0,Tt/2,0),q.position.x=.09,q.rotation.x=Gt,st.add(q)};Ft(.55,-.9),Ft(.82,.35),st.traverse(Tt=>{Tt.castShadow=!0,Tt.receiveShadow=!0}),e.add(st),t.red.box(b.x0-.04,b.y0+4.1,v+.95,v+3.6,2.2,.08,Math.PI/2,.5),t.coping.box(b.x0-.02,b.y0+4.1,v+.95,v+3.9,2.8,.06,Math.PI/2,.5)}let z=h.length-1,O=h[z],G=m(z),j=[-G[1],G[0]],et=Math.atan2(G[1],G[0]),tt=(rt,it)=>[O[0]+G[0]*rt+j[0]*it,O[1]+G[1]*rt+j[1]*it],mt=(rt,it,ct,J,st,ht,Dt,Ft=.5)=>{let Tt=tt((it+ct)/2,(J+st)/2);rt.box(Tt[0],Tt[1],ht,Dt,ct-it,st-J,et,Ft)},Q=v+.95,ft=-30.6,Et=.6;mt(t.paving,ft,Et,2.1,8.6,v,Q),mt(t.paving,ft,Et,-7.6,-2.1,v,Q),mt(t.paving,ft,-23.5,-10.4,-7.6,v,Q),mt(t.paving,Et,3.4,-7.6,8.6,v,Q);for(let rt of[-1,1])mt(t.coping,ft,Et,rt>0?2.1:-2.5,rt>0?2.5:-2.1,Q,Q+.04,1);for(let rt of[-1,1]){for(let st=ft+1.2;st<=-1;st+=5.3){let ht=tt(st,rt*5.8);t.red.cyl(ht[0],ht[1],Q,v+5.2,.17,8,!1)}let it=tt(ft+1.2,rt*5.8),ct=tt(-1-(-1-ft-1.2)%5.3,rt*5.8);t.wood.beam(I(it[0],it[1],v+5.05),I(ct[0],ct[1],v+5.05),.24,.3);let J=tt((ft+.2)/2-.2,rt*4.3);Ke(t,{c:J,L:-ft-.6,D:4.6,a:et,ze:v+5.2,top:v+6.4,ty:"xs",oh:.55,lift:.35,sag:.55,ridgeDeco:!0})}t.iron.box(O[0]+G[0]*.2,O[1]+G[1]*.2,d,d+1.1,.5,2.6,et,1);for(let rt of[-.85,.85]){let it=O[0]-G[0]*.15+j[0]*rt,ct=O[1]-G[1]*.15+j[1]*rt;t.brassG.box(it,ct,d+.55,d+.95,.35,.42,et,1)}{let st=v+4.6,ht=[tt(-27,8.6),tt(-4,8.6),tt(-4,16.2),tt(-27,16.2)];for(let Dt=0;Dt<4;Dt++){let Ft=ht[Dt],Tt=ht[(Dt+1)%4],Gt=Math.hypot(Tt[0]-Ft[0],Tt[1]-Ft[1]),q=[(Tt[1]-Ft[1])/Gt,0,-(Tt[0]-Ft[0])/Gt],dt=Math.max(1,Math.round(Gt/4.2));t.hallU.quad(I(Ft[0],Ft[1],v),I(Tt[0],Tt[1],v),I(Tt[0],Tt[1],st),I(Ft[0],Ft[1],st),[0,0],[dt,0],[dt,1],[0,1],[q[0],0,q[2]].map(xt=>-xt).map(xt=>-xt))}Ke(t,{c:tt(-31/2,(8.6+16.2)/2),L:23,D:16.2-8.6,a:et,ze:st,top:v+8.2,ty:"xs",oh:1,lift:.6,sag:.5,ridgeDeco:!0})}{let st=v+4,ht=[tt(-15.5,-13),tt(-2.5,-13),tt(-2.5,-7.6),tt(-15.5,-7.6)];for(let Dt=0;Dt<4;Dt++){let Ft=ht[Dt],Tt=ht[(Dt+1)%4],Gt=Math.hypot(Tt[0]-Ft[0],Tt[1]-Ft[1]),q=[(Tt[1]-Ft[1])/Gt,0,-(Tt[0]-Ft[0])/Gt],dt=Math.max(1,Math.round(Gt/3.6));t.upP.quad(I(Ft[0],Ft[1],v),I(Tt[0],Tt[1],v),I(Tt[0],Tt[1],st),I(Ft[0],Ft[1],st),[0,0],[dt,0],[dt,1],[0,1],q)}Ke(t,{c:tt((-15.5+-2.5)/2,(-13+-7.6)/2),L:-2.5- -15.5,D:-7.6- -13,a:et,ze:st,top:v+6.6,ty:"xs",oh:.8,lift:.5,sag:.5,ridgeDeco:!0})}{let rt=[[ft-1.5,4,-14.5,18]],it=(J,st)=>{if(!$i([J,st],un(x,-2.4))||J>b.x0-2.5&&st>b.y0-2.5&&st<b.y1+2.5)return!1;let ht=(J-O[0])*G[0]+(st-O[1])*G[1],Dt=(J-O[0])*j[0]+(st-O[1])*j[1];return!rt.some(([Ft,Tt,Gt,q])=>ht>Ft&&ht<Tt&&Dt>Gt&&Dt<q)},ct=[];for(let J=E+2.5;J<=S-2.5;J+=1)for(let st=T+2.5;st<=R-2.5;st+=1)it(st,J)&&ct.every(ht=>Math.hypot(ht[0]-st,ht[1]-J)>7.5)&&ct.push([st,J]);for(let[J,st]of ct)t.stone.box(J,st,v,v+.6,1.9,1.9,et,.6),i.trees.push({at:[J,st],r:1.7,sp:"green",z:v+.55})}}for(let M of i.train){let[x,_]=M.a,[v,T]=M.b,E=Math.hypot(v-x,T-_),R=Math.atan2(T-_,v-x),S=(x+v)/2,b=(_+T)/2,P=d+.36,N=new $e,[z,O,G]=I(S,b,P);N.position.set(z,O,G),N.rotation.y=-R;let j=(et,tt,mt,Q,ft,Et=0,rt=0,it=0)=>{let ct=new Te(et,tt);return ct.position.set(mt,Q,ft),ct.rotation.set(Et,rt,it),ct.castShadow=!0,ct.receiveShadow=!0,N.add(ct),ct};j(new nn(E,.5,2.6),n.ironM,0,.75,0);for(let et of[-1,1])for(let tt of[-1,1])for(let mt of[-.9,.9])j(new qe(.5,.5,.25,14),n.ironM,et*(E/2-2.2)+tt*.9,.5,mt*.95,Math.PI/2,0,0);if(M.k==="loco"){j(new qe(1.25,1.25,E*.62,20),n.ironM,-E*.12,2.25,0,0,0,Math.PI/2);for(let et of[-.35,-.12,.1])j(new qe(1.29,1.29,.22,20),n.brass,et*E,2.25,0,0,0,Math.PI/2);j(new qe(.42,.32,1.6,12),n.ironM,-E*.36,4,0),j(new qe(.5,.5,.25,12),n.ironM,-E*.36,4.85,0),j(new li(.55,14,10),n.brass,-E*.08,3.5,0),j(new nn(E*.3,3,2.9),n.cab,E*.33,2.5,0),j(new nn(E*.34,.25,3.2),n.ironM,E*.33,4.1,0),j(new nn(.4,.9,2.4),n.brass,-E*.5+.2,1.3,0),j(new Fr(.42,16),n.lampW,-E*.43-.02,2.3,0,0,-Math.PI/2,0)}else j(new nn(E-.4,2.7,2.9),M===i.train[1]?n.coachA:n.coachB,0,2.35,0),j(new nn(E-.6,.85,2.94),n.winBand,0,2.75,0),j(new qe(2.2,2.2,E-.2,24,1,!1,Math.PI/2-.733,1.466),n.ironM,0,2.07,0,0,0,Math.PI/2);e.add(N)}}var op={ginkgo:{col:["#e0ac33","#d4962a","#e9c049","#c98426"],h:1.45,trunk:3},green:{col:["#6f8a48","#5d7a3e","#7e9850"],h:1.2,trunk:2.6},pine:{col:["#3f5b3b","#365234","#4a6644"],h:.85,trunk:4.2},maple:{col:["#b8572e","#c86a33","#a3442a"],h:1.15,trunk:2.6},bamboo:{col:["#6f8f45","#7d9b4c","#5f7e3c"],h:3.2,trunk:.6},willow:{col:["#93a85a","#a1b466","#84994f"],h:1.5,trunk:2.2}};function hu(i,t,e,n=1){let s=Sn(i),o=[],r=e||(t?5:6);for(let h=0;h<r;h++){let p=new Wi((.55+s()*.25)*(n?1:1.12),n),d=s()*Math.PI*2,f=h===0?0:.45+s()*.25;p.translate(Math.cos(d)*f,(t?.15:.35)*(s()-.3)+(h===0?.25:0),Math.sin(d)*f),o.push(p)}let a=o.map(h=>{let p=lu(h.index?h.toNonIndexed():h);p.deleteAttribute("normal"),p.deleteAttribute("uv");let d=lu(p),f=d.attributes.position;for(let y=0;y<f.count;y++){let g=f.getX(y),m=f.getY(y),M=f.getZ(y),x=1+(Math.sin(g*7.1+m*3.3)+Math.cos(M*5.7-m*4.1))*.07;f.setXYZ(y,g*x,m*x,M*x)}return d.computeVertexNormals(),d.toNonIndexed()}),l=[],c=[];for(let h of a)l.push(...h.attributes.position.array),c.push(...h.attributes.normal.array);let u=new We;return u.setAttribute("position",new Ue(l,3)),u.setAttribute("normal",new Ue(c,3)),u}function yp(i,t,e,n){let s={},o=i.trees.map(z=>({...z})).concat(n||[]);for(let z of o)(s[z.sp]=s[z.sp]||[]).push(z);let r=new qe(.16,.26,1,6);r.translate(0,.5,0);let a=new ke({color:"#5b4331",roughness:.9}),l=hu(7,!1,4,0),c=new ke({color:"#ffffff",roughness:.9,metalness:0}),u=120,h=110,p=260,d=new Map,f={},y={},g={},m=[];for(let z in s){let O=s[z],G=op[z]||op.green;f[z]=hu(z.length*97+13,z==="pine"),y[z]=hu(z.length*97+13,z==="pine",0,0),g[z]=new ke({color:"#ffffff",roughness:.88,metalness:0});let j=new Cn,et=new nt,tt=new nt,mt=new Ce;O.forEach(Q=>{let ft=Q.r,Et=Sn(Math.floor(In(Q.at.join(","))*1e6)+1),rt=Q.z??e(Q.at[0],Q.at[1]),it=!!Q.big,ct=it?Q.trunk:G.trunk*(.8+Et()*.4)*(ft/2.6),[J,st,ht]=I(Q.at[0],Q.at[1],rt);j.setFromAxisAngle(new nt(0,1,0),Et()*Math.PI*2),z==="bamboo"?(et.set(ft*.42,ft*1.35*(.85+Et()*.3),ft*.42),tt.set(J,st+ft*1.25,ht)):(et.set(ft,ft*G.h*(.9+Et()*.2),ft),tt.set(J,st+ct+ft*G.h*.55,ht));let Dt={sp:z,pc:tt.clone(),qc:j.clone(),sc:et.clone(),f:1,tf:1};et.set(it?2.2:z==="bamboo"?.35:1,z==="bamboo"?ft*1.2:ct+ft*.5,it?2.2:z==="bamboo"?.35:1),tt.set(J,st-.2,ht),Dt.pt=tt.clone(),Dt.st=et.clone(),mt.set(G.col[Math.floor(Et()*G.col.length)]),mt.multiplyScalar(.92+Et()*.16),Dt.col=mt.clone(),it||(Object.assign(Dt,{X:Dt.pc.x,Z:Dt.pc.z,yb:Dt.pc.y-1*Dt.sc.y,yt:Dt.pc.y+1.25*Dt.sc.y,hr:1.55*Dt.sc.x}),m.push(Dt));let Ft=Math.floor(J/u)*1e3+Math.floor(ht/u),Tt=d.get(Ft);Tt||d.set(Ft,Tt={near:{},all:[],x:0,y:0,z:0}),(Tt.near[z]=Tt.near[z]||[]).push(Dt),Tt.all.push(Dt),Tt.x+=J,Tt.y+=st,Tt.z+=ht})}let M=[],x=new Ze;for(let z of d.values()){let O=z.all.length,G=new nt(z.x/O,z.y/O,z.z/O),j=new Xo;j.position.copy(G),j.hysteresis=.08;let et=new $e;et.position.copy(G).negate();let tt=new $e;tt.position.copy(G).negate();for(let Q in z.near){let ft=z.near[Q],Et=new gi(f[Q],g[Q],ft.length),rt=new gi(r,a,ft.length);Et.castShadow=!0,Et.receiveShadow=!0,rt.castShadow=!0,ft.forEach((J,st)=>{J.im=Et,J.it=rt,J.i=st,Et.setMatrixAt(st,x.compose(J.pc,J.qc,J.sc)),rt.setMatrixAt(st,x.compose(J.pt,J.qc,J.st)),Et.setColorAt(st,J.col)}),Et.instanceMatrix.needsUpdate=!0,Et.instanceColor&&(Et.instanceColor.needsUpdate=!0),Et.computeBoundingSphere(),rt.computeBoundingSphere(),et.add(Et,rt);let it=new gi(y[Q],g[Q],ft.length),ct=new gi(r,a,ft.length);it.castShadow=!0,it.receiveShadow=!0,ct.castShadow=!0;for(let J=0;J<ft.length;J++)Et.getMatrixAt(J,x),it.setMatrixAt(J,x),rt.getMatrixAt(J,x),ct.setMatrixAt(J,x),it.setColorAt(J,ft[J].col);it.instanceMatrix.needsUpdate=!0,it.instanceColor&&(it.instanceColor.needsUpdate=!0),it.computeBoundingSphere(),ct.computeBoundingSphere(),tt.add(it,ct)}let mt=new gi(l,c,O);mt.position.copy(G).negate(),mt.castShadow=!0,mt.receiveShadow=!0,z.all.forEach((Q,ft)=>{mt.setMatrixAt(ft,x.compose(Q.pc,Q.qc,Q.sc)),mt.setColorAt(ft,Q.col)}),mt.instanceMatrix.needsUpdate=!0,mt.instanceColor&&(mt.instanceColor.needsUpdate=!0),mt.computeBoundingSphere(),j.addLevel(et,0),j.addLevel(tt,h),j.addLevel(mt,p),t.add(j),M.push(j)}let _=10,v=(z,O)=>z*100003+O,T=new Map;for(let z of m){let O=z.hr+1;for(let G=Math.floor((z.X-O)/_);G<=Math.floor((z.X+O)/_);G++)for(let j=Math.floor((z.Z-O)/_);j<=Math.floor((z.Z+O)/_);j++){let et=v(G,j);T.has(et)||T.set(et,[]),T.get(et).push(z)}}let E=new Ze,R=new nt,S=new nt,b=new nt(1e9,0,0),P=new Set,N=z=>{let O=Math.max(z.f,1e-4);R.copy(z.sc).multiplyScalar(O),E.compose(z.pc,z.qc,R),z.im.setMatrixAt(z.i,E),R.copy(z.st).multiplyScalar(O),E.compose(z.pt,z.qc,R),z.it.setMatrixAt(z.i,E)};return M.fade=(z,O,G,j)=>{let et=new Set;if(O){let Et=z.distanceTo(O),rt=Math.max(1,Math.ceil(Et/.5));for(let it=0;it<=rt;it++){let ct=it/rt,J=z.x+(O.x-z.x)*ct,st=z.y+(O.y-z.y)*ct,ht=z.z+(O.z-z.z)*ct;for(let Dt of T.get(v(Math.floor(J/_),Math.floor(ht/_)))||[])!et.has(Dt)&&st>Dt.yb-.7&&st<Dt.yt+.7&&Math.hypot(J-Dt.X,ht-Dt.Z)<Dt.hr+.7&&et.add(Dt)}j.getWorldDirection(S);for(let it=Math.floor((z.x-6)/_);it<=Math.floor((z.x+6)/_);it++)for(let ct=Math.floor((z.z-6)/_);ct<=Math.floor((z.z+6)/_);ct++)for(let J of T.get(v(it,ct))||[]){if(et.has(J))continue;let st=J.X-z.x,ht=J.Z-z.z,Dt=Math.max(J.yb,Math.min(J.yt,z.y));if(Math.hypot(st,ht)-J.hr>4||Math.abs(Dt-z.y)>4)continue;let Ft=(J.yb+J.yt)/2-z.y,Tt=Math.hypot(st,Ft,ht)||1;(st*S.x+Ft*S.y+ht*S.z)/Tt>-.2&&et.add(J)}}let tt=z.distanceTo(b)>3;b.copy(z);let mt=tt?1:G*5,Q=tt?1:G*2.5,ft=new Set;for(let Et of et)Et.tf=0,P.add(Et);for(let Et of P){et.has(Et)||(Et.tf=1);let rt=Et.f;Et.f=Et.tf<Et.f?Math.max(Et.tf,Et.f-mt):Math.min(Et.tf,Et.f+Q),Et.f!==rt&&(N(Et),ft.add(Et.im),ft.add(Et.it)),Et.f===1&&Et.tf===1&&P.delete(Et)}for(let Et of ft)Et.instanceMatrix.needsUpdate=!0;return et.size},M}var Bs=Math.PI*2,Os=(i,t,e,n,s=0)=>Array.from({length:n},(o,r)=>[i+Math.cos(s+r*Bs/n)*e,t+Math.sin(s+r*Bs/n)*e]),xn=(i,t,e,n,s)=>{let o=Math.cos(s),r=Math.sin(s);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([a,l])=>[i+o*a*e/2-r*l*n/2,t+r*a*e/2+o*l*n/2])},Si=(i,t,e)=>{let n=Math.cos(e),s=Math.sin(e);return(o,r)=>[i+n*o-s*r,t+s*o+n*r]};function ps(i,t,e,n,s,o=3.6,r=0,a=1){let l=xi(e),c=l.length;for(let u=0;u<c;u++){let h=l[u],p=l[(u+1)%c],d=Math.hypot(p[0]-h[0],p[1]-h[1]);if(d<.05)continue;let f=[(p[1]-h[1])/d,0,-(p[0]-h[0])/d],y=o?Math.max(1,Math.round(d/o)):1;i[t].quad(I(h[0],h[1],n),I(p[0],p[1],n),I(p[0],p[1],s),I(h[0],h[1],s),[0,r],[y,r],[y,a],[0,a],f)}}function bc(i,t,e,n,s,o,r,a=14,l=!0){for(let c=0;c<a;c++){let u=c/a*Bs,h=(c+1)/a*Bs,p=(u+h)/2,d=(f,y,g)=>I(t+Math.cos(f)*y,e+Math.sin(f)*y,g);i.quad(d(u,o,n),d(h,o,n),d(h,r,s),d(u,r,s),[c/a*4,n/2],[(c+1)/a*4,n/2],[(c+1)/a*4,s/2],[c/a*4,s/2],[Math.cos(p),(o-r)/Math.max(.1,s-n),Math.sin(p)]),l&&i.tri(I(t,e,s),d(u,r,s),d(h,r,s),[0,0],[0,0],[0,0],Je)}}function uu(i,t,e,n,s,o,r=1.4,a=.35){let l=t.map(u=>[e+(u[0]-e)*r,n+(u[1]-n)*r]),c=l.length;for(let u=0;u<c;u++){let h=l[u],p=l[(u+1)%c],d=[(h[0]+p[0])/2,(h[1]+p[1])/2];i.tile.tri(I(h[0],h[1],s+a),I(d[0],d[1],s),I(e,n,o),[0,0],[1,0],[.5,3],Je),i.tile.tri(I(d[0],d[1],s),I(p[0],p[1],s+a),I(e,n,o),[1,0],[2,0],[.5,3],Je),i.tile.tri(I(h[0],h[1],s+a-.02),I(e,n,s+.4),I(p[0],p[1],s+a-.02),[0,0],[1,0],[.5,1],[0,-1,0]),i.ridge.beam(I(h[0],h[1],s+a+.12),I(e,n,o+.1),.22,.22)}}function cr(i,t,e,n=1,s=1.3,o="wood",r=!0){let a=t.length;for(let l=0;l<(r?a:a-1);l++){let c=t[l],u=t[(l+1)%a],h=Math.hypot(u[0]-c[0],u[1]-c[1]),p=Math.max(1,Math.round(h/s));for(let d=0;d<p;d++){let f=d/p;i[o].cyl(c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f,e,e+n,.06,4,!1)}i[o].beam(I(c[0],c[1],e+n),I(u[0],u[1],e+n),.11,.11)}}function _p(i,t,e,n,s,o,r=1.1){let a=t.cream,l=new $e,[c,u,h]=I(e,n,s);l.position.set(c,u,h),l.rotation.y=-o;let p=new Te(new qe(r,r,.14,28),a);p.rotation.z=Math.PI/2,l.add(p);let d=new Te(new yi(r+.03,.1,6,28),t.brass);d.rotation.y=Math.PI/2,l.add(d);let f=(y,g)=>{let m=new Te(new nn(.05,y,.07),t.ironM);m.geometry.translate(0,y/2,0),m.position.x=.09,m.rotation.x=g,l.add(m)};f(r*.55,-.9),f(r*.82,.35),l.traverse(y=>{y.castShadow=!0}),i.add(l)}function xp(i,t,e,n,s,o,r){let a=i.marks.find(l=>l.k==="slipship");for(let l of i.marks){let[c,u]=l.c,h=l.z,p=l.a||0,d=Si(c,u,p);switch(l.k){case"pavilion":{let f=l.sides||8,y=Math.max(2.2,l.r-.3),g=p+Math.PI/f,m=Os(c,u,y,f,g),M=l.stone?"coping":"red",x=l.stone?"coping":"wood",_=h+3.45,v=Math.max(l.top,_+2.2);t.stone.prism(un(m,.6),Math.min(h,s(c,u))-1.2,h+.3,!0);for(let T of m)l.stone?t.coping.box(T[0],T[1],h+.3,h+3.3,.42,.42,g,1):t.red.cyl(T[0],T[1],h+.3,h+3.5,.18,8,!1);for(let T=0;T<f;T++){let E=m[T],R=m[(T+1)%f];t[x].beam(I(E[0],E[1],h+3.3),I(R[0],R[1],h+3.3),.24,.32),l.stone||t.red.beam(I(E[0],E[1],h+.85),I(R[0],R[1],h+.85),.1,.08)}uu(t,m,c,u,_,v,f===4?1.55:1.42,f===4?.45:.35),t.coping.cyl(c,u,v-.1,v+.7,.22,8),l.stele&&(t.stone.box(c,u,h+.3,h+.8,1.4,.9,p,1),t.coping.box(c,u,h+.8,h+2.6,1,.28,p,1));break}case"clock":{let f=Math.min(l.L,l.D)*.52,y=l.top,g=y-11.5,m=x=>xn(c,u,x,x,p);t.stone.prism(m(f+2.6),s(c,u)-.6,h+1,!0),ps(t,"station",m(f),h+1,g,3.2);for(let[x,_]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let v=d(x*f/2,_*f/2);t.coping.box(v[0],v[1],h+1,g+4.4,.7,.7,p,.5)}for(let x of[h+1,g-.1,h+1+(g-h)*.5])t.coping.prism(m(f+.5),x-.2,x+.25,!0);ps(t,"wallBody",m(f+.2),g,g+4.4,0),t.coping.prism(m(f+.7),g+4.4,g+4.8,!0);for(let x=0;x<4;x++){let _=p+x*Math.PI/2,v=[c+Math.cos(_)*(f/2+.2),u+Math.sin(_)*(f/2+.2)];_p(e,n,v[0],v[1],g+2.2,_,Math.min(1.6,f*.24))}bi(t,m(f+.7),g+5.1,1.2,.6);for(let[x,_]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let v=d(x*(f/2-.4),_*(f/2-.4));t.red.cyl(v[0],v[1],g+4.8,y-3.2,.22,8,!1)}let M=new Te(new qe(.5,.9,1.4,14),n.bronze);{let[x,_,v]=I(c,u,y-4.4);M.position.set(x,_,v),M.castShadow=!0,e.add(M)}Ke(t,{c:[c,u],L:f,D:f,a:p,ze:y-3.1,top:y,ty:"pyr",oh:1.3,lift:.6,sag:.5,ridgeDeco:!0}),t.brassG.cyl(c,u,y-.2,y+1.4,.16,6);break}case"lou":{let f=l.n||3,y=l.zb||h,g=2.8,m=Math.max(2.8,(l.top-y-g)/f),M=Math.min(l.L,l.D)/2,x=E=>l.oct?Os(c,u,M-E*.35,8,p+Math.PI/8):xn(c,u,l.L-E*.7,l.D-E*.7,p);l.base==="stone"?(t.cityStone.prism(un(x(0),1.2),s(c,u)-1,y,!0),cr(t,un(x(0),1),y,.9,1.4,"coping")):t.stone.prism(un(x(0),.7),Math.min(h,s(c,u))-.6,y+.4,!0);let _=l.ruin?["ruin","ruin"]:["hall","hallU"],v=y+(l.base==="stone"?0:.4);for(let E=0;E<f;E++){let R=x(E),S=v+m-(E===0?0:.2);ps(t,E===0?_[0]:_[1],R,v,S,3),E<f-1&&(bi(t,R,S+.25,1.05,.5),t.wood.prism(un(R,.15),S-.05,S+.2,!1,!0),E>=0&&cr(t,un(x(E+1),.75),S+.2,.95)),v=S+.2}let T=x(f-1);if(l.ruin&&(t.tile.col=[.72,.7,.67]),l.oct?uu(t,T,c,u,v,l.top,1.45,.4):Ke(t,{c:[c,u],L:l.L-(f-1)*.7,D:l.D-(f-1)*.7,a:p,ze:v,top:Math.max(l.top,v+2.2),ty:"xs",oh:1.1,lift:.7,sag:.5,ridgeDeco:!0}),t.tile.col=[1,1,1],l.ruin)for(let E=-2;E<=2;E++){let R=d(E*.8,-l.D/2-.6),S=d(E*.8+.3,0);t.wood.beam(I(R[0],R[1],v+.3),I(S[0],S[1],l.top-.6),.14,.16)}if(l.banner){t.cloth.col=[.62,.17,.12],t.cloth.col2=t.cloth.col;for(let E of[-.32,0,.32]){let R=d(E*l.L,-l.D/2-.25),S=y+m*2.2;t.cloth.quad(I(R[0]-.4,R[1],S),I(R[0]+.4,R[1],S),I(R[0]+.4,R[1],S-5.5),I(R[0]-.4,R[1],S-5.5),[0,0],[1,0],[1,1],[0,1],[-Math.sin(p),0,Math.cos(p)].map(b=>-b))}t.cloth.col=t.cloth.col2=[1,1,1]}break}case"watertower2":case"watertower":{if(l.k==="watertower"&&!l.bt)break;let f=l.top,y=f-6.2,g=Math.max(2.2,Math.min(3,l.r*.8)),m=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([M,x])=>d(M*g*.85,x*g*.85));for(let M of m)t.iron.beam(I(M[0],M[1],h),I(c+(M[0]-c)*.72,u+(M[1]-u)*.72,y),.32,.32);for(let M=h+3;M<y-.5;M+=3.4)for(let x=0;x<4;x++){let _=m[x],v=m[(x+1)%4],T=1-.28*(M-h)/(y-h);t.iron.beam(I(c+(_[0]-c)*T,u+(_[1]-u)*T,M),I(c+(v[0]-c)*T,u+(v[1]-u)*T,M),.16,.16)}t.iron.cyl(c,u,y,y+.4,g+.3,16),t.brassG.cyl(c,u,y+.4,y+4.6,g,20);for(let M of[1.6,3.1])t.iron.cyl(c,u,y+M,y+M+.16,g+.06,20,!1);bc(t.iron,c,u,y+4.6,f,g+.15,.25,14),cr(t,Os(c,u,g+.6,12),y+.4,.9,1.2,"iron");break}case"chimney":{let f=l.top,y=Math.min(2.3,l.r*.9),g=y*.62;t.brick.col=[1,.66,.54],t.brick.box(c,u,s(c,u)-.5,h+5,y*2+1.2,y*2+1.2,p,.5),bc(t.brick,c,u,h+5,f,y,g,16,!1),t.brick.col=[1,1,1],t.coping.box(c,u,h+5,h+5.5,y*2+1.6,y*2+1.6,p,.5);for(let m=h+12;m<f-2;m+=9){let M=y+(g-y)*(m-h-5)/(f-h-5);t.iron.cyl(c,u,m,m+.35,M+.08,16,!1)}bc(t.iron,c,u,f-1,f+.2,g+.25,g+.1,16,!1),l.smoke&&Ux(e,n,o,c,u,f+.6,In(l.id));break}case"canopy":Nx(i,t,l,e);break;case"stairclock":{let f=l.top-3.2;t.stone.prism(xn(c,u,l.L+.6,l.D+.6,p),s(c,u)-.5,h+1,!0),ps(t,"station",xn(c,u,l.L,l.D,p),h+1,f,3.4);for(let[y,g]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let m=d(y*l.L/2,g*l.D/2);t.coping.box(m[0],m[1],h+1,f,.7,.7,p,.5)}t.coping.prism(xn(c,u,l.L+.5,l.D+.5,p),f-.3,f,!0),Ke(t,{c:[c,u],L:l.L,D:l.D,a:p,ze:f,top:l.top,ty:"xs",oh:.9,lift:.5,sag:.5,ridgeDeco:!0});for(let y of[-1,1]){let g=p+y*Math.PI/2,m=[c+Math.cos(g)*(l.D/2+.1),u+Math.sin(g)*(l.D/2+.1)];_p(e,n,m[0],m[1],f-1.6,g,1.2)}break}case"dome":{let f=l.r*.78,y=l.top,g=f*.92,m=y-g*.98-2.6,M=16,x=Os(c,u,f,M,p);t.stone.prism(un(x,.4),s(c,u)-.5,h+1,!0),ps(t,"hallU",x,h+1,m-.6,0),t.coping.prism(un(x,.5),m-.6,m,!0);let _=9;for(let T=0;T<_;T++){let E=T/_*Math.PI/2,R=(T+1)/_*Math.PI/2;for(let S=0;S<24;S++){let b=S/24*Bs,P=(S+1)/24*Bs,N=(O,G)=>I(c+Math.cos(O)*g*Math.cos(G),u+Math.sin(O)*g*Math.cos(G),m+g*1.05*Math.sin(G)),z=(O,G)=>[Math.cos(O)*Math.cos(G),Math.sin(G),Math.sin(O)*Math.cos(G)];t.copper.triN(N(b,E),N(P,E),N(P,R),z(b,E),z(P,E),z(P,R),[S/6,T/3],[(S+1)/6,T/3],[(S+1)/6,(T+1)/3]),t.copper.triN(N(b,E),N(P,R),N(b,R),z(b,E),z(P,R),z(b,R),[S/6,T/3],[(S+1)/6,(T+1)/3],[S/6,(T+1)/3])}}for(let T=0;T<12;T++){let E=T/12*Bs;for(let R=0;R<_-1;R++){let S=R/_*Math.PI/2,b=(R+1)/_*Math.PI/2;t.brassG.beam(I(c+Math.cos(E)*(g+.06)*Math.cos(S),u+Math.sin(E)*(g+.06)*Math.cos(S),m+(g*1.05+.06)*Math.sin(S)),I(c+Math.cos(E)*(g+.06)*Math.cos(b),u+Math.sin(E)*(g+.06)*Math.cos(b),m+(g*1.05+.06)*Math.sin(b)),.18,.12)}}let v=m+g*1.03;t.wallBody.cyl(c,u,v-.3,v+1.4,.95,10),bc(t.copper,c,u,v+1.4,v+2.3,1.2,.2,10),t.brassG.cyl(c,u,v+2.2,y+.6,.1,6);break}case"stage":zx(t,l,s);break;case"crane2":{let f=l.top-4.5,y=1.4,g=[[-y,-y],[y,-y],[y,y],[-y,y]].map(([R,S])=>d(R,S));for(let R of g)t.iron.box(R[0],R[1],h,f,.3,.3,p,1);for(let R=h+2.5;R<f-1;R+=3)for(let S=0;S<4;S++){let b=g[S],P=g[(S+1)%4];t.iron.beam(I(b[0],b[1],R),I(P[0],P[1],R+3),.12,.12),t.iron.beam(I(b[0],b[1],R),I(P[0],P[1],R),.14,.14)}let m=a?Math.atan2(a.c[1]-u,a.c[0]-c):p,M=a?Math.min(20,Math.hypot(a.c[0]-c,a.c[1]-u)+3):15,x=Si(c,u,m);t.wood.box(c,u,f,f+2.4,3.4,3,m,1),Ke(t,{c:[c,u],L:4,D:3.6,a:m,ze:f+2.4,top:f+3.3,ty:"gable",oh:.3,ohg:.2,ridgeDeco:!1});let _=x(-6,0),v=x(M,0);t.iron.beam(I(_[0],_[1],f+1),I(v[0],v[1],f+1),.9,1.1),t.iron.cyl(c,u,f+2.4,f+4.6,.18,6),t.iron.beam(I(c,u,f+4.5),I(v[0],v[1],f+1.4),.1,.1),t.iron.beam(I(c,u,f+4.5),I(_[0],_[1],f+1.4),.1,.1);let T=x(-5.4,0);t.stone.box(T[0],T[1],f+.2,f+2,1.8,1.6,m,1);let E=x(M-1.2,0);t.iron.beam(I(E[0],E[1],f+.5),I(E[0],E[1],h+3.4),.05,.05),t.wood.box(E[0],E[1],h+2,h+3.3,2,1.4,m+.4,1);break}case"screenwall":{let f=Math.max(l.L,l.D),y=Math.max(1.2,Math.min(l.L,l.D)),g=l.L>=l.D?p:p+Math.PI/2,m=l.top,M=.95,x=m-1.5;t.stone.prism(xn(c,u,f,y+.5,g),Math.min(h,s(c,u))-.5,h+M,!0),t.coping.prism(xn(c,u,f+.2,y+.7,g),h+M-.12,h+M+.06,!0),ps(t,"wallBody",xn(c,u,f-.5,y-.2,g),h+M+.06,x,0);let _=Si(c,u,g);for(let v of[-1,1]){let T=_(0,v*((y-.2)/2+.04));for(let[E,R]of[[-(f-1.4)/2,.24],[(f-1.4)/2,.24]]){let S=_(E,v*((y-.2)/2+.04));t.coping.box(S[0],S[1],h+M+.3,x-.3,R,.12,g,.5)}t.coping.box(T[0],T[1],x-.42,x-.3,f-1.4,.12,g,.5),t.coping.box(T[0],T[1],h+M+.3,h+M+.42,f-1.4,.12,g,.5),t.brick.box(T[0],T[1],(h+M+x)/2-.9,(h+M+x)/2+.9,1.8,.1,g+Math.PI/4,.5)}t.coping.prism(xn(c,u,f-.1,y+.15,g),x,x+.22,!0),t.brick.prism(xn(c,u,f+.1,y+.45,g),x+.22,x+.42,!0),Ke(t,{c:[c,u],L:f+.5,D:y+1.1,a:g,ze:x+.42,top:m,ty:"xs",oh:.35,lift:.35,sag:.45,ridgeDeco:!0});break}case"stonedeck":{let f=h,y=(i.riverz||10)-3.2;t.stone.prism(l.p,y,f-.3,!0),t.coping.prism(un(l.p,.15),f-.3,f,!0);for(let m=0;m<l.p.length;m++){let M=l.p[m];t.iron.cyl(M[0]+(c-M[0])*.08,M[1]+(u-M[1])*.08,f,f+.7,.2,8,!0)}let g=Si(c,u,p);for(let[m,M,x,_,v]of[[-4.5,1.2,2.4,1.6,1.5],[-2,1.6,1.6,1.6,1.1],[3.2,-.6,3,2,1.8],[5.6,1.4,1.4,1.4,.9]]){let T=g(m*Math.min(1,l.L/16),M*Math.min(1,l.D/8));t.wood.box(T[0],T[1],f,f+v,x,_,p+(m>0?.08:-.05),.6)}break}case"portalcrane":{let f=h+7.5,y=3.2,g=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([T,E])=>d(T*y,E*y));for(let T of g)t.iron.beam(I(T[0],T[1],h),I(c+(T[0]-c)*.45,u+(T[1]-u)*.45,f),.4,.4),t.iron.box(T[0],T[1],h,h+.6,1.2,.9,p,1);t.iron.box(c,u,f,f+.9,3.6,3.6,p,1);let m=a?Math.atan2(a.c[1]-u,a.c[0]-c)+.5:p,M=Si(c,u,m);t.wood.box(c,u,f+.9,f+3.6,4.2,3,m,1),Ke(t,{c:[c,u],L:4.6,D:3.4,a:m,ze:f+3.6,top:f+4.4,ty:"gable",oh:.25,ohg:.2,ridgeDeco:!1});let x=M(1.8,0),_=M(15,0);t.iron.beam(I(x[0],x[1],f+1.6),I(_[0],_[1],l.top),.6,.7),t.iron.beam(I(_[0],_[1],l.top-.3),I(_[0],_[1],h+2.8),.05,.05),t.iron.beam(I(c,u,f+4.2),I(_[0],_[1],l.top),.08,.08);let v=M(-2.6,0);t.stone.box(v[0],v[1],f+1,f+2.8,1.2,2.4,m,1);break}case"slipship":{let f=Math.min(l.L-4,27),y=Math.min(l.D*.36,3.6),g=h-.6,m=Math.max(l.top,h+3.6)+.6,M=x=>{let _=Math.abs(x)/(f/2);return y*Math.sqrt(Math.max(0,1-Math.pow(_,2.6)))};for(let x=-f/2;x<=f/2+.01;x+=1.5){let _=M(x);if(_<.25)continue;let v=null;for(let T=0;T<=8;T++){let E=T/8*Math.PI,R=d(x,Math.cos(E)*_),S=g+(m-g)*(1-Math.sin(E)*.92),b=I(R[0],R[1],S);v&&t.wood.beam(v,b,.18,.22),v=b}}{let x=d(-f/2,0),_=d(f/2,0);t.wood.beam(I(x[0],x[1],g+.1),I(_[0],_[1],g+.1),.5,.5)}for(let x=-f/2+1.5;x<f*.15;x+=1.5)for(let _ of[-1,1]){let v=M(x),T=M(x+1.5);for(let E=1;E<=3;E++){let R=E/8*Math.PI,S=d(x,_*Math.cos(R)*v),b=d(x+1.5,_*Math.cos(R)*T),P=g+(m-g)*(1-Math.sin(R)*.92);t.plank.quad(I(S[0],S[1],P),I(b[0],b[1],P),I(b[0],b[1],P-.9),I(S[0],S[1],P-.9),[0,0],[1.5,0],[1.5,.5],[0,.5],[-Math.sin(p)*_,0,Math.cos(p)*_])}}for(let x=-f/2;x<=f/2;x+=4)for(let _ of[-1,1]){let v=d(x,_*(y+1.4));t.wood.cyl(v[0],v[1],h-1,m+1.5,.09,5,!1)}for(let x=-f/2;x<f/2;x+=4)for(let _ of[-1,1])for(let v of[h+1.5,m-.2]){let T=d(x,_*(y+1.4)),E=d(x+4,_*(y+1.4));t.plank.beam(I(T[0],T[1],v),I(E[0],E[1],v),.9,.08)}for(let x=-f/2+2;x<=f/2-2;x+=3)t.wood.box(...d(x,0),h-1.6,g,.8,y*1.6,p,1);break}case"citygate":Fx(t,l,s);break;case"derrick":{let f=l.top;t.wood.cyl(c,u,h-.3,f,.38,8,!0);let y=p,g=Si(c,u,y),m=g(14,0);t.wood.beam(I(c,u,h+1.2),I(m[0],m[1],f-6),.4,.4),t.iron.beam(I(c,u,f-.4),I(m[0],m[1],f-6),.05,.05),t.iron.beam(I(m[0],m[1],f-6),I(m[0],m[1],s(m[0],m[1])+3.2),.05,.05),t.stone.box(m[0],m[1],s(m[0],m[1])+1.4,s(m[0],m[1])+3,1.6,1.3,.4,.5);for(let x=0;x<4;x++){let _=y+Math.PI/4+x*Math.PI/2,v=[c+Math.cos(_)*16,u+Math.sin(_)*16];t.iron.beam(I(c,u,f-.3),I(v[0],v[1],s(v[0],v[1])+.3),.04,.04),t.wood.box(v[0],v[1],s(v[0],v[1])-.3,s(v[0],v[1])+.6,.6,.6,_,1)}let M=g(-3.5,2.5);t.hut.prism(xn(M[0],M[1],3.2,2.6,y),s(M[0],M[1])-.3,s(M[0],M[1])+2.4,!1),Ke(t,{c:M,L:3.2,D:2.6,a:y,ze:s(M[0],M[1])+2.4,top:s(M[0],M[1])+3.2,ty:"gable",oh:.3,ohg:.2,ridgeDeco:!1});break}case"pagoda":{let f=l.n||7,y=l.r*.72,g=5.2,m=l.top-g-(h+1.6),M=m/f,x=l.door!=null?l.door*Math.PI/180+Math.PI/8:p+Math.PI/8;if(t.stone.prism(Os(c,u,y+2.4,8,x),s(c,u)-1,h+1.6,!0),l.door!=null){let T=l.door*Math.PI/180,E=Math.cos(T),R=Math.sin(T),S=Math.atan2(E,-R);cr(t,Os(c,u,y+2.2,8,x),h+1.6,.9,1.4,"coping",!1);let b=(y+2.4)*Math.cos(Math.PI/8),P=y*Math.cos(Math.PI/8);for(let N=0;N<5;N++){let z=b+(N+.5)*.45,O=c+E*z,G=u+R*z,j=h+1.6*(5-N)/6;t.stone.box(O,G,Math.min(s(O,G),j)-.3,j,3.2,.45,S,1)}t.red.box(c+E*(P+.06),u+R*(P+.06),h+1.6,h+4.3,1.7,.12,S,1)}else cr(t,Os(c,u,y+2.2,8,x),h+1.6,.9,1.4,"coping");let _=h+1.6,v=null;for(let T=0;T<f;T++){let E=y*(1-.42*T/(f-1)),R=Os(c,u,E,8,x),S=_+M*(T===0?1.25:.96);ps(t,T===0?"hall":"hallU",R,_,S-.3,0),t.coping.prism(un(R,.2),S-.35,S,!0),T<f-1&&bi(t,R,S+.2,1.25-T*.05,.65),v=R,_=S}uu(t,v,c,u,_+.1,_+2.8,1.55,.45),t.brassG.cyl(c,u,_+2.6,l.top,.14,6);for(let T=0;T<6;T++)t.brassG.cyl(c,u,_+3+T*.38,_+3.16+T*.38,.5-T*.05,10);t.brassG.cyl(c,u,l.top-.9,l.top-.4,.32,10);break}case"treehouse":{let f=h+8.6;r.push({at:[c,u],r:4.6,sp:"pine",z:h,big:1,trunk:12.5}),t.plank.prism(xn(c,u,4.6,4.6,p),f-.3,f,!0,!0);for(let[M,x]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let _=d(M*2,x*2);t.wood.beam(I(_[0],_[1],f-.3),I(c+(_[0]-c)*.2,u+(_[1]-u)*.2,f-3),.16,.16)}cr(t,xn(c,u,4.4,4.4,p),f,1,1.1);let y=d(.6,.4);t.hut.prism(xn(y[0],y[1],2.4,2.2,p),f,f+2.2,!1),Ke(t,{c:y,L:2.8,D:2.6,a:p,ze:f+2.2,top:f+3.1,ty:"gable",oh:.3,ohg:.25,ridgeDeco:!1});let g=d(-2.4,-2.8),m=d(-2.4,-2.2);for(let M of[-.3,.3])t.wood.beam(I(g[0]+M,g[1],s(g[0],g[1])),I(m[0]+M,m[1],f),.08,.08);break}case"aqueduct":kx(t,l,s);break;case"waterwheel":Ox(t,l,e,n,s,o);break;case"stele":{let f=Math.max(1.6,l.top-h-.7);if(t.stone.box(c,u,s(c,u)-.3,h+.6,Math.max(1.6,l.L*.9),Math.max(1,l.D*.7),p,1),l.broken){t.coping.box(c,u,h+.6,h+.6+f*.55,1.3,.32,p,1);let y=d(1.6,.9);t.coping.box(y[0],y[1],s(y[0],y[1])-.1,s(y[0],y[1])+.35,f*.45,1.3,p+.5,1)}else t.coping.box(c,u,h+.6,h+.6+f,1.3,.32,p,1),t.stone.box(c,u,h+.6+f,h+.95+f,1.6,.5,p,1);break}case"bastion":Bx(t,l,e,n,s);break;default:break}}}function Ux(i,t,e,n,s,o,r){let l=new Wi(1,1),c=[];for(let d=0;d<9;d++){let f=new Te(l,t.smoke.clone());f.renderOrder=2,i.add(f),c.push(f)}let u=new nt(...I(n,s,o)),h=Sn(Math.floor(r*1e6)+7),p=h();e.push(d=>{for(let f=0;f<9;f++){let y=(d*.045+p+f/9)%1,g=1.2+y*5.5;c[f].position.set(u.x+y*16+Math.sin(f*2.1)*.8,u.y+y*22,u.z-y*6+Math.cos(f*1.7)*.8),c[f].scale.setScalar(g),c[f].material.opacity=.42*(1-y)*Math.min(1,y*6)}})}function Nx(i,t,e,n){let[s,o]=e.c,r=e.a,a=Si(s,o,r),l=e.L,c=e.D,u=i.rail?i.rail.z:e.z+12,h=u+4.6,p=Math.max(2.6,(e.top-h)*.95),d=c/2,f=10,y=(m,M)=>{let x=M/f*Math.PI,_=a(m,Math.cos(x)*d);return I(_[0],_[1],h+Math.sin(x)*p)},g=Math.max(2,Math.round(l/4.2));for(let m=0;m<=g;m++){let M=-l/2+l*m/g;for(let x=0;x<f;x++)t.iron.beam(y(M,x),y(M,x+1),.22,.32);for(let x of[-1,1]){let _=a(M,x*d);t.iron.box(_[0],_[1],u,h+.1,.34,.34,r,1)}}for(let m=0;m<g;m++){let M=-l/2+l*m/g,x=-l/2+l*(m+1)/g;for(let _=0;_<f;_++){let v=_>=3&&_<=6?"glass":"girder",T=(_+.5)/f*Math.PI,E=[-Math.sin(r)*Math.cos(T),Math.sin(T),Math.cos(r)*Math.cos(T)];t[v].quad(y(M,_),y(x,_),y(x,_+1),y(M,_+1),[0,0],[1,0],[1,1],[0,1],E)}}for(let m of[-1,1]){let M=a(0,m*(d-2.4));t.paving.box(M[0],M[1],u-.3,u+.95,l-1,3.6,r,.5);let x=a(0,m*(d-4.15));t.coping.box(x[0],x[1],u+.95,u+1,l-1,.3,r,1)}}function zx(i,t,e){let[n,s]=t.c,o=t.a||0,r=Si(n,s,o),a=t.L,l=t.D,c=t.z,u=1.5,h=(t.face||0)*Math.PI/180,p=Math.cos(h),d=Math.sin(h),f=[[1,0],[-1,0],[0,1],[0,-1]].map(([R,S])=>({u:R,v:S,d:(Math.cos(o)*R-Math.sin(o)*S)*p+(Math.sin(o)*R+Math.cos(o)*S)*d})),y=f.reduce((R,S)=>S.d>R.d?S:R),g=e(n,s),m=t.piles?Math.min(g,c)-3.5:Math.min(g,c)-.5;if(t.piles){i.plank.prism(xn(n,s,a,l,o),c+u-.4,c+u,!0,!0);for(let R=-a/2+.6;R<=a/2-.5;R+=2.4)for(let S=-l/2+.6;S<=l/2-.5;S+=2.4){let b=r(R,S);i.wood.cyl(b[0],b[1],m,c+u-.4,.2,7,!1)}}else i.stone.prism(xn(n,s,a,l,o),m,c+u,!0);let M=c+u+4.4,x=(R,S,b,P)=>{let N=r(R,S),z=r(b,P),O=Math.hypot(z[0]-N[0],z[1]-N[1]),G=[(z[1]-N[1])/O,0,-(z[0]-N[0])/O];i.wallBody.quad(I(N[0],N[1],c+u),I(z[0],z[1],c+u),I(z[0],z[1],M),I(N[0],N[1],M),[0,0],[O/3,0],[O/3,1.5],[0,1.5],G),i.wallBody.quad(I(z[0],z[1],c+u),I(N[0],N[1],c+u),I(N[0],N[1],M),I(z[0],z[1],M),[0,0],[O/3,0],[O/3,1.5],[0,1.5],G.map(j=>-j))},_=a/2-.3,v=l/2-.3,T={"1,0":[_,-v,_,v],"-1,0":[-_,v,-_,-v],"0,1":[_,v,-_,v],"0,-1":[-_,-v,_,-v]};for(let R of f)if(R!==y&&!(R.u===-y.u&&R.v===-y.v&&!1)){let S=T[R.u+","+R.v];if(R.u===-y.u&&R.v===-y.v)x(...S);else{let[b,P,N,z]=S;x(b,P,b+(N-b)*.55,P+(z-P)*.55)}}let E=T[y.u+","+y.v];for(let R=0;R<=3;R++){let S=R/3,b=r(E[0]+(E[2]-E[0])*S,E[1]+(E[3]-E[1])*S);i.red.cyl(b[0],b[1],c+u,M,.26,10,!1)}{let R=r(E[0],E[1]),S=r(E[2],E[3]);i.wood.beam(I(R[0],R[1],M-.5),I(S[0],S[1],M-.5),.36,.7),i.red.beam(I(R[0],R[1],c+u+.5),I(S[0],S[1],c+u+.5),.12,.1)}Ke(i,{c:[n,s],L:a-.4,D:l-.4,a:o,ze:M,top:Math.max(t.top,M+3),ty:"xs",oh:1.4,lift:.9,sag:.5,ridgeDeco:!0})}function Fx(i,t,e){let[n,s]=t.c,o=t.a||0,r=Si(n,s,o),a=t.L,l=Math.max(t.D,14),c=t.top,u=Math.min(e(n,s),t.z)-1.5,h=6.4,p=6.8,d=t.z+p-h/2;for(let y of[-1,1]){let g=r(0,y*(l/2+h/2)/2);i.cityStone.box(g[0],g[1],u,c,a,l/2-h/2,o,.25)}let f=9;for(let y=0;y<f;y++){let g=y/f*Math.PI,m=(y+1)/f*Math.PI,M=Math.cos(g)*h/2,x=Math.cos(m)*h/2,_=d+Math.sin(g)*h/2,v=d+Math.sin(m)*h/2,T=(M+x)/2,E=Math.min(_,v),R=r(0,T);i.cityStone.box(R[0],R[1],E,c,a,Math.abs(x-M)+.05,o,.25)}for(let y of[-1,1]){let g=null;for(let m=0;m<=f;m++){let M=m/f*Math.PI,x=r(y*(a/2+.05),Math.cos(M)*(h/2+.3)),_=I(x[0],x[1],d+Math.sin(M)*(h/2+.3));g&&i.coping.beam(g,_,.5,.35),g=_}}if(i.paving.prism(xn(n,s,a+.2,h,o),t.z-.2,t.z+.05,!0),l>=20)for(let y of[-1,1])ga(i,[r(y*a/2,-l/2),r(y*a/2,l/2)],c,!1);else ga(i,xn(n,s,a,l,o),c,!0)}function ga(i,t,e,n,s){let o=t.length,r=n?o:o-1;for(let a=0;a<r;a++){let l=t[a],c=t[(a+1)%o],u=Math.hypot(c[0]-l[0],c[1]-l[1]);if(u<.3)continue;let h=Math.atan2(c[1]-l[1],c[0]-l[0]),p=Math.max(1,Math.round(u/2.4));i.cityStone.box((l[0]+c[0])/2,(l[1]+c[1])/2,e-.05,e+.75,u+.4,.7,h,.4);for(let d=0;d<p;d++){let f=(d+.5)/p;i.cityStone.box(l[0]+(c[0]-l[0])*f,l[1]+(c[1]-l[1])*f,e+.75,e+1.75,u/p*.55,.7,h,.4)}}}function kx(i,t,e){let[n,s]=t.c,o=t.a||0,r=Si(n,s,o),a=t.L,l=t.top-1.4;for(let f=-a/2+.5;f<=a/2-.4;f+=3.2){for(let M of[-.75,.75]){let x=r(f,M);i.wood.beam(I(x[0],x[1],e(x[0],x[1])-.5),I(x[0],x[1],l),.24,.24)}let y=r(f,-.75),g=r(f,.75),m=Math.min(e(y[0],y[1]),e(g[0],g[1]));i.wood.beam(I(y[0],y[1],m+.6),I(g[0],g[1],l-.4),.12,.12),i.wood.beam(I(y[0],y[1],l-.15),I(g[0],g[1],l-.15),.2,.26)}let c=r(0,0);i.plank.box(c[0],c[1],l,l+.15,a,1.5,o,1);for(let f of[-1,1]){let y=r(0,f*.7);i.plank.box(y[0],y[1],l+.15,l+.85,a,.12,o,1)}let u=r(-a/2,-.6),h=r(a/2,-.6),p=r(a/2,.6),d=r(-a/2,.6);i.waterCut.quad(I(u[0],u[1],l+.62),I(h[0],h[1],l+.6),I(p[0],p[1],l+.6),I(d[0],d[1],l+.62),[0,0],[1,0],[1,1],[0,1],Je)}function Ox(i,t,e,n,s,o){let[r,a]=t.c,l=t.a||0,c=Si(r,a,l),u=Math.min(t.L/2,(t.top-t.z)/2)-.3,h=t.z+u-.9,p=Math.max(1.6,t.D*.55),d=new $e;{let[m,M,x]=I(r,a,h);d.position.set(m,M,x),d.rotation.y=-l}let f=new $e;d.add(f);for(let m of[-1,1]){let M=new Te(new yi(u,.14,6,40),n.woodM);M.position.z=m*p/2,f.add(M)}let y=16;for(let m=0;m<y;m++){let M=m/y*Bs;for(let v of[-1,1]){let T=new Te(new nn(.12,u,.12),n.woodM);T.position.set(Math.cos(M)*u/2,Math.sin(M)*u/2,v*p/2),T.rotation.z=M-Math.PI/2,f.add(T)}let x=new Te(new nn(.08,1,p+.2),n.woodM);x.position.set(Math.cos(M)*u,Math.sin(M)*u,0),x.rotation.z=M,f.add(x);let _=new Te(new qe(.2,.2,1.1,6),n.bamboo);_.position.set(Math.cos(M+.1)*(u+.25),Math.sin(M+.1)*(u+.25),p/2+.25),_.rotation.z=M+.5,f.add(_)}let g=new Te(new qe(.45,.45,p+1.4,10),n.woodM);g.rotation.x=Math.PI/2,f.add(g),f.traverse(m=>{m.castShadow=!0}),e.add(d),o.push(m=>{f.rotation.z=-m*.25});for(let m of[-1,1]){let M=c(0,0),x=-Math.sin(l),_=Math.cos(l),v=[r+x*m*(p/2+.8),a+_*m*(p/2+.8)];for(let T of[-1,1]){let E=[v[0]+Math.cos(l)*T*(u*.55),v[1]+Math.sin(l)*T*(u*.55)];i.wood.beam(I(E[0],E[1],Math.min(t.z,s(E[0],E[1]))-1.2),I(v[0],v[1],h+.2),.34,.34)}i.wood.box(v[0],v[1],h-.2,h+.5,1,1,l,1)}}function Bx(i,t,e,n,s){let[o,r]=t.c,a=t.a||0,l=Si(o,r,a),c=t.L,u=t.D,h=t.z,p=h+1.6,d=xn(o,r,c,u,a);i.cityStone.prism(un(d,.6),Math.min(h,s(o,r))-6,p,!0),ga(i,d,p,!0);let f=Math.min(c,u)*.5,y=t.top-3.6,g=xn(o,r,f,f,a);ps(i,"stoneF",g,p,y,3);for(let[m,M]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=l(m*f/2,M*f/2);i.cityStone.box(x[0],x[1],p,y,.8,.8,a,.4)}i.coping.prism(xn(o,r,f+.6,f+.6,a),y-.3,y,!0),Ke(i,{c:[o,r],L:f,D:f,a,ze:y,top:t.top,ty:"xs",oh:1.1,lift:.6,sag:.5,ridgeDeco:!0}),bi(i,g,p+(y-p)*.5,.9,.45);for(let[m,M]of[[.72,.72],[-.72,.72],[.72,-.72],[.1,.78]]){let x=l(m*c/2*.86,M*u/2*.86),_=Math.atan2(x[1]-r,x[0]-o),v=new $e;{let[R,S,b]=I(x[0],x[1],p);v.position.set(R,S,b),v.rotation.y=-_}let T=new Te(new nn(1.8,.7,1.2),n.woodM);T.position.y=.45,v.add(T);for(let R of[-1,1]){let S=new Te(new qe(.42,.42,.14,12),n.woodM);S.rotation.x=Math.PI/2,S.position.set(0,.42,R*.68),v.add(S)}let E=new Te(new qe(.2,.34,3,12),n.ironM);E.rotation.z=Math.PI/2-.08,E.position.set(.9,1.05,0),v.add(E),v.traverse(R=>{R.castShadow=!0}),e.add(v)}}function Mp(i,t,e){for(let n of i.big||[]){if(n.k==="zigzag"){Hx(t,n);continue}let s=n.k==="foot"||n.k==="arch1",o=n.p,r=o[0],a=o[o.length-1],l=Math.hypot(a[0]-r[0],a[1]-r[1]);if(l<2)continue;let c=(a[0]-r[0])/l,u=(a[1]-r[1])/l,h=Math.atan2(u,c),p=-u,d=c,f=s?n.w:Math.min(n.w,18),y=n.z,g=n.zw;if(g==null){g=1e9;for(let z=.2;z<=.8;z+=.1)g=Math.min(g,e(r[0]+(a[0]-r[0])*z,r[1]+(a[1]-r[1])*z))}let m=6,M=l+m*2,x=-m,_=n.k==="higharch"?3:n.k==="causeway"?Math.max(3,Math.round(l/10)):s?1:Math.max(3,Math.round(l/22)),v=s?0:n.k==="causeway"?1.6:3.4,T=(l-v*(_-1))/_,E=y-(n.k==="causeway"?.9:1.6),R=n.k==="higharch"?g+3:Math.max(g+.4,E-T*(n.k==="causeway"?.32:.42)),S=g-3.2,b=z=>{if(z<0||z>l)return null;for(let O=0;O<_;O++){let G=O*(T+v),j=G+T;if(z>=G&&z<=j){let et=(z-G)/T*2-1;return R+(E-R)*Math.sqrt(Math.max(0,1-et*et))}}return S},P=(z,O)=>[r[0]+c*z+p*O,r[1]+u*z+d*O],N=.6;for(let z=x;z<x+M-1e-6;z+=N){let O=z+N/2,G=P(O,0),j=b(O),et=j??Math.min(e(G[0],G[1]),y)-1;y-et>.05&&t.bridgeS.box(G[0],G[1],et,y-.25,N+.02,f,h,.35)}t.paving.box(...P(l/2,0),y-.3,y,M,f-.6,h,.4);for(let z of[-1,1]){let O=P(l/2,z*(f/2-.25));t.coping.box(O[0],O[1],y-.3,y+1,M,.5,h,.5),t.coping.box(O[0],O[1],y+1,y+1.15,M,.65,h,.5)}for(let z=0;z<=l;z+=6)for(let O of[-1,1]){let G=P(z,O*(f/2-.25));t.coping.box(G[0],G[1],y+1,y+1.45,.7,.75,h,.5)}if(!s&&n.k!=="causeway")for(let z=1;z<_;z++){let O=z*(T+v)-v/2;for(let G of[-1,1]){let j=P(O,G*(f/2+1.2));t.bridgeS.prism([P(O-v/2,G*f/2),P(O+v/2,G*f/2),[j[0],j[1]]],S,R+1.2,!0)}}}}function Hx(i,t){let e=t.z,n=t.zw!=null?t.zw:e-3,s=n-3.2,o=t.p;i.bridgeS.prism(t.poly,e-.75,e-.28,!0),i.paving.prism(t.poly,e-.3,e,!0);for(let r=0;r+1<o.length;r++){let a=o[r],l=o[r+1],c=Math.hypot(l[0]-a[0],l[1]-a[1]);if(c<.5)continue;let u=Math.atan2(l[1]-a[1],l[0]-a[0]),h=Math.max(1,Math.round(c/4.5));for(let p=r===0?0:1;p<=h;p++){let d=p/h;i.bridgeS.box(a[0]+(l[0]-a[0])*d,a[1]+(l[1]-a[1])*d,s,e-.7,.9,t.w-.5,u,.35)}}for(let r of t.rails||[])for(let a=0;a+1<r.length;a++){let l=r[a],c=r[a+1],u=Math.hypot(c[0]-l[0],c[1]-l[1]);if(u<.15)continue;let h=Math.atan2(c[1]-l[1],c[0]-l[0]),p=(l[0]+c[0])/2,d=(l[1]+c[1])/2;i.coping.box(p,d,e,e+.72,u+.04,.2,h,.5),i.coping.box(p,d,e+.72,e+.88,u+.04,.3,h,.5);let f=Math.max(1,Math.round(u/1.8));for(let y=0;y<=f;y++){let g=y/f;i.coping.box(l[0]+(c[0]-l[0])*g,l[1]+(c[1]-l[1])*g,e,e+1.02,.28,.28,h,.5)}}}function vp(i,t,e){let n=i.meta.center;for(let s of i.cwalls||[]){let o=s.p,r=s.top,a=(s.w||7)/2,l=[],c=[];for(let u=0;u+1<o.length;u++){let h=o[u],p=o[u+1],d=Math.hypot(p[0]-h[0],p[1]-h[1]);if(d<.3)continue;let f=Math.atan2(p[1]-h[1],p[0]-h[0]),y=(h[0]+p[0])/2,g=(h[1]+p[1])/2,m=-(p[1]-h[1])/d,M=(p[0]-h[0])/d;m*(n[0]-y)+M*(n[1]-g)>0&&(m=-m,M=-M);let x=Math.max(1,Math.ceil(d/3));for(let _=0;_<x;_++){let v=(_+.5)/x,T=h[0]+(p[0]-h[0])*v,E=h[1]+(p[1]-h[1])*v,R=Math.min(e(T+m*a,E+M*a),e(T-m*a,E-M*a),e(T,E));t.cityStone.box(T,E,R-1.2,r-.2,d/x+.03,a*2,f,.25),t.cityStone.box(T+m*(a+.5),E+M*(a+.5),R-1.2,Math.min(r-4,R+2.2),d/x+.03,1,f,.25)}if(t.paving.box(y,g,r-.2,r,d+.4,a*2-1.2,f,.4),l.push([[h[0]+m*(a-.35),h[1]+M*(a-.35)],[p[0]+m*(a-.35),p[1]+M*(a-.35)]]),c.push([h[0]-m*(a-.3),h[1]-M*(a-.3),p[0]-m*(a-.3),p[1]-M*(a-.3),f,d]),u%3===1){let _=[y+m*(a+3.2),g+M*(a+3.2)],v=e(_[0],_[1]);t.cityStone.box(_[0],_[1],v-1.2,r-.2,7,6.4,f,.25),ga(t,[[_[0]-Math.cos(f)*3.5-m*3.2,_[1]-Math.sin(f)*3.5-M*3.2],[_[0]-Math.cos(f)*3.5+m*3.2,_[1]-Math.sin(f)*3.5+M*3.2],[_[0]+Math.cos(f)*3.5+m*3.2,_[1]+Math.sin(f)*3.5+M*3.2],[_[0]+Math.cos(f)*3.5-m*3.2,_[1]+Math.sin(f)*3.5-M*3.2]],r-.2,!1),t.paving.box(_[0],_[1],r-.25,r-.05,6.8,6.2,f,.4)}}for(let[u,h]of l)ga(t,[u,h],r,!1);for(let[u,h,p,d,f,y]of c)t.cityStone.box((u+p)/2,(h+d)/2,r-.05,r+.9,y+.3,.55,f,.4)}}function bp(i,t){let e=["upP","upT","court","upPd"];for(let n of i.ctx||[]){let[s,o,r,a,l,c,u,h]=n,p=3.5+(u-1)*3.2,d=c+p,f=xn(s,o,r,a,l),y=.94+In(s+","+o)*.1;for(let g of e)t[g].col=t[g].col2=[y,y,y];ps(t,e[h%4],f,c-.6,d,3.6,0,Math.max(1,u)),t.tile.col=t.ridge.col=[y,y,y],Ke(t,{c:[s,o],L:Math.max(r,a),D:Math.min(r,a),a:r>=a?l:l+Math.PI/2,ze:d,top:d+Math.min(r,a)*(h===2?.22:.32),ty:h===2?"xs":"gable",oh:.6,ohg:.35,lift:h===2?.25:0,sag:.62,ridgeDeco:!1})}for(let n of e)t[n].col=t[n].col2=[1,1,1];t.tile.col=t.ridge.col=[1,1,1]}function Sp(i,t){for(let e of i.falls||[]){let[n,s]=e.a,[o,r]=e.b,[a,l]=e.n,c=.9;t.fall.quad(I(n,s,e.zt+.05),I(o,r,e.zt+.05),I(o+a*c,r+l*c,e.zb),I(n+a*c,s+l*c,e.zb),[0,0],[1,0],[1,(e.zt-e.zb)/3],[0,(e.zt-e.zb)/3],[a,.3,l]),t.foam.quad(I(n+a*c,s+l*c,e.zb+.06),I(o+a*c,r+l*c,e.zb+.06),I(o+a*3.4,r+l*3.4,e.zb+.04),I(n+a*3.4,s+l*3.4,e.zb+.04),[0,0],[1,0],[1,1],[0,1],Je)}}function wp(i,t,e,n){for(let s of e){let o=new $e,[r,a,l]=I(s.x,s.y,s.z);o.position.set(r,a,l),o.rotation.y=-s.a;let c=s.L,u=s.W,h=(y,g,m,M,x,_=0,v=0,T=0)=>{let E=new Te(y,g);return E.position.set(m,M,x),E.rotation.set(_,v,T),E.castShadow=!0,o.add(E),E},p=new so;p.moveTo(-c/2,-u/2),p.lineTo(c/2-u*.9,-u/2),p.quadraticCurveTo(c/2,-u*.3,c/2+.3,0),p.quadraticCurveTo(c/2,u*.3,c/2-u*.9,u/2),p.lineTo(-c/2,u/2),p.quadraticCurveTo(-c/2-.5,0,-c/2,-u/2);let d=s.steam?1.6:s.junk?1.5:1,f=new Ko(p,{depth:d,bevelEnabled:!1});if(f.rotateX(-Math.PI/2),f.translate(0,-.5,0),h(f,s.steam?t.ironM:t.hull,0,0,0),s.steam)h(new nn(c*.45,1.8,u*.8),t.cream,-c*.05,d-.5+.9,0),h(new nn(c*.5,.14,u*.95),t.woodM,-c*.05,d-.5+1.85,0),h(new qe(.45,.5,3.2,12),t.ironM,c*.08,d-.5+3.3,0),h(new qe(.52,.52,.4,12),t.redP,c*.08,d-.5+4.2,0),h(new nn(c*.16,1.2,u*.6),t.cream,c*.25,d-.5+.6,0);else if(s.junk){for(let[y,g,m]of[[c*.12,5.4,8],[-c*.2,3.8,5.6]]){h(new qe(.1,.14,m+3.5,6),t.hull,y,d-.5+(m+3.5)/2,0);let M=h(new Gi(g,m),t.sailR,y-g*.38,d+1.2+m/2,.14,0,.22,0);for(let x=0;x<=6;x++)h(new nn(g+.25,.07,.07),t.hull,y-g*.38,d+1.2+x*m/6,.18,0,.22,0)}h(new nn(c*.22,1.3,u*.9),t.woodM,-c*.36,d-.5+.65,0)}else{if(s.cabin){let y=new Te(new qe(u*.42,u*.42,c*.38,12,1,!1,0,Math.PI),t.mat);y.rotation.z=Math.PI/2,y.position.set(-c*.08,.55,0),y.rotateX(-Math.PI/2),y.castShadow=!0,o.add(y)}if(s.cargo)for(let y=0;y<4;y++)h(new nn(1.1,.8,1.1),t.crate,-c/2+2+y*1.4,.95,y%2?.4:-.4)}if(i.add(o),s.steam){let y=s.x*.37%1,g=5,m=new Wi(1,1),M=[];for(let x=0;x<g;x++){let _=new Te(m,t.smoke.clone());_.renderOrder=2,o.add(_),M.push(_)}n.push(x=>{for(let _=0;_<g;_++){let v=(x*.08+y+_/g)%1;M[_].position.set(c*.08-v*9,d+4.6+v*7,Math.sin(_)*.5),M[_].scale.setScalar(.6+v*2.6),M[_].material.opacity=.4*(1-v)*Math.min(1,v*5)}})}}}var Vx=[[.8,.75,.62],[.62,.63,.53],[.72,.68,.55]],Ep=[.74,.66,.5],Wx=[.86,.74,.47];function Tp(i,t,e){let n=i.camp||[],s=(o,r)=>{t[o].col=r,t[o].col2=r};for(let o of n){let r=Math.cos(o.a||0),a=Math.sin(o.a||0),l=o.z??e(o.x,o.y),c=(f,y)=>[o.x+r*f-a*y,o.y+a*f+r*y],u=(f,y,g)=>{let m=c(f,y);return I(m[0],m[1],l+g)},h=(f,y,g,m,M,x,_,v=0)=>{let T=c(y,g);t[f].box(T[0],T[1],l+m,l+M,x,_,(o.a||0)+v,.6)},p=(f,y,g,m,M=m)=>t[f].beam(y,g,m,M),d=(f,y,g,m,M,x="u",_=12,v=.12)=>{let T=[];for(let E=0;E<_;E++){let R=E/_*Math.PI*2,S=Math.cos(R)*M,b=Math.sin(R)*M;T.push(x==="u"?[y,g+S,m+b]:[y+S,g,m+b])}for(let E of[-1,1]){let R=E*v/2,S=x==="u"?[R,0]:[0,R],b=u(y+S[0],g+S[1],m);for(let P=0;P<_;P++){let N=T[P],z=T[(P+1)%_],O=u(N[0]+S[0],N[1]+S[1],N[2]),G=u(z[0]+S[0],z[1]+S[1],z[2]),j=x==="u"?[r*E,0,a*E]:[-a*E,0,r*E];E>0?t[f].tri(b,O,G,[0,0],[1,0],[0,1],j):t[f].tri(b,G,O,[0,0],[1,0],[0,1],j)}}for(let E=0;E<_;E++){let R=T[E],S=T[(E+1)%_],b=x==="u"?[v/2,0]:[0,v/2];t[f].quad(u(R[0]-b[0],R[1]-b[1],R[2]),u(S[0]-b[0],S[1]-b[1],S[2]),u(S[0]+b[0],S[1]+b[1],S[2]),u(R[0]+b[0],R[1]+b[1],R[2]),[0,0],[1,0],[1,1],[0,1])}};switch(o.k){case"target":{for(let f of[-.55,.55])p("wood",u(.15,f,0),u(0,f,1.95),.12);p("wood",u(-.05,-.75,1.45),u(-.05,.75,1.45),.1),s("cloth",Wx),d("cloth",.08,0,1.4,.62,"u",14,.22),s("red",[1,1,1]),d("red",.21,0,1.4,.2,"u",10,.04);break}case"rack":{for(let f of[-1.1,1.1])h("wood",0,f,0,2.1,.14,.14);for(let f of[.55,1.75])p("wood",u(0,-1.2,f),u(0,1.2,f),.1);for(let f=0;f<6;f++){let y=-.9+f*.36;p("wood",u(.18,y,.05),u(-.05,y,2.6),.05),p("iron",u(-.05,y,2.6),u(-.08,y,2.95),.06,.03)}break}case"cannon":{h("wood",-.3,0,.45,.85,2.2,.9),p("wood",u(-.4,0,.6),u(-2,0,.08),.32,.22);for(let f of[-.62,.62])d("wood",0,f,.62,.62,"v",12,.12),h("iron",0,f,.56,.68,.14,.2);p("iron",u(0,-.62,.62),u(0,.62,.62),.12),t.iron.beam(u(-.8,0,.98),u(1.45,0,1.18),.36,.36),t.iron.beam(u(1.35,0,1.17),u(1.55,0,1.19),.44,.44);break}case"tent":case"tentL":{let f=o.k==="tentL",y=f?6:4.2,g=f?4.4:3.4,m=f?2.9:2.4,M=.55,x=Vx[Math.abs(Math.round(o.x*7+o.y*3))%3];s("cloth",x);let _=u(-y/2,-g/2,M),v=u(y/2,-g/2,M),T=u(y/2,0,m),E=u(-y/2,0,m),R=u(-y/2,g/2,M),S=u(y/2,g/2,M);t.cloth.quad(_,v,T,E,[0,0],[1,0],[1,1],[0,1]),t.cloth.quad(S,R,E,T,[0,0],[1,0],[1,1],[0,1]);for(let b of[-1,1]){let P=b*y/2;t.cloth.tri(u(P,-g/2,M),u(P,g/2,M),u(P,0,m),[0,0],[1,0],[.5,1]),t.cloth.quad(u(P,-g/2,0),u(P,g/2,0),u(P,g/2,M),u(P,-g/2,M),[0,0],[1,0],[1,1],[0,1])}for(let b of[-1,1])t.cloth.quad(u(-y/2,b*g/2,0),u(y/2,b*g/2,0),u(y/2,b*g/2,M),u(-y/2,b*g/2,M),[0,0],[1,0],[1,1],[0,1]);s("cloth",x.map(b=>b*.55)),t.cloth.tri(u(y/2+.02,-.55,0),u(y/2+.02,.55,0),u(y/2+.02,0,m*.8),[0,0],[1,0],[.5,1]),p("wood",u(-y/2-.15,0,0),u(-y/2-.15,0,m+.35),.08),p("wood",u(y/2+.15,0,0),u(y/2+.15,0,m+.35),.08),p("wood",u(-y/2-.15,0,m+.05),u(y/2+.15,0,m+.05),.07);break}case"jumai":{p("wood",u(-1.9,0,.62),u(1.9,0,.62),.2);for(let f=-1.6;f<=1.61;f+=.64)p("wood",u(f,-.75,0),u(f,.75,1.3),.08),p("wood",u(f,.75,0),u(f,-.75,1.3),.08);break}case"sentry":{let m=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let[x,_]of m)p("wood",u(x*1.9,_*1.9,0),u(x*1.35,_*1.35,7),.2);for(let x=1.8;x<7-.5;x+=2.4)for(let _=0;_<4;_++){let[v,T]=m[_],[E,R]=m[(_+1)%4],S=1.9+(1.35-1.9)*x/7,b=1.9+(1.35-1.9)*Math.min(7,x+2.4)/7;p("wood",u(v*S,T*S,x),u(E*b,R*b,Math.min(7,x+2.4)),.08)}h("plank",0,0,7,7+.2,3.4,3.4);for(let x=0;x<4;x++){let[_,v]=m[x],[T,E]=m[(x+1)%4];p("wood",u(_*1.65,v*1.65,7+1.05),u(T*1.65,E*1.65,7+1.05),.08)}for(let[x,_]of m)p("wood",u(x*1.6,_*1.6,7),u(x*1.6,_*1.6,7+2.4),.1);let M=c(0,0);Ke(t,{c:M,L:4,D:4,a:o.a||0,ze:l+7+2.4,top:l+7+3.4,ty:"gable",oh:.3,ohg:.3,ridgeDeco:!1});for(let x of[-.3,.3])p("wood",u(1.9+.6,x,0),u(1.35+.05,x,7+.2),.06);for(let x=.4;x<7;x+=.45){let _=x/7,v=(1.9+.6)*(1-_)+(1.35+.05)*_;p("wood",u(v,-.3,x),u(v,.3,x),.04)}break}case"wagon":{h("wood",0,0,.85,1.05,3,1.6);for(let f of[-.78,.78])h("wood",0,f,1.05,1.45,3,.08);for(let f of[-.9,.9])d("wood",-.2,f,.7,.7,"v",12,.12);for(let f of[-.5,.5])p("wood",u(1.4,f,.95),u(3.3,f*.7,.55),.09);s("cloth",Ep);for(let[f,y]of[[-.8,-.4],[-.8,.4],[.2,-.4],[.2,.4],[-.3,0]])h("cloth",f,y,1.05+(f===-.3?.45:0),1.5+(f===-.3?.45:0),.9,.7);h("plank",1,0,1.05,1.75,.8,1.1);break}case"sacks":{s("cloth",Ep);for(let f=0;f<3;f++)for(let y=0;y<4-f;y++)for(let g of[-.4,.4])h("cloth",(y-(3-f)/2)*.95,g,f*.42,f*.42+.45,.9,.72);break}case"crates":{for(let[f,y,g]of[[0,0,0],[.95,0,0],[.45,.9,0],[.45,.25,.82],[-.9,.5,0]])h("plank",f,y,g,g+.8,.9,.8),h("iron",f,y,g+.36,g+.44,.92,.82);break}}}s("cloth",[1,1,1]),s("red",[1,1,1])}var hi=(i,t,e)=>{let n=i.col,s=t.map(o=>Math.pow(o,2.2));i.col=s,i.col2=s,e(),i.col=n,i.col2=n};function Gx(){let i=[];for(let t=0;t<3;t++){let e=(t===2?new io(1,0):new Wi(1,0)).toNonIndexed(),n=e.attributes.position,s=new Map;for(let o=0;o<n.count;o++){let r=n.getX(o),a=n.getY(o),l=n.getZ(o),c=`${r.toFixed(3)},${a.toFixed(3)},${l.toFixed(3)}`;s.has(c)||s.set(c,.78+.44*(Math.abs(Math.sin(r*12.9+a*78.2+l*37.7+t*3.1)*43758.5)%1));let u=s.get(c);n.setXYZ(o,r*u*(t===1?1.25:1),Math.max(-.35,a*u*.82),l*u)}e.computeVertexNormals(),i.push(e)}return i}function Xx(){let i=[],t=[],e=(()=>{let s=7;return()=>(s=s*16807%2147483647)/2147483647})();for(let s=0;s<18;s++){let o=e()*Math.PI*2,r=e()*.5,a=.8+e()*.75,l=.12+e()*.28,c=.045+e()*.03,u=Math.cos(o)*r,h=Math.sin(o)*r,p=u+Math.cos(o)*l,d=h+Math.sin(o)*l,f=-Math.sin(o)*c,y=Math.cos(o)*c,g=.75+e()*.25;if(i.push(u-f,0,h-y,u+f,0,h+y,p,a,d),t.push(g*.8,g*.8,g*.8,g*.8,g*.8,g*.8,g,g,g),s%4===0){let m=p+Math.cos(o)*.05,M=d+Math.sin(o)*.05;i.push(p-f*2,a-.05,d-y*2,p+f*2,a-.05,d+y*2,m,a+.3,M),t.push(1.15,1.05,.9,1.15,1.05,.9,1.2,1.1,.95)}}let n=new We;return n.setAttribute("position",new Ue(i,3)),n.setAttribute("color",new Ue(t,3)),n.computeVertexNormals(),n}function qx(i,t){let e=t.L,n=t.W,s=Math.cos(t.a),o=Math.sin(t.a),r=t.z-.45,a=t.tilt||0,l=(d,f,y)=>I(t.x+s*d-o*f,t.y+o*d+s*f,y+f*a),c=[];for(let d=0;d<=6;d++){let f=d/6;c.push([-e/2+e*.72*f,-n/2*(1-.08*f)])}c.push([e/2-n*.35,-n*.22],[e/2,0],[e/2-n*.35,n*.22]);for(let d=6;d>=0;d--){let f=d/6;c.push([-e/2+e*.72*f,n/2*(1-.08*f)])}let u=t.k==="skiff"?.75:.95;(d=>hi(i.wood,d,()=>{for(let f=0;f<c.length;f++){let y=c[f],g=c[(f+1)%c.length],m=.82,M=g[1]-y[1],x=-(g[0]-y[0]);i.wood.quad(l(y[0]*m,y[1]*m,r),l(g[0]*m,g[1]*m,r),l(g[0],g[1],r+u),l(y[0],y[1],r+u),[0,0],[1,0],[1,.4],[0,.4],[s*M-o*x,.3,o*M+s*x])}}))([.62,.5,.4]),hi(i.plank,[.72,.62,.5],()=>{for(let d=1;d+1<c.length;d++)i.plank.tri(l(c[0][0]*.95,c[0][1]*.95,r+u-.25),l(c[d][0]*.95,c[d][1]*.95,r+u-.25),l(c[d+1][0]*.95,c[d+1][1]*.95,r+u-.25),[0,0],[1,0],[1,1],Je)});let p=r+u-.25;if(t.k==="sampan"||t.k==="ferry"){let d=t.k==="ferry"?-e*.28:-e*.22,f=t.k==="ferry"?e*.22:e*.12,y=n*.46,g=t.k==="ferry"?1.55:1.15,m=6;if(hi(i.cloth,t.k==="ferry"?[.5,.44,.36]:[.3,.28,.25],()=>{for(let M=0;M<m;M++){let x=Math.PI*M/m,_=Math.PI*(M+1)/m,v=Math.cos(x)*y,T=Math.cos(_)*y,E=p+.25+Math.sin(x)*g,R=p+.25+Math.sin(_)*g;i.cloth.quad(l(d,v,E),l(f,v,E),l(f,T,R),l(d,T,R),[0,0],[1,0],[1,1],[0,1],Je)}}),t.k==="ferry")for(let M of[d+.6,(d+f)/2,f-.6])i.wood.box(t.x+s*M,t.y+o*M,p,p+.45,.35,n*.8,t.a,1)}if(t.k==="cargo"){let d=0;for(let y=-e*.3;y<e*.22;y+=1.25,d++){let g=(d%2?.35:-.35)*(n/2.4);d%3===2?hi(i.cloth,[.82,.76,.62],()=>i.cloth.box(t.x+s*y-o*g,t.y+o*y+s*g,p,p+.55,1,.7,t.a+.1,1)):hi(i.wood,[.85,.72,.55],()=>i.wood.box(t.x+s*y-o*g,t.y+o*y+s*g,p,p+.85,1,.95,t.a,1))}let f=-e*.4;hi(i.cloth,[.3,.28,.25],()=>{for(let y=0;y<4;y++){let g=Math.PI*y/4,m=Math.PI*(y+1)/4,M=n*.44;i.cloth.quad(l(f-.9,Math.cos(g)*M,p+.2+Math.sin(g)*1),l(f+.9,Math.cos(g)*M,p+.2+Math.sin(g)*1),l(f+.9,Math.cos(m)*M,p+.2+Math.sin(m)*1),l(f-.9,Math.cos(m)*M,p+.2+Math.sin(m)*1),[0,0],[1,0],[1,1],[0,1],Je)}})}t.k!=="skiff"?i.wood.beam(l(-e/2-.2,0,p+.5),l(-e/2-1.6,.25,p-.6),.09,.09):i.wood.beam(l(-e*.1,-n*.3,p+.1),l(e*.25,n*.3,p+.15),.07,.07)}function Ap(i,t,e,n){let s=i.shore;if(!s)return;for(let y of s.wharfs||[])t.quay.prism(y.p,y.bed,y.z-.3,!1,!1,.4),t.coping.prism(y.p,y.z-.3,y.z,!0,!1,.45),t.wet.prism(y.band,9.72,10.32,!1,!1,.4);for(let y of s.terraces||[]){t.quay.prism(y.p,y.bed,y.z-.3,!1,!1,.4),t.coping.prism(y.p,y.z-.3,y.z,!0,!1,.45),t.wet.prism(y.band,9.72,10.32,!1,!1,.4);for(let T=0;T+1<y.rail.length;T++){let E=y.rail[T],R=y.rail[T+1],S=Math.hypot(R[0]-E[0],R[1]-E[1]);t.coping.box((E[0]+R[0])/2,(E[1]+R[1])/2,y.z,y.z+.8,S+.3,.32,Math.atan2(R[1]-E[1],R[0]-E[0]),.6)}let g=y.pav;if(!g)continue;let m=Math.cos(g.a),M=Math.sin(g.a),x=g.s/2-.35,_=y.z+.3;t.stone.box(g.x,g.y,y.z,_,g.s+.5,g.s+.5,g.a,.6);let v=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([T,E])=>[g.x+m*T*x-M*E*x,g.y+M*T*x+m*E*x]);for(let T of v)t.red.cyl(T[0],T[1],_,_+3,.16,8,!1);for(let T=0;T<4;T++){let E=v[T],R=v[(T+1)%4];t.wood.beam(I(E[0],E[1],_+2.95),I(R[0],R[1],_+2.95),.22,.28),t.red.beam(I(E[0],E[1],_+.5),I(R[0],R[1],_+.5),.1,.08)}Ke(t,{c:[g.x,g.y],L:g.s+1,D:g.s+1,a:g.a,ze:_+3.05,top:_+5,ty:"pyr",oh:.5,ohg:.3,ridgeDeco:!1})}for(let[y,g,m,M]of s.benches||[]){let x=Math.cos(M),_=Math.sin(M);for(let v of[-.7,.7])t.stone.box(y+x*v,g+_*v,m,m+.4,.3,.45,M,.8);t.coping.box(y,g,m+.4,m+.52,1.9,.55,M,.8)}for(let y of s.chutes||[]){let[g,m]=[y.a,y.b],M=Math.atan2(m[1]-g[1],m[0]-g[0]),x=-Math.sin(M),_=Math.cos(M),v=y.w;t.wood.beam(I(g[0],g[1],g[2]),I(m[0],m[1],m[2]),v,.22);for(let T of[-1,1])t.wood.beam(I(g[0]+x*T*v/2,g[1]+_*T*v/2,g[2]+.3),I(m[0]+x*T*v/2,m[1]+_*T*v/2,m[2]+.3),.1,.55);hi(t.deck,[.7,.7,.7],()=>t.deck.beam(I(g[0],g[1],g[2]+.14),I(m[0],m[1],m[2]+.14),v-.2,.06));for(let[T,E,R,S]of y.legs||[]){for(let b of[-1,1])t.wood.box(T+x*b*(v/2+.15),E+_*b*(v/2+.15),R,S,.22,.22,M,1);t.wood.beam(I(T+x*(v/2+.15),E+_*(v/2+.15),R+.3),I(T-x*(v/2+.15),E-_*(v/2+.15),S-.2),.1,.1),t.wood.box(T,E,S-.2,S,.24,v+.6,M,1)}t.wood.box(m[0],m[1],m[2]-.6,m[2]+.4,1.4,v+.4,M,1)}for(let y of s.stairs||[]){let[g,m]=[y.a,y.b],M=Math.hypot(m[0]-g[0],m[1]-g[1]),x=Math.atan2(m[1]-g[1],m[0]-g[0]),_=Math.max(2,Math.round(Math.abs(y.za-y.zb)/.18));for(let R=0;R<_;R++){let S=(R+.5)/_,b=g[0]+(m[0]-g[0])*S,P=g[1]+(m[1]-g[1])*S,N=y.za+(y.zb-y.za)*((R+1)/_)+(y.za>y.zb?(y.za-y.zb)/_:0);t.quay.box(b,P,y.bed,N-.16,M/_+.02,y.w,x,.4),t.stone.box(b,P,N-.16,N,M/_+.06,y.w,x,.7)}let v=y.o,T=y.w/2+.16,E=y.wz||10;t.wet.box((g[0]+m[0])/2+v[0]*(y.w/2+.03),(g[1]+m[1])/2+v[1]*(y.w/2+.03),E-.28,E+.32,M,.08,x,.4),t.coping.beam(I(g[0]+v[0]*T,g[1]+v[1]*T,y.za+.35),I(m[0]+v[0]*T,m[1]+v[1]*T,y.zb+.35),.32,.7)}for(let[y,g,m]of s.bollards||[])t.stone.cyl(y,g,m,m+.5,.2,8,!1),t.coping.cyl(y,g,m+.5,m+.6,.25,8,!0);for(let[y,g,m,M]of s.posts||[])t.wood.cyl(y,g,m,M,.13,6,!0);for(let[y,g,m]of s.lamps||[])t.wood.box(y,g,m,m+3,.16,.16,0,1),t.wood.beam(I(y,g,m+2.9),I(y+.7,g,m+2.9),.09,.09),t.lantern.cyl(y+.62,g,m+2.2,m+2.75,.2,8,!0);let o=y=>{let g=y*2654435761>>>0||1;return()=>(g=g*16807%2147483647)/2147483647};for(let[y,g,m,M,x]of s.crates||[]){let _=o(x+11),v=Math.cos(M),T=Math.sin(M);for(let E=0;E<6;E++){let R=(E%3-1)*1.15,S=(Math.floor(E/3)-.5)*1.15,b=_()<.45&&E<4?1:0,P=.75+_()*.25;hi(t.wood,[.92*P,.78*P,.6*P],()=>t.wood.box(y+v*R-T*S,g+T*R+v*S,m,m+1.05,1.05,1.05,M+(_()-.5)*.15,1)),b&&hi(t.wood,[.85,.7,.52],()=>t.wood.box(y+v*R-T*S,g+T*R+v*S,m+1.05,m+2.05,1,1,M+(_()-.5)*.2,1))}}for(let[y,g,m,M,x]of s.barrels||[]){let _=o(x+23);for(let v=0;v<7;v++){let T=(_()-.5)*2.6,E=(_()-.5)*1.8;hi(t.wood,[.7,.55,.4],()=>t.wood.cyl(y+T,g+E,m,m+.95,.36,9,!0))}}for(let[y,g,m,M,x]of s.sacks||[]){let _=o(x+37),v=Math.cos(M),T=Math.sin(M);hi(t.cloth,[.86,.8,.66],()=>{for(let E=0;E<9;E++){let R=(E%3-1)*.95,S=(Math.floor(E/3)%3-1)*.62,b=E>5?.45:0;t.cloth.box(y+v*R-T*S,g+T*R+v*S,m+b,m+b+.45,.9,.58,M+(_()-.5)*.3,1)}})}for(let[y,g,m,M,x]of s.heaps||[])for(let _=0;_<9;_++){let v=_/9*Math.PI*2,T=(_+1)/9*Math.PI*2,E=1+.12*Math.sin(_*2.3),R=1+.12*Math.sin((_+1)*2.3);t.deck.tri(I(y+Math.cos(v)*M*E,g+Math.sin(v)*M*E,m),I(y+Math.cos(T)*M*R,g+Math.sin(T)*M*R,m),I(y+.3,g-.2,m+x),[0,0],[1,0],[.5,1],Je)}for(let y of s.cranes||[]){let g=Math.cos(y.a),m=Math.sin(y.a),M=y.z+y.h,x=y.z+2.2,_=[y.x+g*y.boom*.85,y.y+m*y.boom*.85],v=x+y.boom*.55;t.stone.box(y.x,y.y,y.z,y.z+.5,1.6,1.6,y.a,.6),t.wood.cyl(y.x,y.y,y.z+.5,M,.22,8,!0);for(let T of[-1,1])t.wood.beam(I(y.x-m*T*1.5,y.y+g*T*1.5,y.z+.5),I(y.x,y.y,y.z+3.2),.13,.13);t.wood.beam(I(y.x,y.y,x),I(_[0],_[1],v),.2,.2),t.iron.beam(I(y.x,y.y,M-.2),I(_[0],_[1],v+.1),.05,.05),t.iron.beam(I(_[0],_[1],v),I(_[0],_[1],y.z+3.2),.05,.05),hi(t.wood,[.88,.74,.56],()=>t.wood.box(_[0],_[1],y.z+2.1,y.z+3.1,1.1,1.1,y.a+.3,1))}for(let y of s.sheds||[]){let g=Math.cos(y.a),m=Math.sin(y.a);for(let[M,x]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.wood.cyl(y.x+g*M*(y.L/2-.25)-m*x*(y.D/2-.25),y.y+m*M*(y.L/2-.25)+g*x*(y.D/2-.25),y.z,y.z+y.h,.13,6,!1);Ke(t,{c:[y.x,y.y],L:y.L,D:y.D,a:y.a,ze:y.z+y.h,top:y.z+y.h+y.D*.32,ty:"gable",oh:.35,ohg:.3,ends:["auto","auto"],ridgeDeco:!1})}for(let[y,g,m,M,x]of s.nets||[]){let _=Math.cos(M),v=Math.sin(M),T=[y-_*x/2,g-v*x/2],E=[y+_*x/2,g+v*x/2];for(let R of[T,E])t.wood.cyl(R[0],R[1],m,m+2.3,.07,5,!0);t.wood.beam(I(T[0],T[1],m+2.2),I(E[0],E[1],m+2.2),.07,.07),hi(t.cloth,[.32,.38,.33],()=>t.cloth.quad(I(T[0],T[1],m+2.15),I(E[0],E[1],m+2.15),I(E[0]-v*.3,E[1]+_*.3,m+.6),I(T[0]-v*.3,T[1]+_*.3,m+.6),[0,0],[1,0],[1,1],[0,1],[-v,0,_]))}for(let y of s.boats||[])qx(t,y);let r=["#8f8b84","#9a9184","#7a766f","#a39b8e"].map(y=>new Ce(y)),a=Gx(),l=new ke({color:"#ffffff",roughness:.95,flatShading:!0}),c=[[],[],[]];for(let y of s.rocks||[])c[y[7]].push(y);let u=new Ze,h=new Cn,p=new ri,d=new nt,f=new nt;if(c.forEach((y,g)=>{if(!y.length)return;let m=new gi(a[g],l,y.length);m.castShadow=!0,m.receiveShadow=!0,y.forEach((M,x)=>{let[_,v,T,E,R,S,b,,P]=M;f.set(...I(_,v,T)),p.set(b,S,b*.5),h.setFromEuler(p),d.set(E,E*R,E*(.85+.3*(x*.37%1))),m.setMatrixAt(x,u.compose(f,h,d)),m.setColorAt(x,r[P])}),m.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),m.computeBoundingSphere(),e.add(m)}),(s.reeds||[]).length){let y=["#b9a35a","#a99446","#c4b170","#8f9450"].map(x=>new Ce(x)),g=Xx(),m=new ke({color:"#ffffff",vertexColors:!0,roughness:.9,side:cn}),M=new gi(g,m,s.reeds.length);M.castShadow=!1,M.receiveShadow=!0,s.reeds.forEach((x,_)=>{let[v,T,E,R,S,b]=x;f.set(...I(v,T,E-.1)),h.setFromAxisAngle(new nt(0,1,0),S),d.set(R,R*(.9+.2*(_*.61%1)),R),M.setMatrixAt(_,u.compose(f,h,d)),M.setColorAt(_,y[b])}),M.instanceMatrix.needsUpdate=!0,M.instanceColor&&(M.instanceColor.needsUpdate=!0),M.computeBoundingSphere(),e.add(M)}}var Yx={story:"#f3e9d2",main:"#f2c14e",hold:"#ee7d63",tele:"#f3e9d2",merch:"#f3e9d2",sideI:"#f2c14e",sideN:"#f2c14e",event:"#f3e9d2",chest:"#f3e9d2",amb:"#d9d3c7"},$x="#1d1814",Rp={S:1,M:1.15,L:1.3},wc=i=>i.tp==="story"||i.tp==="hold"?Rp[i.tier]||1:i.tp==="main"?Rp.L:1,ei=i=>+i.toFixed(2),Sc=(i,t,e,n)=>`M${-t},${i}H${t}C${ei(t+(e-t)*.45)},${ei(i+n*.55)} ${ei(e-.9)},${ei(i+n*.8)} ${e},${ei(i+n)}L${ei(e-1.2)},${ei(i+n+1.15)}H${ei(-e+1.2)}L${-e},${ei(i+n)}C${ei(-e+.9)},${ei(i+n*.8)} ${ei(-t-(e-t)*.45)},${ei(i+n*.55)} ${-t},${i}Z`,ln=(i,t,e,n)=>`M${i},${t}H${e}V${n}H${i}Z`,Cp=(i,t,e,n)=>`M${i},${t}V${n}H${e}V${t}Z`,Pp="M-5,-4.4C-5,-9.6 5.2,-10.2 5.2,-4.5C5.2,-0.8 0.2,-1.1 0.2,3",Zi={storyS:"M0,-8.6L9.2,-0.8H6.6V8.4H-6.6V-0.8H-9.2Z"+Cp(-1.9,3.4,1.9,8.4),storyM:Sc(-7.4,3.2,10.2,4.4)+ln(-2.2,-9.4,2.2,-7.4)+ln(-6.4,-1.9,-3.8,7.2)+ln(3.8,-1.9,6.4,7.2)+ln(-8.8,7.2,8.8,9.2)+ln(-3.8,-1.9,3.8,.2),storyL:ln(-.75,-11,.75,-9.3)+Sc(-9.3,1.4,5.2,2.5)+ln(-2.7,-5.7,2.7,-4.1)+Sc(-4.1,2.7,7.6,2.6)+ln(-4.3,-.4,4.3,1.4)+Sc(1.4,4.3,10,2.7)+ln(-6.2,5.2,6.2,8.4)+ln(-8.2,8.4,8.2,10),holdS:"M0,-5.6L9.4,8.6H-9.4Z M0,1.4L-3.1,8.6H3.1Z"+ln(-.55,-10.6,.55,-5.2)+"M0.55,-10.6L5.2,-9.2L0.55,-7.8Z",holdM:"M-6.6,-4.6L0,-10.6L6.6,-4.6Z"+ln(-4.8,-4.6,4.8,-.6)+ln(-6.8,-.6,6.8,1.2)+"M-4.6,1.2H-2.8L-4.6,9.6H-6.4Z M2.8,1.2H4.6L6.4,9.6H4.6Z M-5.2,4.2L5.6,6.8L5.3,8L-5.5,5.4Z",holdL:ln(-10,-.2,10,9.4)+ln(-10,-2.6,-7.8,-.2)+ln(-5.6,-2.6,-3.6,-.2)+ln(3.6,-2.6,5.6,-.2)+ln(7.8,-2.6,10,-.2)+ln(-3.6,-7.6,3.6,-.2)+ln(-3.6,-10,-2,-7.6)+ln(-.8,-10,.8,-7.6)+ln(2,-10,3.6,-7.6)+"M2.5,9.4V5.2A2.5,2.5 0 0 0 -2.5,5.2V9.4Z",pin:"M0,10.8C-2.2,7 -7.2,2.4 -7.2,-3.4A7.2,7.2 0 0 1 7.2,-3.4C7.2,2.4 2.2,7 0,10.8Z M0,-6.4A3,3 0 0 0 0,-0.4A3,3 0 0 0 0,-6.4Z",coin:"M0,-7.6A7.6,7.6 0 1 1 0,7.6A7.6,7.6 0 1 1 0,-7.6Z"+Cp(-2.1,-2.1,2.1,2.1),anvil:"M-9,-5.2H7.4V-0.6H3.6L2.7,1.8L5.2,4.2V7H-5.2V4.2L-2.7,1.8L-3.6,-0.6H-4.6C-6.9,-0.9-8.5,-2.8-9,-5.2Z",bowl:"M-8.2,0.6H8.2C8,5 4.6,7.8 0,7.8C-4.6,7.8-8,5-8.2,0.6Z M-6.6,-0.6C-6.4,-4.6-3.6,-6.2 0,-6.2C3.6,-6.2 6.4,-4.6 6.6,-0.6Z M2.4,-3.6L8.6,-10.2L9.6,-9.3L3.8,-2.8Z M4.6,-2.2L10.2,-8.2L11.1,-7.2L5.9,-1.4Z",scale:ln(-.9,-6.6,.9,7.2)+"M0,-9.6A1.5,1.5 0 1 1 0,-6.6A1.5,1.5 0 1 1 0,-9.6Z"+ln(-8.8,-6.2,8.8,-4.8)+ln(-8.5,-4.8,-7.7,.8)+ln(7.7,-4.8,8.5,.8)+"M-11.2,0.8H-5C-5.4,3.4-6.6,4.4-8.1,4.4C-9.6,4.4-10.8,3.4-11.2,0.8Z M5,0.8H11.2C10.8,3.4 9.6,4.4 8.1,4.4C6.6,4.4 5.4,3.4 5,0.8Z M-5.2,9.4L-3.4,7.2H3.4L5.2,9.4Z",book:"M-1,-5.3C-3.9,-7.3-7.2,-7.3-9.4,-6.1V6.8C-7.2,5.5-3.9,5.5-1,7.4Z M1,-5.3C3.9,-7.3 7.2,-7.3 9.4,-6.1V6.8C7.2,5.5 3.9,5.5 1,7.4Z",bangI:"M0,-11.2L11.2,0L0,11.2L-11.2,0Z M0,-8.2L-8.2,0L0,8.2L8.2,0Z M-1.6,-6H1.6L1.05,2H-1.05Z M0,3.4A1.6,1.6 0 1 1 0,6.6A1.6,1.6 0 1 1 0,3.4Z",bangN:"M-2.6,-9.8H2.6L1.75,2.6H-1.75Z M0,4.6A2.5,2.5 0 1 1 0,9.6A2.5,2.5 0 1 1 0,4.6Z",qdot:"M0.2,5.7A2.2,2.2 0 1 1 0.2,10.1A2.2,2.2 0 1 1 0.2,5.7Z",amb:"M0,-8.6A3.3,3.3 0 1 1 0,-2A3.3,3.3 0 1 1 0,-8.6Z M-5.8,9V3.6C-5.8,0.4-3.5,-1.2 0,-1.2C3.5,-1.2 5.8,0.4 5.8,3.6V9Z",chestM:ln(-9.6,-6.6,9.6,-2.4)+ln(-8.8,-1.4,8.8,7.8)+"M-1.5,-3.6H1.5V0.8H-1.5Z",chestH:"M-9.4,-1.6V-3.6C-9.4,-7.2-6.2,-8.6 0,-8.6C6.2,-8.6 9.4,-7.2 9.4,-3.6V-1.6Z"+ln(-9.4,-.6,9.4,8.4)+"M0,-3.4L2.4,-0.9L0,1.6L-2.4,-0.9Z"},Lp={\u6742\u8D27\u6536\u8D2D:"coin",\u88C5\u5907:"anvil",\u98DF\u7269:"bowl",\u6750\u6599:"scale",\u7279\u6B8A:"book"},Tb=Object.keys(Lp),Ip={L:"L",M:"M",S:"S"},Zx={\u4E2D:"M",\u9AD8:"H"};function jx(i,t={}){let e=t.col||Yx,n=t.line||$x,s=t.lw||2.4,o=i.tp,r=(a,l)=>`<path d="${a}" fill="${l}" stroke="${n}" stroke-width="${s}" stroke-linejoin="round" paint-order="stroke"/>`;return o==="story"?r(Zi["story"+(Ip[i.tier]||"M")],e.story):o==="main"?r(Zi.storyL,e.main):o==="hold"?r(Zi["hold"+(Ip[i.tier]||"M")],e.hold):o==="tele"?r(Zi.pin,e.tele):o==="merch"?r(Zi[Lp[i.sub]||"coin"],e.merch):o==="sideI"?r(Zi.bangI,e.sideI):o==="sideN"?r(Zi.bangN,e.sideN):o==="event"?`<path d="${Pp}" fill="none" stroke="${n}" stroke-width="${ei(3.6+s)}" stroke-linecap="round" stroke-linejoin="round"/><path d="${Pp}" fill="none" stroke="${e.event}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>`+r(Zi.qdot,e.event):o==="chest"?r(Zi["chest"+(Zx[i.tier]||"M")],e.chest):r(Zi.amb,e.amb)}var hr=(i,t)=>`<svg viewBox="-12.6 -12.6 25.2 25.2" aria-hidden="true">${jx(i,t)}</svg>`;var Dp=new Un,Ec=new nt,ms=class extends na{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Ue(t,3)),this.setAttribute("uv",new Ue(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ds(e,6,1);return this.setAttribute("instanceStart",new mi(n,3,0)),this.setAttribute("instanceEnd",new mi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Ds(e,6,1);return this.setAttribute("instanceColorStart",new mi(n,3,0)),this.setAttribute("instanceColorEnd",new mi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new jr(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Dp.setFromBufferAttribute(e),this.boundingBox.union(Dp))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ec.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ec)),Ec.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Ec));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};ge.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Kn.line={uniforms:fa.merge([ge.common,ge.fog,ge.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var zi=class extends zn{constructor(t){super({type:"LineMaterial",uniforms:fa.clone(Kn.line.uniforms),vertexShader:Kn.line.vertexShader,fragmentShader:Kn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var fu=new an,Up=new nt,Np=new nt,On=new an,Bn=new an,ji=new an,du=new nt,pu=new Ze,Hn=new ia,zp=new nt,Tc=new Un,Ac=new jn,Ki=new an,Ji,yo;function Fp(i,t,e){return Ki.set(0,0,-t,1).applyMatrix4(i.projectionMatrix),Ki.multiplyScalar(1/Ki.w),Ki.x=yo/e.width,Ki.y=yo/e.height,Ki.applyMatrix4(i.projectionMatrixInverse),Ki.multiplyScalar(1/Ki.w),Math.abs(Math.max(Ki.x,Ki.y))}function Kx(i,t){let e=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,o=n.attributes.instanceEnd,r=Math.min(n.instanceCount,s.count);for(let a=0,l=r;a<l;a++){Hn.start.fromBufferAttribute(s,a),Hn.end.fromBufferAttribute(o,a),Hn.applyMatrix4(e);let c=new nt,u=new nt;Ji.distanceSqToSegment(Hn.start,Hn.end,u,c),u.distanceTo(c)<yo*.5&&t.push({point:u,pointOnLine:c,distance:Ji.origin.distanceTo(u),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Jx(i,t,e){let n=t.projectionMatrix,o=i.material.resolution,r=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),h=-t.near;Ji.at(1,ji),ji.w=1,ji.applyMatrix4(t.matrixWorldInverse),ji.applyMatrix4(n),ji.multiplyScalar(1/ji.w),ji.x*=o.x/2,ji.y*=o.y/2,ji.z=0,du.copy(ji),pu.multiplyMatrices(t.matrixWorldInverse,r);for(let p=0,d=u;p<d;p++){if(On.fromBufferAttribute(l,p),Bn.fromBufferAttribute(c,p),On.w=1,Bn.w=1,On.applyMatrix4(pu),Bn.applyMatrix4(pu),On.z>h&&Bn.z>h)continue;if(On.z>h){let x=On.z-Bn.z,_=(On.z-h)/x;On.lerp(Bn,_)}else if(Bn.z>h){let x=Bn.z-On.z,_=(Bn.z-h)/x;Bn.lerp(On,_)}On.applyMatrix4(n),Bn.applyMatrix4(n),On.multiplyScalar(1/On.w),Bn.multiplyScalar(1/Bn.w),On.x*=o.x/2,On.y*=o.y/2,Bn.x*=o.x/2,Bn.y*=o.y/2,Hn.start.copy(On),Hn.start.z=0,Hn.end.copy(Bn),Hn.end.z=0;let y=Hn.closestPointToPointParameter(du,!0);Hn.at(y,zp);let g=ua.lerp(On.z,Bn.z,y),m=g>=-1&&g<=1,M=du.distanceTo(zp)<yo*.5;if(m&&M){Hn.start.fromBufferAttribute(l,p),Hn.end.fromBufferAttribute(c,p),Hn.start.applyMatrix4(r),Hn.end.applyMatrix4(r);let x=new nt,_=new nt;Ji.distanceSqToSegment(Hn.start,Hn.end,_,x),e.push({point:_,pointOnLine:x,distance:Ji.origin.distanceTo(_),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}var Hs=class extends Te{constructor(t=new ms,e=new zi({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let r=0,a=0,l=e.count;r<l;r++,a+=2)Up.fromBufferAttribute(e,r),Np.fromBufferAttribute(n,r),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Up.distanceTo(Np);let o=new Ds(s,2,1);return t.setAttribute("instanceDistanceStart",new mi(o,1,0)),t.setAttribute("instanceDistanceEnd",new mi(o,1,1)),this}raycast(t,e){let n=this.material.worldUnits,s=t.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Ji=t.ray;let r=this.matrixWorld,a=this.geometry,l=this.material;yo=l.linewidth+o,a.boundingSphere===null&&a.computeBoundingSphere(),Ac.copy(a.boundingSphere).applyMatrix4(r);let c;if(n)c=yo*.5;else{let h=Math.max(s.near,Ac.distanceToPoint(Ji.origin));c=Fp(s,h,l.resolution)}if(Ac.radius+=c,Ji.intersectsSphere(Ac)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Tc.copy(a.boundingBox).applyMatrix4(r);let u;if(n)u=yo*.5;else{let h=Math.max(s.near,Tc.distanceToPoint(Ji.origin));u=Fp(s,h,l.resolution)}Tc.expandByScalar(u),Ji.intersectsBox(Tc)!==!1&&(n?Kx(this,e):Jx(this,s,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(fu),this.material.uniforms.resolution.value.set(fu.z,fu.w))}};var mu=.45,gu=26,Qx=5;function kp(i,t){let{scene:e,camera:n,controls:s,host:o}=t,r=new $e;r.name="quests",e.add(r);let a=document.createElement("div");a.className="sb-qs",o.appendChild(a);let l=new nt,c=[],u=Q=>{let ft=new zi({linewidth:6,transparent:!0,depthWrite:!1,toneMapped:!1,...Q});return c.push(ft),ft},h=Q=>String(Q??"").replace(/[&<>"]/g,ft=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[ft]);function p(Q,ft){let Et=Q.pts,rt=[],it=ct=>Q.ins.some(([J,st])=>ct>=J-.01&&ct<=st+.01);for(let ct=1;ct<Et.length;ct++){let J=Et[ct-1],st=Et[ct],ht=(J[3]+st[3])/2;it(ht)===ft&&rt.push(...I(J[0],J[1],J[2]+mu),...I(st[0],st[1],st[2]+mu))}return rt}function d(Q,ft,Et){if(!Q.length)return null;let rt=new ms;rt.setPositions(Q);let it=new Hs(rt,ft);return it.computeLineDistances(),it.renderOrder=Et,it.frustumCulled=!1,r.add(it),it}let f=i.map(Q=>{let ft=new Ce(Q.color),Et=p(Q,!1),rt=p(Q,!0),it=p(Q,!1).concat(p(Q,!0)),ct={xray:u({color:ft,opacity:.3,depthTest:!1}),casing:u({color:16777215,opacity:1}),body:u({color:ft,opacity:1}),dcase:u({color:16777215,opacity:.95}),dbody:u({color:ft,opacity:1,dashed:!0,dashSize:2.4,gapSize:1.5})},J=[d(it,ct.xray,5),d(Et,ct.casing,6),d(Et,ct.body,7),d(rt,ct.dcase,6),d(rt,ct.dbody,7)].filter(Boolean),st=Q.id==="M"?"\u8D77":"\u63A5",ht=document.createElement("button");ht.type="button",ht.className="sb-qst",ht.style.setProperty("--c",Q.color),ht.innerHTML=`<b>${st}</b>${h(Q.id==="M"?"\u4E3B\u7EBF":Q.name)}`,ht.title=`${Q.kind}\uFF1A${Q.title}`,ht.addEventListener("click",dt=>{dt.stopPropagation(),t.onQuest&&t.onQuest(Q.id)}),a.appendChild(ht);let Dt=[{el:ht,x:Q.giver.at[0],y:Q.giver.at[1],z:Q.giver.at[2]+2.4,kind:"start"}];Q.stops.forEach((dt,xt)=>{let At=xt===Q.stops.length-1,Lt=document.createElement("div");Lt.className="sb-qn"+(At?" last":""),Lt.style.setProperty("--c",Q.color);let Qt=dt.entry?`${dt.entry.name.replace(dt.name,"")||dt.entry.name}\u8FDB`+(dt.exit?`\u3001${dt.exit.name.replace(dt.name,"")||dt.exit.name}\u51FA`:""):"";if(Lt.innerHTML=`<i>${dt.n}</i><span>${h(dt.name)}${Qt?`<small>${h(Qt)}</small>`:""}${At?"<small>\u7EC8\u70B9</small>":""}</span>`,a.appendChild(Lt),Dt.push({el:Lt,x:dt.on[0],y:dt.on[1],z:dt.on[2]+1.6,kind:"step"}),dt.exit){let jt=document.createElement("div");jt.className="sb-qio out",jt.style.setProperty("--c",Q.color),jt.textContent="\u51FA",a.appendChild(jt),Dt.push({el:jt,x:dt.exit.at[0],y:dt.exit.at[1],z:dt.exit.at[2]+1.2,kind:"io"})}});let Ft=Q.pts,Tt=Ft[Ft.length-1][3],Gt=dt=>{let xt=0,At=Ft.length-1;for(;At-xt>1;){let Kt=xt+At>>1;Ft[Kt][3]<=dt?xt=Kt:At=Kt}let Lt=Ft[xt],Qt=Ft[At],jt=(dt-Lt[3])/Math.max(1e-6,Qt[3]-Lt[3]);return[Lt[0]+(Qt[0]-Lt[0])*jt,Lt[1]+(Qt[1]-Lt[1])*jt,Lt[2]+(Qt[2]-Lt[2])*jt,Qt[0]-Lt[0],Qt[1]-Lt[1],Qt[2]-Lt[2]]},q=Ft.reduce((dt,xt)=>[Math.min(dt[0],xt[0]),Math.min(dt[1],xt[1]),Math.max(dt[2],xt[0]),Math.max(dt[3],xt[1]),Math.min(dt[4],xt[2]),Math.max(dt[5],xt[2])],[1e9,1e9,-1e9,-1e9,1e9,-1e9]);return{q:Q,col:ft,m:ct,objs:J,marks:Dt,L:Tt,at:Gt,box:q,on:!0}}),y=Object.fromEntries(f.map(Q=>[Q.q.id,Q])),g=f.reduce((Q,ft)=>Q+Math.ceil(ft.L/gu)+1,0),m=new Float32Array(g*3),M=new Float32Array(g*3),x=new Float32Array(g*3),_=new We;_.setAttribute("position",new je(m,3)),_.setAttribute("aDir",new je(M,3)),_.setAttribute("aCol",new je(x,3));let v=new zn({uniforms:{uSize:{value:17},uRes:{value:new oe(1,1)},uPR:{value:1}},vertexShader:`uniform float uSize; uniform vec2 uRes; uniform float uPR; attribute vec3 aDir; attribute vec3 aCol; varying vec3 vCol; varying vec2 vDir;
      void main() { vec4 c0 = projectionMatrix * modelViewMatrix * vec4(position, 1.0); vec4 c1 = projectionMatrix * modelViewMatrix * vec4(position + aDir, 1.0);
        vec2 d = (c1.xy / c1.w - c0.xy / c0.w) * uRes; float l = length(d); vDir = l > 1e-5 ? d / l : vec2(1.0, 0.0); vCol = aCol;
        gl_Position = c0; gl_PointSize = uSize * uPR; }`,fragmentShader:`varying vec3 vCol; varying vec2 vDir;
      float sd(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0); return length(pa - ba * h); }
      void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; p.y = -p.y; vec2 q = vec2(dot(p, vDir), dot(p, vec2(-vDir.y, vDir.x)));
        float d = min(sd(q, vec2(-0.38, 0.6), vec2(0.4, 0.0)), sd(q, vec2(-0.38, -0.6), vec2(0.4, 0.0)));
        if (d > 0.36) discard; gl_FragColor = vec4(d < 0.2 ? vec3(1.0) : vCol, 1.0); }`,transparent:!0,depthWrite:!1,depthTest:!0}),T=new Vi(_,v);T.frustumCulled=!1,T.renderOrder=8,r.add(T);let E=!0,R=null,S=0,b=0,P=0,N=.3,z=!1,O=0,G=0;function j(){let Q=o.getBoundingClientRect(),ft=0;for(let Et of o.querySelectorAll(".ui")){let rt=Et.getBoundingClientRect();rt.height>0&&rt.top-Q.top<140&&(ft=Math.max(ft,rt.bottom-Q.top))}return ft+4}function et(){for(let Q of f){let ft=R&&R!==Q.q.id,Et=E&&Q.on;for(let rt of Q.objs)rt.visible=Et;Q.m.body.opacity=Q.m.dbody.opacity=ft?.22:1,Q.m.casing.opacity=Q.m.dcase.opacity=ft?.18:1,Q.m.xray.opacity=N*(ft?.2:1),Q.objs[0].visible=Et&&N>.004}}function tt(Q,ft,Et){if((Q!==S||ft!==b||G++%20===0)&&(O=j()),Q!==S||ft!==b){for(let Tt of c)Tt.resolution.set(Q,ft);v.uniforms.uRes.value.set(Q,ft),v.uniforms.uPR.value=Math.min(2,window.devicePixelRatio||1),S=Q,b=ft}if(r.visible=E,!E){a.style.display="none";return}a.style.display="";let rt=n.position.distanceTo(s.target),it=Et?6:Math.max(5.5,Math.min(12,2600/Math.max(1,rt)));if(Math.abs(it-P)>.05){for(let Tt of f)Tt.m.body.linewidth=Tt.m.dbody.linewidth=Tt.m.xray.linewidth=it,Tt.m.casing.linewidth=Tt.m.dcase.linewidth=it+4;v.uniforms.uSize.value=Math.round(it*1.9+6),P=it}let ct=Et?0:Math.max(0,Math.min(.3,(rt-140)/500));Math.abs(ct-N)>.005&&(N=ct,et());let J=performance.now()/1e3,st=0;for(let Tt of f){if(!Tt.on||R&&R!==Tt.q.id)continue;let Gt=J*Qx%gu;for(let q=Gt+8;q<Tt.L-4;q+=gu){let dt=Tt.at(q),xt=3*st,At=I(dt[0],dt[1],dt[2]+mu+.05);m[xt]=At[0],m[xt+1]=At[1],m[xt+2]=At[2];let Lt=I(dt[0]+dt[3],dt[1]+dt[4],dt[2]+dt[5]),Qt=I(dt[0],dt[1],dt[2]);if(M[xt]=Lt[0]-Qt[0],M[xt+1]=Lt[1]-Qt[1],M[xt+2]=Lt[2]-Qt[2],x[xt]=Tt.col.r,x[xt+1]=Tt.col.g,x[xt+2]=Tt.col.b,st++,st>=g)break}}_.setDrawRange(0,st),_.attributes.position.needsUpdate=_.attributes.aDir.needsUpdate=_.attributes.aCol.needsUpdate=!0;let ht=[];for(let Tt of f){let Gt=R===Tt.q.id,q=R&&!Gt;for(let dt of Tt.marks){let xt=Tt.on&&!z&&!Et&&!(q&&dt.kind!=="start"),At=0;if(xt&&(l.set(...I(dt.x,dt.y,dt.z)),At=n.position.distanceTo(l),l.project(n),(l.z>=1||Math.abs(l.x)>1.05||Math.abs(l.y)>1.05||dt.kind==="io"&&!Gt&&At>240)&&(xt=!1)),!xt){dt.vis!==!1&&(dt.el.style.display="none",dt.vis=!1);continue}ht.push({mk:dt,dim:q,near:Gt||At<260,sx:(l.x+1)/2*Q,sy:(1-l.y)/2*ft,prio:(Gt?0:10)+(dt.kind==="step"?1:dt.kind==="start"?2:3)})}}ht.sort((Tt,Gt)=>Tt.prio-Gt.prio);let Dt=[],Ft=Tt=>Dt.some(Gt=>Tt[0]<Gt[2]&&Tt[2]>Gt[0]&&Tt[1]<Gt[3]&&Tt[3]>Gt[1]);for(let Tt of ht){let{mk:Gt,sx:q,sy:dt}=Tt,xt=null;if(Gt.vis!==!0&&(Gt.el.style.display="",Gt.vis=!0),Gt.el.classList.toggle("dim",!!Tt.dim),Gt.kind==="step"){let At=Tt.near;At&&(Gt.wN==null&&(Gt.el.classList.add("near"),Gt.wN=Gt.el.offsetWidth),xt=[q-11,dt-12,q-11+Gt.wN,dt+12],Ft(xt)&&(At=!1)),At||(xt=[q-11,dt-11,q+11,dt+11]),Gt.el.classList.toggle("near",At)}else if(Gt.kind==="start"){Gt.w==null&&(Gt.w=Gt.el.offsetWidth,Gt.h=Gt.el.offsetHeight);let At=0,Lt=!1,Qt=jt=>[q-Gt.w/2,dt-16-Gt.h-jt,q+Gt.w/2,dt-16-jt];for(let jt=0;jt<4&&(xt=Qt(At),!(!Ft(xt)&&xt[1]>=O));jt++)At+=Gt.h+3;if(Ft(xt)||xt[1]<O){let jt=[q-Gt.w/2,dt+16,q+Gt.w/2,dt+16+Gt.h];!Ft(jt)||Qt(0)[1]<O?(xt=jt,Lt=!0,At=0):xt[1]<O&&(At=0,xt=Qt(0))}Gt.dy!==At&&(Gt.el.style.setProperty("--dy",At+"px"),Gt.dy=At),Gt.dn!==Lt&&(Gt.el.classList.toggle("dn",Lt),Gt.dn=Lt)}else if(xt=[q-11,dt-10,q+11,dt+10],Ft(xt)){Gt.el.style.display="none",Gt.vis=!1;continue}Dt.push(xt),Gt.el.style.transform=`translate(${q.toFixed(1)}px,${dt.toFixed(1)}px)`}}function mt(Q){let ft=y[Q];if(!ft)return null;let[Et,rt,it,ct,J,st]=ft.box,ht=Math.max(40,it-Et)+30,Dt=Math.max(40,ct-rt)+30,Ft=Math.max(.5,o.clientWidth/Math.max(1,o.clientHeight)),Tt=44*Math.PI/180,Gt=2*Math.atan(Math.tan(Tt/2)*Ft),q=58*Math.PI/180,dt=Math.max(95,ht/2/(Math.tan(Gt/2)*.64),Dt*Math.sin(q)/2/(Math.tan(Tt/2)*.7)),xt=(Et+it)/2+(Ft>1.1?.07*2*dt*Math.tan(Gt/2):0),At=(rt+ct)/2,Lt=(J+st)/2;return{pos:[xt,At+dt*Math.cos(q),Lt+dt*Math.sin(q)],tgt:[xt,At,Lt],fov:44}}return et(),{list:i,update:tt,view:mt,show:Q=>{E=Q,et()},shown:()=>E,focus:Q=>{R=Q&&y[Q]?Q:null,et()},focused:()=>R,quiet:Q=>{z=Q}}}function Op(){let i=new $e;i.name="hero";let t=new ke({color:"#34465a",roughness:.75}),e=new ke({color:"#2a2e35",roughness:.8}),n=new ke({color:"#d9b48f",roughness:.8}),s=new ke({color:"#c9822b",roughness:.6}),o=new ke({color:"#3b2a1e",roughness:.9}),r=[];for(let b of[t,e,n,s,o])b.transparent=!0,b.opacity=1;let a=(b,P,N,z,O,G)=>{let j=new Te(b,P);return j.position.set(z,O,G),j.castShadow=!0,j.renderOrder=10,N.add(j),r.push(j),j},l=(b,P)=>new zr(b,P,4,10),c=new $e;c.position.y=.94,i.add(c),a(new nn(.3,.14,.18),e,c,0,.02,0);let u=new $e;u.position.y=.06,c.add(u);let h=a(new qe(.19,.15,.48,12),t,u,0,.27,0);h.scale.z=.72;let p=a(new qe(.155,.155,.06,12),s,u,0,.05,0);p.scale.z=.75,a(new nn(.22,.24,.1),s,u,0,.32,-.14),a(new qe(.05,.06,.08,8),n,u,0,.55,0);let d=a(new li(.115,16,12),n,u,0,.67,.01);a(new li(.118,16,8,0,Math.PI*2,0,Math.PI*.5),e,d,0,.012,-.008);function f(b){let P=new $e;P.position.set(b*.23,.48,0),u.add(P),a(l(.05,.2),t,P,0,-.14,0);let N=new $e;return N.position.y=-.29,P.add(N),a(l(.044,.18),t,N,0,-.12,0),a(new li(.05,10,8),n,N,0,-.27,0),{sh:P,el:N}}function y(b){let P=new $e;P.position.set(b*.1,-.02,0),c.add(P),a(l(.068,.32),e,P,0,-.21,0);let N=new $e;N.position.y=-.44,P.add(N),a(l(.058,.32),e,N,0,-.21,0);let z=a(new nn(.1,.07,.24),o,N,0,-.45,.05);return{hp:P,kn:N,ft:z}}let g={a:f(1),l:y(1)},m={a:f(-1),l:y(-1)},M=new Nn({color:"#ffd166",transparent:!0,opacity:.38,depthTest:!0,depthFunc:Qo,depthWrite:!1}),x=r.map(b=>{let P=new Te(b.geometry,M);return P.renderOrder=9,P.raycast=()=>{},b.add(P),P}),_=0,v=0,T=0,E=!0;function R(b){E=b;for(let P of x)P.visible=b}function S(b,P,N){let z=P>0?1:0;v+=(z-v)*(1-Math.exp(-b*10));let O=Math.abs(N||0)>1.2?1:0;T+=(O-T)*(1-Math.exp(-b*8));let G=P>=2?2.6:1.8;_=(_+b*G)%1;let j=Math.sin(_*Math.PI*2),et=Math.cos(_*Math.PI*2),tt=(P>=2?.8:.45)*v,mt=(P>=2?1.2:.6)*v;if(g.l.hp.rotation.x=-tt*j,m.l.hp.rotation.x=tt*j,g.l.kn.rotation.x=mt*Math.max(0,-et)+.08,m.l.kn.rotation.x=mt*Math.max(0,et)+.08,g.a.sh.rotation.x=.7*tt*j,m.a.sh.rotation.x=-.7*tt*j,g.a.sh.rotation.z=.08,m.a.sh.rotation.z=-.08,g.a.el.rotation.x=-(.25+(P>=2?1:.35)*v),m.a.el.rotation.x=g.a.el.rotation.x,T>.01){let Q=T;g.a.sh.rotation.x=g.a.sh.rotation.x*(1-Q)+(-2.7+.45*j)*Q,m.a.sh.rotation.x=m.a.sh.rotation.x*(1-Q)+(-2.7-.45*j)*Q,g.a.el.rotation.x=g.a.el.rotation.x*(1-Q)-.4*Q,m.a.el.rotation.x=g.a.el.rotation.x,g.l.hp.rotation.x=g.l.hp.rotation.x*(1-Q)+(-.6-.4*j)*Q,m.l.hp.rotation.x=m.l.hp.rotation.x*(1-Q)+(-.6+.4*j)*Q,g.l.kn.rotation.x=g.l.kn.rotation.x*(1-Q)+1.1*Q,m.l.kn.rotation.x=g.l.kn.rotation.x}u.rotation.x=(P>=2?.16:.05)*v+.1*T,c.position.y=.94+(P>=2?.045:.02)*v*Math.abs(et)+(1-v)*.006*Math.sin(performance.now()/700)}return{root:i,animate:S,setGhost:R,head:d}}var Bp={G:"#f4efe6",C:"#f4efe6",P:"#f0a050",I:"#48c6d6"};function Hp({host:i,S:t,groundImg:e,onClick:n}){let[s,o,r,a]=t.meta.bbox,l=r-s,c=a-o,u=document.createElement("div");u.className="sb-map",u.hidden=!0,u.innerHTML='<div class="hd"><b>\u5927\u5730\u56FE</b><span class="k"></span><button type="button" class="zm">\u653E\u5927</button></div><canvas></canvas><div class="lg"></div>',i.appendChild(u);let h=u.querySelector("canvas"),p=h.getContext("2d"),d=u.querySelector(".k"),f=u.querySelector(".lg"),y=u.querySelector(".zm"),g=!1,m=null;y.addEventListener("click",O=>{O.stopPropagation(),g=!g,y.textContent=g?"\u5168\u533A":"\u653E\u5927",u.classList.toggle("follow",g),v=!0});function M(){let G=Math.round(1100*c/l),j=document.createElement("canvas");j.width=1100,j.height=G;let et=j.getContext("2d"),tt=1100/l;et.drawImage(e,0,0,1100,G),et.fillStyle="rgba(40, 30, 22, 0.12)",et.fillRect(0,0,1100,G);let mt=(Q,ft,Et)=>{et.beginPath(),Q.forEach((rt,it)=>{let ct=(rt[0]-s)*tt,J=(rt[1]-o)*tt;it?et.lineTo(ct,J):et.moveTo(ct,J)}),et.closePath(),ft&&(et.fillStyle=ft,et.fill()),Et&&(et.strokeStyle=Et,et.stroke())};et.lineWidth=.6;for(let Q of t.bld)mt(Q.p,"rgba(92, 78, 64, 0.78)","rgba(40, 32, 26, 0.55)");for(let Q of t.key)mt(Q.p,"rgba(120, 66, 48, 0.85)","rgba(40, 24, 18, 0.6)");et.strokeStyle="rgba(70, 60, 50, 0.9)",et.lineCap="round";for(let Q of t.cwalls||[])et.lineWidth=Math.max(1.5,Q.w*tt),et.beginPath(),Q.p.forEach((ft,Et)=>{let rt=(ft[0]-s)*tt,it=(ft[1]-o)*tt;Et?et.lineTo(rt,it):et.moveTo(rt,it)}),et.stroke();return j}let x={};function _(O){let G=O.tp+"|"+(O.tier||"")+"|"+(O.sub||"");if(!x[G]){let j=new Image;j.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(hr(O).replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" ')),x[G]=j}return x[G]}let v=!0,T=0,E=[0,0];function R(){let O=u.getBoundingClientRect(),G=Math.round(O.width-16),j=Math.round(G*(g?1:c/l)),et=Math.min(2,window.devicePixelRatio||1);return G<=0?!1:((E[0]!==G||E[1]!==j)&&(h.style.width=G+"px",h.style.height=j+"px",h.width=Math.round(G*et),h.height=Math.round(j*et),E=[G,j]),!0)}let S=[s,o,l,c];function b(O,G){let j=h.width/S[2];return[(O-S[0])*j,(G-S[1])*j]}h.addEventListener("click",O=>{if(!n)return;let G=h.getBoundingClientRect(),j=(O.clientX-G.left)/G.width,et=(O.clientY-G.top)/G.height;n(S[0]+j*S[2],S[1]+et*S[3])}),h.__w2s=(O,G)=>{let j=h.getBoundingClientRect();return[(O-S[0])/S[2]*j.width,(G-S[1])/S[3]*j.height]};function P(O,G){let j=performance.now();if(!G&&!v&&j-T<90||(T=j,v=!1,u.hidden||!R()))return;m||(m=M());let et=h.width,tt=h.height,mt=et/E[0];if(g&&O.pos){let it=E[0]<260?110:150;S=[O.pos[0]-it,O.pos[1]-it*tt/et,it*2,it*2*tt/et]}else S=[s,o,l,c];p.setTransform(1,0,0,1,0,0),p.clearRect(0,0,et,tt);let Q=m.width/l;p.drawImage(m,(S[0]-s)*Q,(S[1]-o)*Q,S[2]*Q,S[3]*Q,0,0,et,tt);let ft=(g?17:12.5)*mt;for(let it of O.pois||[]){let[ct,J]=b(it.p.at[0],it.p.at[1]);if(ct<-20||J<-20||ct>et+20||J>tt+20)continue;if(it.st==="glow"){let Dt=(g?13:8.5)*mt,Ft=p.createRadialGradient(ct,J,0,ct,J,Dt);Ft.addColorStop(0,"rgba(255, 236, 170, 0.95)"),Ft.addColorStop(.35,"rgba(255, 209, 102, 0.6)"),Ft.addColorStop(1,"rgba(255, 209, 102, 0)"),p.fillStyle=Ft,p.beginPath(),p.arc(ct,J,Dt,0,7),p.fill();continue}let st=_(it.p),ht=ft*(it.p.tp==="story"||it.p.tp==="hold"||it.p.tp==="main"?1.18:1);p.globalAlpha=it.st==="done"?.5:1,st.complete&&st.naturalWidth&&p.drawImage(st,ct-ht/2,J-ht/2,ht,ht),p.globalAlpha=1,it.st==="done"?(p.fillStyle="#2f8f5b",p.beginPath(),p.arc(ct+ht*.32,J+ht*.3,3.6*mt,0,7),p.fill(),p.strokeStyle="#fff",p.lineWidth=1.3*mt,p.beginPath(),p.moveTo(ct+ht*.32-1.8*mt,J+ht*.3),p.lineTo(ct+ht*.32-.4*mt,J+ht*.3+1.4*mt),p.lineTo(ct+ht*.32+2*mt,J+ht*.3-1.5*mt),p.stroke()):it.st==="tele"&&(p.strokeStyle="#1fb0c4",p.lineWidth=2*mt,p.beginPath(),p.arc(ct,J,ht*.62,0,7),p.stroke())}let Et=O.trk||[],rt=Math.min(Et.length,O.n==null?Et.length:O.n);p.lineCap="round",p.lineJoin="round";for(let it of[0,1]){p.lineWidth=(it?2.2:4.4)*mt;let ct=null,J=!1;for(let st=0;st<rt;st++){let ht=Et[st],Dt=ht[5]||"G",[Ft,Tt]=b(ht[1],ht[2]),Gt=st>0&&Math.hypot(ht[1]-Et[st-1][1],ht[2]-Et[st-1][2])>30;if(!J||Gt||Dt!==ct){if(J&&p.stroke(),p.strokeStyle=it?Bp[Dt]||Bp.G:"rgba(25, 20, 16, 0.55)",p.beginPath(),st>0&&!Gt){let[q,dt]=b(Et[st-1][1],Et[st-1][2]);p.moveTo(q,dt),p.lineTo(Ft,Tt)}else p.moveTo(Ft,Tt);J=!0,ct=Dt}else p.lineTo(Ft,Tt)}if(J&&O.pos){let[st,ht]=b(O.pos[0],O.pos[1]);p.lineTo(st,ht)}J&&p.stroke()}if(O.tgt){let[it,ct]=b(O.tgt.x,O.tgt.y),J=(6+2*Math.sin(j/220))*mt;if(p.strokeStyle="#ffd166",p.lineWidth=2.2*mt,p.beginPath(),p.arc(it,ct,J,0,7),p.stroke(),O.pos){let[st,ht]=b(O.pos[0],O.pos[1]);p.setLineDash([3*mt,4*mt]),p.lineWidth=1.4*mt,p.beginPath(),p.moveTo(st,ht),p.lineTo(it,ct),p.stroke(),p.setLineDash([])}}if(O.pos){let[it,ct]=b(O.pos[0],O.pos[1]),[J,st]=O.dir||[0,-1],ht=(g?9:7.5)*mt,Dt=-st,Ft=J;p.beginPath(),p.moveTo(it+J*ht,ct+st*ht),p.lineTo(it-J*ht*.7+Dt*ht*.62,ct-st*ht*.7+Ft*ht*.62),p.lineTo(it-J*ht*.35,ct-st*ht*.35),p.lineTo(it-J*ht*.7-Dt*ht*.62,ct-st*ht*.7-Ft*ht*.62),p.closePath(),p.fillStyle="#e8473c",p.fill(),p.strokeStyle="#fff",p.lineWidth=1.6*mt,p.stroke()}d.textContent=O.note||""}function N(O,G){u.hidden=!O,G!=null&&(f.innerHTML=G),v=!0}return{draw:P,show:N,el:u,toggleZoom:()=>y.click(),setZoom:O=>{g!==!!O&&y.click()},zoomed:()=>g,shown:()=>!u.hidden}}var tM={K1:"#c0392b",K2:"#8e5cc4",K3:"#1f9aa3",K4:"#b8913a",K5:"#3f9a5c"};function Vp(i,t){let{scene:e,camera:n,controls:s,host:o,camXY:r,opts:a}=t,l=t.hAt||(()=>-1e9),c=t.gz||(()=>0),u=t.bAt||(()=>-1e9),h=t.S,p=!!t.treeFade,d=new nt,f=document.createElement("div");f.className="sb-pois",o.appendChild(f);let y=document.createElement("div");y.className="sb-guide",y.hidden=!0,o.appendChild(y);let g=new Set(["story","hold","main"]),m={S:50,M:70,L:90},M=w=>w.tp==="main"?90:m[w.tier||"S"]||50,x=new Set(["story","hold","main","sideN","sideI"]),_=i.pois.map(w=>{let C=document.createElement("button");C.type="button",C.className="sb-poi t-"+w.tp+(w.start===!1?" locked":""),C.setAttribute("aria-label",w.name),C.title=w.name,C.innerHTML=hr(w);let F=wc(w);F!==1&&(C.style.width=C.style.height=(26*F).toFixed(1)+"px"),C.addEventListener("click",L=>{L.stopPropagation(),a.onPoi&&a.onPoi(w)}),f.appendChild(C);let B=w.zc!=null?w.zc:w.z+(g.has(w.tp)?6:2.2);return{p:w,el:C,v:new nt(...I(w.at[0],w.at[1],B)),x:w.at[0],y:w.at[1],z:B,shown:null}}),v=Object.fromEntries(_.map(w=>[w.p.id,w])),T=!0,E=!1,R={},S=i.quests?kp(i.quests,{scene:e,camera:n,controls:s,host:o,onQuest:w=>a.onQuest&&a.onQuest(w)}):null,b=new $e;b.name="keyroutes",e.add(b);let P={};for(let w of i.routes){let C=w.pts,F=[],B=[];for(let ot=0;ot<C.length;ot++){let Mt=C[Math.max(0,ot-1)],Ct=C[Math.min(C.length-1,ot+1)],kt=Ct[0]-Mt[0],lt=Ct[1]-Mt[1],yt=Math.hypot(kt,lt)||1;kt/=yt,lt/=yt;let Ot=C[ot][2]+.32;if(F.push(...I(C[ot][0]-lt*.9,C[ot][1]+kt*.9,Ot),...I(C[ot][0]+lt*.9,C[ot][1]-kt*.9,Ot)),ot){let pt=2*ot;B.push(pt-2,pt-1,pt,pt-1,pt+1,pt)}}let L=new We;L.setAttribute("position",new Ue(F,3)),L.setIndex(B);let W=new Te(L,new Nn({color:tM[w.id]||"#c0392b",transparent:!0,opacity:.72,depthWrite:!1,side:cn,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}));W.renderOrder=3,b.add(W);let H=[0];for(let ot=1;ot<C.length;ot++)H.push(H[ot-1]+Math.hypot(C[ot][0]-C[ot-1][0],C[ot][1]-C[ot-1][1]));P[w.id]={r:w,P:C,cum:H,len:H[H.length-1]}}let N=Op();N.root.visible=!1,e.add(N.root);let z=N.root,O={story:"\u5267\u60C5\u63A2\u7D22\u5730\u70B9",hold:"\u636E\u70B9",event:"\u4E8B\u4EF6",chest:"\u5B9D\u7BB1",merch:"\u5546\u4EBA",amb:"\u6C1B\u56F4\u70B9",tele:"\u4F20\u9001\u70B9",sideN:"\u652F\u7EBF",sideI:"\u91CD\u8981\u652F\u7EBF",main:"\u4E3B\u7EBF",qplace:"\u652F\u7EBF\u5730\u70B9"},G={story:"\u63A2\u7D22",hold:"\u653B\u636E\u70B9",event:"\u73A9\u4E8B\u4EF6",chest:"\u5F00\u5B9D\u7BB1",amb:"\u770B\u70ED\u95F9","side-accept":"\u63A5\u652F\u7EBF","side-step":"\u505A\u652F\u7EBF\u8FD9\u4E00\u6B65",shop:"\u901B\u5546\u5E97",teleport:"\u4F20\u9001\u8BFB\u6761","tele-unlock":"\u6FC0\u6D3B\u4F20\u9001\u70B9",idle:"\u7AD9\u7740\u53D1\u5446","main-flow":"\u505A\u4E3B\u7EBF\u7D27\u51D1\u6D41\u7A0B",vantage:"\u9AD8\u5904\u770B\u56DB\u5468",lookout:"\u9AD8\u5904\u5F20\u671B",map:"\u770B\u4E00\u773C\u5730\u56FE",notice:"\u505C\u4E0B\u6765\u591A\u770B\u4E24\u773C",wrong:"\u53D1\u73B0\u8D70\u9519\uFF0C\u770B\u4E00\u773C\u5730\u56FE",browse:"\u5728\u5BA4\u5185\u8F6C\u8F6C"},j={icon:"\u770B\u5230",bld:"\u770B\u5230",arrive:"\u8D70\u5230\u8DDF\u524D\u624D\u53D1\u73B0",vantage:"\u4ECE\u9AD8\u5904\u770B\u5230",lookout:"\u4ECE\u9AD8\u5904\u770B\u5230"},et={G:"\u5730\u9762",P:"\u8DD1\u9177",I:"\u5BA4\u5185",C:"\u5730\u9762"},tt=w=>String(w||"").split("\uFF1A");function mt(w){let C=w[1],F=w[5],B=w[6]||"";if(C==="U")return"\u5F92\u624B\u722C\u4E0A\u623F";if(C==="A")return`\u987A\u7740${B||"\u5F15\u5BFC\u7269"}\u4E0A\u623F`;if(C==="D")return F==="vstairs"?`\u4ECE${tt(B)[0]}\u91CC\u9762\u7684\u697C\u68AF\u4E0B\u6765`:F==="vclimb"?`\u4ECE${tt(B)[0]}\u722C\u4E0B\u6765`:"\u4ECE\u623F\u4E0A\u4E0B\u5230\u8857\u4E0A";if(C==="R")return`\u8D70${B||"\u7EF3\u5B50"}\u8FC7\u8857`;if(C==="Z")return`\u987A\u7740${B||"\u6ED1\u7D22"}\u6ED1\u4E0B\u6765`;if(C==="B")return`\u7A7F\u8FC7${B||"\u8FC7\u8857\u697C"}`;if(C==="I"&&F==="room"&&k){let L=k.run.trk,W=$t(L,w[0]-.05,Mt=>Mt[0]),H=W>=0?L[W][5]:"G",ot="G";for(let Mt=Math.max(0,W+1);Mt<L.length&&Mt<W+60;Mt++)if(L[Mt][0]>w[0]+.5&&L[Mt][5]!=="I"){ot=L[Mt][5];break}return H==="P"&&ot!=="P"?`\u4ECE\u5C4B\u9876\u94BB\u8FDB${B||"\u697C\u91CC"}\u697C\u4E0A\u7684\u7A97\uFF0C\u4E0B\u697C\u51FA\u95E8`:H!=="P"&&ot==="P"?`\u8FDB${B||"\u697C\u91CC"}\uFF0C\u4E0A\u697C\u4ECE\u7A97\u53E3\u51FA\u5230\u5C4B\u9876`:`\u7A7F\u8FC7${B||"\u5C4B\u91CC"}`}if(C==="I"&&B.startsWith("\u4E0A\u697C")&&k){let L=k.run.trk,W=$t(L,w[0]-.05,H=>H[0]);if(W>=0&&L[W][5]==="P")return"\u4ECE\u5C4B\u9876\u94BB\u8FDB\u697C\u4E0A\u7A97\u53E3\uFF0C\u4E0B\u697C\u51FA\u95E8"}return C==="I"?B.startsWith("\u4E0A\u697C")?"\u8FDB\u95E8\u4E0A\u697C\uFF0C\u4ECE\u697C\u4E0A\u7A97\u53E3\u51FA\u5230\u5C4B\u9876":B==="\u8FDE\u901A\u94FA\u9762"?"\u4ECE\u8FDE\u901A\u7684\u94FA\u5B50\u91CC\u7A7F\u8FC7\u53BB":`\u7A7F\u8FC7${B||"\u5C4B\u91CC"}`:C==="V"?F==="vstairs"?`\u8D70\u91CC\u9762\u7684\u697C\u68AF\u4E0A${tt(B)[0]}`:B.includes("\uFF1A")?`\u987A\u7740${tt(B)[1]}\u722C\u4E0A${tt(B)[0]}`:`\u5F92\u624B\u722C\u4E0A${B||"\u9AD8\u5904"}`:""}let Q=w=>String(w??"").replace(/[&<>"]/g,C=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[C]),ft=document.createElement("div");ft.className="sb-bub",ft.hidden=!0,o.appendChild(ft);let Et=document.createElement("div");Et.className="sb-tgt",Et.hidden=!0,o.appendChild(Et);let rt=document.createElement("div");rt.className="sb-sees",o.appendChild(rt);let it=document.createElement("div");it.className="sb-fade",it.hidden=!0,it.innerHTML='<div class="t"></div><div class="s"></div>',o.appendChild(it);let ct=it.querySelector(".t"),J=it.querySelector(".s"),st=document.createElement("div");st.className="sb-prompt",st.hidden=!0,o.appendChild(st);let ht=null,Dt=null,Ft=()=>(!ht&&h&&t.groundImg&&(ht=Hp({host:o,S:h,groundImg:t.groundImg,onClick:(w,C)=>Dt&&Dt(w,C)})),ht),Tt=new $e,Gt=new Te(new qe(.45,.45,18,14,1,!0),new Nn({color:"#ffd166",transparent:!0,opacity:.5,depthWrite:!1,side:cn}));Gt.position.y=9,Gt.renderOrder=4,Tt.add(Gt);let q=new Te(new $r(1.3,1.9,36),new Nn({color:"#ffd166",transparent:!0,opacity:.9,depthWrite:!1,side:cn}));q.rotation.x=-Math.PI/2,q.position.y=.35,q.renderOrder=4,Tt.add(q),Tt.visible=!1,e.add(Tt);let dt=(()=>{let w=document.createElement("canvas");w.width=w.height=32;let C=w.getContext("2d");return C.fillStyle="#5a3a08",C.beginPath(),C.arc(16,16,14,0,7),C.fill(),C.fillStyle="#ffd166",C.beginPath(),C.arc(16,16,10,0,7),C.fill(),new Fn(w)})(),xt=new Float32Array(192),At=new We;At.setAttribute("position",new je(xt,3)),At.setDrawRange(0,0);let Lt=new Vi(At,new ls({color:"#ffffff",size:11,sizeAttenuation:!1,map:dt,transparent:!0,alphaTest:.3,depthWrite:!1}));Lt.renderOrder=4,Lt.visible=!1,Lt.frustumCulled=!1,e.add(Lt);let Qt=[];function jt(){for(let w of Qt)w.el.remove();Qt=[]}function Kt(w){let C=v[w[1]];if(!C)return;let F=document.createElement("div");for(F.className="sb-see",F.innerHTML=`<span class="k">${j[w[2]]||"\u770B\u5230"}</span>${Q(O[C.p.tp]||"")}\uFF1A${Q(C.p.name)}`,rt.appendChild(F),Qt.push({el:F,q:C,t0:performance.now()});Qt.length>4;)Qt.shift().el.remove()}function _e(w,C,F){let B=document.createElement("div");for(B.className="sb-see sb-mev",B.innerHTML=`<span class="k">${w}</span>${C}`,rt.appendChild(B),Qt.push({el:B,q:F||null,t0:performance.now()});Qt.length>4;)Qt.shift().el.remove()}function Pe(w){let C=k.run,F=v[w[2]];if(w[1]==="map")_e("\u5F00\u56FE",`${Q((C.pname||{})[w[2]]||w[2])}\uFF1A\u8FD9\u5757\u5730\u7684\u56FE\u6807\u4E0A\u4E86\u5927\u5730\u56FE`);else if(w[1]==="unlock")_e("\u6FC0\u6D3B\u4F20\u9001\u70B9",Q(F?F.p.name:w[2]),F);else if(w[1]==="tele")_e("\u4F20\u9001","\u5230"+Q(F?F.p.name:w[2]));else if(w[1]==="look"){let B=(w[5]||[]).map(L=>v[L]?v[L].p.name:"").filter(Boolean);_e("\u5728\u9AD8\u5904\u5F20\u671B",B.length?"\u770B\u4E0A\u4E86\uFF1A"+Q(B.slice(0,3).join("\u3001")):"\u56DB\u5468\u770B\u4E86\u4E00\u5708")}}function Y(w){let C=k.run.trk,F=k.run.acts,L=$t(F,k.t,lt=>lt[0])+1;for(;F[L]&&F[L][2]==="pause";)L++;let W=F[L],H=Math.min(W?W[0]:1/0,k.t+45),ot=0,Mt=0,Ct=2,kt=[k.px,k.py,k.pz];for(let lt=w+1;lt<C.length&&ot<64&&Mt<120;lt++){let yt=C[lt];if(yt[0]>H)break;let Ot=Math.hypot(yt[1]-kt[0],yt[2]-kt[1]);if(Ot>30)break;for(;Ct<=Mt+Ot&&ot<64;){let pt=(Ct-Mt)/(Ot||1);xt.set(I(kt[0]+(yt[1]-kt[0])*pt,kt[1]+(yt[2]-kt[1])*pt,kt[2]+(yt[3]-kt[2])*pt+.6),3*ot),ot++,Ct+=2}Mt+=Ot,kt=[yt[1],yt[2],yt[3]]}At.setDrawRange(0,ot),At.attributes.position.needsUpdate=!0,Lt.visible=ot>1}let D=w=>w>=90?`\u7EA6 ${Math.round(w/60)} \u5206\u949F`:`${Math.round(w)} \u79D2`;function St(w,C){let F=C[3]&&v[C[3]]?v[C[3]].p:null;return F?F.name:C[2]==="main"?"\u5B66\u9662":C[2]==="look"&&w.vname&&w.vname[C[3]]||""}function Xt(w,C){let F=k.run;if(w){let Ct=St(F,w),kt=Math.max(0,Math.min(1,(k.t-w[0])/(w[1]-w[0]||1))),lt=(F.passes||[]).find(ne=>ne[0]>=w[0]-1&&ne[0]<=w[1]),yt=F.ename||{},Ot=w[2]==="pause"&&w[4]==="browse"&&(F.rname||{})[w[3]]||"",pt=w[4]==="teleport"?`\u5F00\u5730\u56FE\uFF0C\u4F20\u9001\u5230${Q(Ct||"\u4F20\u9001\u70B9")}`:w[4]==="browse"?`\u597D\u5947\uFF0C\u5728${Q(Ot||"\u5C4B")}\u91CC\u8F6C\u8F6C`:w[2]==="pause"?`${Q(G[w[4]]||"\u505C\u4E00\u4E0B")}${Ct?"\uFF1A"+Q(Ct):""}`:`\u6B63\u5728${Q(G[w[4]]||"\u505A\u4E8B")}${Ct?"\uFF1A"+Q(Ct):""}`;ft.innerHTML=`<b>${pt}</b><span class="pg"><i style="width:${(kt*100).toFixed(0)}%"></i></span>`+(lt?`<small>${Q(yt[lt[2]]||"\u4E00\u4E2A\u53E3")}\u8FDB\u6765\uFF0C\u505A\u5B8C\u4ECE${Q(yt[lt[3]]||"\u53E6\u4E00\u4E2A\u53E3")}\u51FA\u53BB</small>`:""),k.tgt=null;return}let B="";if(F.pkev){let Ct=k.md||"G",kt=$t(F.pkev,k.t,yt=>yt[0]),lt=kt>=0&&k.t-F.pkev[kt][0]<20?F.pkev[kt]:null;B=`<span class="md m-${Ct}">${et[Ct]||""}</span>`+(lt?`<span class="pa">${Q(mt(lt))}</span>`:"")}if(!C){ft.innerHTML=B+"<b>\u521A\u4ECE\u8F66\u7AD9\u51FA\u6765\uFF0C\u770B\u770B\u56DB\u5468</b>",k.tgt=null;return}let L=k.t-C[0]<12;ft.innerHTML=B+`<b>${Q(C[5])}</b>`+(L&&C[6]===2?"<small>\u524D\u9762\u662F\u6B7B\u80E1\u540C\uFF0C\u53EA\u80FD\u6389\u5934\u51FA\u53BB</small>":L&&C[6]===1?"<small>\u8981\u53BB\u7684\u5730\u65B9\u5728\u8EAB\u540E\uFF0C\u6389\u5934</small>":"");let W=C[1]!=="room"&&C[2]&&v[C[2]],H=W?W.p.z:C[7]!=null?C[7]:k.pz,ot=String(C[5]||"").includes("\u5149\u70B9"),Mt=C[1]==="explore"?"\u6CA1\u8D70\u8FC7\u7684\u8DEF":C[1]==="main"?"\u4E3B\u7EBF\uFF1A\u5B66\u9662\u6B63\u95E8":C[1]==="room"?`\u5BA4\u5185\uFF1A${C[8]||""}`:ot?"\u5927\u5730\u56FE\u4E0A\u7684\u5149\u70B9":W?`${O[W.p.tp]||""}\uFF1A${W.p.name}`:C[8]||"\u8981\u53BB\u7684\u5730\u65B9";k.tgt={x:C[3],y:C[4],z:H,nm:Mt}}let qt={back:4.6,up:1.62,side:.8,pitch:-.12,fov:52},Nt=qt.back,be=!1;function ae(){be||(be=!0,n.near=.25,n.far=3200,n.updateProjectionMatrix())}function ve(){be&&(be=!1,n.near=2,n.far=6e3,n.updateProjectionMatrix())}let we=2.4,se=qt.side;function ye(w,C,F,B,L,W,H,ot){if(l(w,C)>=F)return ot;for(let Mt=.6;Mt<=ot;Mt+=.3){let Ct=w-B*W*Mt,kt=C-L*W*Mt,lt=F-H*Mt;if(l(Ct,kt)>lt-.35)return Mt-.45}return ot}function at(w,C,F,B,L,W,H,ot){let Mt=Math.cos(B),Ct=Math.sin(B),kt=-Ct,lt=Mt,yt=H||qt.back,Ot=yt,pt=qt.side;if(!ot){let vt=Math.cos(L),Pt=Math.sin(L);for(let Ht of[1,.5,0]){let re=qt.side*Ht,he=ye(w+kt*re,C+lt*re,F+qt.up,Mt,Ct,vt,Pt,yt);if(he>=yt-.01){Ot=yt,pt=re;break}(Ht===1||he>Ot+.2)&&(Ot=he,pt=re)}}Ot=Math.max(we,Ot),Nt=Ot<Nt?Ot:Nt+(Ot-Nt)*(1-Math.exp(-W*2.5)),se+=(pt-se)*(1-Math.exp(-W*5));let ne=Math.max(0,yt-Nt),ce=L-ne*.09,ee=Math.cos(ce),Jt=Math.sin(ce),te=w+kt*se,wt=C+lt*se,Rt=F+qt.up-ne*.15;n.position.set(...I(te-Mt*ee*Nt,wt-Ct*ee*Nt,Rt-Jt*Nt)),s.target.set(...I(te+Mt*ee*10,wt+Ct*ee*10,Rt+Jt*10)),n.lookAt(s.target),n.fov!==qt.fov&&(n.fov=qt.fov,n.updateProjectionMatrix())}function X(w,C,F,B,L,W,H,ot){N.root.position.set(...I(w,C,F)),N.root.visible=!0,B&&(N.root.rotation.y=Math.atan2(B[0],B[1])),N.animate(L,W,H),N.setGhost(ot!==!1)}let K=null,Wt=(w,C)=>{C=Math.max(0,Math.min(w.len,C));let F=0,B=w.cum.length-1;for(;B-F>1;){let Mt=F+B>>1;w.cum[Mt]<=C?F=Mt:B=Mt}let L=w.P[F],W=w.P[B],H=w.cum[B]-w.cum[F]||1,ot=(C-w.cum[F])/H;return[L[0]+(W[0]-L[0])*ot,L[1]+(W[1]-L[1])*ot,L[2]+(W[2]-L[2])*ot]};function $(w){let C=K.rr,F=K.t*6,B=Wt(C,F),L=Wt(C,F+6),W=Wt(C,F-2),H=L[0]-W[0],ot=L[1]-W[1],Mt=Math.hypot(H,ot)||1;if(H/=Mt,ot/=Mt,!K.dir)K.dir=[H,ot];else{let lt=1-Math.exp(-w*3.2);K.dir[0]+=(H-K.dir[0])*lt,K.dir[1]+=(ot-K.dir[1])*lt;let yt=Math.hypot(...K.dir)||1;K.dir[0]/=yt,K.dir[1]/=yt}let[Ct,kt]=K.dir;K.px=B[0],K.py=B[1],K.pz=B[2],X(B[0],B[1],B[2],K.dir,w,K.paused||K.done?0:2,0),at(B[0],B[1],B[2],Math.atan2(kt,Ct),qt.pitch,w)}function It(w){w&&(w.el.classList.remove("hit"),w.el.offsetWidth,w.el.classList.add("hit"))}let k=null,$t=(w,C,F)=>{let B=0,L=w.length-1;if(L<0||F(w[0])>C)return-1;for(;L-B>1;){let W=B+L>>1;F(w[W])<=C?B=W:L=W}return F(w[L])<=C?L:B},Yt=w=>w+.3*Math.sin(w*.79+1.3);function ut(w){if(w._ok)return;let C=w.trk,F=C.length,B=new Uint8Array(F),L=new Float32Array(F),W=(H,ot)=>{let Mt=Math.hypot(ot[1]-H[1],ot[2]-H[2]);return Mt>.3&&Mt<30&&ot[0]-H[0]<6&&H[5]==="G"&&ot[5]==="G"};for(let H=1;H+1<F;H++)B[H]=W(C[H-1],C[H])&&W(C[H],C[H+1])?1:0;for(let H=0;H<F;H++)L[H]=B[H]&&(H<1||B[H-1])&&(H+1>=F||B[H+1])?1:0;w._ok=B,w._w=L}let Ut=(w,C)=>[(w[0]+C[0])/2,(w[1]+C[1])/2,(w[2]+C[2])/2,(w[3]+C[3])/2];function Bt(w,C,F){let B=Ut(w[C-1],w[C]),L=Ut(w[C],w[C+1]),W=w[C],H=Math.max(0,Math.min(1,(F-B[0])/(L[0]-B[0]||1))),ot=(1-H)*(1-H),Mt=2*H*(1-H),Ct=H*H;return[ot*B[1]+Mt*W[1]+Ct*L[1],ot*B[2]+Mt*W[2]+Ct*L[2],ot*B[3]+Mt*W[3]+Ct*L[3]]}function me(w){let C=k.run,F=C.trk;ut(C);let B=Yt(w),L=Math.max(0,$t(F,B,pt=>pt[0])),W=F[L],H=F[Math.min(F.length-1,L+1)],ot=W[3]||H&&H[3]||c(W[1],W[2]);if(H===W||Math.hypot(H[1]-W[1],H[2]-W[2])>30)return[W[1],W[2],ot,L];if(H[0]-W[0]>20){let pt=Math.hypot(H[1]-W[1],H[2]-W[2]),ne=Math.max(.4,pt/5),ce=H[0]-ne;if(B<ce)return[W[1],W[2],ot,L];let ee=Math.min(1,(B-ce)/ne);return[W[1]+(H[1]-W[1])*ee,W[2]+(H[2]-W[2])*ee,ot+(H[3]-ot)*ee,L]}let Mt=Math.max(0,Math.min(1,(B-W[0])/(H[0]-W[0]||1))),Ct=W[1]+(H[1]-W[1])*Mt,kt=W[2]+(H[2]-W[2])*Mt,lt=ot+(H[3]-ot)*Mt,yt=Mt<.5?L:L+1;C._ok[yt]&&W[3]&&H[3]&&([Ct,kt,lt]=Bt(F,yt,B));let Ot=C._w[L]+(C._w[Math.min(F.length-1,L+1)]-C._w[L])*Mt;if(Ot>0){let pt=Math.hypot(H[1]-W[1],H[2]-W[2])||1,ne=Ot*(.33*Math.sin(w*.37+.7)+.12*Math.sin(w*1.13+2.1));Ct+=-(H[2]-W[2])/pt*ne,kt+=(H[1]-W[1])/pt*ne}return[Ct,kt,lt,L]}function xe(w){let C=k.run.trk,F=C[w];for(let B=w+1;B<Math.min(C.length,w+12);B++){let L=C[B],W=Math.hypot(L[1]-F[1],L[2]-F[2]);if(W>30)break;if(W>3)return[(L[1]-F[1])/W,(L[2]-F[2])/W]}for(let B=w-1;B>=Math.max(0,w-12);B--){let L=C[B],W=Math.hypot(F[1]-L[1],F[2]-L[2]);if(W>30)break;if(W>3)return[(F[1]-L[1])/W,(F[2]-L[2])/W]}return null}let Ne=.35,De=.4,Qe=w=>w&&(w[2]==="play"||w[2]==="main"||w[4]==="teleport");function Ve(w,C){let F=St(w,C),B=C[3]&&v[C[3]]?v[C[3]].p:null,L=C[1]-C[0],W=(w.passes||[]).find(Ct=>Ct[0]>=C[0]-1&&Ct[0]<=C[1]),H=w.ename||{},ot=W?`${H[W[2]]||"\u4E00\u4E2A\u53E3"}\u8FDB\uFF0C${H[W[3]]||"\u53E6\u4E00\u4E2A\u53E3"}\u51FA`:"",Mt=C[4];return Mt==="teleport"?[`\u4F20\u9001\u5230${F||"\u4F20\u9001\u70B9"}`,"\u8BFB\u6761"]:Mt==="main-flow"?[`\u4E3B\u7EBF\u7D27\u51D1\u6D41\u7A0B\uFF1A${F}`,[ot,D(L)].filter(Boolean).join(" \xB7 ")]:Mt==="story"?[`\u63A2\u7D22${F}`,[ot,D(L)].filter(Boolean).join(" \xB7 ")]:Mt==="hold"?[`\u653B\u4E0B\u636E\u70B9\uFF1A${F}`,[ot,D(L)].filter(Boolean).join(" \xB7 ")]:Mt==="event"?[`\u4E8B\u4EF6\uFF1A${F}`,[B&&B.play,D(L)].filter(Boolean).join(" \xB7 ")]:Mt==="chest"?[`\u5F00\u5B9D\u7BB1\uFF1A${F}`,D(L)]:Mt==="side-accept"?[`\u63A5\u652F\u7EBF\uFF1A${F}`,D(L)]:Mt==="side-step"?[`\u505A\u652F\u7EBF\u8FD9\u4E00\u6B65\uFF1A${F}`,[ot,D(L)].filter(Boolean).join(" \xB7 ")]:[`${G[Mt]||"\u505A\u4E8B"}${F?"\uFF1A"+F:""}`,D(L)]}function Vn(w,C,F,B){let L={a:w,e:0,mid:!1,onMid:F,hold:B||1.1};return ct.textContent=C[0],J.textContent=C[1]||"",it.style.opacity="0",it.hidden=!1,L}function ni(w,C){w.e+=C;let F=w.e,B=Ne+w.hold+De;if(F<Ne)it.style.opacity=(F/Ne).toFixed(3);else if(F<Ne+w.hold)it.style.opacity="1",w.mid||(w.mid=!0,w.onMid&&w.onMid());else if(F<B)w.mid||(w.mid=!0,w.onMid&&w.onMid()),it.style.opacity=(1-(F-Ne-w.hold)/De).toFixed(3);else return it.hidden=!0,!1;return it.classList.toggle("txt",F>Ne*.6&&F<Ne+w.hold+De*.5),!0}function Yn(){k.seen=new Set,k.done=new Set,k.k=0,k.ka=0,k.km=0,k.last=null,k.lastEx=0,k.tele=new Set,k.opened=new Set;let w=k.run.pev,C=k.run.acts,F=k.run.mev||[];for(;k.km<F.length&&F[k.km][0]<k.t;){let B=F[k.km];B[1]==="unlock"&&k.tele.add(B[2]),B[1]==="map"&&k.opened.add(B[2]),k.km++}for(;k.k<w.length&&w[k.k][0]<=k.t;)k.seen.add(w[k.k][1]),k.last=w[k.k],k.k++;for(;k.ka<C.length&&C[k.ka][1]<=k.t;){let B=C[k.ka];B[3]&&B[2]!=="look"&&B[2]!=="pause"&&k.done.add(B[3]),k.ka++}for(k.an=0;k.an<C.length&&C[k.an][0]<=k.t;)k.an++;k.dir=null,k.pi=-1,k.fade=null,it.hidden=!0,k.mmKey="",jt()}function $n(w){let C=k.run,F=C.acts,B=C.mev||[];for(;k.k<C.pev.length&&C.pev[k.k][0]<=k.t;){let L=C.pev[k.k];k.seen.add(L[1]),k.last=L,w||(It(v[L[1]]),Kt(L)),k.k++}for(;k.ka<F.length&&F[k.ka][1]<=k.t;){let L=F[k.ka];L[3]&&L[2]!=="look"&&L[2]!=="pause"&&k.done.add(L[3]),k.ka++}for(;k.km<B.length&&B[k.km][0]<=k.t;){let L=B[k.km];L[1]==="unlock"&&k.tele.add(L[2]),L[1]==="map"&&k.opened.add(L[2]),w||Pe(L),k.km++}}let ui=(t.PK&&t.PK.parc||[]).map(w=>({id:w.id,name:w.name,rings:w.rings.map(C=>{let F=[];for(let B=0;B+1<C.length;B+=2)F.push([C[B],C[B+1]]);return F})})),ii=t.PK&&t.PK.poip||{},gs=t.PK&&t.PK.open_r||30;function Fi(w,C,F){let B=[];for(let L of ui){let W=!1,H=1/0;for(let ot of L.rings)for(let Mt=0,Ct=ot.length-1;Mt<ot.length;Ct=Mt++){let kt=ot[Ct],lt=ot[Mt];lt[1]>C!=kt[1]>C&&w<(kt[0]-lt[0])*(C-lt[1])/(kt[1]-lt[1])+lt[0]&&(W=!W);let yt=kt[0]-lt[0],Ot=kt[1]-lt[1],pt=yt*yt+Ot*Ot,ne=pt?Math.max(0,Math.min(1,((w-lt[0])*yt+(C-lt[1])*Ot)/pt)):0;H=Math.min(H,Math.hypot(w-lt[0]-ne*yt,C-lt[1]-ne*Ot))}(W||H<=(F||gs))&&B.push(L)}return B}function Vs(w,C,F,B){let L=[];for(let W of _){let H=W.p,ot=H.tp;ot==="amb"||ot==="merch"||ot==="qplace"||(C.has(H.id)&&ot!=="tele"?L.push({p:H,st:"done"}):ot==="tele"?F.has(H.id)?L.push({p:H,st:"tele"}):w.has(H.id)&&L.push({p:H,st:"seen"}):w.has(H.id)||B&&x.has(ot)&&ii[H.id]&&B.has(ii[H.id])?L.push({p:H,st:"seen"}):((ot==="story"||ot==="hold")&&(H.tier==="M"||H.tier==="L")||ot==="main")&&L.push({p:H,st:"glow"}))}return L}let ys='<span><i class="gl"></i>\u5149\u70B9\uFF1A\u8FD8\u6CA1\u53BB\u8FC7\u7684\u5927\u4E2D\u578B\u5730\u70B9</span><span><i class="ck"></i>\u73A9\u8FC7</span><span><i class="ln" style="background:#f4efe6"></i>\u5730\u9762</span><span><i class="ln" style="background:#f0a050"></i>\u8DD1\u9177</span><span><i class="ln" style="background:#48c6d6"></i>\u5BA4\u5185</span>',_o=w=>(w=Math.max(0,Math.round(w)),`${Math.floor(w/60)}:${String(w%60).padStart(2,"0")}`);function _s(w){let C=k.run,F=C.acts,B=!1;if(k.fade)!k.paused&&!ni(k.fade,w)&&(k.fade=null),B=!!k.fade;else if(!k.paused){let Pt=$t(F,k.t,en=>en[0]),Ht=Pt>=0&&k.t<F[Pt][1]?F[Pt]:null,re=Ht&&(C.passes||[]).some(en=>en[0]>=Ht[0]-1&&en[0]<=Ht[1]),he=Ht?Ht[2]==="look"?Math.min(k.speed,(Ht[1]-Ht[0])/3.5):Ht[2]==="pause"?Math.min(k.speed,(Ht[1]-Ht[0])/(Ht[4]==="browse"?2.5:.9)):Math.max(k.speed,(Ht[1]-Ht[0])/(Ht[2]==="main"||re?3:1.2)):k.speed,ue=Math.min(C.t_end,k.t+w*he),Be=F[k.an];for(Be&&Be[0]<=ue&&Qe(Be)&&(ue=Be[0],k.fade=Vn(Be,Ve(C,Be),()=>{k.t=Math.min(C.t_end,Be[1]+.05),k.dir=null,$n(!0)},Be[2]==="main"?1.6:1.1)),k.t=ue;k.an<F.length&&F[k.an][0]<=k.t;)k.an++}$n(B);let L=$t(F,k.t,Pt=>Pt[0]),W=L>=0&&k.t<F[L][1]?F[L]:null,[H,ot,Mt,Ct]=me(k.t),kt=null,lt=1;if(!W||W[4]==="browse"){let Pt=me(k.t+.5),Ht=Math.hypot(Pt[0]-H,Pt[1]-ot);lt=Ht,Ht>.2&&(kt=[(Pt[0]-H)/Ht,(Pt[1]-ot)/Ht])}if(kt||(kt=xe(Ct)),kt)if(!k.dir)k.dir=kt.slice();else{let Pt=1-Math.exp(-w*3.2);k.dir[0]+=(kt[0]-k.dir[0])*Pt,k.dir[1]+=(kt[1]-k.dir[1])*Pt;let Ht=Math.hypot(...k.dir)||1;k.dir[0]/=Ht,k.dir[1]/=Ht}let[yt,Ot]=k.dir||[0,-1],pt=k.t-(k.prevT==null?k.t:k.prevT),ne=pt>1e-4&&k.pz!=null?(Mt-k.pz)/pt:0;k.prevT=k.t,k.px=H,k.py=ot,k.pz=Mt,k.md=C.trk[Ct][5]||"G";let ce=(!W||W[4]==="browse"&&lt>.2)&&!k.paused&&!k.fade&&k.t<C.t_end,ee=Math.atan2(Ot,yt),Jt=k.dir;if(W&&W[2]==="look"){let Pt=Math.max(0,Math.min(1,(k.t-W[0])/(W[1]-W[0]||1)));ee+=1.25*Math.sin(Pt*Math.PI*2)*Math.min(1,Pt*6,(1-Pt)*6),Jt=[Math.cos(ee),Math.sin(ee)]}else if(W&&W[2]==="pause"&&W[4]!=="browse"){let Pt=Math.max(0,Math.min(1,(k.t-W[0])/(W[1]-W[0]||1))),Ht=W[4]==="notice"&&v[W[3]];if(Ht){let re=Math.atan2(Ht.y-ot,Ht.x-H)-ee;re=Math.atan2(Math.sin(re),Math.cos(re)),ee+=re*Math.min(1,Pt*5,(1-Pt)*5)}else ee+=.45*Math.sin(Pt*Math.PI*2)*Math.min(1,Pt*6,(1-Pt)*6);Jt=[Math.cos(ee),Math.sin(ee)]}X(H,ot,Mt,Jt,w,ce?2:0,k.md==="P"?ne:0,!0),at(H,ot,Mt,ee,qt.pitch,w,null,k.md==="I");let te=C.intents?$t(C.intents,k.t,Pt=>Pt[0]):-1,wt=te>=0?C.intents[te]:null;Xt(W,wt),ft.hidden=!!k.fade,W||k.fade?Lt.visible=!1:(Ct!==k.pi||!Lt.visible)&&(Y(Ct),k.pi=Ct),k.tgt&&!k.fade?(Tt.position.set(...I(k.tgt.x,k.tgt.y,k.tgt.z)),Tt.visible=!0):Tt.visible=!1;let Rt=Ft();if(Rt){let Pt=k.seen.size+"|"+k.done.size+"|"+k.tele.size+"|"+k.opened.size;Pt!==k.mmKey&&(k.mmKey=Pt,k.mmP=Vs(k.seen,k.done,k.tele,k.opened)),Rt.draw({trk:C.trk,n:Ct+1,pos:[H,ot],dir:[yt,Ot],tgt:k.tgt,pois:k.mmP,note:`${_o(k.t)} \xB7 \u73A9\u8FC7 ${k.done.size} \u4E2A`})}let vt=C.trk[Ct][4]||0;k.cb&&k.cb({t:k.t,i:Ct,md:k.md,dur:C.t_end,act:W,fade:k.fade?k.fade.a:null,last:k.last&&v[k.last[1]]?v[k.last[1]].p:null,lastT:k.last?k.last[0]:null,gap:Math.max(0,vt-(k.last?k.last[3]:0)),n:k.seen.size,done:k.done.size,finished:k.t>=C.t_end,paused:!!k.paused})}let ki={};for(let w of t.PK&&t.PK.el&&t.PK.el.vant||[])ki[w.id]=w.top;let Qi={},V=new ao,bt=new nt,Vt=new nt(0,-1,0),U=null;function Z(w){if(Qi[w]!=null)return Qi[w];let C=ki[w],F=C[2];U||(U=[[],[]],e.traverse(L=>{if(!L.isMesh||L.isInstancedMesh)return;let W=L.userData.key;W==="tile"||W==="ridge"?U[0].push(L):(W==="brassG"||W==="iron")&&U[1].push(L)}));let B=L=>{for(let W=L;W;W=W.parent)if(!W.visible)return!1;return!0};bt.set(...I(C[0],C[1],C[2]+3)),V.set(bt,Vt),V.near=0,V.far=3.5;for(let L of U){let W=V.intersectObjects(L,!1).find(H=>B(H.object));if(W){F=Math.max(F,C[2]+3-W.distance);break}}return Qi[w]=F}function gt(w){if(w._lk)return;w._lk=!0;let C=w.trk;for(let F of w.acts){let B=F[2]==="look"&&ki[F[3]];if(!B)continue;B=[B[0],B[1],Z(F[3])];let L=$t(C,F[0],Mt=>Mt[0]);if(L<0)continue;let W=L+1;for(;W<C.length&&C[W][0]<=F[1];)W++;let H=C[Math.min(C.length-1,L+1)],ot=Mt=>C[L][4]+(H[4]-C[L][4])*Math.max(0,Math.min(1,(Mt-C[L][0])/(H[0]-C[L][0]||1)));C.splice(L+1,W-L-1,[F[0],B[0],B[1],B[2],ot(F[0]),C[L][5]],[F[1],B[0],B[1],B[2],ot(F[1]),C[L][5]])}}function zt(w,C,F){xa(),ur(),gt(w),k={run:w,t:0,cb:C,speed:F||12,dir:null},Yn(),s.enabled=!1,y.hidden=!0,f.classList.add("walking"),ft.hidden=!1,ae(),Nt=qt.back,se=qt.side;for(let L of _)L.el.classList.remove("hit");let B=Ft();B&&B.show(!0,ys)}function Zt(){k&&(k=null,s.enabled=!0,z.visible=!1,y.hidden=!0,f.classList.remove("walking"),ft.hidden=!0,Et.hidden=!0,Tt.visible=!1,Lt.visible=!1,it.hidden=!0,jt(),ht&&ht.show(!1),ve())}let A=null,le=(()=>{let w=[],C=new Map,F=4,B=(L,W)=>L*100003+W;for(let L of t.PK&&t.PK.walk||[])for(let W=0;W+5<L.length;W+=3){let H=[L[W],L[W+1],L[W+2],L[W+3],L[W+4],L[W+5]];w.push(H);let ot=Math.min(H[0],H[3])-2,Mt=Math.max(H[0],H[3])+2,Ct=Math.min(H[1],H[4])-2,kt=Math.max(H[1],H[4])+2;for(let lt=Math.floor(ot/F);lt<=Math.floor(Mt/F);lt++)for(let yt=Math.floor(Ct/F);yt<=Math.floor(kt/F);yt++){let Ot=B(lt,yt);C.has(Ot)||C.set(Ot,[]),C.get(Ot).push(w.length-1)}}return{n:w.length,near(L,W,H,ot){let Mt=C.get(B(Math.floor(L/F),Math.floor(W/F)));if(!Mt)return null;let Ct=null;for(let kt of Mt){let lt=w[kt],yt=lt[3]-lt[0],Ot=lt[4]-lt[1],pt=yt*yt+Ot*Ot||1e-9,ne=Math.max(0,Math.min(1,((L-lt[0])*yt+(W-lt[1])*Ot)/pt));if(Math.hypot(L-lt[0]-yt*ne,W-lt[1]-Ot*ne)>1.7)continue;let ee=lt[2]+(lt[5]-lt[2])*ne;ee>H+ot||(Ct==null||Math.abs(ee-H)<Math.abs(Ct-H))&&(Ct=ee)}return Ct}}})(),de=(()=>{if(!h)return{at:()=>-1e9};let[w,C,F,B]=h.meta.bbox,L=.5,W=Math.ceil((F-w)/L),H=Math.ceil((B-C)/L),ot=new Float32Array(W*H).fill(-1e9),Mt=(lt,yt,Ot,pt)=>{let ne=Math.hypot(yt[0]-lt[0],yt[1]-lt[1]),ce=Math.max(1,Math.ceil(ne/(L*.7)));for(let ee=0;ee<=ce;ee++){let Jt=lt[0]+(yt[0]-lt[0])*ee/ce,te=lt[1]+(yt[1]-lt[1])*ee/ce;for(let wt=Math.floor((Jt-Ot-w)/L);wt<=Math.floor((Jt+Ot-w)/L);wt++)for(let Rt=Math.floor((te-Ot-C)/L);Rt<=Math.floor((te+Ot-C)/L);Rt++){if(wt<0||Rt<0||wt>=W||Rt>=H)continue;let vt=w+(wt+.5)*L,Pt=C+(Rt+.5)*L;if(Math.hypot(vt-Jt,Pt-te)>Ot+.2)continue;let Ht=typeof pt=="function"?pt(vt,Pt):pt;Ht>ot[Rt*W+wt]&&(ot[Rt*W+wt]=Ht)}}};for(let lt of h.walls||[])for(let yt=0;yt+1<lt.p.length;yt++)Mt(lt.p[yt],lt.p[yt+1],(lt.t||.6)/2+.15,(Ot,pt)=>c(Ot,pt)+(lt.h||3));for(let lt of h.cwalls||[])for(let yt=0;yt+1<lt.p.length;yt++)Mt(lt.p[yt],lt.p[yt+1],(lt.w||6)/2,lt.top);let Ct=new Set(["statue","screenwall","rocks","well","watertower","watertower2","tanks","chimney","dome","pagoda","clock","citygate","bastion","stele","derrick","slipship","lou"]);for(let lt of h.marks||[])lt.c&&lt.r&&lt.top&&(Ct.has(lt.k)?Mt(lt.c,lt.c,lt.r,lt.top):lt.k==="bigtree"&&Mt(lt.c,lt.c,.9,lt.top));let kt=(lt,yt,Ot,pt,ne,ce)=>{let ee=Ot-lt,Jt=pt-yt,te=Math.hypot(ee,Jt)||1e-9,wt=ee/te,Rt=Jt/te;for(let vt=Math.floor((Math.min(lt,Ot)-ne-w)/L);vt<=Math.floor((Math.max(lt,Ot)+ne-w)/L);vt++)for(let Pt=Math.floor((Math.min(yt,pt)-ne-C)/L);Pt<=Math.floor((Math.max(yt,pt)+ne-C)/L);Pt++){if(vt<0||Pt<0||vt>=W||Pt>=H)continue;let Ht=w+(vt+.5)*L-lt,re=C+(Pt+.5)*L-yt,he=Ht*wt+re*Rt;if(he<0||he>te||Math.abs(re*wt-Ht*Rt)>ne)continue;let ue=ce(he/te);ue>ot[Pt*W+vt]&&(ot[Pt*W+vt]=ue)}};for(let lt of h.ret||[])if(lt.blk&&lt.a&&lt.b){let yt=lt.o?lt.o[0]:0,Ot=lt.o?lt.o[1]:0,pt=Math.max(lt.zi,lt.zo)+.3;kt(lt.a[0]+yt,lt.a[1]+Ot,lt.b[0]+yt,lt.b[1]+Ot,(lt.t||.55)/2,()=>pt)}for(let lt of h.stairs||[])if(lt.blk&&lt.line&&lt.z){let[yt,Ot]=lt.line,pt=lt.z[0],ne=lt.z[lt.z.length-1];kt(yt[0],yt[1],Ot[0],Ot[1],(lt.w||2)/2,ce=>pt+(ne-pt)*ce-.25)}return{at:(lt,yt)=>{let Ot=Math.floor((lt-w)/L),pt=Math.floor((yt-C)/L);return Ot<0||pt<0||Ot>=W||pt>=H?1e9:ot[pt*W+Ot]}}})(),fe=(h&&h.water||[]).map(w=>{let C=(w.p||[]).filter(H=>H&&H.length>2),F=1e9,B=1e9,L=-1e9,W=-1e9;for(let H of C)for(let ot of H)F=Math.min(F,ot[0]),B=Math.min(B,ot[1]),L=Math.max(L,ot[0]),W=Math.max(W,ot[1]);return{z:w.z,rings:C,holes:(w.h||[]).filter(H=>H&&H.length>2),bb:[F,B,L,W]}}),Se=(w,C,F)=>{let B=!1;for(let L=0,W=F.length-1;L<F.length;W=L++){let H=F[L],ot=F[W];H[1]>C!=ot[1]>C&&w<(ot[0]-H[0])*(C-H[1])/(ot[1]-H[1])+H[0]&&(B=!B)}return B};function Me(w,C){for(let F of fe)if(!(w<F.bb[0]||w>F.bb[2]||C<F.bb[1]||C>F.bb[3])&&F.rings.some(B=>Se(w,C,B))&&!F.holes.some(B=>Se(w,C,B)))return F.z;return null}let Re=.75;function Oe(w,C,F){let B=le.near(w,C,F,Re);if(B!=null)return{z:B,c:!0};let L=c(w,C);if(L>F+Re||u(w,C)>L+1.2||de.at(w,C)>F+Re)return null;let W=Me(w,C);return W!=null&&L<W-.25?null:{z:L,c:!1}}function Ae(w,C){let F=Oe(w,C,A.z);if(!F)return!1;let B=Math.hypot(w-A.x,C-A.y)||1e-6;return!F.c&&F.z-A.z>.25&&(F.z-A.z)/B>1.1||F.z<A.z-3.2?!1:(A.x=w,A.y=C,A.zt=F.z,!0)}let pe=null;function Ye(){if(pe)return pe;let[w,C,F,B]=h.meta.bbox,L=.5,W=Math.ceil((F-w)/L)+1,H=Math.ceil((B-C)/L)+1,ot=new Int16Array(W*H).fill(-32768),Mt=(Ct,kt,lt)=>{let yt=1e9,Ot=1e9,pt=-1e9,ne=-1e9;for(let wt of Ct)yt=Math.min(yt,wt[0]),Ot=Math.min(Ot,wt[1]),pt=Math.max(pt,wt[0]),ne=Math.max(ne,wt[1]);let ce=[],ee=[],Jt=.01;for(let wt=Math.max(0,Math.floor((Ot-C)/L));wt<=Math.min(H-1,Math.floor((ne-C)/L));wt++)for(let Rt=Math.max(0,Math.floor((yt-w)/L));Rt<=Math.min(W-1,Math.floor((pt-w)/L));Rt++){let vt=w+(Rt+.5)*L,Pt=C+(wt+.5)*L;if(!Se(vt,Pt,Ct))continue;let Ht=1e9;for(let re=0,he=Ct.length-1;re<Ct.length;he=re++){let ue=Ct[he],Be=Ct[re],en=Be[0]-ue[0],gn=Be[1]-ue[1],vo=en*en+gn*gn||1e-9,fi=Math.max(0,Math.min(1,((vt-ue[0])*en+(Pt-ue[1])*gn)/vo));Ht=Math.min(Ht,Math.hypot(vt-ue[0]-en*fi,Pt-ue[1]-gn*fi))}ce.push(wt*W+Rt),ee.push(Ht),Ht>Jt&&(Jt=Ht)}let te=Math.max(0,lt-kt);for(let wt=0;wt<ce.length;wt++){let Rt=Math.round((kt+te*Math.min(1,ee[wt]/Jt)+.1)*20);Rt>ot[ce[wt]]&&(ot[ce[wt]]=Rt)}};for(let Ct of h&&h.bld||[])Ct.p&&Ct.p.length>2&&Ct.top!=null&&Mt(Ct.p,Ct.ze!=null?Ct.ze:Ct.top,Ct.top);for(let Ct of h&&h.key||[])Ct.p&&Ct.p.length>2&&Ct.top!=null&&Mt(Ct.p,Ct.top-Math.min(4,(Ct.top-(Ct.z||0))*.35),Ct.top);return pe={at:(Ct,kt)=>{let lt=Math.floor((Ct-w)/L),yt=Math.floor((kt-C)/L);if(lt<0||yt<0||lt>=W||yt>=H)return-1e9;let Ot=ot[yt*W+lt];return Ot===-32768?-1e9:Ot/20}},pe}let ze=(()=>{let w=[],C=new Map,F=4,B=(W,H)=>W*100003+H;for(let W of t.PK&&t.PK.el&&t.PK.el.links||[]){if(!W.a||!W.b)continue;let H=[W.a[0],W.a[1],W.a[2],W.b[0],W.b[1],W.b[2],W.kind==="bridgehouse"?1.4:.8];w.push(H);let ot=H[6]+1,Mt=Math.min(H[0],H[3])-ot,Ct=Math.max(H[0],H[3])+ot,kt=Math.min(H[1],H[4])-ot,lt=Math.max(H[1],H[4])+ot;for(let yt=Math.floor(Mt/F);yt<=Math.floor(Ct/F);yt++)for(let Ot=Math.floor(kt/F);Ot<=Math.floor(lt/F);Ot++){let pt=B(yt,Ot);C.has(pt)||C.set(pt,[]),C.get(pt).push(w.length-1)}}let L={hit:null,near(W,H,ot,Mt){let Ct=C.get(B(Math.floor(W/F),Math.floor(H/F)));if(L.hit=null,!Ct)return null;let kt=null;for(let lt of Ct){let yt=w[lt],Ot=yt[3]-yt[0],pt=yt[4]-yt[1],ne=Ot*Ot+pt*pt||1e-9,ce=Math.max(0,Math.min(1,((W-yt[0])*Ot+(H-yt[1])*pt)/ne)),ee=yt[0]+Ot*ce,Jt=yt[1]+pt*ce;if(Math.hypot(W-ee,H-Jt)>yt[6])continue;let te=yt[2]+(yt[5]-yt[2])*ce;te>ot+Mt||te<ot-1.6||(kt==null||te>kt)&&(kt=te,L.hit=yt[6]<1?[ee,Jt]:null)}return kt}};return L})();function dn(w,C,F){let B=de.at(w,C);if(B>=1e8)return{wall:1e9,hard:!0};let L=null,W=!1,H=le.near(w,C,F,Re);H!=null&&(L=H);let ot=ze.near(w,C,F,Re);ot!=null&&(L==null||ot>L)&&(L=ot,W=!0);let Mt=c(w,C),Ct=u(w,C),kt=Ct>Mt+1.2,lt=Mt;if(kt){let yt=Ye().at(w,C);lt=Math.max(lt,yt>-1e8?yt:Ct)}if(B>lt&&(lt=B),lt<=F+Re)(L==null||lt>L)&&(L=lt,W=!1);else if(L==null||L<F-1.5)return{wall:lt};if(L===Mt&&!kt){let yt=Me(w,C);if(yt!=null&&Mt<yt-.25)return{water:yt}}return{z:L,lk:W,roof:L>Mt+2.2}}let Ln=(t.PK&&t.PK.el&&t.PK.el.vant||[]).map(w=>{let C=(w.routes||[]).find(B=>B.kind==="zip"&&B.pts&&B.pts.length>1),F=null;if(C){let B=C.pts.map(H=>H.slice()),L=Math.hypot(B[0][0]-w.top[0],B[0][1]-w.top[1]),W=Math.hypot(B[B.length-1][0]-w.top[0],B[B.length-1][1]-w.top[1]);L>W&&B.reverse(),F={name:C.name||"\u6ED1\u7D22",P:B}}return{id:w.id,name:w.name,top:w.top,zip:F}});function _n(){for(let w of Ln)if(Math.hypot(A.x-w.top[0],A.y-w.top[1])<4.5&&A.z>w.top[2]-2.5)return w;return null}function wi(w){let C=w.P,F=[0];for(let H=1;H<C.length;H++)F.push(F[H-1]+Math.hypot(C[H][0]-C[H-1][0],C[H][1]-C[H-1][1],C[H][2]-C[H-1][2]));let B=C[0],L=C[C.length-1],W=Math.hypot(L[0]-B[0],L[1]-B[1])||1;A.zip={P:C,cum:F,L:F[F.length-1],d:0,ux:(L[0]-B[0])/W,uy:(L[1]-B[1])/W},A.climb=null,A.air=!1,A.yaw=Math.atan2(A.zip.uy,A.zip.ux)}function Ee(w,C){let F=1;for(;F<w.cum.length-1&&w.cum[F]<C;)F++;let B=w.P[F-1],L=w.P[F],W=Math.max(0,Math.min(1,(C-w.cum[F-1])/(w.cum[F]-w.cum[F-1]||1)));return[B[0]+(L[0]-B[0])*W,B[1]+(L[1]-B[1])*W,B[2]+(L[2]-B[2])*W]}function Le(w){if(!A)return;let C=0;for(let B of Fi(w.top[0],w.top[1],160))if(!A.opened.has(B.id)){A.opened.add(B.id),C++;for(let L of _)L.p.tp==="tele"&&ii[L.p.id]===B.id&&A.tele.add(L.p.id)}let F=[];for(let B of _){let L=B.p.tp;(L==="story"||L==="hold"||L==="main")&&!A.seen.has(B.p.id)&&Math.hypot(B.x-w.top[0],B.y-w.top[1])<220&&(A.seen.add(B.p.id),F.push(B.p.name),It(B))}A.synced.add(w.id),A.mmKey="",F.length&&(A.lastSeen=A.t),_e("\u5728\u9AD8\u5904\u5F20\u671B",(C?`\u5F00\u4E86 ${C} \u5757\u5730\u7684\u56FE`:"\u56DB\u5468\u770B\u4E86\u4E00\u5708")+(F.length?"\uFF1B\u770B\u4E0A\u4E86\uFF1A"+Q(F.slice(0,3).join("\u3001"))+(F.length>3?` \u7B49 ${F.length} \u5904`:""):""))}let Xe={},fn={event:6,chest:3.5,sideN:4.5,sideI:4.5,story:7,hold:7,main:9},sn=w=>{let C=/^P_([^_]+)_(.+)$/.exec(w);return C?C[1]+":"+C[2]:null},Mn={};if(h)for(let w of h.gates||[])(Mn[w.pl]=Mn[w.pl]||[]).push(w.at);function Jn(w,C,F){let B=w.p,L=fn[B.tp];if(!L)return 1/0;let W=Math.hypot(w.x-C,w.y-F);if(g.has(B.tp)){for(let H of Mn[sn(B.id)]||[])W=Math.min(W,Math.hypot(H[0]-C,H[1]-F));W=Math.min(W,Math.hypot(w.x-C,w.y-F)-8)}return W<=L?W:1/0}function Ws(w){let C=w.dur||0;if(w.tp==="event")return[`\u4E8B\u4EF6\uFF1A${w.name}`,[w.play,C?"\u73A9\u4E86"+D(C):""].filter(Boolean).join(" \xB7 ")];if(w.tp==="story")return[`\u63A2\u7D22\u4E86${w.name}`,C?D(C):""];if(w.tp==="hold")return[`\u6253\u4E0B\u4E86\u636E\u70B9\uFF1A${w.name}`,C?D(C):""];if(w.tp==="main")return[`\u505A\u5B8C\u4E3B\u7EBF\uFF1A${w.name}`,"\u4E3B\u7EBF\u7D27\u51D1\u6D41\u7A0B"];if(w.tp==="chest")return[`\u6253\u5F00\u4E86${w.name}`,""];if(w.tp==="sideN"||w.tp==="sideI"){let F=String(w.desc||"").split("\u3002")[0];return[`\u63A5\u4E0B\u652F\u7EBF\uFF1A${w.name}`,F]}return[w.name,""]}let xo={event:"\u73A9",chest:"\u6253\u5F00",sideN:"\u63A5\u652F\u7EBF",sideI:"\u63A5\u652F\u7EBF",story:"\u63A2\u7D22",hold:"\u653B\u6253",main:"\u8FDB\u4E3B\u7EBF"},ts={KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight",ShiftLeft:"Shift",ShiftRight:"Shift",Space:" ",KeyE:"e",KeyF:"f",KeyC:"c",KeyM:"m"};function Gs(w){if(!A)return;let C=w.target;if(C&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA"||C.isContentEditable))return;let F=ts[w.code]||(w.key&&w.key.length===1?w.key.toLowerCase():w.key),B=w.type==="keydown";["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"].includes(F)&&(Xe[F]=B,w.preventDefault()),F===" "&&(B&&!w.repeat&&(A.jumpQ=!0),w.preventDefault()),B&&!w.repeat&&(F==="e"||F==="f")&&(wu(F),w.preventDefault()),B&&!w.repeat&&F==="c"&&(A.slow=!A.slow,w.preventDefault()),B&&!w.repeat&&F==="m"&&ht&&(ht.toggleZoom(),w.preventDefault())}function xs(){for(let w in Xe)Xe[w]=!1}function _u(){document.hidden&&xs()}let Xs=null,qs=t.dom||o,ya=()=>document.pointerLockElement===qs;function xu(w){if(!(!A||w.button>2)){if(w.button===0&&!ya()&&A.lockOK!==!1&&qs.requestPointerLock)try{let C=qs.requestPointerLock();C&&C.catch&&C.catch(()=>{A&&(A.lockOK=!1)})}catch{A.lockOK=!1}Xs={x:w.clientX,y:w.clientY,yaw:A.yaw,pitch:A.pitch}}}function Mu(w){if(A){if(ya()){A.yaw+=(w.movementX||0)*.0028,A.pitch=Math.max(-.85,Math.min(.45,A.pitch-(w.movementY||0)*.0024)),A.lookT=performance.now();return}Xs&&(A.yaw=Xs.yaw+(w.clientX-Xs.x)*.006,A.pitch=Math.max(-.85,Math.min(.45,Xs.pitch-(w.clientY-Xs.y)*.004)),A.lookT=performance.now())}}function vu(){A&&(A.lockOK=!1)}function bu(){Xs=null}function Su(w){A&&(A.dist=Math.max(2.4,Math.min(9,A.dist*(w.deltaY>0?1.1:.9))),w.preventDefault())}function wu(w){if(!A||A.fade||A.look||A.zip)return;let C=A.vv;if(C&&w==="f"&&C.zip){wi(C.zip);return}if(C&&w!=="f"&&!A.synced.has(C.id)){A.look={t:0,y0:A.yaw,v:C};return}if(!A.near)return;let F=A.near,B=F.p;A.fade=Vn(null,Ws(B),()=>{A.done.add(B.id),A.seen.add(B.id),A.tPlay+=B.dur||0,A.mmKey="",(B.tp==="sideN"||B.tp==="sideI")&&A.accepted.add(B.id)},1.3)}function Gp(w){!A||A.fade||(A.fade=Vn(null,[`\u4F20\u9001\u5230${w.p.name}`,"\u8BFB\u6761"],()=>{A.x=w.x+3,A.y=w.y+3;let C=Oe(A.x,A.y,w.p.z+2);A.z=A.zt=C?C.z:c(A.x,A.y),A.air=!1,A.climb=null,A.zip=null,A.vz=0,A.safe=[A.x,A.y,A.z],A.trail.push([A.t,A.x,A.y,A.z,0,"G"]),A.tSys+=16},.9))}function Xp(w){xa(),Zt();let C=179,F=447.5,B=Oe(C,F,c(C,F)+1);if(A={x:C,y:F,z:B?B.z:c(C,F),zt:null,yaw:-.21,pitch:-.16,dist:5.2,face:[Math.cos(-.21),Math.sin(-.21)],t:0,tPlay:0,tSys:0,seen:new Set,done:new Set,accepted:new Set,tele:new Set,opened:new Set,trail:[],lastSeen:0,near:null,fade:null,cb:w,mmKey:"",chk:0,sp:0,md2:[Math.cos(-.21),Math.sin(-.21)],air:!1,vz:0,av:[0,0],fall0:0,climb:null,zip:null,look:null,roll:0,mantle:0,slow:!1,jumpQ:!1,lookT:0,hint:null,vv:null,synced:new Set,tipHTML:"",lockOK:null},A.safe=[A.x,A.y,A.z],Ye(),A.trail.push([0,A.x,A.y,A.z,0,"G"]),A.chk=0,Eu(A.x,A.y,!1),!A.tele.size){let W=_.find(H=>H.p.tp==="tele");W&&A.tele.add(W.p.id)}s.enabled=!1,f.classList.add("walking"),ae(),Nt=qt.back,se=qt.side,window.addEventListener("keydown",Gs),window.addEventListener("keyup",Gs),qs.addEventListener("pointerdown",xu),window.addEventListener("pointermove",Mu),window.addEventListener("pointerup",bu),qs.addEventListener("wheel",Su,{passive:!1}),window.addEventListener("blur",xs),document.addEventListener("pointerlockerror",vu),document.addEventListener("visibilitychange",_u),document.addEventListener("pointerlockchange",xs);let L=Ft();L&&L.show(!0,ys+"<span>\u70B9\u4EAE\u7740\u9752\u5708\u7684\u4F20\u9001\u70B9\u53EF\u4EE5\u4F20\u8FC7\u53BB\uFF08\u5148\u6309 Esc \u653E\u5F00\u9F20\u6807\uFF09</span>"),Dt=(W,H)=>{if(!A)return;let ot=null,Mt=1e9;for(let Ct of _)if(Ct.p.tp==="tele"&&A.tele.has(Ct.p.id)){let kt=Math.hypot(Ct.x-W,Ct.y-H);kt<Mt&&(Mt=kt,ot=Ct)}ot&&Mt<40&&Gp(ot)};for(let W of _)W.el.classList.remove("hit")}function Eu(w,C,F){for(let B of Fi(w,C))if(!A.opened.has(B.id)){A.opened.add(B.id),A.mmKey="",F||_e("\u5F00\u56FE",`${Q(B.name)}\uFF1A\u8FD9\u5757\u5730\u7684\u56FE\u6807\u4E0A\u4E86\u5927\u5730\u56FE`);for(let L of _)L.p.tp==="tele"&&ii[L.p.id]===B.id&&!A.tele.has(L.p.id)&&(A.tele.add(L.p.id),F||_e("\u6FC0\u6D3B\u4F20\u9001\u70B9",Q(L.p.name)+"\uFF08\u5927\u5730\u56FE\u4E0A\u70B9\u5B83\u53EF\u4EE5\u4F20\u9001\uFF09",L))}}function ur(){if(A){A=null;for(let w in Xe)Xe[w]=!1;window.removeEventListener("keydown",Gs),window.removeEventListener("keyup",Gs),qs.removeEventListener("pointerdown",xu),window.removeEventListener("pointermove",Mu),window.removeEventListener("pointerup",bu),qs.removeEventListener("wheel",Su),window.removeEventListener("blur",xs),document.removeEventListener("pointerlockerror",vu),document.removeEventListener("visibilitychange",_u),document.removeEventListener("pointerlockchange",xs),ya()&&document.exitPointerLock&&document.exitPointerLock(),s.enabled=!0,z.visible=!1,f.classList.remove("walking"),st.hidden=!0,it.hidden=!0,jt(),ht&&ht.show(!1),Dt=null,ve()}}let Tu=17,Au=3.6;function Ru(w){w=Math.min(w,.1),A.fade&&(ni(A.fade,w)||(A.fade=null));let C=Xe,F=(C.w||C.ArrowUp?1:0)-(C.s||C.ArrowDown?1:0),B=(C.d||C.ArrowRight?1:0)-(C.a||C.ArrowLeft?1:0),L=!!C.Shift,W=!!A.fade||!!A.look,H=performance.now(),ot=0,Mt=0;if((F||B)&&!W){let vt=Math.cos(A.yaw),Pt=Math.sin(A.yaw);ot=vt*F-Pt*B,Mt=Pt*F+vt*B;let Ht=Math.hypot(ot,Mt)||1;ot/=Ht,Mt/=Ht}if((ot||Mt)&&F>=0&&H-A.lookT>1e3&&!A.climb&&!A.zip){let vt=Math.atan2(A.face[1],A.face[0])-A.yaw;vt=Math.atan2(Math.sin(vt),Math.cos(vt)),A.yaw+=vt*(1-Math.exp(-w*1.4))}let Ct=A.jumpQ&&!W;A.jumpQ=!1;let kt=A.x,lt=A.y,yt=0,Ot=0,pt="G";if(A.look){A.look.t+=w;let vt=Math.min(1,A.look.t/3.2);if(A.yaw=A.look.y0+vt*Math.PI*2,A.pitch=-.16-.16*Math.sin(vt*Math.PI),pt="P",vt>=1){let Pt=A.look.v;A.look=null,A.pitch=-.16,A.lookT=H,Le(Pt)}}else if(A.zip){let vt=A.zip;vt.d=Math.min(vt.L,vt.d+11*w);let Pt=Ee(vt,vt.d);A.x=Pt[0],A.y=Pt[1],A.z=Pt[2],A.face=[vt.ux,vt.uy],pt="P",vt.d>=vt.L&&(A.zip=null,A.air=!0,A.vz=0,A.av=[vt.ux*3,vt.uy*3],A.fall0=A.z)}else if(A.climb){let vt=A.climb;if(pt="P",!(F>0||L)||W)A.climb=null,A.air=!0,A.vz=0,A.av=[-vt.nx*1.5,-vt.ny*1.5],A.fall0=A.z;else{A.z+=Au*w,Ot=Au,A.face=[vt.nx,vt.ny];let Pt=A.x+vt.nx*.9,Ht=A.y+vt.ny*.9,re=dn(Pt,Ht,A.z);re.z!=null&&re.z>=A.z-1.2?(A.x=Pt,A.y=Ht,A.z=re.z,A.climb=null,A.mantle=.3):(re.hard||re.wall==null&&re.z==null)&&(A.climb=null)}}else if(A.air){pt="P",yt=2,A.vz-=Tu*w,(ot||Mt)&&(A.av[0]+=(ot*3-A.av[0]*.3)*w,A.av[1]+=(Mt*3-A.av[1]*.3)*w);let vt=A.x+A.av[0]*w,Pt=A.y+A.av[1]*w,Ht=A.z+A.vz*w,re=dn(vt,Pt,Math.max(Ht,A.z));if(re.wall!=null){let he=Math.hypot(A.av[0],A.av[1])||1,ue=A.av[0]/he,Be=A.av[1]/he;!re.hard&&(re.wall-Ht<1.6||L)&&he>.5?(A.climb={nx:ue,ny:Be},A.air=!1,A.vz=0):(A.av=[0,0],A.z=Ht)}else{A.x=vt,A.y=Pt,A.z=Ht;let he=re.z!=null?re:dn(A.x,A.y,A.z);if(he.z!=null&&A.z<=he.z){let ue=A.fall0-he.z;A.z=he.z,A.air=!1,A.vz=0,ue>5.5&&(A.roll=.5)}else he.water!=null&&A.z<=he.water&&(A.x=A.safe[0],A.y=A.safe[1],A.z=A.safe[2],A.air=!1,A.vz=0,_e("\u843D\u6C34","\u56DE\u5230\u5CB8\u4E0A"))}}else{let vt=ot||Mt?L?7:A.slow?1.9:4.6:0;A.sp+=(vt-A.sp)*(1-Math.exp(-w*(vt>A.sp?5:vt?9:18))),A.roll>0&&(A.roll-=w,A.sp=Math.min(A.sp,2.5)),A.mantle>0&&(A.mantle-=w),(ot||Mt)&&(A.md2=[ot,Mt]);let Pt=A.md2[0],Ht=A.md2[1],re=A.sp*w,he=Math.max(1,Math.ceil(re/.25));for(let ue=0;ue<he&&re>1e-4;ue++){let Be=A.x+Pt*re/he,en=A.y+Ht*re/he,gn=dn(Be,en,A.z);if(gn.wall!=null){let fi=gn.wall-A.z;if(!gn.hard&&(L||Ct)&&(ot||Mt)){fi<1.7?(A.air=!0,A.vz=Math.sqrt(2*Tu*(fi+.45)),A.av=[Pt*3.5,Ht*3.5],A.fall0=A.z):A.climb={nx:Pt,ny:Ht};break}let Ms=dn(Be,A.y,A.z),Lc=dn(A.x,en,A.z);Ms.z!=null&&Math.abs(Ms.z-A.z)<=Re?(A.x=Be,A.z=Ms.z):Lc.z!=null&&Math.abs(Lc.z-A.z)<=Re&&(A.y=en,A.z=Lc.z),(ot||Mt)&&!gn.hard&&(A.hint={t:H,s:fi<1.7?"\u7FFB\u8FC7\u53BB":"\u722C\u4E0A\u53BB"});break}if(gn.water!=null){(ot||Mt)&&(A.hint={t:H,w:1});break}let vo=gn.z-A.z;if(vo<-.7){if(A.safe=[A.x,A.y,A.z],L||Ct){A.air=!0,A.vz=L?4.2:5,A.av=[Pt*Math.max(A.sp,5),Ht*Math.max(A.sp,5)],A.fall0=A.z,A.x=Be,A.y=en;break}if(vo<-2.6){(ot||Mt)&&(A.hint={t:H,s:"\u8DF3\u4E0B\u53BB"});break}A.air=!0,A.vz=0,A.av=[Pt*A.sp,Ht*A.sp],A.fall0=A.z,A.x=Be,A.y=en;break}if(A.x=Be,A.y=en,A.z=gn.z,gn.lk&&ze.hit){let fi=Math.min(1,7*w/he);A.x+=(ze.hit[0]-A.x)*fi,A.y+=(ze.hit[1]-A.y)*fi}pt=gn.roof||gn.lk?"P":"G"}if(Ct&&!A.air&&!A.climb&&(A.air=!0,A.vz=5.2,A.av=[A.md2[0]*A.sp,A.md2[1]*A.sp],A.fall0=A.z,A.safe=[A.x,A.y,A.z]),!A.air&&!A.climb){let ue=c(A.x,A.y);(Me(A.x,A.y)==null||A.z>ue+.5)&&(A.safe=[A.x,A.y,A.z]),A.z>ue+2.2&&(pt="P")}yt=A.roll>0?1:A.sp>2.6?2:A.sp>.3?1:0}let ne=Math.hypot(A.x-kt,A.y-lt);if(ne>.01&&!A.climb&&!A.zip&&!A.look){let vt=1-Math.exp(-w*12),Pt=(A.x-kt)/ne,Ht=(A.y-lt)/ne;A.face[0]+=(Pt-A.face[0])*vt,A.face[1]+=(Ht-A.face[1])*vt;let re=Math.hypot(...A.face)||1;A.face[0]/=re,A.face[1]/=re}A.fade||(A.t+=w),A.md=pt;{let vt=A.trail[A.trail.length-1];(Math.hypot(vt[1]-A.x,vt[2]-A.y)>2.5||pt!==vt[5]&&ne>.01)&&A.trail.push([A.t,A.x,A.y,A.z,0,pt])}let ce=A.z;if(X(A.x,A.y,ce,A.face,w,yt,Ot,!0),at(A.x,A.y,ce,A.yaw,A.pitch,w,A.climb?Math.max(A.dist,6):A.dist,!1),A.chk-=w,A.chk<=0&&!A.fade){A.chk=.2;let vt=Math.cos(A.yaw),Pt=Math.sin(A.yaw);for(let he of _){let ue=he.p;if(A.seen.has(ue.id)||ue.tp==="amb"||ue.tp==="qplace")continue;let Be=Math.hypot(he.x-A.x,he.y-A.y),en=!1;ue.hud?en=Be<=ue.hud:g.has(ue.tp)&&Be<M(ue)&&(d.copy(he.v).project(n),en=d.z<1&&Math.abs(d.x)<.8&&Math.abs(d.y)<.9&&(he.x-A.x)*vt+(he.y-A.y)*Pt>0),en&&(A.seen.add(ue.id),A.lastSeen=A.t,A.mmKey="",It(he),Kt([A.t,ue.id,"icon"]))}Eu(A.x,A.y,!1);let Ht=null,re=1/0;for(let he of _){if(A.done.has(he.p.id)||he.p.start===!1)continue;let ue=Jn(he,A.x,A.y);ue<re&&(re=ue,Ht=he)}A.near=Ht}let ee=!A.look&&!A.zip&&!A.air&&!A.climb?_n():null;A.vv=ee;let Jt=[];ee&&!A.synced.has(ee.id)&&Jt.push(`<span><kbd>E</kbd>\u5F20\u671B\uFF1A${Q(ee.name)}</span>`),ee&&ee.zip&&Jt.push(`<span><kbd>F</kbd>${Q(ee.zip.name)}</span>`),!ee&&A.near&&Jt.push(`<span><kbd>E</kbd>${Q(xo[A.near.p.tp]||"\u73A9")}\uFF1A${Q(A.near.p.name)}</span>`),A.hint&&H-A.hint.t<900&&!A.air&&!A.climb&&Jt.push(A.hint.w?"<span>\u6C34\u91CC\u4E0D\u80FD\u8D70</span>":`<span>\u6309\u4F4F <kbd>Shift</kbd>${A.hint.s}</span>`);let te=A.fade||A.look?"":Jt.join("");te!==A.tipHTML&&(A.tipHTML=te,st.innerHTML=te,st.hidden=!te);let wt=Ft();if(wt){let vt=A.seen.size+"|"+A.done.size+"|"+A.tele.size+"|"+A.opened.size;vt!==A.mmKey&&(A.mmKey=vt,A.mmP=Vs(A.seen,A.done,A.tele,A.opened)),wt.draw({trk:A.trail,pos:[A.x,A.y],dir:A.face,tgt:null,pois:A.mmP,note:`${_o(A.t+A.tPlay+A.tSys)} \xB7 \u73A9\u8FC7 ${A.done.size} \u4E2A`})}let Rt=A.t+A.tPlay+A.tSys;A.cb&&A.cb({t:Rt,walk:A.t,play:A.tPlay,sys:A.tSys,seen:A.seen.size,done:A.done.size,gap:A.t-A.lastSeen,near:A.near?A.near.p:null,fading:!!A.fade,md:A.md,x:A.x,y:A.y,z:A.z,h:A.z-c(A.x,A.y),air:A.air,climb:!!A.climb,zip:!!A.zip,slow:A.slow,locked:ya(),opened:A.opened.size,synced:A.synced.size})}let ie=null,Cu=w=>w<.5?2*w*w:1-Math.pow(-2*w+2,2)/2,Rc=(w,C,F)=>{let B=C-w;for(;B>Math.PI;)B-=2*Math.PI;for(;B<-Math.PI;)B+=2*Math.PI;return w+B*F};function qp(w){xa(),Zt(),ur(),Ic();let C=(pt,ne)=>{let ce=c(pt,ne),ee=Oe(pt,ne,ce+2.5);return ee?ee.z:ce},F=(pt,ne)=>{let ce=null,ee=Jt=>{(ce==null||Jt>ce)&&(ce=Jt)};for(let Jt of h&&h.big||[]){if(Jt.k==="zigzag"){Jt.poly&&Se(pt,ne,Jt.poly)&&ee(Jt.z);continue}let te=Jt.p||[],wt=te[0],Rt=te[te.length-1];if(!wt||!Rt)continue;let vt=Math.hypot(Rt[0]-wt[0],Rt[1]-wt[1]);if(vt<2)continue;let Pt=(Rt[0]-wt[0])/vt,Ht=(Rt[1]-wt[1])/vt,re=(pt-wt[0])*Pt+(ne-wt[1])*Ht,he=-(pt-wt[0])*Ht+(ne-wt[1])*Pt,ue=Jt.k==="foot"||Jt.k==="arch1",Be=ue?Jt.w:Math.min(Jt.w,18);re>=-6&&re<=vt+6&&Math.abs(he)<=Be/2&&ee(Jt.z)}for(let Jt of h&&h.bridges||[]){let te=Jt.p||[],wt=Array.isArray(Jt.z)?Jt.z:[Jt.z,Jt.z],Rt=0;for(let Pt=1;Pt<te.length;Pt++)Rt+=Math.hypot(te[Pt][0]-te[Pt-1][0],te[Pt][1]-te[Pt-1][1]);let vt=0;for(let Pt=1;Pt<te.length;Pt++){let Ht=te[Pt-1],re=te[Pt],he=re[0]-Ht[0],ue=re[1]-Ht[1],Be=he*he+ue*ue||1e-9,en=Math.max(0,Math.min(1,((pt-Ht[0])*he+(ne-Ht[1])*ue)/Be)),gn=Math.sqrt(Be);Math.hypot(pt-Ht[0]-he*en,ne-Ht[1]-ue*en)<=(Jt.w||2.5)/2+.3&&ee(wt[0]+(wt[wt.length-1]-wt[0])*((vt+gn*en)/(Rt||1))),vt+=gn}}return ce},B=(pt,ne,ce)=>{let ee=le.near(pt,ne,ce+.9,0);if(ee!=null&&ee>ce-1.6)return ee;let Jt=C(pt,ne),te=F(pt,ne);return te!=null&&Math.abs(te-ce)<Math.abs(Jt-ce)?te:Jt},L=[],W=null;w.pts.forEach((pt,ne)=>{if(pt[2]!=null){W=pt[2],L.push([pt[0],pt[1],pt[2]]);return}if(W==null){let te=C(pt[0],pt[1]),wt=F(pt[0],pt[1]);W=wt!=null&&wt>te+2?wt:te,L.push([pt[0],pt[1],W]);return}let ce=w.pts[ne-1],ee=Math.hypot(pt[0]-ce[0],pt[1]-ce[1]),Jt=Math.max(1,Math.ceil(ee/.5));for(let te=1;te<=Jt;te++)W=B(ce[0]+(pt[0]-ce[0])*te/Jt,ce[1]+(pt[1]-ce[1])*te/Jt,W);L.push([pt[0],pt[1],W])});let H=[0];for(let pt=1;pt<L.length;pt++)H.push(H[pt-1]+Math.hypot(L[pt][0]-L[pt-1][0],L[pt][1]-L[pt-1][1]));let ot={P:L,cum:H,len:H[H.length-1]},Mt=w.speed||5,Ct=(pt,ne)=>{let ce=0,ee=1e9;for(let Jt=1;Jt<L.length;Jt++){let te=L[Jt-1],wt=L[Jt],Rt=wt[0]-te[0],vt=wt[1]-te[1],Pt=Rt*Rt+vt*vt||1e-9,Ht=Math.max(0,Math.min(1,((pt-te[0])*Rt+(ne-te[1])*vt)/Pt)),re=Math.hypot(pt-te[0]-Rt*Ht,ne-te[1]-vt*Ht);re<ee&&(ee=re,ce=H[Jt-1]+Math.sqrt(Pt)*Ht)}return ce},kt=(w.stops||[]).map((pt,ne)=>({i:ne,d:pt.d!=null?pt.d:pt.at?Ct(pt.at[0],pt.at[1]):0,hold:pt.hold!=null?pt.hold:4,look:pt.look||null,pitch:pt.pitch,cam:pt.cam||null})).sort((pt,ne)=>pt.d-ne.d),lt=[],yt=0,Ot=0;for(let pt of kt){if(pt.d>Ot+.01){let ne=yt+(pt.d-Ot)/Mt;lt.push({k:"w",t0:yt,t1:ne,d0:Ot,d1:pt.d}),yt=ne,Ot=pt.d}lt.push({k:"h",t0:yt,t1:yt+pt.hold,d:Ot,s:pt}),yt+=pt.hold}if(ot.len>Ot+.01){let pt=yt+(ot.len-Ot)/Mt;lt.push({k:"w",t0:yt,t1:pt,d0:Ot,d1:ot.len}),yt=pt}return lt.push({k:"h",t0:yt,t1:yt+1,d:ot.len,s:null}),yt+=1,ie={rr:ot,T:lt,dur:yt,t:0,on:!1,free:!1,cb:w.cb||null,cam:w.cam?Object.assign({fov:50},w.cam):null,up:null,icons:!!w.icons,seen:new Set,chk:0,lastT:0},ie.cam&&Kp(),s.enabled=!1,ae(),Nt=qt.back,se=qt.side,f.classList.add("walking"),{dur:yt,len:ot.len,T:lt.map(pt=>({k:pt.k,t0:pt.t0,t1:pt.t1,i:pt.s?pt.s.i:-1,d:pt.k==="h"?pt.d:pt.d0})),P:L.map(pt=>pt.map(ne=>+ne.toFixed(2)))}}function Pu(w){let C=ie.T,F=ie.rr,B=C.findIndex(yt=>w<yt.t1);B<0&&(B=C.length-1);let L=C[B],W=yt=>{let Ot=Wt(F,yt+3),pt=Wt(F,yt-3);return Math.atan2(Ot[1]-pt[1],Ot[0]-pt[0])};if(L.k==="w"){let yt=Math.max(0,Math.min(1,(w-L.t0)/(L.t1-L.t0||1))),Ot=L.d0+(L.d1-L.d0)*yt,pt=Wt(F,Ot),ne=W(Ot),ce=qt.pitch,ee=C[B-1],Jt=null,te=0,wt=null,Rt=null,vt=null;if(ee&&ee.s){let Pt=Cu(Math.min(1,(w-L.t0)/.9));if(wt=ee.s.cam,te=1-Pt,Rt=B-1,vt=Wt(F,ee.d),ee.s.look){let Ht=ee.s.look;ne=Rc(Math.atan2(Ht[1]-pt[1],Ht[0]-pt[0]),ne,Pt),ce=(ee.pt!=null?ee.pt:qt.pitch)*(1-Pt)+qt.pitch*Pt,Jt=Ht}}return{p:pt,yaw:ne,pitch:ce,mv:1,i:-1,k:B,d:Ot,lk:Jt,lw:te,sc:wt,hk:Rt,hp:vt}}let H=Wt(F,L.d),ot=W(Math.max(.5,Math.min(L.d,F.len-.5))),Mt=qt.pitch,Ct=null,kt=0,lt=null;if(L.s&&(kt=Cu(Math.min(1,(w-L.t0)/1.1)),lt=L.s.cam),L.s&&L.s.look){let yt=L.s.look,Ot=kt;ot=Rc(ot,Math.atan2(yt[1]-H[1],yt[0]-H[0]),Ot),Ct=yt;let pt=L.s.pitch;if(pt==null&&yt[2]!=null){let ne=Math.hypot(yt[0]-H[0],yt[1]-H[1])||1;pt=Math.max(-.3,Math.min(.3,Math.atan2(yt[2]-(H[2]+1.7),ne)*.55+qt.pitch))}pt!=null&&(L.pt=pt,Mt=qt.pitch+(pt-qt.pitch)*Ot)}return{p:H,yaw:ot,pitch:Mt,mv:0,i:L.s?L.s.i:-1,k:B,d:L.d,lk:Ct,lw:kt,sc:lt,hk:B,hp:H}}let _a=null;function Ys(){if(_a)return _a;let[w,C,F,B]=h.meta.bbox,L=Math.ceil(F-w)+2,W=Math.ceil(B-C)+2,H=L*W,ot=new Float32Array(H).fill(-1e9),Mt=new Float32Array(H).fill(1e9),Ct=new Float32Array(H).fill(-1e9),kt=new Float32Array(H).fill(1e9),lt=new Float32Array(H).fill(-1e9),yt=(wt,Rt)=>{let vt=1e9,Pt=1e9,Ht=-1e9,re=-1e9;for(let he of wt)vt=Math.min(vt,he[0]),Pt=Math.min(Pt,he[1]),Ht=Math.max(Ht,he[0]),re=Math.max(re,he[1]);for(let he=Math.max(0,Math.floor(Pt-C));he<=Math.min(W-1,Math.floor(re-C));he++)for(let ue=Math.max(0,Math.floor(vt-w));ue<=Math.min(L-1,Math.floor(Ht-w));ue++)Se(w+ue+.5,C+he+.5,wt)&&Rt(he*L+ue)},Ot=(wt,Rt,vt)=>{for(let Pt=Math.max(0,Math.floor(wt[1]-Rt-C));Pt<=Math.min(W-1,Math.floor(wt[1]+Rt-C));Pt++)for(let Ht=Math.max(0,Math.floor(wt[0]-Rt-w));Ht<=Math.min(L-1,Math.floor(wt[0]+Rt-w));Ht++)Math.hypot(w+Ht+.5-wt[0],C+Pt+.5-wt[1])<=Rt+.5&&vt(Pt*L+Ht)},pt=wt=>Rt=>{wt>ot[Rt]&&(ot[Rt]=wt)},ne=(wt,Rt)=>vt=>{wt<Mt[vt]&&(Mt[vt]=wt),Rt>Ct[vt]&&(Ct[vt]=Rt)};for(let wt of h.bld||[])wt.p&&wt.p.length>2&&yt(wt.p,pt(wt.top));for(let wt of h.key||[])wt.p&&wt.p.length>2&&yt(wt.p,wt.pass?ne((wt.z0!=null?wt.z0:wt.z)+(wt.h1||4.5),wt.top):pt(wt.top));h.tower&&h.tower.c&&Ot(h.tower.c,h.tower.r+.6,pt(h.tower.top)),h.kiosk&&h.kiosk.c&&Ot(h.kiosk.c,(h.kiosk.w||6)*.6,pt(h.kiosk.top));let ce=new Float32Array(H),ee=new Float32Array(H);for(let wt=0;wt<W;wt++)for(let Rt=0;Rt<L;Rt++){let vt=wt*L+Rt,Pt=ot[vt];Rt>0&&ot[vt-1]>Pt&&(Pt=ot[vt-1]),Rt<L-1&&ot[vt+1]>Pt&&(Pt=ot[vt+1]),ce[vt]=Pt}for(let wt=0;wt<W;wt++)for(let Rt=0;Rt<L;Rt++){let vt=wt*L+Rt,Pt=ce[vt];wt>0&&ce[vt-L]>Pt&&(Pt=ce[vt-L]),wt<W-1&&ce[vt+L]>Pt&&(Pt=ce[vt+L]),ee[vt]=Pt}let Jt=(wt,Rt,vt,Pt,Ht)=>{let re=Math.hypot(Rt[0]-wt[0],Rt[1]-wt[1]),he=Math.max(1,Math.ceil(re/.7));for(let ue=0;ue<=he;ue++)Ot([wt[0]+(Rt[0]-wt[0])*ue/he,wt[1]+(Rt[1]-wt[1])*ue/he],vt,ne(Pt,Ht))},te=h.rail;if(te&&te.p)for(let wt=1;wt<te.p.length;wt++)Jt(te.p[wt-1],te.p[wt],(te.w||8)/2+.5,(te.lo!=null?te.lo:te.z-2.5)-.6,te.z+4);for(let wt of h.gates||[]){if(wt.onmark)continue;let Rt=(wt.f||0)*Math.PI/180,vt=Math.cos(Rt),Pt=Math.sin(Rt),Ht=-Pt,re=vt,he=wt.z!=null?wt.z:c(wt.at[0],wt.at[1]),ue=wt.w||3,Be=wt.form==="\u724C\u574A",en=Be?ue/2+.35+(wt.side??2.6)+.5:ue/2+1.7,gn=he+(Be?4.7:3.9),vo=he+(Be?8.8:6),fi=Be?.6:1.2;for(let Ms of[-fi,fi])Jt([wt.at[0]-Ht*en+vt*Ms,wt.at[1]-re*en+Pt*Ms],[wt.at[0]+Ht*en+vt*Ms,wt.at[1]+re*en+Pt*Ms],.5,gn,vo)}for(let wt of h.trees||[])Ot(wt.at,wt.r*1.3,Rt=>{let vt=wt.z+1.4,Pt=wt.z+2.6+wt.r*2.4;vt<kt[Rt]&&(kt[Rt]=vt),Pt>lt[Rt]&&(lt[Rt]=Pt)});return _a={why(wt,Rt,vt){let Pt=Math.floor(wt-w),Ht=Math.floor(Rt-C);if(Pt<0||Ht<0||Pt>=L||Ht>=W)return"out";let re=Ht*L+Pt;return vt<ot[re]?"bld:"+ot[re].toFixed(1):vt>Mt[re]&&vt<Ct[re]?"band:"+Mt[re].toFixed(1)+"-"+Ct[re].toFixed(1):vt>kt[re]&&vt<lt[re]?"crown:"+kt[re].toFixed(1)+"-"+lt[re].toFixed(1):vt<de.at(wt,Rt)?"wall:"+de.at(wt,Rt).toFixed(1):""},solid(wt,Rt,vt,Pt,Ht){let re=Math.floor(wt-w),he=Math.floor(Rt-C);if(re<0||he<0||re>=L||he>=W)return!1;let ue=he*L+re;return vt<(Pt?ee[ue]:ot[ue])||vt>Mt[ue]&&vt<Ct[ue]||!Ht&&vt>kt[ue]&&vt<lt[ue]||vt<de.at(wt,Rt)}},_a}function Cc(w,C,F,B){let L=Ys(),W=Math.hypot(C[0]-w[0],C[1]-w[1],C[2]-w[2]),H=Math.max(2,Math.ceil(W/(B||.5)));for(let ot=1;ot<H;ot++){let Mt=ot/H;if(W*(1-Mt)<(F||.3))break;let Ct=w[0]+(C[0]-w[0])*Mt,kt=w[1]+(C[1]-w[1])*Mt,lt=w[2]+(C[2]-w[2])*Mt;if(lt<c(Ct,kt)+.1||L.solid(Ct,kt,lt,!1,p&&W*Mt<4))return!1}return!0}let Yp=[-.5,-.25,0,.25,.5],$p=[-.6,-.3,0,.3,.6];function Iu(w,C,F,B,L){let W=Ys(),H=C[0]-w[0],ot=C[1]-w[1],Mt=C[2]-w[2],Ct=Math.hypot(H,ot,Mt)||1;H/=Ct,ot/=Ct,Mt/=Ct;let kt=Math.hypot(H,ot)||1,lt=ot/kt,yt=-H/kt,Ot=yt*Mt,pt=-lt*Mt,ne=lt*ot-yt*H;ne<0&&(Ot=-Ot,pt=-pt,ne=-ne);let ce=Math.tan(F*Math.PI/360),ee=ce*B,Jt=0,te=0;for(let wt of Yp)for(let Rt of $p){let vt=H+lt*wt*ee+Ot*Rt*ce,Pt=ot+yt*wt*ee+pt*Rt*ce,Ht=Mt+ne*Rt*ce,re=Math.hypot(vt,Pt,Ht);vt/=re,Pt/=re,Ht/=re;let he=1.5-Math.abs(wt)-Math.abs(Rt)*.5;te+=he;for(let ue=.6;ue<L;ue+=.5){let Be=w[0]+vt*ue,en=w[1]+Pt*ue,gn=w[2]+Ht*ue;if(W.solid(Be,en,gn,!0,p)||ue<2.5&&gn<c(Be,en)+.2){Jt+=he*(1-.5*ue/L);break}}}return Jt/te}let Lu=()=>o.clientWidth/Math.max(1,o.clientHeight)||1.6;function dM(w,C,F,B,L,W,H){if(Ys().solid(w[0],w[1],w[2])||w[2]<c(w[0],w[1])+1.2)return 1/0;let Mt=Cc(w,[B,L,F+1.7],.3),Ct=Cc(w,[B,L,F+.4],.3);if(!Mt&&!Ct)return 1/0;let kt=Math.hypot(B-w[0],L-w[1],F+1.7-w[2]),lt=Math.min(9,Math.max(2.5,kt*.6));return Iu(w,C,W,H,lt)+(Mt?0:.12)+(Ct?0:.06)}function Zp(w,C,F,B,L,W){let H=Math.hypot(C[0]-w[0],C[1]-w[1])||1,ot=Math.hypot(F-w[0],B-w[1])||1,Mt=W*Math.PI/360,Ct=Math.atan(Math.tan(Mt)*Lu()),kt=Math.atan2(C[1]-w[1],C[0]-w[0]),lt=Math.atan2(B-w[1],F-w[0]),yt=lt-kt;for(;yt>Math.PI;)yt-=2*Math.PI;for(;yt<-Math.PI;)yt+=2*Math.PI;let Ot=Ct*.65,pt=Math.abs(yt)>Ot?lt-Math.sign(yt)*Ot:kt,ne=w[0]+Math.cos(pt)*H,ce=w[1]+Math.sin(pt)*H,ee=Math.atan2(C[2]-w[2],H),Jt=Math.atan2(L+.1-w[2],ot),te=Math.atan2(L+1.9-w[2],ot),wt=Jt+Mt*.78,Rt=te-Mt*.85;return ee=Rt<=wt?Math.max(Rt,Math.min(wt,ee)):(Jt+te)/2,[ne,ce,w[2]+Math.tan(ee)*H]}function Pc(w,C,F){let B=Ys(),L=Math.hypot(C[0]-w[0],C[1]-w[1],C[2]-w[2])||1,W=L;for(let ot=.5;ot<=L+1e-6;ot+=.25){let Mt=ot/L,Ct=w[0]+(C[0]-w[0])*Mt,kt=w[1]+(C[1]-w[1])*Mt,lt=w[2]+(C[2]-w[2])*Mt;if(lt<c(Ct,kt)+.5||B.solid(Ct,kt,lt,!1,p)){W=Math.max(F,ot-.5);break}}let H=W/L;return{c:[w[0]+(C[0]-w[0])*H,w[1]+(C[1]-w[1])*H,w[2]+(C[2]-w[2])*H],r:W,L}}let Du=[{back:6.4,up:3.1,side:.8,ahead:12,pen:0},{back:6,up:3.6,side:0,ahead:12,pen:.08},{back:7,up:6.5,side:0,ahead:15,pen:.22},{back:8.5,up:10.5,side:0,ahead:18,pen:.4},{back:9.5,up:15,side:0,ahead:22,pen:.58}],$s={aimZ:1.5};function Uu(w,C){let F=Wt(w,C-5),B=Wt(w,C+7),L=B[0]-F[0],W=B[1]-F[1],H=Math.hypot(L,W)||1;return[L/H,W/H]}function jp(w,C,F,B,L,W){let H=Math.hypot(C[0]-w[0],C[1]-w[1])||1,ot=Math.hypot(F-w[0],B-w[1])||1,Mt=W*Math.PI/360,Ct=Math.atan2(C[2]-w[2],H),kt=Math.atan2(L+.6-w[2],ot),lt=Math.atan2(L+1.9-w[2],ot),yt=kt+Mt*.8,Ot=lt-Mt*.8;return Ct=Ot<=yt?Math.max(Ot,Math.min(yt,Ct)):(kt+lt)/2,[C[0],C[1],w[2]+Math.tan(Ct)*H]}function Kp(){ie.hs={};let w=ie.cam&&ie.cam.game?Du.slice(0,1):Du,C=ie.rr,F=Math.max(2,Math.ceil(C.len)+1),B=w.length,L=Lu(),W=ie.cam.fov,H=[],ot=Rt=>{let vt=Math.min(C.len,Rt),Pt=Wt(C,vt),[Ht,re]=Uu(C,vt);return{p:Pt,hx:Ht,hy:re,rx:-re,ry:Ht,h:[Pt[0],Pt[1],Pt[2]+1.7]}},Mt=(Rt,vt)=>[Rt.p[0]-Rt.hx*vt.back+Rt.rx*vt.side,Rt.p[1]-Rt.hy*vt.back+Rt.ry*vt.side,Rt.p[2]+vt.up],Ct=[];for(let Rt=0;Rt<F;Rt++){let vt=ot(Rt);Ct.push(vt);let Pt=[];for(let Ht of w){let re=Pc(vt.h,Mt(vt,Ht),1.6),he=re.r/re.L,ue=Iu(re.c,[vt.p[0]+vt.hx*Ht.ahead,vt.p[1]+vt.hy*Ht.ahead,vt.p[2]+$s.aimZ],W,L,5);Pt.push((1-he)*2.2+(he<.55?1:0)+ue*1.2+Ht.pen)}H.push(Pt)}let kt=H[0].slice(),lt=[];for(let Rt=1;Rt<F;Rt++){let vt=[],Pt=[];for(let Ht=0;Ht<B;Ht++){let re=1/0,he=0;for(let ue=0;ue<B;ue++){let Be=kt[ue]+(ue===Ht?0:.9*(1+.25*Math.abs(ue-Ht)));Be<re&&(re=Be,he=ue)}vt.push(re+H[Rt][Ht]),Pt.push(he)}lt.push(Pt);for(let Ht=0;Ht<B;Ht++)kt[Ht]=vt[Ht]}let yt=0;for(let Rt=1;Rt<B;Rt++)kt[Rt]<kt[yt]&&(yt=Rt);let Ot=new Array(F);Ot[F-1]=yt;for(let Rt=F-1;Rt>0;Rt--)yt=lt[Rt-1][yt],Ot[Rt-1]=yt;let pt=(Rt,vt)=>Rt.map((Pt,Ht)=>{let re=0,he=0;for(let ue=Math.max(0,Ht-vt);ue<=Math.min(F-1,Ht+vt);ue++){let Be=Math.exp(-((ue-Ht)**2)/(2*(vt/2)**2));re+=Rt[ue]*Be,he+=Be}return re/he}),ne=pt(Ot.map(Rt=>w[Rt].back),8),ce=pt(Ot.map(Rt=>w[Rt].up),8),ee=pt(Ot.map(Rt=>w[Rt].side),8),Jt=pt(Ot.map(Rt=>w[Rt].ahead),8),te=Ct.map((Rt,vt)=>Pc(Rt.h,Mt(Rt,{back:ne[vt],up:ce[vt],side:ee[vt]}),1.6).r),wt=te.map((Rt,vt)=>{let Pt=1/0;for(let Ht=Math.max(0,vt-6);Ht<=Math.min(F-1,vt+6);Ht++)Pt=Math.min(Pt,te[Ht]);return Pt});ie.wp={n:F,B:ne,U:ce,Sd:ee,A:Jt,R:pt(wt,3),sel:Ot}}function Jp(w){let C=ie.rr,F=ie.wp,[B,L,W]=Wt(C,w),[H,ot]=Uu(C,w),Mt=-ot,Ct=H,kt=[B,L,W+1.7],lt=Math.max(0,Math.min(F.n-1,w)),yt=Math.floor(lt),Ot=Math.min(F.n-1,yt+1),pt=lt-yt,ne=he=>he[yt]+(he[Ot]-he[yt])*pt,ce=ne(F.B),ee=ne(F.U),Jt=ne(F.Sd),te=ne(F.A),wt=ne(F.R),Rt=[B-H*ce+Mt*Jt,L-ot*ce+Ct*Jt,W+ee],vt=Math.hypot(Rt[0]-kt[0],Rt[1]-kt[1],Rt[2]-kt[2])||1,Pt=Math.min(1,wt/vt),Ht=[kt[0]+(Rt[0]-kt[0])*Pt,kt[1]+(Rt[1]-kt[1])*Pt,kt[2]+(Rt[2]-kt[2])*Pt],re=jp(Ht,[B+H*te,L+ot*te,W+$s.aimZ],B,L,W,ie.cam.fov);return{c:Ht,a:re,fov:ie.cam.fov,r:wt}}let Qp={pov:{back:5.6,up:2.8,side:1,fov:50,al:40},high:{back:11,up:10,side:0,fov:52,al:26}};function t0(w,C,F,B){return ie.hs=ie.hs||{},w in ie.hs?ie.hs[w]:ie.hs[w]=Nu(C,F,B)}function Nu(w,C,F){F=F||{};let[B,L,W]=w,H=Math.hypot(C[0]-B,C[1]-L)||1,ot=C[2]!=null?C[2]:W+1.5,Mt=[B,L,W+1.7],Ct=Math.atan2(C[1]-L,C[0]-B)+(F.da||0),kt=F.mode==="high"&&!(ie&&ie.cam&&ie.cam.game)?"high":"pov",lt=Object.assign({},Qp[kt]);for(let Jt of["back","up","side","fov"])F[Jt]!=null&&(lt[Jt]=F[Jt]);let yt=Jt=>{let te=Math.min(H,lt.al);return Zp(Jt,[B+(C[0]-B)/H*te,L+(C[1]-L)/H*te,W+1.4+(ot-W-1.4)*te/H],B,L,W,lt.fov)},Ot=null,pt=1/0;if(kt==="pov"){for(let Jt of[0,.3,-.3,.6,-.6,.95,-.95]){let te=Ct+Jt,wt=Math.cos(te),Rt=Math.sin(te),vt=-Rt,Pt=wt,Ht=Pc(Mt,[B-wt*lt.back+vt*lt.side,L-Rt*lt.back+Pt*lt.side,W+lt.up],2),re=Ht.c,he=F.vis===!1||Cc(re,[C[0],C[1],ot],Math.min(10,H*.3),H>80?1:.5),ue=(Ht.L-Ht.r)/Ht.L*.8+(he?0:.35)+Math.abs(Jt)*.12;ue<pt&&(pt=ue,Ot={c:re,a:yt(re),fov:lt.fov,md:kt,da:Jt,s:+ue.toFixed(3),vis:he})}return Ot}let ne=Ys(),ce=(Jt,te)=>{let wt=Math.hypot(te[0]-Jt[0],te[1]-Jt[1],te[2]-Jt[2]),Rt=Math.ceil(wt/.5);for(let vt=1;vt<Rt;vt++){let Pt=vt/Rt;if(wt*(1-Pt)<.4)break;let Ht=Jt[0]+(te[0]-Jt[0])*Pt,re=Jt[1]+(te[1]-Jt[1])*Pt,he=Jt[2]+(te[2]-Jt[2])*Pt;if(he<c(Ht,re)+.1||ne.solid(Ht,re,he,!0))return!1}return!0};for(let Jt of[lt.back,lt.back*.6,4])for(let te of[0,.4,-.4,.8,-.8,1.3,-1.3,2.2,-2.2,Math.PI]){let wt=Ct+te,Rt=[B-Math.cos(wt)*Jt,L-Math.sin(wt)*Jt,Math.max(W,c(B-Math.cos(wt)*Jt,L-Math.sin(wt)*Jt))+lt.up];if(ne.solid(Rt[0],Rt[1],Rt[2],!0))continue;let vt=ce(Rt,Mt),Pt=ce(Rt,[B,L,W+.3]);if(!vt&&!Pt)continue;let Ht=(vt&&Pt?0:.2)+Math.abs(te)*.05+(lt.back-Jt)*.01;if(Ht<pt&&(pt=Ht,Ot={c:Rt,a:yt(Rt),fov:lt.fov,md:kt,da:te,s:+Ht.toFixed(3),vis:!0}),vt&&Pt&&te===0)return Ot}if(Ot)return Ot;let ee=[B-Math.cos(Ct)*3,L-Math.sin(Ct)*3,Math.max(W,c(B,L))+30];return{c:ee,a:yt(ee),fov:lt.fov,md:kt,da:0,s:1,vis:!1}}function e0(w,C,F,B,L,W){if(!C||F<=0)return w;if(F>=1)return C;let H=[B,L,W+1.7],ot=ee=>{let Jt=ee[0]-H[0],te=ee[1]-H[1],wt=ee[2]-H[2],Rt=Math.hypot(Jt,te,wt)||1;return[Math.atan2(te,Jt),Math.asin(Math.max(-1,Math.min(1,wt/Rt))),Rt]},[Mt,Ct,kt]=ot(w.c),[lt,yt,Ot]=ot(C.c),pt=Rc(Mt,lt,F),ne=Ct+(yt-Ct)*F,ce=kt+(Ot-kt)*F;return{c:[H[0]+Math.cos(pt)*Math.cos(ne)*ce,H[1]+Math.sin(pt)*Math.cos(ne)*ce,H[2]+Math.sin(ne)*ce],a:w.a.map((ee,Jt)=>ee+(C.a[Jt]-ee)*F),fov:w.fov+(C.fov-w.fov)*F}}function n0(w,C){let[F,B,L]=w.p,W=Jp(w.d);if(w.lk&&w.lw>.001&&w.hk!=null){let ot=t0(w.hk,w.hp,w.lk,w.sc);ot&&(W=e0(W,ot,w.lw,F,B,L))}if(!ie.cp||C>.5)ie.cp=W.c.slice(),ie.ap=W.a.slice();else{let ot=F,Mt=B,Ct=L+1.7,kt=Math.hypot(W.c[0]-ot,W.c[1]-Mt,W.c[2]-Ct),lt=Math.hypot(ie.cp[0]-ot,ie.cp[1]-Mt,ie.cp[2]-Ct),yt=1-Math.exp(-C*(kt<lt-.3?9:5));for(let Ot=0;Ot<3;Ot++)ie.cp[Ot]+=(W.c[Ot]-ie.cp[Ot])*yt,ie.ap[Ot]+=(W.a[Ot]-ie.ap[Ot])*(1-Math.exp(-C*5))}n.position.set(...I(...ie.cp)),s.target.set(...I(...ie.ap)),n.lookAt(s.target);let H=Math.round(W.fov*10)/10;n.fov!==H&&(n.fov=H,n.updateProjectionMatrix())}function i0(w){ie.on&&(ie.t+=w,ie.t>=ie.dur&&(ie.t=ie.dur,ie.on=!1));let C=Pu(ie.t),[F,B,L]=C.p;if(ie.px=F,ie.py=B,ie.icons&&(ie.t<ie.lastT-.5&&(ie.seen=new Set),ie.lastT=ie.t,ie.chk-=w,ie.chk<=0)){ie.chk=.2;for(let W of _){let H=W.p;if(H.tp==="amb"||H.tp==="qplace"||ie.seen.has(H.id)||H.start===!1)continue;let ot=Math.hypot(W.x-F,W.y-B);(H.hud?ot<=H.hud:ot<M(H))&&(d.copy(W.v).project(n),!(d.z>=1||Math.abs(d.x)>.95||Math.abs(d.y)>.95)&&(ie.seen.add(H.id),ie.on&&(It(W),Kt([ie.t,H.id,"icon"]))))}}return X(F,B,L,[Math.cos(C.yaw),Math.sin(C.yaw)],w,C.mv&&ie.on?2:0,0,!1),ie.free||(ie.cam?n0(C,w):at(F,B,L,C.yaw,C.pitch,w)),ie.cb&&ie.cb({t:ie.t,dur:ie.dur,i:C.i,k:C.k,d:C.d,on:ie.on,x:F,y:B,z:L,yaw:C.yaw,seen:ie.icons?ie.seen.size:0}),!ie.free}function Ic(){ie&&(ie=null,z.visible=!1,s.enabled=!0,f.classList.remove("walking"),jt(),ve())}function s0(w){if(ie)return i0(w);if(A)return Ru(w),!0;if(k)return _s(w),!0;if(!K)return!1;K.paused||(K.t+=w);let C=K.rr.r.seq;for(;K.k<C.length&&C[K.k][0]<=K.t;){let F=C[K.k];K.seen.add(F[1]),K.last=F,K.lastT=F[0],It(v[F[1]]),K.k++}if(K.t*6>=K.rr.len&&(K.t=K.rr.len/6,K.done=!0),$(w),K.cb&&K.cb({id:K.rr.r.id,t:K.t,dur:K.rr.len/6,n:K.seen.size,total:C.length,last:K.last&&v[K.last[1]]?v[K.last[1]].p:null,since:K.t-K.lastT,done:!!K.done,rev:K.rr.r.rev.some(([F,B])=>K.t>=F&&K.t<=B)}),K.done){let F=K.cb;K.cb=null,K.done2=!0,F&&F({id:K.rr.r.id,t:K.t,dur:K.rr.len/6,n:K.seen.size,total:C.length,finished:!0})}return!0}function o0(w,C){let F=P[w];if(F){Zt(),ur(),K={rr:F,t:0,k:0,seen:new Set,cb:C,lastT:0,dir:null},s.enabled=!1,y.hidden=!1,f.classList.add("walking"),ae(),Nt=qt.back,se=qt.side;for(let B of _)B.el.classList.remove("hit")}}function xa(){K&&(K=null,s.enabled=!0,z.visible=!1,y.hidden=!0,f.classList.remove("walking"),ve())}function r0(w,C){if(d.set(...I(k.px,k.py,k.pz+2.05)).project(n),ft.style.transform=`translate(${((d.x+1)/2*w).toFixed(1)}px,${((1-d.y)/2*C-8).toFixed(1)}px) translate(-50%,-100%)`,k.tgt&&!k.fade){let F=Math.hypot(k.tgt.x-k.px,k.tgt.y-k.py);d.set(...I(k.tgt.x,k.tgt.y,k.tgt.z+3.5)).project(n);let B=d.x,L=d.y,W=d.z>=1||Math.abs(B)>.94||Math.abs(L)>.9,H="";if(W){d.z>=1&&(B=-B,L=-L);let lt=Math.max(Math.abs(B)/.9,Math.abs(L)/.82,1e-6);B/=lt,L/=lt,H=`<span class="ar" style="transform:rotate(${(-Math.atan2(L,B)*180/Math.PI).toFixed(0)}deg)">\u279C</span>`}Et.innerHTML=`${H}${Q(k.tgt.nm)} \xB7 ${Math.round(F)} m`,Et.hidden=!1,Et.classList.toggle("off",W);let ot=Et.offsetWidth/2+8,Mt=Et.offsetHeight/2+8,Ct=Math.max(ot,Math.min(w-ot,(B+1)/2*w)),kt=Math.max(Mt+44,Math.min(C-Mt,(1-L)/2*C));Et.style.transform=`translate(${Ct.toFixed(1)}px,${kt.toFixed(1)}px) translate(-50%,-50%)`}else Et.hidden=!0}function a0(w,C){let F=performance.now(),B=0;Qt=Qt.filter(L=>(F-L.t0)/1e3>3.2?(L.el.remove(),!1):!0);for(let L of Qt){let W=(F-L.t0)/1e3;L.q&&d.copy(L.q.v).project(n);let H=!!L.q&&d.z<1&&Math.abs(d.x)<=.95&&Math.abs(d.y)<=.95,ot=H?(d.x+1)/2*w+16:12,Mt=H?(1-d.y)/2*C-14:12+26*B++;L.el.style.transform=`translate(${ot.toFixed(1)}px,${Mt.toFixed(1)}px)`+(H?" translate(0,-50%)":""),L.el.style.opacity=W>2.6?Math.max(0,1-(W-2.6)/.6).toFixed(2):"1"}}function l0(){let w=o.clientWidth,C=o.clientHeight,[F,B,L]=r();S&&S.update(w,C,!!K||!!k||!!A),k&&r0(w,C),(k||A||ie&&ie.icons)&&a0(w,C);let W=k&&k.fade||A&&A.fade;for(let H of _){let ot=T&&!R[H.p.tp==="main"?"story":H.p.tp]&&!W;if(ot)if(d.copy(H.v).project(n),d.z>=1||Math.abs(d.x)>1.08||Math.abs(d.y)>1.08)ot=!1;else{let Mt=Math.hypot(H.x-F,H.y-B,H.z-L),Ct=k||A;if(Ct){let kt=k?k.px:A.x,lt=k?k.py:A.y,yt=Math.hypot(H.x-kt,H.y-lt),Ot=Ct.done.has(H.p.id)&&H.p.tp!=="merch"&&H.p.tp!=="tele";H.p.tp==="amb"?ot=yt<22&&!Ot:H.p.hud?ot=yt<=H.p.hud&&!Ot&&(H.p.start!==!1||Ct.seen.has(H.p.id)):ot=Ct.seen.has(H.p.id)&&!Ot&&yt<M(H.p)}else if(K){let kt=Math.hypot(H.x-K.px,H.y-K.py);H.p.tp==="amb"?ot=kt<22:H.p.hud?ot=kt<=H.p.hud&&H.p.start!==!1:ot=K.seen.has(H.p.id)&&kt<M(H.p)}else if(ie&&ie.icons&&ie.px!=null){let kt=Math.hypot(H.x-ie.px,H.y-ie.py);H.p.tp==="amb"?ot=kt<22:H.p.hud?ot=kt<=H.p.hud&&H.p.start!==!1:ot=kt<M(H.p)}else(!E&&H.p.tp==="amb"&&Mt>240||!E&&H.p.tp==="chest"&&Mt>420)&&(ot=!1);if(ot){let kt=K||k||A||ie&&ie.icons?1.1:Math.max(.62,Math.min(1.12,1.22-Mt/760)),lt=((d.x+1)/2*w).toFixed(1)+","+((1-d.y)/2*C).toFixed(1)+","+kt.toFixed(2);H.shown!==lt&&(H.el.style.transform=`translate(${((d.x+1)/2*w).toFixed(1)}px,${((1-d.y)/2*C).toFixed(1)}px) translate(-50%,-50%) scale(${kt.toFixed(3)})`,H.shown=lt)}}ot!==H.vis&&(H.el.style.display=ot?"":"none",H.vis=ot)}}let Mo=null;function c0(w,C,F){if(!Mo){Mo=new Map;for(let W of h&&h.trees||[]){let H=Math.floor(W.at[0]/6)+","+Math.floor(W.at[1]/6);Mo.has(H)||Mo.set(H,[]),Mo.get(H).push(W)}}let B=Math.floor(w/6),L=Math.floor(C/6);for(let W=B-1;W<=B+1;W++)for(let H=L-1;H<=L+1;H++)for(let ot of Mo.get(W+","+H)||[])if(Math.hypot(ot.at[0]-w,ot.at[1]-C)<ot.r*.95&&F>ot.z+1.4&&F<ot.z+2.4+ot.r*2.2)return!0;return!1}function h0(w,C,F,B,L={}){let W=B[0]-w,H=B[1]-C,ot=Math.hypot(W,H)||1,Mt=W/ot,Ct=H/ot;if(N.root.position.set(...I(w,C,F)),N.root.rotation.y=Math.atan2(Mt,Ct),N.root.visible=L.hero!==!1,N.animate(.016,0,0),N.setGhost(!1),L.plan&&h){let ee={mode:L.mode||"pov"};for(let te of["vis","da","back","up","side"])L[te]!=null&&(ee[te]=L[te]);let Jt=Nu([w,C,F],[B[0],B[1],L.lz!=null?L.lz:L.tz!=null?L.tz:F+1.9],ee);if(Jt)return{pos:Jt.c,tgt:Jt.a,fov:Jt.fov,back:+Math.hypot(Jt.c[0]-w,Jt.c[1]-C).toFixed(2),md:Jt.md}}let kt=L.back!=null?L.back:4.5,lt=L.up!=null?L.up:2.9,yt=L.side||0,Ot=w-Ct*yt,pt=C+Mt*yt,ne=kt;for(let ee=.6;ee<=kt+1e-6;ee+=.25){let Jt=F+1.6+(lt-1.6)*ee/kt,te=Ot-Mt*ee,wt=pt-Ct*ee;if(Math.max(l(te,wt),de.at(te,wt))>Jt-.35||c0(te,wt,Jt)){ne=Math.max(1.5,ee-.45);break}}let ce=L.tz!=null?L.tz:F+1.9;return{pos:[Ot-Mt*ne,pt-Ct*ne,F+lt],tgt:[B[0]-Ct*yt,B[1]+Mt*yt,ce],fov:L.fov||46,back:+ne.toFixed(2)}}return{step:s0,update:l0,walk:o0,stop:()=>{xa(),Zt(),ur(),Ic()},walking:()=>!!K||!!k||!!A,pauseWalk:w=>{K&&(K.paused=w)},seek:w=>{K&&(K.t=w,K.dir=null)},mapFollow:w=>{let C=Ft();return C&&C.setZoom&&w!=null&&C.setZoom(w),C?C.zoomed():null},replay:zt,stopReplay:Zt,replaying:()=>!!k,replayT:()=>k?k.t:null,pauseReplay:w=>{k&&(k.paused=w)},seekReplay:w=>{k&&(k.t=Math.max(0,Math.min(k.run.t_end,w)),Yn())},speedReplay:w=>{k&&(k.speed=w)},play:Xp,stopPlay:ur,playing:()=>!!A,engage:wu,simPlay:(w,C,F={})=>{if(!A)return null;for(let W in Xe)Xe[W]=!1;for(let W of w||[])Xe[W]=!0;F.yaw!=null&&(A.yaw=F.yaw,A.lookT=performance.now()+1e9),F.jump&&(A.jumpQ=!0),F.at&&(A.x=F.at[0],A.y=F.at[1],A.z=F.at[2]!=null?F.at[2]:c(F.at[0],F.at[1]),A.air=!1,A.climb=null);let B=Math.round(C*30),L=[];for(let W=0;W<B;W++)Ru(1/30),F.every&&W%F.every===0&&L.push([+A.x.toFixed(1),+A.y.toFixed(1),+A.z.toFixed(1),A.md,A.air?"air":A.climb?"climb":A.zip?"zip":""]);for(let W in Xe)Xe[W]=!1;return{x:+A.x.toFixed(2),y:+A.y.toFixed(2),z:+A.z.toFixed(2),g:+c(A.x,A.y).toFixed(2),md:A.md,air:A.air,climb:!!A.climb,tip:A.tipHTML,log:L}},ptopAt:(w,C,F)=>dn(w,C,F),mapZoom:()=>ht&&ht.toggleZoom(),walkSegs:()=>le.n,plState:()=>A&&{x:A.x,y:A.y,z:A.z,yaw:A.yaw,t:A.t,seen:A.seen.size,done:A.done.size,tele:[...A.tele],opened:[...A.opened],near:A.near?A.near.p.id:null,fade:!!A.fade},hAt3:(w,C)=>[l(w,C),u(w,C),c(w,C)],plSet:(w,C,F)=>{if(!A)return;let B=Oe(w,C,c(w,C)+2);A.x=w,A.y=C,A.z=A.zt=B?B.z:c(w,C),F!=null&&(A.yaw=F),A.chk=0},show:w=>{T=w,f.style.display=w?"":"none"},routes:w=>{b.visible=w},type:(w,C)=>{R[w]=!C},far:w=>{E=!!w},focus:w=>{let C=v[w];return C?{pos:[C.x+26,C.y+44,C.z+30],tgt:[C.x,C.y,C.z+1],fov:40}:null},hub:w=>(i.hubs.find(C=>C.id===w)||{}).view,heroHead:(()=>{let w=new nt;return()=>z.visible?w.set(z.position.x,z.position.y+1.7,z.position.z):null})(),stand:h0,unstand:()=>{!K&&!k&&!A&&!ie&&(z.visible=!1)},script:qp,scriptStop:Ic,scripting:()=>!!ie,scriptSeek:w=>{ie&&(ie.t=Math.max(0,Math.min(ie.dur,w)),ie.cp=null)},scriptPlay:w=>{ie&&(w&&ie.t>=ie.dur-.05&&(ie.t=0),ie.on=!!w)},scriptFree:w=>{ie&&(ie.free=!!w,s.enabled=!!w)},scriptT:()=>ie?ie.t:0,scriptState:()=>ie&&Pu(ie.t),occWhy:(w,C,F)=>Ys().why(w,C,F),camDbg:w=>{if(!ie)return null;let C=ie.rr,F=Wt(C,w),B=Wt(C,w-5),L=Wt(C,w+7),W=L[0]-B[0],H=L[1]-B[1],ot=Math.hypot(W,H)||1;W/=ot,H/=ot;let[Mt,Ct,kt]=F,lt=[Mt,Ct,kt+1.7],yt=[Mt-W*$s.back-H*$s.side,Ct-H*$s.back+W*$s.side,kt+$s.up],Ot=Ys(),pt=null,ne=Math.hypot(yt[0]-lt[0],yt[1]-lt[1],yt[2]-lt[2]);for(let ce=.5;ce<=ne;ce+=.25){let ee=ce/ne,Jt=lt[0]+(yt[0]-lt[0])*ee,te=lt[1]+(yt[1]-lt[1])*ee,wt=lt[2]+(yt[2]-lt[2])*ee,Rt=c(Jt,te);if(wt<Rt+.5){pt=["ground",+ce.toFixed(2),+Rt.toFixed(1)];break}let vt=Ot.why(Jt,te,wt);if(vt){pt=[vt,+ce.toFixed(2),+Jt.toFixed(1),+te.toFixed(1),+wt.toFixed(1)];break}}return{p:F.map(ce=>+ce.toFixed(1)),g:+c(Mt,Ct).toFixed(1),hit:pt}},scriptDbg:()=>ie&&{lev:ie.wp?ie.wp.sel.filter((w,C)=>C%5===0).join(""):"",R:ie.wp?ie.wp.R.filter((w,C)=>C%5===0).map(w=>+w.toFixed(1)):[],hs:ie.hs,P:ie.rr.P.filter((w,C)=>C%6===0).map(w=>w.map(C=>+C.toFixed(1))),T:ie.T.map(w=>[w.k,+w.t0.toFixed(2),+w.t1.toFixed(2)])},quests:S,PO:i}}var yu={crate:"#a87b4a",wood:"#7b5a3a",peg:"#d2ad70",flag:"#f0b23a",bamboo:"#bfa465",iron:"#4d575f",rust:"#86603f",net:"#3f5d4c",rope:"#e6dcc4",wire:"#2a2f35",clothA:"#c4523f",clothB:"#ece6d6",clothC:"#456f8c",plaster:"#ddd5c4",tile:"#4a4e55",door:"#1fb0c4",ring:"#ffd166",ring2:"#ffffff",dark:"#17120e",frame:"#5a3e28",sill:"#8f8676",curtain:"#3d6a86",log:"#9a7752"},eM={door:"\u95E8",arch:"\u7A7F\u5802\u53E3",window:"\u7A97",balcony:"\u9633\u53F0",top:"\u5854\u9876\u51FA\u53E3"},nM={cut:"\u6284\u8FD1\u8DEF",updown:"\u5730\u9762\u2194\u5C4B\u9876","door-win":"\u95E8\u2194\u697C\u4E0A\u7A97"},iM={crates:"\u8D27\u7BB1\u53F0\u9636",cart:"\u659C\u677F\u8F66\u52A0\u8D27",scaffold:"\u4FEE\u7F2E\u811A\u624B\u67B6",pipes:"\u7BA1\u67B6\u94C1\u68AF",woodpile:"\u67F4\u579B\u96E8\u68DA",bamboo:"\u667E\u8863\u7AF9\u67B6",nets:"\u6E14\u7F51\u7BB1\u5806",ladder:"\u8D34\u5899\u7AF9\u68AF"},sM={rope:"\u667E\u8863\u7EF3",wire:"\u94A2\u4E1D",pipe:"\u7BA1\u9053",plank:"\u6728\u677F",beam:"\u6A2A\u6881",bridgehouse:"\u8FC7\u8857\u697C"},oM={thru:"\u7A7F\u5802",stairs:"\u4E0A\u697C\u51FA\u5C4B\u9876",row:"\u8FDE\u901A\u94FA\u9762"};function Wp(i,t){let{scene:e,camera:n,controls:s,host:o,renderer:r}=t,a=new $e;a.name="parkour",e.add(a);let l=i.el,c=at=>at[0]+at[1]>=.5,u={},h=(at,X,K)=>{let Wt=at+(K?"~":"");(u[Wt]=u[Wt]||[]).push(X)},p=(at,X,K)=>new nt(...I(at,X,K)),d=(at,X,K)=>({O:[at[0],at[1],K],N:[X[0],X[1]],T:[X[1],-X[0]]}),f=(at,X,K,Wt)=>[at.O[0]+at.T[0]*X+at.N[0]*K,at.O[1]+at.T[1]*X+at.N[1]*K,at.O[2]+Wt],y=at=>new Ze().makeBasis(new nt(at.T[0],0,at.T[1]),new nt(0,1,0),new nt(at.N[0],0,at.N[1]));function g(at,X,K,Wt,$,It,k,$t,Yt,ut,Ut){let Bt=new nn(It,$t,k);Ut&&Bt.rotateZ(Ut),Yt&&Bt.rotateX(Yt),Bt.applyMatrix4(y(X)),Bt.translate(...I(...f(X,K,Wt,$))),h(at,Bt,ut)}function m(at,X,K,Wt,$,It=6){let k=p(...X),$t=p(...K),Yt=$t.clone().sub(k),ut=Yt.length();if(ut<.001)return;let Ut=new qe(Wt,Wt,ut,It,1);Ut.applyQuaternion(new Cn().setFromUnitVectors(new nt(0,1,0),Yt.normalize())),Ut.translate((k.x+$t.x)/2,(k.y+$t.y)/2,(k.z+$t.z)/2),h(at,Ut,$)}function M(at,X,K,Wt=14){let $=[];for(let It=0;It<=Wt;It++){let k=It/Wt;$.push([at[0]+(X[0]-at[0])*k,at[1]+(X[1]-at[1])*k,at[2]+(X[2]-at[2])*k-K*4*k*(1-k)])}return $}function x(at,X,K,Wt){let $=new Zr(new Zo(X.map(It=>p(...It))),Math.max(6,X.length*2),K,5,!1);h(at,$,Wt)}let _=[],v=[],T=[],E=[];for(let at of l.aids){let X=d(at.wall,at.n,at.zg),K=Math.max(2.6,at.ze-at.zg),Wt=!c(at.use),$=(Ut,Bt,me)=>g("crate",X,Ut,Bt,.58+me*1.16,1.12,1.12,1.12,0,Wt),It=3.6;if(at.sub==="crates")$(.1,2.95,0),$(0,1.78,0),$(0,1.78,1),$(-.1,.62,0),$(-.1,.62,1),$(-.1,.62,2),It=3.5;else if(at.sub==="cart"){g("wood",X,0,2.55,1.32,1.5,3.2,.12,Math.atan2(2.1,3),Wt);for(let Ut of[-.82,.74])m("wood",f(X,Ut,3.45,.45),f(X,Ut+.08,3.45,.45),.45,Wt,12);$(0,.62,0),$(0,.62,1),It=2.4}else if(at.sub==="scaffold"||at.sub==="pipes"){for(let Ut of[-1.3,1.3])for(let Bt of[.3,1.5])m("bamboo",f(X,Ut,Bt,0),f(X,Ut,Bt,K+.9),.06,Wt);for(let Ut=1.9;Ut<K;Ut+=1.9)g("wood",X,0,.9,Ut,2.8,1.35,.07,0,Wt);It=K}else if(at.sub==="woodpile"){let Ut=(Bt,me,xe,Ne)=>m("log",f(X,Bt,xe,Ne),f(X,me,xe,Ne),.14,Wt,7);for(let Bt=0;Bt<6;Bt++)for(let me=0;me<4;me++)Ut(-1.25,1.25,.2+me*.27+Bt%2*.1,.14+Bt*.27);for(let Bt=0;Bt<3;Bt++)for(let me=0;me<3;me++)Ut(-1.05+Bt%2*.1,1,1.42+me*.27+Bt%2*.1,.14+Bt*.27);g("tile",X,0,1.15,2.65,3.1,2.3,.09,Math.atan2(.7,2.2),Wt);for(let Bt of[-1.4,1.4])m("wood",f(X,Bt,2.15,0),f(X,Bt,2.15,2.3),.06,Wt);g("flag",X,0,2.3,2.12,3.1,.03,.34,0,Wt),It=3}else if(at.sub==="bamboo"){for(let Ut of[-1.3,1.3])m("bamboo",f(X,Ut,2,0),f(X,Ut,.15,3.5),.05,Wt);m("bamboo",f(X,-1.6,1.25,1.9),f(X,1.6,1.25,1.9),.045,Wt),m("bamboo",f(X,-1.6,.45,3.1),f(X,1.6,.45,3.1),.045,Wt),["clothA","clothB","clothC"].forEach((Ut,Bt)=>g(Ut,X,-.9+Bt*.9,1.25,1.5,.62,.03,.75,0,Wt)),It=3.4}else if(at.sub==="ladder"){for(let Ut of[-.32,.32])m("bamboo",f(X,Ut,.62,0),f(X,Ut,.1,K+.6),.045,Wt);for(let Ut=.35;Ut<K+.3;Ut+=.42){let Bt=.62-.52*Ut/(K+.6);m("bamboo",f(X,-.34,Bt,Ut),f(X,.34,Bt,Ut),.03,Wt)}It=K}else at.sub==="nets"&&($(0,1.8,0),$(.1,.62,0),$(.1,.62,1),g("net",X,-.2,1.55,2.1,2.4,.04,4.3,-Math.atan2(2.4,3.6),Wt),It=2.4);let k=Math.max(It+.1,K-1.15),$t=K-.05;for(let Ut=It+.85,Bt=0;Ut<Math.min(K-.35,k-.15);Ut+=1.05,Bt++)g("peg",X,Bt%2?.28:-.28,.12,Ut,.85,.24,.12,0,Wt);$t-k>.3&&g("flag",X,0,.07,(k+$t)/2,.75,.05,$t-k,0,Wt);let Yt=iM[at.sub]||at.name,ut=[f(X,0,1.5,.25),f(X,0,.18,K)];v.push(ut),E.push(f(X,0,1.6,1.1)),_.push({kind:"aid",el:at,name:at.name||Yt,at:f(X,0,.4,K*.5),alt:[f(X,0,1.6,1.2)],path:ut})}for(let at of l.links){let X=at.a,K=at.b,Wt=!c(at.use),$=Math.hypot(K[0]-X[0],K[1]-X[1]),It=(K[0]-X[0])/$,k=(K[1]-X[1])/$,$t=-k,Yt=It,ut=[[X[0],X[1],X[2]+.5],[K[0],K[1],K[2]+.5]];if(at.kind==="rope"||at.kind==="wire"){let Ut=at.kind==="rope"?.045*$:.012*$,Bt=M([X[0],X[1],X[2]+.9],[K[0],K[1],K[2]+.9],Ut);ut=Bt,x(at.kind==="rope"?"rope":"wire",Bt,at.kind==="rope"?.04:.028,Wt);for(let me of[X,K])m("wood",[me[0],me[1],me[2]-.3],[me[0],me[1],me[2]+1.1],.06,Wt);if(at.kind==="rope"){let me=["clothA","clothB","clothC"];for(let xe=1,Ne;(Ne=xe*1.7/$)<.92;xe++){if(Ne<.08)continue;let De=Bt[Math.round(Ne*(Bt.length-1))],Qe={O:[De[0],De[1],De[2]],N:[$t,Yt],T:[It,k]};g(me[xe%3],Qe,0,0,-.42,.55,.03,.72,0,Wt)}}}else if(at.kind==="pipe")m("rust",[X[0],X[1],X[2]+.1],[K[0],K[1],K[2]+.1],.2,Wt,10);else if(at.kind==="plank"||at.kind==="beam"){let Ut={O:[X[0],X[1],X[2]],N:[It,k],T:[-$t,-Yt]},Bt=-Math.atan2(K[2]-X[2],$);g("wood",Ut,0,$/2,(K[2]-X[2])/2+.04,at.kind==="plank"?.55:.32,$+.6,at.kind==="plank"?.07:.28,Bt,Wt)}else if(at.kind==="bridgehouse"){let Ut={O:[X[0],X[1],Math.min(X[2],K[2])-.15],N:[It,k],T:[-$t,-Yt]};g("wood",Ut,0,$/2,.06,3,$+.4,.14,0,Wt),g("plaster",Ut,-1.45,$/2,1.3,.12,$,2.4,0,Wt),g("plaster",Ut,1.45,$/2,1.3,.12,$,2.4,0,Wt),g("tile",Ut,-.8,$/2,2.85,1.9,$+.8,.1,0,Wt,.5),g("tile",Ut,.8,$/2,2.85,1.9,$+.8,.1,0,Wt,-.5),ut=[[X[0],X[1],X[2]+3.4],[K[0],K[1],K[2]+3.4]]}v.push(ut),_.push({kind:"link",el:at,name:at.name||sM[at.kind],at:[(X[0]+K[0])/2,(X[1]+K[1])/2,(X[2]+K[2])/2+.8],alt:[[X[0],X[1],X[2]+.8],[K[0],K[1],K[2]+.8]],path:ut})}let R=[],S=[];for(let at of l.indoor){let X=at.pts,K=!c(at.use);for(let $=1;$<X.length;$++)R.push(...I(X[$-1][0],X[$-1][1],X[$-1][2]+1),...I(X[$][0],X[$][1],X[$][2]+1));for(let $ of at.doors){let It=X[1]||X[0],k=1e9;for(let Bt of X){let me=Math.hypot(Bt[0]-$[0],Bt[1]-$[1]);me>1.2&&me<k&&(k=me,It=Bt)}let $t=Math.hypot(It[0]-$[0],It[1]-$[1])||1,Yt=($[0]-It[0])/$t,ut=($[1]-It[1])/$t,Ut=d([$[0]-Yt*.9,$[1]-ut*.9],[Yt,ut],$[2]);g("door",Ut,-.8,0,1.25,.16,.22,2.5,0,K),g("door",Ut,.8,0,1.25,.16,.22,2.5,0,K),g("door",Ut,0,0,2.55,1.76,.22,.2,0,K),S.push($)}if(at.roof){let $=X[X.length-1],It=d([$[0],$[1]],[1,0],$[2]);g("door",It,0,0,.12,1.5,1.5,.12,0,K)}let Wt=X[Math.floor(X.length/2)];_.push({kind:"indoor",el:at,name:at.name||oM[at.kind],at:[Wt[0],Wt[1],Wt[2]+1.2],alt:at.doors.map($=>[$[0],$[1],$[2]+1.3]),path:X.map($=>[$[0],$[1],$[2]+1])})}let b=[],P=[],N=[],z=[],O=[];for(let at of l.rooms||[]){let X=at.zf+.12,K=b,Wt=[];for(let ut of at.rings){let Ut=[];for(let Bt=0;Bt<ut.length;Bt+=2)Ut.push(new oe(ut[Bt],ut[Bt+1]));for(let Bt of Pi.triangulateShape(Ut,[]))for(let me of Bt)K.push(...I(Ut[me].x,Ut[me].y,X));for(let Bt=0;Bt<Ut.length;Bt++){let me=Ut[Bt],xe=Ut[(Bt+1)%Ut.length];N.push(...I(me.x,me.y,X),...I(xe.x,xe.y,X))}Wt.push(Ut.concat([Ut[0]]).map(Bt=>[Bt.x,Bt.y,X+.3]))}for(let ut of at.ents){let[Ut,Bt]=ut.at,me=ut.n,xe=ut.kind==="window"?1.5:ut.kind==="balcony"?1:.2,Ne=ut.z+xe,De=ut.kind==="top"?0:3.4;if(De&&(z.push(...I(Ut+me[0]*.3,Bt+me[1]*.3,Ne),...I(Ut+me[0]*De,Bt+me[1]*De,Ne)),O.push([Ut+me[0]*De,Bt+me[1]*De,Ne])),ut.kind==="arch"||ut.kind==="top"||ut.kind==="door"&&!ut.new&&at.src==="key")continue;let Qe=d([Ut,Bt],me,ut.z);if(ut.kind==="door"){g("dark",Qe,0,.03,1.12,1.25,.06,2.24,0,!1);for(let Vn of[-1,1])g("frame",Qe,Vn*.72,.08,1.2,.16,.16,2.4,0,!1);g("frame",Qe,0,.08,2.46,1.76,.18,.2,0,!1),g("sill",Qe,0,.22,.06,1.7,.44,.12,0,!1),g("curtain",Qe,0,.1,2.02,1.2,.03,.62,0,!1);let Ve=ut.zg!=null?ut.z-ut.zg:0;if(Ve>.25){let Vn=Math.min(12,Math.ceil(Ve/.18));for(let ni=1;ni<=Vn;ni++){let Yn=-Ve*ni/(Vn+1),$n=Yn+Ve;g("sill",Qe,0,.44+.3*(ni-1)+.15,Yn-$n/2,1.7,.3,$n,0,!1)}}}else if(ut.kind==="window"){g("dark",Qe,0,.03,1.55,1.05,.06,1.2,0,!1);for(let Ve of[-1,1])g("frame",Qe,Ve*.6,.07,1.55,.12,.14,1.36,0,!1),g("frame",Qe,Ve*.92,.36,1.55,.05,.62,1.2,0,!1);g("frame",Qe,0,.07,2.2,1.34,.14,.1,0,!1),g("sill",Qe,0,.16,.9,1.44,.3,.09,0,!1)}else if(ut.kind==="balcony"){g("dark",Qe,0,.03,1.05,1.1,.06,2.1,0,!1);for(let Ve of[-1,1])g("frame",Qe,Ve*.62,.08,1.1,.14,.14,2.2,0,!1);g("frame",Qe,0,.6,-.05,2.6,1.2,.12,0,!1);for(let Ve of[-1.25,-.62,0,.62,1.25])g("frame",Qe,Ve,1.14,.5,.07,.07,1,0,!1);for(let Ve of[-1,1])g("frame",Qe,Ve*1.25,.6,.5,.07,1.1,.07,0,!1);g("frame",Qe,0,1.14,1,2.6,.1,.08,0,!1)}}let $=at.rings.flatMap(ut=>ut.filter((Ut,Bt)=>Bt%2===0)),It=at.rings.flatMap(ut=>ut.filter((Ut,Bt)=>Bt%2===1)),k=[(Math.min(...$)+Math.max(...$))/2,(Math.min(...It)+Math.max(...It))/2,at.zf+1.5],$t=at.ents.filter(ut=>ut.kind!=="top").map(ut=>{let Ut=ut.kind==="window"?1.5:ut.kind==="balcony"?1:.2,Bt=ut.z+Ut;return[[ut.at[0]-ut.n[0]*.6,ut.at[1]-ut.n[1]*.6,Bt],[ut.at[0]+ut.n[0]*3.6,ut.at[1]+ut.n[1]*3.6,Bt]]}),Yt=Wt.concat($t);_.push({kind:"room",el:at,name:at.name,at:k,alt:at.ents.map(ut=>[ut.at[0]+ut.n[0]*2,ut.at[1]+ut.n[1]*2,ut.z+1]),paths:Yt})}let G=[];for(let at of l.vant){let[X,K,Wt]=at.top;for(let k of at.routes){let $t=k.pts,Yt=$t[0],ut=$t[$t.length-1],Ut=!c(k.use);if(k.kind==="aided"){let Bt=$t.length>2?$t[1]:Yt,me=Math.hypot(Bt[0]-X,Bt[1]-K)||1,xe=[(Bt[0]-X)/me,(Bt[1]-K)/me],Ne=d([Bt[0],Bt[1]],xe,Bt[2]),De=Wt-Bt[2]-.6;for(let Ve of[-.28,.28])m("iron",f(Ne,Ve,.25,0),f(Ne,Ve,.25,De),.035,Ut);for(let Ve=.35;Ve<De;Ve+=.45)g("iron",Ne,0,.25,Ve,.56,.05,.05,0,Ut);for(let Ve=6;Ve<De-2;Ve+=6)g("wood",Ne,0,.75,Ve,1.6,1.1,.08,0,Ut);let Qe=[f(Ne,0,.3,.2),f(Ne,0,.3,De)];v.push(Qe),_.push({kind:"vroute",el:k,v:at,name:k.name,at:f(Ne,0,.4,De*.5),alt:[f(Ne,0,.6,1.5)],path:Qe})}else if(k.kind==="stairs"){let Bt=Yt,me=Math.hypot(Bt[0]-X,Bt[1]-K)||1,xe=[(Bt[0]-X)/me,(Bt[1]-K)/me],Ne=d([Bt[0]-xe[0]*.9,Bt[1]-xe[1]*.9],xe,Bt[2]);g("door",Ne,-.8,0,1.25,.16,.22,2.5,0,Ut),g("door",Ne,.8,0,1.25,.16,.22,2.5,0,Ut),g("door",Ne,0,0,2.55,1.76,.22,.2,0,Ut);for(let De=1;De<$t.length;De++)R.push(...I($t[De-1][0],$t[De-1][1],$t[De-1][2]+1),...I($t[De][0],$t[De][1],$t[De][2]+(De===$t.length-1?0:1)));_.push({kind:"vroute",el:k,v:at,name:k.name,at:[Bt[0],Bt[1],Bt[2]+1.3],path:$t.map(De=>[De[0],De[1],De[2]+1])})}else if(k.kind==="zip"){let Bt=M([X,K,Wt-.4],[ut[0],ut[1],ut[2]+1.4],.02*Math.hypot(ut[0]-X,ut[1]-K));x("wire",Bt,.035,Ut),m("iron",[ut[0],ut[1],ut[2]-.2],[ut[0],ut[1],ut[2]+1.6],.07,Ut);let me=Bt[Math.floor(Bt.length/2)];T.push(Bt),_.push({kind:"vroute",el:k,v:at,name:k.name,at:me,alt:[[ut[0],ut[1],ut[2]+1.2]],path:Bt})}}let $=new yi(2.4,.16,6,28);$.rotateX(Math.PI/2),$.translate(...I(X,K,Wt+.4)),h(at.land?"ring":"ring2",$);let It=document.createElement("div");It.className="sb-vt"+(at.land?" land":""),It.innerHTML=`<i></i>${at.name}`,G.push({el:It,p:[X,K,Wt+2.6],v:at}),_.push({kind:"vant",el:at,v:at,name:at.name,at:[X,K,Wt+1]})}let j=[];for(let[at,X]of Object.entries(u)){let K=at.replace("~",""),Wt=at.endsWith("~"),$=sp(X.map(Yt=>Yt.index?Yt.toNonIndexed():Yt),!1);X.forEach(Yt=>Yt.dispose());let It=K==="door"||K==="flag"||K==="ring"||K==="ring2",k=new ke({color:yu[K],roughness:.82,metalness:K==="iron"||K==="wire"?.35:0,emissive:It?new Ce(yu[K]):new Ce(0),emissiveIntensity:It?.45:0,transparent:Wt,opacity:Wt?.42:1,side:K==="net"||K.startsWith("cloth")?cn:Ii}),$t=new Te($,k);$t.castShadow=!Wt&&!It,$t.receiveShadow=!0,a.add($t),j.push($t)}let et=[];for(let[at,X]of[[b,.32],[P,.16]]){if(!at.length)continue;let K=new We;K.setAttribute("position",new Ue(at,3));let Wt=new Te(K,new Nn({color:"#3d8fe0",transparent:!0,opacity:X,depthTest:!1,depthWrite:!1,side:cn,toneMapped:!1}));Wt.renderOrder=5,Wt.frustumCulled=!1,a.add(Wt),et.push(Wt)}let tt=[],mt=at=>{let X=new zi({color:new Ce(yu.door),linewidth:3,transparent:!0,depthWrite:!1,dashed:!0,dashSize:1.6,gapSize:1.1,toneMapped:!1,...at});return tt.push(X),X},Q=new ms;Q.setPositions(R);let ft=new Hs(Q,mt({opacity:.55,depthTest:!1}));ft.computeLineDistances(),ft.renderOrder=6,ft.frustumCulled=!1,a.add(ft);let Et=new Hs(Q,mt({opacity:1}));Et.computeLineDistances(),Et.renderOrder=7,Et.frustumCulled=!1,a.add(Et);let rt=at=>{let X=[];for(let K of at)for(let Wt=1;Wt<K.length;Wt++)X.push(...I(...K[Wt-1]),...I(...K[Wt]));return X},it=at=>{let X=new zi({color:new Ce("#ff8a1f"),linewidth:2.4,transparent:!0,depthWrite:!1,toneMapped:!1,...at});return tt.push(X),X},ct=(at,X,K)=>{let Wt=new ms;Wt.setPositions(at);let $=new Hs(Wt,X);return $.computeLineDistances(),$.renderOrder=K,$.frustumCulled=!1,a.add($),$},J=rt(v),st=rt(T),ht=ct(J.concat(st),it({opacity:.3,depthTest:!1}),6),Dt=ct(J,it({opacity:.95}),7),Ft=ct(st,it({opacity:.95,dashed:!0,dashSize:2.2,gapSize:1.4}),7),Tt=at=>{let X=new zi({color:new Ce("#6cc4ff"),linewidth:1.6,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,...at});return tt.push(X),X},Gt=N.length?ct(N,Tt({opacity:.85}),6):null,q=z.length?ct(z,Tt({color:new Ce("#2fe0f0"),linewidth:3.2,opacity:1}),8):null,dt=(()=>{let at=document.createElement("canvas");at.width=at.height=32;let X=at.getContext("2d");return X.fillStyle="#ffffff",X.beginPath(),X.arc(16,16,13,0,7),X.fill(),X.fillStyle="#18b6cc",X.beginPath(),X.arc(16,16,9,0,7),X.fill(),new Fn(at)})(),xt=new We;xt.setAttribute("position",new Ue(O.flatMap(at=>I(...at)),3));let At=new Vi(xt,new ls({size:7,sizeAttenuation:!1,map:dt,transparent:!0,alphaTest:.3,depthTest:!1,depthWrite:!1}));At.renderOrder=8,At.frustumCulled=!1,a.add(At);let Lt=(()=>{let at=document.createElement("canvas");at.width=at.height=32;let X=at.getContext("2d");return X.fillStyle="#ffffff",X.beginPath(),X.arc(16,16,14,0,7),X.fill(),X.fillStyle="#ff8a1f",X.beginPath(),X.arc(16,16,9.5,0,7),X.fill(),new Fn(at)})(),Qt=new We;Qt.setAttribute("position",new Ue(E.flatMap(at=>I(...at)),3));let jt=new Vi(Qt,new ls({size:10,sizeAttenuation:!1,map:Lt,transparent:!0,alphaTest:.3,depthWrite:!1}));jt.renderOrder=8,jt.frustumCulled=!1,a.add(jt);let Kt=document.createElement("div");Kt.className="sb-vts",o.appendChild(Kt);for(let at of G)Kt.appendChild(at.el);let _e=new zi({color:new Ce("#ffe14d"),linewidth:6,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,toneMapped:!1});tt.push(_e);let Pe=null,Y=new Te(new yi(1,.08,8,40),new Nn({color:"#ffe14d",transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1}));Y.renderOrder=9,Y.visible=!1,a.add(Y);let D=!0,St=null,Xt=0,qt=0,Nt=new nt;function be(at,X,K){if(at!==Xt||X!==qt){for(let k of tt)k.resolution.set(at,X);Xt=at,qt=X}if(a.visible=D,Kt.style.display=D&&!K?"":"none",!D)return;let Wt=n.position.distanceTo(s.target),$=K?0:.5,It=K?0:Math.max(0,Math.min(.32,(Wt-90)/400));ft.material.opacity=$,ft.visible=$>.01,ht.material.opacity=It,ht.visible=It>.01,Dt.visible=Ft.visible=jt.visible=!K;for(let k of et)k.visible=!K;if(Gt&&(Gt.visible=!K),q&&(q.visible=!K),At.visible=!K,!K)for(let k of G){Nt.set(...I(...k.p));let $t=n.position.distanceTo(Nt);Nt.project(n);let Yt=Nt.z<1&&Math.abs(Nt.x)<1.02&&Math.abs(Nt.y)<1.02&&($t<520||k.v.land);Yt!==k.vis&&(k.el.style.display=Yt?"":"none",k.vis=Yt),Yt&&(k.el.style.transform=`translate(${((Nt.x+1)/2*at).toFixed(1)}px,${((1-Nt.y)/2*X).toFixed(1)}px) translate(-50%,-100%)`)}if(St){let k=1+.2*Math.sin(performance.now()/260);Y.scale.setScalar(St.r*k),_e.opacity=.75+.2*Math.sin(performance.now()/260)}}function ae(at,X,K,Wt){let $=null,It=18;for(let k of _)for(let $t of[k.at,...k.alt||[]]){if(Nt.set(...I(...$t)).project(n),Nt.z>=1)continue;let Yt=Math.hypot((Nt.x+1)/2*K-at,(1-Nt.y)/2*Wt-X);Yt<It&&(It=Yt,$=k)}return $}function ve(at){return _.find(X=>X.el.id===at&&X.kind!=="vant")||_.find(X=>X.el.id===at)}function we(at){if(Pe&&(a.remove(Pe),Pe.geometry.dispose(),Pe=null),!at){St=null,Y.visible=!1;return}(at.paths||at.path)&&(Pe=ct(rt(at.paths||[at.path]),_e,10));let X=at.kind==="vant"?at.at:null;St={r:3.6},X?(Y.position.set(...I(X[0],X[1],X[2])),Y.visible=!0):Y.visible=!1}function se(at){let X=ve(at);if(!X)return null;we(X);let K=X.el,Wt=X.at;if(K.cam&&X.kind!=="vant")return K.cam;if(X.kind==="aid"){let xe=K.n,Ne=K.ze-K.zg,De=[xe[1],-xe[0]];return{pos:[K.wall[0]+xe[0]*13+De[0]*9,K.wall[1]+xe[1]*13+De[1]*9,K.ze+13],tgt:[K.wall[0]+xe[0]*.8,K.wall[1]+xe[1]*.8,K.zg+Ne*.4],fov:50}}let $=X.path||(X.paths?X.paths.flat():[Wt]),It=$.map(xe=>xe[0]),k=$.map(xe=>xe[1]),$t=$.map(xe=>xe[2]),Yt=(Math.min(...It)+Math.max(...It))/2,ut=(Math.min(...k)+Math.max(...k))/2,Ut=(Math.min(...$t)+Math.max(...$t))/2,Bt=Math.max(14,Math.max(...It)-Math.min(...It),Math.max(...k)-Math.min(...k));if(X.kind==="vant"||X.kind==="vroute"&&X.el.kind!=="zip"){let xe=X.v||K,[Ne,De,Qe]=xe.top,Ve=34;return{pos:[Ne+Ve*.45,De+Ve*.95,Qe+8],tgt:[Ne,De,Qe-9],fov:52}}let me=Bt*1.05+10;return{pos:[Yt+me*.25,ut+me*.62,Ut+me*.82],tgt:[Yt,ut,Ut-1],fov:48}}function ye(at){let X=at.el,K=at.kind==="vant"?X.routes.filter(It=>It.kind!=="zip").reduce((It,k)=>[It[0]+k.use[0],It[1]+k.use[1]],[X.free[0],X.free[1]]):X.use||[0,0],Wt=at.kind==="aid"?"\u6709\u5F15\u5BFC\u7684\u4E0A\u623F\u70B9":at.kind==="link"?"\u5C4B\u95F4\u8FDE\u7EBF":at.kind==="indoor"?"\u5BA4\u5185\u7A7F\u884C":at.kind==="room"?X.kind==="tower"?"\u53EF\u8FDB\u7684\u5854":"\u5BA4\u5185\u7A7A\u95F4":at.kind==="vant"?X.land?"\u5730\u6807\u5236\u9AD8\u70B9":"\u5236\u9AD8\u70B9":"\u4E0A\u5236\u9AD8\u70B9\u7684\u8DEF",$=X.why||"";if(at.kind==="room"){let It={};for(let ut of X.ents)It[ut.kind]=(It[ut.kind]||0)+1;let k=Object.entries(It).map(([ut,Ut])=>(eM[ut]||ut)+(Ut>1?" "+Ut+" \u4E2A":"")).join("\u3001"),$t={};for(let ut of X.pairs)$t[ut.kind]=($t[ut.kind]||0)+1;let Yt=Object.entries($t).map(([ut,Ut])=>(nM[ut]||ut)+" "+Ut).join("\u3001");$=`${X.area} m\xB2${X.st?"\uFF0C"+X.st+" \u5C42":""}\uFF1B${$}\u3002\u51FA\u5165\u53E3\uFF1A${k}${Yt?"\uFF1B\u6709\u610F\u4E49\u7684\u8FDE\u63A5\uFF1A"+Yt:""}`}return{name:at.name,kind:Wt,why:$,use:K,id:X.id,verb:at.kind==="vant"?"\u4E0A\u53BB":at.kind==="room"?"\u7A7F\u8FC7":"\u7528",vant:at.kind==="vant",keep:at.kind==="room"}}return{update:be,view:se,mark:we,find:ve,info:ye,pickAt:ae,ID:_,show:at=>{D=at,at||we(null)},shown:()=>D,counts:i.counts}}async function rM(i){let t=i.host,e=i.base||"",n=i.data||{},[s,o,r,a]=await Promise.all([n.scene?n.scene:fetch(e+"scene.json").then(U=>U.json()),"poi"in n?n.poi:fetch(e+"poi.json").then(U=>U.ok?U.json():null).catch(()=>null),new Promise((U,Z)=>{let gt=new Image;gt.onload=()=>U(gt),gt.onerror=Z,gt.src=n.ground||e+"ground.webp"}),"pk"in n?n.pk:fetch(e+"pk.json").then(U=>U.ok?U.json():null).catch(()=>null)]);i.onProgress&&i.onProgress(.4),s.meta.center&&Bd(s.meta.center);let l=window.devicePixelRatio||1,c=Math.min(1.5,l),u=c>1?1:.75,h=new gc({antialias:l<1.5,preserveDrawingBuffer:!!i.keep}),p=c;h.setPixelRatio(p),h.shadowMap.enabled=!0,h.shadowMap.type=vl,h.shadowMap.autoUpdate=!1;let d=(()=>{try{let U=h.getContext(),Z=U.getExtension("WEBGL_debug_renderer_info");return/swiftshader|llvmpipe|software/i.test(Z?U.getParameter(Z.UNMASKED_RENDERER_WEBGL):"")}catch{return!1}})();h.toneMapping=Rl,h.toneMappingExposure=1.06,t.appendChild(h.domElement);let f=new Go;f.background=lM(),f.fog=new Lr("#dccfb8",3e-4);let y=new ar(h),g=new Go,m=new li(100,32,16),M=new zn({side:kn,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 top = vec3(0.36,0.52,0.70); vec3 hor = vec3(1.0,0.84,0.62); vec3 gnd = vec3(0.32,0.27,0.21); vec3 c = h > 0. ? mix(hor, top, pow(h, 0.55)) : mix(hor, gnd, pow(-h, 0.4)); vec3 sd = normalize(vec3(-0.62,0.42,0.66)); sd = vec3(sd.x, sd.z, sd.y); float s = max(dot(normalize(vP), sd), 0.); c += vec3(1.0,0.75,0.45) * pow(s, 64.) * 6.; gl_FragColor = vec4(c,1.); }"});g.add(new Te(m,M)),f.environment=y.fromScene(g,.02).texture,f.environmentIntensity=.34;let x=s.meta.sun,_=new nt(x[0],x[2]*.82,x[1]).normalize(),v=new ea("#ffcf98",3);v.position.copy(_.clone().multiplyScalar(500)),v.target.position.set(0,0,0),v.castShadow=!0,v.shadow.mapSize.set(i.shadow||4096,i.shadow||4096),Object.assign(v.shadow.camera,{left:-300,right:300,top:300,bottom:-300,near:50,far:1600}),v.shadow.bias=-25e-5,v.shadow.normalBias=.45,f.add(v,v.target),f.add(new Qr("#c9d3dc","#8a6f52",.74));let T=Xd(),E=qd(),R=h.capabilities.getMaxAnisotropy(),S=new Dn(r);S.colorSpace=vn,S.anisotropy=R,S.needsUpdate=!0;let b=U=>new ke(Object.assign({roughness:.86,metalness:0,vertexColors:!0},U)),P=U=>b({map:T[U].map,emissiveMap:T[U].em||null,emissive:T[U].em?new Ce("#f0c48e"):new Ce("#000"),emissiveIntensity:T[U].em?.42:0}),N={};for(let U of Object.keys(T))N[U]=P(U);N.tile=b({map:E.tile,roughness:.74,side:cn}),N.ridge=b({color:"#3d4045",roughness:.7}),N.ped=b({map:E.wood,color:"#9a8574"}),N.wood=b({map:E.wood}),N.red=b({color:"#5f3a31",roughness:.75}),N.stone=b({map:E.stone}),N.coping=b({map:E.stone,color:"#d6cfc2"}),N.quay=b({map:E.rubble,color:"#e6e0d6"}),N.cliff=b({map:E.cliff,color:"#d8d0c4",roughness:.95}),N.wet=b({map:E.rubble,color:"#7d8170",roughness:.6}),N.plank=b({map:E.plank,roughness:.92}),N.brick=b({map:E.brick}),N.wallBody=b({map:E.plaster}),N.cap=b({map:E.tile,color:"#9aa0a8",roughness:.75}),N.flat=b({color:"#8d867c"}),N.flatWall=b({map:E.plaster}),N.iron=b({map:E.iron,roughness:.55,metalness:.45}),N.girder=b({map:E.iron,color:"#9a948c",roughness:.55,metalness:.4}),N.pier=b({map:E.iron,color:"#8f8a82",roughness:.6,metalness:.35}),N.deck=b({color:"#4a4643"}),N.ballast=b({color:"#706960",roughness:1}),N.sleeper=b({color:"#4f3a2a"}),N.rail=b({color:"#9a9ca0",metalness:.85,roughness:.35}),N.paving=b({map:E.stone,color:"#e3dccf"}),N.stationW=b({map:E.brick}),N.brassG=b({color:"#a68c62",metalness:.85,roughness:.32,envMapIntensity:2.2}),N.soil=new ke({map:hM(),roughness:1,vertexColors:!0}),N.waterCut=new ke({color:"#2f6b70",transparent:!0,opacity:.72,roughness:.3,vertexColors:!0}),N.cloth=b({side:cn,roughness:.9}),N.lantern=b({color:"#9c4d3e",emissive:new Ce("#d9773f"),emissiveIntensity:.6,roughness:.6}),N.cityStone=b({map:E.stone,color:"#c9c1b4",roughness:.92}),N.bridgeS=b({map:E.stone,color:"#d9d2c6",roughness:.9}),N.glass=b({color:"#b9c8c8",roughness:.2,metalness:.35,transparent:!0,opacity:.6,side:cn,depthWrite:!1}),N.copper=b({color:"#5f9a88",roughness:.45,metalness:.45,envMapIntensity:1.6}),N.fall=new ke({map:uM(),color:"#e6f0ee",transparent:!0,opacity:.78,roughness:.3,depthWrite:!1,side:cn,vertexColors:!0}),N.foam=new ke({color:"#f4f6f2",transparent:!0,opacity:.7,roughness:.8,depthWrite:!1,vertexColors:!0});let z={bronze:new ke({color:"#6f5b3e",metalness:.8,roughness:.45}),rock:new ke({color:"#8f8b84",roughness:.95,flatShading:!0}),brass:new ke({color:"#ab9163",metalness:.85,roughness:.34,envMapIntensity:2}),ironM:new ke({color:"#2f2e2d",metalness:.6,roughness:.45}),cab:new ke({color:"#56392f",roughness:.65}),coachA:new ke({color:"#5a3c33",roughness:.6}),coachB:new ke({color:"#3d4a47",roughness:.6}),winBand:new ke({color:"#e6cfa6",emissive:new Ce("#e8b878"),emissiveIntensity:.4}),lampW:new ke({color:"#fff2c8",emissive:new Ce("#ffe0a0"),emissiveIntensity:2}),hull:new ke({color:"#4d3d30",roughness:.85}),sail:new ke({color:"#cdbf9f",roughness:.95,side:cn}),mat:new ke({color:"#a4957b",roughness:.95,side:cn}),crate:new ke({color:"#7a6a55",roughness:.9}),cream:new ke({color:"#efe6d2",roughness:.6}),redP:new ke({color:"#8b3a2c",roughness:.6}),sailR:new ke({color:"#9a6a48",roughness:.95,side:cn}),woodM:new ke({color:"#5a4434",roughness:.85}),bamboo:new ke({color:"#8f8a52",roughness:.8}),smoke:new ke({color:"#d9d6d0",roughness:1,transparent:!0,opacity:.4,depthWrite:!1})},O=[],G={};for(let U of Object.keys(N))G[U]=new ks;let j=rp(s),et=ap(s,j,S);f.add(et),lp(s,j,G);let tt=new ke({color:"#43716e",roughness:.06,metalness:.15,transparent:!0,opacity:.9,normalMap:fM(),normalScale:new oe(.35,.35),envMapIntensity:1.4});tt.normalMap.wrapS=tt.normalMap.wrapT=Li;for(let U of cp(s,tt))f.add(U);i.onProgress&&i.onProgress(.55);let mt=[],Q={awnings:[],lanterns:[]},ft=new Set((s.railcap||[]).map(U=>U.id));for(let U of s.bld)U.railcap=ft.has(U.id);for(let U of s.bld)Jd(G,U,mt,Q);for(let U of s.key)Qd(G,U,mt,Q);(()=>{for(let U in G)G[U].col=[1,1,1],G[U].col2=[1,1,1],G[U].bid=-1})(),ep(G,s.walls,j),np(G,s.gates,Q),hp(s,G,j),up(s,G),Ap(s,G,f,z),f.add(fp(s.tower,G,z.brass)),pp(s.kiosk,G,z.brass,f),mp(s,G,f,z,j);let rt=[];xp(s,G,f,z,j,O,rt),Mp(s,G,j),vp(s,G,j),Tp(s,G,j),bp(s,G),Sp(s,G),gp(s,G,f,z,j);let it=["#4c5566","#6d7477","#cbc0a6","#3f4a5a","#7a6b58"].map(U=>new Ce(U));for(let U of Q.awnings){G.cloth.col=[it[U.col].r,it[U.col].g,it[U.col].b],G.cloth.col2=G.cloth.col;let Z=1.7,gt=(zt,Zt,A)=>I(zt[0]+U.n[0]*Zt,zt[1]+U.n[1]*Zt,A);G.cloth.quad(gt(U.a,.05,U.z),gt(U.b,.05,U.z),gt(U.b,Z,U.z-.55),gt(U.a,Z,U.z-.55),[0,0],[1,0],[1,1],[0,1],[0,1,0]),G.cloth.quad(gt(U.a,Z,U.z-.55),gt(U.b,Z,U.z-.55),gt(U.b,Z,U.z-.85),gt(U.a,Z,U.z-.85),[0,0],[1,0],[1,1],[0,1],[U.n[0],0,U.n[1]])}for(let U of Q.lanterns)G.lantern.col=[1,1,1],G.lantern.cyl(U[0],U[1],U[2]-.55,U[2],.22,8,!0);wp(f,z,s.boats||[],O);let ct=s.marks.filter(U=>U.k==="bigtree").map(U=>({at:U.c,r:U.r*1.05,sp:U.sp||"ginkgo",z:U.z,big:1,trunk:Math.max(4,(U.top-U.z)*.32)})).concat(rt),J=yp(s,f,j,ct);i.onProgress&&i.onProgress(.8);let st={},ht=[],Dt=[],Ft=160,Tt=new Set(["wood","iron","red","ridge","cap","coping","brassG","lantern","sleeper","rail","copper","plank","cloth"]),Gt=[.05,.2];function q(U,Z){let gt=U.attributes.position.array,zt=gt.length/9,Zt=new Int32Array(zt),A=new Map,le=Tt.has(Z),de=le?new Float32Array(zt):null;for(let Ee=0;Ee<zt;Ee++){let Le=Ee*9,Xe=Math.floor((gt[Le]+gt[Le+3]+gt[Le+6])/3/Ft)*1e3+Math.floor((gt[Le+2]+gt[Le+5]+gt[Le+8])/3/Ft);if(Zt[Ee]=Xe,A.set(Xe,(A.get(Xe)||0)+1),le){let fn=gt[Le+3]-gt[Le],sn=gt[Le+4]-gt[Le+1],Mn=gt[Le+5]-gt[Le+2],Jn=gt[Le+6]-gt[Le],Ws=gt[Le+7]-gt[Le+1],xo=gt[Le+8]-gt[Le+2],ts=sn*xo-Mn*Ws,Gs=Mn*Jn-fn*xo,xs=fn*Ws-sn*Jn;de[Ee]=.5*Math.sqrt(ts*ts+Gs*Gs+xs*xs)}}if(A.size<2&&!le)return[U];let fe=[...A.keys()].sort((Ee,Le)=>Ee-Le),Se=new Map,Me=0;for(let Ee of fe)Se.set(Ee,Me),Me+=A.get(Ee);let Re=new Int32Array(zt),Oe=new Map(Se);for(let Ee=0;Ee<zt;Ee++){let Le=Oe.get(Zt[Ee]);Re[Le]=Ee,Oe.set(Zt[Ee],Le+1)}if(le)for(let Ee of fe)Re.subarray(Se.get(Ee),Se.get(Ee)+A.get(Ee)).sort((Le,Xe)=>de[Xe]-de[Le]);let Ae=Ee=>{let Le=Ee.itemSize*3,Xe=Ee.array,fn=new Xe.constructor(Xe.length);for(let sn=0;sn<zt;sn++)fn.set(Xe.subarray(Re[sn]*Le,Re[sn]*Le+Le),sn*Le);return new je(fn,Ee.itemSize,Ee.normalized)},pe={};for(let Ee of["position","normal","uv","color"])U.attributes[Ee]&&(pe[Ee]=Ae(U.attributes[Ee]));let Ye=U.userData.c2?Ae(U.userData.c2):null,ze=U.userData.ids,dn=new ze.constructor(zt);for(let Ee=0;Ee<zt;Ee++)dn[Ee]=ze[Re[Ee]];let Ln=[],_n=new nt,wi=pe.position.array;for(let Ee of fe){let Le=new We;for(let Mn in pe)Le.setAttribute(Mn,pe[Mn]);let Xe=Se.get(Ee)*3,fn=A.get(Ee)*3,sn=new Un;Le.setDrawRange(Xe,fn);for(let Mn=Xe;Mn<Xe+fn;Mn++)sn.expandByPoint(_n.set(wi[Mn*3],wi[Mn*3+1],wi[Mn*3+2]));if(Le.boundingBox=sn,Le.boundingSphere=sn.getBoundingSphere(new jn),Le.userData.c1=pe.color,Le.userData.c2=Ye,Le.userData.ids=dn,Ln.push(Le),le){let Mn=Se.get(Ee),Jn=A.get(Ee),Ws=[fn];for(let xo of Gt){let ts=0;for(;ts<Jn&&de[Re[Mn+ts]]>=xo;)ts++;Ws.push(ts*3)}Le.userData.lod=Ws}}return U.dispose(),Ln}for(let U in G){if(!G[U].count)continue;let Z=G[U].geometry(),gt=Z.attributes.position.count>9e4?q(Z,U):[Z];st[U]=gt.map(zt=>{let Zt=new Te(zt,N[U]);return Zt.castShadow=!["waterCut","soil"].includes(U),Zt.receiveShadow=!0,Zt.userData.key=U,f.add(Zt),zt.userData.ids.some(A=>A>=0)&&ht.push(Zt),zt.userData.lod&&(Dt.push(Zt),Zt.userData.lv=0,Zt.onBeforeShadow=()=>{zt.drawRange.count=zt.userData.lod[Math.max(1,Zt.userData.lv)]},Zt.onAfterShadow=()=>{zt.drawRange.count=zt.userData.lod[Zt.userData.lv]}),Zt})}for(let U in N){let Z=N[U];Z.userData.map=Z.map,Z.userData.em=Z.emissiveMap,Z.userData.ei=Z.emissiveIntensity}let[dt,xt,At,Lt]=s.meta.bbox,Qt=new Te(new Gi((At-dt)*1.16,(Lt-xt)*1.16),new Nn({map:cM(),transparent:!0,depthWrite:!1,opacity:.55}));Qt.rotation.x=-Math.PI/2;let jt=I((dt+At)/2,(xt+Lt)/2,ds-.6);Qt.position.set(jt[0]+24,jt[1],jt[2]+18),f.add(Qt);let Kt=new Xn(32,1,2,6e3),_e=new xc(Kt,h.domElement);_e.enableDamping=!0,_e.dampingFactor=.08,_e.maxPolarAngle=Math.PI*.495,_e.minDistance=8,_e.maxDistance=2200,_e.screenSpacePanning=!0;let Pe=aM(s),Y=(U,Z)=>{let gt=new nt(...I(...U.pos)),zt=new nt(...I(...U.tgt)),Zt=U.fov||32;if(Z){Kt.position.copy(gt),_e.target.copy(zt),Kt.fov=Zt,Kt.updateProjectionMatrix(),_e.update();return}D={t0:performance.now(),dur:1300,p0:Kt.position.clone(),q0:_e.target.clone(),f0:Kt.fov,p1:gt,q1:zt,f1:Zt}},D=null;Y(Pe.art,!0);let St=document.createElement("div");St.className="sb-labels",t.appendChild(St);let Xt=new Set(s.labels.filter(U=>U.k==="parcel").map(U=>U.t)),qt=s.labels.filter(U=>!(U.k==="place"&&Xt.has(U.t))).map(U=>{let Z=document.createElement("div");Z.className="sb-label sb-"+U.k+(U.kind?" sb-kd-"+U.kind:""),Z.textContent=U.t,St.appendChild(Z);let gt=U.z+(U.k==="parcel"?14:U.k==="road"?1.5:6);return{el:Z,p:new nt(...I(U.at[0],U.at[1],gt)),x:U.at[0],y:U.at[1],z:gt,k:U.k,pri:U.k==="parcel"?0:U.k==="place"?1:2,on:!1,w:0,h:0}}),Nt=!0,be=null,ae=(()=>{let[U,Z,gt,zt]=s.meta.bbox,Zt=Math.ceil(gt-U)+1,A=Math.ceil(zt-Z)+1,le=new Float32Array(Zt*A).fill(-1e9),de=(fe,Se)=>{let Me=1e9,Re=1e9,Oe=-1e9,Ae=-1e9;for(let pe of fe)Me=Math.min(Me,pe[0]),Re=Math.min(Re,pe[1]),Oe=Math.max(Oe,pe[0]),Ae=Math.max(Ae,pe[1]);for(let pe=Math.max(0,Math.floor(Re-Z));pe<=Math.min(A-1,Math.ceil(Ae-Z));pe++)for(let Ye=Math.max(0,Math.floor(Me-U));Ye<=Math.min(Zt-1,Math.ceil(Oe-U));Ye++)if($i([U+Ye+.5,Z+pe+.5],fe)){let ze=pe*Zt+Ye;Se>le[ze]&&(le[ze]=Se)}};for(let fe of s.bld)de(fe.p,fe.ze+(fe.top-fe.ze)*.55);for(let fe of s.key)de(fe.p,fe.top-1.5);if(s.station&&de(s.station.p,s.station.deck+1),s.tower&&s.tower.c){let fe=s.tower,Se=12,Me=[];for(let Re=0;Re<Se;Re++)Me.push([fe.c[0]+Math.cos(Re/Se*6.283)*fe.r,fe.c[1]+Math.sin(Re/Se*6.283)*fe.r]);de(Me,fe.top)}return{at:(fe,Se)=>{let Me=Math.floor(fe-U),Re=Math.floor(Se-Z);return Me<0||Re<0||Me>=Zt||Re>=A?-1e9:le[Re*Zt+Me]}}})(),ve=()=>{let U=Kt.position;return[U.x+Yi.x,U.z+Yi.y,U.y+Yi.z]};function we(U,Z,gt,zt){let Zt=U.x-Z,A=U.y-gt,le=U.z-zt,de=Math.hypot(Zt,A),fe=Math.max(2,Math.ceil(de/1.5));for(let Se=1;Se<fe-1;Se++){let Me=Se/fe,Re=Z+Zt*Me,Oe=gt+A*Me,Ae=zt+le*Me;if(de*(1-Me)<6)break;if(Math.max(ae.at(Re,Oe),j(Re,Oe))>Ae+.4)return!0}return!1}let se=0,ye=new nt(1e9,0,0);function at(U,Z){let gt=t.clientWidth,zt=t.clientHeight,[Zt,A,le]=ve(),de=Kt.position.distanceTo(ye)>.05,fe=Z||U-se>(de?150:400),Se=[];for(let Me of qt)Yn.copy(Me.p).project(Kt),Me.sx=(Yn.x+1)/2*gt,Me.sy=(1-Yn.y)/2*zt,Me.front=Yn.z<1&&Math.abs(Yn.x)<1.05&&Math.abs(Yn.y)<1.05,Me.d=Math.hypot(Me.x-Zt,Me.y-A,Me.z-le);if(fe){se=U,ye.copy(Kt.position);let Me=le-j(Zt,A)<30,Re=[],Oe=qt.slice().sort((Ae,pe)=>Ae.pri-pe.pri||Ae.d-pe.d);for(let Ae of Oe){let pe=Ae.front&&(!be||be.has(Ae.k));if(pe&&Ae.k==="road"&&(Me||Ae.d>320)&&(pe=!1),pe&&Me&&Ae.d>(Ae.k==="parcel"?260:170)&&(pe=!1),pe&&(Ae.k!=="parcel"||Me)&&we(Ae,Zt,A,le)&&(pe=!1),pe){Ae.w||(Ae.el.style.display="",Ae.w=Ae.el.offsetWidth||60,Ae.h=Ae.el.offsetHeight||18);let Ye=Math.max(.78,Math.min(1,1.12-Ae.d/900)),ze=Ae.w*Ye+6,dn=Ae.h*Ye+4,Ln=[Ae.sx-ze/2,Ae.sy-dn,Ae.sx+ze/2,Ae.sy];Re.some(_n=>Ln[0]<_n[2]&&Ln[2]>_n[0]&&Ln[1]<_n[3]&&Ln[3]>_n[1])?pe=!1:(Re.push(Ln),Ae.sc=Ye)}Ae.on=pe}}for(let Me of qt){let Re=Me.on&&Me.front;Me.el.style.display=Re?"":"none",Re&&(Me.el.style.transform=`translate(${Me.sx.toFixed(1)}px,${Me.sy.toFixed(1)}px) translate(-50%,-100%) scale(${(Me.sc||1).toFixed(3)})`)}}let X=o?Vp(o,{scene:f,camera:Kt,controls:_e,host:t,camXY:ve,opts:i,S:s,gz:j,groundImg:r,PK:a,dom:h.domElement,treeFade:!!J.fade,hAt:(U,Z)=>Math.max(ae.at(U,Z),j(U,Z)),bAt:(U,Z)=>ae.at(U,Z)}):null,K=a?Wp(a,{scene:f,camera:Kt,controls:_e,host:t,renderer:h}):null,Wt=new ao,$=new oe,It=null;h.domElement.addEventListener("pointerdown",U=>{It=[U.clientX,U.clientY]}),h.domElement.addEventListener("pointerup",U=>{if(!It||Math.hypot(U.clientX-It[0],U.clientY-It[1])>5||X&&X.playing())return;let Z=h.domElement.getBoundingClientRect();if(K&&K.shown()&&!(X&&X.walking())){let Zt=K.pickAt(U.clientX-Z.left,U.clientY-Z.top,Z.width,Z.height);if(Zt){K.mark(Zt),$t(null),i.onPk&&i.onPk(K.info(Zt));return}}K&&K.mark(null),$.set((U.clientX-Z.left)/Z.width*2-1,-(U.clientY-Z.top)/Z.height*2+1),Wt.setFromCamera($,Kt);let gt=Wt.intersectObjects(ht,!1)[0],zt=null;if(gt){let A=gt.object.geometry.userData.ids[gt.faceIndex];A>=0&&(zt=mt[A])}i.onPick&&i.onPick(zt),$t(zt)});let k=new Te(new qe(1,1,1,32,1,!0),new Nn({color:"#ffd27a",transparent:!0,opacity:.35,side:cn,depthWrite:!1}));k.visible=!1,f.add(k);function $t(U){if(!U){k.visible=!1;return}let[Z,gt]=U.c,zt=I(Z,gt,U.z);k.position.set(zt[0],zt[1]+(U.top-U.z)/2+.5,zt[2]);let Zt=U.kind==="key"?12:6;k.scale.set(Zt,U.top-U.z+3,Zt),k.visible=!0}let Yt=!1;function ut(U){Yt=U;for(let Z in st)for(let gt of st[Z]){let zt=gt.geometry;if(!zt.userData.c2||["soil","waterCut","cloth","lantern"].includes(Z)||!ht.includes(gt))continue;zt.setAttribute("color",U?zt.userData.c2:zt.userData.c1);let A=gt.material;A.map=U?null:A.userData.map,A.emissiveMap=U?null:A.userData.em,A.emissiveIntensity=U?0:A.userData.ei,A.needsUpdate=!0}xe=!0}function Ut(U){for(let Z of J)Z.visible=U;xe=!0}let Bt="";function me(){let U=_e.target,Z=Kt.position.distanceTo(U),gt=Math.min(620,Math.max(70,Math.ceil(Z*.62/20)*20)),zt=gt/64,Zt=Math.round(U.x/zt)*zt,A=Math.round(U.z/zt)*zt,le=gt+","+Zt+","+A;if(le===Bt)return!1;Bt=le,v.target.position.set(Zt,0,A),v.position.set(Zt+_.x*800,_.y*800,A+_.z*800),v.target.updateMatrixWorld(),v.updateMatrixWorld();let de=v.shadow.camera;return de.left=-gt,de.right=gt,de.top=gt,de.bottom=-gt,de.near=200,de.far=1700,de.updateProjectionMatrix(),v.shadow.normalBias=.3+gt/700,Ne=gt,!0}let xe=!0,Ne=300,De=0,Qe="",Ve=null;function Vn(){let U=t.clientWidth,Z=t.clientHeight;h.setSize(U,Z,!1),h.domElement.style.width=U+"px",h.domElement.style.height=Z+"px",Kt.aspect=U/Math.max(1,Z),Kt.updateProjectionMatrix()}let ni=new ResizeObserver(()=>{Vn(),ui||V(performance.now())});ni.observe(t),Vn();let Yn=new nt,$n=!0,ui=!0,ii=performance.now(),gs=0,Fi=0,Vs=0,ys=0;function _o(U){let Z=U-ys;if(ys=U,d||i.manual||window.__xqFixedRes||Z<=0||Z>250||(gs+=Z,Fi++,Fi<24||U-Vs<2e3))return;let gt=gs/Fi;gs=0,Fi=0,Vs=U;let zt=gt>30?Math.max(u,p-.25):gt<18?Math.min(c,p+.25):p;zt!==p&&(p=zt,h.setPixelRatio(p),Vn())}let _s=new Float32Array(17),ki=0;function Qi(U){if(!ui)return;requestAnimationFrame(Qi);let Z=Kt.matrixWorld.elements,gt=!D&&_s[16]===Kt.fov;for(let zt=0;zt<16&&gt;zt++)_s[zt]!==Z[zt]&&(gt=!1);if(gt?ki++:(_s.set(Z),_s[16]=Kt.fov,ki=0),ki>60){if(ys=0,ki&1)return}else _o(U);V(U)}function V(U){let Z=Math.min(.05,(U-ii)/1e3);if(ii=U,D){let le=(U-D.t0)/D.dur;le>=1&&(le=1);let de=le<.5?4*le*le*le:1-Math.pow(-2*le+2,3)/2;Kt.position.lerpVectors(D.p0,D.p1,de),_e.target.lerpVectors(D.q0,D.q1,de),Kt.fov=D.f0+(D.f1-D.f0)*de,Kt.updateProjectionMatrix(),le>=1&&(D=null)}X&&X.step(Z)?D=null:_e.update();let gt=X&&X.heroHead?X.heroHead():null,zt=gt?gt.x.toFixed(2)+","+gt.y.toFixed(2)+","+gt.z.toFixed(2):"",Zt=K?K.shown():null;(me()||xe||zt!==Qe||Zt!==Ve||Ne<=160&&U-De>500)&&(h.shadowMap.needsUpdate=!0,De=U,xe=!1,Qe=zt,Ve=Zt),tt.normalMap.offset.x+=Z*.004,tt.normalMap.offset.y+=Z*.0025,N.fall.map&&(N.fall.map.offset.y-=Z*.6);let A=U/1e3;for(let le of O)le(A);J.fade&&J.fade(Kt.position,X&&X.heroHead?X.heroHead():null,Z,Kt);for(let le of Dt){let de=le.geometry,fe=de.boundingBox.distanceToPoint(Kt.position),Se=fe<110?0:fe<260?1:2;le.userData.lv=Se,de.drawRange.count=de.userData.lod[Se]}h.render(f,Kt),Nt&&at(U,!!$n),$n=!1,X&&X.update(),K&&K.update(t.clientWidth,t.clientHeight,!!(X&&X.walking()))}i.manual?ui=!1:requestAnimationFrame(Qi),i.onProgress&&i.onProgress(1);function bt(U){_e.maxPolarAngle=Math.PI*(U?.62:.495),Kt.near=U?.3:2,Kt.far=U?3200:6e3,Kt.updateProjectionMatrix()}let Vt={S:s,PICK:mt,VIEWS:Pe,camera:Kt,controls:_e,renderer:h,scene:f,view:U=>{let Z=Pe[U];Z&&(X&&X.stop(),Y(Z))},viewNow:U=>{let Z=Pe[U];Z&&Y(Z,!0)},setNow:U=>Y(U,!0),anchor:U=>{let Z=s.anchors.find(gt=>gt.id===U);Z&&(X&&X.stop(),Y({pos:[Z.at[0],Z.at[1],Z.ez],tgt:[Z.look[0],Z.look[1],Z.ez-.6],fov:62}))},flyTo:U=>{X&&X.stop(),Y(U)},project:(U,Z,gt)=>{let zt=new nt(...I(U,Z,gt)).project(Kt);return{x:(zt.x+1)/2,y:(1-zt.y)/2,front:zt.z<1&&zt.z>-1}},flying:()=>!!D,storey:ut,trees:Ut,labels:(U,Z)=>{Nt=U,St.style.display=U?"":"none",be=Z?new Set(Z):null,$n=!0},render:()=>{D&&(D.t0=-1e9),$n=!0,xe=!0,V(performance.now())},shadowDirty:()=>{xe=!0},dispose:()=>{ui=!1,ni.disconnect();try{_e.dispose()}catch{}h.dispose();try{h.forceContextLoss()}catch{}h.domElement.remove()},highlight:$t,pause:()=>{ui=!1},resume:()=>{ui||(ui=!0,ii=performance.now(),requestAnimationFrame(Qi))},poi:X,flyPoi:U=>{let Z=X&&X.focus(U);Z&&(X.stop(),Y(Z))},flyHub:U=>{let Z=X&&X.hub(U);Z&&(X.stop(),Y(Z))},pk:K,flyPk:U=>{let Z=K&&K.view(U);return Z&&(X&&X.stop(),Y(Z)),!!Z},tps:(U,Z)=>{if(!X)return null;X.stop();let gt=X.stand(U.at[0],U.at[1],U.z!=null?U.z:j(U.at[0],U.at[1]),U.look,U),zt=gt.tgt[0]-gt.pos[0],Zt=gt.tgt[1]-gt.pos[1],A=Math.hypot(zt,Zt)||1,le=Math.atan2(gt.tgt[2]-gt.pos[2],A)+(U.dp!=null?U.dp:-7)*Math.PI/180;return gt.tgt=[gt.pos[0]+zt/A*Math.cos(le)*14,gt.pos[1]+Zt/A*Math.cos(le)*14,gt.pos[2]+Math.sin(le)*14],bt(!0),Y(gt,Z),gt},tpsAnchor:(U,Z={},gt)=>{let zt=s.anchors.find(Se=>Se.id===U);if(!zt||!X)return null;let Zt=zt.ez-1.8,A=(zt.els||[]).find(Se=>Se.role==="\u4E3B")||(zt.els||[])[0],le=Math.hypot(zt.look[0]-zt.at[0],zt.look[1]-zt.at[1])||1,de=A&&Math.hypot(A.tgt[0]-zt.at[0],A.tgt[1]-zt.at[1])||30,fe=Zt+1.7+(A?(A.tgt[2]-(Zt+1.7))*.42*Math.min(1,le/de):0);return Vt.tps(Object.assign({at:zt.at,z:Zt,look:zt.look,tz:fe,lz:A&&A.tgt?A.tgt[2]:null},Z),gt)},unstand:()=>{X&&X.unstand(),bt(!1)},script:U=>X?(D=null,bt(!0),X.script(U)):null,scriptStop:()=>{X&&X.scripting()&&(X.scriptStop(),bt(!1))},focusPick:U=>{if(!U)return;let[Z,gt]=U.c;Y({pos:[Z+38,gt+62,U.top+44],tgt:[Z,gt,U.z+4],fov:32}),$t(U)}};return Vt}function aM(i){return{v8west:{pos:[-8,486,62],tgt:[-62,418,22],fov:44},v8inn:{pos:[28,432,72],tgt:[-4,376,21],fov:46},v8shupu:{pos:[212,186,74],tgt:[258,96,24],fov:44},v8hump6:{pos:[455,372,22],tgt:[448,262,27],fov:50},v8hump7:{pos:[-48,497,13.9],tgt:[60,495,18],fov:50},v8brook:{pos:[486,168,48],tgt:[488,110,19],fov:46},v8brookW:{pos:[238,150,34],tgt:[258,124,20],fov:48},v8gate:{pos:[241,502,21.2],tgt:[242,466,22.5],fov:56},v8side:{pos:[226,352,22.2],tgt:[250,352,25],fov:56},v8whgate:{pos:[318,492,23],tgt:[296,512,19],fov:52},v8cliff:{pos:[370,560,92],tgt:[458,468,62],fov:42},v8bay:{pos:[372,612,70],tgt:[318,540,14],fov:42},v8screen:{pos:[300,357,26.4],tgt:[300,336,26.5],fov:54},v8camp:{pos:[30,236,112],tgt:[-44,332,20],fov:48},v8campgate:{pos:[-8,352,22.6],tgt:[-8,322,24.5],fov:54},v8dock:{pos:[52,676,64],tgt:[38,584,12],fov:44},v8east:{pos:[412,352,58],tgt:[372,318,26],fov:44},v8fort:{pos:[612,548,96],tgt:[568,468,52],fov:42},v8gang:{pos:[418,290,52],tgt:[488,247,47],fov:44},v8lake:{pos:[346,196,46],tgt:[308,140,22],fov:44},e6gate:{pos:[-160,452,34],tgt:[-104,432,27],fov:50},e6gateIn:{pos:[-56,452,42],tgt:[-104,434,28],fov:50},e6camp:{pos:[12,266,54],tgt:[-28,310,21],fov:50},e6plaza:{pos:[332,108,50],tgt:[287,52,28],fov:46},e6arch:{pos:[254.6,60.3,25.1],tgt:[289,51,27.5],fov:56},e6lake:{pos:[304,206,27.6],tgt:[332,168,22.5],fov:54},e6spring:{pos:[234,204,30],tgt:[251,178,23],fov:52},e6dock:{pos:[44,642,38],tgt:[16,597,14],fov:46},e6thief:{pos:[360,414,34],tgt:[385,387,21.5],fov:50},e6cliff:{pos:[430,540,82],tgt:[530,452,50],fov:44},e6pk:{pos:[288,506,30],tgt:[311,481,20],fov:52},g10H1d:{pos:[237.4,495,22.6],tgt:[240.2,479,23.4],fov:54},g10S2b:{pos:[256,488.5,21.4],tgt:[256,503.5,19.6],fov:54},g10H1a:{pos:[199.5,434.4,22.6],tgt:[213.7,435.8,23.4],fov:54},g10W1:{pos:[239,324,26.2],tgt:[228.2,322.8,26.4],fov:56},g10Y5c:{pos:[283.6,18,27],tgt:[284,3,27.4],fov:54},g10Y6c:{pos:[400.5,10.5,27],tgt:[400.5,24,26.6],fov:54},g10Q4:{pos:[626,336,25.5],tgt:[604,344.6,25.5],fov:54},g10L3:{pos:[93,84,70],tgt:[71,82,67],fov:50},g10P1c:{pos:[446,320,28],tgt:[410,319,26],fov:52},g10P1u:{pos:[370,338,25.9],tgt:[370,366,25.4],fov:56},g10R03:{pos:[241.8,444.6,21.1],tgt:[236.2,451.7,20.7],fov:56},g10J125:{pos:[142,518,14.1],tgt:[121,523,13.8],fov:56},qend1:{pos:[308,199.5,26.6],tgt:[305,140,24.5],fov:58},qend2:{pos:[330,240,62],tgt:[280,170,20],fov:50},art:{pos:[286,930,905],tgt:[285,306,15],fov:32},station:{pos:[200,480,70],tgt:[155,432,30],fov:40},dome:{pos:[60,580,48],tgt:[22,522,24],fov:42},fort:{pos:[628,508,84],tgt:[576,452,54],fov:42},bridgeS:{pos:[430,700,60],tgt:[471,640,28],fov:44},bridgeE:{pos:[640,425,52],tgt:[672,335,16],fov:44},cityGate:{pos:[-48,478,50],tgt:[-108,434,24],fov:42},pagoda:{pos:[120,150,100],tgt:[66,84,64],fov:42},wheel:{pos:[640,230,40],tgt:[605,183,18],fov:44},factory:{pos:[600,110,80],tgt:[540,30,30],fov:44},clock:{pos:[305,125,62],tgt:[282,55,40],fov:44},shipyard:{pos:[-15,625,46],tgt:[-60,556,16],fov:44},allTop:{pos:[283,302,1560],tgt:[283,298,20],fov:32},zC:{pos:[298,760,250],tgt:[288,420,20],fov:36},zSW:{pos:[70,800,215],tgt:[45,505,14],fov:36},zNW:{pos:[110,560,300],tgt:[62,200,30],fov:38},zN:{pos:[430,430,270],tgt:[405,70,22],fov:38},zE:{pos:[560,840,270],tgt:[560,400,24],fov:38},art1:{pos:[262,838,372],tgt:[270,382,10],fov:32},west:{pos:[190,452,70],tgt:[238,420,20],fov:40},campus:{pos:[300,470,120],tgt:[338,288,24],fov:34},market:{pos:[282,560,92],tgt:[306,440,18],fov:34},hill:{pos:[262,420,98],tgt:[178,322,22],fov:34},dock:{pos:[312,616,52],tgt:[278,530,12],fov:36},lake:{pos:[356,330,70],tgt:[380,236,22],fov:36},top:{pos:[268,361,720],tgt:[268,358,20],fov:32},kiosk:{pos:[286,488,76],tgt:[252,441,21],fov:30},rail:{pos:[232,372,52],tgt:[205,330,25],fov:38},stairs:{pos:[214,580,52],tgt:[244,546,14],fov:40},guanshu:{pos:[378,512,74],tgt:[342,438,22],fov:36},gsdoor:{pos:[342,479,22.6],tgt:[342,448,23.2],fov:54},p1steps:{pos:[322,300,36],tgt:[300,286,27],fov:50},lanegate:{pos:[214.5,425.2,21.65],tgt:[229.5,424.2,23],fov:62},lanetop:{pos:[196,404,46],tgt:[232,432,20],fov:46},eastgate:{pos:[306,474,32],tgt:[292,446,22],fov:46},gsgarden:{pos:[296,392,52],tgt:[342,428,20],fov:46},lanemouth:{pos:[246,452,30],tgt:[230,437,22],fov:55},westgate:{pos:[195,425.5,21.7],tgt:[226,424.5,23.5],fov:60},nelane:{pos:[259.5,436.5,21],tgt:[283,407,24],fov:60},nexit:{pos:[285,402.5,21.7],tgt:[300,366,27],fov:60},forecourt:{pos:[300,404,33],tgt:[300,360,25.5],fov:50},library:{pos:[226,392,46],tgt:[258,366,28],fov:46},route:{pos:[196,505,118],tgt:[262,405,20],fov:40},railend:{pos:[158,432,46],tgt:[192,384,30],fov:46},xjl:{pos:[330,408,42],tgt:[340,362,27],fov:48},yardgate:{pos:[176,302,30],tgt:[190,284,24],fov:56}}}function lM(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d"),e=t.createRadialGradient(256,236,30,256,256,380);e.addColorStop(0,"#ece4d7"),e.addColorStop(.6,"#d6cbbb"),e.addColorStop(1,"#a99b88"),t.fillStyle=e,t.fillRect(0,0,512,512);let n=new Fn(i);return n.colorSpace=vn,n}function cM(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=t.createRadialGradient(128,128,60,128,128,128);return e.addColorStop(0,"rgba(40,30,20,0.9)"),e.addColorStop(.55,"rgba(40,30,20,0.55)"),e.addColorStop(1,"rgba(40,30,20,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Fn(i)}function hM(){let i=document.createElement("canvas");i.width=64,i.height=256;let t=i.getContext("2d"),e=(()=>{let o=7;return()=>(o=o*16807%2147483647)/2147483647})(),n=0;for(;n<256;){let o=6+e()*26,r=30+e()*14;t.fillStyle=`hsl(${26+e()*8},${22+e()*10}%,${r}%)`,t.fillRect(0,n,64,o),n+=o}for(let o=0;o<300;o++)t.fillStyle=e()<.5?"rgba(0,0,0,.12)":"rgba(255,255,255,.08)",t.fillRect(e()*64,e()*256,2,2);let s=new Fn(i);return s.colorSpace=vn,s.wrapS=s.wrapT=Li,s}function uM(){let i=document.createElement("canvas");i.width=64,i.height=256;let t=i.getContext("2d");t.fillStyle="#cfe0de",t.fillRect(0,0,64,256);let e=(()=>{let s=11;return()=>(s=s*16807%2147483647)/2147483647})();for(let s=0;s<90;s++)t.fillStyle=e()<.6?"rgba(255,255,255,0.55)":"rgba(120,160,158,0.35)",t.fillRect(e()*64,e()*256,1+e()*3,20+e()*80);let n=new Fn(i);return n.colorSpace=vn,n.wrapS=n.wrapT=Li,n}function fM(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n=e.createImageData(256,256),s=(r,a)=>{let l=r/256*Math.PI*2,c=a/256*Math.PI*2;return Math.sin(l*3+c*2)*.5+Math.sin(l*7-c*5+1.3)*.25+Math.sin(l*13+c*11+2.1)*.12+Math.cos(c*17-l*4)*.08};for(let r=0;r<256;r++)for(let a=0;a<256;a++){let l=s(a+1,r)-s(a-1,r),c=s(a,r+1)-s(a,r-1),u=-l*2,h=-c*2,p=1,d=Math.hypot(u,h,p),f=(r*256+a)*4;n.data[f]=(u/d*.5+.5)*255,n.data[f+1]=(h/d*.5+.5)*255,n.data[f+2]=(p/d*.5+.5)*255,n.data[f+3]=255}e.putImageData(n,0,0);let o=new Fn(t);return o.repeat.set(1,1),o}window.SandBox={boot:rM,iconSVG:hr,iconScale:wc};window.XFQ3D=window.SandBox;try{delete window.SandBox}catch{window.SandBox=void 0}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
