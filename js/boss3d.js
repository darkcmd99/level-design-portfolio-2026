var BOSS3D=(()=>{var uc=Object.defineProperty;var wf=Object.getOwnPropertyDescriptor;var Tf=Object.getOwnPropertyNames;var Af=Object.prototype.hasOwnProperty;var Rf=(i,t)=>{for(var e in t)uc(i,e,{get:t[e],enumerable:!0})},Cf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Tf(t))!Af.call(i,s)&&s!==e&&uc(i,s,{get:()=>t[s],enumerable:!(n=wf(t,s))||n.enumerable});return i};var If=i=>Cf(uc({},"__esModule",{value:!0}),i);var Wx={};Rf(Wx,{GROUPS:()=>Ol,VIEWS:()=>Hs,createShow:()=>pf,createStage:()=>_f,mount:()=>rf});var bh=0,Qc=1,Sh=2;var jc=1,$o=2,kn=3,Qn=0,sn=1,je=2,ti=0,Ni=1,Kc=2,tl=3,el=4,Eh=5,gi=100,wh=101,Th=102,Ah=103,Rh=104,Ch=200,Ih=201,Ph=202,Lh=203,vo=204,Mo=205,Dh=206,Uh=207,Fh=208,Nh=209,Bh=210,Oh=211,zh=212,kh=213,Hh=214,Qo=0,jo=1,Ko=2,Bi=3,ta=4,ea=5,na=6,ia=7,nl=0,Vh=1,Gh=2,ei=0,Wh=1,Xh=2,qh=3,Yh=4,Zh=5,Jh=6,sa=7;var il=300,Gi=301,Wi=302,ra=303,oa=304,Dr=306,bo=1e3,mi=1001,So=1002,cn=1003,$h=1004;var Ur=1005;var Ln=1006,aa=1007;var bi=1008;var Fn=1009,sl=1010,rl=1011,Is=1012,ca=1013,Si=1014,Nn=1015,Ps=1016,la=1017,ha=1018,Ls=1020,ol=35902,al=35899,cl=1021,ll=1022,Tn=1023,ys=1026,Ds=1027,ua=1028,fa=1029,hl=1030,da=1031;var pa=1033,Fr=33776,Nr=33777,Br=33778,Or=33779,ma=35840,ga=35841,xa=35842,_a=35843,ya=36196,va=37492,Ma=37496,ba=37808,Sa=37809,Ea=37810,wa=37811,Ta=37812,Aa=37813,Ra=37814,Ca=37815,Ia=37816,Pa=37817,La=37818,Da=37819,Ua=37820,Fa=37821,Na=36492,Ba=36494,Oa=36495,za=36283,ka=36284,Ha=36285,Va=36286;var nr=2300,Eo=2301,yo=2302,zc=2400,kc=2401,Hc=2402;var Qh=3200,jh=3201;var ul=0,Kh=1,ni="",gn="srgb",Oi="srgb-linear",ir="linear",me="srgb";var Fi=7680;var Vc=519,tu=512,eu=513,nu=514,fl=515,iu=516,su=517,ru=518,ou=519,Gc=35044;var dl="300 es",Pn=2e3,sr=2001;var jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,wo=180/Math.PI;function zr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function Pf(i,t){return(i%t+t)%t}function dc(i,t,e){return(1-e)*i+e*t}function qs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*_,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let S=Math.sqrt(y),T=Math.atan2(S,p*b);m=Math.sin(m*T)/S,a=Math.sin(a*T)/S}let x=a*b;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pc.copy(this).projectOnVector(t),this.sub(pc)}reflect(t){return this.sub(pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pc=new N,Jl=new xn,Jt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],y=s[4],x=s[7],S=s[2],T=s[5],R=s[8];return r[0]=o*_+a*b+c*S,r[3]=o*m+a*y+c*T,r[6]=o*p+a*x+c*R,r[1]=l*_+h*b+u*S,r[4]=l*m+h*y+u*T,r[7]=l*p+h*x+u*R,r[2]=f*_+d*b+g*S,r[5]=f*m+d*y+g*T,r[8]=f*p+d*x+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mc.makeScale(t,e)),this}rotate(t){return this.premultiply(mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mc=new Jt;function pl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){let i=rr("canvas");return i.style.display="block",i}var $l={};function vs(i){i in $l||($l[i]=!0,console.warn(i))}function cu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ql=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jl=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lf(){let i={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oi]:{primaries:t,whitePoint:n,transfer:ir,toXYZ:Ql,fromXYZ:jl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Ql,fromXYZ:jl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var ce=Lf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,To=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{rs===void 0&&(rs=rr("canvas")),rs.width=t.width,rs.height=t.height;let s=rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Df=0,Ms=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(gc(s[o].image)):r.push(gc(s[o]))}else r=gc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function gc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?To.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uf=0,xc=new N,ln=class i extends jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=mi,s=mi,r=Ln,o=bi,a=Tn,c=Fn,l=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=zr(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xc).x}get height(){return this.source.getSize(xc).y}get depth(){return this.source.getSize(xc).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bo:t.x=t.x-Math.floor(t.x);break;case mi:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bo:t.y=t.y-Math.floor(t.y);break;case mi:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=il;ln.DEFAULT_ANISOTROPY=1;var Ie=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(d+1)/2,S=(p+1)/2,T=(h+f)/4,R=(u+_)/4,P=(g+m)/4;return y>x&&y>S?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=R/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=P/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new ln(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends Ao{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},or=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends ln{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ys),Qr.subVectors(this.max,Ys),os.subVectors(t.a,Ys),as.subVectors(t.b,Ys),cs.subVectors(t.c,Ys),ci.subVectors(as,os),li.subVectors(cs,as),Pi.subVectors(os,cs);let e=[0,-ci.z,ci.y,0,-li.z,li.y,0,-Pi.z,Pi.y,ci.z,0,-ci.x,li.z,0,-li.x,Pi.z,0,-Pi.x,-ci.y,ci.x,0,-li.y,li.x,0,-Pi.y,Pi.x,0];return!_c(e,os,as,cs,Qr)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,os,as,cs,Qr))?!1:(jr.crossVectors(ci,li),e=[jr.x,jr.y,jr.z],_c(e,os,as,cs,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new N,new N,new N,new N,new N,new N,new N,new N],Rn=new N,$r=new En,os=new N,as=new N,cs=new N,ci=new N,li=new N,Pi=new N,Ys=new N,Qr=new N,jr=new N,Li=new N;function _c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Li.fromArray(i,r);let a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),c=t.dot(Li),l=e.dot(Li),h=n.dot(Li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Ff=new En,Zs=new N,yc=new N,xi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ff.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);let e=Zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(yc)),this.expandByPoint(Zs.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},qn=new N,vc=new N,Kr=new N,hi=new N,Mc=new N,to=new N,bc=new N,ar=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vc.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(vc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=hi.dot(this.direction),c=-hi.dot(Kr),l=hi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(vc).addScaledVector(Kr,f),d}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,s,r){Mc.subVectors(e,t),to.subVectors(n,t),bc.crossVectors(Mc,to);let o=this.direction.dot(bc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);let c=a*this.direction.dot(to.crossVectors(hi,to));if(c<0)return null;let l=a*this.direction.dot(Mc.cross(hi));if(l<0||c+l>o)return null;let h=-a*hi.dot(bc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Bf)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ui.crossVectors(n,pn),ui.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ui.crossVectors(n,pn)),ui.normalize(),eo.crossVectors(pn,ui),s[0]=ui.x,s[4]=eo.x,s[8]=pn.x,s[1]=ui.y,s[5]=eo.y,s[9]=pn.y,s[2]=ui.z,s[6]=eo.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],y=n[7],x=n[11],S=n[15],T=s[0],R=s[4],P=s[8],E=s[12],v=s[1],C=s[5],U=s[9],O=s[13],k=s[2],z=s[6],M=s[10],I=s[14],L=s[3],H=s[7],Y=s[11],K=s[15];return r[0]=o*T+a*v+c*k+l*L,r[4]=o*R+a*C+c*z+l*H,r[8]=o*P+a*U+c*M+l*Y,r[12]=o*E+a*O+c*I+l*K,r[1]=h*T+u*v+f*k+d*L,r[5]=h*R+u*C+f*z+d*H,r[9]=h*P+u*U+f*M+d*Y,r[13]=h*E+u*O+f*I+d*K,r[2]=g*T+_*v+m*k+p*L,r[6]=g*R+_*C+m*z+p*H,r[10]=g*P+_*U+m*M+p*Y,r[14]=g*E+_*O+m*I+p*K,r[3]=b*T+y*v+x*k+S*L,r[7]=b*R+y*C+x*z+S*H,r[11]=b*P+y*U+x*M+S*Y,r[15]=b*E+y*O+x*I+S*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,S=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,T=e*b+n*y+s*x+r*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=b*R,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*R,t[4]=y*R,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*R,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*R,t[8]=x*R,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*R,t[12]=S*R,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=c*l,y=c*h,x=c*u,S=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*S,s[1]=(d+x)*S,s[2]=(g-y)*S,s[3]=0,s[4]=(d-x)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+y)*R,s[9]=(m-b)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);let l=1/r,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===Pn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===sr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===Pn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===sr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new N,Cn=new ge,Nf=new N(0,0,0),Bf=new N(1,1,1),ui=new N,eo=new N,pn=new N,Kl=new ge,th=new xn,Dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Dn.DEFAULT_ORDER="XYZ";var bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Of=0,eh=new N,hs=new xn,Yn=new ge,no=new N,Js=new N,zf=new N,kf=new xn,nh=new N(1,0,0),ih=new N(0,1,0),sh=new N(0,0,1),rh={type:"added"},Hf={type:"removed"},us={type:"childadded",child:null},Sc={type:"childremoved",child:null},Qe=class i extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Dn,n=new xn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?no.copy(t):no.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Js,no,this.up):Yn.lookAt(no,Js,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),hs.setFromRotationMatrix(Yn),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),Sc.child=t,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Qe.DEFAULT_UP=new N(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new N,Zn=new N,Ec=new N,Jn=new N,fs=new N,ds=new N,oh=new N,wc=new N,Tc=new N,Ac=new N,Rc=new Ie,Cc=new Ie,Ic=new Ie,pi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Zn.subVectors(n,e),Ec.subVectors(t,e);let o=In.dot(In),a=In.dot(Zn),c=In.dot(Ec),l=Zn.dot(Zn),h=Zn.dot(Ec),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Rc.setScalar(0),Cc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,n),Ic.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Zn.subVectors(t,e),In.cross(Zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),In.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;fs.subVectors(s,n),ds.subVectors(r,n),wc.subVectors(t,n);let c=fs.dot(wc),l=ds.dot(wc);if(c<=0&&l<=0)return e.copy(n);Tc.subVectors(t,s);let h=fs.dot(Tc),u=ds.dot(Tc);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(fs,o);Ac.subVectors(t,r);let d=fs.dot(Ac),g=ds.dot(Ac);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ds,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return oh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(oh,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(fs,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},io={h:0,s:0,l:0};function Pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ce.workingColorSpace){if(t=Pf(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pc(o,r,t+1/3),this.g=Pc(o,r,t),this.b=Pc(o,r,t-1/3)}return ce.colorSpaceToWorking(this,s),this}setStyle(t,e=gn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){let n=lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return ce.workingToColorSpace(Je.copy(this),t),Math.round(ne(Je.r*255,0,255))*65536+Math.round(ne(Je.g*255,0,255))*256+Math.round(ne(Je.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.workingToColorSpace(Je.copy(this),e);let n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=gn){ce.workingToColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,s=Je.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(io);let n=dc(fi.h,io.h,e),s=dc(fi.s,io.s,e),r=dc(fi.l,io.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new Kt;Kt.NAMES=lu;var Vf=0,_i=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Ni,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vo,this.blendDst=Mo,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vo&&(n.blendSrc=this.blendSrc),this.blendDst!==Mo&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Se=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Oe=new N,so=new Ct,Gf=0,Ne=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)so.fromBufferAttribute(this,e),so.applyMatrix3(t),this.setXY(e,so.x,so.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gc&&(t.usage=this.usage),t}};var cr=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wf=0,Sn=new ge,Lc=new Qe,ps=new N,mn=new En,$s=new En,Xe=new N,ke=class i extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pl(t)?lr:cr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$s.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(mn.min,$s.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,$s.max),mn.expandByPoint(Xe)):(mn.expandByPoint($s.min),mn.expandByPoint($s.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Xe.fromBufferAttribute(a,l),c&&(ps.fromBufferAttribute(t,l),Xe.add(ps)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new N,c[P]=new N;let l=new N,h=new N,u=new N,f=new Ct,d=new Ct,g=new Ct,_=new N,m=new N;function p(P,E,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[E].add(_),a[v].add(_),c[P].add(m),c[E].add(m),c[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,E=b.length;P<E;++P){let v=b[P],C=v.start,U=v.count;for(let O=C,k=C+U;O<k;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new N,x=new N,S=new N,T=new N;function R(P){S.fromBufferAttribute(s,P),T.copy(S);let E=a[P];y.copy(E),y.sub(S.multiplyScalar(S.dot(E))).normalize(),x.crossVectors(T,E);let C=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,E=b.length;P<E;++P){let v=b[P],C=v.start,U=v.count;for(let O=C,k=C+U;O<k;O+=3)R(t.getX(O+0)),R(t.getX(O+1)),R(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new ge,Di=new ar,ro=new xi,ch=new N,oo=new N,ao=new N,co=new N,Dc=new N,lo=new N,lh=new N,ho=new N,Xt=class extends Qe{constructor(t=new ke,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Dc.fromBufferAttribute(u,t),o?lo.addScaledVector(Dc,h):lo.addScaledVector(Dc.sub(e),h))}e.add(lo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Di.copy(t.ray).recast(t.near),!(ro.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ro,ch)===null||Di.origin.distanceToSquared(ch)>(t.far-t.near)**2))&&(ah.copy(r).invert(),Di.copy(t.ray).applyMatrix4(ah),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,S=y;x<S;x+=3){let T=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=uo(this,p,t,n,l,h,u,T,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=uo(this,o,t,n,l,h,u,b,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=b,S=y;x<S;x+=3){let T=x,R=x+1,P=x+2;s=uo(this,p,t,n,l,h,u,T,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=m,y=m+1,x=m+2;s=uo(this,o,t,n,l,h,u,b,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Xf(i,t,e,n,s,r,o,a){let c;if(t.side===sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Qn,a),c===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ho);return l<e.near||l>e.far?null:{distance:l,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,oo),i.getVertexPosition(c,ao),i.getVertexPosition(l,co);let h=Xf(i,t,e,n,oo,ao,co,lh);if(h){let u=new N;pi.getBarycoord(lh,oo,ao,co,u),s&&(h.uv=pi.getInterpolatedAttribute(s,a,c,l,u,new Ct)),r&&(h.uv1=pi.getInterpolatedAttribute(r,a,c,l,u,new Ct)),o&&(h.normal=pi.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};pi.getNormal(oo,ao,co,f.normal),h.face=f,h.barycoord=u}return h}var _n=class i extends ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(_,m,p,b,y,x,S,T,R,P,E){let v=x/R,C=S/P,U=x/2,O=S/2,k=T/2,z=R+1,M=P+1,I=0,L=0,H=new N;for(let Y=0;Y<M;Y++){let K=Y*C-O;for(let Q=0;Q<z;Q++){let Z=Q*v-U;H[_]=Z*b,H[m]=K*y,H[p]=k,l.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=T>0?1:-1,h.push(H.x,H.y,H.z),u.push(Q/R),u.push(1-Y/P),I+=1}}for(let Y=0;Y<P;Y++)for(let K=0;K<R;K++){let Q=f+K+z*Y,Z=f+K+z*(Y+1),it=f+(K+1)+z*(Y+1),et=f+(K+1)+z*Y;c.push(Q,Z,et),c.push(Z,it,et),L+=6}a.addGroup(d,L,E),d+=L,f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Xi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Xi(i[e]);for(let s in n)t[s]=n[s]}return t}function qf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ml(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ce.workingColorSpace}var hu={clone:Xi,merge:Ke},Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Un=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=qf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},hr=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new N,hh=new Ct,uh=new Ct,$e=class extends hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,hh,uh),e.subVectors(uh,hh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ms=-90,gs=1,Co=class extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new $e(ms,gs,t,e);r.layers=this.layers,this.add(r);let o=new $e(ms,gs,t,e);o.layers=this.layers,this.add(o);let a=new $e(ms,gs,t,e);a.layers=this.layers,this.add(a);let c=new $e(ms,gs,t,e);c.layers=this.layers,this.add(c);let l=new $e(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ur=class extends ln{constructor(t=[],e=Gi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Io=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new Un({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ti});r.uniforms.tEquirect.value=e;let o=new Xt(s,r),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=Ln),new Co(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},oe=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jf={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var fr=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Po=class extends ln{constructor(t=null,e=1,n=1,s,r,o,a,c,l=cn,h=cn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new ge,fh=new ge,fo=[],dh=new En,$f=new ge,Qs=new Xt,js=new xi,pr=class extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$f)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),dh.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(dh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),js.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Qs.geometry=this.geometry,Qs.material=this.material,Qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),fh.multiplyMatrices(n,xs),Qs.matrixWorld=fh,Qs.raycast(t,fo);for(let o=0,a=fo.length;o<a;o++){let c=fo[o];c.instanceId=r,c.object=this,e.push(c)}fo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Po(new Float32Array(s*this.count),s,this.count,ua,Nn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Uc=new N,Qf=new N,jf=new Jt,Fe=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Uc.subVectors(n,e).cross(Qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Uc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jf.getNormalMatrix(t),s=this.coplanarPoint(Uc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new xi,Kf=new Ct(.5,.5),po=new N,Es=class{constructor(t=new Fe,e=new Fe,n=new Fe,s=new Fe,r=new Fe,o=new Fe){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],y=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,d-h,p-g,S-b).normalize(),s[1].setComponents(l+o,d+h,p+g,S+b).normalize(),s[2].setComponents(l+a,d+u,p+_,S+y).normalize(),s[3].setComponents(l-a,d-u,p-_,S-y).normalize(),n)s[4].setComponents(c,f,m,x).normalize(),s[5].setComponents(l-c,d-f,p-m,S-x).normalize();else if(s[4].setComponents(l-c,d-f,p-m,S-x).normalize(),e===Pn)s[5].setComponents(l+c,d+f,p+m,S+x).normalize();else if(e===sr)s[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Kf.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mr=class extends ln{constructor(t,e,n=Si,s,r,o,a=cn,c=cn,l,h=ys,u=1){if(h!==ys&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gr=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xr=class i extends ke{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,_=s+1,m=new N,p=new N;for(let b=0;b<=g;b++){let y=0,x=0,S=0,T=0;if(b<=n){let E=b/n,v=E*Math.PI/2;x=-h-t*Math.cos(v),S=t*Math.sin(v),T=-t*Math.cos(v),y=E*u}else if(b<=n+r){let E=(b-n)/r;x=-h+E*e,S=t,T=0,y=u+E*f}else{let E=(b-n-r)/n,v=E*Math.PI/2;x=h+t*Math.sin(v),S=t*Math.cos(v),T=t*Math.sin(v),y=u+f+E*u}let R=Math.max(0,Math.min(1,y/d)),P=0;b===0?P=.5/s:b===g&&(P=-.5/s);for(let E=0;E<=s;E++){let v=E/s,C=v*Math.PI*2,U=Math.sin(C),O=Math.cos(C);p.x=-S*O,p.y=x,p.z=S*U,a.push(p.x,p.y,p.z),m.set(-S*O,T,S*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(v+P,R)}if(b>0){let E=(b-1)*_;for(let v=0;v<s;v++){let C=E+v,U=E+v+1,O=b*_+v,k=b*_+v+1;o.push(C,U,O),o.push(U,k,O)}}}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ws=class i extends ke{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new N,h=new Ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},zn=class i extends ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;b(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function b(){let x=new N,S=new N,T=0,R=(e-t)/n;for(let P=0;P<=r;P++){let E=[],v=P/r,C=v*(e-t)+t;for(let U=0;U<=s;U++){let O=U/s,k=O*c+a,z=Math.sin(k),M=Math.cos(k);S.x=C*z,S.y=-v*n+m,S.z=C*M,u.push(S.x,S.y,S.z),x.set(z,R,M).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-v),E.push(g++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<r;E++){let v=_[E][P],C=_[E+1][P],U=_[E+1][P+1],O=_[E][P+1];(t>0||E!==0)&&(h.push(v,C,O),T+=3),(e>0||E!==r-1)&&(h.push(C,U,O),T+=3)}l.addGroup(p,T,0),p+=T}function y(x){let S=g,T=new Ct,R=new N,P=0,E=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let C=g;for(let U=0;U<=s;U++){let k=U/s*c+a,z=Math.cos(k),M=Math.sin(k);R.x=E*M,R.y=m*v,R.z=E*z,u.push(R.x,R.y,R.z),f.push(0,v,0),T.x=z*.5+.5,T.y=M*.5*v+.5,d.push(T.x,T.y),g++}for(let U=0;U<s;U++){let O=S+U,k=C+U;x===!0?h.push(k,k+1,O):h.push(k+1,k,O),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class i extends zn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_r=class i extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let y=new N,x=new N,S=new N;for(let T=0;T<e.length;T+=3)d(e[T+0],y),d(e[T+1],x),d(e[T+2],S),c(y,x,S,b)}function c(b,y,x,S){let T=S+1,R=[];for(let P=0;P<=T;P++){R[P]=[];let E=b.clone().lerp(x,P/T),v=y.clone().lerp(x,P/T),C=T-P;for(let U=0;U<=C;U++)U===0&&P===T?R[P][U]=E:R[P][U]=E.clone().lerp(v,U/C)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){let v=Math.floor(E/2);E%2===0?(f(R[P][v+1]),f(R[P+1][v]),f(R[P][v])):(f(R[P][v+1]),f(R[P+1][v+1]),f(R[P+1][v]))}}function l(b){let y=new N;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(b),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let b=new N;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let x=m(b)/2/Math.PI+.5,S=p(b)/Math.PI+.5;o.push(x,1-S)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let y=o[b+0],x=o[b+2],S=o[b+4],T=Math.max(y,x,S),R=Math.min(y,x,S);T>.9&&R<.1&&(y<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),S<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,y){let x=b*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let b=new N,y=new N,x=new N,S=new N,T=new Ct,R=new Ct,P=new Ct;for(let E=0,v=0;E<r.length;E+=9,v+=6){b.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),S.copy(b).add(y).add(x).divideScalar(3);let C=m(S);_(T,v+0,b,C),_(R,v+2,y,C),_(P,v+4,x,C)}}function _(b,y,x,S){S<0&&b.x===1&&(o[y]=b.x-1),x.x===0&&x.z===0&&(o[y]=S/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ct:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new ge;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ne(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ne(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yr=class extends wn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lo=class extends yr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var mo=new N,Fc=new gl,Nc=new gl,Bc=new gl,ki=class extends wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(mo.subVectors(s[0],s[1]).add(s[0]),l=mo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Nc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Bc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Nc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Bc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Fc.calc(c),Nc.calc(c),Bc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ph(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function td(i,t){let e=1-i;return e*e*t}function ed(i,t){return 2*(1-i)*i*t}function nd(i,t){return i*i*t}function tr(i,t,e,n){return td(i,t)+ed(i,e)+nd(i,n)}function id(i,t){let e=1-i;return e*e*e*t}function sd(i,t){let e=1-i;return 3*e*e*i*t}function rd(i,t){return 3*(1-i)*i*i*t}function od(i,t){return i*i*i*t}function er(i,t,e,n,s){return id(i,t)+sd(i,e)+rd(i,n)+od(i,s)}var Do=class extends wn{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Uo=class extends wn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(er(t,s.x,r.x,o.x,a.x),er(t,s.y,r.y,o.y,a.y),er(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fo=class extends wn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ts=class extends wn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},No=class extends wn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vr=class extends wn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(tr(t,s.x,r.x,o.x),tr(t,s.y,r.y,o.y),tr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bo=class extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ph(a,c.x,l.x,h.x,u.x),ph(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},ad=Object.freeze({__proto__:null,ArcCurve:Lo,CatmullRomCurve3:ki,CubicBezierCurve:Do,CubicBezierCurve3:Uo,EllipseCurve:yr,LineCurve:Fo,LineCurve3:Ts,QuadraticBezierCurve:No,QuadraticBezierCurve3:vr,SplineCurve:Bo});function cd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=uu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=dd(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Mr(r,o,e,a,c,l,0),o}function uu(i,t,e,n,s){let r;if(s===Ed(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=mh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=mh(o/n|0,i[o],i[o+1],r);return r&&As(r,r.next)&&(Sr(r),r=r.next),r}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(As(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&_d(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?hd(i,n,s,r):ld(i)){t.push(c.i,i.i,l.i),Sr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=ud(Hi(i),t),Mr(i,t,e,n,s,r,2)):o===2&&fd(i,t,e,n,s,r):Mr(Hi(i),t,e,n,s,r,1);break}}}function ld(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ks(s,a,r,c,o,l,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hd(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),_=Math.max(a,c,l),m=Math.max(h,u,f),p=Wc(d,g,t,e,n),b=Wc(_,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=b;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ks(a,h,c,u,l,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ks(a,h,c,u,l,f,x.x,x.y)&&Ce(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ks(a,h,c,u,l,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ks(a,h,c,u,l,f,x.x,x.y)&&Ce(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function ud(i,t){let e=i;do{let n=e.prev,s=e.next.next;!As(n,s)&&du(n,e,e.next,s)&&br(n,s)&&br(s,n)&&(t.push(n.i,e.i,s.i),Sr(e),Sr(e.next),e=i=s),e=e.next}while(e!==i);return Hi(e)}function fd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Md(o,a)){let c=pu(o,a);o=Hi(o,o.next),c=Hi(c,c.next),Mr(o,t,e,n,s,r,0),Mr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function dd(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=uu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(vd(l))}s.sort(pd);for(let r=0;r<s.length;r++)e=md(s[r],e);return e}function pd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function md(i,t){let e=gd(i,t);if(!e)return t;let n=pu(e,i);return Hi(n,n.next),Hi(e,e.next)}function gd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(As(i,e))return e;do{if(As(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&fu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);br(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&xd(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function xd(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function _d(i,t,e,n){let s=i;do s.z===0&&(s.z=Wc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yd(s)}function yd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Wc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function vd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ks(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&fu(i,t,e,n,s,r,o,a)}function Md(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!bd(i,t)&&(br(i,t)&&br(t,i)&&Sd(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||As(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function As(i,t){return i.x===t.x&&i.y===t.y}function du(i,t,e,n){let s=xo(Ce(i,t,e)),r=xo(Ce(i,t,n)),o=xo(Ce(e,n,i)),a=xo(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&go(i,e,t)||r===0&&go(i,n,t)||o===0&&go(e,i,n)||a===0&&go(e,t,n))}function go(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function bd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function br(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Sd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pu(i,t){let e=Xc(i.i,i.x,i.y),n=Xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mh(i,t,e,n){let s=Xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ed(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qc=class{static triangulate(t,e,n=2){return cd(t,e,n)}},Er=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];gh(t),xh(n,t);let o=t.length;e.forEach(gh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xh(n,e[c]);let a=qc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function gh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Kn=class i extends _r{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var wr=class i extends _r{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Tr=class i extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let y=0;y<l;y++){let x=y*u-r;g.push(x,-b,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<a;b++){let y=b+l*p,x=b+l*(p+1),S=b+1+l*(p+1),T=b+1+l*p;d.push(y,x,T),d.push(x,S,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},yi=class i extends ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new N,g=new Ct;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let b=p+m,y=b,x=b+n+1,S=b+n+2,T=b+1;a.push(y,x,T),a.push(x,S,T)}}this.setIndex(a),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Rs=class i extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){let T=S/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+x,1-y),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let y=h[p][b+1],x=h[p][b],S=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&d.push(y,x,T),(p!==n-1||c<Math.PI)&&d.push(x,S,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(_,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Cs=class i extends ke{constructor(t=new vr(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new Ct,h=new N,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),b(),p()}function m(y){h=t.getPointAt(y/e,h);let x=o.normals[y],S=o.binormals[y];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,P=Math.sin(R),E=-Math.cos(R);c.x=E*x.x+P*S.x,c.y=E*x.y+P*S.y,c.z=E*x.z+P*S.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let S=(s+1)*(y-1)+(x-1),T=(s+1)*y+(x-1),R=(s+1)*y+x,P=(s+1)*(y-1)+x;g.push(S,T,P),g.push(T,R,P)}}function b(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)l.x=y/e,l.y=x/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new ad[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var hn=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Oo=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zo=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _o(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ko=class extends Vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kc:r=t,a=2*e-n;break;case Hc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kc:o=t,c=2*n-e;break;case Hc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let S=0;S!==a;++S)r[S]=p*o[h+S]+b*o[l+S]+y*o[c+S]+x*o[u+S];return r}},Ho=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Vo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_o(e,this.TimeBufferType),this.values=_o(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_o(t.times,Array),values:_o(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ko(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case nr:e=this.InterpolantFactoryMethodDiscrete;break;case Eo:e=this.InterpolantFactoryMethodLinear;break;case yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&wd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===yo,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Eo;var vi=class extends yn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=nr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};Go.prototype.ValueTypeName="color";var Wo=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)xn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ar=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Xo(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends yn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=nr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends yn{constructor(t,e,n,s){super(t,e,n,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mu=new Yo,Zo=class{constructor(t){this.manager=t!==void 0?t:mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Cr=class extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Oc=new ge,_h=new N,yh=new N,Yc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),Oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ir=class extends hr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zc=class extends Yc{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jo=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xl="\\[\\]\\.:\\/",Td=new RegExp("["+xl+"]","g"),_l="[^"+xl+"]",Ad="[^"+xl.replace("\\.","")+"]",Rd=/((?:WC+[\/:])*)/.source.replace("WC",_l),Cd=/(WCOD+)?/.source.replace("WCOD",Ad),Id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_l),Pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_l),Ld=new RegExp("^"+Rd+Cd+Id+Pd+"$"),Dd=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Td,"")}static parseTrackName(t){let e=Ld.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Jc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qx=new Float32Array(1);var vh=new ge,Lr=class{constructor(t,e,n=0,s=1/0){this.ray=new ar(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return $c(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)$c(t[s],this,n,e);return n.sort(Mh),n}};function Mh(i,t){return i.distance-t.distance}function $c(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$c(r[o],t,e,!0)}}function yl(i,t,e,n){let s=Ud(n);switch(e){case cl:return i*t;case ua:return i*t/s.components*s.byteLength;case fa:return i*t/s.components*s.byteLength;case hl:return i*t*2/s.components*s.byteLength;case da:return i*t*2/s.components*s.byteLength;case ll:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case pa:return i*t*4/s.components*s.byteLength;case Fr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ga:case _a:return Math.max(i,16)*Math.max(t,8)/4;case ma:case xa:return Math.max(i,8)*Math.max(t,8)/2;case ya:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Ba:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ud(i){switch(i){case Fn:case sl:return{byteLength:1,components:1};case Is:case rl:case Ps:return{byteLength:2,components:1};case la:case ha:return{byteLength:2,components:4};case Si:case ca:case Nn:return{byteLength:4,components:1};case ol:case al:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nd(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Np=`
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,Km=`#define LAMBERT
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
}`,tg=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,og=`#define STANDARD
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
}`,ag=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,lg=`#define TOON
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
}`,hg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,fg=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Bd,alphahash_pars_fragment:Od,alphamap_fragment:zd,alphamap_pars_fragment:kd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Gd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:Zd,bsdfs:Jd,iridescence_fragment:$d,bumpmap_pars_fragment:Qd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:op,cube_uv_reflection_fragment:ap,defaultnormal_vertex:cp,displacementmap_pars_vertex:lp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:fp,colorspace_fragment:dp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:xp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Cp,envmap_vertex:yp,fog_vertex:vp,fog_pars_vertex:Mp,fog_fragment:bp,fog_pars_fragment:Sp,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:wp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Pp,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Np,lights_fragment_maps:Bp,lights_fragment_end:Op,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Jp,morphcolor_vertex:$p,morphnormal_vertex:Qp,morphtarget_pars_vertex:jp,morphtarget_vertex:Kp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:cm,iridescence_pars_fragment:lm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:fm,project_vertex:dm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:ym,shadowmap_vertex:vm,shadowmask_pars_fragment:Mm,skinbase_vertex:bm,skinning_pars_vertex:Sm,skinning_vertex:Em,skinnormal_vertex:wm,specularmap_fragment:Tm,specularmap_pars_fragment:Am,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Im,transmission_pars_fragment:Pm,uv_pars_fragment:Lm,uv_pars_vertex:Dm,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Nm,background_frag:Bm,backgroundCube_vert:Om,backgroundCube_frag:zm,cube_vert:km,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:Zm,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:Qm,meshlambert_vert:jm,meshlambert_frag:Km,meshmatcap_vert:tg,meshmatcap_frag:eg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:og,meshphysical_frag:ag,meshtoon_vert:cg,meshtoon_frag:lg,points_vert:hg,points_frag:ug,shadow_vert:fg,shadow_frag:dg,sprite_vert:pg,sprite_frag:mg},_t={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Hn={basic:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ke([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ke([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ke([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ke([_t.points,_t.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ke([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ke([_t.common,_t.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ke([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ke([_t.sprite,_t.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ke([_t.common,_t.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ke([_t.lights,_t.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Hn.physical={uniforms:Ke([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ga={r:0,b:0,g:0},qi=new Dn,gg=new ge;function xg(i,t,e,n,s,r,o){let a=new Kt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,S=g(y);S===null?p(a,c):S&&S.isColor&&(p(S,1),x=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let S=g(x);S&&(S.isCubeTexture||S.mapping===Dr)?(h===void 0&&(h=new Xt(new _n(1,1,1),new Un({name:"BackgroundCubeMaterial",uniforms:Xi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),qi.copy(x.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(qi)),h.material.toneMapped=ce.getTransfer(S.colorSpace)!==me,(u!==S||f!==S.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Xt(new Tr(2,2),new Un({name:"BackgroundMaterial",uniforms:Xi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ce.getTransfer(S.colorSpace)!==me,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,x){y.getRGB(Ga,ml(i)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,x,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(a,c)},render:_,addToRenderList:m,dispose:b}}function _g(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,C,U,O,k){let z=!1,M=u(O,U,C);r!==M&&(r=M,l(r.object)),z=d(v,O,U,k),z&&g(v,O,U,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(v,C,U,O),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,U){let O=U.wireframe===!0,k=n[v.id];k===void 0&&(k={},n[v.id]=k);let z=k[C.id];z===void 0&&(z={},k[C.id]=z);let M=z[O];return M===void 0&&(M=f(c()),z[O]=M),M}function f(v){let C=[],U=[],O=[];for(let k=0;k<e;k++)C[k]=0,U[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:O,object:v,attributes:{},index:null}}function d(v,C,U,O){let k=r.attributes,z=C.attributes,M=0,I=U.getAttributes();for(let L in I)if(I[L].location>=0){let Y=k[L],K=z[L];if(K===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),Y===void 0||Y.attribute!==K||K&&Y.data!==K.data)return!0;M++}return r.attributesNum!==M||r.index!==O}function g(v,C,U,O){let k={},z=C.attributes,M=0,I=U.getAttributes();for(let L in I)if(I[L].location>=0){let Y=z[L];Y===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(Y=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(Y=v.instanceColor));let K={};K.attribute=Y,Y&&Y.data&&(K.data=Y.data),k[L]=K,M++}r.attributes=k,r.attributesNum=M,r.index=O}function _(){let v=r.newAttributes;for(let C=0,U=v.length;C<U;C++)v[C]=0}function m(v){p(v,0)}function p(v,C){let U=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;U[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),k[v]!==C&&(i.vertexAttribDivisor(v,C),k[v]=C)}function b(){let v=r.newAttributes,C=r.enabledAttributes;for(let U=0,O=C.length;U<O;U++)C[U]!==v[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function y(v,C,U,O,k,z,M){M===!0?i.vertexAttribIPointer(v,C,U,k,z):i.vertexAttribPointer(v,C,U,O,k,z)}function x(v,C,U,O){_();let k=O.attributes,z=U.getAttributes(),M=C.defaultAttributeValues;for(let I in z){let L=z[I];if(L.location>=0){let H=k[I];if(H===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(H=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(H=v.instanceColor)),H!==void 0){let Y=H.normalized,K=H.itemSize,Q=t.get(H);if(Q===void 0)continue;let Z=Q.buffer,it=Q.type,et=Q.bytesPerElement,W=it===i.INT||it===i.UNSIGNED_INT||H.gpuType===ca;if(H.isInterleavedBufferAttribute){let B=H.data,ot=B.stride,lt=H.offset;if(B.isInstancedInterleavedBuffer){for(let ut=0;ut<L.locationSize;ut++)p(L.location+ut,B.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ut=0;ut<L.locationSize;ut++)m(L.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ut=0;ut<L.locationSize;ut++)y(L.location+ut,K/L.locationSize,it,Y,ot*et,(lt+K/L.locationSize*ut)*et,W)}else{if(H.isInstancedBufferAttribute){for(let B=0;B<L.locationSize;B++)p(L.location+B,H.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let B=0;B<L.locationSize;B++)m(L.location+B);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let B=0;B<L.locationSize;B++)y(L.location+B,K/L.locationSize,it,Y,K*et,K/L.locationSize*B*et,W)}}else if(M!==void 0){let Y=M[I];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(L.location,Y);break;case 3:i.vertexAttrib3fv(L.location,Y);break;case 4:i.vertexAttrib4fv(L.location,Y);break;default:i.vertexAttrib1fv(L.location,Y)}}}}b()}function S(){P();for(let v in n){let C=n[v];for(let U in C){let O=C[U];for(let k in O)h(O[k].object),delete O[k];delete C[U]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let C=n[v.id];for(let U in C){let O=C[U];for(let k in O)h(O[k].object),delete O[k];delete C[U]}delete n[v.id]}function R(v){for(let C in n){let U=n[C];if(U[v.id]===void 0)continue;let O=U[v.id];for(let k in O)h(O[k].object),delete O[k];delete U[v.id]}}function P(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function yg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===Ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Nn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:S,maxSamples:T}}function Mg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Fe,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:n,y=b*4,x=p.clippingState||null;c.value=x,x=h(g,f,y,d);for(let S=0;S!==y;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function bg(i){let t=new WeakMap;function e(o,a){return a===ra?o.mapping=Gi:a===oa&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ra||a===oa)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Io(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Fs=4,gu=[.125,.215,.35,.446,.526,.582],Ji=20,vl=new Ir,xu=new Kt,Ml=null,bl=0,Sl=0,El=!1,Zi=(1+Math.sqrt(5))/2,Us=1/Zi,_u=[new N(-Zi,Us,0),new N(Zi,Us,0),new N(-Us,0,Zi),new N(Us,0,Zi),new N(0,Zi,-Us),new N(0,Zi,Us),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Sg=new N,qa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sg}=r;Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,bl,Sl),this._renderer.xr.enabled=El,t.scissorTest=!1,Wa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ps,format:Tn,colorSpace:Oi,depthBuffer:!1},s=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=wg(r,t,e)}return s}_compileMaterial(t){let e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,vl)}_sceneToCubeUV(t,e,n,s,r){let c=new $e(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xu),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Se({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new Xt(new _n,_),p=!1,b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(xu),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let S=this._cubeSize;Wa(s,x*S,y>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Gi||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Wa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,vl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(s-r-1)%_u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Xt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);let p=[],b=0;for(let R=0;R<Ji;++R){let P=R/_,E=Math.exp(-P*P/2);p.push(E),R===0?b+=E:R<m&&(b+=2*E)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let x=this._sizeLods[s],S=3*x*(s>y-Fs?s-y+Fs:0),T=4*(this._cubeSize-x);Wa(e,S,T,3*x,2*x),c.setRenderTarget(e),c.render(u,vl)}};function Eg(i){let t=[],e=[],n=[],s=i,r=i-Fs+1+gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Fs?c=gu[o-i+Fs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,P=T>2?0:-1,E=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];b.set(E,_*g*T),y.set(f,m*g*T);let v=[T,T,T,T,T,T];x.set(v,p*g*T)}let S=new ke;S.setAttribute("position",new Ne(b,_)),S.setAttribute("uv",new Ne(y,m)),S.setAttribute("faceIndex",new Ne(x,p)),t.push(S),s>Fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yu(i,t,e){let n=new On(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wa(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wg(i,t,e){let n=new Float32Array(Ji),s=new N(0,1,0);return new Un({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function vu(){return new Un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Mu(){return new Un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function Tg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ra||c===oa,h=c===Gi||c===Wi;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ag(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Rg(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let y=0,x=b.length;y<x;y+=3){let S=b[y+0],T=b[y+1],R=b[y+2];f.push(S,T,T,R,R,S)}}else if(g!==void 0){let b=g.array;_=g.version;for(let y=0,x=b.length/3-1;y<x;y+=3){let S=y+0,T=y+1,R=y+2;f.push(S,T,T,R,R,S)}}else return;let m=new(pl(f)?lr:cr)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Cg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ig(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pg(i,t,e){let n=new WeakMap,s=new Ie;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,S=1;x>t.maxTextureSize&&(S=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*S*4*u),R=new or(T,x,S,u);R.type=Nn,R.needsUpdate=!0;let P=y*4;for(let v=0;v<u;v++){let C=m[v],U=p[v],O=b[v],k=x*S*4*v;for(let z=0;z<C.count;z++){let M=z*P;d===!0&&(s.fromBufferAttribute(C,z),T[k+M+0]=s.x,T[k+M+1]=s.y,T[k+M+2]=s.z,T[k+M+3]=0),g===!0&&(s.fromBufferAttribute(U,z),T[k+M+4]=s.x,T[k+M+5]=s.y,T[k+M+6]=s.z,T[k+M+7]=0),_===!0&&(s.fromBufferAttribute(O,z),T[k+M+8]=s.x,T[k+M+9]=s.y,T[k+M+10]=s.z,T[k+M+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new Ct(x,S)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Lg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ku=new ln,bu=new mr(1,1),Hu=new or,Vu=new Ro,Gu=new ur,Su=[],Eu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function Bs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Za(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function Ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Ve(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Ve(e,n)}}function zg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(He(e,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),Ve(e,n)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Wg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Yg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bu.compareFunction=fl,r=bu):r=ku,e.setTexture2D(t||r,s)}function Jg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function $g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function Qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function jg(i){switch(i){case 5126:return Dg;case 35664:return Ug;case 35665:return Fg;case 35666:return Ng;case 35674:return Bg;case 35675:return Og;case 35676:return zg;case 5124:case 35670:return kg;case 35667:case 35671:return Hg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Wg;case 36294:return Xg;case 36295:return qg;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Qg}}function Kg(i,t){i.uniform1fv(this.addr,t)}function t0(i,t){let e=Bs(t,this.size,2);i.uniform2fv(this.addr,e)}function e0(i,t){let e=Bs(t,this.size,3);i.uniform3fv(this.addr,e)}function n0(i,t){let e=Bs(t,this.size,4);i.uniform4fv(this.addr,e)}function i0(i,t){let e=Bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s0(i,t){let e=Bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){let e=Bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function o0(i,t){i.uniform1iv(this.addr,t)}function a0(i,t){i.uniform2iv(this.addr,t)}function c0(i,t){i.uniform3iv(this.addr,t)}function l0(i,t){i.uniform4iv(this.addr,t)}function h0(i,t){i.uniform1uiv(this.addr,t)}function u0(i,t){i.uniform2uiv(this.addr,t)}function f0(i,t){i.uniform3uiv(this.addr,t)}function d0(i,t){i.uniform4uiv(this.addr,t)}function p0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function m0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function g0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,r[o])}function x0(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hu,r[o])}function _0(i){switch(i){case 5126:return Kg;case 35664:return t0;case 35665:return e0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return c0;case 35669:case 35673:return l0;case 5125:return h0;case 36294:return u0;case 36295:return f0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return x0}}var Tl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jg(e.type)}},Al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_0(e.type)}},Rl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function y0(i,t,e){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),o=wl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ru(e,l===void 0?new Tl(a,i,t):new Al(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Rl(a),Ru(e,u)),e=u}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);y0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var v0=37297,M0=0;function b0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Iu=new Jt;function S0(i){ce._getMatrix(Iu,ce.workingColorSpace,i);let t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(ce.getTransfer(i)){case ir:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+b0(i.getShaderSource(t),a)}else return r}function E0(i,t){let e=S0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(i,t){let e;switch(t){case Wh:e="Linear";break;case Xh:e="Reinhard";break;case qh:e="Cineon";break;case Yh:e="ACESFilmic";break;case Jh:e="AgX";break;case sa:e="Neutral";break;case Zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xa=new N;function T0(){ce.getLuminanceCoefficients(Xa);let i=Xa.x.toFixed(4),t=Xa.y.toFixed(4),e=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function R0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function kr(i){return i!==""}function Lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var I0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(I0,L0)}var P0=new Map;function L0(i,t){let e=te[t];if(e===void 0){let n=P0.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Cl(e)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(D0,U0)}function U0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function F0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$o?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function N0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Gi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nl:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Gh:t="ENVMAP_BLENDING_ADD";break}return t}function z0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function k0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=F0(e),l=N0(e),h=B0(e),u=O0(e),f=z0(e),d=A0(e),g=R0(r),_=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Fu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?te.tonemapping_pars_fragment:"",e.toneMapping!==ei?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,E0("linearToOutputTexel",e.outputColorSpace),T0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kr).join(`
`)),o=Cl(o),o=Lu(o,e),o=Du(o,e),a=Cl(a),a=Lu(a,e),a=Du(a,e),o=Uu(o),a=Uu(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+m+o,x=b+p+a,S=Cu(s,s.VERTEX_SHADER,y),T=Cu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,S),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(S)||"",k=s.getShaderInfoLog(T)||"",z=U.trim(),M=O.trim(),I=k.trim(),L=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,T);else{let Y=Pu(s,S,"vertex"),K=Pu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Y+`
`+K)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(M===""||I==="")&&(H=!1);H&&(C.diagnostics={runnable:L,programLog:z,vertexShader:{log:M,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(S),s.deleteShader(T),P=new Ns(s,_),E=C0(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,v0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=M0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var H0=0,Il=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pl(t),e.set(t,n)),n}},Pl=class{constructor(t){this.id=H0++,this.code=t,this.usedTimes=0}};function V0(i,t,e,n,s,r,o){let a=new bs,c=new Il,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,v,C,U,O){let k=U.fog,z=O.geometry,M=E.isMeshStandardMaterial?U.environment:null,I=(E.isMeshStandardMaterial?e:t).get(E.envMap||M),L=I&&I.mapping===Dr?I.image.height:null,H=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let Y=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,K=Y!==void 0?Y.length:0,Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let Z,it,et,W;if(H){let pe=Hn[H];Z=pe.vertexShader,it=pe.fragmentShader}else Z=E.vertexShader,it=E.fragmentShader,c.update(E),et=c.getVertexShaderID(E),W=c.getFragmentShaderID(E);let B=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),lt=O.isInstancedMesh===!0,ut=O.isBatchedMesh===!0,vt=!!E.map,$t=!!E.matcap,F=!!I,se=!!E.aoMap,Ht=!!E.lightMap,Ft=!!E.bumpMap,wt=!!E.normalMap,ye=!!E.displacementMap,Tt=!!E.emissiveMap,jt=!!E.metalnessMap,We=!!E.roughnessMap,Ue=E.anisotropy>0,D=E.clearcoat>0,w=E.dispersion>0,J=E.iridescence>0,st=E.sheen>0,ht=E.transmission>0,nt=Ue&&!!E.anisotropyMap,Ut=D&&!!E.clearcoatMap,gt=D&&!!E.clearcoatNormalMap,It=D&&!!E.clearcoatRoughnessMap,Pt=J&&!!E.iridescenceMap,pt=J&&!!E.iridescenceThicknessMap,bt=st&&!!E.sheenColorMap,Vt=st&&!!E.sheenRoughnessMap,Lt=!!E.specularMap,yt=!!E.specularColorMap,Qt=!!E.specularIntensityMap,V=ht&&!!E.transmissionMap,mt=ht&&!!E.thicknessMap,xt=!!E.gradientMap,Et=!!E.alphaMap,ft=E.alphaTest>0,at=!!E.alphaHash,Rt=!!E.extensions,Zt=ei;E.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let ve={shaderID:H,shaderType:E.type,shaderName:E.name,vertexShader:Z,fragmentShader:it,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ut,batchingColor:ut&&O._colorsTexture!==null,instancing:lt,instancingColor:lt&&O.instanceColor!==null,instancingMorph:lt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?i.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Oi,alphaToCoverage:!!E.alphaToCoverage,map:vt,matcap:$t,envMap:F,envMapMode:F&&I.mapping,envMapCubeUVHeight:L,aoMap:se,lightMap:Ht,bumpMap:Ft,normalMap:wt,displacementMap:f&&ye,emissiveMap:Tt,normalMapObjectSpace:wt&&E.normalMapType===Kh,normalMapTangentSpace:wt&&E.normalMapType===ul,metalnessMap:jt,roughnessMap:We,anisotropy:Ue,anisotropyMap:nt,clearcoat:D,clearcoatMap:Ut,clearcoatNormalMap:gt,clearcoatRoughnessMap:It,dispersion:w,iridescence:J,iridescenceMap:Pt,iridescenceThicknessMap:pt,sheen:st,sheenColorMap:bt,sheenRoughnessMap:Vt,specularMap:Lt,specularColorMap:yt,specularIntensityMap:Qt,transmission:ht,transmissionMap:V,thicknessMap:mt,gradientMap:xt,opaque:E.transparent===!1&&E.blending===Ni&&E.alphaToCoverage===!1,alphaMap:Et,alphaTest:ft,alphaHash:at,combine:E.combine,mapUv:vt&&_(E.map.channel),aoMapUv:se&&_(E.aoMap.channel),lightMapUv:Ht&&_(E.lightMap.channel),bumpMapUv:Ft&&_(E.bumpMap.channel),normalMapUv:wt&&_(E.normalMap.channel),displacementMapUv:ye&&_(E.displacementMap.channel),emissiveMapUv:Tt&&_(E.emissiveMap.channel),metalnessMapUv:jt&&_(E.metalnessMap.channel),roughnessMapUv:We&&_(E.roughnessMap.channel),anisotropyMapUv:nt&&_(E.anisotropyMap.channel),clearcoatMapUv:Ut&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:gt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&_(E.sheenRoughnessMap.channel),specularMapUv:Lt&&_(E.specularMap.channel),specularColorMapUv:yt&&_(E.specularColorMap.channel),specularIntensityMapUv:Qt&&_(E.specularIntensityMap.channel),transmissionMapUv:V&&_(E.transmissionMap.channel),thicknessMapUv:mt&&_(E.thicknessMap.channel),alphaMapUv:Et&&_(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||Ue),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(vt||Et),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ot,skinning:O.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:vt&&E.map.isVideoTexture===!0&&ce.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:Tt&&E.emissiveMap.isVideoTexture===!0&&ce.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===je,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Rt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&E.extensions.multiDraw===!0||ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(E){let v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)v.push(C),v.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(v,E),y(v,E),v.push(i.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function b(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function y(E,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let v=g[E.type],C;if(v){let U=Hn[v];C=hu.clone(U.uniforms)}else C=E.uniforms;return C}function S(E,v){let C;for(let U=0,O=h.length;U<O;U++){let k=h[U];if(k.cacheKey===v){C=k,++C.usedTimes;break}}return C===void 0&&(C=new k0(i,v,E,r),h.push(C)),C}function T(E){if(--E.usedTimes===0){let v=h.indexOf(E);h[v]=h[h.length-1],h.pop(),E.destroy()}}function R(E){c.remove(E)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function G0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function W0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||W0),n.length>1&&n.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function X0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Bu,i.set(n,[o])):s>=r.length?(o=new Bu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Z0=0;function J0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $0(i){let t=new q0,e=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new ge,o=new ge;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,y=0,x=0,S=0,T=0,R=0;l.sort(J0);for(let E=0,v=l.length;E<v;E++){let C=l[E],U=C.color,O=C.intensity,k=C.distance,z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*O,u+=U.g*O,f+=U.b*O;else if(C.isLightProbe){for(let M=0;M<9;M++)n.probe[M].addScaledVector(C.sh.coefficients[M],O);R++}else if(C.isDirectionalLight){let M=t.get(C);if(M.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let I=C.shadow,L=e.get(C);L.shadowIntensity=I.intensity,L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,n.directionalShadow[d]=L,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=C.shadow.matrix,b++}n.directional[d]=M,d++}else if(C.isSpotLight){let M=t.get(C);M.position.setFromMatrixPosition(C.matrixWorld),M.color.copy(U).multiplyScalar(O),M.distance=k,M.coneCos=Math.cos(C.angle),M.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),M.decay=C.decay,n.spot[_]=M;let I=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,I.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=I.matrix,C.castShadow){let L=e.get(C);L.shadowIntensity=I.intensity,L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=z,x++}_++}else if(C.isRectAreaLight){let M=t.get(C);M.color.copy(U).multiplyScalar(O),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=M,m++}else if(C.isPointLight){let M=t.get(C);if(M.color.copy(C.color).multiplyScalar(C.intensity),M.distance=C.distance,M.decay=C.decay,C.castShadow){let I=C.shadow,L=e.get(C);L.shadowIntensity=I.intensity,L.shadowBias=I.bias,L.shadowNormalBias=I.normalBias,L.shadowRadius=I.radius,L.shadowMapSize=I.mapSize,L.shadowCameraNear=I.camera.near,L.shadowCameraFar=I.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=M,g++}else if(C.isHemisphereLight){let M=t.get(C);M.skyColor.copy(C.color).multiplyScalar(O),M.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=M,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==b||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+S-T,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=b,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=R,n.version=Z0++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let y=l[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ou(i){let t=new $0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Q0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ou(i),t.set(s,[a])):r>=o.length?(a=new Ou(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var j0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K0=`uniform sampler2D shadow_pass;
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
}`;function tx(i,t,e){let n=new Es,s=new Ct,r=new Ct,o=new Ie,a=new Oo({depthPacking:jh}),c=new zo,l={},h=e.maxTextureSize,u={[Qn]:sn,[sn]:Qn,[je]:je},f=new Un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:j0,fragmentShader:K0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ke;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jc;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let E=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=p!==kn&&this.type===kn,k=p===kn&&this.type!==kn;for(let z=0,M=T.length;z<M;z++){let I=T[z],L=I.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let H=L.getFrameExtents();if(s.multiply(H),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,L.mapSize.y=r.y)),L.map===null||O===!0||k===!0){let K=this.type!==kn?{minFilter:cn,magFilter:cn}:{};L.map!==null&&L.map.dispose(),L.map=new On(s.x,s.y,K),L.map.texture.name=I.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let Y=L.getViewportCount();for(let K=0;K<Y;K++){let Q=L.getViewport(K);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),U.viewport(o),L.updateMatrices(I,K),n=L.getFrustum(),x(R,P,L.camera,I,this.type)}L.isPointLightShadow!==!0&&this.type===kn&&b(L,P),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,v,C)};function b(T,R){let P=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new On(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,d,_,null)}function y(T,R,P,E){let v=null,C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=v.uuid,O=R.uuid,k=l[U];k===void 0&&(k={},l[U]=k);let z=k[O];z===void 0&&(z=v.clone(),k[O]=z,R.addEventListener("dispose",S)),v=z}if(v.visible=R.visible,v.wireframe=R.wireframe,E===kn?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:u[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=P}return v}function x(T,R,P,E,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let O=t.update(T),k=T.material;if(Array.isArray(k)){let z=O.groups;for(let M=0,I=z.length;M<I;M++){let L=z[M],H=k[L.materialIndex];if(H&&H.visible){let Y=y(T,H,E,v);T.onBeforeShadow(i,T,R,P,O,Y,L),i.renderBufferDirect(P,null,O,Y,T,L),T.onAfterShadow(i,T,R,P,O,Y,L)}}}else if(k.visible){let z=y(T,k,E,v);T.onBeforeShadow(i,T,R,P,O,z,null),i.renderBufferDirect(P,null,O,z,T,null),T.onAfterShadow(i,T,R,P,O,z,null)}}let U=T.children;for(let O=0,k=U.length;O<k;O++)x(U[O],R,P,E,v)}function S(T){T.target.removeEventListener("dispose",S);for(let P in l){let E=l[P],v=T.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}var ex={[Qo]:jo,[Ko]:na,[ta]:ia,[Bi]:ea,[jo]:Qo,[na]:Ko,[ia]:ta,[ea]:Bi};function nx(i,t){function e(){let V=!1,mt=new Ie,xt=null,Et=new Ie(0,0,0,0);return{setMask:function(ft){xt!==ft&&!V&&(i.colorMask(ft,ft,ft,ft),xt=ft)},setLocked:function(ft){V=ft},setClear:function(ft,at,Rt,Zt,ve){ve===!0&&(ft*=Zt,at*=Zt,Rt*=Zt),mt.set(ft,at,Rt,Zt),Et.equals(mt)===!1&&(i.clearColor(ft,at,Rt,Zt),Et.copy(mt))},reset:function(){V=!1,xt=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,mt=!1,xt=null,Et=null,ft=null;return{setReversed:function(at){if(mt!==at){let Rt=t.get("EXT_clip_control");at?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),mt=at;let Zt=ft;ft=null,this.setClear(Zt)}},getReversed:function(){return mt},setTest:function(at){at?B(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(at){xt!==at&&!V&&(i.depthMask(at),xt=at)},setFunc:function(at){if(mt&&(at=ex[at]),Et!==at){switch(at){case Qo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case ta:i.depthFunc(i.EQUAL);break;case ea:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=at}},setLocked:function(at){V=at},setClear:function(at){ft!==at&&(mt&&(at=1-at),i.clearDepth(at),ft=at)},reset:function(){V=!1,xt=null,Et=null,ft=null,mt=!1}}}function s(){let V=!1,mt=null,xt=null,Et=null,ft=null,at=null,Rt=null,Zt=null,ve=null;return{setTest:function(pe){V||(pe?B(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(pe){mt!==pe&&!V&&(i.stencilMask(pe),mt=pe)},setFunc:function(pe,Wn,Bn){(xt!==pe||Et!==Wn||ft!==Bn)&&(i.stencilFunc(pe,Wn,Bn),xt=pe,Et=Wn,ft=Bn)},setOp:function(pe,Wn,Bn){(at!==pe||Rt!==Wn||Zt!==Bn)&&(i.stencilOp(pe,Wn,Bn),at=pe,Rt=Wn,Zt=Bn)},setLocked:function(pe){V=pe},setClear:function(pe){ve!==pe&&(i.clearStencil(pe),ve=pe)},reset:function(){V=!1,mt=null,xt=null,Et=null,ft=null,at=null,Rt=null,Zt=null,ve=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,y=null,x=null,S=null,T=null,R=new Kt(0,0,0),P=0,E=!1,v=null,C=null,U=null,O=null,k=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,I=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(L)[1]),M=I>=1):L.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),M=I>=2);let H=null,Y={},K=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),Z=new Ie().fromArray(K),it=new Ie().fromArray(Q);function et(V,mt,xt,Et){let ft=new Uint8Array(4),at=i.createTexture();i.bindTexture(V,at),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<xt;Rt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(mt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return at}let W={};W[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(i.DEPTH_TEST),o.setFunc(Bi),Ft(!1),wt(Qc),B(i.CULL_FACE),se(ti);function B(V){h[V]!==!0&&(i.enable(V),h[V]=!0)}function ot(V){h[V]!==!1&&(i.disable(V),h[V]=!1)}function lt(V,mt){return u[V]!==mt?(i.bindFramebuffer(V,mt),u[V]=mt,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=mt),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function ut(V,mt){let xt=d,Et=!1;if(V){xt=f.get(mt),xt===void 0&&(xt=[],f.set(mt,xt));let ft=V.textures;if(xt.length!==ft.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Rt=ft.length;at<Rt;at++)xt[at]=i.COLOR_ATTACHMENT0+at;xt.length=ft.length,Et=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Et=!0);Et&&i.drawBuffers(xt)}function vt(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let $t={[gi]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};$t[Ah]=i.MIN,$t[Rh]=i.MAX;let F={[Ch]:i.ZERO,[Ih]:i.ONE,[Ph]:i.SRC_COLOR,[vo]:i.SRC_ALPHA,[Bh]:i.SRC_ALPHA_SATURATE,[Fh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[Mo]:i.ONE_MINUS_SRC_ALPHA,[Nh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Oh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Hh]:i.ONE_MINUS_CONSTANT_ALPHA};function se(V,mt,xt,Et,ft,at,Rt,Zt,ve,pe){if(V===ti){_===!0&&(ot(i.BLEND),_=!1);return}if(_===!1&&(B(i.BLEND),_=!0),V!==Eh){if(V!==m||pe!==E){if((p!==gi||x!==gi)&&(i.blendEquation(i.FUNC_ADD),p=gi,x=gi),pe)switch(V){case Ni:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kc:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case tl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}b=null,y=null,S=null,T=null,R.set(0,0,0),P=0,m=V,E=pe}return}ft=ft||mt,at=at||xt,Rt=Rt||Et,(mt!==p||ft!==x)&&(i.blendEquationSeparate($t[mt],$t[ft]),p=mt,x=ft),(xt!==b||Et!==y||at!==S||Rt!==T)&&(i.blendFuncSeparate(F[xt],F[Et],F[at],F[Rt]),b=xt,y=Et,S=at,T=Rt),(Zt.equals(R)===!1||ve!==P)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ve),R.copy(Zt),P=ve),m=V,E=!1}function Ht(V,mt){V.side===je?ot(i.CULL_FACE):B(i.CULL_FACE);let xt=V.side===sn;mt&&(xt=!xt),Ft(xt),V.blending===Ni&&V.transparent===!1?se(ti):se(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let Et=V.stencilWrite;a.setTest(Et),Et&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?B(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(V){v!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),v=V)}function wt(V){V!==bh?(B(i.CULL_FACE),V!==C&&(V===Qc?i.cullFace(i.BACK):V===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),C=V}function ye(V){V!==U&&(M&&i.lineWidth(V),U=V)}function Tt(V,mt,xt){V?(B(i.POLYGON_OFFSET_FILL),(O!==mt||k!==xt)&&(i.polygonOffset(mt,xt),O=mt,k=xt)):ot(i.POLYGON_OFFSET_FILL)}function jt(V){V?B(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function We(V){V===void 0&&(V=i.TEXTURE0+z-1),H!==V&&(i.activeTexture(V),H=V)}function Ue(V,mt,xt){xt===void 0&&(H===null?xt=i.TEXTURE0+z-1:xt=H);let Et=Y[xt];Et===void 0&&(Et={type:void 0,texture:void 0},Y[xt]=Et),(Et.type!==V||Et.texture!==mt)&&(H!==xt&&(i.activeTexture(xt),H=xt),i.bindTexture(V,mt||W[V]),Et.type=V,Et.texture=mt)}function D(){let V=Y[H];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(V){Z.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Z.copy(V))}function Vt(V){it.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),it.copy(V))}function Lt(V,mt){let xt=l.get(mt);xt===void 0&&(xt=new WeakMap,l.set(mt,xt));let Et=xt.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(mt,V.name),xt.set(V,Et))}function yt(V,mt){let Et=l.get(mt).get(V);c.get(mt)!==Et&&(i.uniformBlockBinding(mt,Et,V.__bindingPointIndex),c.set(mt,Et))}function Qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,Y={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,y=null,x=null,S=null,T=null,R=new Kt(0,0,0),P=0,E=!1,v=null,C=null,U=null,O=null,k=null,Z.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ot,bindFramebuffer:lt,drawBuffers:ut,useProgram:vt,setBlending:se,setMaterial:Ht,setFlipSided:Ft,setCullFace:wt,setLineWidth:ye,setPolygonOffset:Tt,setScissorTest:jt,activeTexture:We,bindTexture:Ue,unbindTexture:D,compressedTexImage2D:w,compressedTexImage3D:J,texImage2D:Pt,texImage3D:pt,updateUBOMapping:Lt,uniformBlockBinding:yt,texStorage2D:gt,texStorage3D:It,texSubImage2D:st,texSubImage3D:ht,compressedTexSubImage2D:nt,compressedTexSubImage3D:Ut,scissor:bt,viewport:Vt,reset:Qt}}function ix(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,w){return d?new OffscreenCanvas(D,w):rr("canvas")}function _(D,w,J){let st=1,ht=Ue(D);if((ht.width>J||ht.height>J)&&(st=J/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let nt=Math.floor(st*ht.width),Ut=Math.floor(st*ht.height);u===void 0&&(u=g(nt,Ut));let gt=w?g(nt,Ut):u;return gt.width=nt,gt.height=Ut,gt.getContext("2d").drawImage(D,0,0,nt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+nt+"x"+Ut+")."),gt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,w,J,st,ht=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let nt=w;if(w===i.RED&&(J===i.FLOAT&&(nt=i.R32F),J===i.HALF_FLOAT&&(nt=i.R16F),J===i.UNSIGNED_BYTE&&(nt=i.R8)),w===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.R8UI),J===i.UNSIGNED_SHORT&&(nt=i.R16UI),J===i.UNSIGNED_INT&&(nt=i.R32UI),J===i.BYTE&&(nt=i.R8I),J===i.SHORT&&(nt=i.R16I),J===i.INT&&(nt=i.R32I)),w===i.RG&&(J===i.FLOAT&&(nt=i.RG32F),J===i.HALF_FLOAT&&(nt=i.RG16F),J===i.UNSIGNED_BYTE&&(nt=i.RG8)),w===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.RG8UI),J===i.UNSIGNED_SHORT&&(nt=i.RG16UI),J===i.UNSIGNED_INT&&(nt=i.RG32UI),J===i.BYTE&&(nt=i.RG8I),J===i.SHORT&&(nt=i.RG16I),J===i.INT&&(nt=i.RG32I)),w===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),J===i.UNSIGNED_INT&&(nt=i.RGB32UI),J===i.BYTE&&(nt=i.RGB8I),J===i.SHORT&&(nt=i.RGB16I),J===i.INT&&(nt=i.RGB32I)),w===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),J===i.UNSIGNED_INT&&(nt=i.RGBA32UI),J===i.BYTE&&(nt=i.RGBA8I),J===i.SHORT&&(nt=i.RGBA16I),J===i.INT&&(nt=i.RGBA32I)),w===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),w===i.RGBA){let Ut=ht?ir:ce.getTransfer(st);J===i.FLOAT&&(nt=i.RGBA32F),J===i.HALF_FLOAT&&(nt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(nt=Ut===me?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(D,w){let J;return D?w===null||w===Si||w===Ls?J=i.DEPTH24_STENCIL8:w===Nn?J=i.DEPTH32F_STENCIL8:w===Is&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Si||w===Ls?J=i.DEPTH_COMPONENT24:w===Nn?J=i.DEPTH_COMPONENT32F:w===Is&&(J=i.DEPTH_COMPONENT16),J}function S(D,w){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==cn&&D.minFilter!==Ln?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function T(D){let w=D.target;w.removeEventListener("dispose",T),P(w),w.isVideoTexture&&h.delete(w)}function R(D){let w=D.target;w.removeEventListener("dispose",R),v(w)}function P(D){let w=n.get(D);if(w.__webglInit===void 0)return;let J=D.source,st=f.get(J);if(st){let ht=st[w.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(D),Object.keys(st).length===0&&f.delete(J)}n.remove(D)}function E(D){let w=n.get(D);i.deleteTexture(w.__webglTexture);let J=D.source,st=f.get(J);delete st[w.__cacheKey],o.memory.textures--}function v(D){let w=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(w.__webglFramebuffer[st]))for(let ht=0;ht<w.__webglFramebuffer[st].length;ht++)i.deleteFramebuffer(w.__webglFramebuffer[st][ht]);else i.deleteFramebuffer(w.__webglFramebuffer[st]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[st])}else{if(Array.isArray(w.__webglFramebuffer))for(let st=0;st<w.__webglFramebuffer.length;st++)i.deleteFramebuffer(w.__webglFramebuffer[st]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let st=0;st<w.__webglColorRenderbuffer.length;st++)w.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[st]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let J=D.textures;for(let st=0,ht=J.length;st<ht;st++){let nt=n.get(J[st]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(J[st])}n.remove(D)}let C=0;function U(){C=0}function O(){let D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function k(D){let w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function z(D,w){let J=n.get(D);if(D.isVideoTexture&&jt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){let st=D.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(J,D,w);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+w)}function M(D,w){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){W(J,D,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+w)}function I(D,w){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){W(J,D,w);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+w)}function L(D,w){let J=n.get(D);if(D.version>0&&J.__version!==D.version){B(J,D,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+w)}let H={[bo]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[So]:i.MIRRORED_REPEAT},Y={[cn]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[Ln]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},K={[tu]:i.NEVER,[ou]:i.ALWAYS,[eu]:i.LESS,[fl]:i.LEQUAL,[nu]:i.EQUAL,[ru]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function Q(D,w){if(w.type===Nn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ln||w.magFilter===aa||w.magFilter===Ur||w.magFilter===bi||w.minFilter===Ln||w.minFilter===aa||w.minFilter===Ur||w.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,H[w.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,H[w.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,H[w.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Y[w.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==Ur&&w.minFilter!==bi||w.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Z(D,w){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",T));let st=w.source,ht=f.get(st);ht===void 0&&(ht={},f.set(st,ht));let nt=k(w);if(nt!==D.__cacheKey){ht[nt]===void 0&&(ht[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ht[nt].usedTimes++;let Ut=ht[D.__cacheKey];Ut!==void 0&&(ht[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&E(w)),D.__cacheKey=nt,D.__webglTexture=ht[nt].texture}return J}function it(D,w,J){return Math.floor(Math.floor(D/J)/w)}function et(D,w,J,st){let nt=D.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,J,st,w.data);else{nt.sort((pt,bt)=>pt.start-bt.start);let Ut=0;for(let pt=1;pt<nt.length;pt++){let bt=nt[Ut],Vt=nt[pt],Lt=bt.start+bt.count,yt=it(Vt.start,w.width,4),Qt=it(bt.start,w.width,4);Vt.start<=Lt+1&&yt===Qt&&it(Vt.start+Vt.count-1,w.width,4)===yt?bt.count=Math.max(bt.count,Vt.start+Vt.count-bt.start):(++Ut,nt[Ut]=Vt)}nt.length=Ut+1;let gt=i.getParameter(i.UNPACK_ROW_LENGTH),It=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let pt=0,bt=nt.length;pt<bt;pt++){let Vt=nt[pt],Lt=Math.floor(Vt.start/4),yt=Math.ceil(Vt.count/4),Qt=Lt%w.width,V=Math.floor(Lt/w.width),mt=yt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Qt,V,mt,xt,J,st,w.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function W(D,w,J){let st=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(st=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(st=i.TEXTURE_3D);let ht=Z(D,w),nt=w.source;e.bindTexture(st,D.__webglTexture,i.TEXTURE0+J);let Ut=n.get(nt);if(nt.version!==Ut.__version||ht===!0){e.activeTexture(i.TEXTURE0+J);let gt=ce.getPrimaries(ce.workingColorSpace),It=w.colorSpace===ni?null:ce.getPrimaries(w.colorSpace),Pt=w.colorSpace===ni||gt===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let pt=_(w.image,!1,s.maxTextureSize);pt=We(w,pt);let bt=r.convert(w.format,w.colorSpace),Vt=r.convert(w.type),Lt=y(w.internalFormat,bt,Vt,w.colorSpace,w.isVideoTexture);Q(st,w);let yt,Qt=w.mipmaps,V=w.isVideoTexture!==!0,mt=Ut.__version===void 0||ht===!0,xt=nt.dataReady,Et=S(w,pt);if(w.isDepthTexture)Lt=x(w.format===Ds,w.type),mt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Lt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,pt.width,pt.height,0,bt,Vt,null));else if(w.isDataTexture)if(Qt.length>0){V&&mt&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,Qt[0].width,Qt[0].height);for(let ft=0,at=Qt.length;ft<at;ft++)yt=Qt[ft],V?xt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt.width,yt.height,bt,Vt,yt.data):e.texImage2D(i.TEXTURE_2D,ft,Lt,yt.width,yt.height,0,bt,Vt,yt.data);w.generateMipmaps=!1}else V?(mt&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,pt.width,pt.height),xt&&et(w,pt,bt,Vt)):e.texImage2D(i.TEXTURE_2D,0,Lt,pt.width,pt.height,0,bt,Vt,pt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){V&&mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Lt,Qt[0].width,Qt[0].height,pt.depth);for(let ft=0,at=Qt.length;ft<at;ft++)if(yt=Qt[ft],w.format!==Tn)if(bt!==null)if(V){if(xt)if(w.layerUpdates.size>0){let Rt=yl(yt.width,yt.height,w.format,w.type);for(let Zt of w.layerUpdates){let ve=yt.data.subarray(Zt*Rt/yt.data.BYTES_PER_ELEMENT,(Zt+1)*Rt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Zt,yt.width,yt.height,1,bt,ve)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,yt.width,yt.height,pt.depth,bt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,Lt,yt.width,yt.height,pt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,yt.width,yt.height,pt.depth,bt,Vt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,Lt,yt.width,yt.height,pt.depth,0,bt,Vt,yt.data)}else{V&&mt&&e.texStorage2D(i.TEXTURE_2D,Et,Lt,Qt[0].width,Qt[0].height);for(let ft=0,at=Qt.length;ft<at;ft++)yt=Qt[ft],w.format!==Tn?bt!==null?V?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,yt.width,yt.height,bt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,yt.width,yt.height,bt,Vt,yt.data):e.texImage2D(i.TEXTURE_2D,ft,Lt,yt.width,yt.height,0,bt,Vt,yt.data)}else if(w.isDataArrayTexture)if(V){if(mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Lt,pt.width,pt.height,pt.depth),xt)if(w.layerUpdates.size>0){let ft=yl(pt.width,pt.height,w.format,w.type);for(let at of w.layerUpdates){let Rt=pt.data.subarray(at*ft/pt.data.BYTES_PER_ELEMENT,(at+1)*ft/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,pt.width,pt.height,1,bt,Vt,Rt)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,bt,Vt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,bt,Vt,pt.data);else if(w.isData3DTexture)V?(mt&&e.texStorage3D(i.TEXTURE_3D,Et,Lt,pt.width,pt.height,pt.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,bt,Vt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,bt,Vt,pt.data);else if(w.isFramebufferTexture){if(mt)if(V)e.texStorage2D(i.TEXTURE_2D,Et,Lt,pt.width,pt.height);else{let ft=pt.width,at=pt.height;for(let Rt=0;Rt<Et;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Lt,ft,at,0,bt,Vt,null),ft>>=1,at>>=1}}else if(Qt.length>0){if(V&&mt){let ft=Ue(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Lt,ft.width,ft.height)}for(let ft=0,at=Qt.length;ft<at;ft++)yt=Qt[ft],V?xt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,bt,Vt,yt):e.texImage2D(i.TEXTURE_2D,ft,Lt,bt,Vt,yt);w.generateMipmaps=!1}else if(V){if(mt){let ft=Ue(pt);e.texStorage2D(i.TEXTURE_2D,Et,Lt,ft.width,ft.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Vt,pt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,bt,Vt,pt);m(w)&&p(st),Ut.__version=nt.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function B(D,w,J){if(w.image.length!==6)return;let st=Z(D,w),ht=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);let nt=n.get(ht);if(ht.version!==nt.__version||st===!0){e.activeTexture(i.TEXTURE0+J);let Ut=ce.getPrimaries(ce.workingColorSpace),gt=w.colorSpace===ni?null:ce.getPrimaries(w.colorSpace),It=w.colorSpace===ni||Ut===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,pt=w.image[0]&&w.image[0].isDataTexture,bt=[];for(let at=0;at<6;at++)!Pt&&!pt?bt[at]=_(w.image[at],!0,s.maxCubemapSize):bt[at]=pt?w.image[at].image:w.image[at],bt[at]=We(w,bt[at]);let Vt=bt[0],Lt=r.convert(w.format,w.colorSpace),yt=r.convert(w.type),Qt=y(w.internalFormat,Lt,yt,w.colorSpace),V=w.isVideoTexture!==!0,mt=nt.__version===void 0||st===!0,xt=ht.dataReady,Et=S(w,Vt);Q(i.TEXTURE_CUBE_MAP,w);let ft;if(Pt){V&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Qt,Vt.width,Vt.height);for(let at=0;at<6;at++){ft=bt[at].mipmaps;for(let Rt=0;Rt<ft.length;Rt++){let Zt=ft[Rt];w.format!==Tn?Lt!==null?V?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,Zt.width,Zt.height,Lt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,Qt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,Zt.width,Zt.height,Lt,yt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,Qt,Zt.width,Zt.height,0,Lt,yt,Zt.data)}}}else{if(ft=w.mipmaps,V&&mt){ft.length>0&&Et++;let at=Ue(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Qt,at.width,at.height)}for(let at=0;at<6;at++)if(pt){V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,bt[at].width,bt[at].height,Lt,yt,bt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,bt[at].width,bt[at].height,0,Lt,yt,bt[at].data);for(let Rt=0;Rt<ft.length;Rt++){let ve=ft[Rt].image[at].image;V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,ve.width,ve.height,Lt,yt,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,Qt,ve.width,ve.height,0,Lt,yt,ve.data)}}else{V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Lt,yt,bt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Qt,Lt,yt,bt[at]);for(let Rt=0;Rt<ft.length;Rt++){let Zt=ft[Rt];V?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,Lt,yt,Zt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,Qt,Lt,yt,Zt.image[at])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),nt.__version=ht.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function ot(D,w,J,st,ht,nt){let Ut=r.convert(J.format,J.colorSpace),gt=r.convert(J.type),It=y(J.internalFormat,Ut,gt,J.colorSpace),Pt=n.get(w),pt=n.get(J);if(pt.__renderTarget=w,!Pt.__hasExternalTextures){let bt=Math.max(1,w.width>>nt),Vt=Math.max(1,w.height>>nt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,nt,It,bt,Vt,w.depth,0,Ut,gt,null):e.texImage2D(ht,nt,It,bt,Vt,0,Ut,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Tt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,ht,pt.__webglTexture,0,ye(w)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,st,ht,pt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(D,w,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),w.depthBuffer){let st=w.depthTexture,ht=st&&st.isDepthTexture?st.type:null,nt=x(w.stencilBuffer,ht),Ut=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ye(w);Tt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,nt,w.width,w.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,D)}else{let st=w.textures;for(let ht=0;ht<st.length;ht++){let nt=st[ht],Ut=r.convert(nt.format,nt.colorSpace),gt=r.convert(nt.type),It=y(nt.internalFormat,Ut,gt,nt.colorSpace),Pt=ye(w);J&&Tt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,It,w.width,w.height):Tt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,It,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,It,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ut(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(w.depthTexture);st.__renderTarget=w,(!st.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);let ht=st.__webglTexture,nt=ye(w);if(w.depthTexture.format===ys)Tt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ht,0);else if(w.depthTexture.format===Ds)Tt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function vt(D){let w=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){let st=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),st){let ht=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),w.__depthDisposeCallback=ht}w.__boundDepthTexture=st}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let st=D.texture.mipmaps;st&&st.length>0?ut(w.__webglFramebuffer[0],D):ut(w.__webglFramebuffer,D)}else if(J){w.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[st]),w.__webglDepthbuffer[st]===void 0)w.__webglDepthbuffer[st]=i.createRenderbuffer(),lt(w.__webglDepthbuffer[st],D,!1);else{let ht=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[st];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,nt)}}else{let st=D.texture.mipmaps;if(st&&st.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),lt(w.__webglDepthbuffer,D,!1);else{let ht=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(D,w,J){let st=n.get(D);w!==void 0&&ot(st.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&vt(D)}function F(D){let w=D.texture,J=n.get(D),st=n.get(w);D.addEventListener("dispose",R);let ht=D.textures,nt=D.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture()),st.__version=w.version,o.memory.textures++),nt){J.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[gt]=[];for(let It=0;It<w.mipmaps.length;It++)J.__webglFramebuffer[gt][It]=i.createFramebuffer()}else J.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)J.__webglFramebuffer[gt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let gt=0,It=ht.length;gt<It;gt++){let Pt=n.get(ht[gt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Tt(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){let It=ht[gt];J.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[gt]);let Pt=r.convert(It.format,It.colorSpace),pt=r.convert(It.type),bt=y(It.internalFormat,Pt,pt,It.colorSpace,D.isXRRenderTarget===!0),Vt=ye(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,bt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,J.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),Q(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)ot(J.__webglFramebuffer[gt][It],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It);else ot(J.__webglFramebuffer[gt],D,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let gt=0,It=ht.length;gt<It;gt++){let Pt=ht[gt],pt=n.get(Pt),bt=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,pt.__webglTexture),Q(bt,Pt),ot(J.__webglFramebuffer,D,Pt,i.COLOR_ATTACHMENT0+gt,bt,0),m(Pt)&&p(bt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(gt=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,st.__webglTexture),Q(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let It=0;It<w.mipmaps.length;It++)ot(J.__webglFramebuffer[It],D,w,i.COLOR_ATTACHMENT0,gt,It);else ot(J.__webglFramebuffer,D,w,i.COLOR_ATTACHMENT0,gt,0);m(w)&&p(gt),e.unbindTexture()}D.depthBuffer&&vt(D)}function se(D){let w=D.textures;for(let J=0,st=w.length;J<st;J++){let ht=w[J];if(m(ht)){let nt=b(D),Ut=n.get(ht).__webglTexture;e.bindTexture(nt,Ut),p(nt),e.unbindTexture()}}}let Ht=[],Ft=[];function wt(D){if(D.samples>0){if(Tt(D)===!1){let w=D.textures,J=D.width,st=D.height,ht=i.COLOR_BUFFER_BIT,nt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(D),gt=w.length>1;if(gt)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);let It=D.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let pt=n.get(w[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pt,0)}i.blitFramebuffer(0,0,J,st,0,0,J,st,ht,i.NEAREST),c===!0&&(Ht.length=0,Ft.length=0,Ht.push(i.COLOR_ATTACHMENT0+Pt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ht.push(nt),Ft.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let pt=n.get(w[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let w=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ye(D){return Math.min(s.maxSamples,D.samples)}function Tt(D){let w=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function jt(D){let w=o.render.frame;h.get(D)!==w&&(h.set(D,w),D.update())}function We(D,w){let J=D.colorSpace,st=D.format,ht=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Oi&&J!==ni&&(ce.getTransfer(J)===me?(st!==Tn||ht!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function Ue(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=M,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=$t,this.setupRenderTarget=F,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Tt}function sx(i,t){function e(n,s=ni){let r,o=ce.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===la)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===al)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===rl)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===ca)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Ps)return i.HALF_FLOAT;if(n===cl)return i.ALPHA;if(n===ll)return i.RGB;if(n===Tn)return i.RGBA;if(n===ys)return i.DEPTH_COMPONENT;if(n===Ds)return i.DEPTH_STENCIL;if(n===ua)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===hl)return i.RG;if(n===da)return i.RG_INTEGER;if(n===pa)return i.RGBA_INTEGER;if(n===Fr||n===Nr||n===Br||n===Or)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ma||n===ga||n===xa||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===va||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===va)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ba)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Aa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ca)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ia)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Ba||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===ka||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ox=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Un({vertexShader:rx,fragmentShader:ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends jn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Ll,p={},b=e.getContextAttributes(),y=null,x=null,S=[],T=[],R=new Ct,P=null,E=new $e;E.viewport=new Ie;let v=new $e;v.viewport=new Ie;let C=[E,v],U=new Jo,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let B=S[W];return B===void 0&&(B=new Ss,S[W]=B),B.getTargetRaySpace()},this.getControllerGrip=function(W){let B=S[W];return B===void 0&&(B=new Ss,S[W]=B),B.getGripSpace()},this.getHand=function(W){let B=S[W];return B===void 0&&(B=new Ss,S[W]=B),B.getHandSpace()};function z(W){let B=T.indexOf(W.inputSource);if(B===-1)return;let ot=S[B];ot!==void 0&&(ot.update(W.inputSource,W.frame,l||o),ot.dispatchEvent({type:W.type,data:W.inputSource}))}function M(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",M),s.removeEventListener("inputsourceschange",I);for(let W=0;W<S.length;W++){let B=T[W];B!==null&&(T[W]=null,S[W].disconnect(B))}O=null,k=null,m.reset();for(let W in p)delete p[W];t.setRenderTarget(y),d=null,f=null,u=null,s=null,x=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",M),s.addEventListener("inputsourceschange",I),b.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,lt=null,ut=null;b.depth&&(ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=b.stencil?Ds:ys,lt=b.stencil?Ls:Si);let vt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new On(f.textureWidth,f.textureHeight,{format:Tn,type:Fn,depthTexture:new mr(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new On(d.framebufferWidth,d.framebufferHeight,{format:Tn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(W){for(let B=0;B<W.removed.length;B++){let ot=W.removed[B],lt=T.indexOf(ot);lt>=0&&(T[lt]=null,S[lt].disconnect(ot))}for(let B=0;B<W.added.length;B++){let ot=W.added[B],lt=T.indexOf(ot);if(lt===-1){for(let vt=0;vt<S.length;vt++)if(vt>=T.length){T.push(ot),lt=vt;break}else if(T[vt]===null){T[vt]=ot,lt=vt;break}if(lt===-1)break}let ut=S[lt];ut&&ut.connect(ot)}}let L=new N,H=new N;function Y(W,B,ot){L.setFromMatrixPosition(B.matrixWorld),H.setFromMatrixPosition(ot.matrixWorld);let lt=L.distanceTo(H),ut=B.projectionMatrix.elements,vt=ot.projectionMatrix.elements,$t=ut[14]/(ut[10]-1),F=ut[14]/(ut[10]+1),se=(ut[9]+1)/ut[5],Ht=(ut[9]-1)/ut[5],Ft=(ut[8]-1)/ut[0],wt=(vt[8]+1)/vt[0],ye=$t*Ft,Tt=$t*wt,jt=lt/(-Ft+wt),We=jt*-Ft;if(B.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(We),W.translateZ(jt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ut[10]===-1)W.projectionMatrix.copy(B.projectionMatrix),W.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let Ue=$t+jt,D=F+jt,w=ye-We,J=Tt+(lt-We),st=se*F/D*Ue,ht=Ht*F/D*Ue;W.projectionMatrix.makePerspective(w,J,st,ht,Ue,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function K(W,B){B===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(B.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let B=W.near,ot=W.far;m.texture!==null&&(m.depthNear>0&&(B=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),U.near=v.near=E.near=B,U.far=v.far=E.far=ot,(O!==U.near||k!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,k=U.far),U.layers.mask=W.layers.mask|6,E.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;let lt=W.parent,ut=U.cameras;K(U,lt);for(let vt=0;vt<ut.length;vt++)K(ut[vt],lt);ut.length===2?Y(U,E,v):U.projectionMatrix.copy(E.projectionMatrix),Q(W,U,lt)};function Q(W,B,ot){ot===null?W.matrix.copy(B.matrixWorld):(W.matrix.copy(ot.matrixWorld),W.matrix.invert(),W.matrix.multiply(B.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(B.projectionMatrix),W.projectionMatrixInverse.copy(B.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=wo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(W){return p[W]};let Z=null;function it(W,B){if(h=B.getViewerPose(l||o),g=B,h!==null){let ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let lt=!1;ot.length!==U.cameras.length&&(U.cameras.length=0,lt=!0);for(let F=0;F<ot.length;F++){let se=ot[F],Ht=null;if(d!==null)Ht=d.getViewport(se);else{let wt=u.getViewSubImage(f,se);Ht=wt.viewport,F===0&&(t.setRenderTargetTextures(x,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(x))}let Ft=C[F];Ft===void 0&&(Ft=new $e,Ft.layers.enable(F),Ft.viewport=new Ie,C[F]=Ft),Ft.matrix.fromArray(se.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(se.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),F===0&&(U.matrix.copy(Ft.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),lt===!0&&U.cameras.push(Ft)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let F=u.getDepthInformation(ot[0]);F&&F.isValid&&F.texture&&m.init(F,s.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let F=0;F<ot.length;F++){let se=ot[F].camera;if(se){let Ht=p[se];Ht||(Ht=new gr,p[se]=Ht);let Ft=u.getCameraImage(se);Ht.sourceTexture=Ft}}}}for(let ot=0;ot<S.length;ot++){let lt=T[ot],ut=S[ot];lt!==null&&ut!==void 0&&ut.update(lt,B,l||o)}Z&&Z(W,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}let et=new zu;et.setAnimationLoop(it),this.setAnimationLoop=function(W){Z=W},this.dispose=function(){}}},Yi=new Dn,ax=new ge;function cx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ml(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,b,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),y=b.envMap,x=b.envMapRotation;y&&(m.envMap.value=y,Yi.copy(x),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(Yi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let x=y.program;n.uniformBlockBinding(b,x)}function l(b,y){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));let S=y.program;n.updateUBOMapping(b,S);let T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let y=u();b.__bindingPointIndex=y;let x=i.createBuffer(),S=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let y=s[b.id],x=b.uniforms,S=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=x.length;T<R;T++){let P=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,v=P.length;E<v;E++){let C=P[E];if(d(C,T,E,S)===!0){let U=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],k=0;for(let z=0;z<O.length;z++){let M=O[z],I=_(M);typeof M=="number"||typeof M=="boolean"?(C.__data[0]=M,i.bufferSubData(i.UNIFORM_BUFFER,U+k,C.__data)):M.isMatrix3?(C.__data[0]=M.elements[0],C.__data[1]=M.elements[1],C.__data[2]=M.elements[2],C.__data[3]=0,C.__data[4]=M.elements[3],C.__data[5]=M.elements[4],C.__data[6]=M.elements[5],C.__data[7]=0,C.__data[8]=M.elements[6],C.__data[9]=M.elements[7],C.__data[10]=M.elements[8],C.__data[11]=0):(M.toArray(C.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,y,x,S){let T=b.value,R=y+"_"+x;if(S[R]===void 0)return typeof T=="number"||typeof T=="boolean"?S[R]=T:S[R]=T.clone(),!0;{let P=S[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return S[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){let y=b.uniforms,x=0,S=16;for(let R=0,P=y.length;R<P;R++){let E=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,C=E.length;v<C;v++){let U=E[v],O=Array.isArray(U.value)?U.value:[U.value];for(let k=0,z=O.length;k<z;k++){let M=O[k],I=_(M),L=x%S,H=L%I.boundary,Y=L+H;x+=H,Y!==0&&S-Y<I.storage&&(x+=S-Y),U.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=I.storage}}}let T=x%S;return T>0&&(x+=S-T),b.__size=x,b.__cache={},this}function _(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Ya=class{constructor(t={}){let{canvas:e=au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,S=!1;this._outputColorSpace=gn;let T=0,R=0,P=null,E=-1,v=null,C=new Ie,U=new Ie,O=null,k=new Kt(0),z=0,M=e.width,I=e.height,L=1,H=null,Y=null,K=new Ie(0,0,M,I),Q=new Ie(0,0,M,I),Z=!1,it=new Es,et=!1,W=!1,B=new ge,ot=new N,lt=new Ie,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},vt=!1;function $t(){return P===null?L:1}let F=n;function se(A,X){return e.getContext(A,X)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let X="webgl2";if(F=se(X,A),F===null)throw se(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ht,Ft,wt,ye,Tt,jt,We,Ue,D,w,J,st,ht,nt,Ut,gt,It,Pt,pt,bt,Vt,Lt,yt,Qt;function V(){Ht=new Ag(F),Ht.init(),Lt=new sx(F,Ht),Ft=new vg(F,Ht,t,Lt),wt=new nx(F,Ht),Ft.reversedDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),ye=new Ig(F),Tt=new G0,jt=new ix(F,Ht,wt,Tt,Ft,Lt,ye),We=new bg(x),Ue=new Tg(x),D=new Nd(F),yt=new _g(F,D),w=new Rg(F,D,ye,yt),J=new Lg(F,w,D,ye),pt=new Pg(F,Ft,jt),gt=new Mg(Tt),st=new V0(x,We,Ue,Ht,Ft,yt,gt),ht=new cx(x,Tt),nt=new X0,Ut=new Q0(Ht),Pt=new xg(x,We,Ue,wt,J,d,c),It=new tx(x,J,Ft),Qt=new lx(F,ye,Ft,wt),bt=new yg(F,Ht,ye),Vt=new Cg(F,Ht,ye),ye.programs=st.programs,x.capabilities=Ft,x.extensions=Ht,x.properties=Tt,x.renderLists=nt,x.shadowMap=It,x.state=wt,x.info=ye}V();let mt=new Dl(x,F);this.xr=mt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=Ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(M,I,!1))},this.getSize=function(A){return A.set(M,I)},this.setSize=function(A,X,j=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=A,I=X,e.width=Math.floor(A*L),e.height=Math.floor(X*L),j===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(M*L,I*L).floor()},this.setDrawingBufferSize=function(A,X,j){M=A,I=X,L=j,e.width=Math.floor(A*j),e.height=Math.floor(X*j),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,X,j,tt){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,X,j,tt),wt.viewport(C.copy(K).multiplyScalar(L).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,X,j,tt){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,X,j,tt),wt.scissor(U.copy(Q).multiplyScalar(L).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(A){wt.setScissorTest(Z=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){Y=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,j=!0){let tt=0;if(A){let q=!1;if(P!==null){let dt=P.texture.format;q=dt===pa||dt===da||dt===fa}if(q){let dt=P.texture.type,Mt=dt===Fn||dt===Si||dt===Is||dt===Ls||dt===la||dt===ha,At=Pt.getClearColor(),St=Pt.getClearAlpha(),kt=At.r,Gt=At.g,Bt=At.b;Mt?(g[0]=kt,g[1]=Gt,g[2]=Bt,g[3]=St,F.clearBufferuiv(F.COLOR,0,g)):(_[0]=kt,_[1]=Gt,_[2]=Bt,_[3]=St,F.clearBufferiv(F.COLOR,0,_))}else tt|=F.COLOR_BUFFER_BIT}X&&(tt|=F.DEPTH_BUFFER_BIT),j&&(tt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Pt.dispose(),nt.dispose(),Ut.dispose(),Tt.dispose(),We.dispose(),Ue.dispose(),J.dispose(),yt.dispose(),Qt.dispose(),st.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Bn),mt.removeEventListener("sessionend",Gl),Ci.stop()};function xt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let A=ye.autoReset,X=It.enabled,j=It.autoUpdate,tt=It.needsUpdate,q=It.type;V(),ye.autoReset=A,It.enabled=X,It.autoUpdate=j,It.needsUpdate=tt,It.type=q}function ft(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){let X=A.target;X.removeEventListener("dispose",at),Rt(X)}function Rt(A){Zt(A),Tt.remove(A)}function Zt(A){let X=Tt.get(A).programs;X!==void 0&&(X.forEach(function(j){st.releaseProgram(j)}),A.isShaderMaterial&&st.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,j,tt,q,dt){X===null&&(X=ut);let Mt=q.isMesh&&q.matrixWorld.determinant()<0,At=yf(A,X,j,tt,q);wt.setMaterial(tt,Mt);let St=j.index,kt=1;if(tt.wireframe===!0){if(St=w.getWireframeAttribute(j),St===void 0)return;kt=2}let Gt=j.drawRange,Bt=j.attributes.position,ie=Gt.start*kt,xe=(Gt.start+Gt.count)*kt;dt!==null&&(ie=Math.max(ie,dt.start*kt),xe=Math.min(xe,(dt.start+dt.count)*kt)),St!==null?(ie=Math.max(ie,0),xe=Math.min(xe,St.count)):Bt!=null&&(ie=Math.max(ie,0),xe=Math.min(xe,Bt.count));let De=xe-ie;if(De<0||De===1/0)return;yt.setup(q,tt,At,j,St);let Me,_e=bt;if(St!==null&&(Me=D.get(St),_e=Vt,_e.setIndex(Me)),q.isMesh)tt.wireframe===!0?(wt.setLineWidth(tt.wireframeLinewidth*$t()),_e.setMode(F.LINES)):_e.setMode(F.TRIANGLES);else if(q.isLine){let zt=tt.linewidth;zt===void 0&&(zt=1),wt.setLineWidth(zt*$t()),q.isLineSegments?_e.setMode(F.LINES):q.isLineLoop?_e.setMode(F.LINE_LOOP):_e.setMode(F.LINE_STRIP)}else q.isPoints?_e.setMode(F.POINTS):q.isSprite&&_e.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)vs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let zt=q._multiDrawStarts,Ae=q._multiDrawCounts,he=q._multiDrawCount,fn=St?D.get(St).bytesPerElement:1,ss=Tt.get(tt).currentProgram.getUniforms();for(let dn=0;dn<he;dn++)ss.setValue(F,"_gl_DrawID",dn),_e.render(zt[dn]/fn,Ae[dn])}else if(q.isInstancedMesh)_e.renderInstances(ie,De,q.count);else if(j.isInstancedBufferGeometry){let zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ae=Math.min(j.instanceCount,zt);_e.renderInstances(ie,De,Ae)}else _e.render(ie,De)};function ve(A,X,j){A.transparent===!0&&A.side===je&&A.forceSinglePass===!1?(A.side=sn,A.needsUpdate=!0,Jr(A,X,j),A.side=Qn,A.needsUpdate=!0,Jr(A,X,j),A.side=je):Jr(A,X,j)}this.compile=function(A,X,j=null){j===null&&(j=A),p=Ut.get(j),p.init(X),y.push(p),j.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==j&&A.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let tt=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let dt=q.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){let At=dt[Mt];ve(At,j,q),tt.add(At)}else ve(dt,j,q),tt.add(dt)}),p=y.pop(),tt},this.compileAsync=function(A,X,j=null){let tt=this.compile(A,X,j);return new Promise(q=>{function dt(){if(tt.forEach(function(Mt){Tt.get(Mt).currentProgram.isReady()&&tt.delete(Mt)}),tt.size===0){q(A);return}setTimeout(dt,10)}Ht.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let pe=null;function Wn(A){pe&&pe(A)}function Bn(){Ci.stop()}function Gl(){Ci.start()}let Ci=new zu;Ci.setAnimationLoop(Wn),typeof self!="undefined"&&Ci.setContext(self),this.setAnimationLoop=function(A){pe=A,mt.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},mt.addEventListener("sessionstart",Bn),mt.addEventListener("sessionend",Gl),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(X),X=mt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,X,P),p=Ut.get(A,y.length),p.init(X),y.push(p),B.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),it.setFromProjectionMatrix(B,Pn,X.reversedDepth),W=this.localClippingEnabled,et=gt.init(this.clippingPlanes,W),m=nt.get(A,b.length),m.init(),b.push(m),mt.enabled===!0&&mt.isPresenting===!0){let dt=x.xr.getDepthSensingMesh();dt!==null&&lc(dt,X,-1/0,x.sortObjects)}lc(A,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(H,Y),vt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,vt&&Pt.addToRenderList(m,A),this.info.render.frame++,et===!0&&gt.beginShadows();let j=p.state.shadowsArray;It.render(j,A,X),et===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){let dt=X.cameras;if(q.length>0)for(let Mt=0,At=dt.length;Mt<At;Mt++){let St=dt[Mt];Xl(tt,q,A,St)}vt&&Pt.render(A);for(let Mt=0,At=dt.length;Mt<At;Mt++){let St=dt[Mt];Wl(m,A,St,St.viewport)}}else q.length>0&&Xl(tt,q,A,X),vt&&Pt.render(A),Wl(m,A,X);P!==null&&R===0&&(jt.updateMultisampleRenderTarget(P),jt.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,X),yt.resetDefaultState(),E=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&gt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function lc(A,X,j,tt){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||it.intersectsSprite(A)){tt&&lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(B);let Mt=J.update(A),At=A.material;At.visible&&m.push(A,Mt,At,j,lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||it.intersectsObject(A))){let Mt=J.update(A),At=A.material;if(tt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),lt.copy(A.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),lt.copy(Mt.boundingSphere.center)),lt.applyMatrix4(A.matrixWorld).applyMatrix4(B)),Array.isArray(At)){let St=Mt.groups;for(let kt=0,Gt=St.length;kt<Gt;kt++){let Bt=St[kt],ie=At[Bt.materialIndex];ie&&ie.visible&&m.push(A,Mt,ie,j,lt.z,Bt)}}else At.visible&&m.push(A,Mt,At,j,lt.z,null)}}let dt=A.children;for(let Mt=0,At=dt.length;Mt<At;Mt++)lc(dt[Mt],X,j,tt)}function Wl(A,X,j,tt){let q=A.opaque,dt=A.transmissive,Mt=A.transparent;p.setupLightsView(j),et===!0&&gt.setGlobalState(x.clippingPlanes,j),tt&&wt.viewport(C.copy(tt)),q.length>0&&Zr(q,X,j),dt.length>0&&Zr(dt,X,j),Mt.length>0&&Zr(Mt,X,j),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Xl(A,X,j,tt){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new On(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?Ps:Fn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ce.workingColorSpace}));let dt=p.state.transmissionRenderTarget[tt.id],Mt=tt.viewport||C;dt.setSize(Mt.z*x.transmissionResolutionScale,Mt.w*x.transmissionResolutionScale);let At=x.getRenderTarget(),St=x.getActiveCubeFace(),kt=x.getActiveMipmapLevel();x.setRenderTarget(dt),x.getClearColor(k),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),vt&&Pt.render(j);let Gt=x.toneMapping;x.toneMapping=ei;let Bt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),et===!0&&gt.setGlobalState(x.clippingPlanes,tt),Zr(A,j,tt),jt.updateMultisampleRenderTarget(dt),jt.updateRenderTargetMipmap(dt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let xe=0,De=X.length;xe<De;xe++){let Me=X[xe],_e=Me.object,zt=Me.geometry,Ae=Me.material,he=Me.group;if(Ae.side===je&&_e.layers.test(tt.layers)){let fn=Ae.side;Ae.side=sn,Ae.needsUpdate=!0,ql(_e,j,tt,zt,Ae,he),Ae.side=fn,Ae.needsUpdate=!0,ie=!0}}ie===!0&&(jt.updateMultisampleRenderTarget(dt),jt.updateRenderTargetMipmap(dt))}x.setRenderTarget(At,St,kt),x.setClearColor(k,z),Bt!==void 0&&(tt.viewport=Bt),x.toneMapping=Gt}function Zr(A,X,j){let tt=X.isScene===!0?X.overrideMaterial:null;for(let q=0,dt=A.length;q<dt;q++){let Mt=A[q],At=Mt.object,St=Mt.geometry,kt=Mt.group,Gt=Mt.material;Gt.allowOverride===!0&&tt!==null&&(Gt=tt),At.layers.test(j.layers)&&ql(At,X,j,St,Gt,kt)}}function ql(A,X,j,tt,q,dt){A.onBeforeRender(x,X,j,tt,q,dt),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(x,X,j,tt,A,dt),q.transparent===!0&&q.side===je&&q.forceSinglePass===!1?(q.side=sn,q.needsUpdate=!0,x.renderBufferDirect(j,X,tt,q,A,dt),q.side=Qn,q.needsUpdate=!0,x.renderBufferDirect(j,X,tt,q,A,dt),q.side=je):x.renderBufferDirect(j,X,tt,q,A,dt),A.onAfterRender(x,X,j,tt,q,dt)}function Jr(A,X,j){X.isScene!==!0&&(X=ut);let tt=Tt.get(A),q=p.state.lights,dt=p.state.shadowsArray,Mt=q.state.version,At=st.getParameters(A,q.state,dt,X,j),St=st.getProgramCacheKey(At),kt=tt.programs;tt.environment=A.isMeshStandardMaterial?X.environment:null,tt.fog=X.fog,tt.envMap=(A.isMeshStandardMaterial?Ue:We).get(A.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",at),kt=new Map,tt.programs=kt);let Gt=kt.get(St);if(Gt!==void 0){if(tt.currentProgram===Gt&&tt.lightsStateVersion===Mt)return Zl(A,At),Gt}else At.uniforms=st.getUniforms(A),A.onBeforeCompile(At,x),Gt=st.acquireProgram(At,St),kt.set(St,Gt),tt.uniforms=At.uniforms;let Bt=tt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=gt.uniform),Zl(A,At),tt.needsLights=Mf(A),tt.lightsStateVersion=Mt,tt.needsLights&&(Bt.ambientLightColor.value=q.state.ambient,Bt.lightProbe.value=q.state.probe,Bt.directionalLights.value=q.state.directional,Bt.directionalLightShadows.value=q.state.directionalShadow,Bt.spotLights.value=q.state.spot,Bt.spotLightShadows.value=q.state.spotShadow,Bt.rectAreaLights.value=q.state.rectArea,Bt.ltc_1.value=q.state.rectAreaLTC1,Bt.ltc_2.value=q.state.rectAreaLTC2,Bt.pointLights.value=q.state.point,Bt.pointLightShadows.value=q.state.pointShadow,Bt.hemisphereLights.value=q.state.hemi,Bt.directionalShadowMap.value=q.state.directionalShadowMap,Bt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Bt.spotShadowMap.value=q.state.spotShadowMap,Bt.spotLightMatrix.value=q.state.spotLightMatrix,Bt.spotLightMap.value=q.state.spotLightMap,Bt.pointShadowMap.value=q.state.pointShadowMap,Bt.pointShadowMatrix.value=q.state.pointShadowMatrix),tt.currentProgram=Gt,tt.uniformsList=null,Gt}function Yl(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Ns.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Zl(A,X){let j=Tt.get(A);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function yf(A,X,j,tt,q){X.isScene!==!0&&(X=ut),jt.resetTextureUnits();let dt=X.fog,Mt=tt.isMeshStandardMaterial?X.environment:null,At=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Oi,St=(tt.isMeshStandardMaterial?Ue:We).get(tt.envMap||Mt),kt=tt.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Gt=!!j.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Bt=!!j.morphAttributes.position,ie=!!j.morphAttributes.normal,xe=!!j.morphAttributes.color,De=ei;tt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(De=x.toneMapping);let Me=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=Me!==void 0?Me.length:0,zt=Tt.get(tt),Ae=p.state.lights;if(et===!0&&(W===!0||A!==v)){let nn=A===v&&tt.id===E;gt.setState(tt,A,nn)}let he=!1;tt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Ae.state.version||zt.outputColorSpace!==At||q.isBatchedMesh&&zt.batching===!1||!q.isBatchedMesh&&zt.batching===!0||q.isBatchedMesh&&zt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&zt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&zt.instancing===!1||!q.isInstancedMesh&&zt.instancing===!0||q.isSkinnedMesh&&zt.skinning===!1||!q.isSkinnedMesh&&zt.skinning===!0||q.isInstancedMesh&&zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&zt.instancingMorph===!1&&q.morphTexture!==null||zt.envMap!==St||tt.fog===!0&&zt.fog!==dt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==gt.numPlanes||zt.numIntersection!==gt.numIntersection)||zt.vertexAlphas!==kt||zt.vertexTangents!==Gt||zt.morphTargets!==Bt||zt.morphNormals!==ie||zt.morphColors!==xe||zt.toneMapping!==De||zt.morphTargetsCount!==_e)&&(he=!0):(he=!0,zt.__version=tt.version);let fn=zt.currentProgram;he===!0&&(fn=Jr(tt,X,q));let ss=!1,dn=!1,Xs=!1,Re=fn.getUniforms(),Mn=zt.uniforms;if(wt.useProgram(fn.program)&&(ss=!0,dn=!0,Xs=!0),tt.id!==E&&(E=tt.id,dn=!0),ss||v!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Re.setValue(F,"projectionMatrix",A.projectionMatrix),Re.setValue(F,"viewMatrix",A.matrixWorldInverse);let on=Re.map.cameraPosition;on!==void 0&&on.setValue(F,ot.setFromMatrixPosition(A.matrixWorld)),Ft.logarithmicDepthBuffer&&Re.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Re.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),v!==A&&(v=A,dn=!0,Xs=!0)}if(q.isSkinnedMesh){Re.setOptional(F,q,"bindMatrix"),Re.setOptional(F,q,"bindMatrixInverse");let nn=q.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Re.setValue(F,"boneTexture",nn.boneTexture,jt))}q.isBatchedMesh&&(Re.setOptional(F,q,"batchingTexture"),Re.setValue(F,"batchingTexture",q._matricesTexture,jt),Re.setOptional(F,q,"batchingIdTexture"),Re.setValue(F,"batchingIdTexture",q._indirectTexture,jt),Re.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Re.setValue(F,"batchingColorTexture",q._colorsTexture,jt));let bn=j.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&pt.update(q,j,fn),(dn||zt.receiveShadow!==q.receiveShadow)&&(zt.receiveShadow=q.receiveShadow,Re.setValue(F,"receiveShadow",q.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Mn.envMap.value=St,Mn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&X.environment!==null&&(Mn.envMapIntensity.value=X.environmentIntensity),dn&&(Re.setValue(F,"toneMappingExposure",x.toneMappingExposure),zt.needsLights&&vf(Mn,Xs),dt&&tt.fog===!0&&ht.refreshFogUniforms(Mn,dt),ht.refreshMaterialUniforms(Mn,tt,L,I,p.state.transmissionRenderTarget[A.id]),Ns.upload(F,Yl(zt),Mn,jt)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ns.upload(F,Yl(zt),Mn,jt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Re.setValue(F,"center",q.center),Re.setValue(F,"modelViewMatrix",q.modelViewMatrix),Re.setValue(F,"normalMatrix",q.normalMatrix),Re.setValue(F,"modelMatrix",q.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let nn=tt.uniformsGroups;for(let on=0,hc=nn.length;on<hc;on++){let Ii=nn[on];Qt.update(Ii,fn),Qt.bind(Ii,fn)}}return fn}function vf(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Mf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,X,j){let tt=Tt.get(A);tt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Tt.get(A.texture).__webglTexture=X,Tt.get(A.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:j,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let j=Tt.get(A);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};let bf=F.createFramebuffer();this.setRenderTarget=function(A,X=0,j=0){P=A,T=X,R=j;let tt=!0,q=null,dt=!1,Mt=!1;if(A){let St=Tt.get(A);if(St.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(F.FRAMEBUFFER,null),tt=!1;else if(St.__webglFramebuffer===void 0)jt.setupRenderTarget(A);else if(St.__hasExternalTextures)jt.rebindTextures(A,Tt.get(A.texture).__webglTexture,Tt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Bt=A.depthTexture;if(St.__boundDepthTexture!==Bt){if(Bt!==null&&Tt.has(Bt)&&(A.width!==Bt.image.width||A.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");jt.setupDepthRenderbuffer(A)}}let kt=A.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Mt=!0);let Gt=Tt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Gt[X])?q=Gt[X][j]:q=Gt[X],dt=!0):A.samples>0&&jt.useMultisampledRTT(A)===!1?q=Tt.get(A).__webglMultisampledFramebuffer:Array.isArray(Gt)?q=Gt[j]:q=Gt,C.copy(A.viewport),U.copy(A.scissor),O=A.scissorTest}else C.copy(K).multiplyScalar(L).floor(),U.copy(Q).multiplyScalar(L).floor(),O=Z;if(j!==0&&(q=bf),wt.bindFramebuffer(F.FRAMEBUFFER,q)&&tt&&wt.drawBuffers(A,q),wt.viewport(C),wt.scissor(U),wt.setScissorTest(O),dt){let St=Tt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,St.__webglTexture,j)}else if(Mt){let St=X;for(let kt=0;kt<A.textures.length;kt++){let Gt=Tt.get(A.textures[kt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,j,St)}}else if(A!==null&&j!==0){let St=Tt.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,j)}E=-1},this.readRenderTargetPixels=function(A,X,j,tt,q,dt,Mt,At=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){wt.bindFramebuffer(F.FRAMEBUFFER,St);try{let kt=A.textures[At],Gt=kt.format,Bt=kt.type;if(!Ft.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-tt&&j>=0&&j<=A.height-q&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+At),F.readPixels(X,j,tt,q,Lt.convert(Gt),Lt.convert(Bt),dt))}finally{let kt=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,X,j,tt,q,dt,Mt,At=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Tt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St)if(X>=0&&X<=A.width-tt&&j>=0&&j<=A.height-q){wt.bindFramebuffer(F.FRAMEBUFFER,St);let kt=A.textures[At],Gt=kt.format,Bt=kt.type;if(!Ft.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.bufferData(F.PIXEL_PACK_BUFFER,dt.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+At),F.readPixels(X,j,tt,q,Lt.convert(Gt),Lt.convert(Bt),0);let xe=P!==null?Tt.get(P).__webglFramebuffer:null;wt.bindFramebuffer(F.FRAMEBUFFER,xe);let De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cu(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,dt),F.deleteBuffer(ie),F.deleteSync(De),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,j=0){let tt=Math.pow(2,-j),q=Math.floor(A.image.width*tt),dt=Math.floor(A.image.height*tt),Mt=X!==null?X.x:0,At=X!==null?X.y:0;jt.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,Mt,At,q,dt),wt.unbindTexture()};let Sf=F.createFramebuffer(),Ef=F.createFramebuffer();this.copyTextureToTexture=function(A,X,j=null,tt=null,q=0,dt=null){dt===null&&(q!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=q,q=0):dt=0);let Mt,At,St,kt,Gt,Bt,ie,xe,De,Me=A.isCompressedTexture?A.mipmaps[dt]:A.image;if(j!==null)Mt=j.max.x-j.min.x,At=j.max.y-j.min.y,St=j.isBox3?j.max.z-j.min.z:1,kt=j.min.x,Gt=j.min.y,Bt=j.isBox3?j.min.z:0;else{let bn=Math.pow(2,-q);Mt=Math.floor(Me.width*bn),At=Math.floor(Me.height*bn),A.isDataArrayTexture?St=Me.depth:A.isData3DTexture?St=Math.floor(Me.depth*bn):St=1,kt=0,Gt=0,Bt=0}tt!==null?(ie=tt.x,xe=tt.y,De=tt.z):(ie=0,xe=0,De=0);let _e=Lt.convert(X.format),zt=Lt.convert(X.type),Ae;X.isData3DTexture?(jt.setTexture3D(X,0),Ae=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(jt.setTexture2DArray(X,0),Ae=F.TEXTURE_2D_ARRAY):(jt.setTexture2D(X,0),Ae=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let he=F.getParameter(F.UNPACK_ROW_LENGTH),fn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ss=F.getParameter(F.UNPACK_SKIP_PIXELS),dn=F.getParameter(F.UNPACK_SKIP_ROWS),Xs=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Me.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Me.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,kt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt);let Re=A.isDataArrayTexture||A.isData3DTexture,Mn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let bn=Tt.get(A),nn=Tt.get(X),on=Tt.get(bn.__renderTarget),hc=Tt.get(nn.__renderTarget);wt.bindFramebuffer(F.READ_FRAMEBUFFER,on.__webglFramebuffer),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,hc.__webglFramebuffer);for(let Ii=0;Ii<St;Ii++)Re&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(A).__webglTexture,q,Bt+Ii),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Tt.get(X).__webglTexture,dt,De+Ii)),F.blitFramebuffer(kt,Gt,Mt,At,ie,xe,Mt,At,F.DEPTH_BUFFER_BIT,F.NEAREST);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Tt.has(A)){let bn=Tt.get(A),nn=Tt.get(X);wt.bindFramebuffer(F.READ_FRAMEBUFFER,Sf),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ef);for(let on=0;on<St;on++)Re?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bn.__webglTexture,q,Bt+on):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bn.__webglTexture,q),Mn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,dt,De+on):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,dt),q!==0?F.blitFramebuffer(kt,Gt,Mt,At,ie,xe,Mt,At,F.COLOR_BUFFER_BIT,F.NEAREST):Mn?F.copyTexSubImage3D(Ae,dt,ie,xe,De+on,kt,Gt,Mt,At):F.copyTexSubImage2D(Ae,dt,ie,xe,kt,Gt,Mt,At);wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ae,dt,ie,xe,De,Mt,At,St,_e,zt,Me.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,dt,ie,xe,De,Mt,At,St,_e,Me.data):F.texSubImage3D(Ae,dt,ie,xe,De,Mt,At,St,_e,zt,Me):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,dt,ie,xe,Mt,At,_e,zt,Me.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,dt,ie,xe,Me.width,Me.height,_e,Me.data):F.texSubImage2D(F.TEXTURE_2D,dt,ie,xe,Mt,At,_e,zt,Me);F.pixelStorei(F.UNPACK_ROW_LENGTH,he),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ss),F.pixelStorei(F.UNPACK_SKIP_ROWS,dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xs),dt===0&&X.generateMipmaps&&F.generateMipmap(Ae),wt.unbindTexture()},this.initRenderTarget=function(A){Tt.get(A).__webglFramebuffer===void 0&&jt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?jt.setTextureCube(A,0):A.isData3DTexture?jt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?jt.setTexture2DArray(A,0):jt.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,wt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ce._getDrawingBufferColorSpace(t),e.unpackColorSpace=ce._getUnpackColorSpace()}};function Wu(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,y=a.length;b<y;b++){let x=a[b],S=i.attributes[x];c[x]=new S.constructor(new S.array.constructor(S.count*S.itemSize),S.itemSize,S.normalized);let T=i.morphAttributes[x];T&&(l[x]||(l[x]=[]),T.forEach((R,P)=>{let E=new R.array.constructor(R.count*R.itemSize);l[x][P]=new R.constructor(E,R.itemSize,R.normalized)}))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let b=0;b<r;b++){let y=n?n.getX(b):b,x="";for(let S=0,T=a.length;S<T;S++){let R=a[S],P=i.getAttribute(R),E=P.itemSize;for(let v=0;v<E;v++)x+=`${~~(P[u[v]](y)*_+m)},`}if(x in e)h.push(e[x]);else{for(let S=0,T=a.length;S<T;S++){let R=a[S],P=i.getAttribute(R),E=i.morphAttributes[R],v=P.itemSize,C=c[R],U=l[R];for(let O=0;O<v;O++){let k=u[O],z=f[O];if(C[z](o,P[k](y)),E)for(let M=0,I=E.length;M<I;M++)U[M][z](o,E[M][k](y))}}e[x]=o,h.push(o),o++}}let p=i.clone();for(let b in i.attributes){let y=c[b];if(p.setAttribute(b,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),b in l)for(let x=0;x<l[b].length;x++){let S=l[b][x];p.morphAttributes[b][x]=new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)}}return p.setIndex(h),p}var Fl=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Xu=new Map;function hx(i){if(Array.isArray(i))return i;let t=Xu.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[Fl((e>>16&255)/255),Fl((e>>8&255)/255),Fl((e&255)/255)],Xu.set(i,t),t}var Vn=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let o=this.buf(t),a=hx(e),c=s[0]-n[0],l=s[1]-n[1],h=s[2]-n[2],u=r[0]-n[0],f=r[1]-n[1],d=r[2]-n[2],g=l*d-h*f,_=h*u-c*d,m=c*f-l*u,p=Math.hypot(g,_,m)||1;g/=p,_/=p,m/=p,o.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(g,_,m,g,_,m,g,_,m),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,n,s,r,o){this.tri(t,e,n,s,r),this.tri(t,e,n,r,o)}box(t,e,n,s,r,o,a,c,l=""){if(n>o&&([n,o]=[o,n]),s>a&&([s,a]=[a,s]),r>c&&([r,c]=[c,r]),o-n<1e-4||a-s<1e-4||c-r<1e-4)return;let h=(u,f,d)=>[u,f,d];l.includes("t")||this.quad(t,e,h(n,a,c),h(o,a,c),h(o,a,r),h(n,a,r)),l.includes("b")||this.quad(t,e,h(n,s,r),h(o,s,r),h(o,s,c),h(n,s,c)),this.quad(t,e,h(n,s,c),h(o,s,c),h(o,a,c),h(n,a,c)),this.quad(t,e,h(o,s,r),h(n,s,r),h(n,a,r),h(o,a,r)),this.quad(t,e,h(o,s,c),h(o,s,r),h(o,a,r),h(o,a,c)),this.quad(t,e,h(n,s,r),h(n,s,c),h(n,a,c),h(n,a,r))}obox(t,e,n,s,r,o){let a=(l,h,u)=>[n[0]+l*s[0]+h*r[0]+u*o[0],n[1]+l*s[1]+h*r[1]+u*o[1],n[2]+l*s[2]+h*r[2]+u*o[2]],c=(l,h,u,f)=>this.quad(t,e,l,h,u,f);c(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),c(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),c(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),c(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),c(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),c(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,n,s,r,o,a,c,l=0){let h=Math.cos(l),u=Math.sin(l);this.obox(t,e,[n,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*c/2,0,h*c/2])}beam(t,e,n,s,r,o=r){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],c=Math.hypot(...a)||1,l=a.map(g=>g/c),h=Math.abs(l[1])<.95?[l[2],0,-l[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(g=>g/u);let f=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],d=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,d,h.map(g=>g*r/2),f.map(g=>g*o/2),l.map(g=>g*c/2))}prism(t,e,n,s,r,o={}){var f,d;let a=n.length,c=0;for(let g=0;g<a;g++){let _=n[g],m=n[(g+1)%a];c+=_[0]*m[1]-m[0]*_[1]}let l=c>0?n:[...n].reverse(),h=(f=o.top)!=null?f:e,u=(d=o.side)!=null?d:e;if(o.top!==!1)for(let g=1;g<a-1;g++)this.tri(t,h,[l[0][0],r,l[0][1]],[l[g+1][0],r,l[g+1][1]],[l[g][0],r,l[g][1]]);if(o.bottom!==!1)for(let g=1;g<a-1;g++)this.tri(t,u,[l[0][0],s,l[0][1]],[l[g][0],s,l[g][1]],[l[g+1][0],s,l[g+1][1]]);if(o.sides!==!1)for(let g=0;g<a;g++){let _=l[g],m=l[(g+1)%a];this.quad(t,u,[m[0],s,m[1]],[_[0],s,_[1]],[_[0],r,_[1]],[m[0],r,m[1]])}}cyl(t,e,n,s,r,o,a,c=8,l=Math.PI/8,h={}){let u=[];for(let f=0;f<c;f++){let d=l+f*Math.PI*2/c;u.push([n+Math.cos(d)*a,s+Math.sin(d)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,n,s,r,o,a,c,l=8,h=Math.PI/8){for(let u=0;u<l;u++){let f=h+u*Math.PI*2/l,d=h+(u+1)*Math.PI*2/l,g=[n+Math.cos(f)*a,r,s+Math.sin(f)*a],_=[n+Math.cos(d)*a,r,s+Math.sin(d)*a],m=[n+Math.cos(f)*c,o,s+Math.sin(f)*c],p=[n+Math.cos(d)*c,o,s+Math.sin(d)*c];this.quad(t,e,g,m,p,_),c>.001&&this.tri(t,e,[n,o,s],p,m),this.tri(t,e,[n,r,s],g,_)}}wall(t,e,n,s,r,o,a,c=[],l={}){let h=s[0]-n[0],u=s[1]-n[1],f=Math.hypot(h,u);if(f<.001)return null;let d=h/f,g=u/f,_=-g,m=d,p=o-r,b=(R,P,E=0)=>[n[0]+d*R+_*E,r+P,n[1]+g*R+m*E],y=new Set([0,f]),x=c.map(R=>{var P,E;return{s0:Math.max(0,R.a),s1:Math.min(f,R.a+R.w),y0:(P=R.y0)!=null?P:0,y1:Math.min(p,(E=R.y1)!=null?E:p)}}).filter(R=>R.s1>R.s0+.001);for(let R of x)y.add(R.s0),y.add(R.s1);let S=[...y].sort((R,P)=>R-P),T=Math.atan2(g,d);for(let R=0;R<S.length-1;R++){let P=S[R],E=S[R+1];if(E-P<.001)continue;let v=(P+E)/2,C=x.filter(k=>k.s0<=v&&k.s1>=v).sort((k,z)=>k.y0-z.y0),U=0,O=[];for(let k of C)k.y0>U+.001&&O.push([U,k.y0]),U=Math.max(U,k.y1);U<p-.001&&O.push([U,p]);for(let[k,z]of O){let M=b(v,(k+z)/2);this.ybox(t,e,M[0],M[1],M[2],E-P,z-k,a,T)}}return{at:b,L:f,ux:d,uz:g,nx:_,nz:m,yaw:T}}rail(t,e,n,s,r=1.05,o=.5,a={}){var h,u;let c=(h=a.w)!=null?h:.07,l=(u=a.top)!=null?u:.12;for(let f=0;f<n.length-1;f++){let d=n[f],g=n[f+1],_=Math.hypot(g[0]-d[0],g[1]-d[1]);if(_<.05)continue;this.beam(t,e,[d[0],s+r,d[1]],[g[0],s+r,g[1]],l,.08),this.beam(t,e,[d[0],s+.12,d[1]],[g[0],s+.12,g[1]],c,c);let m=Math.max(1,Math.round(_/o));for(let p=0;p<=m;p++){if(p===0&&f>0)continue;let b=d[0]+(g[0]-d[0])*p/m,y=d[1]+(g[1]-d[1])*p/m,x=p===0||p===m;this.box(t,e,b-(x?.09:c/2),s,y-(x?.09:c/2),b+(x?.09:c/2),s+r,y+(x?.09:c/2))}}}stairs(t,e,n,s,r,o,a,c,l,h){let u=Math.cos(o),f=Math.sin(o);for(let d=0;d<a;d++){let g=l*(d+.5),_=n+u*g,m=s+f*g,p=r+c*(d+1);this.ybox(t,e,_,(r+p)/2,m,l,p-r,h,o)}}slab(t,e,n,s,r,o,a={}){var p,b;let c=y=>new Ct(y[0],y[1]),l=y=>{let x=0;for(let S=0;S<y.length;S++){let T=y[S],R=y[(S+1)%y.length];x+=T[0]*R[1]-R[0]*T[1]}return x},h=l(n)>0?n:[...n].reverse(),u=s.map(y=>l(y)>0?[...y].reverse():y),f=[...h,...u.flat()],d=Er.triangulateShape(h.map(c),u.map(y=>y.map(c))),g=(p=a.top)!=null?p:e,_=(b=a.side)!=null?b:e;for(let[y,x,S]of d){let T=f[y],R=f[x],P=f[S],E=(P[0]-T[0])*(R[1]-T[1])-(R[0]-T[0])*(P[1]-T[1]),[v,C]=E>0?[R,P]:[P,R];a.top!==!1&&this.tri(t,g,[T[0],o,T[1]],[v[0],o,v[1]],[C[0],o,C[1]]),a.bottom!==!1&&this.tri(t,_,[T[0],r,T[1]],[C[0],r,C[1]],[v[0],r,v[1]])}let m=y=>{for(let x=0;x<y.length;x++){let S=y[x],T=y[(x+1)%y.length];this.quad(t,_,[T[0],r,T[1]],[S[0],r,S[1]],[S[0],o,S[1]],[T[0],o,T[1]])}};if(a.sides!==!1){m(h);for(let y of u)m(y)}}plate(t,e,n,s=.3){let r=0;for(let c=0;c<4;c++){let l=n[c],h=n[(c+1)%4];r+=l[0]*h[2]-h[0]*l[2]}let o=r>0?[...n].reverse():n,a=o.map(c=>[c[0],c[1]-s,c[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let c=0;c<4;c++){let l=(c+1)%4;this.quad(t,e,a[c],a[l],o[l],o[c])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};var Nt={x:29,z:39},rn={x:36,z:46},ct={L1:0,L2:5.5,L3:11,L4:20,L5:25,L6:30},un=.6,Pe=.6,Wt=.3,Le={x:15,z:25},ee={x:19,z:29},de={x:25.4,z:35.4},Ge={x:9,z:15},tn={x:14,z:20},ae={ap:20,col:14,ocu:6,wallTop:38,drumTop:43},Nl=ae.ap/Math.cos(Math.PI/8),en={x:50,z:50,y0:-30,y1:-8},qu=[-29,-18,-7,2,12,20.5,29],Yu=[-19,-5,5,19],Zu=[-19,-8,0,12];var qe={x:25.4,z:9.5,w:1.8},Ye={x:25.4,z:32.2,w:1.8},Ee={x:12,z:31.4,w:2},Be={x:12,z:33.6,w:1.8,y0:4.4,y1:6.4},re={x0:13.6,x1:17.4,z0:29.15,z1:31.6,h:2.4,ramp:21.4},vn=[{x:3.6,z:29.15,yaw:0,id:"c0"},{x:-18.85,z:-12.5,yaw:-Math.PI/2,id:"c1"},{x:7.5,z:-28.85,yaw:0,id:"c2"},{x:18.85,z:-12.5,yaw:Math.PI/2,id:"c3"}],ue={x0:-2.5,x1:2.5,z0:-35.4,z1:-31.5},Ei=[{x0:-25.4,x1:-19,z0:-35.4,z1:-29,door:[-25.4,-32.2]},{x0:19,x1:25.4,z0:-35.4,z1:-29,door:[25.4,-32.2]},{x0:-25.4,x1:-19,z0:29,z1:35.4,door:[-25.4,32.2]}],Ju=[[5,-21.5,13,-9],[-13,-21.5,-5,-9],[-13,9,-5,21.5],[5,9,13,21.5]];var G={wall:"#EEE8DE",wallIn:"#F3EEE6",wallB:"#E6DED1",stone:"#D9D1C3",stoneD:"#C8BFAF",plinth:"#BDB4A5",slabE:"#CFC7B9",floor:"#DCD3C4",floorC:"#D2C8B6",floorW:"#CDB99B",floorH:"#D6C7AE",pave:"#D5CCBC",col:"#EAE3D7",capi:"#DCD3C6",frame:"#7D6A56",wood:"#A58C70",woodD:"#7D6A56",roof:"#7C8386",roofE:"#666D71",skirt:"#959A9A",skirtE:"#7F8585",glass:"#71858E",metal:"#6C7276",brass:"#B08D57",copper:"#A27A57",rail:"#626A6E",inlay:"#A88A5E",inlayD:"#8E7A64",ug:"#C9C2B6",ugD:"#B3AB9E",soil:"#9C8E7A"},$u=Math.PI*2;function ze(i,t,e,n,s,r,o,a,c,l=[]){return i.wall(t,e,[s,n],[r,n],o,a,c,l.map(h=>({a:h.c-h.w/2-s,w:h.w,y0:h.y0,y1:h.y1})))}function we(i,t,e,n,s,r,o,a,c,l=[]){return i.wall(t,e,[n,s],[n,r],o,a,c,l.map(h=>({a:h.c-h.w/2-s,w:h.w,y0:h.y0,y1:h.y1})))}function Hr(i,t,e,n,s,r,o,a,c,l,h={}){var _,m;let u=(_=h.frame)!=null?_:G.frame,f=.1,d=Math.min(c,.22),g=(p,b,y,x,S,T,R,P)=>e==="x"?i.box(R,P,p,y,S,b,x,T):i.box(R,P,S,y,p,T,x,b);if(g(s-r/2,s+r/2,o,a,n-.03,n+.03,t+":g",G.glass),g(s-r/2,s-r/2+f,o,a,n-d/2,n+d/2,t,u),g(s+r/2-f,s+r/2,o,a,n-d/2,n+d/2,t,u),g(s-r/2,s+r/2,a-f,a,n-d/2,n+d/2,t,u),g(s-r/2,s+r/2,o,o+f,n-d/2,n+d/2,t,u),r>1.5&&h.mull!==!1&&g(s-.04,s+.04,o,a,n-.06,n+.06,t,u),a-o>2.6&&h.mull!==!1){let p=o+(a-o)*.72;g(s-r/2,s+r/2,p-.04,p+.04,n-.06,n+.06,t,u)}if(h.sill!==!1){let p=n+l*c/2,b=n+l*(c/2+.16);g(s-r/2-.12,s+r/2+.12,o-.14,o,Math.min(p,b)-(l<0,0),Math.max(p,b),t,(m=h.sillC)!=null?m:G.stoneD)}}function ii(i,t,e,n,s,r,o,a,c,l=G.frame){let h=(f,d,g,_,m,p)=>e==="x"?i.box(t,l,f,g,m,d,_,p):i.box(t,l,m,g,f,p,_,d),u=c+.08;h(s-r/2-.1,s-r/2,o,o+a,n-u/2,n+u/2),h(s+r/2,s+r/2+.1,o,o+a,n-u/2,n+u/2),h(s-r/2-.1,s+r/2+.1,o+a,o+a+.12,n-u/2,n+u/2)}var wi={x0:9.4,x1:13.6,z0:-6.4,z1:-1.6},Os=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Ja=(i,t=40,e=0,n=0)=>[...Array(t)].map((s,r)=>[e+Math.cos(r/t*$u)*i,n+Math.sin(r/t*$u)*i]),Qi=(i,t=0,e=0)=>{let n=i/Math.cos(Math.PI/8);return[...Array(8)].map((s,r)=>{let o=Math.PI/8+r*Math.PI/4;return[t+Math.cos(o)*n,e+Math.sin(o)*n]})};function Qu(i,t,e,n,s,r,o,a=.35){let c=[[-e,-n],[e,-n],[e,n],[-e,n]],l=[[-e-o,-n-o],[e+o,-n-o],[e+o,n+o],[-e-o,n+o]];for(let h=0;h<4;h++){let u=(h+1)%4;i.plate(t,G.skirt,[[c[h][0],s,c[h][1]],[c[u][0],s,c[u][1]],[l[u][0],r,l[u][1]],[l[h][0],r,l[h][1]]],a);let f=l[h],d=l[u],g=Math.hypot(d[0]-f[0],d[1]-f[1]);i.ybox(t,G.skirtE,(f[0]+d[0])/2,r-a-.1,(f[1]+d[1])/2,g,.22,.14,Math.atan2(d[1]-f[1],d[0]-f[0]))}}function ux(i,t,e,n,s,r,o,a=.4){for(let c=0;c<8;c++){let l=Math.PI/8+c*Math.PI/4,h=l+Math.PI/4,u=1/Math.cos(Math.PI/8),f=(d,g,_)=>[Math.cos(_)*d*u,g,Math.sin(_)*d*u];i.plate(t,e,[f(n,s,l),f(n,s,h),f(r,o,h),f(r,o,l)],a)}}var ji={},Vr=(i,t)=>{let e=new Vn;return ji[i]={g:t,k:e},e};function Ku(i){let t=Nt.x+.15,e=Nt.z+.15;i.box("L12",G.plinth,-Nt.x-.3,-.45,-Nt.z-.3,Nt.x+.3,0,Nt.z+.3),i.box("L12",G.slabE,-t,ct.L2-un,-e,t,ct.L2,e),i.box("L3",G.slabE,-t,ct.L3-un,-e,t,ct.L3,e,"t"),i.box("L3",G.floor,-Nt.x+Pe,ct.L3,-Nt.z+Pe,Nt.x-Pe,ct.L3+.02,Nt.z-Pe),i.slab("L3",G.floorW,Os(-ee.x,-ee.z,ee.x,ee.z),[Os(-Le.x,-Le.z,Le.x,Le.z)],ct.L3+.02,ct.L3+.05,{sides:!1,bottom:!1}),i.box("L3",G.pave,-Le.x,ct.L3+.02,-Le.z,Le.x,ct.L3+.06,Le.z);for(let[M,I]of[["L4",ct.L4],["L5",ct.L5]])i.slab(M,G.slabE,Os(-t,-e,t,e),[Os(-Ge.x,-Ge.z,Ge.x,Ge.z),Os(wi.x0,wi.z0,wi.x1,wi.z1)],I-un,I,{top:G.floor}),Vr(M==="L5"?"crash5":"crash4",M).box(M,G.slabE,wi.x0+.02,I-un,wi.z0+.02,wi.x1-.02,I,wi.z1-.02);i.slab("L6",G.slabE,Os(-t,-e,t,e),[Ja(ae.ocu,48)],ct.L6-un,ct.L6,{top:G.pave});let n=[-24.2,-16.625,-11.875,-7.125,-2.375,2.375,7.125,11.875,16.625,24.2],s=[-34.2,-26.58,-21.75,-16.92,-12.08,-7.25,-2.42,2.42,7.25,12.08,16.92,21.75,26.58,34.2],r=[{g:"L12",y0:0,y1:ct.L2-un,wa:.8,wb:4.3,w:2,col:G.stone},{g:"L12",y0:ct.L2,y1:ct.L3-un,wa:.9,wb:4.1,w:2,col:G.stone},{g:"L3",y0:ct.L3,y1:ct.L4-un,wa:1.2,wb:7.1,w:2.2,col:G.wall},{g:"L4",y0:ct.L4,y1:ct.L5-un,wa:.9,wb:3.8,w:2,col:G.wall},{g:"L5",y0:ct.L5,y1:ct.L6-un,wa:.9,wb:3.8,w:2,col:G.wall}];for(let[M,I]of r.entries()){let L=I.y1-I.y0,H=Q=>({c:Q,w:I.w,y0:I.wa,y1:I.wb}),Y=M===0?n.filter(Q=>Math.abs(Q)>4):n,K=M===0?[{c:0,w:5.2,y0:0,y1:4.6}]:[];for(let Q of[-1,1]){let Z=Q*(Nt.z-Pe/2);ze(i,I.g,I.col,Z,-Nt.x,Nt.x,I.y0,I.y1,Pe,[...(Q>0?Y:n).map(H),...Q>0?K:[]]);for(let et of Q>0?Y:n)Hr(i,I.g,"x",Z,et,I.w,I.y0+I.wa,I.y0+I.wb,Pe,Q,{frame:M<2?G.woodD:G.frame});let it=Q*(Nt.x-Pe/2);we(i,I.g,I.col,it,-Nt.z+Pe,Nt.z-Pe,I.y0,I.y1,Pe,s.map(H));for(let et of s)Hr(i,I.g,"z",it,et,I.w,I.y0+I.wa,I.y0+I.wb,Pe,Q,{frame:M<2?G.woodD:G.frame})}}ii(i,"L12","x",Nt.z-Pe/2,0,5.2,0,4.6,Pe,G.woodD);for(let[M,I]of[[-2.6,-.02],[.02,2.6]])i.box("L12:p",G.wood,M,.02,Nt.z-Pe/2-.06,I,4.55,Nt.z-Pe/2+.06),i.box("L12:p",G.woodD,M,2.9,Nt.z-Pe/2+.06,I,3.1,Nt.z-Pe/2+.12);for(let M of[-1,1])for(let I of[-1,1])for(let[L,H,Y]of[[M*19,I*(Nt.z+.2),"x"],[M*(Nt.x+.2),I*29,"z"],[M*(Nt.x+.1),I*(Nt.z+.1),"c"]]){let K=Y==="c"?1.3:1.2,Q=Y==="c"?1.3:.5;for(let[Z,it,et]of[["L12",0,ct.L3],["L3",ct.L3,ct.L4],["L4",ct.L4,ct.L5],["L5",ct.L5,ct.L6+1.3]])Y==="x"?i.box(Z,G.stoneD,L-K/2,it,H-Q/2,L+K/2,et,H+Q/2):Y==="z"?i.box(Z,G.stoneD,L-Q/2,it,H-K/2,L+Q/2,et,H+K/2):i.box(Z,G.stoneD,L-K/2,it,H-K/2,L+K/2,et,H+K/2)}Qu(i,"L3",Nt.x,Nt.z,ct.L3+1.05,ct.L3+.3,1.6,.28),Qu(i,"L4",Nt.x,Nt.z,ct.L4+.7,ct.L4-.05,1.5,.28);let o=1.15;for(let M of[-1,1])ze(i,"L6",G.wall,M*(Nt.z-.2),-Nt.x,Nt.x,ct.L6,ct.L6+o,.4),we(i,"L6",G.wall,M*(Nt.x-.2),-Nt.z+.4,Nt.z-.4,ct.L6,ct.L6+o,.4),i.box("L6",G.stoneD,-Nt.x-.15,ct.L6+o,M*(Nt.z-.2)-.35,Nt.x+.15,ct.L6+o+.16,M*(Nt.z-.2)+.35),i.box("L6",G.stoneD,M*(Nt.x-.2)-.35,ct.L6+o,-Nt.z-.15,M*(Nt.x-.2)+.35,ct.L6+o+.16,Nt.z+.15);let a=Nt.z,c=Nt.z+5.2,l=9.8;for(let M of[-6.6,-2.4,2.4,6.6])i.cyl("L12",G.col,M,c-.6,0,l,.45,12,0),i.box("L12",G.capi,M-.6,l-.5,c-1.2,M+.6,l,c),i.box("L12",G.stoneD,M-.6,0,c-1.2,M+.6,.45,c);i.box("L12",G.stone,-7.6,l,a,7.6,l+.9,c+.2),i.box("L12",G.stoneD,-7.9,l+.9,a,7.9,l+1.15,c+.5),i.box("L12",G.pave,-7.6,-.45,a,7.6,0,c);for(let M=0;M<3;M++)i.box("L12",G.stoneD,-8.2,-.45,c,8.2,-.1125*(M+1),c+.38*(M+1));let h=ct.L3,u=ct.L4-un,f=u-h,d=(M,I)=>{i.box("L3",G.col,M-.45,h,I-.45,M+.45,u-1,I+.45),i.box("L3",G.capi,M-.62,h,I-.62,M+.62,h+.45,I+.62),i.box("L3",G.capi,M-.62,u-1.5,I-.62,M+.62,u-1,I+.62)};for(let M=-Le.z;M<=Le.z+1e-6;M+=5)for(let I of[-1,1])d(I*Le.x,M);for(let M=-Le.x+5;M<=Le.x-5+1e-6;M+=5)for(let I of[-1,1])d(M,I*Le.z);for(let M of[-1,1])i.box("L3",G.capi,M*Le.x-.5,u-1,-Le.z-.5,M*Le.x+.5,u,Le.z+.5),i.box("L3",G.capi,-Le.x-.5,u-1,M*Le.z-.5,Le.x+.5,u,M*Le.z+.5);let g=3.4,_=M=>({c:M,w:1.7,y0:0,y1:g}),m=[-23.5,-9.5,-2.5,3.6,16,25],p=[-23.5,-15.5,-2.5,7,16,25];we(i,"L3",G.wallIn,ee.x,-ee.z,ee.z,h,u,Wt,[...m.map(_),{c:7.2,w:4,y0:0,y1:f}]),Vr("wA","L3").box("L3",G.wallIn,ee.x-Wt/2,h,5.2,ee.x+Wt/2,u,9.2),we(i,"L3",G.wallIn,-ee.x,-ee.z,ee.z,h,u,Wt,p.map(_)),ze(i,"L3",G.wallIn,-ee.z,-ee.x,ee.x,h,u,Wt,[_(-12),{c:0,w:9,y0:0,y1:4.6},_(13)]),ze(i,"L3",G.wallIn,ee.z,-ee.x,de.x,h,u,Wt,[_(-13.5),_(-4),{c:6,w:12,y0:0,y1:f}]),Vr("wCn","L3").box("L3",G.wallIn,0,h,ee.z-Wt/2,12,u,ee.z+Wt/2);for(let M of m)ii(i,"L3","z",ee.x,M,1.7,h,g,Wt);for(let M of p)ii(i,"L3","z",-ee.x,M,1.7,h,g,Wt);for(let M of[-12,13])ii(i,"L3","x",-ee.z,M,1.7,h,g,Wt);for(let M of[-13.5,-4])ii(i,"L3","x",ee.z,M,1.7,h,g,Wt);let b=[Ei[1].door[1],-23.5,-2.5,qe.z,16,Ye.z],y=[-23.5,-2.5,7,16];we(i,"L3",G.wallIn,de.x,-de.z,ee.z,h,u,Wt,b.filter(M=>M!==Ye.z).map(M=>({c:M,w:M===qe.z?1.8:1.7,y0:0,y1:g})));{let M=Vr("wBe","L3");we(M,"L3",G.wallIn,de.x,ee.z,de.z,h,u,Wt,[{c:Ye.z,w:Ye.w,y0:0,y1:g}]),ii(M,"L3","z",de.x,Ye.z,Ye.w,h,g,Wt)}we(i,"L3",G.wallIn,-de.x,-de.z,de.z,h,u,Wt,[...y.map(_),_(Ei[0].door[1]),_(Ei[2].door[1])]),ze(i,"L3",G.wallIn,-de.z,-de.x,de.x,h,u,Wt,[_(-12),_(12)]),ze(i,"L3",G.wallIn,de.z,-de.x,de.x,h,u,Wt,[_(-13.5),_(-4)]);for(let M of b.filter(I=>I!==Ye.z))ii(i,"L3","z",de.x,M,M===qe.z?1.8:1.7,h,g,Wt);for(let M of[...y,Ei[0].door[1],Ei[2].door[1]])ii(i,"L3","z",-de.x,M,1.7,h,g,Wt);for(let M of qu.slice(1,-1))for(let I of[-1,1])ze(i,"L3",G.wallIn,M,I>0?ee.x:-de.x,I>0?de.x:-ee.x,h,u,Wt);for(let M of[-1,1])ze(i,"L3",G.wallIn,-ee.z,M>0?ee.x:-de.x,M>0?de.x:-ee.x,h,u,Wt);ze(i,"L3",G.wallIn,ee.z,-de.x,-ee.x,h,u,Wt);for(let M of Yu)we(i,"L3",G.wallIn,M,-de.z,-ee.z,h,u,Wt);for(let M of Zu)M!==Ee.x&&we(i,"L3",G.wallIn,M,ee.z,de.z,h,u,Wt);we(i,"L3",G.wallIn,Ee.x,ee.z,de.z,h,u,Wt,[{c:Ee.z,w:Ee.w,y0:0,y1:3},{c:Be.z,w:Be.w,y0:Be.y0,y1:Be.y1},{c:33.95,w:2.6,y0:0,y1:Be.y0}]),Vr("wBC","L3").box("L3",G.wallIn,Ee.x-Wt/2,h,32.65,Ee.x+Wt/2,h+Be.y0,35.25),ii(i,"L3","z",Ee.x,Ee.z,Ee.w,h,3,Wt,G.woodD),we(i,"L3",G.wallIn,ue.x0-.15,ue.z0,ue.z1,h,u,Wt),we(i,"L3",G.wallIn,ue.x1+.15,ue.z0,ue.z1,h,u,Wt),ze(i,"L3",G.wallIn,ue.z1,ue.x0-.3,ue.x1+.3,h,u,Wt,[{c:0,w:2.4,y0:0,y1:2.8}]),i.box("L3:p",G.metal,-1.2,h,ue.z1-.08,1.2,h+2.8,ue.z1+.08);for(let M of Ei)ju(i,"L3",M,h,ct.L4,!1);for(let[M,I]of[["L4",ct.L4],["L5",ct.L5]]){let L=I+5-un,H=[];for(let Q=-Ge.z;Q<=Ge.z+1e-6;Q+=6)for(let Z of[-1,1])H.push([Z*Ge.x,Q]);for(let Q of[-3,3])for(let Z of[-1,1])H.push([Q,Z*Ge.z]);for(let[Q,Z]of H)i.box(M,G.col,Q-.35,I,Z-.35,Q+.35,L,Z+.35),i.box(M,G.capi,Q-.5,L-.4,Z-.5,Q+.5,L,Z+.5);i.rail(M,G.rail,[[-Ge.x,-Ge.z],[Ge.x,-Ge.z],[Ge.x,Ge.z],[-Ge.x,Ge.z],[-Ge.x,-Ge.z]].map(([Q,Z])=>[Q+Math.sign(Q)*.25,Z+Math.sign(Z)*.25]),I,1.1,.6,{w:.05,top:.1});let Y=(Q,Z)=>({c:Q,w:Z,y0:.9,y1:3.6}),K=Q=>({c:Q,w:1.6,y0:0,y1:3});ze(i,M,G.wallIn,-tn.z,-tn.x,tn.x,I,L,Wt,[Y(-9,4),K(-4),Y(0,3.2),K(4),Y(9,4)]),ze(i,M,G.wallIn,tn.z,-tn.x,tn.x,I,L,Wt,[Y(-9,4),K(-4),Y(0,3.2),K(4),Y(9,4)]);for(let Q of[-1,1])we(i,M,G.wallIn,Q*tn.x,-tn.z,tn.z,I,L,Wt,[Y(-15,6),K(-9),Y(-4,5),K(1),Y(6.5,6),K(12),Y(16.5,5)]);for(let Q of[-1,1]){for(let[Z,it]of[[-9,4],[0,3.2],[9,4]])Hr(i,M,"x",Q*tn.z,Z,it,I+.9,I+3.6,Wt,Q,{sill:!1});for(let[Z,it]of[[-15,6],[-4,5],[6.5,6],[16.5,5]])Hr(i,M,"z",Q*tn.x,Z,it,I+.9,I+3.6,Wt,Q,{sill:!1})}for(let Q of[-1,1]){for(let Z of[-26,-12,0,12,26])ze(i,M,G.wallIn,Z,Q>0?tn.x:-Nt.x+Pe,Q>0?Nt.x-Pe:-tn.x,I,L,Wt,[K(Q*16.5)]);for(let Z of[-7,7])we(i,M,G.wallIn,Z,Q>0?tn.z:-Nt.z+Pe,Q>0?Nt.z-Pe:-tn.z,I,L,Wt,[K(Q*22.5)])}we(i,M,G.wallIn,ue.x0-.15,ue.z0,ue.z1,I,L,Wt),we(i,M,G.wallIn,ue.x1+.15,ue.z0,ue.z1,I,L,Wt),ze(i,M,G.wallIn,ue.z1,ue.x0-.3,ue.x1+.3,I,L,Wt,[{c:0,w:2.4,y0:0,y1:2.8}]);for(let Q of Ei)ju(i,M,Q,I,I+5)}let x=ct.L6,S=ae.wallTop;i.slab("L6",G.floorH,Qi(ae.ap-.9),[Ja(ae.ocu+.7,48)],x,x+.03,{sides:!1,bottom:!1}),i.slab("L6",G.inlayD,Ja(ae.col+.9,48),[Ja(ae.col-.3,48)],x+.03,x+.045,{sides:!1,bottom:!1});let T=ae.ap-.45,R=2*T*Math.tan(Math.PI/8);for(let M=0;M<8;M++){let I=Math.PI/8+M*Math.PI/4,L=I+Math.PI/4,H=1/Math.cos(Math.PI/8),Y=[Math.cos(I)*T*H,Math.sin(I)*T*H],K=[Math.cos(L)*T*H,Math.sin(L)*T*H],Q=I+Math.PI/8,Z=Math.abs(Math.sin(Q)+1)<1e-6,it=Math.abs(Math.sin(Q)-1)<1e-6,et=Z?[{a:R/2-3.2,w:6.4,y0:0,y1:5.4}]:[-5.2,0,5.2].map(B=>({a:R/2+B-1.1,w:2.2,y0:1,y1:6.4}));it&&(et[1]={a:R/2-1.4,w:2.8,y0:0,y1:4.4});let W=i.wall("L6",G.wall,Y,K,x,S,.9,et);for(let B of et){if(B.y0===0)continue;let ot=W.at(B.a+B.w/2,0),lt=Math.atan2(W.uz,W.ux),ut=ot[0],vt=ot[2];i.ybox("L6:g",G.glass,ut,x+(B.y0+B.y1)/2,vt,B.w,B.y1-B.y0,.06,lt),i.ybox("L6",G.frame,ut,x+B.y1-.06,vt,B.w,.12,.22,lt),i.ybox("L6",G.frame,ut,x+B.y0+.06,vt,B.w,.12,.22,lt);for(let $t of[-1,1])i.ybox("L6",G.frame,ut+W.ux*$t*(B.w/2-.06),x+(B.y0+B.y1)/2,vt+W.uz*$t*(B.w/2-.06),.12,B.y1-B.y0,.22,lt);i.ybox("L6",G.frame,ut,x+(B.y0+B.y1)/2,vt,.08,B.y1-B.y0,.12,lt),i.ybox("L6",G.frame,ut,x+B.y0+(B.y1-B.y0)*.74,vt,B.w,.08,.12,lt)}}i.slab("L6",G.capi,Qi(ae.ap+.25),[Qi(ae.ap-1.1)],S-.4,S+.55);for(let M=0;M<8;M++){let I=Math.PI/8+M*Math.PI/4;i.cyl("L6",G.stoneD,Math.cos(I)*(Nl-.25),Math.sin(I)*(Nl-.25),x,S+.55,.95,8,Math.PI/8+I)}for(let M=0;M<8;M++){let I=Math.PI/8+M*Math.PI/4,L=Math.cos(I)*ae.col,H=Math.sin(I)*ae.col;i.cyl("L6",G.capi,L,H,x,x+.5,1.05,8,Math.PI/8),i.cyl("L6",G.col,L,H,x+.5,S-.7,.72,8,Math.PI/8),i.cyl("L6",G.capi,L,H,S-.7,S,1.05,8,Math.PI/8)}i.slab("roof",G.wallB,Qi(ae.ap-.9),[Qi(ae.col*Math.cos(Math.PI/8)-.2)],S,S+.5,{top:G.roof});let P=ae.col*Math.cos(Math.PI/8);for(let M=0;M<8;M++){let I=Math.PI/8+M*Math.PI/4,L=I+Math.PI/4,H=[Math.cos(I)*ae.col,Math.sin(I)*ae.col],Y=[Math.cos(L)*ae.col,Math.sin(L)*ae.col],K=Math.hypot(Y[0]-H[0],Y[1]-H[1]),Q=[-3.6,0,3.6].map(it=>({a:K/2+it-.8,w:1.6,y0:1.2,y1:3.6})),Z=i.wall("roof",G.wall,H,Y,S,ae.drumTop,.6,Q);for(let it of Q){let et=Z.at(it.a+it.w/2,0);i.ybox("roof:g",G.glass,et[0],S+2.4,et[2],it.w,2.4,.06,Math.atan2(Z.uz,Z.ux))}}i.slab("roof",G.capi,Qi(P+.8),[Qi(P-.7)],ae.drumTop-.5,ae.drumTop+.1),ux(i,"roof",G.roof,ae.ap+1.6,S+.2,P+.1,S+2.2,.45),i.frustum("roof",G.roof,0,0,ae.drumTop+.1,50,ae.col+1.9,0,8,Math.PI/8),i.frustum("roof",G.roofE,0,0,ae.drumTop-.3,ae.drumTop+.1,ae.col+1.95,ae.col+1.9,8,Math.PI/8),i.cyl("roof",G.brass,0,0,49.6,51.2,.5,8),i.frustum("roof",G.brass,0,0,51.2,53.4,.45,.05,8),i.cyl("roof",G.brass,0,0,50.6,51.1,.9,8);let E=-ae.ap+.2,v=ue.z1,C=x+6.2;we(i,"L6",G.wall,-6.3,v,E,x,C,.6,[{c:-26,w:2,y0:1,y1:4.6}]),we(i,"L6",G.wall,6.3,v,E,x,C,.6,[{c:-26,w:2,y0:1,y1:4.6}]);for(let M of[-1,1])Hr(i,"L6","z",M*6.3,-26,2,x+1,x+4.6,.6,M);ze(i,"L6",G.wall,v,-6.6,6.6,x,C,.6,[{c:0,w:2.4,y0:0,y1:2.8}]),i.box("L6:p",G.metal,-1.2,x,v-.05,1.2,x+2.8,v+.05),we(i,"L6",G.wall,ue.x0-.3,ue.z0,v,x,C+2.4,.6),we(i,"L6",G.wall,ue.x1+.3,ue.z0,v,x,C+2.4,.6),ze(i,"L6",G.wall,ue.z0+.3,ue.x0-.6,ue.x1+.6,x,C+2.4,.6),i.box("roof",G.stoneD,-6.9,C,v-.9,6.9,C+.6,E+.4),i.box("roof",G.roofE,-7.1,C+.6,v-1.1,7.1,C+.8,E+.5),i.box("L6",G.floorH,-6,x,v,6,x+.03,E),i.box("roof",G.stoneD,ue.x0-.7,C+2.4,ue.z0-.1,ue.x1+.7,C+2.8,v+.2);for(let M of[-1,1])for(let I of[-1,1]){let L=M>0?19:-Nt.x+.4,H=M>0?Nt.x-.4:-19,Y=I>0?29:-Nt.z+.4,K=I>0?Nt.z-.4:-29,Q=x+5.2,Z=I>0?Y:K;ze(i,"L6",G.stone,Z,L,H,x,Q,.5,[{c:(L+H)/2,w:1.8,y0:0,y1:3}]),ze(i,"L6",G.stone,I>0?K:Y,L,H,x,Q,.5,[{c:(L+H)/2,w:1.6,y0:1.4,y1:3.6}]),we(i,"L6",G.stone,L,Y,K,x,Q,.5,[{c:(Y+K)/2,w:1.6,y0:1.4,y1:3.6}]),we(i,"L6",G.stone,H,Y,K,x,Q,.5,[{c:(Y+K)/2,w:1.6,y0:1.4,y1:3.6}]),i.box("L6",G.stoneD,L-.3,Q,Y-.3,H+.3,Q+.35,K+.3);let it=(L+H)/2,et=(Y+K)/2,W=(H-L)/2+.9,B=(K-Y)/2+.9,ot=Q+.35,lt=ot+3.2,ut=1.2;if(i.plate("L6",G.roof,[[it-W,ot,et-B],[it+W,ot,et-B],[it+ut,lt,et],[it-ut,lt,et]],.3),i.plate("L6",G.roof,[[it+W,ot,et+B],[it-W,ot,et+B],[it-ut,lt,et],[it+ut,lt,et]],.3),i.plate("L6",G.roof,[[it+W,ot,et-B],[it+W,ot,et+B],[it+ut,lt,et],[it+ut,lt,et]],.3),i.plate("L6",G.roof,[[it-W,ot,et+B],[it-W,ot,et-B],[it-ut,lt,et],[it-ut,lt,et]],.3),i.box("L6",G.roofE,it-ut-.2,lt-.1,et-.2,it+ut+.2,lt+.25,et+.2),I<0){let vt=it+M*2.6,$t=et-2.2;i.cyl("L6",G.copper,vt,$t,Q,Q+9,.6,12),i.cyl("L6",G.metal,vt,$t,Q+9,Q+9.6,.8,12),i.cyl("L6",G.metal,vt,$t,Q+3,Q+3.4,.75,12)}}let U=en.x,O=en.z,k=en.y0,z=2;i.box("ug",G.ug,-U,k-1,-O,U,k,O,"b");for(let M of[-1,1])i.box("ug",G.ugD,-U-z,k-1,M>0?O:-O-z,U+z,-.45-.03,M>0?O+z:-O,"b"),i.box("ug",G.ugD,M>0?U:-U-z,k-1,-O,M>0?U+z:-U,-.45-.03,O,"b");for(let M of[-1,1])for(let I of[-1,1])i.box("ug",G.ug,M*26-2.5,k,I*26-2.5,M*26+2.5,en.y1,I*26+2.5),i.box("ug",G.ugD,M*26-3.2,k,I*26-3.2,M*26+3.2,k+1.2,I*26+3.2);for(let[M,I,L,H,Y]of[[-12,30,8,2,3],[16,34,6,2,2.4],[-34,-8,2,7,3],[36,6,2,8,2.6],[8,-36,9,2,2.4],[-20,-34,3,3,4]])i.box("ug",G.ugD,M-L/2,k,I-H/2,M+L/2,k+Y,I+H/2);return i.plate("ug",G.ugD,[[-8,k+9,-O+.1],[8,k+9,-O+.1],[8,k,-O+24],[-8,k,-O+24]],1),i}function ju(i,t,e,n,s,r=!0){let o=s-un,a=e.x1-e.x0,c=e.z1-e.z0,l=e.door[0],h=e.door[1];if(r){ze(i,t,G.wallIn,e.z0,e.x0,e.x1,n,o,Wt),ze(i,t,G.wallIn,e.z1,e.x0,e.x1,n,o,Wt);let y=Math.abs(l-e.x0)<.01;we(i,t,G.wallIn,e.x0,e.z0,e.z1,n,o,Wt,y?[{c:h,w:1.6,y0:0,y1:3}]:[]),we(i,t,G.wallIn,e.x1,e.z0,e.z1,n,o,Wt,y?[]:[{c:h,w:1.6,y0:0,y1:3}])}let u=s-n,f=.29,d=Math.floor((c-2.4)/f),g=u/2/d,_=(a-1)/2,m=e.x0+.4+_/2,p=e.x1-.4-_/2,b=e.z0+1.1;i.stairs(t+":p",G.stoneD,m,b,n,Math.PI/2,d,g,f,_),i.box(t+":p",G.stoneD,e.x0+.2,n+u/2-.25,b+d*f,e.x1-.2,n+u/2,e.z1-.2),i.stairs(t+":p",G.stoneD,p,b+d*f,n+u/2,-Math.PI/2,Math.max(1,d-1),g,f,_)}var zs=(i,t)=>{let e=new Vn;return ji[i]={g:t,k:e},e},le={sofa:"#8C7B6B",sofaD:"#6F6052",cloth:"#A85B4B",clothD:"#8E4B3E",table:"#8A7258",shelf:"#93795E",book:"#B7A58B",crate:"#B49C7B",crateD:"#9E8566",char:"#4A4440",charL:"#6A615A",ember:"#C9663A",leaf:"#8DA073",leafD:"#7A8E63",pot:"#B8AE9E",grass:"#9DAE84",grassD:"#90A378",bottle:"#5E7A62",bottle2:"#7A5E3E",lamp:"#FFE2A8"};function Bl(i,t,e,n,s,r,o=2.2){let a=Math.cos(r),c=Math.sin(r),l=(u,f)=>[e+a*u-c*f,n+c*u+a*f],h=l(0,0);i.ybox(t,le.sofa,h[0],s+.22,h[1],o,.44,.9,r),h=l(0,-.38),i.ybox(t,le.sofaD,h[0],s+.55,h[1],o,.62,.2,r);for(let u of[-1,1])h=l(u*(o/2-.1),0),i.ybox(t,le.sofaD,h[0],s+.36,h[1],.2,.3,.9,r)}function Ki(i,t,e,n,s,r,o,a=.74,c=0,l=le.table){i.ybox(t,l,e,s+a-.03,n,r,.06,o,c);let h=Math.cos(c),u=Math.sin(c);for(let[f,d]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let g=e+h*f*(r/2-.08)-u*d*(o/2-.08),_=n+u*f*(r/2-.08)+h*d*(o/2-.08);i.box(t,le.sofaD,g-.04,s,_-.04,g+.04,s+a-.06,_+.04)}}function $a(i,t,e,n,s,r){let o=Math.cos(r),a=Math.sin(r),c=(h,u)=>[e+o*h-a*u,n+a*h+o*u];i.ybox(t,le.cloth,e,s+.01,n,5,.02,4,r);let l=c(0,-1.3);Bl(i,t,l[0],l[1],s,r,2.6);for(let h of[-1,1])l=c(h*2,.2),Bl(i,t,l[0],l[1],s,r+h*Math.PI/2,.9);Ki(i,t,e+a*.1,n-o*.1,s,1.4,.8,.42,r)}function ks(i,t,e,n,s,r=1.6,o=.55){i.cyl(t,le.pot,e,n,s,s+.55,o*.75,8),i.frustum(t,le.leaf,e,n,s+.5,s+r*.62,o*1.15,o*.9,7,.3),i.frustum(t,le.leafD,e,n,s+r*.62,s+r,o*.9,.08,7,.7)}function fx(i,t,e,n,s,r=5.5,o=1.8){i.cyl(t,G.stoneD,e,n,s,s+.45,1.1,10),i.cyl(t,le.grassD,e,n,s+.45,s+.5,.95,10),i.cyl(t,G.woodD,e,n,s+.5,s+r*.55,.16,6),i.frustum(t,le.leaf,e,n,s+r*.38,s+r*.78,o,o*.78,9,.2),i.frustum(t,le.leafD,e,n,s+r*.78,s+r,o*.78,.25,9,.5)}function Gr(i,t,e,n,s,r,o=2.2,a=2.4){let c=Math.cos(r),l=Math.sin(r);i.ybox(t,le.shelf,e,s+a/2,n,o,a,.45,r);for(let h=1;h<4;h++)i.ybox(t,le.book,e,s+a*h/4-.18,n,o-.2,.3,.5,r)}function tf(i,t,e,n,s,r=0){i.ybox(t,le.crate,e,s+.55,n,1.2,1.1,1.1,r),i.ybox(t,le.crateD,e+.2,s+1.55,n,1,.9,1,r+.3),i.ybox(t,le.crateD,e+1.25,s+.4,n+.2,1.1,.8,1,r-.2),i.cyl(t,G.metal,e-1.1,n+.3,s,s+1,.38,10)}function dx(i,t,e,n,s,r=3.4){i.cyl(t,G.metal,e,n,s,s+.3,.28,8),i.cyl(t,G.metal,e,n,s+.3,s+r-.5,.08,6),i.box(t,G.metal,e-.26,s+r-.55,n-.26,e+.26,s+r-.48,n+.26),i.box(t.split(":")[0]+":e",le.lamp,e-.2,s+r-.48,n-.2,e+.2,s+r-.06,n+.2),i.frustum(t,G.metal,e,n,s+r-.06,s+r+.25,.34,.05,4,Math.PI/4)}function ef(i){let t=ct.L3+.06;Ju.forEach(([a,c,l,h],u)=>{i.box("L3:p",G.stoneD,a-.3,ct.L3,c-.3,l+.3,t+.22,h+.3),i.box("L3:p",u%2?le.grass:le.grassD,a,t+.22,c,l,t+.26,h);let f=c<0?c+2.4:h-2.4,d=a<0?[a+2.2,l-2.4]:[l-2.2,a+2.4];fx(i,"L3:p",d[0],f,t+.26,6,2),ks(i,"L3:p",d[1],f,t+.26,1.3,.6)}),i.slab("L3:p",G.inlay,[...Array(48)].map((a,c)=>[Math.cos(c/48*Math.PI*2)*6.3,Math.sin(c/48*Math.PI*2)*6.3]),[[...Array(48)].map((a,c)=>[Math.cos(c/48*Math.PI*2)*5.8,Math.sin(c/48*Math.PI*2)*5.8])],t,t+.02,{sides:!1,bottom:!1});for(let[a,c]of[[-4,-12],[4,-12],[-4,12],[4,12],[-11,0],[11,0]])dx(i,"L3:p",a,c,t);for(let[a,c,l]of[[-9,-6.5,0],[9,-6.5,0],[-9,6.5,Math.PI],[9,6.5,Math.PI]])i.ybox("L3:p",G.wood,a,t+.42,c,2.4,.08,.55,l),i.ybox("L3:p",G.stoneD,a-.9,t+.2,c,.3,.4,.5,l),i.ybox("L3:p",G.stoneD,a+.9,t+.2,c,.3,.4,.5,l);for(let a of[-22.5,-2.5,17.5])for(let c of[-1,1])ks(i,"L3:p",c*18.2,a,ct.L3+.05,1.5,.5);for(let a of[-16,16])for(let c of[-1,1])ks(i,"L3:p",a,c*28.2,ct.L3+.05,1.5,.5);for(let a of vn)px(zs("cab"+a.id.slice(1),"L3"),a.x,a.z,ct.L3+.05,a.yaw);let e=ct.L3+.02,n=[[-29,-18],[-18,-7],[-7,2],[12,20.5],[20.5,29]];for(let a of[-1,1])n.forEach(([c,l],h)=>{let u=a*(ee.x+de.x)/2,f=(c+l)/2;if(h%2===0)$a(i,"L3:p",u,f,e,a>0?-Math.PI/2:Math.PI/2);else{Ki(i,"L3:p",u,f,e,1.6,4,.76);for(let d of[-1.2,0,1.2])for(let g of[-1,1])i.box("L3:p",le.sofaD,u+g*1.2-.25,e,f+d-.25,u+g*1.2+.25,e+.48,f+d+.25)}Gr(i,"L3:p",a*(de.x-.45),f,e,a>0?Math.PI/2:-Math.PI/2,Math.min(3.4,l-c-3))});$a(i,"L3:p",-(ee.x+de.x)/2,7,e,Math.PI/2);for(let a of[3.2,5.6])Gr(i,"L3:p",de.x-.45,a,e,Math.PI/2,2.2);tf(i,"L3:p",23.2,11,e,.2),tf(i,"L3:p",20.4,2.9,e,-.4);for(let[a,c]of[[-19,-5],[5,19]]){let l=(a+c)/2;Ki(i,"L3:p",l,-32.2,e,8,1.6,.76);for(let h=-3;h<=3;h++)for(let u of[-1,1])i.box("L3:p",le.sofaD,l+h*1.1-.24,e,-32.2+u*1.2-.24,l+h*1.1+.24,e+.48,-32.2+u*1.2+.24)}$a(i,"L3:p",-13.5,32.2,e,0),Ki(i,"L3:p",-4,32.2,e,3,1.2,.9),Gr(i,"L3:p",-4,34.9,e,Math.PI,3.2),i.box("L3:p",G.woodD,8.6,e,31.6,11.2,e+1.08,34.4),i.box("L3:p",G.wood,8.45,e+1.08,31.45,11.35,e+1.16,34.55),Bl(i,"L3:p",3.4,34.4,e,Math.PI,2.6),Ki(i,"L3:p",3.4,33,e,1.3,.7,.44),Gr(i,"L3:p",10.6,35,e,Math.PI,2.6);let s=ct.L3,r=s+re.h;i.box("L3:p",G.stoneD,re.x0,s,re.z0,re.x1,r,re.z1),i.box("L3:p",G.floorW,re.x0,r,re.z0,re.x1,r+.05,re.z1),i.plate("L3:p",G.floorW,[[re.x1,r+.05,re.z0],[re.x1,r+.05,re.z1],[re.ramp,s+.05,re.z1],[re.ramp,s+.05,re.z0]],re.h),i.rail("L3:p",G.rail,[[re.x1-.1,re.z1-.1],[re.x0+.6,re.z1-.1]],r+.05,1,.7,{w:.05,top:.08}),mx(zs("beam","L3")),i.plate("L3:p",le.charL,[[14.4,s+3.9,32.7],[18.6,s+3.9,32.7],[19.2,s+.1,35.2],[14.4,s+.1,35.2]],.35);for(let[a,c,l]of[[15.4,34.5,6],[20.2,34.3,5],[12.9,34.6,3]])for(let h=0;h<l;h++){let u=h*2.3+a,f=h%3*.5;i.ybox("L3:p",h%2?le.char:le.charL,a+Math.cos(u)*f,s+.25+h%2*.3,c+Math.sin(u)*f*.5,1.4-h%3*.3,.5,.35+h%2*.3,u)}i.ybox("L3:p",le.char,18.2,s+.2,33.4,3.6,.35,.4,.5);{let a=zs("obst","L3");for(let c=0;c<5;c++)a.box("L3",le.crateD,Ee.x-.3,s+.3+c*.55,Ee.z-Ee.w/2-.15,Ee.x-.18,s+.72+c*.55,Ee.z+Ee.w/2+.15);a.box("L3",le.crate,Ee.x-.55,s,Ee.z-.7,Ee.x-.3,s+1.2,Ee.z+.7)}for(let a=0;a<7;a++)i.ybox("L3:p",a%2?le.charL:G.stoneD,26.2+a%3*.8,s+.3+a%2*.5,34.4+a%4*.7,1.6,.6+a%2*.4,.9,a*1.3);i.plate("L3:p",G.slabE,[[25.7,s+5.5,33.9],[28.3,s+5.5,33.9],[28.3,s+.2,36.8],[25.7,s+.2,36.8]],.4);for(let[a,c]of[["L4",ct.L4],["L5",ct.L5]]){for(let l of[-12,0,12])for(let h of[-1,1])a==="L5"&&h>0&&l===0||i.box(a+":p",G.wood,h*12.6-.3,c,l-1.1,h*12.6+.3,c+.45,l+1.1);for(let l of[-10.5,10.5])for(let h of[-1,1])ks(i,a+":p",l,h*18.4,c,1.4,.5);for(let l of[-1,1])for(let h of[-20,-6,6,20])Ki(i,a+":p",l*21.5,h,c,1.6,.8,.76,Math.PI/2),Ki(i,a+":p",l*24.5,h,c,1.6,.8,.76,Math.PI/2)}let o=ct.L6+.03;gx(zs("ocu","L6")),xx(zs("chand","L6"),zs("chain","L6"));for(let a of[Math.PI/4,Math.PI*3/4,Math.PI*5/4+.05])$a(i,"L6:p",Math.cos(a)*17,Math.sin(a)*17,o,a+Math.PI/2);for(let a=0;a<8;a++){let c=a*Math.PI/4;Math.abs(Math.sin(c)+1)<1e-6||ks(i,"L6:p",Math.cos(c)*18.6,Math.sin(c)*18.6,o,1.8,.6)}{let a=-Math.PI*3/4+.2,c=Math.cos(a),l=Math.sin(a);i.ybox("L6:p",G.woodD,c*17.3,o+.55,l*17.3,5.5,1.1,1,a+Math.PI/2),i.ybox("L6:p",G.wood,c*17.3,o+1.12,l*17.3,5.8,.08,1.2,a+Math.PI/2),Gr(i,"L6:p",c*18.7,l*18.7,o,a+Math.PI/2,4.4,2.4)}for(let a of[-1,1])i.box("L6:p",G.wood,a*5.3-.3,o,-28.5,a*5.3+.3,o+.45,-24),ks(i,"L6:p",a*4.8,-21.8,o,1.6,.55);for(let a of[-1,1]){for(let c of[-14,-2,10])i.box("L6:p",G.stoneD,a*27.4-.7,ct.L6,c-2.5,a*27.4+.7,ct.L6+.7,c+2.5);for(let c of[-14,-2,10])for(let l of[-1.6,0,1.6])i.frustum("L6:p",le.leaf,a*27.4,c+l,ct.L6+.7,ct.L6+1.5,.7,.3,6,.3)}for(let a of[-12,12]){i.cyl("L6:p",G.copper,a,-33,ct.L6+1,ct.L6+4.4,1.5,14),i.frustum("L6:p",G.copper,a,-33,ct.L6+4.4,ct.L6+5.2,1.5,.4,14);for(let[c,l]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.box("L6:p",G.metal,a+c*1-.1,ct.L6,-33+l*1-.1,a+c*1+.1,ct.L6+1,-33+l*1+.1);i.beam("L6:p",G.metal,[a,ct.L6+2.6,-31.5],[a*.6,ct.L6+2.6,-31.5],.22)}}function px(i,t,e,n,s){let r=Math.cos(s),o=Math.sin(s),a=(l,h)=>[t+r*l-o*h,e+o*l+r*h],c=a(0,.3);i.ybox("L3",G.woodD,c[0],n+1.25,c[1],2.6,2.5,.6,s),c=a(0,.62),i.ybox("L3:g","#8FA39B",c[0],n+1.45,c[1],2.3,1.8,.04,s);for(let l=0;l<3;l++)for(let h=0;h<7;h++)c=a(-1+h*.33,.45),i.cyl("L3",h%3?le.bottle:le.bottle2,c[0],c[1],n+.75+l*.6,n+1.15+l*.6,.07,6);c=a(0,.32),i.ybox("L3",G.wood,c[0],n+2.55,c[1],2.8,.12,.7,s)}function mx(i){let t=ct.L3,e=[re.x0+.6,t+re.h+.2,30.6],n=[Be.x+.5,t+Be.y0+.1,Be.z];i.beam("L3","#8A6F55",e,n,.38,.32),i.box("L3",G.metal,e[0]-.1,e[1]-.25,e[2]-.25,e[0]+.1,e[1]+.25,e[2]+.25)}function gx(i){let t=ct.L6,e=ae.ocu,n=(s,r,o,a,c)=>i.slab("L6",c,[...Array(48)].map((l,h)=>[Math.cos(h/48*Math.PI*2)*r,Math.sin(h/48*Math.PI*2)*r]),[[...Array(48)].map((l,h)=>[Math.cos(h/48*Math.PI*2)*s,Math.sin(h/48*Math.PI*2)*s])],o,a);n(e-.15,e+.7,t-.1,t+.06,G.brass),n(2.6,2.95,t-.16,t-.02,G.brass),i.cyl("L6:g","#9DB4B6",0,0,t-.16,t-.1,e,32);for(let s=0;s<8;s++){let r=s*Math.PI/4;i.beam("L6",G.brass,[Math.cos(r)*.6,t-.09,Math.sin(r)*.6],[Math.cos(r)*(e-.1),t-.09,Math.sin(r)*(e-.1)],.16,.14)}i.cyl("L6",G.brass,0,0,t-.2,t+.02,.7,12)}function xx(i,t){let e=ae.drumTop-.2,n=35.4,s="L6:u";t.cyl(s,G.metal,0,0,n+2.4,e,.07,6);for(let o=0;o<3;o++)t.cyl(s,G.metal,0,0,e-.5-o*2,e-.3-o*2,.14,6);i.cyl(s,G.brass,0,0,n+.8,n+2.4,.32,8),i.frustum(s,G.brass,0,0,n-.6,n+.8,.1,.32,8);let r=[[3.2,n+.2],[2.3,n+1.1],[1.35,n+1.9]];for(let[o,a]of r){let c=Math.round(o*7);i.slab(s,G.brass,[...Array(32)].map((l,h)=>[Math.cos(h/32*Math.PI*2)*o,Math.sin(h/32*Math.PI*2)*o]),[[...Array(32)].map((l,h)=>[Math.cos(h/32*Math.PI*2)*(o-.16),Math.sin(h/32*Math.PI*2)*(o-.16)])],a-.08,a+.04);for(let l=0;l<c;l++){let h=l/c*Math.PI*2,u=Math.cos(h)*o,f=Math.sin(h)*o;i.cyl(s,"#EFE6D3",u,f,a+.04,a+.3,.05,5),i.box("L6:e",le.lamp,u-.07,a+.3,f-.07,u+.07,a+.48,f+.07)}for(let l=0;l<6;l++){let h=l*Math.PI/3+.3;i.beam(s,G.brass,[Math.cos(h)*.3,n+1.6,Math.sin(h)*.3],[Math.cos(h)*o,a,Math.sin(h)*o],.06)}}}var Dt=100,si={x0:-Dt,x1:Dt,z0:-Dt,z1:Dt,base:-.45-6},Te={street:"#B1ADA5",walk:"#D6D0C5",curb:"#C2BBAF",plot:"#D8D1C3",plotLine:"#C8BFAF",yard:"#CFC8BA",wall:["#F1EDE6","#ECE7DF","#EFEAE2","#E8E2D8"],plinth:"#D9D2C6",eave:"#CBC4B8",roof:["#BDB8AF","#C4BFB6","#B6B2AA","#C8C2B8"],ridge:"#A9A399",soil:"#8F806C",soil2:"#A89A86",frame:"#4B4741",square:"#DCD5C8",water:"#94AAAC",grass:"#AEB795",chim:"#A08068"};function _x(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function nf(i,t,e,n,s,r,o,a,c={}){let l=-.45+.17,h=o*3.4,u=l+h,f=Te.wall[Math.floor(a()*Te.wall.length)],d=Te.roof[Math.floor(a()*Te.roof.length)],g=(U,O,k,z,M,I,L,H)=>t==="x"?i.box("ctx",L,U,O,k,z,M,I,H):i.box("ctx",L,k,O,U,I,M,z,H),_=(U,O,k)=>t==="x"?[U,O,k]:[k,O,U];if(g(e,l,s,n,l+.5,r,Te.plinth,"b"),g(e+.04,l+.5,s+.04,n-.04,u,r-.04,f,"b"),g(e-.12,u-.25,s-.12,n+.12,u,r+.12,Te.eave),c.flat){if(g(e,u,s,n,u+.6,r,Te.plinth),c.chim){let U=e+(n-e)*.7,O=(s+r)/2;i.cyl("ctx",Te.chim,t==="x"?U:O,t==="x"?O:U,u+.6,u+6.5,.55,8)}return u+.6}let m=.45,p=r-s,b=p*.24,y=(s+r)/2,x=u+b,S=e-m,T=n+m,R=s-m,P=r+m,E=u-m*.58;i.plate("ctx",d,[_(S,E,R),_(T,E,R),_(T,x,y),_(S,x,y)],.22),i.plate("ctx",d,[_(T,E,P),_(S,E,P),_(S,x,y),_(T,x,y)],.22);let v=[_(e+.04,u,s+.04),_(e+.04,u,r-.04),_(e+.04,x-.1,y)],C=[_(n-.04,u,r-.04),_(n-.04,u,s+.04),_(n-.04,x-.1,y)];return t==="x"?(i.tri("ctx",f,...v),i.tri("ctx",f,...C)):(i.tri("ctx",f,v[1],v[0],v[2]),i.tri("ctx",f,C[1],C[0],C[2])),g(S,x-.05,y-.16,T,x+.16,y+.16,Te.ridge),x}function yx(i,t,e,n,s,r,o,a={}){var T;i.box("ctx",Te.curb,t,-.45,e,n,-.45+.15,s,"b"),i.box("ctx",Te.walk,t+.25,-.45+.15,e+.25,n-.25,-.45+.17,s-.25,"b");let c=1.8,l=t+c,h=n-c,u=e+c,f=s-c,d=h-l,g=f-u,_=(T=a.floors)!=null?T:2,m=Math.min(9,Math.min(d,g)/2-2.5);if(m<7){let R=d>=g?"x":"z",P=R==="x"?l:u,E=R==="x"?h:f,v=R==="x"?u:l,C=R==="x"?f:h,U=P;for(;U<E-4;){let O=8+r()*9;E-(U+O)<6&&(O=E-U),nf(i,R,U,U+O-.3,v,C,_+(r()<.35?1:0),r),U+=O}return}let p=[["x",l,h,u,u+m],["x",l,h,f-m,f],["z",u+m,f-m,l,l+m],["z",u+m,f-m,h-m,h]];for(let[R,[P,E,v,C,U]]of p.entries()){let O=E,k=!0;for(;O<v-3;){let z=7+r()*10;v-(O+z)<6&&(z=v-O);let M=R<2&&(k||O+z>=v-.01);if(!M&&r()<.16&&v-O>14){O+=3;continue}let I=_+(M?1:0)+(r()<.25?1:0)-(r()<.15&&!M?1:0),L=M?0:r()*.8,H=!M&&r()<.1,Y=C+(C===u||C===l?L:0),K=U-(U===f||U===h?L:0);nf(i,P,O,O+z-.25,Y,K,Math.max(1,I),r,{flat:H,chim:H&&r()<.7}),O+=z,k=!1}}let b=l+m,y=h-m,x=u+m,S=f-m;if(y-b>2&&S-x>2){i.box("ctx",Te.yard,b,-.45+.17,x,y,-.45+.19,S,"b");let R=Math.max(1,Math.round((y-b)*(S-x)/120));for(let P=0;P<R;P++)o.push([b+2.5+r()*Math.max(0,y-b-5),x+2.5+r()*Math.max(0,S-x-5),.85+r()*.35])}}function sf(i){let t=[];i.quad("ground",Te.street,[-Dt,-.45,Dt],[Dt,-.45,Dt],[Dt,-.45,-Dt],[-Dt,-.45,-Dt]);let e=[[[-Dt,Dt],[Dt,Dt]],[[Dt,Dt],[Dt,-Dt]],[[Dt,-Dt],[-Dt,-Dt]],[[-Dt,-Dt],[-Dt,Dt]]];for(let[o,a]of e)i.quad("base",Te.soil,[o[0],-.45-1.2,o[1]],[a[0],-.45-1.2,a[1]],[a[0],-.45,a[1]],[o[0],-.45,o[1]]),i.quad("base",Te.soil2,[o[0],si.base,o[1]],[a[0],si.base,a[1]],[a[0],-.45-1.2,a[1]],[o[0],-.45-1.2,o[1]]);i.box("base",Te.frame,-Dt-1.2,si.base-1.6,-Dt-1.2,Dt+1.2,si.base,Dt+1.2,"t"),i.box("ground",Te.plot,-rn.x,-.45,-rn.z,rn.x,-.45+.03,rn.z,"b");for(let o=-rn.x+6;o<rn.x;o+=6)i.box("ground",Te.plotLine,o-.06,-.45+.03,-rn.z,o+.06,-.45+.04,rn.z,"b");let n=(o,a,c,l)=>{let h=Math.hypot(c-o,l-a),u=Math.floor(h/6);for(let f=0;f<u;f++){let d=(f+.25)/u,g=(f+.6)/u,_=o+(c-o)*d,m=a+(l-a)*d,p=o+(c-o)*g,b=a+(l-a)*g;i.box("ground","#E9E6DF",Math.min(_,p)-.1,-.45,Math.min(m,b)-.1,Math.max(_,p)+.1,-.45+.02,Math.max(m,b)+.1,"b")}};n(-43,-Dt,-43,Dt),n(43,-Dt,43,Dt),n(-Dt,-52,Dt,-52),n(-Dt,52,Dt,52);let s=_x(11),r=[[-Dt,-Dt,-62,-58,{}],[-54,-Dt,-8,-58,{}],[0,-Dt,34,-58,{floors:2}],[42,-Dt,Dt,-58,{}],[-Dt,-50,-50,-10,{}],[-Dt,-2,-50,50,{}],[50,-50,Dt,-18,{}],[50,-10,Dt,50,{}],[-Dt,58,-64,Dt,{}],[-56,58,-30,Dt,{}],[30,58,58,Dt,{}],[66,58,Dt,Dt,{}]];for(let[o,a,c,l,h]of r)yx(i,o,a,c,l,s,t,h);vx(i,-30,58,30,Dt,t);for(let o=-rn.x+3;o<=rn.x-3;o+=7.5)for(let a of[-1,1])a>0&&Math.abs(o)<10||t.push([o,a*(rn.z-2),1]);for(let o=-rn.z+4;o<=rn.z-4;o+=7.5)for(let a of[-1,1])t.push([a*(rn.x-2),o,1]);for(let o=-48;o<=48;o+=12)for(let a of[-48.6,48.6])t.push([a,o,.95]);for(let o=-46;o<=46;o+=12)Math.abs(o)>4&&t.push([o,-56.6,.95]);return{trees:t,near:o=>Math.abs(o[0])<en.x+3&&Math.abs(o[1])<en.z+3}}function vx(i,t,e,n,s,r){i.box("ctx",Te.curb,t,-.45,e,n,-.45+.15,s,"b"),i.box("ctx",Te.square,t+.25,-.45+.15,e+.25,n-.25,-.45+.18,s-.25,"b");let o=(t+n)/2,a=(e+s)/2-2;i.cyl("ctx",Te.curb,o,a,-.45+.18,-.45+.7,6.5,24),i.cyl("ctx",Te.water,o,a,-.45+.7,-.45+.73,5.9,24),i.cyl("ctx",Te.curb,o,a,-.45+.73,-.45+2.1,.7,10);for(let c=t+5;c<=n-5;c+=7.5)for(let l of[e+5,s-5])Math.abs(c-o)>9&&r.push([c,l,1.05]);for(let[c,l]of[[t+4,o-10],[o+10,n-4]])i.box("ctx",Te.grass,c,-.45+.18,a-4,l,-.45+.24,a+4,"b")}var Qa=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new N},this.goal={th:0,ph:.9,r:500,t:new N},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,c;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(c=t.r)!=null?c:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Ct((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new Lr;o.setFromCamera(r,this.cam);let a=new N;return o.ray.intersectPlane(new Fe(new N(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),c=-Math.sin(o),l=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*l*Math.min(u,2.2))*r,n.t.z+=(-t*c+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,c]=[...this.ptrs.values()],l=(a.x+c.x)/2,h=(a.y+c.y)/2,u=Math.hypot(a.x-c.x,a.y-c.y),f=Math.atan2(c.y-a.y,c.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let d=f-this._pinch.a;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotate(d,0)}this._pinch={d:u,mx:l,my:h,a:f};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var Ol=["L12","L3","L4","L5","L6","roof","ug","ground","base","ctx"],Ti=["L12","L3","L4","L5","L6","roof"],Mx={L12:0,L3:ct.L3,L4:ct.L4,L5:ct.L5,L6:ct.L6,roof:38},Hs={ov:{t:[2,15,4],r:225,ph:.98,th:.72},ext:{t:[0,17,8],r:235,ph:1.12,th:.5},ug:{t:[0,-18,0],r:250,ph:.82,th:.62}},bx=[.29,.27,.25];function ja(i){return i.side=je,i.clipShadows=!0,i.clipIntersection=!0,i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) gl_FragColor = vec4(${bx.map(e=>e.toFixed(3)).join(",")}, 1.0);`)},i.customProgramCacheKey=()=>"cap",i}function zl(i){let t=new ke;return t.setAttribute("position",new Ne(i.p,3)),t.setAttribute("normal",new Ne(i.n,3)),t.setAttribute("color",new Ne(i.c,3)),t.computeBoundingSphere(),t}function Sx(){let i=(c,l)=>{let h=c.attributes.position.count,u=new Float32Array(h*3);for(let f=0;f<h;f++)u.set(l,f*3);return c.setAttribute("color",new Ne(u,3)),c},t=(c,l,h,u)=>{let f=Wu(new Kn(c,1).deleteAttribute("normal").deleteAttribute("uv"));return f.computeVertexNormals(),f.translate(l,h,u).toNonIndexed()},e=[t(1.25,0,3.7,0),t(.95,.85,3.2,.35),t(.9,-.7,3.35,-.55),t(.8,.1,4.5,-.25)],n=new ke;for(let c of["position","normal"]){let l=e.reduce((f,d)=>f+d.attributes[c].array.length,0),h=new Float32Array(l),u=0;for(let f of e)h.set(f.attributes[c].array,u),u+=f.attributes[c].array.length;n.setAttribute(c,new Ne(h,3))}let s=new zn(.16,.24,2.7,5,1,!0).translate(0,1.35,0).deleteAttribute("uv"),r=new Kt("#7A6A58"),o=[i(n,[1,1,1]),i(s.toNonIndexed(),[r.r,r.g,r.b])],a=new ke;for(let c of["position","normal","color"]){let l=o.reduce((f,d)=>f+d.attributes[c].array.length,0),h=new Float32Array(l),u=0;for(let f of o)h.set(f.attributes[c].array,u),u+=f.attributes[c].array.length;a.setAttribute(c,new Ne(h,3))}return a}function Ex(i={}){let t=new Vn;for(let m of Object.keys(ji))delete ji[m];let e=sf(t);Ku(t),ef(t);let n=t.out(),s=new oe,r={};for(let m of Ol)r[m]=new oe,r[m].name=m,s.add(r[m]);let o=new Fe(new N(-1,0,0),0),a=new Fe(new N(0,0,-1),0),c={},l={},h={},u=m=>new hn({vertexColors:!0,roughness:.9,metalness:0,...m});for(let m of Ti.concat("ug"))c[m]=new Fe(new N(0,-1,0),1e5),l[m]=new Fe(new N(0,-1,0),1e5),h[m]=ja(u({})),h[m].clippingPlanes=[o,a,c[m]],h[m+":g"]=ja(u({roughness:.3,metalness:.15})),h[m+":g"].clippingPlanes=[o,a,c[m]],h[m+":p"]=ja(u({})),h[m+":p"].clippingPlanes=[o,a,l[m]],h[m+":e"]=new Se({vertexColors:!0,toneMapped:!1,clippingPlanes:[o,a,l[m]],clipIntersection:!0}),h[m+":u"]=u({});let f=[new Fe(new N(-1,0,0),1e5),new Fe(new N(1,0,0),1e5),new Fe(new N(0,0,-1),1e5),new Fe(new N(0,0,1),1e5)];h.ground=ja(u({roughness:.95})),h.ground.clippingPlanes=f,h.base=u({roughness:1}),h.ctx=u({});let d=[],g=(m,p,b)=>{let y=m.split(":")[0],x=h[m]||h[y];if(!x)return null;let S=new Xt(zl(p),x),T=m.endsWith(":e");return S.castShadow=!T&&y!=="ground"&&y!=="base",S.receiveShadow=!T,(b||r[y]).add(S),d.push(S),S};for(let[m,p]of Object.entries(n))g(m,p);let _={};for(let[m,{g:p,k:b}]of Object.entries(ji)){let y=new oe,x=new oe;x.name=m,x.add(y),r[p].add(x);for(let[R,P]of Object.entries(b.out()))g(R,P,y);let S=new En().setFromObject(y),T=S.getCenter(new N);y.position.copy(T).negate(),x.position.copy(T),x.userData={center:T.clone(),box:S,home:T.clone(),group:p},_[m]=x}if(i.trees!==!1){let m=Sx(),p=new hn({vertexColors:!0,roughness:.95}),b=S=>{if(!S.length)return null;let T=new pr(m,p,S.length),R=new ge,P=new xn,E=new N,v=new N,C=new Kt,U=new N(0,1,0),O=new Kt("#82966B"),k=new Kt("#A2AD80");return S.forEach(([z,M,I],L)=>{let H=Math.sin(z*12.9898+M*78.233)*43758.5453,Y=H-Math.floor(H);P.setFromAxisAngle(U,Y*6.28),E.set(I*(.9+Y*.2),I*(.95+Y*.2),I*(.9+Y*.2)),v.set(z,-.45+.15,M),R.compose(v,P,E),T.setMatrixAt(L,R),C.copy(O).lerp(k,Y),T.setColorAt(L,C)}),T.castShadow=!0,T.receiveShadow=!0,T.frustumCulled=!1,T},y=b(e.trees.filter(e.near)),x=b(e.trees.filter(S=>!e.near(S)));y&&(y.name="treesNear",r.ctx.add(y)),x&&r.ctx.add(x),r.treesNear=y}return{root:s,groups:r,parts:_,M:h,planes:{px:o,pz:a,pyS:c,pyP:l,gb:f},meshes:d}}function rf(i,t={}){var et,W;let e=(et=t.mobile)!=null?et:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Ya({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=$o,n.shadowMap.autoUpdate=!1,n.toneMapping=sa,n.toneMappingExposure=(W=t.exposure)!=null?W:1,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new fr,r=new $e(30,1,1,4e3),o=Ex(t);s.add(o.root),s.add(new Cr("#EEF2F5","#B5AB9A",1.3));let a=new Pr("#FFF2DF",2.6),c=new N(-.5,.78,.38).normalize(),l=new N(0,10,0);a.position.copy(l).addScaledVector(c,400),a.target.position.copy(l),s.add(a,a.target),a.castShadow=!0;let h=e?2048:4096;a.shadow.mapSize.set(h,h),a.shadow.bias=-3e-4,a.shadow.normalBias=.04,a.shadow.radius=2;let u=B=>{let ot=a.shadow.camera,lt=new ge().lookAt(a.position,a.target.position,new N(0,1,0)).setPosition(a.position).invert(),ut=1e9,vt=-1e9,$t=1e9,F=-1e9,se=1e9,Ht=-1e9,Ft=new N;for(let wt of[B.x0,B.x1])for(let ye of[B.y0,B.y1])for(let Tt of[B.z0,B.z1])Ft.set(wt,ye,Tt).applyMatrix4(lt),ut=Math.min(ut,Ft.x),vt=Math.max(vt,Ft.x),$t=Math.min($t,Ft.y),F=Math.max(F,Ft.y),se=Math.min(se,Ft.z),Ht=Math.max(Ht,Ft.z);Object.assign(ot,{left:ut,right:vt,bottom:$t,top:F,near:-Ht-5,far:-se+5}),ot.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},f=t.shadowBox||{x0:si.x0,x1:si.x1,z0:si.z0,z1:si.z1,y0:en.y0,y1:54};u(f);let d=!0,g=!0,_=!0,m=performance.now(),p=[],b=[],y=new Qa(r,n.domElement,{minR:8,maxR:900,minPhi:.1,maxPhi:1.42,bounds:{x0:-110,x1:110,z0:-110,z1:110},onChange:()=>{d=!0},onStart:()=>{for(let B of p)B()},onWheelHint:()=>{for(let B of b)B()},...t.controls||{}}),x=(B,ot)=>{var vt;let lt=typeof B=="string"?Hs[B]:B,ut={th:lt.th,ph:lt.ph,r:lt.r,t:new N(...lt.t)};ot?y.set(ut,!0):y.flyTo(ut,(vt=lt.dur)!=null?vt:1.3)};x(t.view||"ov",!0);let S=o.planes,T=o.groups,R=1e5,P=null;function E(B){var vt,$t;B=typeof B=="string"?{kind:B}:B;let ot=JSON.stringify(B);if(ot===P)return;P=ot;let lt=B.kind,ut=B.floor;S.px.constant=R,S.pz.constant=R;for(let F of Ti)S.pyS[F].constant=R,S.pyP[F].constant=R,T[F].visible=!0;for(let F of S.gb)F.constant=R;if(T.ug.visible=!1,T.treesNear&&(T.treesNear.visible=!0),lt==="ov"){S.px.constant=0,S.pz.constant=0;for(let F of["L4","L5","L6","roof"])S.pyS[F].constant=ct.L4-1,S.pyP[F].constant=ct.L4-1;S.pyS.L3.constant=ct.L3+((vt=B.cut)!=null?vt:3.4)}else if(lt==="plan"){S.px.constant=-R,S.pz.constant=-R;let F=Ti.indexOf(ut);Ti.forEach((se,Ht)=>{Ht>F&&(T[se].visible=!1)}),B.cut!=null&&(S.pyS[ut].constant=Mx[ut]+B.cut),B.keepRoof&&ut==="L6"&&(T.roof.visible=!0)}else if(lt==="sec"){S.px.constant=-R,S.pz.constant=($t=B.z)!=null?$t:0;for(let F of Ti)S.pyS[F].constant=-R,S.pyP[F].constant=-R;B.top&&Ti.forEach((F,se)=>{se>Ti.indexOf(B.top)&&(T[F].visible=!1)})}else if(lt==="ug"){for(let F of Ti)T[F].visible=!1;T.ug.visible=!0,T.treesNear&&(T.treesNear.visible=!1),S.gb[0].constant=-en.x,S.gb[1].constant=-en.x,S.gb[2].constant=-en.z,S.gb[3].constant=-en.z,S.px.constant=-R,S.pz.constant=-R}n.shadowMap.needsUpdate=!0,d=!0}E(t.mode||"ov");let v={x:.5,y:.5,tx:.5,ty:.5},C=()=>{let B=i.clientWidth||800,ot=i.clientHeight||500;Math.abs(v.x-.5)<1e-4&&Math.abs(v.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(B,ot,(.5-v.x)*B,(.5-v.y)*ot,B,ot)},U=B=>{if(v.x===v.tx&&v.y===v.ty)return!1;let ot=1-Math.exp(-B*5);return v.x+=(v.tx-v.x)*ot,v.y+=(v.ty-v.y)*ot,Math.abs(v.tx-v.x)+Math.abs(v.ty-v.y)<.001&&(v.x=v.tx,v.y=v.ty),C(),!0},O=()=>{let B=i.clientWidth||800,ot=i.clientHeight||500;n.setSize(B,ot,!1),r.aspect=B/ot,r.updateProjectionMatrix(),C(),d=!0},k=new ResizeObserver(O);k.observe(i),O();let z=new IntersectionObserver(B=>{g=B[0].isIntersecting,g&&(d=!0)});z.observe(i);let M=[],I=[],L=[],H=()=>{for(let B of L)B(r);n.render(s,r);for(let B of M)B(r)},Y=0,K=!1,Q=0,Z=B=>{if(!_||(requestAnimationFrame(Z),K))return;let ot=Math.max(0,Math.min(.05,(B-m)/1e3));if(m=B,!g||document.hidden)return;let lt=it.animating||B<it.animUntil,ut=!lt&&it.ambient&&B-Y>50;if(lt||ut){for(let F of I)F(ot,B/1e3);ut&&(Y=B)}let vt=y.update(ot),$t=U(ot);(d||vt||$t||lt||ut)&&(H(),d=!1)};requestAnimationFrame(Z);let it={renderer:n,scene:s,camera:r,controls:y,world:o,parts:o.parts,setView:x,VIEWS:Hs,setMode:E,mode:()=>JSON.parse(P),animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{d=!0},setCenter:(B,ot,lt)=>{v.tx=B,v.ty=ot,lt&&(v.x=B,v.y=ot,C(),d=!0)},hold:B=>{K=B,B?(Q=performance.now()/1e3,y.now=()=>Q*1e3):y.now=()=>performance.now()},step:B=>{Q+=B;for(let ot of I)ot(B,Q);y.update(B),H()},setShadowBox:B=>{u(B||f),d=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,d=!0},renderNow:()=>{y.update(1),H()},onRender:B=>M.push(B),onBeforeRender:B=>L.push(B),onFrame:B=>I.push(B),onUserStart:B=>p.push(B),onWheelHint:B=>b.push(B),dispose:()=>{_=!1,k.disconnect(),z.disconnect(),n.dispose(),n.domElement.remove()}};return it}var Ot=ct.L6+.05,ri=ct.L5+.05,Ai=ct.L4+.05,$=ct.L3+.07,oi=en.y0+.05,kl=ct.L3+re.h+.07,wx={kind:"plan",floor:"L6",cut:3.6},Tx={kind:"sec",z:-1},of={kind:"plan",floor:"L3",cut:5},Ax={kind:"plan",floor:"L3",cut:3.2},Rx={kind:"ug"},Ri=[{b:[0,1,2,3],mode:wx,cam:{t:[0,31,-3],r:84,ph:.8,th:.55},at:[0,Ot,-13]},{b:[4,5,6],mode:Tx,cam:{t:[5,21,-4],r:92,ph:1.14,th:.3},at:[11.5,ri,-4]},{b:[7,8],mode:of,cam:{t:[3,11,0],r:118,ph:.7,th:.5},at:[0,$,-12]},{b:[9,10,11,12,13,14],mode:Ax,cam:{t:[16,11,21],r:72,ph:.72,th:.62},at:[26.9,$,20]},{b:[15,16,17],mode:of,cam:{t:[-3,11,4],r:118,ph:.7,th:.35},at:[3.6,$,25]},{b:[18],mode:Rx,cam:{t:[0,-22,0],r:205,ph:.78,th:.62},at:[0,oi,0]}],Vs=[{p:[0,Ot,-14],pl:[0,Ot,0],b:[0,Ot,9],bl:[0,Ot,-14],bf:"n",path:[[0,Ot,-33.4],[0,Ot,-26],[0,Ot,-20.3],[0,Ot,-14]],lab:[["\u540A\u706F",0,38.2,0,"item"],["\u7535\u68AF\u95E8\u5385",0,Ot+3.4,-27,"note"],["\u516B\u89D2\u5927\u5385 \xB7 \u7EA6 40m \u5BBD\u30018m \u9AD8",-13,Ot+9,8,"note"]],cam:{t:[0,31,-7],r:62,ph:.84,th:.55}},{p:[-8,Ot,-6],pl:[5,Ot,5],b:[5,Ot,5],bl:[-8,Ot,-6],bf:"n",pose:"throw",path:[[0,Ot,-14],[-4,Ot,-11],[-8,Ot,-6]],ar:[[[-7.4,Ot+1.6,-5.4],[4.2,Ot+2,4.2],"throw"],[[4.5,Ot+1.5,4.5],[-6,Ot+.8,-4.2],"atk"]],lab:[["\u67F1\u5B50\uFF1A\u5916\u76AE\u548C\u82AF\u53EF\u5206\u522B\u6253\u788E",9.9,Ot+6,-9.9,"item"],["\u5730\u677F\u53EF\u7834\u788E",-2,Ot+.4,9,"note"]],cam:{t:[0,31,0],r:70,ph:.8,th:.5}},{p:[-11,Ot,-9],pl:[0,36,0],b:[0,Ot,0],bl:[-11,Ot,-9],bf:"n",bpose:"cast",pose:"throw",path:[[-8,Ot,-6],[-11,Ot,-9]],ar:[[[-10.4,Ot+1.8,-8.4],[-1.6,36,-1.3],"fire"],[[-10.2,Ot+1.6,-8.9],[-.6,35.6,-2.6],"fire"]],fx:[["aura",0,Ot,0,3.2]],lab:[["\u540A\u706F",0,38.4,0,"item"],["Boss \u5728\u4E2D\u592E\u6301\u7EED\u65BD\u6CD5",4.2,Ot+4.6,3,"warn"]],cam:{t:[-2,33,-2],r:58,ph:1,th:.62}},{p:[0,Ot,0],pl:[0,Ot,6],b:[-1.2,Ot,-1.6],bl:[0,Ot,0],bf:"n",bpose:"slam",pose:"down",path:[[-11,Ot,-9],[-9,Ot,-7],[-4.5,Ot+2.5,-3.5,1],[0,Ot,0,1]],bpath:[[9,Ot,9],[3,Ot,2],[-7.4,Ot,-5.6]],ar:[[[9,Ot+.8,9],[-7,Ot+.8,-5.3],"dash"]],lab:[["\u51B2\u523A\u6295\u6280\uFF1A\u5BFB\u8DEF\u9A71\u52A8\uFF0C\u65E0\u4ECE\u8EB2\u907F",9,Ot+4.2,8.5,"warn"],["\u9760\u8FD1\u540E\u63D2\u503C\u5BF9\u9F50\uFF0C\u955C\u5934\u51E0\u5E27\u5185\u53EA\u770B\u89C1\u4E24\u4EBA",-9,Ot+4.4,-8,"note"],["\u4E22\u5230\u4E2D\u592E\uFF0C\u7838\u788E\u5730\u677F",0,Ot+4,0,"note"]],cam:{t:[-1,31,-1],r:66,ph:.84,th:.42}},{p:[11.5,ri,-4],pl:[0,ri,-4],b:[3,25.6,-2],bl:[11.5,ri,-4],bf:"n",bpose:"fly",pose:"down",path:[[0,Ot,0],[1.2,28.4,-.8,1],[5.5,27.2,-2.6,1],[9.5,25.8,-3.6,1],[11.5,ri,-4,1]],bpath:[[0,Ot,0],[.5,28,-.8],[3,25.6,-2]],lab:[["\u7838\u7A7F\u4E2D\u592E\u5929\u7A97",0,Ot+1.8,-1,"note"],["\u56DE\u5ECA\u5C42\uFF08\u4E24\u5C42\uFF09",-11.5,ri+2.6,-4,"note"]],cam:{t:[5,25,-4],r:70,ph:1.12,th:.3}},{p:[11.5,Ai,-4],pl:[0,Ai,-4],b:[6.5,22.6,-3],bl:[11.5,Ai,-4],bf:"n",bpose:"fly",pose:"down",path:[[11.5,ri,-4],[11.5,ri-1.5,-4,1],[11.5,Ai,-4,1]],bpath:[[3,25.6,-2],[6.5,22.6,-3]],lab:[["\u7838\u7A7F\u56DE\u5ECA\u697C\u677F\uFF0C\u6389\u4E0B\u4E00\u5C42",11.5,ri+2.4,-4,"note"],["Boss \u98DE\u7740\u8DDF\u4E0A",6.5,25.6,-3,"warn"]],cam:{t:[6,22,-4],r:64,ph:1.12,th:.3}},{p:[6.5,$,-3.5],pl:[0,$,0],b:[9.6,21.2,-4],bl:[6.5,$,-3.5],bf:"n",bpose:"fly",pose:"down",path:[[11.5,Ai,-4],[10.1,Ai,-4],[8.8,19.6,-3.9,1],[7.4,15,-3.7,1],[6.5,$,-3.5,1]],ar:[[[7.4,22.6,-3.2],[10.6,Ai+.6,-4],"atk"]],fx:[["qte",11,Ai+2.2,-4,"QTE \u95EA\u907F"]],lab:[["\u6EDA\u843D\u5230\u5EAD\u9662",5,$+2.6,-3.5,"note"]],cam:{t:[7,17,-4],r:66,ph:1.12,th:.3}},{p:[7,$,-13],pl:[-3,$,4],b:[-3,$,4],bl:[7,$,-13],bf:"n",pose:"throw",path:[[6.5,$,-3.5],[8,$,-9],[7,$,-13]],ar:[[[7,$+1.4,-13],[8.6,$+.3,-16.5],"fire"],[[6.6,$+1.6,-12.4],[-2.4,$+2,3.4],"throw"]],fx:[["fire",9,$+.3,-17,1.8]],lab:[["\u8349\u5730\uFF1A\u70B9\u71C3\u79EF\u6512\u706B\u7130\u80FD\u91CF",9,$+2.6,-18.5,"item"],["\u5BA4\u5185\u5EAD\u9662 30m\xD750m\xD78m",-9,$+6,16,"note"],["\u73AF\u5ECA\u4E0E\u53A2\u623F",-17,$+4.5,-2,"note"]],cam:{t:[1,11,-2],r:92,ph:.72,th:.5}},{p:[21.8,$,7.2],pl:[25.4,$,9.5],b:[17.2,$,7.2],bl:[21.8,$,7.2],bf:"m",bpose:"charge",pose:"down",path:[[7,$,-13],[10,$,-2],[12.5,$,7.2],[21.8,$,7.2,1]],bpath:[[-3,$,4],[6,$,6.5],[12,$,7.2],[17.2,$,7.2]],ar:[[[-2,$+1.2,4.2],[15.8,$+1.2,7.2],"dash"]],lab:[["\u53D8\u5F02\uFF1A\u624B\u81C2\u81A8\u5927",-3,$+6.4,4,"warn"],["\u64D2\u4F4F\u73A9\u5BB6\u649E\u7834\u5899\u58C1",19,$+5,7.2,"note"]],cam:{t:[10,11,4],r:74,ph:.74,th:.55}},{p:[26.9,$,10.6],pl:[26.9,$,20],b:[18,$,7.2],bl:[22,$,8],bf:"m",bpose:"idle",path:[[21.8,$,7.2],[23.6,$,8.6],[qe.x,$,qe.z],[26.9,$,10.6]],lab:[["\u955C\u5934\u6DF7\u5165\u6B63\u5E38\u89C6\u89D2\uFF0C\u671D\u5411\u95E8",22.2,$+3.6,4.2,"note"],["\u95E8",qe.x,$+2.9,qe.z,"item"]],cam:{t:[23,11,10],r:46,ph:.7,th:.62}},{p:[25.6,$,32.2],pl:[20,$,32.2],b:[26.9,$,14],bl:[26.9,$,30],bf:"m",bpose:"run",path:[[26.9,$,10.6],[26.9,$,22],[26.9,$,31.4],[Ye.x,$,Ye.z]],lab:[["\u8D70\u5ECA\u5C3D\u5934\u574D\u584C",27,$+3.2,35.6,"warn"],["90\xB0 \u8F6C\u5F2F\uFF0C\u88AB\u8FEB\u94BB\u8FDB\u623F\u95F4",24.2,$+3.6,29.6,"note"]],cam:{t:[24,11,23],r:56,ph:.7,th:.78}},{p:[23.2,$,32.6],pl:[16,$,32],b:[25.9,$,32.6],bl:[23.2,$,32.6],bf:"m",bpose:"charge",pose:"stumble",path:[[Ye.x,$,Ye.z],[23.2,$,32.6]],bpath:[[27.6,$,32.6],[25.9,$,32.6]],fx:[["fire",19.6,$,34.2,1.6],["fire",15.8,$,34.3,1.9],["fire",13,$,34.5,1.1]],lab:[["Boss \u51B2\u7834\u6574\u9762\u5899",26.4,$+5.2,33.4,"warn"],["\u5DE6\u524D\u65B9\u3001\u6B63\u524D\u65B9\u8D77\u706B\u574D\u584C",15.4,$+3.4,35.2,"note"],["\u5E73\u53F0\u4E0E\u5F15\u5BFC\u5761",16.2,kl+1.8,30.4,"item"],["\u7F3A\u53E3",Be.x+.2,ct.L3+Be.y1+.9,Be.z,"item"]],cam:{t:[19,12,32],r:46,ph:.62,th:1}},{p:[12.6,$,31.4],pl:[8,$,31],b:[24.4,$,32.8],bl:[14,$,32],bf:"m",bpose:"idle",pose:"throw",path:[[23.2,$,32.6],[22.4,$,32],[re.ramp+.2,$,30.6],[re.x1,kl,30.4],[re.x0+.6,kl,30.4],[13.35,14.55,32.1],[13.35,$,32.1,1],[12.6,$,31.4]],fx:[["fire",19.6,$,34.2,1.6],["fire",15.8,$,34.3,1.9]],lab:[["\u623F\u6881\u8D70\u5230\u4E00\u534A\u65AD\u88C2",13.4,16.4,32.3,"warn"],["\u6253\u7834\u5835\u4F4F\u95E8\u6D1E\u7684\u6728\u677F",Ee.x-.2,$+3.6,Ee.z,"item"]],cam:{t:[16,12.5,31.5],r:44,ph:.64,th:.95}},{p:[5.6,$,30.6],pl:[0,$,30.6],bf:null,path:[[12.6,$,31.4],[11,$,30.6],[8,$,30.4],[5.6,$,30.6]],fx:[["debris",8.2,$,30.2],["debris",6.2,$,31.7],["debris",9.8,$,31.2]],lab:[["\u8282\u594F\u653E\u7F13\uFF1ABoss \u6682\u4E0D\u51FA\u73B0",6,$+4.2,33.6,"note"],["\u71C3\u70E7\u7684\u6B8B\u9AB8\u540C\u6B65\u843D\u4E0B",8.6,$+3,30,"warn"]],cam:{t:[6.5,11.5,31.5],r:40,ph:.66,th:.5}},{p:[3.8,$,30.2],pl:[4.8,$,31.6],b:[4.9,$,31.7],bl:[3.8,$,30.2],bf:"m",bpose:"charge",pose:"throw",path:[[5.6,$,30.6],[4.6,$,32.6],[4.2,$,31.4],[3.8,$,30.2]],bpath:[[13.2,$,34],[9.4,$,33.4],[6.4,$,32.2],[4.9,$,31.7],[3.6,$,29.4],[3.6,$,26.6]],fx:[["qte",5.2,$+2.6,33,"\u2460 \u95EA\u907F"],["qte",3.4,$+2.6,32.4,"\u2461 \u53CD\u51FB"],["qte",3.6,$+3.4,28.6,"\u2462 \u91CD\u521B\u7834\u5899"]],lab:[["Boss \u4ECE\u8EAB\u540E\u7834\u5899\u51B2\u51FA",12,$+5.4,34.6,"warn"],["\u56DE\u5230\u5EAD\u9662",3.6,$+3.2,25.4,"note"]],cam:{t:[5.5,11.5,30],r:40,ph:.72,th:.32}},{p:[3.8,$,30.2],pl:[3.6,$,26.6],b:[3.6,$,26.4],bl:[3.8,$,30.2],bf:"m",bpose:"burn",pose:"throw",path:[[3.8,$,30.2]],ar:[[[3.8,$+1.6,29.8],[3.6,$+1.8,27],"fire"]],fx:[["drip",3.6,$,26.4],["fire",3.6,$,26.4,1.4]],lab:[["\u5E26\u9152\u67DC\u7684\u5899\u88AB\u51B2\u7834\uFF0C\u9152\u6DB2\u6DCB\u6EE1 Boss",-2.4,$+5,26.6,"note"],["\u706B\u7130\u70B9\u71C3",3.6,$+5.4,25.2,"warn"]],cam:{t:[3.6,12,27.6],r:40,ph:.76,th:.3}},{p:[-16,$,-9],pl:[-6,$,-9],b:[-17.4,$,-12.5],bl:[-16,$,-12.5],bf:"m",bpose:"charge",pose:"dodge",path:[[3.8,$,26],[-1.6,$,21.4],[-8,$,11],[-12.5,$,2.5],[-16.2,$,-10.6],[-16.4,$,-12.3],[-16,$,-9]],bpath:[[-5,$,-12.2],[-11,$,-12.4],[-17.4,$,-12.5]],ar:[[[-5,$+1.2,-12.2],[-16.6,$+1.2,-12.5],"dash"]],lab:[["\u5F15\u8BF1\u51B2\u523A\u649E\u788E\u9152\u67DC",-14,$+5.2,-15.6,"item"],["\u9152\u67DC",vn[2].x,$+3.6,vn[2].z+1.2,"item"],["\u9152\u67DC",vn[3].x-1.2,$+3.6,vn[3].z,"item"]],cam:{t:[-4,11,-10],r:82,ph:.72,th:.2}},{p:[-5,$,-6],pl:[0,$,0],b:[0,$,0],bl:[-5,$,-6],bf:"m",bpose:"down",path:[[-16,$,-9],[-10,$,-7.6],[-5,$,-6]],lab:[["\u51FB\u8D25\u53D8\u5F02\u5F62\u6001",0,$+4.8,0,"note"],["\u4E4B\u540E\u8FDB\u5165\u5DE8\u578B\u5F62\u6001\u9636\u6BB5",0,$+7,10,"warn"]],cam:{t:[0,11,0],r:88,ph:.74,th:.5}},{p:[0,oi,-30],pl:[0,oi,16],b:[0,oi,16],bl:[0,oi,-30],bf:"g",path:[[0,oi,-40],[0,oi,-30]],lab:[["\u7EA6 100m\xD7100m\uFF0C\u505C\u5728\u521D\u59CB\u767D\u76D2",-30,oi+14,-36,"note"],["\u5DE8\u578B\u5F62\u6001",0,oi+21,16,"warn"]],cam:{t:[0,-22,0],r:190,ph:.78,th:.62}}],Ka={chand:2,chain:2,ocu:3,crash5:5,wA:7,wBe:10,beam:12,obst:12,wBC:13,wCn:14,cab0:14,cab1:16,cab2:16,cab3:16},tc={chand:{drop:4.6,at:[1.6,0,2.4],tilt:[.12,0,-.09],drop2:23.6,at2:[-2.6,0,-4.2],tilt2:[-.08,.6,.1]},wA:{rub:[-1,0]},wBe:{rub:[-1,0]},wBC:{rub:[-1,0]},wCn:{rub:[0,-1]},obst:{rub:[-1,0]},cab0:{rub:[0,-1]},cab1:{rub:[1,0]},cab2:{rub:[0,1]},cab3:{rub:[-1,0]},beam:{rub:[0,0]},ocu:{rub:[0,0],fall:!0},crash5:{rub:[0,0],fall:!0}};var ts=(i,t={})=>new hn({color:i,roughness:.75,metalness:0,...t}),Cx={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C"},b:{H:3.4,body:"#2B3331",head:"#46504D",limb:"#232A28",club:"#6E5A45"},m:{H:3.4,body:"#2B3331",head:"#46504D",limb:"#232A28",arm:"#6B3B2C"},g:{H:17,body:"#343B39",head:"#4B5552",limb:"#2A302E",arm:"#6B3B2C"}};function Wr(i){let t=Cx[i],e=t.H,n=new oe,s=new oe;n.add(s),s.position.y=e*.5;let r=ts(t.body),o=ts(t.head),a=ts(t.limb),c=new Xt(new xr(e*.13,e*.26,4,10),r);c.position.y=e*.2,s.add(c);let l=new Xt(new Rs(e*.1,14,10),o);l.position.y=e*.44,s.add(l);let h=(p,b,y)=>{let x=new oe,S=new Xt(new _n(p,b,p),y);return S.position.y=-b/2,x.add(S),x},u=h(e*.07,e*.34,a),f=i==="m"||i==="g"?h(e*.17,e*.5,ts(t.arm)):h(e*.07,e*.34,a);u.position.set(-e*.17,e*.33,0),f.position.set(i==="m"||i==="g"?-(-e*.23):e*.17,e*.33,0);let d=h(e*.085,e*.46,a),g=h(e*.085,e*.46,a);if(d.position.set(-e*.07,0,0),g.position.set(e*.07,0,0),s.add(u,f,d,g),t.club){let p=new Xt(new zn(e*.03,e*.05,e*.55,8),ts(t.club));p.position.set(0,-e*.34,e*.12),p.rotation.x=Math.PI/2.4,f.add(p)}if(i==="m"||i==="g"){let p=new Xt(new zi(e*.11,e*.16,6),ts("#4E2A20"));p.position.y=-e*.55,p.rotation.x=Math.PI,f.children[0].parent.add(p)}let _=new Xt(new yi(e*.32,e*.42,28),new Se({color:i==="p"?"#E7A537":"#B5462F",transparent:!0,opacity:.85,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.04,_.renderOrder=2,n.add(_),n.traverse(p=>{p.isMesh&&p!==_&&(p.castShadow=!0,p.receiveShadow=!1)});let m={root:n,hips:s,torso:c,armL:u,armR:f,legL:d,legR:g,H:e,kind:i,ring:_,pose(p="idle",b=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let S of[u,f,d,g])S.rotation.set(0,0,0);let y=Math.sin(b*9),x=i==="m"||i==="g";switch(p){case"walk":{let S=Math.sin(b*5.5);d.rotation.x=.38*S,g.rotation.x=-.38*S,u.rotation.x=-.3*S,f.rotation.x=x?-.15:.3*S;break}case"run":s.rotation.x=.22,d.rotation.x=.7*y,g.rotation.x=-.7*y,u.rotation.x=-.6*y,f.rotation.x=x?-.3:.6*y;break;case"stumble":s.rotation.x=.5,d.rotation.x=.5*y,g.rotation.x=-.5*y,u.rotation.z=-1.1,f.rotation.z=1.1,s.position.y=e*.46;break;case"throw":f.rotation.x=-2.1,u.rotation.x=.5,d.rotation.x=-.35,g.rotation.x=.3;break;case"cast":u.rotation.set(-2.7,0,-.35),f.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,u.rotation.x=-3,f.rotation.x=-3;break;case"charge":s.rotation.x=.55,f.rotation.x=-1.35,u.rotation.x=-.6,d.rotation.x=.8*y,g.rotation.x=-.8*y;break;case"fly":s.rotation.x=.35,d.rotation.x=.7,g.rotation.x=.5,u.rotation.z=-.9,f.rotation.z=.9;break;case"fall":s.rotation.x=-.4,u.rotation.z=-2.2,f.rotation.z=2.2,d.rotation.x=-.6,g.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,u.rotation.z=-.5,f.rotation.z=.5,d.rotation.x=.1;break;case"grab":s.rotation.x=.3,u.rotation.x=-1.5,x?f.rotation.x=-1.5:f.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,d.rotation.x=.5,g.rotation.x=.2,u.rotation.z=-1.2,f.rotation.z=1.2,s.position.y=e*.62;break;case"burn":u.rotation.set(-.6+.4*y,0,-1.1),f.rotation.set(-.6-.4*y,0,1.1),s.rotation.z=.1*y;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,d.rotation.x=-.9,g.rotation.x=.6,u.rotation.z=-1;break;case"push":s.rotation.x=-.35,d.rotation.x=-.5,g.rotation.x=.4,u.rotation.x=-1.4,f.rotation.x=-1.4;break;default:u.rotation.z=-.08,f.rotation.z=.08}}};return m.pose("idle"),m}function es(i=1.5,t=1,e={}){let n=new oe,s=new Se({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new Se({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(i*3.2));for(let a=0;a<o;a++){let c=a*2.39996+t,l=i*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new Xt(new zi(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(c)*l,h/2,Math.sin(c)*l),u.userData.h=h,u.userData.k=a*1.7+t,n.add(u)}if(e.spot!==!1){let a=new Xt(new ws(i*1.15,28),new Se({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.05,n.add(a)}return n.userData.tick=a=>{for(let c of n.children)c.userData.h&&(c.scale.y=.8+.35*Math.abs(Math.sin(a*6+c.userData.k)))},n}function ec(i=3){let t=new oe,e=new Xt(new yi(i*.82,i,48),new Se({color:"#E7A537",transparent:!0,opacity:.75,depthWrite:!1,side:je}));e.rotation.x=-Math.PI/2,e.position.y=.06,t.add(e);let n=new Xt(new zn(i*.9,i*.9,5,40,1,!0),new Se({color:"#F3C76A",transparent:!0,opacity:.13,depthWrite:!1,side:je}));return n.position.y=2.5,t.add(n),t.userData.tick=s=>{e.scale.setScalar(.92+.08*Math.sin(s*4))},t}function nc(){let i=new oe,t=new Se({color:"#8FB3B0",transparent:!0,opacity:.7,depthWrite:!1}),e=new Xt(new ws(2.1,24),t);e.rotation.x=-Math.PI/2,e.position.y=.05,i.add(e);let n=new hn({color:"#7FA6A3",roughness:.2});for(let s=0;s<7;s++){let r=s*2.4,o=.9+s%3*.3,a=new Xt(new Rs(.12,8,6),n);a.position.set(Math.cos(r)*o,1.2+s%4*.7,Math.sin(r)*o),a.scale.y=1.8,i.add(a)}return i}function af(){let i=new oe,t=new Xt(new _n(1.1,.3,.45),ts("#5E4636"));t.position.y=3.2,t.rotation.set(.4,.7,.2),t.castShadow=!0,i.add(t);let e=es(.35,3);e.position.y=3.3,e.scale.setScalar(.7),i.add(e);let n=new Xt(new zn(.03,.03,3,4),new Se({color:"#EC6E2A",transparent:!0,opacity:.45}));n.position.y=1.5,i.add(n);let s=new Xt(new yi(.5,.7,20),new Se({color:"#EC6E2A",transparent:!0,opacity:.55,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.y=.05,i.add(s),i.userData.tick=r=>e.userData.tick(r),i}function cf(i=1){let t=new Se({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new Xt(new Kn(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function ic(i=4){let t=new Se({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:je}),e=new Xt(new yi(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function lf(){let i=new oe,t=new Se({color:"#EC6E2A",transparent:!0,opacity:.85}),e=new Se({color:"#FFD27A"}),n=new Xt(new Kn(.42,1),e);i.add(n);let s=[0,1,2,3].map(r=>{let o=new Xt(new Kn(.36-r*.07,1),t);return i.add(o),o});return i.userData.tail=s,i.userData.head=n,i}function ns(i,t,e,n={}){var f,d;let s=i.map(g=>new N(...g)),r=s.length>2?new ki(s,!1,"centripetal",.2):new Ts(s[0],s[1]||s[0].clone().add(new N(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),c=[];if(n.dash){let[g,_]=n.dash,m=Math.max(1,Math.floor(o/(g+_)));for(let p=0;p<m;p++){let b=p*(g+_)/o,y=Math.min(1,(p*(g+_)+g)/o),x=[];for(let S=0;S<=4;S++)x.push(r.getPointAt(b+(y-b)*S/4));c.push(new Cs(new ki(x),4,t,6,!1))}}else c.push(new Cs(r,a,t,7,!1));let l=new oe,h=new Se({color:e,transparent:!!n.opacity,opacity:(f=n.opacity)!=null?f:1}),u=new Se({color:e,transparent:!0,opacity:(d=n.xray)!=null?d:.22,depthTest:!1,depthWrite:!1});for(let g of c){let _=new Xt(g,h),m=new Xt(g,u);m.renderOrder=5,l.add(_,m)}if(n.every){let g=new zi(t*2.6,t*5,10);g.rotateX(Math.PI/2);let _=Math.max(1,Math.floor(o/n.every));for(let m=1;m<=_;m++){let p=Math.min(.999,(m-(n.last?0:.5))/_),b=r.getPointAt(p),y=r.getTangentAt(p);for(let x of[h,u]){let S=new Xt(g,x);S.position.copy(b),S.lookAt(b.clone().add(y)),x===u&&(S.renderOrder=5),l.add(S)}}}return l.userData.length=o,l.userData.curve=r,l}function sc(i,t,e,n={}){var c,l;let s=new N(...i),r=new N(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((c=n.arc)!=null?c:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,f=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([f.x,f.y,f.z])}return ns(a,(l=n.r)!=null?l:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}var Gs={w:["#EFE9DF","#D9CFC0","#C9BFAF"],cab:["#7D6A56","#5E4E3F","#9DB4B6"],wood:["#8A6F55","#6E5845","#A08466"],ocu:["#B08D57","#9DB4B6","#8E7A64"],slab:["#CFC7B9","#B8AFA0","#DCD3C4"],metal:["#6F6A60","#8A8376","#57534C"]},hf=i=>i.startsWith("w")?Gs.w:i.startsWith("cab")?Gs.cab:i==="ocu"?Gs.ocu:i==="crash5"||i==="crash4"?Gs.slab:i==="chain"?Gs.metal:Gs.wood,Ix={ocu:ct.L3+.09,crash5:ct.L4+.07,crash4:ct.L3+.09,chain:ct.L6+.07},uf=(i,t)=>{var e;return(e=Ix[i])!=null?e:t.min.y+.02},ff=i=>{let t=7+i.length*13+i.charCodeAt(i.length-1)*3;return()=>(t=(t*9301+49297)%233280)/233280},ai=(i,t,e)=>i+(t-i)*e;function rc(i){let t=i.world,e={};function n(f){let d=i.parts[f],g=tc[f];if(!d||!g||!g.rub)return null;let _=d.userData.box,m=d.userData.group,p=new Vn,b=_.min.x,y=_.max.x,x=_.min.z,S=_.max.z,T=uf(f,_),R=m+":p",P=m;f==="ocu"&&(b=-4,y=4,x=-4,S=4,R="L3:p",P="L3"),f==="crash5"&&(R="L4:p",P="L4"),(f.startsWith("cab")||f==="beam")&&(T=ct.L3+.09);let[E,v]=g.rub;E<0&&(b-=1.8),E>0&&(y+=1.8),v<0&&(x-=1.8),v>0&&(S+=1.8),y-b<1.2&&(b-=.5,y+=.5),S-x<1.2&&(x-=.5,S+=.5);let C=hf(f),U=ff(f),O=Math.round(Math.min(22,Math.max(8,(y-b)*(S-x)*1.2)));for(let z=0;z<O;z++){let M=.25+U()*.6,I=.15+U()*.35,L=.25+U()*.55;p.ybox(R,C[z%C.length],b+U()*(y-b),T+I/2+(z%4===0?I*.6:0),x+U()*(S-x),M,I,L,U()*3)}let k=new oe;for(let[z,M]of Object.entries(p.out())){let I=new Xt(zl(M),t.M[z]||t.M[P]);I.castShadow=!0,I.receiveShadow=!0,k.add(I)}return t.groups[P].add(k),k.visible=!1,k}let s=f=>f in e?e[f]:e[f]=n(f);function r(f,d,g){let _=i.parts[f];if(!_)return;let m=tc[f]||{},p=_.userData.home;if(m.drop!=null){_.visible=!0;let b=t.groups[d>1.15?"L3":_.userData.group];if(_.parent!==b&&b.add(_),d<=0){_.position.copy(p),_.rotation.set(0,0,0);return}if(d<=1){let S=d*d;_.position.set(p.x+m.at[0]*d,p.y-m.drop*S,p.z+m.at[2]*d),_.rotation.set(m.tilt[0]*S,m.tilt[1]*S,m.tilt[2]*S);return}let y=Math.min(1,d-1),x=y*y;_.position.set(p.x+ai(m.at[0],m.at2[0],y),p.y-ai(m.drop,m.drop2,x),p.z+ai(m.at[2],m.at2[2],y)),_.rotation.set(ai(m.tilt[0],m.tilt2[0],y),ai(m.tilt[1],m.tilt2[1],y),ai(m.tilt[2],m.tilt2[2],y));return}if(_.visible=!(d>=1),m.rub){let b=d>=1&&!g,y=b?s(f):e[f];y&&(y.visible=b)}}let o=f=>f<0||Ka.chand>=f?0:f>Ka.ocu?2:1;function a(f){for(let[d,g]of Object.entries(Ka))r(d,d==="chand"?o(f):f>=0&&g<f?1:0);i.shadowDirty()}let c=new _n(1,1,1),l={},h=f=>l[f]||(l[f]=new hn({color:f,roughness:.85}));function u(f){let d=i.parts[f];if(!d)return null;let g=d.userData.box,_=tc[f]||{},[m,p]=_.rub||[0,0],b=ff(f+"b"),y=hf(f),x=!!_.fall||f==="chain",S=uf(f,g),T=new oe,R=[],P=g.getSize(new N),E=Math.round(Math.min(26,Math.max(10,(P.x+P.z)*2.2)));for(let C=0;C<E;C++){let U=f==="chain"?[.12,.12,.3]:[.22+b()*.55,.12+b()*.35,.2+b()*.5],O=new Xt(c,h(y[C%y.length]));O.scale.set(...U),O.castShadow=!0;let k=new N(ai(g.min.x,g.max.x,b()),ai(g.min.y,g.max.y,b()),ai(g.min.z,g.max.z,b())),z=x?.6:3.5+b()*4,M=new N((x?b()-.5:m*(.6+b()*.8)+(b()-.5)*.9)*z,x?-b()*2:1.2+b()*3.4,(x?b()-.5:p*(.6+b()*.8)+(b()-.5)*.9)*z),I=14,L=S+U[1]/2,H=k.y-L,Y=(M.y+Math.sqrt(Math.max(0,M.y*M.y+2*I*H)))/I,K=new N(b()-.5,b()-.5,b()-.5).normalize(),Q=4+b()*9;R.push({m:O,p0:k,vel:M,gy:I,tl:Y,ax:K,w:Q,rot0:b()*6}),T.add(O)}t.root.add(T),T.visible=!1;let v=new xn;return{g:T,at(C){if(C<0){T.visible=!1;return}T.visible=!0;for(let U of R){let O=Math.min(C,U.tl);U.m.position.set(U.p0.x+U.vel.x*O,U.p0.y+U.vel.y*O-U.gy*O*O/2,U.p0.z+U.vel.z*O),v.setFromAxisAngle(U.ax,U.rot0+U.w*O),U.m.quaternion.copy(v)}},end:Math.max(...R.map(C=>C.tl)),dispose(){t.root.remove(T)}}}return{set:r,at:a,burst:u,chandAt:o}}function oc(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new N,o=[];for(let m=8;m<=48;m+=8)o.push([0,-m],[0,m],[m,0],[-m,0]);let a="",c=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",l=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();l=[...t.querySelectorAll(c)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let b=p.getBoundingClientRect();return[b.left-m.left-3,b.top-m.top-3,b.right-m.left+3,b.bottom-m.top+3]})};function f(m,p,b,y){let x=document.createElement(y?"button":"span");y&&(x.type="button"),x.className=m,x.innerHTML=p,x.style.display="none",e.appendChild(x);let S={e:x,p:typeof b=="function"?null:new N(...b),fn:typeof b=="function"?b:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(S),S}function d(m){let p=s.indexOf(m);p>=0&&s.splice(p,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},_=(m,p,b)=>{m.e.style.transform=`translate(${p.toFixed(1)}px,${b.toFixed(1)}px)`};return i.onRender(m=>{let p=performance.now();p-h>400&&(u(),h=p);let b=t.clientWidth,y=t.clientHeight,x=l.slice(),S=[],T=[];for(let v of s){if(!v.on){g(v);continue}if(r.copy(v.fn?v.fn():v.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(v);continue}v.shown||(v.e.style.display="",v.shown=!0);let C=(r.x+1)/2*b,U=(1-r.y)/2*y;(v.lab?S:T).push([v,C,U])}let R=(v,C,U)=>{let O=v.bw||(v.bw=v.e.offsetWidth);return O>40?[C-16,U-16,C-16+O,U+16]:[C-15,U-15,C+15,U+15]},P=v=>!x.some(C=>v[0]<C[2]&&v[2]>C[0]&&v[1]<C[3]&&v[3]>C[1]);T.sort((v,C)=>C[0].e.classList.contains("on")-v[0].e.classList.contains("on"));let E="";for(let[v,C,U]of T){let O=C,k=U,z=R(v,C,U);if(!P(z))for(let[M,I]of o){let L=R(v,C+M,U+I);if(L[0]>=0&&L[2]<=b&&L[1]>=0&&L[3]<=y&&P(L)){O=C+M,k=U+I,z=L;break}}_(v,O,k),x.push(z),Math.hypot(O-C,k-U)>13&&(E+=`<line x1="${C.toFixed(1)}" y1="${U.toFixed(1)}" x2="${O.toFixed(1)}" y2="${k.toFixed(1)}"/><circle cx="${C.toFixed(1)}" cy="${U.toFixed(1)}" r="3"/>`)}E!==a&&(a=E,n.innerHTML=E?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${E}</g>`:""),S.sort((v,C)=>C[2]-v[2]);for(let[v,C,U]of S){v.w||(v.w=v.e.offsetWidth,v.h=v.e.offsetHeight);let O=U;for(let k=0;k<10;k++){let z=C-v.w/2,M=O-11-v.h,I=C+v.w/2,L=O-11,H=x.find(Y=>z<Y[2]&&I>Y[0]&&M<Y[3]&&L>Y[1]);if(!H||H[1]+11-3-11-v.h<0)break;O=H[1]+11-3}x.push([C-v.w/2,O-11-v.h,C+v.w/2,O-11]),_(v,C,O)}}),{lay:e,add:f,remove:d,marks:s}}var Xr={route:"#D2872C",boss:"#B5462F",fire:"#EC6E2A",throw:"#8B6B4A",atk:"#D2452F",dash:"#C2412E"},Px=i=>String(i+1).padStart(2,"0");function Lx(i){let t=[],e=null;for(let n=1;n<i.length;n++){let s=i[n][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[i[n-1].slice(0,3)]},t.push(e)),e.pts.push(i[n].slice(0,3))}return t}function ac(i,t,e,n={}){var r;let s=new oe;for(let o of Lx(i))o.pts.length<2||o.pts.reduce((c,l,h)=>h?c+Math.hypot(l[0]-o.pts[h-1][0],l[1]-o.pts[h-1][1],l[2]-o.pts[h-1][2]):0,0)<.05||s.add(o.air?ns(o.pts,e*.8,t,{dash:[.7,.55],xray:n.xray,opacity:n.opacity}):ns(o.pts,e,t,{every:(r=n.every)!=null?r:7,xray:n.xray,opacity:n.opacity}));return s}var df=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function pf(i,t,e={}){var k;let n=i.world,s=new oe;s.name="show",i.scene.add(s);let r={route:new oe,units:new oe};s.add(r.route,r.units);let o=oc(i,t),a=o.lay,c=rc(i),l=(k=e.scale)!=null?k:1.2,h=-1,u=-1,f={route:!0,marks:!0,units:!0,labels:!0},d=Ri.map(z=>{let M=[];for(let L of z.b)for(let H of Vs[L].path){let Y=M[M.length-1];(!Y||Math.hypot(Y[0]-H[0],Y[1]-H[1],Y[2]-H[2])>.01)&&M.push(H)}let I=ac(M,Xr.route,.24,{every:8});return r.route.add(I),I}),g=(z,M)=>z.traverse(I=>{if(I.material){let L=I.material;L.depthTest?(L.transparent=M<1,L.opacity=M):L.opacity=.22*M,L.needsUpdate=!0}}),_=(z,M,I,L)=>o.add(z,M,I,L),m=Ri.map((z,M)=>{let I=_("bs-phm",`<b>${M+1}</b><span>${(e.phaseNames||[])[M]||""}</span>`,[z.at[0],z.at[1]+4,z.at[2]],1);return I.e.dataset.k=M,I.e.addEventListener("click",L=>{L.stopPropagation(),e.onPhase&&e.onPhase(M)}),I}),p=Vs.map((z,M)=>{let I=_("bs-pin",`<span>${Px(M)}</span>`,[z.p[0],z.p[1]+4.4,z.p[2]],1);return I.e.dataset.i=M,I.e.title=(e.names||[])[M]||"",I.e.addEventListener("click",L=>{L.stopPropagation(),e.onPick&&e.onPick(M)}),I}),b=[],y=()=>{m.forEach((z,M)=>{z.on=f.marks&&h<0,z.e.classList.toggle("on",M===h)}),p.forEach((z,M)=>{let I=h>=0&&Ri[h].b.includes(M);z.on=f.marks&&I,z.e.classList.toggle("on",M===u),z.e.setAttribute("aria-pressed",M===u)});for(let z of b)z.on=f.labels;i.invalidate()},x=z=>c.at(z),S=[],T=(z,M)=>Math.atan2(M[0]-z[0],M[2]-z[2]);function R(){for(let z of[...r.units.children])r.units.remove(z),df(z);for(let z of b)o.remove(z);b=[],S=[],i.ambient=!1}function P(z){if(R(),z<0)return;let M=Vs[z];M.path.length>1&&r.units.add(ac(M.path,Xr.route,.3,{every:5,xray:.35})),M.bpath&&r.units.add(ns(M.bpath.map(H=>[H[0],H[1]+.15,H[2]]),.2,Xr.boss,{dash:[.9,.6],xray:.3}));for(let[H,Y,K]of M.ar||[])r.units.add(sc(H,Y,Xr[K]||Xr.atk,{dash:K==="dash"?[1,.5]:null,r:K==="dash"?.2:.14,arc:K==="dash"?.02:.12}));let I=Wr("p");I.ring.visible=!["fall","fly"].includes(M.pose),I.root.position.set(...M.p),I.root.rotation.y=T(M.p,M.pl||[M.p[0],M.p[1],M.p[2]+1]),I.root.scale.setScalar(l),I.pose(M.pose||"idle"),r.units.add(I.root);let L=[];if(["run","stumble","walk"].includes(M.pose)&&L.push(H=>I.pose(M.pose,H)),M.bf){let H=Wr(M.bf==="n"?"b":M.bf);H.ring.visible=!["fall","fly"].includes(M.bpose),H.root.position.set(...M.b),H.root.rotation.y=T(M.b,M.bl||M.p),H.root.scale.setScalar(M.bf==="g"?1:l),H.pose(M.bpose||"idle"),r.units.add(H.root),["run","charge","burn"].includes(M.bpose)&&L.push(Y=>H.pose(M.bpose,Y))}for(let H of M.fx||[]){let[Y,K,Q,Z,it]=H,et=null;if(Y==="fire")et=es(it,K+Z);else if(Y==="aura")et=ec(it);else if(Y==="drip")et=nc();else if(Y==="debris")et=af();else if(Y==="qte"){let W=_("bs-lab k-qte",`<i>\u25C6</i>${it}`,[K,Q,Z]);b.push(W);continue}et&&(et.position.set(K,Q,Z),r.units.add(et),et.userData.tick&&L.push(et.userData.tick))}for(let[H,Y,K,Q,Z]of M.lab||[]){let it=_("bs-lab k-"+(Z||"note"),(Z==="item"?"<i>\u25C6</i>":"")+H,[Y,K,Q]);if(b.push(it),Z==="item"){let et=new Xt(new wr(.42),new Se({color:"#E7A537"}));et.position.set(Y,K-1.05,Q),r.units.add(et)}}S=L,i.ambient=L.length>0}i.onFrame((z,M)=>{for(let I of S)I(M)});let E=z=>{let M=t.clientWidth/Math.max(1,t.clientHeight),I=M<1.25?Math.pow(1.25/M,.75):1;return{...z,r:z.r*I}};function v(z,M){i.setView(E(z),M),i.animUntil=performance.now()+1600}function C(z,M={}){if(h=z,u=-1,P(-1),d.forEach((I,L)=>{I.visible=f.route&&(z<0||L===z),g(I,1)}),z<0)i.setMode("ov"),x(-1),M.fly!==!1&&v(Hs.ov,M.instant);else{let I=Ri[z];i.setMode(I.mode),x(I.b[0]),M.fly!==!1&&v(I.cam,M.instant)}y()}function U(z,M={}){if(z<0){C(h,{fly:!1});return}let I=Ri.findIndex(Y=>Y.b.includes(z));h=I,u=z;let L=Vs[z],H=Ri[I];i.setMode(L.mode||H.mode),x(z),d.forEach((Y,K)=>{Y.visible=f.route&&K===I,g(Y,.35)}),P(z),r.units.visible=f.units,M.fly!==!1&&v(L.cam||H.cam,M.instant),y()}function O(z,M){f[z]=M,z==="route"&&d.forEach((I,L)=>{I.visible=M&&(h<0||L===h)}),z==="units"&&(r.units.visible=M),y(),i.invalidate()}return C(-1,{fly:!1}),{setPhase:C,setBeat:U,setLayer:O,overview:z=>C(-1,z||{}),partsAt:x,get phase(){return h},get beat(){return u},phases:Ri.length,beats:Vs.length,dispose(){R(),a.remove(),i.scene.remove(s),df(s)}}}var qt=ct.L6+.05,cc=ct.L5+.05,Ws=ct.L4+.05,rt=ct.L3+.07,Hl=ct.L3+re.h+.07,mf={kind:"plan",floor:"L6",cut:3.6},Dx={kind:"sec",z:-1},Ux={kind:"plan",floor:"L3",cut:5},Fx={kind:"plan",floor:"L3",cut:3.2};function Gn(){let i=[],t=0,e=0,n=0,s=0,r={at(o,a,c,l,h="idle",u){return t=o,e=a,n=c,s=l,i.push([t,e,n,s,h,u]),r},to(o,a="idle",c){return t=Math.max(t,o),i.push([t,e,n,s,a,c]),r},go(o,a=5,c="run",l){for(let h of o){let u=Math.hypot(h[0]-e,h[1]-n,h[2]-s);t=+(t+u/a).toFixed(3),[e,n,s]=h,i.push([t,e,n,s,c,l])}return r},mv(o,a,c,l,h,u){return t=o,e=a,n=c,s=l,i.push([t,e,n,s,h,u]),r},get t(){return t},keys:i};return r}var Nx=(()=>{let i=Gn().at(0,-8,qt,-6,"idle",{face:[5,5]}).to(.9,"idle",{face:[5,5]}).go([[-10,qt,-7.8],[-11,qt,-9]],4.2,"run").to(2.9,"idle",{face:[.8,1.2]}).to(3.4,"idle",{face:[0,0]}).to(3.85,"throw").to(4.6,"idle").to(5.05,"throw").to(5.8,"idle").to(6.25,"throw").to(8.6,"idle").go([[-5.4,qt,-5.6]],4.6,"run").to(11.1,"idle",{face:[-1.6,-3.4]}).to(11.5,"throw").to(12,"idle").to(12.4,"throw").to(13,"idle"),t=Gn().at(0,5,qt,5,"idle",{face:[-8,-6]}).to(.5,"idle").go([[2.6,qt,2.6],[.8,qt,1.2]],2.8,"run").to(8.25,"cast",{face:[-11,-9]}).to(8.6,"burn").go([[-1.6,qt,-3.4]],1.6,"burn").to(13,"burn",{face:[-5.4,-5.6]}),e=[-10.6,qt+2,-8.6],n=[0,39.2,0];return{dur:13,init:2,mode:mf,act:{p:{k:"p",keys:i.keys},b:{k:"b",keys:t.keys}},brk:[[7.6,"chain"],[7.6,"chand",1,.7]],fx:[[2.5,8.3,"aura",.8,qt,1.2,3.2],[4.25,7.6,"flame",0,38.9,0,.45],[4.2,4.6,"spark",...n,.9],[5.45,5.85,"spark",...n,.9],[6.65,7.05,"spark",...n,.9],[7.55,8,"spark",0,40,0,1.4],[8.3,9,"shock",1.6,qt,2.4,7],[8.3,13,"fire",1.6,qt,2.4,2.6],[8.3,13,"flame","b",1.8,null,1]],proj:[[3.5,4.2,e,n,"fire"],[4.75,5.45,e,n,"fire"],[5.95,6.65,e,n,"fire"]],lab:[[0,2.5,"Boss \u8D70\u5411\u5927\u5385\u4E2D\u592E","b",5,null,"warn"],[2.5,7.6,"Boss \u5728\u4E2D\u592E\u6301\u7EED\u65BD\u6CD5","b",5,null,"warn"],[2.6,4.4,"\u65BD\u6CD5\u5F00\u59CB\u65F6\u63D0\u793A\uFF1A\u653B\u51FB\u540A\u706F","p",3,null,"note"],[3,7.6,"\u540A\u706F\u9501\u94FE",0,41.4,0,"item"],[7.6,8.5,"\u9501\u94FE\u70E7\u65AD",0,41.4,0,"warn"],[8.4,13,"\u540A\u706F\u7838\u4E2D Boss\uFF1A\u6253\u65AD\u65BD\u6CD5\u3001\u5168\u8EAB\u71C3\u70E7",1.6,qt+6.2,2.4,"note"],[11,13,"\u8F93\u51FA\u7A97\u53E3","p",3,null,"note"]],cam:[[0,{t:[-2,32,-2],r:62,ph:.98,th:-.62}],[2.5,{t:[-3,33,-3],r:58,ph:1.02,th:-.66}],[3.4,{t:[-3.5,35,-3.5],r:54,ph:1.1,th:-.7}],[7.4,{t:[-2,35,-2],r:52,ph:1.08,th:-.66}],[8.4,{t:[-1,32.5,-1.5],r:50,ph:1,th:-.62}],[13,{t:[-2,32,-2.5],r:54,ph:.96,th:-.6}]],shake:[[8.3,8.8,.35]],ch:[0,2.5,7.6,8.4],ctl:[[0,"play"]],sb:{x0:-24,x1:24,z0:-36,z1:24,y0:29,y1:44}}})(),Bx=(()=>{let i=Gn().at(0,-10.6,qt,-8.6,"idle",{face:[8.4,8.4]}).to(.6,"idle").go([[-10.4,qt,-4.6],[-11.6,qt,-1.8]],5.2,"run").to(2.3,"idle",{face:[-1.8,-3.6]}).to(2.9,"idle",{face:[-10,-1.9]}).to(3.1,"held").at(3.1,-6.5,qt+.7,-5.7,"held",{cut:1,face:[-7.6,-6.6]}).to(3.9,"held").mv(4.6,-1.4,qt,-2.2,"fall",{arc:2.6}).to(6.2,"down").mv(7.5,-1.4,qt-7,-2.2,"fall",{fall:1}).to(8.6,"fall"),t=Gn().at(0,8.4,qt,8.4,"idle",{face:[-10.6,-8.6]}).to(.5,"idle").go([[6.6,qt,-.2],[-1.8,qt,-3.6],[-9.6,qt,-2]],14,"charge").mv(2.9,-10,qt,-1.9,"grab",{ease:1,face:[-11.6,-1.8]}).to(3.1,"grab").at(3.1,-7.6,qt,-6.6,"grab",{face:[-1.4,-2.2]}).to(3.7,"grab").to(4.2,"throw").to(4.6,"idle").go([[-4,qt,-4.2]],4,"run").mv(6.2,-2.3,qt,-3,"slam",{arc:2.4}).mv(7.5,-2.3,qt-6.6,-3,"fly",{fall:1}).to(8.6,"fly");return{dur:8.6,init:3,mode:mf,act:{p:{k:"p",keys:i.keys},b:{k:"b",keys:t.keys}},brk:[[6.2,"ocu"],[6.2,"chand",2,1.6]],fx:[[2.85,3.2,"spark",-10.8,qt+1.6,-1.85,.7],[6.2,6.9,"shock",-1.6,qt,-2.6,8],[6.2,6.6,"spark",-1.6,qt+.4,-2.6,2]],arr:[[3.3,4.4,[-11.6,qt+1,-1.8],[-6.7,qt+1,-5.5],"fix"],[3.3,4.4,[-10,qt+1,-1.9],[-7.6,qt+1,-6.4],"fix"],[.5,2.3,[[8.4,qt+.4,8.4],[6.6,qt+.4,-.2],[-1.8,qt+.4,-3.6],[-9.4,qt+.4,-2]],null,"dash"]],lab:[[.5,2.3,"\u51B2\u523A\u6295\u6280\uFF1A\u5BFB\u8DEF\u9A71\u52A8\uFF0C\u65E0\u4ECE\u8EB2\u907F","b",5.2,null,"warn"],[2.3,2.85,"\u9760\u8FD1\u540E\u63D2\u503C\u5BF9\u9F50","b",4.8,null,"note"],[3.35,4.4,"\u77AC\u79FB\u5230\u56FA\u5B9A\u70B9\u4F4D",-9.2,qt+3.4,-3.6,"note"],[4.5,6.2,"\u4E22\u5230\u4E2D\u592E\u7684\u5929\u7A97\u4E0A",-1.4,qt+3.2,-2.2,"note"],[6.2,8.6,"\u5929\u7A97\u788E\u88C2\uFF0C\u4E24\u4EBA\u4E00\u8D77\u4E0B\u843D",-1.4,qt+3.8,-2.2,"warn"]],mask:[[2.85,3.35,"\u8FD9\u51E0\u5E27\u753B\u9762\u91CC\u53EA\u6709\u4E24\u4EBA\uFF0C\u770B\u4E0D\u5230\u73AF\u5883\uFF1A\u8D81\u673A\u4FEE\u6B63\u4E24\u4EBA\u7684\u4F4D\u7F6E"]],cam:[[0,{t:[-2,31.5,-1],r:66,ph:.86,th:.42}],[2,{t:[-6,31.5,-2],r:50,ph:.86,th:.42}],[2.6,{t:[-10.8,32,-1.85],r:12.5,ph:1.25,th:.12}],[3.1,{t:[-10.8,32,-1.85],r:12.5,ph:1.25,th:.12}],[3.1,{t:[-7.05,32,-6.15],r:12.5,ph:1.25,th:.12}],[3.5,{t:[-7.05,32,-6.15],r:12.5,ph:1.25,th:.12}],[4.5,{t:[-4,31.5,-4],r:34,ph:.9,th:.4}],[6.2,{t:[-2,31,-2.6],r:36,ph:.8,th:.4}],[7.6,{t:[-2,27,-2.6],r:46,ph:.6,th:.4}],[8.6,{t:[-2,26,-2.6],r:48,ph:.58,th:.4}]],shake:[[6.2,6.8,.4]],ch:[0,2.3,2.85,3.9,6.2],ctl:[[0,"play"],[2.3,"anim"]],sb:{x0:-24,x1:24,z0:-24,z1:24,y0:10,y1:44}}})(),Ox=(()=>{let i=Gn().at(0,-1.4,qt-1.2,-2.2,"fall").mv(1.6,11.5,cc,-4,"fall",{fall:1}).to(2.3,"down").mv(3,11.5,Ws,-4,"fall",{fall:1}).to(5.1,"down",{face:[6.6,-3.2]}).mv(5.6,10.4,Ws,-4.4,"dodge").mv(5.95,9.6,Ws,-4.2,"fall").mv(6.9,6.5,rt,-3.5,"fall",{fall:1}).to(7.6,"down").to(8.2,"idle",{face:[-1,2]}).to(9,"idle"),t=Gn().at(0,-2.3,qt-1.6,-3,"fly").mv(1.6,3,25.6,-2,"fly").mv(3,5.8,23.4,-3,"fly").mv(4.6,6.6,22.6,-3.2,"fly",{face:[11.5,-4]}).mv(5.2,9.8,21.4,-3.8,"charge",{face:[11.5,-4]}).mv(5.8,8.6,21.8,-3.2,"fly").mv(8,-5,rt,-9,"fly",{ease:1}).to(9,"idle",{face:[6.5,-3.5]});return{dur:9,init:4,mode:Dx,act:{p:{k:"p",keys:i.keys},b:{k:"b",keys:t.keys}},brk:[[-.4,"chand",2,1.6,1],[-.3,"ocu"],[2.3,"crash5"]],fx:[[1.2,1.9,"shock",-2.6,ct.L3+.1,-4.2,6],[2.3,2.8,"spark",11.5,cc,-4,1.2],[3,3.6,"shock",11.5,Ws,-4,4],[5.2,5.6,"spark",10.6,Ws+1,-4,.8],[6.9,7.5,"shock",6.5,rt,-3.5,5]],arr:[[4.6,5.3,[6.6,23.8,-3.2],[11.2,Ws+.8,-4],"atk"]],lab:[[0,1.6,"\u7838\u7A7F\u4E2D\u592E\u5929\u7A97",0,qt+1.6,-1.5,"note"],[.4,3,"\u56DE\u5ECA\u5C42\uFF08\u4E24\u5C42\uFF09",-11.5,cc+2.6,-4,"note"],[1.7,3,"\u56DE\u5ECA\u697C\u677F\u88AB\u7838\u7A7F\uFF0C\u6389\u4E0B\u4E00\u5C42",11.5,cc+2.8,-4,"warn"],[3,4.6,"Boss \u98DE\u7740\u8FFD\u4E0A\u6765","b",5.2,null,"warn"],[4.6,5.6,"QTE \u95EA\u907F","p",2.6,null,"qte"],[5.9,7.6,"\u6EDA\u51FA\u56DE\u5ECA\u8FB9\u7F18\uFF0C\u843D\u5230\u5EAD\u9662",6.5,rt+3.2,-3.5,"note"],[7.6,9,"\u7B2C\u4E8C\u6BB5\u6218\u6597\u5F00\u59CB",2,rt+4.4,-1,"note"]],cam:[[0,{t:[4,25.5,-4],r:70,ph:1.12,th:.3}],[1.6,{t:[6,23.5,-4],r:62,ph:1.12,th:.3}],[3,{t:[7.5,21.5,-4],r:52,ph:1.1,th:.32}],[4.6,{t:[9,21.5,-4],r:40,ph:1.08,th:.34}],[5.6,{t:[9,21,-4],r:40,ph:1.08,th:.34}],[6.9,{t:[6,16,-4],r:54,ph:1.08,th:.3}],[9,{t:[3,14.5,-3],r:66,ph:1.04,th:.3}]],shake:[[0,.5,.3],[2.3,2.7,.3],[6.9,7.2,.25]],ch:[0,1.7,3,4.6,5.6,8.2],ctl:[[0,"anim"],[4.6,"qte"],[5.6,"anim"],[8.2,"play"]],sb:{x0:-20,x1:20,z0:-12,z1:4,y0:10,y1:44}}})(),zx=(()=>{let i=Gn().at(0,9.6,rt,4.6,"idle",{face:[-3,4]}).to(1.9,"idle",{face:[-3,4]}).to(2,"held").mv(2.4,12.4,rt+.7,6.4,"held",{face:[-3,4]}).at(2.4,16.6,rt+.7,7.2,"held",{cut:1,face:[10,7.2]}).to(2.8,"held").mv(3.4,21.8,rt,7.2,"fall",{arc:.8}).to(4,"down").to(4.3,"idle",{face:[qe.x,qe.z]}).go([[23.6,rt,8.6],[qe.x,rt,qe.z],[26.9,rt,10.8],[26.9,rt,30.8]],6.2,"run").go([[Ye.x,rt,Ye.z],[24,rt,32.4]],4.5,"run").to(9.6,"idle",{face:[21,31]}).go([[22.4,rt,32]],2.4,"stumble").go([[21.6,rt,31.2]],2.2,"run").to(11.1,"idle",{face:[Be.x,Be.z]}).go([[re.ramp+.2,rt,30.6],[re.x1,Hl,30.4],[re.x0+.6,Hl,30.4]],3.4,"run").go([[14.2,13.85,30.6],[13.35,14.8,32.1]],1.25,"stumble").to(15.6,"stumble").mv(16.15,13.35,rt,32.1,"fall",{fall:1}).to(16.8,"down").to(17.1,"idle",{face:[12,31.4]}).go([[12.7,rt,31.4]],2.5,"run").to(17.9,"throw",{face:[11,31.4]}).to(18.1,"idle").go([[11,rt,30.8],[9.6,rt,30.5]],1.7,"walk").to(20.5,"idle",{face:[8.2,30.2]}).go([[7.4,rt,31.3]],1.6,"walk").to(22.3,"idle").go([[6.4,rt,31.1]],1.6,"walk").to(24.2,"idle",{face:[3,31]}).mv(24.7,3.6,rt,31.6,"fall",{arc:.9}).to(25.5,"down").mv(26.2,2.4,rt,31,"dodge").to(26.6,"idle",{face:[5.6,31.4]}).to(27.2,"push",{face:[4.6,31]}).to(27.9,"idle",{face:[3,29.95]}).mv(29.6,2.5,rt,33.3,"push",{face:[2.7,32.1]}).to(30.3,"push").to(30.7,"throw",{face:[3.4,28]}).to(31.2,"idle").go([[3.2,rt,31.6],[3.8,rt,30.2]],2,"walk").to(33.5,"idle",{face:[3.4,26.4]}),t=Gn().at(0,-3,rt,4,"cast",{face:[9.6,4.6]}).to(1.1,"cast").go([[6,rt,6.2],[8.8,rt,5.8]],13,"charge").mv(2.4,11.4,rt,6.4,"grab",{face:[16,7.2]}).at(2.4,15.2,rt,7.2,"grab",{face:[20,7.2]}).to(2.8,"grab").to(3.2,"slam").to(4,"idle").go([[19,rt,7.2],[21.8,rt,7.4],[23.8,rt,8.8],[qe.x,rt,qe.z],[26.9,rt,11.2],[26.9,rt,29.8]],6.4,"charge").go([[26.6,rt,32.4]],6,"charge").go([[24.8,rt,32.5]],6,"charge").to(11.6,"idle",{face:[20,31]}).go([[21.4,rt,32.8]],2.2,"run").to(15.8,"idle",{face:[13.35,32.1]}).to(16.6,"cast").to(18.2,"idle",{face:[12.7,31.4]}).to(18.3,"idle",{hide:1}).at(23.6,14,rt,34,"charge",{show:1,face:[8,32]}).go([[11,rt,33.6],[8.2,rt,32.1]],10.5,"charge").to(24.5,"slam",{face:[3.6,31.6]}).mv(25.3,5.6,rt,31.4,"run",{face:[3.6,31.6]}).to(25.6,"idle").to(26.1,"slam",{face:[3.4,31.2]}).to(26.6,"idle",{face:[3,30.4]}).mv(27,4.6,rt,31,"stumble",{face:[3,30.4]}).to(27.4,"stumble").mv(27.9,3,rt,29.95,"charge",{face:[3,31.4]}).mv(29.6,2.7,rt,32.1,"push",{face:[2.5,33.3]}).to(30.4,"push").mv(31,3.4,rt,26.4,"fall",{arc:.8,face:[2.5,33.3]}).to(31.8,"down").to(33.5,"idle",{face:[3.8,30.2]}),e=(n,s,r)=>[n,33.5,"debris",s,rt,r];return{dur:33.5,init:7,mode:Fx,act:{p:{k:"p",keys:i.keys},b:{k:"m",keys:t.keys}},brk:[[3,"wA"],[9.5,"wBe"],[15.6,"beam"],[17.8,"obst"],[23.75,"wBC"],[30.65,"wCn"],[30.65,"cab0"]],fx:[[0,1.1,"aura",-3,rt,4,2.8],[2,2.5,"spark",9.4,rt+1.5,5.4,1.2],[3,3.5,"spark",19,rt+1.6,7.2,1.4],[3.4,4,"shock",21.8,rt,7.2,3.5],[8.8,33.5,"fire",19.6,rt,34.2,1.6],[8.8,33.5,"fire",15.8,rt,34.3,1.9],[8.8,33.5,"fire",13,rt,34.5,1.1],[9.4,9.9,"spark",25.4,rt+1.6,32.4,1.6],[15.6,16,"spark",13.35,14.6,32.1,.9],[16.15,16.7,"shock",13.35,rt,32.1,3],[17.7,18.1,"spark",12,rt+1.2,31.4,1],e(19.2,8.2,30.2),e(20.8,10.2,31.4),e(21.8,5,30.2),[23.7,24.2,"spark",12,rt+1.6,33.8,1.6],[24.2,24.6,"spark",7,rt+1.4,31.6,1],[26,26.4,"spark",3.2,rt+1.2,31.2,.8],[27,27.4,"spark",4.4,rt+1.6,31,.8],[30.35,30.8,"spark",3,rt+1.8,31.4,1.4],[30.6,31.1,"spark",3.4,rt+1.6,29.1,1.8],[31,31.6,"shock",3.4,rt,26.4,4],[31,33.5,"drip",3.4,rt,26.4]],arr:[[1.1,2,[[-3,rt+.4,4],[6,rt+.4,6.2],[8.6,rt+.4,5.8]],null,"dash"],[27.9,29.6,[2.9,rt+.8,30.4],[2.6,rt+.8,33],"atk"],[30.4,31,[2.9,rt+1.6,31.6],[3.4,rt+1.6,27.4],"throw"]],lab:[[0,1.1,"Boss \u53D8\u5F02\uFF1A\u624B\u81C2\u81A8\u5927","b",5.4,null,"warn"],[1.1,2,"\u9AD8\u901F\u51B2\u6765\uFF0C\u64D2\u4F4F\u73A9\u5BB6","b",5.4,null,"warn"],[2,2.9,"\u955C\u5934\u6643\u52A8\u65F6\u628A\u4E24\u4EBA\u5B9A\u4F4D\u5230\u7279\u5B9A\u70B9\u4F4D",15.6,rt+5.6,7.2,"note"],[2.9,4.2,"\u4E00\u51FB\u6253\u7A7F\u5899\u58C1\uFF0C\u9001\u8FDB\u623F\u95F4",19.6,rt+4.6,7.2,"note"],[4,6.2,"\u955C\u5934\u6DF7\u5165\u6B63\u5E38\u89C6\u89D2\uFF0C\u6B63\u5BF9\u7740\u95E8",qe.x-.6,rt+3.2,qe.z,"item"],[6.2,9,"\u8D70\u5ECA\u5C3D\u5934\u574D\u584C",27,rt+3.2,35.6,"warn"],[7.8,9.4,"\u53F3\u624B\u8FB9\u7684\u95E8\uFF1A90\xB0 \u8F6C\u8EAB\u94BB\u8FDB\u53BB",Ye.x,rt+3.4,Ye.z-.6,"note"],[9.5,11.2,"Boss \u51B2\u7834\u6574\u9762\u5899","b",5.4,null,"warn"],[10,12.4,"\u5DE6\u524D\u65B9\u3001\u6B63\u524D\u65B9\u8D77\u706B\u574D\u584C",15.4,rt+3.6,35.2,"note"],[10.3,12.6,"\u53F3\u4FA7\uFF1A\u5E26\u5F15\u5BFC\u5761\u7684\u5C0F\u5E73\u53F0",18.4,Hl+1.6,30.2,"item"],[10.8,13.8,"\u5F80\u524D\u4E24\u6B65\u624D\u770B\u5230\u7684\u7F3A\u53E3",Be.x+.2,ct.L3+Be.y1+.9,Be.z,"item"],[13.6,15.6,"\u6CBF\u623F\u6881\u8D70\u5411\u7F3A\u53E3",13.6,16.8,32.4,"note"],[15.6,16.9,"\u623F\u6881\u8D70\u5230\u4E00\u534A\u65AD\u88C2",13.4,16.6,32.3,"warn"],[16.8,18.1,"\u65B0\u51FA\u8DEF\uFF1A\u6253\u7834\u5835\u4F4F\u95E8\u6D1E\u7684\u6728\u677F",12.2,rt+3.6,31.4,"item"],[18.3,23.5,"\u8282\u594F\u653E\u7F13\uFF1ABoss \u6682\u4E0D\u51FA\u73B0",6.2,rt+4.6,33.8,"note"],[19.2,23.4,"\u71C3\u70E7\u7684\u6B8B\u9AB8\u540C\u6B65\u843D\u4E0B",8.4,rt+3.2,30,"warn"],[23.7,25.3,"Boss \u4ECE\u8EAB\u540E\u7834\u5899\u51B2\u51FA","b",5.4,null,"warn"],[25.4,26.2,"QTE \u2460 \u95EA\u907F","p",2.8,null,"qte"],[26.6,27.4,"QTE \u2461 \u53CD\u51FB","p",2.8,null,"qte"],[29.6,30.4,"QTE \u2462 \u91CD\u521B","p",2.8,null,"qte"],[27.9,29.6,"Boss \u66F4\u731B\u70C8\u5730\u53CD\u51FB\uFF0C\u63A8\u7740\u73A9\u5BB6\u8D70","b",5.4,null,"warn"],[30.8,33.5,"\u6253\u7A7F\u5E26\u9152\u67DC\u7684\u5899\uFF0C\u56DE\u5230\u5EAD\u9662",3.4,rt+4.8,26.4,"note"],[31.2,33.5,"\u9152\u6DB2\u6DCB\u6EE1 Boss",3.4,rt+3,24.6,"item"]],cam:[[0,{t:[6,11.5,4],r:56,ph:.8,th:.62}],[1.8,{t:[11,11.5,6],r:46,ph:.8,th:.6}],[3.4,{t:[18,11.5,7.6],r:42,ph:.78,th:.66}],[4.6,{t:[23,11.5,9.6],r:40,ph:.72,th:.7}],[6.6,{t:[26,11.5,19],r:44,ph:.7,th:.9}],[8.6,{t:[25.2,11.5,29],r:40,ph:.68,th:1}],[9.8,{t:[21,12,31.6],r:40,ph:.64,th:1.02}],[11.2,{t:[18.4,12.4,31.4],r:38,ph:.66,th:.98}],[13.6,{t:[15,13,31.6],r:32,ph:.7,th:.92}],[16.4,{t:[13,12,31.8],r:32,ph:.7,th:.86}],[18.4,{t:[9.6,11.5,31.2],r:34,ph:.68,th:.6}],[22.6,{t:[7.2,11.5,31.2],r:34,ph:.68,th:.5}],[24.2,{t:[6,11.5,31.6],r:36,ph:.7,th:.42}],[29.6,{t:[3.6,11.5,31.2],r:34,ph:.72,th:.34}],[31.4,{t:[3.6,11.5,28.6],r:40,ph:.74,th:.3}],[33.5,{t:[3.6,11.5,28.4],r:42,ph:.76,th:.3}]],shake:[[2,2.9,.45],[3,3.3,.3],[9.5,9.9,.3],[15.6,15.9,.2],[16.15,16.4,.2],[23.75,24.3,.35],[30.6,31.1,.3]],ch:[0,3.6,9.5,13.6,18.3,23.6],ctl:[[0,"anim"],[4,"play"],[9.5,"anim"],[10,"play"],[23.6,"anim"],[25.4,"qte"],[26.2,"anim"],[26.6,"qte"],[27.4,"anim"],[29.6,"qte"],[30.4,"anim"],[31.2,"play"]],sb:{x0:-6,x1:30,z0:0,z1:38,y0:10,y1:18}}})(),kx=(()=>{let i=vn[1],t=Gn().at(0,3.8,rt,30.2,"idle",{face:[3.4,26.4]}).to(.9,"idle").to(1.4,"throw",{face:[3.4,26.4]}).to(2.6,"idle").go([[3.2,rt,27.6],[-1.6,rt,21.4],[-8,rt,11],[-12.5,rt,2.5],[-16.2,rt,-10.6],[-16.4,rt,i.z+.2]],7.5,"run").to(10.9,"idle",{face:[-5,-12.2]}).mv(11.4,-16,rt,-9,"dodge").to(12,"idle",{face:[-17.4,i.z]}).to(12.5,"throw",{face:[-17.4,i.z]}).to(16,"idle"),e=Gn().at(0,3.4,rt,26.4,"idle",{face:[3.8,30.2]}).to(1.4,"idle").to(2.2,"burn").go([[.6,rt,20],[-3,rt,8],[-4.4,rt,-4],[-5,rt,-12.2]],5.2,"run").to(10.6,"idle",{face:[-16.4,i.z]}).go([[-11,rt,-12.4],[-17.4,rt,i.z]],14,"charge").to(12.5,"idle").to(16,"burn");return{dur:16,init:15,mode:Ux,act:{p:{k:"p",keys:t.keys},b:{k:"m",keys:e.keys}},brk:[[11.4,"cab1"]],fx:[[0,16,"drip",3.4,rt,26.4],[1.4,1.8,"spark",3.4,rt+2,26.4,1.4],[1.4,8,"flame","b",2,null,1.1],[11.4,11.9,"spark",-18.2,rt+1.6,i.z,1.8],[11.45,16,"drip",-17.6,rt,i.z],[12.5,12.9,"spark","b",2.2,null,1.4],[12.5,16,"flame","b",2,null,1.1]],proj:[[.95,1.4,[3.8,rt+2,29.8],["b",2.2],"fire"],[12.05,12.5,[-16,rt+2,-9.4],["b",2.2],"fire"]],arr:[[10.6,11.5,[[-5,rt+.4,-12.2],[-11,rt+.4,-12.4],[-17.2,rt+.4,i.z]],null,"dash"]],lab:[[0,1.4,"\u9152\u6DB2\u6DCB\u6EE1 Boss","b",5.4,null,"item"],[1.4,3.6,"\u70B9\u71C3\uFF1A\u9152\u6DB2 + \u706B\u7130 = \u71C3\u70E7","b",5.4,null,"warn"],[3.6,11.4,"\u9152\u67DC",i.x+1.4,rt+3.6,i.z,"item"],[3.6,16,"\u9152\u67DC",vn[2].x,rt+3.6,vn[2].z+1.2,"item"],[3.6,16,"\u9152\u67DC",vn[3].x-1.2,rt+3.6,vn[3].z,"item"],[3.6,8.6,"\u73AF\u5ECA\u91CC\u8FD8\u6709\u4E09\u4E2A\u540C\u6837\u7684\u9152\u67DC",-2,rt+6.4,-6,"note"],[9,11.4,"\u7AD9\u5728\u9152\u67DC\u524D\uFF0C\u5F15\u8BF1 Boss \u51B2\u523A","p",3.4,null,"note"],[11.4,12.5,"Boss \u81EA\u5DF1\u649E\u788E\u9152\u67DC\u3001\u6DCB\u6E7F",-17.4,rt+5,i.z,"note"],[12.5,16,"\u518D\u6B21\u70B9\u71C3\uFF1A\u521A\u5B66\u5230\u7684\u6280\u5DE7\u53EF\u4EE5\u590D\u7528","b",5.4,null,"warn"]],cam:[[0,{t:[3.6,12,27.8],r:40,ph:.76,th:.3}],[2.6,{t:[2,12,24],r:52,ph:.76,th:.3}],[5.6,{t:[-6,11.5,8],r:80,ph:.74,th:.3}],[9,{t:[-11.5,11.5,-9],r:52,ph:.74,th:.26}],[16,{t:[-12,11.5,-10],r:48,ph:.74,th:.24}]],shake:[[11.4,11.8,.3]],ch:[0,1.4,3.6,9,11.4,12.5],ctl:[[0,"play"]],sb:{x0:-24,x1:24,z0:-30,z1:32,y0:10,y1:18}}})(),qr={chand:Nx,grab:Bx,fall:Ox,chase:zx,cab:kx};var Vl={fire:"#EC6E2A",throw:"#8B6B4A",atk:"#D2452F",dash:"#C2412E",fix:"#4F7FA6",route:"#D2872C"},An=i=>Math.max(0,Math.min(1,i)),gf=i=>i*i*(3-2*i),is=(i,t,e)=>i+(t-i)*e,xf=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},Hx=["fall","fly","held"];function Vx(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let o=i[s-1],a=n[1]-o[1],c=n[3]-o[3];Math.hypot(a,c)>.05&&(e=Math.atan2(a,c))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let o=!0;for(let d=0;d<r;d++){let g=i[d][5];g&&g.hide&&(o=!1),g&&g.show&&(o=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let d=i[s-1];return{x:d[1],y:d[2],z:d[3],pose:d[4],yaw:t[s-1],vis:o,air:!1}}let a=i[r-1],c=i[r],l=c[5]||{},h=c[0]-a[0],u=h>0?An((n-a[0])/h):1;l.ease&&(u=gf(u));let f=is(a[2],c[2],l.fall?u*u:u);return l.arc&&(f+=4*l.arc*u*(1-u)),{x:is(a[1],c[1],u),y:f,z:is(a[3],c[3],u),pose:c[4],yaw:xf(t[r-1],t[r],An((n-a[0])/.2)),vis:o,air:!!(l.arc||l.fall)}}}function Gx(i,t){let e=0;for(;e<i.length&&i[e][0]<=t;)e++;if(e===0)return i[0][1];if(e>=i.length)return i[i.length-1][1];let[n,s]=i[e-1],[r,o]=i[e],a=gf(An((t-n)/(r-n)));return{t:s.t.map((c,l)=>is(c,o.t[l],a)),r:Math.exp(is(Math.log(s.r),Math.log(o.r),a)),ph:is(s.ph,o.ph,a),th:xf(s.th,o.th,a)}}var Yr=(i,t,e)=>i>=t&&i<e;function _f(i,t,e={}){let n=rc(i),s=oc(i,t),r=new oe;r.name="stage",i.scene.add(r);let o=document.createElement("div");o.className="bs-mask",o.innerHTML="<span></span>",t.appendChild(o);let a=null,c=null,l=0,h=!1,u=!0,f="",d="",g=0,_={},m=[],p=[],b=[],y=[],x={},S=null,T=(M,I=0)=>typeof M=="string"?()=>{let L=_[M];return new N(L.F.root.position.x,L.F.root.position.y+I,L.F.root.position.z)}:null,R=(M,I=0)=>{if(typeof M!="string")return new N(...M);let L=_[M];return new N(L.F.root.position.x,L.F.root.position.y+I,L.F.root.position.z)};function P(){for(let M of[...r.children])r.remove(M),M.traverse(I=>{I.geometry&&I.geometry.dispose()});for(let M of y)s.remove(M.m);for(let M of Object.values(x))M&&M.dispose();_={},m=[],p=[],b=[],y=[],x={},S=null,f="",d=""}function E(){var I;let M=(I=a.scale)!=null?I:1.2;for(let[L,H]of Object.entries(a.act)){let Y=Wr(H.k);Y.root.scale.setScalar(H.k==="g"?1:M),r.add(Y.root),_[L]={F:Y,at:Vx(H.keys)}}if(a.route!==!1&&a.act.p){let L=[[]];a.act.p.keys.forEach((H,Y)=>{let K=H[5]||{};K.cut&&L.push([]);let Q=L[L.length-1],Z=Q[Q.length-1];(!Z||Math.hypot(Z[0]-H[1],Z[1]-H[2]-.12,Z[2]-H[3])>.05)&&Q.push([H[1],H[2]+.12,H[3],Y&&(K.arc||K.fall)?1:0])}),S=new oe,r.add(S);for(let H of L)H.length>1&&S.add(ac(H,Vl.route,.16,{every:6,xray:.18,opacity:.5}))}for(let L of a.fx||[]){let[H,Y,K,Q,Z,it,et]=L,W=null;if(K==="fire")W=es(et||1.5,(typeof Q=="number"?Q:3)+(it||0));else if(K==="flame")W=es(et||.8,5,{spot:!1});else if(K==="aura")W=ec(et||3);else if(K==="drip")W=nc();else if(K==="spark")W=cf(et||1);else if(K==="shock")W=ic(et||4);else if(K==="warn")W=ic(et||1),W.userData.at=null,W.material.color.set("#D2452F");else if(K==="debris"){W=new oe;let B=new Xt(new _n(1.3,.32,.5),new hn({color:"#5E4636",roughness:.9}));B.castShadow=!0,W.add(B);let ot=es(.35,3,{spot:!1});ot.position.y=.15,ot.scale.setScalar(.75),W.add(ot),W.userData.b=B,W.userData.fl=ot;let lt=ic(1);lt.material.color.set("#D2452F"),W.add(lt),W.userData.ring=lt}W&&(typeof Q!="string"&&W.position.set(Q,Z,it),W.visible=!1,r.add(W),m.push({t0:H,t1:Y,kind:K,g:W,ref:typeof Q=="string"?Q:null,dy:typeof Q=="string"?Z:0}))}for(let[L,H,Y,K,Q,Z]of a.proj||[]){let it=lf();Q==="throw"&&(it.userData.head.material=new hn({color:"#8B6B4A"}),it.userData.tail.forEach(et=>{et.visible=!1})),it.visible=!1,r.add(it),p.push({t0:L,t1:H,from:Y,to:K,arc:Z!=null?Z:.15,g:it})}for(let[L,H,Y,K,Q,Z]of a.arr||[]){let it=Q==="dash"||Q==="fix"?[.9,.5]:null,et=Vl[Q]||Vl.atk,W=Array.isArray(Y[0])?ns(Y,.2,et,{dash:it,every:999,last:!0,xray:.3}):sc(Y,K,et,{dash:it,r:Q==="dash"?.2:.14,arc:it?.04:.12,...Z||{}});W.visible=!1,r.add(W),b.push({t0:L,t1:H,g:W})}for(let L of a.lab||[]){let[H,Y,K,Q,Z,it,et]=L,W=et==="qte",B=s.add("bs-lab k-"+(et||"note"),(et==="item"||W?"<i>\u25C6</i>":"")+K+(W?"<s></s>":""),typeof Q=="string"?T(Q,Z):[Q,Z,it]);y.push({t0:H,t1:Y,m:B,q:W})}for(let L of a.brk||[])L[1]!=="chand"&&!x[L[1]]&&(x[L[1]]=n.burst(L[1]))}function v(){if(!a)return;let M=l,I=a.mode;for(let[Z,it]of a.modes||[])M>=Z&&(I=it);let L=JSON.stringify(I);L!==d&&(d=L,i.setMode(I));let H=[];for(let[Z,it,et,W,B]of a.brk||[])if(!(M<Z))if(it==="chand"){let ot=B!=null?B:n.chandAt(a.init),lt=An((M-Z)/(W||.7));H.push([it,is(ot,et,lt)])}else H.push([it,1,M<Z+.5]);let Y=JSON.stringify(H.map(Z=>[Z[0],typeof Z[1]=="number"?+Z[1].toFixed(3):Z[1],Z[2]]));if(Y!==f){f=Y,n.at(a.init);for(let[Z,it,et]of H)n.set(Z,it,et)}for(let[Z,it]of a.brk||[])x[it]&&x[it].at(M-Z);for(let Z of Object.values(_)){let it=Z.at(M),et=Z.F;et.root.visible=it.vis,et.root.position.set(it.x,it.y,it.z),et.root.rotation.y=it.yaw,et.pose(it.pose||"idle",M),et.ring.visible=!Hx.includes(it.pose)&&!it.air}for(let Z of m){let it=Yr(M,Z.t0,Z.t1);if(Z.g.visible=it,!it)continue;let et=M-Z.t0,W=Z.g;if(Z.ref){let B=R(Z.ref,Z.dy);W.position.copy(B)}if(Z.kind==="fire"||Z.kind==="flame"||Z.kind==="aura"||Z.kind==="drip")W.scale.setScalar(.25+.75*An(et/.4)),W.userData.tick&&W.userData.tick(M);else if(Z.kind==="spark"||Z.kind==="shock")W.userData.at(An(et/(Z.t1-Z.t0)));else if(Z.kind==="warn"){let B=et*2.2%1;W.scale.setScalar(.5+1.1*B),W.material.opacity=.85*(1-B)}else if(Z.kind==="debris"){let lt=An((et-.6)/.55),ut=W.userData.b,vt=W.userData.fl,$t=W.userData.ring,F=et<.6?7:7*(1-lt*lt);if(ut.visible=vt.visible=et>=.6-.05,ut.position.y=F+.16,vt.position.y=F+.3,ut.rotation.set(lt<1?et*3.2:.05,.6,lt<1?et*2.1:0),vt.userData.tick(M),$t.visible=lt<1,lt<1){let se=et*2.4%1;$t.scale.setScalar(.6+.9*se),$t.material.opacity=.9*(1-se)}}}for(let Z of p){let it=Yr(M,Z.t0,Z.t1);if(Z.g.visible=it,!it)continue;let et=vt=>typeof vt[0]=="string"?R(vt[0],vt[1]||0):R(vt),W=et(Z.from),B=et(Z.to),ot=W.distanceTo(B),lt=vt=>{let $t=W.clone().lerp(B,vt);return $t.y+=4*Z.arc*ot*vt*(1-vt)*.25,$t},ut=An((M-Z.t0)/(Z.t1-Z.t0));Z.g.userData.head.position.copy(lt(ut)),Z.g.userData.tail.forEach((vt,$t)=>vt.position.copy(lt(Math.max(0,ut-.035*($t+1)))))}for(let Z of b)Z.g.visible=Yr(M,Z.t0,Z.t1);for(let Z of y)Z.m.on=Yr(M,Z.t0,Z.t1),Z.q&&Z.m.on&&Z.m.e.style.setProperty("--q",(1-An((M-Z.t0)/(Z.t1-Z.t0))).toFixed(3));let K=0,Q="";for(let[Z,it,et]of a.mask||[])M>=Z-.25&&M<it+.25&&(K=Math.max(K,Math.min(An((M-Z+.25)/.25),An((it+.25-M)/.25))),Q=et);o.style.opacity=K.toFixed(3),o.style.display=K>0?"":"none",Q&&o.firstChild.textContent!==Q&&(o.firstChild.textContent=Q),u&&a.cam&&performance.now()>g&&U(M,!0),i.shadowDirty(),e.onT&&e.onT(a.dur?M/a.dur:0)}let C=M=>{let I=t.clientWidth/Math.max(1,t.clientHeight),L=I<1.25?Math.pow(1.25/I,.75):1;return{...M,r:M.r*L}};function U(M,I){let L=C(Gx(a.cam,M)),H=L.t[0],Y=L.t[1],K=L.t[2];for(let[Z,it,et]of a.shake||[])if(Yr(M,Z,it)){let W=Math.sin(Math.PI*(M-Z)/(it-Z))*et;H+=Math.sin(M*53)*W,Y+=Math.sin(M*41+1)*W*.6,K+=Math.cos(M*47)*W}let Q={th:L.th,ph:L.ph,r:L.r,t:new N(H,Y,K)};I?i.controls.set(Q,!0):i.controls.flyTo(Q,.9)}i.onFrame(M=>{!h||!a||(l=Math.min(a.dur,l+M),v(),l>=a.dur&&(k(),e.onEnd&&e.onEnd()))});function O(){a&&(l>=a.dur-.001&&(l=0),h=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function k(){h=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{u&&(u=!1,e.onFollow&&e.onFollow(!1))});function z(M,I={}){qr[M]&&(k(),P(),c=M,a=qr[M],l=0,u=!0,e.onFollow&&e.onFollow(!0),a.sb&&i.setShadowBox(a.sb),E(),I.fly&&a.cam?(U(0,!1),g=performance.now()+950,i.animUntil=g+150):g=0,v())}return{load:z,play:O,pause:k,isPlaying:()=>h,setT(M){a&&(l=An(M)*a.dur,v(),i.invalidate())},get t(){return a?l/a.dur:0},get id(){return c},get follow(){return u},setFollow(M){u=M,M&&a&&(U(l,!1),g=performance.now()+950,i.animUntil=g+150),e.onFollow&&e.onFollow(M)},resetView(){this.setFollow(!0)},info:M=>{let I=qr[M||c];return I?{dur:I.dur,ch:I.ch,ctl:I.ctl}:null},scenes:Object.keys(qr),dispose(){k(),P(),o.remove(),s.lay.remove(),i.scene.remove(r)}}}return If(Wx);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
