var OW3D=(()=>{var ia=Object.defineProperty;var nu=Object.getOwnPropertyDescriptor;var iu=Object.getOwnPropertyNames;var su=Object.prototype.hasOwnProperty;var ru=(i,t)=>{for(var e in t)ia(i,e,{get:t[e],enumerable:!0})},ou=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of iu(t))!su.call(i,s)&&s!==e&&ia(i,s,{get:()=>t[s],enumerable:!(n=nu(t,s))||n.enumerable});return i};var au=i=>ou(ia({},"__esModule",{value:!0}),i);var cg={};ru(cg,{REG:()=>pe,eyePose:()=>Qs,mount:()=>qh});var rl=0,ka=1,ol=2;var Ha=1,Zr=2,bn=3,Pn=0,Be=1,sn=2,Un=0,oi=1,Va=2,Ga=3,Wa=4,al=5,Xn=100,cl=101,ll=102,hl=103,ul=104,fl=200,dl=201,pl=202,ml=203,wr=204,Er=205,gl=206,_l=207,xl=208,yl=209,vl=210,Ml=211,Sl=212,bl=213,wl=214,Jr=0,$r=1,Kr=2,ai=3,Qr=4,jr=5,to=6,eo=7,Xa=0,El=1,Tl=2,Fn=0,Al=1,Rl=2,Cl=3,Il=4,Pl=5,Dl=6,no=7;var qa=300,pi=301,mi=302,io=303,so=304,Gs=306,Bi=1e3,Wn=1001,Tr=1002,Ve=1003,Ll=1004;var Ws=1005;var fn=1006,ro=1007;var Kn=1008;var _n=1009,Ya=1010,Za=1011,Ji=1012,oo=1013,Qn=1014,xn=1015,$i=1016,ao=1017,co=1018,Ki=1020,Ja=35902,$a=35899,Ka=1021,Qa=1022,rn=1023,Oi=1026,Qi=1027,lo=1028,ho=1029,ja=1030,uo=1031;var fo=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,po=35840,mo=35841,go=35842,_o=35843,xo=36196,yo=37492,vo=37496,Mo=37808,So=37809,bo=37810,wo=37811,Eo=37812,To=37813,Ao=37814,Ro=37815,Co=37816,Io=37817,Po=37818,Do=37819,Lo=37820,Uo=37821,Fo=36492,No=36494,Bo=36495,Oo=36283,zo=36284,ko=36285,Ho=36286;var _s=2300,Ar=2301,br=2302,Ra=2400,Ca=2401,Ia=2402;var Ul=3200,Fl=3201;var tc=0,Nl=1,Nn="",Pe="srgb",ci="srgb-linear",xs="linear",oe="srgb";var ri=7680;var Pa=519,Bl=512,Ol=513,zl=514,ec=515,kl=516,Hl=517,Vl=518,Gl=519,Da=35044;var nc="300 es",un=2e3,ys=2001;var Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sa=Math.PI/180,Rr=180/Math.PI;function Js(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function cu(i,t){return(i%t+t)%t}function ra(i,t,e){return(1-e)*i+e*t}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==p||l!==d||h!==g){let m=1-a,u=c*p+l*d+h*g+f*_,v=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let M=Math.sqrt(y),w=Math.atan2(M,u*v);m=Math.sin(m*w)/M,a=Math.sin(a*w)/M}let x=a*v;if(c=c*m+p*x,l=l*m+d*x,h=h*m+g*x,f=f*m+_*x,m===1-a){let M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*p,t[e+1]=c*g+h*p+l*f-a*d,t[e+2]=l*g+h*d+a*p-c*f,t[e+3]=h*g-a*f-c*p-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),p=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*f+l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f-p*d*g;break;case"YXZ":this._x=p*h*f+l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f+p*d*g;break;case"ZXY":this._x=p*h*f-l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f-p*d*g;break;case"ZYX":this._x=p*h*f-l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f+p*d*g;break;case"YZX":this._x=p*h*f+l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f-p*d*g;break;case"XZY":this._x=p*h*f-l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],p=n+a+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new V,Lc=new Je,Xt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],d=n[5],g=n[8],_=s[0],m=s[3],u=s[6],v=s[1],y=s[4],x=s[7],M=s[2],w=s[5],T=s[8];return r[0]=o*_+a*v+c*M,r[3]=o*m+a*y+c*w,r[6]=o*u+a*x+c*T,r[1]=l*_+h*v+f*M,r[4]=l*m+h*y+f*w,r[7]=l*u+h*x+f*T,r[2]=p*_+d*v+g*M,r[5]=p*m+d*y+g*w,r[8]=p*u+d*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,p=a*c-h*r,d=l*r-o*c,g=e*f+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=f*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},aa=new Xt;function ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wl(){let i=vs("canvas");return i.style.display="block",i}var Uc={};function zi(i){i in Uc||(Uc[i]=!0,console.warn(i))}function Xl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lu(){let i={enabled:!0,workingColorSpace:ci,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Nn?xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ci]:{primaries:t,whitePoint:n,transfer:xs,toXYZ:Fc,fromXYZ:Nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Fc,fromXYZ:Nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var te=lu();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var bi,Cr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=vs("canvas")),bi.width=t.width,bi.height=t.height;let s=bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hu=0,ki=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ca(s[o].image)):r.push(ca(s[o]))}else r=ca(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ca(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Cr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uu=0,la=new V,Ne=class i extends Dn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=fn,o=Kn,a=rn,c=_n,l=i.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Js(),this.name="",this.source=new ki(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=qa;Ne.DEFAULT_ANISOTROPY=1;var ve=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],p=c[1],d=c[5],g=c[9],_=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,x=(d+1)/2,M=(u+1)/2,w=(h+p)/4,T=(f+_)/4,A=(g+m)/4;return y>x&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=T/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=A/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=T/r,s=A/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(p-h)/v,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ir=class extends Dn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Ne(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ki(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends Ir{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ms=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pr=class extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),nr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nr.copy(n.boundingBox)),nr.applyMatrix4(t.matrixWorld),this.union(nr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hs),ir.subVectors(this.max,hs),wi.subVectors(t.a,hs),Ei.subVectors(t.b,hs),Ti.subVectors(t.c,hs),Bn.subVectors(Ei,wi),On.subVectors(Ti,Ei),ei.subVectors(wi,Ti);let e=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!ha(e,wi,Ei,Ti,ir)||(e=[1,0,0,0,1,0,0,0,1],!ha(e,wi,Ei,Ti,ir))?!1:(sr.crossVectors(Bn,On),e=[sr.x,sr.y,sr.z],ha(e,wi,Ei,Ti,ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},En=[new V,new V,new V,new V,new V,new V,new V,new V],cn=new V,nr=new Sn,wi=new V,Ei=new V,Ti=new V,Bn=new V,On=new V,ei=new V,hs=new V,ir=new V,sr=new V,ni=new V;function ha(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ni.fromArray(i,r);let a=s.x*Math.abs(ni.x)+s.y*Math.abs(ni.y)+s.z*Math.abs(ni.z),c=t.dot(ni),l=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var fu=new Sn,us=new V,ua=new V,qn=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;us.subVectors(t,this.center);let e=us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(us,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(us.copy(t.center).add(ua)),this.expandByPoint(us.copy(t.center).sub(ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Tn=new V,fa=new V,rr=new V,zn=new V,da=new V,or=new V,pa=new V,Ss=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fa.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(rr),a=zn.dot(this.direction),c=-zn.dot(rr),l=zn.lengthSq(),h=Math.abs(1-o*o),f,p,d,g;if(h>0)if(f=o*c-a,p=o*a-c,g=r*h,f>=0)if(p>=-g)if(p<=g){let _=1/h;f*=_,p*=_,d=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=r,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+l):p<=g?(f=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fa).addScaledVector(rr,p),d}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-p.z)*f,c=(t.max.z-p.z)*f):(a=(t.max.z-p.z)*f,c=(t.min.z-p.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){da.subVectors(e,t),or.subVectors(n,t),pa.crossVectors(da,or);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);let c=a*this.direction.dot(or.crossVectors(zn,or));if(c<0)return null;let l=a*this.direction.dot(da.cross(zn));if(l<0||c+l>o)return null;let h=-a*zn.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,c,l,h,f,p,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,f,p,d,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,f,p,d,g,_,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=d,u[7]=g,u[11]=_,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),o=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let p=o*h,d=o*f,g=a*h,_=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=p-_*l,e[9]=-a*c,e[2]=_-p*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let p=c*h,d=c*f,g=l*h,_=l*f;e[0]=p+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+p*a,e[10]=o*c}else if(t.order==="ZXY"){let p=c*h,d=c*f,g=l*h,_=l*f;e[0]=p-_*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let p=o*h,d=o*f,g=a*h,_=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=p*l+_,e[1]=c*f,e[5]=_*l+p,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let p=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-p*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=p-_*f}else if(t.order==="XZY"){let p=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=p*f+_,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=_*f+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(du,t,pu)}lookAt(t,e,n){let s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),kn.crossVectors(n,qe),kn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),kn.crossVectors(n,qe)),kn.normalize(),ar.crossVectors(qe,kn),s[0]=kn.x,s[4]=ar.x,s[8]=qe.x,s[1]=kn.y,s[5]=ar.y,s[9]=qe.y,s[2]=kn.z,s[6]=ar.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],d=n[13],g=n[2],_=n[6],m=n[10],u=n[14],v=n[3],y=n[7],x=n[11],M=n[15],w=s[0],T=s[4],A=s[8],S=s[12],b=s[1],E=s[5],C=s[9],P=s[13],L=s[2],z=s[6],N=s[10],H=s[14],k=s[3],Q=s[7],et=s[11],dt=s[15];return r[0]=o*w+a*b+c*L+l*k,r[4]=o*T+a*E+c*z+l*Q,r[8]=o*A+a*C+c*N+l*et,r[12]=o*S+a*P+c*H+l*dt,r[1]=h*w+f*b+p*L+d*k,r[5]=h*T+f*E+p*z+d*Q,r[9]=h*A+f*C+p*N+d*et,r[13]=h*S+f*P+p*H+d*dt,r[2]=g*w+_*b+m*L+u*k,r[6]=g*T+_*E+m*z+u*Q,r[10]=g*A+_*C+m*N+u*et,r[14]=g*S+_*P+m*H+u*dt,r[3]=v*w+y*b+x*L+M*k,r[7]=v*T+y*E+x*z+M*Q,r[11]=v*A+y*C+x*N+M*et,r[15]=v*S+y*P+x*H+M*dt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],p=t[10],d=t[14],g=t[3],_=t[7],m=t[11],u=t[15];return g*(+r*c*f-s*l*f-r*a*p+n*l*p+s*a*d-n*c*d)+_*(+e*c*d-e*l*p+r*o*p-s*o*d+s*l*h-r*c*h)+m*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+u*(-s*a*h-e*c*f+e*a*p+s*o*f-n*o*p+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],p=t[10],d=t[11],g=t[12],_=t[13],m=t[14],u=t[15],v=f*m*l-_*p*l+_*c*d-a*m*d-f*c*u+a*p*u,y=g*p*l-h*m*l-g*c*d+o*m*d+h*c*u-o*p*u,x=h*_*l-g*f*l+g*a*d-o*_*d-h*a*u+o*f*u,M=g*f*c-h*_*c-g*a*p+o*_*p+h*a*m-o*f*m,w=e*v+n*y+s*x+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(_*p*r-f*m*r-_*s*d+n*m*d+f*s*u-n*p*u)*T,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*u+n*c*u)*T,t[3]=(f*c*r-a*p*r-f*s*l+n*p*l+a*s*d-n*c*d)*T,t[4]=y*T,t[5]=(h*m*r-g*p*r+g*s*d-e*m*d-h*s*u+e*p*u)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*u-e*c*u)*T,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*d+e*c*d)*T,t[8]=x*T,t[9]=(g*f*r-h*_*r-g*n*d+e*_*d+h*n*u-e*f*u)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*u+e*a*u)*T,t[11]=(h*a*r-o*f*r-h*n*l+e*f*l+o*n*d-e*a*d)*T,t[12]=M*T,t[13]=(h*_*s-g*f*s+g*n*p-e*_*p-h*n*m+e*f*m)*T,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*f*s-h*a*s+h*n*c-e*f*c-o*n*p+e*a*p)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,p=r*l,d=r*h,g=r*f,_=o*h,m=o*f,u=a*f,v=c*l,y=c*h,x=c*f,M=n.x,w=n.y,T=n.z;return s[0]=(1-(_+u))*M,s[1]=(d+x)*M,s[2]=(g-y)*M,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(p+u))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*T,s[9]=(m-v)*T,s[10]=(1-(p+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ai.set(s[0],s[1],s[2]).length(),o=Ai.set(s[4],s[5],s[6]).length(),a=Ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);let l=1/r,h=1/o,f=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=un,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s),g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===un)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ys)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=un,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s),g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===un)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===ys)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ai=new V,ln=new ne,du=new V(0,0,0),pu=new V(1,1,1),kn=new V,ar=new V,qe=new V,Bc=new ne,Oc=new Je,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin($t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var Hi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mu=0,zc=new V,Ri=new Je,An=new ne,cr=new V,fs=new V,gu=new V,_u=new Je,kc=new V(1,0,0),Hc=new V(0,1,0),Vc=new V(0,0,1),Gc={type:"added"},xu={type:"removed"},Ci={type:"childadded",child:null},ma={type:"childremoved",child:null},Le=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,e=new dn,n=new Je,s=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Hc,t)}rotateZ(t){return this.rotateOnAxis(Vc,t)}translateOnAxis(t,e){return zc.copy(t).applyQuaternion(this.quaternion),this.position.add(zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Hc,t)}translateZ(t){return this.translateOnAxis(Vc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cr.copy(t):cr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(fs,cr,this.up):An.lookAt(cr,fs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(An),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gc),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xu),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gc),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,_u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new V(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new V,Rn=new V,ga=new V,Cn=new V,Ii=new V,Pi=new V,Wc=new V,_a=new V,xa=new V,ya=new V,va=new ve,Ma=new ve,Sa=new ve,Gn=class i{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Rn.subVectors(n,e),ga.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(Rn),c=hn.dot(ga),l=Rn.dot(Rn),h=Rn.dot(ga),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Cn.x),c.addScaledVector(o,Cn.y),c.addScaledVector(a,Cn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return va.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),va.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),Sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(va,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Rn.subVectors(t,e),hn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ii.subVectors(s,n),Pi.subVectors(r,n),_a.subVectors(t,n);let c=Ii.dot(_a),l=Pi.dot(_a);if(c<=0&&l<=0)return e.copy(n);xa.subVectors(t,s);let h=Ii.dot(xa),f=Pi.dot(xa);if(h>=0&&f<=h)return e.copy(s);let p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ii,o);ya.subVectors(t,r);let d=Ii.dot(ya),g=Pi.dot(ya);if(g>=0&&d<=g)return e.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Pi,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Wc.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Wc,a);let u=1/(m+_+p);return o=_*u,a=p*u,e.copy(n).addScaledVector(Ii,o).addScaledVector(Pi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=cu(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return te.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=ql[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return te.workingToColorSpace(Ie.copy(this),t),Math.round($t(Ie.r*255,0,255))*65536+Math.round($t(Ie.g*255,0,255))*256+Math.round($t(Ie.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ie.copy(this),e);let n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Pe){te.workingToColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,s=Ie.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(lr);let n=ra(Hn.h,lr.h,e),s=ra(Hn.s,lr.s,e),r=ra(Hn.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Yt;Yt.NAMES=ql;var yu=0,Yn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=oi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wr,this.blendDst=Er,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ai,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ri,this.stencilZFail=ri,this.stencilZPass=ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Er&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ai&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pn=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new V,hr=new qt,vu=0,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hr.fromBufferAttribute(this,e),hr.applyMatrix3(t),this.setXY(e,hr.x,hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Da&&(t.usage=this.usage),t}};var bs=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ws=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mu=0,en=new ne,wa=new Le,Di=new V,Ye=new Sn,ds=new Sn,Re=new V,be=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ic(t)?ws:bs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ye.min,ds.min),Ye.expandByPoint(Re),Re.addVectors(Ye.max,ds.max),Ye.expandByPoint(Re)):(Ye.expandByPoint(ds.min),Ye.expandByPoint(ds.max))}Ye.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Re.fromBufferAttribute(a,l),c&&(Di.fromBufferAttribute(t,l),Re.add(Di)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new V,c[A]=new V;let l=new V,h=new V,f=new V,p=new qt,d=new qt,g=new qt,_=new V,m=new V;function u(A,S,b){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,b),p.fromBufferAttribute(r,A),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(l),f.sub(l),d.sub(p),g.sub(p);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(E),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[A].add(_),a[S].add(_),a[b].add(_),c[A].add(m),c[S].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,S=v.length;A<S;++A){let b=v[A],E=b.start,C=b.count;for(let P=E,L=E+C;P<L;P+=3)u(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new V,x=new V,M=new V,w=new V;function T(A){M.fromBufferAttribute(s,A),w.copy(M);let S=a[A];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),x.crossVectors(w,S);let E=x.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,E)}for(let A=0,S=v.length;A<S;++A){let b=v[A],E=b.start,C=b.count;for(let P=E,L=E+C;P<L;P+=3)T(t.getX(P+0)),T(t.getX(P+1)),T(t.getX(P+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new V,r=new V,o=new V,a=new V,c=new V,l=new V,h=new V,f=new V;if(t)for(let p=0,d=t.count;p<d;p+=3){let g=t.getX(p+0),_=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let u=0;u<h;u++)p[g++]=l[d++]}return new Se(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let p=l[h],d=t(p,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){let d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let p=0,d=f.length;p<d;p++)h.push(f[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xc=new ne,ii=new Ss,ur=new qn,qc=new V,fr=new V,dr=new V,pr=new V,Ea=new V,mr=new V,Yc=new V,gr=new V,de=class extends Le{constructor(t=new be,e=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(Ea.fromBufferAttribute(f,t),o?mr.addScaledVector(Ea,h):mr.addScaledVector(Ea.sub(e),h))}e.add(mr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(ur.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ur,qc)===null||ii.origin.distanceToSquared(qc)>(t.far-t.near)**2))&&(Xc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Xc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],u=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,M=y;x<M;x+=3){let w=a.getX(x),T=a.getX(x+1),A=a.getX(x+2);s=_r(this,u,t,n,l,h,f,w,T,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,u=_;m<u;m+=3){let v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=_r(this,o,t,n,l,h,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=p.length;g<_;g++){let m=p[g],u=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,M=y;x<M;x+=3){let w=x,T=x+1,A=x+2;s=_r(this,u,t,n,l,h,f,w,T,A),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,u=_;m<u;m+=3){let v=m,y=m+1,x=m+2;s=_r(this,o,t,n,l,h,f,v,y,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Su(i,t,e,n,s,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;gr.copy(a),gr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(gr);return l<e.near||l>e.far?null:{distance:l,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,fr),i.getVertexPosition(c,dr),i.getVertexPosition(l,pr);let h=Su(i,t,e,n,fr,dr,pr,Yc);if(h){let f=new V;Gn.getBarycoord(Yc,fr,dr,pr,f),s&&(h.uv=Gn.getInterpolatedAttribute(s,a,c,l,f,new qt)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,a,c,l,f,new qt)),o&&(h.normal=Gn.getInterpolatedAttribute(o,a,c,l,f,new V),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new V,materialIndex:0};Gn.getNormal(fr,dr,pr,p.normal),h.face=p,h.barycoord=f}return h}var Vi=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(f,2));function g(_,m,u,v,y,x,M,w,T,A,S){let b=x/T,E=M/A,C=x/2,P=M/2,L=w/2,z=T+1,N=A+1,H=0,k=0,Q=new V;for(let et=0;et<N;et++){let dt=et*E-P;for(let It=0;It<z;It++){let Bt=It*b-C;Q[_]=Bt*v,Q[m]=dt*y,Q[u]=L,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[u]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(It/T),f.push(1-et/A),H+=1}}for(let et=0;et<A;et++)for(let dt=0;dt<T;dt++){let It=p+dt+z*et,Bt=p+dt+z*(et+1),xt=p+(dt+1)+z*(et+1),gt=p+(dt+1)+z*et;c.push(It,Bt,gt),c.push(Bt,xt,gt),k+=6}a.addGroup(d,k,S),d+=k,p+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=gi(i[e]);for(let s in n)t[s]=n[s]}return t}function bu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}var Yl={clone:gi,merge:Ue},wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Es=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vn=new V,Zc=new qt,Jc=new qt,De=class extends Es{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,Zc,Jc),e.subVectors(Jc,Zc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Li=-90,Ui=1,Dr=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new De(Li,Ui,t,e);s.layers=this.layers,this.add(s);let r=new De(Li,Ui,t,e);r.layers=this.layers,this.add(r);let o=new De(Li,Ui,t,e);o.layers=this.layers,this.add(o);let a=new De(Li,Ui,t,e);a.layers=this.layers,this.add(a);let c=new De(Li,Ui,t,e);c.layers=this.layers,this.add(c);let l=new De(Li,Ui,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ts=class extends Ne{constructor(t=[],e=pi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lr=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ts(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vi(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Un});r.uniforms.tEquirect.value=e;let o=new de(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=fn),new Dr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ze=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tu={type:"move"},Gi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),u=this._getHandJoint(l,_);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var As=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rs=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ur=class extends Ne{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ve,h=Ve,f,p){super(null,o,a,c,l,h,s,r,f,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Cs=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Fi=new ne,$c=new ne,xr=[],Kc=new Sn,Au=new ne,ps=new de,ms=new qn,li=class extends de{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Au)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),Kc.copy(t.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Kc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fi),ms.copy(t.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),t.ray.intersectsSphere(ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fi),$c.multiplyMatrices(n,Fi),ps.matrixWorld=$c,ps.raycast(t,xr);for(let o=0,a=xr.length;o<a;o++){let c=xr[o];c.instanceId=r,c.object=this,e.push(c)}xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ur(new Float32Array(s*this.count),s,this.count,lo,xn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ta=new V,Ru=new V,Cu=new Xt,nn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ta.subVectors(n,e).cross(Ru.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cu.getNormalMatrix(t),s=this.coplanarPoint(Ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new qn,Iu=new qt(.5,.5),yr=new V,Wi=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,o=new nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],p=r[6],d=r[7],g=r[8],_=r[9],m=r[10],u=r[11],v=r[12],y=r[13],x=r[14],M=r[15];if(s[0].setComponents(l-o,d-h,u-g,M-v).normalize(),s[1].setComponents(l+o,d+h,u+g,M+v).normalize(),s[2].setComponents(l+a,d+f,u+_,M+y).normalize(),s[3].setComponents(l-a,d-f,u-_,M-y).normalize(),n)s[4].setComponents(c,p,m,x).normalize(),s[5].setComponents(l-c,d-p,u-m,M-x).normalize();else if(s[4].setComponents(l-c,d-p,u-m,M-x).normalize(),e===un)s[5].setComponents(l+c,d+p,u+m,M+x).normalize();else if(e===ys)s[5].setComponents(c,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){si.center.set(0,0,0);let e=Iu.distanceTo(t.center);return si.radius=.7071067811865476+e,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(yr.x=s.normal.x>0?t.max.x:t.min.x,yr.y=s.normal.y>0?t.max.y:t.min.y,yr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xi=class extends Ne{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Is=class extends Ne{constructor(t,e,n=Qn,s,r,o,a=Ve,c=Ve,l,h=Oi,f=1){if(h!==Oi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:t,height:e,depth:f};super(p,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ki(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ps=class extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ds=class i extends be{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,f=Math.PI/2*t,p=e,d=2*f+p,g=n*2+r,_=s+1,m=new V,u=new V;for(let v=0;v<=g;v++){let y=0,x=0,M=0,w=0;if(v<=n){let S=v/n,b=S*Math.PI/2;x=-h-t*Math.cos(b),M=t*Math.sin(b),w=-t*Math.cos(b),y=S*f}else if(v<=n+r){let S=(v-n)/r;x=-h+S*e,M=t,w=0,y=f+S*p}else{let S=(v-n-r)/n,b=S*Math.PI/2;x=h+t*Math.sin(b),M=t*Math.cos(b),w=t*Math.sin(b),y=f+p+S*f}let T=Math.max(0,Math.min(1,y/d)),A=0;v===0?A=.5/s:v===g&&(A=-.5/s);for(let S=0;S<=s;S++){let b=S/s,E=b*Math.PI*2,C=Math.sin(E),P=Math.cos(E);u.x=-M*P,u.y=x,u.z=M*C,a.push(u.x,u.y,u.z),m.set(-M*P,w,M*C),m.normalize(),c.push(m.x,m.y,m.z),l.push(b+A,T)}if(v>0){let S=(v-1)*_;for(let b=0;b<s;b++){let E=S+b,C=S+b+1,P=v*_+b,L=v*_+b+1;o.push(E,C,P),o.push(C,L,P)}}}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Ln=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],d=[],g=0,_=[],m=n/2,u=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(d,2));function v(){let x=new V,M=new V,w=0,T=(e-t)/n;for(let A=0;A<=r;A++){let S=[],b=A/r,E=b*(e-t)+t;for(let C=0;C<=s;C++){let P=C/s,L=P*c+a,z=Math.sin(L),N=Math.cos(L);M.x=E*z,M.y=-b*n+m,M.z=E*N,f.push(M.x,M.y,M.z),x.set(z,T,N).normalize(),p.push(x.x,x.y,x.z),d.push(P,1-b),S.push(g++)}_.push(S)}for(let A=0;A<s;A++)for(let S=0;S<r;S++){let b=_[S][A],E=_[S+1][A],C=_[S+1][A+1],P=_[S][A+1];(t>0||S!==0)&&(h.push(b,E,P),w+=3),(e>0||S!==r-1)&&(h.push(E,C,P),w+=3)}l.addGroup(u,w,0),u+=w}function y(x){let M=g,w=new qt,T=new V,A=0,S=x===!0?t:e,b=x===!0?1:-1;for(let C=1;C<=s;C++)f.push(0,m*b,0),p.push(0,b,0),d.push(.5,.5),g++;let E=g;for(let C=0;C<=s;C++){let L=C/s*c+a,z=Math.cos(L),N=Math.sin(L);T.x=S*N,T.y=m*b,T.z=S*z,f.push(T.x,T.y,T.z),p.push(0,b,0),w.x=z*.5+.5,w.y=N*.5*b+.5,d.push(w.x,w.y),g++}for(let C=0;C<s;C++){let P=M+C,L=E+C;x===!0?h.push(L,L+1,P):h.push(L+1,L,P),A+=3}l.addGroup(u,A,x===!0?1:2),u+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zn=class i extends Ln{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fr=class i extends be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new V,x=new V,M=new V;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],x),d(e[w+2],M),c(y,x,M,v)}function c(v,y,x,M){let w=M+1,T=[];for(let A=0;A<=w;A++){T[A]=[];let S=v.clone().lerp(x,A/w),b=y.clone().lerp(x,A/w),E=w-A;for(let C=0;C<=E;C++)C===0&&A===w?T[A][C]=S:T[A][C]=S.clone().lerp(b,C/E)}for(let A=0;A<w;A++)for(let S=0;S<2*(w-A)-1;S++){let b=Math.floor(S/2);S%2===0?(p(T[A][b+1]),p(T[A+1][b]),p(T[A][b])):(p(T[A][b+1]),p(T[A+1][b+1]),p(T[A+1][b]))}}function l(v){let y=new V;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let v=new V;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let x=m(v)/2/Math.PI+.5,M=u(v)/Math.PI+.5;o.push(x,1-M)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){let y=o[v+0],x=o[v+2],M=o[v+4],w=Math.max(y,x,M),T=Math.min(y,x,M);w>.9&&T<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function d(v,y){let x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let v=new V,y=new V,x=new V,M=new V,w=new qt,T=new qt,A=new qt;for(let S=0,b=0;S<r.length;S+=9,b+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),w.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),A.set(o[b+4],o[b+5]),M.copy(v).add(y).add(x).divideScalar(3);let E=m(M);_(w,b+0,v,E),_(T,b+2,y,E),_(A,b+4,x,E)}}function _(v,y,x,M){M<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function u(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};function Pu(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Zl(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Nu(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,f=-1/0;for(let p=e;p<s;p+=e){let d=i[p],g=i[p+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return Ls(r,o,e,a,c,l,0),o}function Zl(i,t,e,n,s){let r;if(s===Yu(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Qc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Qc(o/n|0,i[o],i[o+1],r);return r&&qi(r,r.next)&&(Fs(r),r=r.next),r}function hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qi(e,e.next)||ye(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ls(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hu(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Lu(i,n,s,r):Du(i)){t.push(c.i,i.i,l.i),Fs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Uu(hi(i),t),Ls(i,t,e,n,s,r,2)):o===2&&Fu(i,t,e,n,s,r):Ls(hi(i),t,e,n,s,r,1);break}}}function Du(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),f=Math.min(a,c,l),p=Math.max(s,r,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=f&&g.y<=d&&gs(s,a,r,c,o,l,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lu(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,p=o.y,d=Math.min(a,c,l),g=Math.min(h,f,p),_=Math.max(a,c,l),m=Math.max(h,f,p),u=La(d,g,t,e,n),v=La(_,m,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=u&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&gs(a,h,c,f,l,p,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&gs(a,h,c,f,l,p,x.x,x.y)&&ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&gs(a,h,c,f,l,p,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&gs(a,h,c,f,l,p,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Uu(i,t){let e=i;do{let n=e.prev,s=e.next.next;!qi(n,s)&&$l(n,e,e.next,s)&&Us(n,s)&&Us(s,n)&&(t.push(n.i,e.i,s.i),Fs(e),Fs(e.next),e=i=s),e=e.next}while(e!==i);return hi(e)}function Fu(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wu(o,a)){let c=Kl(o,a);o=hi(o,o.next),c=hi(c,c.next),Ls(o,t,e,n,s,r,0),Ls(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nu(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Zl(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Gu(l))}s.sort(Bu);for(let r=0;r<s.length;r++)e=Ou(s[r],e);return e}function Bu(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ou(i,t){let e=zu(i,t);if(!e)return t;let n=Kl(e,i);return hi(n,n.next),hi(e,e.next)}function zu(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(qi(i,e))return e;do{if(qi(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Jl(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);Us(e,i)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&ku(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function ku(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function Hu(i,t,e,n){let s=i;do s.z===0&&(s.z=La(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vu(s)}function Vu(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function La(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gu(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jl(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Jl(i,t,e,n,s,r,o,a)}function Wu(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xu(i,t)&&(Us(i,t)&&Us(t,i)&&qu(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||qi(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qi(i,t){return i.x===t.x&&i.y===t.y}function $l(i,t,e,n){let s=Mr(ye(i,t,e)),r=Mr(ye(i,t,n)),o=Mr(ye(e,n,i)),a=Mr(ye(e,n,t));return!!(s!==r&&o!==a||s===0&&vr(i,e,t)||r===0&&vr(i,n,t)||o===0&&vr(e,i,n)||a===0&&vr(e,t,n))}function vr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mr(i){return i>0?1:i<0?-1:0}function Xu(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$l(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function qu(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kl(i,t){let e=Ua(i.i,i.x,i.y),n=Ua(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qc(i,t,e,n){let s=Ua(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ua(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yu(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Fa=class{static triangulate(t,e,n=2){return Pu(t,e,n)}},Yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];jc(t),tl(n,t);let o=t.length;e.forEach(jc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,tl(n,e[c]);let a=Fa.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function jc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function tl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ui=class i extends Fr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var fi=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=t/a,p=e/c,d=[],g=[],_=[],m=[];for(let u=0;u<h;u++){let v=u*p-o;for(let y=0;y<l;y++){let x=y*f-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<a;v++){let y=v+l*u,x=v+l*(u+1),M=v+1+l*(u+1),w=v+1+l*u;d.push(y,x,w),d.push(x,M,w)}this.setIndex(d),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Zi=class i extends be{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=t,p=(e-t)/s,d=new V,g=new qt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let u=r+m/n*o;d.x=f*Math.cos(u),d.y=f*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=p}for(let _=0;_<s;_++){let m=_*(n+1);for(let u=0;u<n;u++){let v=u+m,y=v,x=v+n+1,M=v+n+2,w=v+1;a.push(y,x,w),a.push(x,M,w)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ns=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new V,p=new V,d=[],g=[],_=[],m=[];for(let u=0;u<=n;u++){let v=[],y=u/n,x=0;u===0&&o===0?x=.5/e:u===n&&c===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){let w=M/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),m.push(w+x,1-y),v.push(l++)}h.push(v)}for(let u=0;u<n;u++)for(let v=0;v<e;v++){let y=h[u][v+1],x=h[u][v],M=h[u+1][v],w=h[u+1][v+1];(u!==0||o>0)&&d.push(y,x,w),(u!==n-1||c<Math.PI)&&d.push(x,M,w)}this.setIndex(d),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(_,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gn=class extends Yn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Nr=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Br=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Sr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Or=class extends di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ra,endingEnd:Ra}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ca:r=t,a=2*e-n;break;case Ia:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ca:o=t,c=2*n-e;break;case Ia:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,u=-p*m+2*p*_-p*g,v=(1+p)*m+(-1.5-2*p)*_+(-.5+p)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let M=0;M!==a;++M)r[M]=u*o[h+M]+v*o[l+M]+y*o[c+M]+x*o[f+M];return r}},zr=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),f=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*f+o[c+p]*h;return r}},kr=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$e=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sr(e,this.TimeBufferType),this.values=Sr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sr(t.times,Array),values:Sr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Or(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case Ar:e=this.InterpolantFactoryMethodLinear;break;case br:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return br}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Zu(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===br,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,p=f-n,d=f+n;for(let g=0;g!==n;++g){let _=e[f+g];if(_!==e[p+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,p=o*n;for(let d=0;d!==n;++d)e[p+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};$e.prototype.ValueTypeName="";$e.prototype.TimeBufferType=Float32Array;$e.prototype.ValueBufferType=Float32Array;$e.prototype.DefaultInterpolation=Ar;var Jn=class extends $e{constructor(t,e,n){super(t,e,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=_s;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Hr.prototype.ValueTypeName="color";var Vr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Vr.prototype.ValueTypeName="number";var Gr=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Je.slerpFlat(r,0,o,l-a,o,l,c);return r}},Bs=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Gr(this.times,this.values,this.getValueSize(),t)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends $e{constructor(t,e,n){super(t,e,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=_s;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var Wr=class extends $e{constructor(t,e,n,s){super(t,e,n,s)}};Wr.prototype.ValueTypeName="vector";var Xr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ql=new Xr,qr=class{constructor(t){this.manager=t!==void 0?t:Ql,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},zs=class extends Os{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Aa=new ne,el=new V,nl=new V,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wi,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;el.setFromMatrixPosition(t.matrixWorld),e.position.copy(el),nl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nl),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ks=class extends Es{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ba=class extends Na{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends Os{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Ba}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yr=class extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rc="\\[\\]\\.:\\/",Ju=new RegExp("["+rc+"]","g"),oc="[^"+rc+"]",$u="[^"+rc.replace("\\.","")+"]",Ku=/((?:WC+[\/:])*)/.source.replace("WC",oc),Qu=/(WCOD+)?/.source.replace("WCOD",$u),ju=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),tf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),ef=new RegExp("^"+Ku+Qu+ju+tf+"$"),nf=["material","materials","bones","map"],Oa=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ju,"")}static parseTrackName(t){let e=ef.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Oa;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hg=new Float32Array(1);var il=new ne,Vs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ss(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Hi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return il.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(il),this}intersectObject(t,e=!0,n=[]){return za(t,this,n,e),n.sort(sl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)za(t[s],this,n,e);return n.sort(sl),n}};function sl(i,t){return i.distance-t.distance}function za(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)za(r[o],t,e,!0)}}function ac(i,t,e,n){let s=sf(n);switch(e){case Ka:return i*t;case lo:return i*t/s.components*s.byteLength;case ho:return i*t/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case uo:return i*t*2/s.components*s.byteLength;case Qa:return i*t*3/s.components*s.byteLength;case rn:return i*t*4/s.components*s.byteLength;case fo:return i*t*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:case _o:return Math.max(i,16)*Math.max(t,8)/4;case po:case go:return Math.max(i,8)*Math.max(t,8)/2;case xo:case yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fo:case No:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oo:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sf(i){switch(i){case _n:case Ya:return{byteLength:1,components:1};case Ji:case Za:case $i:return{byteLength:2,components:1};case ao:case co:return{byteLength:2,components:4};case Qn:case oo:case xn:return{byteLength:4,components:1};case Ja:case $a:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Sh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function of(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){let g=f[p],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++p,f[p]=_)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,df=`#ifdef USE_AOMAP
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
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
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
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Mf=`#ifdef USE_BUMPMAP
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
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Df=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
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
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
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
#endif`,rd=`struct PhysicalMaterial {
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
}`,od=`
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
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
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`float getShadowMask() {
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jd=`#ifdef USE_SKINNING
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
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`#include <common>
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
}`,dp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,yp=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,wp=`#define MATCAP
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
}`,Ep=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define PHONG
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
}`,Ip=`#define STANDARD
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
}`,Pp=`#define STANDARD
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
}`,Dp=`#define TOON
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
}`,Lp=`#define TOON
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
}`,Up=`uniform float size;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Bp=`uniform vec3 color;
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
}`,Op=`uniform float rotation;
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
}`,zp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:af,alphahash_pars_fragment:cf,alphamap_fragment:lf,alphamap_pars_fragment:hf,alphatest_fragment:uf,alphatest_pars_fragment:ff,aomap_fragment:df,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:xf,bsdfs:yf,iridescence_fragment:vf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Ef,color_fragment:Tf,color_pars_fragment:Af,color_pars_vertex:Rf,color_vertex:Cf,common:If,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:Df,displacementmap_pars_vertex:Lf,displacementmap_vertex:Uf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Nf,colorspace_fragment:Bf,colorspace_pars_fragment:Of,envmap_fragment:zf,envmap_common_pars_fragment:kf,envmap_pars_fragment:Hf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:jf,envmap_vertex:Gf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:qf,fog_pars_fragment:Yf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:Jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Kf,lights_pars_begin:Qf,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:sd,lights_physical_pars_fragment:rd,lights_fragment_begin:od,lights_fragment_maps:ad,lights_fragment_end:cd,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:dd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphinstance_vertex:yd,morphcolor_vertex:vd,morphnormal_vertex:Md,morphtarget_pars_vertex:Sd,morphtarget_vertex:bd,normal_fragment_begin:wd,normal_fragment_maps:Ed,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Ld,opaque_fragment:Ud,packing:Fd,premultiplied_alpha_fragment:Nd,project_vertex:Bd,dithering_fragment:Od,dithering_pars_fragment:zd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Jd,specularmap_fragment:$d,specularmap_pars_fragment:Kd,tonemapping_fragment:Qd,tonemapping_pars_fragment:jd,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:op,background_frag:ap,backgroundCube_vert:cp,backgroundCube_frag:lp,cube_vert:hp,cube_frag:up,depth_vert:fp,depth_frag:dp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:xp,linedashed_frag:yp,meshbasic_vert:vp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:bp,meshmatcap_vert:wp,meshmatcap_frag:Ep,meshnormal_vert:Tp,meshnormal_frag:Ap,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Ip,meshphysical_frag:Pp,meshtoon_vert:Dp,meshtoon_frag:Lp,points_vert:Up,points_frag:Fp,shadow_vert:Np,shadow_frag:Bp,sprite_vert:Op,sprite_frag:zp},_t={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},wn={basic:{uniforms:Ue([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ue([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ue([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ue([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ue([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ue([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ue([_t.points,_t.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ue([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ue([_t.common,_t.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ue([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ue([_t.sprite,_t.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ue([_t.common,_t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ue([_t.lights,_t.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};wn.physical={uniforms:Ue([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Vo={r:0,b:0,g:0},_i=new dn,kp=new ne;function Hp(i,t,e,n,s,r,o){let a=new Yt(0),c=r===!0?0:1,l,h,f=null,p=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,M=g(y);M===null?u(a,c):M&&M.isColor&&(u(M,1),x=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===Gs)?(h===void 0&&(h=new de(new Vi(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:gi(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(_i)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==oe,(f!==M||p!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new de(new fi(2,2),new mn({name:"BackgroundMaterial",uniforms:gi(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,x){y.getRGB(Vo,sc(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),c=x,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,u(a,c)},render:_,addToRenderList:m,dispose:v}}function Vp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(b,E,C,P,L){let z=!1,N=f(P,C,E);r!==N&&(r=N,l(r.object)),z=d(b,P,C,L),z&&g(b,P,C,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(b,E,C,P),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function f(b,E,C){let P=C.wireframe===!0,L=n[b.id];L===void 0&&(L={},n[b.id]=L);let z=L[E.id];z===void 0&&(z={},L[E.id]=z);let N=z[P];return N===void 0&&(N=p(c()),z[P]=N),N}function p(b){let E=[],C=[],P=[];for(let L=0;L<e;L++)E[L]=0,C[L]=0,P[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:C,attributeDivisors:P,object:b,attributes:{},index:null}}function d(b,E,C,P){let L=r.attributes,z=E.attributes,N=0,H=C.getAttributes();for(let k in H)if(H[k].location>=0){let et=L[k],dt=z[k];if(dt===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),et===void 0||et.attribute!==dt||dt&&et.data!==dt.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function g(b,E,C,P){let L={},z=E.attributes,N=0,H=C.getAttributes();for(let k in H)if(H[k].location>=0){let et=z[k];et===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));let dt={};dt.attribute=et,et&&et.data&&(dt.data=et.data),L[k]=dt,N++}r.attributes=L,r.attributesNum=N,r.index=P}function _(){let b=r.newAttributes;for(let E=0,C=b.length;E<C;E++)b[E]=0}function m(b){u(b,0)}function u(b,E){let C=r.newAttributes,P=r.enabledAttributes,L=r.attributeDivisors;C[b]=1,P[b]===0&&(i.enableVertexAttribArray(b),P[b]=1),L[b]!==E&&(i.vertexAttribDivisor(b,E),L[b]=E)}function v(){let b=r.newAttributes,E=r.enabledAttributes;for(let C=0,P=E.length;C<P;C++)E[C]!==b[C]&&(i.disableVertexAttribArray(C),E[C]=0)}function y(b,E,C,P,L,z,N){N===!0?i.vertexAttribIPointer(b,E,C,L,z):i.vertexAttribPointer(b,E,C,P,L,z)}function x(b,E,C,P){_();let L=P.attributes,z=C.getAttributes(),N=E.defaultAttributeValues;for(let H in z){let k=z[H];if(k.location>=0){let Q=L[H];if(Q===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){let et=Q.normalized,dt=Q.itemSize,It=t.get(Q);if(It===void 0)continue;let Bt=It.buffer,xt=It.type,gt=It.bytesPerElement,Z=xt===i.INT||xt===i.UNSIGNED_INT||Q.gpuType===oo;if(Q.isInterleavedBufferAttribute){let K=Q.data,ht=K.stride,yt=Q.offset;if(K.isInstancedInterleavedBuffer){for(let wt=0;wt<k.locationSize;wt++)u(k.location+wt,K.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let wt=0;wt<k.locationSize;wt++)m(k.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let wt=0;wt<k.locationSize;wt++)y(k.location+wt,dt/k.locationSize,xt,et,ht*gt,(yt+dt/k.locationSize*wt)*gt,Z)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<k.locationSize;K++)u(k.location+K,Q.meshPerAttribute);b.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<k.locationSize;K++)m(k.location+K);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let K=0;K<k.locationSize;K++)y(k.location+K,dt/k.locationSize,xt,et,dt*gt,dt/k.locationSize*K*gt,Z)}}else if(N!==void 0){let et=N[H];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(k.location,et);break;case 3:i.vertexAttrib3fv(k.location,et);break;case 4:i.vertexAttrib4fv(k.location,et);break;default:i.vertexAttrib1fv(k.location,et)}}}}v()}function M(){A();for(let b in n){let E=n[b];for(let C in E){let P=E[C];for(let L in P)h(P[L].object),delete P[L];delete E[C]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let E=n[b.id];for(let C in E){let P=E[C];for(let L in P)h(P[L].object),delete P[L];delete E[C]}delete n[b.id]}function T(b){for(let E in n){let C=n[E];if(C[b.id]===void 0)continue;let P=C[b.id];for(let L in P)h(P[L].object),delete P[L];delete C[b.id]}}function A(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function Gp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function a(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,p){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*p[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==rn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==xn&&!A)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:M,maxSamples:w}}function Xp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new nn,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){e=h(f,p,0)},this.setState=function(f,p,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,y=v*4,x=u.clippingState||null;c.value=x,x=h(g,p,y,d);for(let M=0;M!==y;++M)x[M]=e[M];u.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,p,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let u=d+_*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function qp(i){let t=new WeakMap;function e(o,a){return a===io?o.mapping=pi:a===so&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===io||a===so)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lr(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ts=4,jl=[.125,.215,.35,.446,.526,.582],vi=20,cc=new ks,th=new Yt,lc=null,hc=0,uc=0,fc=!1,yi=(1+Math.sqrt(5))/2,ji=1/yi,eh=[new V(-yi,ji,0),new V(yi,ji,0),new V(-ji,0,yi),new V(ji,0,yi),new V(0,yi,-ji),new V(0,yi,ji),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Yp=new V,Xo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yp}=r;lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lc,hc,uc),this._renderer.xr.enabled=fc,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:$i,format:rn,colorSpace:ci,depthBuffer:!1},s=nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zp(r)),this._blurMaterial=Jp(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,cc)}_sceneToCubeUV(t,e,n,s,r){let c=new De(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,d=f.toneMapping;f.getClearColor(th),f.toneMapping=Fn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null));let _=new pn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),m=new de(new Vi,_),u=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,u=!0):(_.color.copy(th),u=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[y],r.y,r.z)):x===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[y]));let M=this._cubeSize;Go(s,x*M,y>2?M:0,M,M),f.setRenderTarget(s),u&&f.render(m,c),f.render(t,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=p,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===pi||t.mapping===mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,cc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=eh[(s-r-1)%eh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new de(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);let u=[],v=0;for(let T=0;T<vi;++T){let A=T/_,S=Math.exp(-A*A/2);u.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;let x=this._sizeLods[s],M=3*x*(s>y-ts?s-y+ts:0),w=4*(this._cubeSize-x);Go(e,M,w,3*x,2*x),c.setRenderTarget(e),c.render(f,cc)}};function Zp(i){let t=[],e=[],n=[],s=i,r=i-ts+1+jl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ts?c=jl[o-i+ts-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,_=3,m=2,u=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(u*g*d);for(let w=0;w<d;w++){let T=w%3*2/3-1,A=w>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];v.set(S,_*g*w),y.set(p,m*g*w);let b=[w,w,w,w,w,w];x.set(b,u*g*w)}let M=new be;M.setAttribute("position",new Se(v,_)),M.setAttribute("uv",new Se(y,m)),M.setAttribute("faceIndex",new Se(x,u)),t.push(M),s>ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nh(i,t,e){let n=new Mn(i,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jp(i,t,e){let n=new Float32Array(vi),s=new V(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function ih(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function sh(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}function $p(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===io||c===so,h=c===pi||c===mi;if(l||h){let f=t.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Xo(i)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Xo(i)),f=l?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Kp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qp(i,t,e,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(f){let p=f.attributes;for(let d in p)t.update(p[d],i.ARRAY_BUFFER)}function l(f){let p=[],d=f.index,g=f.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){let M=v[y+0],w=v[y+1],T=v[y+2];p.push(M,w,w,T,T,M)}}else if(g!==void 0){let v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let M=y+0,w=y+1,T=y+2;p.push(M,w,w,T,T,M)}}else return;let m=new(ic(p)?ws:bs)(p,1);m.version=_;let u=r.get(f);u&&t.remove(u),r.set(f,m)}function h(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function jp(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];e.update(m,n,1)}function f(p,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/o,d[u],_[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,_,0,g);let u=0;for(let v=0;v<g;v++)u+=d[v]*_[v];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function tm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function em(i,t,e){let n=new WeakMap,s=new ve;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==f){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*M*4*f),T=new Ms(w,x,M,f);T.type=xn,T.needsUpdate=!0;let A=y*4;for(let b=0;b<f;b++){let E=m[b],C=u[b],P=v[b],L=x*M*4*b;for(let z=0;z<E.count;z++){let N=z*A;d===!0&&(s.fromBufferAttribute(E,z),w[L+N+0]=s.x,w[L+N+1]=s.y,w[L+N+2]=s.z,w[L+N+3]=0),g===!0&&(s.fromBufferAttribute(C,z),w[L+N+4]=s.x,w[L+N+5]=s.y,w[L+N+6]=s.z,w[L+N+7]=0),_===!0&&(s.fromBufferAttribute(P,z),w[L+N+8]=s.x,w[L+N+9]=s.y,w[L+N+10]=s.z,w[L+N+11]=P.itemSize===4?s.w:1)}}p={count:f,texture:T,size:new qt(x,M)},n.set(a,p),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function nm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var bh=new Ne,rh=new Is(1,1),wh=new Ms,Eh=new Pr,Th=new Ts,oh=[],ah=[],ch=new Float32Array(16),lh=new Float32Array(9),hh=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=oh[s];if(r===void 0&&(r=new Float32Array(s),oh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yo(i,t){let e=ah[t];e===void 0&&(e=new Int32Array(t),ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function am(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;hh.set(n),i.uniformMatrix2fv(this.addr,!1,hh),Ae(e,n)}}function cm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;lh.set(n),i.uniformMatrix3fv(this.addr,!1,lh),Ae(e,n)}}function lm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;ch.set(n),i.uniformMatrix4fv(this.addr,!1,ch),Ae(e,n)}}function hm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function xm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rh.compareFunction=ec,r=rh):r=bh,e.setTexture2D(t||r,s)}function ym(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Eh,s)}function vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Th,s)}function Mm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wh,s)}function Sm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return Mm}}function bm(i,t){i.uniform1fv(this.addr,t)}function wm(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Em(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Tm(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Am(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cm(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Im(i,t){i.uniform1iv(this.addr,t)}function Pm(i,t){i.uniform2iv(this.addr,t)}function Dm(i,t){i.uniform3iv(this.addr,t)}function Lm(i,t){i.uniform4iv(this.addr,t)}function Um(i,t){i.uniform1uiv(this.addr,t)}function Fm(i,t){i.uniform2uiv(this.addr,t)}function Nm(i,t){i.uniform3uiv(this.addr,t)}function Bm(i,t){i.uniform4uiv(this.addr,t)}function Om(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bh,r[o])}function zm(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Eh,r[o])}function km(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Th,r[o])}function Hm(i,t,e){let n=this.cache,s=t.length,r=Yo(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wh,r[o])}function Vm(i){switch(i){case 5126:return bm;case 35664:return wm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Rm;case 35676:return Cm;case 5124:case 35670:return Im;case 35667:case 35671:return Pm;case 35668:case 35672:return Dm;case 35669:case 35673:return Lm;case 5125:return Um;case 36294:return Fm;case 36295:return Nm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Hm}}var pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sm(e.type)}},mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vm(e.type)}},gc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},dc=/(\w+)(\])?(\[|\.)?/g;function uh(i,t){i.seq.push(t),i.map[t.id]=t}function Gm(i,t,e){let n=i.name,s=n.length;for(dc.lastIndex=0;;){let r=dc.exec(n),o=dc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uh(e,l===void 0?new pc(a,i,t):new mc(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new gc(a),uh(e,f)),e=f}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Gm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function fh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Wm=37297,Xm=0;function qm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var dh=new Xt;function Ym(i){te._getMatrix(dh,te.workingColorSpace,i);let t=`mat3( ${dh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case xs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ph(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+qm(i.getShaderSource(t),a)}else return r}function Zm(i,t){let e=Ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jm(i,t){let e;switch(t){case Al:e="Linear";break;case Rl:e="Reinhard";break;case Cl:e="Cineon";break;case Il:e="ACESFilmic";break;case Dl:e="AgX";break;case no:e="Neutral";break;case Pl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wo=new V;function $m(){te.getLuminanceCoefficients(Wo);let i=Wo.x.toFixed(4),t=Wo.y.toFixed(4),e=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Qm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function $s(i){return i!==""}function mh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(i){return i.replace(t0,n0)}var e0=new Map;function n0(i,t){let e=Zt[t];if(e===void 0){let n=e0.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}var i0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(i){return i.replace(i0,s0)}function s0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function r0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ha?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(t="SHADOWMAP_TYPE_VSM"),t}function o0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:t="ENVMAP_TYPE_CUBE";break;case Gs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:t="ENVMAP_MODE_REFRACTION";break}return t}function c0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xa:t="ENVMAP_BLENDING_MULTIPLY";break;case El:t="ENVMAP_BLENDING_MIX";break;case Tl:t="ENVMAP_BLENDING_ADD";break}return t}function l0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=r0(e),l=o0(e),h=a0(e),f=c0(e),p=l0(e),d=Km(e),g=Qm(r),_=s.createProgram(),m,u,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter($s).join(`
`),u.length>0&&(u+=`
`)):(m=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),u=[xh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Zm("linearToOutputTexel",e.outputColorSpace),$m(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($s).join(`
`)),o=_c(o),o=mh(o,e),o=gh(o,e),a=_c(a),a=mh(a,e),a=gh(a,e),o=_h(o),a=_h(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===nc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=v+m+o,x=v+u+a,M=fh(s,s.VERTEX_SHADER,y),w=fh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(E){if(i.debug.checkShaderErrors){let C=s.getProgramInfoLog(_)||"",P=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(w)||"",z=C.trim(),N=P.trim(),H=L.trim(),k=!0,Q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,w);else{let et=ph(s,M,"vertex"),dt=ph(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+et+`
`+dt)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||H==="")&&(Q=!1);Q&&(E.diagnostics={runnable:k,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:H,prefix:u}})}s.deleteShader(M),s.deleteShader(w),A=new es(s,_),S=jm(s,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Wm)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}var u0=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yc(t),e.set(t,n)),n}},yc=class{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}};function f0(i,t,e,n,s,r,o){let a=new Hi,c=new xc,l=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,b,E,C,P){let L=C.fog,z=P.geometry,N=S.isMeshStandardMaterial?C.environment:null,H=(S.isMeshStandardMaterial?e:t).get(S.envMap||N),k=H&&H.mapping===Gs?H.image.height:null,Q=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let et=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,dt=et!==void 0?et.length:0,It=0;z.morphAttributes.position!==void 0&&(It=1),z.morphAttributes.normal!==void 0&&(It=2),z.morphAttributes.color!==void 0&&(It=3);let Bt,xt,gt,Z;if(Q){let Dt=wn[Q];Bt=Dt.vertexShader,xt=Dt.fragmentShader}else Bt=S.vertexShader,xt=S.fragmentShader,c.update(S),gt=c.getVertexShaderID(S),Z=c.getFragmentShaderID(S);let K=i.getRenderTarget(),ht=i.state.buffers.depth.getReversed(),yt=P.isInstancedMesh===!0,wt=P.isBatchedMesh===!0,Wt=!!S.map,Qt=!!S.matcap,U=!!H,ie=!!S.aoMap,Ot=!!S.lightMap,Ft=!!S.bumpMap,Mt=!!S.normalMap,se=!!S.displacementMap,Et=!!S.emissiveMap,zt=!!S.metalnessMap,me=!!S.roughnessMap,he=S.anisotropy>0,D=S.clearcoat>0,R=S.dispersion>0,X=S.iridescence>0,tt=S.sheen>0,ct=S.transmission>0,F=he&&!!S.anisotropyMap,it=D&&!!S.clearcoatMap,$=D&&!!S.clearcoatNormalMap,nt=D&&!!S.clearcoatRoughnessMap,rt=X&&!!S.iridescenceMap,j=X&&!!S.iridescenceThicknessMap,ot=tt&&!!S.sheenColorMap,St=tt&&!!S.sheenRoughnessMap,pt=!!S.specularMap,ut=!!S.specularColorMap,At=!!S.specularIntensityMap,O=ct&&!!S.transmissionMap,at=ct&&!!S.thicknessMap,mt=!!S.gradientMap,bt=!!S.alphaMap,lt=S.alphaTest>0,st=!!S.alphaHash,Ct=!!S.extensions,Vt=Fn;S.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let re={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:Bt,fragmentShader:xt,defines:S.defines,customVertexShaderID:gt,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:wt,batchingColor:wt&&P._colorsTexture!==null,instancing:yt,instancingColor:yt&&P.instanceColor!==null,instancingMorph:yt&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ci,alphaToCoverage:!!S.alphaToCoverage,map:Wt,matcap:Qt,envMap:U,envMapMode:U&&H.mapping,envMapCubeUVHeight:k,aoMap:ie,lightMap:Ot,bumpMap:Ft,normalMap:Mt,displacementMap:p&&se,emissiveMap:Et,normalMapObjectSpace:Mt&&S.normalMapType===Nl,normalMapTangentSpace:Mt&&S.normalMapType===tc,metalnessMap:zt,roughnessMap:me,anisotropy:he,anisotropyMap:F,clearcoat:D,clearcoatMap:it,clearcoatNormalMap:$,clearcoatRoughnessMap:nt,dispersion:R,iridescence:X,iridescenceMap:rt,iridescenceThicknessMap:j,sheen:tt,sheenColorMap:ot,sheenRoughnessMap:St,specularMap:pt,specularColorMap:ut,specularIntensityMap:At,transmission:ct,transmissionMap:O,thicknessMap:at,gradientMap:mt,opaque:S.transparent===!1&&S.blending===oi&&S.alphaToCoverage===!1,alphaMap:bt,alphaTest:lt,alphaHash:st,combine:S.combine,mapUv:Wt&&_(S.map.channel),aoMapUv:ie&&_(S.aoMap.channel),lightMapUv:Ot&&_(S.lightMap.channel),bumpMapUv:Ft&&_(S.bumpMap.channel),normalMapUv:Mt&&_(S.normalMap.channel),displacementMapUv:se&&_(S.displacementMap.channel),emissiveMapUv:Et&&_(S.emissiveMap.channel),metalnessMapUv:zt&&_(S.metalnessMap.channel),roughnessMapUv:me&&_(S.roughnessMap.channel),anisotropyMapUv:F&&_(S.anisotropyMap.channel),clearcoatMapUv:it&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:$&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(S.sheenRoughnessMap.channel),specularMapUv:pt&&_(S.specularMap.channel),specularColorMapUv:ut&&_(S.specularColorMap.channel),specularIntensityMapUv:At&&_(S.specularIntensityMap.channel),transmissionMapUv:O&&_(S.transmissionMap.channel),thicknessMapUv:at&&_(S.thicknessMap.channel),alphaMapUv:bt&&_(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Mt||he),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Wt||bt),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:It,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Wt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:Et&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ct&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&S.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function u(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let E in S.defines)b.push(E),b.push(S.defines[E]);return S.isRawShaderMaterial===!1&&(v(b,S),y(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function v(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function y(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){let b=g[S.type],E;if(b){let C=wn[b];E=Yl.clone(C.uniforms)}else E=S.uniforms;return E}function M(S,b){let E;for(let C=0,P=h.length;C<P;C++){let L=h[C];if(L.cacheKey===b){E=L,++E.usedTimes;break}}return E===void 0&&(E=new h0(i,b,S,r),h.push(E)),E}function w(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:A}}function d0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,p,d,g,_,m){let u=i[t];return u===void 0?(u={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=d,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=m),t++,u}function a(f,p,d,g,_,m){let u=o(f,p,d,g,_,m);d.transmission>0?n.push(u):d.transparent===!0?s.push(u):e.push(u)}function c(f,p,d,g,_,m){let u=o(f,p,d,g,_,m);d.transmission>0?n.unshift(u):d.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,p){e.length>1&&e.sort(f||p0),n.length>1&&n.sort(p||yh),s.length>1&&s.sort(p||yh)}function h(){for(let f=t,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function m0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new vh,i.set(n,[o])):s>=r.length?(o=new vh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function g0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Yt};break;case"SpotLight":e={position:new V,direction:new V,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new V,halfWidth:new V,halfHeight:new V};break}return i[t.id]=e,e}}}function _0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var x0=0;function y0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v0(i){let t=new g0,e=_0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let s=new V,r=new ne,o=new ne;function a(l){let h=0,f=0,p=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,u=0,v=0,y=0,x=0,M=0,w=0,T=0;l.sort(y0);for(let S=0,b=l.length;S<b;S++){let E=l[S],C=E.color,P=E.intensity,L=E.distance,z=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=C.r*P,f+=C.g*P,p+=C.b*P;else if(E.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(E.sh.coefficients[N],P);T++}else if(E.isDirectionalLight){let N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let H=E.shadow,k=e.get(E);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=E.shadow.matrix,v++}n.directional[d]=N,d++}else if(E.isSpotLight){let N=t.get(E);N.position.setFromMatrixPosition(E.matrixWorld),N.color.copy(C).multiplyScalar(P),N.distance=L,N.coneCos=Math.cos(E.angle),N.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),N.decay=E.decay,n.spot[_]=N;let H=E.shadow;if(E.map&&(n.spotLightMap[M]=E.map,M++,H.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=H.matrix,E.castShadow){let k=e.get(E);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=z,x++}_++}else if(E.isRectAreaLight){let N=t.get(E);N.color.copy(C).multiplyScalar(P),N.halfWidth.set(E.width*.5,0,0),N.halfHeight.set(0,E.height*.5,0),n.rectArea[m]=N,m++}else if(E.isPointLight){let N=t.get(E);if(N.color.copy(E.color).multiplyScalar(E.intensity),N.distance=E.distance,N.decay=E.decay,E.castShadow){let H=E.shadow,k=e.get(E);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=E.shadow.matrix,y++}n.point[g]=N,g++}else if(E.isHemisphereLight){let N=t.get(E);N.skyColor.copy(E.color).multiplyScalar(P),N.groundColor.copy(E.groundColor).multiplyScalar(P),n.hemi[u]=N,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==u||A.numDirectionalShadows!==v||A.numPointShadows!==y||A.numSpotShadows!==x||A.numSpotMaps!==M||A.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=u,A.numDirectionalShadows=v,A.numPointShadows=y,A.numSpotShadows=x,A.numSpotMaps=M,A.numLightProbes=T,n.version=x0++)}function c(l,h){let f=0,p=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let u=0,v=l.length;u<v;u++){let y=l[u];if(y.isDirectionalLight){let x=n.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Mh(i){let t=new v0(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function M0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mh(i),t.set(s,[a])):r>=o.length?(a=new Mh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var S0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function w0(i,t,e){let n=new Wi,s=new qt,r=new qt,o=new ve,a=new Nr({depthPacking:Fl}),c=new Br,l={},h=e.maxTextureSize,f={[Pn]:Be,[Be]:Pn,[sn]:sn},p=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:S0,fragmentShader:b0}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let u=this.type;this.render=function(w,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Un),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let P=u!==bn&&this.type===bn,L=u===bn&&this.type!==bn;for(let z=0,N=w.length;z<N;z++){let H=w[z],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Q=k.getFrameExtents();if(s.multiply(Q),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,k.mapSize.y=r.y)),k.map===null||P===!0||L===!0){let dt=this.type!==bn?{minFilter:Ve,magFilter:Ve}:{};k.map!==null&&k.map.dispose(),k.map=new Mn(s.x,s.y,dt),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let et=k.getViewportCount();for(let dt=0;dt<et;dt++){let It=k.getViewport(dt);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),C.viewport(o),k.updateMatrices(H,dt),n=k.getFrustum(),x(T,A,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===bn&&v(k,A),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,E)};function v(w,T){let A=t.update(_);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mn(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,A,p,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,A,d,_,null)}function y(w,T,A,S){let b=null,E=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)b=E;else if(b=A.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let C=b.uuid,P=T.uuid,L=l[C];L===void 0&&(L={},l[C]=L);let z=L[P];z===void 0&&(z=b.clone(),L[P]=z,T.addEventListener("dispose",M)),b=z}if(b.visible=T.visible,b.wireframe=T.wireframe,S===bn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:f[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let C=i.properties.get(b);C.light=A}return b}function x(w,T,A,S,b){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===bn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);let P=t.update(w),L=w.material;if(Array.isArray(L)){let z=P.groups;for(let N=0,H=z.length;N<H;N++){let k=z[N],Q=L[k.materialIndex];if(Q&&Q.visible){let et=y(w,Q,S,b);w.onBeforeShadow(i,w,T,A,P,et,k),i.renderBufferDirect(A,null,P,et,w,k),w.onAfterShadow(i,w,T,A,P,et,k)}}}else if(L.visible){let z=y(w,L,S,b);w.onBeforeShadow(i,w,T,A,P,z,null),i.renderBufferDirect(A,null,P,z,w,null),w.onAfterShadow(i,w,T,A,P,z,null)}}let C=w.children;for(let P=0,L=C.length;P<L;P++)x(C[P],T,A,S,b)}function M(w){w.target.removeEventListener("dispose",M);for(let A in l){let S=l[A],b=w.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var E0={[Jr]:$r,[Kr]:to,[Qr]:eo,[ai]:jr,[$r]:Jr,[to]:Kr,[eo]:Qr,[jr]:ai};function T0(i,t){function e(){let O=!1,at=new ve,mt=null,bt=new ve(0,0,0,0);return{setMask:function(lt){mt!==lt&&!O&&(i.colorMask(lt,lt,lt,lt),mt=lt)},setLocked:function(lt){O=lt},setClear:function(lt,st,Ct,Vt,re){re===!0&&(lt*=Vt,st*=Vt,Ct*=Vt),at.set(lt,st,Ct,Vt),bt.equals(at)===!1&&(i.clearColor(lt,st,Ct,Vt),bt.copy(at))},reset:function(){O=!1,mt=null,bt.set(-1,0,0,0)}}}function n(){let O=!1,at=!1,mt=null,bt=null,lt=null;return{setReversed:function(st){if(at!==st){let Ct=t.get("EXT_clip_control");st?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),at=st;let Vt=lt;lt=null,this.setClear(Vt)}},getReversed:function(){return at},setTest:function(st){st?K(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(st){mt!==st&&!O&&(i.depthMask(st),mt=st)},setFunc:function(st){if(at&&(st=E0[st]),bt!==st){switch(st){case Jr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case ai:i.depthFunc(i.LEQUAL);break;case Qr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case to:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=st}},setLocked:function(st){O=st},setClear:function(st){lt!==st&&(at&&(st=1-st),i.clearDepth(st),lt=st)},reset:function(){O=!1,mt=null,bt=null,lt=null,at=!1}}}function s(){let O=!1,at=null,mt=null,bt=null,lt=null,st=null,Ct=null,Vt=null,re=null;return{setTest:function(Dt){O||(Dt?K(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Dt){at!==Dt&&!O&&(i.stencilMask(Dt),at=Dt)},setFunc:function(Dt,jt,ge){(mt!==Dt||bt!==jt||lt!==ge)&&(i.stencilFunc(Dt,jt,ge),mt=Dt,bt=jt,lt=ge)},setOp:function(Dt,jt,ge){(st!==Dt||Ct!==jt||Vt!==ge)&&(i.stencilOp(Dt,jt,ge),st=Dt,Ct=jt,Vt=ge)},setLocked:function(Dt){O=Dt},setClear:function(Dt){re!==Dt&&(i.clearStencil(Dt),re=Dt)},reset:function(){O=!1,at=null,mt=null,bt=null,lt=null,st=null,Ct=null,Vt=null,re=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,u=null,v=null,y=null,x=null,M=null,w=null,T=new Yt(0,0,0),A=0,S=!1,b=null,E=null,C=null,P=null,L=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,H=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=H>=2);let Q=null,et={},dt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Bt=new ve().fromArray(dt),xt=new ve().fromArray(It);function gt(O,at,mt,bt){let lt=new Uint8Array(4),st=i.createTexture();i.bindTexture(O,st),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<mt;Ct++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(at+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return st}let Z={};Z[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(ai),Ft(!1),Mt(ka),K(i.CULL_FACE),ie(Un);function K(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ht(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function yt(O,at){return f[O]!==at?(i.bindFramebuffer(O,at),f[O]=at,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=at),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(O,at){let mt=d,bt=!1;if(O){mt=p.get(at),mt===void 0&&(mt=[],p.set(at,mt));let lt=O.textures;if(mt.length!==lt.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ct=lt.length;st<Ct;st++)mt[st]=i.COLOR_ATTACHMENT0+st;mt.length=lt.length,bt=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(mt)}function Wt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Qt={[Xn]:i.FUNC_ADD,[cl]:i.FUNC_SUBTRACT,[ll]:i.FUNC_REVERSE_SUBTRACT};Qt[hl]=i.MIN,Qt[ul]=i.MAX;let U={[fl]:i.ZERO,[dl]:i.ONE,[pl]:i.SRC_COLOR,[wr]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[xl]:i.DST_COLOR,[gl]:i.DST_ALPHA,[ml]:i.ONE_MINUS_SRC_COLOR,[Er]:i.ONE_MINUS_SRC_ALPHA,[yl]:i.ONE_MINUS_DST_COLOR,[_l]:i.ONE_MINUS_DST_ALPHA,[Ml]:i.CONSTANT_COLOR,[Sl]:i.ONE_MINUS_CONSTANT_COLOR,[bl]:i.CONSTANT_ALPHA,[wl]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(O,at,mt,bt,lt,st,Ct,Vt,re,Dt){if(O===Un){_===!0&&(ht(i.BLEND),_=!1);return}if(_===!1&&(K(i.BLEND),_=!0),O!==al){if(O!==m||Dt!==S){if((u!==Xn||x!==Xn)&&(i.blendEquation(i.FUNC_ADD),u=Xn,x=Xn),Dt)switch(O){case oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case Ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ga:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,M=null,w=null,T.set(0,0,0),A=0,m=O,S=Dt}return}lt=lt||at,st=st||mt,Ct=Ct||bt,(at!==u||lt!==x)&&(i.blendEquationSeparate(Qt[at],Qt[lt]),u=at,x=lt),(mt!==v||bt!==y||st!==M||Ct!==w)&&(i.blendFuncSeparate(U[mt],U[bt],U[st],U[Ct]),v=mt,y=bt,M=st,w=Ct),(Vt.equals(T)===!1||re!==A)&&(i.blendColor(Vt.r,Vt.g,Vt.b,re),T.copy(Vt),A=re),m=O,S=!1}function Ot(O,at){O.side===sn?ht(i.CULL_FACE):K(i.CULL_FACE);let mt=O.side===Be;at&&(mt=!mt),Ft(mt),O.blending===oi&&O.transparent===!1?ie(Un):ie(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;a.setTest(bt),bt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Et(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function Mt(O){O!==rl?(K(i.CULL_FACE),O!==E&&(O===ka?i.cullFace(i.BACK):O===ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),E=O}function se(O){O!==C&&(N&&i.lineWidth(O),C=O)}function Et(O,at,mt){O?(K(i.POLYGON_OFFSET_FILL),(P!==at||L!==mt)&&(i.polygonOffset(at,mt),P=at,L=mt)):ht(i.POLYGON_OFFSET_FILL)}function zt(O){O?K(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function me(O){O===void 0&&(O=i.TEXTURE0+z-1),Q!==O&&(i.activeTexture(O),Q=O)}function he(O,at,mt){mt===void 0&&(Q===null?mt=i.TEXTURE0+z-1:mt=Q);let bt=et[mt];bt===void 0&&(bt={type:void 0,texture:void 0},et[mt]=bt),(bt.type!==O||bt.texture!==at)&&(Q!==mt&&(i.activeTexture(mt),Q=mt),i.bindTexture(O,at||Z[O]),bt.type=O,bt.texture=at)}function D(){let O=et[Q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function tt(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(O){Bt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Bt.copy(O))}function St(O){xt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),xt.copy(O))}function pt(O,at){let mt=l.get(at);mt===void 0&&(mt=new WeakMap,l.set(at,mt));let bt=mt.get(O);bt===void 0&&(bt=i.getUniformBlockIndex(at,O.name),mt.set(O,bt))}function ut(O,at){let bt=l.get(at).get(O);c.get(at)!==bt&&(i.uniformBlockBinding(at,bt,O.__bindingPointIndex),c.set(at,bt))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,et={},f={},p=new WeakMap,d=[],g=null,_=!1,m=null,u=null,v=null,y=null,x=null,M=null,w=null,T=new Yt(0,0,0),A=0,S=!1,b=null,E=null,C=null,P=null,L=null,Bt.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:K,disable:ht,bindFramebuffer:yt,drawBuffers:wt,useProgram:Wt,setBlending:ie,setMaterial:Ot,setFlipSided:Ft,setCullFace:Mt,setLineWidth:se,setPolygonOffset:Et,setScissorTest:zt,activeTexture:me,bindTexture:he,unbindTexture:D,compressedTexImage2D:R,compressedTexImage3D:X,texImage2D:rt,texImage3D:j,updateUBOMapping:pt,uniformBlockBinding:ut,texStorage2D:$,texStorage3D:nt,texSubImage2D:tt,texSubImage3D:ct,compressedTexSubImage2D:F,compressedTexSubImage3D:it,scissor:ot,viewport:St,reset:At}}function A0(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qt,h=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return d?new OffscreenCanvas(D,R):vs("canvas")}function _(D,R,X){let tt=1,ct=he(D);if((ct.width>X||ct.height>X)&&(tt=X/Math.max(ct.width,ct.height)),tt<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let F=Math.floor(tt*ct.width),it=Math.floor(tt*ct.height);f===void 0&&(f=g(F,it));let $=R?g(F,it):f;return $.width=F,$.height=it,$.getContext("2d").drawImage(D,0,0,F,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+F+"x"+it+")."),$}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),D;return D}function m(D){return D.generateMipmaps}function u(D){i.generateMipmap(D)}function v(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(D,R,X,tt,ct=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let F=R;if(R===i.RED&&(X===i.FLOAT&&(F=i.R32F),X===i.HALF_FLOAT&&(F=i.R16F),X===i.UNSIGNED_BYTE&&(F=i.R8)),R===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(F=i.R8UI),X===i.UNSIGNED_SHORT&&(F=i.R16UI),X===i.UNSIGNED_INT&&(F=i.R32UI),X===i.BYTE&&(F=i.R8I),X===i.SHORT&&(F=i.R16I),X===i.INT&&(F=i.R32I)),R===i.RG&&(X===i.FLOAT&&(F=i.RG32F),X===i.HALF_FLOAT&&(F=i.RG16F),X===i.UNSIGNED_BYTE&&(F=i.RG8)),R===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(F=i.RG8UI),X===i.UNSIGNED_SHORT&&(F=i.RG16UI),X===i.UNSIGNED_INT&&(F=i.RG32UI),X===i.BYTE&&(F=i.RG8I),X===i.SHORT&&(F=i.RG16I),X===i.INT&&(F=i.RG32I)),R===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(F=i.RGB8UI),X===i.UNSIGNED_SHORT&&(F=i.RGB16UI),X===i.UNSIGNED_INT&&(F=i.RGB32UI),X===i.BYTE&&(F=i.RGB8I),X===i.SHORT&&(F=i.RGB16I),X===i.INT&&(F=i.RGB32I)),R===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),X===i.UNSIGNED_INT&&(F=i.RGBA32UI),X===i.BYTE&&(F=i.RGBA8I),X===i.SHORT&&(F=i.RGBA16I),X===i.INT&&(F=i.RGBA32I)),R===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),R===i.RGBA){let it=ct?xs:te.getTransfer(tt);X===i.FLOAT&&(F=i.RGBA32F),X===i.HALF_FLOAT&&(F=i.RGBA16F),X===i.UNSIGNED_BYTE&&(F=it===oe?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function x(D,R){let X;return D?R===null||R===Qn||R===Ki?X=i.DEPTH24_STENCIL8:R===xn?X=i.DEPTH32F_STENCIL8:R===Ji&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Qn||R===Ki?X=i.DEPTH_COMPONENT24:R===xn?X=i.DEPTH_COMPONENT32F:R===Ji&&(X=i.DEPTH_COMPONENT16),X}function M(D,R){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ve&&D.minFilter!==fn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function w(D){let R=D.target;R.removeEventListener("dispose",w),A(R),R.isVideoTexture&&h.delete(R)}function T(D){let R=D.target;R.removeEventListener("dispose",T),b(R)}function A(D){let R=n.get(D);if(R.__webglInit===void 0)return;let X=D.source,tt=p.get(X);if(tt){let ct=tt[R.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(D),Object.keys(tt).length===0&&p.delete(X)}n.remove(D)}function S(D){let R=n.get(D);i.deleteTexture(R.__webglTexture);let X=D.source,tt=p.get(X);delete tt[R.__cacheKey],o.memory.textures--}function b(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(R.__webglFramebuffer[tt]))for(let ct=0;ct<R.__webglFramebuffer[tt].length;ct++)i.deleteFramebuffer(R.__webglFramebuffer[tt][ct]);else i.deleteFramebuffer(R.__webglFramebuffer[tt]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[tt])}else{if(Array.isArray(R.__webglFramebuffer))for(let tt=0;tt<R.__webglFramebuffer.length;tt++)i.deleteFramebuffer(R.__webglFramebuffer[tt]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let tt=0;tt<R.__webglColorRenderbuffer.length;tt++)R.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[tt]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let X=D.textures;for(let tt=0,ct=X.length;tt<ct;tt++){let F=n.get(X[tt]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(X[tt])}n.remove(D)}let E=0;function C(){E=0}function P(){let D=E;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),E+=1,D}function L(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function z(D,R){let X=n.get(D);if(D.isVideoTexture&&zt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&X.__version!==D.version){let tt=D.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(X,D,R);return}}else D.isExternalTexture&&(X.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+R)}function N(D,R){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Z(X,D,R);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+R)}function H(D,R){let X=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&X.__version!==D.version){Z(X,D,R);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+R)}function k(D,R){let X=n.get(D);if(D.version>0&&X.__version!==D.version){K(X,D,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+R)}let Q={[Bi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Tr]:i.MIRRORED_REPEAT},et={[Ve]:i.NEAREST,[Ll]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},dt={[Bl]:i.NEVER,[Gl]:i.ALWAYS,[Ol]:i.LESS,[ec]:i.LEQUAL,[zl]:i.EQUAL,[Vl]:i.GEQUAL,[kl]:i.GREATER,[Hl]:i.NOTEQUAL};function It(D,R){if(R.type===xn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===fn||R.magFilter===ro||R.magFilter===Ws||R.magFilter===Kn||R.minFilter===fn||R.minFilter===ro||R.minFilter===Ws||R.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Q[R.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Q[R.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Q[R.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,et[R.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,et[R.minFilter]),R.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,dt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Ve||R.minFilter!==Ws&&R.minFilter!==Kn||R.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Bt(D,R){let X=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",w));let tt=R.source,ct=p.get(tt);ct===void 0&&(ct={},p.set(tt,ct));let F=L(R);if(F!==D.__cacheKey){ct[F]===void 0&&(ct[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ct[F].usedTimes++;let it=ct[D.__cacheKey];it!==void 0&&(ct[D.__cacheKey].usedTimes--,it.usedTimes===0&&S(R)),D.__cacheKey=F,D.__webglTexture=ct[F].texture}return X}function xt(D,R,X){return Math.floor(Math.floor(D/X)/R)}function gt(D,R,X,tt){let F=D.updateRanges;if(F.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,X,tt,R.data);else{F.sort((j,ot)=>j.start-ot.start);let it=0;for(let j=1;j<F.length;j++){let ot=F[it],St=F[j],pt=ot.start+ot.count,ut=xt(St.start,R.width,4),At=xt(ot.start,R.width,4);St.start<=pt+1&&ut===At&&xt(St.start+St.count-1,R.width,4)===ut?ot.count=Math.max(ot.count,St.start+St.count-ot.start):(++it,F[it]=St)}F.length=it+1;let $=i.getParameter(i.UNPACK_ROW_LENGTH),nt=i.getParameter(i.UNPACK_SKIP_PIXELS),rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let j=0,ot=F.length;j<ot;j++){let St=F[j],pt=Math.floor(St.start/4),ut=Math.ceil(St.count/4),At=pt%R.width,O=Math.floor(pt/R.width),at=ut,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,At),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,At,O,at,mt,X,tt,R.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,$),i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,rt)}}function Z(D,R,X){let tt=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(tt=i.TEXTURE_3D);let ct=Bt(D,R),F=R.source;e.bindTexture(tt,D.__webglTexture,i.TEXTURE0+X);let it=n.get(F);if(F.version!==it.__version||ct===!0){e.activeTexture(i.TEXTURE0+X);let $=te.getPrimaries(te.workingColorSpace),nt=R.colorSpace===Nn?null:te.getPrimaries(R.colorSpace),rt=R.colorSpace===Nn||$===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let j=_(R.image,!1,s.maxTextureSize);j=me(R,j);let ot=r.convert(R.format,R.colorSpace),St=r.convert(R.type),pt=y(R.internalFormat,ot,St,R.colorSpace,R.isVideoTexture);It(tt,R);let ut,At=R.mipmaps,O=R.isVideoTexture!==!0,at=it.__version===void 0||ct===!0,mt=F.dataReady,bt=M(R,j);if(R.isDepthTexture)pt=x(R.format===Qi,R.type),at&&(O?e.texStorage2D(i.TEXTURE_2D,1,pt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,pt,j.width,j.height,0,ot,St,null));else if(R.isDataTexture)if(At.length>0){O&&at&&e.texStorage2D(i.TEXTURE_2D,bt,pt,At[0].width,At[0].height);for(let lt=0,st=At.length;lt<st;lt++)ut=At[lt],O?mt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,ut.width,ut.height,ot,St,ut.data):e.texImage2D(i.TEXTURE_2D,lt,pt,ut.width,ut.height,0,ot,St,ut.data);R.generateMipmaps=!1}else O?(at&&e.texStorage2D(i.TEXTURE_2D,bt,pt,j.width,j.height),mt&&gt(R,j,ot,St)):e.texImage2D(i.TEXTURE_2D,0,pt,j.width,j.height,0,ot,St,j.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){O&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,pt,At[0].width,At[0].height,j.depth);for(let lt=0,st=At.length;lt<st;lt++)if(ut=At[lt],R.format!==rn)if(ot!==null)if(O){if(mt)if(R.layerUpdates.size>0){let Ct=ac(ut.width,ut.height,R.format,R.type);for(let Vt of R.layerUpdates){let re=ut.data.subarray(Vt*Ct/ut.data.BYTES_PER_ELEMENT,(Vt+1)*Ct/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Vt,ut.width,ut.height,1,ot,re)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,ut.width,ut.height,j.depth,ot,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,pt,ut.width,ut.height,j.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,ut.width,ut.height,j.depth,ot,St,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,pt,ut.width,ut.height,j.depth,0,ot,St,ut.data)}else{O&&at&&e.texStorage2D(i.TEXTURE_2D,bt,pt,At[0].width,At[0].height);for(let lt=0,st=At.length;lt<st;lt++)ut=At[lt],R.format!==rn?ot!==null?O?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,ut.width,ut.height,ot,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,pt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?mt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,ut.width,ut.height,ot,St,ut.data):e.texImage2D(i.TEXTURE_2D,lt,pt,ut.width,ut.height,0,ot,St,ut.data)}else if(R.isDataArrayTexture)if(O){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,pt,j.width,j.height,j.depth),mt)if(R.layerUpdates.size>0){let lt=ac(j.width,j.height,R.format,R.type);for(let st of R.layerUpdates){let Ct=j.data.subarray(st*lt/j.data.BYTES_PER_ELEMENT,(st+1)*lt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,j.width,j.height,1,ot,St,Ct)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ot,St,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,j.width,j.height,j.depth,0,ot,St,j.data);else if(R.isData3DTexture)O?(at&&e.texStorage3D(i.TEXTURE_3D,bt,pt,j.width,j.height,j.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ot,St,j.data)):e.texImage3D(i.TEXTURE_3D,0,pt,j.width,j.height,j.depth,0,ot,St,j.data);else if(R.isFramebufferTexture){if(at)if(O)e.texStorage2D(i.TEXTURE_2D,bt,pt,j.width,j.height);else{let lt=j.width,st=j.height;for(let Ct=0;Ct<bt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,pt,lt,st,0,ot,St,null),lt>>=1,st>>=1}}else if(At.length>0){if(O&&at){let lt=he(At[0]);e.texStorage2D(i.TEXTURE_2D,bt,pt,lt.width,lt.height)}for(let lt=0,st=At.length;lt<st;lt++)ut=At[lt],O?mt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,ot,St,ut):e.texImage2D(i.TEXTURE_2D,lt,pt,ot,St,ut);R.generateMipmaps=!1}else if(O){if(at){let lt=he(j);e.texStorage2D(i.TEXTURE_2D,bt,pt,lt.width,lt.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,St,j)}else e.texImage2D(i.TEXTURE_2D,0,pt,ot,St,j);m(R)&&u(tt),it.__version=F.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function K(D,R,X){if(R.image.length!==6)return;let tt=Bt(D,R),ct=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+X);let F=n.get(ct);if(ct.version!==F.__version||tt===!0){e.activeTexture(i.TEXTURE0+X);let it=te.getPrimaries(te.workingColorSpace),$=R.colorSpace===Nn?null:te.getPrimaries(R.colorSpace),nt=R.colorSpace===Nn||it===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let rt=R.isCompressedTexture||R.image[0].isCompressedTexture,j=R.image[0]&&R.image[0].isDataTexture,ot=[];for(let st=0;st<6;st++)!rt&&!j?ot[st]=_(R.image[st],!0,s.maxCubemapSize):ot[st]=j?R.image[st].image:R.image[st],ot[st]=me(R,ot[st]);let St=ot[0],pt=r.convert(R.format,R.colorSpace),ut=r.convert(R.type),At=y(R.internalFormat,pt,ut,R.colorSpace),O=R.isVideoTexture!==!0,at=F.__version===void 0||tt===!0,mt=ct.dataReady,bt=M(R,St);It(i.TEXTURE_CUBE_MAP,R);let lt;if(rt){O&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,At,St.width,St.height);for(let st=0;st<6;st++){lt=ot[st].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){let Vt=lt[Ct];R.format!==rn?pt!==null?O?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,Vt.width,Vt.height,pt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,At,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,0,0,Vt.width,Vt.height,pt,ut,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct,At,Vt.width,Vt.height,0,pt,ut,Vt.data)}}}else{if(lt=R.mipmaps,O&&at){lt.length>0&&bt++;let st=he(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,At,st.width,st.height)}for(let st=0;st<6;st++)if(j){O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ot[st].width,ot[st].height,pt,ut,ot[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,At,ot[st].width,ot[st].height,0,pt,ut,ot[st].data);for(let Ct=0;Ct<lt.length;Ct++){let re=lt[Ct].image[st].image;O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,re.width,re.height,pt,ut,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,At,re.width,re.height,0,pt,ut,re.data)}}else{O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,pt,ut,ot[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,At,pt,ut,ot[st]);for(let Ct=0;Ct<lt.length;Ct++){let Vt=lt[Ct];O?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,0,0,pt,ut,Vt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ct+1,At,pt,ut,Vt.image[st])}}}m(R)&&u(i.TEXTURE_CUBE_MAP),F.__version=ct.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function ht(D,R,X,tt,ct,F){let it=r.convert(X.format,X.colorSpace),$=r.convert(X.type),nt=y(X.internalFormat,it,$,X.colorSpace),rt=n.get(R),j=n.get(X);if(j.__renderTarget=R,!rt.__hasExternalTextures){let ot=Math.max(1,R.width>>F),St=Math.max(1,R.height>>F);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,F,nt,ot,St,R.depth,0,it,$,null):e.texImage2D(ct,F,nt,ot,St,0,it,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),Et(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,ct,j.__webglTexture,0,se(R)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,ct,j.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(D,R,X){if(i.bindRenderbuffer(i.RENDERBUFFER,D),R.depthBuffer){let tt=R.depthTexture,ct=tt&&tt.isDepthTexture?tt.type:null,F=x(R.stencilBuffer,ct),it=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=se(R);Et(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,F,R.width,R.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,F,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,F,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,D)}else{let tt=R.textures;for(let ct=0;ct<tt.length;ct++){let F=tt[ct],it=r.convert(F.format,F.colorSpace),$=r.convert(F.type),nt=y(F.internalFormat,it,$,F.colorSpace),rt=se(R);X&&Et(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,nt,R.width,R.height):Et(R)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,nt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,nt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(R.depthTexture);tt.__renderTarget=R,(!tt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),z(R.depthTexture,0);let ct=tt.__webglTexture,F=se(R);if(R.depthTexture.format===Oi)Et(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(R.depthTexture.format===Qi)Et(R)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Wt(D){let R=n.get(D),X=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let tt=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),tt){let ct=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,tt.removeEventListener("dispose",ct)};tt.addEventListener("dispose",ct),R.__depthDisposeCallback=ct}R.__boundDepthTexture=tt}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");let tt=D.texture.mipmaps;tt&&tt.length>0?wt(R.__webglFramebuffer[0],D):wt(R.__webglFramebuffer,D)}else if(X){R.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[tt]),R.__webglDepthbuffer[tt]===void 0)R.__webglDepthbuffer[tt]=i.createRenderbuffer(),yt(R.__webglDepthbuffer[tt],D,!1);else{let ct=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=R.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,F)}}else{let tt=D.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),yt(R.__webglDepthbuffer,D,!1);else{let ct=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,F)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(D,R,X){let tt=n.get(D);R!==void 0&&ht(tt.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Wt(D)}function U(D){let R=D.texture,X=n.get(D),tt=n.get(R);D.addEventListener("dispose",T);let ct=D.textures,F=D.isWebGLCubeRenderTarget===!0,it=ct.length>1;if(it||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=R.version,o.memory.textures++),F){X.__webglFramebuffer=[];for(let $=0;$<6;$++)if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer[$]=[];for(let nt=0;nt<R.mipmaps.length;nt++)X.__webglFramebuffer[$][nt]=i.createFramebuffer()}else X.__webglFramebuffer[$]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){X.__webglFramebuffer=[];for(let $=0;$<R.mipmaps.length;$++)X.__webglFramebuffer[$]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(it)for(let $=0,nt=ct.length;$<nt;$++){let rt=n.get(ct[$]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Et(D)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let $=0;$<ct.length;$++){let nt=ct[$];X.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[$]);let rt=r.convert(nt.format,nt.colorSpace),j=r.convert(nt.type),ot=y(nt.internalFormat,rt,j,nt.colorSpace,D.isXRRenderTarget===!0),St=se(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ot,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,X.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(X.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),It(i.TEXTURE_CUBE_MAP,R);for(let $=0;$<6;$++)if(R.mipmaps&&R.mipmaps.length>0)for(let nt=0;nt<R.mipmaps.length;nt++)ht(X.__webglFramebuffer[$][nt],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,nt);else ht(X.__webglFramebuffer[$],D,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(R)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){for(let $=0,nt=ct.length;$<nt;$++){let rt=ct[$],j=n.get(rt),ot=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ot=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,j.__webglTexture),It(ot,rt),ht(X.__webglFramebuffer,D,rt,i.COLOR_ATTACHMENT0+$,ot,0),m(rt)&&u(ot)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&($=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,tt.__webglTexture),It($,R),R.mipmaps&&R.mipmaps.length>0)for(let nt=0;nt<R.mipmaps.length;nt++)ht(X.__webglFramebuffer[nt],D,R,i.COLOR_ATTACHMENT0,$,nt);else ht(X.__webglFramebuffer,D,R,i.COLOR_ATTACHMENT0,$,0);m(R)&&u($),e.unbindTexture()}D.depthBuffer&&Wt(D)}function ie(D){let R=D.textures;for(let X=0,tt=R.length;X<tt;X++){let ct=R[X];if(m(ct)){let F=v(D),it=n.get(ct).__webglTexture;e.bindTexture(F,it),u(F),e.unbindTexture()}}}let Ot=[],Ft=[];function Mt(D){if(D.samples>0){if(Et(D)===!1){let R=D.textures,X=D.width,tt=D.height,ct=i.COLOR_BUFFER_BIT,F=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=n.get(D),$=R.length>1;if($)for(let rt=0;rt<R.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer);let nt=D.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let rt=0;rt<R.length;rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,it.__webglColorRenderbuffer[rt]);let j=n.get(R[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,X,tt,0,0,X,tt,ct,i.NEAREST),c===!0&&(Ot.length=0,Ft.length=0,Ot.push(i.COLOR_ATTACHMENT0+rt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ot.push(F),Ft.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let rt=0;rt<R.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,it.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,it.__webglColorRenderbuffer[rt]);let j=n.get(R[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,it.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let R=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function se(D){return Math.min(s.maxSamples,D.samples)}function Et(D){let R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function zt(D){let R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function me(D,R){let X=D.colorSpace,tt=D.format,ct=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||X!==ci&&X!==Nn&&(te.getTransfer(X)===oe?(tt!==rn||ct!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),R}function he(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Qt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Et}function R0(i,t){function e(n,s=Nn){let r,o=te.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ja)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$a)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ya)return i.BYTE;if(n===Za)return i.SHORT;if(n===Ji)return i.UNSIGNED_SHORT;if(n===oo)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===$i)return i.HALF_FLOAT;if(n===Ka)return i.ALPHA;if(n===Qa)return i.RGB;if(n===rn)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Qi)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===ho)return i.RED_INTEGER;if(n===ja)return i.RG;if(n===uo)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Zs)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===yo||n===vo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===yo)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===So||n===bo||n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Do||n===Lo||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fo||n===No||n===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fo)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===zo||n===ko||n===Ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I0=`
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

}`,vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ps(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:C0,fragmentShader:I0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mc=class extends Dn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,d=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new vc,u={},v=e.getContextAttributes(),y=null,x=null,M=[],w=[],T=new qt,A=null,S=new De;S.viewport=new ve;let b=new De;b.viewport=new ve;let E=[S,b],C=new Yr,P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=M[Z];return K===void 0&&(K=new Gi,M[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=M[Z];return K===void 0&&(K=new Gi,M[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=M[Z];return K===void 0&&(K=new Gi,M[Z]=K),K.getHandSpace()};function z(Z){let K=w.indexOf(Z.inputSource);if(K===-1)return;let ht=M[K];ht!==void 0&&(ht.update(Z.inputSource,Z.frame,l||o),ht.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",H);for(let Z=0;Z<M.length;Z++){let K=w[Z];K!==null&&(w[Z]=null,M[Z].disconnect(K))}P=null,L=null,m.reset();for(let Z in u)delete u[Z];t.setRenderTarget(y),d=null,p=null,f=null,s=null,x=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",N),s.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,yt=null,wt=null;v.depth&&(wt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=v.stencil?Qi:Oi,yt=v.stencil?Ki:Qn);let Wt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(Wt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new Mn(p.textureWidth,p.textureHeight,{format:rn,type:_n,depthTexture:new Is(p.textureWidth,p.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{let ht={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Mn(d.framebufferWidth,d.framebufferHeight,{format:rn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(Z){for(let K=0;K<Z.removed.length;K++){let ht=Z.removed[K],yt=w.indexOf(ht);yt>=0&&(w[yt]=null,M[yt].disconnect(ht))}for(let K=0;K<Z.added.length;K++){let ht=Z.added[K],yt=w.indexOf(ht);if(yt===-1){for(let Wt=0;Wt<M.length;Wt++)if(Wt>=w.length){w.push(ht),yt=Wt;break}else if(w[Wt]===null){w[Wt]=ht,yt=Wt;break}if(yt===-1)break}let wt=M[yt];wt&&wt.connect(ht)}}let k=new V,Q=new V;function et(Z,K,ht){k.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ht.matrixWorld);let yt=k.distanceTo(Q),wt=K.projectionMatrix.elements,Wt=ht.projectionMatrix.elements,Qt=wt[14]/(wt[10]-1),U=wt[14]/(wt[10]+1),ie=(wt[9]+1)/wt[5],Ot=(wt[9]-1)/wt[5],Ft=(wt[8]-1)/wt[0],Mt=(Wt[8]+1)/Wt[0],se=Qt*Ft,Et=Qt*Mt,zt=yt/(-Ft+Mt),me=zt*-Ft;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(me),Z.translateZ(zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),wt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let he=Qt+zt,D=U+zt,R=se-me,X=Et+(yt-me),tt=ie*U/D*he,ct=Ot*U/D*he;Z.projectionMatrix.makePerspective(R,X,tt,ct,he,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function dt(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let K=Z.near,ht=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),C.near=b.near=S.near=K,C.far=b.far=S.far=ht,(P!==C.near||L!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,L=C.far),C.layers.mask=Z.layers.mask|6,S.layers.mask=C.layers.mask&3,b.layers.mask=C.layers.mask&5;let yt=Z.parent,wt=C.cameras;dt(C,yt);for(let Wt=0;Wt<wt.length;Wt++)dt(wt[Wt],yt);wt.length===2?et(C,S,b):C.projectionMatrix.copy(S.projectionMatrix),It(Z,C,yt)};function It(Z,K,ht){ht===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(ht.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Rr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(Z){c=Z,p!==null&&(p.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return u[Z]};let Bt=null;function xt(Z,K){if(h=K.getViewerPose(l||o),g=K,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let yt=!1;ht.length!==C.cameras.length&&(C.cameras.length=0,yt=!0);for(let U=0;U<ht.length;U++){let ie=ht[U],Ot=null;if(d!==null)Ot=d.getViewport(ie);else{let Mt=f.getViewSubImage(p,ie);Ot=Mt.viewport,U===0&&(t.setRenderTargetTextures(x,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(x))}let Ft=E[U];Ft===void 0&&(Ft=new De,Ft.layers.enable(U),Ft.viewport=new ve,E[U]=Ft),Ft.matrix.fromArray(ie.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(ie.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),U===0&&(C.matrix.copy(Ft.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),yt===!0&&C.cameras.push(Ft)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let U=f.getDepthInformation(ht[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let U=0;U<ht.length;U++){let ie=ht[U].camera;if(ie){let Ot=u[ie];Ot||(Ot=new Ps,u[ie]=Ot);let Ft=f.getCameraImage(ie);Ot.sourceTexture=Ft}}}}for(let ht=0;ht<M.length;ht++){let yt=w[ht],wt=M[ht];yt!==null&&wt!==void 0&&wt.update(yt,K,l||o)}Bt&&Bt(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let gt=new Sh;gt.setAnimationLoop(xt),this.setAnimationLoop=function(Z){Bt=Z},this.dispose=function(){}}},xi=new dn,P0=new ne;function D0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,sc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,v,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&d(m,u,x)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),_(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,v,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Be&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Be&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let v=t.get(u),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,xi.copy(x),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,v,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=y*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Be&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function _(m,u){let v=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function L0(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));let M=y.program;n.updateUBOMapping(v,M);let w=t.render.frame;r[v.id]!==w&&(p(v),r[v.id]=w)}function h(v){let y=f();v.__bindingPointIndex=y;let x=i.createBuffer(),M=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let y=s[v.id],x=v.uniforms,M=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,T=x.length;w<T;w++){let A=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,b=A.length;S<b;S++){let E=A[S];if(d(E,w,S,M)===!0){let C=E.__offset,P=Array.isArray(E.value)?E.value:[E.value],L=0;for(let z=0;z<P.length;z++){let N=P[z],H=_(N);typeof N=="number"||typeof N=="boolean"?(E.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,C+L,E.__data)):N.isMatrix3?(E.__data[0]=N.elements[0],E.__data[1]=N.elements[1],E.__data[2]=N.elements[2],E.__data[3]=0,E.__data[4]=N.elements[3],E.__data[5]=N.elements[4],E.__data[6]=N.elements[5],E.__data[7]=0,E.__data[8]=N.elements[6],E.__data[9]=N.elements[7],E.__data[10]=N.elements[8],E.__data[11]=0):(N.toArray(E.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,x,M){let w=v.value,T=y+"_"+x;if(M[T]===void 0)return typeof w=="number"||typeof w=="boolean"?M[T]=w:M[T]=w.clone(),!0;{let A=M[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return M[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(v){let y=v.uniforms,x=0,M=16;for(let T=0,A=y.length;T<A;T++){let S=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,E=S.length;b<E;b++){let C=S[b],P=Array.isArray(C.value)?C.value:[C.value];for(let L=0,z=P.length;L<z;L++){let N=P[L],H=_(N),k=x%M,Q=k%H.boundary,et=k+Q;x+=Q,et!==0&&M-et<H.storage&&(x+=M-et),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=x,x+=H.storage}}}let w=x%M;return w>0&&(x+=M-w),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var qo=class{constructor(t={}){let{canvas:e=Wl(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,u=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,M=!1;this._outputColorSpace=Pe;let w=0,T=0,A=null,S=-1,b=null,E=new ve,C=new ve,P=null,L=new Yt(0),z=0,N=e.width,H=e.height,k=1,Q=null,et=null,dt=new ve(0,0,N,H),It=new ve(0,0,N,H),Bt=!1,xt=new Wi,gt=!1,Z=!1,K=new ne,ht=new V,yt=new ve,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Qt(){return A===null?k:1}let U=n;function ie(I,G){return e.getContext(I,G)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let G="webgl2";if(U=ie(G,I),U===null)throw ie(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ot,Ft,Mt,se,Et,zt,me,he,D,R,X,tt,ct,F,it,$,nt,rt,j,ot,St,pt,ut,At;function O(){Ot=new Kp(U),Ot.init(),pt=new R0(U,Ot),Ft=new Wp(U,Ot,t,pt),Mt=new T0(U,Ot),Ft.reversedDepthBuffer&&p&&Mt.buffers.depth.setReversed(!0),se=new tm(U),Et=new d0,zt=new A0(U,Ot,Mt,Et,Ft,pt,se),me=new qp(x),he=new $p(x),D=new of(U),ut=new Vp(U,D),R=new Qp(U,D,se,ut),X=new nm(U,R,D,se),j=new em(U,Ft,zt),$=new Xp(Et),tt=new f0(x,me,he,Ot,Ft,ut,$),ct=new D0(x,Et),F=new m0,it=new M0(Ot),rt=new Hp(x,me,he,Mt,X,d,c),nt=new w0(x,X,Ft),At=new L0(U,se,Ft,Mt),ot=new Gp(U,Ot,se),St=new jp(U,Ot,se),se.programs=tt.programs,x.capabilities=Ft,x.extensions=Ot,x.properties=Et,x.renderLists=F,x.shadowMap=nt,x.state=Mt,x.info=se}O();let at=new Mc(x,U);this.xr=at,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let I=Ot.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ot.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(I){I!==void 0&&(k=I,this.setSize(N,H,!1))},this.getSize=function(I){return I.set(N,H)},this.setSize=function(I,G,q=!0){if(at.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=I,H=G,e.width=Math.floor(I*k),e.height=Math.floor(G*k),q===!0&&(e.style.width=I+"px",e.style.height=G+"px"),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(N*k,H*k).floor()},this.setDrawingBufferSize=function(I,G,q){N=I,H=G,k=q,e.width=Math.floor(I*q),e.height=Math.floor(G*q),this.setViewport(0,0,I,G)},this.getCurrentViewport=function(I){return I.copy(E)},this.getViewport=function(I){return I.copy(dt)},this.setViewport=function(I,G,q,J){I.isVector4?dt.set(I.x,I.y,I.z,I.w):dt.set(I,G,q,J),Mt.viewport(E.copy(dt).multiplyScalar(k).round())},this.getScissor=function(I){return I.copy(It)},this.setScissor=function(I,G,q,J){I.isVector4?It.set(I.x,I.y,I.z,I.w):It.set(I,G,q,J),Mt.scissor(C.copy(It).multiplyScalar(k).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(I){Mt.setScissorTest(Bt=I)},this.setOpaqueSort=function(I){Q=I},this.setTransparentSort=function(I){et=I},this.getClearColor=function(I){return I.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,q=!0){let J=0;if(I){let W=!1;if(A!==null){let ft=A.texture.format;W=ft===fo||ft===uo||ft===ho}if(W){let ft=A.texture.type,vt=ft===_n||ft===Qn||ft===Ji||ft===Ki||ft===ao||ft===co,Pt=rt.getClearColor(),Rt=rt.getClearAlpha(),kt=Pt.r,Ht=Pt.g,Lt=Pt.b;vt?(g[0]=kt,g[1]=Ht,g[2]=Lt,g[3]=Rt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=kt,_[1]=Ht,_[2]=Lt,_[3]=Rt,U.clearBufferiv(U.COLOR,0,_))}else J|=U.COLOR_BUFFER_BIT}G&&(J|=U.DEPTH_BUFFER_BIT),q&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),rt.dispose(),F.dispose(),it.dispose(),Et.dispose(),me.dispose(),he.dispose(),X.dispose(),ut.dispose(),At.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",ge),at.removeEventListener("sessionend",an),ze.stop()};function mt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=se.autoReset,G=nt.enabled,q=nt.autoUpdate,J=nt.needsUpdate,W=nt.type;O(),se.autoReset=I,nt.enabled=G,nt.autoUpdate=q,nt.needsUpdate=J,nt.type=W}function lt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function st(I){let G=I.target;G.removeEventListener("dispose",st),Ct(G)}function Ct(I){Vt(I),Et.remove(I)}function Vt(I){let G=Et.get(I).programs;G!==void 0&&(G.forEach(function(q){tt.releaseProgram(q)}),I.isShaderMaterial&&tt.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,q,J,W,ft){G===null&&(G=wt);let vt=W.isMesh&&W.matrixWorld.determinant()<0,Pt=$h(I,G,q,J,W);Mt.setMaterial(J,vt);let Rt=q.index,kt=1;if(J.wireframe===!0){if(Rt=R.getWireframeAttribute(q),Rt===void 0)return;kt=2}let Ht=q.drawRange,Lt=q.attributes.position,Jt=Ht.start*kt,ae=(Ht.start+Ht.count)*kt;ft!==null&&(Jt=Math.max(Jt,ft.start*kt),ae=Math.min(ae,(ft.start+ft.count)*kt)),Rt!==null?(Jt=Math.max(Jt,0),ae=Math.min(ae,Rt.count)):Lt!=null&&(Jt=Math.max(Jt,0),ae=Math.min(ae,Lt.count));let Me=ae-Jt;if(Me<0||Me===1/0)return;ut.setup(W,J,Pt,q,Rt);let ue,ce=ot;if(Rt!==null&&(ue=D.get(Rt),ce=St,ce.setIndex(ue)),W.isMesh)J.wireframe===!0?(Mt.setLineWidth(J.wireframeLinewidth*Qt()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(W.isLine){let Nt=J.linewidth;Nt===void 0&&(Nt=1),Mt.setLineWidth(Nt*Qt()),W.isLineSegments?ce.setMode(U.LINES):W.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else W.isPoints?ce.setMode(U.POINTS):W.isSprite&&ce.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Nt=W._multiDrawStarts,_e=W._multiDrawCounts,ee=W._multiDrawCount,We=Rt?D.get(Rt).bytesPerElement:1,Si=Et.get(J).currentProgram.getUniforms();for(let Xe=0;Xe<ee;Xe++)Si.setValue(U,"_gl_DrawID",Xe),ce.render(Nt[Xe]/We,_e[Xe])}else if(W.isInstancedMesh)ce.renderInstances(Jt,Me,W.count);else if(q.isInstancedBufferGeometry){let Nt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_e=Math.min(q.instanceCount,Nt);ce.renderInstances(Jt,Me,_e)}else ce.render(Jt,Me)};function re(I,G,q){I.transparent===!0&&I.side===sn&&I.forceSinglePass===!1?(I.side=Be,I.needsUpdate=!0,er(I,G,q),I.side=Pn,I.needsUpdate=!0,er(I,G,q),I.side=sn):er(I,G,q)}this.compile=function(I,G,q=null){q===null&&(q=I),u=it.get(q),u.init(G),y.push(u),q.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),I!==q&&I.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(u.pushLight(W),W.castShadow&&u.pushShadow(W))}),u.setupLights();let J=new Set;return I.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let ft=W.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){let Pt=ft[vt];re(Pt,q,W),J.add(Pt)}else re(ft,q,W),J.add(ft)}),u=y.pop(),J},this.compileAsync=function(I,G,q=null){let J=this.compile(I,G,q);return new Promise(W=>{function ft(){if(J.forEach(function(vt){Et.get(vt).currentProgram.isReady()&&J.delete(vt)}),J.size===0){W(I);return}setTimeout(ft,10)}Ot.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let Dt=null;function jt(I){Dt&&Dt(I)}function ge(){ze.stop()}function an(){ze.start()}let ze=new Sh;ze.setAnimationLoop(jt),typeof self!="undefined"&&ze.setContext(self),this.setAnimationLoop=function(I){Dt=I,at.setAnimationLoop(I),I===null?ze.stop():ze.start()},at.addEventListener("sessionstart",ge),at.addEventListener("sessionend",an),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(at.cameraAutoUpdate===!0&&at.updateCamera(G),G=at.getCamera()),I.isScene===!0&&I.onBeforeRender(x,I,G,A),u=it.get(I,y.length),u.init(G),y.push(u),K.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),xt.setFromProjectionMatrix(K,un,G.reversedDepth),Z=this.localClippingEnabled,gt=$.init(this.clippingPlanes,Z),m=F.get(I,v.length),m.init(),v.push(m),at.enabled===!0&&at.isPresenting===!0){let ft=x.xr.getDepthSensingMesh();ft!==null&&ea(ft,G,-1/0,x.sortObjects)}ea(I,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,et),Wt=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,Wt&&rt.addToRenderList(m,I),this.info.render.frame++,gt===!0&&$.beginShadows();let q=u.state.shadowsArray;nt.render(q,I,G),gt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,W=m.transmissive;if(u.setupLights(),G.isArrayCamera){let ft=G.cameras;if(W.length>0)for(let vt=0,Pt=ft.length;vt<Pt;vt++){let Rt=ft[vt];Cc(J,W,I,Rt)}Wt&&rt.render(I);for(let vt=0,Pt=ft.length;vt<Pt;vt++){let Rt=ft[vt];Rc(m,I,Rt,Rt.viewport)}}else W.length>0&&Cc(J,W,I,G),Wt&&rt.render(I),Rc(m,I,G);A!==null&&T===0&&(zt.updateMultisampleRenderTarget(A),zt.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(x,I,G),ut.resetDefaultState(),S=-1,b=null,y.pop(),y.length>0?(u=y[y.length-1],gt===!0&&$.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function ea(I,G,q,J){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)q=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLight)u.pushLight(I),I.castShadow&&u.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||xt.intersectsSprite(I)){J&&yt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(K);let vt=X.update(I),Pt=I.material;Pt.visible&&m.push(I,vt,Pt,q,yt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||xt.intersectsObject(I))){let vt=X.update(I),Pt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),yt.copy(I.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),yt.copy(vt.boundingSphere.center)),yt.applyMatrix4(I.matrixWorld).applyMatrix4(K)),Array.isArray(Pt)){let Rt=vt.groups;for(let kt=0,Ht=Rt.length;kt<Ht;kt++){let Lt=Rt[kt],Jt=Pt[Lt.materialIndex];Jt&&Jt.visible&&m.push(I,vt,Jt,q,yt.z,Lt)}}else Pt.visible&&m.push(I,vt,Pt,q,yt.z,null)}}let ft=I.children;for(let vt=0,Pt=ft.length;vt<Pt;vt++)ea(ft[vt],G,q,J)}function Rc(I,G,q,J){let W=I.opaque,ft=I.transmissive,vt=I.transparent;u.setupLightsView(q),gt===!0&&$.setGlobalState(x.clippingPlanes,q),J&&Mt.viewport(E.copy(J)),W.length>0&&tr(W,G,q),ft.length>0&&tr(ft,G,q),vt.length>0&&tr(vt,G,q),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Cc(I,G,q,J){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new Mn(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?$i:_n,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));let ft=u.state.transmissionRenderTarget[J.id],vt=J.viewport||E;ft.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);let Pt=x.getRenderTarget(),Rt=x.getActiveCubeFace(),kt=x.getActiveMipmapLevel();x.setRenderTarget(ft),x.getClearColor(L),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&rt.render(q);let Ht=x.toneMapping;x.toneMapping=Fn;let Lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),gt===!0&&$.setGlobalState(x.clippingPlanes,J),tr(I,q,J),zt.updateMultisampleRenderTarget(ft),zt.updateRenderTargetMipmap(ft),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ae=0,Me=G.length;ae<Me;ae++){let ue=G[ae],ce=ue.object,Nt=ue.geometry,_e=ue.material,ee=ue.group;if(_e.side===sn&&ce.layers.test(J.layers)){let We=_e.side;_e.side=Be,_e.needsUpdate=!0,Ic(ce,q,J,Nt,_e,ee),_e.side=We,_e.needsUpdate=!0,Jt=!0}}Jt===!0&&(zt.updateMultisampleRenderTarget(ft),zt.updateRenderTargetMipmap(ft))}x.setRenderTarget(Pt,Rt,kt),x.setClearColor(L,z),Lt!==void 0&&(J.viewport=Lt),x.toneMapping=Ht}function tr(I,G,q){let J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ft=I.length;W<ft;W++){let vt=I[W],Pt=vt.object,Rt=vt.geometry,kt=vt.group,Ht=vt.material;Ht.allowOverride===!0&&J!==null&&(Ht=J),Pt.layers.test(q.layers)&&Ic(Pt,G,q,Rt,Ht,kt)}}function Ic(I,G,q,J,W,ft){I.onBeforeRender(x,G,q,J,W,ft),I.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),W.onBeforeRender(x,G,q,J,I,ft),W.transparent===!0&&W.side===sn&&W.forceSinglePass===!1?(W.side=Be,W.needsUpdate=!0,x.renderBufferDirect(q,G,J,W,I,ft),W.side=Pn,W.needsUpdate=!0,x.renderBufferDirect(q,G,J,W,I,ft),W.side=sn):x.renderBufferDirect(q,G,J,W,I,ft),I.onAfterRender(x,G,q,J,W,ft)}function er(I,G,q){G.isScene!==!0&&(G=wt);let J=Et.get(I),W=u.state.lights,ft=u.state.shadowsArray,vt=W.state.version,Pt=tt.getParameters(I,W.state,ft,G,q),Rt=tt.getProgramCacheKey(Pt),kt=J.programs;J.environment=I.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(I.isMeshStandardMaterial?he:me).get(I.envMap||J.environment),J.envMapRotation=J.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,kt===void 0&&(I.addEventListener("dispose",st),kt=new Map,J.programs=kt);let Ht=kt.get(Rt);if(Ht!==void 0){if(J.currentProgram===Ht&&J.lightsStateVersion===vt)return Dc(I,Pt),Ht}else Pt.uniforms=tt.getUniforms(I),I.onBeforeCompile(Pt,x),Ht=tt.acquireProgram(Pt,Rt),kt.set(Rt,Ht),J.uniforms=Pt.uniforms;let Lt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Lt.clippingPlanes=$.uniform),Dc(I,Pt),J.needsLights=Qh(I),J.lightsStateVersion=vt,J.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.directionalShadowMap.value=W.state.directionalShadowMap,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotShadowMap.value=W.state.spotShadowMap,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMap.value=W.state.pointShadowMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Ht,J.uniformsList=null,Ht}function Pc(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=es.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function Dc(I,G){let q=Et.get(I);q.outputColorSpace=G.outputColorSpace,q.batching=G.batching,q.batchingColor=G.batchingColor,q.instancing=G.instancing,q.instancingColor=G.instancingColor,q.instancingMorph=G.instancingMorph,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function $h(I,G,q,J,W){G.isScene!==!0&&(G=wt),zt.resetTextureUnits();let ft=G.fog,vt=J.isMeshStandardMaterial?G.environment:null,Pt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ci,Rt=(J.isMeshStandardMaterial?he:me).get(J.envMap||vt),kt=J.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Lt=!!q.morphAttributes.position,Jt=!!q.morphAttributes.normal,ae=!!q.morphAttributes.color,Me=Fn;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=x.toneMapping);let ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=ue!==void 0?ue.length:0,Nt=Et.get(J),_e=u.state.lights;if(gt===!0&&(Z===!0||I!==b)){let Fe=I===b&&J.id===S;$.setState(J,I,Fe)}let ee=!1;J.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==_e.state.version||Nt.outputColorSpace!==Pt||W.isBatchedMesh&&Nt.batching===!1||!W.isBatchedMesh&&Nt.batching===!0||W.isBatchedMesh&&Nt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Nt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Nt.instancing===!1||!W.isInstancedMesh&&Nt.instancing===!0||W.isSkinnedMesh&&Nt.skinning===!1||!W.isSkinnedMesh&&Nt.skinning===!0||W.isInstancedMesh&&Nt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Nt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Nt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Nt.instancingMorph===!1&&W.morphTexture!==null||Nt.envMap!==Rt||J.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==$.numPlanes||Nt.numIntersection!==$.numIntersection)||Nt.vertexAlphas!==kt||Nt.vertexTangents!==Ht||Nt.morphTargets!==Lt||Nt.morphNormals!==Jt||Nt.morphColors!==ae||Nt.toneMapping!==Me||Nt.morphTargetsCount!==ce)&&(ee=!0):(ee=!0,Nt.__version=J.version);let We=Nt.currentProgram;ee===!0&&(We=er(J,G,W));let Si=!1,Xe=!1,cs=!1,xe=We.getUniforms(),je=Nt.uniforms;if(Mt.useProgram(We.program)&&(Si=!0,Xe=!0,cs=!0),J.id!==S&&(S=J.id,Xe=!0),Si||b!==I){Mt.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),xe.setValue(U,"projectionMatrix",I.projectionMatrix),xe.setValue(U,"viewMatrix",I.matrixWorldInverse);let ke=xe.map.cameraPosition;ke!==void 0&&ke.setValue(U,ht.setFromMatrixPosition(I.matrixWorld)),Ft.logarithmicDepthBuffer&&xe.setValue(U,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&xe.setValue(U,"isOrthographic",I.isOrthographicCamera===!0),b!==I&&(b=I,Xe=!0,cs=!0)}if(W.isSkinnedMesh){xe.setOptional(U,W,"bindMatrix"),xe.setOptional(U,W,"bindMatrixInverse");let Fe=W.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),xe.setValue(U,"boneTexture",Fe.boneTexture,zt))}W.isBatchedMesh&&(xe.setOptional(U,W,"batchingTexture"),xe.setValue(U,"batchingTexture",W._matricesTexture,zt),xe.setOptional(U,W,"batchingIdTexture"),xe.setValue(U,"batchingIdTexture",W._indirectTexture,zt),xe.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&xe.setValue(U,"batchingColorTexture",W._colorsTexture,zt));let tn=q.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&j.update(W,q,We),(Xe||Nt.receiveShadow!==W.receiveShadow)&&(Nt.receiveShadow=W.receiveShadow,xe.setValue(U,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(je.envMap.value=Rt,je.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(je.envMapIntensity.value=G.environmentIntensity),Xe&&(xe.setValue(U,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&Kh(je,cs),ft&&J.fog===!0&&ct.refreshFogUniforms(je,ft),ct.refreshMaterialUniforms(je,J,k,H,u.state.transmissionRenderTarget[I.id]),es.upload(U,Pc(Nt),je,zt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(es.upload(U,Pc(Nt),je,zt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&xe.setValue(U,"center",W.center),xe.setValue(U,"modelViewMatrix",W.modelViewMatrix),xe.setValue(U,"normalMatrix",W.normalMatrix),xe.setValue(U,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Fe=J.uniformsGroups;for(let ke=0,na=Fe.length;ke<na;ke++){let ti=Fe[ke];At.update(ti,We),At.bind(ti,We)}}return We}function Kh(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function Qh(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,G,q){let J=Et.get(I);J.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Et.get(I.texture).__webglTexture=G,Et.get(I.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:q,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){let q=Et.get(I);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0};let jh=U.createFramebuffer();this.setRenderTarget=function(I,G=0,q=0){A=I,w=G,T=q;let J=!0,W=null,ft=!1,vt=!1;if(I){let Rt=Et.get(I);if(Rt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(Rt.__webglFramebuffer===void 0)zt.setupRenderTarget(I);else if(Rt.__hasExternalTextures)zt.rebindTextures(I,Et.get(I.texture).__webglTexture,Et.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Lt=I.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&Et.has(Lt)&&(I.width!==Lt.image.width||I.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(I)}}let kt=I.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(vt=!0);let Ht=Et.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ht[G])?W=Ht[G][q]:W=Ht[G],ft=!0):I.samples>0&&zt.useMultisampledRTT(I)===!1?W=Et.get(I).__webglMultisampledFramebuffer:Array.isArray(Ht)?W=Ht[q]:W=Ht,E.copy(I.viewport),C.copy(I.scissor),P=I.scissorTest}else E.copy(dt).multiplyScalar(k).floor(),C.copy(It).multiplyScalar(k).floor(),P=Bt;if(q!==0&&(W=jh),Mt.bindFramebuffer(U.FRAMEBUFFER,W)&&J&&Mt.drawBuffers(I,W),Mt.viewport(E),Mt.scissor(C),Mt.setScissorTest(P),ft){let Rt=Et.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Rt.__webglTexture,q)}else if(vt){let Rt=G;for(let kt=0;kt<I.textures.length;kt++){let Ht=Et.get(I.textures[kt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,q,Rt)}}else if(I!==null&&q!==0){let Rt=Et.get(I.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Rt.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(I,G,q,J,W,ft,vt,Pt=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Et.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&vt!==void 0&&(Rt=Rt[vt]),Rt){Mt.bindFramebuffer(U.FRAMEBUFFER,Rt);try{let kt=I.textures[Pt],Ht=kt.format,Lt=kt.type;if(!Ft.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-J&&q>=0&&q<=I.height-W&&(I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt),U.readPixels(G,q,J,W,pt.convert(Ht),pt.convert(Lt),ft))}finally{let kt=A!==null?Et.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(I,G,q,J,W,ft,vt,Pt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Et.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&vt!==void 0&&(Rt=Rt[vt]),Rt)if(G>=0&&G<=I.width-J&&q>=0&&q<=I.height-W){Mt.bindFramebuffer(U.FRAMEBUFFER,Rt);let kt=I.textures[Pt],Ht=kt.format,Lt=kt.type;if(!Ft.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Jt),U.bufferData(U.PIXEL_PACK_BUFFER,ft.byteLength,U.STREAM_READ),I.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Pt),U.readPixels(G,q,J,W,pt.convert(Ht),pt.convert(Lt),0);let ae=A!==null?Et.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,ae);let Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xl(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ft),U.deleteBuffer(Jt),U.deleteSync(Me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,q=0){let J=Math.pow(2,-q),W=Math.floor(I.image.width*J),ft=Math.floor(I.image.height*J),vt=G!==null?G.x:0,Pt=G!==null?G.y:0;zt.setTexture2D(I,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,vt,Pt,W,ft),Mt.unbindTexture()};let tu=U.createFramebuffer(),eu=U.createFramebuffer();this.copyTextureToTexture=function(I,G,q=null,J=null,W=0,ft=null){ft===null&&(W!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=W,W=0):ft=0);let vt,Pt,Rt,kt,Ht,Lt,Jt,ae,Me,ue=I.isCompressedTexture?I.mipmaps[ft]:I.image;if(q!==null)vt=q.max.x-q.min.x,Pt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,kt=q.min.x,Ht=q.min.y,Lt=q.isBox3?q.min.z:0;else{let tn=Math.pow(2,-W);vt=Math.floor(ue.width*tn),Pt=Math.floor(ue.height*tn),I.isDataArrayTexture?Rt=ue.depth:I.isData3DTexture?Rt=Math.floor(ue.depth*tn):Rt=1,kt=0,Ht=0,Lt=0}J!==null?(Jt=J.x,ae=J.y,Me=J.z):(Jt=0,ae=0,Me=0);let ce=pt.convert(G.format),Nt=pt.convert(G.type),_e;G.isData3DTexture?(zt.setTexture3D(G,0),_e=U.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(zt.setTexture2DArray(G,0),_e=U.TEXTURE_2D_ARRAY):(zt.setTexture2D(G,0),_e=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);let ee=U.getParameter(U.UNPACK_ROW_LENGTH),We=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Si=U.getParameter(U.UNPACK_SKIP_PIXELS),Xe=U.getParameter(U.UNPACK_SKIP_ROWS),cs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ue.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ht),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Lt);let xe=I.isDataArrayTexture||I.isData3DTexture,je=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){let tn=Et.get(I),Fe=Et.get(G),ke=Et.get(tn.__renderTarget),na=Et.get(Fe.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,ke.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let ti=0;ti<Rt;ti++)xe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(I).__webglTexture,W,Lt+ti),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Et.get(G).__webglTexture,ft,Me+ti)),U.blitFramebuffer(kt,Ht,vt,Pt,Jt,ae,vt,Pt,U.DEPTH_BUFFER_BIT,U.NEAREST);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||I.isRenderTargetTexture||Et.has(I)){let tn=Et.get(I),Fe=Et.get(G);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,tu),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,eu);for(let ke=0;ke<Rt;ke++)xe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,tn.__webglTexture,W,Lt+ke):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,tn.__webglTexture,W),je?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.__webglTexture,ft,Me+ke):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,ft),W!==0?U.blitFramebuffer(kt,Ht,vt,Pt,Jt,ae,vt,Pt,U.COLOR_BUFFER_BIT,U.NEAREST):je?U.copyTexSubImage3D(_e,ft,Jt,ae,Me+ke,kt,Ht,vt,Pt):U.copyTexSubImage2D(_e,ft,Jt,ae,kt,Ht,vt,Pt);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else je?I.isDataTexture||I.isData3DTexture?U.texSubImage3D(_e,ft,Jt,ae,Me,vt,Pt,Rt,ce,Nt,ue.data):G.isCompressedArrayTexture?U.compressedTexSubImage3D(_e,ft,Jt,ae,Me,vt,Pt,Rt,ce,ue.data):U.texSubImage3D(_e,ft,Jt,ae,Me,vt,Pt,Rt,ce,Nt,ue):I.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ft,Jt,ae,vt,Pt,ce,Nt,ue.data):I.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ft,Jt,ae,ue.width,ue.height,ce,ue.data):U.texSubImage2D(U.TEXTURE_2D,ft,Jt,ae,vt,Pt,ce,Nt,ue);U.pixelStorei(U.UNPACK_ROW_LENGTH,ee),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,We),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Si),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,cs),ft===0&&G.generateMipmaps&&U.generateMipmap(_e),Mt.unbindTexture()},this.initRenderTarget=function(I){Et.get(I).__webglFramebuffer===void 0&&zt.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?zt.setTextureCube(I,0):I.isData3DTexture?zt.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?zt.setTexture2DArray(I,0):zt.setTexture2D(I,0),Mt.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,Mt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}};var Jo=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new V},this.goal={th:0,ph:.9,r:500,t:new V},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,c;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(c=t.r)!=null?c:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){var n;let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.eyePhi&&t.r<((n=e.eyeR)!=null?n:40)?e.eyePhi:e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let s=e.bounds;t.t.x=Math.min(s.x1,Math.max(s.x0,t.t.x)),t.t.z=Math.min(s.z1,Math.max(s.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new qt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new Vs;o.setFromCamera(r,this.cam);let a=new V;return o.ray.intersectPlane(new nn(new V(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),c=-Math.sin(o),l=-Math.sin(o),h=-Math.cos(o),f=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*l*Math.min(f,2.2))*r,n.t.z+=(-t*c+e*h*Math.min(f,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,c]=[...this.ptrs.values()],l=(a.x+c.x)/2,h=(a.y+c.y)/2,f=Math.hypot(a.x-c.x,a.y-c.y),p=Math.atan2(c.y-a.y,c.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,f),l,h),this.pan(l-this._pinch.mx,h-this._pinch.my);let d=p-this._pinch.a;d>Math.PI&&(d-=Math.PI*2),d<-Math.PI&&(d+=Math.PI*2),this.rotate(d,0)}this._pinch={d:f,mx:l,my:h,a:p};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};function bc(i,t){let e=atob(i),n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return new t(n.buffer)}function Ah(i){if(i._dec)return i._dec;let t={...i.hf,y:bc(i.hf.y,Int16Array)},e=i.bld.map(g=>{var _;return{cx:g.c[0],cz:g.c[1],w:g.c[2],d:g.c[3],rot:g.c[4],y:g.c[5],yhi:g.c[6],fl:g.f,fh:g.h,roof:g.r,kind:g.k,tone:g.t,eave:(_=g.e)!=null?_:void 0,ridge:g.rd?"d":"w",awn:g.aw,front:g.fr,bal:g.bl,id:g.id,label:g.lb,nb:g.nb||0,dr:g.dr||null,pass:g.ps||null,attic:g.at||0,rc:g.rc||null,wc:g.wc||null,win:g.wn||0,int:null}}),n=bc(i.trees.a,Int32Array),s=bc(i.trees.s,Uint8Array),r=[];for(let g=0;g<n.length/4;g++)r.push({x:n[g*4]/100,z:n[g*4+1]/100,y:n[g*4+2]/100,s:s[g*2]/100,t:s[g*2+1]});let{nx:o,nz:a,h:c,x0:l,z0:h}=t,f=(g,_)=>{let m=Math.min(o-1.001,Math.max(0,(g-l)/c)),u=Math.min(a-1.001,Math.max(0,(_-h)/c)),v=Math.floor(m),y=Math.floor(u),x=m-v,M=u-y,w=y*o+v,T=t.y,A=T[w],S=T[w+1],b=T[w+o],E=T[w+o+1];return(x+M<=1?A+(S-A)*x+(b-A)*M:E+(b-E)*(1-x)+(S-E)*(1-M))/100},p=(g,_)=>{let m=!1;for(let u=0,v=_.length-1;u<_.length;v=u++){let y=_[u],x=_[v];y[1]>g[1]!=x[1]>g[1]&&g[0]<(x[0]-y[0])*(g[1]-y[1])/(x[1]-y[1])+y[0]&&(m=!m)}return m},d=(g,_)=>{let m=null;for(let u of i.pads)(m===null||u.y>m)&&p([g,_],u.p)&&(m=u.y);return m!=null?m:f(g,_)};return i._dec={D:i,B:i.B,HF:t,BLD:e,TREES:r,terrainY:f,ground:d,pip:p}}function Rh(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},h=[],f=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let v=0,y=a.length;v<y;v++){let x=a[v],M=i.attributes[x];c[x]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let w=i.morphAttributes[x];w&&(l[x]||(l[x]=[]),w.forEach((T,A)=>{let S=new T.array.constructor(T.count*T.itemSize);l[x][A]=new T.constructor(S,T.itemSize,T.normalized)}))}let d=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=d*_;for(let v=0;v<r;v++){let y=n?n.getX(v):v,x="";for(let M=0,w=a.length;M<w;M++){let T=a[M],A=i.getAttribute(T),S=A.itemSize;for(let b=0;b<S;b++)x+=`${~~(A[f[b]](y)*_+m)},`}if(x in e)h.push(e[x]);else{for(let M=0,w=a.length;M<w;M++){let T=a[M],A=i.getAttribute(T),S=i.morphAttributes[T],b=A.itemSize,E=c[T],C=l[T];for(let P=0;P<b;P++){let L=f[P],z=p[P];if(E[z](o,A[L](y)),S)for(let N=0,H=S.length;N<H;N++)C[N][z](o,S[N][L](y))}}e[x]=o,h.push(o),o++}}let u=i.clone();for(let v in i.attributes){let y=c[v];if(u.setAttribute(v,new y.constructor(y.array.slice(0,o*y.itemSize),y.itemSize,y.normalized)),v in l)for(let x=0;x<l[v].length;x++){let M=l[v][x];u.morphAttributes[v][x]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return u.setIndex(h),u}var Ks=class{constructor(){this.G={}}g(t){return this.G[t]||(this.G[t]={p:[],n:[],c:[],uv:[]})}tri(t,e,n,s,r=[1,1,1],o=null){let a=this.g(t),c=n[0]-e[0],l=n[1]-e[1],h=n[2]-e[2],f=s[0]-e[0],p=s[1]-e[1],d=s[2]-e[2],g=l*d-h*p,_=h*f-c*d,m=c*p-l*f,u=Math.hypot(g,_,m)||1;g/=u,_/=u,m/=u;let v=Array.isArray(r[0])?r:[r,r,r];for(let y=0;y<3;y++){let x=[e,n,s][y];a.p.push(x[0],x[1],x[2]),a.n.push(g,_,m),a.c.push(v[y][0],v[y][1],v[y][2]),o?a.uv.push(o[y][0],o[y][1]):a.uv.push(0,0)}}quad(t,e,n,s,r,o,a){let c=Array.isArray(o==null?void 0:o[0])?o:[o,o,o,o];this.tri(t,e,n,s,[c[0],c[1],c[2]],a&&[a[0],a[1],a[2]]),this.tri(t,e,s,r,[c[0],c[2],c[3]],a&&[a[0],a[2],a[3]])}obox(t,e,n,s,r,o=[1,1,1],a={}){var _;let c=(m,u,v)=>[e[0]+n[0]*m+s[0]*u+r[0]*v,e[1]+n[1]*m+s[1]*u+r[1]*v,e[2]+n[2]*m+s[2]*u+r[2]*v],l=[c(-1,-1,-1),c(1,-1,-1),c(1,1,-1),c(-1,1,-1),c(-1,-1,1),c(1,-1,1),c(1,1,1),c(-1,1,1)],h=(_=a.ao)!=null?_:0,f=o.map(m=>m),p=o.map(m=>m*(1-h)),d=m=>m===2||m===3||m===6||m===7?f:p;[[0,3,2,1],[4,5,6,7],[0,1,5,4],[3,7,6,2],[0,4,7,3],[1,2,6,5]].forEach((m,u)=>{a.skipBottom&&u===2||this.quad(t,l[m[0]],l[m[1]],l[m[2]],l[m[3]],m.map(d))})}box(t,e,n,s,r,o,a,c=0,l=[1,1,1],h={}){let f=Math.cos(c),p=Math.sin(c);this.obox(t,[e,n+o/2,s],[f*r/2,0,p*r/2],[0,o/2,0],[-p*a/2,0,f*a/2],l,h)}cyl(t,e,n,s,r,o,a=10,c=[1,1,1],l={}){var f;let h=(f=l.r2)!=null?f:r;for(let p=0;p<a;p++){let d=p/a*Math.PI*2,g=(p+1)/a*Math.PI*2,_=[e+Math.cos(d)*r,n,s+Math.sin(d)*r],m=[e+Math.cos(g)*r,n,s+Math.sin(g)*r],u=[e+Math.cos(g)*h,n+o,s+Math.sin(g)*h],v=[e+Math.cos(d)*h,n+o,s+Math.sin(d)*h];this.quad(t,_,v,u,m,c),l.open||this.tri(t,[e,n+o,s],u,v,c)}}rod(t,e,n,s,r=6,o=[1,1,1]){let a=[n[0]-e[0],n[1]-e[1],n[2]-e[2]],c=Math.hypot(...a);if(c<1e-6)return;let l=a.map(g=>g/c),h=Math.abs(l[1])<.9?[0,1,0]:[1,0,0],f=[l[1]*h[2]-l[2]*h[1],l[2]*h[0]-l[0]*h[2],l[0]*h[1]-l[1]*h[0]],p=Math.hypot(...f);f=f.map(g=>g/p);let d=[l[1]*f[2]-l[2]*f[1],l[2]*f[0]-l[0]*f[2],l[0]*f[1]-l[1]*f[0]];for(let g=0;g<r;g++){let _=g/r*Math.PI*2,m=(g+1)/r*Math.PI*2,u=[0,1,2].map(y=>(f[y]*Math.cos(_)+d[y]*Math.sin(_))*s),v=[0,1,2].map(y=>(f[y]*Math.cos(m)+d[y]*Math.sin(m))*s);this.quad(t,[e[0]+u[0],e[1]+u[1],e[2]+u[2]],[e[0]+v[0],e[1]+v[1],e[2]+v[2]],[n[0]+v[0],n[1]+v[1],n[2]+v[2]],[n[0]+u[0],n[1]+u[1],n[2]+u[2]],o)}}geometry(t){let e=this.G[t];if(!e||!e.p.length)return null;let n=new be;return n.setAttribute("position",new Kt(e.p,3)),n.setAttribute("normal",new Kt(e.n,3)),n.setAttribute("color",new Kt(e.c,3)),n.setAttribute("uv",new Kt(e.uv,2)),n.computeBoundingSphere(),n.computeBoundingBox(),n}},Y=i=>{let t=parseInt(i.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255].map(e=>Math.pow(e,2.2))};var Ke=(i,t,e)=>Math.max(t,Math.min(e,i)),le=(i,t,e)=>i+(t-i)*e,is=(i,t,e)=>{let n=Ke((e-i)/(t-i),0,1);return n*n*(3-2*n)},Dy=Math.PI/180;function ss(i){let t=i>>>0,e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return e.r=(n,s)=>n+(s-n)*e(),e.i=(n,s)=>Math.floor(n+(s-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e}function rs(i=1){let t=(n,s)=>{let r=Math.imul(n,374761393)+Math.imul(s,668265263)+i*1442695041;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296},e=(n,s)=>{let r=Math.floor(n),o=Math.floor(s),a=n-r,c=s-o,l=a*a*(3-2*a),h=c*c*(3-2*c);return le(le(t(r,o),t(r+1,o),l),le(t(r,o+1),t(r+1,o+1),l),h)};return(n,s,r=3)=>{let o=0,a=1,c=1,l=0;for(let h=0;h<r;h++)o+=a*e(n*c,s*c),l+=a,a*=.5,c*=2.03;return o/l}}function wc(i,t,e,n,s=0){let r=Math.cos(s),o=Math.sin(s),a=e/2,c=n/2;return[[-a,-c],[a,-c],[a,c],[-a,c]].map(([l,h])=>[i+l*r-h*o,t+l*o+h*r])}var B={wall:["#EEE8DE","#E8E2D6","#F2EDE5","#E3DDD1"].map(Y),twall:Y("#C9A08B"),tbase:Y("#BDB4A7"),roof:Y("#727A7E"),roofT:Y("#596166"),ridge:Y("#585F63"),plinth:Y("#BDB4A6"),wood:Y("#A58C70"),woodD:Y("#7D6A56"),awn:["#B4705D","#C49C64","#8F9D8D","#A9745F","#C8B07F"].map(Y),red:Y("#A85B4B"),metal:Y("#6C7276"),dark:Y("#474C4F"),stone:Y("#BDB5A8"),stoneD:Y("#A59D90"),crate:Y("#B49C7B"),canvas:Y("#DAD3C4"),hull:Y("#6F5B48"),copper:Y("#A27A57")},Ch=Math.tan(27*Math.PI/180),U0=i=>{let t=Math.cos(i.rot),e=Math.sin(i.rot);return(n,s,r)=>[i.cx+n*t-r*e,s,i.cz+n*e+r*t]};function Ih(i,t,e,n,s,r,o,a,c,l={}){var y,x;let[h,f]=Array.isArray(o)?o:[o,o],p=.22,d=e*Ch,g=n+d,_=n-r*Ch,m=-t-h,u=t+f,v=e+r;for(let M of[-1,1]){let w=s(m,_,M*v),T=s(u,_,M*v),A=s(u,g,0),S=s(m,g,0),b=s(m,_-p,M*v),E=s(u,_-p,M*v),C=s(u,g-p,0),P=s(m,g-p,0),L=[[m/3,v],[u/3,v],[u/3,0],[m/3,0]];M>0?(i.quad("roof",w,T,A,S,a,L),i.quad("roofu",P,C,E,b,a),i.quad("roofe",b,E,T,w,c),i.quad("roofe",b,w,S,P,c),i.quad("roofe",T,E,C,A,c)):(i.quad("roof",T,w,S,A,a,L),i.quad("roofu",C,P,b,E,a),i.quad("roofe",E,b,w,T,c),i.quad("roofe",E,T,A,C,c),i.quad("roofe",w,b,P,S,c))}for(let M of[-1,1]){let w=M*t,T=s(w,n,-e),A=s(w,n,e),S=s(w,g-p,0);M>0?i.tri("wall",T,S,A,l.wallCol):i.tri("wall",A,S,T,l.wallCol)}return Dh(i,s,m+.1,u-.1,g-.05,(y=l.ridgeH)!=null?y:.28,.34,c,(x=l.horn)!=null?x:.2),g}function Dh(i,t,e,n,s,r,o,a,c){let l=n-e,h=(e+n)/2,f=t(h,s+r/2,0),p=t(h+1,s,0),d=t(h,s,1),g=[(p[0]-f[0])*l/2,0,(p[2]-f[2])*l/2],_=[(d[0]-f[0])*o/2,0,(d[2]-f[2])*o/2];if(i.obox("roofe",f,g,[0,r/2,0],_,a),c>0)for(let m of[-1,1])i.obox("roofe",t(m>0?n-.2:e+.2,s+r+c/2-.05,0),g.map(u=>u/l*.4),[0,c/2+.05,0],_.map(u=>u*.9),a)}function F0(i,t,e,n,s,r,o,a,c){let h=n+2*e*.35,f=n-r*.35,p=s(-t-.3,f,e+r),d=s(t+.3,f,e+r),g=s(t+.3,h,-e),_=s(-t-.3,h,-e);i.quad("roof",p,d,g,_,o,[[0,0],[1,0],[1,1],[0,1]]),i.quad("roofu",s(-t-.3,h-.18,-e),s(t+.3,h-.18,-e),s(t+.3,f-.18,e+r),s(-t-.3,f-.18,e+r),o),i.quad("roofe",s(-t-.3,f-.18,e+r),s(t+.3,f-.18,e+r),d,p,a);for(let m of[-1,1]){let u=m*t,v=s(u,n,-e),y=s(u,n,e),x=s(u,h-.18,-e);m>0?i.tri("wall",v,x,y,c):i.tri("wall",y,x,v,c)}return h}function we(i,t,e,n,s,r,o,a,c={}){var E,C,P,L,z;let h=(E=c.pitch)!=null?E:Math.tan(30*Math.PI/180),f=t+r,p=e+r,d=n-r*h,g=p*h*((C=c.riseK)!=null?C:1.05),_=d+g,m=!!c.xs,u=Math.max(.6,f-p*(m?.55:1)),v=(P=c.lift)!=null?P:Math.min(1.2,p*.1),y=p*.45,x=_-y*g/p,M=(N,H,k)=>!k&&Math.abs(N)<=u+1e-6?[N,_,0]:m?[Math.sign(N)*u,x,k?Ke(H,-y,y):Math.sign(H)*y]:[Math.sign(N)*u,_,0],w=[],T=8,A=(N,H,k)=>{let Q=[];for(let et=0;et<T;et++)Q.push(et/T);if(!k)for(let et of[-u,u]){let dt=(et-N[0])/(H[0]-N[0]);dt>1e-4&&dt<1-1e-4&&Q.push(dt)}Q.sort((et,dt)=>et-dt);for(let et of Q){let dt=le(N[0],H[0],et),It=le(N[1],H[1],et),Bt=k?Math.abs(It)/p:Math.abs(dt)/f;w.push({e:[dt,d+v*Bt*Bt*Bt,It],r:M(dt,It,k)})}};A([-f,-p],[f,-p],0),A([f,-p],[f,p],1),A([f,p],[-f,p],0),A([-f,p],[-f,-p],1);let S=N=>s(N[0],N[1],N[2]),b=(N,H)=>Math.abs(N[0]-H[0])+Math.abs(N[1]-H[1])+Math.abs(N[2]-H[2])<1e-6;for(let N=0;N<w.length;N++){let H=w[N],k=w[(N+1)%w.length],Q=S(H.e),et=S(k.e);b(H.r,k.r)?i.tri("roof",Q,S(H.r),et,o,[[H.e[0]/3+H.e[2]/3,0],[H.r[0]/3,2],[k.e[0]/3+k.e[2]/3,0]]):i.quad("roof",Q,S(H.r),S(k.r),et,o,[[H.e[0]/3,0],[H.r[0]/3,2],[k.r[0]/3,2],[k.e[0]/3,0]]),i.quad("roofe",S([H.e[0],H.e[1]-.3,H.e[2]]),Q,et,S([k.e[0],k.e[1]-.3,k.e[2]]),a),i.tri("roofu",S([H.e[0],H.e[1]-.3,H.e[2]]),S([k.e[0],k.e[1]-.3,k.e[2]]),s(0,n-.05,0),o)}if(m)for(let N of[-1,1]){let H=N*u,k=s(H,x,-y),Q=s(H,x,y),et=s(H,_,0);N>0?i.tri("gable",k,et,Q,a):i.tri("gable",Q,et,k,a)}return Dh(i,s,-u-.2,u+.2,_-.05,(L=c.ridgeH)!=null?L:.6,.6,a,(z=c.horn)!=null?z:.9),_}function Ec(i,t,e,n,s){let r=[t,e];for(let a of s)r.push(Math.max(t,Math.min(e,a.a0)),Math.max(t,Math.min(e,a.a1)));let o=[...new Set(r.map(a=>Math.round(a*1e4)/1e4))].sort((a,c)=>a-c);for(let a=0;a<o.length-1;a++){let c=o[a],l=o[a+1];if(l-c<.001)continue;let h=(c+l)/2,f=s.filter(d=>d.a0<h&&d.a1>h).map(d=>[d.y0,d.y1]).sort((d,g)=>d[0]-g[0]),p=0;for(let[d,g]of f)d>p+.001&&i(h,l-c,p,d-p),p=Math.max(p,g);n>p+.001&&i(h,l-c,p,n-p)}}var N0=(i,t,e)=>(n,s,r,o,a,c,l,h,f,p)=>{let d=e(s,0,r);i.box(n,d[0],o,d[2],a,c,l,t.rot+(h||0),f,p)},$o=(i,t,e)=>{let n=t<2,s=t%2===0?1:-1;return(r,o,a,c,l,h,f,p,d)=>n?i(r,s*(e+o),a,c,l,f,h,0,p,d):i(r,a,s*(e+o),c,h,f,l,0,p,d)};function B0(i,t,e,n,s,r,o,a){let c=t.kind==="temple";for(let[l,h,f,p=7]of t.dr){let d=l<2,g=d?t.d:t.w,_=d?n:s,m=$o(e,l,_),u=c?"temple":t.kind,v=f!=null?f:u==="shop"?Math.min(g-1.4,3.6):u==="warehouse"?Math.min(g-2.4,4.2):u==="temple"?Ke(g*.22,2.2,3.4):u==="shed"||u==="annex"?.95:1.15,y=u==="warehouse"?Math.min(t.fh-1,4):u==="temple"?Math.min(t.fh-1.6,v*1.25+.6):u==="shop"?2.6:Math.min(2.2,t.fh-.55),x=u==="temple"?B.red:u==="shop"||u==="warehouse"?B.woodD:B.wood,M=u==="temple"?B.ridge:B.woodD;if(m("wood",.02,h,o,.08,v,y,x.map(S=>S*.86)),(u==="temple"||u==="warehouse")&&m("wood",.06,h,o,.04,.06,y,M),u==="shop")for(let S of[-1,1])m("wood",.06,h+S*v/6,o,.04,.07,y,B.wood);for(let S of[-1,1])m("wood",.04,h+S*(v/2+.07),o,.12,.14,y+.14,M);m("wood",.04,h,o+y,.12,v+.28,u==="temple"?.3:.16,M);let w=o-r,T=Ke(Math.round(w/(u==="temple"?.2:.17)),1,7),A=v+(u==="temple"?1.2:.5);Lh(m,h,A,r,o,a,T,u==="temple"?B.tbase:B.plinth,p)}}function Lh(i,t,e,n,s,r,o,a,c=7){let l=(s-n)/o,h=.3;for(let f=1;f<=Math.min(o,c);f++){let p=s-f*l;if(p<n+.04)break;i("plinth",r+(f-.5)*h-.01,t,n-.35,h+.02,e,p-(n-.35),a)}}function O0(i,t,e,n,s,r,o,a,c,l,h){let[f,p,d]=t.pass,g=p/2,_=(v,y,x,M,w,T,A)=>f===1?e(v,(y+x)/2,0,M,x-y,w,T,0,A,{ao:.2}):e(v,0,(y+x)/2,M,T,w,x-y,0,A,{ao:.2}),m=f===1?n:s,u=f===1?s:n;for(let v of[-1,1])_("plinth",v>0?g:-m-c,v>0?m+c:-g,r-1,o-r+1,2*(u+c),h),_("wall",v>0?g:-m,v>0?m:-g,o,a-o,2*u,l);_("wall",-g,g,r+d,a-r-d,2*u,l),_("wood",-g-.02,g+.02,r+d-.32,.32,2*u+.08,B.ridge);for(let v of[-1,1]){let y=v*(g-.07),x=u-.25-(g-.1)/2;f===1?e("wood",y,x,r,.1,d-.4,g-.1,0,B.red.map(M=>M*.86)):e("wood",x,y,r,g-.1,d-.4,.1,0,B.red.map(M=>M*.86))}}function z0(i,t,e,n,s,r){let o=r+t.fh,a=t.bal==="e",c=t.bal==="f"&&t.front||1,l=a?0:c>0?2:3,h=a?n:s,f=a?t.d*.8:t.w*.82,p=.95,d=$o(e,l,h);d("wood",p/2-.02,0,o-.14,p+.04,f,.14,B.woodD);let g=Math.max(2,Math.round(f/1.8)+1);for(let m=0;m<g;m++)d("wood",.3,-f/2+.3+(f-.6)*m/(g-1),o-.62,.6,.12,.48,B.woodD);let _=Math.max(3,Math.round(f/.9)+1);for(let m=0;m<_;m++)d("wood",p-.07,-f/2+.05+(f-.1)*m/(_-1),o,.08,.08,1.02,B.wood);d("wood",p-.07,0,o+.94,.1,f,.08,B.wood),d("wood",p-.07,0,o+.45,.05,f,.05,B.wood);for(let m of[-1,1])d("wood",p/2-.02,m*(f/2-.05),o+.94,p-.1,.1,.08,B.wood),d("wood",p/2-.02,m*(f/2-.05),o+.45,p-.1,.05,.05,B.wood);if(!t.int){d("wood",.02,0,o,.08,1.1,2.1,B.woodD.map(m=>m*.9));for(let m of[-1,1])d("wood",.04,m*.62,o,.12,.12,2.2,B.woodD);d("wood",.04,0,o+2.1,.12,1.36,.14,B.woodD)}}var Ph={door:[0,2.2],dbl:[0,2.45],big:[0,3.8],win:[.9,2.1],high:[3.1,4.15],bal:[0,2.15]};function k0(i,t,e,n,s,r,o){let a=t.int,c=.24,l=t.fh,h=t.fl;for(let f=0;f<h;f++){let p=r+f*l;for(let d=0;d<4;d++){let g=d<2,_=d%2===0?1:-1,m=g?-s:-n+c,u=-m,v=g?n:s,y=a.open.filter(M=>M[0]===d&&M[3]===f).map(([,M,w,,T])=>({a0:M-w/2,a1:M+w/2,y0:Ph[T][0],y1:Ph[T][1],kind:T,at:M,w}));Ec((M,w,T,A)=>g?e("wall",_*(v-c/2),M,p+T,c,A,w,0,o,{ao:f===0&&T<.01?.3:0}):e("wall",M,_*(v-c/2),p+T,w,A,c,0,o,{ao:f===0&&T<.01?.3:0}),m,u,l,y);let x=$o(e,d,v);for(let M of y){let w=p+M.y0,T=p+M.y1,A=M.kind==="win"||M.kind==="high";for(let S of[-1,1])x("wood",.03,M.at+S*(M.w/2+.05),w-(A?.02:0),.1,.1,T-w+.1,B.woodD);if(x("wood",.03,M.at,T,.1,M.w+.2,.12,B.woodD),A&&(x("plinth",.04,M.at,w-.1,.14,M.w+.3,.1,B.stone),x("wood",-c/2,M.at,w,.05,.06,T-w,B.woodD),x("wood",-c/2,M.at,w+(T-w)*.55,.05,M.w,.05,B.woodD)),f===0&&!A&&M.kind!=="bal"&&Lh(x,M.at,M.w+.5,t.y,r,.12,Math.max(1,Math.round((r-t.y)/.17)),B.plinth),M.kind==="dbl"&&f===0)for(let S of[-1,1]){let b=M.at+S*(M.w/2-.05),E=-(c+(M.w/2-.1)/2);g?e("wood",_*(v+E),b,w,M.w/2-.1,T-w-.1,.06,0,B.woodD):e("wood",b,_*(v+E),w,.06,T-w-.1,M.w/2-.1,0,B.woodD)}}}if(f>0){let d=a.stairs.filter(g=>g[0]===f-1).map(([,g,_,m,u,v])=>Math.abs(m-g)>Math.abs(u-_)?{a0:Math.min(g,m),a1:Math.max(g,m),y0:(_+u)/2-v/2+s-c,y1:(_+u)/2+v/2+s-c}:{a0:(g+m)/2-v/2,a1:(g+m)/2+v/2,y0:Math.min(_,u)+s-c,y1:Math.max(_,u)+s-c});Ec((g,_,m,u)=>e("slab",g,-s+c+m+u/2,p-.2,_,.2,u,0,B.plinth.map(v=>v*.97)),-n+c,n-c,2*(s-c),d);for(let[,g,_,m,u,v]of a.stairs.filter(y=>y[0]===f-1)){let y=Math.abs(m-g)>Math.abs(u-_),x=Math.abs(y?m-g:u-_),M=(g+m)/2,w=(_+u)/2;for(let T of[-1,1]){let A=(y?w:M)+T*(v/2+.03);if((y?s-c:n-c)-Math.abs(A)<.35)continue;((E,C)=>y?e("wood",M,A,E,x,C,.06,0,B.wood):e("wood",A,w,E,.06,C,x,0,B.wood))(p+.9,.06);for(let E of[-.5,0,.5]){let C=(y?M:w)+E*(x-.1);y?e("wood",C,A,p,.06,.9,.06,0,B.wood):e("wood",A,C,p,.06,.9,.06,0,B.wood)}}}}}for(let[f,p,d,g,_,m,u]of a.walls){let v=Math.hypot(g-p,_-d),y=(g-p)/v,x=(_-d)/v,M=Math.atan2(x,y),w=f<h-1?l-.2:l,T=r+f*l;Ec((A,S,b,E)=>e("wall",p+y*A,d+x*A,T+b,S,E,.12,M,o),0,v,w,m!=null?[{a0:m-u/2,a1:m+u/2,y0:0,y1:2.1}]:[])}for(let[f,p,d,g,_,m]of a.stairs){let u=Math.hypot(g-p,_-d),v=(g-p)/u,y=(_-d)/u,x=Math.atan2(y,v),M=Math.ceil(l/.19),w=l/M,T=u/M,A=r+f*l;for(let Q=0;Q<M;Q++){let et=T*(Q+.5);e("wood",p+v*et,d+y*et,A,T,w*(Q+1),m,x,B.wood.map(dt=>dt*(Q%2?.97:1)))}let S=-y,b=v,E=[1,-1].map(Q=>({s:Q,d:Math.min(n-c-Math.abs(p+S*Q*m/2),s-c-Math.abs(d+b*Q*m/2))})).sort((Q,et)=>et.d-Q.d)[0].s,C=S*E*(m/2-.04),P=b*E*(m/2-.04),L=[(p+g)/2+C,0,(d+_)/2+P],z=(Q,et,dt)=>{let It=Math.cos(t.rot),Bt=Math.sin(t.rot);return[t.cx+Q*It-dt*Bt,et,t.cz+Q*Bt+dt*It]},N=z(L[0],A+l/2+.9,L[2]),H=z(L[0]+v*u/2,0,L[2]+y*u/2),k=z(L[0],0,L[2]);i.obox("wood",N,[H[0]-k[0],l/2,H[2]-k[2]],[0,.03,0],[-(H[2]-k[2])/(u/2)*.03,0,(H[0]-k[0])/(u/2)*.03],B.wood);for(let Q of[.04,.5,.96]){let et=u*Q,dt=p+v*et+C,It=d+y*et+P,Bt=A+Math.min(M,Math.ceil(M*Q))*w;e("wood",dt,It,Bt,.06,.9,.06,0,B.wood)}}for(let f of a.furn)H0(i,t,e,r,f)}function H0(i,t,e,n,[s,r,o,a,c,l,h,f=0,p=0]){let d=n+s*t.fh+p,g=Math.cos(f),_=Math.sin(f),m=(M,w)=>[o+M*g-w*_,a+M*_+w*g],u=(M,w,T,A,S,b,E,C)=>{let[P,L]=m(w,T);e(M,P,L,d+A,S,b,E,f,C)},v=(M,w,T,A,S,b)=>{let[E,C]=m(M,w),P=Math.cos(t.rot),L=Math.sin(t.rot);i.cyl("wood",t.cx+E*P-C*L,d+T,t.cz+E*L+C*P,A,S,10,b)},y=B.wood,x=B.woodD;switch(r){case"cab":u("wood",0,0,0,c,h,l,x),u("wood",0,0,h,c+.06,.05,l+.06,y);for(let M of[-1,1])u("wood",M*c/4,l/2+.01,.12,c/2-.08,h-.3,.03,y);break;case"table":case"desk":u("wood",0,0,h-.06,c,.06,l,y);for(let M of[-1,1])for(let w of[-1,1])u("wood",M*(c/2-.08),w*(l/2-.08),0,.07,h-.06,.07,x);r==="desk"&&u("wood",c/4,0,h-.3,c/2-.1,.24,l-.1,x);break;case"rtable":v(0,0,h-.05,c/2,.05,y),v(0,0,0,.06,h-.05,x),v(0,0,0,.25,.04,x);for(let M=0;M<3;M++){let w=M*2.09+.5;v(Math.cos(w)*(c/2+.3),Math.sin(w)*(c/2+.3),0,.16,.45,y)}break;case"bench":u("wood",0,0,h-.05,c,.05,l,y);for(let M of[-1,1])u("wood",M*(c/2-.08),0,0,.05,h-.05,l-.04,x);break;case"shelf":case"rack":{let M=r==="rack"?B.metal:x,w=r==="rack"?3:4;for(let T of[-1,1])for(let A of r==="rack"?[-1,1]:[0])u("wood",T*(c/2-.03),A*(l/2-.03),0,.06,h,r==="rack"?.06:l,M);for(let T=0;T<w;T++)u("wood",0,0,.12+(h-.2)*T/(w-1),c-.06,.04,l,y);if(r==="rack")for(let T=0;T<w-1;T++)for(let A of[-c/3,0,c/3])(T+Math.round(A))%2===0&&u("wood",A,0,.16+(h-.2)*T/(w-1),c/3-.2,.5,l-.15,B.crate);break}case"stove":u("plinth",0,0,0,c,h,l,B.stone),v(c/4,0,h,.22,.12,B.metal),v(-c/2+.3,-l/2+.25,h,.1,2.2,B.dark);break;case"crate":u("wood",0,0,0,c,h,l,B.crate),u("wood",0,0,h*.45,c+.02,.08,l+.02,B.crate.map(M=>M*.86));break;case"barrel":v(0,0,0,c/2,h,B.wood);for(let M of[.15,h-.21])v(0,0,M,c/2+.02,.06,B.dark);break;case"chest":u("wood",0,0,0,c,h-.1,l,x),u("wood",0,0,h-.1,c+.04,.1,l+.04,y);break;case"bed":u("wood",0,0,0,c,.32,l,x),u("wood",0,0,.32,c-.1,.14,l-.1,B.canvas),u("wood",-c/2+.3,0,.46,.36,.1,l-.3,B.canvas.map(M=>M*.94)),u("wood",-c/2+.03,0,0,.06,.8,l,x);break;case"counter":u("wood",0,0,0,c,h-.05,l,x),u("wood",0,-.04,h-.05,c+.08,.05,l+.12,y);break;case"stage":u("wood",0,0,0,c,h,l,x.map(M=>M*1.05)),u("wood",-c/2-.2,0,0,.4,h/2,l*.4,x);break;case"screen":for(let M=-1;M<=1;M++)u("wood",M*c/3,M%2*.08,0,c/3-.03,h,l,M===0?B.canvas:y);break;case"boom":for(let[M,w]of[[-c/4,-l/4],[c/6,-l/4],[-c/4+.1,l/4]])v(M,w,0,.3,h*.95,B.red),v(M,w,.2,.32,.07,B.dark);u("wood",c/4,l/4,0,.7,.6,.6,B.crate),u("wood",c/4,l/4,.26,.72,.1,.62,Y("#E7A537"));break}}function V0(i,t,e,n,s,r){let o=B.dark.map(l=>l*1.25),a=B.woodD,c=t.kind==="warehouse"||t.kind==="shed";for(let l=0;l<4;l++){let h=l<2,f=h?t.d:t.w,p=h?n:s,d=$o(e,l,p),g=Math.floor((f-1.4)/2.6);if(g<1)continue;let _=(t.dr||[]).filter(u=>u[0]===l).map(u=>[u[1]-1.4,u[1]+1.4]),m=t.kind==="shop"&&t.front&&l===(t.front>0?2:3);for(let u=0;u<(c?1:t.fl);u++){if(u===0&&m)continue;let v=c?r+t.fl*t.fh-1.5:r+u*t.fh+.95,y=c?.8:Math.min(1.35,t.fh-1.6),x=c?1.6:.95;for(let M=0;M<g;M++){let w=-f/2+.7+(f-1.4)*(M+.5)/g;u===0&&_.some(([T,A])=>w>T-x/2&&w<A+x/2)||(d("wood",.02,w,v,.06,x,y,o),d("wood",.03,w,v-.1,.1,x+.2,.1,a))}}}}function Uh(i,t){var n,s;let e=(r,o)=>{let a=Math.imul(Math.round(r*100),374761393)^Math.imul(Math.round(o*100),668265263);return a=Math.imul(a^a>>>13,1274126177),((a^a>>>16)>>>0)/4294967296};for(let r of t){let o=U0(r),a=r.w/2,c=r.d/2,l=N0(i,r,o),h=r.kind==="temple"||r.kind==="corridor",f=r.wc?Y(r.wc):h?B.twall:B.wall[r.tone%4],p=.95+e(r.cx,r.cz)*.1,d=(r.rc?Y(r.rc):h?B.roofT:B.roof).map(C=>C*p),g=(r.rc?Y(r.rc).map(C=>C*.78):B.ridge).map(C=>C*p),_=r.y,m=h?_+1.2:Math.max(_+.45,((n=r.yhi)!=null?n:_)+.15),u=h?.9:.12,v=r.nb||0,y=v&1?0:u,x=v&2?0:u,M=v&4?0:u,w=v&8?0:u,T=h?B.tbase:B.plinth,A=m+r.fl*r.fh;if(r.pass)O0(i,r,l,a,c,_,m,A,u,f,T);else{let C=o((y-x)/2,0,(M-w)/2);i.box("plinth",C[0],_-1,C[2],r.w+y+x,m-_+1,r.d+M+w,r.rot,T,{ao:.18}),r.int?k0(i,r,l,a,c,m,f):r.roof!=="tower"&&r.roof!=="pagoda"&&i.box("wall",r.cx,m,r.cz,r.w,A-m,r.d,r.rot,f,{ao:.3})}let S=(s=r.eave)!=null?s:.7,b=A,E=(C,P,L)=>o(L,P,-C);if(r.roof==="gable")b=r.ridge==="d"?Ih(i,c,a,A,E,S,[v&4?0:S*.55,v&8?0:S*.55],d,g,{wallCol:f}):Ih(i,a,c,A,o,S,[v&2?0:S*.55,v&1?0:S*.55],d,g,{wallCol:f});else if(r.roof==="lean")b=F0(i,a,c,A,o,S,d,g,f);else if(r.roof==="xs"||r.roof==="hip")b=r.ridge==="d"?we(i,c,a,A,E,S,d,g,{xs:r.roof==="xs"}):we(i,a,c,A,o,S,d,g,{xs:r.roof==="xs"});else if(r.roof==="hip2"){let C=m+r.fh*.62,P=Math.min(r.w,r.d)*.11;we(i,a,c,C,o,S*1.1,d,g,{riseK:.42,lift:.8,horn:0,ridgeH:.01}),i.box("wall",r.cx,C,r.cz,r.w-P*2,A+3-C,r.d-P*2,r.rot,f),b=we(i,a-P,c-P,A+3,o,S*1.1,d,g,{lift:1.3,horn:1.5,ridgeH:.9})}else if(r.roof==="tower"){let C=m,P=r.w,L=r.d;for(let z=0;z<r.fl;z++){if(i.box("wall",r.cx,C,r.cz,P,r.fh,L,r.rot,f,{ao:z===0?.25:0}),C+=r.fh,z<r.fl-1){let N=P/r.w,H=L/r.d;we(i,a*N,c*H,C,o,1.2,d,g,{riseK:.3,lift:.5,horn:0,ridgeH:.01}),C+=.8}P*=.86,L*=.86}b=C}else if(r.roof==="pagoda"){let C=m,P=r.w,L=r.fh;for(let H=0;H<r.fl;H++){let k=H?C-.9:C;i.box("wall",r.cx,k,r.cz,P,C+L-k,P,r.rot,f,{ao:H===0?.25:0}),C+=L,H<r.fl-1?(we(i,P/2,P/2,C,o,S,d,g,{riseK:.3,lift:.55,horn:0,ridgeH:.01}),C+=.55):b=we(i,P/2,P/2,C,o,S*.9,d,g,{pitch:Math.tan(40*Math.PI/180),lift:.5,horn:0,ridgeH:.2}),P*=.86,L*=.93}let z=o(0,0,0),N=(H,k,Q,et)=>i.cyl("roofe",z[0],H,z[2],k,Q,10,B.copper,{r2:et});N(b-.3,.55,.55,.38);for(let H=0;H<5;H++)N(b+.4+H*.42,.36-H*.03,.1);N(b+.2,.07,3.1),N(b+3.3,.22,.2,.3),N(b+3.5,.3,.25,.05),b+=3.75}else if(r.roof==="lou"){let C=A+.45;we(i,a,c,C,o,S,d,g,{riseK:.3,lift:.55,horn:0,ridgeH:.01});let P=a-.5,L=c-.5,z=C+.55,N=r.fh*.8;i.box("wall",r.cx,A-.1,r.cz,P*2,z+N-A+.1,L*2,r.rot,f),b=r.ridge==="d"?we(i,L,P,z+N,E,S,d,g,{xs:!0}):we(i,P,L,z+N,o,S,d,g,{xs:!0})}if(r.awn&&r.front){let C=r.front,P=B.awn[((r.tone+Math.round(r.cx))%5+5)%5],L=m+2.7,z=1.5,N=o(-a+.4,L,C*c),H=o(a-.4,L,C*c),k=o(a-.4,L-.5,C*(c+z)),Q=o(-a+.4,L-.5,C*(c+z));C>0?(i.quad("awn",N,H,k,Q,P),i.quad("awn",Q,k,H,N,P.map(et=>et*.7))):(i.quad("awn",H,N,Q,k,P),i.quad("awn",k,Q,N,H,P.map(et=>et*.7)))}r.bal&&r.fl>=2&&z0(i,r,l,a,c,m),r.dr&&!r.int&&!r.pass&&B0(i,r,l,a,c,_,m,u),r.win&&!r.int&&!r.pass&&r.roof!=="tower"&&r.roof!=="pagoda"&&V0(i,r,l,a,c,m),r.top=b,r.ytop0=m}}function Fh(i,t,e){for(let[n,s,r,o,a,c,l,h,f]of t){if(h===2||h===3){i.box(h===2?"wall":"plinth",n,a,s,r,c-a+.12,r,o,h===2?B.twall:B.stone,{ao:.22}),i.box("roofe",n,c+.12,s,l+.62,.34,l+.62,o,B.ridge);continue}h===1&&f-a>1.2?(i.box("plinth",n,a,s,r,f-a+.05,l+.14,o,B.tbase,{ao:.22}),i.box("wall",n,f+.05,s,r,c-f-.05,l,o,B.twall)):i.box(h===1||h===4?"wall":"plinth",n,a,s,r,c-a,l,o,h===1||h===4?B.twall:B.stone,{ao:.22}),i.box("roofe",n,c,s,r,.32,l+.45,o,B.ridge)}for(let[n,s,r,o,a,c,l]of e){let h=Math.cos(o),f=Math.sin(o);for(let p of[-1,1])i.box("plinth",n+h*p*(r/2+.5),a,s+f*p*(r/2+.5),1,c+.6,l+.3,o,B.stone);i.box("plinth",n,a+c-.9,s,r+.2,1.5,l+.3,o,B.stone),i.box("roofe",n,a+c+.6,s,r+3,.4,l+1.4,o,B.ridge)}}var on=(1+Math.sqrt(5))/2,G0=[[-1,on,0],[1,on,0],[-1,-on,0],[1,-on,0],[0,-1,on],[0,1,on],[0,-1,-on],[0,1,-on],[on,0,-1],[on,0,1],[-on,0,-1],[-on,0,1]].map(i=>{let t=Math.hypot(...i);return i.map(e=>e/t)}),W0=[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]];function Tc(i,t,e,n,s,r,o,a,c,l,h,f="rock"){let p=ss(l),d=Math.cos(c),g=Math.sin(c),_=G0.map(([m,u,v])=>{let y=1+(p()-.5)*.34,x=m*r*y,M=v*a*y;return t(e+x*d-M*g,n+u*o*y,s+x*g+M*d)});for(let[m,u,v]of W0)i.tri(f,_[m],_[u],_[v],h.map(y=>y*(.9+p()*.14)))}var Oe={car:Y("#8A8F93"),truck:Y("#7E7466"),pick:Y("#8C6F5A"),gun:Y("#555D60"),cart:Y("#9B8164"),sail:Y("#D8CFBE"),tank:Y("#8F8A82"),rail:Y("#6E655A")};function Nh(i,t,e){var s,r,o;let n=ss(5);for(let a of t){let c=Math.cos(a.rot),l=Math.sin(a.rot),h=(d,g,_)=>[a.x+d*c-_*l,a.y+g,a.z+d*l+_*c],f=(d,g,_,m,u,v,y,x,M)=>{let w=h(g,0,_);i.box(d,w[0],a.y+m,w[2],u,v,y,a.rot,x,M)},p=(d,g,_=.45)=>{let m=h(d,0,g);i.box("dark",m[0],a.y,m[2],_*2,_*2,.35,a.rot,B.dark)};switch(a.k){case"car":f("prop",0,0,.3,4.2,.8,1.8,Oe.car),f("prop",-.3,0,1.1,2.2,.6,1.6,Oe.car),[-1.4,1.4].forEach(d=>[-.8,.8].forEach(g=>p(d,g,.35)));break;case"pickup":f("prop",1.6,0,.35,1.8,1.5,2,Oe.pick),f("prop",-.9,0,.35,3.2,.9,2,Oe.pick),f("prop",-.9,0,1.25,2.6,.5,1.6,Oe.crate||B.crate),[-1.8,1.6].forEach(d=>[-.9,.9].forEach(g=>p(d,g)));break;case"truck":f("prop",2.6,0,.4,1.8,2.2,2.4,Oe.truck),f("prop",-.9,0,.5,5,2.5,2.5,B.canvas),[-2.6,-.6,2.5].forEach(d=>[-1.1,1.1].forEach(g=>p(d,g,.5)));break;case"cart":f("prop",0,0,.45,2.6,.5,1.5,Oe.cart),f("prop",1.8,0,.7,1.2,.1,.1,Oe.cart),[-.6].forEach(d=>[-.85,.85].forEach(g=>p(d,g,.5))),a.load&&(f("crate",-.55,0,.95,1.2,.8,1.3,B.crate),f("prop",.65,.05,.95,.9,.55,1.2,B.canvas),f("crate",-.5,.1,1.75,.8,.45,.8,B.crate));break;case"guntruck":{f("gun",0,0,.5,6.4,1.9,2.7,Oe.gun),f("gun",1.8,0,2.4,2,.7,2.3,Oe.gun),f("gun",-1,0,2.4,2.4,1,2,Oe.gun);let d=h(-1,3,0),g=h(-1-3.2,3.05,0);i.rod("gun",d,g,.13,6,Oe.gun),[-2.2,0,2.2].forEach(_=>[-1.25,1.25].forEach(m=>p(_,m,.55)));break}case"paifang":{let d=a.s||1,g=(_,m,u,v,y,x,M,w)=>f(_,m*d,u*d,v*d,y*d,x*d,M*d,w);for(let _ of[-4.8,-1.8,1.8,4.8])g("red",_,0,0,.7,_*_>9?6.2:7.4,.7,B.red);for(let _ of[-4.8,-1.8,1.8,4.8])g("plinth",_,0,0,1.3,.9,1.3,B.stone);g("red",0,0,5.7,10.4,.7,.55,B.red),g("red",0,0,6.9,4.6,.9,.55,B.red),g("roofe",0,0,7.8,5.8,.5,2.2,B.ridge),g("roofe",0,0,8.3,4.8,.4,1.2,B.ridge);for(let _ of[-3.3,3.3])g("roofe",_,0,6.4,3.8,.45,1.9,B.ridge),g("roofe",_,0,6.85,3,.3,1,B.ridge);break}case"wtower":{for(let[g,_]of[[-2,-2],[2,-2],[2,2],[-2,2]])i.rod("metal",h(g*1.2,0,_*1.2),h(g*.8,11,_*.8),.18,5,B.metal);i.rod("metal",h(-2.4,4,0),h(2.4,4,0),.08,4,B.metal),i.rod("metal",h(0,4,-2.4),h(0,4,2.4),.08,4,B.metal);let d=h(0,0,0);i.cyl("metal",d[0],a.y+11,d[2],2.6,4.2,14,B.copper),i.cyl("roofe",d[0],a.y+15.2,d[2],2.9,1.6,14,B.ridge,{r2:.2});break}case"stall":case"stall2":{let d=B.awn[n.i(0,B.awn.length-1)];f("prop",0,0,0,2.2,.85,1.2,Oe.cart);for(let[g,_]of[[-1,-.55],[1,-.55],[1,.55],[-1,.55]])f("prop",g,_,0,.08,2.2,.08,Oe.cart);if(a.k==="stall")f("awn",0,0,2.2,2.6,.12,1.8,d);else{let g=h(-1.3,2.4,-.9),_=h(1.3,2.4,-.9),m=h(1.3,2,.9),u=h(-1.3,2,.9);i.quad("awn",u,m,_,g,d),i.quad("awn",g,_,m,u,d.map(v=>v*.7))}break}case"lamp":{let d=(s=a.h)!=null?s:3.6,g=h(0,0,0);i.cyl("metal",g[0],a.y-.05,g[2],.2,.32,8,B.dark),i.cyl("metal",g[0],a.y,g[2],.09,d,6,B.dark),f("metal",.34,0,d-.12,.78,.08,.08,B.dark),f("lamp",.68,0,d-.78,.36,.52,.36,Y("#E0A04A")),f("metal",.68,0,d-.24,.46,.08,.46,B.dark),a.ban&&(f("awn",-.1,0,d-2.35,.05,1.85,.48,Y(typeof a.ban=="string"?a.ban:"#3F7C88")),f("awn",-.1,0,d-2.6,.05,.25,.26,Y("#C9A44E")));break}case"planter":{let d=(r=a.l)!=null?r:3,g=(o=a.w)!=null?o:1.2,_=Math.max(1,Math.round(d/1.1)),m=[Y("#6B7B4C"),Y("#76854F"),Y("#62724A")];f("stone",0,0,0,d,.8,g,Y("#C9C1B3")),f("stone",0,0,.8,d+.12,.1,g+.12,Y("#B3AB9D"));for(let u=0;u<_;u++){let v=h(-d/2+(u+.5)*d/_,0,0);i.cyl("leaf",v[0],a.y+.86,v[2],Math.min(.58,g*.46),.6,7,m[u%3],{r2:.22})}if(a.tree){let u=h(0,0,0);i.cyl("wood",u[0],a.y+.9,u[2],.14,2,6,B.woodD),i.cyl("leaf",u[0],a.y+2.4,u[2],1.15,1.7,8,Y("#66784A"),{r2:.3}),i.cyl("leaf",u[0],a.y+4.1,u[2],.3,.25,8,Y("#66784A"))}break}case"npc":{let d=Y(a.col||"#5B7F86"),g=h(0,0,0);for(let _ of[-1,1])f("prop",0,_*.12,0,.18,.82,.17,B.dark);f("prop",0,0,.8,.34,.74,.5,d),f("prop",0,0,.8,.36,.12,.52,Y("#9A4A3F")),i.cyl("prop",g[0],a.y+1.54,g[2],.15,.22,8,Y("#D7AE8A")),i.cyl("prop",g[0],a.y+1.76,g[2],.13,.14,8,B.dark,{r2:.06});break}case"pier":{let d=a.l,g=a.w;f("wood",0,d/2-1,-.25,g,.4,d+2,B.wood);for(let _=1;_<d;_+=3)for(let m of[-g/2+.3,g/2-.3]){let u=h(m,0,_);i.cyl("woodD",u[0],e,u[2],.22,a.y-e,6,B.woodD)}break}case"boat":{f("hull",0,0,-1.4,9,1.5,2.6,B.hull),f("hull",5,0,-1.1,1.4,1.2,1.4,B.hull),f("hull",-5,0,-1.1,1.4,1.2,1.4,B.hull);for(let d=0;d<6;d++){let g=d/6*Math.PI,_=(d+1)/6*Math.PI,m=1.2,u=(v,y)=>h(v,.1+Math.sin(y)*m,Math.cos(y)*m);i.quad("sail",u(-2.4,g),u(2.2,g),u(2.2,_),u(-2.4,_),Oe.sail)}break}case"boat2":f("hull",0,0,-1.3,7,1.4,2.2,B.hull),f("hull",3.9,0,-1,1,1.1,1.2,B.hull),f("prop",-1,0,.1,2.4,1.1,1.8,B.canvas);break;case"sboat":f("gun",0,0,-1.2,6.4,1.3,2.2,Y("#8C5A49")),f("gun",3.6,0,-1,1,.9,1.2,Y("#8C5A49")),f("prop",-.4,0,.1,1.2,.8,1.8,B.canvas);break;case"crane":{i.rod("metal",h(0,0,0),h(0,9,0),.25,6,B.metal),i.rod("metal",h(0,7.5,0),h(0,9.5,9),.18,6,B.metal),i.rod("metal",h(0,9.5,9),h(0,4,9),.04,4,B.dark),f("plinth",0,0,0,1.8,.6,1.8,B.stoneD),f("crate",0,8.6,3.6,1.2,1.2,1.2,B.crate);break}case"crates":{let d=a.n?ss(Math.round(a.x*37+a.z*101)):n,g=a.n||n.i(1,4),_=[];for(let m=0;m<g;m++)_.push(1.1+d()*.3),f("crate",m%2*1.3-.6,Math.floor(m/2)*1.3-.6,0,1.2,_[m],1.2,B.crate);a.top!=null&&a.top<g&&f("crate",a.top%2*1.3-.6+.05,Math.floor(a.top/2)*1.3-.6-.04,_[a.top],.95,.85,.95,B.crate.map(m=>m*.94));break}case"tank":{let d=h(0,0,0);i.cyl("metal",d[0],a.y,d[2],1.25,2.9,14,B.copper),i.cyl("metal",d[0],a.y+2.9,d[2],1.25,.6,14,B.copper,{r2:.5}),i.rod("metal",h(1.1,2.2,0),h(2.6,2.2,0),.16,6,B.metal),i.rod("metal",h(2.6,2.2,0),h(2.6,0,0),.16,6,B.metal);break}case"scaff":{let d=!!a.big,g=d?12:7,_=d?12:2.2,m=d?19:8,u=[],v=[];for(let x=-g/2;x<=g/2+1e-6;x+=d?3:2.33)u.push(x);if(d)for(let x=-_/2;x<=_/2+1e-6;x+=3)v.push(x);else v.push(-_/2,_/2);let y=d?[...u.map(x=>[x,-_/2]),...u.map(x=>[x,_/2]),...v.map(x=>[-g/2,x]),...v.map(x=>[g/2,x])]:u.flatMap(x=>v.map(M=>[x,M]));for(let[x,M]of y)i.rod("wood",h(x,0,M),h(x,m,M),.07,4,B.wood);for(let x=2;x<=m;x+=2){for(let M of[-_/2,_/2])i.rod("wood",h(-g/2,x,M),h(g/2,x,M),.06,4,B.wood);if(d)for(let M of[-g/2,g/2])i.rod("wood",h(M,x,-_/2),h(M,x,_/2),.06,4,B.wood)}break}case"boulder":{let d=[Y("#8A877F"),Y("#7C7971"),Y("#958F86"),Y("#6E6B64")],g=Math.round(a.x*37+a.z*101),_=a.s||1.6;Tc(i,h,0,_*.25,0,_,_*.72,_*.88,a.rot,g,d[(g%4+4)%4]);break}case"cavemouth":{let d=a.w/2,g=a.h,_=a.dep,m=["#3D3731","#2D2925","#201D1A"].map(Y),u=["#4C453D","#38332D","#29251F"].map(Y);[[0,1.6],[1.6,3.6],[3.6,_]].forEach(([w,T],A)=>{f("cave",(w+T)/2,0,-.4,T-w,.42,a.w+.6,u[A]);for(let S of[-1,1])f("cave",(w+T)/2,S*(d+.15),-.4,T-w,g+.4,.3,m[A]);f("cave",(w+T)/2,0,g,T-w,.3,a.w+.6,m[A].map(S=>S*.9))}),f("cave",_+.15,0,-.4,.3,g+.7,a.w+.6,Y("#181614"));for(let w of[.95,3]){for(let T of[-1,1])f("wood",w,T*(d-.17),.02,.22,g-.3,.22,B.woodD);f("wood",w,0,g-.3,.26,.27,a.w-.02,B.woodD.map(T=>T*.9))}let y=Y("#A9A194");f("stone",.28,0,g-.06,.82,1.02,a.w+.5,y);for(let[w,T,A]of[[d-.04,2.75,g+.9],[-3.2,-d+.04,g+.9],[-3.8,-3.2,g+.75],[-4.85,-3.8,g+.25]])f("stone",w<-3.9?.2:.28,(w+T)/2,-.5,.66,A+.5,T-w,y.map(S=>S*(w<-3.5?.97:1)));let x=[Y("#A39A8C"),Y("#958C7F"),Y("#ADA496")],M=9101;for(let[w,T,A,S,b,E,C]of[[-.35,.7,2.05,.75,.95,.7,.4],[-.25,2,1.95,.6,.75,.55,1.1],[-.3,.55,-2.1,.8,.9,.75,.2],[-.2,1.9,-2,.55,.8,.6,2.2],[-.15,3,.9,1,.55,.7,.3],[-.1,3.05,-.8,.9,.5,.65,1.4],[-.1,3.2,2.7,.8,.7,.7,.8],[-.05,3.25,-2.8,.85,.65,.75,2.6],[-.2,2.2,-3.6,.7,.8,.6,.5],[-.25,1.2,-4.3,.7,.9,.6,1.9],[-.4,2.8,2.45,.55,.6,.5,2.9]])Tc(i,h,w,T,A,S,b,E,C,M++,x[M%3]);for(let[w,T,A]of[[-1.2,2.6,.45],[-1.6,1.9,.3],[-.9,-2.8,.5],[-1.5,-3.4,.32],[-2.1,-2.3,.22],[-1.1,3.4,.28]])Tc(i,h,w,A*.35,T,A,A*.7,A*.9,w*3,M++,x[M%3]);{let w=h(-.75,1.15,-2.55),T=h(0,0,-.62),A=h(.5,1.12,0),S=h(.06,0,0),b=h(0,0,0),E=C=>[C[0]-b[0],C[1]-b[1],C[2]-b[2]];i.obox("wood",w,E(T),E(A),E(S),B.wood.map(C=>C*.8));for(let C of[-.6,.55]){let P=h(-.75+.5*C-.07,1.15+1.12*C,-2.55);i.obox("wood",P,E(h(0,0,-.66)),E(h(.03,.07,0)),E(h(.07,0,0)),B.woodD)}}break}case"chainbridge":{let d=Math.hypot(a.x2-a.x,a.z2-a.z),g=a.y2-a.y,_=a.w/2,m=[c,0,l],u=[-l,0,c],v=b=>{let E=b/d;return g*E-4*a.sag*E*(1-E)},y=b=>(g-4*a.sag*(1-2*b/d))/d,x=Y("#46413C"),M=B.wood.map(b=>b*.84),w=.42,T=.08;for(let b=0,E=-.1+w/2;E+w/2<d+.1;b++,E+=w+T){let C=y(E),P=1/Math.hypot(1,C),L=C*P;i.obox("wood",h(E,v(E)-.04,0),m.map((z,N)=>(z*P+(N===1?L:0))*w/2),m.map((z,N)=>(-z*L+(N===1?P:0))*.04),u.map(z=>z*_),M.map(z=>z*(.9+b*37%11/70)))}let A=(b,E,C)=>{let P=Math.ceil((d+.6)/1.6),L=h(-.3,v(-.3)+E,b);for(let z=1;z<=P;z++){let N=-.3+(d+.6)*z/P,H=h(N,v(N)+E,b);i.rod("dark",L,H,C,6,x),L=H}};for(let b of[-1.05,-.35,.35,1.05])A(b,-.13,.045);let S=_+.04;for(let b of[-1,1]){A(b*S,1.02,.04),A(b*S,.52,.03);for(let E=1.6;E<d-.8;E+=1.6)i.rod("dark",h(E,v(E)+1.02,b*S),h(E,v(E)-.06,b*S),.016,4,x);for(let E of[-.3,d+.3]){let C=v(E)-.06;f("wood",E,b*S,C-.3,.26,1.6,.26,B.woodD),f("dark",E,b*S,C+1.26,.32,.1,.32,x)}}break}case"bridge":{f("plinth",0,0,-.6,13,.6,3.4,B.stone);for(let d of[-6.5,6.5])f("plinth",d,0,-4.2,1.6,3.6,3.6,B.stoneD);for(let d of[-1.6,1.6])f("plinth",0,d,0,13,.7,.25,B.stone);break}}}}var Gt={brick:Y("#B49A84"),iron:Y("#5E6468"),iron2:Y("#7B8186"),brass:Y("#B08A55"),pipe:Y("#8A6E55"),plank:Y("#B59A78"),scaf:Y("#9C8366"),glass:Y("#8FA6AA"),rail:Y("#6E655A"),tram:Y("#9C5B48"),jade:Y("#6F8F86")},yn=i=>{let t=Math.cos(i.rot||0),e=Math.sin(i.rot||0);return(n,s,r)=>[i.x+n*t-r*e,i.y+s,i.z+n*e+r*t]},Bh=(i,t,e)=>(n,s,r,o,a,c,l,h,f)=>{let p=e(s,0,r);i.box(n,p[0],p[1]+o,p[2],a,c,l,t.rot||0,h,f)},X0=(i,t,e,n,s,r,o=16,a="metal")=>i.cyl(a,t[0],e,t[2],n,s,o,r);function Qe(i,t,e,n=1.05,s=B.wood,r=1.2){let o=Math.hypot(e[0]-t[0],e[2]-t[2]),a=Math.max(1,Math.round(o/r));for(let c=0;c<=a;c++){let l=c/a,h=[le(t[0],e[0],l),le(t[1],e[1],l),le(t[2],e[2],l)];i.rod("wood",h,[h[0],h[1]+n,h[2]],.04,4,s)}i.rod("wood",[t[0],t[1]+n,t[2]],[e[0],e[1]+n,e[2]],.045,4,s)}function Ko(i,t,e,n,s,r={}){var p,d,g;let o=(p=r.su)!=null?p:2.2,a=(d=r.sv)!=null?d:2.2,c=[],l=[];for(let _=-e/2;_<=e/2+1e-6;_+=e/Math.max(1,Math.round(e/o)))c.push(_);for(let _=-n/2;_<=n/2+1e-6;_+=n/Math.max(1,Math.round(n/a)))l.push(_);let h=[...c.map(_=>[_,-n/2]),...c.map(_=>[_,n/2]),...l.slice(1,-1).map(_=>[-e/2,_]),...l.slice(1,-1).map(_=>[e/2,_])],f=(g=r.y0)!=null?g:0;for(let[_,m]of h)i.rod("wood",t(_,f,m),t(_,f+s,m),.07,4,Gt.scaf);for(let _=f+2;_<=f+s+1e-6;_+=2){for(let m of[-n/2,n/2])i.rod("wood",t(-e/2,_,m),t(e/2,_,m),.055,4,Gt.scaf);for(let m of[-e/2,e/2])i.rod("wood",t(m,_,-n/2),t(m,_,n/2),.055,4,Gt.scaf);if(r.plank&&Math.round((_-f)/2)%r.plank===0){let m=t(0,_,0);i.obox("wood",[m[0],m[1]+.03,m[2]],[...q0(t,e/2)],[0,.03,0],[...Y0(t,n/2)],Gt.plank)}}if(r.brace!==!1)for(let _ of[-n/2,n/2])for(let m=0;m<c.length-1;m+=2)i.rod("wood",t(c[m],f,_),t(c[m+1],f+Math.min(s,4),_),.045,4,Gt.scaf)}var q0=(i,t)=>{let e=i(0,0,0),n=i(1,0,0);return[(n[0]-e[0])*t,0,(n[2]-e[2])*t]},Y0=(i,t)=>{let e=i(0,0,0),n=i(0,0,1);return[(n[0]-e[0])*t,0,(n[2]-e[2])*t]};function Z0(i,t,e,n,s,r,o,a,c=.5,l=.3){let h=[];for(let p=0;p<r;p++){let d=p/r*Math.PI*2+Math.PI/r;h.push([t[0]+Math.cos(d)*n,e+(r<=8?c:0),t[2]+Math.sin(d)*n])}let f=[t[0],e+s,t[2]];for(let p=0;p<r;p++){let d=h[p],g=h[(p+1)%r],_=[(d[0]+g[0])/2,e,(d[2]+g[2])/2];i.tri("roof",d,f,_,o),i.tri("roof",_,f,g,o),i.tri("roofe",[d[0],d[1]-.25,d[2]],d,_,a),i.tri("roofe",[_[0],_[1]-.25,_[2]],[d[0],d[1]-.25,d[2]],_,a),i.tri("roofe",_,g,[g[0],g[1]-.25,g[2]],a),i.tri("roofe",_,[g[0],g[1]-.25,g[2]],[_[0],_[1]-.25,_[2]],a),i.tri("roofu",[g[0],g[1]-.25,g[2]],[d[0],d[1]-.25,d[2]],[t[0],e-.4,t[2]],o)}i.cyl("roofe",t[0],e+s-.1,t[2],l,.6,8,B.copper,{r2:.05})}function Oh(i,t,e,n,s,r,o,a="wall"){for(let l=0;l<r;l++){let h=l/r*Math.PI*2+Math.PI/r,f=(l+1)/r*Math.PI*2+Math.PI/r,p=[t[0]+Math.cos(h)*s,t[2]+Math.sin(h)*s],d=[t[0]+Math.cos(f)*s,t[2]+Math.sin(f)*s];i.quad(a,[p[0],e,p[1]],[p[0],n,p[1]],[d[0],n,d[1]],[d[0],e,d[1]],o)}let c=[];for(let l=0;l<r;l++){let h=l/r*Math.PI*2+Math.PI/r;c.push([t[0]+Math.cos(h)*s,n,t[2]+Math.sin(h)*s])}for(let l=0;l<r;l++)i.tri(a,[t[0],n,t[2]],c[(l+1)%r],c[l],o)}function jo(i,t,e,n,s,r={}){var d,g,_;let o=(d=r.s)!=null?d:1.6,a=[[-o/2,-o/2],[o/2,-o/2],[o/2,o/2],[-o/2,o/2]];for(let[m,u]of a)i.rod("metal",t(m,0,u),t(m,e,u),.1,4,Gt.iron);for(let m=0;m<e-.1;m+=o)for(let u=0;u<4;u++){let[v,y]=a[u],[x,M]=a[(u+1)%4];i.rod("metal",t(v,m,y),t(x,m+o,M),.05,4,Gt.iron2),i.rod("metal",t(v,m+o,y),t(x,m+o,M),.05,4,Gt.iron2)}i.rod("metal",t(-s,e+.4,0),t(n,e+.4,0),.32,4,Gt.iron),i.rod("metal",t(-s*.6,e+1.6,0),t(n*.9,e+.9,0),.05,4,Gt.iron2),i.rod("metal",t(0,e+3.4,0),t(n*.7,e+.5,0),.05,4,Gt.iron2),i.rod("metal",t(0,e+3.4,0),t(-s,e+.5,0),.05,4,Gt.iron2),i.rod("metal",t(0,e,0),t(0,e+3.4,0),.12,4,Gt.iron);let c=t(-s+1.2,e-.6,0);i.box("metal",c[0],c[1],c[2],2.2,1.8,2.4,r.rot||0,B.stoneD);let l=t(o/2+.7,e-1.6,o/2+.2);i.box("metal",l[0],l[1],l[2],1.6,1.6,1.4,r.rot||0,Y("#C9A55A"));let h=(g=r.hook)!=null?g:n*.7,f=(_=r.hookY)!=null?_:e*.45;i.rod("dark",t(h,e+.3,0),t(h,f+.6,0),.03,4,B.dark);let p=t(h,f,0);if(i.box("metal",p[0],p[1],p[2],.5,.6,.5,r.rot||0,B.dark),r.load){let m=t(h,f-1.6,0);i.box("crate",m[0],m[1],m[2],1.6,1.4,1.6,r.rot||0,B.crate),i.rod("dark",t(h,f,0),t(h,f-.2,0),.03,4,B.dark)}}function J0(i,t,e,n,s,r=Gt.brick){i.cyl("stone",t[0],e,t[2],s,n,12,r,{r2:s*.8}),i.cyl("metal",t[0],e+n,t[2],s*.9,.5,12,Gt.iron);for(let o=2;o<n;o+=3)i.cyl("metal",t[0],e+o,t[2],s*(1-o/n*.2)+.05,.18,12,Gt.iron2)}var pe={palace(i,t){let e=yn(t),n=Bh(i,t,e),s=Y("#C9B9A0"),r=Y("#9C5A48"),o=Y("#5D6468"),a=B.ridge,c=0;for(let[h,f,p]of[[300,200,16],[220,150,14],[160,100,12],[110,70,8]])n("stone",0,0,c,h,p,f,s),c+=p;let l=(h,f,p,d,g,_)=>{let m=c;for(let u=0;u<_;u++){let v=p*(1-u*.18),y=d*(1-u*.18);n("wall",h,f,m,v,g,y,r),we(i,v/2,y/2,m+g,(x,M,w)=>e(h+x,M,f+w),2.6,o,a,{riseK:.45,lift:1.4}),m+=g+3.2}};l(0,0,70,34,18,2);for(let h of[-1,1]){let f=(p,d,g,_,m,u,v)=>{let y=c;c=v,l(p,d,g,_,m,u),c=y};f(h*58,18,30,20,12,1,42),f(h*100,-50,16,16,22,3,30),f(h*130,70,14,14,14,2,16)}return{}},steamtower(i,t){var l,h,f;let e=yn(t),n=(l=t.h)!=null?l:30,s=(h=t.r)!=null?h:4.2,r=e(0,0,0),o=t.y;i.cyl("stone",r[0],o-.5,r[2],s+.9,4.5,14,Gt.brick),i.cyl("stone",r[0],o+4,r[2],s+1.1,.5,14,B.stoneD),i.cyl("metal",r[0],o+4.5,r[2],s,n-9,16,Gt.iron2);for(let p of[8,14,20])X0(i,r,o+p,s+.15,.4,Gt.iron);i.cyl("metal",r[0],o+n-4.5,r[2],s,1.2,16,Gt.iron,{r2:s*.6}),i.cyl("metal",r[0],o+n-3.3,r[2],s*.6,2.4,12,Gt.iron2);let a=o+n-1;i.cyl("wood",r[0],a-.25,r[2],s+1.4,.25,16,Gt.plank);for(let p=0;p<16;p++){let d=p/16*6.283,g=(p+1)/16*6.283,_=s+1.3;Qe(i,[r[0]+Math.cos(d)*_,a,r[2]+Math.sin(d)*_],[r[0]+Math.cos(g)*_,a,r[2]+Math.sin(g)*_],1,Gt.iron,3)}for(let p of[.4,2.6,4.5]){let d=r[0]+Math.cos(p)*s*.35,g=r[2]+Math.sin(p)*s*.35;i.cyl("metal",d,a,g,.35,3.6,8,Gt.brass)}for(let[p,d,g]of t.ledges||[[11,-.6,1.2],[19,1.6,3.4]]){let _=s+1.5,m=6;for(let u=0;u<m;u++){let v=d+(g-d)*u/m,y=d+(g-d)*(u+1)/m,x=(v+y)/2,M=_*(y-v)+.1,w=[r[0]+Math.cos(x)*(s+.75),o+p-.2,r[2]+Math.sin(x)*(s+.75)];i.box("wood",w[0],w[1],w[2],1.6,.2,M,-x,Gt.plank),Qe(i,[r[0]+Math.cos(v)*_,o+p,r[2]+Math.sin(v)*_],[r[0]+Math.cos(y)*_,o+p,r[2]+Math.sin(y)*_],1,Gt.iron,2)}for(let u of[d+.15,g-.15])i.rod("metal",[r[0]+Math.cos(u)*(s+.2),o+p-1.6,r[2]+Math.sin(u)*(s+.2)],[r[0]+Math.cos(u)*(s+1.4),o+p-.2,r[2]+Math.sin(u)*(s+1.4)],.07,4,Gt.iron)}let c=(f=t.ladder)!=null?f:1.2;for(let p of[-.18,.18])i.rod("metal",[r[0]+Math.cos(c+p*.2)*(s+.35),o+4.5,r[2]+Math.sin(c+p*.2)*(s+.35)],[r[0]+Math.cos(c+p*.2)*(s+.35),a+1,r[2]+Math.sin(c+p*.2)*(s+.35)],.05,4,Gt.iron);for(let p=o+5;p<a;p+=.6)i.rod("metal",[r[0]+Math.cos(c-.036)*(s+.35),p,r[2]+Math.sin(c-.036)*(s+.35)],[r[0]+Math.cos(c+.036)*(s+.35),p,r[2]+Math.sin(c+.036)*(s+.35)],.03,3,Gt.iron);for(let[p,d,g]of t.pipes||[[3.6,9,6],[4.4,7,3]]){let _=[r[0]+Math.cos(p)*s,o+g,r[2]+Math.sin(p)*s],m=[r[0]+Math.cos(p)*(s+d),o+g,r[2]+Math.sin(p)*(s+d)];i.rod("metal",_,m,.45,8,Gt.pipe),i.rod("metal",m,[m[0],o,m[2]],.45,8,Gt.pipe)}return{steam:[[r[0],a+3.6,r[2]]]}},chimneys(i,t){var s,r;let e=yn(t),n=[];for(let[o,a,c,l]of t.list){let h=e(o,0,a);J0(i,h,t.y+((s=t.base)!=null?s:0),c,l),n.push([h[0],t.y+((r=t.base)!=null?r:0)+c+.6,h[2]])}return{steam:n}},bigpagoda(i,t){var _,m,u,v,y,x;let e=yn(t),n=(M,w,T)=>e(M,w,T),s=(_=t.w)!=null?_:24,r=(m=t.fl)!=null?m:7,o=(u=t.done)!=null?u:4,a=(v=t.fh)!=null?v:5,c=(y=t.base)!=null?y:1.2,l=s,h=B.wall[2],f=B.roof,p=B.ridge;for(let M=0;M<r;M++){let w=c+a;if(M<o){i.box("wall",...Qo(e(0,c,0)),l,a,l,t.rot,h,{ao:M===0?.25:0});for(let T of[-1,1])for(let A of[0,1])for(let S=-2;S<=2;S++){let b=S*l/5.5,E=A?e(b,c,T*(l/2+.05)):e(T*(l/2+.05),c,b);i.box("wood",E[0],E[1],E[2],A?.35:.12,a,A?.12:.35,t.rot,B.red)}we(i,l/2,l/2,w,n,M===o-1?1.6:1.4,f,p,{riseK:.3,lift:.7,horn:0,ridgeH:.01}),c=w+.7}else{for(let S=0;S<=4;S++)for(let b=0;b<=4;b++){if(S&&b&&S<4&&b<4)continue;let E=e(-l/2+l*S/4,c,-l/2+l*b/4);i.box("wood",E[0],E[1],E[2],.5,a,.5,t.rot,B.woodD)}let A=e(0,w-.3,0);i.box("slab",A[0],A[1],A[2],l+.4,.3,l+.4,t.rot,B.plinth),c=w}l*=.88}let d=((x=t.base)!=null?x:1.2)+o*(a+.7)-.2,g=s*Math.pow(.88,o)+3.6;if(Ko(i,e,g,g,c-d+2,{y0:d,su:2.4,sv:2.4,plank:2}),Ko(i,(M,w,T)=>e(M+s/2+1.2,w,T),2.2,s*.7,d,{y0:0,su:2.2,sv:2.6,plank:3}),t.crane){let[M,w,T,A,S]=t.crane,b=yn({x:e(M,0,w)[0],z:e(M,0,w)[2],y:t.y,rot:(t.rot||0)+(S||0)});jo(i,b,T,A,A*.35,{rot:(t.rot||0)+(S||0),load:1})}return{}},watchtower(i,t){var h,f;let e=yn(t),n=(h=t.h)!=null?h:24,s=(f=t.w)!=null?f:6,r=(p,d,g)=>e(p,d,g),o=0,a=s,c=3;for(let p=0;p<c;p++){let d=n/c;i.box("stone",...Qo(e(0,o,0)),a,d,a,t.rot,p%2?B.stoneD:B.stone,{ao:p?0:.25}),i.box("plinth",...Qo(e(0,o+d-.3,0)),a+.4,.3,a+.4,t.rot,B.stoneD),o+=d,a*=.9}we(i,a/2+.8,a/2+.8,o+2.6,r,.9,B.roof,B.ridge,{riseK:.5,lift:.5,horn:.4});for(let[p,d]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.rod("wood",e(p*(a/2+.5),o,d*(a/2+.5)),e(p*(a/2+.5),o+2.6,d*(a/2+.5)),.12,4,B.woodD);i.box("wood",...Qo(e(0,o-.2,0)),a+1.6,.2,a+1.6,t.rot,Gt.plank);let l=e(0,o+.1,a/2+.2);i.rod("metal",l,[l[0],l[1]+1.4,l[2]],.1,6,Gt.iron),i.rod("metal",[l[0],l[1]+1.5,l[2]],e(0,o+2,a/2+2.2),.32,8,Gt.brass);for(let[p,d]of t.decks||[[6,0],[13,1],[19,2]]){let g=d%4,_=g%2,m=g<2?1:-1,u=s*(1-.1*Math.floor(p/(n/c)))/2,v=_?e(0,p,m*(u+1)):e(m*(u+1),p,0);i.box("wood",v[0],v[1]-.2,v[2],_?u*1.6:2,.2,_?2:u*1.6,t.rot,Gt.plank);for(let M of[-1,1]){let w=_?e(M*u*.8,p,m*(u+2)):e(m*(u+2),p,M*u*.8);i.rod("wood",w,[w[0],w[1]-2.4,w[2]],.07,4,B.woodD)}let y=_?e(-u*.8,p,m*(u+2)):e(m*(u+2),p,-u*.8),x=_?e(u*.8,p,m*(u+2)):e(m*(u+2),p,u*.8);Qe(i,y,x,1,B.wood,1.4)}if(t.scaf){let[p,d,g,_,m]=t.scaf;Ko(i,(u,v,y)=>e(p+u,v,d+y),g,_,m,{plank:2})}return{}},crane(i,t){var n,s,r;let e=yn(t);return jo(i,e,(n=t.h)!=null?n:22,(s=t.jib)!=null?s:18,(r=t.back)!=null?r:6,{rot:t.rot||0,load:t.load,hook:t.hook,hookY:t.hookY,s:t.s}),{}},scaffold(i,t){var n;let e=yn(t);return Ko(i,e,t.w,t.d,t.h,{plank:(n=t.plank)!=null?n:2,su:t.su,sv:t.sv,y0:t.y0}),{}},octa(i,t){var c,l,h,f,p;let e=[t.x,0,t.z],n=8,s=(c=t.fl)!=null?c:3,r=(l=t.fh)!=null?l:4.2,o=(h=t.r)!=null?h:9,a=t.y;Oh(i,e,a-1,a+1.2,o+2.2,n,B.plinth,"plinth"),a+=1.2;for(let d=0;d<16;d++){let g=d/16*6.283;i.cyl("wood",e[0]+Math.cos(g)*(o+1.4),a,e[2]+Math.sin(g)*(o+1.4),.22,r,6,B.red)}for(let d=0;d<s;d++){Oh(i,e,a,a+r,o,n,B.wall[1]);for(let m=0;m<n;m++){let u=m/n*6.283+Math.PI/n;i.cyl("wood",e[0]+Math.cos(u)*(o+.05),a,e[2]+Math.sin(u)*(o+.05),.2,r,6,B.red)}let g=d===s-1,_=o+(d===0?2.8:1.6);Z0(i,[e[0],0,e[2]],a+r,_,g?o*.85:1.6,n,t.rc?Y(t.rc):B.roof,t.rc?Y(t.rc).map(m=>m*.78):B.ridge,.6,g?.5:0),g||(a+=r+1.1,o*=.82)}if(t.door!=null){let d=t.door,g=[e[0]+Math.cos(d)*(((f=t.r)!=null?f:9)+.05),t.y+1.2,e[2]+Math.sin(d)*(((p=t.r)!=null?p:9)+.05)];i.box("wood",g[0],g[1],g[2],.2,2.8,2.6,d,B.red.map(_=>_*.86))}return{}},lightrail(i,t){var o,a,c,l,h,f;let e=t.pts,n=(o=t.h)!=null?o:9,s={},r=0;for(let p=1;p<e.length;p++){let d=e[p-1],g=e[p],_=Math.hypot(g[0]-d[0],g[1]-d[1]),m=Math.atan2(g[1]-d[1],g[0]-d[0]),u=(c=(a=t.ys)==null?void 0:a[p-1])!=null?c:t.y,v=(h=(l=t.ys)==null?void 0:l[p])!=null?h:t.y,y=[(d[0]+g[0])/2,(d[1]+g[1])/2];i.box("metal",y[0],Math.max(u,v)+n-.9,y[1],_+.1,.9,3.4,m,Gt.iron2);for(let x of[-.75,.75])i.box("metal",y[0]-Math.sin(m)*x,Math.max(u,v)+n,y[1]+Math.cos(m)*x,_+.1,.15,.14,m,B.dark);for(let x=0;x<_;x+=(f=t.span)!=null?f:16){let M=[d[0]+(g[0]-d[0])*x/_,d[1]+(g[1]-d[1])*x/_],w=le(u,v,x/_);i.box("stone",M[0],w-.3,M[1],1.2,n-.6+.3,1.2,m,B.stone),i.box("stone",M[0],w+n-1.5,M[1],1.6,.6,4,m,B.stoneD)}if(t.car!=null&&t.car>=r&&t.car<r+_){let x=(t.car-r)/_,M=[d[0]+(g[0]-d[0])*x,d[1]+(g[1]-d[1])*x];i.box("metal",M[0],Math.max(u,v)+n+.2,M[1],12,2.6,2.6,m,Gt.tram),i.box("metal",M[0],Math.max(u,v)+n+2.8,M[1],11,.3,2.2,m,B.dark)}r+=_}return s},busstop(i,t){let e=yn(t),n=Bh(i,t,e);for(let s of[-1.8,1.8])n("metal",s,.6,0,.12,2.6,.12,Gt.iron);return n("roofe",0,0,2.6,4.4,.12,1.8,B.ridge),n("wood",0,.4,0,3,.45,.4,B.wood),n("red",2.4,-.6,0,.08,2.3,.08,Gt.iron),n("red",2.4,-.6,1.8,.7,.5,.06,B.red),{}},weight(i,t){var r;let e=yn(t),n=(r=t.h)!=null?r:7;i.rod("wood",e(-2,0,0),e(-2,n,0),.14,4,B.woodD),i.rod("wood",e(-2,n,0),e(2.2,n,0),.12,4,B.woodD),i.rod("dark",e(2,n,0),e(2,n-2.4,0),.03,4,B.dark);let s=e(2,n-3.8,0);return i.box("crate",s[0],s[1],s[2],1.4,1.4,1.4,t.rot,B.stoneD),{}},ledges(i,t){var n;let e=yn(t);for(let[s,r,o,a,c]of t.list){let l=e(s,0,r);i.box("wood",l[0],t.y+o-.25,l[2],a,.25,c,t.rot,Gt.plank);for(let[h,f]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let p=e(s+h*(a/2-.15),0,r+f*(c/2-.15));i.rod("wood",[p[0],t.y+o-.25,p[2]],[p[0],t.y+((n=t.floor)!=null?n:0),p[2]],.08,4,B.woodD)}}return{}},pipebridge(i,t){var l,h;let e=t.a,n=t.b,s=Math.hypot(n[0]-e[0],n[1]-e[1]),r=Math.atan2(n[1]-e[1],n[0]-e[0]),o=-Math.sin(r),a=Math.cos(r);for(let f of[-.75,.75])i.rod("metal",[e[0]+o*f,e[2]+.45,e[1]+a*f],[n[0]+o*f,n[2]+.45,n[1]+a*f],.42,10,Gt.pipe);let c=Math.max(2,Math.round(s/1.2));for(let f=0;f<c;f++){let p=(f+.5)/c,d=[le(e[0],n[0],p),le(e[2],n[2],p)+.95,le(e[1],n[1],p)];i.box("wood",d[0],d[1],d[2],s/c-.08,.08,1.1,r,Gt.plank)}for(let f of[-1,1])Qe(i,[e[0]+o*f*.9,e[2]+1,e[1]+a*f*.9],[n[0]+o*f*.9,n[2]+1,n[1]+a*f*.9],1,Gt.iron,2.4);for(let f of t.legs||[]){let p=[le(e[0],n[0],f),le(e[1],n[1],f)],d=(h=(l=t.yg)==null?void 0:l[0])!=null?h:0,g=le(e[2],n[2],f);for(let _ of[-1,1])i.rod("metal",[p[0]+o*_*1.3,d,p[1]+a*_*1.3],[p[0]+o*_*.9,g+.2,p[1]+a*_*.9],.14,6,Gt.iron)}return{}}},Qo=i=>[i[0],i[1],i[2]];function zh(i,t,e){let n=[];for(let s of t){let r=pe[s.type];if(!r){console.warn("\u672A\u77E5\u5730\u6807\u7C7B\u578B",s.type);continue}let o=r(i,s,e);o&&o.steam&&n.push(...o.steam.map(a=>({k:"steam",p:a})))}return n}function kh(i,t,e){var n,s,r,o,a,c;for(let l of t){let[h,f]=l.a,[p,d]=l.b,g=Math.hypot(p-h,d-f),_=Math.atan2(d-f,p-h),m=(n=l.w)!=null?n:5,u=-Math.sin(_),v=Math.cos(_),y=l.ya,x=l.yb,M=l.kind==="arch"?(s=l.rise)!=null?s:Math.min(3.5,g*.12):0,w=Math.max(6,Math.round(g/1.2)),T=A=>le(y,x,A)+M*Math.sin(Math.PI*A);for(let A=0;A<w;A++){let S=A/w,b=(A+1)/w,E=(S+b)/2,C=[le(h,p,E),le(f,d,E)],P=T(E),L=g/w+.05,z=l.kind==="arch"?Math.max((r=e.D.WATER)!=null?r:P-3,P-.8-(M+1.5)*(1-Math.sin(Math.PI*E))):P-.7;i.box("stone",C[0],z,C[1],L,P-z,m,_,B.stone,{skipBottom:l.kind!=="arch"});for(let N of[-1,1])i.box("plinth",C[0]+u*N*(m/2-.15),P,C[1]+v*N*(m/2-.15),L,.75,.3,_,B.stoneD)}if(l.kind!=="arch")for(let A=(o=l.pier)!=null?o:10;A<g-2;A+=(a=l.pier)!=null?a:10){let S=[h+(p-h)*A/g,f+(d-f)*A/g],b=T(A/g),E=(c=e.D.BED)!=null?c:b-6;i.box("stone",S[0],E,S[1],1.6,b-.7-E,m+.6,_,B.stoneD)}}}var Hh={plaza:"#E3DCD0",market:"#E1D7C6",yard:"#D3C9B9",dock:"#D5CAB6",park:"#C9CBA8",parking:"#D9D3C8",site:"#CFC1A6",court:"#DCD3C3"},$0={road:["#B5AB9B","#E2DCD1"],street:["#BDB3A3","#E8E2D8"],lane:["#C2B8A8","#E4DED3"],stair:["#C2B8A8","#E4DED3"],path:[null,"#C9B99C"],rail:[null,"#B8AE9F"]},Mi=(i,t)=>{i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n)),i.closePath()},Vh=(i,t)=>{i.beginPath(),t.forEach(([e,n],s)=>s?i.lineTo(e,n):i.moveTo(e,n))};function K0(i,t,e,n){let s=new Float32Array(i.length);for(let r=0;r<3;r++){for(let o=0;o<e;o++){let a=0,c=o*t;for(let l=-n;l<=n;l++)a+=i[c+Math.min(t-1,Math.max(0,l))];for(let l=0;l<t;l++)s[c+l]=a/(2*n+1),a+=i[c+Math.min(t-1,l+n+1)]-i[c+Math.max(0,l-n)]}for(let o=0;o<t;o++){let a=0;for(let c=-n;c<=n;c++)a+=s[Math.min(e-1,Math.max(0,c))*t+o];for(let c=0;c<e;c++)i[c*t+o]=a/(2*n+1),a+=s[Math.min(e-1,c+n+1)*t+o]-s[Math.max(0,c-n)*t+o]}}}function Gh(i,t=.22){var S,b;let{B:e,D:n}=i,s=e.x1-e.x0,r=e.z1-e.z0,o=Math.ceil(s/t),a=Math.ceil(r/t),c=document.createElement("canvas");c.width=o,c.height=a,c.res=t;let l=c.getContext("2d"),h=(E,C)=>E.setTransform(1/C,0,0,1/C,-e.x0/C,-e.z0/C);l.fillStyle="#A3AA84",l.fillRect(0,0,o,a);{let{nx:E,nz:C,h:P}=i.HF,L=i.HF.y,z=new ImageData(E,C),N=rs(3),H=rs(11),k=(S=n.WATER)!=null?S:-1e9,Q=(b=n.rockY)!=null?b:1e9,et=(ht,yt,wt)=>[ht[0]+(yt[0]-ht[0])*wt,ht[1]+(yt[1]-ht[1])*wt,ht[2]+(yt[2]-ht[2])*wt],dt=[163,170,132],It=[142,154,116],Bt=[183,174,159],xt=[161,152,138],gt=[127,140,134],Z=[93,107,106];for(let ht=0;ht<C;ht++)for(let yt=0;yt<E;yt++){let wt=ht*E+yt,Wt=L[wt]/100,Qt=i.B.x0+yt*P,U=i.B.z0+ht*P,ie=(L[ht*E+Math.min(E-1,yt+1)]-L[ht*E+Math.max(0,yt-1)])/200/P,Ot=(L[Math.min(C-1,ht+1)*E+yt]-L[Math.max(0,ht-1)*E+yt])/200/P,Ft=1-1/Math.sqrt(1+ie*ie+Ot*Ot),Mt;if(Wt<k-.2)Mt=et(gt,Z,Ke((k-Wt)/4,0,1));else{let se=N(Qt*.05,U*.05,3),Et=H(Qt*.2,U*.2,2);Mt=et(dt,It,Ke(se*1.6-.3,0,1));let zt=Math.max(is(.16,.38,Ft+(Et-.5)*.12),is(Q,Q+6,Wt)*.5);Mt=et(et(Mt,Bt,zt),xt,zt*Ke(Et,0,1)*.6).map(me=>me*(.94+Et*.12))}z.data.set([Mt[0],Mt[1],Mt[2],255],wt*4)}let K=document.createElement("canvas");K.width=E,K.height=C,K.getContext("2d").putImageData(z,0,0),h(l,t),l.imageSmoothingEnabled=!0,l.drawImage(K,i.B.x0-P/2,i.B.z0-P/2,E*P,C*P)}h(l,t),l.lineJoin="round";for(let E of n.paved||[])l.fillStyle=E.col||"#D5CCBC",Mi(l,E.p),l.fill();for(let E of n.pads)l.fillStyle=l.strokeStyle=E.col||"#D0C6B5",l.lineWidth=.35,Mi(l,E.p),l.fill(),l.stroke();for(let E of n.areas){l.fillStyle=Hh[E.k]||Hh.plaza,Mi(l,E.p),l.fill();let C=E.k==="plaza"||E.k==="market"?1.6:E.k==="court"?1.2:E.k==="parking"?2.6:0;if(!C)continue;l.save(),Mi(l,E.p),l.clip(),l.strokeStyle=E.k==="parking"?"rgba(255,255,255,.55)":"rgba(90,80,65,.09)",l.lineWidth=E.k==="parking"?.12:.06;let P=E.p.map(z=>z[0]),L=E.p.map(z=>z[1]);l.beginPath();for(let z=Math.floor(Math.min(...P)/C)*C;z<Math.max(...P);z+=C)l.moveTo(z,Math.min(...L)),l.lineTo(z,Math.max(...L));if(E.k!=="parking")for(let z=Math.floor(Math.min(...L)/C)*C;z<Math.max(...L);z+=C)l.moveTo(Math.min(...P),z),l.lineTo(Math.max(...P),z);l.stroke(),l.restore()}l.lineCap="round";let f={...$0,...n.stCol||{}};for(let E of[0,1])for(let C of n.streets){let[P,L,z=.5]=f[C.k]||f.lane;!E&&!P||(l.strokeStyle=E?L:P,l.lineWidth=C.w+(E?0:z),Vh(l,C.p),l.stroke())}if(n.roadDash!==!1)for(let E of n.streets.filter(C=>C.k==="road"))l.strokeStyle="rgba(255,255,255,.6)",l.lineWidth=.18,l.setLineDash([3,4]),Vh(l,E.p),l.stroke(),l.setLineDash([]);let p=t*2,d=Math.ceil(s/p),g=Math.ceil(r/p),_=document.createElement("canvas");_.width=d,_.height=g;let m=_.getContext("2d");h(m,p),m.fillStyle=m.strokeStyle="#000";for(let E of i.BLD)m.globalAlpha=.62,Mi(m,wc(E.cx,E.cz,E.w+1.2,E.d+1.2,E.rot)),m.fill();for(let[E,C,P,L,,,z]of n.gw)m.globalAlpha=.4,m.lineWidth=z+1.2,m.beginPath(),m.moveTo(E-Math.cos(L)*P/2,C-Math.sin(L)*P/2),m.lineTo(E+Math.cos(L)*P/2,C+Math.sin(L)*P/2),m.stroke();for(let E of n.pads)m.globalAlpha=.35,m.lineWidth=1.4,Mi(m,E.p),m.stroke();for(let E of i.TREES)m.globalAlpha=.28,m.beginPath(),m.arc(E.x,E.z,1.7*E.s,0,Math.PI*2),m.fill();for(let E of n.marks)E.foot&&E.foot.length===2&&(m.globalAlpha=.45,Mi(m,wc(E.x,E.z,E.foot[0]+1,E.foot[1]+1,E.rot)),m.fill());let u=m.getImageData(0,0,d,g),v=u.data,y=new Float32Array(d*g);for(let E=0;E<y.length;E++)y[E]=v[E*4+3]/255;K0(y,d,g,Math.max(1,Math.round(.9/p)));for(let E=0;E<y.length;E++){let C=Math.round(255*(1-.55*Math.min(1,y[E])));v[E*4]=v[E*4+1]=v[E*4+2]=C,v[E*4+3]=255}m.setTransform(1,0,0,1,0,0),m.putImageData(u,0,0),l.setTransform(1,0,0,1,0,0),l.globalCompositeOperation="multiply",l.drawImage(_,0,0,o,a);let x=document.createElement("canvas");x.width=x.height=128;let M=x.getContext("2d"),w=M.createImageData(128,128),T=7,A=()=>(T=T*16807%2147483647)/2147483647;for(let E=0;E<16384;E++){let C=236+Math.floor(A()*20);w.data[E*4]=w.data[E*4+1]=w.data[E*4+2]=C,w.data[E*4+3]=255}return M.putImageData(w,0,0),l.globalAlpha=.55,l.fillStyle=l.createPattern(x,"repeat"),l.fillRect(0,0,o,a),l.globalAlpha=1,l.globalCompositeOperation="source-over",c}var vn=i=>new Yt(i);function Q0(i){var L,z;let{HF:t,B:e,D:n}=i,{nx:s,nz:r,h:o,x0:a,z0:c}=t,l=s*r,h=e.x1-e.x0,f=e.z1-e.z0,p=new Float32Array(l*3),d=new Float32Array(l*2);for(let N=0,H=0;N<r;N++)for(let k=0;k<s;k++,H++)p[H*3]=a+k*o,p[H*3+1]=t.y[H]/100,p[H*3+2]=c+N*o,d[H*2]=(p[H*3]-e.x0)/h,d[H*2+1]=(p[H*3+2]-e.z0)/f;let g=new Uint32Array((s-1)*(r-1)*6),_=0;for(let N=0;N<r-1;N++)for(let H=0;H<s-1;H++){let k=N*s+H,Q=k+1,et=k+s,dt=et+1;g[_++]=k,g[_++]=et,g[_++]=Q,g[_++]=Q,g[_++]=et,g[_++]=dt}let m=new be;m.setAttribute("position",new Se(p,3)),m.setAttribute("uv",new Se(d,2)),m.setIndex(new Se(g,1)),m.computeVertexNormals();let u=m.attributes.normal.array,v=new Float32Array(l*3),y=rs(3),x=rs(11),M=vn("#A3AA84"),w=vn("#8E9A74"),T=vn("#B7AE9F"),A=vn("#A1988A"),S=vn("#7F8C86"),b=vn("#5D6B6A"),E=new Yt,C=(L=n.WATER)!=null?L:-1e9,P=(z=n.rockY)!=null?z:1e9;for(let N=0;N<l;N++){let H=p[N*3],k=p[N*3+1],Q=p[N*3+2],et=1-u[N*3+1];if(k<C-.2)E.copy(S).lerp(b,Ke((C-k)/4,0,1));else{let dt=y(H*.05,Q*.05,3),It=x(H*.2,Q*.2,2);E.copy(M).lerp(w,Ke(dt*1.6-.3,0,1));let Bt=Math.max(is(.16,.38,et+(It-.5)*.12),is(P,P+6,k)*.5);E.lerp(T,Bt).lerp(A,Bt*Ke(It,0,1)*.6),E.multiplyScalar(.94+It*.12)}v[N*3]=E.r,v[N*3+1]=E.g,v[N*3+2]=E.b}return m.setAttribute("color",new Se(v,3)),m}function j0(i,t){let{D:e,B:n}=i,s=n.x1-n.x0,r=n.z1-n.z0,o=[],a=[],c=[];for(let h of e.pads){let f=h.p.map(([u,v])=>new qt(u,v)),p=Yi.triangulateShape(f,[]),d=o.length/3;for(let[u,v]of h.p)o.push(u,h.y,v),a.push((u-n.x0)/s,(v-n.z0)/r);let g=Yi.isClockWise(f),_=h.p;for(let[u,v,y]of p)(_[v][1]-_[u][1])*(_[y][0]-_[u][0])-(_[v][0]-_[u][0])*(_[y][1]-_[u][1])>0?c.push(d+u,d+v,d+y):c.push(d+u,d+y,d+v);let m=h.p.length;for(let u=0;u<m;u++){let v=h.p[u],y=h.p[(u+1)%m],x=h.yb[u],M=Math.hypot(y[0]-v[0],y[1]-v[1]),w=Math.atan2(y[1]-v[1],y[0]-v[0]),T=(y[1]-v[1])/M,A=-(y[0]-v[0])/M;g&&(T=-T,A=-A),h.wall!=="none"&&(t.box("stone",(v[0]+y[0])/2+T*.1,x,(v[1]+y[1])/2+A*.1,M+.2,h.y-.01-x,.2,w,h.wall==="brick"?B.stoneD:B.stone,{ao:.3}),h.curb!==!1&&t.box("plinth",(v[0]+y[0])/2+T*.02,h.y-.02,(v[1]+y[1])/2+A*.02,M+.36,.16,.4,w,B.stoneD));let S=h.ct&&h.ct[u];if(S&&S>h.y+.3){let E=(y[0]-v[0])/M,C=(y[1]-v[1])/M,P=k=>!i.pip(k,h.p),L=P([v[0]-E*.9+T*.9/2,v[1]-C*.9+A*.9/2])?.9:0,z=P([y[0]+E*.9+T*.9/2,y[1]+C*.9+A*.9/2])?.9:0,N=(v[0]+y[0])/2+E*(z-L)/2+T*(.9/2+.02),H=(v[1]+y[1])/2+C*(z-L)/2+A*(.9/2+.02);t.box("stone",N,h.y-.35,H,M+L+z,S-h.y+.35,.9,w,B.stone,{ao:.3}),t.box("plinth",N,S,H,M+L+z+.1,.22,.9+.25,w,B.stoneD)}}}let l=new be;return l.setAttribute("position",new Kt(o,3)),l.setAttribute("uv",new Kt(a,2)),l.setIndex(c),l.computeVertexNormals(),l}function tg(i,t){let{D:e,terrainY:n}=i;if(e.WATER!=null){for(let s of e.rivers)if(s.emb)for(let r of[-1,1])for(let o=1;o<s.p.length;o++){let a=s.p[o-1],c=s.p[o],l=Math.hypot(c[0]-a[0],c[1]-a[1]);if(l<.01)continue;let h=-(c[1]-a[1])/l*r,f=(c[0]-a[0])/l*r,p=s.w/2+.1,d=(a[0]+c[0])/2+h*p,g=(a[1]+c[1])/2+f*p,_=Math.max(n(d+h*1.2,g+f*1.2),e.WATER+.6);t.box("stone",d,e.BED-.5,g,l+.3,_-e.BED+.45,.9,Math.atan2(c[1]-a[1],c[0]-a[0]),B.stoneD,{ao:.1})}}}function eg(i,t){for(let[e,n,s,r,o,a,c]of i.D.steps)t.box("stone",e,c,n,s,a-c,r,o,B.stone,{skipBottom:!0})}function ng(i,t){let e=[];for(let n of i.D.gw){let[s,r,o,a,c,l,h,f]=n;if(f===6){t.box("plinth",s,c,r,o,.55+.3,h+.06,a,B.stone,{ao:.22}),t.box("wall",s,c+.85,r,o,l-c-.85,h,a,B.wall[0]),t.box("roofe",s,l,r,o,.26,h+.42,a,B.ridge);continue}if(f===7){t.box("plinth",s,c,r,o,l-c-.16,h,a,B.stone,{ao:.22}),t.box("plinth",s,l-.16,r,o,.16,h+.14,a,B.stoneD);let u=Math.cos(a)*o/2,v=Math.sin(a)*o/2;t.box("plinth",s+u,c,r+v,h+.2,l-c+.2,h+.2,a,B.stoneD,{ao:.2});continue}if(f!==5){e.push([...n,c]);continue}t.box("plinth",s,c,r,o,l-c-.9,h+.4,a,B.stoneD,{ao:.22}),t.box("stone",s,l-1,r,o,.1,h,a,B.stone);let p=Math.cos(a),d=Math.sin(a),g=-d,_=p,m=Math.max(1,Math.round(o/1.6));for(let u of[-1,1])t.box("plinth",s+g*u*(h/2-.2),l-.95,r+_*u*(h/2-.2),o,.55,.4,a,B.stoneD);for(let u=0;u<m;u++){let v=-o/2+(u+.5)*o/m;t.box("plinth",s+p*v+g*(h/2-.2),l-.4,r+d*v+_*(h/2-.2),o/m*.55,.55,.4,a,B.stoneD)}}Fh(t,e,[])}function ig(i,t,e){var y;let{HF:n,B:s,D:r}=i,{nx:o,nz:a,h:c}=n,l=r.BASE,h=r.WATER,f=(y=r.BED)!=null?y:-1e9,p=Y("#8F806C"),d=Y("#A89A86"),g=Y("#9C8F7E"),_=[[...Array(o).keys()].map(x=>[x,a-1]),[...Array(a).keys()].reverse().map(x=>[o-1,x]),[...Array(o).keys()].reverse().map(x=>[x,0]),[...Array(a).keys()].map(x=>[0,x])];for(let x of _){let M=x.map(([w,T])=>{let A=T*o+w,S=s.x0+w*c,b=s.z0+T*c,E=n.y[A]/100,C=r.pads.find(P=>P.y>E&&i.pip([S,b],P.p));return C&&(E=C.y),{x:S,z:b,y:E,w:h!=null&&E<h}});for(let w=0;w<M.length-1;w++){let T=M[w],A=M[w+1],S=[[T.y,A.y],[T.y-1.1,A.y-1.1],[Math.min(T.y-1.1,f-1),Math.min(A.y-1.1,f-1)],[l,l]],b=[p,d,d,g];for(let E=0;E<3;E++){let[C,P]=S[E],[L,z]=S[E+1];C<=L&&P<=z||t.quad("skirt",[T.x,Math.max(L,l),T.z],[A.x,Math.max(z,l),A.z],[A.x,P,A.z],[T.x,C,T.z],[b[E+1],b[E+1],b[E],b[E]])}(T.w||A.w)&&e.quad("skirtw",[T.x,Math.min(T.y,h),T.z],[A.x,Math.min(A.y,h),A.z],[A.x,h,A.z],[T.x,h,T.z],[1,1,1])}}let m=1.4,u=s.x1-s.x0,v=s.z1-s.z0;t.box("base",(s.x0+s.x1)/2,l-2.2,(s.z0+s.z1)/2,u+m*2,2.2,v+m*2,0,Y("#4B4741"))}function Ac(i){let t=new be,e=i.map(n=>n.index?n.toNonIndexed():n);for(let n of["position","normal","color"]){let s=e.reduce((a,c)=>a+c.attributes[n].array.length,0),r=new Float32Array(s),o=0;for(let a of e)r.set(a.attributes[n].array,o),o+=a.attributes[n].array.length;t.setAttribute(n,new Se(r,3))}return t}function sg(i,t,e){let n=(m,u,v,y)=>{if(!u.length)return;let x=new gn({vertexColors:!0,roughness:.95}),M=new li(m,x,u.length),w=new ne,T=new Je,A=new V,S=new V,b=new Yt,E=ss(17),C=new V(0,1,0);u.forEach((P,L)=>{T.setFromAxisAngle(C,E()*6.28),A.set(P.s*(.9+E()*.2),P.s*(.9+E()*.25),P.s*(.9+E()*.2)),S.set(P.x,P.y-.4,P.z),w.compose(S,T,A),M.setMatrixAt(L,w),b.copy(v).lerp(y,E()),b.multiplyScalar(.9+E()*.2),M.setColorAt(L,b)}),M.castShadow=e,M.receiveShadow=!0,M.frustumCulled=!1,t.add(M)},s=(m,u)=>{let v=m.attributes.position.count,y=new Float32Array(v*3);for(let x=0;x<v;x++)y.set([u.r,u.g,u.b],x*3);return m.setAttribute("color",new Se(y,3)),m},r=vn("#7A6A58"),o=new Yt(1,1,1),a=(m,u,v,y,x=1)=>{let M=Rh(new ui(m,x).deleteAttribute("normal").deleteAttribute("uv"));return M.computeVertexNormals(),M.translate(u,v,y)},c=i.D.treeShape==="clump"?Ac([a(1.15,0,3.55,0),a(.92,1.05,3.2,.35),a(.9,-.95,3.3,.5),a(.88,.2,3.25,-1.05),a(.86,-.35,3.05,1.05),a(.8,.25,4.45,.1)].map(m=>s(m.scale(1.02,.96,1.02),o))):a(1,0,0,0).scale(2.05,1.85,2.05).translate(0,3.4,0),l=new Ln(.16,.24,2.6,5,1,!0).translate(0,1.3,0).deleteAttribute("uv"),h=Ac([s(c,o),s(l,r)]),f=new Zn(2,3.6,7,1).translate(0,3.6,0).deleteAttribute("uv"),p=new Zn(1.45,3,7,1).translate(0,5.6,0).deleteAttribute("uv"),d=new Ln(.14,.2,2.2,5,1,!0).translate(0,1.1,0).deleteAttribute("uv"),g=Ac([s(f,o),s(p,o),s(d,r)]),_=i.D.treeCol||["#7F9466","#9AA676","#5C755A","#6F8566"];n(h,i.TREES.filter(m=>!m.t),vn(_[0]),vn(_[1])),n(g,i.TREES.filter(m=>m.t),vn(_[2]),vn(_[3]))}function rg(){let i=document.createElement("canvas");i.width=64,i.height=8;let t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,64,8);for(let n=0;n<12;n++)t.fillStyle="rgba(0,0,0,.13)",t.fillRect(n*64/12,0,1.6,8);let e=new Xi(i);return e.wrapS=e.wrapT=Bi,e.colorSpace=Pe,e}function Wh(i,t,e={}){var v;let n=new Ze,{B:s,D:r}=i,o=s.x1-s.x0,a=s.z1-s.z0,c=Gh(i,e.mobile?.32:.22),l=document.createElement("canvas");l.width=c.width,l.height=c.height,l.getContext("2d").drawImage(c,0,0);let h=new Xi(l);h.colorSpace=Pe,h.flipY=!1,h.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy());let f=y=>new gn({roughness:.92,metalness:0,...y}),p={ground:f({map:h}),terrain:f({map:h}),solid:f({vertexColors:!0}),roof:f({vertexColors:!0,map:rg(),roughness:.8}),skirt:f({vertexColors:!0,roughness:1}),skirtw:new gn({color:"#5F8F9B",transparent:!0,opacity:.55,roughness:.3,depthWrite:!1}),water:new gn({color:r.waterCol||"#6A98A2",transparent:!0,opacity:.82,roughness:.22,metalness:.05,depthWrite:!1})},d=(y,x,M=!0,w=!0)=>{if(!y)return null;let T=new de(y,x);return T.castShadow=M,T.receiveShadow=w,n.add(T),T};d(Q0(i),p.terrain);let g=new Ks,_=new Ks;d(j0(i,g),p.ground),eg(i,g),tg(i,g),Uh(g,i.BLD),ng(i,g),Nh(g,r.props,(v=r.BED)!=null?v:-4);let m=zh(g,r.marks,i)||[];kh(g,r.bridges,i),ig(i,g,_);for(let y of Object.keys(g.G))d(g.geometry(y),y==="roof"?p.roof:y==="skirt"||y==="base"?p.skirt:p.solid,!["skirt","base","roofu"].includes(y),y!=="base");if(r.WATER!=null){let y=d(_.geometry("skirtw"),p.skirtw,!1,!1);y&&(y.renderOrder=2);let x=new de(new fi(o,a).rotateX(-Math.PI/2),p.water);x.position.set((s.x0+s.x1)/2,r.WATER,(s.z0+s.z1)/2),x.receiveShadow=!0,x.renderOrder=1,n.add(x)}return e.trees!==!1&&sg(i,n,!0),{scene:n,M:p,groundTex:h,setOverlay:y=>{let x=l.getContext("2d");if(x.setTransform(1,0,0,1,0,0),x.globalAlpha=1,x.globalCompositeOperation="source-over",x.drawImage(c,0,0),y){let M=c.res;x.setTransform(1/M,0,0,1/M,-s.x0/M,-s.z0/M),x.save(),y(x,M),x.restore(),x.setTransform(1,0,0,1,0,0)}h.needsUpdate=!0},anim:m}}var os=i=>new V(i[0],i[1],i[2]);function Qs(i,t,e){let n=[t[0]-i[0],t[1]-i[1],t[2]-i[2]],s=Math.hypot(...n)||1,r=e?i.map((c,l)=>c+n[l]/s*e):t,o=[i[0]-r[0],i[1]-r[1],i[2]-r[2]],a=e||s;return{t:r,r:a,ph:Math.acos(Math.max(-1,Math.min(1,o[1]/a))),th:Math.atan2(o[0],o[2])}}function qh(i,t,e={}){var D,R,X,tt,ct;let n=(window.OW_DATA||{})[t];if(!n)throw new Error("\u6CA1\u6709\u5730\u56FE\u6570\u636E "+t);let s=Ah(n),{B:r}=s,o=(D=e.mobile)!=null?D:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),a=new qo({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!e.preserve});a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.shadowMap.enabled=!0,a.shadowMap.type=Zr,a.shadowMap.autoUpdate=!1,a.toneMapping=no,a.toneMappingExposure=(X=(R=e.exposure)!=null?R:n.exposure)!=null?X:1,a.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.style.position=i.style.position||"relative",i.appendChild(a.domElement);let c=document.createElement("div");c.className="ow-labels",c.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden",i.appendChild(c);let l=new Rs,h=new De((tt=e.fov)!=null?tt:30,1,1,6e3),f=Wh(s,a,{mobile:o,trees:e.trees});l.add(f.scene);let p=()=>typeof e.fog=="function"?e.fog():typeof e.fog=="string"?e.fog:"#E9E6DF";e.fog&&(l.fog=new As(p(),1e5,2e5)),l.add(new zs("#EEF2F5","#B5AB9A",1.25));let d=new Hs("#FFF2DF",2.7),g=new V(...n.sun||[-.62,.72,.34]).normalize(),_=new V((r.x0+r.x1)/2,10,(r.z0+r.z1)/2);d.position.copy(_).addScaledVector(g,800),d.target.position.copy(_),l.add(d,d.target),d.castShadow=!0;let m=o?2048:4096;d.shadow.mapSize.set(m,m),d.shadow.bias=-3e-4,d.shadow.normalBias=.05,d.shadow.radius=2;{let F=d.shadow.camera,it=new ne().lookAt(d.position,d.target.position,new V(0,1,0)).setPosition(d.position).invert(),$=1e9,nt=-1e9,rt=1e9,j=-1e9,ot=1e9,St=-1e9,pt=new V;for(let ut of[r.x0,r.x1])for(let At of[n.BASE,70])for(let O of[r.z0,r.z1])pt.set(ut,At,O).applyMatrix4(it),$=Math.min($,pt.x),nt=Math.max(nt,pt.x),rt=Math.min(rt,pt.y),j=Math.max(j,pt.y),ot=Math.min(ot,pt.z),St=Math.max(St,pt.z);Object.assign(F,{left:$,right:nt,bottom:rt,top:j,near:-St-5,far:-ot+5}),F.updateProjectionMatrix(),a.shadowMap.needsUpdate=!0}let u=!0,v=!0,y=!0,x=performance.now(),M=[],w=[],T=[],A=[],S=new Jo(h,a.domElement,{minR:3,maxR:1100,bounds:{x0:r.x0,x1:r.x1,z0:r.z0,z1:r.z1},onChange:()=>{u=!0},onStart:()=>{for(let F of M)F()},onWheelHint:()=>{for(let F of w)F()},...e.controls||{}}),b=F=>F.eye?Qs(F.eye,F.look,F.near):F,E=(F,it,$)=>{var j;let nt=b(F),rt={th:nt.th,ph:nt.ph,r:nt.r,t:os(nt.t)};it?S.set(rt,!0):S.flyTo(rt,(j=$!=null?$:F.dur)!=null?j:1.3)},C=(F,it,$,nt=.08)=>{let rt=F.reduce((ut,At)=>[ut[0]+At[0]/F.length,ut[1]+At[1]/F.length,ut[2]+At[2]/F.length],[0,0,0]),j=h.clone(),ot=os(rt),St=10,pt=3e3;for(let ut=0;ut<26;ut++){let At=(St+pt)/2,O=Math.sin($);j.position.set(ot.x+At*O*Math.sin(it),ot.y+At*Math.cos($),ot.z+At*O*Math.cos(it)),j.lookAt(ot),j.updateMatrixWorld(),j.updateProjectionMatrix();let at=!0;for(let mt of F){let bt=os(mt).project(j);if(Math.abs(bt.x)>1-nt*2||Math.abs(bt.y)>1-nt*2||bt.z>1){at=!1;break}}at?pt=At:St=At}return{t:rt,r:pt,th:it,ph:$}},P=()=>{let F=i.clientWidth||800,it=i.clientHeight||500;a.setSize(F,it,!1),h.aspect=F/it,h.updateProjectionMatrix(),u=!0},L=new ResizeObserver(P);L.observe(i),P();let z=new IntersectionObserver(F=>{v=F[0].isIntersecting,v&&(u=!0)});z.observe(i);let N=f.anim.filter(F=>F.k==="steam"),H=7,k=null;if(N.length&&e.steam!==!1){let F=new ui(1,1),it=new gn({color:"#F4F1EC",roughness:1,transparent:!0,opacity:.55,depthWrite:!1});k=new li(F,it,N.length*H),k.frustumCulled=!1,k.renderOrder=3,l.add(k)}let Q=new ne,et=new Je,dt=new V,It=new V,Bt=F=>{k&&(N.forEach((it,$)=>{for(let nt=0;nt<H;nt++){let rt=(F*.12+nt/H+$*.37)%1,j=.8+rt*3.2;It.set(it.p[0]+rt*6,it.p[1]+rt*14,it.p[2]-rt*2.5),dt.setScalar(j*(1-rt*.35)),Q.compose(It,et,dt),k.setMatrixAt($*H+nt,Q)}}),k.instanceMatrix.needsUpdate=!0)};Bt(0);let xt=new Ze;l.add(xt);let gt=(F,it={})=>{var st,Ct,Vt,re;let $=(st=it.w)!=null?st:1.2,nt=(Ct=it.lift)!=null?Ct:.35,rt=[],j=[],ot=F.map(Dt=>os(Dt));if(ot.length<2)return null;let St=[],pt=0;for(let Dt=1;Dt<ot.length;Dt++){let jt=ot[Dt].distanceTo(ot[Dt-1]);St.push([pt,pt+jt]),pt+=jt}let ut=it.dash?[it.dash,(Vt=it.gap)!=null?Vt:it.dash*.8]:null,At=(Dt,jt)=>{let ge=new V().subVectors(jt,Dt);if(ge.y=0,ge.lengthSq()<1e-6)return;ge.normalize();let an=new V(-ge.z,0,ge.x).multiplyScalar($/2),ze=rt.length/3;rt.push(Dt.x+an.x,Dt.y+nt,Dt.z+an.z,Dt.x-an.x,Dt.y+nt,Dt.z-an.z,jt.x+an.x,jt.y+nt,jt.z+an.z,jt.x-an.x,jt.y+nt,jt.z-an.z),j.push(ze,ze+2,ze+1,ze+1,ze+2,ze+3)},O=Dt=>{for(let jt=0;jt<St.length;jt++)if(Dt<=St[jt][1]||jt===St.length-1){let ge=(Dt-St[jt][0])/Math.max(1e-6,St[jt][1]-St[jt][0]);return new V().lerpVectors(ot[jt],ot[jt+1],Math.min(1,Math.max(0,ge)))}},at=.8;if(ut)for(let Dt=0;Dt<pt;Dt+=ut[0]+ut[1]){let jt=Math.min(pt,Dt+ut[0]);for(let ge=Dt;ge<jt-1e-6;ge+=at)At(O(ge),O(Math.min(jt,ge+at)))}else for(let Dt=0;Dt<pt-1e-6;Dt+=at)At(O(Dt),O(Math.min(pt,Dt+at)));let mt=new be;mt.setAttribute("position",new Kt(rt,3)),mt.setIndex(j);let bt=new pn({color:it.color||"#C8553D",transparent:!0,opacity:(re=it.opacity)!=null?re:.92,depthWrite:!1,side:sn,polygonOffset:!0,polygonOffsetFactor:-4}),lt=new de(mt,bt);return lt.renderOrder=5,xt.add(lt),u=!0,lt.userData.len=pt,lt.userData.pAt=O,lt},Z=(F,it={})=>{var pt,ut,At,O;let $=new Ze,nt=it.color||"#C8553D",rt=(pt=it.h)!=null?pt:4,j=new de(new Ln(.12,.12,rt,6).translate(0,rt/2,0),new pn({color:nt})),ot=new de(new Ns((ut=it.r)!=null?ut:.7,12,8).translate(0,rt,0),new pn({color:nt})),St=new de(new Zi(((At=it.ring)!=null?At:2)*.8,(O=it.ring)!=null?O:2,32).rotateX(-Math.PI/2).translate(0,.3,0),new pn({color:nt,transparent:!0,opacity:.7,depthWrite:!1}));return $.add(j,ot,St),$.position.set(F[0],F[1],F[2]),xt.add($),u=!0,$},K=(()=>{let F=new Ze,it=new gn({color:"#C8553D",roughness:.6}),$=new de(new Ds(.32,1.05,4,10).translate(0,.85,0),it);$.castShadow=!0;let nt=new de(new Zn(.22,.5,8).rotateX(Math.PI/2).translate(0,1.25,.4),it),rt=new de(new Zi(.7,.95,28).rotateX(-Math.PI/2).translate(0,.08,0),new pn({color:"#C8553D",transparent:!0,opacity:.8,depthWrite:!1}));return F.add($,nt,rt),F.visible=!1,l.add(F),F})(),ht=(F,it)=>{if(!F){K.visible=!1,u=!0;return}K.visible=!0,K.position.set(F[0],F[1],F[2]),it!=null&&(K.rotation.y=it),u=!0},yt=new Set,wt=(F,it,$="",nt={})=>{let rt=document.createElement("div");rt.className="ow-lb "+$,rt.innerHTML=it,rt.style.cssText="position:absolute;left:0;top:0;transform:translate(-50%,-100%);white-space:nowrap;will-change:transform",c.appendChild(rt);let j={e:rt,p:os(F),o:nt};return yt.add(j),u=!0,{el:rt,remove:()=>{rt.remove(),yt.delete(j)},move:ot=>{j.p.set(ot[0],ot[1],ot[2]),u=!0}}},Wt=()=>{for(let F of yt)F.e.remove();yt.clear(),u=!0},Qt=new V,U=()=>{let F=i.clientWidth,it=i.clientHeight;for(let $ of yt){if(Qt.copy($.p).project(h),Qt.z>1||Math.abs(Qt.x)>1.2||Math.abs(Qt.y)>1.2){$.e.style.display="none";continue}$.e.style.display="";let rt=(Qt.x+1)/2*F,j=(1-Qt.y)/2*it;$.e.style.transform=`translate(${rt.toFixed(1)}px,${j.toFixed(1)}px) translate(-50%,-100%)`}},ie=F=>(Qt.set(F[0],F[1],F[2]).project(h),{x:(Qt.x+1)/2*i.clientWidth,y:(1-Qt.y)/2*i.clientHeight,in:Qt.z<1&&Math.abs(Qt.x)<=1&&Math.abs(Qt.y)<=1}),Ot=(F,it)=>{let $=F.map(os),nt=[0];for(let at=1;at<$.length;at++)nt.push(nt[at-1]+$[at].distanceTo($[at-1]));let rt=nt[nt.length-1],j=Math.max(0,Math.min(1,it))*rt,ot=1;for(;ot<nt.length-1&&nt[ot]<j;)ot++;let St=(j-nt[ot-1])/Math.max(1e-6,nt[ot]-nt[ot-1]),pt=new V().lerpVectors($[ot-1],$[ot],St),ut=$[Math.max(0,ot-1)],At=$[Math.min($.length-1,ot)],O=Math.atan2(At.x-ut.x,At.z-ut.z);return{p:[pt.x,pt.y,pt.z],yaw:O,s:j,L:rt}},Ft=(F,it,$={})=>{var At,O,at;let{p:nt,yaw:rt}=Ot(F,it),j=(At=$.back)!=null?At:11,ot=(O=$.up)!=null?O:5,St=Ot(F,Math.min(1,it+((at=$.look)!=null?at:.04))).p,pt=[Xh(nt[0],St[0],.5),nt[1]+1.6,Xh(nt[2],St[2],.5)],ut=[nt[0]-Math.sin(rt)*j,nt[1]+ot,nt[2]-Math.cos(rt)*j];return{pose:Qs(ut,pt),p:nt,yaw:rt}},Mt=()=>{if(l.fog){let F=Math.min(1,Math.max(0,(h.position.y-(s.ground(h.position.x,h.position.z)||0)-45)/120));l.fog.near=120+F*6e3,l.fog.far=1100+F*9e3,typeof e.fog=="function"&&l.fog.color.set(p())}a.render(l,h),U();for(let F of A)F(h)},se=0,Et=!1,zt=0,me=F=>{if(!y||(requestAnimationFrame(me),Et))return;let it=Math.max(0,Math.min(.05,(F-x)/1e3));if(x=F,!v||document.hidden)return;let $=he.animating||F<he.animUntil,nt=!$&&he.ambient&&F-se>60;if($||nt){Bt(F/1e3);for(let j of T)j(it,F/1e3);nt&&(se=F)}let rt=S.update(it);(u||rt||$||nt)&&(Mt(),u=!1)};requestAnimationFrame(me);let he={W:s,D:n,renderer:a,scene:l,camera:h,controls:S,world:f,fx:xt,animating:!1,animUntil:0,ambient:(ct=e.ambient)!=null?ct:!0,mobile:o,invalidate:()=>{u=!0},resize:P,setView:E,fitPose:C,eyePose:Qs,ribbon:gt,marker:Z,label:wt,clearLabels:Wt,project:ie,setPlayer:ht,pathAt:Ot,followPose:Ft,remove:F=>{var it;F&&(xt.remove(F),(it=F.traverse)==null||it.call(F,$=>{var nt,rt,j;(nt=$.geometry)==null||nt.dispose(),(j=(rt=$.material)==null?void 0:rt.dispose)==null||j.call(rt)}),u=!0)},setOverlay:F=>{f.setOverlay(F),u=!0},ground:(F,it)=>s.ground(F,it),hold:F=>{Et=F,F?(zt=performance.now()/1e3,S.now=()=>zt*1e3):S.now=()=>performance.now()},step:F=>{zt+=F,Bt(zt);for(let it of T)it(F,zt);S.update(F),Mt()},renderNow:()=>{S.update(1),Mt()},onRender:F=>A.push(F),onFrame:F=>T.push(F),onUserStart:F=>M.push(F),onWheelHint:F=>w.push(F),dispose:()=>{y=!1,L.disconnect(),z.disconnect(),a.dispose(),a.domElement.remove(),c.remove()}};return he}var Xh=(i,t,e)=>i+(t-i)*e;var Tt={stone:Y("#C9C1B3"),stone2:Y("#B3AB9D"),jade:Y("#5F8579"),jade2:Y("#4C6E63"),copper:Y("#A27A57"),iron:Y("#5E6468"),iron2:Y("#7B8186"),brass:Y("#B08A55"),face:Y("#F1ECE0"),glass:Y("#8FA6AA"),pipe:Y("#8A6E55"),hull:Y("#6F5B48"),deck:Y("#B59A78"),pond:Y("#7FA5AA"),red:Y("#A85B4B")},as=i=>{let t=Math.cos(i.rot||0),e=Math.sin(i.rot||0);return(n,s,r)=>[i.x+n*t-r*e,i.y+s,i.z+n*e+r*t]};function js(i,t,e,n,s,r,o=8,a=20){for(let c=0;c<o;c++){let l=c/o*Math.PI/2,h=(c+1)/o*Math.PI/2;i.cyl("metal",t[0],e+Math.sin(l)*s,t[2],n*Math.cos(l),(Math.sin(h)-Math.sin(l))*s,a,r,{r2:Math.max(.02,n*Math.cos(h))})}}pe.clocktower=(i,t)=>{var d,g;let e=as(t),n=e(0,0,0),s=t.y,r=(d=t.h)!=null?d:36,o=(g=t.r)!=null?g:4.8;i.cyl("stone",n[0],s-.6,n[2],o+4.4,1.1,24,Tt.stone2),i.cyl("stone",n[0],s+.5,n[2],o+4.4,.45,24,Tt.stone),i.cyl("water",n[0],s+.62,n[2],o+3.6,.1,24,Tt.pond),i.box("stone",n[0],s+.5,n[2],o*2+1.2,3.2,o*2+1.2,t.rot||0,Tt.stone2,{ao:.25});let a=r*.62;i.box("wall",n[0],s+3.7,n[2],o*2,a-3.7,o*2,t.rot||0,Tt.stone,{ao:.2});for(let[_,m]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let u=e(_*o,0,m*o);i.box("stone",u[0],s+3.7,u[2],.9,a-3.7,.9,t.rot||0,Tt.stone2)}for(let _ of[a*.45,a-.4])i.box("plinth",n[0],s+_,n[2],o*2+.5,.4,o*2+.5,t.rot||0,Tt.stone2);let c=s+a-3.2;for(let _=0;_<4;_++){let m=_*Math.PI/2+(t.rot||0),u=Math.cos(m),v=Math.sin(m),y=n[0]+u*(o+.06),x=n[2]+v*(o+.06);i.rod("metal",[y-u*.02,c,x-v*.02],[y+u*.1,c,x+v*.1],1.72,18,Tt.brass),i.box("metal",y+u*.05,c-1.55,x+v*.05,.04,3.4,.04,m,Tt.face);let M=[];for(let w=0;w<16;w++){let T=w/16*6.283;M.push([y+u*.08-v*Math.cos(T)*1.55,c+Math.sin(T)*1.55,x+v*.08+u*Math.cos(T)*1.55])}for(let w=0;w<16;w++)i.tri("wall",[y+u*.09,c,x+v*.09],M[(w+1)%16],M[w],Tt.face);i.rod("metal",[y+u*.14,c,x+v*.14],[y+u*.14,c+1.1,x+v*.14],.06,4,B.dark),i.rod("metal",[y+u*.14,c,x+v*.14],[y+u*.14-v*.8,c-.2,x+v*.14+u*.8],.06,4,B.dark)}let l=s+a;i.cyl("plinth",n[0],l,n[2],o+1.6,.35,16,Tt.stone2);for(let _=0;_<16;_++){let m=_/16*6.283,u=(_+1)/16*6.283,v=o+1.45;Qe(i,[n[0]+Math.cos(m)*v,l+.35,n[2]+Math.sin(m)*v],[n[0]+Math.cos(u)*v,l+.35,n[2]+Math.sin(u)*v],1,Tt.iron,2)}let h=l+.35,f=r*.14;i.cyl("wall",n[0],h,n[2],o*.82,f,8,Tt.stone);for(let _=0;_<8;_++){let m=_/8*6.283+Math.PI/8;i.cyl("stone",n[0]+Math.cos(m)*o*.86,h,n[2]+Math.sin(m)*o*.86,.28,f,6,Tt.stone2)}i.cyl("plinth",n[0],h+f,n[2],o*.98,.45,16,Tt.jade2),js(i,n,h+f+.45,o*.92,o*1.25,Tt.jade);let p=h+f+.45+o*1.25;return i.cyl("metal",n[0],p-.2,n[2],.5,1.1,8,Tt.brass),i.cyl("metal",n[0],p+.9,n[2],.32,r-(p-s)-1,8,Tt.brass,{r2:.04}),{}};pe.dome=(i,t)=>{var h,f;let e=as(t),n=e(0,0,0),s=t.y,r=(h=t.r)!=null?h:12,o=(f=t.h)!=null?f:8;i.cyl("stone",n[0],s-.5,n[2],r+.8,1.6,28,Tt.stone2),i.cyl("wall",n[0],s+1.1,n[2],r,o,28,Y("#BFA48C"));for(let p of[o*.45,o*.8])i.cyl("metal",n[0],s+1.1+p,n[2],r+.12,.35,28,Tt.iron);for(let p=0;p<14;p++){let d=p/14*6.283;i.box("metal",n[0]+Math.cos(d)*(r+.05),s+1.1+o*.52,n[2]+Math.sin(d)*(r+.05),.1,o*.24,r*.26,d,Tt.glass)}let a=s+1.1+o;i.cyl("plinth",n[0],a,n[2],r+.5,.5,28,Tt.stone2);let c=t.col?Y(t.col):Tt.copper;js(i,n,a+.5,r,r*.78,c,9,28);for(let p=0;p<12;p++){let d=p/12*6.283,g=null;for(let _=0;_<=8;_++){let m=_/8*Math.PI/2,u=[n[0]+Math.cos(d)*Math.cos(m)*(r+.06),a+.5+Math.sin(m)*r*.78+.04,n[2]+Math.sin(d)*Math.cos(m)*(r+.06)];g&&i.rod("metal",g,u,.1,4,c.map(v=>v*.76)),g=u}}let l=a+.5+r*.78;return i.cyl("metal",n[0],l-.3,n[2],r*.16,1.8,10,Tt.iron2),js(i,n,l+1.5,r*.18,r*.14,Tt.copper,4,12),{steam:[[n[0],l+2.6,n[2]]]}};pe.steamhall=(i,t)=>{var L,z,N,H,k,Q,et,dt,It,Bt;let e=as(t),n=t.y,s=t.rot||0,r=(xt,gt)=>(Z,K,ht)=>{let yt=e(Z+xt,0,ht+gt);return[yt[0],K,yt[2]]},o=(xt,gt,Z,K,ht,yt,wt,Wt,Qt)=>{let U=e(gt,0,Z);i.box(xt,U[0],K,U[2],ht,yt,wt,s,Wt,Qt)},a=t.wc?Y(t.wc):Y("#DCD3C2"),c=a.map(xt=>xt*.84),l=Y("#4D5A60"),h=Tt.jade,f=Tt.jade2,p=Y("#8B8782"),d=(L=t.cw)!=null?L:18,g=(z=t.cd)!=null?z:18,_=(N=t.ch)!=null?N:13,m=(H=t.pw)!=null?H:5.6,u=(k=t.ph)!=null?k:5.6,v=(Q=t.ww)!=null?Q:11,y=(et=t.wd)!=null?et:15,x=(dt=t.wh)!=null?dt:8.4,M=-g/2;o("plinth",0,0,n-1,d+1.6,1.3,g+1.6,Tt.stone2,{ao:.2}),o("plinth",0,M-2.3,n-1,d+.6,1.3,4.6,Tt.stone2);for(let xt=0;xt<3;xt++)o("plinth",0,M-4.75-xt*.45,n-1,d-2-xt*.4,1.3-(xt+1)*.1,.45,Tt.stone);let w=(d-m)/2;for(let xt of[-1,1])o("wall",xt*(m/2+w/2),0,n+.3,w,_-.3,g,a,{ao:.25});o("wall",0,0,n+u,m,_-u,g,a);for(let xt of[M-.05,-M+.05])o("wood",0,xt,n+u-.45,m+.3,.45,.25,B.ridge);for(let xt of[4.6,8.8])o("plinth",0,0,n+xt,d+.4,.32,g+.4,c);o("plinth",0,0,n+_-.25,d+1.1,.85,g+1.1,c);let T=(xt,gt,Z,K)=>{let ht=e(xt,0,gt);i.box("metal",ht[0],Z,ht[2],K?1.15:.12,2.2,K?.12:1.15,s,l)};for(let xt=0;xt<3;xt++){let gt=n+1.4+xt*4.2;for(let Z of[-1,1])for(let K of[M-.04,-M+.04])for(let ht of xt===0?[6.4]:[3.9,6.9])T(Z*ht,K,gt,1);for(let Z of[-1,1])for(let K of[-.35,-.117,.117,.35])T(Z*(d/2+.04),K*g,gt,0)}for(let xt of[-d/2,-m/2-.6,m/2+.6,d/2])o("stone",xt,M-.15,n+.3,.7,_-.6,.35,c);for(let xt of[-8.4,-5.9,-3.4,3.4,5.9,8.4]){let gt=e(xt,0,M-3.6);i.cyl("stone",gt[0],n+.3,gt[2],.5,7.6,10,Tt.stone),i.cyl("stone",gt[0],n+.3,gt[2],.68,.4,10,Tt.stone2),i.cyl("stone",gt[0],n+7.6,gt[2],.66,.4,10,Tt.stone2)}o("plinth",0,M-3.6,n+7.95,d+.4,1,1.5,c),o("plinth",0,M-1.8,n+8,d+.2,.25,3.8,a),we(i,d/2+.3,2.2,n+9.1,r(0,M-2.2),.7,h,f,{pitch:Math.tan(24*Math.PI/180),lift:.3,horn:.6,ridgeH:.25});let A=e(0,0,1),S=n+_+.6,b=(It=t.rd)!=null?It:5.4;i.cyl("wall",A[0],S,A[2],b,4.4,28,a);for(let xt=0;xt<16;xt++){let gt=xt/16*6.283;i.box("metal",A[0]+Math.cos(gt)*(b+.03),S+1.2,A[2]+Math.sin(gt)*(b+.03),.1,2,1.1,gt+Math.PI/2,l)}i.cyl("plinth",A[0],S+4.4,A[2],b+.45,.5,28,c),i.cyl("metal",A[0],S+4.9,A[2],b+.1,1.4,28,Y("#8F9394")),js(i,A,S+6.3,b+.1,b*.62,Y("#8A8E90"),8,28);for(let xt=0;xt<12;xt++){let gt=xt/12*6.283,Z=null;for(let K=0;K<=6;K++){let ht=K/6*Math.PI/2,yt=[A[0]+Math.cos(gt)*Math.cos(ht)*(b+.16),S+6.3+Math.sin(ht)*b*.62+.03,A[2]+Math.sin(gt)*Math.cos(ht)*(b+.16)];Z&&i.rod("metal",Z,yt,.09,4,Y("#6F7375")),Z=yt}}let E=S+6.3+b*.62;i.cyl("metal",A[0],E-.2,A[2],.9,1.4,12,Tt.iron2),js(i,A,E+1.2,1,.7,Tt.brass,4,12);let C=(Bt=t.stack)!=null?Bt:30,P=[];for(let xt of[-1,1]){let gt=e(xt*(d/2-1.6),0,g/2-2.2);i.cyl("metal",gt[0],n+_-.5,gt[2],1.35,C-_+.5,16,p,{r2:1.15});for(let Z of[_+4,C-6,C-1.2])i.cyl("metal",gt[0],n+Z,gt[2],1.36,.35,16,Tt.iron);i.cyl("metal",gt[0],n+C,gt[2],1.45,.5,16,B.dark),P.push([gt[0],n+C+1,gt[2]],[gt[0]+.5,n+C+3,gt[2]+.3])}for(let xt of[-1,1]){let gt=xt*(d/2+v/2-.2),Z=1.2;o("plinth",gt,Z,n-1,v+1,1.3,y+1,Tt.stone2),o("wall",gt,Z,n+.3,v,x-.3,y,a,{ao:.25}),o("plinth",gt,Z,n+4.3,v+.3,.28,y+.3,c);for(let K=0;K<2;K++)for(let ht of[-3.3,0,3.3])T(gt+ht,Z-y/2-.04,n+1.3+K*4,1);for(let K=0;K<2;K++)for(let ht of[-4.5,0,4.5])T(gt+xt*(v/2+.04),Z+ht,n+1.3+K*4,0);we(i,v/2,y/2,n+x,r(gt,Z),.9,h,f,{xs:!0})}return{steam:P}};pe.pipegate=(i,t)=>{var o,a;let e=as(t),n=(o=t.w)!=null?o:4.6,s=(a=t.h)!=null?a:5.6,r=0;for(let c of[-1,1]){i.rod("metal",e(c*n/2,r,0),e(c*n/2,s,0),.32,10,Tt.pipe),i.cyl("metal",...[e(c*n/2,0,0)].map(l=>[l[0],l[1]-.1,l[2]])[0],.55,.5,10,Tt.iron);for(let l of[1.4,3.2]){let h=e(c*n/2,l,0);i.cyl("metal",h[0],h[1],h[2],.42,.22,10,Tt.brass)}}i.rod("metal",e(-n/2,s,0),e(n/2,s,0),.32,10,Tt.pipe);for(let c of[-1,1]){let l=e(c*n/2,s-.3,0);i.cyl("metal",l[0],l[1],l[2],.4,.6,10,Tt.iron2)}i.rod("metal",e(0,s,-.2),e(0,s,.2),.95,16,Tt.brass),i.rod("metal",e(0,s+.3,0),e(0,s+1.3,0),.12,6,Tt.brass);{let c=e(0,s+1.3,0);i.cyl("metal",c[0],c[1],c[2],.45,.12,8,Tt.brass)}return i.rod("metal",e(-n/2,s-.9,0),e(-n/2-1.4,s-.9,0),.18,6,Tt.pipe),{steam:[e(0,s+1.6,0)]}};pe.steamcrane=(i,t)=>{var m,u,v,y;let e=as(t),n=t.rot||0,s=(m=t.s)!=null?m:1,r=((u=t.jib)!=null?u:18)*s,o=((v=t.ang)!=null?v:36)*Math.PI/180,a=t.y,c=(x,M,w,T,A,S,b,E,C)=>{let P=e(M*s,0,w*s);i.box(x,P[0],a+T*s,P[2],A*s,S*s,b*s,n,E,C)},l=(x,M,w)=>{let T=e(x*s,0,w*s);return[T[0],a+M*s,T[2]]},h=e(0,0,0);i.cyl("stone",h[0],a,h[2],4.4*s,1.6*s,8,Tt.stone2),i.cyl("metal",h[0],a+1.6*s,h[2],3.8*s,.5*s,20,Tt.iron),c("wall",-1.6,0,2.1,6.6,3.6,5,Y("#8E7259"),{ao:.2}),c("wood",-1.6,0,2.1,6.7,.3,5.1,Y("#6E5845"));for(let x of[-2.52,2.52])for(let M of[-3.2,-.4]){let w=e(M*s,0,x*s);i.box("metal",w[0],a+3.2*s,w[2],1*s,1.2*s,.08,n,Y("#3E4549"))}we(i,3.5*s,2.7*s,a+5.7*s,(x,M,w)=>{let T=e(x-1.6*s,0,w);return[T[0],M,T[2]]},.45*s,Tt.iron,Tt.iron2,{pitch:Math.tan(26*Math.PI/180),lift:.2,horn:0,ridgeH:.15});let f=e(-3.6*s,0,0);i.cyl("metal",f[0],a+5.4*s,f[2],.62*s,5.4*s,12,Tt.iron),i.cyl("metal",f[0],a+10.8*s,f[2],.72*s,.35*s,12,Y("#3A3F42")),c("metal",-5.6,0,2.1,1.6,2.6,4.2,Y("#5A5F62"));let p=l(-1.2,10.4,0);for(let x of[-2,2])i.rod("metal",l(1,2.2,x),p,.16*s,6,Tt.iron);i.rod("metal",l(-3.4,5.8,0),p,.14*s,6,Tt.iron);let d=[2+r/s*Math.cos(o),2.6+r/s*Math.sin(o)],g=Math.max(4,Math.round(r/2.2));for(let x of[-1.1,1.1])i.rod("metal",l(2,2.6,x),l(d[0],d[1],x*.25),.14*s,6,Tt.iron2);for(let x=1;x<g;x++){let M=x/g,w=2+(d[0]-2)*M,T=2.6+(d[1]-2.6)*M,A=1.1*(1-M*.75);i.rod("metal",l(w,T,-A),l(w,T,A),.06*s,4,Tt.iron2),x%2&&i.rod("metal",l(w,T,-A),l(2+(d[0]-2)*(x+1)/g,2.6+(d[1]-2.6)*(x+1)/g,A*.92),.05*s,4,Tt.iron2)}for(let x of[-.3,.3])i.rod("dark",p,l(d[0],d[1]+.2,x),.04*s,4,B.dark);let _=(y=t.hookY)!=null?y:4.2;return i.rod("dark",l(d[0],d[1],0),l(d[0],_+1.6,0),.04*s,4,B.dark),c("metal",d[0],0,_+1.2,.5,.5,.5,B.dark),c("crate",d[0],0,_-.6,2,1.7,2,B.crate),c("crate",d[0],0,_-.1,2.04,.12,2.04,B.crate.map(x=>x*.85)),{steam:[[f[0],a+11.4*s,f[2]],[f[0]+.4,a+13.2*s,f[2]+.3]]}};pe.steamship=(i,t)=>{var l,h,f;let e=as(t),n=((l=t.waterY)!=null?l:-14)-.2,s=(h=t.l)!=null?h:18,r=(f=t.w)!=null?f:4.4,o=e(0,0,0),a=(p,d,g,_,m,u,v,y)=>{let x=e(d,0,g);i.box(p,x[0],n+_,x[2],m,u,v,t.rot||0,y)};a("hull",0,0,-1.4,s,2.2,r,Tt.hull),a("hull",s/2+.8,0,-1,1.8,1.8,r*.55,Tt.hull),a("wood",0,0,.8,s-.6,.15,r-.3,Tt.deck),a("wall",-2,0,.95,7,2.2,r-1.2,B.wall[0]),a("roofe",-2,0,3.15,7.6,.25,r-.8,B.ridge);let c=e(-1,0,0);i.cyl("metal",c[0],n+3.4,c[2],.55,3.4,10,Tt.red),i.cyl("metal",c[0],n+6.6,c[2],.62,.3,10,B.dark);for(let p of[-1,1])Qe(i,[e(-s/2+.6,0,p*(r/2-.2))[0],n+.95,e(-s/2+.6,0,p*(r/2-.2))[2]],[e(s/2-.6,0,p*(r/2-.2))[0],n+.95,e(s/2-.6,0,p*(r/2-.2))[2]],.8,B.woodD,1.6);return{steam:[[c[0],n+7.3,c[2]],[c[0]-.6,n+9,c[2]+.3]]}};pe.archbridge=(i,t)=>{var M,w,T,A,S;let[e,n]=t.a,[s,r]=t.b,o=Math.hypot(s-e,r-n),a=Math.atan2(r-n,s-e),c=(M=t.w)!=null?M:10,l=(w=t.n)!=null?w:3,h=-Math.sin(a),f=Math.cos(a),p=(T=t.waterY)!=null?T:-14,d=p-3,g=t.ya,_=t.yb,m=(A=t.hump)!=null?A:1.2,u=b=>le(g,_,b)+m*Math.sin(Math.PI*b),v=(S=t.land)!=null?S:.12,y=(1-2*v)/l,x=Math.max(40,Math.round(o/.9));for(let b=0;b<x;b++){let E=b/x,C=(b+1)/x,P=(E+C)/2,L=le(e,s,P),z=le(n,r,P),N=u(P),H=d;if(P>v&&P<1-v){let k=(P-v)/y,Q=Math.floor(k),et=k-Q,dt=.14;if(et>dt/2&&et<1-dt/2){let It=(et-dt/2)/(1-dt),Bt=Math.min(N-p-1.4,y*o*.5);H=p+.4+Math.max(0,Bt)*Math.sqrt(Math.max(0,1-(2*It-1)*(2*It-1)))}}i.box("stone",L,H,z,o/x+.03,N-H,c,a,b%2?Tt.stone:Tt.stone2,{skipBottom:H>d});for(let k of[-1,1])i.box("plinth",L+h*k*(c/2-.2),N,z+f*k*(c/2-.2),o/x+.03,.9,.4,a,Tt.stone2)}for(let b=1;b<l;b++){let E=v+b*y,C=le(e,s,E),P=le(n,r,E);for(let L of[-1,1])i.cyl("stone",C+h*L*(c/2+.6),d,P+f*L*(c/2+.6),1.6,p+1.6-d,4,Tt.stone2,{r2:.4})}return{}};pe.pond=(i,t)=>{let e=t.poly,n=t.y+.12,s=0,r=0;e.forEach(o=>{s+=o[0]/e.length,r+=o[1]/e.length});for(let o=0;o<e.length;o++){let a=e[o],c=e[(o+1)%e.length];i.tri("water",[s,n,r],[c[0],n,c[1]],[a[0],n,a[1]],Tt.pond),i.rod("stone",[a[0],n+.1,a[1]],[c[0],n+.1,c[1]],.3,4,Tt.stone2)}return{}};var Ut={wall:Y("#A89D88"),wallB:Y("#8C826F"),cap:Y("#9A9080"),post:Y("#B3A894"),scaf:Y("#B4864C"),scafD:Y("#8E6436"),cu:Y("#A8764E"),cu2:Y("#8C5E3D"),band:Y("#5A4636"),brick:Y("#A39686"),plank:Y("#B59A78"),iron:Y("#4E5254"),wood:Y("#B9824F"),woodD:Y("#8A5B36"),col:Y("#94402F"),teal:Y("#6A8C90"),tealE:Y("#45605F"),gold:Y("#D4A64A"),win:Y("#4A3A2C"),stone:Y("#BDB5A8")},jn=i=>{let t=Math.cos(i.rot||0),e=Math.sin(i.rot||0);return(n,s,r)=>[i.x+n*t-r*e,i.y+s,i.z+n*e+r*t]},Ge=i=>typeof i=="string"?Y(i):i;pe.jwall=(i,t)=>{var a;let e=Ge(t.col||Ut.wall),n=Ge(t.base||Ut.wallB),s=Ge(t.cap||Ut.cap),r=Ge(t.postCol||Ut.post),o=(a=t.post)!=null?a:9;for(let[c,l,h,f,p,d,g]of t.segs){let _=Math.hypot(h-c,f-l),m=Math.atan2(f-l,h-c),u=(c+h)/2,v=(l+f)/2;if(i.box("plinth",u,p-.3,v,_+g*.5,Math.min(.9,d-p)+.3,g+.12,m,n,{ao:.2}),i.box("stone",u,p+.6,v,_+g*.5,d-p-.85,g,m,e),i.box("stone",u,d-.25,v,_+g*.5+.1,.25,g+.3,m,s),!o||_<o*.6)continue;let y=Math.max(1,Math.round(_/o)),x=Math.cos(m),M=Math.sin(m);for(let w=0;w<=y;w++){let T=-_/2+_*w/y,A=u+x*T,S=v+M*T;i.box("stone",A,p-.2,S,.8,d-p+.55,g+.5,m,r),i.box("stone",A,d+.35,S,1,.2,g+.7,m,s)}}return{}};pe.jboiler=(i,t)=>{var l,h,f;let e=jn(t),n=(l=t.h)!=null?l:19,s=(h=t.r)!=null?h:3.7,r=e(0,0,0),o=t.y;i.cyl("stone",r[0],o-.5,r[2],s+1,4,16,Ut.brick),i.cyl("stone",r[0],o+3.5,r[2],s+1.15,.45,16,B.stoneD),i.cyl("metal",r[0],o+3.95,r[2],s,n-5.2,20,Ut.cu);for(let p=6;p<n-1.5;p+=2.6)i.cyl("metal",r[0],o+p,r[2],s+.12,.28,20,Ut.band);i.cyl("metal",r[0],o+n-1.25,r[2],s,1.25,20,Ut.cu2,{r2:s*.55});let a=o+n-.2;i.cyl("wood",r[0],a-.25,r[2],s+1.2,.25,18,Ut.plank);for(let p=0;p<18;p++){let d=p/18*6.283,g=(p+1)/18*6.283,_=s+1.1;Qe(i,[r[0]+Math.cos(d)*_,a,r[2]+Math.sin(d)*_],[r[0]+Math.cos(g)*_,a,r[2]+Math.sin(g)*_],1,Ut.iron,3)}for(let[p,d,g]of t.ledges||[]){let _=s+1.5,m=6;for(let u=0;u<m;u++){let v=d+(g-d)*u/m,y=d+(g-d)*(u+1)/m,x=(v+y)/2,M=_*(y-v)+.1,w=[r[0]+Math.cos(x)*(s+.75),o+p-.2,r[2]+Math.sin(x)*(s+.75)];i.box("wood",w[0],w[1],w[2],1.6,.2,M,-x,Ut.plank),Qe(i,[r[0]+Math.cos(v)*_,o+p,r[2]+Math.sin(v)*_],[r[0]+Math.cos(y)*_,o+p,r[2]+Math.sin(y)*_],1,Ut.iron,2)}}let c=(f=t.ladder)!=null?f:1.2;for(let p of[-.18,.18])i.rod("metal",[r[0]+Math.cos(c+p*.2)*(s+.35),o+4,r[2]+Math.sin(c+p*.2)*(s+.35)],[r[0]+Math.cos(c+p*.2)*(s+.35),a+1,r[2]+Math.sin(c+p*.2)*(s+.35)],.05,4,Ut.iron);for(let p=o+4.5;p<a;p+=.6)i.rod("metal",[r[0]+Math.cos(c-.036)*(s+.35),p,r[2]+Math.sin(c-.036)*(s+.35)],[r[0]+Math.cos(c+.036)*(s+.35),p,r[2]+Math.sin(c+.036)*(s+.35)],.03,3,Ut.iron);for(let[p,d,g]of t.pipes||[]){let _=[r[0]+Math.cos(p)*s,o+g,r[2]+Math.sin(p)*s],m=[r[0]+Math.cos(p)*(s+d),o+g,r[2]+Math.sin(p)*(s+d)];i.rod("metal",_,m,.45,8,Ut.cu2),i.rod("metal",m,[m[0],o,m[2]],.45,8,Ut.cu2)}return{}};pe.jchim=(i,t)=>{var s;let e=jn(t),n=[];for(let[r,o,a,c]of t.list){let l=e(r,0,o),h=t.y+((s=t.base)!=null?s:0);i.cyl("metal",l[0],h,l[2],c,a,14,Ut.cu,{r2:c*.9});for(let f=2.2;f<a-.8;f+=2.8)i.cyl("metal",l[0],h+f,l[2],c*(1-f/a*.1)+.08,.22,14,Ut.band);i.cyl("metal",l[0],h+a-.1,l[2],c*.92,.7,14,Ut.band,{r2:c*1.2}),t.nosteam||n.push([l[0],h+a+.8,l[2]])}return{steam:n}};function Jh(i,t,e,n,s,r={}){var p,d,g,_,m,u;let o=(p=r.st)!=null?p:2.2,a=(d=r.gap)!=null?d:1.3,c=(g=r.y0)!=null?g:0,l=r.col||Ut.scaf,h=Ut.scafD,f=r.planks||[];for(let v of[0,1]){let y=e/2+v*a,x=n/2+v*a,M=Math.max(1,Math.round(y*2/o)),w=Math.max(1,Math.round(x*2/o)),T=[];for(let A=0;A<=M;A++){let S=-y+y*2*A/M;T.push([S,-x],[S,x])}for(let A=1;A<w;A++){let S=-x+x*2*A/w;T.push([-y,S],[y,S])}for(let[A,S]of T)i.rod("wood",t(A,c,S),t(A,c+s,S),(_=r.pr)!=null?_:.2,4,l);for(let A=c+2;A<=c+s+1e-6;A+=2)for(let[S,b]of[[[-y,-x],[y,-x]],[[y,-x],[y,x]],[[y,x],[-y,x]],[[-y,x],[-y,-x]]])i.rod("wood",t(S[0],A,S[1]),t(b[0],A,b[1]),(m=r.lr)!=null?m:.15,4,v?l:h);if(v)for(let[A,S,b]of[[[-y,x],[y,x],M],[[-y,-x],[y,-x],M],[[y,-x],[y,x],w],[[-y,-x],[-y,x],w]])for(let E=0;E<b;E+=2){let C=E/b,P=Math.min(1,(E+1)/b),L=(z,N)=>t(A[0]+(S[0]-A[0])*z,N,A[1]+(S[1]-A[1])*z);for(let z=c;z<c+s-3.9;z+=4)i.rod("wood",L(C,z),L(P,z+4),(u=r.br)!=null?u:.11,4,h)}}for(let v of f){let y=e/2+a/2,x=n/2+a/2;for(let[M,w,T,A]of[[0,-x,e+a*2,0],[0,x,e+a*2,0],[-y,0,n,Math.PI/2],[y,0,n,Math.PI/2]]){let S=t(M,c+v,w),b=t(0,0,0),E=t(1,0,0),C=Math.atan2(E[2]-b[2],E[0]-b[0])+A;i.box("wood",S[0],S[1],S[2],T,.1,a+.2,C,Ut.plank)}}}pe.jpagoda=(i,t)=>{var m;let e=jn(t),n=t.rot||0,s=(u,v,y)=>e(u,v,y),r=Ge(t.rc||Ut.teal),o=Ge(t.re||Ut.tealE),a=Math.tan(30*Math.PI/180),c=t.ws||[23,19.5,16.3,13.4,10.6],l=t.es||[3.2,3,2.8,2.6,2.4],h=t.ye||[10,16.5,21.85,27.05,34.55],f=c.length,p=(m=t.dk)!=null?m:.72,d=c[0],g=e(0,-.6,0);i.box("plinth",g[0],g[1],g[2],d+6,1.6,d*p+6,n,Ut.stone,{ao:.2});let _=1;for(let u=0;u<f;u++){let v=c[u],y=v*p,x=l[u],M=u===f-1,w=h[u]+x*a,T=w-_;if(u){let b=e(0,_-.25,0);i.box("wood",b[0],b[1],b[2],v+2.2,.25,y+2.2,n,Ut.woodD);let E=v/2+1,C=y/2+1;for(let[P,L]of[[[-E,-C],[E,-C]],[[E,-C],[E,C]],[[E,C],[-E,C]],[[-E,C],[-E,-C]]])Qe(i,e(P[0],_,P[1]),e(L[0],_,L[1]),.95,Ut.col,1.5)}let A=e(0,_,0);i.box("wall",A[0],A[1],A[2],v,T,y,n,Ut.wood,{ao:u?0:.25});let S=Math.max(3,Math.round(v/3));for(let b of[-1,1])for(let E of[0,1])for(let C=0;C<=S;C++){let P=E?v:y,L=-P/2+P*C/S,z=E?e(L,_,b*(y/2+.06)):e(b*(v/2+.06),_,L);if(i.box("wood",z[0],z[1],z[2],E?.5:.16,T,E?.16:.5,n,Ut.col),C<S)for(let N of T>6.5?[.2,.62]:[.36]){let H=L+P/S/2,k=E?e(H,_+T*N,b*(y/2+.03)):e(b*(v/2+.03),_+T*N,H);i.box("wood",k[0],k[1],k[2],E?P/S*.62:.1,Math.min(2.2,T*.34),E?.1:P/S*.62,n,Ut.win)}}if(!M)_=we(i,v/2,y/2,w,s,x,r,o,{riseK:.3,lift:1.25,horn:.5,ridgeH:.01});else{let b=we(i,v/2,y/2,w,s,x,r,o,{pitch:Math.tan(32*Math.PI/180),riseK:.9,lift:1.3,horn:.4,ridgeH:.2}),E=e(0,0,0),C=(P,L,z,N)=>i.cyl("roofe",E[0],P,E[2],L,z,12,Ut.gold,{r2:N});C(b-.4,1.1,.9,.75),C(b+.5,.8,.45,1);for(let P=0;P<3;P++)C(b+.95+P*.5,.62-P*.08,.3,.45-P*.08);C(b+2.5,.11,1.6),C(b+4,.42,.5,.12)}}for(let[u,v,y,x,M,w,T]of t.scafs||[[0,0,d+7.5,d+7.5,16,0,[6,12]]])Jh(i,(A,S,b)=>e(u+A,S,v+b),y,x,M,{y0:(w!=null?w:0)+.2,planks:T||[]});if(t.crane){let[u,v,y,x,M]=t.crane,w=jn({x:e(u,0,v)[0],z:e(u,0,v)[2],y:t.y,rot:n+(M||0)});jo(i,w,y,x,x*.35,{rot:n+(M||0),load:1})}return{}};pe.jpipe=(i,t)=>{var s,r;let e=(s=t.r)!=null?s:.8,n=(r=t.step)!=null?r:3.6;return t.segs.forEach(([o,a,c,l,h,f],p)=>{var y,x;let d=Math.hypot(l-o,h-a),g=Math.atan2(h-a,l-o),_=-Math.sin(g),m=Math.cos(g);i.rod("metal",[o,c,a],[l,f,h],e,14,Ut.cu);for(let M=1.2;M<d-.6;M+=2.4){let w=M/d;i.rod("metal",[o+(l-o)*(w-.012),c+(f-c)*w,a+(h-a)*(w-.012)],[o+(l-o)*(w+.012),c+(f-c)*w,a+(h-a)*(w+.012)],e+.1,14,Ut.band)}let u=Math.max(1,Math.round(d/n)),v=(t.legs||[])[p]||[];for(let M=(y=t.skip0)!=null&&y[p]?1:0;M<=u;M++){let w=M/u,T=o+(l-o)*w,A=a+(h-a)*w,S=c+(f-c)*w-e,b=(x=v[M])!=null?x:0,E=S-b;if(E<.5)continue;let C=Math.min(2.2,.9+E*.09);for(let P of[-1,1])i.rod("wood",[T+_*P*C,b,A+m*P*C],[T+_*P*(e+.15),S,A+m*P*(e+.15)],.16,5,Ut.woodD);if(i.rod("wood",[T+_*(e+.5),S-.1,A+m*(e+.5)],[T-_*(e+.5),S-.1,A-m*(e+.5)],.14,4,Ut.woodD),E>3){let P=b+E*.45;i.rod("wood",[T+_*(C-(C-e)*.45),P,A+m*(C-(C-e)*.45)],[T-_*(C-(C-e)*.45),P,A-m*(C-(C-e)*.45)],.1,4,Ut.woodD)}if(M<u&&E>2.5){let P=(M+1)/u,L=o+(l-o)*P,z=a+(h-a)*P,N=c+(f-c)*P-e;for(let H of[-1,1])i.rod("wood",[T+_*H*(e+.3),S-.3,A+m*H*(e+.3)],[L+_*H*(e+.3)-(L-T)*.5,N-Math.min(2.4,E*.4),z+m*H*(e+.3)-(z-A)*.5],.07,4,Ut.woodD)}}}),{}};function ta(i,t,e,n,s,r,o,a="wall",c=0){for(let h=0;h<r;h++){let f=h/r*Math.PI*2+Math.PI/r+c,p=(h+1)/r*Math.PI*2+Math.PI/r+c,d=[t[0]+Math.cos(f)*s,t[2]+Math.sin(f)*s],g=[t[0]+Math.cos(p)*s,t[2]+Math.sin(p)*s];i.quad(a,[d[0],e,d[1]],[d[0],n,d[1]],[g[0],n,g[1]],[g[0],e,g[1]],o)}let l=[];for(let h=0;h<r;h++){let f=h/r*Math.PI*2+Math.PI/r+c;l.push([t[0]+Math.cos(f)*s,n,t[2]+Math.sin(f)*s])}for(let h=0;h<r;h++)i.tri(a,[t[0],n,t[2]],l[(h+1)%r],l[h],o)}function og(i,t,e,n,s,r,o,a,c=.7){let l=[];for(let f=0;f<r;f++){let p=f/r*Math.PI*2+Math.PI/r;l.push([t[0]+Math.cos(p)*n,e+c,t[2]+Math.sin(p)*n])}let h=[t[0],e+s,t[2]];for(let f=0;f<r;f++){let p=l[f],d=l[(f+1)%r],g=[(p[0]+d[0])/2,e,(p[2]+d[2])/2];i.tri("roof",p,h,g,o),i.tri("roof",g,h,d,o),i.tri("roofe",[p[0],p[1]-.3,p[2]],p,g,a),i.tri("roofe",[g[0],g[1]-.3,g[2]],[p[0],p[1]-.3,p[2]],g,a),i.tri("roofe",g,d,[d[0],d[1]-.3,d[2]],a),i.tri("roofe",g,[d[0],d[1]-.3,d[2]],[g[0],g[1]-.3,g[2]],a),i.tri("roofu",[d[0],d[1]-.3,d[2]],[p[0],p[1]-.3,p[2]],[t[0],e-.4,t[2]],o)}}pe.jocta=(i,t)=>{var d,g,_,m,u,v;let e=[t.x,0,t.z],n=8,s=(d=t.fl)!=null?d:3,r=(g=t.fh)!=null?g:4.6,o=Ge(t.wc||Ut.wood),a=Ge(t.rc||Ut.teal),c=Ge(t.re||Ut.tealE),l=Ge(t.cc||Ut.col),h=(_=t.r)!=null?_:7,f=t.y;ta(i,e,f-1,f+1,h+((m=t.gal)!=null?m:2.4)+.8,n,Ut.stone,"plinth"),f+=1;let p=h+((u=t.gal)!=null?u:2.4);for(let y=0;y<16;y++){let x=y/16*6.283;i.cyl("wood",e[0]+Math.cos(x)*p,f,e[2]+Math.sin(x)*p,.24,r*.78,6,l)}for(let y=0;y<s;y++){ta(i,e,f,f+r,h,n,o);for(let w=0;w<n;w++){let T=w/n*6.283+Math.PI/n;i.cyl("wood",e[0]+Math.cos(T)*(h+.06),f,e[2]+Math.sin(T)*(h+.06),.22,r,6,l)}ta(i,e,f+r*.35,f+r*.75,h+.05,n,Ut.win,"wood",0),ta(i,e,f+r*.3,f+r*.35,h+.12,n,o,"wood");let x=y===s-1,M=y===0?p+1.4:h+1.9;if(og(i,e,y===0?f+r*.8:f+r,M,x?h*.95:1.7,n,a,c,y===0?.9:.7),!x)f+=r+(y===0?.2:.9),h*=.8;else{let w=f+r+h*.95,T=(A,S,b,E)=>i.cyl("roofe",e[0],A,e[2],S,b,10,Ut.gold,{r2:E});T(w-.3,.7,.6,.45),T(w+.3,.45,.5,.6),T(w+.8,.1,1.8),T(w+2.5,.35,.45,.08)}}if(t.door!=null){let y=t.door,x=(v=t.r)!=null?v:7,M=[e[0]+Math.cos(y)*(x+.06),t.y+1,e[2]+Math.sin(y)*(x+.06)];i.box("wood",M[0],M[1],M[2],.2,2.9,2.8,y,Ut.col.map(w=>w*.8))}return{}};var Yh=["#E9D3A2","#B9543E","#CF8A43","#E4C273","#D9B48A"].map(Y);pe.jtent=(i,t)=>{for(let[e,n,s,r,o,a,c]of t.list){let l=jn({x:e,z:n,y:s,rot:r}),h=Yh[c%Yh.length],f=2.4,p=1.1;for(let[u,v]of[[-o/2,-a/2],[o/2,-a/2],[o/2,a/2],[-o/2,a/2]])i.rod("wood",l(u,0,v),l(u,f,v),.07,4,Ut.woodD);let d=l(0,0,a*.18);i.box("wood",d[0],d[1],d[2],o*.8,.95,a*.3,r,Ut.wood);let g=.35,_=(u,v,y)=>l(u,v,y),m=(u,v,y,x,M)=>{i.quad("awn",u,v,y,x,M),i.quad("awn",x,y,v,u,M)};m(_(-o/2-g,f-.15,-a/2-g),_(o/2+g,f-.15,-a/2-g),_(o/2+g,f+p,0),_(-o/2-g,f+p,0),h),m(_(-o/2-g,f+p,0),_(o/2+g,f+p,0),_(o/2+g,f-.15,a/2+g),_(-o/2-g,f-.15,a/2+g),h.map(u=>u*.9))}return{}};var Zh=["#3E4C5E","#6B4A36","#8E3B2E","#5D6B54","#C9B48E","#4A4A4E","#7C6A52"].map(Y),ag=Y("#D6B08A");pe.jfolk=(i,t)=>{for(let[e,n,s,r]of t.pts){let o=t.col?Ge(t.col):Zh[r%Zh.length],a=(e*7.3+n*3.1)%6.28;i.box("prop",e,s,n,.55,1.15,.38,a,o),i.box("prop",e,s+1.15,n,.3,.3,.3,a,ag)}return{}};pe.jscaf=(i,t)=>{var e,n,s,r,o;return Jh(i,jn(t),t.w,t.d,t.h,{planks:t.planks||[],pr:(e=t.pr)!=null?e:.14,lr:(n=t.lr)!=null?n:.1,br:(s=t.br)!=null?s:.08,st:(r=t.st)!=null?r:2,gap:(o=t.gap)!=null?o:1.1}),{}};pe.jplat=(i,t)=>{for(let[e,n,s,r,o,a,c]of t.list){let l=a*Math.PI/180,h=jn({x:e,z:n,y:0,rot:l}),f=h(0,s-.25,0);i.box("wood",f[0],f[1],f[2],r,.25,o,l,Ut.plank,{ao:.1});for(let[p,d]of[[-r/2+.2,-o/2+.2],[r/2-.2,-o/2+.2],[r/2-.2,o/2-.2],[-r/2+.2,o/2-.2]])i.rod("wood",h(p,c!=null?c:0,d),h(p,s-.25,d),.12,4,Ut.woodD);Qe(i,h(-r/2,s,o/2),h(r/2,s,o/2),.9,Ut.woodD,1.4)}return{}};pe.jgtow=(i,t)=>{var f,p,d;let e=jn(t),n=(f=t.w)!=null?f:5.8,s=(p=t.d)!=null?p:4,r=(d=t.h)!=null?d:8,o=Ge(t.wc||"#E4DED2"),a=Ge(t.cap||"#A7A196"),c=e(0,0,0);i.box("plinth",c[0],t.y-.3,c[2],n+.3,1.1,s+.3,t.rot,Ut.brick,{ao:.2}),i.box("wall",c[0],t.y+.8,c[2],n,r-.8,s,t.rot,o),i.box("stone",c[0],t.y+r,c[2],n+.4,.3,s+.4,t.rot,a),[[0,-s/2,n+.4,.3],[0,s/2,n+.4,.3],[-n/2,0,.3,s+.4],[n/2,0,.3,s+.4]].forEach(([g,_,m,u],v)=>{if((t.open||[]).includes(v))return;let y=e(g,0,_);i.box("stone",y[0],t.y+r+.3,y[2],m,.9,u,t.rot,a)});let l=e(0,0,s/2+.06);i.box("red",l[0],t.y+r*.62,l[2],1.5,1.5,.1,t.rot,Y("#B8402E"));let h=e(0,0,s/2+.05);return i.box("wood",h[0],t.y,h[2],1.4,2.4,.1,t.rot,Ut.win),{}};pe.jfence=(i,t)=>{var e,n;for(let[s,r,o,a,c]of t.segs)Qe(i,[s,c,r],[o,c,a],(e=t.h)!=null?e:1.05,Ge(t.col||Ut.woodD),(n=t.step)!=null?n:1.2);return{}};return au(cg);})();
