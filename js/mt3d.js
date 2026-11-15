var MT3D=(()=>{var ol=Object.defineProperty;var pd=Object.getOwnPropertyDescriptor;var md=Object.getOwnPropertyNames;var gd=Object.prototype.hasOwnProperty;var xd=(i,t)=>{for(var e in t)ol(i,e,{get:t[e],enumerable:!0})},_d=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of md(t))!gd.call(i,s)&&s!==e&&ol(i,s,{get:()=>t[s],enumerable:!(n=pd(t,s))||n.enumerable});return i};var yd=i=>_d(ol({},"__esModule",{value:!0}),i);var Ux={};xd(Ux,{VIEWS:()=>ja,arena:()=>od,booth:()=>ad,createShow:()=>nl,mount:()=>tl});var bh=0,ql=1,Sh=2;var Yl=1,ys=2,In=3,kn=0,Ge=1,ze=2,Wn=0,vi=1,Zl=2,Jl=3,$l=4,Eh=5,ii=100,wh=101,Th=102,Ah=103,Rh=104,Ch=200,Ih=201,Ph=202,Lh=203,mo=204,go=205,Dh=206,Uh=207,zh=208,Fh=209,Nh=210,Bh=211,Oh=212,kh=213,Hh=214,Zo=0,Jo=1,$o=2,Mi=3,Ko=4,Qo=5,jo=6,ta=7,Kl=0,Vh=1,Gh=2,Xn=0,Wh=1,Xh=2,qh=3,Yh=4,Zh=5,Jh=6,vs=7;var Ql=300,Ii=301,Pi=302,ea=303,na=304,Mr=306,xo=1e3,ni=1001,_o=1002,Ze=1003,$h=1004;var br=1005;var _n=1006,ia=1007;var oi=1008;var Sn=1009,jl=1010,tc=1011,Ms=1012,sa=1013,ai=1014,En=1015,bs=1016,ra=1017,oa=1018,Ss=1020,ec=35902,nc=35899,ic=1021,sc=1022,hn=1023,os=1026,Es=1027,aa=1028,la=1029,rc=1030,ca=1031;var ha=1033,Sr=33776,Er=33777,wr=33778,Tr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,xa=37496,_a=37808,ya=37809,va=37810,Ma=37811,ba=37812,Sa=37813,Ea=37814,wa=37815,Ta=37816,Aa=37817,Ra=37818,Ca=37819,Ia=37820,Pa=37821,La=36492,Da=36494,Ua=36495,za=36283,Fa=36284,Na=36285,Ba=36286;var qs=2300,yo=2301,po=2302,Ul=2400,zl=2401,Fl=2402;var Kh=3200,Qh=3201;var oc=0,jh=1,qn="",en="srgb",bi="srgb-linear",Ys="linear",re="srgb";var yi=7680;var Nl=519,tu=512,eu=513,nu=514,ac=515,iu=516,su=517,ru=518,ou=519,Bl=35044;var lc="300 es",xn=2e3,Zs=2001;var Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,ss=Math.PI/180,as=180/Math.PI;function ws(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function cc(i,t){return(i%t+t)%t}function vd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Md(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function bd(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function Sd(i,t=1){return t-Math.abs(cc(i,t*2)-t)}function Ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function wd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Td(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ad(i,t){return i+Math.random()*(t-i)}function Rd(i){return i*(.5-Math.random())}function Cd(i){i!==void 0&&(Wc=i);let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(i){return i*ss}function Pd(i){return i*as}function Ld(i){return(i&i-1)===0&&i!==0}function Dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function is(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Oa={DEG2RAD:ss,RAD2DEG:as,generateUUID:ws,clamp:Qt,euclideanModulo:cc,mapLinear:vd,inverseLerp:Md,lerp:Gs,damp:bd,pingpong:Sd,smoothstep:Ed,smootherstep:wd,randInt:Td,randFloat:Ad,randFloatSpread:Rd,seededRandom:Cd,degToRad:Id,radToDeg:Pd,isPowerOfTwo:Ld,ceilPowerOfTwo:Dd,floorPowerOfTwo:Ud,setQuaternionFromProperEuler:zd,normalize:He,denormalize:is},Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a,p=c*d+l*f+h*m+u*v,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let M=Math.sqrt(_),R=Math.atan2(M,p*w);g=Math.sin(g*R)/M,a=Math.sin(a*R)/M}let y=a*w;if(c=c*g+d*y,l=l*g+f*y,h=h*g+m*y,u=u*g+v*y,g===1-a){let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new N,Xc=new yn,Zt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],w=s[1],_=s[4],y=s[7],M=s[2],R=s[5],L=s[8];return r[0]=o*v+a*w+c*M,r[3]=o*g+a*_+c*R,r[6]=o*p+a*y+c*L,r[1]=l*v+h*w+u*M,r[4]=l*g+h*_+u*R,r[7]=l*p+h*y+u*L,r[2]=d*v+f*w+m*M,r[5]=d*g+f*_+m*R,r[8]=d*p+f*y+m*L,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ll=new Zt;function hc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){let i=Js("canvas");return i.style.display="block",i}var qc={};function ls(i){i in qc||(qc[i]=!0,console.warn(i))}function lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fd(){let i={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===re&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Ys:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[bi]:{primaries:t,whitePoint:n,transfer:Ys,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:t,whitePoint:n,transfer:re,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var ee=Fd();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Wi,vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wi===void 0&&(Wi=Js("canvas")),Wi.width=t.width,Wi.height=t.height;let s=Wi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=On(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nd=0,cs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(cl(s[o].image)):r.push(cl(s[o]))}else r=cl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bd=0,hl=new N,Je=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ni,s=ni,r=_n,o=oi,a=hn,c=Sn,l=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=ws(),this.name="",this.source=new cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hl).x}get height(){return this.source.getSize(hl).y}get depth(){return this.source.getSize(hl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xo:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xo:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Ql;Je.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,y=(f+1)/2,M=(p+1)/2,R=(h+d)/4,L=(u+v)/4,F=(m+g)/4;return _>y&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=L/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=F/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=L/r,s=F/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mo=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Je(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new cs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},$s=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(r,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Hr.subVectors(this.max,zs),Xi.subVectors(t.a,zs),qi.subVectors(t.b,zs),Yi.subVectors(t.c,zs),$n.subVectors(qi,Xi),Kn.subVectors(Yi,qi),mi.subVectors(Xi,Yi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-mi.z,mi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,mi.z,0,-mi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-mi.y,mi.x,0];return!ul(e,Xi,qi,Yi,Hr)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,Xi,qi,Yi,Hr))?!1:(Vr.crossVectors($n,Kn),e=[Vr.x,Vr.y,Vr.z],ul(e,Xi,qi,Yi,Hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,kr=new Cn,Xi=new N,qi=new N,Yi=new N,$n=new N,Kn=new N,mi=new N,zs=new N,Hr=new N,Vr=new N,gi=new N;function ul(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Od=new Cn,Fs=new N,dl=new N,Vn=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(dl)),this.expandByPoint(Fs.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Un=new N,fl=new N,Gr=new N,Qn=new N,pl=new N,Wr=new N,ml=new N,hs=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fl.copy(t).add(e).multiplyScalar(.5),Gr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(fl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Gr),a=Qn.dot(this.direction),c=-Qn.dot(Gr),l=Qn.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fl).addScaledVector(Gr,d),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){pl.subVectors(e,t),Wr.subVectors(n,t),ml.crossVectors(pl,Wr);let o=this.direction.dot(ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let c=a*this.direction.dot(Wr.crossVectors(Qn,Wr));if(c<0)return null;let l=a*this.direction.dot(pl.cross(Qn));if(l<0||c+l>o)return null;let h=-a*Qn.dot(ml);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),o=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,Hd)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),jn.crossVectors(n,je),jn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),jn.crossVectors(n,je)),jn.normalize(),Xr.crossVectors(je,jn),s[0]=jn.x,s[4]=Xr.x,s[8]=je.x,s[1]=jn.y,s[5]=Xr.y,s[9]=je.y,s[2]=jn.z,s[6]=Xr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],w=n[3],_=n[7],y=n[11],M=n[15],R=s[0],L=s[4],F=s[8],S=s[12],b=s[1],D=s[5],k=s[9],H=s[13],$=s[2],X=s[6],Z=s[10],q=s[14],Q=s[3],mt=s[7],_t=s[11],bt=s[15];return r[0]=o*R+a*b+c*$+l*Q,r[4]=o*L+a*D+c*X+l*mt,r[8]=o*F+a*k+c*Z+l*_t,r[12]=o*S+a*H+c*q+l*bt,r[1]=h*R+u*b+d*$+f*Q,r[5]=h*L+u*D+d*X+f*mt,r[9]=h*F+u*k+d*Z+f*_t,r[13]=h*S+u*H+d*q+f*bt,r[2]=m*R+v*b+g*$+p*Q,r[6]=m*L+v*D+g*X+p*mt,r[10]=m*F+v*k+g*Z+p*_t,r[14]=m*S+v*H+g*q+p*bt,r[3]=w*R+_*b+y*$+M*Q,r[7]=w*L+_*D+y*X+M*mt,r[11]=w*F+_*k+y*Z+M*_t,r[15]=w*S+_*H+y*q+M*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],w=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,_=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,y=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,M=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,R=e*w+n*_+s*y+r*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return t[0]=w*L,t[1]=(v*d*r-u*g*r-v*s*f+n*g*f+u*s*p-n*d*p)*L,t[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*L,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*L,t[4]=_*L,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*L,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*L,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*L,t[8]=y*L,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*p-e*u*p)*L,t[10]=(o*v*r-m*a*r+m*n*l-e*v*l-o*n*p+e*a*p)*L,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*L,t[12]=M*L,t[13]=(h*v*s-m*u*s+m*n*d-e*v*d-h*n*g+e*u*g)*L,t[14]=(m*a*s-o*v*s-m*n*c+e*v*c+o*n*g-e*a*g)*L,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*L,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,w=c*l,_=c*h,y=c*u,M=n.x,R=n.y,L=n.z;return s[0]=(1-(v+p))*M,s[1]=(f+y)*M,s[2]=(m-_)*M,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+p))*R,s[6]=(g+w)*R,s[7]=0,s[8]=(m+_)*L,s[9]=(g-w)*L,s[10]=(1-(d+v))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],mn.copy(this);let l=1/r,h=1/o,u=1/a;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=u,mn.elements[9]*=u,mn.elements[10]*=u,e.setFromRotationMatrix(mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xn,c=!1){let l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,v;if(c)m=r/(o-r),v=o*r/(o-r);else if(a===xn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Zs)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,v;if(c)m=1/(o-r),v=o/(o-r);else if(a===xn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Zs)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Zi=new N,mn=new se,kd=new N(0,0,0),Hd=new N(1,1,1),jn=new N,Xr=new N,je=new N,Jc=new se,$c=new yn,vn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vd=0,Kc=new N,Ji=new yn,zn=new se,qr=new N,Ns=new N,Gd=new N,Wd=new yn,Qc=new N(1,0,0),jc=new N(0,1,0),th=new N(0,0,1),eh={type:"added"},Xd={type:"removed"},$i={type:"childadded",child:null},gl={type:"childremoved",child:null},Ie=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new vn,n=new yn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Zt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return Kc.copy(t).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qr.copy(t):qr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ns,qr,this.up):zn.lookAt(qr,Ns,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(zn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xd),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Gd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new N(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new N,Fn=new N,xl=new N,Nn=new N,Ki=new N,Qi=new N,nh=new N,_l=new N,yl=new N,vl=new N,Ml=new _e,bl=new _e,Sl=new _e,Bn=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Fn.subVectors(n,e),xl.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Fn),c=gn.dot(xl),l=Fn.dot(Fn),h=Fn.dot(xl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Nn.x),c.addScaledVector(o,Nn.y),c.addScaledVector(a,Nn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ml.setScalar(0),bl.setScalar(0),Sl.setScalar(0),Ml.fromBufferAttribute(t,e),bl.fromBufferAttribute(t,n),Sl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ml,r.x),o.addScaledVector(bl,r.y),o.addScaledVector(Sl,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Fn.subVectors(t,e),gn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),gn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),Qi.subVectors(r,n),_l.subVectors(t,n);let c=Ki.dot(_l),l=Qi.dot(_l);if(c<=0&&l<=0)return e.copy(n);yl.subVectors(t,s);let h=Ki.dot(yl),u=Qi.dot(yl);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ki,o);vl.subVectors(t,r);let f=Ki.dot(vl),m=Qi.dot(vl);if(m>=0&&f<=m)return e.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Qi,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return nh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(nh,a);let p=1/(g+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function El(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=cc(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=El(o,r,t+1/3),this.g=El(o,r,t),this.b=El(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=en){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=en){let n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return ee.workingToColorSpace(Ue.copy(this),t),Math.round(Qt(Ue.r*255,0,255))*65536+Math.round(Qt(Ue.g*255,0,255))*256+Math.round(Qt(Ue.b*255,0,255))}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=en){ee.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==en?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Yr);let n=Gs(ti.h,Yr.h,e),s=Gs(ti.s,Yr.s,e),r=Gs(ti.l,Yr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Jt;Jt.NAMES=cu;var qd=0,Gn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ws(),this.name="",this.type="Material",this.blending=vi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yi,this.stencilZFail=yi,this.stencilZPass=yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},we=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new N,Zr=new Dt,Yd=0,ce=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Bl,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bl&&(t.usage=this.usage),t}};var Ks=class extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Qs=class extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}},Zd=0,on=new se,wl=new Ie,ji=new N,tn=new Cn,Bs=new Cn,Re=new N,Me=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hc(t)?Qs:Ks)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(tn.min,Bs.min),tn.expandByPoint(Re),Re.addVectors(tn.max,Bs.max),tn.expandByPoint(Re)):(tn.expandByPoint(Bs.min),tn.expandByPoint(Bs.max))}tn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(t,l),Re.add(ji)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new N,c[F]=new N;let l=new N,h=new N,u=new N,d=new Dt,f=new Dt,m=new Dt,v=new N,g=new N;function p(F,S,b){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(D),a[F].add(v),a[S].add(v),a[b].add(v),c[F].add(g),c[S].add(g),c[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,S=w.length;F<S;++F){let b=w[F],D=b.start,k=b.count;for(let H=D,$=D+k;H<$;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let _=new N,y=new N,M=new N,R=new N;function L(F){M.fromBufferAttribute(s,F),R.copy(M);let S=a[F];_.copy(S),_.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(R,S);let D=y.dot(c[F])<0?-1:1;o.setXYZW(F,_.x,_.y,_.z,D)}for(let F=0,S=w.length;F<S;++F){let b=w[F],D=b.start,k=b.count;for(let H=D,$=D+k;H<$;H+=3)L(t.getX(H+0)),L(t.getX(H+1)),L(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new se,xi=new hs,Jr=new Vn,sh=new N,$r=new N,Kr=new N,Qr=new N,Tl=new N,jr=new N,rh=new N,to=new N,jt=class extends Ie{constructor(t=new Me,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Tl.fromBufferAttribute(u,t),o?jr.addScaledVector(Tl,h):jr.addScaledVector(Tl.sub(e),h))}e.add(jr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(Jr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Jr,sh)===null||xi.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),xi.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,M=_;y<M;y+=3){let R=a.getX(y),L=a.getX(y+1),F=a.getX(y+2);s=eo(this,p,t,n,l,h,u,R,L,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let w=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);s=eo(this,o,t,n,l,h,u,w,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=w,M=_;y<M;y+=3){let R=y,L=y+1,F=y+2;s=eo(this,p,t,n,l,h,u,R,L,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let w=g,_=g+1,y=g+2;s=eo(this,o,t,n,l,h,u,w,_,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Jd(i,t,e,n,s,r,o,a){let c;if(t.side===Ge?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===kn,a),c===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:i}}function eo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,$r),i.getVertexPosition(c,Kr),i.getVertexPosition(l,Qr);let h=Jd(i,t,e,n,$r,Kr,Qr,rh);if(h){let u=new N;Bn.getBarycoord(rh,$r,Kr,Qr,u),s&&(h.uv=Bn.getInterpolatedAttribute(s,a,c,l,u,new Dt)),r&&(h.uv1=Bn.getInterpolatedAttribute(r,a,c,l,u,new Dt)),o&&(h.normal=Bn.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new N,materialIndex:0};Bn.getNormal($r,Kr,Qr,d.normal),h.face=d,h.barycoord=u}return h}var Ve=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function m(v,g,p,w,_,y,M,R,L,F,S){let b=y/L,D=M/F,k=y/2,H=M/2,$=R/2,X=L+1,Z=F+1,q=0,Q=0,mt=new N;for(let _t=0;_t<Z;_t++){let bt=_t*D-H;for(let yt=0;yt<X;yt++){let St=yt*b-k;mt[v]=St*w,mt[g]=bt*_,mt[p]=$,l.push(mt.x,mt.y,mt.z),mt[v]=0,mt[g]=0,mt[p]=R>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(yt/L),u.push(1-_t/F),q+=1}}for(let _t=0;_t<F;_t++)for(let bt=0;bt<L;bt++){let yt=d+bt+X*_t,St=d+bt+X*(_t+1),Vt=d+(bt+1)+X*(_t+1),Nt=d+(bt+1)+X*_t;c.push(yt,St,Nt),c.push(St,Vt,Nt),Q+=6}a.addGroup(f,Q,S),f+=Q,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Li(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){let t={};for(let e=0;e<i.length;e++){let n=Li(i[e]);for(let s in n)t[s]=n[s]}return t}function $d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var hu={clone:Li,merge:Fe},Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Li(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},js=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ei=new N,oh=new Dt,ah=new Dt,Ce=class extends js{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ss*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ts=-90,es=1,So=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new Ce(ts,es,t,e);r.layers=this.layers,this.add(r);let o=new Ce(ts,es,t,e);o.layers=this.layers,this.add(o);let a=new Ce(ts,es,t,e);a.layers=this.layers,this.add(a);let c=new Ce(ts,es,t,e);c.layers=this.layers,this.add(c);let l=new Ce(ts,es,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},tr=class extends Je{constructor(t=[],e=Ii,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Eo=class extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Wn});r.uniforms.tEquirect.value=e;let o=new jt(s,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=_n),new So(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},le=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Si=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var wo=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ze,h=Ze,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class extends ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new se,lh=new se,no=[],ch=new Cn,tf=new se,Os=new jt,ks=new Vn,nr=class extends jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),ch.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),ks.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(ks)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),lh.multiplyMatrices(n,ns),Os.matrixWorld=lh,Os.raycast(t,no);for(let o=0,a=no.length;o<a;o++){let c=no[o];c.instanceId=r,c.object=this,e.push(c)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wo(new Float32Array(s*this.count),s,this.count,aa,En));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Al=new N,ef=new N,nf=new Zt,an=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Al.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Vn,sf=new Dt(.5,.5),io=new N,fs=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,o=new an){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],v=r[9],g=r[10],p=r[11],w=r[12],_=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-o,f-h,p-m,M-w).normalize(),s[1].setComponents(l+o,f+h,p+m,M+w).normalize(),s[2].setComponents(l+a,f+u,p+v,M+_).normalize(),s[3].setComponents(l-a,f-u,p-v,M-_).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,f-d,p-g,M-y).normalize();else if(s[4].setComponents(l-c,f-d,p-g,M-y).normalize(),e===xn)s[5].setComponents(l+c,f+d,p+g,M+y).normalize();else if(e===Zs)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){_i.center.set(0,0,0);let e=sf.distanceTo(t.center);return _i.radius=.7071067811865476+e,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ps=class extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},To=new N,Ao=new N,hh=new se,Hs=new hs,so=new Vn,Rl=new N,uh=new N,Ro=class extends Ie{constructor(t=new Me,e=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)To.fromBufferAttribute(e,s-1),Ao.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=To.distanceTo(Ao);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;hh.copy(s).invert(),Hs.copy(t.ray).applyMatrix4(hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){let p=h.getX(v),w=h.getX(v+1),_=ro(this,t,Hs,c,p,w,v);_&&e.push(_)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=ro(this,t,Hs,c,v,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){let p=ro(this,t,Hs,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=ro(this,t,Hs,c,m-1,f,m-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ro(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(To.fromBufferAttribute(a,s),Ao.fromBufferAttribute(a,r),e.distanceSqToSegment(To,Ao,Rl,uh)>n)return;Rl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Rl);if(!(l<t.near||l>t.far))return{distance:l,point:uh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var dh=new N,fh=new N,ir=class extends Ro{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)dh.fromBufferAttribute(e,s),fh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dh.distanceTo(fh);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var sr=class extends Je{constructor(t,e,n=ai,s,r,o,a=Ze,c=Ze,l,h=os,u=1){if(h!==os&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},or=class i extends Me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,m=n*2+r,v=s+1,g=new N,p=new N;for(let w=0;w<=m;w++){let _=0,y=0,M=0,R=0;if(w<=n){let S=w/n,b=S*Math.PI/2;y=-h-t*Math.cos(b),M=t*Math.sin(b),R=-t*Math.cos(b),_=S*u}else if(w<=n+r){let S=(w-n)/r;y=-h+S*e,M=t,R=0,_=u+S*d}else{let S=(w-n-r)/n,b=S*Math.PI/2;y=h+t*Math.sin(b),M=t*Math.cos(b),R=t*Math.sin(b),_=u+d+S*u}let L=Math.max(0,Math.min(1,_/f)),F=0;w===0?F=.5/s:w===m&&(F=-.5/s);for(let S=0;S<=s;S++){let b=S/s,D=b*Math.PI*2,k=Math.sin(D),H=Math.cos(D);p.x=-M*H,p.y=y,p.z=M*k,a.push(p.x,p.y,p.z),g.set(-M*H,R,M*k),g.normalize(),c.push(g.x,g.y,g.z),l.push(b+F,L)}if(w>0){let S=(w-1)*v;for(let b=0;b<s;b++){let D=S+b,k=S+b+1,H=w*v+b,$=w*v+b+1;o.push(D,k,H),o.push(k,$,H)}}}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var bn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;w(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function w(){let y=new N,M=new N,R=0,L=(e-t)/n;for(let F=0;F<=r;F++){let S=[],b=F/r,D=b*(e-t)+t;for(let k=0;k<=s;k++){let H=k/s,$=H*c+a,X=Math.sin($),Z=Math.cos($);M.x=D*X,M.y=-b*n+g,M.z=D*Z,u.push(M.x,M.y,M.z),y.set(X,L,Z).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-b),S.push(m++)}v.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let b=v[S][F],D=v[S+1][F],k=v[S+1][F+1],H=v[S][F+1];(t>0||S!==0)&&(h.push(b,D,H),R+=3),(e>0||S!==r-1)&&(h.push(D,k,H),R+=3)}l.addGroup(p,R,0),p+=R}function _(y){let M=m,R=new Dt,L=new N,F=0,S=y===!0?t:e,b=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),m++;let D=m;for(let k=0;k<=s;k++){let $=k/s*c+a,X=Math.cos($),Z=Math.sin($);L.x=S*Z,L.y=g*b,L.z=S*X,u.push(L.x,L.y,L.z),d.push(0,b,0),R.x=X*.5+.5,R.y=Z*.5*b+.5,f.push(R.x,R.y),m++}for(let k=0;k<s;k++){let H=M+k,$=D+k;y===!0?h.push($,$+1,H):h.push($+1,$,H),F+=3}l.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ar=class i extends bn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Co=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){let _=new N,y=new N,M=new N;for(let R=0;R<e.length;R+=3)f(e[R+0],_),f(e[R+1],y),f(e[R+2],M),c(_,y,M,w)}function c(w,_,y,M){let R=M+1,L=[];for(let F=0;F<=R;F++){L[F]=[];let S=w.clone().lerp(y,F/R),b=_.clone().lerp(y,F/R),D=R-F;for(let k=0;k<=D;k++)k===0&&F===R?L[F][k]=S:L[F][k]=S.clone().lerp(b,k/D)}for(let F=0;F<R;F++)for(let S=0;S<2*(R-F)-1;S++){let b=Math.floor(S/2);S%2===0?(d(L[F][b+1]),d(L[F+1][b]),d(L[F][b])):(d(L[F][b+1]),d(L[F+1][b+1]),d(L[F+1][b]))}}function l(w){let _=new N;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(w),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function h(){let w=new N;for(let _=0;_<r.length;_+=3){w.x=r[_+0],w.y=r[_+1],w.z=r[_+2];let y=g(w)/2/Math.PI+.5,M=p(w)/Math.PI+.5;o.push(y,1-M)}m(),u()}function u(){for(let w=0;w<o.length;w+=6){let _=o[w+0],y=o[w+2],M=o[w+4],R=Math.max(_,y,M),L=Math.min(_,y,M);R>.9&&L<.1&&(_<.2&&(o[w+0]+=1),y<.2&&(o[w+2]+=1),M<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,_){let y=w*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function m(){let w=new N,_=new N,y=new N,M=new N,R=new Dt,L=new Dt,F=new Dt;for(let S=0,b=0;S<r.length;S+=9,b+=6){w.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),R.set(o[b+0],o[b+1]),L.set(o[b+2],o[b+3]),F.set(o[b+4],o[b+5]),M.copy(w).add(_).add(y).divideScalar(3);let D=g(M);v(R,b+0,w,D),v(L,b+2,_,D),v(F,b+4,y,D)}}function v(w,_,y,M){M<0&&w.x===1&&(o[_]=w.x-1),y.x===0&&y.z===0&&(o[_]=M/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var oo=new N,ao=new N,Cl=new N,lo=new Bn,lr=class extends Me{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(ss*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){o?(l[0]=o.getX(m),l[1]=o.getX(m+1),l[2]=o.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:v,b:g,c:p}=lo;if(v.fromBufferAttribute(a,l[0]),g.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),lo.getNormal(Cl),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let w=0;w<3;w++){let _=(w+1)%3,y=u[w],M=u[_],R=lo[h[w]],L=lo[h[_]],F=`${y}_${M}`,S=`${M}_${y}`;S in d&&d[S]?(Cl.dot(d[S].normal)<=r&&(f.push(R.x,R.y,R.z),f.push(L.x,L.y,L.z)),d[S]=null):F in d||(d[F]={index0:l[w],index1:l[_],normal:Cl.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:g}=d[m];oo.fromBufferAttribute(a,v),ao.fromBufferAttribute(a,g),f.push(oo.x,oo.y,oo.z),f.push(ao.x,ao.y,ao.z)}this.setAttribute("position",new ie(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Dt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new se;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},cr=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Io=class extends cr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var co=new N,Il=new dc,Pl=new dc,Ll=new dc,Ei=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(co.subVectors(s[0],s[1]).add(s[0]),l=co);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(co.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=co),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Il.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),Pl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Ll.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Il.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Pl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ll.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Il.calc(c),Pl.calc(c),Ll.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ph(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function rf(i,t){let e=1-i;return e*e*t}function of(i,t){return 2*(1-i)*i*t}function af(i,t){return i*i*t}function Ws(i,t,e,n){return rf(i,t)+of(i,e)+af(i,n)}function lf(i,t){let e=1-i;return e*e*e*t}function cf(i,t){let e=1-i;return 3*e*e*i*t}function hf(i,t){return 3*(1-i)*i*i*t}function uf(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return lf(i,t)+cf(i,e)+hf(i,n)+uf(i,s)}var Po=class extends ln{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lo=class extends ln{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Do=class extends ln{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ms=class extends ln{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uo=class extends ln{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hr=class extends ln{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zo=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ph(a,c.x,l.x,h.x,u.x),ph(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},df=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:Ei,CubicBezierCurve:Po,CubicBezierCurve3:Lo,EllipseCurve:cr,LineCurve:Do,LineCurve3:ms,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:hr,SplineCurve:zo});function ff(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=uu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=_f(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<c&&(c=m),f>h&&(h=f),m>u&&(u=m)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ur(r,o,e,a,c,l,0),o}function uu(i,t,e,n,s){let r;if(s===Cf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=mh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=mh(o/n|0,i[o],i[o+1],r);return r&&gs(r,r.next)&&(fr(r),r=r.next),r}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(gs(e,e.next)||xe(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ur(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Sf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?mf(i,n,s,r):pf(i)){t.push(c.i,i.i,l.i),fr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=gf(wi(i),t),ur(i,t,e,n,s,r,2)):o===2&&xf(i,t,e,n,s,r):ur(wi(i),t,e,n,s,r,1);break}}}function pf(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Vs(s,a,r,c,o,l,m.x,m.y)&&xe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(h,u,d),v=Math.max(a,c,l),g=Math.max(h,u,d),p=Ol(f,m,t,e,n),w=Ol(v,g,t,e,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=p&&y&&y.z<=w;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Vs(a,h,c,u,l,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Vs(a,h,c,u,l,d,y.x,y.y)&&xe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==s&&_!==o&&Vs(a,h,c,u,l,d,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=w;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&Vs(a,h,c,u,l,d,y.x,y.y)&&xe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function gf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!gs(n,s)&&fu(n,e,e.next,s)&&dr(n,s)&&dr(s,n)&&(t.push(n.i,e.i,s.i),fr(e),fr(e.next),e=i=s),e=e.next}while(e!==i);return wi(e)}function xf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tf(o,a)){let c=pu(o,a);o=wi(o,o.next),c=wi(c,c.next),ur(o,t,e,n,s,r,0),ur(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _f(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=uu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(wf(l))}s.sort(yf);for(let r=0;r<s.length;r++)e=vf(s[r],e);return e}function yf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vf(i,t){let e=Mf(i,t);if(!e)return t;let n=pu(e,i);return wi(n,n.next),wi(e,e.next)}function Mf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(gs(i,e))return e;do{if(gs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&du(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);dr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&bf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function bf(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Sf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ef(s)}function Ef(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function du(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Vs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&du(i,t,e,n,s,r,o,a)}function Tf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Af(i,t)&&(dr(i,t)&&dr(t,i)&&Rf(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||gs(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function gs(i,t){return i.x===t.x&&i.y===t.y}function fu(i,t,e,n){let s=uo(xe(i,t,e)),r=uo(xe(i,t,n)),o=uo(xe(e,n,i)),a=uo(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&ho(i,e,t)||r===0&&ho(i,n,t)||o===0&&ho(e,i,n)||a===0&&ho(e,t,n))}function ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function uo(i){return i>0?1:i<0?-1:0}function Af(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&fu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function dr(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Rf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pu(i,t){let e=kl(i.i,i.x,i.y),n=kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function mh(i,t,e,n){let s=kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hl=class{static triangulate(t,e,n=2){return ff(t,e,n)}},pr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];gh(t),xh(n,t);let o=t.length;e.forEach(gh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,xh(n,e[c]);let a=Hl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function gh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ti=class i extends Co{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var mr=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let w=p*d-o;for(let _=0;_<l;_++){let y=_*u-r;m.push(y,-w,0),v.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){let _=w+l*p,y=w+l*(p+1),M=w+1+l*(p+1),R=w+1+l*p;f.push(_,y,R),f.push(y,M,R)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},xs=class i extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new N,m=new Dt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){let g=v*(n+1);for(let p=0;p<n;p++){let w=p+g,_=w,y=w+n+1,M=w+n+2,R=w+1;a.push(_,y,R),a.push(y,M,R)}}this.setIndex(a),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var gr=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new N,d=new N,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let w=[],_=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){let R=M/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(R+y,1-_),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let _=h[p][w+1],y=h[p][w],M=h[p+1][w],R=h[p+1][w+1];(p!==0||o>0)&&f.push(_,y,R),(p!==n-1||c<Math.PI)&&f.push(y,M,R)}this.setIndex(f),this.setAttribute("position",new ie(m,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _s=class i extends Me{constructor(t=new hr(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new Dt,h=new N,u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function v(){for(let _=0;_<e;_++)g(_);g(r===!1?e:0),w(),p()}function g(_){h=t.getPointAt(_/e,h);let y=o.normals[_],M=o.binormals[_];for(let R=0;R<=s;R++){let L=R/s*Math.PI*2,F=Math.sin(L),S=-Math.cos(L);c.x=S*y.x+F*M.x,c.y=S*y.y+F*M.y,c.z=S*y.z+F*M.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=s;y++){let M=(s+1)*(_-1)+(y-1),R=(s+1)*_+(y-1),L=(s+1)*_+y,F=(s+1)*(_-1)+y;m.push(M,R,F),m.push(R,L,F)}}function w(){for(let _=0;_<=e;_++)for(let y=0;y<=s;y++)l.x=_/e,l.y=y/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new df[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var cn=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Fo=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},No=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function If(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ai=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bo=class extends Ai{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case zl:r=t,a=2*e-n;break;case Fl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case zl:o=t,c=2*n-e;break;case Fl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,w=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*v+.5*m,y=f*g-f*v;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+w*o[l+M]+_*o[c+M]+y*o[u+M];return r}},Oo=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ko=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},nn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fo(e,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fo(t.times,Array),values:fo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case yo:e=this.InterpolantFactoryMethodLinear;break;case po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&If(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[f+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=yo;var si=class extends nn{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=qs;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};Ho.prototype.ValueTypeName="color";var Vo=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};Vo.prototype.ValueTypeName="number";var Go=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},xr=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};xr.prototype.ValueTypeName="quaternion";xr.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends nn{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=qs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends nn{constructor(t,e,n,s){super(t,e,n,s)}};Wo.prototype.ValueTypeName="vector";var Xo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mu=new Xo,qo=class{constructor(t){this.manager=t!==void 0?t:mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ri=class extends _r{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Dl=new se,_h=new N,yh=new N,Vl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yh),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var yr=class extends js{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Gl=class extends Vl{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ci=class extends _r{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Gl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yo=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fc="\\[\\]\\.:\\/",Pf=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",Lf="[^"+fc.replace("\\.","")+"]",Df=/((?:WC+[\/:])*)/.source.replace("WC",pc),Uf=/(WCOD+)?/.source.replace("WCOD",Lf),zf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),Ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),Nf=new RegExp("^"+Df+Uf+zf+Ff+"$"),Bf=["material","materials","bones","map"],Wl=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pf,"")}static parseTrackName(t){let e=Nf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Wl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fx=new Float32Array(1);var vh=new se,vr=class{constructor(t,e,n=0,s=1/0){this.ray=new hs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vh),this}intersectObject(t,e=!0,n=[]){return Xl(t,this,n,e),n.sort(Mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Xl(t[s],this,n,e);return n.sort(Mh),n}};function Mh(i,t){return i.distance-t.distance}function Xl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Xl(r[o],t,e,!0)}}function mc(i,t,e,n){let s=Of(n);switch(e){case ic:return i*t;case aa:return i*t/s.components*s.byteLength;case la:return i*t/s.components*s.byteLength;case rc:return i*t*2/s.components*s.byteLength;case ca:return i*t*2/s.components*s.byteLength;case sc:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case ha:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case La:case Da:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Na:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Of(i){switch(i){case Sn:case jl:return{byteLength:1,components:1};case Ms:case tc:case bs:return{byteLength:2,components:1};case ra:case oa:return{byteLength:2,components:4};case ai:case sa:case En:return{byteLength:4,components:1};case ec:case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,fp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
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
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Up=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Vp=`
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
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qp=`#if defined( USE_POINTS_UV )
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
#endif`,jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Gf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Jf,aomap_pars_fragment:$f,batching_pars_vertex:Kf,batching_vertex:Qf,begin_vertex:jf,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:dp,cube_uv_reflection_fragment:fp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:xp,emissivemap_pars_fragment:_p,colorspace_fragment:yp,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Sp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:zp,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Up,lights_toon_fragment:Fp,lights_toon_pars_fragment:Np,lights_phong_fragment:Bp,lights_phong_pars_fragment:Op,lights_physical_fragment:kp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Vp,lights_fragment_maps:Gp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Zp,map_fragment:Jp,map_pars_fragment:$p,map_particle_fragment:Kp,map_particle_pars_fragment:Qp,metalnessmap_fragment:jp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:_m,project_vertex:ym,dithering_fragment:vm,dithering_pars_fragment:Mm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Sm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:wm,shadowmap_vertex:Tm,shadowmask_pars_fragment:Am,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Im,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Dm,tonemapping_fragment:Um,tonemapping_pars_fragment:zm,transmission_fragment:Fm,transmission_pars_fragment:Nm,uv_pars_fragment:Bm,uv_pars_vertex:Om,uv_vertex:km,worldpos_vertex:Hm,background_vert:Vm,background_frag:Gm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Zm,depth_frag:Jm,distanceRGBA_vert:$m,distanceRGBA_frag:Km,equirect_vert:Qm,equirect_frag:jm,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:x0,shadow_vert:_0,shadow_frag:y0,sprite_vert:v0,sprite_frag:M0},Et={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Pn={basic:{uniforms:Fe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Fe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Fe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Fe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Fe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Jt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Fe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Fe([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Fe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Fe([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Fe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Fe([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Fe([Et.common,Et.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Fe([Et.lights,Et.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:Fe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var ka={r:0,b:0,g:0},Di=new vn,b0=new se;function S0(i,t,e,n,s,r,o){let a=new Jt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1,M=m(_);M===null?p(a,c):M&&M.isColor&&(p(M,1),y=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,y){let M=m(y);M&&(M.isCubeTexture||M.mapping===Mr)?(h===void 0&&(h=new jt(new Ve(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Li(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(y.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(Di)),h.material.toneMapped=ee.getTransfer(M.colorSpace)!==re,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new jt(new mr(2,2),new Mn({name:"BackgroundMaterial",uniforms:Li(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ee.getTransfer(M.colorSpace)!==re,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(ka,uc(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,y,o)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:v,addToRenderList:g,dispose:w}}function E0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(b,D,k,H,$){let X=!1,Z=u(H,k,D);r!==Z&&(r=Z,l(r.object)),X=f(b,H,k,$),X&&m(b,H,k,$),$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(b,D,k,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,D,k){let H=k.wireframe===!0,$=n[b.id];$===void 0&&($={},n[b.id]=$);let X=$[D.id];X===void 0&&(X={},$[D.id]=X);let Z=X[H];return Z===void 0&&(Z=d(c()),X[H]=Z),Z}function d(b){let D=[],k=[],H=[];for(let $=0;$<e;$++)D[$]=0,k[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,D,k,H){let $=r.attributes,X=D.attributes,Z=0,q=k.getAttributes();for(let Q in q)if(q[Q].location>=0){let _t=$[Q],bt=X[Q];if(bt===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(bt=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(bt=b.instanceColor)),_t===void 0||_t.attribute!==bt||bt&&_t.data!==bt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==H}function m(b,D,k,H){let $={},X=D.attributes,Z=0,q=k.getAttributes();for(let Q in q)if(q[Q].location>=0){let _t=X[Q];_t===void 0&&(Q==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),Q==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor));let bt={};bt.attribute=_t,_t&&_t.data&&(bt.data=_t.data),$[Q]=bt,Z++}r.attributes=$,r.attributesNum=Z,r.index=H}function v(){let b=r.newAttributes;for(let D=0,k=b.length;D<k;D++)b[D]=0}function g(b){p(b,0)}function p(b,D){let k=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;k[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),$[b]!==D&&(i.vertexAttribDivisor(b,D),$[b]=D)}function w(){let b=r.newAttributes,D=r.enabledAttributes;for(let k=0,H=D.length;k<H;k++)D[k]!==b[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function _(b,D,k,H,$,X,Z){Z===!0?i.vertexAttribIPointer(b,D,k,$,X):i.vertexAttribPointer(b,D,k,H,$,X)}function y(b,D,k,H){v();let $=H.attributes,X=k.getAttributes(),Z=D.defaultAttributeValues;for(let q in X){let Q=X[q];if(Q.location>=0){let mt=$[q];if(mt===void 0&&(q==="instanceMatrix"&&b.instanceMatrix&&(mt=b.instanceMatrix),q==="instanceColor"&&b.instanceColor&&(mt=b.instanceColor)),mt!==void 0){let _t=mt.normalized,bt=mt.itemSize,yt=t.get(mt);if(yt===void 0)continue;let St=yt.buffer,Vt=yt.type,Nt=yt.bytesPerElement,ut=Vt===i.INT||Vt===i.UNSIGNED_INT||mt.gpuType===sa;if(mt.isInterleavedBufferAttribute){let ft=mt.data,Mt=ft.stride,Tt=mt.offset;if(ft.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Q.locationSize;Pt++)p(Q.location+Pt,ft.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Pt=0;Pt<Q.locationSize;Pt++)g(Q.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,St);for(let Pt=0;Pt<Q.locationSize;Pt++)_(Q.location+Pt,bt/Q.locationSize,Vt,_t,Mt*Nt,(Tt+bt/Q.locationSize*Pt)*Nt,ut)}else{if(mt.isInstancedBufferAttribute){for(let ft=0;ft<Q.locationSize;ft++)p(Q.location+ft,mt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let ft=0;ft<Q.locationSize;ft++)g(Q.location+ft);i.bindBuffer(i.ARRAY_BUFFER,St);for(let ft=0;ft<Q.locationSize;ft++)_(Q.location+ft,bt/Q.locationSize,Vt,_t,bt*Nt,bt/Q.locationSize*ft*Nt,ut)}}else if(Z!==void 0){let _t=Z[q];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Q.location,_t);break;case 3:i.vertexAttrib3fv(Q.location,_t);break;case 4:i.vertexAttrib4fv(Q.location,_t);break;default:i.vertexAttrib1fv(Q.location,_t)}}}}w()}function M(){F();for(let b in n){let D=n[b];for(let k in D){let H=D[k];for(let $ in H)h(H[$].object),delete H[$];delete D[k]}delete n[b]}}function R(b){if(n[b.id]===void 0)return;let D=n[b.id];for(let k in D){let H=D[k];for(let $ in H)h(H[$].object),delete H[$];delete D[k]}delete n[b.id]}function L(b){for(let D in n){let k=n[D];if(k[b.id]===void 0)continue;let H=k[b.id];for(let $ in H)h(H[$].object),delete H[$];delete k[b.id]}}function F(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function w0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function T0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==hn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let F=L===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Sn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==En&&!F)}function c(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:M,maxSamples:R}}function A0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new an,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let w=r?0:n,_=w*4,y=p.clippingState||null;c.value=y,y=h(m,d,_,f);for(let M=0;M!==_;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==v;++_,y+=4)o.copy(u[_]).applyMatrix4(w,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function R0(i){let t=new WeakMap;function e(o,a){return a===ea?o.mapping=Ii:a===na&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ea||a===na)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Eo(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var As=4,gu=[.125,.215,.35,.446,.526,.582],Fi=20,gc=new yr,xu=new Jt,xc=null,_c=0,yc=0,vc=!1,zi=(1+Math.sqrt(5))/2,Ts=1/zi,_u=[new N(-zi,Ts,0),new N(zi,Ts,0),new N(-Ts,0,zi),new N(Ts,0,zi),new N(0,zi,-Ts),new N(0,zi,Ts),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],C0=new N,Ga=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=C0}=r;xc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(xc,_c,yc),this._renderer.xr.enabled=vc,t.scissorTest=!1,Ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:bs,format:hn,colorSpace:bi,depthBuffer:!1},s=yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I0(r)),this._blurMaterial=P0(r,t,e)}return s}_compileMaterial(t){let e=new jt(this._lodPlanes[0],t);this._renderer.compile(e,gc)}_sceneToCubeUV(t,e,n,s,r){let c=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xu),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let v=new we({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),g=new jt(new Ve,v),p=!1,w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,p=!0):(v.color.copy(xu),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[_],r.y,r.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[_]));let M=this._cubeSize;Ha(s,y*M,_>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(g,c),u.render(t,c)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ii||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ha(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,gc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_u[(s-r-1)%_u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new jt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Fi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Fi;g>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fi}`);let p=[],w=0;for(let L=0;L<Fi;++L){let F=L/v,S=Math.exp(-F*F/2);p.push(S),L===0?w+=S:L<g&&(w+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let y=this._sizeLods[s],M=3*y*(s>_-As?s-_+As:0),R=4*(this._cubeSize-y);Ha(e,M,R,3*y,2*y),c.setRenderTarget(e),c.render(u,gc)}};function I0(i){let t=[],e=[],n=[],s=i,r=i-As+1+gu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-As?c=gu[o-i+As-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,w=new Float32Array(v*m*f),_=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let R=0;R<f;R++){let L=R%3*2/3-1,F=R>2?0:-1,S=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];w.set(S,v*m*R),_.set(d,g*m*R);let b=[R,R,R,R,R,R];y.set(b,p*m*R)}let M=new Me;M.setAttribute("position",new ce(w,v)),M.setAttribute("uv",new ce(_,g)),M.setAttribute("faceIndex",new ce(y,p)),t.push(M),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yu(i,t,e){let n=new Rn(i,t,e);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function P0(i,t,e){let n=new Float32Array(Fi),s=new N(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function vu(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Mu(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function L0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ea||c===na,h=c===Ii||c===Pi;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ga(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ga(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function D0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let w=f.array;v=f.version;for(let _=0,y=w.length;_<y;_+=3){let M=w[_+0],R=w[_+1],L=w[_+2];d.push(M,R,R,L,L,M)}}else if(m!==void 0){let w=m.array;v=m.version;for(let _=0,y=w.length/3-1;_<y;_+=3){let M=_+0,R=_+1,L=_+2;d.push(M,R,R,L,L,M)}}else return;let g=new(hc(d)?Qs:Ks)(d,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function z0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*v[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function F0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function N0(i,t,e){let n=new WeakMap,s=new _e;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),v===!0&&(_=3);let y=a.attributes.position.count*_,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let R=new Float32Array(y*M*4*u),L=new $s(R,y,M,u);L.type=En,L.needsUpdate=!0;let F=_*4;for(let b=0;b<u;b++){let D=g[b],k=p[b],H=w[b],$=y*M*4*b;for(let X=0;X<D.count;X++){let Z=X*F;f===!0&&(s.fromBufferAttribute(D,X),R[$+Z+0]=s.x,R[$+Z+1]=s.y,R[$+Z+2]=s.z,R[$+Z+3]=0),m===!0&&(s.fromBufferAttribute(k,X),R[$+Z+4]=s.x,R[$+Z+5]=s.y,R[$+Z+6]=s.z,R[$+Z+7]=0),v===!0&&(s.fromBufferAttribute(H,X),R[$+Z+8]=s.x,R[$+Z+9]=s.y,R[$+Z+10]=s.z,R[$+Z+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new Dt(y,M)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var ku=new Je,bu=new sr(1,1),Hu=new $s,Vu=new bo,Gu=new tr,Su=[],Eu=[],wu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wa(i,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function O0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function H0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function V0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function G0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Au.set(n),i.uniformMatrix2fv(this.addr,!1,Au),Ae(e,n)}}function W0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;Tu.set(n),i.uniformMatrix3fv(this.addr,!1,Tu),Ae(e,n)}}function X0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;wu.set(n),i.uniformMatrix4fv(this.addr,!1,wu),Ae(e,n)}}function q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function $0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bu.compareFunction=ac,r=bu):r=ku,e.setTexture2D(t||r,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vu,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gu,s)}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hu,s)}function sg(i){switch(i){case 5126:return O0;case 35664:return k0;case 35665:return H0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return K0;case 36295:return Q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function rg(i,t){i.uniform1fv(this.addr,t)}function og(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function ag(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function lg(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function cg(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hg(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ug(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dg(i,t){i.uniform1iv(this.addr,t)}function fg(i,t){i.uniform2iv(this.addr,t)}function pg(i,t){i.uniform3iv(this.addr,t)}function mg(i,t){i.uniform4iv(this.addr,t)}function gg(i,t){i.uniform1uiv(this.addr,t)}function xg(i,t){i.uniform2uiv(this.addr,t)}function _g(i,t){i.uniform3uiv(this.addr,t)}function yg(i,t){i.uniform4uiv(this.addr,t)}function vg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ku,r[o])}function Mg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function bg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,r[o])}function Sg(i,t,e){let n=this.cache,s=t.length,r=Wa(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hu,r[o])}function Eg(i){switch(i){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return xg;case 36295:return _g;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Sg}}var bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=sg(e.type)}},Sc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Eg(e.type)}},Ec=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Mc=/(\w+)(\])?(\[|\.)?/g;function Ru(i,t){i.seq.push(t),i.map[t.id]=t}function wg(i,t,e){let n=i.name,s=n.length;for(Mc.lastIndex=0;;){let r=Mc.exec(n),o=Mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ru(e,l===void 0?new bc(a,i,t):new Sc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ec(a),Ru(e,u)),e=u}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);wg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Cu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Tg=37297,Ag=0;function Rg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Iu=new Zt;function Cg(i){ee._getMatrix(Iu,ee.workingColorSpace,i);let t=`mat3( ${Iu.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Ys:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Rg(i.getShaderSource(t),a)}else return r}function Ig(i,t){let e=Cg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Pg(i,t){let e;switch(t){case Wh:e="Linear";break;case Xh:e="Reinhard";break;case qh:e="Cineon";break;case Yh:e="ACESFilmic";break;case Jh:e="AgX";break;case vs:e="Neutral";break;case Zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Va=new N;function Lg(){ee.getLuminanceCoefficients(Va);let i=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Ug(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ar(i){return i!==""}function Lu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Du(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(Fg,Bg)}var Ng=new Map;function Bg(i,t){let e=$t[t];if(e===void 0){let n=Ng.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wc(e)}var Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(i){return i.replace(Og,kg)}function kg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Hg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ys?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Vg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Pi:t="ENVMAP_TYPE_CUBE";break;case Mr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Pi:t="ENVMAP_MODE_REFRACTION";break}return t}function Wg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case Vh:t="ENVMAP_BLENDING_MIX";break;case Gh:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function qg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Hg(e),l=Vg(e),h=Gg(e),u=Wg(e),d=Xg(e),f=Dg(e),m=Ug(r),v=s.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ar).join(`
`),p.length>0&&(p+=`
`)):(g=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),p=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xn?"#define TONE_MAPPING":"",e.toneMapping!==Xn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Xn?Pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Ig("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),o=wc(o),o=Lu(o,e),o=Du(o,e),a=wc(a),a=Lu(a,e),a=Du(a,e),o=Uu(o),a=Uu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=w+g+o,y=w+p+a,M=Cu(s,s.VERTEX_SHADER,_),R=Cu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,M),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(M)||"",$=s.getShaderInfoLog(R)||"",X=k.trim(),Z=H.trim(),q=$.trim(),Q=!0,mt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,R);else{let _t=Pu(s,M,"vertex"),bt=Pu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+_t+`
`+bt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Z===""||q==="")&&(mt=!1);mt&&(D.diagnostics={runnable:Q,programLog:X,vertexShader:{log:Z,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(M),s.deleteShader(R),F=new Rs(s,v),S=zg(s,v)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Tg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=R,this}var Yg=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ac(t),e.set(t,n)),n}},Ac=class{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}};function Zg(i,t,e,n,s,r,o){let a=new us,c=new Tc,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,b,D,k,H){let $=k.fog,X=H.geometry,Z=S.isMeshStandardMaterial?k.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),Q=q&&q.mapping===Mr?q.image.height:null,mt=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let _t=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=_t!==void 0?_t.length:0,yt=0;X.morphAttributes.position!==void 0&&(yt=1),X.morphAttributes.normal!==void 0&&(yt=2),X.morphAttributes.color!==void 0&&(yt=3);let St,Vt,Nt,ut;if(mt){let Xt=Pn[mt];St=Xt.vertexShader,Vt=Xt.fragmentShader}else St=S.vertexShader,Vt=S.fragmentShader,c.update(S),Nt=c.getVertexShaderID(S),ut=c.getFragmentShaderID(S);let ft=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),Tt=H.isInstancedMesh===!0,Pt=H.isBatchedMesh===!0,Kt=!!S.map,be=!!S.matcap,O=!!q,qt=!!S.aoMap,Ot=!!S.lightMap,At=!!S.bumpMap,lt=!!S.normalMap,zt=!!S.displacementMap,Rt=!!S.emissiveMap,pt=!!S.metalnessMap,Yt=!!S.roughnessMap,kt=S.anisotropy>0,C=S.clearcoat>0,T=S.dispersion>0,tt=S.iridescence>0,at=S.sheen>0,it=S.transmission>0,nt=kt&&!!S.anisotropyMap,E=C&&!!S.clearcoatMap,x=C&&!!S.clearcoatNormalMap,A=C&&!!S.clearcoatRoughnessMap,I=tt&&!!S.iridescenceMap,U=tt&&!!S.iridescenceThicknessMap,B=at&&!!S.sheenColorMap,V=at&&!!S.sheenRoughnessMap,W=!!S.specularMap,Y=!!S.specularColorMap,j=!!S.specularIntensityMap,z=it&&!!S.transmissionMap,st=it&&!!S.thicknessMap,dt=!!S.gradientMap,gt=!!S.alphaMap,ct=S.alphaTest>0,ht=!!S.alphaHash,vt=!!S.extensions,It=Xn;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(It=i.toneMapping);let Wt={shaderID:mt,shaderType:S.type,shaderName:S.name,vertexShader:St,fragmentShader:Vt,defines:S.defines,customVertexShaderID:Nt,customFragmentShaderID:ut,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Pt,batchingColor:Pt&&H._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&H.instanceColor!==null,instancingMorph:Tt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:bi,alphaToCoverage:!!S.alphaToCoverage,map:Kt,matcap:be,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:Q,aoMap:qt,lightMap:Ot,bumpMap:At,normalMap:lt,displacementMap:d&&zt,emissiveMap:Rt,normalMapObjectSpace:lt&&S.normalMapType===jh,normalMapTangentSpace:lt&&S.normalMapType===oc,metalnessMap:pt,roughnessMap:Yt,anisotropy:kt,anisotropyMap:nt,clearcoat:C,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:A,dispersion:T,iridescence:tt,iridescenceMap:I,iridescenceThicknessMap:U,sheen:at,sheenColorMap:B,sheenRoughnessMap:V,specularMap:W,specularColorMap:Y,specularIntensityMap:j,transmission:it,transmissionMap:z,thicknessMap:st,gradientMap:dt,opaque:S.transparent===!1&&S.blending===vi&&S.alphaToCoverage===!1,alphaMap:gt,alphaTest:ct,alphaHash:ht,combine:S.combine,mapUv:Kt&&v(S.map.channel),aoMapUv:qt&&v(S.aoMap.channel),lightMapUv:Ot&&v(S.lightMap.channel),bumpMapUv:At&&v(S.bumpMap.channel),normalMapUv:lt&&v(S.normalMap.channel),displacementMapUv:zt&&v(S.displacementMap.channel),emissiveMapUv:Rt&&v(S.emissiveMap.channel),metalnessMapUv:pt&&v(S.metalnessMap.channel),roughnessMapUv:Yt&&v(S.roughnessMap.channel),anisotropyMapUv:nt&&v(S.anisotropyMap.channel),clearcoatMapUv:E&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:x&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:I&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:U&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:B&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:V&&v(S.sheenRoughnessMap.channel),specularMapUv:W&&v(S.specularMap.channel),specularColorMapUv:Y&&v(S.specularColorMap.channel),specularIntensityMapUv:j&&v(S.specularIntensityMap.channel),transmissionMapUv:z&&v(S.transmissionMap.channel),thicknessMapUv:st&&v(S.thicknessMap.channel),alphaMapUv:gt&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(lt||kt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Kt||gt),fog:!!$,useFog:S.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Mt,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,decodeVideoTexture:Kt&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===re,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===re,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ze,flipSided:S.side===Ge,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:vt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&S.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let D in S.defines)b.push(D),b.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(w(b,S),_(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function w(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function _(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let b=m[S.type],D;if(b){let k=Pn[b];D=hu.clone(k.uniforms)}else D=S.uniforms;return D}function M(S,b){let D;for(let k=0,H=h.length;k<H;k++){let $=h[k];if($.cacheKey===b){D=$,++D.usedTimes;break}}return D===void 0&&(D=new qg(i,b,S,r),h.push(D)),D}function R(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function L(S){c.remove(S)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:R,releaseShaderCache:L,programs:h,dispose:F}}function Jg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function $g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,v,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,v,g){let p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||$g),n.length>1&&n.sort(d||Fu),s.length>1&&s.sort(d||Fu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Kg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Nu,i.set(n,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Qg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Jt};break;case"SpotLight":e={position:new N,direction:new N,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var tx=0;function ex(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function nx(i){let t=new Qg,e=jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new se,o=new se;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,w=0,_=0,y=0,M=0,R=0,L=0;l.sort(ex);for(let S=0,b=l.length;S<b;S++){let D=l[S],k=D.color,H=D.intensity,$=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*H,u+=k.g*H,d+=k.b*H;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],H);L++}else if(D.isDirectionalLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let q=D.shadow,Q=e.get(D);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,n.directionalShadow[f]=Q,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=D.shadow.matrix,w++}n.directional[f]=Z,f++}else if(D.isSpotLight){let Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(k).multiplyScalar(H),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[v]=Z;let q=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,q.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[v]=q.matrix,D.castShadow){let Q=e.get(D);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=X,y++}v++}else if(D.isRectAreaLight){let Z=t.get(D);Z.color.copy(k).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=Z,g++}else if(D.isPointLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let q=D.shadow,Q=e.get(D);Q.shadowIntensity=q.intensity,Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,n.pointShadow[m]=Q,n.pointShadowMap[m]=X,n.pointShadowMatrix[m]=D.shadow.matrix,_++}n.point[m]=Z,m++}else if(D.isHemisphereLight){let Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(H),Z.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=Z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==f||F.pointLength!==m||F.spotLength!==v||F.rectAreaLength!==g||F.hemiLength!==p||F.numDirectionalShadows!==w||F.numPointShadows!==_||F.numSpotShadows!==y||F.numSpotMaps!==M||F.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,F.directionalLength=f,F.pointLength=m,F.spotLength=v,F.rectAreaLength=g,F.hemiLength=p,F.numDirectionalShadows=w,F.numPointShadows=_,F.numSpotShadows=y,F.numSpotMaps=M,F.numLightProbes=L,n.version=tx++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){let _=l[p];if(_.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),u++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let y=n.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Bu(i){let t=new nx(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ix(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Bu(i),t.set(s,[a])):r>=o.length?(a=new Bu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rx=`uniform sampler2D shadow_pass;
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
}`;function ox(i,t,e){let n=new fs,s=new Dt,r=new Dt,o=new _e,a=new Fo({depthPacking:Qh}),c=new No,l={},h=e.maxTextureSize,u={[kn]:Ge,[Ge]:kn,[ze]:ze},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:sx,fragmentShader:rx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Me;m.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new jt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let p=this.type;this.render=function(R,L,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Wn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=p!==In&&this.type===In,$=p===In&&this.type!==In;for(let X=0,Z=R.length;X<Z;X++){let q=R[X],Q=q.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let mt=Q.getFrameExtents();if(s.multiply(mt),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,Q.mapSize.y=r.y)),Q.map===null||H===!0||$===!0){let bt=this.type!==In?{minFilter:Ze,magFilter:Ze}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Rn(s.x,s.y,bt),Q.map.texture.name=q.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let _t=Q.getViewportCount();for(let bt=0;bt<_t;bt++){let yt=Q.getViewport(bt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),k.viewport(o),Q.updateMatrices(q,bt),n=Q.getFrustum(),y(L,F,Q.camera,q,this.type)}Q.isPointLightShadow!==!0&&this.type===In&&w(Q,F),Q.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,D)};function w(R,L){let F=t.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(L,null,F,d,v,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(L,null,F,f,v,null)}function _(R,L,F,S){let b=null,D=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)b=D;else if(b=F.isPointLight===!0?c:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let k=b.uuid,H=L.uuid,$=l[k];$===void 0&&($={},l[k]=$);let X=$[H];X===void 0&&(X=b.clone(),$[H]=X,L.addEventListener("dispose",M)),b=X}if(b.visible=L.visible,b.wireframe=L.wireframe,S===In?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:u[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let k=i.properties.get(b);k.light=F}return b}function y(R,L,F,S,b){if(R.visible===!1)return;if(R.layers.test(L.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===In)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let H=t.update(R),$=R.material;if(Array.isArray($)){let X=H.groups;for(let Z=0,q=X.length;Z<q;Z++){let Q=X[Z],mt=$[Q.materialIndex];if(mt&&mt.visible){let _t=_(R,mt,S,b);R.onBeforeShadow(i,R,L,F,H,_t,Q),i.renderBufferDirect(F,null,H,_t,R,Q),R.onAfterShadow(i,R,L,F,H,_t,Q)}}}else if($.visible){let X=_(R,$,S,b);R.onBeforeShadow(i,R,L,F,H,X,null),i.renderBufferDirect(F,null,H,X,R,null),R.onAfterShadow(i,R,L,F,H,X,null)}}let k=R.children;for(let H=0,$=k.length;H<$;H++)y(k[H],L,F,S,b)}function M(R){R.target.removeEventListener("dispose",M);for(let F in l){let S=l[F],b=R.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var ax={[Zo]:Jo,[$o]:jo,[Ko]:ta,[Mi]:Qo,[Jo]:Zo,[jo]:$o,[ta]:Ko,[Qo]:Mi};function lx(i,t){function e(){let z=!1,st=new _e,dt=null,gt=new _e(0,0,0,0);return{setMask:function(ct){dt!==ct&&!z&&(i.colorMask(ct,ct,ct,ct),dt=ct)},setLocked:function(ct){z=ct},setClear:function(ct,ht,vt,It,Wt){Wt===!0&&(ct*=It,ht*=It,vt*=It),st.set(ct,ht,vt,It),gt.equals(st)===!1&&(i.clearColor(ct,ht,vt,It),gt.copy(st))},reset:function(){z=!1,dt=null,gt.set(-1,0,0,0)}}}function n(){let z=!1,st=!1,dt=null,gt=null,ct=null;return{setReversed:function(ht){if(st!==ht){let vt=t.get("EXT_clip_control");ht?vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.ZERO_TO_ONE_EXT):vt.clipControlEXT(vt.LOWER_LEFT_EXT,vt.NEGATIVE_ONE_TO_ONE_EXT),st=ht;let It=ct;ct=null,this.setClear(It)}},getReversed:function(){return st},setTest:function(ht){ht?ft(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ht){dt!==ht&&!z&&(i.depthMask(ht),dt=ht)},setFunc:function(ht){if(st&&(ht=ax[ht]),gt!==ht){switch(ht){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Qo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=ht}},setLocked:function(ht){z=ht},setClear:function(ht){ct!==ht&&(st&&(ht=1-ht),i.clearDepth(ht),ct=ht)},reset:function(){z=!1,dt=null,gt=null,ct=null,st=!1}}}function s(){let z=!1,st=null,dt=null,gt=null,ct=null,ht=null,vt=null,It=null,Wt=null;return{setTest:function(Xt){z||(Xt?ft(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(Xt){st!==Xt&&!z&&(i.stencilMask(Xt),st=Xt)},setFunc:function(Xt,Oe,An){(dt!==Xt||gt!==Oe||ct!==An)&&(i.stencilFunc(Xt,Oe,An),dt=Xt,gt=Oe,ct=An)},setOp:function(Xt,Oe,An){(ht!==Xt||vt!==Oe||It!==An)&&(i.stencilOp(Xt,Oe,An),ht=Xt,vt=Oe,It=An)},setLocked:function(Xt){z=Xt},setClear:function(Xt){Wt!==Xt&&(i.clearStencil(Xt),Wt=Xt)},reset:function(){z=!1,st=null,dt=null,gt=null,ct=null,ht=null,vt=null,It=null,Wt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,w=null,_=null,y=null,M=null,R=null,L=new Jt(0,0,0),F=0,S=!1,b=null,D=null,k=null,H=null,$=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,q=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Z=q>=1):Q.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Z=q>=2);let mt=null,_t={},bt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),St=new _e().fromArray(bt),Vt=new _e().fromArray(yt);function Nt(z,st,dt,gt){let ct=new Uint8Array(4),ht=i.createTexture();i.bindTexture(z,ht),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let vt=0;vt<dt;vt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(st,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(st+vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ht}let ut={};ut[i.TEXTURE_2D]=Nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=Nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=Nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=Nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(Mi),At(!1),lt(ql),ft(i.CULL_FACE),qt(Wn);function ft(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Mt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function Tt(z,st){return u[z]!==st?(i.bindFramebuffer(z,st),u[z]=st,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=st),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=st),!0):!1}function Pt(z,st){let dt=f,gt=!1;if(z){dt=d.get(st),dt===void 0&&(dt=[],d.set(st,dt));let ct=z.textures;if(dt.length!==ct.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,vt=ct.length;ht<vt;ht++)dt[ht]=i.COLOR_ATTACHMENT0+ht;dt.length=ct.length,gt=!0}}else dt[0]!==i.BACK&&(dt[0]=i.BACK,gt=!0);gt&&i.drawBuffers(dt)}function Kt(z){return m!==z?(i.useProgram(z),m=z,!0):!1}let be={[ii]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};be[Ah]=i.MIN,be[Rh]=i.MAX;let O={[Ch]:i.ZERO,[Ih]:i.ONE,[Ph]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[zh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Uh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Hh]:i.ONE_MINUS_CONSTANT_ALPHA};function qt(z,st,dt,gt,ct,ht,vt,It,Wt,Xt){if(z===Wn){v===!0&&(Mt(i.BLEND),v=!1);return}if(v===!1&&(ft(i.BLEND),v=!0),z!==Eh){if(z!==g||Xt!==S){if((p!==ii||y!==ii)&&(i.blendEquation(i.FUNC_ADD),p=ii,y=ii),Xt)switch(z){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case Jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,_=null,M=null,R=null,L.set(0,0,0),F=0,g=z,S=Xt}return}ct=ct||st,ht=ht||dt,vt=vt||gt,(st!==p||ct!==y)&&(i.blendEquationSeparate(be[st],be[ct]),p=st,y=ct),(dt!==w||gt!==_||ht!==M||vt!==R)&&(i.blendFuncSeparate(O[dt],O[gt],O[ht],O[vt]),w=dt,_=gt,M=ht,R=vt),(It.equals(L)===!1||Wt!==F)&&(i.blendColor(It.r,It.g,It.b,Wt),L.copy(It),F=Wt),g=z,S=!1}function Ot(z,st){z.side===ze?Mt(i.CULL_FACE):ft(i.CULL_FACE);let dt=z.side===Ge;st&&(dt=!dt),At(dt),z.blending===vi&&z.transparent===!1?qt(Wn):qt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let gt=z.stencilWrite;a.setTest(gt),gt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Rt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(z){b!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),b=z)}function lt(z){z!==bh?(ft(i.CULL_FACE),z!==D&&(z===ql?i.cullFace(i.BACK):z===Sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),D=z}function zt(z){z!==k&&(Z&&i.lineWidth(z),k=z)}function Rt(z,st,dt){z?(ft(i.POLYGON_OFFSET_FILL),(H!==st||$!==dt)&&(i.polygonOffset(st,dt),H=st,$=dt)):Mt(i.POLYGON_OFFSET_FILL)}function pt(z){z?ft(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function Yt(z){z===void 0&&(z=i.TEXTURE0+X-1),mt!==z&&(i.activeTexture(z),mt=z)}function kt(z,st,dt){dt===void 0&&(mt===null?dt=i.TEXTURE0+X-1:dt=mt);let gt=_t[dt];gt===void 0&&(gt={type:void 0,texture:void 0},_t[dt]=gt),(gt.type!==z||gt.texture!==st)&&(mt!==dt&&(i.activeTexture(dt),mt=dt),i.bindTexture(z,st||ut[z]),gt.type=z,gt.texture=st)}function C(){let z=_t[mt];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function it(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function E(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function x(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function A(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function I(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(z){St.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),St.copy(z))}function V(z){Vt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Vt.copy(z))}function W(z,st){let dt=l.get(st);dt===void 0&&(dt=new WeakMap,l.set(st,dt));let gt=dt.get(z);gt===void 0&&(gt=i.getUniformBlockIndex(st,z.name),dt.set(z,gt))}function Y(z,st){let gt=l.get(st).get(z);c.get(st)!==gt&&(i.uniformBlockBinding(st,gt,z.__bindingPointIndex),c.set(st,gt))}function j(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,_t={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,w=null,_=null,y=null,M=null,R=null,L=new Jt(0,0,0),F=0,S=!1,b=null,D=null,k=null,H=null,$=null,St.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Mt,bindFramebuffer:Tt,drawBuffers:Pt,useProgram:Kt,setBlending:qt,setMaterial:Ot,setFlipSided:At,setCullFace:lt,setLineWidth:zt,setPolygonOffset:Rt,setScissorTest:pt,activeTexture:Yt,bindTexture:kt,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:I,texImage3D:U,updateUBOMapping:W,uniformBlockBinding:Y,texStorage2D:x,texStorage3D:A,texSubImage2D:at,texSubImage3D:it,compressedTexSubImage2D:nt,compressedTexSubImage3D:E,scissor:B,viewport:V,reset:j}}function cx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,T){return f?new OffscreenCanvas(C,T):Js("canvas")}function v(C,T,tt){let at=1,it=kt(C);if((it.width>tt||it.height>tt)&&(at=tt/Math.max(it.width,it.height)),at<1)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap||typeof VideoFrame!="undefined"&&C instanceof VideoFrame){let nt=Math.floor(at*it.width),E=Math.floor(at*it.height);u===void 0&&(u=m(nt,E));let x=T?m(nt,E):u;return x.width=nt,x.height=E,x.getContext("2d").drawImage(C,0,0,nt,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+nt+"x"+E+")."),x}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,T,tt,at,it=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=T;if(T===i.RED&&(tt===i.FLOAT&&(nt=i.R32F),tt===i.HALF_FLOAT&&(nt=i.R16F),tt===i.UNSIGNED_BYTE&&(nt=i.R8)),T===i.RED_INTEGER&&(tt===i.UNSIGNED_BYTE&&(nt=i.R8UI),tt===i.UNSIGNED_SHORT&&(nt=i.R16UI),tt===i.UNSIGNED_INT&&(nt=i.R32UI),tt===i.BYTE&&(nt=i.R8I),tt===i.SHORT&&(nt=i.R16I),tt===i.INT&&(nt=i.R32I)),T===i.RG&&(tt===i.FLOAT&&(nt=i.RG32F),tt===i.HALF_FLOAT&&(nt=i.RG16F),tt===i.UNSIGNED_BYTE&&(nt=i.RG8)),T===i.RG_INTEGER&&(tt===i.UNSIGNED_BYTE&&(nt=i.RG8UI),tt===i.UNSIGNED_SHORT&&(nt=i.RG16UI),tt===i.UNSIGNED_INT&&(nt=i.RG32UI),tt===i.BYTE&&(nt=i.RG8I),tt===i.SHORT&&(nt=i.RG16I),tt===i.INT&&(nt=i.RG32I)),T===i.RGB_INTEGER&&(tt===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),tt===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),tt===i.UNSIGNED_INT&&(nt=i.RGB32UI),tt===i.BYTE&&(nt=i.RGB8I),tt===i.SHORT&&(nt=i.RGB16I),tt===i.INT&&(nt=i.RGB32I)),T===i.RGBA_INTEGER&&(tt===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),tt===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),tt===i.UNSIGNED_INT&&(nt=i.RGBA32UI),tt===i.BYTE&&(nt=i.RGBA8I),tt===i.SHORT&&(nt=i.RGBA16I),tt===i.INT&&(nt=i.RGBA32I)),T===i.RGB&&(tt===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),tt===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),T===i.RGBA){let E=it?Ys:ee.getTransfer(at);tt===i.FLOAT&&(nt=i.RGBA32F),tt===i.HALF_FLOAT&&(nt=i.RGBA16F),tt===i.UNSIGNED_BYTE&&(nt=E===re?i.SRGB8_ALPHA8:i.RGBA8),tt===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),tt===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(C,T){let tt;return C?T===null||T===ai||T===Ss?tt=i.DEPTH24_STENCIL8:T===En?tt=i.DEPTH32F_STENCIL8:T===Ms&&(tt=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ai||T===Ss?tt=i.DEPTH_COMPONENT24:T===En?tt=i.DEPTH_COMPONENT32F:T===Ms&&(tt=i.DEPTH_COMPONENT16),tt}function M(C,T){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ze&&C.minFilter!==_n?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function R(C){let T=C.target;T.removeEventListener("dispose",R),F(T),T.isVideoTexture&&h.delete(T)}function L(C){let T=C.target;T.removeEventListener("dispose",L),b(T)}function F(C){let T=n.get(C);if(T.__webglInit===void 0)return;let tt=C.source,at=d.get(tt);if(at){let it=at[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(C),Object.keys(at).length===0&&d.delete(tt)}n.remove(C)}function S(C){let T=n.get(C);i.deleteTexture(T.__webglTexture);let tt=C.source,at=d.get(tt);delete at[T.__cacheKey],o.memory.textures--}function b(C){let T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(T.__webglFramebuffer[at]))for(let it=0;it<T.__webglFramebuffer[at].length;it++)i.deleteFramebuffer(T.__webglFramebuffer[at][it]);else i.deleteFramebuffer(T.__webglFramebuffer[at]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[at])}else{if(Array.isArray(T.__webglFramebuffer))for(let at=0;at<T.__webglFramebuffer.length;at++)i.deleteFramebuffer(T.__webglFramebuffer[at]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let at=0;at<T.__webglColorRenderbuffer.length;at++)T.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[at]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let tt=C.textures;for(let at=0,it=tt.length;at<it;at++){let nt=n.get(tt[at]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(tt[at])}n.remove(C)}let D=0;function k(){D=0}function H(){let C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function $(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function X(C,T){let tt=n.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&tt.__version!==C.version){let at=C.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(tt,C,T);return}}else C.isExternalTexture&&(tt.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture,i.TEXTURE0+T)}function Z(C,T){let tt=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&tt.__version!==C.version){ut(tt,C,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,tt.__webglTexture,i.TEXTURE0+T)}function q(C,T){let tt=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&tt.__version!==C.version){ut(tt,C,T);return}e.bindTexture(i.TEXTURE_3D,tt.__webglTexture,i.TEXTURE0+T)}function Q(C,T){let tt=n.get(C);if(C.version>0&&tt.__version!==C.version){ft(tt,C,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture,i.TEXTURE0+T)}let mt={[xo]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},_t={[Ze]:i.NEAREST,[$h]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},bt={[tu]:i.NEVER,[ou]:i.ALWAYS,[eu]:i.LESS,[ac]:i.LEQUAL,[nu]:i.EQUAL,[ru]:i.GEQUAL,[iu]:i.GREATER,[su]:i.NOTEQUAL};function yt(C,T){if(T.type===En&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===_n||T.magFilter===ia||T.magFilter===br||T.magFilter===oi||T.minFilter===_n||T.minFilter===ia||T.minFilter===br||T.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,mt[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,mt[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,mt[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,_t[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,bt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ze||T.minFilter!==br&&T.minFilter!==oi||T.type===En&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let tt=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function St(C,T){let tt=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",R));let at=T.source,it=d.get(at);it===void 0&&(it={},d.set(at,it));let nt=$(T);if(nt!==C.__cacheKey){it[nt]===void 0&&(it[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,tt=!0),it[nt].usedTimes++;let E=it[C.__cacheKey];E!==void 0&&(it[C.__cacheKey].usedTimes--,E.usedTimes===0&&S(T)),C.__cacheKey=nt,C.__webglTexture=it[nt].texture}return tt}function Vt(C,T,tt){return Math.floor(Math.floor(C/tt)/T)}function Nt(C,T,tt,at){let nt=C.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,tt,at,T.data);else{nt.sort((U,B)=>U.start-B.start);let E=0;for(let U=1;U<nt.length;U++){let B=nt[E],V=nt[U],W=B.start+B.count,Y=Vt(V.start,T.width,4),j=Vt(B.start,T.width,4);V.start<=W+1&&Y===j&&Vt(V.start+V.count-1,T.width,4)===Y?B.count=Math.max(B.count,V.start+V.count-B.start):(++E,nt[E]=V)}nt.length=E+1;let x=i.getParameter(i.UNPACK_ROW_LENGTH),A=i.getParameter(i.UNPACK_SKIP_PIXELS),I=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let U=0,B=nt.length;U<B;U++){let V=nt[U],W=Math.floor(V.start/4),Y=Math.ceil(V.count/4),j=W%T.width,z=Math.floor(W/T.width),st=Y,dt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,j),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,j,z,st,dt,tt,at,T.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,x),i.pixelStorei(i.UNPACK_SKIP_PIXELS,A),i.pixelStorei(i.UNPACK_SKIP_ROWS,I)}}function ut(C,T,tt){let at=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(at=i.TEXTURE_3D);let it=St(C,T),nt=T.source;e.bindTexture(at,C.__webglTexture,i.TEXTURE0+tt);let E=n.get(nt);if(nt.version!==E.__version||it===!0){e.activeTexture(i.TEXTURE0+tt);let x=ee.getPrimaries(ee.workingColorSpace),A=T.colorSpace===qn?null:ee.getPrimaries(T.colorSpace),I=T.colorSpace===qn||x===A?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);let U=v(T.image,!1,s.maxTextureSize);U=Yt(T,U);let B=r.convert(T.format,T.colorSpace),V=r.convert(T.type),W=_(T.internalFormat,B,V,T.colorSpace,T.isVideoTexture);yt(at,T);let Y,j=T.mipmaps,z=T.isVideoTexture!==!0,st=E.__version===void 0||it===!0,dt=nt.dataReady,gt=M(T,U);if(T.isDepthTexture)W=y(T.format===Es,T.type),st&&(z?e.texStorage2D(i.TEXTURE_2D,1,W,U.width,U.height):e.texImage2D(i.TEXTURE_2D,0,W,U.width,U.height,0,B,V,null));else if(T.isDataTexture)if(j.length>0){z&&st&&e.texStorage2D(i.TEXTURE_2D,gt,W,j[0].width,j[0].height);for(let ct=0,ht=j.length;ct<ht;ct++)Y=j[ct],z?dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Y.width,Y.height,B,V,Y.data):e.texImage2D(i.TEXTURE_2D,ct,W,Y.width,Y.height,0,B,V,Y.data);T.generateMipmaps=!1}else z?(st&&e.texStorage2D(i.TEXTURE_2D,gt,W,U.width,U.height),dt&&Nt(T,U,B,V)):e.texImage2D(i.TEXTURE_2D,0,W,U.width,U.height,0,B,V,U.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){z&&st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,W,j[0].width,j[0].height,U.depth);for(let ct=0,ht=j.length;ct<ht;ct++)if(Y=j[ct],T.format!==hn)if(B!==null)if(z){if(dt)if(T.layerUpdates.size>0){let vt=mc(Y.width,Y.height,T.format,T.type);for(let It of T.layerUpdates){let Wt=Y.data.subarray(It*vt/Y.data.BYTES_PER_ELEMENT,(It+1)*vt/Y.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,It,Y.width,Y.height,1,B,Wt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Y.width,Y.height,U.depth,B,Y.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,W,Y.width,Y.height,U.depth,0,Y.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,Y.width,Y.height,U.depth,B,V,Y.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,W,Y.width,Y.height,U.depth,0,B,V,Y.data)}else{z&&st&&e.texStorage2D(i.TEXTURE_2D,gt,W,j[0].width,j[0].height);for(let ct=0,ht=j.length;ct<ht;ct++)Y=j[ct],T.format!==hn?B!==null?z?dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,Y.width,Y.height,B,Y.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,W,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Y.width,Y.height,B,V,Y.data):e.texImage2D(i.TEXTURE_2D,ct,W,Y.width,Y.height,0,B,V,Y.data)}else if(T.isDataArrayTexture)if(z){if(st&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,W,U.width,U.height,U.depth),dt)if(T.layerUpdates.size>0){let ct=mc(U.width,U.height,T.format,T.type);for(let ht of T.layerUpdates){let vt=U.data.subarray(ht*ct/U.data.BYTES_PER_ELEMENT,(ht+1)*ct/U.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,U.width,U.height,1,B,V,vt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,B,V,U.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,W,U.width,U.height,U.depth,0,B,V,U.data);else if(T.isData3DTexture)z?(st&&e.texStorage3D(i.TEXTURE_3D,gt,W,U.width,U.height,U.depth),dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,B,V,U.data)):e.texImage3D(i.TEXTURE_3D,0,W,U.width,U.height,U.depth,0,B,V,U.data);else if(T.isFramebufferTexture){if(st)if(z)e.texStorage2D(i.TEXTURE_2D,gt,W,U.width,U.height);else{let ct=U.width,ht=U.height;for(let vt=0;vt<gt;vt++)e.texImage2D(i.TEXTURE_2D,vt,W,ct,ht,0,B,V,null),ct>>=1,ht>>=1}}else if(j.length>0){if(z&&st){let ct=kt(j[0]);e.texStorage2D(i.TEXTURE_2D,gt,W,ct.width,ct.height)}for(let ct=0,ht=j.length;ct<ht;ct++)Y=j[ct],z?dt&&e.texSubImage2D(i.TEXTURE_2D,ct,0,0,B,V,Y):e.texImage2D(i.TEXTURE_2D,ct,W,B,V,Y);T.generateMipmaps=!1}else if(z){if(st){let ct=kt(U);e.texStorage2D(i.TEXTURE_2D,gt,W,ct.width,ct.height)}dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,B,V,U)}else e.texImage2D(i.TEXTURE_2D,0,W,B,V,U);g(T)&&p(at),E.__version=nt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ft(C,T,tt){if(T.image.length!==6)return;let at=St(C,T),it=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+tt);let nt=n.get(it);if(it.version!==nt.__version||at===!0){e.activeTexture(i.TEXTURE0+tt);let E=ee.getPrimaries(ee.workingColorSpace),x=T.colorSpace===qn?null:ee.getPrimaries(T.colorSpace),A=T.colorSpace===qn||E===x?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);let I=T.isCompressedTexture||T.image[0].isCompressedTexture,U=T.image[0]&&T.image[0].isDataTexture,B=[];for(let ht=0;ht<6;ht++)!I&&!U?B[ht]=v(T.image[ht],!0,s.maxCubemapSize):B[ht]=U?T.image[ht].image:T.image[ht],B[ht]=Yt(T,B[ht]);let V=B[0],W=r.convert(T.format,T.colorSpace),Y=r.convert(T.type),j=_(T.internalFormat,W,Y,T.colorSpace),z=T.isVideoTexture!==!0,st=nt.__version===void 0||at===!0,dt=it.dataReady,gt=M(T,V);yt(i.TEXTURE_CUBE_MAP,T);let ct;if(I){z&&st&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,j,V.width,V.height);for(let ht=0;ht<6;ht++){ct=B[ht].mipmaps;for(let vt=0;vt<ct.length;vt++){let It=ct[vt];T.format!==hn?W!==null?z?dt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,0,0,It.width,It.height,W,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,j,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,0,0,It.width,It.height,W,Y,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt,j,It.width,It.height,0,W,Y,It.data)}}}else{if(ct=T.mipmaps,z&&st){ct.length>0&&gt++;let ht=kt(B[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,j,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(U){z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,B[ht].width,B[ht].height,W,Y,B[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,j,B[ht].width,B[ht].height,0,W,Y,B[ht].data);for(let vt=0;vt<ct.length;vt++){let Wt=ct[vt].image[ht].image;z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,0,0,Wt.width,Wt.height,W,Y,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,j,Wt.width,Wt.height,0,W,Y,Wt.data)}}else{z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,W,Y,B[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,j,W,Y,B[ht]);for(let vt=0;vt<ct.length;vt++){let It=ct[vt];z?dt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,0,0,W,Y,It.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,vt+1,j,W,Y,It.image[ht])}}}g(T)&&p(i.TEXTURE_CUBE_MAP),nt.__version=it.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Mt(C,T,tt,at,it,nt){let E=r.convert(tt.format,tt.colorSpace),x=r.convert(tt.type),A=_(tt.internalFormat,E,x,tt.colorSpace),I=n.get(T),U=n.get(tt);if(U.__renderTarget=T,!I.__hasExternalTextures){let B=Math.max(1,T.width>>nt),V=Math.max(1,T.height>>nt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,nt,A,B,V,T.depth,0,E,x,null):e.texImage2D(it,nt,A,B,V,0,E,x,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Rt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,it,U.__webglTexture,0,zt(T)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,it,U.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(C,T,tt){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){let at=T.depthTexture,it=at&&at.isDepthTexture?at.type:null,nt=y(T.stencilBuffer,it),E=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,x=zt(T);Rt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,x,nt,T.width,T.height):tt?i.renderbufferStorageMultisample(i.RENDERBUFFER,x,nt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,nt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,E,i.RENDERBUFFER,C)}else{let at=T.textures;for(let it=0;it<at.length;it++){let nt=at[it],E=r.convert(nt.format,nt.colorSpace),x=r.convert(nt.type),A=_(nt.internalFormat,E,x,nt.colorSpace),I=zt(T);tt&&Rt(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,I,A,T.width,T.height):Rt(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I,A,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,A,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let at=n.get(T.depthTexture);at.__renderTarget=T,(!at.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);let it=at.__webglTexture,nt=zt(T);if(T.depthTexture.format===os)Rt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(T.depthTexture.format===Es)Rt(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Kt(C){let T=n.get(C),tt=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let at=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),at){let it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,at.removeEventListener("dispose",it)};at.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=at}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");let at=C.texture.mipmaps;at&&at.length>0?Pt(T.__webglFramebuffer[0],C):Pt(T.__webglFramebuffer,C)}else if(tt){T.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[at]),T.__webglDepthbuffer[at]===void 0)T.__webglDepthbuffer[at]=i.createRenderbuffer(),Tt(T.__webglDepthbuffer[at],C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=T.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,nt)}}else{let at=C.texture.mipmaps;if(at&&at.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Tt(T.__webglDepthbuffer,C,!1);else{let it=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function be(C,T,tt){let at=n.get(C);T!==void 0&&Mt(at.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),tt!==void 0&&Kt(C)}function O(C){let T=C.texture,tt=n.get(C),at=n.get(T);C.addEventListener("dispose",L);let it=C.textures,nt=C.isWebGLCubeRenderTarget===!0,E=it.length>1;if(E||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=T.version,o.memory.textures++),nt){tt.__webglFramebuffer=[];for(let x=0;x<6;x++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[x]=[];for(let A=0;A<T.mipmaps.length;A++)tt.__webglFramebuffer[x][A]=i.createFramebuffer()}else tt.__webglFramebuffer[x]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let x=0;x<T.mipmaps.length;x++)tt.__webglFramebuffer[x]=i.createFramebuffer()}else tt.__webglFramebuffer=i.createFramebuffer();if(E)for(let x=0,A=it.length;x<A;x++){let I=n.get(it[x]);I.__webglTexture===void 0&&(I.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){tt.__webglMultisampledFramebuffer=i.createFramebuffer(),tt.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let x=0;x<it.length;x++){let A=it[x];tt.__webglColorRenderbuffer[x]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,tt.__webglColorRenderbuffer[x]);let I=r.convert(A.format,A.colorSpace),U=r.convert(A.type),B=_(A.internalFormat,I,U,A.colorSpace,C.isXRRenderTarget===!0),V=zt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,B,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+x,i.RENDERBUFFER,tt.__webglColorRenderbuffer[x])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(tt.__webglDepthRenderbuffer=i.createRenderbuffer(),Tt(tt.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),yt(i.TEXTURE_CUBE_MAP,T);for(let x=0;x<6;x++)if(T.mipmaps&&T.mipmaps.length>0)for(let A=0;A<T.mipmaps.length;A++)Mt(tt.__webglFramebuffer[x][A],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+x,A);else Mt(tt.__webglFramebuffer[x],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+x,0);g(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(E){for(let x=0,A=it.length;x<A;x++){let I=it[x],U=n.get(I),B=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(B=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(B,U.__webglTexture),yt(B,I),Mt(tt.__webglFramebuffer,C,I,i.COLOR_ATTACHMENT0+x,B,0),g(I)&&p(B)}e.unbindTexture()}else{let x=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(x=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(x,at.__webglTexture),yt(x,T),T.mipmaps&&T.mipmaps.length>0)for(let A=0;A<T.mipmaps.length;A++)Mt(tt.__webglFramebuffer[A],C,T,i.COLOR_ATTACHMENT0,x,A);else Mt(tt.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,x,0);g(T)&&p(x),e.unbindTexture()}C.depthBuffer&&Kt(C)}function qt(C){let T=C.textures;for(let tt=0,at=T.length;tt<at;tt++){let it=T[tt];if(g(it)){let nt=w(C),E=n.get(it).__webglTexture;e.bindTexture(nt,E),p(nt),e.unbindTexture()}}}let Ot=[],At=[];function lt(C){if(C.samples>0){if(Rt(C)===!1){let T=C.textures,tt=C.width,at=C.height,it=i.COLOR_BUFFER_BIT,nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,E=n.get(C),x=T.length>1;if(x)for(let I=0;I<T.length;I++)e.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer);let A=C.texture.mipmaps;A&&A.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let I=0;I<T.length;I++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),x){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,E.__webglColorRenderbuffer[I]);let U=n.get(T[I]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,tt,at,0,0,tt,at,it,i.NEAREST),c===!0&&(Ot.length=0,At.length=0,Ot.push(i.COLOR_ATTACHMENT0+I),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ot.push(nt),At.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,At)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),x)for(let I=0;I<T.length;I++){e.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.RENDERBUFFER,E.__webglColorRenderbuffer[I]);let U=n.get(T[I]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+I,i.TEXTURE_2D,U,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function zt(C){return Math.min(s.maxSamples,C.samples)}function Rt(C){let T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function pt(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Yt(C,T){let tt=C.colorSpace,at=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||tt!==bi&&tt!==qn&&(ee.getTransfer(tt)===re?(at!==hn||it!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function kt(C){return typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame!="undefined"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=q,this.setTextureCube=Q,this.rebindTextures=be,this.setupRenderTarget=O,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Rt}function hx(i,t){function e(n,s=qn){let r,o=ee.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jl)return i.BYTE;if(n===tc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===sa)return i.INT;if(n===ai)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===ic)return i.ALPHA;if(n===sc)return i.RGB;if(n===hn)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===aa)return i.RED;if(n===la)return i.RED_INTEGER;if(n===rc)return i.RG;if(n===ca)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===wr||n===Tr)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===xa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===ya||n===va||n===Ma||n===ba||n===Sa||n===Ea||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Ia||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===Da||n===Ua)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Fa||n===Na||n===Ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dx=`
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

}`,Rc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:ux,fragmentShader:dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new jt(new mr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cc=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=typeof XRWebGLBinding!="undefined",g=new Rc,p={},w=e.getContextAttributes(),_=null,y=null,M=[],R=[],L=new Dt,F=null,S=new Ce;S.viewport=new _e;let b=new Ce;b.viewport=new _e;let D=[S,b],k=new Yo,H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let ft=M[ut];return ft===void 0&&(ft=new ds,M[ut]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(ut){let ft=M[ut];return ft===void 0&&(ft=new ds,M[ut]=ft),ft.getGripSpace()},this.getHand=function(ut){let ft=M[ut];return ft===void 0&&(ft=new ds,M[ut]=ft),ft.getHandSpace()};function X(ut){let ft=R.indexOf(ut.inputSource);if(ft===-1)return;let Mt=M[ft];Mt!==void 0&&(Mt.update(ut.inputSource,ut.frame,l||o),Mt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function Z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",q);for(let ut=0;ut<M.length;ut++){let ft=R[ut];ft!==null&&(R[ut]=null,M[ut].disconnect(ft))}H=null,$=null,g.reset();for(let ut in p)delete p[ut];t.setRenderTarget(_),f=null,d=null,u=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){r=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){a=ut,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ut){l=ut},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ut){if(s=ut,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",q),w.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Tt=null,Pt=null;w.depth&&(Pt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=w.stencil?Es:os,Tt=w.stencil?Ss:ai);let Kt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Rn(d.textureWidth,d.textureHeight,{format:hn,type:Sn,depthTexture:new sr(d.textureWidth,d.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Mt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Rn(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(ut){for(let ft=0;ft<ut.removed.length;ft++){let Mt=ut.removed[ft],Tt=R.indexOf(Mt);Tt>=0&&(R[Tt]=null,M[Tt].disconnect(Mt))}for(let ft=0;ft<ut.added.length;ft++){let Mt=ut.added[ft],Tt=R.indexOf(Mt);if(Tt===-1){for(let Kt=0;Kt<M.length;Kt++)if(Kt>=R.length){R.push(Mt),Tt=Kt;break}else if(R[Kt]===null){R[Kt]=Mt,Tt=Kt;break}if(Tt===-1)break}let Pt=M[Tt];Pt&&Pt.connect(Mt)}}let Q=new N,mt=new N;function _t(ut,ft,Mt){Q.setFromMatrixPosition(ft.matrixWorld),mt.setFromMatrixPosition(Mt.matrixWorld);let Tt=Q.distanceTo(mt),Pt=ft.projectionMatrix.elements,Kt=Mt.projectionMatrix.elements,be=Pt[14]/(Pt[10]-1),O=Pt[14]/(Pt[10]+1),qt=(Pt[9]+1)/Pt[5],Ot=(Pt[9]-1)/Pt[5],At=(Pt[8]-1)/Pt[0],lt=(Kt[8]+1)/Kt[0],zt=be*At,Rt=be*lt,pt=Tt/(-At+lt),Yt=pt*-At;if(ft.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Yt),ut.translateZ(pt),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Pt[10]===-1)ut.projectionMatrix.copy(ft.projectionMatrix),ut.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let kt=be+pt,C=O+pt,T=zt-Yt,tt=Rt+(Tt-Yt),at=qt*O/C*kt,it=Ot*O/C*kt;ut.projectionMatrix.makePerspective(T,tt,at,it,kt,C),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function bt(ut,ft){ft===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(ft.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(s===null)return;let ft=ut.near,Mt=ut.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),k.near=b.near=S.near=ft,k.far=b.far=S.far=Mt,(H!==k.near||$!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,$=k.far),k.layers.mask=ut.layers.mask|6,S.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;let Tt=ut.parent,Pt=k.cameras;bt(k,Tt);for(let Kt=0;Kt<Pt.length;Kt++)bt(Pt[Kt],Tt);Pt.length===2?_t(k,S,b):k.projectionMatrix.copy(S.projectionMatrix),yt(ut,k,Tt)};function yt(ut,ft,Mt){Mt===null?ut.matrix.copy(ft.matrixWorld):(ut.matrix.copy(Mt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(ft.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(ft.projectionMatrix),ut.projectionMatrixInverse.copy(ft.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=as*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ut){c=ut,d!==null&&(d.fixedFoveation=ut),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ut)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(ut){return p[ut]};let St=null;function Vt(ut,ft){if(h=ft.getViewerPose(l||o),m=ft,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Tt=!1;Mt.length!==k.cameras.length&&(k.cameras.length=0,Tt=!0);for(let O=0;O<Mt.length;O++){let qt=Mt[O],Ot=null;if(f!==null)Ot=f.getViewport(qt);else{let lt=u.getViewSubImage(d,qt);Ot=lt.viewport,O===0&&(t.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(y))}let At=D[O];At===void 0&&(At=new Ce,At.layers.enable(O),At.viewport=new _e,D[O]=At),At.matrix.fromArray(qt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(qt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),O===0&&(k.matrix.copy(At.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Tt===!0&&k.cameras.push(At)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let O=u.getDepthInformation(Mt[0]);O&&O.isValid&&O.texture&&g.init(O,s.renderState)}if(Pt&&Pt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let O=0;O<Mt.length;O++){let qt=Mt[O].camera;if(qt){let Ot=p[qt];Ot||(Ot=new rr,p[qt]=Ot);let At=u.getCameraImage(qt);Ot.sourceTexture=At}}}}for(let Mt=0;Mt<M.length;Mt++){let Tt=R[Mt],Pt=M[Mt];Tt!==null&&Pt!==void 0&&Pt.update(Tt,ft,l||o)}St&&St(ut,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}let Nt=new Ou;Nt.setAnimationLoop(Vt),this.setAnimationLoop=function(ut){St=ut},this.dispose=function(){}}},Ui=new vn,fx=new se;function px(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,uc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ge&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ge&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),_=w.envMap,y=w.envMapRotation;_&&(g.envMap.value=_,Ui.copy(y),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),g.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Ui)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,_){let y=_.program;n.uniformBlockBinding(w,y)}function l(w,_){let y=s[w.id];y===void 0&&(m(w),y=h(w),s[w.id]=y,w.addEventListener("dispose",g));let M=_.program;n.updateUBOMapping(w,M);let R=t.render.frame;r[w.id]!==R&&(d(w),r[w.id]=R)}function h(w){let _=u();w.__bindingPointIndex=_;let y=i.createBuffer(),M=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let _=s[w.id],y=w.uniforms,M=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,L=y.length;R<L;R++){let F=Array.isArray(y[R])?y[R]:[y[R]];for(let S=0,b=F.length;S<b;S++){let D=F[S];if(f(D,R,S,M)===!0){let k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value],$=0;for(let X=0;X<H.length;X++){let Z=H[X],q=v(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,k+$,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,$),$+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,_,y,M){let R=w.value,L=_+"_"+y;if(M[L]===void 0)return typeof R=="number"||typeof R=="boolean"?M[L]=R:M[L]=R.clone(),!0;{let F=M[L];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return M[L]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function m(w){let _=w.uniforms,y=0,M=16;for(let L=0,F=_.length;L<F;L++){let S=Array.isArray(_[L])?_[L]:[_[L]];for(let b=0,D=S.length;b<D;b++){let k=S[b],H=Array.isArray(k.value)?k.value:[k.value];for(let $=0,X=H.length;$<X;$++){let Z=H[$],q=v(Z),Q=y%M,mt=Q%q.boundary,_t=Q+mt;y+=mt,_t!==0&&M-_t<q.storage&&(y+=M-_t),k.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=q.storage}}}let R=y%M;return R>0&&(y+=M-R),w.__size=y,w.__cache={},this}function v(w){let _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function g(w){let _=w.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Cs=class{constructor(t={}){let{canvas:e=au(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,M=!1;this._outputColorSpace=en;let R=0,L=0,F=null,S=-1,b=null,D=new _e,k=new _e,H=null,$=new Jt(0),X=0,Z=e.width,q=e.height,Q=1,mt=null,_t=null,bt=new _e(0,0,Z,q),yt=new _e(0,0,Z,q),St=!1,Vt=new fs,Nt=!1,ut=!1,ft=new se,Mt=new N,Tt=new _e,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function be(){return F===null?Q:1}let O=n;function qt(P,J){return e.getContext(P,J)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),O===null){let J="webgl2";if(O=qt(J,P),O===null)throw qt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ot,At,lt,zt,Rt,pt,Yt,kt,C,T,tt,at,it,nt,E,x,A,I,U,B,V,W,Y,j;function z(){Ot=new D0(O),Ot.init(),W=new hx(O,Ot),At=new T0(O,Ot,t,W),lt=new lx(O,Ot),At.reversedDepthBuffer&&d&&lt.buffers.depth.setReversed(!0),zt=new F0(O),Rt=new Jg,pt=new cx(O,Ot,lt,Rt,At,W,zt),Yt=new R0(y),kt=new L0(y),C=new Vf(O),Y=new E0(O,C),T=new U0(O,C,zt,Y),tt=new B0(O,T,C,zt),U=new N0(O,At,pt),x=new A0(Rt),at=new Zg(y,Yt,kt,Ot,At,Y,x),it=new px(y,Rt),nt=new Kg,E=new ix(Ot),I=new S0(y,Yt,kt,lt,tt,f,c),A=new ox(y,tt,At),j=new mx(O,zt,At,lt),B=new w0(O,Ot,zt),V=new z0(O,Ot,zt),zt.programs=at.programs,y.capabilities=At,y.extensions=Ot,y.properties=Rt,y.renderLists=nt,y.shadowMap=A,y.state=lt,y.info=zt}z();let st=new Cc(y,O);this.xr=st,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let P=Ot.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=Ot.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(Z,q,!1))},this.getSize=function(P){return P.set(Z,q)},this.setSize=function(P,J,rt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=P,q=J,e.width=Math.floor(P*Q),e.height=Math.floor(J*Q),rt===!0&&(e.style.width=P+"px",e.style.height=J+"px"),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(Z*Q,q*Q).floor()},this.setDrawingBufferSize=function(P,J,rt){Z=P,q=J,Q=rt,e.width=Math.floor(P*rt),e.height=Math.floor(J*rt),this.setViewport(0,0,P,J)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(bt)},this.setViewport=function(P,J,rt,ot){P.isVector4?bt.set(P.x,P.y,P.z,P.w):bt.set(P,J,rt,ot),lt.viewport(D.copy(bt).multiplyScalar(Q).round())},this.getScissor=function(P){return P.copy(yt)},this.setScissor=function(P,J,rt,ot){P.isVector4?yt.set(P.x,P.y,P.z,P.w):yt.set(P,J,rt,ot),lt.scissor(k.copy(yt).multiplyScalar(Q).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(P){lt.setScissorTest(St=P)},this.setOpaqueSort=function(P){mt=P},this.setTransparentSort=function(P){_t=P},this.getClearColor=function(P){return P.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,rt=!0){let ot=0;if(P){let K=!1;if(F!==null){let xt=F.texture.format;K=xt===ha||xt===ca||xt===la}if(K){let xt=F.texture.type,wt=xt===Sn||xt===ai||xt===Ms||xt===Ss||xt===ra||xt===oa,Lt=I.getClearColor(),Ct=I.getClearAlpha(),Ht=Lt.r,Gt=Lt.g,Ft=Lt.b;wt?(m[0]=Ht,m[1]=Gt,m[2]=Ft,m[3]=Ct,O.clearBufferuiv(O.COLOR,0,m)):(v[0]=Ht,v[1]=Gt,v[2]=Ft,v[3]=Ct,O.clearBufferiv(O.COLOR,0,v))}else ot|=O.COLOR_BUFFER_BIT}J&&(ot|=O.DEPTH_BUFFER_BIT),rt&&(ot|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),I.dispose(),nt.dispose(),E.dispose(),Rt.dispose(),Yt.dispose(),kt.dispose(),tt.dispose(),Y.dispose(),j.dispose(),at.dispose(),st.dispose(),st.removeEventListener("sessionstart",An),st.removeEventListener("sessionend",Bc),fi.stop()};function dt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=zt.autoReset,J=A.enabled,rt=A.autoUpdate,ot=A.needsUpdate,K=A.type;z(),zt.autoReset=P,A.enabled=J,A.autoUpdate=rt,A.needsUpdate=ot,A.type=K}function ct(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ht(P){let J=P.target;J.removeEventListener("dispose",ht),vt(J)}function vt(P){It(P),Rt.remove(P)}function It(P){let J=Rt.get(P).programs;J!==void 0&&(J.forEach(function(rt){at.releaseProgram(rt)}),P.isShaderMaterial&&at.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,rt,ot,K,xt){J===null&&(J=Pt);let wt=K.isMesh&&K.matrixWorld.determinant()<0,Lt=ld(P,J,rt,ot,K);lt.setMaterial(ot,wt);let Ct=rt.index,Ht=1;if(ot.wireframe===!0){if(Ct=T.getWireframeAttribute(rt),Ct===void 0)return;Ht=2}let Gt=rt.drawRange,Ft=rt.attributes.position,te=Gt.start*Ht,oe=(Gt.start+Gt.count)*Ht;xt!==null&&(te=Math.max(te,xt.start*Ht),oe=Math.min(oe,(xt.start+xt.count)*Ht)),Ct!==null?(te=Math.max(te,0),oe=Math.min(oe,Ct.count)):Ft!=null&&(te=Math.max(te,0),oe=Math.min(oe,Ft.count));let ve=oe-te;if(ve<0||ve===1/0)return;Y.setup(K,ot,Lt,rt,Ct);let ue,ae=B;if(Ct!==null&&(ue=C.get(Ct),ae=V,ae.setIndex(ue)),K.isMesh)ot.wireframe===!0?(lt.setLineWidth(ot.wireframeLinewidth*be()),ae.setMode(O.LINES)):ae.setMode(O.TRIANGLES);else if(K.isLine){let Bt=ot.linewidth;Bt===void 0&&(Bt=1),lt.setLineWidth(Bt*be()),K.isLineSegments?ae.setMode(O.LINES):K.isLineLoop?ae.setMode(O.LINE_LOOP):ae.setMode(O.LINE_STRIP)}else K.isPoints?ae.setMode(O.POINTS):K.isSprite&&ae.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Bt=K._multiDrawStarts,me=K._multiDrawCounts,ne=K._multiDrawCount,Ke=Ct?C.get(Ct).bytesPerElement:1,Gi=Rt.get(ot).currentProgram.getUniforms();for(let Qe=0;Qe<ne;Qe++)Gi.setValue(O,"_gl_DrawID",Qe),ae.render(Bt[Qe]/Ke,me[Qe])}else if(K.isInstancedMesh)ae.renderInstances(te,ve,K.count);else if(rt.isInstancedBufferGeometry){let Bt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,me=Math.min(rt.instanceCount,Bt);ae.renderInstances(te,ve,me)}else ae.render(te,ve)};function Wt(P,J,rt){P.transparent===!0&&P.side===ze&&P.forceSinglePass===!1?(P.side=Ge,P.needsUpdate=!0,Or(P,J,rt),P.side=kn,P.needsUpdate=!0,Or(P,J,rt),P.side=ze):Or(P,J,rt)}this.compile=function(P,J,rt=null){rt===null&&(rt=P),p=E.get(rt),p.init(J),_.push(p),rt.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),P!==rt&&P.traverseVisible(function(K){K.isLight&&K.layers.test(J.layers)&&(p.pushLight(K),K.castShadow&&p.pushShadow(K))}),p.setupLights();let ot=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let xt=K.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let Lt=xt[wt];Wt(Lt,rt,K),ot.add(Lt)}else Wt(xt,rt,K),ot.add(xt)}),p=_.pop(),ot},this.compileAsync=function(P,J,rt=null){let ot=this.compile(P,J,rt);return new Promise(K=>{function xt(){if(ot.forEach(function(wt){Rt.get(wt).currentProgram.isReady()&&ot.delete(wt)}),ot.size===0){K(P);return}setTimeout(xt,10)}Ot.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Xt=null;function Oe(P){Xt&&Xt(P)}function An(){fi.stop()}function Bc(){fi.start()}let fi=new Ou;fi.setAnimationLoop(Oe),typeof self!="undefined"&&fi.setContext(self),this.setAnimationLoop=function(P){Xt=P,st.setAnimationLoop(P),P===null?fi.stop():fi.start()},st.addEventListener("sessionstart",An),st.addEventListener("sessionend",Bc),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(J),J=st.getCamera()),P.isScene===!0&&P.onBeforeRender(y,P,J,F),p=E.get(P,_.length),p.init(J),_.push(p),ft.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Vt.setFromProjectionMatrix(ft,xn,J.reversedDepth),ut=this.localClippingEnabled,Nt=x.init(this.clippingPlanes,ut),g=nt.get(P,w.length),g.init(),w.push(g),st.enabled===!0&&st.isPresenting===!0){let xt=y.xr.getDepthSensingMesh();xt!==null&&sl(xt,J,-1/0,y.sortObjects)}sl(P,J,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(mt,_t),Kt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Kt&&I.addToRenderList(g,P),this.info.render.frame++,Nt===!0&&x.beginShadows();let rt=p.state.shadowsArray;A.render(rt,P,J),Nt===!0&&x.endShadows(),this.info.autoReset===!0&&this.info.reset();let ot=g.opaque,K=g.transmissive;if(p.setupLights(),J.isArrayCamera){let xt=J.cameras;if(K.length>0)for(let wt=0,Lt=xt.length;wt<Lt;wt++){let Ct=xt[wt];kc(ot,K,P,Ct)}Kt&&I.render(P);for(let wt=0,Lt=xt.length;wt<Lt;wt++){let Ct=xt[wt];Oc(g,P,Ct,Ct.viewport)}}else K.length>0&&kc(ot,K,P,J),Kt&&I.render(P),Oc(g,P,J);F!==null&&L===0&&(pt.updateMultisampleRenderTarget(F),pt.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(y,P,J),Y.resetDefaultState(),S=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],Nt===!0&&x.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function sl(P,J,rt,ot){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)rt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Vt.intersectsSprite(P)){ot&&Tt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ft);let wt=tt.update(P),Lt=P.material;Lt.visible&&g.push(P,wt,Lt,rt,Tt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Vt.intersectsObject(P))){let wt=tt.update(P),Lt=P.material;if(ot&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Tt.copy(P.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Tt.copy(wt.boundingSphere.center)),Tt.applyMatrix4(P.matrixWorld).applyMatrix4(ft)),Array.isArray(Lt)){let Ct=wt.groups;for(let Ht=0,Gt=Ct.length;Ht<Gt;Ht++){let Ft=Ct[Ht],te=Lt[Ft.materialIndex];te&&te.visible&&g.push(P,wt,te,rt,Tt.z,Ft)}}else Lt.visible&&g.push(P,wt,Lt,rt,Tt.z,null)}}let xt=P.children;for(let wt=0,Lt=xt.length;wt<Lt;wt++)sl(xt[wt],J,rt,ot)}function Oc(P,J,rt,ot){let K=P.opaque,xt=P.transmissive,wt=P.transparent;p.setupLightsView(rt),Nt===!0&&x.setGlobalState(y.clippingPlanes,rt),ot&&lt.viewport(D.copy(ot)),K.length>0&&Br(K,J,rt),xt.length>0&&Br(xt,J,rt),wt.length>0&&Br(wt,J,rt),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function kc(P,J,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ot.id]===void 0&&(p.state.transmissionRenderTarget[ot.id]=new Rn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?bs:Sn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let xt=p.state.transmissionRenderTarget[ot.id],wt=ot.viewport||D;xt.setSize(wt.z*y.transmissionResolutionScale,wt.w*y.transmissionResolutionScale);let Lt=y.getRenderTarget(),Ct=y.getActiveCubeFace(),Ht=y.getActiveMipmapLevel();y.setRenderTarget(xt),y.getClearColor($),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Kt&&I.render(rt);let Gt=y.toneMapping;y.toneMapping=Xn;let Ft=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),p.setupLightsView(ot),Nt===!0&&x.setGlobalState(y.clippingPlanes,ot),Br(P,rt,ot),pt.updateMultisampleRenderTarget(xt),pt.updateRenderTargetMipmap(xt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let oe=0,ve=J.length;oe<ve;oe++){let ue=J[oe],ae=ue.object,Bt=ue.geometry,me=ue.material,ne=ue.group;if(me.side===ze&&ae.layers.test(ot.layers)){let Ke=me.side;me.side=Ge,me.needsUpdate=!0,Hc(ae,rt,ot,Bt,me,ne),me.side=Ke,me.needsUpdate=!0,te=!0}}te===!0&&(pt.updateMultisampleRenderTarget(xt),pt.updateRenderTargetMipmap(xt))}y.setRenderTarget(Lt,Ct,Ht),y.setClearColor($,X),Ft!==void 0&&(ot.viewport=Ft),y.toneMapping=Gt}function Br(P,J,rt){let ot=J.isScene===!0?J.overrideMaterial:null;for(let K=0,xt=P.length;K<xt;K++){let wt=P[K],Lt=wt.object,Ct=wt.geometry,Ht=wt.group,Gt=wt.material;Gt.allowOverride===!0&&ot!==null&&(Gt=ot),Lt.layers.test(rt.layers)&&Hc(Lt,J,rt,Ct,Gt,Ht)}}function Hc(P,J,rt,ot,K,xt){P.onBeforeRender(y,J,rt,ot,K,xt),P.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(y,J,rt,ot,P,xt),K.transparent===!0&&K.side===ze&&K.forceSinglePass===!1?(K.side=Ge,K.needsUpdate=!0,y.renderBufferDirect(rt,J,ot,K,P,xt),K.side=kn,K.needsUpdate=!0,y.renderBufferDirect(rt,J,ot,K,P,xt),K.side=ze):y.renderBufferDirect(rt,J,ot,K,P,xt),P.onAfterRender(y,J,rt,ot,K,xt)}function Or(P,J,rt){J.isScene!==!0&&(J=Pt);let ot=Rt.get(P),K=p.state.lights,xt=p.state.shadowsArray,wt=K.state.version,Lt=at.getParameters(P,K.state,xt,J,rt),Ct=at.getProgramCacheKey(Lt),Ht=ot.programs;ot.environment=P.isMeshStandardMaterial?J.environment:null,ot.fog=J.fog,ot.envMap=(P.isMeshStandardMaterial?kt:Yt).get(P.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Ht===void 0&&(P.addEventListener("dispose",ht),Ht=new Map,ot.programs=Ht);let Gt=Ht.get(Ct);if(Gt!==void 0){if(ot.currentProgram===Gt&&ot.lightsStateVersion===wt)return Gc(P,Lt),Gt}else Lt.uniforms=at.getUniforms(P),P.onBeforeCompile(Lt,y),Gt=at.acquireProgram(Lt,Ct),Ht.set(Ct,Gt),ot.uniforms=Lt.uniforms;let Ft=ot.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ft.clippingPlanes=x.uniform),Gc(P,Lt),ot.needsLights=hd(P),ot.lightsStateVersion=wt,ot.needsLights&&(Ft.ambientLightColor.value=K.state.ambient,Ft.lightProbe.value=K.state.probe,Ft.directionalLights.value=K.state.directional,Ft.directionalLightShadows.value=K.state.directionalShadow,Ft.spotLights.value=K.state.spot,Ft.spotLightShadows.value=K.state.spotShadow,Ft.rectAreaLights.value=K.state.rectArea,Ft.ltc_1.value=K.state.rectAreaLTC1,Ft.ltc_2.value=K.state.rectAreaLTC2,Ft.pointLights.value=K.state.point,Ft.pointLightShadows.value=K.state.pointShadow,Ft.hemisphereLights.value=K.state.hemi,Ft.directionalShadowMap.value=K.state.directionalShadowMap,Ft.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ft.spotShadowMap.value=K.state.spotShadowMap,Ft.spotLightMatrix.value=K.state.spotLightMatrix,Ft.spotLightMap.value=K.state.spotLightMap,Ft.pointShadowMap.value=K.state.pointShadowMap,Ft.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=Gt,ot.uniformsList=null,Gt}function Vc(P){if(P.uniformsList===null){let J=P.currentProgram.getUniforms();P.uniformsList=Rs.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function Gc(P,J){let rt=Rt.get(P);rt.outputColorSpace=J.outputColorSpace,rt.batching=J.batching,rt.batchingColor=J.batchingColor,rt.instancing=J.instancing,rt.instancingColor=J.instancingColor,rt.instancingMorph=J.instancingMorph,rt.skinning=J.skinning,rt.morphTargets=J.morphTargets,rt.morphNormals=J.morphNormals,rt.morphColors=J.morphColors,rt.morphTargetsCount=J.morphTargetsCount,rt.numClippingPlanes=J.numClippingPlanes,rt.numIntersection=J.numClipIntersection,rt.vertexAlphas=J.vertexAlphas,rt.vertexTangents=J.vertexTangents,rt.toneMapping=J.toneMapping}function ld(P,J,rt,ot,K){J.isScene!==!0&&(J=Pt),pt.resetTextureUnits();let xt=J.fog,wt=ot.isMeshStandardMaterial?J.environment:null,Lt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:bi,Ct=(ot.isMeshStandardMaterial?kt:Yt).get(ot.envMap||wt),Ht=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Gt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Ft=!!rt.morphAttributes.position,te=!!rt.morphAttributes.normal,oe=!!rt.morphAttributes.color,ve=Xn;ot.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ve=y.toneMapping);let ue=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,ae=ue!==void 0?ue.length:0,Bt=Rt.get(ot),me=p.state.lights;if(Nt===!0&&(ut===!0||P!==b)){let ke=P===b&&ot.id===S;x.setState(ot,P,ke)}let ne=!1;ot.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==me.state.version||Bt.outputColorSpace!==Lt||K.isBatchedMesh&&Bt.batching===!1||!K.isBatchedMesh&&Bt.batching===!0||K.isBatchedMesh&&Bt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Bt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Bt.instancing===!1||!K.isInstancedMesh&&Bt.instancing===!0||K.isSkinnedMesh&&Bt.skinning===!1||!K.isSkinnedMesh&&Bt.skinning===!0||K.isInstancedMesh&&Bt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Bt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Bt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Bt.instancingMorph===!1&&K.morphTexture!==null||Bt.envMap!==Ct||ot.fog===!0&&Bt.fog!==xt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==x.numPlanes||Bt.numIntersection!==x.numIntersection)||Bt.vertexAlphas!==Ht||Bt.vertexTangents!==Gt||Bt.morphTargets!==Ft||Bt.morphNormals!==te||Bt.morphColors!==oe||Bt.toneMapping!==ve||Bt.morphTargetsCount!==ae)&&(ne=!0):(ne=!0,Bt.__version=ot.version);let Ke=Bt.currentProgram;ne===!0&&(Ke=Or(ot,J,K));let Gi=!1,Qe=!1,Us=!1,ge=Ke.getUniforms(),sn=Bt.uniforms;if(lt.useProgram(Ke.program)&&(Gi=!0,Qe=!0,Us=!0),ot.id!==S&&(S=ot.id,Qe=!0),Gi||b!==P){lt.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),ge.setValue(O,"projectionMatrix",P.projectionMatrix),ge.setValue(O,"viewMatrix",P.matrixWorldInverse);let Ye=ge.map.cameraPosition;Ye!==void 0&&Ye.setValue(O,Mt.setFromMatrixPosition(P.matrixWorld)),At.logarithmicDepthBuffer&&ge.setValue(O,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&ge.setValue(O,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Qe=!0,Us=!0)}if(K.isSkinnedMesh){ge.setOptional(O,K,"bindMatrix"),ge.setOptional(O,K,"bindMatrixInverse");let ke=K.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ge.setValue(O,"boneTexture",ke.boneTexture,pt))}K.isBatchedMesh&&(ge.setOptional(O,K,"batchingTexture"),ge.setValue(O,"batchingTexture",K._matricesTexture,pt),ge.setOptional(O,K,"batchingIdTexture"),ge.setValue(O,"batchingIdTexture",K._indirectTexture,pt),ge.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&ge.setValue(O,"batchingColorTexture",K._colorsTexture,pt));let rn=rt.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&U.update(K,rt,Ke),(Qe||Bt.receiveShadow!==K.receiveShadow)&&(Bt.receiveShadow=K.receiveShadow,ge.setValue(O,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(sn.envMap.value=Ct,sn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&J.environment!==null&&(sn.envMapIntensity.value=J.environmentIntensity),Qe&&(ge.setValue(O,"toneMappingExposure",y.toneMappingExposure),Bt.needsLights&&cd(sn,Us),xt&&ot.fog===!0&&it.refreshFogUniforms(sn,xt),it.refreshMaterialUniforms(sn,ot,Q,q,p.state.transmissionRenderTarget[P.id]),Rs.upload(O,Vc(Bt),sn,pt)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Rs.upload(O,Vc(Bt),sn,pt),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&ge.setValue(O,"center",K.center),ge.setValue(O,"modelViewMatrix",K.modelViewMatrix),ge.setValue(O,"normalMatrix",K.normalMatrix),ge.setValue(O,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let ke=ot.uniformsGroups;for(let Ye=0,rl=ke.length;Ye<rl;Ye++){let pi=ke[Ye];j.update(pi,Ke),j.bind(pi,Ke)}}return Ke}function cd(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function hd(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,J,rt){let ot=Rt.get(P);ot.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Rt.get(P.texture).__webglTexture=J,Rt.get(P.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:rt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,J){let rt=Rt.get(P);rt.__webglFramebuffer=J,rt.__useDefaultFramebuffer=J===void 0};let ud=O.createFramebuffer();this.setRenderTarget=function(P,J=0,rt=0){F=P,R=J,L=rt;let ot=!0,K=null,xt=!1,wt=!1;if(P){let Ct=Rt.get(P);if(Ct.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(O.FRAMEBUFFER,null),ot=!1;else if(Ct.__webglFramebuffer===void 0)pt.setupRenderTarget(P);else if(Ct.__hasExternalTextures)pt.rebindTextures(P,Rt.get(P.texture).__webglTexture,Rt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ft=P.depthTexture;if(Ct.__boundDepthTexture!==Ft){if(Ft!==null&&Rt.has(Ft)&&(P.width!==Ft.image.width||P.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(P)}}let Ht=P.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);let Gt=Rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[J])?K=Gt[J][rt]:K=Gt[J],xt=!0):P.samples>0&&pt.useMultisampledRTT(P)===!1?K=Rt.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?K=Gt[rt]:K=Gt,D.copy(P.viewport),k.copy(P.scissor),H=P.scissorTest}else D.copy(bt).multiplyScalar(Q).floor(),k.copy(yt).multiplyScalar(Q).floor(),H=St;if(rt!==0&&(K=ud),lt.bindFramebuffer(O.FRAMEBUFFER,K)&&ot&&lt.drawBuffers(P,K),lt.viewport(D),lt.scissor(k),lt.setScissorTest(H),xt){let Ct=Rt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ct.__webglTexture,rt)}else if(wt){let Ct=J;for(let Ht=0;Ht<P.textures.length;Ht++){let Gt=Rt.get(P.textures[Ht]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ht,Gt.__webglTexture,rt,Ct)}}else if(P!==null&&rt!==0){let Ct=Rt.get(P.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ct.__webglTexture,rt)}S=-1},this.readRenderTargetPixels=function(P,J,rt,ot,K,xt,wt,Lt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){lt.bindFramebuffer(O.FRAMEBUFFER,Ct);try{let Ht=P.textures[Lt],Gt=Ht.format,Ft=Ht.type;if(!At.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-ot&&rt>=0&&rt<=P.height-K&&(P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Lt),O.readPixels(J,rt,ot,K,W.convert(Gt),W.convert(Ft),xt))}finally{let Ht=F!==null?Rt.get(F).__webglFramebuffer:null;lt.bindFramebuffer(O.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,J,rt,ot,K,xt,wt,Lt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(J>=0&&J<=P.width-ot&&rt>=0&&rt<=P.height-K){lt.bindFramebuffer(O.FRAMEBUFFER,Ct);let Ht=P.textures[Lt],Gt=Ht.format,Ft=Ht.type;if(!At.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.bufferData(O.PIXEL_PACK_BUFFER,xt.byteLength,O.STREAM_READ),P.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Lt),O.readPixels(J,rt,ot,K,W.convert(Gt),W.convert(Ft),0);let oe=F!==null?Rt.get(F).__webglFramebuffer:null;lt.bindFramebuffer(O.FRAMEBUFFER,oe);let ve=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await lu(O,ve,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,te),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xt),O.deleteBuffer(te),O.deleteSync(ve),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,J=null,rt=0){let ot=Math.pow(2,-rt),K=Math.floor(P.image.width*ot),xt=Math.floor(P.image.height*ot),wt=J!==null?J.x:0,Lt=J!==null?J.y:0;pt.setTexture2D(P,0),O.copyTexSubImage2D(O.TEXTURE_2D,rt,0,0,wt,Lt,K,xt),lt.unbindTexture()};let dd=O.createFramebuffer(),fd=O.createFramebuffer();this.copyTextureToTexture=function(P,J,rt=null,ot=null,K=0,xt=null){xt===null&&(K!==0?(ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=K,K=0):xt=0);let wt,Lt,Ct,Ht,Gt,Ft,te,oe,ve,ue=P.isCompressedTexture?P.mipmaps[xt]:P.image;if(rt!==null)wt=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ct=rt.isBox3?rt.max.z-rt.min.z:1,Ht=rt.min.x,Gt=rt.min.y,Ft=rt.isBox3?rt.min.z:0;else{let rn=Math.pow(2,-K);wt=Math.floor(ue.width*rn),Lt=Math.floor(ue.height*rn),P.isDataArrayTexture?Ct=ue.depth:P.isData3DTexture?Ct=Math.floor(ue.depth*rn):Ct=1,Ht=0,Gt=0,Ft=0}ot!==null?(te=ot.x,oe=ot.y,ve=ot.z):(te=0,oe=0,ve=0);let ae=W.convert(J.format),Bt=W.convert(J.type),me;J.isData3DTexture?(pt.setTexture3D(J,0),me=O.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(pt.setTexture2DArray(J,0),me=O.TEXTURE_2D_ARRAY):(pt.setTexture2D(J,0),me=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment);let ne=O.getParameter(O.UNPACK_ROW_LENGTH),Ke=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Gi=O.getParameter(O.UNPACK_SKIP_PIXELS),Qe=O.getParameter(O.UNPACK_SKIP_ROWS),Us=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ue.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ht),O.pixelStorei(O.UNPACK_SKIP_ROWS,Gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ft);let ge=P.isDataArrayTexture||P.isData3DTexture,sn=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){let rn=Rt.get(P),ke=Rt.get(J),Ye=Rt.get(rn.__renderTarget),rl=Rt.get(ke.__renderTarget);lt.bindFramebuffer(O.READ_FRAMEBUFFER,Ye.__webglFramebuffer),lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,rl.__webglFramebuffer);for(let pi=0;pi<Ct;pi++)ge&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,K,Ft+pi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Rt.get(J).__webglTexture,xt,ve+pi)),O.blitFramebuffer(Ht,Gt,wt,Lt,te,oe,wt,Lt,O.DEPTH_BUFFER_BIT,O.NEAREST);lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||Rt.has(P)){let rn=Rt.get(P),ke=Rt.get(J);lt.bindFramebuffer(O.READ_FRAMEBUFFER,dd),lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,fd);for(let Ye=0;Ye<Ct;Ye++)ge?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,K,Ft+Ye):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,K),sn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.__webglTexture,xt,ve+Ye):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ke.__webglTexture,xt),K!==0?O.blitFramebuffer(Ht,Gt,wt,Lt,te,oe,wt,Lt,O.COLOR_BUFFER_BIT,O.NEAREST):sn?O.copyTexSubImage3D(me,xt,te,oe,ve+Ye,Ht,Gt,wt,Lt):O.copyTexSubImage2D(me,xt,te,oe,Ht,Gt,wt,Lt);lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else sn?P.isDataTexture||P.isData3DTexture?O.texSubImage3D(me,xt,te,oe,ve,wt,Lt,Ct,ae,Bt,ue.data):J.isCompressedArrayTexture?O.compressedTexSubImage3D(me,xt,te,oe,ve,wt,Lt,Ct,ae,ue.data):O.texSubImage3D(me,xt,te,oe,ve,wt,Lt,Ct,ae,Bt,ue):P.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xt,te,oe,wt,Lt,ae,Bt,ue.data):P.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xt,te,oe,ue.width,ue.height,ae,ue.data):O.texSubImage2D(O.TEXTURE_2D,xt,te,oe,wt,Lt,ae,Bt,ue);O.pixelStorei(O.UNPACK_ROW_LENGTH,ne),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ke),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gi),O.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Us),xt===0&&J.generateMipmaps&&O.generateMipmap(me),lt.unbindTexture()},this.initRenderTarget=function(P){Rt.get(P).__webglFramebuffer===void 0&&pt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?pt.setTextureCube(P,0):P.isData3DTexture?pt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?pt.setTexture2DArray(P,0):pt.setTexture2D(P,0),lt.unbindTexture()},this.resetState=function(){R=0,L=0,F=null,lt.reset(),Y.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};function Wu(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let w=0,_=a.length;w<_;w++){let y=a[w],M=i.attributes[y];c[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let R=i.morphAttributes[y];R&&(l[y]||(l[y]=[]),R.forEach((L,F)=>{let S=new L.array.constructor(L.count*L.itemSize);l[y][F]=new L.constructor(S,L.itemSize,L.normalized)}))}let f=t*.5,m=Math.log10(1/t),v=Math.pow(10,m),g=f*v;for(let w=0;w<r;w++){let _=n?n.getX(w):w,y="";for(let M=0,R=a.length;M<R;M++){let L=a[M],F=i.getAttribute(L),S=F.itemSize;for(let b=0;b<S;b++)y+=`${~~(F[u[b]](_)*v+g)},`}if(y in e)h.push(e[y]);else{for(let M=0,R=a.length;M<R;M++){let L=a[M],F=i.getAttribute(L),S=i.morphAttributes[L],b=F.itemSize,D=c[L],k=l[L];for(let H=0;H<b;H++){let $=u[H],X=d[H];if(D[X](o,F[$](_)),S)for(let Z=0,q=S.length;Z<q;Z++)k[Z][X](o,S[Z][$](_))}}e[y]=o,h.push(o),o++}}let p=i.clone();for(let w in i.attributes){let _=c[w];if(p.setAttribute(w,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),w in l)for(let y=0;y<l[w].length;y++){let M=l[w][y];p.morphAttributes[w][y]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(h),p}var Pc=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Xu=new Map;function gx(i){if(Array.isArray(i))return i;let t=Xu.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[Pc((e>>16&255)/255),Pc((e>>8&255)/255),Pc((e&255)/255)],Xu.set(i,t),t}var li=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let o=this.buf(t),a=gx(e),c=s[0]-n[0],l=s[1]-n[1],h=s[2]-n[2],u=r[0]-n[0],d=r[1]-n[1],f=r[2]-n[2],m=l*f-h*d,v=h*u-c*f,g=c*d-l*u,p=Math.hypot(m,v,g)||1;m/=p,v/=p,g/=p,o.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(m,v,g,m,v,g,m,v,g),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,n,s,r,o){this.tri(t,e,n,s,r),this.tri(t,e,n,r,o)}box(t,e,n,s,r,o,a,c,l=""){if(n>o&&([n,o]=[o,n]),s>a&&([s,a]=[a,s]),r>c&&([r,c]=[c,r]),o-n<1e-4||a-s<1e-4||c-r<1e-4)return;let h=(u,d,f)=>[u,d,f];l.includes("t")||this.quad(t,e,h(n,a,c),h(o,a,c),h(o,a,r),h(n,a,r)),l.includes("b")||this.quad(t,e,h(n,s,r),h(o,s,r),h(o,s,c),h(n,s,c)),this.quad(t,e,h(n,s,c),h(o,s,c),h(o,a,c),h(n,a,c)),this.quad(t,e,h(o,s,r),h(n,s,r),h(n,a,r),h(o,a,r)),this.quad(t,e,h(o,s,c),h(o,s,r),h(o,a,r),h(o,a,c)),this.quad(t,e,h(n,s,r),h(n,s,c),h(n,a,c),h(n,a,r))}obox(t,e,n,s,r,o){let a=(l,h,u)=>[n[0]+l*s[0]+h*r[0]+u*o[0],n[1]+l*s[1]+h*r[1]+u*o[1],n[2]+l*s[2]+h*r[2]+u*o[2]],c=(l,h,u,d)=>this.quad(t,e,l,h,u,d);c(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),c(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),c(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),c(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),c(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),c(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,n,s,r,o,a,c,l=0){let h=Math.cos(l),u=Math.sin(l);this.obox(t,e,[n,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*c/2,0,h*c/2])}beam(t,e,n,s,r,o=r){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],c=Math.hypot(...a)||1,l=a.map(m=>m/c),h=Math.abs(l[1])<.95?[l[2],0,-l[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(m=>m/u);let d=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],f=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,f,h.map(m=>m*r/2),d.map(m=>m*o/2),l.map(m=>m*c/2))}prism(t,e,n,s,r,o={}){var d,f;let a=n.length,c=0;for(let m=0;m<a;m++){let v=n[m],g=n[(m+1)%a];c+=v[0]*g[1]-g[0]*v[1]}let l=c>0?n:[...n].reverse(),h=(d=o.top)!=null?d:e,u=(f=o.side)!=null?f:e;if(o.top!==!1)for(let m=1;m<a-1;m++)this.tri(t,h,[l[0][0],r,l[0][1]],[l[m+1][0],r,l[m+1][1]],[l[m][0],r,l[m][1]]);if(o.bottom!==!1)for(let m=1;m<a-1;m++)this.tri(t,u,[l[0][0],s,l[0][1]],[l[m][0],s,l[m][1]],[l[m+1][0],s,l[m+1][1]]);if(o.sides!==!1)for(let m=0;m<a;m++){let v=l[m],g=l[(m+1)%a];this.quad(t,u,[g[0],s,g[1]],[v[0],s,v[1]],[v[0],r,v[1]],[g[0],r,g[1]])}}cyl(t,e,n,s,r,o,a,c=8,l=Math.PI/8,h={}){let u=[];for(let d=0;d<c;d++){let f=l+d*Math.PI*2/c;u.push([n+Math.cos(f)*a,s+Math.sin(f)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,n,s,r,o,a,c,l=8,h=Math.PI/8){for(let u=0;u<l;u++){let d=h+u*Math.PI*2/l,f=h+(u+1)*Math.PI*2/l,m=[n+Math.cos(d)*a,r,s+Math.sin(d)*a],v=[n+Math.cos(f)*a,r,s+Math.sin(f)*a],g=[n+Math.cos(d)*c,o,s+Math.sin(d)*c],p=[n+Math.cos(f)*c,o,s+Math.sin(f)*c];this.quad(t,e,m,g,p,v),c>.001&&this.tri(t,e,[n,o,s],p,g),this.tri(t,e,[n,r,s],m,v)}}wall(t,e,n,s,r,o,a,c=[],l={}){let h=s[0]-n[0],u=s[1]-n[1],d=Math.hypot(h,u);if(d<.001)return null;let f=h/d,m=u/d,v=-m,g=f,p=o-r,w=(L,F,S=0)=>[n[0]+f*L+v*S,r+F,n[1]+m*L+g*S],_=new Set([0,d]),y=c.map(L=>{var F,S;return{s0:Math.max(0,L.a),s1:Math.min(d,L.a+L.w),y0:(F=L.y0)!=null?F:0,y1:Math.min(p,(S=L.y1)!=null?S:p)}}).filter(L=>L.s1>L.s0+.001);for(let L of y)_.add(L.s0),_.add(L.s1);let M=[..._].sort((L,F)=>L-F),R=Math.atan2(m,f);for(let L=0;L<M.length-1;L++){let F=M[L],S=M[L+1];if(S-F<.001)continue;let b=(F+S)/2,D=y.filter($=>$.s0<=b&&$.s1>=b).sort(($,X)=>$.y0-X.y0),k=0,H=[];for(let $ of D)$.y0>k+.001&&H.push([k,$.y0]),k=Math.max(k,$.y1);k<p-.001&&H.push([k,p]);for(let[$,X]of H){let Z=w(b,($+X)/2);this.ybox(t,e,Z[0],Z[1],Z[2],S-F,X-$,a,R)}}return{at:w,L:d,ux:f,uz:m,nx:v,nz:g,yaw:R}}rail(t,e,n,s,r=1.05,o=.5,a={}){var h,u;let c=(h=a.w)!=null?h:.07,l=(u=a.top)!=null?u:.12;for(let d=0;d<n.length-1;d++){let f=n[d],m=n[d+1],v=Math.hypot(m[0]-f[0],m[1]-f[1]);if(v<.05)continue;this.beam(t,e,[f[0],s+r,f[1]],[m[0],s+r,m[1]],l,.08),this.beam(t,e,[f[0],s+.12,f[1]],[m[0],s+.12,m[1]],c,c);let g=Math.max(1,Math.round(v/o));for(let p=0;p<=g;p++){if(p===0&&d>0)continue;let w=f[0]+(m[0]-f[0])*p/g,_=f[1]+(m[1]-f[1])*p/g,y=p===0||p===g;this.box(t,e,w-(y?.09:c/2),s,_-(y?.09:c/2),w+(y?.09:c/2),s+r,_+(y?.09:c/2))}}}stairs(t,e,n,s,r,o,a,c,l,h){let u=Math.cos(o),d=Math.sin(o);for(let f=0;f<a;f++){let m=l*(f+.5),v=n+u*m,g=s+d*m,p=r+c*(f+1);this.ybox(t,e,v,(r+p)/2,g,l,p-r,h,o)}}slab(t,e,n,s,r,o,a={}){var p,w;let c=_=>new Dt(_[0],_[1]),l=_=>{let y=0;for(let M=0;M<_.length;M++){let R=_[M],L=_[(M+1)%_.length];y+=R[0]*L[1]-L[0]*R[1]}return y},h=l(n)>0?n:[...n].reverse(),u=s.map(_=>l(_)>0?[..._].reverse():_),d=[...h,...u.flat()],f=pr.triangulateShape(h.map(c),u.map(_=>_.map(c))),m=(p=a.top)!=null?p:e,v=(w=a.side)!=null?w:e;for(let[_,y,M]of f){let R=d[_],L=d[y],F=d[M],S=(F[0]-R[0])*(L[1]-R[1])-(L[0]-R[0])*(F[1]-R[1]),[b,D]=S>0?[L,F]:[F,L];a.top!==!1&&this.tri(t,m,[R[0],o,R[1]],[b[0],o,b[1]],[D[0],o,D[1]]),a.bottom!==!1&&this.tri(t,v,[R[0],r,R[1]],[D[0],r,D[1]],[b[0],r,b[1]])}let g=_=>{for(let y=0;y<_.length;y++){let M=_[y],R=_[(y+1)%_.length];this.quad(t,v,[R[0],r,R[1]],[M[0],r,M[1]],[M[0],o,M[1]],[R[0],o,R[1]])}};if(a.sides!==!1){g(h);for(let _ of u)g(_)}}plate(t,e,n,s=.3){let r=0;for(let c=0;c<4;c++){let l=n[c],h=n[(c+1)%4];r+=l[0]*h[2]-h[0]*l[2]}let o=r>0?[...n].reverse():n,a=o.map(c=>[c[0],c[1]-s,c[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let c=0;c<4;c++){let l=(c+1)%4;this.quad(t,e,a[c],a[l],o[l],o[c])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};var Bi={x0:-57,x1:57,z0:-40,z1:40},Lc={z0:-6,z1:2},qu=[{n:"\u57FA\u7840\u901A\u884C",x0:-55,x1:-19,z0:-38,z1:-6},{n:"\u9053\u8DEF",x0:-15,x1:19,z0:-38,z1:-6},{n:"\u5730\u5F62",x0:23,x1:55,z0:-38,z1:-6},{n:"\u6218\u6597\u7A7A\u95F4",x0:-55,x1:16,z0:2,z1:38},{n:"\u8DD1\u9177\u4E0E\u6500\u722C",x0:20,x1:55,z0:2,z1:38}],Yn={x0:-54,x1:-41,z0:-37,z1:-25,h:3.4,t:.3},Xa={x:-49.5,w:1.4,h:2.4},qa={x:-45,w:1.6,y0:1,y1:2.2},Rr={z0:-32,z1:-30},fe={x0:-41,x1:-38.4,z:-31,w:1.1,h:1.35,wall:.12},Ne={z:-27.6,w:.62,h:.55},Cr={x0:-30.1,x1:-26.9,z0:-37,z1:-16},Yu={x0:-29.365,x1:-27.865,z0:-30.6,z1:-28.2},Ir={x0:-34.5,x1:-30.1},Pr={x0:-26.9,x1:-22.5},Lr=6.4,wn={z0:-12.2,z1:-10.8,y:2.2,segs:[[-54,-51,2.2],[-50,-47.25,2],[-46.95,-44.2,2.4]],gap:[-51,-50],slit:[-47.25,-46.95]},ci={x0:-36,x1:-31,z0:-14,z1:-8,y:3},Zu={x0:-24,x1:-20,z0:-14,z1:-8,y:3},We={x:-42.4,z:-13.1,n:20,rise:.15,run:.32,w:1.8},Xe={x:-39.3,z:-8.9,n:15,rise:.2,run:.22,w:1.8},Tn={z:-12.4,r:.2},Ee={z:-9.6,w:1.3,h:.8},Dc={x0:-15,x1:19},Uc=[{n:"\u4E3B\u5E72\u9053",z0:-37,z1:-23,side:[3,3],lanes:4},{n:"\u666E\u901A\u9A6C\u8DEF",z0:-21.5,z1:-13.5,side:[2,1.6],lanes:2},{n:"\u793E\u533A\u5C0F\u8DEF",z0:-12,z1:-7.5,side:[0,0],lanes:0}],Ps={x0:24,x1:38,z0:-36,z1:-8,wy:-.25},Dr=[[-8,0],[-8.7,-.28],[-14,-.85],[-19,-1.55],[-21,-2.6],[-36,-2.6]],Ya=-14,Za=-19,un=[{n:"\u53EF\u6218\u6597",z0:-36.5,z1:-28.5,rise:.75,c:"fight"},{n:"\u53EF\u901A\u884C",z0:-25.5,z1:-17.5,rise:2,c:"ok"},{n:"\u4E0D\u53EF\u901A\u884C",z0:-14.5,z1:-7.5,rise:4.6,c:"no"}],dn={x0:42,x1:52,h:3},Oi=[{n:"\u6700\u5C0F",a:64,x0:-50,z0:4,s:8},{n:"\u5C0F\u578B",a:196,x0:-53,z0:19,s:14,hall:!0},{n:"\u4E2D\u578B",a:400,x0:-36.5,z0:9,s:20},{n:"\u5927\u578B",a:900,x0:-14.5,z0:4,s:30}],ki={x0:-53,x1:-39,z0:19,z1:33,t:.4,beam:6.4,top:7,lamp:[-46,26],lampY:4.2},Ju={x0:21,x1:31,z0:4,z1:12,h:3.4,mid:8.5,dN:24.5,dM:29,dS:24},Pe={x0:21,x1:30,z:15,h:1,t:.4},ye={x0:34,x1:52,z0:16,z1:26,h:7},Ln=[{z:17.9,d:.35,c:"no",n:"\u660E\u786E\u4E0D\u53EF\u7528"},{z:21,d:.7,c:"warn",n:"\u5BB9\u6613\u8BEF\u89E3"},{z:24.1,d:1.3,c:"ok",n:"\u660E\u786E\u53EF\u7528"}],$e=3.2,zc=2.4,Zn=.2,he={x:34.65,z:24.85};var Ur={x0:40,x1:52,z0:29.5,z1:37,h:7},hi={x0:31,x1:40,z0:29.5,z1:37,h:4.6},Ja={x0:47.3,x1:48.5,z0:26,z1:29.5},qe={x0:23,x1:31,z0:31.2,z1:33.8,y:4.6};var G={ground:"#DDD6C9",grid:"#D2CABD",grid5:"#C6BDAE",edge:"#C9BFAE",ave:"#E6E0D5",plinth:"#B9B0A1",wall:"#ECE5D9",wallIn:"#F2EDE5",brick:"#CDBBA2",stone:"#D9D1C3",stoneD:"#C5BCAC",floor:"#D8CFC0",wood:"#A58C70",woodD:"#7D6A56",frame:"#6F6052",door:"#8C7258",roof:"#7E8588",roofE:"#686F72",glass:"#5F6E74",steel:"#6A7376",steelD:"#4F575A",copper:"#A27A57",rail:"#5E676A",asphalt:"#9A9B95",walk:"#D6CEC1",curb:"#BBB2A3",lane:"#F4F1EA",lawn:"#B9B892",pave:"#D0C6B5",plank:"#C9B497",bed:"#D2C3A4",bed2:"#BFB294",bed3:"#9C978A",crate:"#B39D78",crateD:"#8E7A5C",cloth:"#9C6A52",ok:"#8DB585",warn:"#E6B65A",no:"#D27A62",fight:"#6FA8B3",guide:"#E2B13C",okE:"#5E9B57",noE:"#C2553C",warnE:"#D99A2B",fightE:"#3F8F9C"},Ut="st",$a="gr",Ls="pt",Ku=Math.PI*2;function Ka(i,t,e,n,s,r=5){let o=[],a=[[e-s,n-s,0],[i+s,n-s,Math.PI/2],[i+s,t+s,Math.PI],[e-s,t+s,Math.PI*1.5]];for(let[c,l,h]of a)for(let u=0;u<=r;u++){let d=h+u*Math.PI/2/r;o.push([c+Math.cos(d)*s,l+Math.sin(d)*s])}return o}var ui=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]];function Qu(){let i=new li,t=[],e={},n=(x,A,I,U,B,V,W,Y=Ut)=>i.box(Y,x,A,I,U,B,V,W),s=(x,A,I=0,U=Ls)=>i.prism(U,x,A,I+.006,I+.016,{bottom:!1}),r=(x,A,I,U,B,V=0)=>s(x,ui(A,I,U,B),V),o=(x,A,I,U,B=12,V=Ut)=>{let W=[I[0]-A[0],I[1]-A[1],I[2]-A[2]],Y=Math.hypot(...W),j=W.map(ct=>ct/Y),z=Math.abs(j[1])<.9?[j[2],0,-j[0]]:[1,0,0],st=Math.hypot(...z);z=z.map(ct=>ct/st);let dt=[j[1]*z[2]-j[2]*z[1],j[2]*z[0]-j[0]*z[2],j[0]*z[1]-j[1]*z[0]],gt=(ct,ht)=>{let vt=ht*Ku/B,It=Math.cos(vt)*U,Wt=Math.sin(vt)*U;return[ct[0]+z[0]*It+dt[0]*Wt,ct[1]+z[1]*It+dt[1]*Wt,ct[2]+z[2]*It+dt[2]*Wt]};for(let ct=0;ct<B;ct++)i.quad(V,x,gt(A,ct),gt(I,ct),gt(I,ct+1),gt(A,ct+1)),i.tri(V,x,A,gt(A,ct+1),gt(A,ct)),i.tri(V,x,I,gt(I,ct),gt(I,ct+1))},a=(x,A,I,U,B,V,W,Y=[])=>i.wall(Ut,x,[I,A],[U,A],B,V,W,Y.map(j=>{var z;return{a:j.c-j.w/2-I,w:j.w,y0:(z=j.y0)!=null?z:0,y1:j.y1}})),c=(x,A,I,U,B,V,W,Y=[])=>i.wall(Ut,x,[A,I],[A,U],B,V,W,Y.map(j=>{var z;return{a:j.c-j.w/2-I,w:j.w,y0:(z=j.y0)!=null?z:0,y1:j.y1}})),l=(x,A,I,U,B,V,W,Y={})=>{let j=(gt,ct,ht,vt,It,Wt,Xt)=>x==="x"?n(Xt,gt,ht,It,ct,vt,Wt):n(Xt,It,ht,gt,Wt,vt,ct),st=W+.04,dt=Y.c||G.frame;j(I-U/2-.09,I-U/2,B,V+.09,A-st/2,A+st/2,dt),j(I+U/2,I+U/2+.09,B,V+.09,A-st/2,A+st/2,dt),j(I-U/2-.09,I+U/2+.09,V,V+.09,A-st/2,A+st/2,dt),B>.05&&j(I-U/2-.12,I+U/2+.12,B-.08,B,A-st/2-.06,A+st/2+.06,G.stoneD),Y.glass&&j(I-U/2,I+U/2,B,V,A-.02,A+.02,G.glass)},h=(x,A,I,U,B,V={})=>{n(V.c||G.wall,x,0,A,I,B,U),n(G.plinth,x-.05,0,A-.05,I+.05,.45,U+.05),V.band&&n(G.stoneD,x-.06,V.band-.1,A-.06,I+.06,V.band+.1,U+.06),V.noCap||n(G.stoneD,x-.12,B-.14,A-.12,I+.12,B,U+.12);for(let W of V.wins||[]){let Y=W.door?G.door:G.glass,j=.05;W.f==="n"&&(n(Y,W.c-W.w/2,W.y0,A-j,W.c+W.w/2,W.y1,A),l("x",A-.03,W.c,W.w,W.y0,W.y1,.02)),W.f==="s"&&(n(Y,W.c-W.w/2,W.y0,U,W.c+W.w/2,W.y1,U+j),l("x",U+.03,W.c,W.w,W.y0,W.y1,.02)),W.f==="w"&&(n(Y,x-j,W.y0,W.c-W.w/2,x,W.y1,W.c+W.w/2),l("z",x-.03,W.c,W.w,W.y0,W.y1,.02)),W.f==="e"&&(n(Y,I,W.y0,W.c-W.w/2,I+j,W.y1,W.c+W.w/2),l("z",I+.03,W.c,W.w,W.y0,W.y1,.02))}},u=(x,A,I,U,B,V,W=1.1,Y=[])=>{let j=[];for(let z=A;z<=I+1e-6;z+=U)Y.some(([st,dt])=>z>st&&z<dt)||j.push({f:x,c:z,w:W,y0:B,y1:V});return j},d=(x,A,I,U,B,V,W,Y={})=>{var st;let j=(st=Y.over)!=null?st:.4,z=.16;if(W==="z"){let dt=(x+I)/2,gt=(I-x)/2,ct=V/gt,ht=B-j*ct,vt=B+V;i.plate(Ut,G.roof,[[x-j,ht,A-j],[dt,vt,A-j],[dt,vt,U+j],[x-j,ht,U+j]],z),i.plate(Ut,G.roof,[[dt,vt,A-j],[I+j,ht,A-j],[I+j,ht,U+j],[dt,vt,U+j]],z);for(let It of[A,U]){let Wt=[x,B,It],Xt=[I,B,It],Oe=[dt,vt-.02,It];i.tri(Ut,Y.wc||G.wall,Wt,Xt,Oe),i.tri(Ut,Y.wc||G.wall,Wt,Oe,Xt)}i.beam(Ut,G.roofE,[dt,vt+.02,A-j],[dt,vt+.02,U+j],.22,.16),Y.edge&&n(Y.edge,x-j-.05,ht-z-.05,A-j,x-j+.05,ht+.05,U+j)}else{let dt=(A+U)/2,gt=(U-A)/2,ct=V/gt,ht=B-j*ct,vt=B+V;i.plate(Ut,G.roof,[[x-j,ht,A-j],[I+j,ht,A-j],[I+j,vt,dt],[x-j,vt,dt]],z),i.plate(Ut,G.roof,[[x-j,vt,dt],[I+j,vt,dt],[I+j,ht,U+j],[x-j,ht,U+j]],z);for(let It of[x,I]){let Wt=[It,B,A],Xt=[It,B,U],Oe=[It,vt-.02,dt];i.tri(Ut,Y.wc||G.wall,Wt,Xt,Oe),i.tri(Ut,Y.wc||G.wall,Wt,Oe,Xt)}i.beam(Ut,G.roofE,[x-j,vt+.02,dt],[I+j,vt+.02,dt],.22,.16)}},f=(x,A,I,U,B,V,W=G.crate)=>{n(W,x,B,A,I,V,U);let Y=.05,j=G.crateD;for(let z of[B,V-.08])n(j,x-Y/2,z,A-Y/2,I+Y/2,z+.08,A+Y/2),n(j,x-Y/2,z,U-Y/2,I+Y/2,z+.08,U+Y/2)},m=(x,A,I,U,B,V)=>{let W=Math.max(1,Math.round(B/1.1)),Y=B/W;for(let j=0;j<W;j++){let z=j%2?.06:0;f(x+z,A+z,I-z,U-z,j*Y,(j+1)*Y-.01,V)}},v=(x,A,I=.34,U=.95,B=G.woodD)=>{i.cyl(Ut,B,x,A,0,U,I,10,0),i.cyl(Ut,G.steelD,x,A,U*.2,U*.27,I+.02,10,0),i.cyl(Ut,G.steelD,x,A,U*.72,U*.79,I+.02,10,0)},g=(x,A,I=1)=>t.push([x,A,I]),p=(x,A,I=4)=>{i.beam(Ut,G.rail,[x[0],x[1]+1,x[2]],[A[0],A[1]+1,A[2]],.07,.07);for(let U=0;U<=I;U++){let B=U/I,V=x[0]+(A[0]-x[0])*B,W=x[1]+(A[1]-x[1])*B,Y=x[2]+(A[2]-x[2])*B;n(G.rail,V-.04,W,Y-.04,V+.04,W+1,Y+.04)}},w=Bi,_=Ps;i.slab($a,G.ground,ui(w.x0,w.z0,w.x1,w.z1),[ui(_.x0,_.z0,_.x1,_.z1)],-2.6,0,{side:G.plinth}),r(G.ave,w.x0+.4,Lc.z0,w.x1-.4,Lc.z1,-.004);let y=(x,A)=>x>_.x0-.01&&x<_.x1+.01&&A>_.z0-.01&&A<_.z1+.01;for(let x=Math.ceil(w.x0+.5);x<=w.x1-.5;x++){let A=x%5===0?.07:.035,I=x%5===0?G.grid5:G.grid,U=x>_.x0&&x<_.x1?[[w.z0+.5,_.z0],[_.z1,w.z1-.5]]:[[w.z0+.5,w.z1-.5]];for(let[B,V]of U)i.quad(Ls,I,[x-A,.004,V],[x+A,.004,V],[x+A,.004,B],[x-A,.004,B])}for(let x=Math.ceil(w.z0+.5);x<=w.z1-.5;x++){let A=x%5===0?.07:.035,I=x%5===0?G.grid5:G.grid,U=x>_.z0&&x<_.z1?[[w.x0+.5,_.x0],[_.x1,w.x1-.5]]:[[w.x0+.5,w.x1-.5]];for(let[B,V]of U)i.quad(Ls,I,[B,.004,x+A],[V,.004,x+A],[V,.004,x-A],[B,.004,x-A])}for(let x of qu){let A=Ka(x.x0,x.z0,x.x1,x.z1,1.6),I=Ka(x.x0+.3,x.z0+.3,x.x1-.3,x.z1-.3,1.3);i.slab(Ls,G.edge,A,[I],.006,.02,{bottom:!1})}for(let[x,A,I]of[[-56,-39,.9],[-56,39,.9],[56,39,.85],[56,-39,.9],[-17,-39,.8],[21,-39,.8],[18,39,.8]])g(x,A,I);let M=Yn,R=M.t,L=Xa,F=qa,S=fe,b=Ne;n(G.floor,M.x0,0,M.z0,M.x1,.03,M.z1),a(G.wall,M.z0,M.x0-R/2,M.x1+R/2,0,M.h,R),a(G.wall,M.z1,M.x0-R/2,M.x1+R/2,0,M.h,R,[{c:L.x,w:L.w,y1:L.h},{c:F.x,w:F.w,y0:F.y0,y1:F.y1}]),c(G.wall,M.x0,M.z0+R/2,M.z1-R/2,0,M.h,R),c(G.wall,M.x1,M.z0+R/2,M.z1-R/2,0,M.h,R,[{c:S.z,w:S.w,y0:S.wall,y1:S.wall+S.h},{c:b.z,w:b.w,y1:b.h}]);for(let[x,A,I,U]of[[M.x0-.25,M.z0-.25,M.x1+.25,M.z0+.25],[M.x0-.25,M.z1-.25,M.x1+.25,M.z1+.25],[M.x0-.25,M.z0,M.x0+.25,M.z1],[M.x1-.25,M.z0,M.x1+.25,M.z1]])n(G.stoneD,x,M.h,A,I,M.h+.14,U);n(G.plinth,M.x0-.2,0,M.z1+.15,M.x1+.2,.45,M.z1+.2),l("x",M.z1,L.x,L.w,0,L.h,R),l("x",M.z1,F.x,F.w,F.y0,F.y1,R),n(G.door,L.x-L.w/2+.02,.03,M.z1-.2-1.3,L.x-L.w/2+.08,L.h-.05,M.z1-.2);let D=.2,k=Rr;a(G.wallIn,k.z1,M.x0+R/2,M.x1-R/2,0,M.h-.02,D,[{c:L.x,w:1.2,y1:2.3}]),a(G.wallIn,k.z0,M.x0+R/2,M.x1-R/2,0,M.h-.02,D,[{c:-50.8,w:1,y1:2.2},{c:-44.6,w:1,y1:2.2}]),c(G.wallIn,-48,M.z0+R/2,k.z0-D/2,0,M.h-.02,D),l("x",k.z1,L.x,1.2,0,2.3,D,{c:G.woodD}),n(G.wood,-53.4,0,-29.6,-51.6,.78,-28.6),n(G.woodD,-53.6,0,-27.4,-53.1,1,-26.2),n(G.wood,-53.7,0,-36.6,-53.25,2,-33.2),n(G.wood,-41.7,0,-36.6,-41.25,1.8,-34);let H=S.z-S.w/2-S.wall,$=S.z+S.w/2+S.wall,X=S.wall*2+S.h,Z="#A7AEAE";n(Z,M.x1+R/2,0,H,S.x1,S.wall,$),n(Z,M.x1+R/2,0,H,S.x1,X,H+S.wall),n(Z,M.x1+R/2,0,$-S.wall,S.x1,X,$),n(Z,M.x1+R/2,X-S.wall,H,S.x1,X,$);for(let x of[S.x1-.06,M.x1+.9])n(G.steel,x-.06,0,H-.05,x+.06,X+.05,H),n(G.steel,x-.06,0,$,x+.06,X+.05,$+.05),n(G.steel,x-.06,X,H-.05,x+.06,X+.05,$+.05);i.ybox(Ut,G.steel,S.x1+.7,.62,S.z-1.35,1.25,1.24,.05,-.35),i.ybox(Ut,G.woodD,M.x1+.32,.45,b.z+.75,.08,.9,.5,.25);for(let[x,A]of[[.5,-.5],[.7,-.1],[.45,.35]])n(G.brick,M.x1+x,0,b.z+A,M.x1+x+.22,.12,b.z+A+.14);let q=Cr,Q=(x,A,I,U)=>[...u(x,A+1.6,I-1.6,3,4,5.4,1.1),...u(x,A+3.1,I-3.1,6,1.5,2.6,1,U)];h(Ir.x0,q.z0,Ir.x1,q.z1,Lr,{band:3.3,wins:[...Q("e",q.z0,q.z1,[[-27,-23]]),{f:"e",c:-25,w:1,y0:0,y1:2.15,door:1},...Q("w",q.z0,q.z1,[]),...u("s",-33.6,-31,2.6,1.6,2.7),...u("s",-33.6,-31,2.6,4,5.4)]}),h(Pr.x0,q.z0,Pr.x1,q.z1,Lr,{band:3.3,wins:[...Q("w",q.z0,q.z1,[[-23,-19]]),{f:"w",c:-21,w:1,y0:0,y1:2.15,door:1},...Q("e",q.z0,q.z1,[]),...u("s",-25.9,-23.5,2.4,1.6,2.7),...u("s",-25.9,-23.5,2.4,4,5.4)]}),d(Ir.x0,q.z0,Ir.x1,q.z1,Lr,1.6,"z",{over:.35}),d(Pr.x0,q.z0,Pr.x1,q.z1,Lr,1.6,"z",{over:.35}),n(G.pave,q.x0,0,q.z0,q.x1,.03,q.z1);let mt=Yu;for(let x of[mt.x0,mt.x1-.05])r(G.noE,x,mt.z0,x+.05,mt.z1,.035);for(let x of[mt.z0,mt.z1-.05])r(G.noE,mt.x0,x,mt.x1,x+.05,.035);m(q.x0,-34.6,q.x0+.8,-33.4,1.7),v(q.x0+.38,-29.6),v(q.x0+.38,-28.85),n(G.wood,q.x0+.02,.42,-22.1,q.x0+.45,.5,-20.6);for(let x of[-22,-20.7])n(G.woodD,q.x0+.05,0,x,q.x0+.4,.42,x+.1);let _t=q.x1-.45;n(G.wood,q.x1-.95,.45,-30.4,q.x1-.02,.62,-28.4);for(let x of[-30.1,-28.7])o(G.woodD,[q.x1-.95,.3,x],[q.x1-.02,.3,x],.3,10);n(G.woodD,_t-.05,.45,-31.3,_t+.05,.55,-30.4);for(let x of[-25.6,-24.8])i.frustum(Ut,G.copper,q.x1-.27,x,0,.45,.2,.26,8),i.cyl(Ut,"#8E9A6E",q.x1-.27,x,.45,.75,.22,7);n(G.wood,q.x1-.7,.82,-19.6,q.x1-.02,.9,-17.9);for(let[x,A]of[[q.x1-.65,-19.5],[q.x1-.65,-18.05]])n(G.woodD,x,0,A,x+.06,.82,A+.06);n("#B4553A",q.x1-.75,2.3,-19.7,q.x1,2.36,-17.8),i.beam(Ut,G.steelD,[q.x0,2.9,-27.2],[q.x1,2.9,-27.2],.03,.03);for(let[x,A]of[[-29.6,"#9E8566"],[-28.7,"#B49C7B"],[-27.6,"#8A7258"]])n(A,x-.28,2.25,-27.23,x+.28,2.88,-27.17);let bt=wn;for(let[x,A,I]of bt.segs)m(x,bt.z0,A,bt.z1,I);r(G.ok,bt.gap[0]+.02,bt.z0-.6,bt.gap[1]-.02,bt.z1+.6),r(G.no,bt.slit[0]-.02,bt.z0-.6,bt.slit[1]+.02,bt.z1+.6);let yt=ci,St=Zu,Vt=We,Nt=Xe;for(let x of[yt,St])n(G.brick,x.x0,0,x.z0,x.x1,x.y-.2,x.z1),n(G.stone,x.x0-.1,x.y-.2,x.z0-.1,x.x1+.1,x.y,x.z1+.1),n(G.plinth,x.x0-.05,0,x.z0-.05,x.x1+.05,.45,x.z1+.05);i.stairs(Ut,G.stone,Vt.x,Vt.z,0,0,Vt.n,Vt.rise,Vt.run,Vt.w),i.stairs(Ut,G.stoneD,Nt.x,Nt.z,0,0,Nt.n,Nt.rise,Nt.run,Nt.w);for(let x of[-1,1])p([Vt.x+.1,.15,Vt.z+x*(Vt.w/2-.06)],[yt.x0,yt.y,Vt.z+x*(Vt.w/2-.06)],6),p([Nt.x+.1,.2,Nt.z+x*(Nt.w/2-.06)],[yt.x0,yt.y,Nt.z+x*(Nt.w/2-.06)],4);i.rail(Ut,G.rail,[[yt.x0,Vt.z+Vt.w/2],[yt.x0,Nt.z-Nt.w/2]],yt.y),i.rail(Ut,G.rail,[[yt.x0+.1,yt.z0+.05],[yt.x1,yt.z0+.05]],yt.y),i.rail(Ut,G.rail,[[yt.x0+.1,yt.z1-.05],[yt.x1,yt.z1-.05]],yt.y),i.rail(Ut,G.rail,[[yt.x1-.05,yt.z0],[yt.x1-.05,Tn.z-.5]],yt.y),i.rail(Ut,G.rail,[[yt.x1-.05,Tn.z+.5],[yt.x1-.05,Ee.z-Ee.w/2]],yt.y),i.rail(Ut,G.rail,[[St.x0+.05,St.z0],[St.x0+.05,Tn.z-.5]],St.y),i.rail(Ut,G.rail,[[St.x0+.05,Tn.z+.5],[St.x0+.05,Ee.z-Ee.w/2]],St.y),i.rail(Ut,G.rail,[[St.x0,St.z0+.05],[St.x1-.05,St.z0+.05],[St.x1-.05,St.z1-.05],[St.x1-1.6,St.z1-.05]],St.y);for(let x of[St.x1-1.45,St.x1-.75])n(G.steelD,x-.03,0,St.z1+.06,x+.03,St.y+1,St.z1+.12);for(let x=.3;x<St.y;x+=.3)n(G.steelD,St.x1-1.45,x,St.z1+.07,St.x1-.75,x+.04,St.z1+.11);let ut=Tn,ft=Ee;o(G.copper,[yt.x1,yt.y-ut.r,ut.z],[St.x0,St.y-ut.r,ut.z],ut.r,14);for(let x of[yt.x1+.15,St.x0-.15])o(G.steelD,[x-.08,yt.y-ut.r,ut.z],[x+.08,yt.y-ut.r,ut.z],ut.r+.05,14);n("#A7AEAE",yt.x1,yt.y-ft.h,ft.z-ft.w/2,St.x0,yt.y-.02,ft.z+ft.w/2),n("#BFC4C1",yt.x1,yt.y-.02,ft.z-ft.w/2+.03,St.x0,yt.y,ft.z+ft.w/2-.03);for(let x=yt.x1+1.75;x<St.x0-.5;x+=1.75)n(G.steelD,x-.06,yt.y-ft.h-.04,ft.z-ft.w/2-.04,x+.06,yt.y-.02,ft.z+ft.w/2+.04);let Mt=Dc.x0,Tt=Dc.x1,Pt=(x,A,I,U=2,B=2)=>{for(let V=Mt+.6;V<Tt-.6;V+=U+B)r(G.lane,V,x-A/2,Math.min(V+U,Tt-.6),x+A/2,I)};Uc.forEach((x,A)=>{let[I,U]=x.side,B=x.z0+I,V=x.z1-U;if(x.lanes){n(G.asphalt,Mt,0,B,Tt,.04,V),n(G.walk,Mt,0,x.z0,Tt,.16,B),n(G.walk,Mt,0,V,Tt,.16,x.z1),n(G.curb,Mt,0,B-.22,Tt,.18,B),n(G.curb,Mt,0,V,Tt,.18,V+.22);let W=(B+V)/2;x.lanes===4?(r(G.lane,Mt+.3,W-.2,Tt-.3,W-.1,.04),r(G.lane,Mt+.3,W+.1,Tt-.3,W+.2,.04),Pt(W-(V-B)/4,.12,.04),Pt(W+(V-B)/4,.12,.04)):Pt(W,.12,.04,2.5,2);let Y=A===0?1.6:1.1,j=A===0?.9:.55;if(r("#D3E0C9",Mt+.2,B-.22-j-Y,Tt-.2,B-.22-j,.16),r("#D3E0C9",Mt+.2,V+.22+j,Tt-.2,V+.22+j+Y,.16),A===0)for(let z=Mt+3;z<Tt-2;z+=7)g(z,B-.62,.85),g(z+3.5,V+.62,.85),n(G.steelD,z+1.7,.16,B-.62-.06,z+1.82,3.6,B-.62+.06),n(G.steelD,z+1.7,3.5,B-.62-.06,z+2.4,3.6,B-.62+.06);else for(let z=Mt+4;z<Tt-2;z+=9){n(G.steelD,z,.16,B-.45,z+.1,3.2,B-.35);for(let st of[z+4])i.cyl(Ut,G.stoneD,st,V+.45,.16,.75,.13,8,0)}}else{n("#CFC4B2",Mt,0,x.z0,Tt,.05,x.z1);for(let Y=Mt+.8;Y<Tt;Y+=1.6)r("#C3B8A6",Y,x.z0+.1,Y+.05,x.z1-.1,.05);n("#8D877B",Mt,0,x.z0,Tt,.06,x.z0+.18),n("#8D877B",Mt,0,x.z1-.18,Tt,.06,x.z1);let W=(x.z0+x.z1)/2;for(let Y=Mt+.5;Y<Tt-.5;Y+=1.4)r(G.fight,Y,W-.62,Y+.8,W-.55,.05),r(G.fight,Y,W+.55,Y+.8,W+.62,.05)}});for(let[x,A]of[[-23,-21.5],[-13.5,-12]])n(G.lawn,Mt,0,x,Tt,.12,A),n(G.curb,Mt,0,x,Tt,.16,x+.12),n(G.curb,Mt,0,A-.12,Tt,.16,A);for(let x=Mt+2.5;x<Tt;x+=6.5)g(x,-22.25,.75);let Kt=(x,A,I,U,B,V)=>{n(B,x-I/2,.35,A-U/2,x+I/2,1.1,A+U/2),V?(n("#5A6467",x+I/2-1.9,1.1,A-U/2+.05,x+I/2-.2,2.2,A+U/2-.05),n(G.woodD,x-I/2+.1,1.1,A-U/2+.05,x+I/2-2,1.6,A+U/2-.05)):n("#5A6467",x-I/2+.9,1.1,A-U/2+.08,x+I/2-1.1,1.75,A+U/2-.08);for(let W of[-I/2+.75,I/2-.75])for(let Y of[-1,1])o("#2F3333",[x+W,.36,A+Y*(U/2-.1)],[x+W,.36,A+Y*(U/2+.08)],.36,12)};Kt(-4,-31.9,5.6,2,"#7C6B57",!0),Kt(9,-28.1,4.2,1.8,"#6F7B7E");let be=Uc[1];n(G.wood,3,.55,-18.6,5.6,.7,-17.3),o(G.woodD,[4.3,.5,-18.75],[4.3,.5,-17.15],.5,12),n(G.woodD,5.6,.6,-18.1,7.2,.66,-17.8);for(let[x,A,I,U]of[[_.x0-.4,_.z0-.4,_.x0,_.z1],[_.x1,_.z0-.4,_.x1+.4,_.z1],[_.x0,_.z0-.4,_.x1,_.z0]])n(G.stoneD,x,-2.6,A,I,.08,U);let O=[G.bed,G.bed,G.bed2,G.bed3,G.bed3];for(let x=0;x<Dr.length-1;x++){let[A,I]=Dr[x],[U,B]=Dr[x+1];i.plate($a,O[x],[[_.x0,I,A],[_.x1,I,A],[_.x1,B,U],[_.x0,B,U]],.25);for(let V of[_.x0,_.x1])i.quad($a,G.stoneD,[V,I,A],[V,B,U],[V,-2.6,U],[V,-2.6,A]),i.quad($a,G.stoneD,[V,I,A],[V,-2.6,A],[V,-2.6,U],[V,B,U])}n(G.bed,_.x0,-2.6,_.z1-.01,_.x1,0,_.z1);let qt=_.wy,Ot=[[_.z1-.7,Ya,"#A8D3CC"],[Ya,Za,"#8EBAC2"],[Za,_.z0,"#6A93A3"]];for(let[x,A,I]of Ot)i.quad("wt",I,[_.x0,qt,x],[_.x1,qt,x],[_.x1,qt,A],[_.x0,qt,A]);i.quad("wt","#A8D3CC",[_.x0,qt,_.z1-.7],[_.x1,qt,_.z1-.7],[_.x1,qt,_.z1-.7],[_.x0,qt,_.z1-.7]);for(let[x,A]of[[Ya,G.warnE],[Za,G.noE]])n(A,_.x0+.05,qt-.01,x-.07,_.x1-.05,qt+.02,x+.07);for(let[x,A]of[[-11.3,G.okE],[-16.5,G.warnE],[-27,G.noE]]){let I=di(x);n(G.steelD,_.x1-.75,I,x-.06,_.x1-.63,.9,x+.06),n(A,_.x1-.85,.55,x-.16,_.x1-.53,.9,x+.16)}let At=dn;un.forEach((x,A)=>{h(At.x0,x.z0,At.x1,x.z1,At.h,{noCap:!0,wins:[{f:"w",c:(x.z0+x.z1)/2-1.8,w:1.1,y0:.9,y1:2.2},{f:"w",c:(x.z0+x.z1)/2+1.8,w:1.1,y0:.9,y1:2.2},{f:"s",c:(At.x0+At.x1)/2,w:1.1,y0:0,y1:2.2,door:1},{f:"e",c:(x.z0+x.z1)/2,w:1.1,y0:.9,y1:2.2}]}),d(At.x0,x.z0,At.x1,x.z1,At.h,x.rise,"z",{over:.45,edge:G[x.c+"E"]})});for(let x of[un[0].z1+.1]){for(let A of[At.x1-2.2,At.x1-1.6])n(G.steelD,A-.03,0,x,A+.03,At.h+.4,x+.06);for(let A=.3;A<At.h+.3;A+=.3)n(G.steelD,At.x1-2.2,A,x+.01,At.x1-1.6,A+.04,x+.05)}for(let x of Oi){let A=x.x0,I=x.z0,U=A+x.s,B=I+x.s;if(x.hall)continue;let V=1.2,W=x.s>20?4:x.s>10?3:2,Y=Ka(A-V,I-V,U+V,B+V,W),j=Ka(A-V-.45,I-V-.45,U+V+.45,B+V+.45,W+.45);i.slab(Ut,"#D7CDBC",Y,[],0,.1,{side:G.curb}),i.slab(Ut,G.curb,j,[Y],0,.22);for(let dt=1;dt<x.s;dt+=2)r("#CFC4B1",A+dt,I,A+dt+.03,B,.1),r("#CFC4B1",A,I+dt,U,I+dt+.03,.1);let z=ui(A,I,U,B),st=ui(A+.14,I+.14,U-.14,B-.14);i.slab(Ls,G.fightE,z,[st],.1+.006,.1+.018,{bottom:!1})}{let x=Oi[3],A=x.x0-1.65,I=x.z0-1.65,U=x.x0+x.s+1.65,B=x.z0+x.s+1.65,V=.9,W=.4,Y=x.x0+x.s/2,j=x.z0+x.s/2,z=(st,dt,gt,ct)=>{ct==="x"?n(G.stone,st,0,gt-W/2,dt,V,gt+W/2):n(G.stone,gt-W/2,0,st,gt+W/2,V,dt)};z(A+4.5,Y-2.5,I,"x"),z(Y+2.5,U-4.5,I,"x"),z(A+4.5,U-4.5,B,"x"),z(I+4.5,j-2.5,A,"z"),z(j+2.5,B-4.5,A,"z"),z(I+4.5,j-2.5,U,"z"),z(j+2.5,B-4.5,U,"z"),m(x.x0+2.5,x.z0+2.5,x.x0+4,x.z0+3.6,1.1),m(x.x0+x.s-4.2,x.z0+x.s-3.4,x.x0+x.s-2.6,x.z0+x.s-2.3,1.1),n(G.stoneD,x.x0+x.s-7,0,x.z0+2.4,x.x0+x.s-4,1.05,x.z0+2.9),n(G.stoneD,x.x0+3,0,x.z0+x.s-2.9,x.x0+6,1.05,x.z0+x.s-2.4),v(x.x0+2.6,x.z0+x.s-4.6),v(x.x0+x.s-2.6,x.z0+5);for(let[st,dt]of[[A-1.2,B+1.2],[U+.6,I-.2]])g(st,dt,1.05)}{let x=Oi[2];for(let[A,I]of[[x.x0-1.1,x.z0-1.1],[x.x0+x.s+1.1,x.z0-1.1],[x.x0-1.1,x.z0+x.s+1.1],[x.x0+x.s+1.1,x.z0+x.s+1.1]])i.cyl(Ut,G.stoneD,A,I,0,.55,1,10,0),g(A,I,.7);n(G.stoneD,x.x0+8.5,0,x.z0+x.s-3,x.x0+11.5,1.05,x.z0+x.s-2.5),m(x.x0+2.4,x.z0+8.5,x.x0+3.5,x.z0+9.8,1.1)}let lt=ki,zt=lt.t;n(G.plank,lt.x0,0,lt.z0,lt.x1,.06,lt.z1);for(let x=lt.x0+.5;x<lt.x1;x+=.5)r("#BCA685",x,lt.z0,x+.025,lt.z1,.06);{let x=ui(lt.x0,lt.z0,lt.x1,lt.z1),A=ui(lt.x0+.14,lt.z0+.14,lt.x1-.14,lt.z1-.14);i.slab(Ls,G.fightE,x,[A],.066,.078,{bottom:!1})}let Rt=[];for(let x=lt.x0+2;x<lt.x1-1;x+=3)Rt.push({c:x,w:1.4,y0:4.6,y1:6});a(G.wall,lt.z0-zt/2,lt.x0-zt,lt.x1+zt,0,lt.top,zt,[{c:-46,w:2.4,y1:3.2},...Rt.filter(x=>Math.abs(x.c+46)>1.6)]),c(G.wall,lt.x0-zt/2,lt.z0,lt.z1+zt,0,lt.top,zt,[{c:22.5,w:1.4,y0:4.6,y1:6},{c:26,w:1.4,y0:4.6,y1:6},{c:29.5,w:1.4,y0:4.6,y1:6}]),c(G.wall,lt.x1+zt/2,lt.z0,lt.z1+zt,0,lt.top,zt,[{c:29,w:1.8,y1:2.6},{c:22.5,w:1.4,y0:4.6,y1:6}]),l("x",lt.z0-zt/2,-46,2.4,0,3.2,zt),l("z",lt.x1+zt/2,29,1.8,0,2.6,zt);for(let x=lt.x0-zt/2;x<=lt.x1+zt/2+.01;x+=(lt.x1-lt.x0+zt)/5)n(G.stone,x-.3,0,lt.z1+.02,x+.3,lt.beam,lt.z1+.62),n(G.plinth,x-.36,0,lt.z1-.04,x+.36,.5,lt.z1+.68);n(G.woodD,lt.x0-zt,lt.beam,lt.z1+.02,lt.x1+zt,lt.top,lt.z1+.62),n(G.stoneD,lt.x0-zt-.1,lt.top-.02,lt.z0-zt-.1,lt.x1+zt+.1,lt.top+.12,lt.z0);for(let x of[22.5,26,29.5])n(G.woodD,lt.x0,lt.beam,x-.2,lt.x1,lt.beam+.45,x+.2);{let[x,A]=lt.lamp;i.beam(Ut,G.steelD,[x,lt.beam,A],[x,lt.lampY+.45,A],.05,.05),i.frustum(Ut,"#B08D57",x,A,lt.lampY,lt.lampY+.35,1.15,.9,10,0),i.cyl(Ut,"#8C6E42",x,A,lt.lampY+.35,lt.lampY+.45,.5,10,0);for(let I=0;I<8;I++){let U=I*Ku/8;i.cyl(Ut,"#F1E6CC",x+Math.cos(U)*1,A+Math.sin(U)*1,lt.lampY+.35,lt.lampY+.55,.05,6,0)}}n(G.wood,lt.x0+.3,0,lt.z0+.5,lt.x0+1,1,lt.z0+3.5);let pt=Ju,Yt=.3;n(G.floor,pt.x0,0,pt.z0,pt.x1,.03,pt.z1),a(G.wall,pt.z0,pt.x0-Yt/2,pt.x1+Yt/2,0,pt.h,Yt,[{c:pt.dN,w:1.4,y1:2.4}]),a(G.wall,pt.z1,pt.x0-Yt/2,pt.x1+Yt/2,0,pt.h,Yt,[{c:pt.dS,w:1.4,y1:2.4}]),c(G.wall,pt.x0,pt.z0+Yt/2,pt.z1-Yt/2,0,pt.h,Yt,[{c:10.4,w:1.2,y0:1,y1:2.1},{c:6.2,w:1.2,y0:1,y1:2.1}]),c(G.wall,pt.x1,pt.z0+Yt/2,pt.z1-Yt/2,0,pt.h,Yt,[{c:6.2,w:1.2,y0:1,y1:2.1},{c:10.4,w:1.2,y0:1,y1:2.1}]),a(G.wallIn,pt.mid,pt.x0+Yt/2,pt.x1-Yt/2,0,pt.h-.02,.2,[{c:pt.dM,w:1.2,y1:2.3}]);for(let[x,A,I,U]of[[pt.x0-.25,pt.z0-.25,pt.x1+.25,pt.z0+.25],[pt.x0-.25,pt.z1-.25,pt.x1+.25,pt.z1+.25],[pt.x0-.25,pt.z0,pt.x0+.25,pt.z1],[pt.x1-.25,pt.z0,pt.x1+.25,pt.z1]])n(G.stoneD,x,pt.h,A,I,pt.h+.14,U);n(G.plinth,pt.x0-.2,0,pt.z0-.2,pt.x1+.2,.45,pt.z0-.15),l("x",pt.z0,pt.dN,1.4,0,2.4,Yt),l("x",pt.z1,pt.dS,1.4,0,2.4,Yt),l("x",pt.mid,pt.dM,1.2,0,2.3,.2,{c:G.woodD});for(let x of[6.2,10.4])l("z",pt.x0,x,1.2,1,2.1,Yt,{glass:x===6.2}),l("z",pt.x1,x,1.2,1,2.1,Yt,{glass:!0});n(G.wood,pt.x0+.2,0,5,pt.x0+.8,1,7.6),m(pt.x1-1.5,pt.z1-1.3,pt.x1-.3,pt.z1-.25,1.1),n(G.wood,pt.x1-3.6,0,pt.mid+.3,pt.x1-2.4,.8,pt.mid+1.1);let kt=Pe;n("#E6DFD3",kt.x0,0,kt.z-kt.t/2,kt.x1,kt.h-.05,kt.z+kt.t/2),n(G.stone,kt.x0-.03,kt.h-.05,kt.z-kt.t/2-.03,kt.x1+.03,kt.h,kt.z+kt.t/2+.03),n(G.plinth,kt.x0,0,kt.z-kt.t/2-.02,kt.x1,.12,kt.z+kt.t/2+.02),r(G.ok,22.6,12.6,25.4,kt.z-kt.t/2-.1),r(G.ok,22.6,kt.z+kt.t/2+.1,25.4,18.2);let C=ye;h(C.x0,C.z0,C.x1,C.z1,C.h,{band:3.6,wins:[{f:"w",c:Ln[0].z,w:1.2,y0:.9,y1:2.4},{f:"w",c:Ln[1].z,w:1.2,y0:0,y1:2.5,door:1},{f:"w",c:Ln[2].z,w:1.2,y0:.9,y1:2.4},...u("w",17.9,24.1,3.1,4.4,5.9,1.1),...u("n",37,51,3.5,1,2.4),...u("n",37,51,3.5,4.4,5.9),...u("s",36.5,42,2.75,1,2.4),...u("s",36.5,42,2.75,4.4,5.9),...u("s",49.5,51,3,4.4,5.9),...u("e",18,24,3,1,2.4),...u("e",18,24,3,4.4,5.9)]}),n("#CFC8BB",C.x0+.02,C.h,C.z0+.02,C.x1-.02,C.h+.02,C.z1-.02);let T=7.75;n(G.stone,C.x0,C.h,C.z0,C.x1,T,C.z0+.25),n(G.stone,C.x1-.25,C.h,C.z0,C.x1,T,C.z1),n(G.stone,C.x0+6,C.h,C.z1-.25,Ja.x0,T,C.z1),n(G.stone,Ja.x1,C.h,C.z1-.25,C.x1,T,C.z1),n(G.stone,C.x0,C.h,20.6,C.x0+.25,T,23.5),n(G.stone,C.x0,C.h,C.z1-.25,C.x0+2.6,C.h+.18,C.z1),i.cyl(Ut,G.copper,49.6,18.8,C.h,C.h+2.2,1,12,0),i.cyl(Ut,G.steelD,49.6,18.8,C.h+2.2,C.h+2.35,1.05,12,0),n(G.steel,41.5,C.h,17,43,C.h+.9,18.2);for(let x of Ln){let A=x.z-zc/2,I=x.z+zc/2,U=C.x0-x.d;n(G.stoneD,U,$e,A,C.x0,$e+Zn,I),n(G[x.c+"E"],U-.03,$e,A,U,$e+Zn,I);for(let B of[A+.3,I-.3])i.beam(Ut,G.woodD,[C.x0,$e-.55,B],[U+.08,$e,B],.1,.1)}let tt=24.75;m(32.5,tt-.55,33.4,tt+.55,1.6),n(G.guide,32.47,1.55,tt-.58,33.43,1.6,tt+.58),n(G.guide,C.x0-1.33,$e+Zn-.01,23.1,C.x0-1,$e+Zn+.005,25.1),i.cyl(Ut,G.steelD,C.x0-.14,25.2,$e+Zn,C.h+.1,.08,8,0);for(let x=4;x<C.h;x+=.7)n(G.guide,C.x0-.26,x,25.08,C.x0,x+.08,25.32);n(G.guide,C.x0-.02,C.h-.02,24.5,C.x0+.03,C.h+.05,25.3),i.ybox(Ut,"#E2B13C",C.x0+.25,C.h+.55,25.6,.06,1.1,.32,0),i.cyl(Ut,G.steelD,C.x0+.25,25.6,C.h,C.h+1.15,.03,6,0),s(G.ok,ui(he.x-.25,he.z-.25,he.x+.25,he.z+.25),C.h+.02);for(let[x,A,I,U,B]of[[34.05,16.3,35,17.4,1.7],[34.1,17.45,34.9,18.3,1.2],[34.05,18.35,35.1,19.5,1.85],[34.1,19.55,34.95,20.45,1.35]])m(x,A,I,U,B);for(let[x,A,I]of[[35.35,17,1],[35.4,19,.85],[35.25,20.2,1.1]])i.cyl(Ut,"#A99C86",x,A,C.h,C.h+I,.24,8,0);i.ybox(Ut,G.woodD,35.3,C.h+.9,18,.05,1.8,2.2,.15);let at=Ja;n(G.wood,at.x0,C.h-.14,at.z0,at.x1,C.h,at.z1);for(let x=at.z0+.25;x<at.z1;x+=.5)n(G.woodD,at.x0-.02,C.h-.02,x,at.x1+.02,C.h+.01,x+.05);for(let x of[at.x0-.05,at.x1+.05])n(G.woodD,x-.04,C.h-.3,at.z0,x+.04,C.h-.1,at.z1);let it=Ur,nt=hi;h(it.x0,it.z0,it.x1,it.z1,it.h,{band:3.6,wins:[...u("s",42,50,4,1,2.4),...u("s",42,50,4,4.4,5.9),...u("e",31,35.5,4.5,1,2.4),...u("e",31,35.5,4.5,4.4,5.9)]}),n("#CFC8BB",it.x0+.02,it.h,it.z0+.02,it.x1-.02,it.h+.02,it.z1-.02),n(G.stone,it.x0,it.h,it.z0,at.x0,T,it.z0+.25),n(G.stone,at.x1,it.h,it.z0,it.x1,T,it.z0+.25),n(G.stone,it.x1-.25,it.h,it.z0,it.x1,T,it.z1),n(G.stone,it.x0,it.h,it.z1-.25,it.x1,T,it.z1),n(G.stone,it.x0,it.h,it.z0,it.x0+.25,T,31.6),n(G.stone,it.x0,it.h,34.4,it.x0+.25,T,it.z1),n(G.guide,it.x0-.02,it.h-.03,31.6,it.x0+.25,it.h+.03,34.4),i.cyl(Ut,G.steel,49.8,34.6,it.h,it.h+.9,.45,10,0),h(nt.x0,nt.z0,nt.x1,nt.z1,nt.h,{band:2.4,wins:[...u("s",33,38,2.5,.9,2.2),...u("n",33,38,2.5,.9,2.2)]}),n("#CFC8BB",nt.x0+.02,nt.h,nt.z0+.02,nt.x1-.02,nt.h+.02,nt.z1-.02),n(G.stone,nt.x0,nt.h,nt.z0,nt.x1,nt.h+.75,nt.z0+.25),n(G.stone,nt.x0,nt.h,nt.z1-.25,nt.x1,nt.h+.75,nt.z1),n(G.stone,nt.x0,nt.h,nt.z0,nt.x0+.25,nt.h+.75,qe.z0),n(G.stone,nt.x0,nt.h,qe.z1,nt.x0+.25,nt.h+.75,nt.z1),i.ybox(Ut,"#E2B13C",nt.x0+.3,nt.h+.5,qe.z0-.05,.3,.9,.06,0);let E=qe;i.plate(Ut,"#C8C1B4",[[E.x0,.02,E.z0],[E.x1,E.y+.02,E.z0],[E.x1,E.y+.02,E.z1],[E.x0,.02,E.z1]],.2);for(let x of[E.z0,E.z1]){let A=[E.x0,0,x],I=[E.x1,0,x],U=[E.x1,E.y,x];i.tri(Ut,G.stoneD,A,I,U),i.tri(Ut,G.stoneD,A,U,I)}for(let x of[E.z0-.12,E.z1+.12])i.plate(Ut,"#8C8678",[[E.x0,.2,x-.12],[E.x1,E.y+.2,x-.12],[E.x1,E.y+.2,x+.12],[E.x0,.2,x+.12]],.35);return g(53.2,13.2,.8),g(-56+1.5,36.5,.8),{K:i,trees:t}}function di(i){let t=Dr;for(let e=0;e<t.length-1;e++){let[n,s]=t[e],[r,o]=t[e+1];if(i<=n&&i>=r)return s+(o-s)*(n-i)/(n-r)}return t[t.length-1][1]}var Qa=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new N},this.goal={th:0,ph:.9,r:500,t:new N},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,c;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(c=t.r)!=null?c:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Dt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new vr;o.setFromCamera(r,this.cam);let a=new N;return o.ray.intersectPlane(new an(new N(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),c=-Math.sin(o),l=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*l*Math.min(u,2.2))*r,n.t.z+=(-t*c+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,c]=[...this.ptrs.values()],l=(a.x+c.x)/2,h=(a.y+c.y)/2,u=Math.hypot(a.x-c.x,a.y-c.y),d=Math.atan2(c.y-a.y,c.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let f=d-this._pinch.a;f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),this.rotate(f,0)}this._pinch={d:u,mx:l,my:h,a:d};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var ja={ov:{t:[0,0,0],r:165,ph:.8,th:.42},top:{t:[0,0,0],r:190,ph:.12,th:0}};function xx(i){let t=new Me;return t.setAttribute("position",new ce(i.p,3)),t.setAttribute("normal",new ce(i.n,3)),t.setAttribute("color",new ce(i.c,3)),t.computeBoundingSphere(),t}function _x(){let i=(r,o)=>{let a=r.attributes.position.count,c=new Float32Array(a*3);for(let l=0;l<a;l++)c.set(o,l*3);return r.setAttribute("color",new ce(c,3)),r},t=(r,o,a,c)=>{let l=Wu(new Ti(r,1).deleteAttribute("normal").deleteAttribute("uv"));return l.computeVertexNormals(),l.translate(o,a,c).toNonIndexed()},e=[t(1.25,0,3.7,0),t(.95,.85,3.2,.35),t(.9,-.7,3.35,-.55),t(.8,.1,4.5,-.25)].map(r=>i(r,[1,1,1])),n=new Jt("#7A6A58");e.push(i(new bn(.16,.24,2.7,5,1,!0).translate(0,1.35,0).deleteAttribute("uv").toNonIndexed(),[n.r,n.g,n.b]));let s=new Me;for(let r of["position","normal","color"]){let o=e.reduce((l,h)=>l+h.attributes[r].array.length,0),a=new Float32Array(o),c=0;for(let l of e)a.set(l.attributes[r].array,c),c+=l.attributes[r].array.length;s.setAttribute(r,new ce(a,3))}return s}function yx(){let{K:i,trees:t}=Qu(),e=i.out(),n=new le,s=p=>new cn({vertexColors:!0,roughness:.9,metalness:0,...p}),r={st:s({}),gr:s({roughness:.95}),pt:s({roughness:.95,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),wt:s({roughness:.25,metalness:.05,transparent:!0,opacity:.58,depthWrite:!1,side:ze})};for(let[p,w]of Object.entries(e)){let _=new jt(xx(w),r[p]||r.st);_.name=p,_.castShadow=p==="st",_.receiveShadow=p!=="wt",p==="wt"&&(_.renderOrder=3),n.add(_)}let o=_x(),a=new cn({vertexColors:!0,roughness:.95}),c=new nr(o,a,t.length),l=new se,h=new yn,u=new N,d=new N,f=new Jt,m=new N(0,1,0),v=new Jt("#82966B"),g=new Jt("#A2AD80");return t.forEach(([p,w,_],y)=>{let M=Math.sin(p*12.9898+w*78.233)*43758.5453,R=M-Math.floor(M);h.setFromAxisAngle(m,R*6.28),u.set(_*(.9+R*.2),_*(.95+R*.2),_*(.9+R*.2)),d.set(p,0,w),l.compose(d,h,u),c.setMatrixAt(y,l),f.copy(v).lerp(g,R),c.setColorAt(y,f)}),c.castShadow=!0,c.receiveShadow=!0,c.frustumCulled=!1,n.add(c),{root:n,M:r}}function tl(i,t={}){var H,$;let e=(H=t.mobile)!=null?H:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Cs({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,t.maxDpr||2)),n.shadowMap.enabled=!0,n.shadowMap.type=ys,n.shadowMap.autoUpdate=!1,n.toneMapping=vs,n.toneMappingExposure=($=t.exposure)!=null?$:1,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new Si,r=new Ce(32,1,.5,4e3),o=yx();s.add(o.root),s.add(new Ri("#EEF2F5","#B5AB9A",1.3));let a=new Ci("#FFF2DF",2.6),c=new N(-.5,.78,.42).normalize(),l=new N(0,0,0);a.position.copy(l).addScaledVector(c,400),a.target.position.copy(l),s.add(a,a.target),a.castShadow=!0;let h=t.shadowSize||(e?2048:4096);a.shadow.mapSize.set(h,h),a.shadow.bias=-4e-4,a.shadow.normalBias=.05,a.shadow.radius=2;{let X=a.shadow.camera,Z=new se().lookAt(a.position,a.target.position,new N(0,1,0)).setPosition(a.position).invert(),q=1e9,Q=-1e9,mt=1e9,_t=-1e9,bt=1e9,yt=-1e9,St=new N;for(let Vt of[Bi.x0,Bi.x1])for(let Nt of[-3,12])for(let ut of[Bi.z0,Bi.z1])St.set(Vt,Nt,ut).applyMatrix4(Z),q=Math.min(q,St.x),Q=Math.max(Q,St.x),mt=Math.min(mt,St.y),_t=Math.max(_t,St.y),bt=Math.min(bt,St.z),yt=Math.max(yt,St.z);Object.assign(X,{left:q,right:Q,bottom:mt,top:_t,near:-yt-5,far:-bt+5}),X.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0}let u=!0,d=!0,f=!0,m=performance.now(),v=[],g=[],p=new Qa(r,n.domElement,{minR:3,maxR:420,minPhi:.08,maxPhi:1.5,bounds:{x0:-70,x1:70,z0:-55,z1:55},onChange:()=>{u=!0},onStart:()=>{for(let X of v)X()},onWheelHint:()=>{for(let X of g)X()},...t.controls||{}}),w=(X,Z)=>{var mt;let q=typeof X=="string"?ja[X]:X,Q={th:q.th,ph:q.ph,r:q.r,t:new N(...q.t)};Z?p.set(Q,!0):p.flyTo(Q,(mt=q.dur)!=null?mt:1.3)};w(t.view||"ov",!0);let _=()=>{let X=i.clientWidth||800,Z=i.clientHeight||500;n.setSize(X,Z,!1),r.aspect=X/Z,r.updateProjectionMatrix(),u=!0},y=new ResizeObserver(_);y.observe(i),_();let M=new IntersectionObserver(X=>{d=X[0].isIntersecting,d&&(u=!0)});M.observe(i);let R=[],L=[],F=()=>{n.render(s,r);for(let X of R)X(r)},S=!1,b=0,D=X=>{if(!f||(requestAnimationFrame(D),S))return;let Z=Math.max(0,Math.min(.05,(X-m)/1e3));if(m=X,!d||document.hidden)return;let q=k.animating||X<k.animUntil||k.ambient;if(q)for(let mt of L)mt(Z,X/1e3);let Q=p.update(Z);(u||Q||q)&&(F(),u=!1)};requestAnimationFrame(D);let k={renderer:n,scene:s,camera:r,controls:p,world:o,setView:w,VIEWS:ja,animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{u=!0},hold:X=>{S=X,X?(b=performance.now()/1e3,p.now=()=>b*1e3):p.now=()=>performance.now()},step:X=>{b+=X;for(let Z of L)Z(X,b);p.update(X),F()},renderNow:()=>{p.update(1),F()},onRender:X=>R.push(X),onFrame:X=>L.push(X),onUserStart:X=>v.push(X),onWheelHint:X=>g.push(X),dispose:()=>{f=!1,y.disconnect(),M.disconnect(),n.dispose(),n.domElement.remove()}};return k}var Ds=(i,t={})=>new cn({color:i,roughness:.75,metalness:0,...t}),vx={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",hat:"#6F4A1E",ring:"#E7A537"},t:{H:1.78,body:"#3F7F8C",head:"#D9B896",limb:"#2F6470",ring:"#5FA8B5"},g:{H:1.82,body:"#3A4044",head:"#9C8C7C",limb:"#2C3134",gun:"#22272A",ring:"#B5462F"},l:{H:1.86,body:"#7A2E25",head:"#B79C84",limb:"#5A231C",hat:"#3A2420",ring:"#B5462F"},n:{H:1.72,body:"#9A8F80",head:"#C9AE92",limb:"#7F7568",ring:"#A9A090"},w:{H:1.74,body:"#B79A72",head:"#D2B392",limb:"#97805F",ring:"#C9B48E"}};function el(i){let t=vx[i],e=t.H,n=new le,s=new le;n.add(s),s.position.y=e*.5;let r=Ds(t.body),o=Ds(t.head),a=Ds(t.limb),c=new jt(new or(e*.13,e*.26,4,10),r);c.position.y=e*.2,s.add(c);let l=new jt(new gr(e*.1,14,10),o);l.position.y=e*.44,s.add(l);let h=(p,w,_)=>{let y=new le,M=new jt(new Ve(p,w,p),_);return M.position.y=-w/2,y.add(M),y},u=h(e*.07,e*.34,a),d=h(e*.07,e*.34,a);u.position.set(-e*.17,e*.33,0),d.position.set(e*.17,e*.33,0);let f=h(e*.085,e*.46,a),m=h(e*.085,e*.46,a);if(f.position.set(-e*.07,0,0),m.position.set(e*.07,0,0),s.add(u,d,f,m),t.gun){let p=new jt(new Ve(e*.04,e*.04,e*.5),Ds(t.gun));p.position.set(0,-e*.32,e*.14),d.add(p)}if(t.hat){let p=new jt(new bn(e*.1,e*.13,e*.06,14),Ds(t.hat));p.position.y=e*.52,s.add(p);let w=new jt(new bn(e*.075,e*.085,e*.08,14),Ds(t.hat));w.position.y=e*.57,s.add(w)}let v=new jt(new xs(e*.32,e*.42,28),new we({color:t.ring,transparent:!0,opacity:.85,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=.04,v.renderOrder=2,n.add(v),n.traverse(p=>{p.isMesh&&p!==v&&(p.castShadow=!0,p.receiveShadow=!1)});let g={root:n,hips:s,torso:c,armL:u,armR:d,legL:f,legR:m,H:e,kind:i,ring:v,pose(p="idle",w=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let M of[u,d,f,m])M.rotation.set(0,0,0);let _=Math.sin(w*9),y=!1;switch(p){case"walk":{let M=Math.sin(w*5.5);f.rotation.x=.38*M,m.rotation.x=-.38*M,u.rotation.x=-.3*M,d.rotation.x=y?-.15:.3*M;break}case"run":s.rotation.x=.22,f.rotation.x=.7*_,m.rotation.x=-.7*_,u.rotation.x=-.6*_,d.rotation.x=y?-.3:.6*_;break;case"stumble":s.rotation.x=.5,f.rotation.x=.5*_,m.rotation.x=-.5*_,u.rotation.z=-1.1,d.rotation.z=1.1,s.position.y=e*.46;break;case"throw":d.rotation.x=-2.1,u.rotation.x=.5,f.rotation.x=-.35,m.rotation.x=.3;break;case"cast":u.rotation.set(-2.7,0,-.35),d.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,u.rotation.x=-3,d.rotation.x=-3;break;case"charge":s.rotation.x=.55,d.rotation.x=-1.35,u.rotation.x=-.6,f.rotation.x=.8*_,m.rotation.x=-.8*_;break;case"fly":s.rotation.x=.35,f.rotation.x=.7,m.rotation.x=.5,u.rotation.z=-.9,d.rotation.z=.9;break;case"fall":s.rotation.x=-.4,u.rotation.z=-2.2,d.rotation.z=2.2,f.rotation.x=-.6,m.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,u.rotation.z=-.5,d.rotation.z=.5,f.rotation.x=.1;break;case"grab":s.rotation.x=.3,u.rotation.x=-1.5,y?d.rotation.x=-1.5:d.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,f.rotation.x=.5,m.rotation.x=.2,u.rotation.z=-1.2,d.rotation.z=1.2,s.position.y=e*.62;break;case"burn":u.rotation.set(-.6+.4*_,0,-1.1),d.rotation.set(-.6-.4*_,0,1.1),s.rotation.z=.1*_;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,f.rotation.x=-.9,m.rotation.x=.6,u.rotation.z=-1;break;case"push":s.rotation.x=-.35,f.rotation.x=-.5,m.rotation.x=.4,u.rotation.x=-1.4,d.rotation.x=-1.4;break;case"sneak":{let M=Math.sin(w*4.5);s.position.y=e*.38,s.rotation.x=.35,f.rotation.x=-.7+.35*M,m.rotation.x=-.7-.35*M,u.rotation.x=-.5,d.rotation.x=-.5;break}case"crouch":s.position.y=e*.32,s.rotation.x=.25,f.rotation.x=-1.1,m.rotation.x=-.5,u.rotation.x=-.6,d.rotation.x=-.9;break;case"sidle":{let M=Math.sin(w*3.5);u.rotation.z=-.5,d.rotation.z=.5,f.rotation.z=-.15*M,m.rotation.z=.15*M;break}case"balance":{let M=Math.sin(w*2.2);u.rotation.set(0,0,-1.45+.12*M),d.rotation.set(0,0,1.45+.12*M),s.rotation.z=.06*M;let R=Math.sin(w*4);f.rotation.x=.22*R,m.rotation.x=-.22*R;break}case"crawl":{let M=Math.sin(w*5);s.position.y=e*.2,s.rotation.x=1.25,u.rotation.x=-1.25+.3*M,d.rotation.x=-1.25-.3*M,f.rotation.x=-1.35-.25*M,m.rotation.x=-1.35+.25*M;break}case"slide":s.rotation.x=-.55,s.position.y=e*.3,f.rotation.x=-1.3,m.rotation.x=-1.1,u.rotation.set(-.3,0,-.9),d.rotation.set(-.3,0,.9);break;case"vault":s.rotation.x=.45,s.rotation.z=.25,u.rotation.x=-1.9,d.rotation.set(-.6,0,.5),f.rotation.x=-1.2,m.rotation.x=-.5;break;case"jump":s.rotation.x=.1,u.rotation.set(-2.4,0,-.3),d.rotation.set(-2.4,0,.3),f.rotation.x=-1,m.rotation.x=-.35;break;case"hang":{let M=Math.sin(w*3);u.rotation.x=-2.9,d.rotation.x=-2.9,f.rotation.x=.15*M,m.rotation.x=-.15*M;break}case"swing":{let M=Math.sin(w*7);s.rotation.y=.4*M,d.rotation.set(-1.4-.6*M,0,.3),u.rotation.set(-.8,0,-.3),f.rotation.x=-.3,m.rotation.x=.25;break}case"climb":{let M=Math.sin(w*5);u.rotation.x=-2.8+.4*M,d.rotation.x=-2.8-.4*M,f.rotation.x=-.6+.4*M,m.rotation.x=-.6-.4*M;break}case"talk":{let M=Math.sin(w*3);d.rotation.set(-1+.35*M,0,.3),u.rotation.set(-.4-.2*M,0,-.25);break}case"bid":{let M=Math.abs(Math.sin(w*2.4));d.rotation.set(-2.6+.3*M,0,.15),u.rotation.set(-1.2,0,-.4),s.rotation.x=-.06;break}case"look":s.rotation.x=.12,u.rotation.set(-.3,0,-.15),d.rotation.set(-.3,0,.15);break;case"aim":d.rotation.x=-1.5,u.rotation.set(-1.5,0,.45),f.rotation.x=-.2,m.rotation.x=.25;break;case"stab":s.rotation.x=.35,d.rotation.x=-1.7,u.rotation.set(-1.9,0,.5),f.rotation.x=-.5,m.rotation.x=.4;break;case"shoot":{let M=Math.sin(w*40)*.03;s.rotation.x=.25,s.position.y=e*.44,d.rotation.x=-1.35+M,u.rotation.set(-1.35+M,0,.35),f.rotation.x=-.7,m.rotation.x=.2;break}case"blown":s.rotation.x=-1.1,u.rotation.z=-2,d.rotation.z=2,f.rotation.x=-.8,m.rotation.x=.5;break;case"cower":s.position.y=e*.3,s.rotation.x=.5,f.rotation.x=-1.2,m.rotation.x=-1.2,u.rotation.set(-2.6,0,-.5),d.rotation.set(-2.6,0,.5);break;case"wave":{let M=Math.sin(w*6);d.rotation.set(-2.8,0,.4+.35*M),u.rotation.z=-.1;break}default:u.rotation.z=-.08,d.rotation.z=.08}}};return g.pose("idle"),g}function ju(i=1){let t=new we({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new jt(new Ti(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function td(i=4){let t=new we({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:ze}),e=new jt(new xs(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function ed(i,t,e,n={}){var d,f;let s=i.map(m=>new N(...m)),r=s.length>2?new Ei(s,!1,"centripetal",.2):new ms(s[0],s[1]||s[0].clone().add(new N(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),c=[];if(n.dash){let[m,v]=n.dash,g=Math.max(1,Math.floor(o/(m+v)));for(let p=0;p<g;p++){let w=p*(m+v)/o,_=Math.min(1,(p*(m+v)+m)/o),y=[];for(let M=0;M<=4;M++)y.push(r.getPointAt(w+(_-w)*M/4));c.push(new _s(new Ei(y),4,t,6,!1))}}else c.push(new _s(r,a,t,7,!1));let l=new le,h=new we({color:e,transparent:!!n.opacity,opacity:(d=n.opacity)!=null?d:1}),u=new we({color:e,transparent:!0,opacity:(f=n.xray)!=null?f:.22,depthTest:!1,depthWrite:!1});for(let m of c){let v=new jt(m,h),g=new jt(m,u);g.renderOrder=5,l.add(v,g)}if(n.every){let m=new ar(t*2.6,t*5,10);m.rotateX(Math.PI/2);let v=Math.max(1,Math.floor(o/n.every));for(let g=1;g<=v;g++){let p=Math.min(.999,(g-(n.last?0:.5))/v),w=r.getPointAt(p),_=r.getTangentAt(p);for(let y of[h,u]){let M=new jt(m,y);M.position.copy(w),M.lookAt(w.clone().add(_)),y===u&&(M.renderOrder=5),l.add(M)}}}return l.userData.length=o,l.userData.curve=r,l}function nd(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new N,o=[];for(let g=8;g<=48;g+=8)o.push([0,-g],[0,g],[g,0],[-g,0]);let a="",c=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next,.mt-ar-hud,.mt-ar-ctl",l=[],h=-1e9,u=()=>{let g=t.getBoundingClientRect();l=[...t.querySelectorAll(c)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let w=p.getBoundingClientRect();return[w.left-g.left-3,w.top-g.top-3,w.right-g.left+3,w.bottom-g.top+3]})};function d(g,p,w,_){let y=document.createElement(_?"button":"span");_&&(y.type="button"),y.className=g,y.innerHTML=p,y.style.display="none",e.appendChild(y);let M={e:y,p:typeof w=="function"?null:new N(...w),fn:typeof w=="function"?w:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(g),w:0,h:0};return s.push(M),M}function f(g){let p=s.indexOf(g);p>=0&&s.splice(p,1),g.e.remove()}let m=g=>{g.shown&&(g.e.style.display="none",g.shown=!1)},v=(g,p,w)=>{g.e.style.transform=`translate(${p.toFixed(1)}px,${w.toFixed(1)}px)`};return i.onRender(g=>{let p=performance.now();p-h>400&&(u(),h=p);let w=t.clientWidth,_=t.clientHeight,y=l.slice(),M=[],R=[];for(let b of s){if(!b.on){m(b);continue}if(r.copy(b.fn?b.fn():b.p).project(g),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){m(b);continue}b.shown||(b.e.style.display="",b.shown=!0);let D=(r.x+1)/2*w,k=(1-r.y)/2*_;(b.lab?M:R).push([b,D,k])}let L=(b,D,k)=>{let H=b.bw||(b.bw=b.e.offsetWidth);return H>40?[D-16,k-16,D-16+H,k+16]:[D-15,k-15,D+15,k+15]},F=b=>!y.some(D=>b[0]<D[2]&&b[2]>D[0]&&b[1]<D[3]&&b[3]>D[1]);R.sort((b,D)=>D[0].e.classList.contains("on")-b[0].e.classList.contains("on"));let S="";for(let[b,D,k]of R){let H=D,$=k,X=L(b,D,k);if(!F(X))for(let[Z,q]of o){let Q=L(b,D+Z,k+q);if(Q[0]>=0&&Q[2]<=w&&Q[1]>=0&&Q[3]<=_&&F(Q)){H=D+Z,$=k+q,X=Q;break}}v(b,H,$),y.push(X),Math.hypot(H-D,$-k)>13&&(S+=`<line x1="${D.toFixed(1)}" y1="${k.toFixed(1)}" x2="${H.toFixed(1)}" y2="${$.toFixed(1)}"/><circle cx="${D.toFixed(1)}" cy="${k.toFixed(1)}" r="3"/>`)}S!==a&&(a=S,n.innerHTML=S?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${S}</g>`:""),M.sort((b,D)=>D[2]-b[2]);for(let[b,D,k]of M){b.w||(b.w=b.e.offsetWidth,b.h=b.e.offsetHeight);let H=k;for(let $=0;$<10;$++){let X=D-b.w/2,Z=H-11-b.h,q=D+b.w/2,Q=H-11,mt=y.find(_t=>X<_t[2]&&q>_t[0]&&Z<_t[3]&&Q>_t[1]);if(!mt||mt[1]+11-3-11-b.h<0)break;H=mt[1]+11-3}y.push([D-b.w/2,H-11-b.h,D+b.w/2,H-11]),v(b,D,H)}}),{lay:e,add:d,remove:f,marks:s}}var Hi=(i,t)=>dn.h+i.rise*(t-dn.x0)/((dn.x1-dn.x0)/2)+.1,Fc=i=>.04+(i-qe.x0)/(qe.x1-qe.x0)*qe.y,Be=Xa,pe=qa,fn=Yn.z1+.3,Jn=[{at:[-37,7.5,-21],cam:{t:[-37,1,-21.5],r:56,ph:.8,th:.35},st:[0,1,2,3,4,5]},{at:[2,5,-22],cam:{t:[2,0,-22],r:46,ph:.9,th:.45},st:[6]},{at:[39,8,-21],cam:{t:[38.5,0,-21],r:46,ph:.88,th:.2},st:[7,8]},{at:[-19,6,19.5],cam:{t:[-19.5,0,19.5],r:84,ph:.74,th:.18},st:[9,10,11]},{at:[33,10.5,21],cam:{t:[35,2,22],r:44,ph:.86,th:-.55},st:[12,13,14,15]},{at:[45,9.5,33.5],cam:{t:[37,2,20],r:52,ph:.8,th:.55},st:[16,17]}],Vi=[{cam:{t:[-47.4,1,-28.2],r:22,ph:.98,th:.38},dims:[[[Be.x-Be.w/2,Be.h+.22,fn],[Be.x+Be.w/2,Be.h+.22,fn],"","dim"],[[Be.x-Be.w/2-.3,0,fn],[Be.x-Be.w/2-.3,Be.h,fn],"","dim",[1,0,0]],[[pe.x-pe.w/2,pe.y1+.22,fn],[pe.x+pe.w/2,pe.y1+.22,fn],"","dim"],[[pe.x+pe.w/2+.3,pe.y0,fn],[pe.x+pe.w/2+.3,pe.y1,fn],"","dim",[1,0,0]],[[pe.x-pe.w/2-.3,0,fn],[pe.x-pe.w/2-.3,pe.y0,fn],"","dim",[1,0,0]],[[-46.4,.1,Rr.z0+.1],[-46.4,.1,Rr.z1-.1],"","dim",[0,1,0]]],labs:[["\u5E38\u89C4\u95E8 \xB7 \u5BBD\u3001\u9AD8",Be.x,3.05,fn,"dim"],["\u53EF\u7FFB\u8D8A\u7A97\u6237 \xB7 \u79BB\u5730\u9AD8\u5EA6\u3001\u5BBD\u3001\u9AD8",pe.x,3.05,fn,"dim"],["\u8D70\u5ECA \xB7 \u5BBD",-46.4,.55,-31,"dim"]],act:[{k:"p",T:14,keys:[[0,Be.x,0,-19.5,"walk"],[4.2,Be.x,0,-25.6,"walk"],[6.2,Be.x,0,-28.6,"walk"],[7.8,Be.x,0,-31,"walk"],[10.2,-45.6,0,-31,"walk"],[12,-43,0,-31,"idle"],[14,-43,0,-31,"idle"]]},{k:"p",T:6,keys:[[0,pe.x,0,-20.6,"run"],[1.1,pe.x,0,-24.25,"run"],[1.65,pe.x,0,-25.95,"vault",1.25],[2.1,pe.x,0,-26.8,"run"],[3,pe.x,0,-28.4,"walk"],[6,pe.x,0,-28.4,"idle"]]}]},{cam:{t:[-28.5,1.4,-24],r:16,ph:1.08,th:0},dims:[[[Cr.x0,2.15,-17.2],[Cr.x1,2.15,-17.2],"\u5EFA\u7B51\u57FA\u7840\u5BBD\u5EA6","dim"],[[-29.38,1.08,-29.2],[-27.85,1.08,-29.2],"\u6700\u7A84\u5904 \u22651.5m \xB7 \u5C40\u90E8\u7EA2\u7EBF","no"]],labs:[],act:[{k:"p",T:16,keys:[[0,-28.5,0,-14.6,"walk"],[15,-28.5,0,-36,"walk"],[16,-28.5,0,-36,"idle"]]},{k:"n",T:9,keys:[[0,-29.75,0,-25,"talk"]]}]},{cam:{t:[-39.9,.7,-29.2],r:10.5,ph:1.08,th:.52},dims:[[[fe.x1+.06,1.5,fe.z-fe.w/2],[fe.x1+.06,1.5,fe.z+fe.w/2],"","dim"],[[fe.x1+.06,fe.wall,fe.z+fe.w/2+.35],[fe.x1+.06,fe.wall+fe.h,fe.z+fe.w/2+.35],"","dim",[0,0,1]],[[Yn.x1+.25,.72,Ne.z-Ne.w/2],[Yn.x1+.25,.72,Ne.z+Ne.w/2],"","dim"],[[Yn.x1+.25,0,Ne.z+Ne.w/2+.25],[Yn.x1+.25,Ne.h,Ne.z+Ne.w/2+.25],"","dim",[0,0,1]]],labs:[["\u901A\u98CE\u7BA1\u9053 \xB7 \u51C0\u5BBD\u3001\u51C0\u9AD8\uFF08\u8E72\u884C\uFF09",fe.x1,1.95,fe.z,"dim"],["\u72D7\u6D1E \xB7 \u5BBD\u3001\u9AD8\uFF08\u722C\u884C\uFF09",Yn.x1+.3,1.1,Ne.z,"dim"]],act:[{k:"p",T:8,keys:[[0,-36.2,0,fe.z,"sneak"],[2.6,-38.7,.1,fe.z,"sneak"],[5.6,-41.8,.1,fe.z,"sneak"],[8,-41.8,.1,fe.z,"sneak"]]},{k:"p",T:7,keys:[[0,-38.6,0,Ne.z,"crawl"],[4,-42.4,0,Ne.z,"crawl"],[7,-42.4,0,Ne.z,"crawl"]]}]},{cam:{t:[-49,1,-11.5],r:11,ph:1.2,th:.05},dims:[[[wn.gap[0],2.45,wn.z1+.1],[wn.gap[1],2.45,wn.z1+.1],"\u53EF\u901A\u884C\u95F4\u9694","ok"],[[wn.slit[0],2.65,wn.z1+.1],[wn.slit[1],2.65,wn.z1+.1],"\u4E0D\u53EF\u901A\u884C\u7F1D\u9699","no"]],labs:[],act:[{k:"p",T:8,keys:[[0,-50.5,0,-6.5,"walk"],[6,-50.5,0,-15,"walk"],[8,-50.5,0,-15,"idle"]]}]},{cam:{t:[-38.6,1.6,-11],r:15,ph:1.12,th:-.75},dims:[[[We.x,We.rise,We.z+We.w/2+.06],[ci.x0-We.run,ci.y,We.z+We.w/2+.06],"\u63A8\u8350\u503E\u89D2","ok"],[[Xe.x,Xe.rise,Xe.z-Xe.w/2-.06],[ci.x0-Xe.run,ci.y,Xe.z-Xe.w/2-.06],"\u6700\u5927\u503E\u89D2","warn"]],labs:[],act:[{k:"p",T:10,keys:[[0,-44.6,0,We.z,"walk"],[1.5,-42.5,0,We.z,"walk"],[7,-36.2,3,We.z,"walk"],[8.2,-34.4,3,We.z,"walk"],[10,-34.4,3,We.z,"idle"]]},{k:"n",T:10,keys:[[0,-41.2,0,Xe.z,"walk"],[1.2,-39.4,0,Xe.z,"walk"],[5.6,-36.1,3,Xe.z,"walk"],[6.6,-34.6,3,Xe.z-.2,"walk"],[10,-34.6,3,Xe.z-.2,"idle"]]}]},{cam:{t:[-27.5,2,-11],r:14,ph:1.2,th:.2},dims:[[[-26.2,3.08,Ee.z-Ee.w/2],[-26.2,3.08,Ee.z+Ee.w/2],"","ok",[1,0,0]],[[-27.5,0,Ee.z+Ee.w/2+.1],[-27.5,ci.y-Ee.h,Ee.z+Ee.w/2+.1],"\u6700\u4F4E\u51C0\u7A7A","dim",[1,0,0]]],labs:[["\u7AD9\u7ACB\u5BBD\u5EA6\u7A84\uFF1A\u72EC\u6728\u6865\u8DD1\u9177",-27.5,3.7,Tn.z,"warn"],["\u7AD9\u7ACB\u5BBD\u5EA6\u591F\uFF1A\u6B63\u5E38\u884C\u8D70",-24.9,3.55,Ee.z,"ok"]],act:[{k:"p",T:9,keys:[[0,-31.2,3,Tn.z,"balance"],[7,-23.8,3,Tn.z,"balance"],[9,-23.8,3,Tn.z,"idle"]]},{k:"p",T:8,keys:[[0,-31.2,3,Ee.z,"walk"],[5.2,-23.8,3,Ee.z,"walk"],[8,-23.8,3,Ee.z,"idle"]]},{k:"n",T:8,keys:[[0,-27.9,0,-6.4,"walk"],[5,-27.9,0,-13.6,"walk"],[8,-27.9,0,-13.6,"idle"]]}]},{cam:{t:[2,0,-22.5],r:40,ph:.95,th:.55},dims:[[[18.6,.24,-37],[18.6,.24,-34.2],"","dim",[0,1,0]],[[18.6,.1,-34],[18.6,.1,-26],"","dim",[0,1,0]],[[18.6,.24,-25.8],[18.6,.24,-23],"","dim",[0,1,0]],[[18.6,.24,-21.5],[18.6,.24,-19.7],"","dim",[0,1,0]],[[18.6,.1,-19.5],[18.6,.1,-15.1],"","dim",[0,1,0]],[[18.6,.24,-14.9],[18.6,.24,-13.5],"","dim",[0,1,0]],[[18.6,.14,-10.35],[18.6,.14,-9.15],"","fight",[0,1,0]]],labs:[["\u4E3B\u5E72\u9053 \xB7 \u8F66\u884C\u3001\u4EBA\u884C\u9053\u3001\u65E0\u969C\u788D\u901A\u884C",2,1.6,-30,"dim"],["\u666E\u901A\u9A6C\u8DEF",2,1.4,-17.3,"dim"],["\u793E\u533A\u5C0F\u8DEF \xB7 NPC \u6D3B\u52A8\u8DEF\u5F84\uFF08\u6682\u5B9A\u6700\u5C0F\u5BBD\u5EA6\uFF09",2,1,-9.75,"fight"]],act:[{k:"n",T:22,keys:[[0,-13.5,.16,-24.3,"walk"],[21,17.5,.16,-24.3,"walk"],[22,17.5,.16,-24.3,"idle"]]},{k:"n",T:20,keys:[[0,17.5,.16,-35.7,"walk"],[19.5,-13.5,.16,-35.7,"walk"],[20,-13.5,.16,-35.7,"idle"]]},{k:"n",T:21,keys:[[0,17,.16,-20.6,"walk"],[20,-13,.16,-20.6,"walk"],[21,-13,.16,-20.6,"idle"]]},{k:"n",T:23,keys:[[0,-13.5,.05,-9.75,"walk"],[22,17,.05,-9.75,"walk"],[23,17,.05,-9.75,"idle"]]},{k:"w",T:23,keys:[[0,12,.05,-9.75,"walk"],[16,-13,.05,-9.75,"walk"],[23,-13,.05,-9.75,"idle"]]}]},{cam:{t:[31,-.6,-16],r:19,ph:1.03,th:.32},dims:[[[25.4,di(-11.2),-11.2],[25.4,Ps.wy,-11.2],"\u53EF\u884C\u8D70","ok",[0,0,1]],[[25.4,di(-16.5),-16.5],[25.4,Ps.wy,-16.5],"\u6C34\u7EBF\u8FC7\u6E21","warn",[0,0,1]],[[25.4,di(-27),-27],[25.4,Ps.wy,-27],"\u4E0D\u53EF\u884C\u8D70","no",[0,0,1]]],labs:[],act:[{k:"p",T:11,keys:[[0,31,0,-5,"walk"],[2.2,31,0,-8,"walk"],[2.8,31,-.28,-8.7,"walk"],[6.6,31,di(-13.4),-13.4,"walk"],[8.2,31,di(-13.4),-13.4,"look"],[11,31,di(-13.4),-13.4,"look"]]}]},{cam:{t:[45.5,3.4,-21.6],r:27,ph:1.18,th:-1.15},dims:un.map(i=>[[dn.x0-.1,dn.h+.2,(i.z0+i.z1)/2-2.6],[(dn.x0+dn.x1)/2,dn.h+i.rise+.2,(i.z0+i.z1)/2-2.6],i.n,i.c]),labs:[],act:[{k:"p",T:6,keys:[[0,44.6,Hi(un[0],44.6),-33.4,"swing"],[6,44.6,Hi(un[0],44.6),-33.4,"swing"]],look:[44.6,0,-31.2]},{k:"g",T:6,keys:[[0,44.6,Hi(un[0],44.6),-31.3,"aim"],[6,44.6,Hi(un[0],44.6),-31.3,"aim"]],look:[44.6,0,-33.4]},{k:"p",T:9,keys:[[0,44.4,Hi(un[1],44.4),-24.6,"walk"],[5.5,44.4,Hi(un[1],44.4),-18.4,"walk"],[9,44.4,Hi(un[1],44.4),-18.4,"idle"]]}]},{cam:{t:[-19.5,0,19.5],r:80,ph:.72,th:.18},dims:[],labs:Oi.map(i=>[`${i.n} \xB7 ${i.a}\u33A1`,i.x0+i.s/2,i.hall?7.6:1.4,i.z0+i.s/2,"fight"]),act:Oi.map(i=>({k:"p",T:6,keys:[[0,i.x0+i.s/2-.9,.1,i.z0+i.s/2+.9,"idle"]]}))},{cam:{t:[.5,0,19],r:64,ph:.72,th:.3},dims:[],labs:[["\u89C6\u91CE\u5B8C\u6574\uFF1A\u4E2D\u95F4\u4E0D\u653E\u5927\u7269\u4F53",.5,1.6,19,"fight"],["\u53EF\u611F\u77E5\u7684\u8FB9\u754C\uFF1A\u77EE\u5899\u56F4\u5408\uFF0C\u7559\u51FA\u5165\u53E3",.5,1.7,35.6,"fight"],["\u8FB9\u7F18\u3001\u8F6C\u89D2\u5706\u6DA6",15.4,1.4,34.6,"fight"],["\u63A9\u4F53\u9760\u8FB9\uFF0C\u4E0D\u5207\u5206\u573A\u5730",-9.6,1.7,6.6,"fight"]],act:[{k:"p",T:16,keys:[[0,.5,.1,11,"run"],[2,8,.1,14,"run"],[4,9.5,.1,21,"run"],[6,5,.1,27,"run"],[8,-3,.1,28,"run"],[10,-8,.1,22,"run"],[12,-7,.1,14,"run"],[14,-3,.1,10.5,"run"],[16,.5,.1,11,"run"]]}]},{cam:{t:[-46,3.4,26.4],r:20,ph:1.38,th:0},dims:[[[-50.6,.06,25.2],[-50.6,ki.beam,25.2],"\u5C42\u9AD8\uFF08\u5230\u6881\u5E95\uFF09","dim",[1,0,0]],[[-46,.06,27.6],[-46,ki.lampY,27.6],"\u6709\u6548\u51C0\u7A7A\uFF08\u5230\u540A\u706F\u78B0\u649E\uFF09","ok",[1,0,0]]],vols:[[-47.25,ki.lampY,24.75,-44.75,ki.beam,27.25,"no"]],labs:[["\u540A\u706F\u78B0\u649E",-43.2,5.6,26,"no"]],act:[{k:"p",T:5,keys:[[0,-47.3,.06,29.6,"swing"],[1.6,-47.3,.06,29.6,"swing"],[2.1,-47.3,.06,29.6,"jump",1.5],[2.6,-47.3,.06,29.6,"jump",1.1],[3.1,-47.3,.06,29.6,"swing"],[5,-47.3,.06,29.6,"swing"]],look:[-45,0,28.2]},{k:"g",T:5,keys:[[0,-45,.06,28.2,"aim"],[5,-45,.06,28.2,"aim"]],look:[-47.3,0,29.6]}]},{cam:{t:[25,1,15.2],r:12.5,ph:1.16,th:-1.2},dims:[[[21.35,0,Pe.z+.32],[21.35,Pe.h,Pe.z+.32],"\u79BB\u5730\u9AD8\u5EA6","dim",[0,0,1]],[[21.35,Pe.h+.1,Pe.z-Pe.t/2],[21.35,Pe.h+.1,Pe.z+Pe.t/2],"","dim",[1,0,0]],[[22.4,.08,12.6],[22.4,.08,Pe.z-Pe.t/2-.1],"\u524D\u65B9\u8DD1\u52A8\u51C0\u7A7A","ok",[0,1,0]],[[22.4,.08,Pe.z+Pe.t/2+.1],[22.4,.08,18.2],"\u540E\u65B9\u51C0\u7A7A","ok",[0,1,0]]],labs:[["\u7AD6\u76F4\u3001\u5149\u6ED1\u7684\u7FFB\u8D8A\u9762 \xB7 \u8FB9\u7F18\u539A\u5EA6\u3001\u5BBD\u5EA6",27,1.45,Pe.z,"dim"]],act:[{k:"p",T:5,keys:[[0,24,0,11.6,"run"],[.85,24,0,14.35,"run"],[1.4,24,0,15.85,"vault",1.2],[1.85,24,0,17.2,"run"],[2.8,24,0,19.6,"walk"],[5,24,0,19.6,"idle"]]}]},{cam:{t:[33.2,2.8,21],r:13,ph:1.3,th:-1.45},dims:Ln.map(i=>[[ye.x0-i.d,$e+Zn+.1,i.z+.7],[ye.x0,$e+Zn+.1,i.z+.7],i.n,i.c,[0,1,0]]),labs:[["\u539A\u5EA6",ye.x0-1.3,$e-.15,Ln[2].z-1.1,"dim"]],act:[{k:"p",T:7.5,keys:[[0,29.8,0,24.75,"run"],[1.1,32.1,0,24.75,"run"],[1.8,32.95,1.6,24.75,"climb"],[2.4,32.95,1.6,24.75,"idle"],[3.1,33.15,3.4,24.5,"jump",.6],[3.6,33.2,3.4,24.5,"idle"],[7.5,33.2,3.4,24.5,"idle"]]},{k:"p",T:7.5,keys:[[0,32.2,0,Ln[0].z,"look"]],look:[34,3.3,Ln[0].z]}]},{cam:{t:[35,6.4,21.6],r:15.5,ph:1.05,th:-1.28},dims:[[[he.x-.3,ye.h+.02,he.z+.3],[he.x-.3,ye.h+2.22,he.z+.3],"\u7EA6 2.2m","ok",[0,0,1]],[[he.x+.35,ye.h+.08,he.z-.25],[he.x+.35,ye.h+.08,he.z+.25],"\u7EA6 0.5m \xD7 0.5m","ok",[1,0,0]]],vols:[[he.x-.25,ye.h+.02,he.z-.25,he.x+.25,ye.h+2.22,he.z+.25,"ok"]],labs:[["\u6742\u7269\u5C01\u5835\uFF1A\u4E0D\u5E0C\u671B\u73A9\u5BB6\u5230\u8FBE",34.6,9.4,18.4,"no"]],act:[{k:"p",T:7,keys:[[0,33.25,3.4,24.75,"idle"],[.6,33.72,3.4,25.2,"climb"],[3.2,33.72,6.55,25.2,"climb"],[3.8,34.3,ye.h+.02,25,"climb"],[4.3,he.x,ye.h+.02,he.z,"idle"],[7,he.x,ye.h+.02,he.z,"idle"]]}]},{cam:{t:[27,1.8,32.5],r:13.5,ph:1.18,th:-.35},dims:[[[qe.x0,.3,qe.z0-.35],[qe.x1,qe.y+.3,qe.z0-.35],"\u6ED1\u5761\u89D2\u5EA6 \xB7 \u78B0\u649E\u9762\u5E73\u6ED1","dim"]],labs:[],act:[{k:"p",T:5.5,keys:[[0,32.6,hi.h+.02,32.5,"run"],[.5,31,Fc(31),32.5,"slide"],[2.4,23.4,Fc(23.4),32.5,"slide"],[2.9,22,0,32.5,"run"],[3.8,20.6,0,32.5,"walk"],[5.5,20.6,0,32.5,"idle"]]}]},{cam:{t:[26,0,8.2],r:20,ph:.64,th:.5},path:[[24.5,.12,1.2],[24.5,.12,5.6],[28.6,.12,7],[29,.12,9.6],[24.4,.12,10.6],[24,.12,13.6]],dims:[],labs:[["\u5317\u5C4B\uFF1A\u4E24\u4E2A\u51FA\u53E3",22.9,3,6,"ok"],["\u5357\u5C4B\uFF1A\u4E24\u4E2A\u51FA\u53E3",27.4,3,10.4,"ok"]],act:[{k:"p",T:14,keys:[[0,24.5,0,1.2,"walk"],[3,24.5,0,5.6,"walk"],[6.2,28.6,0,7,"walk"],[7.9,29,0,9.6,"walk"],[11.3,24.4,0,10.6,"walk"],[13.4,24,0,13.6,"walk"],[14,24,0,13.6,"idle"]]}]},{cam:{t:[40.5,5.2,28.5],r:31,ph:.92,th:.62},path:[[he.x,ye.h+.1,he.z],[41,ye.h+.1,25.2],[47.9,ye.h+.1,25.3],[47.9,ye.h+.1,30.4],[40.8,Ur.h+.1,33],[39.4,hi.h+.1,33],[31.4,hi.h+.1,32.5],[23.2,.2,32.5],[20.8,.1,32.5]],dims:[],labs:[["\u8FDE\u7EED\u3001\u4E0D\u8D70\u56DE\u5934\u8DEF",44.2,8.5,25.3,"ok"],["\u5916\u6CBF\u6709\u62A4\u5899\uFF0C\u9632\u610F\u5916\u6389\u843D",51.6,8.6,33.4,"dim"],["\u9EC4\u8272\u6307\u5F15\uFF1A\u4ECE\u54EA\u91CC\u4E0B",40.3,8.1,33,"dim"]],act:[{k:"p",T:12,keys:[[0,he.x,ye.h+.02,he.z,"run"],[1.6,41,ye.h+.02,25.2,"run"],[3.4,47.9,ye.h+.02,25.3,"run"],[4.6,47.9,ye.h+.02,30.4,"run"],[6.4,40.8,Ur.h+.02,33,"run"],[6.9,39.4,hi.h+.02,33,"jump"],[8.8,31.4,hi.h+.02,32.5,"run"],[10.5,23.4,Fc(23.4),32.5,"slide"],[11.2,21.2,0,32.5,"run"],[12,21.2,0,32.5,"idle"]]}]}];var zr={dim:"#2B3331",ok:"#4E9A4A",warn:"#D99A2B",no:"#C2553C",fight:"#3F8F9C",route:"#D2872C"},Mx=i=>String(i+1).padStart(2,"0");function id(i){i.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())})}function bx(i,t,e,n){let s=new le,r=new N(...i),o=new N(...t),a=o.clone().sub(r),c=a.length(),l=new we({color:e}),h=new we({color:e,transparent:!0,opacity:.28,depthTest:!1,depthWrite:!1}),u=(f,m,v)=>{let g=m.clone().sub(f),p=g.length(),w=new Ve(v,v,p);for(let _ of[l,h]){let y=new jt(w,_);y.position.copy(f).add(m).multiplyScalar(.5),y.lookAt(m),_===h&&(y.renderOrder=6),s.add(y)}};u(r,o,.045);let d=n?new N(...n):Math.abs(a.y)/c>.9?new N(1,0,0):new N(0,1,0);d.normalize().multiplyScalar(.2);for(let f of[r,o])u(f.clone().sub(d),f.clone().add(d),.04);return s}function Sx(i,t){let[e,n,s,r,o,a]=i,c=new le,l=new Ve(r-e,o-n,a-s),h=new jt(l,new we({color:t,transparent:!0,opacity:.16,depthWrite:!1})),u=new ir(new lr(l),new ps({color:t,transparent:!0,opacity:.9}));for(let d of[h,u])d.position.set((e+r)/2,(n+o)/2,(s+a)/2),c.add(d);return c}function nl(i,t,e={}){let n=new le;n.name="show",i.scene.add(n);let s={units:new le,labels:new le};n.add(s.units,s.labels);let r=nd(i,t),o=-1,a=-1,c={marks:!0,units:!0,labels:!0},l=(S,b,D,k)=>r.add(S,b,D,k),h=Jn.map((S,b)=>{let D=l("bs-phm",`<b>${b+1}</b><span>${(e.phaseNames||[])[b]||""}</span>`,S.at,1);return D.e.dataset.k=b,D.e.addEventListener("click",k=>{k.stopPropagation(),e.onPhase&&e.onPhase(b)}),D}),u=Vi.map((S,b)=>{let D=S.cam.t,k=l("bs-pin",`<span>${Mx(b)}</span>`,S.at||[D[0],D[1]+2.6,D[2]],1);return k.e.dataset.i=b,k.e.title=(e.names||[])[b]||"",k.e.addEventListener("click",H=>{H.stopPropagation(),e.onPick&&e.onPick(b)}),k}),d=[],f=()=>{h.forEach((S,b)=>{S.on=c.marks&&o<0,S.e.classList.toggle("on",b===o)}),u.forEach((S,b)=>{S.on=c.marks&&o>=0&&a<0&&Jn[o].st.includes(b)&&Jn[o].st.length>1,S.e.classList.toggle("on",b===a)});for(let S of d)S.on=c.labels;s.labels.visible=c.labels,s.units.visible=c.units,i.invalidate()},m=[],v=(S,b)=>Math.atan2(S,b);function g(S){let b=el(S.k);s.units.add(b.root);let D=S.keys,k=S.T||D[D.length-1][0]||1,H=0;if(S.look){let X=D[0];H=v(S.look[0]-X[1],S.look[2]-X[3])}else D.length>1&&(H=v(D[1][1]-D[0][1],D[1][3]-D[0][3]));let $=X=>{X=(X%k+k)%k;let Z=0;for(;Z<D.length-1&&X>=D[Z+1][0];)Z++;let q=D[Z],Q=D[Math.min(Z+1,D.length-1)],mt=Math.max(.001,Q[0]-q[0]),_t=Z===D.length-1?0:Math.min(1,(X-q[0])/mt),bt=q[1]+(Q[1]-q[1])*_t,yt=q[3]+(Q[3]-q[3])*_t,St=q[2]+(Q[2]-q[2])*_t;q[5]&&(St+=Math.sin(Math.PI*_t)*q[5]);let Vt=Q[1]-q[1],Nt=Q[3]-q[3];!S.look&&Math.hypot(Vt,Nt)>.05&&Z<D.length-1&&(H=v(Vt,Nt)),b.root.position.set(bt,St,yt),b.root.rotation.y=H,b.pose(q[4]||"idle",X),b.ring.visible=!["climb","crawl","slide","jump","vault","hang"].includes(q[4])&&St<3.5&&St>-.05};return $(0),$}function p(){for(let S of[s.units,s.labels])for(let b of[...S.children])S.remove(b),id(b);for(let S of d)r.remove(S);d=[],m=[],i.ambient=!1}function w(S){if(p(),S<0)return;let b=Vi[S];for(let[D,k,H,$,X]of b.dims||[])s.labels.add(bx(D,k,zr[$]||zr.dim,X)),H&&d.push(l("bs-lab mt-lab k-"+($||"dim"),H,[(D[0]+k[0])/2,Math.max(D[1],k[1])*.5+Math.min(D[1],k[1])*.5+.18,(D[2]+k[2])/2]));for(let D of b.vols||[])s.labels.add(Sx(D,zr[D[6]]||zr.dim));for(let[D,k,H,$,X]of b.labs||[])d.push(l("bs-lab mt-lab k-"+(X||"dim"),D,[k,H,$]));b.path&&s.labels.add(ed(b.path,.16,zr.route,{every:4,xray:.3}));for(let D of b.act||[])m.push(g(D));i.ambient=m.length>0,_=performance.now()/1e3}let _=0;i.onFrame((S,b)=>{let D=b-_;for(let k of m)k(D)});let y=S=>{let b=t.clientWidth/Math.max(1,t.clientHeight),D=b<1.3?Math.pow(1.3/b,.7):1;return{...S,r:S.r*D}};function M(S,b){i.setView(y(S),b),i.animUntil=performance.now()+1600}function R(S,b={}){if(o=S,a=-1,S>=0&&Jn[S].st.length===1){L(Jn[S].st[0],b);return}w(-1),b.fly!==!1&&M(S<0?i.VIEWS.ov:Jn[S].cam,b.instant),f()}function L(S,b={}){if(S<0){R(o,{fly:!1});return}o=Jn.findIndex(D=>D.st.includes(S)),a=S,w(S),b.fly!==!1&&M(Vi[S].cam,b.instant),f()}function F(S,b){c[S]=b,f()}return R(-1,{fly:!1}),{setPhase:R,setBeat:L,setLayer:F,overview:S=>R(-1,S||{}),get phase(){return o},get beat(){return a},phases:Jn.length,beats:Vi.length,restart(){_=performance.now()/1e3},dispose(){p(),r.lay.remove(),i.scene.remove(n),id(n)}}}var et={gnd:"#DDD6C8",pave:"#D8D1C3",pave2:"#CCC4B4",dirt:"#CDBDA2",rock:"#A7A094",rock2:"#938C80",rock3:"#7F796E",wall:"#D2CBBD",wall2:"#BFB7A8",wall3:"#A9A091",wood:"#A47F55",wood2:"#80643F",bamboo:"#BCA868",roof:"#9E9383",metal:"#7C8387",tank:"#8E6E4A",band:"#5E5248",water:"#86ABA8",line:"#3F8F9C",cloth:"#C9A24A",plant:"#93A37A",lamp:"#F6DBA0",win:"#F3CF86",rope:"#8B7350",abyss:"#6F6A62"},Ex=i=>i<5?["g","g"]:i<8?["g","g","g","g"]:i<12?["g","g","g","g","l",{k:"g",at:[i*.55,0,-i+1.3],ranged:!0}]:["g","g","g","g","g","g","g","l",{k:"g",at:[-i*.55,0,-i+1.3],ranged:!0},{k:"g",at:[i*.6,0,-i+1.6],ranged:!0}];function Nr(i,t,e){let n=e/2,s=.15,r=.16;i.box("gr",et.gnd,-70,-.45,-70,70,-s,70),i.box("st",et.pave,-n-.6,-s,-n-.6,n+.6,0,n+.6,"b");let o=.006;i.box("pt",et.line,-n,0,-n,n,o,-n+r),i.box("pt",et.line,-n,0,n-r,n,o,n),i.box("pt",et.line,-n,0,-n,-n+r,o,n),i.box("pt",et.line,n-r,0,-n,n,o,n);let a=Math.min(1.8,e*.14),c=.4,l=1,h=Math.min(4,e*.32),u=n+c/2,d=(v,g)=>i.wall("st",et.wall2,v,g,0,l,c);d([-n+a,-u],[-h/2,-u]),d([h/2,-u],[n-a,-u]),d([-n+a,u],[-h/2,u]),d([h/2,u],[n-a,u]),d([u,-n+a],[u,n-a]),d([-u,-n+a],[-u,n-a]),d([n-a,-u],[u,-n+a]),d([u,n-a],[n-a,u]),d([-n+a,u],[-u,n-a]),d([-u,-n+a],[-n+a,-u]);let f=(v,g,p,w,_)=>{i.box("st",et.wall,v,-s,g,p,_,w),i.box("st",et.roof,v-.3,_,g-.3,p+.3,_+.35,w+.3)},m=n+5;return f(-n-2,-m-8,-2.5,-m,8),f(2.5,-m-8,n+2,-m,6.5),f(-m-7,-n+1,-m,n-1,7),f(m,-n+1,m+7,n-1,7.5),{walk:{x0:-n+.5,x1:n-.5,z0:-n+.5,z1:n-.5},cam:{x0:-n-4,x1:n+4,z0:-n-4,z1:n+4,y1:14},start:[0,n-Math.min(2.2,n*.45)],spawn:[[0,-n-.2],[0,n+.2]],foes:Ex(n)}}function wx(i,t,e,n){let s=e/2,r=n/2,o=4,a=5,c=-8;i.box("gr",et.gnd,-80,c-.3,-80,80,c,80),i.box("st",et.pave,-s,c,-r,s,0,r+.01,"b"),i.wall("st",et.wall,[-s-a,-r-a/2],[s+a,-r-a/2],c,o,a,[{a:a+s-3,w:6,y0:-c,y1:-c+3.8}]),i.box("st",et.wall,s,c,-r,s+a,o,r),i.box("st",et.wall,-s-a,c,-r,-s,o,r);for(let[l,h]of[[[-s-a+.2,-r-a+.2],[s+a-.2,-r-a+.2]],[[s+a-.2,-r-a+.2],[s+a-.2,r]],[[-s-a+.2,-r-a+.2],[-s-a+.2,r]]])i.wall("st",et.wall2,l,h,o,o+1.1,.4);for(let l=0;l<=6;l++)i.box("st",et.metal,-3+l-.05,1.6,-r-2.6,-3+l+.05,3.8,-r-2.4);for(let l of[2.2,3])i.box("st",et.metal,-3,l,-r-2.6,3,l+.1,-r-2.4);i.rail("st",et.wall3,[[-s,r-.1],[-3,r-.1]],0,1.05,.6),i.rail("st",et.wall3,[[3,r-.1],[s,r-.1]],0,1.05,.6),i.stairs("st",et.pave2,0,r+14.4,c,-Math.PI/2,24,1/3,.6,6),i.stairs("st",et.pave2,-s+1.3,-r+5.4,0,-Math.PI/2,12,1/3,.45,2.2),i.beam("st",et.metal,[s-.4,1.7,-r+2],[s-.4,1.7,r-3],.42),i.beam("st",et.metal,[s-.4,2.6,-r+2],[s-.4,2.6,r-3],.3);for(let l=-r+3;l<r-3;l+=4)i.box("st",et.band,s-.7,1.4,l,s-.1,2.9,l+.25);return i.box("st",et.wood2,-s+.4,0,r-4.5,-s+1.6,1,r-2.5),i.box("st",et.wood,-s+.4,1,r-4.3,-s+1.4,1.8,r-3.2),{walk:{x0:-s+.6,x1:s-1,z0:-r+.6,z1:r-.6},cam:{x0:-s+.4,x1:s-.4,z0:-r+.4,z1:r+6,y1:14},start:[0,r-2.5],spawn:[[0,-r-1.5],[-2,-r-1.5],[2,-r-1.5]],foes:["g","g","g","g","g","l"],ally:!0,obst:[[-s,r-4.6,-s+1.7,r-2.4],[-s,-r,-s+2.5,-r+5.5]]}}function Tx(i,t,e,n){let s=e/2,r=n/2,o=3.2;i.box("gr",et.gnd,-80,-.3,-80,80,0,80),i.box("pt",et.dirt,-s-o,0,-r-o,s+o,.02,r+o);let a=(g,p)=>{let w=Math.hypot(p[0]-g[0],p[1]-g[1]),_=Math.round(w/.34);for(let y=0;y<=_;y++){let M=g[0]+(p[0]-g[0])*y/_,R=g[1]+(p[1]-g[1])*y/_;i.cyl("st",y%2?et.wood:et.wood2,M,R,0,2.3+y%3*.12,.16,6)}i.beam("st",et.wood2,[g[0],1.6,g[1]],[p[0],1.6,p[1]],.12)},c=s+o,l=r+o;a([-c,-l],[c,-l]),a([c,-l],[c,l]),a([-c,-l],[-c,l]),a([-c,l],[-3,l]),a([3,l],[c,l]);for(let g of[-s+1,-s+11,-s+21]){let p=g+8;for(let w of[g,p])for(let _ of[-l+.3,-r-.4])i.box("st",et.wood2,w-.12,0,_-.12,w+.12,2.9,_+.12);i.plate("st",et.roof,[[g-.3,3.1,-l],[p+.3,3.1,-l],[p+.3,2.6,-r-.1],[g-.3,2.6,-r-.1]],.12),i.box("st",et.wall3,g+.5,0,-l+.4,g+3,.9,-l+1.4),i.box("st",et.wood,g+4,0,-l+.5,p-.5,.5,-l+1.6)}let h=s+1.6,u=[[h-1.4,-3.4],[h+1.4,-3.4],[h-1.4,1.4],[h+1.4,1.4]];for(let[g,p]of u)i.cyl("st",et.bamboo,g,p,0,9.2,.09,6);for(let g of[2.4,4.8])i.beam("st",et.bamboo,[h-1.4,g,-3.4],[h+1.4,g,-3.4],.08),i.beam("st",et.bamboo,[h-1.4,g,1.4],[h+1.4,g,1.4],.08),i.beam("st",et.bamboo,[h-1.4,g,-3.4],[h-1.4,g,1.4],.08),i.beam("st",et.bamboo,[h+1.4,g,-3.4],[h+1.4,g,1.4],.08);i.beam("st",et.bamboo,[h-1.4,0,-3.4],[h+1.4,7,1.4],.07),i.beam("st",et.bamboo,[h+1.4,0,-3.4],[h-1.4,7,1.4],.07),i.box("st",et.wood,h-1.6,7,-3.6,h+1.6,7.2,1.6),i.rail("st",et.bamboo,[[h-1.6,-3.6],[h+1.6,-3.6],[h+1.6,1.6],[h-1.6,1.6]],7.2,1,.8,{w:.05,top:.08});let d=-s-1.7,f=3;i.cyl("st",et.wood2,d,f,0,8.5,.22,8),i.beam("st",et.wood,[d,6.5,f],[d+7,9.2,f-2],.2),i.beam("st",et.rope,[d+6.6,9,f-1.9],[d+6.6,4.2,f-1.9],.04),i.box("st",et.rock,d+5.9,3.2,f-2.6,d+7.3,4.2,f-1.2),i.box("st",et.rock,-s-2.8,0,-6,-s-.6,1.2,-2.5),i.box("st",et.rock2,-s-2.6,1.2,-5.4,-s-1,2,-3.2);let m=-s+5,v=4.2;i.cyl("st",et.tank,m,v,0,2.2,.95,14),i.frustum("st",et.tank,m,v,2.2,2.7,.95,.3,14);for(let g of[.4,1.1,1.8])i.cyl("st",et.band,m,v,g,g+.14,.99,14);i.box("gl",et.cloth,m+.7,1.3,v-.25,m+.99,1.7,v+.25);for(let g=0;g<5;g++)i.beam("st",et.wood,[s+.8+g*.05,.25+g%2*.32,5+g*.45],[s+.8+g*.05,.25+g%2*.32,9.5],.3);return{walk:{x0:-s+.5,x1:s-.5,z0:-r+.5,z1:r-.5},cam:{x0:-c+.5,x1:c-.5,z0:-l+.5,z1:l-.5,y1:14},start:[0,r-2.2],spawn:[[0,l-.5],[-s+1,-r-1],[s-1,-r-1]],obst:[[m-1.3,v-1.3,m+1.3,v+1.3]],foes:["g","g","g","g","g","g","l",{k:"g",at:[h-.7,7.2,-2.2],ranged:!0},{k:"g",at:[h+.6,7.2,.4],ranged:!0}]}}function Ax(i,t,e,n){let s=e/2,r=n/2,o=5.5,a=.8;i.box("st",et.rock2,-s-3,-.4,-r-3,s+3,0,r+9),i.box("pt",et.pave2,-s,0,-r,s,.02,r),i.wall("st",et.wall3,[-s-a/2,r+a/2],[s+a/2,r+a/2],0,o,a,[{a:s-1.6+a/2,w:3.2,y0:0,y1:3.2}]),i.wall("st",et.wall3,[-s-a/2,-r-a/2],[s+a/2,-r-a/2],0,o,a,[{a:s+4+a/2,w:2.4,y0:0,y1:3.2}]),i.box("st",et.wall3,s,0,-r-a,s+a,o,r+a),i.box("st",et.wall3,-s-a,0,-r-a,-s,o,r+a);let c=[[0,r+.4],[0,r+3],[1.4,r+5.6],[4,r+7.2]];for(let l=0;l<c.length-1;l++){let h=c[l],u=c[l+1];i.wall("st",et.wall2,[h[0]-1.8,h[1]],[u[0]-1.8,u[1]],0,3.4,.5),i.wall("st",et.wall2,[h[0]+1.8,h[1]],[u[0]+1.8,u[1]],0,3.4,.5),t.beam("ce",et.wall2,[(h[0]+u[0])/2,3.6,(h[1]+u[1])/2],[(h[0]+u[0])/2+.01,3.6,(h[1]+u[1])/2+.01],.1)}t.box("ce",et.wall2,-2.4,3.4,r+.4,6,3.8,r+8),i.box("st",et.wood2,4.1,0,-r-.2,4.3,3.1,-r+1.9),i.box("st",et.metal,3.9,1.4,-r-.1,4.1,1.6,-r+1.6);for(let l=-s+5;l<s;l+=5)for(let h of[-r,r])Math.abs(l)<2||(i.box("st",et.wall2,l-.35,0,h-.35,l+.35,o,h+.35),i.box("gl",et.lamp,l-.15,3.3,h+(h<0?.35:-.55),l+.15,3.7,h+(h<0?.55:-.35)));for(let l=-r+5;l<r;l+=5)for(let h of[-s,s])i.box("st",et.wall2,h-.35,0,l-.35,h+.35,o,l+.35),i.box("gl",et.lamp,h+(h<0?.35:-.55),3.3,l-.15,h+(h<0?.55:-.35),3.7,l+.15);t.box("ce",et.wall3,-s-a,o,-r-a,s+a,o+.6,r+a);for(let l=-s+4;l<s;l+=4)t.box("ce",et.wall2,l-.25,o-.5,-r,l+.25,o,r);return i.box("st",et.wood,-s+.5,0,-r+.5,-s+2.1,1.1,-r+1.7),i.box("st",et.wood2,s-2.2,0,r-1.9,s-.5,.9,r-.5),{walk:{x0:-s+.6,x1:s-.6,z0:-r+.6,z1:r-.6},cam:{x0:-s+.4,x1:s-.4,z0:-r+.4,z1:r-.4,y1:o-.4},start:[0,r-2.2],spawn:[[-s+1.2,-2],[s-1.2,-2],[4.2,-r+1]],foes:["g","g","g","g","g","l"],ceil:!0,obst:[[-s,-r,-s+2.2,-r+1.8],[s-2.3,r-2,s,r]]}}function Nc(i){let t=i;return()=>(t=(t*9301+49297)%233280,t/233280)}function il(i,t,e,n,s,r){let o=Nc(r);for(let a=0;a<t.length-1;a++){let c=t[a],l=t[a+1],h=Math.hypot(l[0]-c[0],l[1]-c[1]),u=Math.max(1,Math.round(h/6)),d=Math.atan2(l[1]-c[1],l[0]-c[0]),f=-(l[1]-c[1])/h,m=(l[0]-c[0])/h;for(let v=0;v<u;v++){let g=(v+.5)/u,p=c[0]+(l[0]-c[0])*g,w=c[1]+(l[1]-c[1])*g,_=e,y=0,M=n-2+o()*5;for(;_<M;){let R=Math.min(M-_,4+o()*6),L=(y%2?.6:-.4)*(1+o())+y*.35,F=s*(.75+o()*.4),S=f*(L-F/2),b=m*(L-F/2);i.ybox("st",[et.rock,et.rock2,et.rock3][(y+v)%3===2&&o()<.5?2:(y+v)%2],p+S+(o()-.5)*.8,_+R/2,w+b+(o()-.5)*.8,h/u*(.95+o()*.35),R,F,d+(o()-.5)*.18),_+=R,y++}}}}function Fr(i,t,e,n,s,r,o,a,c=!0){let l=Nc(a);i.box("st",et.rock,t,o-2.2,e,n,o,s);for(let h=0,u=o-2.2;u>r;h++){let d=.5+h*.45+l()*.5,f=Math.max(r,u-3-l()*3);i.box("st",h%2?et.rock:et.rock2,t-d*(.6+l()*.5),f,e-d*(.6+l()*.5),n+d*(.6+l()*.5),u,s+d*(.6+l()*.5)),u=f}for(let h=0;c&&h<4;h++){let u=h%2,d=.15+l()*.7,f=u?t+(n-t)*d:(h<2?t:n)-.3+l()*.1,m=u?(h<2?e:s)-.3+l()*.1:e+(s-e)*d,v=.35+l()*.35;i.box("st",et.rock2,f-v,o-.3,m-v,f+v,o+.25+l()*.3,m+v)}}function sd(i,t,e,n){let s=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.round(s/.45),o=(e[0]-t[0])/s,a=(e[1]-t[1])/s,c=Math.atan2(a,o);for(let l=0;l<r;l++){if(l%9===5)continue;let h=(l+.5)/r,u=Math.sin(h*Math.PI)*.45;i.ybox("st",l%2?et.wood:et.wood2,t[0]+(e[0]-t[0])*h,n-u-.05,t[1]+(e[1]-t[1])*h,.34,.08,1.5,c)}for(let l of[-.8,.8]){let h=-a*l,u=o*l,d=[t[0]+h,n+1,t[1]+u];i.cyl("st",et.wood2,t[0]+h,t[1]+u,n-.2,n+1.2,.08,6),i.cyl("st",et.wood2,e[0]+h,e[1]+u,n-.2,n+1.2,.08,6);for(let f=1;f<=8;f++){let m=f/8,v=[t[0]+(e[0]-t[0])*m+h,n+1-Math.sin(m*Math.PI)*.4,t[1]+(e[1]-t[1])*m+u];i.beam("st",et.rope,d,v,.05),d=v}}}var Le={B:-16,T:16,col:[-12,-30],top:9,big:[-3,-51,12,-26]};function rd(i,t){let{B:e,T:n}=Le,s=Nc(5);i.box("gr",et.abyss,-70,e-.4,-80,70,e,50);for(let m=0;m<14;m++){let v=-30+s()*60,g=-50+s()*70,p=.8+s()*1.6;Math.abs(v)<9&&g>-20||i.frustum("st",et.rock2,v,g,e,e+2+s()*5,p,p*.35,6)}il(i,[[-40,28],[-43,0],[-41,-30],[-34,-57]],e,n,8,3),il(i,[[-34,-57],[-10,-57],[-5,-53],[14,-53],[22,-56],[35,-55]],e,n,8,5),il(i,[[35,-55],[39,-30],[38,0],[35,28]],e,n,8,7),il(i,[[35,28],[10,31],[-14,31],[-40,28]],e,n,8,9),t.slab("ce",et.rock3,[[-48,36],[42,36],[44,-64],[-46,-64]],[[[-26,12],[20,16],[26,-38],[-20,-46]]],n,n+2.5),Fr(i,-7,13,7,24,e,4,21);for(let m=0;m<9;m++){let v=-6+m*1.5+s()*.4;i.box("st",et.plant,v-.3,4,13.1,v+.3,4.5+s()*.5,13.7)}i.plate("st",et.rock,[[-4,.02,4],[4,.02,4],[4,4.02,13],[-4,4.02,13]],.6);for(let m=0;m<9;m++){let v=4+m,g=(m+.5)*4/9-.4;i.box("st",et.rock2,-4.3,e,v,4.3,g,v+1)}Fr(i,-4,-4,4,4,e,0,11,!1),sd(i,[2,-4],[2,-12],0),Fr(i,0,-16,4,-12,e,.3,13,!1),sd(i,[2,-16],[4.5,-26],.3);let[r,o,a,c]=Le.big;Fr(i,r,o,a,c,e,0,17,!1);let l=(r+a)/2,h=o+5.6,u=o-1.5;i.box("st",et.wall,l-6,0,u,l+6,3.8,h),i.box("st",et.wood2,l-6.4,3.8,h-.2,l+6.4,4.1,h+.7),i.box("st",et.wall,l-5.6,4.1,u,l+5.6,7.4,h-.2),i.plate("st",et.roof,[[l-6.2,7.4,h+.6],[l+6.2,7.4,h+.6],[l+6.2,8.9,u+2],[l-6.2,8.9,u+2]],.25);for(let m of[-4.2,-2.3,2.3,4.2])i.box("gl",et.win,l+m-.55,1.3,h+.01,l+m+.55,2.6,h+.03),i.box("gl",et.win,l+m-.55,5,h-.19,l+m+.55,6.3,h-.17);i.box("st",et.wood2,l-1.4,0,h,l+1.4,3.1,h+.06),i.box("gl",et.lamp,l-1.1,0,h+.07,l+1.1,2.8,h+.09);for(let m of[-1.9,1.9])i.box("gl",et.lamp,l+m-.18,2.5,h+.1,l+m+.18,2.9,h+.4);let[d,f]=Le.col;i.cyl("st",et.rock2,d,f,e,Le.top-1.2,3.2,9),i.frustum("st",et.rock,d,f,Le.top-1.2,Le.top,3.2,3.6,9),i.box("st",et.metal,d-.8,Le.top,f-.8,d+.8,Le.top+1.6,f+.8),i.box("gl",et.lamp,d-.5,Le.top+1.6,f-.5,d+.5,Le.top+2.3,f+.5),Fr(i,-24,-46,-16,-38,e,-3,19),i.box("wt",et.water,31.5,e,-38,33,n-.5,-31),i.box("wt",et.water,22,e,-44,34,e+.25,-24)}function Rx(i,t){rd(i,t),i.cyl("st",et.tank,1.6,-1.6,0,1,.42,10),i.cyl("st",et.band,1.6,-1.6,.2,.3,.44,10),i.cyl("st",et.band,1.6,-1.6,.7,.8,.44,10);let[e,n]=Le.col;return{walk:{x0:-3.5,x1:3.5,z0:-3.5,z1:3.6},cam:{x0:-12,x1:12,z0:-14,z1:16,y1:14},gy:(s,r)=>r>4?Math.min(4,(r-4)*4/9):0,start:[-.6,3],spawn:[[2,-3.6]],foes:["g","g",{k:"g",at:[e+1.4,Le.top,n+.6],ranged:!0},{k:"g",at:[e-1,Le.top,n+1.6],ranged:!0}],obst:[[1.1,-2.1,2.1,-1.1]]}}function Cx(i,t,e,n){rd(i,t);let[s,r,o,a]=Le.big,c=(s+o)/2,l=(r+a)/2,h=(o-s)/2,u=(a-r)/2,d=r+5.6-l;i.box("st",et.rock2,s+.6,0,l+2,s+2.2,1.2,l+4.2),i.box("st",et.rock,o-2,0,l-2,o-.6,.9,l);let[f,m]=Le.col;return{off:[c,l],walk:{x0:-h+.6,x1:h-.6,z0:d+.6,z1:u-.5},cam:{x0:-h-7,x1:h+7,z0:d+.4,z1:u+9,y1:14},start:[-1.5,u-1.6],spawn:[[0,d+.8],[-1.5,d+.8],[1.5,d+.8]],foes:["g","g","g",{k:"g",at:[f-c+1.4,Le.top,m-l+.6],ranged:!0},{k:"g",at:[f-c-1,Le.top,m-l+1.6],ranged:!0}],obst:[[-h+.6,2,-h+2.3,4.3],[h-2.1,-2.1,h-.6,.1]],swap:e>n}}function Ix(i,t,e,n){let s=e/2,r=n/2,o=9,a=4.5,c=2.5,l=.5;i.box("gr",et.gnd,-80,-.5,-80,80,-.3,80),i.box("wt",et.water,-80,-1.4,-r-40,80,-1.1,-r-2),i.box("st",et.pave2,-s-.6,-.3,-r-.6,s+.6,0,r+.6),i.wall("st",et.wall2,[-s-l/2,r+l/2],[s+l/2,r+l/2],0,o,l,[{a:s-3+l/2,w:6,y0:0,y1:5}]),i.wall("st",et.wall2,[-s-l/2,-r-l/2],[s+l/2,-r-l/2],0,o,l,[{a:4,w:1.6,y0:a,y1:a+2.4}]),i.wall("st",et.wall2,[s+l/2,-r-l/2],[s+l/2,r+l/2],0,o,l,[{a:6,w:1.6,y0:a,y1:a+2.4}]),i.wall("st",et.wall2,[-s-l/2,-r-l/2],[-s-l/2,r+l/2],0,o,l,[{a:13,w:1.8,y0:0,y1:2.6}]),i.box("st",et.wood2,-s,a-.3,-r,s,a,-r+c),i.box("st",et.wood2,s-c,a-.3,-r+c,s,a,r),i.box("st",et.wood2,-s,a-.3,-r+c,-s+c,a,r),i.rail("st",et.wood,[[-s+c,r],[-s+c,-r+c],[s-c,-r+c],[s-c,r]],a,1.05,.9,{w:.06});let h=[];for(let u=-s+c;u<=s-c+.01;u+=5)h.push([u,-r+c]);for(let u=-r+c+5;u<r;u+=5)h.push([-s+c,u]),h.push([s-c,u]);for(let[u,d]of h)i.box("st",et.wood2,u-.18,0,d-.18,u+.18,a-.3,d+.18);i.stairs("st",et.wood,-s+c+5.6,r-.8,0,Math.PI,15,.3,.37,1.4),t.slab("ce",et.roof,[[-s-l,-r-l],[s+l,-r-l],[s+l,r+l],[-s-l,r+l]],[[[4,-5],[9.5,-5],[9.5,0],[4,0]]],o,o+.4);for(let u=-s+3;u<s;u+=3)t.box("ce",et.wood2,u-.15,o-.6,-r,u+.15,o,r);for(let u=0;u<4;u++)i.beam("st",et.wood,[-s+.5,.3+u%2*.4,-r+1+u*.45],[-s+.5+5.5,.3+u%2*.4,-r+1+u*.45],.38);return i.box("st",et.rock,s-2.2,0,-r+.5,s-.5,1.1,-r+2.1),i.box("st",et.rock2,s-2,1.1,-r+.7,s-.9,1.8,-r+1.6),i.box("st",et.wall3,s-2.3,0,3,s-.4,1.3,6.5),{walk:{x0:-s+.6,x1:s-.6,z0:-r+.6,z1:r-.6},cam:{x0:-s+.4,x1:s-.4,z0:-r+.4,z1:r-.4,y1:o-.5},start:[0,r-2.5],spawn:[[-s+c+1,-r+c+1],[s-c-1,-r+c+1],[0,r-.8]],ceil:!0,foes:["g","g","g","g","g","l",{k:"g",at:[s-1.2,a,-1.5],ranged:!0},{k:"g",at:[-5,a,-r+1.2],ranged:!0}],obst:[[-s,-r,-s+6.3,-r+2.9],[s-2.4,-r,s,-r+2.3],[s-2.5,2.8,s,6.7],[-s+c-.5,r-1.6,-s+c+6,r],...h.map(([u,d])=>[u-.3,d-.3,u+.3,d+.3])]}}function Px(i,t,e,n){let s=Math.max(e,n)/2,r=Math.min(e,n)/2,o=3;i.box("gr",et.rock3,-80,-4.3,-80,80,-4,80),i.box("wt",et.water,-80,-1.3,r,80,-1,80),i.box("st",et.pave2,-s,-4,-r,s,0,r),i.box("st",et.pave,-s-10,0,-r-16,s+10,o,-r),i.box("st",et.wall3,-s-10,-4,r,-s,.6,r+.5),i.box("st",et.wall3,s,-4,r,s+10,.6,r+.5),i.rail("st",et.wall3,[[-s-8,-r-.1],[s+8,-r-.1]],o,1.05,1),i.stairs("st",et.pave2,-s+1,-r+3.5,0,-Math.PI/2,10,.3,.35,1.6),i.box("st",et.wall3,-s,0,r-.35,s,.35,r);for(let l of[-4,0,4])i.cyl("st",et.wood2,l,r-.9,0,.8,.18,8);let a=3.6,c=-1.6;i.cyl("st",et.tank,a,c,0,2.4,1,14),i.frustum("st",et.tank,a,c,2.4,2.9,1,.3,14);for(let l of[.4,1.2,2])i.cyl("st",et.band,a,c,l,l+.14,1.04,14);return i.beam("st",et.metal,[a+1,1.6,c],[a+1.8,1.6,c],.14),i.box("gl",et.cloth,a-.25,1.5,c+.98,a+.25,1.9,c+1.06),i.box("st",et.wood,-s+2.4,0,-r+.3,-s+4,.9,-r+1.5),{walk:{x0:-s+.5,x1:s-.5,z0:-r+.5,z1:r-.6},cam:{x0:-s-3,x1:s+3,z0:-r+.4,z1:r+7,y1:14},start:[-1.5,r-1.6],spawn:[[-s+1.2,-r+.8],[s-.8,0]],foes:["g","g","g"],obst:[[a-1.3,c-1.3,a+1.9,c+1.3],[-s,-r,-s+1.9,-r+3.7],[-s+2.2,-r,-s+4.2,-r+1.7]],swap:n>e}}function Lx(i,t,e,n){let s=Math.min(e,n)/2,r=Math.max(e,n)/2,o=8,a=3.5,c=.6,l=s+a,h=r+a;i.box("gr",et.gnd,-90,-.6,-90,90,-.3,90),i.box("st",et.pave,-l-c,-.3,-h-c,l+c,0,h+c),i.box("pt",et.pave2,-s,0,-r,s,.02,r);let u=f=>{let m=[];for(let v=4;v<f-3;v+=8)m.push({a:v,w:1.8,y0:0,y1:2.8});return m};i.wall("st",et.wall,[-l-c/2,-h-c/2],[l+c/2,-h-c/2],0,o,c,u(2*l)),i.wall("st",et.wall,[-l-c/2,h+c/2],[l+c/2,h+c/2],0,o,c,u(2*l)),i.wall("st",et.wall,[l+c/2,-h-c/2],[l+c/2,h+c/2],0,o,c,u(2*h)),i.wall("st",et.wall,[-l-c/2,-h-c/2],[-l-c/2,h+c/2],0,o,c,u(2*h));let d=[];for(let f=-s;f<=s+.01;f+=5)d.push([f,-r]),d.push([f,r]);for(let f=-r+5;f<r-.01;f+=5)d.push([-s,f]),d.push([s,f]);for(let[f,m]of d)i.cyl("st",et.wall2,f,m,0,o,.36,10),i.box("st",et.wall3,f-.5,0,m-.5,f+.5,.4,m+.5);for(let[f,m]of[[-s+2,-r+2],[s-2,-r+2],[-s+2,r-2],[s-2,r-2]])i.box("st",et.wall3,f-1.2,0,m-1.2,f+1.2,.5,m+1.2),i.box("st",et.plant,f-1,.5,m-1,f+1,.75,m+1);t.slab("ce",et.roof,[[-l-c,-h-c],[l+c,-h-c],[l+c,h+c],[-l-c,h+c]],[[[-s+1,-r+1],[s-1,-r+1],[s-1,r-1],[-s+1,r-1]]],o,o+.5);for(let f=-r+1;f<=r-1;f+=6)t.box("ce",et.wall2,-s+1,o,f-.2,s-1,o+.5,f+.2);for(let f of[-s/3,s/3])t.box("ce",et.wall2,f-.2,o,-r+1,f+.2,o+.5,r-1);return{walk:{x0:-s+.9,x1:s-.9,z0:-r+.9,z1:r-.9},cam:{x0:-l+.4,x1:l-.4,z0:-h+.4,z1:h-.4,y1:o-.5},start:[0,r-7],spawn:[[0,-4]],foes:[],boss:!0,ceil:!0,swap:e>n,obst:[[-s,-r,-s+3.3,-r+3.3],[s-3.3,-r,s,-r+3.3],[-s,r-3.3,-s+3.3,r],[s-3.3,r-3.3,s,r]]}}var Dx={t0:Nr,t1:Nr,t2:Nr,t3:Nr,tx:wx,camp:Tx,under:Ax,mineA:Rx,mineB:Cx,wh:Ix,pl:Px,boss:Lx};function od(i,t={}){var nt;let e=(nt=t.mobile)!=null?nt:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Cs({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),n.shadowMap.enabled=!0,n.shadowMap.type=ys,n.toneMapping=vs,n.domElement.style.cssText="display:block;width:100%;height:100%;outline:none",i.appendChild(n.domElement);let s=new Si,r=new Ce(56,16/9,.1,600);s.add(new Ri("#F2F4F6","#BDB3A2",1.75));let o=new Ci("#FFF2DF",2.2),a=new N(-.45,.8,.38).normalize();o.castShadow=!0;let c=e?1024:2048;o.shadow.mapSize.set(c,c),o.shadow.bias=-5e-4,o.shadow.normalBias=.04,s.add(o,o.target);let l=E=>new cn({vertexColors:!0,roughness:.9,metalness:0,...E}),h={st:l({}),gr:l({roughness:.95}),pt:l({polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),wt:l({roughness:.25,transparent:!0,opacity:.62,depthWrite:!1}),gl:new we({vertexColors:!0}),ce:l({side:ze}),ln:new we({color:et.line,transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4})},u=new le,d=new le,f=new le,m=new le,v=new le;s.add(u,d,f,m,v);let g=(E,x)=>{for(let[A,I]of Object.entries(E)){let U=new Me;U.setAttribute("position",new ce(I.p,3)),U.setAttribute("normal",new ce(I.n,3)),U.setAttribute("color",new ce(I.c,3)),U.computeBoundingSphere();let B=new jt(U,h[A]||h.st);B.castShadow=A==="st",B.receiveShadow=A!=="wt"&&A!=="gl",A==="wt"&&(B.renderOrder=3),x.add(B)}},p=E=>{for(let x of[...E.children])E.remove(x),x.traverse(A=>{A.geometry&&A.geometry.dispose()})},w=(E,x,A)=>{let I=new li,U=1.2,B=.7,V=.14,W=(st,dt,gt,ct)=>{let ht=Math.hypot(gt-st,ct-dt),vt=(gt-st)/ht,It=(ct-dt)/ht;for(let Wt=0;Wt<ht;Wt+=U+B){let Xt=Math.min(ht,Wt+U);I.ybox("ln","#ffffff",st+vt*(Wt+Xt)/2,A+.01,dt+It*(Wt+Xt)/2,Xt-Wt,.02,V,Math.atan2(It,vt))}};W(-E,-x,E,-x),W(E,-x,E,x),W(E,x,-E,x),W(-E,x,-E,-x);let Y=I.out().ln,j=new Me;j.setAttribute("position",new ce(Y.p,3)),j.setAttribute("normal",new ce(Y.n,3));let z=new jt(j,h.ln);z.renderOrder=2,f.add(z)},_=null,y=[],M=null,R="tps",L=0,F=1,S=0,b=!1,D=[],k=[],H={pos:new N,look:new N,yaw:Math.PI,ok:!1},$=(E,x,A,I,U={})=>{let B=el(E);if(U.scale&&B.root.scale.setScalar(U.scale),x==="player"||x==="ally"){let Y=new le;Y.position.y=-B.H*.34,Y.rotation.x=-1.15,B.armR.add(Y);let j=new cn({color:x==="player"?"#ECE7DC":"#D3E2E4",roughness:.35,metalness:.4}),z=new jt(new Ve(.035,.82,.075),j);z.position.y=-.47,z.castShadow=!0,Y.add(z);let st=new jt(new Ve(.05,.04,.2),new cn({color:"#5E5248"}));st.position.y=-.06,Y.add(st)}m.add(B.root);let V=[];B.root.traverse(Y=>{Y.isMesh&&Y!==B.ring&&Y.material&&(Y.material.transparent=!0,V.push(Y.material))});let W={f:B,kind:E,role:x,mats:V,fade:1,rIn:2.7+Math.random()*1.1,rOut:5.2+Math.random()*2.4,p:new N(A,U.y||0,I),yaw:Math.PI,st:"idle",t:0,hp:3,cd:Math.random(),slot:Math.random()*6.28,r:2.7+Math.random()*1.1,dead:!1,home:U.at,sink:0,combo:0,big:!!U.scale,rate:2.6+Math.random()*.8,dodgeAt:0};return y.push(W),W};function X(E){p(u),p(d),p(f),p(m),p(v),y=[],D.length=0;let x=E.id,A=E.w,I=E.d,U=new li,B=new li;_=(Dx[x]||Nr)(U,B,A,I),_.w=A,_.d=I,_.id=x,b=!!_.swap;let V=_.off||[0,0];u.position.set(-V[0],0,-V[1]),d.position.copy(u.position),g(U.out(),u),g(B.out(),d),d.visible=R!=="top",/^t\d$/.test(x)||w(b?I/2:A/2,b?A/2:I/2,_.fy||.02);let W=Math.max(A,I)/2+12,Y=o.shadow.camera;if(o.position.copy(a).multiplyScalar(120),o.target.position.set(0,0,0),Object.assign(Y,{left:-W,right:W,bottom:-W,top:W,near:1,far:260}),Y.updateProjectionMatrix(),M=$("p","player",_.start[0],_.start[1]),M.yaw=Math.PI,_.ally&&$("t","ally",_.start[0]-2,_.start[1]-1),_.foes.forEach((j,z)=>{let st=typeof j=="string"?{k:j}:j,dt=z*2.39996+.6,gt=z<4?3:5.6+z%3*.9,ct=_.walk,ht=st.at?st.at[0]:(ct.x0+ct.x1)/2+Math.sin(dt)*Math.min(gt,(ct.x1-ct.x0)*.42),vt=st.at?st.at[2]:ct.z0+(ct.z1-ct.z0)*.38+Math.cos(dt)*Math.min(gt*.8,(ct.z1-ct.z0)*.32),It=$(st.k,st.ranged?"ranged":"melee",ht,vt,{y:st.at?st.at[1]:0,at:st.at});st.k==="l"&&(It.hp=5,It.rIn=2.4)}),_.boss){let j=$("l","boss",0,-6,{scale:1.75});j.hp=1e9,j.r=3.4}for(let j of y)j.f.root.position.copy(j.p),j.f.root.rotation.y=j.yaw;L=0,F=1.2,H.ok=!1,qt(0),Ot(0),At(),zt()}let Z=new N,q=new N,Q=(E,x)=>Math.hypot(E.p.x-x.p.x,E.p.z-x.p.z),mt=(E,x,A,I=1)=>{let B=Math.atan2(x-E.p.x,A-E.p.z)-E.yaw;for(;B>Math.PI;)B-=Math.PI*2;for(;B<-Math.PI;)B+=Math.PI*2;E.yaw+=B*Math.min(1,I)},_t=(E,x,A,I,U)=>{let B=x-E.p.x,V=A-E.p.z,W=Math.hypot(B,V);if(W<.05)return 0;let Y=Math.min(W,I*U);return E.p.x+=B/W*Y,E.p.z+=V/W*Y,W},bt=E=>{let x=_.walk;E.p.x=Math.min(x.x1,Math.max(x.x0,E.p.x)),E.p.z=Math.min(x.z1,Math.max(x.z0,E.p.z));for(let[A,I,U,B]of _.obst||[]){let V=E.big?.9:.35;if(E.p.x>A-V&&E.p.x<U+V&&E.p.z>I-V&&E.p.z<B+V){let W=E.p.x-(A-V),Y=U+V-E.p.x,j=E.p.z-(I-V),z=B+V-E.p.z,st=Math.min(W,Y,j,z);st===W?E.p.x=A-V:st===Y?E.p.x=U+V:st===j?E.p.z=I-V:E.p.z=B+V}}},yt=(E,x,A)=>{v.add(E),D.push({o:E,t:0,dur:x,at:A})},St=(E,x)=>{let A=ju(x?.55:.32);A.position.set(E.p.x,E.p.y+(E.big?2.3:1.25),E.p.z),yt(A,.28,A.userData.at)},Vt=(E,x,A=.7)=>{if(!(E.dead||E.role==="ranged")&&(St(E),E.role!=="boss")){if(q.set(E.p.x-x.p.x,0,E.p.z-x.p.z).normalize(),E.p.addScaledVector(q,A),bt(E),E.role==="player"||E.role==="ally"){E.st="hit",E.t=0,E.dodgeAt=0;return}E.hp-=1,E.hp<=0?(E.dead=!0,E.st="down",E.t=0):(E.st="hit",E.t=0)}},Nt=(E,x)=>{let A=E.distanceTo(x),I=new jt(new bn(.03,.03,A,5),new we({color:"#F3D58A",transparent:!0,opacity:.9}));I.position.copy(E).add(x).multiplyScalar(.5),I.quaternion.setFromUnitVectors(new N(0,1,0),q.copy(x).sub(E).normalize()),yt(I,.3,U=>{I.material.opacity=.9*(1-U)})},ut=(E,x,A)=>{E.dodgeAt=L+A,E.dodgeFrom=x};function ft(E,x,A){if(E.t+=x,E.cd-=x,E.dodgeAt&&L>=E.dodgeAt){let V=E.dodgeFrom;E.dodgeAt=0,E.st!=="hit"&&V&&!V.dead&&Mt(E,V)}if(E.st==="hit"){E.f.pose("stumble",L),E.t>.32&&(E.st="idle");return}if(E.st==="dodge"){E.p.addScaledVector(E.dv,x*4.2),bt(E),E.f.pose("dodge",L),E.t>.42&&(E.st="idle",E.cd=.15);return}let I=E.tgt&&!E.tgt.dead?E.tgt:null;if(!I||E.t>3){let V=null,W=1e9;for(let Y of A){if(Y.dead||Y.role==="ranged")continue;let j=Q(E,Y)+(E.role==="ally"&&Y===M.tgt?4:0);j<W&&(W=j,V=Y)}V!==E.tgt&&(E.t=0),I=E.tgt=V}if(E.st==="atk"){let V=E.t/.42;E.f.pose("swing",V*.45-.225),I&&mt(E,I.p.x,I.p.z,x*6),!E.hit&&V>.45&&I&&Q(E,I)<(I.big?3.4:2.25)&&(E.hit=!0,Vt(I,E,I.big?0:.55)),V>=1&&(E.combo++,E.combo<3&&I&&!I.dead&&Q(E,I)<(I.big?3.4:2.3)?(E.t=0,E.hit=!1):(E.st="idle",E.cd=E.combo>=3?.55:.2,E.back=I&&I.big?1:0));return}if(!I){let V=_.walk,W=_t(E,(V.x0+V.x1)/2,(V.z0+V.z1)*.5+(V.z1-V.z0)*.15,1.6,x);E.f.pose(W>.2?"walk":"idle",L);return}let U=Q(E,I),B=I.big?3:1.75;if(E.back>0){E.back-=x,q.set(E.p.x-I.p.x,0,E.p.z-I.p.z).normalize(),E.p.addScaledVector(q,x*3.4),bt(E),mt(E,I.p.x,I.p.z,x*8),E.f.pose("run",L);return}if(mt(E,I.p.x,I.p.z,x*8),U>B){_t(E,I.p.x,I.p.z,E.role==="player"?4.8:4.2,x),bt(E),E.f.pose("run",L);return}if(E.cd<=0){E.st="atk",E.t=0,E.hit=!1,E.combo=0;return}E.f.pose("idle",L)}function Mt(E,x){q.set(E.p.x-x.p.x,0,E.p.z-x.p.z).normalize();let A=new N(-q.z,0,q.x),I=_.walk,U=B=>{let V=E.p.x+A.x*B*2,W=E.p.z+A.z*B*2;return Math.min(V-I.x0,I.x1-V,W-I.z0,I.z1-W)};E.dv=A.multiplyScalar(U(1)>=U(-1)?1:-1).addScaledVector(q,.35).normalize(),E.st="dodge",E.t=0}function Tt(E,x){if(E.t+=x,E.dead){if(E.f.pose("down",L),E.t>2.4&&(E.sink=Math.min(1,E.sink+x*1.6),E.p.y=-E.sink*1.2),E.t>3.3){let V=_.spawn[Math.floor(Math.random()*_.spawn.length)];E.p.set(V[0],0,V[1]),E.dead=!1,E.hp=E.kind==="l"?5:3,E.st="idle",E.t=0,E.sink=0,E.tgt=null}return}let A=E.role==="ranged"?M:E.tgt&&!E.tgt.dead?E.tgt:E.tgt=Pt(E);if(E.role==="ranged"){mt(E,M.p.x,M.p.z,x*4),E.cd-=x,E.cd<.9&&E.cd>.1?E.f.pose("aim",L):E.f.pose("look",L),E.cd<=0&&(E.cd=3+Math.random()*1.4,E.f.pose("shoot",L),Nt(new N(E.p.x,E.p.y+1.35,E.p.z),new N(M.p.x+(Math.random()-.5)*.8,1.1,M.p.z+(Math.random()-.5)*.8)));return}if(E.st==="hit"){E.f.pose("stumble",L),E.t>.38&&(E.st="idle",E.t=0);return}if(E.st==="wind"){mt(E,A.p.x,A.p.z,x*6),E.f.pose("charge",0),E.t>.55&&(E.st="lunge",E.t=0,E.hit=!1);return}if(E.st==="lunge"){q.set(Math.sin(E.yaw),0,Math.cos(E.yaw)),E.p.addScaledVector(q,x*3.4),bt(E),E.f.pose("stab",0),!E.hit&&E.t>.14&&Q(E,A)<1.7&&(E.hit=!0,A.st!=="dodge"&&Vt(A,E,.5)),E.t>.32&&(E.st="rec",E.t=0);return}if(E.st==="rec"){E.f.pose("idle",L),E.t>.45&&(E.st="idle",E.t=0);return}E.slot+=x*.18*(E.kind==="l"?-1:1);let I=A.p.x+Math.sin(E.slot)*E.r,U=A.p.z+Math.cos(E.slot)*E.r,B=_t(E,I,U,2.1,x);bt(E),mt(E,A.p.x,A.p.z,x*5),E.f.pose(B>.3?"walk":"idle",L*.8)}function Pt(E){let x=y.filter(A=>(A.role==="player"||A.role==="ally")&&!A.dead);return x.length<2||Math.random()<.7?M:x.find(A=>A.role==="ally")}function Kt(E,x){if(E.t+=x,mt(E,M.p.x,M.p.z,x*(E.st==="wind"?1.2:2.6)),E.st==="wind"){if(E.f.pose("slam",0),E.t>.85){E.st="hitg",E.t=0;let I=td(5);q.set(Math.sin(E.yaw),0,Math.cos(E.yaw)),I.position.set(E.p.x+q.x*2.4,.06,E.p.z+q.z*2.4),yt(I,.7,I.userData.at),S=.35,Math.hypot(M.p.x-I.position.x,M.p.z-I.position.z)<4&&M.st!=="dodge"&&Vt(M,E,1.6)}return}if(E.st==="hitg"){E.f.pose("charge",0),E.t>.7&&(E.st="idle",E.t=0,E.cd=1.4+Math.random());return}if(E.st==="dash"){q.set(Math.sin(E.yaw),0,Math.cos(E.yaw)),E.p.addScaledVector(q,x*9),bt(E),E.f.pose("charge",L),Q(E,M)<1.8&&M.st!=="dodge"&&!E.hit&&(E.hit=!0,Vt(M,E,2.2)),E.t>.6&&(E.st="idle",E.t=0,E.cd=1.2);return}E.cd-=x;let A=Q(E,M);if(E.cd<=0){A<4.6?(E.st="wind",E.t=0,(M.st!=="atk"||Math.random()<.5)&&ut(M,E,.42)):A<14&&(E.st="dash",E.t=0,E.hit=!1,ut(M,E,.18));return}A>3.6?(_t(E,M.p.x,M.p.z,2.2,x),bt(E),E.f.pose("walk",L*.7)):E.f.pose("idle",L)}function be(E){L+=E;let x=y.filter(I=>I.role==="melee"||I.role==="boss"||I.role==="ranged");for(let I of y)(I.role==="player"||I.role==="ally")&&ft(I,E,x);for(let I of y)(I.role==="melee"||I.role==="ranged")&&Tt(I,E);for(let I of y)I.role==="boss"&&Kt(I,E);if(y.filter(I=>I.role==="melee"&&!I.dead&&I.tgt).sort((I,U)=>Q(I,I.tgt)-Q(U,U.tgt)).forEach((I,U)=>{I.r=U<4?I.rIn:I.rOut}),F-=E,F<=0){let I=y.filter(U=>U.role==="melee"&&!U.dead&&U.st==="idle"&&U.tgt&&Q(U,U.tgt)<4.2);if(I.length){let U=I[Math.floor(Math.random()*I.length)];U.st="wind",U.t=0,U.tgt===M&&M.st!=="atk"&&Math.random()<.75&&ut(M,U,.3)}F=1.1+Math.random()*.9}for(let I=0;I<y.length;I++)for(let U=I+1;U<y.length;U++){let B=y[I],V=y[U];if(B.dead||V.dead||B.role==="ranged"||V.role==="ranged")continue;let W=(B.big?1:.42)+(V.big?1:.42),Y=V.p.x-B.p.x,j=V.p.z-B.p.z,z=Math.hypot(Y,j);if(z>1e-4&&z<W){let st=(W-z)/2/z;B.p.x-=Y*st,B.p.z-=j*st,V.p.x+=Y*st,V.p.z+=j*st,bt(B),bt(V)}}for(let I of y)I.f.root.position.copy(I.p),I.f.root.rotation.y=I.yaw;for(let I=D.length-1;I>=0;I--){let U=D[I];U.t+=E;let B=Math.min(1,U.t/U.dur);U.at&&U.at(B),B>=1&&(v.remove(U.o),U.o.geometry&&U.o.geometry.dispose(),U.o.material&&U.o.material.dispose(),D.splice(I,1))}}let O={D:5.2,H:2.75,side:.6,ahead:2.6,lookY:1.05};function qt(E){if(!_)return;if(R==="top"){let Y=Math.max(_.w,_.d)*(r.aspect<1.2?.85:.62)+4,j=Y/Math.tan(Oa.degToRad(r.fov/2)),z=Oa.degToRad(57);r.position.set(0,Math.sin(z)*j,Math.cos(z)*j),r.lookAt(0,0,0);return}let x=M.tgt&&!M.tgt.dead?M.tgt:null,A=_.walk,I=x?Math.atan2(x.p.x-M.p.x,x.p.z-M.p.z):Math.atan2((A.x0+A.x1)/2-M.p.x,(A.z0+A.z1)/2-M.p.z);x&&Q(M,x)<.8&&(I=H.yaw),H.ok||(H.yaw=I);let U=I-H.yaw;for(;U>Math.PI;)U-=Math.PI*2;for(;U<-Math.PI;)U+=Math.PI*2;H.yaw+=U*Math.min(1,E*1.8);let B=Math.sin(H.yaw),V=Math.cos(H.yaw);Z.set(M.p.x-B*O.D+V*O.side,M.p.y+O.H,M.p.z-V*O.D-B*O.side);let W=_.cam;if(Z.x=Math.min(W.x1,Math.max(W.x0,Z.x)),Z.z=Math.min(W.z1,Math.max(W.z0,Z.z)),_.gy&&(Z.y=Math.max(Z.y,_.gy(Z.x,Z.z)+1.4)),Z.y=Math.min(W.y1,Z.y),q.set(M.p.x+B*O.ahead,M.p.y+O.lookY,M.p.z+V*O.ahead),!H.ok)H.pos.copy(Z),H.look.copy(q),H.ok=!0;else{let Y=Math.min(1,E*4.5);H.pos.lerp(Z,Y),H.look.lerp(q,Math.min(1,E*5))}r.position.copy(H.pos),S>0&&(r.position.y+=(Math.random()-.5)*S*.4,r.position.x+=(Math.random()-.5)*S*.4),r.lookAt(H.look)}let Ot=E=>{if(!M)return;let x=r.position,A=M.p.x-x.x,I=M.p.z-x.z,U=A*A+I*I||1;for(let B of y){if(B===M)continue;let V=1;if(R==="tps"){let W=B.p.x-x.x,Y=B.p.z-x.z,j=(W*A+Y*I)/U,z=Math.abs(W*I-Y*A)/Math.sqrt(U),st=B.big?1.6:.8;(j>-.05&&j<.97&&z<st||Math.hypot(W,Y)<(B.big?2.4:1.4))&&(V=.3)}if(!(Math.abs(V-B.fade)<.01)){B.fade+=(V-B.fade)*Math.min(1,E?E*9:1);for(let W of B.mats)W.opacity=B.fade,W.depthWrite=B.fade>.9}}},At=()=>n.render(s,r),lt=(E,x)=>b?[-x,E]:[E,x],zt=()=>{if(!k.length||!_)return;let E=y.map(A=>{let[I,U]=lt(A.p.x,A.p.z);return{x:I,z:U,role:A.role,dead:A.dead}}),x=null;if(R==="tps"){let[A,I]=lt(r.position.x,r.position.z),[U,B]=lt(H.look.x,H.look.z);x={x:A,z:I,a:Math.atan2(B-I,U-A)}}for(let A of k)A(E,x)},Rt=!0,pt=!0,Yt=performance.now(),kt=!1,C=0,T=E=>{if(!pt)return;requestAnimationFrame(T);let x=Math.max(0,Math.min(.05,(E-Yt)/1e3));Yt=E,!(kt||!Rt||document.hidden||!_)&&(be(x),S=Math.max(0,S-x),qt(x),Ot(x),At(),C++%3===0&&zt())};requestAnimationFrame(T);let tt=()=>{let E=i.clientWidth||800,x=i.clientHeight||450;n.setSize(E,x,!1),r.aspect=E/x,r.fov=r.aspect<1.2?68:56,r.updateProjectionMatrix(),_&&(qt(1),At())},at=new ResizeObserver(tt);at.observe(i),tt();let it=new IntersectionObserver(E=>{Rt=E[0].isIntersecting,Yt=performance.now()});return it.observe(i),{renderer:n,scene:s,camera:r,get info(){return{calls:n.info.render.calls,tris:n.info.render.triangles,ents:y.length}},show:X,get spec(){return _&&{id:_.id,w:_.w,d:_.d}},get mode_(){return R},mode(E){R=E,d.visible=E!=="top",H.ok=!1,qt(0),Ot(0),At(),zt()},onTick(E){k.push(E)},hold(E){kt=E,Yt=performance.now()},step(E){be(E),qt(E),Ot(E),At(),zt()},run(E,x){for(let A=0;A<x;A++)be(E),qt(E);return Ot(E),At(),zt(),y.map(A=>({role:A.role,st:A.st,dead:A.dead,hp:A.hp,x:+A.p.x.toFixed(2),y:+A.p.y.toFixed(2),z:+A.p.z.toFixed(2)}))},dispose(){pt=!1,at.disconnect(),it.disconnect(),p(u),p(d),p(f),p(m),p(v),n.forceContextLoss(),n.dispose(),n.domElement.remove()}}}function ad(i,t={}){var M;let e=(M=t.i)!=null?M:0,n=t.mode||"side",s=0,r=tl(i,{view:Vi[e].cam,preserve:t.preserve,shadowSize:2048,maxDpr:1.75}),o=nl(r,i,{names:[],phaseNames:[]});o.setLayer("marks",!1);let a=r.scene.getObjectByName("show").children[0],c=r.camera,l=r.controls,h=new N,u=new N,d=new N,f=new N,m=new N,v={D:4.4,H:2,side:.45,ahead:2.4,lookY:1.35},g=!1,p=()=>{c.fov=n==="tps"?c.aspect<1.2?66:56:32,c.updateProjectionMatrix()};function w(R){let L=a.children[s];if(!L)return;let F=L.rotation.y,S=Math.sin(F),b=Math.cos(F),D=L.position;h.set(D.x-S*v.D+b*v.side,D.y+v.H,D.z-b*v.D-S*v.side),u.set(D.x+S*v.ahead,D.y+v.lookY,D.z+b*v.ahead),!g||d.distanceTo(h)>3.5?(d.copy(h),f.copy(u),g=!0):(d.lerp(h,Math.min(1,R*4)),f.lerp(u,Math.min(1,R*5))),m.copy(d).sub(f);let k=Math.max(.5,m.length());l.set({th:Math.atan2(m.x,m.z),ph:Math.acos(Math.max(-1,Math.min(1,m.y/k))),r:k,t:f},!0)}r.onFrame(R=>{n==="tps"&&w(R)});let _=new ResizeObserver(()=>p());_.observe(i);function y(R,L){e=R,L&&(n=L),s=t.who&&t.who[R]||0,o.setBeat(e,{instant:!0}),g=!1,l.enabled=n!=="tps",p(),n==="tps"&&w(1),r.renderNow()}return y(e,n),{api:r,set:y,mode(R){y(e,R)},hold:R=>r.hold(R),get i(){return e},dispose(){_.disconnect(),o.dispose(),r.renderer.forceContextLoss(),r.dispose()}}}return yd(Ux);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
