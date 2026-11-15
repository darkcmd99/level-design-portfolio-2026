var WH3D=(()=>{var nl=Object.defineProperty;var Rd=Object.getOwnPropertyDescriptor;var Cd=Object.getOwnPropertyNames;var Id=Object.prototype.hasOwnProperty;var Pd=(i,t)=>{for(var e in t)nl(i,e,{get:t[e],enumerable:!0})},Dd=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Cd(t))!Id.call(i,s)&&s!==e&&nl(i,s,{get:()=>t[s],enumerable:!(n=Rd(t,s))||n.enumerable});return i};var Fd=i=>Dd(nl({},"__esModule",{value:!0}),i);var W_={};Pd(W_,{GROUPS:()=>Lh,VIEWS:()=>Sr,createShow:()=>xd,createStage:()=>Md,mount:()=>cd});var wu=0,Vl=1,Tu=2;var Gl=1,La=2,ui=3,Ai=0,fn=1,Tn=2,Ii=0,hs=1,Wl=2,Xl=3,ql=4,Au=5,Zi=100,Ru=101,Cu=102,Iu=103,Pu=104,Du=200,Fu=201,Lu=202,Uu=203,sa=204,ra=205,Nu=206,Bu=207,Ou=208,zu=209,ku=210,Hu=211,Vu=212,Gu=213,Wu=214,Ua=0,Na=1,Ba=2,us=3,Oa=4,za=5,ka=6,Ha=7,Yl=0,Xu=1,qu=2,Pi=0,Yu=1,Zu=2,Ju=3,$u=4,Qu=5,ju=6,Va=7;var Zl=300,xs=301,_s=302,Ga=303,Wa=304,yo=306,oa=1e3,Yi=1001,aa=1002,En=1003,Ku=1004;var vo=1005;var jn=1006,Xa=1007;var Ki=1008;var ni=1009,Jl=1010,$l=1011,or=1012,qa=1013,ts=1014,ii=1015,ar=1016,Ya=1017,Za=1018,cr=1020,Ql=35902,jl=35899,Kl=1021,th=1022,qn=1023,Js=1026,lr=1027,Ja=1028,$a=1029,eh=1030,Qa=1031;var ja=1033,Mo=33776,bo=33777,So=33778,Eo=33779,Ka=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,cc=37810,lc=37811,hc=37812,uc=37813,fc=37814,dc=37815,pc=37816,mc=37817,gc=37818,xc=37819,_c=37820,yc=37821,vc=36492,Mc=36494,bc=36495,Sc=36283,Ec=36284,wc=36285,Tc=36286;var zr=2300,ca=2301,ia=2302,Il=2400,Pl=2401,Dl=2402;var tf=3200,ef=3201;var nh=0,nf=1,Di="",Fn="srgb",fs="srgb-linear",kr="linear",ye="srgb";var ls=7680;var Fl=519,sf=512,rf=513,of=514,ih=515,af=516,cf=517,lf=518,hf=519,Ll=35044;var sh="300 es",Qn=2e3,Hr=2001;var Ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var il=Math.PI/180,la=180/Math.PI;function wo(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function Ld(i,t){return(i%t+t)%t}function sl(i,t,e){return(1-e)*i+e*t}function Cr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let M=Math.sqrt(x),T=Math.atan2(M,p*b);m=Math.sin(m*T)/M,a=Math.sin(a*T)/M}let y=a*b;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new N,jh=new Ln,Kt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],x=s[4],y=s[7],M=s[2],T=s[5],A=s[8];return r[0]=o*_+a*b+l*M,r[3]=o*m+a*x+l*T,r[6]=o*p+a*y+l*A,r[1]=c*_+h*b+u*M,r[4]=c*m+h*x+u*T,r[7]=c*p+h*y+u*A,r[2]=d*_+f*b+g*M,r[5]=d*m+f*x+g*T,r[8]=d*p+f*y+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ol=new Kt;function rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uf(){let i=Vr("canvas");return i.style.display="block",i}var Kh={};function $s(i){i in Kh||(Kh[i]=!0,console.warn(i))}function ff(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var tu=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ud(){let i={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fs]:{primaries:t,whitePoint:n,transfer:kr,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),i}var de=Ud();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Us,ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Us===void 0&&(Us=Vr("canvas")),Us.width=t.width,Us.height=t.height;let s=Us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ti(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ti(e[n]/255)*255):e[n]=Ti(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nd=0,Qs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=wo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function al(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bd=0,cl=new N,wn=class i extends Ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yi,s=Yi,r=jn,o=Ki,a=qn,l=ni,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=wo(),this.name="",this.source=new Qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Zl;wn.DEFAULT_ANISOTROPY=1;var Le=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,M=(p+1)/2,T=(h+d)/4,A=(u+_)/4,C=(g+m)/4;return x>y&&x>M?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=C/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ua=class extends Ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new wn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Qs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},li=class extends ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gr=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Uo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(t.matrixWorld),this.union(Uo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),No.subVectors(this.max,Ir),Ns.subVectors(t.a,Ir),Bs.subVectors(t.b,Ir),Os.subVectors(t.c,Ir),ki.subVectors(Bs,Ns),Hi.subVectors(Os,Bs),rs.subVectors(Ns,Os);let e=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-rs.z,rs.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,rs.z,0,-rs.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-rs.y,rs.x,0];return!ll(e,Ns,Bs,Os,No)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Ns,Bs,Os,No))?!1:(Bo.crossVectors(ki,Hi),e=[Bo.x,Bo.y,Bo.z],ll(e,Ns,Bs,Os,No))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Mi=[new N,new N,new N,new N,new N,new N,new N,new N],Zn=new N,Uo=new Wn,Ns=new N,Bs=new N,Os=new N,ki=new N,Hi=new N,rs=new N,Ir=new N,No=new N,Bo=new N,os=new N;function ll(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){os.fromArray(i,r);let a=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Od=new Wn,Pr=new N,hl=new N,Ji=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pr.subVectors(t,this.center);let e=Pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pr.copy(t.center).add(hl)),this.expandByPoint(Pr.copy(t.center).sub(hl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bi=new N,ul=new N,Oo=new N,Vi=new N,fl=new N,zo=new N,dl=new N,Wr=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),Oo.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Oo),a=Vi.dot(this.direction),l=-Vi.dot(Oo),c=Vi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ul).addScaledVector(Oo,d),f}intersectSphere(t,e){bi.subVectors(t.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,s,r){fl.subVectors(e,t),zo.subVectors(n,t),dl.crossVectors(fl,zo);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);let l=a*this.direction.dot(zo.crossVectors(Vi,zo));if(l<0)return null;let c=a*this.direction.dot(fl.cross(Vi));if(c<0||l+c>o)return null;let h=-a*Vi.dot(dl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),r=1/zs.setFromMatrixColumn(t,1).length(),o=1/zs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zd,t,kd)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Gi.crossVectors(n,Pn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Gi.crossVectors(n,Pn)),Gi.normalize(),ko.crossVectors(Pn,Gi),s[0]=Gi.x,s[4]=ko.x,s[8]=Pn.x,s[1]=Gi.y,s[5]=ko.y,s[9]=Pn.y,s[2]=Gi.z,s[6]=ko.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],x=n[7],y=n[11],M=n[15],T=s[0],A=s[4],C=s[8],S=s[12],v=s[1],P=s[5],F=s[9],B=s[13],W=s[2],$=s[6],I=s[10],O=s[14],L=s[3],X=s[7],tt=s[11],it=s[15];return r[0]=o*T+a*v+l*W+c*L,r[4]=o*A+a*P+l*$+c*X,r[8]=o*C+a*F+l*I+c*tt,r[12]=o*S+a*B+l*O+c*it,r[1]=h*T+u*v+d*W+f*L,r[5]=h*A+u*P+d*$+f*X,r[9]=h*C+u*F+d*I+f*tt,r[13]=h*S+u*B+d*O+f*it,r[2]=g*T+_*v+m*W+p*L,r[6]=g*A+_*P+m*$+p*X,r[10]=g*C+_*F+m*I+p*tt,r[14]=g*S+_*B+m*O+p*it,r[3]=b*T+x*v+y*W+M*L,r[7]=b*A+x*P+y*$+M*X,r[11]=b*C+x*F+y*I+M*tt,r[15]=b*S+x*B+y*O+M*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,x=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,M=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,T=e*b+n*x+s*y+r*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=b*A,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=x*A,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*A,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=y*A,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=M*A,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,x=l*h,y=l*u,M=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*M,s[1]=(f+y)*M,s[2]=(g-x)*M,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-b)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),a=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/r,h=1/o,u=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,e.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Qn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Hr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Qn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Hr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zs=new N,Jn=new ve,zd=new N(0,0,0),kd=new N(1,1,1),Gi=new N,ko=new N,Pn=new N,nu=new ve,iu=new Ln,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Hd=0,su=new N,ks=new Ln,Si=new ve,Ho=new N,Dr=new N,Vd=new N,Gd=new Ln,ru=new N(1,0,0),ou=new N(0,1,0),au=new N(0,0,1),cu={type:"added"},Wd={type:"removed"},Hs={type:"childadded",child:null},pl={type:"childremoved",child:null},cn=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Kn,n=new Ln,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ho.copy(t):Ho.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Dr,Ho,this.up):Si.lookAt(Ho,Dr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Si),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wd),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),Hs.child=t,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,t,Vd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};cn.DEFAULT_UP=new N(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new N,Ei=new N,ml=new N,wi=new N,Vs=new N,Gs=new N,lu=new N,gl=new N,xl=new N,_l=new N,yl=new Le,vl=new Le,Ml=new Le,qi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),Ei.subVectors(n,e),ml.subVectors(t,e);let o=$n.dot($n),a=$n.dot(Ei),l=$n.dot(ml),c=Ei.dot(Ei),h=Ei.dot(ml),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return yl.setScalar(0),vl.setScalar(0),Ml.setScalar(0),yl.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,n),Ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(yl,r.x),o.addScaledVector(vl,r.y),o.addScaledVector(Ml,r.z),o}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ei.subVectors(t,e),$n.cross(Ei).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),$n.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Vs.subVectors(s,n),Gs.subVectors(r,n),gl.subVectors(t,n);let l=Vs.dot(gl),c=Gs.dot(gl);if(l<=0&&c<=0)return e.copy(n);xl.subVectors(t,s);let h=Vs.dot(xl),u=Gs.dot(xl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vs,o);_l.subVectors(t,r);let f=Vs.dot(_l),g=Gs.dot(_l);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return lu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(lu,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Vs,o).addScaledVector(Gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function bl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=Ld(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bl(o,r,t+1/3),this.g=bl(o,r,t),this.b=bl(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fn){let n=df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fn){return de.workingToColorSpace(on.copy(this),t),Math.round(oe(on.r*255,0,255))*65536+Math.round(oe(on.g*255,0,255))*256+Math.round(oe(on.b*255,0,255))}getHexString(t=Fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Fn){de.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==Fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(Vo);let n=sl(Wi.h,Vo.h,e),s=sl(Wi.s,Vo.s,e),r=sl(Wi.l,Vo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new ne;ne.NAMES=df;var Xd=0,$i=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=wo(),this.name="",this.type="Material",this.blending=hs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qe=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new N,Go=new Bt,qd=0,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ll,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Go.fromBufferAttribute(this,e),Go.applyMatrix3(t),this.setXY(e,Go.x,Go.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Sn(e,this.array),n=Sn(n,this.array),s=Sn(s,this.array),r=Sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}};var Xr=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qr=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ge=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Yd=0,Gn=new ve,Sl=new cn,Ws=new N,Dn=new Wn,Fr=new Wn,Qe=new N,Ye=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?qr:Xr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(Dn.min,Fr.min),Dn.expandByPoint(Qe),Qe.addVectors(Dn.max,Fr.max),Dn.expandByPoint(Qe)):(Dn.expandByPoint(Fr.min),Dn.expandByPoint(Fr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Ws.fromBufferAttribute(t,c),Qe.add(Ws)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;let c=new N,h=new N,u=new N,d=new Bt,f=new Bt,g=new Bt,_=new N,m=new N;function p(C,S,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[v].add(_),l[C].add(m),l[S].add(m),l[v].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,S=b.length;C<S;++C){let v=b[C],P=v.start,F=v.count;for(let B=P,W=P+F;B<W;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let x=new N,y=new N,M=new N,T=new N;function A(C){M.fromBufferAttribute(s,C),T.copy(M);let S=a[C];x.copy(S),x.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(T,S);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=b.length;C<S;++C){let v=b[C],P=v.start,F=v.count;for(let B=P,W=P+F;B<W;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new ve,as=new Wr,Wo=new Ji,uu=new N,Xo=new N,qo=new N,Yo=new N,El=new N,Zo=new N,fu=new N,Jo=new N,le=class extends cn{constructor(t=new Ye,e=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(El.fromBufferAttribute(u,t),o?Zo.addScaledVector(El,h):Zo.addScaledVector(El.sub(e),h))}e.add(Zo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Wo.containsPoint(as.origin)===!1&&(as.intersectSphere(Wo,uu)===null||as.origin.distanceToSquared(uu)>(t.far-t.near)**2))&&(hu.copy(r).invert(),as.copy(t.ray).applyMatrix4(hu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,M=x;y<M;y+=3){let T=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);s=$o(this,p,t,n,c,h,u,T,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=$o(this,o,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,M=x;y<M;y+=3){let T=y,A=y+1,C=y+2;s=$o(this,p,t,n,c,h,u,T,A,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,x=m+1,y=m+2;s=$o(this,o,t,n,c,h,u,b,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zd(i,t,e,n,s,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ai,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jo);return c<e.near||c>e.far?null:{distance:c,point:Jo.clone(),object:i}}function $o(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);let h=Zd(i,t,e,n,Xo,qo,Yo,fu);if(h){let u=new N;qi.getBarycoord(fu,Xo,qo,Yo,u),s&&(h.uv=qi.getInterpolatedAttribute(s,a,l,c,u,new Bt)),r&&(h.uv1=qi.getInterpolatedAttribute(r,a,l,c,u,new Bt)),o&&(h.normal=qi.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};qi.getNormal(Xo,qo,Yo,d.normal),h.face=d,h.barycoord=u}return h}var ti=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(_,m,p,b,x,y,M,T,A,C,S){let v=y/A,P=M/C,F=y/2,B=M/2,W=T/2,$=A+1,I=C+1,O=0,L=0,X=new N;for(let tt=0;tt<I;tt++){let it=tt*P-B;for(let lt=0;lt<$;lt++){let nt=lt*v-F;X[_]=nt*b,X[m]=it*x,X[p]=W,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(lt/A),u.push(1-tt/C),O+=1}}for(let tt=0;tt<C;tt++)for(let it=0;it<A;it++){let lt=d+it+$*tt,nt=d+it+$*(tt+1),mt=d+(it+1)+$*(tt+1),ct=d+(it+1)+$*tt;l.push(lt,nt,ct),l.push(nt,mt,ct),L+=6}a.addGroup(f,L,S),f+=L,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ys(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=ys(i[e]);for(let s in n)t[s]=n[s]}return t}function Jd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var pf={clone:ys,merge:ln},$d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Jd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Yr=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xi=new N,du=new Bt,pu=new Bt,an=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=la*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return la*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,du,pu),e.subVectors(pu,du)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(il*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xs=-90,qs=1,da=class extends cn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Xs,qs,t,e);s.layers=this.layers,this.add(s);let r=new an(Xs,qs,t,e);r.layers=this.layers,this.add(r);let o=new an(Xs,qs,t,e);o.layers=this.layers,this.add(o);let a=new an(Xs,qs,t,e);a.layers=this.layers,this.add(a);let l=new an(Xs,qs,t,e);l.layers=this.layers,this.add(l);let c=new an(Xs,qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zr=class extends wn{constructor(t=[],e=xs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pa=class extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Zr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ti(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ii});r.uniforms.tEquirect.value=e;let o=new le(s,r),a=e.minFilter;return e.minFilter===Ki&&(e.minFilter=jn),new da(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},_e=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Jr=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ma=class extends wn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=En,h=En,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new ve,mu=new ve,Qo=[],gu=new Wn,Kd=new ve,Lr=new le,Ur=new Ji,Qr=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),gu.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ys),Ur.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),t.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),mu.multiplyMatrices(n,Ys),Lr.matrixWorld=mu,Lr.raycast(t,Qo);for(let o=0,a=Qo.length;o<a;o++){let l=Qo[o];l.instanceId=r,l.object=this,e.push(l)}Qo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ma(new Float32Array(s*this.count),s,this.count,Ja,ii));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},wl=new N,tp=new N,ep=new Kt,Ke=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=wl.subVectors(n,e).cross(tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(wl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ep.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},cs=new Ji,np=new Bt(.5,.5),jo=new N,tr=class{constructor(t=new Ke,e=new Ke,n=new Ke,s=new Ke,r=new Ke,o=new Ke){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],x=r[13],y=r[14],M=r[15];if(s[0].setComponents(c-o,f-h,p-g,M-b).normalize(),s[1].setComponents(c+o,f+h,p+g,M+b).normalize(),s[2].setComponents(c+a,f+u,p+_,M+x).normalize(),s[3].setComponents(c-a,f-u,p-_,M-x).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,M-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,M-y).normalize(),e===Qn)s[5].setComponents(c+l,f+d,p+m,M+y).normalize();else if(e===Hr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);let e=np.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jr=class extends wn{constructor(t,e,n=ts,s,r,o,a=En,l=En,c,h=Js,u=1){if(h!==Js&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kr=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},to=class i extends Ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,d=e,f=2*u+d,g=n*2+r,_=s+1,m=new N,p=new N;for(let b=0;b<=g;b++){let x=0,y=0,M=0,T=0;if(b<=n){let S=b/n,v=S*Math.PI/2;y=-h-t*Math.cos(v),M=t*Math.sin(v),T=-t*Math.cos(v),x=S*u}else if(b<=n+r){let S=(b-n)/r;y=-h+S*e,M=t,T=0,x=u+S*d}else{let S=(b-n-r)/n,v=S*Math.PI/2;y=h+t*Math.sin(v),M=t*Math.cos(v),T=t*Math.sin(v),x=u+d+S*u}let A=Math.max(0,Math.min(1,x/f)),C=0;b===0?C=.5/s:b===g&&(C=-.5/s);for(let S=0;S<=s;S++){let v=S/s,P=v*Math.PI*2,F=Math.sin(P),B=Math.cos(P);p.x=-M*B,p.y=y,p.z=M*F,a.push(p.x,p.y,p.z),m.set(-M*B,T,M*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(v+C,A)}if(b>0){let S=(b-1)*_;for(let v=0;v<s;v++){let P=S+v,F=S+v+1,B=b*_+v,W=b*_+v+1;o.push(P,F,B),o.push(F,W,B)}}}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},eo=class i extends Ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new N,h=new Bt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ci=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;b(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function b(){let y=new N,M=new N,T=0,A=(e-t)/n;for(let C=0;C<=r;C++){let S=[],v=C/r,P=v*(e-t)+t;for(let F=0;F<=s;F++){let B=F/s,W=B*l+a,$=Math.sin(W),I=Math.cos(W);M.x=P*$,M.y=-v*n+m,M.z=P*I,u.push(M.x,M.y,M.z),y.set($,A,I).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-v),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let v=_[S][C],P=_[S+1][C],F=_[S+1][C+1],B=_[S][C+1];(t>0||S!==0)&&(h.push(v,P,B),T+=3),(e>0||S!==r-1)&&(h.push(P,F,B),T+=3)}c.addGroup(p,T,0),p+=T}function x(y){let M=g,T=new Bt,A=new N,C=0,S=y===!0?t:e,v=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let W=F/s*l+a,$=Math.cos(W),I=Math.sin(W);A.x=S*I,A.y=m*v,A.z=S*$,u.push(A.x,A.y,A.z),d.push(0,v,0),T.x=$*.5+.5,T.y=I*.5*v+.5,f.push(T.x,T.y),g++}for(let F=0;F<s;F++){let B=M+F,W=P+F;y===!0?h.push(W,W+1,B):h.push(W+1,W,B),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},er=class i extends Ci{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},no=class i extends Ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let x=new N,y=new N,M=new N;for(let T=0;T<e.length;T+=3)f(e[T+0],x),f(e[T+1],y),f(e[T+2],M),l(x,y,M,b)}function l(b,x,y,M){let T=M+1,A=[];for(let C=0;C<=T;C++){A[C]=[];let S=b.clone().lerp(y,C/T),v=x.clone().lerp(y,C/T),P=T-C;for(let F=0;F<=P;F++)F===0&&C===T?A[C][F]=S:A[C][F]=S.clone().lerp(v,F/P)}for(let C=0;C<T;C++)for(let S=0;S<2*(T-C)-1;S++){let v=Math.floor(S/2);S%2===0?(d(A[C][v+1]),d(A[C+1][v]),d(A[C][v])):(d(A[C][v+1]),d(A[C+1][v+1]),d(A[C+1][v]))}}function c(b){let x=new N;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(b),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let b=new N;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];let y=m(b)/2/Math.PI+.5,M=p(b)/Math.PI+.5;o.push(y,1-M)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let x=o[b+0],y=o[b+2],M=o[b+4],T=Math.max(x,y,M),A=Math.min(x,y,M);T>.9&&A<.1&&(x<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),M<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,x){let y=b*3;x.x=t[y+0],x.y=t[y+1],x.z=t[y+2]}function g(){let b=new N,x=new N,y=new N,M=new N,T=new Bt,A=new Bt,C=new Bt;for(let S=0,v=0;S<r.length;S+=9,v+=6){b.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),M.copy(b).add(x).add(y).divideScalar(3);let P=m(M);_(T,v+0,b,P),_(A,v+2,x,P),_(C,v+4,y,P)}}function _(b,x,y,M){M<0&&b.x===1&&(o[x]=b.x-1),y.x===0&&y.z===0&&(o[x]=M/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Bt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,l=new ve;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},io=class extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ga=class extends io{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ah(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ko=new N,Tl=new ah,Al=new ah,Rl=new ah,ds=class extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ko.subVectors(s[0],s[1]).add(s[0]),c=Ko);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ko.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ko),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Al.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Rl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Al.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Rl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Tl.calc(l),Al.calc(l),Rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ip(i,t){let e=1-i;return e*e*t}function sp(i,t){return 2*(1-i)*i*t}function rp(i,t){return i*i*t}function Br(i,t,e,n){return ip(i,t)+sp(i,e)+rp(i,n)}function op(i,t){let e=1-i;return e*e*e*t}function ap(i,t){let e=1-i;return 3*e*e*i*t}function cp(i,t){return 3*(1-i)*i*i*t}function lp(i,t){return i*i*i*t}function Or(i,t,e,n,s){return op(i,t)+ap(i,e)+cp(i,n)+lp(i,s)}var xa=class extends Xn{constructor(t=new Bt,e=new Bt,n=new Bt,s=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_a=class extends Xn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(t,s.x,r.x,o.x,a.x),Or(t,s.y,r.y,o.y,a.y),Or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ya=class extends Xn{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nr=class extends Xn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends Xn{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},so=class extends Xn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Br(t,s.x,r.x,o.x),Br(t,s.y,r.y,o.y),Br(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xu(a,l.x,c.x,h.x,u.x),xu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Bt().fromArray(s))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:ga,CatmullRomCurve3:ds,CubicBezierCurve:xa,CubicBezierCurve3:_a,EllipseCurve:io,LineCurve:ya,LineCurve3:nr,QuadraticBezierCurve:va,QuadraticBezierCurve3:so,SplineCurve:Ma});function up(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=mf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=gp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ro(r,o,e,a,l,c,0),o}function mf(i,t,e,n,s){let r;if(s===Ap(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=_u(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=_u(o/n|0,i[o],i[o+1],r);return r&&ir(r,r.next)&&(ao(r),r=r.next),r}function ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ir(e,e.next)||Fe(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ro(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Mp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?dp(i,n,s,r):fp(i)){t.push(l.i,i.i,c.i),ao(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=pp(ps(i),t),ro(i,t,e,n,s,r,2)):o===2&&mp(i,t,e,n,s,r):ro(ps(i),t,e,n,s,r,1);break}}}function fp(i){let t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Nr(s,a,r,l,o,c,g.x,g.y)&&Fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dp(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Fe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=Ul(f,g,t,e,n),b=Ul(_,m,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=b;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Nr(a,h,l,u,c,d,x.x,x.y)&&Fe(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Nr(a,h,l,u,c,d,y.x,y.y)&&Fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Nr(a,h,l,u,c,d,x.x,x.y)&&Fe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Nr(a,h,l,u,c,d,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ir(n,s)&&xf(n,e,e.next,s)&&oo(n,s)&&oo(s,n)&&(t.push(n.i,e.i,s.i),ao(e),ao(e.next),e=i=s),e=e.next}while(e!==i);return ps(e)}function mp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ep(o,a)){let l=_f(o,a);o=ps(o,o.next),l=ps(l,l.next),ro(o,t,e,n,s,r,0),ro(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=mf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Sp(c))}s.sort(xp);for(let r=0;r<s.length;r++)e=_p(s[r],e);return e}function xp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function _p(i,t){let e=yp(i,t);if(!e)return t;let n=_f(e,i);return ps(n,n.next),ps(e,e.next)}function yp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ir(i,e))return e;do{if(ir(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);oo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&vp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function vp(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function Mp(i,t,e,n){let s=i;do s.z===0&&(s.z=Ul(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bp(s)}function bp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ul(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Nr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&gf(i,t,e,n,s,r,o,a)}function Ep(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wp(i,t)&&(oo(i,t)&&oo(t,i)&&Tp(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||ir(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ir(i,t){return i.x===t.x&&i.y===t.y}function xf(i,t,e,n){let s=ea(Fe(i,t,e)),r=ea(Fe(i,t,n)),o=ea(Fe(e,n,i)),a=ea(Fe(e,n,t));return!!(s!==r&&o!==a||s===0&&ta(i,e,t)||r===0&&ta(i,n,t)||o===0&&ta(e,i,n)||a===0&&ta(e,t,n))}function ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ea(i){return i>0?1:i<0?-1:0}function wp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function oo(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function Tp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function _f(i,t){let e=Nl(i.i,i.x,i.y),n=Nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function _u(i,t,e,n){let s=Nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ap(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Bl=class{static triangulate(t,e,n=2){return up(t,e,n)}},co=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];yu(t),vu(n,t);let o=t.length;e.forEach(yu);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,vu(n,e[l]);let a=Bl.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function yu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ms=class i extends no{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var lo=class i extends no{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ho=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*d-o;for(let x=0;x<c;x++){let y=x*u-r;g.push(y,-b,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let x=b+c*p,y=b+c*(p+1),M=b+1+c*(p+1),T=b+1+c*p;f.push(x,y,T),f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},sr=class i extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new N,g=new Bt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let b=p+m,x=b,y=b+n+1,M=b+n+2,T=b+1;a.push(x,y,T),a.push(y,M,T)}}this.setIndex(a),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(c,3)),this.setAttribute("uv",new ge(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var uo=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],x=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let M=0;M<=e;M++){let T=M/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+y,1-x),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let x=h[p][b+1],y=h[p][b],M=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&f.push(x,y,T),(p!==n-1||l<Math.PI)&&f.push(y,M,T)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var rr=class i extends Ye{constructor(t=new so(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Bt,h=new N,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ge(u,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),b(),p()}function m(x){h=t.getPointAt(x/e,h);let y=o.normals[x],M=o.binormals[x];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,C=Math.sin(A),S=-Math.cos(A);l.x=S*y.x+C*M.x,l.y=S*y.y+C*M.y,l.z=S*y.z+C*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let M=(s+1)*(x-1)+(y-1),T=(s+1)*x+(y-1),A=(s+1)*x+y,C=(s+1)*(x-1)+y;g.push(M,T,C),g.push(T,A,C)}}function b(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new hp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var hi=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nh,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ba=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function na(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var gs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ea=class extends gs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,a=2*e-n;break;case Dl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pl:o=t,l=2*n-e;break;case Dl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+b*o[c+M]+x*o[l+M]+y*o[u+M];return r}},wa=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ta=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Un=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ea(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case ca:e=this.InterpolantFactoryMethodLinear;break;case ia:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Rp(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ia,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=ca;var Qi=class extends Un{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=zr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="color";var Ra=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="number";var Ca=class extends gs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},fo=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends Un{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=zr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var Ia=class extends Un{constructor(t,e,n,s){super(t,e,n,s)}};Ia.prototype.ValueTypeName="vector";var Pa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},yf=new Pa,Da=class{constructor(t){this.manager=t!==void 0?t:yf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Da.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends cn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},mo=class extends po{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Cl=new ve,Mu=new N,bu=new N,Ol=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tr,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mu),bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bu),e.updateMatrixWorld(),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var go=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zl=class extends Ol{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xo=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new zl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Fa=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ch="\\[\\]\\.:\\/",Cp=new RegExp("["+ch+"]","g"),lh="[^"+ch+"]",Ip="[^"+ch.replace("\\.","")+"]",Pp=/((?:WC+[\/:])*)/.source.replace("WC",lh),Dp=/(WCOD+)?/.source.replace("WCOD",Ip),Fp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Lp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Up=new RegExp("^"+Pp+Dp+Fp+Lp+"$"),Np=["material","materials","bones","map"],kl=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Up.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Np.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=kl;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);var Su=new ve,_o=class{constructor(t,e,n=0,s=1/0){this.ray=new Wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Su.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Su),this}intersectObject(t,e=!0,n=[]){return Hl(t,this,n,e),n.sort(Eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Hl(t[s],this,n,e);return n.sort(Eu),n}};function Eu(i,t){return i.distance-t.distance}function Hl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Hl(r[o],t,e,!0)}}function hh(i,t,e,n){let s=Bp(n);switch(e){case Kl:return i*t;case Ja:return i*t/s.components*s.byteLength;case $a:return i*t/s.components*s.byteLength;case eh:return i*t*2/s.components*s.byteLength;case Qa:return i*t*2/s.components*s.byteLength;case th:return i*t*3/s.components*s.byteLength;case qn:return i*t*4/s.components*s.byteLength;case ja:return i*t*4/s.components*s.byteLength;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(i,16)*Math.max(t,8)/4;case Ka:case ec:return Math.max(i,8)*Math.max(t,8)/2;case ic:case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vc:case Mc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wc:case Tc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bp(i){switch(i){case ni:case Jl:return{byteLength:1,components:1};case or:case $l:case ar:return{byteLength:2,components:1};case Ya:case Za:return{byteLength:2,components:4};case ts:case qa:case ii:return{byteLength:4,components:1};case Ql:case jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Gf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function zp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,um=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
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
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bm=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,zm=`
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ug=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
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
#endif`,vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zg=`varying vec2 vUv;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
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
}`,Qg=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define MATCAP
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
}`,s0=`#define MATCAP
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
}`,r0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,c0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,u0=`#define TOON
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
}`,f0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 color;
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
}`,x0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:kp,alphahash_pars_fragment:Hp,alphamap_fragment:Vp,alphamap_pars_fragment:Gp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:Jp,begin_vertex:$p,beginnormal_vertex:Qp,bsdfs:jp,iridescence_fragment:Kp,bumpmap_pars_fragment:tm,clipping_planes_fragment:em,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:cm,common:lm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:fm,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:_m,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Dm,envmap_vertex:bm,fog_vertex:Sm,fog_pars_vertex:Em,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Im,lights_pars_begin:Pm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Bm,lights_physical_pars_fragment:Om,lights_fragment_begin:zm,lights_fragment_maps:km,lights_fragment_end:Hm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Ym,map_particle_fragment:Zm,map_particle_pars_fragment:Jm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Qm,morphinstance_vertex:jm,morphcolor_vertex:Km,morphnormal_vertex:tg,morphtarget_pars_vertex:eg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:ag,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:ug,iridescence_pars_fragment:fg,opaque_fragment:dg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:xg,dithering_pars_fragment:_g,roughnessmap_fragment:yg,roughnessmap_pars_fragment:vg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:bg,shadowmap_vertex:Sg,shadowmask_pars_fragment:Eg,skinbase_vertex:wg,skinning_pars_vertex:Tg,skinning_vertex:Ag,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Ig,tonemapping_fragment:Pg,tonemapping_pars_fragment:Dg,transmission_fragment:Fg,transmission_pars_fragment:Lg,uv_pars_fragment:Ug,uv_pars_vertex:Ng,uv_vertex:Bg,worldpos_vertex:Og,background_vert:zg,background_frag:kg,backgroundCube_vert:Hg,backgroundCube_frag:Vg,cube_vert:Gg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distanceRGBA_vert:Yg,distanceRGBA_frag:Zg,equirect_vert:Jg,equirect_frag:$g,linedashed_vert:Qg,linedashed_frag:jg,meshbasic_vert:Kg,meshbasic_frag:t0,meshlambert_vert:e0,meshlambert_frag:n0,meshmatcap_vert:i0,meshmatcap_frag:s0,meshnormal_vert:r0,meshnormal_frag:o0,meshphong_vert:a0,meshphong_frag:c0,meshphysical_vert:l0,meshphysical_frag:h0,meshtoon_vert:u0,meshtoon_frag:f0,points_vert:d0,points_frag:p0,shadow_vert:m0,shadow_frag:g0,sprite_vert:x0,sprite_frag:_0},Mt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},fi={basic:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:ln([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:ln([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:ln([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:ln([Mt.points,Mt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:ln([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:ln([Mt.common,Mt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:ln([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:ln([Mt.sprite,Mt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:ln([Mt.common,Mt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:ln([Mt.lights,Mt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};fi.physical={uniforms:ln([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Ac={r:0,b:0,g:0},vs=new Kn,y0=new ve;function v0(i,t,e,n,s,r,o){let a=new ne(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1,M=g(x);M===null?p(a,l):M&&M.isColor&&(p(M,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===yo)?(h===void 0&&(h=new le(new ti(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:ys(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(y.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(vs)),h.material.toneMapped=de.getTransfer(M.colorSpace)!==ye,(u!==M||d!==M.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new le(new ho(2,2),new ei({name:"BackgroundMaterial",uniforms:ys(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=de.getTransfer(M.colorSpace)!==ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ac,oh(i)),n.buffers.color.setClear(Ac.r,Ac.g,Ac.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:b}}function M0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,P,F,B,W){let $=!1,I=u(B,F,P);r!==I&&(r=I,c(r.object)),$=f(v,B,F,W),$&&g(v,B,F,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(v,P,F,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,F){let B=F.wireframe===!0,W=n[v.id];W===void 0&&(W={},n[v.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let I=$[B];return I===void 0&&(I=d(l()),$[B]=I),I}function d(v){let P=[],F=[],B=[];for(let W=0;W<e;W++)P[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,P,F,B){let W=r.attributes,$=P.attributes,I=0,O=F.getAttributes();for(let L in O)if(O[L].location>=0){let tt=W[L],it=$[L];if(it===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),tt===void 0||tt.attribute!==it||it&&tt.data!==it.data)return!0;I++}return r.attributesNum!==I||r.index!==B}function g(v,P,F,B){let W={},$=P.attributes,I=0,O=F.getAttributes();for(let L in O)if(O[L].location>=0){let tt=$[L];tt===void 0&&(L==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),L==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor));let it={};it.attribute=tt,tt&&tt.data&&(it.data=tt.data),W[L]=it,I++}r.attributes=W,r.attributesNum=I,r.index=B}function _(){let v=r.newAttributes;for(let P=0,F=v.length;P<F;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){let F=r.newAttributes,B=r.enabledAttributes,W=r.attributeDivisors;F[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),W[v]!==P&&(i.vertexAttribDivisor(v,P),W[v]=P)}function b(){let v=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==v[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function x(v,P,F,B,W,$,I){I===!0?i.vertexAttribIPointer(v,P,F,W,$):i.vertexAttribPointer(v,P,F,B,W,$)}function y(v,P,F,B){_();let W=B.attributes,$=F.getAttributes(),I=P.defaultAttributeValues;for(let O in $){let L=$[O];if(L.location>=0){let X=W[O];if(X===void 0&&(O==="instanceMatrix"&&v.instanceMatrix&&(X=v.instanceMatrix),O==="instanceColor"&&v.instanceColor&&(X=v.instanceColor)),X!==void 0){let tt=X.normalized,it=X.itemSize,lt=t.get(X);if(lt===void 0)continue;let nt=lt.buffer,mt=lt.type,ct=lt.bytesPerElement,Q=mt===i.INT||mt===i.UNSIGNED_INT||X.gpuType===qa;if(X.isInterleavedBufferAttribute){let k=X.data,ut=k.stride,Ct=X.offset;if(k.isInstancedInterleavedBuffer){for(let St=0;St<L.locationSize;St++)p(L.location+St,k.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let St=0;St<L.locationSize;St++)m(L.location+St);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let St=0;St<L.locationSize;St++)x(L.location+St,it/L.locationSize,mt,tt,ut*ct,(Ct+it/L.locationSize*St)*ct,Q)}else{if(X.isInstancedBufferAttribute){for(let k=0;k<L.locationSize;k++)p(L.location+k,X.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let k=0;k<L.locationSize;k++)m(L.location+k);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let k=0;k<L.locationSize;k++)x(L.location+k,it/L.locationSize,mt,tt,it*ct,it/L.locationSize*k*ct,Q)}}else if(I!==void 0){let tt=I[O];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(L.location,tt);break;case 3:i.vertexAttrib3fv(L.location,tt);break;case 4:i.vertexAttrib4fv(L.location,tt);break;default:i.vertexAttrib1fv(L.location,tt)}}}}b()}function M(){C();for(let v in n){let P=n[v];for(let F in P){let B=P[F];for(let W in B)h(B[W].object),delete B[W];delete P[F]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let F in P){let B=P[F];for(let W in B)h(B[W].object),delete B[W];delete P[F]}delete n[v.id]}function A(v){for(let P in n){let F=n[P];if(F[v.id]===void 0)continue;let B=F[v.id];for(let W in B)h(B[W].object),delete B[W];delete F[v.id]}}function C(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function b0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function S0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===ar&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==ni&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:M,maxSamples:T}}function E0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ke,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,x=b*4,y=p.clippingState||null;l.value=y,y=h(g,d,x,f);for(let M=0;M!==x;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function w0(i){let t=new WeakMap;function e(o,a){return a===Ga?o.mapping=xs:a===Wa&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ga||a===Wa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new pa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ur=4,vf=[.125,.215,.35,.446,.526,.582],Ss=20,uh=new go,Mf=new ne,fh=null,dh=0,ph=0,mh=!1,bs=(1+Math.sqrt(5))/2,hr=1/bs,bf=[new N(-bs,hr,0),new N(bs,hr,0),new N(-hr,0,bs),new N(hr,0,bs),new N(0,bs,-hr),new N(0,bs,hr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],T0=new N,Ic=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=T0}=r;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,dh,ph),this._renderer.xr.enabled=mh,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:ar,format:qn,colorSpace:fs,depthBuffer:!1},s=Sf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(r)),this._blurMaterial=R0(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,uh)}_sceneToCubeUV(t,e,n,s,r){let l=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Mf),u.toneMapping=Pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new qe({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new le(new ti,_),p=!1,b=t.background;b?b.isColor&&(_.color.copy(b),t.background=null,p=!0):(_.color.copy(Mf),p=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let M=this._cubeSize;Rc(s,y*M,x>2?M:0,M,M),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ef());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Rc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,uh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bf[(s-r-1)%bf.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);let p=[],b=0;for(let A=0;A<Ss;++A){let C=A/_,S=Math.exp(-C*C/2);p.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[s],M=3*y*(s>x-ur?s-x+ur:0),T=4*(this._cubeSize-y);Rc(e,M,T,3*y,2*y),l.setRenderTarget(e),l.render(u,uh)}};function A0(i){let t=[],e=[],n=[],s=i,r=i-ur+1+vf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ur?l=vf[o-i+ur-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,C=T>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(S,_*g*T),x.set(d,m*g*T);let v=[T,T,T,T,T,T];y.set(v,p*g*T)}let M=new Ye;M.setAttribute("position",new ke(b,_)),M.setAttribute("uv",new ke(x,m)),M.setAttribute("faceIndex",new ke(y,p)),t.push(M),s>ur&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sf(i,t,e){let n=new li(i,t,e);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R0(i,t,e){let n=new Float32Array(Ss),s=new N(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ef(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function wf(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function C0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ga||l===Wa,h=l===xs||l===_s;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ic(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ic(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function I0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function P0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let b=f.array;_=f.version;for(let x=0,y=b.length;x<y;x+=3){let M=b[x+0],T=b[x+1],A=b[x+2];d.push(M,T,T,A,A,M)}}else if(g!==void 0){let b=g.array;_=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){let M=x+0,T=x+1,A=x+2;d.push(M,T,T,A,A,M)}}else return;let m=new(rh(d)?qr:Xr)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function D0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function F0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function L0(i,t,e){let n=new WeakMap,s=new Le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*M*4*u),A=new Gr(T,y,M,u);A.type=ii,A.needsUpdate=!0;let C=x*4;for(let v=0;v<u;v++){let P=m[v],F=p[v],B=b[v],W=y*M*4*v;for(let $=0;$<P.count;$++){let I=$*C;f===!0&&(s.fromBufferAttribute(P,$),T[W+I+0]=s.x,T[W+I+1]=s.y,T[W+I+2]=s.z,T[W+I+3]=0),g===!0&&(s.fromBufferAttribute(F,$),T[W+I+4]=s.x,T[W+I+5]=s.y,T[W+I+6]=s.z,T[W+I+7]=0),_===!0&&(s.fromBufferAttribute(B,$),T[W+I+8]=s.x,T[W+I+9]=s.y,T[W+I+10]=s.z,T[W+I+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Bt(y,M)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function U0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Wf=new wn,Tf=new jr(1,1),Xf=new Gr,qf=new fa,Yf=new Zr,Af=[],Rf=[],Cf=new Float32Array(16),If=new Float32Array(9),Pf=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Af[s];if(r===void 0&&(r=new Float32Array(s),Af[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dc(i,t){let e=Rf[t];e===void 0&&(e=new Int32Array(t),Rf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function k0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Pf.set(n),i.uniformMatrix2fv(this.addr,!1,Pf),Je(e,n)}}function H0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;If.set(n),i.uniformMatrix3fv(this.addr,!1,If),Je(e,n)}}function V0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Cf.set(n),i.uniformMatrix4fv(this.addr,!1,Cf),Je(e,n)}}function G0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function Y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function Q0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tf.compareFunction=ih,r=Tf):r=Wf,e.setTexture2D(t||r,s)}function j0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qf,s)}function K0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yf,s)}function tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xf,s)}function ex(i){switch(i){case 5126:return N0;case 35664:return B0;case 35665:return O0;case 35666:return z0;case 35674:return k0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return Z0;case 36295:return J0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return K0;case 36289:case 36303:case 36311:case 36292:return tx}}function nx(i,t){i.uniform1fv(this.addr,t)}function ix(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function sx(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function rx(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function ox(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ax(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cx(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function lx(i,t){i.uniform1iv(this.addr,t)}function hx(i,t){i.uniform2iv(this.addr,t)}function ux(i,t){i.uniform3iv(this.addr,t)}function fx(i,t){i.uniform4iv(this.addr,t)}function dx(i,t){i.uniform1uiv(this.addr,t)}function px(i,t){i.uniform2uiv(this.addr,t)}function mx(i,t){i.uniform3uiv(this.addr,t)}function gx(i,t){i.uniform4uiv(this.addr,t)}function xx(i,t,e){let n=this.cache,s=t.length,r=Dc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wf,r[o])}function _x(i,t,e){let n=this.cache,s=t.length,r=Dc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qf,r[o])}function yx(i,t,e){let n=this.cache,s=t.length,r=Dc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yf,r[o])}function vx(i,t,e){let n=this.cache,s=t.length,r=Dc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Xf,r[o])}function Mx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return cx;case 5124:case 35670:return lx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return fx;case 5125:return dx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return vx}}var xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ex(e.type)}},_h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}},yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},gh=/(\w+)(\])?(\[|\.)?/g;function Df(i,t){i.seq.push(t),i.map[t.id]=t}function bx(i,t,e){let n=i.name,s=n.length;for(gh.lastIndex=0;;){let r=gh.exec(n),o=gh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Df(e,c===void 0?new xh(a,i,t):new _h(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new yh(a),Df(e,u)),e=u}}}var fr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);bx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ff(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Sx=37297,Ex=0;function wx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Lf=new Kt;function Tx(i){de._getMatrix(Lf,de.workingColorSpace,i);let t=`mat3( ${Lf.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case kr:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Uf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+wx(i.getShaderSource(t),a)}else return r}function Ax(i,t){let e=Tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rx(i,t){let e;switch(t){case Yu:e="Linear";break;case Zu:e="Reinhard";break;case Ju:e="Cineon";break;case $u:e="ACESFilmic";break;case ju:e="AgX";break;case Va:e="Neutral";break;case Qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cc=new N;function Cx(){de.getLuminanceCoefficients(Cc);let i=Cc.x.toFixed(4),t=Cc.y.toFixed(4),e=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Px(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function To(i){return i!==""}function Nf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(Fx,Ux)}var Lx=new Map;function Ux(i,t){let e=ie[t];if(e===void 0){let n=Lx.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vh(e)}var Nx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(i){return i.replace(Nx,Bx)}function Bx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ox(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===La?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function zx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case _s:t="ENVMAP_TYPE_CUBE";break;case yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _s:t="ENVMAP_MODE_REFRACTION";break}return t}function Hx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yl:t="ENVMAP_BLENDING_MULTIPLY";break;case Xu:t="ENVMAP_BLENDING_MIX";break;case qu:t="ENVMAP_BLENDING_ADD";break}return t}function Vx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gx(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ox(e),c=zx(e),h=kx(e),u=Hx(e),d=Vx(e),f=Ix(e),g=Px(r),_=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`)):(m=[zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[zf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pi?"#define TONE_MAPPING":"",e.toneMapping!==Pi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Pi?Rx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Ax("linearToOutputTexel",e.outputColorSpace),Cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(To).join(`
`)),o=vh(o),o=Nf(o,e),o=Bf(o,e),a=vh(a),a=Nf(a,e),a=Bf(a,e),o=Of(o),a=Of(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=b+m+o,y=b+p+a,M=Ff(s,s.VERTEX_SHADER,x),T=Ff(s,s.FRAGMENT_SHADER,y);s.attachShader(_,M),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(T)||"",$=F.trim(),I=B.trim(),O=W.trim(),L=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(L=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,T);else{let tt=Uf(s,M,"vertex"),it=Uf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+tt+`
`+it)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(I===""||O==="")&&(X=!1);X&&(P.diagnostics={runnable:L,programLog:$,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(M),s.deleteShader(T),C=new fr(s,_),S=Dx(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Sx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ex++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=T,this}var Wx=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bh(t),e.set(t,n)),n}},bh=class{constructor(t){this.id=Wx++,this.code=t,this.usedTimes=0}};function Xx(i,t,e,n,s,r,o){let a=new js,l=new Mh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,v,P,F,B){let W=F.fog,$=B.geometry,I=S.isMeshStandardMaterial?F.environment:null,O=(S.isMeshStandardMaterial?e:t).get(S.envMap||I),L=O&&O.mapping===yo?O.image.height:null,X=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let tt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,it=tt!==void 0?tt.length:0,lt=0;$.morphAttributes.position!==void 0&&(lt=1),$.morphAttributes.normal!==void 0&&(lt=2),$.morphAttributes.color!==void 0&&(lt=3);let nt,mt,ct,Q;if(X){let xe=fi[X];nt=xe.vertexShader,mt=xe.fragmentShader}else nt=S.vertexShader,mt=S.fragmentShader,l.update(S),ct=l.getVertexShaderID(S),Q=l.getFragmentShaderID(S);let k=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Ct=B.isInstancedMesh===!0,St=B.isBatchedMesh===!0,kt=!!S.map,fe=!!S.matcap,U=!!O,jt=!!S.aoMap,Lt=!!S.lightMap,ft=!!S.bumpMap,wt=!!S.normalMap,ue=!!S.displacementMap,yt=!!S.emissiveMap,$t=!!S.metalnessMap,Ge=!!S.roughnessMap,pe=S.anisotropy>0,D=S.clearcoat>0,E=S.dispersion>0,J=S.iridescence>0,w=S.sheen>0,G=S.transmission>0,Z=pe&&!!S.anisotropyMap,gt=D&&!!S.clearcoatMap,at=D&&!!S.clearcoatNormalMap,bt=D&&!!S.clearcoatRoughnessMap,Dt=J&&!!S.iridescenceMap,ot=J&&!!S.iridescenceThicknessMap,At=w&&!!S.sheenColorMap,Yt=w&&!!S.sheenRoughnessMap,zt=!!S.specularMap,Et=!!S.specularColorMap,te=!!S.specularIntensityMap,H=G&&!!S.transmissionMap,pt=G&&!!S.thicknessMap,_t=!!S.gradientMap,Ft=!!S.alphaMap,ht=S.alphaTest>0,rt=!!S.alphaHash,Nt=!!S.extensions,Qt=Pi;S.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Qt=i.toneMapping);let Ee={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:mt,defines:S.defines,customVertexShaderID:ct,customFragmentShaderID:Q,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:St,batchingColor:St&&B._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&B.instanceColor!==null,instancingMorph:Ct&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:k===null?i.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:fs,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:fe,envMap:U,envMapMode:U&&O.mapping,envMapCubeUVHeight:L,aoMap:jt,lightMap:Lt,bumpMap:ft,normalMap:wt,displacementMap:d&&ue,emissiveMap:yt,normalMapObjectSpace:wt&&S.normalMapType===nf,normalMapTangentSpace:wt&&S.normalMapType===nh,metalnessMap:$t,roughnessMap:Ge,anisotropy:pe,anisotropyMap:Z,clearcoat:D,clearcoatMap:gt,clearcoatNormalMap:at,clearcoatRoughnessMap:bt,dispersion:E,iridescence:J,iridescenceMap:Dt,iridescenceThicknessMap:ot,sheen:w,sheenColorMap:At,sheenRoughnessMap:Yt,specularMap:zt,specularColorMap:Et,specularIntensityMap:te,transmission:G,transmissionMap:H,thicknessMap:pt,gradientMap:_t,opaque:S.transparent===!1&&S.blending===hs&&S.alphaToCoverage===!1,alphaMap:Ft,alphaTest:ht,alphaHash:rt,combine:S.combine,mapUv:kt&&_(S.map.channel),aoMapUv:jt&&_(S.aoMap.channel),lightMapUv:Lt&&_(S.lightMap.channel),bumpMapUv:ft&&_(S.bumpMap.channel),normalMapUv:wt&&_(S.normalMap.channel),displacementMapUv:ue&&_(S.displacementMap.channel),emissiveMapUv:yt&&_(S.emissiveMap.channel),metalnessMapUv:$t&&_(S.metalnessMap.channel),roughnessMapUv:Ge&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:at&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&_(S.sheenRoughnessMap.channel),specularMapUv:zt&&_(S.specularMap.channel),specularColorMapUv:Et&&_(S.specularColorMap.channel),specularIntensityMapUv:te&&_(S.specularIntensityMap.channel),transmissionMapUv:H&&_(S.transmissionMap.channel),thicknessMapUv:pt&&_(S.thicknessMap.channel),alphaMapUv:Ft&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(wt||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(kt||Ft),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ut,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&de.getTransfer(S.map.colorSpace)===ye,decodeVideoTextureEmissive:yt&&S.emissiveMap.isVideoTexture===!0&&de.getTransfer(S.emissiveMap.colorSpace)===ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Tn,flipSided:S.side===fn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function p(S){let v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)v.push(P),v.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(v,S),x(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function b(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function x(S,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let v=g[S.type],P;if(v){let F=fi[v];P=pf.clone(F.uniforms)}else P=S.uniforms;return P}function M(S,v){let P;for(let F=0,B=h.length;F<B;F++){let W=h[F];if(W.cacheKey===v){P=W,++P.usedTimes;break}}return P===void 0&&(P=new Gx(i,v,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){let v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:M,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function qx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Yx),n.length>1&&n.sort(d||kf),s.length>1&&s.sort(d||kf)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Zx(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Hf,i.set(n,[o])):s>=r.length?(o=new Hf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ne};break;case"SpotLight":e={position:new N,direction:new N,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function $x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qx=0;function jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kx(i){let t=new Jx,e=$x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new ve,o=new ve;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,x=0,y=0,M=0,T=0,A=0;c.sort(jx);for(let S=0,v=c.length;S<v;S++){let P=c[S],F=P.color,B=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(P.isLightProbe){for(let I=0;I<9;I++)n.probe[I].addScaledVector(P.sh.coefficients[I],B);A++}else if(P.isDirectionalLight){let I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let O=P.shadow,L=e.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,n.directionalShadow[f]=L,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=P.shadow.matrix,b++}n.directional[f]=I,f++}else if(P.isSpotLight){let I=t.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(F).multiplyScalar(B),I.distance=W,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,n.spot[_]=I;let O=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,O.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=O.matrix,P.castShadow){let L=e.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,n.spotShadow[_]=L,n.spotShadowMap[_]=$,y++}_++}else if(P.isRectAreaLight){let I=t.get(P);I.color.copy(F).multiplyScalar(B),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=I,m++}else if(P.isPointLight){let I=t.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){let O=P.shadow,L=e.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=I,g++}else if(P.isHemisphereLight){let I=t.get(P);I.skyColor.copy(P.color).multiplyScalar(B),I.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=I,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==M||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=M,C.numLightProbes=A,n.version=Qx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let x=c[p];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Vf(i){let t=new Kx(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Vf(i),t.set(s,[a])):r>=o.length?(a=new Vf(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var e_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`;function i_(i,t,e){let n=new tr,s=new Bt,r=new Bt,o=new Le,a=new ba({depthPacking:ef}),l=new Sa,c={},h=e.maxTextureSize,u={[Ai]:fn,[fn]:Ai,[Tn]:Tn},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:e_,fragmentShader:n_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let p=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ii),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=p!==ui&&this.type===ui,W=p===ui&&this.type!==ui;for(let $=0,I=T.length;$<I;$++){let O=T[$],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let X=L.getFrameExtents();if(s.multiply(X),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,L.mapSize.y=r.y)),L.map===null||B===!0||W===!0){let it=this.type!==ui?{minFilter:En,magFilter:En}:{};L.map!==null&&L.map.dispose(),L.map=new li(s.x,s.y,it),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let tt=L.getViewportCount();for(let it=0;it<tt;it++){let lt=L.getViewport(it);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),F.viewport(o),L.updateMatrices(O,it),n=L.getFrustum(),y(A,C,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===ui&&b(L,C),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,P)};function b(T,A){let C=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new li(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,f,_,null)}function x(T,A,C,S){let v=null,P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=C.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=v.uuid,B=A.uuid,W=c[F];W===void 0&&(W={},c[F]=W);let $=W[B];$===void 0&&($=v.clone(),W[B]=$,A.addEventListener("dispose",M)),v=$}if(v.visible=A.visible,v.wireframe=A.wireframe,S===ui?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=C}return v}function y(T,A,C,S,v){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ui)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);let B=t.update(T),W=T.material;if(Array.isArray(W)){let $=B.groups;for(let I=0,O=$.length;I<O;I++){let L=$[I],X=W[L.materialIndex];if(X&&X.visible){let tt=x(T,X,S,v);T.onBeforeShadow(i,T,A,C,B,tt,L),i.renderBufferDirect(C,null,B,tt,T,L),T.onAfterShadow(i,T,A,C,B,tt,L)}}}else if(W.visible){let $=x(T,W,S,v);T.onBeforeShadow(i,T,A,C,B,$,null),i.renderBufferDirect(C,null,B,$,T,null),T.onAfterShadow(i,T,A,C,B,$,null)}}let F=T.children;for(let B=0,W=F.length;B<W;B++)y(F[B],A,C,S,v)}function M(T){T.target.removeEventListener("dispose",M);for(let C in c){let S=c[C],v=T.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}var s_={[Ua]:Na,[Ba]:ka,[Oa]:Ha,[us]:za,[Na]:Ua,[ka]:Ba,[Ha]:Oa,[za]:us};function r_(i,t){function e(){let H=!1,pt=new Le,_t=null,Ft=new Le(0,0,0,0);return{setMask:function(ht){_t!==ht&&!H&&(i.colorMask(ht,ht,ht,ht),_t=ht)},setLocked:function(ht){H=ht},setClear:function(ht,rt,Nt,Qt,Ee){Ee===!0&&(ht*=Qt,rt*=Qt,Nt*=Qt),pt.set(ht,rt,Nt,Qt),Ft.equals(pt)===!1&&(i.clearColor(ht,rt,Nt,Qt),Ft.copy(pt))},reset:function(){H=!1,_t=null,Ft.set(-1,0,0,0)}}}function n(){let H=!1,pt=!1,_t=null,Ft=null,ht=null;return{setReversed:function(rt){if(pt!==rt){let Nt=t.get("EXT_clip_control");rt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),pt=rt;let Qt=ht;ht=null,this.setClear(Qt)}},getReversed:function(){return pt},setTest:function(rt){rt?k(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(rt){_t!==rt&&!H&&(i.depthMask(rt),_t=rt)},setFunc:function(rt){if(pt&&(rt=s_[rt]),Ft!==rt){switch(rt){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case ka:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ft=rt}},setLocked:function(rt){H=rt},setClear:function(rt){ht!==rt&&(pt&&(rt=1-rt),i.clearDepth(rt),ht=rt)},reset:function(){H=!1,_t=null,Ft=null,ht=null,pt=!1}}}function s(){let H=!1,pt=null,_t=null,Ft=null,ht=null,rt=null,Nt=null,Qt=null,Ee=null;return{setTest:function(xe){H||(xe?k(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(xe){pt!==xe&&!H&&(i.stencilMask(xe),pt=xe)},setFunc:function(xe,vi,ci){(_t!==xe||Ft!==vi||ht!==ci)&&(i.stencilFunc(xe,vi,ci),_t=xe,Ft=vi,ht=ci)},setOp:function(xe,vi,ci){(rt!==xe||Nt!==vi||Qt!==ci)&&(i.stencilOp(xe,vi,ci),rt=xe,Nt=vi,Qt=ci)},setLocked:function(xe){H=xe},setClear:function(xe){Ee!==xe&&(i.clearStencil(xe),Ee=xe)},reset:function(){H=!1,pt=null,_t=null,Ft=null,ht=null,rt=null,Nt=null,Qt=null,Ee=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,y=null,M=null,T=null,A=new ne(0,0,0),C=0,S=!1,v=null,P=null,F=null,B=null,W=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,O=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(L)[1]),I=O>=1):L.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),I=O>=2);let X=null,tt={},it=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),nt=new Le().fromArray(it),mt=new Le().fromArray(lt);function ct(H,pt,_t,Ft){let ht=new Uint8Array(4),rt=i.createTexture();i.bindTexture(H,rt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<_t;Nt++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,Ft,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(pt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return rt}let Q={};Q[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),k(i.DEPTH_TEST),o.setFunc(us),ft(!1),wt(Vl),k(i.CULL_FACE),jt(Ii);function k(H){h[H]!==!0&&(i.enable(H),h[H]=!0)}function ut(H){h[H]!==!1&&(i.disable(H),h[H]=!1)}function Ct(H,pt){return u[H]!==pt?(i.bindFramebuffer(H,pt),u[H]=pt,H===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),H===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function St(H,pt){let _t=f,Ft=!1;if(H){_t=d.get(pt),_t===void 0&&(_t=[],d.set(pt,_t));let ht=H.textures;if(_t.length!==ht.length||_t[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Nt=ht.length;rt<Nt;rt++)_t[rt]=i.COLOR_ATTACHMENT0+rt;_t.length=ht.length,Ft=!0}}else _t[0]!==i.BACK&&(_t[0]=i.BACK,Ft=!0);Ft&&i.drawBuffers(_t)}function kt(H){return g!==H?(i.useProgram(H),g=H,!0):!1}let fe={[Zi]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};fe[Iu]=i.MIN,fe[Pu]=i.MAX;let U={[Du]:i.ZERO,[Fu]:i.ONE,[Lu]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Ou]:i.DST_COLOR,[Nu]:i.DST_ALPHA,[Uu]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(H,pt,_t,Ft,ht,rt,Nt,Qt,Ee,xe){if(H===Ii){_===!0&&(ut(i.BLEND),_=!1);return}if(_===!1&&(k(i.BLEND),_=!0),H!==Au){if(H!==m||xe!==S){if((p!==Zi||y!==Zi)&&(i.blendEquation(i.FUNC_ADD),p=Zi,y=Zi),xe)switch(H){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ql:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ql:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,x=null,M=null,T=null,A.set(0,0,0),C=0,m=H,S=xe}return}ht=ht||pt,rt=rt||_t,Nt=Nt||Ft,(pt!==p||ht!==y)&&(i.blendEquationSeparate(fe[pt],fe[ht]),p=pt,y=ht),(_t!==b||Ft!==x||rt!==M||Nt!==T)&&(i.blendFuncSeparate(U[_t],U[Ft],U[rt],U[Nt]),b=_t,x=Ft,M=rt,T=Nt),(Qt.equals(A)===!1||Ee!==C)&&(i.blendColor(Qt.r,Qt.g,Qt.b,Ee),A.copy(Qt),C=Ee),m=H,S=!1}function Lt(H,pt){H.side===Tn?ut(i.CULL_FACE):k(i.CULL_FACE);let _t=H.side===fn;pt&&(_t=!_t),ft(_t),H.blending===hs&&H.transparent===!1?jt(Ii):jt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ft=H.stencilWrite;a.setTest(Ft),Ft&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),yt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?k(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){v!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),v=H)}function wt(H){H!==wu?(k(i.CULL_FACE),H!==P&&(H===Vl?i.cullFace(i.BACK):H===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),P=H}function ue(H){H!==F&&(I&&i.lineWidth(H),F=H)}function yt(H,pt,_t){H?(k(i.POLYGON_OFFSET_FILL),(B!==pt||W!==_t)&&(i.polygonOffset(pt,_t),B=pt,W=_t)):ut(i.POLYGON_OFFSET_FILL)}function $t(H){H?k(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Ge(H){H===void 0&&(H=i.TEXTURE0+$-1),X!==H&&(i.activeTexture(H),X=H)}function pe(H,pt,_t){_t===void 0&&(X===null?_t=i.TEXTURE0+$-1:_t=X);let Ft=tt[_t];Ft===void 0&&(Ft={type:void 0,texture:void 0},tt[_t]=Ft),(Ft.type!==H||Ft.texture!==pt)&&(X!==_t&&(i.activeTexture(_t),X=_t),i.bindTexture(H,pt||Q[H]),Ft.type=H,Ft.texture=pt)}function D(){let H=tt[X];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{i.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function w(){try{i.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function G(){try{i.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function bt(){try{i.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Dt(){try{i.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{i.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function At(H){nt.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),nt.copy(H))}function Yt(H){mt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),mt.copy(H))}function zt(H,pt){let _t=c.get(pt);_t===void 0&&(_t=new WeakMap,c.set(pt,_t));let Ft=_t.get(H);Ft===void 0&&(Ft=i.getUniformBlockIndex(pt,H.name),_t.set(H,Ft))}function Et(H,pt){let Ft=c.get(pt).get(H);l.get(pt)!==Ft&&(i.uniformBlockBinding(pt,Ft,H.__bindingPointIndex),l.set(pt,Ft))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,tt={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,x=null,y=null,M=null,T=null,A=new ne(0,0,0),C=0,S=!1,v=null,P=null,F=null,B=null,W=null,nt.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:k,disable:ut,bindFramebuffer:Ct,drawBuffers:St,useProgram:kt,setBlending:jt,setMaterial:Lt,setFlipSided:ft,setCullFace:wt,setLineWidth:ue,setPolygonOffset:yt,setScissorTest:$t,activeTexture:Ge,bindTexture:pe,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Dt,texImage3D:ot,updateUBOMapping:zt,uniformBlockBinding:Et,texStorage2D:at,texStorage3D:bt,texSubImage2D:w,texSubImage3D:G,compressedTexSubImage2D:Z,compressedTexSubImage3D:gt,scissor:At,viewport:Yt,reset:te}}function o_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Bt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,E){return f?new OffscreenCanvas(D,E):Vr("canvas")}function _(D,E,J){let w=1,G=pe(D);if((G.width>J||G.height>J)&&(w=J/Math.max(G.width,G.height)),w<1)if(typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&D instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&D instanceof ImageBitmap||typeof VideoFrame!="undefined"&&D instanceof VideoFrame){let Z=Math.floor(w*G.width),gt=Math.floor(w*G.height);u===void 0&&(u=g(Z,gt));let at=E?g(Z,gt):u;return at.width=Z,at.height=gt,at.getContext("2d").drawImage(D,0,0,Z,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+Z+"x"+gt+")."),at}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function b(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(D,E,J,w,G=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Z=E;if(E===i.RED&&(J===i.FLOAT&&(Z=i.R32F),J===i.HALF_FLOAT&&(Z=i.R16F),J===i.UNSIGNED_BYTE&&(Z=i.R8)),E===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.R8UI),J===i.UNSIGNED_SHORT&&(Z=i.R16UI),J===i.UNSIGNED_INT&&(Z=i.R32UI),J===i.BYTE&&(Z=i.R8I),J===i.SHORT&&(Z=i.R16I),J===i.INT&&(Z=i.R32I)),E===i.RG&&(J===i.FLOAT&&(Z=i.RG32F),J===i.HALF_FLOAT&&(Z=i.RG16F),J===i.UNSIGNED_BYTE&&(Z=i.RG8)),E===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.RG8UI),J===i.UNSIGNED_SHORT&&(Z=i.RG16UI),J===i.UNSIGNED_INT&&(Z=i.RG32UI),J===i.BYTE&&(Z=i.RG8I),J===i.SHORT&&(Z=i.RG16I),J===i.INT&&(Z=i.RG32I)),E===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),J===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),J===i.UNSIGNED_INT&&(Z=i.RGB32UI),J===i.BYTE&&(Z=i.RGB8I),J===i.SHORT&&(Z=i.RGB16I),J===i.INT&&(Z=i.RGB32I)),E===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),J===i.UNSIGNED_INT&&(Z=i.RGBA32UI),J===i.BYTE&&(Z=i.RGBA8I),J===i.SHORT&&(Z=i.RGBA16I),J===i.INT&&(Z=i.RGBA32I)),E===i.RGB&&(J===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),E===i.RGBA){let gt=G?kr:de.getTransfer(w);J===i.FLOAT&&(Z=i.RGBA32F),J===i.HALF_FLOAT&&(Z=i.RGBA16F),J===i.UNSIGNED_BYTE&&(Z=gt===ye?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(D,E){let J;return D?E===null||E===ts||E===cr?J=i.DEPTH24_STENCIL8:E===ii?J=i.DEPTH32F_STENCIL8:E===or&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ts||E===cr?J=i.DEPTH_COMPONENT24:E===ii?J=i.DEPTH_COMPONENT32F:E===or&&(J=i.DEPTH_COMPONENT16),J}function M(D,E){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==En&&D.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function T(D){let E=D.target;E.removeEventListener("dispose",T),C(E),E.isVideoTexture&&h.delete(E)}function A(D){let E=D.target;E.removeEventListener("dispose",A),v(E)}function C(D){let E=n.get(D);if(E.__webglInit===void 0)return;let J=D.source,w=d.get(J);if(w){let G=w[E.__cacheKey];G.usedTimes--,G.usedTimes===0&&S(D),Object.keys(w).length===0&&d.delete(J)}n.remove(D)}function S(D){let E=n.get(D);i.deleteTexture(E.__webglTexture);let J=D.source,w=d.get(J);delete w[E.__cacheKey],o.memory.textures--}function v(D){let E=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(E.__webglFramebuffer[w]))for(let G=0;G<E.__webglFramebuffer[w].length;G++)i.deleteFramebuffer(E.__webglFramebuffer[w][G]);else i.deleteFramebuffer(E.__webglFramebuffer[w]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[w])}else{if(Array.isArray(E.__webglFramebuffer))for(let w=0;w<E.__webglFramebuffer.length;w++)i.deleteFramebuffer(E.__webglFramebuffer[w]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let w=0;w<E.__webglColorRenderbuffer.length;w++)E.__webglColorRenderbuffer[w]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[w]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let J=D.textures;for(let w=0,G=J.length;w<G;w++){let Z=n.get(J[w]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(J[w])}n.remove(D)}let P=0;function F(){P=0}function B(){let D=P;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),P+=1,D}function W(D){let E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function $(D,E){let J=n.get(D);if(D.isVideoTexture&&$t(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){let w=D.image;if(w===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(w.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,D,E);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+E)}function I(D,E){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Q(J,D,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+E)}function O(D,E){let J=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){Q(J,D,E);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+E)}function L(D,E){let J=n.get(D);if(D.version>0&&J.__version!==D.version){k(J,D,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+E)}let X={[oa]:i.REPEAT,[Yi]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},tt={[En]:i.NEAREST,[Ku]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},it={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[ih]:i.LEQUAL,[of]:i.EQUAL,[lf]:i.GEQUAL,[af]:i.GREATER,[cf]:i.NOTEQUAL};function lt(D,E){if(E.type===ii&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Xa||E.magFilter===vo||E.magFilter===Ki||E.minFilter===jn||E.minFilter===Xa||E.minFilter===vo||E.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,X[E.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,X[E.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,X[E.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,tt[E.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==vo&&E.minFilter!==Ki||E.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function nt(D,E){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",T));let w=E.source,G=d.get(w);G===void 0&&(G={},d.set(w,G));let Z=W(E);if(Z!==D.__cacheKey){G[Z]===void 0&&(G[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),G[Z].usedTimes++;let gt=G[D.__cacheKey];gt!==void 0&&(G[D.__cacheKey].usedTimes--,gt.usedTimes===0&&S(E)),D.__cacheKey=Z,D.__webglTexture=G[Z].texture}return J}function mt(D,E,J){return Math.floor(Math.floor(D/J)/E)}function ct(D,E,J,w){let Z=D.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,J,w,E.data);else{Z.sort((ot,At)=>ot.start-At.start);let gt=0;for(let ot=1;ot<Z.length;ot++){let At=Z[gt],Yt=Z[ot],zt=At.start+At.count,Et=mt(Yt.start,E.width,4),te=mt(At.start,E.width,4);Yt.start<=zt+1&&Et===te&&mt(Yt.start+Yt.count-1,E.width,4)===Et?At.count=Math.max(At.count,Yt.start+Yt.count-At.start):(++gt,Z[gt]=Yt)}Z.length=gt+1;let at=i.getParameter(i.UNPACK_ROW_LENGTH),bt=i.getParameter(i.UNPACK_SKIP_PIXELS),Dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let ot=0,At=Z.length;ot<At;ot++){let Yt=Z[ot],zt=Math.floor(Yt.start/4),Et=Math.ceil(Yt.count/4),te=zt%E.width,H=Math.floor(zt/E.width),pt=Et,_t=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,te),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),e.texSubImage2D(i.TEXTURE_2D,0,te,H,pt,_t,J,w,E.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,at),i.pixelStorei(i.UNPACK_SKIP_PIXELS,bt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Dt)}}function Q(D,E,J){let w=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(w=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(w=i.TEXTURE_3D);let G=nt(D,E),Z=E.source;e.bindTexture(w,D.__webglTexture,i.TEXTURE0+J);let gt=n.get(Z);if(Z.version!==gt.__version||G===!0){e.activeTexture(i.TEXTURE0+J);let at=de.getPrimaries(de.workingColorSpace),bt=E.colorSpace===Di?null:de.getPrimaries(E.colorSpace),Dt=E.colorSpace===Di||at===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let ot=_(E.image,!1,s.maxTextureSize);ot=Ge(E,ot);let At=r.convert(E.format,E.colorSpace),Yt=r.convert(E.type),zt=x(E.internalFormat,At,Yt,E.colorSpace,E.isVideoTexture);lt(w,E);let Et,te=E.mipmaps,H=E.isVideoTexture!==!0,pt=gt.__version===void 0||G===!0,_t=Z.dataReady,Ft=M(E,ot);if(E.isDepthTexture)zt=y(E.format===lr,E.type),pt&&(H?e.texStorage2D(i.TEXTURE_2D,1,zt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,zt,ot.width,ot.height,0,At,Yt,null));else if(E.isDataTexture)if(te.length>0){H&&pt&&e.texStorage2D(i.TEXTURE_2D,Ft,zt,te[0].width,te[0].height);for(let ht=0,rt=te.length;ht<rt;ht++)Et=te[ht],H?_t&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Et.width,Et.height,At,Yt,Et.data):e.texImage2D(i.TEXTURE_2D,ht,zt,Et.width,Et.height,0,At,Yt,Et.data);E.generateMipmaps=!1}else H?(pt&&e.texStorage2D(i.TEXTURE_2D,Ft,zt,ot.width,ot.height),_t&&ct(E,ot,At,Yt)):e.texImage2D(i.TEXTURE_2D,0,zt,ot.width,ot.height,0,At,Yt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,zt,te[0].width,te[0].height,ot.depth);for(let ht=0,rt=te.length;ht<rt;ht++)if(Et=te[ht],E.format!==qn)if(At!==null)if(H){if(_t)if(E.layerUpdates.size>0){let Nt=hh(Et.width,Et.height,E.format,E.type);for(let Qt of E.layerUpdates){let Ee=Et.data.subarray(Qt*Nt/Et.data.BYTES_PER_ELEMENT,(Qt+1)*Nt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,Qt,Et.width,Et.height,1,At,Ee)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Et.width,Et.height,ot.depth,At,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,zt,Et.width,Et.height,ot.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?_t&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Et.width,Et.height,ot.depth,At,Yt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,zt,Et.width,Et.height,ot.depth,0,At,Yt,Et.data)}else{H&&pt&&e.texStorage2D(i.TEXTURE_2D,Ft,zt,te[0].width,te[0].height);for(let ht=0,rt=te.length;ht<rt;ht++)Et=te[ht],E.format!==qn?At!==null?H?_t&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?_t&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Et.width,Et.height,At,Yt,Et.data):e.texImage2D(i.TEXTURE_2D,ht,zt,Et.width,Et.height,0,At,Yt,Et.data)}else if(E.isDataArrayTexture)if(H){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,zt,ot.width,ot.height,ot.depth),_t)if(E.layerUpdates.size>0){let ht=hh(ot.width,ot.height,E.format,E.type);for(let rt of E.layerUpdates){let Nt=ot.data.subarray(rt*ht/ot.data.BYTES_PER_ELEMENT,(rt+1)*ht/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ot.width,ot.height,1,At,Yt,Nt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,At,Yt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ot.width,ot.height,ot.depth,0,At,Yt,ot.data);else if(E.isData3DTexture)H?(pt&&e.texStorage3D(i.TEXTURE_3D,Ft,zt,ot.width,ot.height,ot.depth),_t&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,At,Yt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ot.width,ot.height,ot.depth,0,At,Yt,ot.data);else if(E.isFramebufferTexture){if(pt)if(H)e.texStorage2D(i.TEXTURE_2D,Ft,zt,ot.width,ot.height);else{let ht=ot.width,rt=ot.height;for(let Nt=0;Nt<Ft;Nt++)e.texImage2D(i.TEXTURE_2D,Nt,zt,ht,rt,0,At,Yt,null),ht>>=1,rt>>=1}}else if(te.length>0){if(H&&pt){let ht=pe(te[0]);e.texStorage2D(i.TEXTURE_2D,Ft,zt,ht.width,ht.height)}for(let ht=0,rt=te.length;ht<rt;ht++)Et=te[ht],H?_t&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,At,Yt,Et):e.texImage2D(i.TEXTURE_2D,ht,zt,At,Yt,Et);E.generateMipmaps=!1}else if(H){if(pt){let ht=pe(ot);e.texStorage2D(i.TEXTURE_2D,Ft,zt,ht.width,ht.height)}_t&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Yt,ot)}else e.texImage2D(i.TEXTURE_2D,0,zt,At,Yt,ot);m(E)&&p(w),gt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function k(D,E,J){if(E.image.length!==6)return;let w=nt(D,E),G=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);let Z=n.get(G);if(G.version!==Z.__version||w===!0){e.activeTexture(i.TEXTURE0+J);let gt=de.getPrimaries(de.workingColorSpace),at=E.colorSpace===Di?null:de.getPrimaries(E.colorSpace),bt=E.colorSpace===Di||gt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,ot=E.image[0]&&E.image[0].isDataTexture,At=[];for(let rt=0;rt<6;rt++)!Dt&&!ot?At[rt]=_(E.image[rt],!0,s.maxCubemapSize):At[rt]=ot?E.image[rt].image:E.image[rt],At[rt]=Ge(E,At[rt]);let Yt=At[0],zt=r.convert(E.format,E.colorSpace),Et=r.convert(E.type),te=x(E.internalFormat,zt,Et,E.colorSpace),H=E.isVideoTexture!==!0,pt=Z.__version===void 0||w===!0,_t=G.dataReady,Ft=M(E,Yt);lt(i.TEXTURE_CUBE_MAP,E);let ht;if(Dt){H&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,te,Yt.width,Yt.height);for(let rt=0;rt<6;rt++){ht=At[rt].mipmaps;for(let Nt=0;Nt<ht.length;Nt++){let Qt=ht[Nt];E.format!==qn?zt!==null?H?_t&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,Qt.width,Qt.height,zt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,te,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,0,0,Qt.width,Qt.height,zt,Et,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt,te,Qt.width,Qt.height,0,zt,Et,Qt.data)}}}else{if(ht=E.mipmaps,H&&pt){ht.length>0&&Ft++;let rt=pe(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ft,te,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ot){H?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,At[rt].width,At[rt].height,zt,Et,At[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,te,At[rt].width,At[rt].height,0,zt,Et,At[rt].data);for(let Nt=0;Nt<ht.length;Nt++){let Ee=ht[Nt].image[rt].image;H?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,Ee.width,Ee.height,zt,Et,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,te,Ee.width,Ee.height,0,zt,Et,Ee.data)}}else{H?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,Et,At[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,te,zt,Et,At[rt]);for(let Nt=0;Nt<ht.length;Nt++){let Qt=ht[Nt];H?_t&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,0,0,zt,Et,Qt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Nt+1,te,zt,Et,Qt.image[rt])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),Z.__version=G.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ut(D,E,J,w,G,Z){let gt=r.convert(J.format,J.colorSpace),at=r.convert(J.type),bt=x(J.internalFormat,gt,at,J.colorSpace),Dt=n.get(E),ot=n.get(J);if(ot.__renderTarget=E,!Dt.__hasExternalTextures){let At=Math.max(1,E.width>>Z),Yt=Math.max(1,E.height>>Z);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?e.texImage3D(G,Z,bt,At,Yt,E.depth,0,gt,at,null):e.texImage2D(G,Z,bt,At,Yt,0,gt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,w,G,ot.__webglTexture,0,ue(E)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,w,G,ot.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(D,E,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),E.depthBuffer){let w=E.depthTexture,G=w&&w.isDepthTexture?w.type:null,Z=y(E.stencilBuffer,G),gt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=ue(E);yt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Z,E.width,E.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Z,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Z,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,D)}else{let w=E.textures;for(let G=0;G<w.length;G++){let Z=w[G],gt=r.convert(Z.format,Z.colorSpace),at=r.convert(Z.type),bt=x(Z.internalFormat,gt,at,Z.colorSpace),Dt=ue(E);J&&yt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,bt,E.width,E.height):yt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Dt,bt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,bt,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function St(D,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let w=n.get(E.depthTexture);w.__renderTarget=E,(!w.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);let G=w.__webglTexture,Z=ue(E);if(E.depthTexture.format===Js)yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(E.depthTexture.format===lr)yt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function kt(D){let E=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){let w=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),w){let G=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,w.removeEventListener("dispose",G)};w.addEventListener("dispose",G),E.__depthDisposeCallback=G}E.__boundDepthTexture=w}if(D.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");let w=D.texture.mipmaps;w&&w.length>0?St(E.__webglFramebuffer[0],D):St(E.__webglFramebuffer,D)}else if(J){E.__webglDepthbuffer=[];for(let w=0;w<6;w++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[w]),E.__webglDepthbuffer[w]===void 0)E.__webglDepthbuffer[w]=i.createRenderbuffer(),Ct(E.__webglDepthbuffer[w],D,!1);else{let G=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[w];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,Z)}}else{let w=D.texture.mipmaps;if(w&&w.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ct(E.__webglDepthbuffer,D,!1);else{let G=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function fe(D,E,J){let w=n.get(D);E!==void 0&&ut(w.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&kt(D)}function U(D){let E=D.texture,J=n.get(D),w=n.get(E);D.addEventListener("dispose",A);let G=D.textures,Z=D.isWebGLCubeRenderTarget===!0,gt=G.length>1;if(gt||(w.__webglTexture===void 0&&(w.__webglTexture=i.createTexture()),w.__version=E.version,o.memory.textures++),Z){J.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[at]=[];for(let bt=0;bt<E.mipmaps.length;bt++)J.__webglFramebuffer[at][bt]=i.createFramebuffer()}else J.__webglFramebuffer[at]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)J.__webglFramebuffer[at]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(gt)for(let at=0,bt=G.length;at<bt;at++){let Dt=n.get(G[at]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&yt(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let at=0;at<G.length;at++){let bt=G[at];J.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[at]);let Dt=r.convert(bt.format,bt.colorSpace),ot=r.convert(bt.type),At=x(bt.internalFormat,Dt,ot,bt.colorSpace,D.isXRRenderTarget===!0),Yt=ue(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,At,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,J.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture),lt(i.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)ut(J.__webglFramebuffer[at][bt],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt);else ut(J.__webglFramebuffer[at],D,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(E)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let at=0,bt=G.length;at<bt;at++){let Dt=G[at],ot=n.get(Dt),At=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(At=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,ot.__webglTexture),lt(At,Dt),ut(J.__webglFramebuffer,D,Dt,i.COLOR_ATTACHMENT0+at,At,0),m(Dt)&&p(At)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(at=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,w.__webglTexture),lt(at,E),E.mipmaps&&E.mipmaps.length>0)for(let bt=0;bt<E.mipmaps.length;bt++)ut(J.__webglFramebuffer[bt],D,E,i.COLOR_ATTACHMENT0,at,bt);else ut(J.__webglFramebuffer,D,E,i.COLOR_ATTACHMENT0,at,0);m(E)&&p(at),e.unbindTexture()}D.depthBuffer&&kt(D)}function jt(D){let E=D.textures;for(let J=0,w=E.length;J<w;J++){let G=E[J];if(m(G)){let Z=b(D),gt=n.get(G).__webglTexture;e.bindTexture(Z,gt),p(Z),e.unbindTexture()}}}let Lt=[],ft=[];function wt(D){if(D.samples>0){if(yt(D)===!1){let E=D.textures,J=D.width,w=D.height,G=i.COLOR_BUFFER_BIT,Z=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(D),at=E.length>1;if(at)for(let Dt=0;Dt<E.length;Dt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);let bt=D.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);let ot=n.get(E[Dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,J,w,0,0,J,w,G,i.NEAREST),l===!0&&(Lt.length=0,ft.length=0,Lt.push(i.COLOR_ATTACHMENT0+Dt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Lt.push(Z),ft.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ft)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let Dt=0;Dt<E.length;Dt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Dt]);let ot=n.get(E[Dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Dt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let E=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ue(D){return Math.min(s.maxSamples,D.samples)}function yt(D){let E=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(D){let E=o.render.frame;h.get(D)!==E&&(h.set(D,E),D.update())}function Ge(D,E){let J=D.colorSpace,w=D.format,G=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==fs&&J!==Di&&(de.getTransfer(J)===ye?(w!==qn||G!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function pe(D){return typeof HTMLImageElement!="undefined"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame!="undefined"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=I,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=fe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=yt}function a_(i,t){function e(n,s=Di){let r,o=de.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Ya)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jl)return i.BYTE;if(n===$l)return i.SHORT;if(n===or)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===ar)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===th)return i.RGB;if(n===qn)return i.RGBA;if(n===Js)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===eh)return i.RG;if(n===Qa)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===Mo||n===bo||n===So||n===Eo)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oc||n===ac||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===_c||n===yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===Mc||n===bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===Ec||n===wc||n===Tc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var c_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l_=`
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

}`,Sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Kr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ei({vertexShader:c_,fragmentShader:l_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends Ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding!="undefined",m=new Sh,p={},b=e.getContextAttributes(),x=null,y=null,M=[],T=[],A=new Bt,C=null,S=new an;S.viewport=new Le;let v=new an;v.viewport=new Le;let P=[S,v],F=new Fa,B=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let k=M[Q];return k===void 0&&(k=new Ks,M[Q]=k),k.getTargetRaySpace()},this.getControllerGrip=function(Q){let k=M[Q];return k===void 0&&(k=new Ks,M[Q]=k),k.getGripSpace()},this.getHand=function(Q){let k=M[Q];return k===void 0&&(k=new Ks,M[Q]=k),k.getHandSpace()};function $(Q){let k=T.indexOf(Q.inputSource);if(k===-1)return;let ut=M[k];ut!==void 0&&(ut.update(Q.inputSource,Q.frame,c||o),ut.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",O);for(let Q=0;Q<M.length;Q++){let k=T[Q];k!==null&&(T[Q]=null,M[Q].disconnect(k))}B=null,W=null,m.reset();for(let Q in p)delete p[Q];t.setRenderTarget(x),f=null,d=null,u=null,s=null,y=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",I),s.addEventListener("inputsourceschange",O),b.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Ct=null,St=null;b.depth&&(St=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=b.stencil?lr:Js,Ct=b.stencil?cr:ts);let kt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(kt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new li(d.textureWidth,d.textureHeight,{format:qn,type:ni,depthTexture:new jr(d.textureWidth,d.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new li(f.framebufferWidth,f.framebufferHeight,{format:qn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Q){for(let k=0;k<Q.removed.length;k++){let ut=Q.removed[k],Ct=T.indexOf(ut);Ct>=0&&(T[Ct]=null,M[Ct].disconnect(ut))}for(let k=0;k<Q.added.length;k++){let ut=Q.added[k],Ct=T.indexOf(ut);if(Ct===-1){for(let kt=0;kt<M.length;kt++)if(kt>=T.length){T.push(ut),Ct=kt;break}else if(T[kt]===null){T[kt]=ut,Ct=kt;break}if(Ct===-1)break}let St=M[Ct];St&&St.connect(ut)}}let L=new N,X=new N;function tt(Q,k,ut){L.setFromMatrixPosition(k.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);let Ct=L.distanceTo(X),St=k.projectionMatrix.elements,kt=ut.projectionMatrix.elements,fe=St[14]/(St[10]-1),U=St[14]/(St[10]+1),jt=(St[9]+1)/St[5],Lt=(St[9]-1)/St[5],ft=(St[8]-1)/St[0],wt=(kt[8]+1)/kt[0],ue=fe*ft,yt=fe*wt,$t=Ct/(-ft+wt),Ge=$t*-ft;if(k.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ge),Q.translateZ($t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),St[10]===-1)Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{let pe=fe+$t,D=U+$t,E=ue-Ge,J=yt+(Ct-Ge),w=jt*U/D*pe,G=Lt*U/D*pe;Q.projectionMatrix.makePerspective(E,J,w,G,pe,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function it(Q,k){k===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(k.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let k=Q.near,ut=Q.far;m.texture!==null&&(m.depthNear>0&&(k=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),F.near=v.near=S.near=k,F.far=v.far=S.far=ut,(B!==F.near||W!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),B=F.near,W=F.far),F.layers.mask=Q.layers.mask|6,S.layers.mask=F.layers.mask&3,v.layers.mask=F.layers.mask&5;let Ct=Q.parent,St=F.cameras;it(F,Ct);for(let kt=0;kt<St.length;kt++)it(St[kt],Ct);St.length===2?tt(F,S,v):F.projectionMatrix.copy(S.projectionMatrix),lt(Q,F,Ct)};function lt(Q,k,ut){ut===null?Q.matrix.copy(k.matrixWorld):(Q.matrix.copy(ut.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(k.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(k.projectionMatrix),Q.projectionMatrixInverse.copy(k.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=la*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let nt=null;function mt(Q,k){if(h=k.getViewerPose(c||o),g=k,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ct=!1;ut.length!==F.cameras.length&&(F.cameras.length=0,Ct=!0);for(let U=0;U<ut.length;U++){let jt=ut[U],Lt=null;if(f!==null)Lt=f.getViewport(jt);else{let wt=u.getViewSubImage(d,jt);Lt=wt.viewport,U===0&&(t.setRenderTargetTextures(y,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(y))}let ft=P[U];ft===void 0&&(ft=new an,ft.layers.enable(U),ft.viewport=new Le,P[U]=ft),ft.matrix.fromArray(jt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(jt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),U===0&&(F.matrix.copy(ft.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ct===!0&&F.cameras.push(ft)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let U=u.getDepthInformation(ut[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(St&&St.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let U=0;U<ut.length;U++){let jt=ut[U].camera;if(jt){let Lt=p[jt];Lt||(Lt=new Kr,p[jt]=Lt);let ft=u.getCameraImage(jt);Lt.sourceTexture=ft}}}}for(let ut=0;ut<M.length;ut++){let Ct=T[ut],St=M[ut];Ct!==null&&St!==void 0&&St.update(Ct,k,c||o)}nt&&nt(Q,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),g=null}let ct=new Gf;ct.setAnimationLoop(mt),this.setAnimationLoop=function(Q){nt=Q},this.dispose=function(){}}},Ms=new Kn,h_=new ve;function u_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),x=b.envMap,y=b.envMapRotation;x&&(m.envMap.value=x,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Ms)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let M=x.program;n.updateUBOMapping(b,M);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let x=u();b.__bindingPointIndex=x;let y=i.createBuffer(),M=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let x=s[b.id],y=b.uniforms,M=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=y.length;T<A;T++){let C=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,v=C.length;S<v;S++){let P=C[S];if(f(P,T,S,M)===!0){let F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],W=0;for(let $=0;$<B.length;$++){let I=B[$],O=_(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,F+W,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):(I.toArray(P.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,x,y,M){let T=b.value,A=x+"_"+y;if(M[A]===void 0)return typeof T=="number"||typeof T=="boolean"?M[A]=T:M[A]=T.clone(),!0;{let C=M[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return M[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(b){let x=b.uniforms,y=0,M=16;for(let A=0,C=x.length;A<C;A++){let S=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,P=S.length;v<P;v++){let F=S[v],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,$=B.length;W<$;W++){let I=B[W],O=_(I),L=y%M,X=L%O.boundary,tt=L+X;y+=X,tt!==0&&M-tt<O.storage&&(y+=M-tt),F.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=O.storage}}}let T=y%M;return T>0&&(y+=M-T),b.__size=y,b.__cache={},this}function _(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){let x=b.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Pc=class{constructor(t={}){let{canvas:e=uf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,M=!1;this._outputColorSpace=Fn;let T=0,A=0,C=null,S=-1,v=null,P=new Le,F=new Le,B=null,W=new ne(0),$=0,I=e.width,O=e.height,L=1,X=null,tt=null,it=new Le(0,0,I,O),lt=new Le(0,0,I,O),nt=!1,mt=new tr,ct=!1,Q=!1,k=new ve,ut=new N,Ct=new Le,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function fe(){return C===null?L:1}let U=n;function jt(R,q){return e.getContext(R,q)}try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),U===null){let q="webgl2";if(U=jt(q,R),U===null)throw jt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Lt,ft,wt,ue,yt,$t,Ge,pe,D,E,J,w,G,Z,gt,at,bt,Dt,ot,At,Yt,zt,Et,te;function H(){Lt=new I0(U),Lt.init(),zt=new a_(U,Lt),ft=new S0(U,Lt,t,zt),wt=new r_(U,Lt),ft.reversedDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),ue=new F0(U),yt=new qx,$t=new o_(U,Lt,wt,yt,ft,zt,ue),Ge=new w0(y),pe=new C0(y),D=new zp(U),Et=new M0(U,D),E=new P0(U,D,ue,Et),J=new U0(U,E,D,ue),ot=new L0(U,ft,$t),at=new E0(yt),w=new Xx(y,Ge,pe,Lt,ft,Et,at),G=new u_(y,yt),Z=new Zx,gt=new t_(Lt),Dt=new v0(y,Ge,pe,wt,J,f,l),bt=new i_(y,J,ft),te=new f_(U,ue,ft,wt),At=new b0(U,Lt,ue),Yt=new D0(U,Lt,ue),ue.programs=w.programs,y.capabilities=ft,y.extensions=Lt,y.properties=yt,y.renderLists=Z,y.shadowMap=bt,y.state=wt,y.info=ue}H();let pt=new Eh(y,U);this.xr=pt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=Lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(R){R!==void 0&&(L=R,this.setSize(I,O,!1))},this.getSize=function(R){return R.set(I,O)},this.setSize=function(R,q,j=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,O=q,e.width=Math.floor(R*L),e.height=Math.floor(q*L),j===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(I*L,O*L).floor()},this.setDrawingBufferSize=function(R,q,j){I=R,O=q,L=j,e.width=Math.floor(R*j),e.height=Math.floor(q*j),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,q,j,K){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,q,j,K),wt.viewport(P.copy(it).multiplyScalar(L).round())},this.getScissor=function(R){return R.copy(lt)},this.setScissor=function(R,q,j,K){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,q,j,K),wt.scissor(F.copy(lt).multiplyScalar(L).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(R){wt.setScissorTest(nt=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){tt=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,j=!0){let K=0;if(R){let Y=!1;if(C!==null){let dt=C.texture.format;Y=dt===ja||dt===Qa||dt===$a}if(Y){let dt=C.texture.type,Tt=dt===ni||dt===ts||dt===or||dt===cr||dt===Ya||dt===Za,Ut=Dt.getClearColor(),Pt=Dt.getClearAlpha(),qt=Ut.r,Zt=Ut.g,Ht=Ut.b;Tt?(g[0]=qt,g[1]=Zt,g[2]=Ht,g[3]=Pt,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=qt,_[1]=Zt,_[2]=Ht,_[3]=Pt,U.clearBufferiv(U.COLOR,0,_))}else K|=U.COLOR_BUFFER_BIT}q&&(K|=U.DEPTH_BUFFER_BIT),j&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Dt.dispose(),Z.dispose(),gt.dispose(),yt.dispose(),Ge.dispose(),pe.dispose(),J.dispose(),Et.dispose(),te.dispose(),w.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",ci),pt.removeEventListener("sessionend",qh),is.stop()};function _t(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=ue.autoReset,q=bt.enabled,j=bt.autoUpdate,K=bt.needsUpdate,Y=bt.type;H(),ue.autoReset=R,bt.enabled=q,bt.autoUpdate=j,bt.needsUpdate=K,bt.type=Y}function ht(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){let q=R.target;q.removeEventListener("dispose",rt),Nt(q)}function Nt(R){Qt(R),yt.remove(R)}function Qt(R){let q=yt.get(R).programs;q!==void 0&&(q.forEach(function(j){w.releaseProgram(j)}),R.isShaderMaterial&&w.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,j,K,Y,dt){q===null&&(q=St);let Tt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ut=bd(R,q,j,K,Y);wt.setMaterial(K,Tt);let Pt=j.index,qt=1;if(K.wireframe===!0){if(Pt=E.getWireframeAttribute(j),Pt===void 0)return;qt=2}let Zt=j.drawRange,Ht=j.attributes.position,ce=Zt.start*qt,Me=(Zt.start+Zt.count)*qt;dt!==null&&(ce=Math.max(ce,dt.start*qt),Me=Math.min(Me,(dt.start+dt.count)*qt)),Pt!==null?(ce=Math.max(ce,0),Me=Math.min(Me,Pt.count)):Ht!=null&&(ce=Math.max(ce,0),Me=Math.min(Me,Ht.count));let Ne=Me-ce;if(Ne<0||Ne===1/0)return;Et.setup(Y,K,Ut,j,Pt);let Ae,be=At;if(Pt!==null&&(Ae=D.get(Pt),be=Yt,be.setIndex(Ae)),Y.isMesh)K.wireframe===!0?(wt.setLineWidth(K.wireframeLinewidth*fe()),be.setMode(U.LINES)):be.setMode(U.TRIANGLES);else if(Y.isLine){let Vt=K.linewidth;Vt===void 0&&(Vt=1),wt.setLineWidth(Vt*fe()),Y.isLineSegments?be.setMode(U.LINES):Y.isLineLoop?be.setMode(U.LINE_LOOP):be.setMode(U.LINE_STRIP)}else Y.isPoints?be.setMode(U.POINTS):Y.isSprite&&be.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Vt=Y._multiDrawStarts,Pe=Y._multiDrawCounts,me=Y._multiDrawCount,Cn=Pt?D.get(Pt).bytesPerElement:1,Ls=yt.get(K).currentProgram.getUniforms();for(let In=0;In<me;In++)Ls.setValue(U,"_gl_DrawID",In),be.render(Vt[In]/Cn,Pe[In])}else if(Y.isInstancedMesh)be.renderInstances(ce,Ne,Y.count);else if(j.isInstancedBufferGeometry){let Vt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Pe=Math.min(j.instanceCount,Vt);be.renderInstances(ce,Ne,Pe)}else be.render(ce,Ne)};function Ee(R,q,j){R.transparent===!0&&R.side===Tn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,Lo(R,q,j),R.side=Ai,R.needsUpdate=!0,Lo(R,q,j),R.side=Tn):Lo(R,q,j)}this.compile=function(R,q,j=null){j===null&&(j=R),p=gt.get(j),p.init(q),x.push(p),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==j&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();let K=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let dt=Y.material;if(dt)if(Array.isArray(dt))for(let Tt=0;Tt<dt.length;Tt++){let Ut=dt[Tt];Ee(Ut,j,Y),K.add(Ut)}else Ee(dt,j,Y),K.add(dt)}),p=x.pop(),K},this.compileAsync=function(R,q,j=null){let K=this.compile(R,q,j);return new Promise(Y=>{function dt(){if(K.forEach(function(Tt){yt.get(Tt).currentProgram.isReady()&&K.delete(Tt)}),K.size===0){Y(R);return}setTimeout(dt,10)}Lt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let xe=null;function vi(R){xe&&xe(R)}function ci(){is.stop()}function qh(){is.start()}let is=new Gf;is.setAnimationLoop(vi),typeof self!="undefined"&&is.setContext(self),this.setAnimationLoop=function(R){xe=R,pt.setAnimationLoop(R),R===null?is.stop():is.start()},pt.addEventListener("sessionstart",ci),pt.addEventListener("sessionend",qh),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(q),q=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(y,R,q,C),p=gt.get(R,x.length),p.init(q),x.push(p),k.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),mt.setFromProjectionMatrix(k,Qn,q.reversedDepth),Q=this.localClippingEnabled,ct=at.init(this.clippingPlanes,Q),m=Z.get(R,b.length),m.init(),b.push(m),pt.enabled===!0&&pt.isPresenting===!0){let dt=y.xr.getDepthSensingMesh();dt!==null&&tl(dt,q,-1/0,y.sortObjects)}tl(R,q,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(X,tt),kt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,kt&&Dt.addToRenderList(m,R),this.info.render.frame++,ct===!0&&at.beginShadows();let j=p.state.shadowsArray;bt.render(j,R,q),ct===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,Y=m.transmissive;if(p.setupLights(),q.isArrayCamera){let dt=q.cameras;if(Y.length>0)for(let Tt=0,Ut=dt.length;Tt<Ut;Tt++){let Pt=dt[Tt];Zh(K,Y,R,Pt)}kt&&Dt.render(R);for(let Tt=0,Ut=dt.length;Tt<Ut;Tt++){let Pt=dt[Tt];Yh(m,R,Pt,Pt.viewport)}}else Y.length>0&&Zh(K,Y,R,q),kt&&Dt.render(R),Yh(m,R,q);C!==null&&A===0&&($t.updateMultisampleRenderTarget(C),$t.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(y,R,q),Et.resetDefaultState(),S=-1,v=null,x.pop(),x.length>0?(p=x[x.length-1],ct===!0&&at.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function tl(R,q,j,K){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||mt.intersectsSprite(R)){K&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(k);let Tt=J.update(R),Ut=R.material;Ut.visible&&m.push(R,Tt,Ut,j,Ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||mt.intersectsObject(R))){let Tt=J.update(R),Ut=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ct.copy(Tt.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(k)),Array.isArray(Ut)){let Pt=Tt.groups;for(let qt=0,Zt=Pt.length;qt<Zt;qt++){let Ht=Pt[qt],ce=Ut[Ht.materialIndex];ce&&ce.visible&&m.push(R,Tt,ce,j,Ct.z,Ht)}}else Ut.visible&&m.push(R,Tt,Ut,j,Ct.z,null)}}let dt=R.children;for(let Tt=0,Ut=dt.length;Tt<Ut;Tt++)tl(dt[Tt],q,j,K)}function Yh(R,q,j,K){let Y=R.opaque,dt=R.transmissive,Tt=R.transparent;p.setupLightsView(j),ct===!0&&at.setGlobalState(y.clippingPlanes,j),K&&wt.viewport(P.copy(K)),Y.length>0&&Fo(Y,q,j),dt.length>0&&Fo(dt,q,j),Tt.length>0&&Fo(Tt,q,j),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Zh(R,q,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new li(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?ar:ni,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let dt=p.state.transmissionRenderTarget[K.id],Tt=K.viewport||P;dt.setSize(Tt.z*y.transmissionResolutionScale,Tt.w*y.transmissionResolutionScale);let Ut=y.getRenderTarget(),Pt=y.getActiveCubeFace(),qt=y.getActiveMipmapLevel();y.setRenderTarget(dt),y.getClearColor(W),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),kt&&Dt.render(j);let Zt=y.toneMapping;y.toneMapping=Pi;let Ht=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),ct===!0&&at.setGlobalState(y.clippingPlanes,K),Fo(R,j,K),$t.updateMultisampleRenderTarget(dt),$t.updateRenderTargetMipmap(dt),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Me=0,Ne=q.length;Me<Ne;Me++){let Ae=q[Me],be=Ae.object,Vt=Ae.geometry,Pe=Ae.material,me=Ae.group;if(Pe.side===Tn&&be.layers.test(K.layers)){let Cn=Pe.side;Pe.side=fn,Pe.needsUpdate=!0,Jh(be,j,K,Vt,Pe,me),Pe.side=Cn,Pe.needsUpdate=!0,ce=!0}}ce===!0&&($t.updateMultisampleRenderTarget(dt),$t.updateRenderTargetMipmap(dt))}y.setRenderTarget(Ut,Pt,qt),y.setClearColor(W,$),Ht!==void 0&&(K.viewport=Ht),y.toneMapping=Zt}function Fo(R,q,j){let K=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,dt=R.length;Y<dt;Y++){let Tt=R[Y],Ut=Tt.object,Pt=Tt.geometry,qt=Tt.group,Zt=Tt.material;Zt.allowOverride===!0&&K!==null&&(Zt=K),Ut.layers.test(j.layers)&&Jh(Ut,q,j,Pt,Zt,qt)}}function Jh(R,q,j,K,Y,dt){R.onBeforeRender(y,q,j,K,Y,dt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(y,q,j,K,R,dt),Y.transparent===!0&&Y.side===Tn&&Y.forceSinglePass===!1?(Y.side=fn,Y.needsUpdate=!0,y.renderBufferDirect(j,q,K,Y,R,dt),Y.side=Ai,Y.needsUpdate=!0,y.renderBufferDirect(j,q,K,Y,R,dt),Y.side=Tn):y.renderBufferDirect(j,q,K,Y,R,dt),R.onAfterRender(y,q,j,K,Y,dt)}function Lo(R,q,j){q.isScene!==!0&&(q=St);let K=yt.get(R),Y=p.state.lights,dt=p.state.shadowsArray,Tt=Y.state.version,Ut=w.getParameters(R,Y.state,dt,q,j),Pt=w.getProgramCacheKey(Ut),qt=K.programs;K.environment=R.isMeshStandardMaterial?q.environment:null,K.fog=q.fog,K.envMap=(R.isMeshStandardMaterial?pe:Ge).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",rt),qt=new Map,K.programs=qt);let Zt=qt.get(Pt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===Tt)return Qh(R,Ut),Zt}else Ut.uniforms=w.getUniforms(R),R.onBeforeCompile(Ut,y),Zt=w.acquireProgram(Ut,Pt),qt.set(Pt,Zt),K.uniforms=Ut.uniforms;let Ht=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=at.uniform),Qh(R,Ut),K.needsLights=Ed(R),K.lightsStateVersion=Tt,K.needsLights&&(Ht.ambientLightColor.value=Y.state.ambient,Ht.lightProbe.value=Y.state.probe,Ht.directionalLights.value=Y.state.directional,Ht.directionalLightShadows.value=Y.state.directionalShadow,Ht.spotLights.value=Y.state.spot,Ht.spotLightShadows.value=Y.state.spotShadow,Ht.rectAreaLights.value=Y.state.rectArea,Ht.ltc_1.value=Y.state.rectAreaLTC1,Ht.ltc_2.value=Y.state.rectAreaLTC2,Ht.pointLights.value=Y.state.point,Ht.pointLightShadows.value=Y.state.pointShadow,Ht.hemisphereLights.value=Y.state.hemi,Ht.directionalShadowMap.value=Y.state.directionalShadowMap,Ht.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ht.spotShadowMap.value=Y.state.spotShadowMap,Ht.spotLightMatrix.value=Y.state.spotLightMatrix,Ht.spotLightMap.value=Y.state.spotLightMap,Ht.pointShadowMap.value=Y.state.pointShadowMap,Ht.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Zt,K.uniformsList=null,Zt}function $h(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=fr.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Qh(R,q){let j=yt.get(R);j.outputColorSpace=q.outputColorSpace,j.batching=q.batching,j.batchingColor=q.batchingColor,j.instancing=q.instancing,j.instancingColor=q.instancingColor,j.instancingMorph=q.instancingMorph,j.skinning=q.skinning,j.morphTargets=q.morphTargets,j.morphNormals=q.morphNormals,j.morphColors=q.morphColors,j.morphTargetsCount=q.morphTargetsCount,j.numClippingPlanes=q.numClippingPlanes,j.numIntersection=q.numClipIntersection,j.vertexAlphas=q.vertexAlphas,j.vertexTangents=q.vertexTangents,j.toneMapping=q.toneMapping}function bd(R,q,j,K,Y){q.isScene!==!0&&(q=St),$t.resetTextureUnits();let dt=q.fog,Tt=K.isMeshStandardMaterial?q.environment:null,Ut=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fs,Pt=(K.isMeshStandardMaterial?pe:Ge).get(K.envMap||Tt),qt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Zt=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ht=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,Me=!!j.morphAttributes.color,Ne=Pi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ne=y.toneMapping);let Ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,be=Ae!==void 0?Ae.length:0,Vt=yt.get(K),Pe=p.state.lights;if(ct===!0&&(Q===!0||R!==v)){let un=R===v&&K.id===S;at.setState(K,R,un)}let me=!1;K.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Pe.state.version||Vt.outputColorSpace!==Ut||Y.isBatchedMesh&&Vt.batching===!1||!Y.isBatchedMesh&&Vt.batching===!0||Y.isBatchedMesh&&Vt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Vt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Vt.instancing===!1||!Y.isInstancedMesh&&Vt.instancing===!0||Y.isSkinnedMesh&&Vt.skinning===!1||!Y.isSkinnedMesh&&Vt.skinning===!0||Y.isInstancedMesh&&Vt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Vt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Vt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Vt.instancingMorph===!1&&Y.morphTexture!==null||Vt.envMap!==Pt||K.fog===!0&&Vt.fog!==dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==at.numPlanes||Vt.numIntersection!==at.numIntersection)||Vt.vertexAlphas!==qt||Vt.vertexTangents!==Zt||Vt.morphTargets!==Ht||Vt.morphNormals!==ce||Vt.morphColors!==Me||Vt.toneMapping!==Ne||Vt.morphTargetsCount!==be)&&(me=!0):(me=!0,Vt.__version=K.version);let Cn=Vt.currentProgram;me===!0&&(Cn=Lo(K,q,Y));let Ls=!1,In=!1,Rr=!1,De=Cn.getUniforms(),Hn=Vt.uniforms;if(wt.useProgram(Cn.program)&&(Ls=!0,In=!0,Rr=!0),K.id!==S&&(S=K.id,In=!0),Ls||v!==R){wt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),De.setValue(U,"projectionMatrix",R.projectionMatrix),De.setValue(U,"viewMatrix",R.matrixWorldInverse);let bn=De.map.cameraPosition;bn!==void 0&&bn.setValue(U,ut.setFromMatrixPosition(R.matrixWorld)),ft.logarithmicDepthBuffer&&De.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&De.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),v!==R&&(v=R,In=!0,Rr=!0)}if(Y.isSkinnedMesh){De.setOptional(U,Y,"bindMatrix"),De.setOptional(U,Y,"bindMatrixInverse");let un=Y.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),De.setValue(U,"boneTexture",un.boneTexture,$t))}Y.isBatchedMesh&&(De.setOptional(U,Y,"batchingTexture"),De.setValue(U,"batchingTexture",Y._matricesTexture,$t),De.setOptional(U,Y,"batchingIdTexture"),De.setValue(U,"batchingIdTexture",Y._indirectTexture,$t),De.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&De.setValue(U,"batchingColorTexture",Y._colorsTexture,$t));let Vn=j.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ot.update(Y,j,Cn),(In||Vt.receiveShadow!==Y.receiveShadow)&&(Vt.receiveShadow=Y.receiveShadow,De.setValue(U,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Hn.envMap.value=Pt,Hn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&q.environment!==null&&(Hn.envMapIntensity.value=q.environmentIntensity),In&&(De.setValue(U,"toneMappingExposure",y.toneMappingExposure),Vt.needsLights&&Sd(Hn,Rr),dt&&K.fog===!0&&G.refreshFogUniforms(Hn,dt),G.refreshMaterialUniforms(Hn,K,L,O,p.state.transmissionRenderTarget[R.id]),fr.upload(U,$h(Vt),Hn,$t)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(fr.upload(U,$h(Vt),Hn,$t),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&De.setValue(U,"center",Y.center),De.setValue(U,"modelViewMatrix",Y.modelViewMatrix),De.setValue(U,"normalMatrix",Y.normalMatrix),De.setValue(U,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let un=K.uniformsGroups;for(let bn=0,el=un.length;bn<el;bn++){let ss=un[bn];te.update(ss,Cn),te.bind(ss,Cn)}}return Cn}function Sd(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ed(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,j){let K=yt.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),yt.get(R.texture).__webglTexture=q,yt.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:j,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){let j=yt.get(R);j.__webglFramebuffer=q,j.__useDefaultFramebuffer=q===void 0};let wd=U.createFramebuffer();this.setRenderTarget=function(R,q=0,j=0){C=R,T=q,A=j;let K=!0,Y=null,dt=!1,Tt=!1;if(R){let Pt=yt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Pt.__webglFramebuffer===void 0)$t.setupRenderTarget(R);else if(Pt.__hasExternalTextures)$t.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ht=R.depthTexture;if(Pt.__boundDepthTexture!==Ht){if(Ht!==null&&yt.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(R)}}let qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Tt=!0);let Zt=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[q])?Y=Zt[q][j]:Y=Zt[q],dt=!0):R.samples>0&&$t.useMultisampledRTT(R)===!1?Y=yt.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[j]:Y=Zt,P.copy(R.viewport),F.copy(R.scissor),B=R.scissorTest}else P.copy(it).multiplyScalar(L).floor(),F.copy(lt).multiplyScalar(L).floor(),B=nt;if(j!==0&&(Y=wd),wt.bindFramebuffer(U.FRAMEBUFFER,Y)&&K&&wt.drawBuffers(R,Y),wt.viewport(P),wt.scissor(F),wt.setScissorTest(B),dt){let Pt=yt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,j)}else if(Tt){let Pt=q;for(let qt=0;qt<R.textures.length;qt++){let Zt=yt.get(R.textures[qt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+qt,Zt.__webglTexture,j,Pt)}}else if(R!==null&&j!==0){let Pt=yt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(R,q,j,K,Y,dt,Tt,Ut=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){wt.bindFramebuffer(U.FRAMEBUFFER,Pt);try{let qt=R.textures[Ut],Zt=qt.format,Ht=qt.type;if(!ft.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-K&&j>=0&&j<=R.height-Y&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(q,j,K,Y,zt.convert(Zt),zt.convert(Ht),dt))}finally{let qt=C!==null?yt.get(C).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,q,j,K,Y,dt,Tt,Ut=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(q>=0&&q<=R.width-K&&j>=0&&j<=R.height-Y){wt.bindFramebuffer(U.FRAMEBUFFER,Pt);let qt=R.textures[Ut],Zt=qt.format,Ht=qt.type;if(!ft.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(q,j,K,Y,zt.convert(Zt),zt.convert(Ht),0);let Me=C!==null?yt.get(C).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Me);let Ne=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ff(U,Ne,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.deleteBuffer(ce),U.deleteSync(Ne),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,j=0){let K=Math.pow(2,-j),Y=Math.floor(R.image.width*K),dt=Math.floor(R.image.height*K),Tt=q!==null?q.x:0,Ut=q!==null?q.y:0;$t.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Tt,Ut,Y,dt),wt.unbindTexture()};let Td=U.createFramebuffer(),Ad=U.createFramebuffer();this.copyTextureToTexture=function(R,q,j=null,K=null,Y=0,dt=null){dt===null&&(Y!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=Y,Y=0):dt=0);let Tt,Ut,Pt,qt,Zt,Ht,ce,Me,Ne,Ae=R.isCompressedTexture?R.mipmaps[dt]:R.image;if(j!==null)Tt=j.max.x-j.min.x,Ut=j.max.y-j.min.y,Pt=j.isBox3?j.max.z-j.min.z:1,qt=j.min.x,Zt=j.min.y,Ht=j.isBox3?j.min.z:0;else{let Vn=Math.pow(2,-Y);Tt=Math.floor(Ae.width*Vn),Ut=Math.floor(Ae.height*Vn),R.isDataArrayTexture?Pt=Ae.depth:R.isData3DTexture?Pt=Math.floor(Ae.depth*Vn):Pt=1,qt=0,Zt=0,Ht=0}K!==null?(ce=K.x,Me=K.y,Ne=K.z):(ce=0,Me=0,Ne=0);let be=zt.convert(q.format),Vt=zt.convert(q.type),Pe;q.isData3DTexture?($t.setTexture3D(q,0),Pe=U.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?($t.setTexture2DArray(q,0),Pe=U.TEXTURE_2D_ARRAY):($t.setTexture2D(q,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment);let me=U.getParameter(U.UNPACK_ROW_LENGTH),Cn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ls=U.getParameter(U.UNPACK_SKIP_PIXELS),In=U.getParameter(U.UNPACK_SKIP_ROWS),Rr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ht);let De=R.isDataArrayTexture||R.isData3DTexture,Hn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){let Vn=yt.get(R),un=yt.get(q),bn=yt.get(Vn.__renderTarget),el=yt.get(un.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,bn.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,el.__webglFramebuffer);for(let ss=0;ss<Pt;ss++)De&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(R).__webglTexture,Y,Ht+ss),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.get(q).__webglTexture,dt,Ne+ss)),U.blitFramebuffer(qt,Zt,Tt,Ut,ce,Me,Tt,Ut,U.DEPTH_BUFFER_BIT,U.NEAREST);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||yt.has(R)){let Vn=yt.get(R),un=yt.get(q);wt.bindFramebuffer(U.READ_FRAMEBUFFER,Td),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ad);for(let bn=0;bn<Pt;bn++)De?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vn.__webglTexture,Y,Ht+bn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vn.__webglTexture,Y),Hn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,un.__webglTexture,dt,Ne+bn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,un.__webglTexture,dt),Y!==0?U.blitFramebuffer(qt,Zt,Tt,Ut,ce,Me,Tt,Ut,U.COLOR_BUFFER_BIT,U.NEAREST):Hn?U.copyTexSubImage3D(Pe,dt,ce,Me,Ne+bn,qt,Zt,Tt,Ut):U.copyTexSubImage2D(Pe,dt,ce,Me,qt,Zt,Tt,Ut);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Hn?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Pe,dt,ce,Me,Ne,Tt,Ut,Pt,be,Vt,Ae.data):q.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,dt,ce,Me,Ne,Tt,Ut,Pt,be,Ae.data):U.texSubImage3D(Pe,dt,ce,Me,Ne,Tt,Ut,Pt,be,Vt,Ae):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,ce,Me,Tt,Ut,be,Vt,Ae.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,ce,Me,Ae.width,Ae.height,be,Ae.data):U.texSubImage2D(U.TEXTURE_2D,dt,ce,Me,Tt,Ut,be,Vt,Ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,me),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Cn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ls),U.pixelStorei(U.UNPACK_SKIP_ROWS,In),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Rr),dt===0&&q.generateMipmaps&&U.generateMipmap(Pe),wt.unbindTexture()},this.initRenderTarget=function(R){yt.get(R).__webglFramebuffer===void 0&&$t.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?$t.setTextureCube(R,0):R.isData3DTexture?$t.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?$t.setTexture2DArray(R,0):$t.setTexture2D(R,0),wt.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,wt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function Zf(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,x=a.length;b<x;b++){let y=a[b],M=i.attributes[y];l[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let T=i.morphAttributes[y];T&&(c[y]||(c[y]=[]),T.forEach((A,C)=>{let S=new A.array.constructor(A.count*A.itemSize);c[y][C]=new A.constructor(S,A.itemSize,A.normalized)}))}let f=t*.5,g=Math.log10(1/t),_=Math.pow(10,g),m=f*_;for(let b=0;b<r;b++){let x=n?n.getX(b):b,y="";for(let M=0,T=a.length;M<T;M++){let A=a[M],C=i.getAttribute(A),S=C.itemSize;for(let v=0;v<S;v++)y+=`${~~(C[u[v]](x)*_+m)},`}if(y in e)h.push(e[y]);else{for(let M=0,T=a.length;M<T;M++){let A=a[M],C=i.getAttribute(A),S=i.morphAttributes[A],v=C.itemSize,P=l[A],F=c[A];for(let B=0;B<v;B++){let W=u[B],$=d[B];if(P[$](o,C[W](x)),S)for(let I=0,O=S.length;I<O;I++)F[I][$](o,S[I][W](x))}}e[y]=o,h.push(o),o++}}let p=i.clone();for(let b in i.attributes){let x=l[b];if(p.setAttribute(b,new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),b in c)for(let y=0;y<c[b].length;y++){let M=c[b][y];p.morphAttributes[b][y]=new M.constructor(M.array.slice(0,o*M.itemSize),M.itemSize,M.normalized)}}return p.setIndex(h),p}var Th=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4),Jf=new Map;function d_(i){if(Array.isArray(i))return i;let t=Jf.get(i);if(t)return t;let e=parseInt(i.slice(1),16);return t=[Th((e>>16&255)/255),Th((e>>8&255)/255),Th((e&255)/255)],Jf.set(i,t),t}var di=class{constructor(){this.L={}}buf(t){return this.L[t]||(this.L[t]={p:[],n:[],c:[]})}tri(t,e,n,s,r){let o=this.buf(t),a=d_(e),l=s[0]-n[0],c=s[1]-n[1],h=s[2]-n[2],u=r[0]-n[0],d=r[1]-n[1],f=r[2]-n[2],g=c*f-h*d,_=h*u-l*f,m=l*d-c*u,p=Math.hypot(g,_,m)||1;g/=p,_/=p,m/=p,o.p.push(n[0],n[1],n[2],s[0],s[1],s[2],r[0],r[1],r[2]),o.n.push(g,_,m,g,_,m,g,_,m),o.c.push(a[0],a[1],a[2],a[0],a[1],a[2],a[0],a[1],a[2])}quad(t,e,n,s,r,o){this.tri(t,e,n,s,r),this.tri(t,e,n,r,o)}box(t,e,n,s,r,o,a,l,c=""){if(n>o&&([n,o]=[o,n]),s>a&&([s,a]=[a,s]),r>l&&([r,l]=[l,r]),o-n<1e-4||a-s<1e-4||l-r<1e-4)return;let h=(u,d,f)=>[u,d,f];c.includes("t")||this.quad(t,e,h(n,a,l),h(o,a,l),h(o,a,r),h(n,a,r)),c.includes("b")||this.quad(t,e,h(n,s,r),h(o,s,r),h(o,s,l),h(n,s,l)),this.quad(t,e,h(n,s,l),h(o,s,l),h(o,a,l),h(n,a,l)),this.quad(t,e,h(o,s,r),h(n,s,r),h(n,a,r),h(o,a,r)),this.quad(t,e,h(o,s,l),h(o,s,r),h(o,a,r),h(o,a,l)),this.quad(t,e,h(n,s,r),h(n,s,l),h(n,a,l),h(n,a,r))}obox(t,e,n,s,r,o){let a=(c,h,u)=>[n[0]+c*s[0]+h*r[0]+u*o[0],n[1]+c*s[1]+h*r[1]+u*o[1],n[2]+c*s[2]+h*r[2]+u*o[2]],l=(c,h,u,d)=>this.quad(t,e,c,h,u,d);l(a(-1,1,1),a(1,1,1),a(1,1,-1),a(-1,1,-1)),l(a(-1,-1,-1),a(1,-1,-1),a(1,-1,1),a(-1,-1,1)),l(a(-1,-1,1),a(1,-1,1),a(1,1,1),a(-1,1,1)),l(a(1,-1,-1),a(-1,-1,-1),a(-1,1,-1),a(1,1,-1)),l(a(1,-1,1),a(1,-1,-1),a(1,1,-1),a(1,1,1)),l(a(-1,-1,-1),a(-1,-1,1),a(-1,1,1),a(-1,1,-1))}ybox(t,e,n,s,r,o,a,l,c=0){let h=Math.cos(c),u=Math.sin(c);this.obox(t,e,[n,s,r],[h*o/2,0,u*o/2],[0,a/2,0],[-u*l/2,0,h*l/2])}beam(t,e,n,s,r,o=r){let a=[s[0]-n[0],s[1]-n[1],s[2]-n[2]],l=Math.hypot(...a)||1,c=a.map(g=>g/l),h=Math.abs(c[1])<.95?[c[2],0,-c[0]]:[1,0,0],u=Math.hypot(...h);h=h.map(g=>g/u);let d=[c[1]*h[2]-c[2]*h[1],c[2]*h[0]-c[0]*h[2],c[0]*h[1]-c[1]*h[0]],f=[(n[0]+s[0])/2,(n[1]+s[1])/2,(n[2]+s[2])/2];this.obox(t,e,f,h.map(g=>g*r/2),d.map(g=>g*o/2),c.map(g=>g*l/2))}prism(t,e,n,s,r,o={}){var d,f;let a=n.length,l=0;for(let g=0;g<a;g++){let _=n[g],m=n[(g+1)%a];l+=_[0]*m[1]-m[0]*_[1]}let c=l>0?n:[...n].reverse(),h=(d=o.top)!=null?d:e,u=(f=o.side)!=null?f:e;if(o.top!==!1)for(let g=1;g<a-1;g++)this.tri(t,h,[c[0][0],r,c[0][1]],[c[g+1][0],r,c[g+1][1]],[c[g][0],r,c[g][1]]);if(o.bottom!==!1)for(let g=1;g<a-1;g++)this.tri(t,u,[c[0][0],s,c[0][1]],[c[g][0],s,c[g][1]],[c[g+1][0],s,c[g+1][1]]);if(o.sides!==!1)for(let g=0;g<a;g++){let _=c[g],m=c[(g+1)%a];this.quad(t,u,[m[0],s,m[1]],[_[0],s,_[1]],[_[0],r,_[1]],[m[0],r,m[1]])}}cyl(t,e,n,s,r,o,a,l=8,c=Math.PI/8,h={}){let u=[];for(let d=0;d<l;d++){let f=c+d*Math.PI*2/l;u.push([n+Math.cos(f)*a,s+Math.sin(f)*a])}this.prism(t,e,u,r,o,h)}frustum(t,e,n,s,r,o,a,l,c=8,h=Math.PI/8){for(let u=0;u<c;u++){let d=h+u*Math.PI*2/c,f=h+(u+1)*Math.PI*2/c,g=[n+Math.cos(d)*a,r,s+Math.sin(d)*a],_=[n+Math.cos(f)*a,r,s+Math.sin(f)*a],m=[n+Math.cos(d)*l,o,s+Math.sin(d)*l],p=[n+Math.cos(f)*l,o,s+Math.sin(f)*l];this.quad(t,e,g,m,p,_),l>.001&&this.tri(t,e,[n,o,s],p,m),this.tri(t,e,[n,r,s],g,_)}}wall(t,e,n,s,r,o,a,l=[],c={}){let h=s[0]-n[0],u=s[1]-n[1],d=Math.hypot(h,u);if(d<.001)return null;let f=h/d,g=u/d,_=-g,m=f,p=o-r,b=(A,C,S=0)=>[n[0]+f*A+_*S,r+C,n[1]+g*A+m*S],x=new Set([0,d]),y=l.map(A=>{var C,S;return{s0:Math.max(0,A.a),s1:Math.min(d,A.a+A.w),y0:(C=A.y0)!=null?C:0,y1:Math.min(p,(S=A.y1)!=null?S:p)}}).filter(A=>A.s1>A.s0+.001);for(let A of y)x.add(A.s0),x.add(A.s1);let M=[...x].sort((A,C)=>A-C),T=Math.atan2(g,f);for(let A=0;A<M.length-1;A++){let C=M[A],S=M[A+1];if(S-C<.001)continue;let v=(C+S)/2,P=y.filter(W=>W.s0<=v&&W.s1>=v).sort((W,$)=>W.y0-$.y0),F=0,B=[];for(let W of P)W.y0>F+.001&&B.push([F,W.y0]),F=Math.max(F,W.y1);F<p-.001&&B.push([F,p]);for(let[W,$]of B){let I=b(v,(W+$)/2);this.ybox(t,e,I[0],I[1],I[2],S-C,$-W,a,T)}}return{at:b,L:d,ux:f,uz:g,nx:_,nz:m,yaw:T}}rail(t,e,n,s,r=1.05,o=.5,a={}){var h,u;let l=(h=a.w)!=null?h:.07,c=(u=a.top)!=null?u:.12;for(let d=0;d<n.length-1;d++){let f=n[d],g=n[d+1],_=Math.hypot(g[0]-f[0],g[1]-f[1]);if(_<.05)continue;this.beam(t,e,[f[0],s+r,f[1]],[g[0],s+r,g[1]],c,.08),this.beam(t,e,[f[0],s+.12,f[1]],[g[0],s+.12,g[1]],l,l);let m=Math.max(1,Math.round(_/o));for(let p=0;p<=m;p++){if(p===0&&d>0)continue;let b=f[0]+(g[0]-f[0])*p/m,x=f[1]+(g[1]-f[1])*p/m,y=p===0||p===m;this.box(t,e,b-(y?.09:l/2),s,x-(y?.09:l/2),b+(y?.09:l/2),s+r,x+(y?.09:l/2))}}}stairs(t,e,n,s,r,o,a,l,c,h){let u=Math.cos(o),d=Math.sin(o);for(let f=0;f<a;f++){let g=c*(f+.5),_=n+u*g,m=s+d*g,p=r+l*(f+1);this.ybox(t,e,_,(r+p)/2,m,c,p-r,h,o)}}slab(t,e,n,s,r,o,a={}){var p,b;let l=x=>new Bt(x[0],x[1]),c=x=>{let y=0;for(let M=0;M<x.length;M++){let T=x[M],A=x[(M+1)%x.length];y+=T[0]*A[1]-A[0]*T[1]}return y},h=c(n)>0?n:[...n].reverse(),u=s.map(x=>c(x)>0?[...x].reverse():x),d=[...h,...u.flat()],f=co.triangulateShape(h.map(l),u.map(x=>x.map(l))),g=(p=a.top)!=null?p:e,_=(b=a.side)!=null?b:e;for(let[x,y,M]of f){let T=d[x],A=d[y],C=d[M],S=(C[0]-T[0])*(A[1]-T[1])-(A[0]-T[0])*(C[1]-T[1]),[v,P]=S>0?[A,C]:[C,A];a.top!==!1&&this.tri(t,g,[T[0],o,T[1]],[v[0],o,v[1]],[P[0],o,P[1]]),a.bottom!==!1&&this.tri(t,_,[T[0],r,T[1]],[P[0],r,P[1]],[v[0],r,v[1]])}let m=x=>{for(let y=0;y<x.length;y++){let M=x[y],T=x[(y+1)%x.length];this.quad(t,_,[T[0],r,T[1]],[M[0],r,M[1]],[M[0],o,M[1]],[T[0],o,T[1]])}};if(a.sides!==!1){m(h);for(let x of u)m(x)}}plate(t,e,n,s=.3){let r=0;for(let l=0;l<4;l++){let c=n[l],h=n[(l+1)%4];r+=c[0]*h[2]-h[0]*c[2]}let o=r>0?[...n].reverse():n,a=o.map(l=>[l[0],l[1]-s,l[2]]);this.quad(t,e,o[0],o[1],o[2],o[3]),this.quad(t,e,a[3],a[2],a[1],a[0]);for(let l=0;l<4;l++){let c=(l+1)%4;this.quad(t,e,a[l],a[c],o[c],o[l])}}out(){let t={};for(let[e,n]of Object.entries(this.L))t[e]={p:new Float32Array(n.p),n:new Float32Array(n.n),c:new Float32Array(n.c)};return t}};var et={F1:0,F2:4.2,F3:8,F4:11.8,TOP:15.6,EAVE:16.4,RIDGE:19.6},pi=.5,st=.5,Gt=.25,he={x0:-24,x1:24,z0:-25,z1:8},It={x0:-24,x1:16,z0:-25,z1:-3},pr={w:4,y:et.F4},Ce={z0:-3,z1:4.5},dn={x0:-17,x1:16,z0:4.5,z1:8};var pn={x0:-24,x1:-19.5,z0:-3,z1:4.5},mr=1.3,Be={x0:-19.2,x1:-15.8,z0:-3,z1:.2},gr={x0:-19.5,x1:-14,z0:.2,z1:4.5},mn={x0:-24,x1:-17,z0:4.5,z1:8},si=[{id:"sw1",x0:-14,x1:-4,t:"\u5C0F\u4ED3\u5E93"},{id:"sw2",x0:-4,x1:3,t:"\u5C0F\u4ED3\u5E93\uFF08\u5B58\u653E\u70B8\u5F39\uFF09"},{id:"of1",x0:3,x1:8,t:"\u529E\u516C\u5BA4"},{id:"of2",x0:8,x1:12.5,t:"\u529E\u516C\u5BA4"}],xr={x0:12.5,x1:16},He={x0:16,x1:24},Ie={z0:1.95,z1:8},_r={z0:-9,z1:2},Oe={x0:16.35,x1:18,z0:-1.4,z1:-8.4},$f={z0:-25,z1:-8.4},je={x0:-3,x1:3,z1:11.2},tn=.9,Ao={x:14.25,w:1.9},Se={x:-.2,w:2.2,y0:1.3,y1:2.3},Fi={x0:-1.7,x1:2.875,h:3.5},ws={z:-10.5,w:2,h:2.3},Nn={z:-12.4,w:1.8,y0:.9,y1:2.3},Ro={z:3.5,w:1.8},Qf={x:-21.5,w:1.6},ae={x0:3.4,x1:-3.6,z0:-20.3,z1:-18.8,land:-7},An={x0:-24,x1:-6,z0:-3,z1:8},en={z:6.2,w:2.6},re={x0:-46,x1:-24,z0:-25,z1:8},Rn={x:-36,w:6},ee={x0:-35.5,x1:-24,z0:-17,z1:-4,yHi:et.F4-.16,yLo:et.F4-2},Ve=i=>ee.yLo+(ee.yHi-ee.yLo)*(i-ee.x0)/(ee.x1-ee.x0),gn={x:-5.5,z:-12.4},hn="#E9B532",nn={sw:{crate:[-20.6,9.75],awn:{x0:-22.5,x1:-18.7,y:3.15,d:1.25},pipe:-22.95},bal:{crate:[-1.4,10.2],awn:{x0:-3.9,x1:3.9,y:3.45,d:1.65},rungs:-3.45},e:{crate:[25.9,3.9],awn:{z0:4.7,z1:7,y:3.2,d:1.15},rack:{z0:2.1,z1:3.9,y:5.05,d:.75},hood:7.15}};var z={wall:"#ECE5D9",wallIn:"#F2EDE5",brick:"#CDBBA2",brickD:"#B9A68C",stone:"#D9D1C3",stoneD:"#C5BCAC",plinth:"#B8AF9F",slabE:"#CEC6B8",floor:"#D8CFC0",floorW:"#C9B497",floorWH:"#CDBFA6",tile:"#D3CABA",pave:"#D2C9B9",frame:"#6F6052",wood:"#A58C70",woodD:"#7D6A56",door:"#8C7258",roof:"#7E8588",roofE:"#686F72",glass:"#71858E",steel:"#5F686C",steelD:"#4B5357",deck:"#8C9090",rail:"#5E676A",corr:"#8F9997",corrD:"#7B8584",copper:"#A27A57",brass:"#B08D57",tank:"#8E7058",shutter:"#868B88"},rM=Math.PI*2,$e=et.F4-pi;function Xe(i,t,e,n,s,r,o,a,l,c=[]){return i.wall(t,e,[s,n],[r,n],o,a,l,c.map(h=>({a:h.c-h.w/2-s,w:h.w,y0:h.y0,y1:h.y1})))}function ze(i,t,e,n,s,r,o,a,l,c=[]){return s>r&&([s,r]=[r,s]),i.wall(t,e,[n,s],[n,r],o,a,l,c.map(h=>({a:h.c-h.w/2-s,w:h.w,y0:h.y0,y1:h.y1})))}function sn(i,t,e,n,s,r,o,a,l,c,h={}){var _,m;let u=(_=h.frame)!=null?_:z.frame,d=.09,f=Math.min(l,.2),g=(p,b,x,y,M,T,A,C)=>e==="x"?i.box(A,C,p,x,M,b,y,T):i.box(A,C,M,x,p,T,y,b);if(h.open||g(s-r/2,s+r/2,o,a,n-.025,n+.025,t+":g",z.glass),g(s-r/2,s-r/2+d,o,a,n-f/2,n+f/2,t,u),g(s+r/2-d,s+r/2,o,a,n-f/2,n+f/2,t,u),g(s-r/2,s+r/2,a-d,a,n-f/2,n+f/2,t,u),g(s-r/2,s+r/2,o,o+d,n-f/2,n+f/2,t,u),!h.open&&r>1.3&&h.mull!==!1&&g(s-.035,s+.035,o,a,n-.05,n+.05,t,u),!h.open&&a-o>2.2&&h.mull!==!1){let p=o+(a-o)*.7;g(s-r/2,s+r/2,p-.035,p+.035,n-.05,n+.05,t,u)}if(h.sill!==!1&&c){let p=n+c*l/2,b=n+c*(l/2+.14);g(s-r/2-.1,s+r/2+.1,o-.12,o,Math.min(p,b),Math.max(p,b),t,(m=h.sillC)!=null?m:z.stoneD)}if(h.open&&c){let p=n+c*(l/2+.5);g(s-r/2,s-r/2+.06,o+.05,a-.05,Math.min(n+c*l/2,p),Math.max(n+c*l/2,p),t,u)}}function Bn(i,t,e,n,s,r,o,a,l,c=z.frame){let h=(d,f,g,_,m,p)=>e==="x"?i.box(t,c,d,g,m,f,_,p):i.box(t,c,m,g,d,p,_,f),u=l+.06;h(s-r/2-.08,s-r/2,o,o+a,n-u/2,n+u/2),h(s+r/2,s+r/2+.08,o,o+a,n-u/2,n+u/2),h(s-r/2-.08,s+r/2+.08,o+a,o+a+.1,n-u/2,n+u/2)}var yr=(i,t,e,n)=>[[i,t],[e,t],[e,n],[i,n]],Ts={},p_=(i,t)=>{let e=new di;return Ts[i]={g:t,k:e},e};function jf(i,t,e,n,s,r,o,a,l,c,h=.3){for(let u=0;u<a;u++){let d=r+l*(u+1),f=s+o*c*u,g=s+o*c*(u+1);i.box(t,z.stoneD,e-n/2,Math.max(r,d-l-h),Math.min(f,g),e+n/2,d,Math.max(f,g))}}function m_(i,t,e,n,s,r,o,a){let l=a-o,c=10,h=(r-s-1.3)/c,u=l/2/c,d=(n-e-.3)/2,f=r-c*h,g=o+l/2,_=e+.1+d/2,m=n-.1-d/2,p=(_+m)/2;jf(i,t,_,d,r,o,-1,c,u,h),i.box(t,z.stoneD,e+.1,g-.3,s,n-.1,g,f),jf(i,t,m,d,f,g,1,c,u,h);let b=.95;i.beam(t,z.rail,[p,o+u+b,r-h/2],[p,g+b,f+h/2],.06,.06),i.beam(t,z.rail,[p,g+u+b,f+h/2],[p,a+b,r-h/2],.06,.06);for(let x of[0,4,9]){let y=r-h*(x+.5),M=o+u*(x+1),T=f+h*(x+.5),A=g+u*(x+1);i.box(t,z.rail,p-.03,M-.1,y-.03,p+.03,M+b,y+.03),i.box(t,z.rail,p-.03,A-.1,T-.03,p+.03,A+b,T+.03)}}function Ah(i,t,e,n,s){ze(i,t,z.wallIn,pn.x1,Ce.z0,pn.z1-2.6,e,n,Gt),ze(i,t,z.wallIn,Be.x1+.1,Be.z0,Be.z1,e,n,Gt),Xe(i,t,z.wallIn,Be.z1,pn.x1,Be.x1+.2,e,n,Gt,[{c:(Be.x0+Be.x1)/2,w:2,y0:0,y1:2.5}]),t==="F2"&&Xe(i,t,z.wallIn,Ce.z0,he.x0+st,Be.x1+.2,e,n,Gt),Bn(i,t,"x",Be.z1,(Be.x0+Be.x1)/2,2,e,2.5,Gt,z.steelD),i.box(t+":p",z.steel,(Be.x0+Be.x1)/2-.95,e,Be.z1-.1,(Be.x0+Be.x1)/2+.95,e+2.5,Be.z1-.03),s!=null&&m_(i,t,pn.x0+st,pn.x1-Gt/2,Ce.z0+.2,mr,e,s)}var Rh=()=>yr(pn.x0+st,Ce.z0+.2,pn.x1-Gt/2,mr);function Kf(i){let{x0:t,x1:e,z0:n,z1:s}=he;i.box("F1",z.plinth,t-.3,-.45,n-.3,e+.3,0,s+.3),i.box("F1",z.floor,t+st,0,n+st,e-st,.02,s-st),i.box("F1",z.tile,An.x0+st,.02,An.z0+Gt/2,An.x1-Gt/2,.04,An.z1-st);let r=yr(Be.x0,Be.z0,Be.x1,Be.z1);i.slab("F2",z.slabE,yr(t-.12,n-.12,e+.12,s+.12),[r,Rh()],et.F2-pi,et.F2,{top:z.wallIn}),i.slab("F3",z.slabE,yr(t-.12,n-.12,e+.12,s+.12),[r,Rh()],et.F3-pi,et.F3,{top:z.floor}),i.box("F3",z.floorWH,It.x0+st,et.F3,It.z0+st,It.x1-st,et.F3+.03,It.z1-Gt/2),i.box("F3",z.tile,dn.x0,et.F3,dn.z0+Gt/2,dn.x1,et.F3+.03,dn.z1-st),i.box("F3",z.tile,xr.x0+Gt/2,et.F3,Ce.z0+Gt/2,xr.x1-Gt/2,et.F3+.03,dn.z0),i.box("F3",z.stoneD,t-tn,et.F3-.32,s,e+tn,et.F3,s+tn),i.box("F3",z.stoneD,e,et.F3-.32,n-tn,e+tn,et.F3,s),i.box("F3",z.stoneD,t-tn,et.F3-.32,Ce.z0,t,et.F3,s),i.box("F3",z.stoneD,t-tn,et.F3-.32,n-tn,e,et.F3,n),i.slab("R3",z.slabE,[[t-.12,Ce.z0],[He.x0,Ce.z0],[He.x0,Ie.z0+.3],[e+.12,Ie.z0+.3],[e+.12,s+.12],[t-.12,s+.12]],[Rh()],$e,et.F4),i.box("R3",z.pave,t+.3,et.F4,Ce.z0+.1,He.x0,et.F4+.03,s-.3),i.box("R3",z.pave,He.x0,et.F4,Ie.z0+.3,e-.3,et.F4+.03,s-.3);let o=1.1;Xe(i,"R3",z.wall,s-.2,t,e,et.F4,et.F4+o,.4),ze(i,"R3",z.wall,t+.2,Ce.z0,s-.4,et.F4,et.F4+o,.4),ze(i,"R3",z.wall,e-.2,Ie.z0+.3,s-.4,et.F4,et.F4+o,.4),i.box("R3",z.stoneD,t-.15,et.F4+o,s-.45,e+.15,et.F4+o+.14,s+.05),i.box("R3",z.stoneD,t-.05,et.F4+o,Ce.z0,t+.45,et.F4+o+.14,s),i.box("R3",z.stoneD,e-.45,et.F4+o,Ie.z0+.3,e+.05,et.F4+o+.14,s);let a=[{g:"F1",y0:0,y1:et.F2-pi,wa:1,wb:3.1,w:1.8,col:z.stone,fr:z.woodD},{g:"F2",y0:et.F2,y1:et.F3-pi,wa:.9,wb:2.7,w:1.6,col:z.wall,fr:z.frame}],l=[-20.5,-15.5,-10.5,-5.5,5.5,10.5,15.5,20.5],c=[-20.5,-15.5,-10.5,-5.5,-1.6,1.6,5.5,10.5,15.5,20.5],h=[-20,-14,-8,-2,4,10,20],u=[-14.5,-9.5,-4.5,.5,5.5],d=[-14.5,-1,1.5],f=[-20,-12,-5,3];for(let w of a){let G=w.g==="F1",Z=ot=>({c:ot,w:w.w,y0:w.wa,y1:w.wb}),gt=G?l:c,at=G?[{c:0,w:6.8,y0:0,y1:3}]:[];Xe(i,w.g,w.col,s-st/2,t,e,w.y0,w.y1,st,[...gt.map(Z),...at]);for(let ot of gt)sn(i,w.g,"x",s-st/2,ot,w.w,w.y0+w.wa,w.y0+w.wb,st,1,{frame:w.fr});Xe(i,w.g,w.col,n+st/2,t,e,w.y0,w.y1,st,h.map(Z));for(let ot of h)sn(i,w.g,"x",n+st/2,ot,w.w,w.y0+w.wa,w.y0+w.wb,st,-1,{frame:w.fr});let bt=G?[{c:(nn.e.awn.z0+nn.e.awn.z1)/2,w:1.3,y0:0,y1:2.5}]:[];ze(i,w.g,w.col,e-st/2,n+st,s-st,w.y0,w.y1,st,[...f.map(Z),...bt]);for(let ot of f)sn(i,w.g,"z",e-st/2,ot,w.w,w.y0+w.wa,w.y0+w.wb,st,1,{frame:w.fr});let Dt=G?[{c:en.z,w:en.w,y0:0,y1:2.9},{c:-10.5,w:4.4,y0:0,y1:3.3},Z(1.2),Z(-21)]:[Z(-1),Z(3.5),Z(-21)];ze(i,w.g,w.col,t+st/2,n+st,s-st,w.y0,w.y1,st,Dt);for(let ot of G?[1.2,-21]:[-1,3.5,-21])sn(i,w.g,"z",t+st/2,ot,w.w,w.y0+w.wa,w.y0+w.wb,st,-1,{frame:w.fr})}i.box("F1:p",z.shutter,-3.35,0,s-.1,-.05,2.95,s+.02),i.box("F1:p",z.shutter,.05,0,s-.1,3.35,2.95,s+.02);for(let w=.3;w<2.9;w+=.28)i.box("F1:p","#9A9F9C",-3.35,w,s+.02,3.35,w+.05,s+.05);i.box("F1",z.stoneD,-3.8,3,s-.3,3.8,3.4,s+.25),Bn(i,"F1","z",t+st/2,en.z,en.w,0,2.9,st,z.woodD);for(let w of[-1,1])i.box("F1:p",z.door,t-.02,0,en.z+w*.75-.7,t+.08,2.85,en.z+w*.75+.7);i.box("F1",z.steelD,t-3.2,3.3,en.z-2.6,t,3.48,en.z+2.6),i.box("F1:g",z.glass,t-3.1,3.48,en.z-2.5,t-.1,3.52,en.z+2.5);for(let w of[-1,1])i.beam("F1",z.steel,[t-3.1,3.4,en.z+w*2.4],[t,4.6,en.z+w*2.4],.1);i.box("F1",z.stoneD,t-.5,-.45,en.z-1.8,t,0,en.z+1.75);for(let w=0;w<2;w++)i.box("F1",z.stoneD,t-.5-.35*(w+1),-.45,en.z-1.7,t-.5-.35*w,-.15*(w+1),en.z+1.75);{let w=(nn.e.awn.z0+nn.e.awn.z1)/2;Bn(i,"F1","z",e-st/2,w,1.3,0,2.5,st,z.woodD),i.box("F1:p",z.door,e-.08,0,w-.63,e+.02,2.45,w+.63)}i.box("F1:p",z.shutter,t-.02,0,-12.7,t+.1,3.25,-8.3);for(let w=.25;w<3.2;w+=.3)i.box("F1:p","#9A9F9C",t-.06,w,-12.7,t-.02,w+.05,-8.3);i.box("F1",z.stoneD,t-.18,et.F2-.7,n-.18,e+.18,et.F2-.3,s+.18);let g=et.F2-pi;Xe(i,"F1",z.wallIn,An.z0,An.x0+st,An.x1,0,g,Gt),ze(i,"F1",z.wallIn,An.x1,An.z0,An.z1-st,0,g,Gt,[{c:2,w:1.6,y0:0,y1:2.4}]),Ah(i,"F1",0,g,et.F2),i.box("F1:p",z.woodD,-12.5,0,1.2,-9.5,1.05,2.2),i.box("F1:p",z.wood,-12.6,1.05,1.1,-9.4,1.12,2.3);for(let[w,G]of[[-12,-3+3.5],[-6.6,4],[-16,6.6]]);for(let w of[2.2,6.2])i.box("F1:p",z.stone,-14.4,0,w-.35,-13.7,g,w+.35);for(let w of[3.2,5.2])i.box("F1:p",z.woodD,-8.6,0,w-.3,-7,.45,w+.3);Xe(i,"F1",z.wallIn,-3,An.x1,e-st,0,g,Gt,[{c:2,w:2.4,y0:0,y1:2.6}]),ze(i,"F1",z.wallIn,6,-3,s-st,0,g,Gt,[{c:2.5,w:1.6,y0:0,y1:2.4}]),ze(i,"F1",z.wallIn,4,n+st,-3,0,g,Gt,[{c:-6,w:3,y0:0,y1:2.8}]),Ah(i,"F2",et.F2,et.F3-pi,et.F3);let _=et.F3,m={wa:.9,wb:2.6,w:1.6},p=[-21.5,-14.5,-10.5,-6.5,6.5,10.5,14.5,18.5,21.5];Xe(i,"F3",z.wall,s-st/2,t,e,_,$e,st,[...p.map(w=>({c:w,w:m.w,y0:m.wa,y1:m.wb})),{c:0,w:2.8,y0:0,y1:2.6}]);for(let w of p)sn(i,"F3","x",s-st/2,w,m.w,_+m.wa,_+m.wb,st,1,{open:w===Qf.x});Bn(i,"F3","x",s-st/2,0,2.8,_,2.6,st,z.woodD),ze(i,"F3",z.wall,t+st/2,Ce.z0,s-st,_,$e,st,[{c:6.2,w:1.4,y0:m.wa,y1:m.wb}]),sn(i,"F3","z",t+st/2,6.2,1.4,_+m.wa,_+m.wb,st,-1),ze(i,"F3",z.wall,e-st/2,n+st,s-st,_,$e,st,[{c:Ro.z,w:Ro.w,y0:m.wa,y1:m.wb},{c:-4.6,w:1.4,y0:m.wa,y1:m.wb},{c:-13,w:1.6,y0:m.wa,y1:m.wb},{c:-20.5,w:1.6,y0:m.wa,y1:m.wb}]),sn(i,"F3","z",e-st/2,Ro.z,Ro.w,_+m.wa,_+m.wb,st,1,{open:!0});for(let w of[-4.6,-13,-20.5])sn(i,"F3","z",e-st/2,w,w===-4.6?1.4:1.6,_+m.wa,_+m.wb,st,1);Xe(i,"F3",z.wall,n+st/2,He.x0,e,_,$e,st,[{c:20,w:1.6,y0:m.wa,y1:m.wb}]),sn(i,"F3","x",n+st/2,20,1.6,_+m.wa,_+m.wb,st,-1),i.box("F3",z.stoneD,t-.15,$e-.25,s-.1,e+.15,$e+.05,s+.25);let b=2.3,x=w=>({c:w,w:1.2,y0:0,y1:b}),y=[si[0].x0+2,(si[1].x0+si[1].x1)/2+.3,(si[2].x0+si[2].x1)/2,(si[3].x0+si[3].x1)/2];Xe(i,"F3",z.wallIn,dn.z0,gr.x0,xr.x0,_,$e,Gt,[...y.map(x),{c:(mn.x1+Gt/2+gr.x1-Gt/2)/2,w:gr.x1-mn.x1-Gt,y0:0,y1:2.6}]);for(let w of y)Bn(i,"F3","x",dn.z0,w,1.2,_,b,Gt);ze(i,"F3",z.wallIn,mn.x1,mn.z0,mn.z1-st,_,$e,Gt,[{c:6.4,w:1.1,y0:0,y1:b}]),Bn(i,"F3","z",mn.x1,6.4,1.1,_,b,Gt),Xe(i,"F3",z.wallIn,mn.z0,t+st,gr.x0,_,$e,Gt),Ah(i,"F3",_,$e,et.F4),ze(i,"F3",z.wallIn,gr.x1,Ce.z0,dn.z0,_,$e,Gt);for(let w of si)ze(i,"F3",z.wallIn,w.x1,Ce.z0,dn.z0,_,$e,Gt);ze(i,"F3",z.wallIn,xr.x1,Ce.z0,dn.z1-st,_,$e,Gt,[{c:6.2,w:1.2,y0:0,y1:b}]),Bn(i,"F3","z",xr.x1,6.2,1.2,_,b,Gt),Xe(i,"F3",z.wallIn,_r.z1,He.x0,e-st,_,$e,Gt,[{c:19.6,w:1.2,y0:0,y1:b}]),Bn(i,"F3","x",_r.z1,19.6,1.2,_,b,Gt),Xe(i,"F3",z.wallIn,_r.z0,Oe.x1+.2,e-st,_,$e,Gt,[{c:21,w:1.2,y0:0,y1:b}]),Bn(i,"F3","x",_r.z0,21,1.2,_,b,Gt),ze(i,"F3",z.wallIn,Oe.x1+.2,_r.z0,Ce.z0-1,_,$e,Gt);let M=16,T=(et.F4-_)/M,A=(Oe.z0-Oe.z1)/M;i.stairs("F3:p",z.stoneD,(Oe.x0+Oe.x1)/2,Oe.z0,_,-Math.PI/2,M,T,A,Oe.x1-Oe.x0);{let w=Oe.x1+.05;i.beam("F3:p",z.rail,[w,_+T+.95,Oe.z0-A/2],[w,et.F4+.95,Oe.z1+A/2],.06,.06);for(let G=0;G<M;G+=3){let Z=Oe.z0-A*(G+.5),gt=_+T*(G+1);i.box("F3:p",z.rail,w-.03,gt,Z-.03,w+.03,gt+.95,Z+.03)}}let C=et.EAVE,S=[-19,-13,-7,-1,5,11];Xe(i,"WH",z.brick,n+st/2,t,It.x1+st/2,_,C,st,[...S.map(w=>({c:w,w:2,y0:1.4,y1:3.2})),...S.map(w=>({c:w,w:2,y0:5.2,y1:7.4}))]);for(let w of S)sn(i,"WH","x",n+st/2,w,2,_+1.4,_+3.2,st,-1),sn(i,"WH","x",n+st/2,w,2,_+5.2,_+7.4,st,-1);let v={c:ws.z,w:ws.w,y0:et.F4-_,y1:et.F4-_+ws.h};ze(i,"WH",z.brick,t+st/2,n+st,It.z1-Gt/2,_,C,st,[v,...[-21.4,-14.6,-6.4].map(w=>({c:w,w:1.6,y0:5.2,y1:7.4}))]),Bn(i,"WH","z",t+st/2,ws.z,ws.w,et.F4,ws.h,st,z.steelD);for(let w of[-21.4,-14.6,-6.4])sn(i,"WH","z",t+st/2,w,1.6,_+5.2,_+7.4,st,-1);ze(i,"WH",z.brick,It.x1,n+st,It.z1-Gt/2,_,C,Gt*1.6,[{c:Nn.z,w:Nn.w,y0:et.F4-_+Nn.y0,y1:et.F4-_+Nn.y1}]),sn(i,"WH","z",It.x1,Nn.z,Nn.w,et.F4+Nn.y0,et.F4+Nn.y1,Gt*1.6,0,{sill:!1,open:!0}),i.box("WH",z.brick,It.x1-.2,C,n,It.x1+.2,C+.01,It.z1);let P=et.F4-_,F=[-20,-14,-8,-2,4,10];Xe(i,"F3",z.brick,It.z1,t+st,It.x1-.2,_,C,Gt*1.6,[{c:Ao.x,w:Ao.w,y0:0,y1:2.4},{c:Se.x,w:Se.w,y0:Se.y0,y1:Se.y1},{c:(Fi.x0+Fi.x1)/2,w:Fi.x1-Fi.x0,y0:0,y1:Fi.h},...F.map(w=>({c:w,w:2.2,y0:P+1.2,y1:P+3.2}))]);for(let w of F)sn(i,"F3","x",It.z1,w,2.2,et.F4+1.2,et.F4+3.2,Gt*1.6,1);Bn(i,"F3","x",It.z1,Ao.x,Ao.w,_,2.4,Gt*1.6,z.steelD);{let w=p_("blast","F3");Xe(w,"F3",z.brick,It.z1,Fi.x0,Fi.x1,_,_+Fi.h,Gt*1.6,[{c:Se.x,w:Se.w,y0:Se.y0,y1:Se.y1}]);for(let G=Se.x-Se.w/2+.15;G<Se.x+Se.w/2;G+=.25)w.box("F3",z.steelD,G-.03,_+Se.y0,It.z1-.05,G+.03,_+Se.y1,It.z1+.05);w.box("F3",z.steelD,Se.x-Se.w/2,_+Se.y0-.06,It.z1-.08,Se.x+Se.w/2,_+Se.y0,It.z1+.08),w.box("F3",z.steelD,Se.x-Se.w/2,_+Se.y1,It.z1-.08,Se.x+Se.w/2,_+Se.y1+.06,It.z1+.08)}for(let w of[-18,-12,-6,0,6,12])i.box("WH",z.brickD,w-.35,_,n-.2,w+.35,C,n+.1);for(let w of[-18,-12.5,-6])i.box("WH",z.brickD,t-.2,_,w-.35,t+.1,C,w+.35);i.box("WH",z.stoneD,t-.3,C-.4,n-.3,It.x1+.1,C,n+.2),i.box("WH",z.stoneD,t-.3,C-.4,n-.3,t+.2,C,It.z1+.1),i.box("WH",z.stoneD,t-.3,C-.4,It.z1-.2,It.x1+.1,C,It.z1+.3);let B=pr.y,W=pr.w,$=t+st+W,I=It.x1-W,O=n+st+W,L=[[t+st,n+st],[It.x1-.2,n+st],[It.x1-.2,It.z1-.2],[I,It.z1-.2],[I,O],[$,O],[$,It.z1-.2],[t+st,It.z1-.2]];i.slab("WH",z.steelD,L,[],B-.45,B-.06),i.slab("WH",z.floorW,L,[],B-.06,B,{bottom:!1}),i.box("WH",z.steelD,ae.land,B-.45,O,ae.x1+.02,B-.06,ae.z1+.2),i.box("WH",z.floorW,ae.land,B-.06,O,ae.x1+.02,B,ae.z1+.2);let X=[];for(let w=$;w<=I+.01;w+=(I-$)/6)X.push([w,O]);for(let w of[-15.2,-10.4,-6])X.push([$,w]),X.push([I,w]);X.push([$,It.z1-.6],[I,It.z1-.6],[ae.land+.2,ae.z1-.2],[ae.x1-.3,ae.z1-.2]);for(let[w,G]of X)i.box("WH",z.steel,w-.16,_,G-.16,w+.16,B-.45,G+.16),i.box("WH",z.steelD,w-.3,_,G-.3,w+.3,_+.25,G+.3);i.rail("WH",z.rail,[[$,It.z1-.3],[$,O],[ae.land+.1,O],[ae.land+.1,ae.z1+.11],[ae.x1,ae.z1+.11]],B,1.05,.55,{w:.04,top:.08}),i.rail("WH",z.rail,[[ae.x1+.1,O],[I,O],[I,It.z1-.3]],B,1.05,.55,{w:.04,top:.08});let tt=24,it=(B-_)/tt,lt=(ae.x0-ae.x1)/tt;for(let w of[ae.z0+.06,ae.z1-.06])i.beam("WH",z.steelD,[ae.x0-.12,_+.12,w],[ae.x1,B-.1,w],.1,.3);for(let w=0;w<tt;w++){let G=ae.x0-lt*(w+.5),Z=_+it*(w+1);i.box("WH",z.floorW,G-lt/2-.02,Z-.05,ae.z0+.12,G+lt/2+.02,Z,ae.z1-.12)}for(let w=0;w<=6;w++){let G=ae.x0+(ae.x1-ae.x0)*w/6,Z=_+(B-_)*w/6;i.box("WH",z.rail,G-.03,Z,ae.z1,G+.03,Z+1.05,ae.z1+.08)}i.beam("WH",z.rail,[ae.x0,_+1.05,ae.z1+.04],[ae.x1,B+1.05,ae.z1+.04],.07,.07);for(let w of[-18,-12,-6,0,6,12]){let G=(n+It.z1)/2,Z=et.RIDGE-1.2;i.beam("WH",z.steel,[w,C-.2,n+.4],[w,Z,G],.22),i.beam("WH",z.steel,[w,C-.2,It.z1-.3],[w,Z,G],.22),i.beam("WH",z.steel,[w,C-.2,n+.4],[w,C-.2,It.z1-.3],.16);for(let gt of[.25,.5,.75]){let at=n+.4+(It.z1-.3-n-.4)*gt,bt=C-.2+(Z-C+.2)*(1-Math.abs(gt-.5)*2);i.beam("WH",z.steel,[w,C-.2,at],[w,bt,at],.1)}}let nt=et.F4,mt=et.TOP-pi;i.slab("F4",z.slabE,yr(He.x0+.1,n-.12,e+.12,Ie.z0+.3),[yr(Oe.x0-.1,Oe.z1-.05,Oe.x1+.25,Ie.z0+.3-st)],nt-pi,nt,{top:z.floor}),Xe(i,"F4",z.wall,n+st/2,He.x0+.2,e,nt,mt,st,[{c:20,w:1.6,y0:.9,y1:2.5}]),sn(i,"F4","x",n+st/2,20,1.6,nt+.9,nt+2.5,st,-1),ze(i,"F4",z.wall,e-st/2,n+st,Ie.z0+.3,nt,mt,st,[-20.5,-13,-5].map(w=>({c:w,w:1.6,y0:.9,y1:2.5})));for(let w of[-20.5,-13,-5])sn(i,"F4","z",e-st/2,w,1.6,nt+.9,nt+2.5,st,1);Xe(i,"F4",z.wall,Ie.z0+.3-st/2,He.x0+.2,e,nt,mt,st,[{c:21.5,w:1.1,y0:0,y1:2.2},{c:19.7,w:1.4,y0:.9,y1:2.5}]),sn(i,"F4","x",Ie.z0+.3-st/2,19.7,1.4,nt+.9,nt+2.5,st,1),Bn(i,"F4","x",Ie.z0+.3-st/2,21.5,1.1,nt,2.2,st),ze(i,"F4",z.wall,He.x0+.1,It.z1,Ie.z0+.3-st,nt,mt,Gt),i.rail("F4",z.rail,[[Oe.x1+.35,Ie.z0+.3-st-.1],[Oe.x1+.35,Oe.z1]],nt,1,.55,{w:.04,top:.08}),i.box("F4",z.stoneD,He.x0-.1,mt-.25,n-.2,e+.2,mt+.05,Ie.z0+.5),i.cyl("F4",z.copper,e+.25,n+.6,-.45,mt,.14,8);let ct=(n+It.z1)/2,Q=.8,k=et.RIDGE,ut=(k-C)/((It.z1-n)/2),Ct=n-Q,St=It.z1+Q,kt=C-Q*ut;i.plate("roof",z.roof,[[t-Q,kt,Ct],[It.x1+Q,kt,Ct],[It.x1+Q,k,ct],[t-Q,k,ct]],.28),i.plate("roof",z.roof,[[It.x1+Q,kt,St],[t-Q,kt,St],[t-Q,k,ct],[It.x1+Q,k,ct]],.28);for(let w of[Ct,St])i.box("roof",z.roofE,t-Q,kt-.45,w-.12,It.x1+Q,kt-.2,w+.12);for(let w of[t+st/2,It.x1]){let G=w<0?-1:1;i.tri("roof",z.brick,[w+G*.26,C,G>0?It.z1:n],[w+G*.26,C,G>0?n:It.z1],[w+G*.26,k-.1,ct]),i.tri("roof",z.brick,[w-G*.26,C,G>0?n:It.z1],[w-G*.26,C,G>0?It.z1:n],[w-G*.26,k-.1,ct])}let fe=-19,U=11,jt=2.2,Lt=1.5;for(let w of[-1,1]){i.box("roof",z.brickD,fe,k-.6,ct+w*jt-.12,U,k+Lt,ct+w*jt+.12);for(let G=fe+1.4;G<U-.6;G+=3)i.box("roof:g",z.glass,G,k+.1,ct+w*(jt+.13)-.02,G+2,k+Lt-.25,ct+w*(jt+.13)+.02)}for(let w of[fe,U])i.box("roof",z.brickD,w-.12,k-.6,ct-jt,w+.12,k+Lt,ct+jt);i.plate("roof",z.roofE,[[fe-.5,k+Lt,ct-jt-.6],[U+.5,k+Lt,ct-jt-.6],[U+.5,k+Lt+.9,ct],[fe-.5,k+Lt+.9,ct]],.2),i.plate("roof",z.roofE,[[U+.5,k+Lt,ct+jt+.6],[fe-.5,k+Lt,ct+jt+.6],[fe-.5,k+Lt+.9,ct],[U+.5,k+Lt+.9,ct]],.2);let ft=et.TOP;i.box("roof",z.slabE,He.x0-.1,mt,n-.1,e+.1,ft,Ie.z0+.4),i.box("roof",z.pave,He.x0+.3,ft,n+.3,e-.3,ft+.03,Ie.z0);for(let[w,G,Z,gt]of[[He.x0,n,e,n+.4],[He.x0,Ie.z0,e,Ie.z0+.4],[e-.4,n,e,Ie.z0+.4]])i.box("roof",z.wall,w,ft,G,Z,ft+.9,gt);i.box("roof",z.stoneD,He.x0-.1,ft+.9,n-.15,e+.15,ft+1.02,n+.5),i.box("roof",z.stoneD,He.x0-.1,ft+.9,Ie.z0-.1,e+.15,ft+1.02,Ie.z0+.55),i.box("roof",z.stoneD,e-.5,ft+.9,n,e+.15,ft+1.02,Ie.z0+.5);let wt=20.8,ue=-13;for(let[w,G]of[[-1,-1],[1,-1],[1,1],[-1,1]])i.beam("roof",z.steelD,[wt+w*1.3,ft,ue+G*1.3],[wt+w*1.1,ft+2.4,ue+G*1.1],.14);i.box("roof",z.steelD,wt-1.5,ft+2.4,ue-1.5,wt+1.5,ft+2.6,ue+1.5),i.cyl("roof",z.tank,wt,ue,ft+2.6,ft+5.4,1.6,16,0),i.frustum("roof",z.copper,wt,ue,ft+5.4,ft+6.1,1.7,.2,16,0);for(let w of[3.3,4.6])i.cyl("roof",z.copper,wt,ue,ft+w,ft+w+.12,1.66,16,0);i.cyl("roof",z.copper,18,n+1.8,ft,ft+6.5,.45,12,0),i.cyl("roof",z.steelD,18,n+1.8,ft+6.5,ft+7,.6,12,0);{let w=t,G=pn.x1+Gt/2,Z=Ce.z0,gt=pn.z1+.15,at=et.F4,bt=at+3,Dt=(mr+gt)/2+.2;ze(i,"R3",z.wall,w+.2,Z,gt,at,bt,.4),Xe(i,"R3",z.wall,Z+.1,w,G,at,bt,.2),Xe(i,"R3",z.wall,gt-.15,w,G,at,bt,.3),ze(i,"R3",z.wall,pn.x1,Z+.2,gt-.3,at,bt,Gt,[{c:Dt,w:1.4,y0:0,y1:2.3}]),Bn(i,"R3","z",pn.x1,Dt,1.4,at,2.3,Gt,z.woodD),i.box("R3",z.stoneD,w-.2,bt,Z-.2,G+.2,bt+.25,gt+.2),i.rail("R3",z.rail,[[pn.x0+st,mr+.1],[(pn.x0+pn.x1)/2+.05,mr+.1]],at,1.05,.5,{w:.04,top:.08})}for(let[w,G]of[[-9,6.4],[6,6.4],[-12,-1.4]])i.cyl("R3",z.steelD,w,G,et.F4,et.F4+1.4,.3,10,0),i.cyl("R3",z.steelD,w,G,et.F4+1.4,et.F4+1.55,.42,10,0);i.box("R3",z.copper,-6,et.F4+.5,-2.6,9,et.F4+.78,-2.32);let yt=et.F3;i.box("F3",z.stone,je.x0,yt-.45,he.z1,je.x1,yt,je.z1),i.box("F3",z.tile,je.x0+.1,yt,he.z1+.02,je.x1-.1,yt+.03,je.z1-.1);for(let w of[je.x0+.3,-1,1,je.x1-.3])i.box("F3",z.stoneD,w-.18,yt-1.6,he.z1,w+.18,yt-.45,he.z1+.5),i.box("F3",z.stoneD,w-.18,yt-1.05,he.z1+.5,w+.18,yt-.45,he.z1+1.4);let $t=[[je.x0+.15,he.z1+.1],[je.x0+.15,je.z1-.15],[je.x1-.15,je.z1-.15],[je.x1-.15,he.z1+.1]];for(let w=0;w<3;w++){let G=$t[w],Z=$t[w+1],gt=Math.hypot(Z[0]-G[0],Z[1]-G[1]),at=Math.round(gt/.32);for(let bt=0;bt<=at;bt++){let Dt=G[0]+(Z[0]-G[0])*bt/at,ot=G[1]+(Z[1]-G[1])*bt/at;i.cyl("F3",z.stone,Dt,ot,yt,yt+.95,.07,6,0)}i.beam("F3",z.stoneD,[G[0],yt+1,G[1]],[Z[0],yt+1,Z[1]],.22,.12),i.beam("F3",z.stoneD,[G[0],yt+.06,G[1]],[Z[0],yt+.06,Z[1]],.2,.12)}for(let[w,G]of $t)i.box("F3",z.stoneD,w-.17,yt,G-.17,w+.17,yt+1.12,G+.17);i.box("R3",z.steelD,je.x0-.2,$e-.3,he.z1,je.x1+.2,$e-.15,je.z1-.6);let Ge=[ee.z0,(ee.z0+ee.z1)/2,ee.z1];for(let w of Ge){let G=ee.x0+.4,Z=Ve(G)-.5;for(let gt of[-.22,.22])i.box("cp",z.steel,G-.18+gt*0,-.45,w+gt-.1,G+.18,Z,w+gt+.1);i.box("cp",z.stoneD,G-.5,-.45,w-.55,G+.5,.25,w+.55);for(let gt=1.2;gt<Z-.8;gt+=1.6)i.beam("cp",z.steelD,[G,gt,w-.22],[G,gt+1.6,w+.22],.05);i.beam("cp",z.steel,[G-.3,Z+.15,w],[ee.x1-.1,Ve(ee.x1)-.35,w],.32,.42),i.box("cp",z.steelD,ee.x1-.5,Ve(ee.x1)-1.2,w-.3,ee.x1,Ve(ee.x1)-.3,w+.3),i.beam("cp",z.steel,[G,Z-2.6,w],[G+3.2,Ve(G+3.2)-.5,w],.14)}for(let w of[0,.25,.5,.75,.97]){let G=ee.x0+.4+(ee.x1-ee.x0-.5)*w;i.box("cp",z.steelD,G-.09,Ve(G)-.32,ee.z0-.3,G+.09,Ve(G)-.12,ee.z1+.3)}let pe=ee.x0-.3,D=ee.x1-.02;i.plate("cp",z.corr,[[pe,Ve(pe)-.05,ee.z0-.6],[D,Ve(D)-.05,ee.z0-.6],[D,Ve(D)-.05,ee.z1+.6],[pe,Ve(pe)-.05,ee.z1+.6]],.1);for(let w=ee.z0-.4;w<=ee.z1+.45;w+=.6)i.beam("cp",z.corrD,[pe,Ve(pe)-.02,w],[D,Ve(D)-.02,w],.1,.05);i.box("cp",z.corrD,pe-.15,Ve(pe)-.35,ee.z0-.6,pe,Ve(pe)+.02,ee.z1+.6),i.box("cp",z.steelD,ee.x1-.45,ee.yHi-.05,ee.z0-.6,ee.x1,ee.yHi+.08,ee.z1+.6);let E=-29.5,J=Ve(E)-1.95;for(let w of[-15.6,-5.4])i.box("cp",z.steelD,E-.2,-.45,w-.2,E+.2,J,w+.2);return i.box("cp",z.steelD,E-.25,J,-15.9,E+.25,J+.5,-5.1),i.box("cp",z.copper,E-.5,J-.6,-11,E+.5,J,-10),i.beam("cp",z.rail,[E,J-.6,-10.5],[E,J-3.6,-10.5],.04),i.box("cp",z.steelD,E-.2,J-4,-10.7,E+.2,J-3.6,-10.3),i}var gi=-.45+.17,mi={crate:"#B49C7B",crateD:"#9E8566",pot:"#9B7F64",leaf:"#7E8C62"},Mr=i=>i<et.F2-.05?"F1:p":i<et.F3-.05?"F2:p":"F3:p";function Fc(i,t,e,n,s,r,o,a){let l=[n,...[et.F2,et.F3].filter(c=>c>n&&c<o),o];for(let c=0;c<l.length-1;c++)i.box(Mr(l[c]),t,e,l[c],s,r,l[c+1],a)}function g_(i,t,e,n,s,r,o){let a=[s,...[et.F2,et.F3].filter(l=>l>s&&l<r),r];for(let l=0;l<a.length-1;l++)i.cyl(Mr(a[l]),t,e,n,a[l],a[l+1],o,10,0)}function vr(i,t,e,n,s,r=.6){s==="z"?(i.box(Mr(e-r),hn,t-.16/2,e-r,n-.025,t+.16/2,e,n+.025),i.box(Mr(e-r),hn,t-.16/2+.05,e-r-.14,n-.025,t+.16/2-.02,e-r,n+.025)):(i.box(Mr(e-r),hn,t-.025,e-r,n-.16/2,t+.025,e,n+.16/2),i.box(Mr(e-r),hn,t-.025,e-r-.14,n-.16/2+.05,t+.025,e-r,n+.16/2-.02))}function Ch(i,t,e,n,s){let l=(h,u,d,f,g)=>{i.box("F1:p",g,h-f/2,d,u-f/2,h+f/2,d+f,u+f/2);for(let _ of[-1,1])n==="x"?i.box("F1:p",mi.crateD,h+_*(f/2-.06)-.05,d-.005,u-f/2-.01,h+_*(f/2-.06)+.05,d+f+.005,u+f/2+.01):i.box("F1:p",mi.crateD,h-f/2-.01,d-.005,u+_*(f/2-.06)-.05,h+f/2+.01,d+f+.005,u+_*(f/2-.06)+.05)};n==="x"?(l(t-.53,e,gi,.95,mi.crate),l(t+.53,e,gi,.95,mi.crateD),l(t,e,gi+.95,.85,mi.crate)):(l(t,e-.53,gi,.95,mi.crate),l(t,e+.53,gi,.95,mi.crateD),l(t,e,gi+.95,.85,mi.crate));let c=gi+.95+.85;return n==="x"?i.box("F1:p",hn,t-.85/2-.01,c-.07,e+s*(.85/2)-.03,t+.85/2+.01,c+.005,e+s*(.85/2)+.03):i.box("F1:p",hn,t+s*(.85/2)-.03,c-.07,e-.85/2-.01,t+s*(.85/2)+.03,c+.005,e+.85/2+.01),c}function td(i,t){let e=he.z1,n=he.z1+t.d,s=t.y;i.box("F1:p",z.corr,t.x0,s-.08,e,t.x1,s,n-.06);for(let r=t.x0+.2;r<t.x1-.1;r+=.45)i.box("F1:p",z.corrD,r-.04,s,e,r+.04,s+.025,n-.06);i.box("F1:p",hn,t.x0-.03,s-.22,n-.07,t.x1+.03,s+.03,n);for(let r of[t.x0+.25,t.x1-.25])i.beam("F1:p",z.steelD,[r,s-1.05,e+.05],[r,s-.1,n-.12],.07),i.box("F1:p",z.steelD,r-.1,s-1.25,e,r+.1,s-.9,e+.06)}function x_(i,t){let e=he.x1,n=he.x1+t.d,s=t.y;i.box("F1:p",z.corr,e,s-.08,t.z0,n-.06,s,t.z1);for(let r=t.z0+.2;r<t.z1-.1;r+=.45)i.box("F1:p",z.corrD,e,s,r-.04,n-.06,s+.025,r+.04);i.box("F1:p",hn,n-.07,s-.22,t.z0-.03,n,s+.03,t.z1+.03);for(let r of[t.z0+.25,t.z1-.25])i.beam("F1:p",z.steelD,[e+.05,s-1.05,r],[n-.12,s-.1,r],.07),i.box("F1:p",z.steelD,e,s-1.25,r-.1,e+.06,s-.9,r+.1)}function ed(i,t,e){i.box("F3:p",hn,Math.min(t,e),et.F3-.3,he.z1+tn-.02,Math.max(t,e),et.F3-.02,he.z1+tn+.03)}function __(i,t,e){i.box("F3:p",hn,he.x1+tn-.02,et.F3-.3,Math.min(t,e),he.x1+tn+.03,et.F3-.02,Math.max(t,e))}function nd(i){let t=et.F3-.32;{let e=nn.sw,n=he.z1;Ch(i,e.crate[0],e.crate[1],"x",1),vr(i,e.crate[0]+.5,gi+.9,e.crate[1]+.48,"z",.5),td(i,e.awn);let s=e.pipe,r=n+.16;g_(i,z.copper,s,r,-.45,t,.1),i.box("F1:p",z.copper,s-.12,-.45,r-.12,s+.12,-.45+.25,r+.3);for(let o=e.awn.y+.5;o<t-.1;o+=.7)Fc(i,hn,s-.15,o,n,s+.15,o+.07,r+.14);for(let o=.8;o<e.awn.y;o+=1.4)Fc(i,z.steelD,s-.14,o,n,s+.14,o+.05,r+.13);ed(i,s-.5,-20.7),vr(i,s+.32,et.F3-.32,n+tn+.04,"z",.55)}{let e=nn.bal,n=he.z1;Ch(i,e.crate[0],e.crate[1],"x",1),vr(i,e.crate[0]-.5,gi+.9,e.crate[1]+.48,"z",.5),td(i,e.awn);let s=e.rungs;for(let r=e.awn.y+.4;r<t-.15;r+=.42){Fc(i,hn,s-.24,r,n+.13,s+.24,r+.05,n+.19);for(let o of[-1,1])Fc(i,z.steelD,s+o*.22-.025,r-.01,n,s+o*.22+.025,r+.06,n+.17)}ed(i,s-.45,s+.45),vr(i,s-.3,et.F3-.32,n+tn+.04,"z",.55)}{let e=nn.e,n=he.x1;Ch(i,e.crate[0],e.crate[1],"z",1),vr(i,e.crate[0]+.48,gi+.9,e.crate[1]+.5,"x",.5),x_(i,e.awn);let s=e.rack,r=n+s.d;i.box("F2:p",z.steelD,n,s.y-.08,s.z0,r,s.y,s.z1);for(let o of[s.z0+.08,s.z1-.08])i.box("F2:p",z.steelD,r-.05,s.y,o-.03,r,s.y+.45,o+.03);i.box("F2:p",hn,r-.06,s.y+.42,s.z0,r+.01,s.y+.48,s.z1);for(let o of[s.z0,s.z1])i.box("F2:p",hn,n,s.y+.42,o-.03,r,s.y+.48,o+.03);for(let o of[s.z0+.3,s.z1-.3])i.frustum("F2:p",mi.pot,n+.38,o,s.y,s.y+.3,.14,.19,8,0),i.cyl("F2:p",mi.leaf,n+.38,o,s.y+.3,s.y+.5,.2,8,0);i.beam("F2:p",z.steelD,[n+.02,s.y-.7,(s.z0+s.z1)/2],[r-.08,s.y-.1,(s.z0+s.z1)/2],.06),i.box("F2:p",z.stoneD,n,e.hood-.17,s.z0-.1,n+.45,e.hood,s.z1+.1),i.box("F2:p",hn,n+.4,e.hood-.17,s.z0-.1,n+.47,e.hood+.01,s.z1+.1),__(i,s.z0-.2,s.z1+.5),vr(i,n+tn+.04,et.F3-.32,s.z1+.3,"x",.55)}return i}var Jt={crate:"#B49C7B",crateD:"#9E8566",sack:"#C9B48E",sackD:"#B39D78",jar:"#9B7F64",jarL:"#B8A07F",herb:"#8E9A6E",herbD:"#7A855E",bomb:"#8E3F2E",bombL:"#B4553A",gun:"#3E4448",gunL:"#5A6165",desk:"#8A7258",cab:"#7F6E5C",cloth:"#9C6A52",chair:"#6F6052",truck:"#5F6B6A",truckD:"#47504F",boiler:"#9C7A57",tire:"#2F3333",mop:"#A99C86",lamp:"#FFE2A8"},id=(i,t)=>{let e=new di;return Ts[i]={g:t,k:e},e};function Li(i,t,e,n,s,r=.9,o=0,a=Jt.crate){i.ybox(t,a,e,s+r/2,n,r,r,r,o);let l=Math.cos(o),c=Math.sin(o);for(let h of[-1,1])i.ybox(t,Jt.crateD,e+l*h*(r/2-.06),s+r/2,n+c*h*(r/2-.06),.1,r+.02,r+.02,o)}function xn(i,t,e,n,s,r=3,o=0,a=()=>.5){Li(i,t,e,n,s,.95,o),Li(i,t,e+1.05*Math.cos(o),n+1.05*Math.sin(o),s,.95,o,Jt.crateD),r>2&&Li(i,t,e+.5*Math.cos(o),n+.5*Math.sin(o),s+.95,.85,o+(a()-.5)*.3)}function br(i,t,e,n,s,r=4,o=0){let a=Math.cos(o),l=Math.sin(o);for(let c=0;c<r;c++){let h=(c%3-1)*.75,u=Math.floor(c/3)*.7;i.ybox(t,c%2?Jt.sack:Jt.sackD,e+a*h-l*u,s+.22+(c>=3?.38:0),n+l*h+a*u,.72,.42,.5,o+c%2*.1)}}function Dh(i,t,e,n,s,r=1.1,o=.38){i.frustum(t,Jt.jar,e,n,s,s+r*.55,o*.8,o*1.1,10,0),i.frustum(t,Jt.jar,e,n,s+r*.55,s+r*.9,o*1.1,o*.55,10,0),i.cyl(t,Jt.jarL,e,n,s+r*.9,s+r,o*.5,10,0)}function Lc(i,t,e,n,s,r,o,a=3.2,l={}){let c=Math.cos(o),h=Math.sin(o),u=1.1,d=Math.max(2,Math.round(r/2.2));for(let f=0;f<=d;f++)for(let g of[-u/2,u/2]){let _=-r/2+r*f/d;i.box(t,z.steelD,e+c*_-h*g-.05,s,n+h*_+c*g-.05,e+c*_-h*g+.05,s+a,n+h*_+c*g+.05)}for(let f=0;f<4;f++){let g=s+.2+f*(a-.3)/3;if(i.ybox(t,z.woodD,e,g,n,r+.1,.06,u+.05,o),f!==3)for(let _=0;_<d;_++){let m=-r/2+r*(_+.5)/d,p=e+c*m,b=n+h*m,x=(_+f+(l.seed||0))%3;if(x===0)i.ybox(t,Jt.crate,p,g+.28,b,1.4,.5,.8,o);else if(x===1)i.ybox(t,Jt.sack,p-c*.4,g+.22,b-h*.4,.7,.38,.8,o),i.ybox(t,Jt.herb,p+c*.4,g+.2,b+h*.4,.7,.34,.8,o);else for(let y of[-.5,0,.5])Dh(i,t,p+c*y,b+h*y,g+.03,.5,.18)}}}function Ih(i,t,e,n,s,r,o,a=.78,l=0,c=Jt.desk){i.ybox(t,c,e,s+a-.04,n,r,.08,o,l);let h=Math.cos(l),u=Math.sin(l);for(let[d,f]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let g=e+h*d*(r/2-.1)-u*f*(o/2-.1),_=n+u*d*(r/2-.1)+h*f*(o/2-.1);i.box(t,Jt.chair,g-.05,s,_-.05,g+.05,s+a-.08,_+.05)}}function Ph(i,t,e,n,s,r){i.ybox(t,Jt.chair,e,s+.45,n,.5,.06,.5,r);let o=Math.cos(r),a=Math.sin(r);i.ybox(t,Jt.chair,e-a*.22,s+.75,n+o*-.22+0,.5,.6,.06,r);for(let[l,c]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let h=e+o*l*.2-a*c*.2,u=n+a*l*.2+o*c*.2;i.box(t,Jt.chair,h-.03,s,u-.03,h+.03,s+.45,u+.03)}}function Uc(i,t,e,n,s,r,o,a=2){i.ybox(t,Jt.cab,e,s+a/2,n,r,a,.5,o),i.ybox(t,z.frame,e,s+a+.03,n,r+.06,.06,.56,o)}function y_(i,t,e,n,s,r=2.2){i.box(t,z.rail,e-.02,s-r,n-.02,e+.02,s,n+.02),i.frustum(t,z.steelD,e,n,s-r-.25,s-r,.5,.12,10,0),i.cyl(t.split(":")[0]+":e",Jt.lamp,e,n,s-r-.28,s-r-.2,.26,10,0)}function v_(i,t,e,n,s){i.ybox(t,Jt.bomb,e-1.32,s+.4,n+.42,1,.8,.8,0),i.ybox(t,Jt.bomb,e-.41,s+.36,n+.42,.78,.72,.8,0),i.ybox(t,Jt.bomb,e-.9,s+1.14,n+.4,.85,.68,.74,.06),i.ybox(t,Jt.bombL,e-1.32,s+.62,n+.42,1.02,.06,.82,0),i.ybox(t,Jt.bombL,e-.41,s+.56,n+.42,.8,.06,.82,0),i.ybox(t,"#3A3530",e-.9,s+1.53,n+.4,.3,.1,.2,0);for(let r of[1.3,2.06])i.cyl(t,Jt.bomb,e-.4,n+r,s,s+1.05,.36,12,0),i.cyl(t,Jt.bombL,e-.4,n+r,s+.5,s+.58,.37,12,0)}function M_(i,t,e,n,s,r){let o=Math.cos(r),a=Math.sin(r);for(let l of[0,2.1,4.2])i.beam(t,Jt.gun,[e,s+1.05,n],[e+Math.cos(r+l)*.55,s,n+Math.sin(r+l)*.55],.05);i.ybox(t,Jt.gun,e+o*.25,s+1.15,n+a*.25,1.3,.16,.16,r),i.ybox(t,Jt.gunL,e+o*1.05,s+1.15,n+a*1.05,.7,.07,.07,r),i.ybox(t,Jt.gunL,e-o*.2,s+1.3,n-a*.2,.4,.2,.26,r),i.ybox(t,"#6E6A55",e-a*.45,s+.18,n+o*.45,.45,.36,.3,r)}function b_(i,t,e,n,s,r,o=5){let a=Math.cos(r),l=Math.sin(r);i.ybox(t,z.woodD,e,s+.5,n,o*.32+.3,.08,.4,r),i.ybox(t,z.woodD,e,s+1.35,n,o*.32+.3,.08,.25,r);for(let c=0;c<o;c++){let h=(c-(o-1)/2)*.32;i.ybox(t,Jt.gun,e+a*h,s+.9,n+l*h,.06,1.6,.08,r)}}function S_(i,t,e,n,s){let r=Math.cos(s),o=Math.sin(s),a=(h,u)=>[e+r*h-o*u,n+o*h+r*u],l=-.45+.2,c=a(0,0);i.ybox(t,Jt.truckD,c[0],l+.9,c[1],6.4,.3,2.1,s),c=a(2.2,0),i.ybox(t,Jt.truck,c[0],l+1.95,c[1],1.8,1.8,2.1,s),i.ybox(t,Jt.truckD,c[0],l+2.92,c[1],2,.15,2.3,s),c=a(2.6,0),i.ybox(t+":g",z.glass,c[0],l+2.25,c[1],1,.8,2.14,s),c=a(3.45,0),i.cyl(t,Jt.boiler,c[0],c[1],l+1.05,l+2.3,.75,12,0),i.cyl(t,z.copper,c[0],c[1],l+2.3,l+3.5,.18,8,0),c=a(-1.1,0),i.ybox(t,Jt.crateD,c[0],l+1.1,c[1],4,.12,2.2,s);for(let h of[-1.05,1.05])c=a(-1.1,h),i.ybox(t,Jt.crateD,c[0],l+1.55,c[1],4,.8,.08,s);c=a(-1.6,0),i.ybox(t,Jt.crate,c[0],l+1.75,c[1],1.1,1.1,1.1,s),c=a(-.4,.3),i.ybox(t,Jt.sack,c[0],l+1.45,c[1],1,.5,.8,s+.2);for(let h of[-2.2,2.4])for(let u of[-1.05,1.05])c=a(h,u),i.ybox(t,Jt.tire,c[0],l+.5,c[1],1,1,.32,s)}function sd(i){let t=et.F3+.03,e=pr.y,n=(()=>{let c=7;return()=>(c=(c*9301+49297)%233280)/233280})(),s=It.z0+.5+pr.w;for(let c of[-17,-11,-5])Lc(i,"WH:p",c,s-2.6,t,4.4,0,2.7,{seed:c});for(let c of[5,10.4])Lc(i,"WH:p",c,s-2.6,t,3.6,0,2.7,{seed:c});for(let c of[-18.5,-12.5,-6.5])Lc(i,"WH:p",-22,c,t,3.6,Math.PI/2,2.7,{seed:c});for(let c of[-18.5,-12.5,-8])Lc(i,"WH:p",14,c,t,3,Math.PI/2,2.7,{seed:c});br(i,"WH:p",-14,-8.2,t,6),br(i,"WH:p",-14,-5.2,t,5,.2),xn(i,"WH:p",5.5,-5,t,3,.2,n),xn(i,"WH:p",-16.6,-17.3,t,3,.1,n),xn(i,"WH:p",-12.4,-17.6,t,3,-.2,n),xn(i,"WH:p",.4,-16.4,t,3,0,n);for(let[c,h]of[[9,-16.6],[10,-16.1],[11,-16.7],[9.6,-15.4]])Dh(i,"WH:p",c,h,t,.95,.36);br(i,"WH:p",-8.4,-18.2,t,4,.1),Ih(i,"WH:p",gn.x,gn.z,t,2.6,1.2),i.ybox("WH:p",Jt.cloth,gn.x,t+.79,gn.z,2.4,.02,1,0);for(let[c,h,u]of[[-.6,-.95,0],[.6,-.95,0],[0,.95,Math.PI]])Ph(i,"WH:p",gn.x+c,gn.z+h,t,u);i.ybox("WH:p",Jt.herb,gn.x-.5,t+.9,gn.z,.5,.2,.4,.3),Dh(i,"WH:p",gn.x+.7,gn.z+.1,t+.78,.4,.16);for(let c of[-14,-6,2])for(let h of[-8,-16.5])y_(i,"WH:p",c,h,et.EAVE-.2,1.6);b_(i,"WH:p",It.x1-.45,Nn.z+2.6,e,Math.PI/2,5),Li(i,"WH:p",It.x1-1.4,Nn.z-2.2,e,.9,0,"#7D7A62"),Li(i,"WH:p",It.x1-1.3,Nn.z-3.2,e,.8,.2,"#6E6A55"),Li(i,"WH:p",It.x1-2.4,It.z0+1.2,e,.9,0,"#7D7A62"),M_(i,"WH:p",7.4,s-.1,e,Math.PI/2);for(let c of[-19,-13.5,-10])xn(i,"WH:p",c,It.z0+1.2,e,2,0,n);br(i,"WH:p",-22.4,-4.6,e,3,Math.PI/2);let[r,o,a,l]=si;for(let c of[r.x0+1.3,r.x0+4.2,r.x1-2])xn(i,"F3:p",c,Ce.z0+1.1,t,3,0,n);br(i,"F3:p",r.x0+2,dn.z0-1.3,t,4),v_(id("bombs","F3"),"F3:p",o.x1-Gt/2,Ce.z0+.2,t),xn(i,"F3:p",o.x0+.65,Ce.z0+2.6,t,2,Math.PI/2,n),Li(i,"F3:p",o.x0+.9,dn.z0-1,t,.9);for(let c of[a,l]){let h=(c.x0+c.x1)/2;Ih(i,"F3:p",h,Ce.z0+2.6,t,2,1,.76,0),Ph(i,"F3:p",h,Ce.z0+1.7,t,0),Uc(i,"F3:p",h,Ce.z0+.35,t,c.x1-c.x0-1.4,0,2)}Uc(i,"F3:p",mn.x0+3.5,mn.z0+.4,t,4.5,0,2.2),Li(i,"F3:p",mn.x1-1,mn.z0+1.2,t,.8),i.cyl("F3:p",Jt.mop,mn.x0+1,mn.z0+1.6,t,t+.5,.28,10,0);for(let c of[-10,6])i.ybox("F3:p",z.woodD,c,t+.23,dn.z1-.8,1.8,.45,.45,0);Uc(i,"F3:p",He.x1-.8,0,t,3,Math.PI/2,2.2),xn(i,"F3:p",19.2,6.2,t,2,0,n),Ih(i,"F3:p",21,-13,t,1.6,1,.76,0),Ph(i,"F3:p",21,-12,t,Math.PI),xn(i,"F4:p",21,-16.6,et.F4,2,0,n),Uc(i,"F4:p",He.x1-.8,-4,et.F4,3,Math.PI/2,2.2),Li(i,"F4:p",19.6,-10,et.F4,1);for(let c of[-20,-14,-8])xn(i,"F1:p",c,It.z0+2.4,.02,3,0,n);xn(i,"F1:p",-16,-8.5,.02,2,.3,n),br(i,"F1:p",-10,-6,.02,6),S_(i,"cp:p",-30.6,-8.6,-Math.PI/2),xn(i,"cp:p",-33.6,-15.6,-.45+.2,3,0,n),xn(i,"cp:p",-27,-15.8,-.45+.2,2,0,n),xn(i,"yard:p",re.x0+3,-14,-.45+.2,3,.2,n),xn(i,"yard:p",re.x0+3.4,-9,-.45+.2,2,-.1,n);for(let[c,h]of[[-27.4,-1.5],[-28.4,-1],[-27.8,-.1]])i.cyl("yard:p",Jt.truck,c,h,-.45+.2,-.45+1.25,.36,12,0),i.cyl("yard:p",Jt.truckD,c,h,-.45+.7,-.45+.76,.37,12,0);i.ybox("yard:p",z.woodD,-40,-.45+.75,1.5,2.2,.1,1.1,.4),i.ybox("yard:p",Jt.tire,-40.8,-.45+.55,1.1,.7,.7,.12,.4);for(let[c,h]of[[-38.5,5.5],[-29.2,1.8]])i.cyl("yard:p",z.steelD,c,h,-.45+.2,-.45+3.8,.09,8,0),i.box("yard:p",z.steelD,c-.22,-.45+3.8,h-.22,c+.22,-.45+3.9,h+.22),i.box("yard:e",Jt.lamp,c-.18,-.45+3.9,h-.18,c+.18,-.45+4.3,h+.18);return nd(i),i}var Xt=86,Nc={x0:-Xt,x1:Xt,z0:-Xt,z1:Xt,base:-.45-6},we={street:"#B1ADA5",walk:"#D6D0C5",curb:"#C2BBAF",plot:"#D6CFC1",plotLine:"#C8BFAF",yard:"#CFC7B8",yardL:"#C4BBAB",wall:["#F1EDE6","#ECE7DF","#EFEAE2","#E8E2D8"],plinth:"#D9D2C6",eave:"#CBC4B8",roof:["#BDB8AF","#C4BFB6","#B6B2AA","#C8C2B8"],ridge:"#A9A399",soil:"#8F806C",soil2:"#A89A86",frame:"#4B4741",ywall:"#D9D0C1",ycap:"#C2B8A7",gate:"#5E676A",chim:"#A08068"};function E_(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0,t/4294967296)}function rd(i,t,e,n,s,r,o,a,l={}){let c=-.45+.17,h=o*3.1,u=c+h,d=we.wall[Math.floor(a()*we.wall.length)],f=we.roof[Math.floor(a()*we.roof.length)],g=(F,B,W,$,I,O,L,X)=>t==="x"?i.box("ctx",L,F,B,W,$,I,O,X):i.box("ctx",L,W,B,F,O,I,$,X),_=(F,B,W)=>t==="x"?[F,B,W]:[W,B,F];if(g(e,c,s,n,c+.5,r,we.plinth,"b"),g(e+.04,c+.5,s+.04,n-.04,u,r-.04,d,"b"),g(e-.12,u-.25,s-.12,n+.12,u,r+.12,we.eave),l.flat){if(g(e,u,s,n,u+.6,r,we.plinth),l.chim){let F=e+(n-e)*.7,B=(s+r)/2;i.cyl("ctx",we.chim,t==="x"?F:B,t==="x"?B:F,u+.6,u+6.5,.55,8)}return u+.6}let m=.45,p=r-s,b=p*.24,x=(s+r)/2,y=u+b,M=e-m,T=n+m,A=s-m,C=r+m,S=u-m*.58;i.plate("ctx",f,[_(M,S,A),_(T,S,A),_(T,y,x),_(M,y,x)],.22),i.plate("ctx",f,[_(T,S,C),_(M,S,C),_(M,y,x),_(T,y,x)],.22);let v=[_(e+.04,u,s+.04),_(e+.04,u,r-.04),_(e+.04,y-.1,x)],P=[_(n-.04,u,r-.04),_(n-.04,u,s+.04),_(n-.04,y-.1,x)];return t==="x"?(i.tri("ctx",d,...v),i.tri("ctx",d,...P)):(i.tri("ctx",d,v[1],v[0],v[2]),i.tri("ctx",d,P[1],P[0],P[2])),g(M,y-.05,x-.16,T,y+.16,x+.16,we.ridge),y}function w_(i,t,e,n,s,r,o,a={}){var T;i.box("ctx",we.curb,t,-.45,e,n,-.45+.15,s,"b"),i.box("ctx",we.walk,t+.25,-.45+.15,e+.25,n-.25,-.45+.17,s-.25,"b");let l=1.8,c=t+l,h=n-l,u=e+l,d=s-l,f=h-c,g=d-u,_=(T=a.floors)!=null?T:2,m=Math.min(9,Math.min(f,g)/2-2.5);if(m<7){let A=f>=g?"x":"z",C=A==="x"?c:u,S=A==="x"?h:d,v=A==="x"?u:c,P=A==="x"?d:h,F=C;for(;F<S-4;){let B=7+r()*8;S-(F+B)<6&&(B=S-F),rd(i,A,F,F+B-.3,v,P,_+(r()<.35?1:0),r,{flat:r()<.12,chim:r()<.5}),F+=B}return}let p=[["x",c,h,u,u+m],["x",c,h,d-m,d],["z",u+m,d-m,c,c+m],["z",u+m,d-m,h-m,h]];for(let[A,[C,S,v,P,F]]of p.entries()){let B=S,W=!0;for(;B<v-3;){let $=7+r()*9;v-(B+$)<6&&($=v-B);let I=A<2&&(W||B+$>=v-.01);if(!I&&r()<.16&&v-B>14){B+=3;continue}let O=_+(I?1:0)+(r()<.25?1:0)-(r()<.15&&!I?1:0),L=I?0:r()*.8,X=!I&&r()<.12,tt=P+(P===u||P===c?L:0),it=F-(F===d||F===h?L:0);rd(i,C,B,B+$-.25,tt,it,Math.max(1,O),r,{flat:X,chim:X&&r()<.7}),B+=$,W=!1}}let b=c+m,x=h-m,y=u+m,M=d-m;if(x-b>2&&M-y>2){i.box("ctx","#CFC8BA",b,-.45+.17,y,x,-.45+.19,M,"b");let A=Math.max(1,Math.round((x-b)*(M-y)/120));for(let C=0;C<A;C++)o.push([b+2.5+r()*Math.max(0,x-b-5),y+2.5+r()*Math.max(0,M-y-5),.85+r()*.35])}}function od(i){let t=[];i.quad("ground",we.street,[-Xt,-.45,Xt],[Xt,-.45,Xt],[Xt,-.45,-Xt],[-Xt,-.45,-Xt]);let e=[[[-Xt,Xt],[Xt,Xt]],[[Xt,Xt],[Xt,-Xt]],[[Xt,-Xt],[-Xt,-Xt]],[[-Xt,-Xt],[-Xt,Xt]]];for(let[f,g]of e)i.quad("base",we.soil,[f[0],-.45-1.2,f[1]],[g[0],-.45-1.2,g[1]],[g[0],-.45,g[1]],[f[0],-.45,f[1]]),i.quad("base",we.soil2,[f[0],Nc.base,f[1]],[g[0],Nc.base,g[1]],[g[0],-.45-1.2,g[1]],[f[0],-.45-1.2,f[1]]);i.box("base",we.frame,-Xt-1.2,Nc.base-1.6,-Xt-1.2,Xt+1.2,Nc.base,Xt+1.2,"t");let n=re.x0-2,s=he.x1+4,r=Math.min(re.z0,he.z0)-3,o=he.z1+4;i.box("ground",we.curb,n,-.45,r,s,-.45+.15,o,"b"),i.box("ground",we.walk,n+.25,-.45+.15,r+.25,s-.25,-.45+.17,o-.25,"b"),i.box("yard",we.yard,re.x0,-.45+.17,re.z0,re.x1,-.45+.2,re.z1,"b");for(let f=re.x0+4;f<re.x1;f+=4)i.box("yard",we.yardL,f-.05,-.45+.2,re.z0,f+.05,-.45+.21,re.z1,"b");let a=-.45+.2,l=2.6,c=(f,g,_,m)=>{i.box("yard",we.ywall,f,a,g,_,a+l,m),i.box("yard",we.ycap,f-.12,a+l,g-.12,_+.12,a+l+.18,m+.12)};c(re.x0-.4,re.z0-.4,re.x0,re.z1+.4),c(re.x0,re.z0-.4,he.x0-.3,re.z0),c(re.x0,re.z1,Rn.x-Rn.w/2-.6,re.z1+.4),c(Rn.x+Rn.w/2+.6,re.z1,he.x0-.3,re.z1+.4);for(let f=re.z0+4;f<re.z1;f+=6)i.box("yard",we.ycap,re.x0-.6,a,f-.3,re.x0+.2,a+l+.1,f+.3);for(let f of[-1,1]){let g=Rn.x+f*(Rn.w/2+.3);i.box("yard",we.ycap,g-.45,a,re.z1-.25,g+.45,a+4.2,re.z1+.65),i.box("yard",we.ywall,g-.55,a+4.2,re.z1-.35,g+.55,a+4.45,re.z1+.75)}i.box("yard",we.gate,Rn.x-Rn.w/2-.3,a+3.7,re.z1+.05,Rn.x+Rn.w/2+.3,a+3.95,re.z1+.3);for(let f of[-1,1]){let g=Rn.x+f*Rn.w/2;i.ybox("yard",we.gate,g-f*1,a+1.4,re.z1-1.3,2.9,2.6,.08,f*1.15)}let h=(f,g,_,m)=>{let p=Math.hypot(_-f,m-g),b=Math.floor(p/6);for(let x=0;x<b;x++){let y=(x+.25)/b,M=(x+.6)/b,T=f+(_-f)*y,A=g+(m-g)*y,C=f+(_-f)*M,S=g+(m-g)*M;i.box("ground","#E9E6DF",Math.min(T,C)-.1,-.45,Math.min(A,S)-.1,Math.max(T,C)+.1,-.45+.02,Math.max(A,S)+.1,"b")}};h(-Xt,19,Xt,19),h(-56,-Xt,-56,Xt);let u=E_(23),d=[[-Xt,-Xt,-62,-36,{}],[-54,-Xt,-12,-36,{}],[-4,-Xt,34,-36,{floors:2}],[42,-Xt,Xt,-36,{}],[-Xt,-28,-62,13,{}],[36,-28,Xt,13,{}],[-Xt,26,-62,Xt,{}],[-50,26,-10,Xt,{}],[-2,26,40,Xt,{floors:2}],[48,26,Xt,Xt,{}]];for(let[f,g,_,m,p]of d)w_(i,f,g,_,m,u,t,p);for(let f=-44;f<=22;f+=8)Math.abs(f-Rn.x)>5&&Math.abs(f)>5&&Math.abs(f-nn.sw.crate[0])>4&&t.push([f,he.z1+2.6,1]);for(let f=he.z0+1;f<=0;f+=7.5)t.push([he.x1+2.4,f,.9]);return t.push([re.x0+2.4,3.5,1.1],[re.x0+2.4,-2.5,.95]),{trees:t,near:()=>!1}}var Bc=class{constructor(t,e,n={}){this.cam=t,this.dom=e,this.o=Object.assign({minR:12,maxR:980,minPhi:.12,maxPhi:1.32,bounds:null,onChange:()=>{}},n),this.cur={th:0,ph:.9,r:500,t:new N},this.goal={th:0,ph:.9,r:500,t:new N},this.fly=null,this.now=()=>performance.now(),this.wheelOn=!1,this.ptrs=new Map,this.enabled=!0,this.touchMode="page",this._ev()}set(t,e=!1){let n=this.goal;t.th!==void 0&&(n.th=t.th),t.ph!==void 0&&(n.ph=t.ph),t.r!==void 0&&(n.r=t.r),t.t&&n.t.copy(t.t),this._clamp(),e&&(this.cur.th=n.th,this.cur.ph=n.ph,this.cur.r=n.r,this.cur.t.copy(n.t),this.fly=null),this.o.onChange()}flyTo(t,e=1.2){var o,a,l;let n={th:this.cur.th,ph:this.cur.ph,r:this.cur.r,t:this.cur.t.clone()},s=(o=t.th)!=null?o:n.th;for(;s-n.th>Math.PI;)s-=Math.PI*2;for(;s-n.th<-Math.PI;)s+=Math.PI*2;let r={th:s,ph:(a=t.ph)!=null?a:n.ph,r:(l=t.r)!=null?l:n.r,t:(t.t||n.t).clone()};this.fly={from:n,to:r,t0:this.now(),dur:e*1e3},Object.assign(this.goal,{th:r.th,ph:r.ph,r:r.r}),this.goal.t.copy(r.t),this.o.onChange()}_clamp(){let t=this.goal,e=this.o;if(t.r=Math.min(e.maxR,Math.max(e.minR,t.r)),t.ph=Math.min(e.maxPhi,Math.max(e.minPhi,t.ph)),e.bounds){let n=e.bounds;t.t.x=Math.min(n.x1,Math.max(n.x0,t.t.x)),t.t.z=Math.min(n.z1,Math.max(n.z0,t.t.z))}}update(t){let e=this.cur,n=this.goal;if(this.fly){let s=this.fly,r=Math.min(1,(this.now()-s.t0)/s.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;e.th=s.from.th+(s.to.th-s.from.th)*o,e.ph=s.from.ph+(s.to.ph-s.from.ph)*o;let a=Math.sin(Math.PI*o)*Math.min(.35,s.from.t.distanceTo(s.to.t)/900);e.r=Math.exp(Math.log(s.from.r)+(Math.log(s.to.r)-Math.log(s.from.r))*o)*(1+a),e.t.lerpVectors(s.from.t,s.to.t,o),r>=1&&(this.fly=null)}else{let s=1-Math.exp(-t*12);e.th+=(n.th-e.th)*s,e.ph+=(n.ph-e.ph)*s,e.r=Math.exp(Math.log(e.r)+(Math.log(n.r)-Math.log(e.r))*s),e.t.lerp(n.t,s)}return this._apply(),!!this.fly||Math.abs(n.th-e.th)>1e-4||Math.abs(n.ph-e.ph)>1e-4||Math.abs(n.r-e.r)>.01||n.t.distanceToSquared(e.t)>1e-4}_apply(){let t=this.cur,e=Math.sin(t.ph);this.cam.position.set(t.t.x+t.r*e*Math.sin(t.th),t.t.y+t.r*Math.cos(t.ph),t.t.z+t.r*e*Math.cos(t.th)),this.cam.lookAt(t.t)}_ground(t,e,n){let s=this.dom.getBoundingClientRect(),r=new Bt((t-s.left)/s.width*2-1,-((e-s.top)/s.height)*2+1),o=new _o;o.setFromCamera(r,this.cam);let a=new N;return o.ray.intersectPlane(new Ke(new N(0,1,0),-n),a)?a:null}_stopFly(){this.fly&&(this.goal.th=this.cur.th,this.goal.ph=this.cur.ph,this.goal.r=this.cur.r,this.goal.t.copy(this.cur.t),this.fly=null)}zoom(t,e,n){this._stopFly();let s=this.goal,r=s.r;if(s.r=Math.min(this.o.maxR,Math.max(this.o.minR,s.r*t)),e!==void 0){let o=this._ground(e,n,s.t.y);if(o){let a=1-s.r/r;s.t.x+=(o.x-s.t.x)*a,s.t.z+=(o.z-s.t.z)*a}}this._clamp(),this.o.onChange()}rotate(t,e){this._stopFly(),this.goal.th+=t,this.goal.ph+=e,this._clamp(),this.o.onChange()}pan(t,e){this._stopFly();let n=this.goal,s=this.dom.clientHeight||600,r=2*n.r*Math.tan(this.cam.fov*Math.PI/360)/s,o=this.cur.th,a=Math.cos(o),l=-Math.sin(o),c=-Math.sin(o),h=-Math.cos(o),u=1/Math.max(.35,Math.cos(this.cur.ph));n.t.x+=(-t*a+e*c*Math.min(u,2.2))*r,n.t.z+=(-t*l+e*h*Math.min(u,2.2))*r,this._clamp(),this.o.onChange()}_ev(){let t=this.dom;t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("pointerdown",n=>{var s,r;if(this.enabled){this.wheelOn=!0,this.ptrs.set(n.pointerId,{x:n.clientX,y:n.clientY,b:n.button,sh:n.shiftKey,t:n.pointerType});try{t.setPointerCapture(n.pointerId)}catch{}this._pinch=null,(r=(s=this.o).onStart)==null||r.call(s)}});let e=n=>{var s,r;this.ptrs.delete(n.pointerId),this._pinch=null,this.ptrs.size||(r=(s=this.o).onEnd)==null||r.call(s)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",e),t.addEventListener("pointermove",n=>{let s=this.ptrs.get(n.pointerId);if(!s||!this.enabled)return;let r=n.clientX-s.x,o=n.clientY-s.y;if(s.x=n.clientX,s.y=n.clientY,this.ptrs.size>=2){let[a,l]=[...this.ptrs.values()],c=(a.x+l.x)/2,h=(a.y+l.y)/2,u=Math.hypot(a.x-l.x,a.y-l.y),d=Math.atan2(l.y-a.y,l.x-a.x);if(this._pinch){this.zoom(this._pinch.d/Math.max(10,u),c,h),this.pan(c-this._pinch.mx,h-this._pinch.my);let f=d-this._pinch.a;f>Math.PI&&(f-=Math.PI*2),f<-Math.PI&&(f+=Math.PI*2),this.rotate(f,0)}this._pinch={d:u,mx:c,my:h,a:d};return}if(s.t==="touch"&&this.touchMode==="page"){this.rotate(-r*.006,0);return}s.b===2||s.b===1||s.sh||n.shiftKey?this.pan(r,o):this.rotate(-r*.0055,-o*.0045)}),t.addEventListener("wheel",n=>{var r,o;if(!this.enabled)return;if(!this.wheelOn){(o=(r=this.o).onWheelHint)==null||o.call(r);return}n.preventDefault();let s=n.deltaMode===1?n.deltaY*16:n.deltaY;this.zoom(Math.exp(Math.max(-1,Math.min(1,s*.0015))),n.clientX,n.clientY)},{passive:!1}),t.addEventListener("pointerleave",()=>{})}};var Lh=["F1","F2","F3","WH","F4","R3","roof","cp","yard","ground","base","ctx"],Oc=["F1","F2","F3","WH","F4","R3","roof","cp"],ad={F1:0,cp:0,F2:1,F3:2,WH:2,F4:3,R3:3,roof:4},T_={F1:0,F2:et.F2,F3:et.F3,WH:et.F3,F4:et.F4,R3:et.F4,roof:et.EAVE,cp:0},Sr={ov:{t:[-7,7,-3],r:104,ph:.98,th:-.56},ext:{t:[-9,9,-4],r:172,ph:1.12,th:-.5},sec:{t:[-6,10,-9],r:100,ph:1.26,th:-.12}},A_=[.29,.27,.25];function Fh(i){return i.side=Tn,i.clipShadows=!0,i.clipIntersection=!0,i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) gl_FragColor = vec4(${A_.map(e=>e.toFixed(3)).join(",")}, 1.0);`)},i.customProgramCacheKey=()=>"cap",i}function Uh(i){let t=new Ye;return t.setAttribute("position",new ke(i.p,3)),t.setAttribute("normal",new ke(i.n,3)),t.setAttribute("color",new ke(i.c,3)),t.computeBoundingSphere(),t}function R_(){let i=(l,c)=>{let h=l.attributes.position.count,u=new Float32Array(h*3);for(let d=0;d<h;d++)u.set(c,d*3);return l.setAttribute("color",new ke(u,3)),l},t=(l,c,h,u)=>{let d=Zf(new ms(l,1).deleteAttribute("normal").deleteAttribute("uv"));return d.computeVertexNormals(),d.translate(c,h,u).toNonIndexed()},e=[t(1.25,0,3.7,0),t(.95,.85,3.2,.35),t(.9,-.7,3.35,-.55),t(.8,.1,4.5,-.25)],n=new Ye;for(let l of["position","normal"]){let c=e.reduce((d,f)=>d+f.attributes[l].array.length,0),h=new Float32Array(c),u=0;for(let d of e)h.set(d.attributes[l].array,u),u+=d.attributes[l].array.length;n.setAttribute(l,new ke(h,3))}let s=new Ci(.16,.24,2.7,5,1,!0).translate(0,1.35,0).deleteAttribute("uv"),r=new ne("#7A6A58"),o=[i(n,[1,1,1]),i(s.toNonIndexed(),[r.r,r.g,r.b])],a=new Ye;for(let l of["position","normal","color"]){let c=o.reduce((d,f)=>d+f.attributes[l].array.length,0),h=new Float32Array(c),u=0;for(let d of o)h.set(d.attributes[l].array,u),u+=d.attributes[l].array.length;a.setAttribute(l,new ke(h,3))}return a}function C_(i={}){let t=new di;for(let m of Object.keys(Ts))delete Ts[m];let e=od(t);Kf(t),sd(t);let n=t.out(),s=new _e,r={};for(let m of Lh)r[m]=new _e,r[m].name=m,s.add(r[m]);let o=new Ke(new N(-1,0,0),0),a=new Ke(new N(0,0,-1),0),l={},c={},h={},u=m=>new hi({vertexColors:!0,roughness:.9,metalness:0,...m});for(let m of Oc)l[m]=new Ke(new N(0,-1,0),1e5),c[m]=new Ke(new N(0,-1,0),1e5),h[m]=Fh(u({})),h[m].clippingPlanes=[o,a,l[m]],h[m+":g"]=Fh(u({roughness:.3,metalness:.15})),h[m+":g"].clippingPlanes=[o,a,l[m]],h[m+":p"]=Fh(u({})),h[m+":p"].clippingPlanes=[o,a,c[m]],h[m+":e"]=new qe({vertexColors:!0,toneMapped:!1,clippingPlanes:[o,a,c[m]],clipIntersection:!0}),h[m+":u"]=u({});let d=[];h.ground=u({roughness:.95}),h.base=u({roughness:1}),h.ctx=u({}),h.yard=u({}),h["yard:p"]=u({}),h["yard:e"]=new qe({vertexColors:!0,toneMapped:!1});let f=[],g=(m,p,b)=>{let x=m.split(":")[0],y=h[m]||h[x];if(!y)return null;let M=new le(Uh(p),y),T=m.endsWith(":e");return M.castShadow=!T&&x!=="ground"&&x!=="base",M.receiveShadow=!T,(b||r[x]).add(M),f.push(M),M};for(let[m,p]of Object.entries(n))g(m,p);let _={};for(let[m,{g:p,k:b}]of Object.entries(Ts)){let x=new _e,y=new _e;y.name=m,y.add(x),r[p].add(y);for(let[A,C]of Object.entries(b.out()))g(A,C,x);let M=new Wn().setFromObject(x),T=M.getCenter(new N);x.position.copy(T).negate(),y.position.copy(T),y.userData={center:T.clone(),box:M,home:T.clone(),group:p},_[m]=y}if(i.trees!==!1){let m=R_(),p=new hi({vertexColors:!0,roughness:.95}),x=(y=>{if(!y.length)return null;let M=new Qr(m,p,y.length),T=new ve,A=new Ln,C=new N,S=new N,v=new ne,P=new N(0,1,0),F=new ne("#82966B"),B=new ne("#A2AD80");return y.forEach(([W,$,I],O)=>{let L=Math.sin(W*12.9898+$*78.233)*43758.5453,X=L-Math.floor(L);A.setFromAxisAngle(P,X*6.28),C.set(I*(.9+X*.2),I*(.95+X*.2),I*(.9+X*.2)),S.set(W,-.45+.15,$),T.compose(S,A,C),M.setMatrixAt(O,T),v.copy(F).lerp(B,X),M.setColorAt(O,v)}),M.castShadow=!0,M.receiveShadow=!0,M.frustumCulled=!1,M})(e.trees);x&&r.ctx.add(x)}return{root:s,groups:r,parts:_,M:h,planes:{px:o,pz:a,pyS:l,pyP:c,gb:d},meshes:f}}function cd(i,t={}){var ct,Q;let e=(ct=t.mobile)!=null?ct:matchMedia("(max-width: 720px)").matches||/Mobi|Android/i.test(navigator.userAgent),n=new Pc({antialias:!0,alpha:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.preserve});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.shadowMap.enabled=!0,n.shadowMap.type=La,n.shadowMap.autoUpdate=!1,n.toneMapping=Va,n.toneMappingExposure=(Q=t.exposure)!=null?Q:1,n.localClippingEnabled=!0,n.domElement.style.cssText="display:block;width:100%;height:100%;touch-action:pan-y;outline:none",i.appendChild(n.domElement);let s=new Jr,r=new an(30,1,1,4e3),o=C_(t);s.add(o.root),s.add(new mo("#EEF2F5","#B5AB9A",1.3));let a=new xo("#FFF2DF",2.6),l=new N(-.5,.78,.38).normalize(),c=new N(0,10,0);a.position.copy(c).addScaledVector(l,400),a.target.position.copy(c),s.add(a,a.target),a.castShadow=!0;let h=e?2048:4096;a.shadow.mapSize.set(h,h),a.shadow.bias=-3e-4,a.shadow.normalBias=.04,a.shadow.radius=2;let u=k=>{let ut=a.shadow.camera,Ct=new ve().lookAt(a.position,a.target.position,new N(0,1,0)).setPosition(a.position).invert(),St=1e9,kt=-1e9,fe=1e9,U=-1e9,jt=1e9,Lt=-1e9,ft=new N;for(let wt of[k.x0,k.x1])for(let ue of[k.y0,k.y1])for(let yt of[k.z0,k.z1])ft.set(wt,ue,yt).applyMatrix4(Ct),St=Math.min(St,ft.x),kt=Math.max(kt,ft.x),fe=Math.min(fe,ft.y),U=Math.max(U,ft.y),jt=Math.min(jt,ft.z),Lt=Math.max(Lt,ft.z);Object.assign(ut,{left:St,right:kt,bottom:fe,top:U,near:-Lt-5,far:-jt+5}),ut.updateProjectionMatrix(),n.shadowMap.needsUpdate=!0},d=t.shadowBox||{x0:-60,x1:40,z0:-32,z1:26,y0:-.45,y1:30};u(d);let f=!0,g=!0,_=!0,m=performance.now(),p=[],b=[],x=new Bc(r,n.domElement,{minR:6,maxR:700,minPhi:.1,maxPhi:1.45,bounds:{x0:-90,x1:90,z0:-90,z1:90},onChange:()=>{f=!0},onStart:()=>{for(let k of p)k()},onWheelHint:()=>{for(let k of b)k()},...t.controls||{}}),y=(k,ut)=>{var kt;let Ct=typeof k=="string"?Sr[k]:k,St={th:Ct.th,ph:Ct.ph,r:Ct.r,t:new N(...Ct.t)};ut?x.set(St,!0):x.flyTo(St,(kt=Ct.dur)!=null?kt:1.3)};y(t.view||"ov",!0);let M=o.planes,T=o.groups,A=1e5,C=null;function S(k){var kt,fe,U,jt,Lt;k=typeof k=="string"?{kind:k}:k;let ut=JSON.stringify(k);if(ut===C)return;C=ut;let Ct=k.kind;M.px.constant=A,M.pz.constant=A;for(let ft of Oc)M.pyS[ft].constant=A,M.pyP[ft].constant=A,T[ft].visible=!0;let St=()=>{M.px.constant=-A,M.pz.constant=-A};if(Ct==="ov")St(),T.roof.visible=!1,T.R3.visible=!1,M.pyS.F3.constant=et.F3+((kt=k.cut)!=null?kt:1.5),M.pyS.WH.constant=et.F4+((fe=k.wcut)!=null?fe:2.4),M.pyS.F4.constant=et.F4+((U=k.lcut)!=null?U:2),k.wcut!=null&&k.wcut<0&&(M.pyS.WH.constant=et.F3+((jt=k.cut)!=null?jt:1.5),M.pyP.WH.constant=et.F4-.7,T.F4.visible=!1);else if(Ct==="plan"){St();let ft=ad[k.floor];for(let wt of Oc)ad[wt]>ft&&(T[wt].visible=!1);k.cut!=null&&(M.pyS[k.floor].constant=T_[k.floor]+k.cut,k.floor==="F1"&&(M.pyS.cp.constant=k.cut,M.pyP.cp.constant=6))}else if(Ct==="sec"){M.px.constant=-A,M.pz.constant=(Lt=k.z)!=null?Lt:-3.6;for(let ft of Oc)M.pyS[ft].constant=-A,M.pyP[ft].constant=-A;k.noRoof&&(T.roof.visible=!1)}n.shadowMap.needsUpdate=!0,f=!0}S(t.mode||"ov");let v={x:.5,y:.5,tx:.5,ty:.5},P=()=>{let k=i.clientWidth||800,ut=i.clientHeight||500;Math.abs(v.x-.5)<1e-4&&Math.abs(v.y-.5)<1e-4?r.clearViewOffset():r.setViewOffset(k,ut,(.5-v.x)*k,(.5-v.y)*ut,k,ut)},F=k=>{if(v.x===v.tx&&v.y===v.ty)return!1;let ut=1-Math.exp(-k*5);return v.x+=(v.tx-v.x)*ut,v.y+=(v.ty-v.y)*ut,Math.abs(v.tx-v.x)+Math.abs(v.ty-v.y)<.001&&(v.x=v.tx,v.y=v.ty),P(),!0},B=()=>{let k=i.clientWidth||800,ut=i.clientHeight||500;n.setSize(k,ut,!1),r.aspect=k/ut,r.updateProjectionMatrix(),P(),f=!0},W=new ResizeObserver(B);W.observe(i),B();let $=new IntersectionObserver(k=>{g=k[0].isIntersecting,g&&(f=!0)});$.observe(i);let I=[],O=[],L=[],X=()=>{for(let k of L)k(r);n.render(s,r);for(let k of I)k(r)},tt=0,it=!1,lt=0,nt=k=>{if(!_||(requestAnimationFrame(nt),it))return;let ut=Math.max(0,Math.min(.05,(k-m)/1e3));if(m=k,!g||document.hidden)return;let Ct=mt.animating||k<mt.animUntil,St=!Ct&&mt.ambient&&k-tt>50;if(Ct||St){for(let U of O)U(ut,k/1e3);St&&(tt=k)}let kt=x.update(ut),fe=F(ut);(f||kt||fe||Ct||St)&&(X(),f=!1)};requestAnimationFrame(nt);let mt={renderer:n,scene:s,camera:r,controls:x,world:o,parts:o.parts,setView:y,VIEWS:Sr,setMode:S,mode:()=>JSON.parse(C),animating:!1,animUntil:0,ambient:!1,mobile:e,invalidate:()=>{f=!0},setCenter:(k,ut,Ct)=>{v.tx=k,v.ty=ut,Ct&&(v.x=k,v.y=ut,P(),f=!0)},hold:k=>{it=k,k?(lt=performance.now()/1e3,x.now=()=>lt*1e3):x.now=()=>performance.now()},step:k=>{lt+=k;for(let ut of O)ut(k,lt);x.update(k),X()},setShadowBox:k=>{u(k||d),f=!0},shadowDirty:()=>{n.shadowMap.needsUpdate=!0,f=!0},renderNow:()=>{x.update(1),X()},onRender:k=>I.push(k),onBeforeRender:k=>L.push(k),onFrame:k=>O.push(k),onUserStart:k=>p.push(k),onWheelHint:k=>b.push(k),dispose:()=>{_=!1,W.disconnect(),$.disconnect(),n.dispose(),n.domElement.remove()}};return mt}var V=et.F3+.04,vt=et.F4+.02,xi=.05,_n=-.45+.21,Yn=et.F3+.02,_i={kind:"ov"},I_={kind:"plan",floor:"F1",cut:2.2};var Ot=gn,Io=i=>Ve(i)+.03,ld=["l",Ot.x,V,Ot.z-1.3,[Ot.x,V,Ot.z+1.3],"talk"],zh=[[-2.6,1.4],[-2.4,-1],[2.7,2],[2.9,-1.2]].map(([i,t])=>[Ot.x+i,Ot.z+t]),hd=zh.map(([i,t])=>["n",i,V,t,[Ot.x,V,Ot.z],"look"]),kh=[[-12.4,-6.6],[-11.6,-9.8],[9.4,-6],[10.6,-9.6]],Nh=kh.map(([i,t])=>["n",i,V,t,[i<0?-16:12,V,t],"cower"]),Bh=["l",1.1,V,-17.6,[1.1,V,-10],"cower"],es=[[-2.6,-4.6],[.4,-4.3],[3.2,-4.6]],Hc=[[-3.8,-6.6],[-.2,-7],[4.2,-6.9]],Er=[[5.6,-12.4],[4.6,-14.6]],Rs=[[-1,-21.4],[4.6,-21.4]],zn=[[-14.6,-13.2],[-10.8,-15.4]],Ue=[[-15.6,-19.4],[-11.4,-19.6],[9.4,-19.4],[11.4,-18.6]],se=[7.4,-20.6],Oh=i=>es.map(([t,e])=>["g",t,V,e,[Ot.x,V,Ot.z],i]),ud=i=>Er.map(([t,e])=>["g",t,V,e,[Ot.x,V,Ot.z],i]),Co=i=>Rs.map(([t,e])=>["g",t,vt,e,[t,vt,-9],i]),zc=i=>zn.map(([t,e])=>["g",t,V,e,[Ot.x,V,Ot.z],i]),kc=i=>Ue.map(([t,e])=>["g",t,V,e,[Ot.x,V,Ot.z],i]),Ui=nn.bal,As=nn.e,Hh=-.45+.17+1.8+.02,Vc=[[Ui.crate[0],_n,13.8],[Ui.crate[0],_n,Ui.crate[1]+1.1],[Ui.crate[0],Hh,Ui.crate[1],1],[-2.6,Ui.awn.y+.02,9,1],[Ui.rungs,Ui.awn.y+.02,8.75],[Ui.rungs,Yn,8.5,1],[-2.4,V,9.2,1],[-.8,V,7.8],[-.2,V,4.5],[-1.6,V,1.6]],P_=[[27.8,_n,7],[As.crate[0]+1,_n,As.crate[1]],[As.crate[0],Hh,As.crate[1],1],[24.7,As.awn.y+.02,5,1],[24.4,As.rack.y+.02,3.3,1],[24.25,As.hood+.02,3.1,1],[24.45,Yn,3.5,1],[22.3,V,3.5,1],[19.6,V,2.9],[19.6,V,1.1],[17.2,V,-.4],[17.2,V,-1.4],[17.2,vt,-8.6,1],[17,vt,-12.4],[14,vt,-12.4,1]],On=nn.sw,ri=[{b:[0,1,2,3,4,5],mode:_i,cam:{t:[0,6,-4],r:88,ph:.94,th:.26},at:[On.crate[0],_n,On.crate[1]+1]},{b:[6],mode:_i,cam:{t:[-6,5,-3],r:104,ph:.94,th:-.3},at:[-12,_n,15.5]},{b:[7,8,9,10],mode:_i,cam:{t:[-10,4,-2],r:92,ph:.94,th:-.45},at:[-36,_n,9.5]},{b:[11],mode:_i,cam:{t:[3,V+2,-13.4],r:40,ph:1.02,th:.22},at:[Ot.x,V,Ot.z]},{b:[12,13,14,15],mode:_i,cam:{t:[0,V+3,-13],r:46,ph:1,th:.26},at:[5,vt,-22.5]},{b:[16,17],mode:_i,cam:{t:[-12,vt,-15],r:52,ph:.98,th:-.2},at:[-30,Io(-30),-10.5]}],Cs=[{p:[On.pipe,5.4,8.44],pl:[On.pipe,5.4,6],pose:"climb",path:[[On.crate[0]+.4,_n,12],[On.crate[0],_n,On.crate[1]+1],[On.crate[0],Hh,On.crate[1],1],[-21.4,On.awn.y+.02,8.75,1],[On.pipe+.4,On.awn.y+.02,8.6],[On.pipe,Yn,8.48,1],[-21.5,Yn,8.48],[-21.5,V,6.6,1]],lab:[["\u6500\u722C\u70B9\uFF1A\u8D27\u7BB1 \u2192 \u96E8\u68DA \u2192 \u843D\u6C34\u7BA1\uFF08\u9EC4\u6F06\u3001\u5E03\u6761\u6307\u5F15\uFF09",-19.8,4.6,11.4,"item"],["\u4E09\u697C\u5916\u5899\u7684\u8170\u7EBF",-24.6,Yn+2.2,9.6,"note"],["\u6742\u7269\u95F4",-20.4,V+2.6,5.6,"note"]],cam:{t:[-21.4,4.4,8.8],r:30,ph:1.2,th:-.42}},{p:[-15.6,V,6.3],pl:[-10,V,6.3],pose:"sneak",path:[[-21.5,V,6.6],[-19.2,V,6.4],[-16.9,V,6.4],[-15.6,V,6.3]],lab:[["\u6A2A\u5411\u8FC7\u9053",-9,V+2.8,6.3,"note"],["\u697C\u68AF\u95F4",-16.8,V+3,2.6,"note"],["\u6742\u7269\u95F4",-20.4,V+2.6,5.6,"note"]],cam:{t:[-14.6,V+1.2,5],r:26,ph:1.06,th:-.62}},{p:[-.2,V,-1.9],pl:[-.2,V,-6],pose:"look",path:[[-15.6,V,6.3],[-2.2,V,6.2],[-.2,V,5.2],[-.2,V,4.5],[-.2,V,-1.9]],lab:[["\u786E\u8BA4\u70B9\u4E00\uFF1A\u683C\u6805\u540E\u9762\u5C31\u662F\u4E3B\u4ED3\u5E93",-.2,V+3.4,-3,"item"],["\u70B8\u5F39\uFF08\u5F31\u70B9\u4E00\uFF09",2,V+2.4,-1.4,"item"]],cam:{t:[-.8,V+1.5,-1.6],r:22,ph:1.06,th:.12},mode:{kind:"ov",cut:2.4}},{p:[24.45,Yn,8.46],pl:[24.45,Yn,3],pose:"sidle",path:[[-.2,V,-1.9],[-.2,V,4.5],[0,V,6.4],[0,V,8.4],[2.1,V,9.6],[3.3,Yn,8.46,1],[24.45,Yn,8.46]],lab:[["\u5357\u4FA7\u4E2D\u592E\u7A81\u51FA\u7684\u9633\u53F0",0,V+3.4,10.4,"item"],["\u9633\u53F0\u897F\u4FA7\u4E0B\u9762\u4E5F\u6709\u6500\u722C\u70B9\uFF08\u722C\u9489\uFF09",-4.6,4.2,11.6,"note"],["\u6CBF\u5916\u5899\u8170\u7EBF\u7ED5\u5230\u53F3\u4FA7",14,Yn+2.4,9.6,"note"]],cam:{t:[8,6,8],r:46,ph:1.12,th:.42}},{p:[22.3,V,3.5],pl:[18,V,3.5],pose:"sneak",path:[[24.45,Yn,8.46],[24.45,Yn,3.5],[23.1,V,3.5,1],[22.3,V,3.5]],lab:[["\u53F3\u4FA7\u5916\u5899\u7684\u7A97",24.8,V+3.8,3.5,"item"],["\u7A97\u4E0B\u7684\u6500\u722C\u70B9\uFF1A\u8D27\u7BB1 \u2192 \u96E8\u68DA \u2192 \u82B1\u67B6 \u2192 \u7A97\u6963",26.6,3.2,3.2,"note"],["\u53F3\u4FA7\u7684\u623F\u95F4",20,V+2.6,5.4,"note"]],cam:{t:[24,4.8,4.2],r:27,ph:1.08,th:.92}},{p:[16.8,vt,-12.4],pl:[10,vt,-12.4],pose:"look",path:[[22.3,V,3.5],[19.6,V,2.9],[19.6,V,1.1],[17.2,V,-.4],[17.2,V,-1.4],[17.2,vt,-8.6,1],[17.6,vt,-10.4],[16.8,vt,-12.4]],lab:[["\u786E\u8BA4\u70B9\u4E8C\uFF1A\u4ECE\u7A97\u91CC\u770B\u5230\u4E3B\u4ED3\u5E93",12.6,vt+3.4,-12.6,"item"],["\u6B66\u5668\uFF08\u5F31\u70B9\u4E8C\uFF09",14.8,vt+2.4,-9.4,"item"],["\u53F3\u4FA7\u697C\u68AF",17.2,V+2.6,-4.6,"note"]],cam:{t:[14.8,vt+1,-11.2],r:26,ph:.98,th:1.2},mode:{kind:"ov",wcut:1.2}},{p:null,path:[[-36,_n,15],[-36,_n,7.5],[-31,_n,6.2],[-24.6,xi,6.2],[-17.5,xi,2.5],[-17.5,xi,-1.2],[-17.5,V,-1.2,1],[-17.5,V,2.6],[-15.6,V,6.3],[14.25,V,6.2],[14.25,V,-4.2],[Ot.x,V,Ot.z+1.3]],tp:[Vc,P_],lab:[["\u70B8\u5F39 \u2192 \u7EC4\u7EC7\u6210\u5458\u4ECE\u9633\u53F0\u4E0B\u7684\u6500\u722C\u70B9\u722C\u4E0A\u6765\uFF0C\u6F5C\u5165\u5C0F\u4ED3\u5E93\u3001\u63D0\u524D\u57CB\u4F0F",-1.2,V+5.2,4,"item"],["\u6B66\u5668 \u2192 \u7EC4\u7EC7\u6210\u5458\u4ECE\u4E1C\u5899\u7684\u6500\u722C\u70B9\u722C\u5230\u7A97\u6237\uFF0C\u6F5C\u5165\u3001\u63A7\u5236\u6B66\u5668",16,vt+4.2,-11,"item"],["\u73A9\u5BB6\uFF1A\u626E\u6210\u751F\u610F\u4EBA\u4ECE\u6B63\u9762\u8FDB\u5165",-33,3.4,7,"note"]],cam:{t:[-6,5,-3],r:98,ph:.94,th:-.3}},{p:[-20,xi,6.2],pl:[-17.5,xi,2],pose:"walk",mode:I_,path:[[-36,_n,15],[-36,_n,7.5],[-31,_n,6.2],[-24.6,xi,6.2],[-20,xi,6.2]],lab:[["\u9662\u5B50",-40,2.4,-1,"note"],["\u8F66\u68DA\uFF1A\u8FD9\u65F6\u53EA\u662F\u9662\u5B50\u65C1\u7684\u4E00\u90E8\u5206",-30.5,4.2,-12.6,"item"],["\u4E00\u697C\u5927\u5385",-13.6,3,4.4,"note"]],cam:{t:[-25,1.4,1.5],r:36,ph:1.04,th:-.85}},{p:[-15.6,V,6.3],pl:[-5,V,6.3],pose:"walk",path:[[-20,xi,6.2],[-17.5,xi,2.6],[-17.5,xi,-1.2],[-17.5,V,-1.2,1],[-17.5,V,2.6],[-16.4,V,5],[-15.6,V,6.3]],lab:[["\u7535\u68AF",-17.5,V+3.2,-1.4,"item"],["\u697C\u68AF\u95F4",-16.6,V+2.8,3,"note"],["\u8FD9\u6B21\u8D70\u6B63\u9762\u8DEF\u7EBF",-9,V+3,6.3,"note"]],cam:{t:[-16.4,V+.6,3.2],r:28,ph:1.04,th:-.55}},{p:[.2,V,6.9],pl:[1.3,V,7.4],pose:"talk",path:[[-15.6,V,6.3],[-3,V,6.4],[.2,V,6.9]],u:[["w",1.4,V,7.5,[.2,V,6.9],"talk"],["g",1.7,V,10.3,[0,V,13],"look"]],tp:[Vc],ep:[[[1.7,V,10.3],[1.1,V,7.8],[-6,V,6.6],[-13,V,6.3]]],lab:[["NPC \u4EA4\u4E92\uFF1A\u5F15\u5F00\u9633\u53F0\u4E0A\u7684\u654C\u4EBA",1.6,V+3.4,7.6,"item"],["\u7EC4\u7EC7\u6210\u5458\u8D81\u673A\u6CBF\u6500\u722C\u70B9\u722C\u4E0A\u9633\u53F0",-3.6,V+3.8,12.4,"note"]],cam:{t:[-.6,V-1,8.4],r:28,ph:1.06,th:.34}},{p:[12.4,V,-5.8],pl:[Ot.x,V,Ot.z],pose:"walk",path:[[.2,V,6.9],[10,V,6.4],[14.25,V,6.2],[14.25,V,-2],[14.25,V,-4.2],[12.4,V,-5.8]],lab:[["\u8F6C\u5411\u5317\uFF1A\u901A\u9053\u5C3D\u5934\u662F\u4E3B\u4ED3\u5E93\u7684\u95E8",14.25,V+3.2,1,"note"],["\u4E3B\u4ED3\u5E93",-4,V+5.6,-14,"note"]],cam:{t:[10,V+1,-2],r:32,ph:1,th:.36}},{p:[Ot.x,V,Ot.z+1.3],pl:[Ot.x,V,Ot.z-1.3],pose:"bid",path:[[12.4,V,-5.8],[4,V,-6.6],[.4,V,-9.6],[Ot.x,V,Ot.z+1.3]],u:[ld,...hd,...Oh("look"),...ud("look"),...Co("look"),...zc("look"),...kc("look"),["t",14.4,vt,-11.8,[8,vt,-12],"crouch"],["t",14.2,vt,-13.2,[8,vt,-13],"crouch"]],tp:[[[17.4,vt,-12.4],[16.2,vt,-12.4,1],[14.3,vt,-12.4]]],lab:[["\u6F2B\u5929\u51FA\u4EF7\uFF1A\u628A\u6CE8\u610F\u529B\u96C6\u4E2D\u5230\u81EA\u5DF1\u8EAB\u4E0A",Ot.x,V+3.6,Ot.z+1.6,"note"],["\u56F4\u89C2",Ot.x+3.6,V+2.6,Ot.z+3.2,"note"],["\u7EC4\u7EC7\u6210\u5458\u8D81\u673A\u4ECE\u7A97\u6237\u6F5C\u5165",14.2,vt+2.8,-12.4,"item"]],cam:{t:[3,V+2,-13.4],r:38,ph:1.02,th:.22}},{p:[Ot.x,V,Ot.z+1.3],pl:[Ot.x,V,Ot.z-1.3],pose:"bid",u:[ld,...hd,...Oh("look"),...ud("look"),...Co("down"),...zc("look"),...kc("look"),["t",-.4,vt,-22.2,[-1,vt,-21.4],"stab"],["t",5.4,vt,-22.2,[4.6,vt,-21.4],"stab"]],tp:[[[14.4,vt,-11.8],[13.8,vt,-23.4],[5.6,vt,-23.3]],[[14.2,vt,-13.2],[13.4,vt,-23.8],[0,vt,-23.5]]],lab:[["\u4ECE\u654C\u4EBA\u540E\u65B9\u51FA\u73B0",9.4,vt+2.6,-23.6,"note"],["\u63A5\u8FDE\u6697\u6740\u4E24\u540D\u5B88\u536B",2.2,vt+3.4,-22.4,"warn"]],cam:{t:[3,vt,-20],r:30,ph:1,th:.14}},{p:[Ot.x,V,Ot.z+1.3],pl:[Ot.x,V,Ot.z-1.3],pose:"aim",u:[Bh,...Nh,...Oh("aim"),...Er.map(([i,t])=>["g",i+.4,V,t+.4,[se[0],vt,se[1]],"down"]),...Co("down"),...zc("aim"),...kc("aim"),["t",se[0],vt,se[1]-.9,[se[0],vt,-10],"shoot"],["t",3.6,vt,-21,[3.6,vt,-10],"aim"]],ar:[[[se[0],vt+1.15,se[1]+1.1],[5.8,V+.5,-12.2],"mg"],[[se[0],vt+1.15,se[1]+1.1],[4.9,V+.5,-14.5],"mg"],[[se[0],vt+1.15,se[1]+1.1],[.6,V+.6,-4.8],"mg"]],fx:[["spark",se[0],vt+1.15,se[1]+1.2,.6]],lab:[["\u673A\u67AA\u4ECE\u4E0A\u65B9\u5411\u4E0B\u626B\u5C04",se[0],vt+3,se[1],"warn"]],cam:{t:[4.5,V+3,-14.5],r:32,ph:1,th:.55}},{p:[Ot.x,V,Ot.z+1.3],pl:[-.5,V,-3.4],pose:"aim",u:[Bh,...Nh,...Hc.map(([i,t],e)=>["g",i,V,t,[es[e][0],V,es[e][1]],"down"]),...Er.map(([i,t])=>["g",i+.4,V,t+.4,[se[0],vt,se[1]],"down"]),...Co("down"),...zc("aim"),...kc("aim"),["t",se[0],vt,se[1]-.9,[se[0],vt,-10],"shoot"],["t",-1.6,V,1.2,[-.4,V,-4.5],"aim"],["t",-.1,V,1.5,[.8,V,-4.5],"aim"]],fx:[["shock",.6,V+.05,-4,6],["fire",1.9,V,-2.3,1.4],["fire",-.4,V,-4.7,1]],lab:[["\u7206\u70B8\uFF1A\u70B8\u6389\u4E00\u5927\u5757\u5899",.6,V+5.2,-3.4,"warn"],["\u5B88\u536B\u88AB\u70B8\u98DE",-1.4,V+2.4,-7.8,"note"],["\u57CB\u4F0F\u5728\u5C0F\u4ED3\u5E93\u7684\u7EC4\u7EC7\u6210\u5458",.2,V+2.6,1.6,"note"]],cam:{t:[-1.6,V+1.5,-6.6],r:34,ph:1,th:.14}},{p:[Ot.x-1.9,V,Ot.z+1],pl:[zn[0][0],V,zn[0][1]],pose:"aim",u:[Bh,...Nh,...Hc.map(([i,t],e)=>["g",i,V,t,[es[e][0],V,es[e][1]],"down"]),...Er.map(([i,t])=>["g",i+.4,V,t+.4,[se[0],vt,se[1]],"down"]),...Co("down"),["g",zn[0][0],V,zn[0][1],[Ot.x-1.9,V,Ot.z+1],"aim"],["g",zn[1][0]+.4,V,zn[1][1]-.3,[Ot.x,V,Ot.z],"down"],["g",Ue[0][0],V,Ue[0][1],[Ot.x,V,Ot.z],"aim"],["g",Ue[1][0],V,Ue[1][1],[-2.4,V,-7.6],"aim"],["g",Ue[2][0]+.3,V,Ue[2][1]+.3,[3.6,vt,-21],"down"],["g",Ue[3][0],V,Ue[3][1],[1.4,V,-8.4],"aim"],["t",-2.4,V,-7.6,[Ue[1][0],V,Ue[1][1]],"aim"],["t",1.4,V,-8.4,[Ue[3][0],V,Ue[3][1]],"aim"],["t",3.6,vt,-21,[Ue[2][0],V,Ue[2][1]],"aim"],["t",se[0],vt,se[1]-.9,[se[0],vt,-10],"aim"]],ar:[[[Ot.x-1.7,V+1.3,Ot.z+.8],[zn[0][0]+.2,V+1.2,zn[0][1]],"route"],[[-2.2,V+1.3,-7.8],[Ue[1][0],V+1.2,Ue[1][1]+.2],"team"],[[1.6,V+1.3,-8.6],[Ue[3][0],V+1.2,Ue[3][1]],"team"],[[Ue[0][0]+.3,V+1.3,Ue[0][1]+.3],[Ot.x-2,V+1.2,Ot.z+.7],"enemy"]],fx:[["fire",1.9,V,-2.3,1],["fire",-.4,V,-4.7,.7]],lab:[["\u5F31\u70B9\u4E4B\u5916\uFF1A\u5E73\u53F0\u6B63\u4E0B\u65B9\u3001\u5317\u8FB9\u8D27\u5806\u540E\u7684\u5B88\u536B\u8FD8\u5728",-2,V+4.8,-19.8,"warn"],["\u673A\u67AA\u6253\u4E0D\u5230\u5E73\u53F0\u6B63\u4E0B\u65B9",se[0]+2.4,vt+2.6,se[1]+.4,"note"],["\u627E\u63A9\u4F53\uFF0C\u548C\u540C\u4F34\u4E00\u8D77\u6E05\u6389\u5269\u4E0B\u7684\u5B88\u536B",Ot.x-2.6,V+3.2,Ot.z+2.6,"note"]],cam:{t:[-2,V+1.5,-13.6],r:36,ph:.98,th:.2}},{p:[3.6,V,-19.55],pl:[-3.6,vt,-19.55],pose:"run",path:[[Ot.x-1.9,V,Ot.z+1],[-7.2,V,-13.9],[-1.4,V,-17.4],[2.8,V,-18.3],[3.6,V,-19.55]],u:[["l",-5.6,vt,-22.4,[-12,vt,-22.6],"run"]],ep:[[[1.1,V,-17.6],[3.6,V,-19.55],[-3.6,vt,-19.55],[-5.3,vt,-19.7],[-5.6,vt,-22.4]]],lab:[["\u5934\u76EE\u9003\u8DD1\uFF1A\u4E0A\u697C\u68AF\u5230\u4E8C\u5C42\u5E73\u53F0",-1,vt+3.4,-21,"warn"]],cam:{t:[-.5,V+2.5,-19.4],r:30,ph:1.02,th:-.1}},{p:[-22,vt,-11.6],pl:[-24,vt,-10.5],pose:"run",path:[[3.6,V,-19.55],[-3.6,vt,-19.55],[-5.3,vt,-19.7],[-5.6,vt,-22.4],[-21.8,vt,-22.6],[-22,vt,-11.6]],u:[["l",-30,Io(-30),-10.5,[-35,Io(-35),-10.5],"run"]],ep:[[[-5.6,vt,-22.4],[-21.8,vt,-22.6],[-22,vt,-10.5],[-24.6,vt-.1,-10.5],[-30,Io(-30),-10.5]]],lab:[["\u4FA7\u9762\u5F00\u53E3",-24,vt+3.2,-10.5,"item"],["\u8F66\u68DA\u9876",-31,Io(-31)+2.6,-13,"note"]],cam:{t:[-25.5,vt-.2,-11.5],r:32,ph:.96,th:.14}}],fd={blast:13,bombs:13},Gc={blast:{rub:[0,-1]},bombs:{}};var wr=(i,t={})=>new hi({color:i,roughness:.75,metalness:0,...t}),D_={p:{H:1.8,body:"#C47A22",head:"#E3BC93",limb:"#A8661C",hat:"#6F4A1E",ring:"#E7A537"},t:{H:1.78,body:"#3F7F8C",head:"#D9B896",limb:"#2F6470",ring:"#5FA8B5"},g:{H:1.82,body:"#3A4044",head:"#9C8C7C",limb:"#2C3134",gun:"#22272A",ring:"#B5462F"},l:{H:1.86,body:"#7A2E25",head:"#B79C84",limb:"#5A231C",hat:"#3A2420",ring:"#B5462F"},n:{H:1.72,body:"#9A8F80",head:"#C9AE92",limb:"#7F7568",ring:"#A9A090"},w:{H:1.74,body:"#B79A72",head:"#D2B392",limb:"#97805F",ring:"#C9B48E"}};function Wc(i){let t=D_[i],e=t.H,n=new _e,s=new _e;n.add(s),s.position.y=e*.5;let r=wr(t.body),o=wr(t.head),a=wr(t.limb),l=new le(new to(e*.13,e*.26,4,10),r);l.position.y=e*.2,s.add(l);let c=new le(new uo(e*.1,14,10),o);c.position.y=e*.44,s.add(c);let h=(p,b,x)=>{let y=new _e,M=new le(new ti(p,b,p),x);return M.position.y=-b/2,y.add(M),y},u=h(e*.07,e*.34,a),d=h(e*.07,e*.34,a);u.position.set(-e*.17,e*.33,0),d.position.set(e*.17,e*.33,0);let f=h(e*.085,e*.46,a),g=h(e*.085,e*.46,a);if(f.position.set(-e*.07,0,0),g.position.set(e*.07,0,0),s.add(u,d,f,g),t.gun){let p=new le(new ti(e*.04,e*.04,e*.5),wr(t.gun));p.position.set(0,-e*.32,e*.14),d.add(p)}if(t.hat){let p=new le(new Ci(e*.1,e*.13,e*.06,14),wr(t.hat));p.position.y=e*.52,s.add(p);let b=new le(new Ci(e*.075,e*.085,e*.08,14),wr(t.hat));b.position.y=e*.57,s.add(b)}let _=new le(new sr(e*.32,e*.42,28),new qe({color:t.ring,transparent:!0,opacity:.85,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.04,_.renderOrder=2,n.add(_),n.traverse(p=>{p.isMesh&&p!==_&&(p.castShadow=!0,p.receiveShadow=!1)});let m={root:n,hips:s,torso:l,armL:u,armR:d,legL:f,legR:g,H:e,kind:i,ring:_,pose(p="idle",b=0){s.rotation.set(0,0,0),s.position.set(0,e*.5,0);for(let M of[u,d,f,g])M.rotation.set(0,0,0);let x=Math.sin(b*9),y=!1;switch(p){case"walk":{let M=Math.sin(b*5.5);f.rotation.x=.38*M,g.rotation.x=-.38*M,u.rotation.x=-.3*M,d.rotation.x=y?-.15:.3*M;break}case"run":s.rotation.x=.22,f.rotation.x=.7*x,g.rotation.x=-.7*x,u.rotation.x=-.6*x,d.rotation.x=y?-.3:.6*x;break;case"stumble":s.rotation.x=.5,f.rotation.x=.5*x,g.rotation.x=-.5*x,u.rotation.z=-1.1,d.rotation.z=1.1,s.position.y=e*.46;break;case"throw":d.rotation.x=-2.1,u.rotation.x=.5,f.rotation.x=-.35,g.rotation.x=.3;break;case"cast":u.rotation.set(-2.7,0,-.35),d.rotation.set(-2.7,0,.35);break;case"slam":s.rotation.x=-.15,u.rotation.x=-3,d.rotation.x=-3;break;case"charge":s.rotation.x=.55,d.rotation.x=-1.35,u.rotation.x=-.6,f.rotation.x=.8*x,g.rotation.x=-.8*x;break;case"fly":s.rotation.x=.35,f.rotation.x=.7,g.rotation.x=.5,u.rotation.z=-.9,d.rotation.z=.9;break;case"fall":s.rotation.x=-.4,u.rotation.z=-2.2,d.rotation.z=2.2,f.rotation.x=-.6,g.rotation.x=.4;break;case"down":s.rotation.x=-1.45,s.position.y=e*.14,u.rotation.z=-.5,d.rotation.z=.5,f.rotation.x=.1;break;case"grab":s.rotation.x=.3,u.rotation.x=-1.5,y?d.rotation.x=-1.5:d.rotation.set(.45,0,.5);break;case"held":s.rotation.x=-.3,f.rotation.x=.5,g.rotation.x=.2,u.rotation.z=-1.2,d.rotation.z=1.2,s.position.y=e*.62;break;case"burn":u.rotation.set(-.6+.4*x,0,-1.1),d.rotation.set(-.6-.4*x,0,1.1),s.rotation.z=.1*x;break;case"dodge":s.rotation.z=.5,s.position.y=e*.4,f.rotation.x=-.9,g.rotation.x=.6,u.rotation.z=-1;break;case"push":s.rotation.x=-.35,f.rotation.x=-.5,g.rotation.x=.4,u.rotation.x=-1.4,d.rotation.x=-1.4;break;case"sneak":{let M=Math.sin(b*4.5);s.position.y=e*.38,s.rotation.x=.35,f.rotation.x=-.7+.35*M,g.rotation.x=-.7-.35*M,u.rotation.x=-.5,d.rotation.x=-.5;break}case"crouch":s.position.y=e*.32,s.rotation.x=.25,f.rotation.x=-1.1,g.rotation.x=-.5,u.rotation.x=-.6,d.rotation.x=-.9;break;case"sidle":{let M=Math.sin(b*3.5);u.rotation.z=-.5,d.rotation.z=.5,f.rotation.z=-.15*M,g.rotation.z=.15*M;break}case"climb":{let M=Math.sin(b*5);u.rotation.x=-2.8+.4*M,d.rotation.x=-2.8-.4*M,f.rotation.x=-.6+.4*M,g.rotation.x=-.6-.4*M;break}case"talk":{let M=Math.sin(b*3);d.rotation.set(-1+.35*M,0,.3),u.rotation.set(-.4-.2*M,0,-.25);break}case"bid":{let M=Math.abs(Math.sin(b*2.4));d.rotation.set(-2.6+.3*M,0,.15),u.rotation.set(-1.2,0,-.4),s.rotation.x=-.06;break}case"look":s.rotation.x=.12,u.rotation.set(-.3,0,-.15),d.rotation.set(-.3,0,.15);break;case"aim":d.rotation.x=-1.5,u.rotation.set(-1.5,0,.45),f.rotation.x=-.2,g.rotation.x=.25;break;case"stab":s.rotation.x=.35,d.rotation.x=-1.7,u.rotation.set(-1.9,0,.5),f.rotation.x=-.5,g.rotation.x=.4;break;case"shoot":{let M=Math.sin(b*40)*.03;s.rotation.x=.25,s.position.y=e*.44,d.rotation.x=-1.35+M,u.rotation.set(-1.35+M,0,.35),f.rotation.x=-.7,g.rotation.x=.2;break}case"blown":s.rotation.x=-1.1,u.rotation.z=-2,d.rotation.z=2,f.rotation.x=-.8,g.rotation.x=.5;break;case"cower":s.position.y=e*.3,s.rotation.x=.5,f.rotation.x=-1.2,g.rotation.x=-1.2,u.rotation.set(-2.6,0,-.5),d.rotation.set(-2.6,0,.5);break;case"wave":{let M=Math.sin(b*6);d.rotation.set(-2.8,0,.4+.35*M),u.rotation.z=-.1;break}default:u.rotation.z=-.08,d.rotation.z=.08}}};return m.pose("idle"),m}function Xc(i=1.5,t=1,e={}){let n=new _e,s=new qe({color:"#EC6E2A",transparent:!0,opacity:.9}),r=new qe({color:"#F6B63E",transparent:!0,opacity:.95}),o=Math.max(3,Math.round(i*3.2));for(let a=0;a<o;a++){let l=a*2.39996+t,c=i*Math.sqrt((a+.5)/o)*.8,h=.9+(a*7+t*3)%5*.22,u=new le(new er(.28+.1*(a%2),h,6),a%3?s:r);u.position.set(Math.cos(l)*c,h/2,Math.sin(l)*c),u.userData.h=h,u.userData.k=a*1.7+t,n.add(u)}if(e.spot!==!1){let a=new le(new eo(i*1.15,28),new qe({color:"#EC6E2A",transparent:!0,opacity:.28,depthWrite:!1}));a.rotation.x=-Math.PI/2,a.position.y=.05,n.add(a)}return n.userData.tick=a=>{for(let l of n.children)l.userData.h&&(l.scale.y=.8+.35*Math.abs(Math.sin(a*6+l.userData.k)))},n}function qc(i=1){let t=new qe({color:"#FFD27A",transparent:!0,opacity:.9,depthWrite:!1}),e=new le(new ms(i,1),t);return e.userData.at=n=>{e.scale.setScalar(.3+1.2*n),t.opacity=.9*(1-n)},e}function Yc(i=4){let t=new qe({color:"#F3E3C2",transparent:!0,opacity:.8,depthWrite:!1,side:Tn}),e=new le(new sr(.86,1,48),t);return e.rotation.x=-Math.PI/2,e.userData.at=n=>{e.scale.setScalar(.4+i*n),t.opacity=.8*(1-n)},e}function Tr(i,t,e,n={}){var d,f;let s=i.map(g=>new N(...g)),r=s.length>2?new ds(s,!1,"centripetal",.2):new nr(s[0],s[1]||s[0].clone().add(new N(0,.01,0))),o=r.getLength(),a=Math.max(8,Math.round(o*3)),l=[];if(n.dash){let[g,_]=n.dash,m=Math.max(1,Math.floor(o/(g+_)));for(let p=0;p<m;p++){let b=p*(g+_)/o,x=Math.min(1,(p*(g+_)+g)/o),y=[];for(let M=0;M<=4;M++)y.push(r.getPointAt(b+(x-b)*M/4));l.push(new rr(new ds(y),4,t,6,!1))}}else l.push(new rr(r,a,t,7,!1));let c=new _e,h=new qe({color:e,transparent:!!n.opacity,opacity:(d=n.opacity)!=null?d:1}),u=new qe({color:e,transparent:!0,opacity:(f=n.xray)!=null?f:.22,depthTest:!1,depthWrite:!1});for(let g of l){let _=new le(g,h),m=new le(g,u);m.renderOrder=5,c.add(_,m)}if(n.every){let g=new er(t*2.6,t*5,10);g.rotateX(Math.PI/2);let _=Math.max(1,Math.floor(o/n.every));for(let m=1;m<=_;m++){let p=Math.min(.999,(m-(n.last?0:.5))/_),b=r.getPointAt(p),x=r.getTangentAt(p);for(let y of[h,u]){let M=new le(g,y);M.position.copy(b),M.lookAt(b.clone().add(x)),y===u&&(M.renderOrder=5),c.add(M)}}}return c.userData.length=o,c.userData.curve=r,c}function Zc(i,t,e,n={}){var l,c;let s=new N(...i),r=new N(...t),o=s.clone().lerp(r,.5);o.y+=s.distanceTo(r)*((l=n.arc)!=null?l:.12);let a=[];for(let h=0;h<=10;h++){let u=h/10,d=s.clone().multiplyScalar((1-u)*(1-u)).add(o.clone().multiplyScalar(2*u*(1-u))).add(r.clone().multiplyScalar(u*u));a.push([d.x,d.y,d.z])}return Tr(a,(c=n.r)!=null?c:.12,e,{dash:n.dash,every:999,last:!0,xray:.3})}var Is={b:["#CDBBA2","#B9A68C","#A8957C"],w:["#EFE9DF","#D9CFC0","#C9BFAF"],cab:["#7D6A56","#5E4E3F","#9DB4B6"],wood:["#8A6F55","#6E5845","#A08466"],ocu:["#B08D57","#9DB4B6","#8E7A64"],slab:["#CFC7B9","#B8AFA0","#DCD3C4"],metal:["#6F6A60","#8A8376","#57534C"]},dd=i=>i==="blast"?Is.b:i.startsWith("w")?Is.w:i.startsWith("cab")?Is.cab:i==="ocu"?Is.ocu:i==="crash5"||i==="crash4"?Is.slab:i==="chain"?Is.metal:Is.wood,F_={blast:et.F3+.05},pd=(i,t)=>{var e;return(e=F_[i])!=null?e:t.min.y+.02},md=i=>{let t=7+i.length*13+i.charCodeAt(i.length-1)*3;return()=>(t=(t*9301+49297)%233280)/233280},Ni=(i,t,e)=>i+(t-i)*e;function Jc(i){let t=i.world,e={};function n(d){let f=i.parts[d],g=Gc[d];if(!f||!g||!g.rub)return null;let _=f.userData.box,m=f.userData.group,p=new di,b=_.min.x,x=_.max.x,y=_.min.z,M=_.max.z,T=pd(d,_),A=m+":p",C=m,[S,v]=g.rub;S<0&&(b-=1.8),S>0&&(x+=1.8),v<0&&(y-=1.8),v>0&&(M+=1.8),x-b<1.2&&(b-=.5,x+=.5),M-y<1.2&&(y-=.5,M+=.5);let P=dd(d),F=md(d),B=Math.round(Math.min(22,Math.max(8,(x-b)*(M-y)*1.2)));for(let $=0;$<B;$++){let I=.25+F()*.6,O=.15+F()*.35,L=.25+F()*.55;p.ybox(A,P[$%P.length],b+F()*(x-b),T+O/2+($%4===0?O*.6:0),y+F()*(M-y),I,O,L,F()*3)}let W=new _e;for(let[$,I]of Object.entries(p.out())){let O=new le(Uh(I),t.M[$]||t.M[C]);O.castShadow=!0,O.receiveShadow=!0,W.add(O)}return t.groups[C].add(W),W.visible=!1,W}let s=d=>d in e?e[d]:e[d]=n(d);function r(d,f,g){let _=i.parts[d];if(!_)return;let m=Gc[d]||{},p=_.userData.home;if(m.drop!=null){_.visible=!0;let b=t.groups[f>1.15?"L3":_.userData.group];if(_.parent!==b&&b.add(_),f<=0){_.position.copy(p),_.rotation.set(0,0,0);return}if(f<=1){let M=f*f;_.position.set(p.x+m.at[0]*f,p.y-m.drop*M,p.z+m.at[2]*f),_.rotation.set(m.tilt[0]*M,m.tilt[1]*M,m.tilt[2]*M);return}let x=Math.min(1,f-1),y=x*x;_.position.set(p.x+Ni(m.at[0],m.at2[0],x),p.y-Ni(m.drop,m.drop2,y),p.z+Ni(m.at[2],m.at2[2],x)),_.rotation.set(Ni(m.tilt[0],m.tilt2[0],x),Ni(m.tilt[1],m.tilt2[1],x),Ni(m.tilt[2],m.tilt2[2],x));return}if(_.visible=!(f>=1),m.rub){let b=f>=1&&!g,x=b?s(d):e[d];x&&(x.visible=b)}}let o=()=>0;function a(d){for(let[f,g]of Object.entries(fd))r(f,f==="chand"?o(d):d>=0&&g<d?1:0);i.shadowDirty()}let l=new ti(1,1,1),c={},h=d=>c[d]||(c[d]=new hi({color:d,roughness:.85}));function u(d){let f=i.parts[d];if(!f)return null;let g=f.userData.box,_=Gc[d]||{},[m,p]=_.rub||[0,0],b=md(d+"b"),x=dd(d),y=!!_.fall,M=pd(d,g),T=new _e,A=[],C=g.getSize(new N),S=Math.round(Math.min(26,Math.max(10,(C.x+C.z)*2.2)));for(let P=0;P<S;P++){let F=[.22+b()*.55,.12+b()*.35,.2+b()*.5],B=new le(l,h(x[P%x.length]));B.scale.set(...F),B.castShadow=!0;let W=new N(Ni(g.min.x,g.max.x,b()),Ni(g.min.y,g.max.y,b()),Ni(g.min.z,g.max.z,b())),$=y?.6:3.5+b()*4,I=new N((y?b()-.5:m*(.6+b()*.8)+(b()-.5)*.9)*$,y?-b()*2:1.2+b()*3.4,(y?b()-.5:p*(.6+b()*.8)+(b()-.5)*.9)*$),O=14,L=M+F[1]/2,X=W.y-L,tt=(I.y+Math.sqrt(Math.max(0,I.y*I.y+2*O*X)))/O,it=new N(b()-.5,b()-.5,b()-.5).normalize(),lt=4+b()*9;A.push({m:B,p0:W,vel:I,gy:O,tl:tt,ax:it,w:lt,rot0:b()*6}),T.add(B)}t.root.add(T),T.visible=!1;let v=new Ln;return{g:T,at(P){if(P<0){T.visible=!1;return}T.visible=!0;for(let F of A){let B=Math.min(P,F.tl);F.m.position.set(F.p0.x+F.vel.x*B,F.p0.y+F.vel.y*B-F.gy*B*B/2,F.p0.z+F.vel.z*B),v.setFromAxisAngle(F.ax,F.rot0+F.w*B),F.m.quaternion.copy(v)}},end:Math.max(...A.map(P=>P.tl)),dispose(){t.root.remove(T)}}}return{set:r,at:a,burst:u,chandAt:o}}function $c(i,t){let e=document.createElement("div");e.className="bs-lay",t.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("aria-hidden","true"),n.style.cssText="width:100%;height:100%;overflow:visible;pointer-events:none;will-change:auto",e.appendChild(n);let s=[],r=new N,o=[];for(let m=8;m<=48;m+=8)o.push([0,-m],[0,m],[m,0],[-m,0]);let a="",l=".sbx-nda,.sbx-tb .grp,.sbx-tour,.sbx-hint,.sbx-cap,.sbx-x,.sbx-pop,.stg-cap,.stg-tl,.stg-next",c=[],h=-1e9,u=()=>{let m=t.getBoundingClientRect();c=[...t.querySelectorAll(l)].filter(p=>p.offsetWidth&&!p.hidden&&getComputedStyle(p).visibility!=="hidden"&&+getComputedStyle(p).opacity>.1).map(p=>{let b=p.getBoundingClientRect();return[b.left-m.left-3,b.top-m.top-3,b.right-m.left+3,b.bottom-m.top+3]})};function d(m,p,b,x){let y=document.createElement(x?"button":"span");x&&(y.type="button"),y.className=m,y.innerHTML=p,y.style.display="none",e.appendChild(y);let M={e:y,p:typeof b=="function"?null:new N(...b),fn:typeof b=="function"?b:null,on:!1,shown:!1,lab:/\bbs-lab\b/.test(m),w:0,h:0};return s.push(M),M}function f(m){let p=s.indexOf(m);p>=0&&s.splice(p,1),m.e.remove()}let g=m=>{m.shown&&(m.e.style.display="none",m.shown=!1)},_=(m,p,b)=>{m.e.style.transform=`translate(${p.toFixed(1)}px,${b.toFixed(1)}px)`};return i.onRender(m=>{let p=performance.now();p-h>400&&(u(),h=p);let b=t.clientWidth,x=t.clientHeight,y=c.slice(),M=[],T=[];for(let v of s){if(!v.on){g(v);continue}if(r.copy(v.fn?v.fn():v.p).project(m),r.z>1||r.z<-1||Math.abs(r.x)>1.2||Math.abs(r.y)>1.2){g(v);continue}v.shown||(v.e.style.display="",v.shown=!0);let P=(r.x+1)/2*b,F=(1-r.y)/2*x;(v.lab?M:T).push([v,P,F])}let A=(v,P,F)=>{let B=v.bw||(v.bw=v.e.offsetWidth);return B>40?[P-16,F-16,P-16+B,F+16]:[P-15,F-15,P+15,F+15]},C=v=>!y.some(P=>v[0]<P[2]&&v[2]>P[0]&&v[1]<P[3]&&v[3]>P[1]);T.sort((v,P)=>P[0].e.classList.contains("on")-v[0].e.classList.contains("on"));let S="";for(let[v,P,F]of T){let B=P,W=F,$=A(v,P,F);if(!C($))for(let[I,O]of o){let L=A(v,P+I,F+O);if(L[0]>=0&&L[2]<=b&&L[1]>=0&&L[3]<=x&&C(L)){B=P+I,W=F+O,$=L;break}}_(v,B,W),y.push($),Math.hypot(B-P,W-F)>13&&(S+=`<line x1="${P.toFixed(1)}" y1="${F.toFixed(1)}" x2="${B.toFixed(1)}" y2="${W.toFixed(1)}"/><circle cx="${P.toFixed(1)}" cy="${F.toFixed(1)}" r="3"/>`)}S!==a&&(a=S,n.innerHTML=S?`<g stroke="#1F2725" stroke-opacity=".75" stroke-width="1.5" fill="#D2872C">${S}</g>`:""),M.sort((v,P)=>P[2]-v[2]);for(let[v,P,F]of M){v.w||(v.w=v.e.offsetWidth,v.h=v.e.offsetHeight);let B=F;for(let W=0;W<10;W++){let $=P-v.w/2,I=B-11-v.h,O=P+v.w/2,L=B-11,X=y.find(tt=>$<tt[2]&&O>tt[0]&&I<tt[3]&&L>tt[1]);if(!X||X[1]+11-3-11-v.h<0)break;B=X[1]+11-3}y.push([P-v.w/2,B-11-v.h,P+v.w/2,B-11]),_(v,P,B)}}),{lay:e,add:d,remove:f,marks:s}}var oi={route:"#D2872C",team:"#3F8F9C",enemy:"#B5462F",mg:"#E7A537",atk:"#D2452F",fire:"#EC6E2A"},L_=i=>String(i+1).padStart(2,"0");function U_(i){let t=[],e=null;for(let n=1;n<i.length;n++){let s=i[n][3]===1;(!e||e.air!==s)&&(e={air:s,pts:[i[n-1].slice(0,3)]},t.push(e)),e.pts.push(i[n].slice(0,3))}return t}function Ps(i,t,e,n={}){var r;let s=new _e;for(let o of U_(i))o.pts.length<2||o.pts.reduce((l,c,h)=>h?l+Math.hypot(c[0]-o.pts[h-1][0],c[1]-o.pts[h-1][1],c[2]-o.pts[h-1][2]):0,0)<.05||s.add(o.air||n.dash?Tr(o.pts,e*.8,t,{dash:n.dash||[.6,.45],xray:n.xray,opacity:n.opacity}):Tr(o.pts,e,t,{every:(r=n.every)!=null?r:7,xray:n.xray,opacity:n.opacity}));return s}var gd=i=>i.traverse(t=>{t.geometry&&t.geometry.dispose()});function xd(i,t,e={}){var $;let n=new _e;n.name="show",i.scene.add(n);let s={route:new _e,units:new _e};n.add(s.route,s.units);let r=$c(i,t),o=r.lay,a=Jc(i),l=($=e.scale)!=null?$:1.25,c=-1,h=-1,u={route:!0,marks:!0,units:!0,labels:!0},d=ri.map((I,O)=>{let L=[];for(let tt of I.b)if(Cs[tt].p)for(let it of Cs[tt].path||[]){let lt=L[L.length-1];(!lt||Math.hypot(lt[0]-it[0],lt[1]-it[1],lt[2]-it[2])>.01)&&L.push(it)}let X=Ps(L,oi.route,.2,{every:7});return s.route.add(X),X.userData.k=O,X}),f=(I,O)=>I.traverse(L=>{if(L.material){let X=L.material;X.depthTest?(X.transparent=O<1,X.opacity=O):X.opacity=.22*O,X.needsUpdate=!0}}),g=(I,O,L,X)=>r.add(I,O,L,X),_=ri.map((I,O)=>{let L=g("bs-phm",`<b>${O+1}</b><span>${(e.phaseNames||[])[O]||""}</span>`,[I.at[0],I.at[1]+3.6,I.at[2]],1);return L.e.dataset.k=O,L.e.addEventListener("click",X=>{X.stopPropagation(),e.onPhase&&e.onPhase(O)}),L}),m=Cs.map((I,O)=>{let L=I.p||I.path[I.path.length-1],X=g("bs-pin",`<span>${L_(O)}</span>`,[L[0],L[1]+3.4,L[2]],1);return X.e.dataset.i=O,X.e.title=(e.names||[])[O]||"",X.e.addEventListener("click",tt=>{tt.stopPropagation(),e.onPick&&e.onPick(O)}),X}),p=[],b=()=>{_.forEach((I,O)=>{I.on=u.marks&&c<0,I.e.classList.toggle("on",O===c)}),m.forEach((I,O)=>{let L=c>=0&&ri[c].b.includes(O);I.on=u.marks&&L&&ri[c].b.length>1,I.e.classList.toggle("on",O===h),I.e.setAttribute("aria-pressed",O===h)});for(let I of p)I.on=u.labels;i.invalidate()},x=I=>a.at(I),y=[],M=(I,O)=>Math.atan2(O[0]-I[0],O[2]-I[2]);function T(){for(let I of[...s.units.children])s.units.remove(I),gd(I);for(let I of p)r.remove(I);p=[],y=[],i.ambient=!1}let A=["run","walk","sneak","sidle","talk","bid","shoot","climb","wave"];function C(I,O,L,X,tt){let it=Wc(I);return it.root.position.set(...O),it.root.rotation.y=M(O,L||[O[0],O[1],O[2]+1]),it.root.scale.setScalar(l),it.pose(X||"idle"),it.ring.visible=!["blown","down","fall","climb"].includes(X),s.units.add(it.root),A.includes(X)&&tt.push(lt=>it.pose(X,lt)),it}function S(I){if(T(),I<0)return;let O=Cs[I],L=[];O.path&&O.path.length>1&&s.units.add(Ps(O.path,oi.route,.26,{every:5,xray:.35}));for(let X of O.tp||[])s.units.add(Ps(X,oi.team,.2,{every:4,xray:.35}));for(let X of O.ep||[])s.units.add(Ps(X,oi.enemy,.18,{dash:[.8,.5],xray:.3}));for(let[X,tt,it]of O.ar||[])s.units.add(Zc(X,tt,oi[it]||oi.atk,{dash:it==="mg"?[.5,.35]:null,r:it==="mg"?.08:.14,arc:it==="mg"?0:.12}));O.p&&C("p",O.p,O.pl,O.pose,L);for(let[X,tt,it,lt,nt,mt]of O.u||[])C(X,[tt,it,lt],nt,mt,L);for(let X of O.fx||[]){let[tt,it,lt,nt,mt]=X,ct=null;tt==="fire"?ct=Xc(mt,it+nt):tt==="shock"?(ct=Yc(mt),ct.userData.at(.35)):tt==="spark"&&(ct=qc(mt),ct.userData.at(.2)),ct&&(ct.position.set(it,lt,nt),s.units.add(ct),ct.userData.tick&&L.push(ct.userData.tick))}for(let[X,tt,it,lt,nt]of O.lab||[]){let mt=g("bs-lab k-"+(nt||"note"),(nt==="item"?"<i>\u25C6</i>":"")+X,[tt,it,lt]);if(p.push(mt),nt==="item"){let ct=new le(new lo(.36),new qe({color:"#E7A537"}));ct.position.set(tt,it-1,lt),s.units.add(ct)}}y=L,i.ambient=L.length>0}i.onFrame((I,O)=>{for(let L of y)L(O)});let v=I=>{let O=t.clientWidth/Math.max(1,t.clientHeight),L=O<1.25?Math.pow(1.25/O,.75):1;return{...I,r:I.r*L}};function P(I,O){i.setView(v(I),O),i.animUntil=performance.now()+1600}function F(I,O={}){if(c=I,h=-1,I>=0&&ri[I].b.length===1){B(ri[I].b[0],O);return}if(S(-1),d.forEach((L,X)=>{L.visible=u.route&&(I<0?X!==1:X===I),f(L,1)}),I<0)i.setMode("ov"),x(-1),O.fly!==!1&&P(Sr.ov,O.instant);else{let L=ri[I];i.setMode(L.mode),x(L.b[0]),O.fly!==!1&&P(L.cam,O.instant)}b()}function B(I,O={}){if(I<0){F(c,{fly:!1});return}let L=ri.findIndex(it=>it.b.includes(I));c=L,h=I;let X=Cs[I],tt=ri[L];i.setMode(X.mode||tt.mode),x(I),d.forEach((it,lt)=>{it.visible=u.route&&lt===L&&tt.b.length>1,f(it,.35)}),S(I),s.units.visible=u.units,O.fly!==!1&&P(X.cam||tt.cam,O.instant),b()}function W(I,O){u[I]=O,I==="route"&&d.forEach((L,X)=>{L.visible=O&&(c<0?X!==1:X===c)}),I==="units"&&(s.units.visible=O),b(),i.invalidate()}return F(-1,{fly:!1}),{setPhase:F,setBeat:B,setLayer:W,overview:I=>F(-1,I||{}),partsAt:x,get phase(){return c},get beat(){return h},phases:ri.length,beats:Cs.length,dispose(){T(),o.remove(),i.scene.remove(n),gd(n)}}}var xt=et.F3+.04,Wt=et.F4+.02,Wh=-.45+.21,N_=et.F3+.02,vn=gn,Po=i=>Ve(i)+.03;function Mn(){let i=[],t=0,e=0,n=0,s=0,r={at(o,a,l,c,h="idle",u){return t=o,e=a,n=l,s=c,i.push([t,e,n,s,h,u]),r},to(o,a="idle",l){return t=Math.max(t,o),i.push([t,e,n,s,a,l]),r},go(o,a=5,l="run",c){for(let h of o){let u=Math.hypot(h[0]-e,h[1]-n,h[2]-s);t=+(t+u/a).toFixed(3),[e,n,s]=h,i.push([t,e,n,s,l,c])}return r},mv(o,a,l,c,h,u){return t=o,e=a,n=l,s=c,i.push([t,e,n,s,h,u]),r},get t(){return t},keys:i};return r}var kn=(i,t)=>({k:i,keys:t.keys}),Qc=(i,t,e,n,s,r,o)=>i.mv(+(i.t+t).toFixed(3),e,n,s,r,o),Xh=nn.bal,Vh=Xh.awn.y+.02,B_=-.45+.17+1.8+.02;function _d(i,t,e){let[n,s]=Xh.crate,r=Xh.rungs;return i.to(t,"crouch").go([[n+.2,Wh,s+1.1]],3.2,"sneak"),Qc(i,.6,n,B_,s+.15,"climb",{face:[n,0]}),Qc(i,.7,n-.3,Vh,s-.75,"climb",{face:[n,0]}),i.go([[r+.45,Vh,8.75],[r,Vh,8.7]],2.4,"sneak"),Qc(i,2.1,r,N_,8.5,"climb",{face:[r,0]}),Qc(i,.5,-2.4,xt,9.2,"sneak",{arc:.5}),i.go(e,3.2,"sneak")}var O_=(()=>{let i=Mn().at(0,-12,xt,6.3,"walk",{face:[0,6.6]}).go([[-1.2,xt,6.7],[.1,xt,6.9]],3.6,"walk").to(3.4,"talk",{face:[1.4,7.5]}).to(6.2,"talk").to(7.6,"idle",{face:[1,10]}).to(8.6,"idle").go([[4,xt,6.6],[10,xt,6.4],[14.25,xt,6.2],[14.25,xt,-1.6]],2.4,"walk").to(17,"walk"),t=Mn().at(0,1.4,xt,7.5,"idle",{face:[-4,7]}).to(3.2,"idle",{face:[.1,6.9]}).to(6.1,"talk").go([[.9,xt,8.7]],2.2,"walk").to(7.4,"wave",{face:[1.7,10.3]}).go([[-.6,xt,7.2],[-7,xt,6.6],[-13,xt,6.3]],2.4,"walk").to(17,"walk"),e=Mn().at(0,1.7,xt,10.3,"look",{face:[1.7,16]}).to(6.9,"look").to(7.5,"idle",{face:[.9,8.7]}).go([[1,xt,7.9],[-6,xt,6.7],[-12.4,xt,6.4]],2.3,"walk").to(17,"walk"),n=_d(Mn().at(0,-1.4,Wh,14.4,"crouch",{face:[-1.4,10]}),7.7,[[-.8,xt,7.8],[-.2,xt,4.5],[-2.6,xt,2.4]]).to(17,"crouch",{face:[-1,-3]}),s=_d(Mn().at(0,-.4,Wh,14.8,"crouch",{face:[-1,10]}),8.5,[[-.4,xt,7.8],[-.2,xt,4.5],[-.6,xt,2.8]]).to(17,"crouch",{face:[1,-3]});return{dur:17,init:-1,mode:_i,act:{p:kn("p",i),w:kn("w",t),g:kn("g",e),t1:kn("t",n),t2:kn("t",s)},lab:[[0,3.3,"\u4E09\u697C\u8FC7\u9053\u4E2D\u90E8\u7684\u9633\u53F0\u8282\u70B9",0,xt+3.4,10.6,"item"],[3.4,6.2,"NPC \u4EA4\u4E92","p",2.9,null,"note"],[6.2,8.4,"NPC \u628A\u9633\u53F0\u4E0A\u7684\u5B88\u536B\u5F15\u8D70","g",2.9,null,"warn"],[8.4,10.8,"\u7EC4\u7EC7\u6210\u5458\u6CBF\u9EC4\u8272\u6307\u5F15\u722C\u4E0A\u6765\uFF1A\u8D27\u7BB1 \u2192 \u96E8\u68DA","t1",2.8,null,"note"],[10.8,13.4,"\u5899\u4E0A\u7684\u722C\u9489 \u2192 \u8170\u7EBF \u2192 \u7FFB\u8FDB\u9633\u53F0","t1",2.8,null,"note"],[13.4,17,"\u57CB\u4F0F\u5728\u5B58\u653E\u70B8\u5F39\u7684\u5C0F\u4ED3\u5E93",-1.2,xt+2.8,1.8,"item"],[13.8,17,"\u73A9\u5BB6\u7EE7\u7EED\u5411\u4E1C","p",2.9,null,"note"]],trk:[[Vc,"#3F8F9C"]],cam:[[0,{t:[-5,xt+1.3,7],r:24,ph:1.08,th:.5}],[3.4,{t:[.6,xt+1.3,7.4],r:19,ph:1.08,th:.55}],[6.2,{t:[.6,xt+1.1,8.4],r:22,ph:1.1,th:.7}],[8.4,{t:[-1.8,3,10],r:22,ph:1.2,th:-.3}],[10.8,{t:[-3,5.8,9],r:22,ph:1.16,th:-.34}],[13.4,{t:[-.8,xt+1,4.6],r:22,ph:1.02,th:.22}],[17,{t:[4,xt+1,3],r:28,ph:1.02,th:.42}]],ch:[0,3.4,6.2,8.4,13.4],cnt:null,sb:{x0:-20,x1:20,z0:-6,z1:16,y0:-.45,y1:16}}})(),yn=7.6,Te=12,Bi=13.8,ns=21.4,ai=24.6,Oi=[vn.x-1.9,vn.z+1],Fs=[1.1,-17.6],yi=[[-2.4,-7.6],[1.4,-8.4]],Ds=[3.6,-21],z_={11:[[14.4,"x1","p"],[15.6,"n2","t2"],[16.8,"n1","a1"],[18,"x0","p"],[19.2,"n3","a2"],[20.4,"n0","p"]],"01":[[14.4,"x1","p"],[15.6,"n2","t2"],[18,"x0","p"],[19.2,"n3","t2"],[20.4,"n0","p"]],10:[[14.4,"x1","p"],[16.2,"e0","a2"],[16.8,"n1","a1"],[18,"x0","p"],[19.2,"e1","a2"],[20.4,"n0","p"]],"00":[[14.4,"x1","p"],[18,"x0","p"],[20.4,"n0","p"]]},Gh={p:[Oi[0],xt,Oi[1]],t2:[Ds[0],Wt,Ds[1]],a1:[yi[0][0],xt,yi[0][1]],a2:[yi[1][0],xt,yi[1][1]]};function jc(i,t){let e={},n=[],s=[],r=[],o=[],a=[],l=[],c=[...es.map(([x,y],M)=>({id:"w"+M,x,y:xt,z:y})),...Er.map(([x,y],M)=>({id:"e"+M,x,y:xt,z:y})),...Rs.map(([x,y],M)=>({id:"m"+M,x,y:Wt,z:y})),...zn.map(([x,y],M)=>({id:"x"+M,x,y:xt,z:y})),...Ue.map(([x,y],M)=>({id:"n"+M,x,y:xt,z:y}))],h=Object.fromEntries(c.map(x=>[x.id,x])),u={};t&&(u.m1={t:5.85,kind:"stab"},u.m0={t:6.6,kind:"stab"},u.e0={t:8.4,kind:"mg"},u.e1={t:9.2,kind:"mg"}),i&&es.forEach((x,y)=>{u["w"+y]={t:Te+.1,kind:"blast",i:y}});let d=z_[(i?"1":"0")+(t?"1":"0")];for(let[x,y,M]of d)u[y]={t:x,kind:"shot",by:M};a.push([0,c.length]),Object.values(u).map(x=>x.t).sort((x,y)=>x-y).forEach((x,y)=>a.push([x,c.length-1-y]));let f=(x,y)=>!u[x]||u[x].t>y,g=(x,y,M,T)=>[x,y+T,M],_=Mn().at(0,vn.x,xt,vn.z+1.3,"bid",{face:[vn.x,vn.z-1.3]}).to(yn-.3,"bid").mv(yn+.25,Oi[0],xt,Oi[1],"aim",{face:[zn[0][0],zn[0][1]]});e.l=kn("l",Mn().at(0,vn.x,xt,vn.z-1.3,"talk",{face:[vn.x,vn.z+1.3]}).to(yn-.1,"talk").go([[-1.2,xt,-17.4],[Fs[0],xt,Fs[1]]],4.6,"run").to(ns-.2,"cower",{face:[Fs[0],-10]}).go([[3.6,xt,-19.55]],4.6,"run").go([[-3.6,Wt,-19.55],[-5.3,Wt,-19.7]],4.2,"run").to(ai,"run")),zh.forEach(([x,y],M)=>{let[T,A]=kh[M];e["n"+M]=kn("n",Mn().at(0,x,xt,y,"look",{face:[vn.x,vn.z]}).to(yn-.2+M*.15,"look").go([[T,xt,A]],5.5,"run").to(ai,"cower"))});let m={p:_};if(t){e.t1=kn("t",Mn().at(0,14.4,Wt,-11.8,"crouch",{face:[8,-12]}).to(.4,"crouch").go([[13.2,Wt,-13.4],[12.9,Wt,-22.6],[5.4,Wt,-22.2]],3.6,"sneak").to(5.7,"stab",{face:[Rs[1][0],Rs[1][1]]}).to(6.2,"stab").go([[se[0],Wt,se[1]-.9]],3,"run").to(yn,"crouch",{face:[se[0],-10]}).to(yn+.1,"shoot").to(11.4,"shoot").to(ai,"aim")),m.t2=Mn().at(0,14.2,Wt,-13.2,"crouch",{face:[8,-13]}).to(.4,"crouch").go([[12.5,Wt,-14],[12.4,Wt,-23.1],[-.4,Wt,-22.2]],4,"sneak").to(6.45,"stab",{face:[Rs[0][0],Rs[0][1]]}).to(6.9,"stab").go([[Ds[0],Wt,Ds[1]]],3,"run").to(yn+.4,"aim",{face:[Ds[0],-10]}),l.push([[[14.4,Wt,-11.8],[13.2,Wt,-13.4],[12.9,Wt,-22.6],[5.4,Wt,-22.2]],"#3F8F9C"],[[[14.2,Wt,-13.2],[12.5,Wt,-14],[12.4,Wt,-23.1],[-.4,Wt,-22.2]],"#3F8F9C"]);let x=[se[0],Wt+1.15,se[1]+1.1];for(let y=0;y<8;y++){let M=yn+.1+y*.45,T=[[5.8,xt+.5,-12.2],[4.9,xt+.5,-14.4],[.4,xt+.7,-4.6],[3.2,xt+.7,-4.9]][y%4];s.push([M,M+.3,x,T,"mg"]),n.push([M,M+.18,"spark",x[0],x[1],x[2]+.15,.45])}o.push([.6,3.4,"\u7EC4\u7EC7\u6210\u5458\u5DF2\u4ECE\u7A97\u6237\u6F5C\u5165\uFF0C\u4F0F\u5728\u5E73\u53F0\u4E1C\u4FA7",14.2,Wt+2.8,-12.4,"note"],[3.4,5.6,"\u6CBF\u5E73\u53F0\u7ED5\u5230\u5B88\u536B\u8EAB\u540E",9.4,Wt+2.8,-23.4,"note"],[5.6,7.4,"\u63A5\u8FDE\u6697\u6740\u4E24\u540D\u5B88\u536B",2.2,Wt+3.4,-22.4,"warn"],[yn+.1,11.4,"\u673A\u67AA\u4ECE\u4E0A\u65B9\u5411\u4E0B\u626B\u5C04",se[0],Wt+3.2,se[1],"warn"])}i&&(m.a1=Mn().at(0,-2.6,xt,2.4,"crouch",{face:[-1,-3]}).to(Te+.5,"crouch").go([[-1.3,xt,-1.6],[-1.4,xt,-3.8],[yi[0][0],xt,yi[0][1]]],5.5,"run").to(Te+3,"aim",{face:[-6,-16]}),m.a2=Mn().at(0,-.6,xt,2.8,"crouch",{face:[1,-3]}).to(Te+.7,"crouch").go([[.2,xt,-1.4],[.6,xt,-3.8],[yi[1][0],xt,yi[1][1]]],5.5,"run").to(Te+3.2,"aim",{face:[5,-16]}),r.push([Te,"blast"],[Te,"bombs"]),n.push([Te,Te+.7,"spark",1,xt+1.6,-2.8,3],[Te,Te+1,"shock",.8,xt+.05,-3.4,6.5],[Te,ai,"fire",1.9,xt,-2.2,1.4],[Te+.2,ai,"fire",-.4,xt,-4.6,.9]),o.push([Te,Te+2.2,"\u5C0F\u4ED3\u5E93\u7206\u70B8\uFF1A\u70B8\u6389\u4E00\u5927\u5757\u5899",.8,xt+5.4,-3.4,"warn"],[Te+.6,Bi+.4,"\u5B88\u536B\u88AB\u70B8\u98DE",-1.4,xt+2.6,-7.8,"note"]));for(let[x,y,M]of d){let T=m[M],A=h[y],C=Gh[M];T.to(x-1.4,"aim").to(x-1.1,"aim",{face:[A.x,A.z]});let S=g(C[0],C[1],C[2],1.3),v=g(A.x,A.y,A.z,1.1),P=M==="p"?"route":"team";s.push([x-1,x-.7,S,v,P],[x-.35,x+.1,S,v,P])}for(let[x,y]of Object.entries(m))x!=="p"&&(e[x]=kn("t",y.to(ai,"aim")));e.p=kn("p",_.to(ns,"aim").to(ns+.4,"aim",{face:[3.6,-19.55]}).to(ai,"aim")),c.forEach((x,y)=>{let M=u[x.id],T=yn-.1+y*37%7*.05,A=t&&x.id[0]==="e"?[se[0],se[1]]:Oi,C=Mn().at(0,x.x,x.y,x.z,"look",{face:x.id[0]==="m"?[x.x,-9]:[vn.x,vn.z]});if(M&&M.kind==="stab")C.to(M.t-.25,"look").mv(M.t+.2,x.x,x.y,x.z+.3,"down");else if(C.to(T,"look").to(T+.3,"aim",{face:A}),M&&M.kind==="blast"){let[S,v]=Hc[M.i];C.to(Te,"aim").mv(Te+.55,S,xt,v,"blown",{arc:1.4}).to(Te+.8,"down")}else if(M){let[S,v]=M.kind==="mg"?se:[Gh[M.by][0],Gh[M.by][2]],P=Math.hypot(x.x-S,x.z-v)||1;C.to(M.t-.05,"aim").mv(M.t+.3,x.x+(x.x-S)/P*.4,x.y,x.z+(x.z-v)/P*.4,"down")}C.to(ai,M?"down":"aim"),e[x.id]=kn("g",C)});let p=["x0","n0","w1","n1","x1","e0","m0","n3","w0","n2","e1","m1","w2"],b=0;for(let x=yn+.8,y=0;x<ns-.3;x+=.9,y++){let M=null;for(let C=0;C<p.length;C++){let S=p[(b+C)%p.length];if(f(S,x+.4)){M=S,b=(b+C+1)%p.length;break}}if(!M)break;let T=h[M],A=[Oi[0],xt+1.1,Oi[1]];y%3===2&&i&&x>Te+3?A=[yi[y%2][0],xt+1,yi[y%2][1]]:y%3===2&&t&&(A=[Ds[0],Wt+1.1,Ds[1]]),s.push([x,x+.3,[T.x,T.y+1.3,T.z],A,"enemy"])}return o.push([0,3,"\u6F2B\u5929\u51FA\u4EF7\uFF0C\u5438\u5F15\u56F4\u89C2","p",2.9,null,"note"]),!i&&!t?o.push([yn,Te+1.6,"\u6CA1\u6709\u5229\u7528\u5F31\u70B9\uFF1A\u5B88\u536B\u4E00\u4E2A\u4E0D\u5C11\uFF0C\u73A9\u5BB6\u6B63\u9762\u8FCE\u6218",vn.x,xt+5.2,-12,"warn"]):t||o.push([3.4,yn+2.4,"\u6CA1\u6709\u5229\u7528\u6B66\u5668\uFF1A\u5E73\u53F0\u4E0A\u7684\u5B88\u536B\u8FD8\u5728",1.8,Wt+3.2,-21.4,"warn"]),!i&&t&&o.push([Te-.4,Bi+.4,"\u6CA1\u6709\u5229\u7528\u70B8\u5F39\uFF1A\u5357\u5899\u8FB9\u7684\u5B88\u536B\u8FD8\u5728",.4,xt+3.6,-4.6,"warn"]),o.push([Bi,Bi+3.4,"\u5F31\u70B9\u4E4B\u5916\uFF1A\u5E73\u53F0\u4E0B\u3001\u5317\u8FB9\u8D27\u5806\u540E\u7684\u5B88\u536B\u8FD8\u5728",-2.4,xt+4.8,-19.6,"warn"]),t&&o.push([Bi+.3,Bi+3.4,"\u673A\u67AA\u6253\u4E0D\u5230\u5E73\u53F0\u6B63\u4E0B\u65B9",se[0]+2.6,Wt+2.6,se[1]+.4,"note"]),o.push([Bi+3.4,ns,i&&t?"\u627E\u63A9\u4F53\uFF0C\u548C\u540C\u4F34\u4E00\u8D77\u6E05\u6389\u5269\u4E0B\u7684\u5B88\u536B":i||t?"\u5C11\u4E86\u4E00\u8DEF\u540C\u4F34\uFF0C\u5269\u4E0B\u7684\u5B88\u536B\u66F4\u591A":"\u6CA1\u6709\u540C\u4F34\u652F\u63F4\uFF0C\u53EA\u80FD\u81EA\u5DF1\u6253","p",2.9,null,"note"]),o.push([ns,ai,"\u5934\u76EE\u9003\u8DD1 \u2192 \u8FFD\u8D76","l",2.9,null,"warn"]),{dur:ai,init:-1,mode:_i,act:e,fx:n,arr:s,brk:r,lab:o,cnt:a,trk:l,cam:[[0,{t:[-5,xt+1.4,-12.6],r:22,ph:1.06,th:.3}],[3.2,{t:[9,Wt,-19],r:26,ph:1,th:.5}],[5.4,{t:[2.4,Wt,-21.4],r:22,ph:1,th:.22}],[yn,{t:[4.6,xt+2.6,-14.4],r:30,ph:1,th:.55}],[Te-.8,{t:[-.8,xt+1.4,-5.6],r:25,ph:1,th:.14}],[Bi,{t:[-2.5,xt+1.5,-14.6],r:36,ph:.98,th:.2}],[17.4,{t:[-7,xt+1.4,-15.6],r:30,ph:1,th:-.22}],[ns,{t:[1.6,xt+1.6,-18.2],r:24,ph:1.04,th:.3}],[ai,{t:[-1,Wt,-19.8],r:26,ph:1,th:.1}]],shake:i?[[Te,Te+.6,.5]]:[],ch:[0,3.2,yn,Te,Bi,ns],sb:{x0:-24,x1:16,z0:-25,z1:4,y0:et.F3,y1:18}}}var k_=(()=>{let i=Mn().at(0,Fs[0],xt,Fs[1],"run",{face:[3.6,-19.55]}).go([[3.6,xt,-19.55]],4.6,"run").go([[-3.6,Wt,-19.55],[-5.3,Wt,-19.7],[-5.6,Wt,-22.4]],4.2,"run").go([[-21.6,Wt,-22.6],[-21.8,Wt,-10.5],[-24.6,Wt-.1,-10.5],[-30,Po(-30),-10.5],[-34,Po(-34),-10.5]],5.4,"run").to(13,"look",{face:[-24,-10.5]}),t=Mn().at(0,Oi[0],xt,Oi[1],"aim",{face:[Fs[0],Fs[1]]}).to(.3,"aim").go([[-7.2,xt,-13.9],[-1.4,xt,-17.4],[2.8,xt,-18.3],[3.6,xt,-19.55]],5.4,"run").go([[-3.6,Wt,-19.55],[-5.3,Wt,-19.7],[-5.6,Wt,-22.4]],4.3,"run").go([[-21.6,Wt,-22.6],[-21.8,Wt,-10.5],[-24.6,Wt-.1,-10.5],[-28.6,Po(-28.6),-10.5]],5.5,"run").to(13,"run");return{dur:13,init:16,mode:_i,act:{p:kn("p",t),l:kn("l",i)},lab:[[0,2.2,"\u5934\u76EE\u6CBF\u4ED3\u5E93\u5185\u90E8\u7684\u8DEF\u7EBF\u9003\u8DD1","l",2.9,null,"warn"],[2.2,4.6,"\u4E0A\u5230\u4ED3\u5E93\u4E8C\u5C42\u5E73\u53F0\uFF1A\u521A\u624D\u7EC4\u7EC7\u6210\u5458\u51FA\u624B\u7684\u5730\u65B9",-1,Wt+3.4,-21.4,"note"],[4.6,8,"\u6CBF\u5E73\u53F0\u7ED5\u5411\u897F\u4FA7",-13,Wt+3,-22.8,"note"],[8,10,"\u7A7F\u8FC7\u4FA7\u9762\u5F00\u53E3\uFF1A\u4ECE\u5BA4\u5185\u5230\u5916\u90E8\u5C4B\u9876",-24,Wt+3.4,-10.5,"item"],[10,13,"\u8F66\u68DA\u9876\uFF1A\u4E00\u697C\u65F6\u53EA\u662F\u9662\u5B50\u65C1\u7684\u4E00\u90E8\u5206",-31,Po(-31)+2.8,-12.5,"note"]],cam:[[0,{t:[1,xt+1.6,-17],r:24,ph:1.04,th:.1}],[2.2,{t:[-2,Wt+.4,-20.4],r:26,ph:1,th:-.1}],[4.6,{t:[-13,Wt+1,-21.4],r:28,ph:.98,th:-.3}],[8,{t:[-23,Wt,-12],r:28,ph:.98,th:.12}],[13,{t:[-29.5,Po(-29.5)+.6,-10.5],r:28,ph:1,th:-.35}]],ch:[0,2.2,4.6,8,10],cnt:null,sb:{x0:-38,x1:8,z0:-25,z1:-3,y0:et.F3,y1:20}}})(),Do={lure:O_,fight11:jc(!0,!0),fight01:jc(!1,!0),fight10:jc(!0,!1),fight00:jc(!1,!1),chase:k_};var zi=i=>Math.max(0,Math.min(1,i)),yd=i=>i*i*(3-2*i),Ar=(i,t,e)=>i+(t-i)*e,vd=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+n*e},H_=["fall","fly","held"];function V_(i){let t=[],e=0;return i.forEach((n,s)=>{let r=n[5]||{};if(r.face!=null)e=typeof r.face=="number"?r.face:Math.atan2(r.face[0]-n[1],r.face[1]-n[3]);else if(s>0){let o=i[s-1],a=n[1]-o[1],l=n[3]-o[3];Math.hypot(a,l)>.05&&(e=Math.atan2(a,l))}t.push(e)}),n=>{let s=i.length,r=0;for(;r<s&&i[r][0]<=n;)r++;let o=!0;for(let f=0;f<r;f++){let g=i[f][5];g&&g.hide&&(o=!1),g&&g.show&&(o=!0)}if(r===0)return{x:i[0][1],y:i[0][2],z:i[0][3],pose:i[0][4],yaw:t[0],vis:o,air:!1};if(r>=s){let f=i[s-1];return{x:f[1],y:f[2],z:f[3],pose:f[4],yaw:t[s-1],vis:o,air:!1}}let a=i[r-1],l=i[r],c=l[5]||{},h=l[0]-a[0],u=h>0?zi((n-a[0])/h):1;c.ease&&(u=yd(u));let d=Ar(a[2],l[2],c.fall?u*u:u);return c.arc&&(d+=4*c.arc*u*(1-u)),{x:Ar(a[1],l[1],u),y:d,z:Ar(a[3],l[3],u),pose:l[4],yaw:vd(t[r-1],t[r],zi((n-a[0])/.2)),vis:o,air:!!(c.arc||c.fall)}}}function G_(i,t){let e=0;for(;e<i.length&&i[e][0]<=t;)e++;if(e===0)return i[0][1];if(e>=i.length)return i[i.length-1][1];let[n,s]=i[e-1],[r,o]=i[e],a=yd(zi((t-n)/(r-n)));return{t:s.t.map((l,c)=>Ar(l,o.t[c],a)),r:Math.exp(Ar(Math.log(s.r),Math.log(o.r),a)),ph:Ar(s.ph,o.ph,a),th:vd(s.th,o.th,a)}}var Kc=(i,t,e)=>i>=t&&i<e;function Md(i,t,e={}){let n=Jc(i),s=$c(i,t),r=new _e;r.name="stage",i.scene.add(r);let o=document.createElement("div");o.className="bs-mask",o.innerHTML="<span></span>",t.appendChild(o);let a=null,l=null,c=0,h=!1,u=!0,d="",f="",g=0,_={},m=[],p=[],b=[],x={},y=null,M=-1,T=(I,O=0)=>typeof I=="string"?()=>{let L=_[I];return new N(L.F.root.position.x,L.F.root.position.y+O,L.F.root.position.z)}:null,A=(I,O=0)=>{if(typeof I!="string")return new N(...I);let L=_[I];return new N(L.F.root.position.x,L.F.root.position.y+O,L.F.root.position.z)};function C(){for(let I of[...r.children])r.remove(I),I.traverse(O=>{O.geometry&&O.geometry.dispose()});for(let I of b)s.remove(I.m);for(let I of Object.values(x))I&&I.dispose();_={},m=[],p=[],b=[],x={},y=null,d="",f="",M=-1}function S(){var O;let I=(O=a.scale)!=null?O:1.2;for(let[L,X]of Object.entries(a.act)){let tt=Wc(X.k);tt.root.scale.setScalar(I),r.add(tt.root),_[L]={F:tt,at:V_(X.keys)}}if(a.route!==!1&&a.act.p){let L=[[]];a.act.p.keys.forEach((X,tt)=>{let it=X[5]||{};it.cut&&L.push([]);let lt=L[L.length-1],nt=lt[lt.length-1];(!nt||Math.hypot(nt[0]-X[1],nt[1]-X[2]-.12,nt[2]-X[3])>.05)&&lt.push([X[1],X[2]+.12,X[3],tt&&(it.arc||it.fall)?1:0])}),y=new _e,r.add(y);for(let X of L)X.length>1&&y.add(Ps(X,oi.route,.16,{every:6,xray:.18,opacity:.5}))}for(let[L,X]of a.trk||[])r.add(Ps(L,X||oi.team,.14,{every:6,xray:.18,opacity:.5}));for(let L of a.fx||[]){let[X,tt,it,lt,nt,mt,ct]=L,Q=null;it==="fire"?Q=Xc(ct||1.5,(typeof lt=="number"?lt:3)+(mt||0)):it==="spark"?Q=qc(ct||1):it==="shock"&&(Q=Yc(ct||4)),Q&&(typeof lt!="string"&&Q.position.set(lt,nt,mt),Q.visible=!1,r.add(Q),m.push({t0:X,t1:tt,kind:it,g:Q,ref:typeof lt=="string"?lt:null,dy:typeof lt=="string"?nt:0}))}for(let[L,X,tt,it,lt,nt]of a.arr||[]){let mt=lt==="mg",ct=mt?[.5,.35]:null,Q=oi[lt]||oi.atk,k=Array.isArray(tt[0])?Tr(tt,.2,Q,{dash:ct,every:999,last:!0,xray:.3}):Zc(tt,it,Q,{dash:ct,r:mt?.08:.14,arc:mt?0:.12,...nt||{}});k.visible=!1,r.add(k),p.push({t0:L,t1:X,g:k})}for(let L of a.lab||[]){let[X,tt,it,lt,nt,mt,ct]=L,Q=ct==="qte",k=s.add("bs-lab k-"+(ct||"note"),(ct==="item"||Q?"<i>\u25C6</i>":"")+it+(Q?"<s></s>":""),typeof lt=="string"?T(lt,nt):[lt,nt,mt]);b.push({t0:X,t1:tt,m:k,q:Q})}for(let L of a.brk||[])x[L[1]]||(x[L[1]]=n.burst(L[1]))}function v(){if(!a)return;let I=c,O=a.mode;for(let[nt,mt]of a.modes||[])I>=nt&&(O=mt);let L=JSON.stringify(O);L!==f&&(f=L,i.setMode(O));let X=[];for(let[nt,mt]of a.brk||[])I>=nt&&X.push([mt,1,I<nt+.5]);let tt=JSON.stringify(X.map(nt=>[nt[0],typeof nt[1]=="number"?+nt[1].toFixed(3):nt[1],nt[2]]));if(tt!==d){d=tt,n.at(a.init);for(let[nt,mt,ct]of X)n.set(nt,mt,ct)}for(let[nt,mt]of a.brk||[])x[mt]&&x[mt].at(I-nt);for(let nt of Object.values(_)){let mt=nt.at(I),ct=nt.F;ct.root.visible=mt.vis,ct.root.position.set(mt.x,mt.y,mt.z),ct.root.rotation.y=mt.yaw,ct.pose(mt.pose||"idle",I),ct.ring.visible=!H_.includes(mt.pose)&&!mt.air}for(let nt of m){let mt=Kc(I,nt.t0,nt.t1);if(nt.g.visible=mt,!mt)continue;let ct=I-nt.t0,Q=nt.g;if(nt.ref){let k=A(nt.ref,nt.dy);Q.position.copy(k)}nt.kind==="fire"?(Q.scale.setScalar(.25+.75*zi(ct/.4)),Q.userData.tick&&Q.userData.tick(I)):Q.userData.at(zi(ct/(nt.t1-nt.t0)))}for(let nt of p)nt.g.visible=Kc(I,nt.t0,nt.t1);for(let nt of b)nt.m.on=Kc(I,nt.t0,nt.t1),nt.q&&nt.m.on&&nt.m.e.style.setProperty("--q",(1-zi((I-nt.t0)/(nt.t1-nt.t0))).toFixed(3));let it=0,lt="";for(let[nt,mt,ct]of a.mask||[])I>=nt-.25&&I<mt+.25&&(it=Math.max(it,Math.min(zi((I-nt+.25)/.25),zi((mt+.25-I)/.25))),lt=ct);if(o.style.opacity=it.toFixed(3),o.style.display=it>0?"":"none",lt&&o.firstChild.textContent!==lt&&(o.firstChild.textContent=lt),a.cnt){let nt=a.cnt[0][1];for(let[mt,ct]of a.cnt)I>=mt&&(nt=ct);nt!==M&&(M=nt,e.onCount&&e.onCount(nt))}else M!==null&&(M=null,e.onCount&&e.onCount(null));u&&a.cam&&performance.now()>g&&F(I,!0),i.shadowDirty(),e.onT&&e.onT(a.dur?I/a.dur:0)}let P=I=>{let O=t.clientWidth/Math.max(1,t.clientHeight),L=O<1.25?Math.pow(1.25/O,.75):1;return{...I,r:I.r*L}};function F(I,O){let L=P(G_(a.cam,I)),X=L.t[0],tt=L.t[1],it=L.t[2];for(let[nt,mt,ct]of a.shake||[])if(Kc(I,nt,mt)){let Q=Math.sin(Math.PI*(I-nt)/(mt-nt))*ct;X+=Math.sin(I*53)*Q,tt+=Math.sin(I*41+1)*Q*.6,it+=Math.cos(I*47)*Q}let lt={th:L.th,ph:L.ph,r:L.r,t:new N(X,tt,it)};O?i.controls.set(lt,!0):i.controls.flyTo(lt,.9)}i.onFrame(I=>{!h||!a||(c=Math.min(a.dur,c+I),v(),c>=a.dur&&(W(),e.onEnd&&e.onEnd()))});function B(){a&&(c>=a.dur-.001&&(c=0),h=!0,i.animating=!0,e.onPlay&&e.onPlay(!0))}function W(){h=!1,i.animating=!1,i.invalidate(),e.onPlay&&e.onPlay(!1)}i.onUserStart(()=>{u&&(u=!1,e.onFollow&&e.onFollow(!1))});function $(I,O={}){Do[I]&&(W(),C(),l=I,a=Do[I],c=0,u=!0,e.onFollow&&e.onFollow(!0),a.sb&&i.setShadowBox(a.sb),S(),O.fly&&a.cam?(F(0,!1),g=performance.now()+950,i.animUntil=g+150):g=0,v())}return{load:$,play:B,pause:W,isPlaying:()=>h,setT(I,O={}){a&&(c=zi(I)*a.dur,O.cam!==!1&&a.cam&&(u||(u=!0,e.onFollow&&e.onFollow(!0)),O.fly?(F(c,!1),g=performance.now()+950,i.animUntil=g+150):g=0),v(),i.invalidate())},get t(){return a?c/a.dur:0},get id(){return l},get follow(){return u},setFollow(I){u=I,I&&a&&(F(c,!1),g=performance.now()+950,i.animUntil=g+150),e.onFollow&&e.onFollow(I)},resetView(){this.setFollow(!0)},info:I=>{let O=Do[I||l];return O?{dur:O.dur,ch:O.ch,cnt:O.cnt}:null},scenes:Object.keys(Do),dispose(){W(),C(),o.remove(),s.lay.remove(),i.scene.remove(r)}}}return Fd(W_);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
