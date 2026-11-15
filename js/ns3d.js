(()=>{var us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xu=0,ql=1,Mu=2;var Xl=1,$a=2,bi=3,zi=0,pn=1,qe=2,Hi=0,As=1,Ns=2,Yl=3,Gl=4,vu=5,ss=100,bu=101,Su=102,wu=103,Eu=104,Tu=200,Au=201,Ru=202,Cu=203,wa=204,Ea=205,Pu=206,Iu=207,Du=208,Lu=209,Uu=210,Nu=211,Fu=212,Bu=213,Ou=214,Ja=0,ja=1,Ka=2,Rs=3,Qa=4,tc=5,Po=6,ec=7,nc=0,zu=1,ku=2,Vi=0,Hu=1,Vu=2,Wu=3,ic=4,qu=5,Xu=6,Yu=7;var Zl=300,Fs=301,Bs=302,sc=303,oc=304,Lr=306,ki=1e3,is=1001,Ta=1002,Pn=1003,Gu=1004;var Ur=1005;var ai=1006,rc=1007;var ds=1008;var li=1009,$l=1010,Jl=1011,Io=1012,ac=1013,ps=1014,hi=1015,Do=1016,cc=1017,lc=1018,Lo=1020,jl=35902,Kl=35899,Ql=1021,th=1022,Zn=1023,_o=1026,Uo=1027,hc=1028,uc=1029,eh=1030,fc=1031;var dc=1033,Nr=33776,Fr=33777,Br=33778,Or=33779,pc=35840,mc=35841,gc=35842,yc=35843,_c=36196,xc=37492,Mc=37496,vc=37808,bc=37809,Sc=37810,wc=37811,Ec=37812,Tc=37813,Ac=37814,Rc=37815,Cc=37816,Pc=37817,Ic=37818,Dc=37819,Lc=37820,Uc=37821,Nc=36492,Fc=36494,Bc=36495,Oc=36283,zc=36284,kc=36285,Hc=36286;var ir=2300,Aa=2301,Sa=2302,Ll=2400,Ul=2401,Nl=2402;var Zu=3200,Vc=3201;var Wc=0,$u=1,Wi="",ke="srgb",Cs="srgb-linear",sr="linear",Ie="srgb";var Ts=7680;var Fl=519,Ju=512,ju=513,Ku=514,nh=515,Qu=516,tf=517,ef=518,nf=519,Ra=35044;var ih="300 es",ri=2e3,or=2001;var _i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,er=Math.PI/180,xo=180/Math.PI;function Bi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function H0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function V0(i,t,e){return i!==t?(e-i)/(t-i):0}function nr(i,t,e){return(1-e)*i+e*t}function W0(i,t,e,n){return nr(i,t,1-Math.exp(-e*n))}function q0(i,t=1){return t-Math.abs(sh(i,t*2)-t)}function X0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Y0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function G0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Z0(i,t){return i+Math.random()*(t-i)}function $0(i){return i*(.5-Math.random())}function J0(i){i!==void 0&&(Wh=i);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function j0(i){return i*er}function K0(i){return i*xo}function Q0(i){return(i&i-1)===0&&i!==0}function td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nd(i,t,e,n,s){let o=Math.cos,r=Math.sin,c=o(e/2),a=r(e/2),l=o((t+n)/2),u=r((t+n)/2),h=o((t-n)/2),d=r((t-n)/2),f=o((n-t)/2),p=r((n-t)/2);switch(s){case"XYX":i.set(c*u,a*h,a*d,c*l);break;case"YZY":i.set(a*d,c*u,a*h,c*l);break;case"ZXZ":i.set(a*h,a*d,c*u,c*l);break;case"XZX":i.set(c*u,a*p,a*f,c*l);break;case"YXY":i.set(a*f,c*u,a*p,c*l);break;case"ZYZ":i.set(a*p,a*f,c*u,c*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var oh={DEG2RAD:er,RAD2DEG:xo,generateUUID:Bi,clamp:fe,euclideanModulo:sh,mapLinear:H0,inverseLerp:V0,lerp:nr,damp:W0,pingpong:q0,smoothstep:X0,smootherstep:Y0,randInt:G0,randFloat:Z0,randFloatSpread:$0,seededRandom:J0,degToRad:j0,radToDeg:K0,isPowerOfTwo:Q0,ceilPowerOfTwo:td,floorPowerOfTwo:ed,setQuaternionFromProperEuler:nd,normalize:Pe,denormalize:oi},Jt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,c){let a=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=o[r+0],f=o[r+1],p=o[r+2],y=o[r+3];if(c===0){t[e+0]=a,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(c===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=y;return}if(h!==y||a!==d||l!==f||u!==p){let g=1-c,m=a*d+l*f+u*p+h*y,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let x=Math.sqrt(_),b=Math.atan2(x,m*M);g=Math.sin(g*b)/x,c=Math.sin(c*b)/x}let v=c*M;if(a=a*g+d*v,l=l*g+f*v,u=u*g+p*v,h=h*g+y*v,g===1-c){let x=1/Math.sqrt(a*a+l*l+u*u+h*h);a*=x,l*=x,u*=x,h*=x}}t[e]=a,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,o,r){let c=n[s],a=n[s+1],l=n[s+2],u=n[s+3],h=o[r],d=o[r+1],f=o[r+2],p=o[r+3];return t[e]=c*p+u*h+a*f-l*d,t[e+1]=a*p+u*d+l*h-c*f,t[e+2]=l*p+u*f+c*d-a*h,t[e+3]=u*p-c*h-a*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,c=Math.cos,a=Math.sin,l=c(n/2),u=c(s/2),h=c(o/2),d=a(n/2),f=a(s/2),p=a(o/2);switch(r){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],c=e[5],a=e[9],l=e[2],u=e[6],h=e[10],d=n+c+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-a)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>c&&n>h){let f=2*Math.sqrt(1+n-c-h);this._w=(u-a)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(c>h){let f=2*Math.sqrt(1+c-n-h);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(a+u)/f}else{let f=2*Math.sqrt(1+h-n-c);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(a+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,c=e._x,a=e._y,l=e._z,u=e._w;return this._x=n*u+r*c+s*l-o*a,this._y=s*u+r*a+o*c-n*l,this._z=o*u+r*l+n*a-s*c,this._w=r*u-n*c-s*a-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,o=this._z,r=this._w,c=r*t._w+n*t._x+s*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;let a=1-c*c;if(a<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let l=Math.sqrt(a),u=Math.atan2(l,c),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=r*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,c=t.z,a=t.w,l=2*(r*s-c*n),u=2*(c*e-o*s),h=2*(o*n-r*e);return this.x=e+a*l+r*h-c*u,this.y=n+a*u+c*l-o*h,this.z=s+a*h+o*u-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,c=e.y,a=e.z;return this.x=s*a-o*c,this.y=o*r-n*a,this.z=n*c-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new Y,qh=new xn,ue=class i{constructor(t,e,n,s,o,r,c,a,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,c,a,l)}set(t,e,n,s,o,r,c,a,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=c,u[3]=e,u[4]=o,u[5]=a,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],c=n[3],a=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],y=s[0],g=s[3],m=s[6],M=s[1],_=s[4],v=s[7],x=s[2],b=s[5],E=s[8];return o[0]=r*y+c*M+a*x,o[3]=r*g+c*_+a*b,o[6]=r*m+c*v+a*E,o[1]=l*y+u*M+h*x,o[4]=l*g+u*_+h*b,o[7]=l*m+u*v+h*E,o[2]=d*y+f*M+p*x,o[5]=d*g+f*_+p*b,o[8]=d*m+f*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],c=t[5],a=t[6],l=t[7],u=t[8];return e*r*u-e*c*l-n*o*u+n*c*a+s*o*l-s*r*a}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],c=t[5],a=t[6],l=t[7],u=t[8],h=u*r-c*l,d=c*a-u*o,f=l*o-r*a,p=e*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=h*y,t[1]=(s*l-u*n)*y,t[2]=(c*n-s*r)*y,t[3]=d*y,t[4]=(u*e-s*a)*y,t[5]=(s*o-c*e)*y,t[6]=f*y,t[7]=(n*a-l*e)*y,t[8]=(r*e-n*o)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,c){let a=Math.cos(o),l=Math.sin(o);return this.set(n*a,n*l,-n*(a*r+l*c)+r+t,-s*l,s*a,-s*(-l*r+a*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(al.makeScale(t,e)),this}rotate(t){return this.premultiply(al.makeRotation(-t)),this}translate(t,e){return this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},al=new ue;function rh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sf(){let i=rr("canvas");return i.style.display="block",i}var Xh={};function Mo(i){i in Xh||(Xh[i]=!0,console.warn(i))}function of(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}var Yh=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){let i={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(s,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===Ie&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Ie&&(s.r=yo(s.r),s.g=yo(s.g),s.b=yo(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wi?sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,r){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return Mo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return Mo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,o)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Cs]:{primaries:t,whitePoint:n,transfer:sr,toXYZ:Yh,fromXYZ:Gh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:Ie,toXYZ:Yh,fromXYZ:Gh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var ve=id();function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qs,Ca=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qs===void 0&&(Qs=rr("canvas")),Qs.width=t.width,Qs.height=t.height;let s=Qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Oi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sd=0,vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Bi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,c=s.length;r<c;r++)s[r].isDataTexture?o.push(cl(s[r].image)):o.push(cl(s[r]))}else o=cl(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ca.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var od=0,ll=new Y,fn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=is,s=is,o=ai,r=ds,c=Zn,a=li,l=i.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=Bi(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=c,this.internalFormat=null,this.type=a,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case is:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case is:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Zl;fn.DEFAULT_ANISOTROPY=1;var we=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,a=t.elements,l=a[0],u=a[4],h=a[8],d=a[1],f=a[5],p=a[9],y=a[2],g=a[6],m=a[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(f+1)/2,x=(m+1)/2,b=(u+d)/4,E=(h+y)/4,A=(p+g)/4;return _>v&&_>x?_<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(_),s=b/n,o=E/n):v>x?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=b/s,o=A/s):x<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(x),n=E/o,s=A/o),this.set(n,s,o,e),this}let M=Math.sqrt((g-p)*(g-p)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(h-y)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pa=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);let s={width:t,height:e,depth:n.depth},o=new fn(s);this.textures=[];let r=n.count;for(let c=0;c<r;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ai,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends Pa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ar=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ia=class extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xi=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,c=o.count;r<c;r++)t.isMesh===!0?t.getVertexPosition(r,ni):ni.fromBufferAttribute(o,r),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qo),Qr.subVectors(this.max,qo),to.subVectors(t.a,qo),eo.subVectors(t.b,qo),no.subVectors(t.c,qo),ji.subVectors(eo,to),Ki.subVectors(no,eo),bs.subVectors(to,no);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-bs.z,bs.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,bs.z,0,-bs.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-bs.y,bs.x,0];return!hl(e,to,eo,no,Qr)||(e=[1,0,0,0,1,0,0,0,1],!hl(e,to,eo,no,Qr))?!1:(ta.crossVectors(ji,Ki),e=[ta.x,ta.y,ta.z],hl(e,to,eo,no,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ii=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],ni=new Y,Kr=new xi,to=new Y,eo=new Y,no=new Y,ji=new Y,Ki=new Y,bs=new Y,qo=new Y,Qr=new Y,ta=new Y,Ss=new Y;function hl(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ss.fromArray(i,o);let c=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),a=t.dot(Ss),l=e.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(a,l,u),Math.min(a,l,u))>c)return!1}return!0}var rd=new xi,Xo=new Y,ul=new Y,os=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);let e=Xo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(ul)),this.expandByPoint(Xo.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Di=new Y,fl=new Y,ea=new Y,Qi=new Y,dl=new Y,na=new Y,pl=new Y,Ps=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Di.copy(this.origin).addScaledVector(this.direction,e),Di.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fl.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),Qi.copy(this.origin).sub(fl);let o=t.distanceTo(e)*.5,r=-this.direction.dot(ea),c=Qi.dot(this.direction),a=-Qi.dot(ea),l=Qi.lengthSq(),u=Math.abs(1-r*r),h,d,f,p;if(u>0)if(h=r*a-c,d=r*c-a,p=o*u,h>=0)if(d>=-p)if(d<=p){let y=1/u;h*=y,d*=y,f=h*(h+r*d+2*c)+d*(r*h+d+2*a)+l}else d=o,h=Math.max(0,-(r*d+c)),f=-h*h+d*(d+2*a)+l;else d=-o,h=Math.max(0,-(r*d+c)),f=-h*h+d*(d+2*a)+l;else d<=-p?(h=Math.max(0,-(-r*o+c)),d=h>0?-o:Math.min(Math.max(-o,-a),o),f=-h*h+d*(d+2*a)+l):d<=p?(h=0,d=Math.min(Math.max(-o,-a),o),f=d*(d+2*a)+l):(h=Math.max(0,-(r*o+c)),d=h>0?o:Math.min(Math.max(-o,-a),o),f=-h*h+d*(d+2*a)+l);else d=r>0?-o:o,h=Math.max(0,-(r*d+c)),f=-h*h+d*(d+2*a)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(fl).addScaledVector(ea,d),f}intersectSphere(t,e){Di.subVectors(t.center,this.origin);let n=Di.dot(this.direction),s=Di.dot(Di)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),c=n-r,a=n+r;return a<0?null:c<0?this.at(a,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,c,a,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(o=(t.min.y-d.y)*u,r=(t.max.y-d.y)*u):(o=(t.max.y-d.y)*u,r=(t.min.y-d.y)*u),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),h>=0?(c=(t.min.z-d.z)*h,a=(t.max.z-d.z)*h):(c=(t.max.z-d.z)*h,a=(t.min.z-d.z)*h),n>a||c>s)||((c>n||n!==n)&&(n=c),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Di)!==null}intersectTriangle(t,e,n,s,o){dl.subVectors(e,t),na.subVectors(n,t),pl.crossVectors(dl,na);let r=this.direction.dot(pl),c;if(r>0){if(s)return null;c=1}else if(r<0)c=-1,r=-r;else return null;Qi.subVectors(this.origin,t);let a=c*this.direction.dot(na.crossVectors(Qi,na));if(a<0)return null;let l=c*this.direction.dot(dl.cross(Qi));if(l<0||a+l>r)return null;let u=-c*Qi.dot(pl);return u<0?null:this.at(u/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,o,r,c,a,l,u,h,d,f,p,y,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,c,a,l,u,h,d,f,p,y,g)}set(t,e,n,s,o,r,c,a,l,u,h,d,f,p,y,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=o,m[5]=r,m[9]=c,m[13]=a,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/io.setFromMatrixColumn(t,0).length(),o=1/io.setFromMatrixColumn(t,1).length(),r=1/io.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),c=Math.sin(n),a=Math.cos(s),l=Math.sin(s),u=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){let d=r*u,f=r*h,p=c*u,y=c*h;e[0]=a*u,e[4]=-a*h,e[8]=l,e[1]=f+p*l,e[5]=d-y*l,e[9]=-c*a,e[2]=y-d*l,e[6]=p+f*l,e[10]=r*a}else if(t.order==="YXZ"){let d=a*u,f=a*h,p=l*u,y=l*h;e[0]=d+y*c,e[4]=p*c-f,e[8]=r*l,e[1]=r*h,e[5]=r*u,e[9]=-c,e[2]=f*c-p,e[6]=y+d*c,e[10]=r*a}else if(t.order==="ZXY"){let d=a*u,f=a*h,p=l*u,y=l*h;e[0]=d-y*c,e[4]=-r*h,e[8]=p+f*c,e[1]=f+p*c,e[5]=r*u,e[9]=y-d*c,e[2]=-r*l,e[6]=c,e[10]=r*a}else if(t.order==="ZYX"){let d=r*u,f=r*h,p=c*u,y=c*h;e[0]=a*u,e[4]=p*l-f,e[8]=d*l+y,e[1]=a*h,e[5]=y*l+d,e[9]=f*l-p,e[2]=-l,e[6]=c*a,e[10]=r*a}else if(t.order==="YZX"){let d=r*a,f=r*l,p=c*a,y=c*l;e[0]=a*u,e[4]=y-d*h,e[8]=p*h+f,e[1]=h,e[5]=r*u,e[9]=-c*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-y*h}else if(t.order==="XZY"){let d=r*a,f=r*l,p=c*a,y=c*l;e[0]=a*u,e[4]=-h,e[8]=l*u,e[1]=d*h+y,e[5]=r*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=c*u,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,cd)}lookAt(t,e,n){let s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ts.crossVectors(n,Bn),ts.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ts.crossVectors(n,Bn)),ts.normalize(),ia.crossVectors(Bn,ts),s[0]=ts.x,s[4]=ia.x,s[8]=Bn.x,s[1]=ts.y,s[5]=ia.y,s[9]=Bn.y,s[2]=ts.z,s[6]=ia.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],c=n[4],a=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],y=n[6],g=n[10],m=n[14],M=n[3],_=n[7],v=n[11],x=n[15],b=s[0],E=s[4],A=s[8],w=s[12],S=s[1],R=s[5],I=s[9],U=s[13],W=s[2],L=s[6],O=s[10],H=s[14],k=s[3],tt=s[7],nt=s[11],it=s[15];return o[0]=r*b+c*S+a*W+l*k,o[4]=r*E+c*R+a*L+l*tt,o[8]=r*A+c*I+a*O+l*nt,o[12]=r*w+c*U+a*H+l*it,o[1]=u*b+h*S+d*W+f*k,o[5]=u*E+h*R+d*L+f*tt,o[9]=u*A+h*I+d*O+f*nt,o[13]=u*w+h*U+d*H+f*it,o[2]=p*b+y*S+g*W+m*k,o[6]=p*E+y*R+g*L+m*tt,o[10]=p*A+y*I+g*O+m*nt,o[14]=p*w+y*U+g*H+m*it,o[3]=M*b+_*S+v*W+x*k,o[7]=M*E+_*R+v*L+x*tt,o[11]=M*A+_*I+v*O+x*nt,o[15]=M*w+_*U+v*H+x*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],c=t[5],a=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],y=t[7],g=t[11],m=t[15];return p*(+o*a*h-s*l*h-o*c*d+n*l*d+s*c*f-n*a*f)+y*(+e*a*f-e*l*d+o*r*d-s*r*f+s*l*u-o*a*u)+g*(+e*l*h-e*c*f-o*r*h+n*r*f+o*c*u-n*l*u)+m*(-s*c*u-e*a*h+e*c*d+s*r*h-n*r*d+n*a*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],c=t[5],a=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],y=t[13],g=t[14],m=t[15],M=h*g*l-y*d*l+y*a*f-c*g*f-h*a*m+c*d*m,_=p*d*l-u*g*l-p*a*f+r*g*f+u*a*m-r*d*m,v=u*y*l-p*h*l+p*c*f-r*y*f-u*c*m+r*h*m,x=p*h*a-u*y*a-p*c*d+r*y*d+u*c*g-r*h*g,b=e*M+n*_+s*v+o*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/b;return t[0]=M*E,t[1]=(y*d*o-h*g*o-y*s*f+n*g*f+h*s*m-n*d*m)*E,t[2]=(c*g*o-y*a*o+y*s*l-n*g*l-c*s*m+n*a*m)*E,t[3]=(h*a*o-c*d*o-h*s*l+n*d*l+c*s*f-n*a*f)*E,t[4]=_*E,t[5]=(u*g*o-p*d*o+p*s*f-e*g*f-u*s*m+e*d*m)*E,t[6]=(p*a*o-r*g*o-p*s*l+e*g*l+r*s*m-e*a*m)*E,t[7]=(r*d*o-u*a*o+u*s*l-e*d*l-r*s*f+e*a*f)*E,t[8]=v*E,t[9]=(p*h*o-u*y*o-p*n*f+e*y*f+u*n*m-e*h*m)*E,t[10]=(r*y*o-p*c*o+p*n*l-e*y*l-r*n*m+e*c*m)*E,t[11]=(u*c*o-r*h*o-u*n*l+e*h*l+r*n*f-e*c*f)*E,t[12]=x*E,t[13]=(u*y*s-p*h*s+p*n*d-e*y*d-u*n*g+e*h*g)*E,t[14]=(p*c*s-r*y*s-p*n*a+e*y*a+r*n*g-e*c*g)*E,t[15]=(r*h*s-u*c*s+u*n*a-e*h*a-r*n*d+e*c*d)*E,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,c=t.y,a=t.z,l=o*r,u=o*c;return this.set(l*r+n,l*c-s*a,l*a+s*c,0,l*c+s*a,u*c+n,u*a-s*r,0,l*a-s*c,u*a+s*r,o*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,c=e._z,a=e._w,l=o+o,u=r+r,h=c+c,d=o*l,f=o*u,p=o*h,y=r*u,g=r*h,m=c*h,M=a*l,_=a*u,v=a*h,x=n.x,b=n.y,E=n.z;return s[0]=(1-(y+m))*x,s[1]=(f+v)*x,s[2]=(p-_)*x,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(d+m))*b,s[6]=(g+M)*b,s[7]=0,s[8]=(p+_)*E,s[9]=(g-M)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,o=io.set(s[0],s[1],s[2]).length(),r=io.set(s[4],s[5],s[6]).length(),c=io.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],ii.copy(this);let l=1/o,u=1/r,h=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,e.setFromRotationMatrix(ii),n.x=o,n.y=r,n.z=c,this}makePerspective(t,e,n,s,o,r,c=ri,a=!1){let l=this.elements,u=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,y;if(a)p=o/(r-o),y=r*o/(r-o);else if(c===ri)p=-(r+o)/(r-o),y=-2*r*o/(r-o);else if(c===or)p=-r/(r-o),y=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,c=ri,a=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),p,y;if(a)p=1/(r-o),y=r/(r-o);else if(c===ri)p=-2/(r-o),y=-(r+o)/(r-o);else if(c===or)p=-1/(r-o),y=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},io=new Y,ii=new xe,ad=new Y(0,0,0),cd=new Y(1,1,1),ts=new Y,ia=new Y,Bn=new Y,Zh=new xe,$h=new xn,In=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],c=s[8],a=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,f),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,o));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(a,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,f));break;case"XZY":this._z=Math.asin(-fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $h.setFromEuler(this),this.setFromQuaternion($h,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ld=0,Jh=new Y,so=new xn,Li=new xe,sa=new Y,Yo=new Y,hd=new Y,ud=new xn,jh=new Y(1,0,0),Kh=new Y(0,1,0),Qh=new Y(0,0,1),tu={type:"added"},fd={type:"removed"},oo={type:"childadded",child:null},ml={type:"childremoved",child:null},dn=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new In,n=new xn,s=new Y(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new ue}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(jh,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(Qh,t)}translateOnAxis(t,e){return Jh.copy(t).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jh,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(Qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?sa.copy(t):sa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Yo,sa,this.up):Li.lookAt(sa,Yo,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),so.setFromRotationMatrix(Li),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tu),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),ml.child=t,this.dispatchEvent(ml),ml.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tu),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,a){return c[a.uuid]===void 0&&(c[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let a=c.shapes;if(Array.isArray(a))for(let l=0,u=a.length;l<u;l++){let h=a[l];o(t.shapes,h)}else o(t.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let a=0,l=this.material.length;a<l;a++)c.push(o(t.materials,this.material[a]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let a=this.animations[c];s.animations.push(o(t.animations,a))}}if(e){let c=r(t.geometries),a=r(t.materials),l=r(t.textures),u=r(t.images),h=r(t.shapes),d=r(t.skeletons),f=r(t.animations),p=r(t.nodes);c.length>0&&(n.geometries=c),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function r(c){let a=[];for(let l in c){let u=c[l];delete u.metadata,a.push(u)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};dn.DEFAULT_UP=new Y(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var si=new Y,Ui=new Y,gl=new Y,Ni=new Y,ro=new Y,ao=new Y,eu=new Y,yl=new Y,_l=new Y,xl=new Y,Ml=new we,vl=new we,bl=new we,Fi=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),si.subVectors(t,e),s.cross(si);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){si.subVectors(s,e),Ui.subVectors(n,e),gl.subVectors(t,e);let r=si.dot(si),c=si.dot(Ui),a=si.dot(gl),l=Ui.dot(Ui),u=Ui.dot(gl),h=r*l-c*c;if(h===0)return o.set(0,0,0),null;let d=1/h,f=(l*a-c*u)*d,p=(r*u-c*a)*d;return o.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,o,r,c,a){return this.getBarycoord(t,e,n,s,Ni)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(o,Ni.x),a.addScaledVector(r,Ni.y),a.addScaledVector(c,Ni.z),a)}static getInterpolatedAttribute(t,e,n,s,o,r){return Ml.setScalar(0),vl.setScalar(0),bl.setScalar(0),Ml.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,n),bl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Ml,o.x),r.addScaledVector(vl,o.y),r.addScaledVector(bl,o.z),r}static isFrontFacing(t,e,n,s){return si.subVectors(n,e),Ui.subVectors(t,e),si.cross(Ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return si.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),si.cross(Ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,c;ro.subVectors(s,n),ao.subVectors(o,n),yl.subVectors(t,n);let a=ro.dot(yl),l=ao.dot(yl);if(a<=0&&l<=0)return e.copy(n);_l.subVectors(t,s);let u=ro.dot(_l),h=ao.dot(_l);if(u>=0&&h<=u)return e.copy(s);let d=a*h-u*l;if(d<=0&&a>=0&&u<=0)return r=a/(a-u),e.copy(n).addScaledVector(ro,r);xl.subVectors(t,o);let f=ro.dot(xl),p=ao.dot(xl);if(p>=0&&f<=p)return e.copy(o);let y=f*l-a*p;if(y<=0&&l>=0&&p<=0)return c=l/(l-p),e.copy(n).addScaledVector(ao,c);let g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return eu.subVectors(o,s),c=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(eu,c);let m=1/(g+y+d);return r=y*m,c=d*m,e.copy(n).addScaledVector(ro,r).addScaledVector(ao,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=sh(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Sl(r,o,t+1/3),this.g=Sl(r,o,t),this.b=Sl(r,o,t-1/3)}return ve.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],c=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ve.workingToColorSpace(_n.copy(this),t),Math.round(fe(_n.r*255,0,255))*65536+Math.round(fe(_n.g*255,0,255))*256+Math.round(fe(_n.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.workingToColorSpace(_n.copy(this),e);let n=_n.r,s=_n.g,o=_n.b,r=Math.max(n,s,o),c=Math.min(n,s,o),a,l,u=(c+r)/2;if(c===r)a=0,l=0;else{let h=r-c;switch(l=u<=.5?h/(r+c):h/(2-r-c),r){case n:a=(s-o)/h+(s<o?6:0);break;case s:a=(o-n)/h+2;break;case o:a=(n-s)/h+4;break}a/=6}return t.h=a,t.s=l,t.l=u,t}getRGB(t,e=ve.workingColorSpace){return ve.workingToColorSpace(_n.copy(this),e),t.r=_n.r,t.g=_n.g,t.b=_n.b,t}getStyle(t=ke){ve.workingToColorSpace(_n.copy(this),t);let e=_n.r,n=_n.g,s=_n.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(oa);let n=nr(es.h,oa.h,e),s=nr(es.s,oa.s,e),o=nr(es.l,oa.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new ee;ee.NAMES=rf;var dd=0,Mi=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=As,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ea,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let c in o){let a=o[c];delete a.metadata,r.push(a)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends Mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var $e=new Y,ra=new Jt,pd=0,We=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ra,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),o=Pe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ra&&(t.usage=this.usage),t}};var cr=class extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var lr=class extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}},md=0,qn=new xe,wl=new dn,co=new Y,On=new xi,Go=new xi,on=new Y,Ye=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rh(t)?lr:cr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new ue().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let o=t[s];e.setXYZ(s,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];On.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let c=e[o];Go.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(On.min,Go.min),On.expandByPoint(on),on.addVectors(On.max,Go.max),On.expandByPoint(on)):(On.expandByPoint(Go.min),On.expandByPoint(Go.max))}On.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)on.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(on));if(e)for(let o=0,r=e.length;o<r;o++){let c=e[o],a=this.morphTargetsRelative;for(let l=0,u=c.count;l<u;l++)on.fromBufferAttribute(c,l),a&&(co.fromBufferAttribute(t,l),on.add(co)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),c=[],a=[];for(let A=0;A<n.count;A++)c[A]=new Y,a[A]=new Y;let l=new Y,u=new Y,h=new Y,d=new Jt,f=new Jt,p=new Jt,y=new Y,g=new Y;function m(A,w,S){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,S),d.fromBufferAttribute(o,A),f.fromBufferAttribute(o,w),p.fromBufferAttribute(o,S),u.sub(l),h.sub(l),f.sub(d),p.sub(d);let R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(y.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(R),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(R),c[A].add(y),c[w].add(y),c[S].add(y),a[A].add(g),a[w].add(g),a[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,w=M.length;A<w;++A){let S=M[A],R=S.start,I=S.count;for(let U=R,W=R+I;U<W;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new Y,v=new Y,x=new Y,b=new Y;function E(A){x.fromBufferAttribute(s,A),b.copy(x);let w=c[A];_.copy(w),_.sub(x.multiplyScalar(x.dot(w))).normalize(),v.crossVectors(b,w);let R=v.dot(a[A])<0?-1:1;r.setXYZW(A,_.x,_.y,_.z,R)}for(let A=0,w=M.length;A<w;++A){let S=M[A],R=S.start,I=S.count;for(let U=R,W=R+I;U<W;U+=3)E(t.getX(U+0)),E(t.getX(U+1)),E(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new Y,o=new Y,r=new Y,c=new Y,a=new Y,l=new Y,u=new Y,h=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),y=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,g),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),c.fromBufferAttribute(n,p),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),c.add(u),a.add(u),l.add(u),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),u.subVectors(r,o),h.subVectors(s,o),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(c,a){let l=c.array,u=c.itemSize,h=c.normalized,d=new l.constructor(a.length*u),f=0,p=0;for(let y=0,g=a.length;y<g;y++){c.isInterleavedBufferAttribute?f=a[y]*c.data.stride+c.offset:f=a[y]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new We(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let c in s){let a=s[c],l=t(a,n);e.setAttribute(c,l)}let o=this.morphAttributes;for(let c in o){let a=[],l=o[c];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=t(d,n);a.push(f)}e.morphAttributes[c]=a}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let c=0,a=r.length;c<a;c++){let l=r[c];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let l=n[a];t.data.attributes[a]=l.toJSON(t.data)}let s={},o=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[a]=u,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let o=t.morphAttributes;for(let l in o){let u=[],h=o[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,u=r.length;l<u;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nu=new xe,ws=new Ps,aa=new os,iu=new Y,ca=new Y,la=new Y,ha=new Y,El=new Y,ua=new Y,su=new Y,fa=new Y,Gt=class extends dn{constructor(t=new Ye,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let c=this.morphTargetInfluences;if(o&&c){ua.set(0,0,0);for(let a=0,l=o.length;a<l;a++){let u=c[a],h=o[a];u!==0&&(El.fromBufferAttribute(h,t),r?ua.addScaledVector(El,u):ua.addScaledVector(El.sub(e),u))}e.add(ua)}return e}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(o),ws.copy(t.ray).recast(t.near),!(aa.containsPoint(ws.origin)===!1&&(ws.intersectSphere(aa,iu)===null||ws.origin.distanceToSquared(iu)>(t.far-t.near)**2))&&(nu.copy(o).invert(),ws.copy(t.ray).applyMatrix4(nu),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ws)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,c=o.index,a=o.attributes.position,l=o.attributes.uv,u=o.attributes.uv1,h=o.attributes.normal,d=o.groups,f=o.drawRange;if(c!==null)if(Array.isArray(r))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=r[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,x=_;v<x;v+=3){let b=c.getX(v),E=c.getX(v+1),A=c.getX(v+2);s=da(this,m,t,n,l,u,h,b,E,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let M=c.getX(g),_=c.getX(g+1),v=c.getX(g+2);s=da(this,r,t,n,l,u,h,M,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,y=d.length;p<y;p++){let g=d[p],m=r[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,x=_;v<x;v+=3){let b=v,E=v+1,A=v+2;s=da(this,m,t,n,l,u,h,b,E,A),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=p,m=y;g<m;g+=3){let M=g,_=g+1,v=g+2;s=da(this,r,t,n,l,u,h,M,_,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function gd(i,t,e,n,s,o,r,c){let a;if(t.side===pn?a=n.intersectTriangle(r,o,s,!0,c):a=n.intersectTriangle(s,o,r,t.side===zi,c),a===null)return null;fa.copy(c),fa.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(fa);return l<e.near||l>e.far?null:{distance:l,point:fa.clone(),object:i}}function da(i,t,e,n,s,o,r,c,a,l){i.getVertexPosition(c,ca),i.getVertexPosition(a,la),i.getVertexPosition(l,ha);let u=gd(i,t,e,n,ca,la,ha,su);if(u){let h=new Y;Fi.getBarycoord(su,ca,la,ha,h),s&&(u.uv=Fi.getInterpolatedAttribute(s,c,a,l,h,new Jt)),o&&(u.uv1=Fi.getInterpolatedAttribute(o,c,a,l,h,new Jt)),r&&(u.normal=Fi.getInterpolatedAttribute(r,c,a,l,h,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:c,b:a,c:l,normal:new Y,materialIndex:0};Fi.getNormal(ca,la,ha,d.normal),u.face=d,u.barycoord=h}return u}var Te=class i extends Ye{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let c=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let a=[],l=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,r,o,0),p("z","y","x",1,-1,n,e,-t,r,o,1),p("x","z","y",1,1,t,n,e,s,r,2),p("x","z","y",1,-1,t,n,-e,s,r,3),p("x","y","z",1,-1,t,e,n,s,o,4),p("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(h,2));function p(y,g,m,M,_,v,x,b,E,A,w){let S=v/E,R=x/A,I=v/2,U=x/2,W=b/2,L=E+1,O=A+1,H=0,k=0,tt=new Y;for(let nt=0;nt<O;nt++){let it=nt*R-U;for(let bt=0;bt<L;bt++){let j=bt*S-I;tt[y]=j*M,tt[g]=it*_,tt[m]=W,l.push(tt.x,tt.y,tt.z),tt[y]=0,tt[g]=0,tt[m]=b>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(bt/E),h.push(1-nt/A),H+=1}}for(let nt=0;nt<A;nt++)for(let it=0;it<E;it++){let bt=d+it+L*nt,j=d+it+L*(nt+1),Mt=d+(it+1)+L*(nt+1),vt=d+(it+1)+L*nt;a.push(bt,j,vt),a.push(j,Mt,vt),k+=6}c.addGroup(f,k,w),f+=k,d+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Os(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Mn(i){let t={};for(let e=0;e<i.length;e++){let n=Os(i[e]);for(let s in n)t[s]=n[s]}return t}function yd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}var af={clone:Os,merge:Mn},_d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zn=class extends Mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Os(t.uniforms),this.uniformsGroups=yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},hr=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ns=new Y,ou=new Jt,ru=new Jt,rn=class extends hr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,e){return this.getViewBounds(t,ou,ru),e.subVectors(ru,ou)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let a=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/a,e-=r.offsetY*n/l,s*=r.width/a,n*=r.height/l}let c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},lo=-90,ho=1,Da=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(lo,ho,t,e);s.layers=this.layers,this.add(s);let o=new rn(lo,ho,t,e);o.layers=this.layers,this.add(o);let r=new rn(lo,ho,t,e);r.layers=this.layers,this.add(r);let c=new rn(lo,ho,t,e);c.layers=this.layers,this.add(c);let a=new rn(lo,ho,t,e);a.layers=this.layers,this.add(a);let l=new rn(lo,ho,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,c,a]=e;for(let l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,c,a,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,c),t.setRenderTarget(n,3,s),t.render(e,a),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ur=class extends fn{constructor(t=[],e=Fs,n,s,o,r,c,a,l,u){super(t,e,n,s,o,r,c,a,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},La=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Te(5,5,5),o=new zn({name:"CubemapFromEquirect",uniforms:Os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Hi});o.uniforms.tEquirect.value=e;let r=new Gt(s,o),c=e.minFilter;return e.minFilter===ds&&(e.minFilter=ai),new Da(1,10,this).update(t,r),e.minFilter=c,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},_e=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Md={type:"move"},So=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,c=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),m=this._getHandJoint(l,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1));c!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return c!==null&&(c.visible=s!==null),a!==null&&(a.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},fr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ee(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wo=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ra,this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Tn=new Y,dr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyMatrix4(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.applyNormalMatrix(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tn.fromBufferAttribute(this,e),Tn.transformDirection(t),this.setXYZ(e,Tn.x,Tn.y,Tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),o=Pe(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rs=class extends Mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uo,Zo=new Y,fo=new Y,po=new Y,mo=new Jt,$o=new Jt,cf=new xe,pa=new Y,Jo=new Y,ma=new Y,au=new Jt,Tl=new Jt,cu=new Jt,Is=class extends dn{constructor(t=new rs){if(super(),this.isSprite=!0,this.type="Sprite",uo===void 0){uo=new Ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ua(e,5);uo.setIndex([0,1,2,0,2,3]),uo.setAttribute("position",new dr(n,3,0,!1)),uo.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=uo,this.material=t,this.center=new Jt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fo.setFromMatrixScale(this.matrixWorld),cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),po.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fo.multiplyScalar(-po.z);let n=this.material.rotation,s,o;n!==0&&(o=Math.cos(n),s=Math.sin(n));let r=this.center;ga(pa.set(-.5,-.5,0),po,r,fo,s,o),ga(Jo.set(.5,-.5,0),po,r,fo,s,o),ga(ma.set(.5,.5,0),po,r,fo,s,o),au.set(0,0),Tl.set(1,0),cu.set(1,1);let c=t.ray.intersectTriangle(pa,Jo,ma,!1,Zo);if(c===null&&(ga(Jo.set(-.5,.5,0),po,r,fo,s,o),Tl.set(0,1),c=t.ray.intersectTriangle(pa,ma,Jo,!1,Zo),c===null))return;let a=t.ray.origin.distanceTo(Zo);a<t.near||a>t.far||e.push({distance:a,point:Zo.clone(),uv:Fi.getInterpolation(Zo,pa,Jo,ma,au,Tl,cu,new Jt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ga(i,t,e,n,s,o){mo.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($o.x=o*mo.x-s*mo.y,$o.y=s*mo.x+o*mo.y):$o.copy(mo),i.copy(t),i.x+=$o.x,i.y+=$o.y,i.applyMatrix4(cf)}var Na=class extends fn{constructor(t=null,e=1,n=1,s,o,r,c,a,l=Pn,u=Pn,h,d){super(null,r,c,a,l,u,s,o,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pr=class extends We{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},go=new xe,lu=new xe,ya=[],hu=new xi,vd=new xe,jo=new Gt,Ko=new os,vi=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new pr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new xi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),hu.copy(t.boundingBox).applyMatrix4(go),this.boundingBox.union(hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new os),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,go),Ko.copy(t.boundingSphere).applyMatrix4(go),this.boundingSphere.union(Ko)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let c=0;c<n.length;c++)n[c]=s[r+c]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(jo.geometry=this.geometry,jo.material=this.material,jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(n),t.ray.intersectsSphere(Ko)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,go),lu.multiplyMatrices(n,go),jo.matrixWorld=lu,jo.raycast(t,ya);for(let r=0,c=ya.length;r<c;r++){let a=ya[r];a.instanceId=o,a.object=this,e.push(a)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new pr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Na(new Float32Array(s*this.count),s,this.count,hc,hi));let o=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let c=this.geometry.morphTargetsRelative?1:1-r,a=s*t;o[a]=c,o.set(n,a+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Al=new Y,bd=new Y,Sd=new ue,Xn=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Al.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sd.getNormalMatrix(t),s=this.coplanarPoint(Al).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Es=new os,wd=new Jt(.5,.5),_a=new Y,Eo=class{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,o=new Xn,r=new Xn){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){let s=this.planes,o=t.elements,r=o[0],c=o[1],a=o[2],l=o[3],u=o[4],h=o[5],d=o[6],f=o[7],p=o[8],y=o[9],g=o[10],m=o[11],M=o[12],_=o[13],v=o[14],x=o[15];if(s[0].setComponents(l-r,f-u,m-p,x-M).normalize(),s[1].setComponents(l+r,f+u,m+p,x+M).normalize(),s[2].setComponents(l+c,f+h,m+y,x+_).normalize(),s[3].setComponents(l-c,f-h,m-y,x-_).normalize(),n)s[4].setComponents(a,d,g,v).normalize(),s[5].setComponents(l-a,f-d,m-g,x-v).normalize();else if(s[4].setComponents(l-a,f-d,m-g,x-v).normalize(),e===ri)s[5].setComponents(l+a,f+d,m+g,x+v).normalize();else if(e===or)s[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=wd.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_a.x=s.normal.x>0?t.max.x:t.min.x,_a.y=s.normal.y>0?t.max.y:t.min.y,_a.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_a)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dn=class extends fn{constructor(t,e,n,s,o,r,c,a,l){super(t,e,n,s,o,r,c,a,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},mr=class extends fn{constructor(t,e,n=ps,s,o,r,c=Pn,a=Pn,l,u=_o,h=1){if(u!==_o&&u!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,o,r,c,a,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},gr=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},yr=class i extends Ye{constructor(t=1,e=1,n=4,s=8,o=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:o},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),o=Math.max(1,Math.floor(o));let r=[],c=[],a=[],l=[],u=e/2,h=Math.PI/2*t,d=e,f=2*h+d,p=n*2+o,y=s+1,g=new Y,m=new Y;for(let M=0;M<=p;M++){let _=0,v=0,x=0,b=0;if(M<=n){let w=M/n,S=w*Math.PI/2;v=-u-t*Math.cos(S),x=t*Math.sin(S),b=-t*Math.cos(S),_=w*h}else if(M<=n+o){let w=(M-n)/o;v=-u+w*e,x=t,b=0,_=h+w*d}else{let w=(M-n-o)/n,S=w*Math.PI/2;v=u+t*Math.sin(S),x=t*Math.cos(S),b=t*Math.sin(S),_=h+d+w*h}let E=Math.max(0,Math.min(1,_/f)),A=0;M===0?A=.5/s:M===p&&(A=-.5/s);for(let w=0;w<=s;w++){let S=w/s,R=S*Math.PI*2,I=Math.sin(R),U=Math.cos(R);m.x=-x*U,m.y=v,m.z=x*I,c.push(m.x,m.y,m.z),g.set(-x*U,b,x*I),g.normalize(),a.push(g.x,g.y,g.z),l.push(S+A,E)}if(M>0){let w=(M-1)*y;for(let S=0;S<s;S++){let R=w+S,I=w+S+1,U=M*y+S,W=M*y+S+1;r.push(R,I,U),r.push(I,W,U)}}}this.setIndex(r),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var ye=class i extends Ye{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,c=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:c,thetaLength:a};let l=this;s=Math.floor(s),o=Math.floor(o);let u=[],h=[],d=[],f=[],p=0,y=[],g=n/2,m=0;M(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(f,2));function M(){let v=new Y,x=new Y,b=0,E=(e-t)/n;for(let A=0;A<=o;A++){let w=[],S=A/o,R=S*(e-t)+t;for(let I=0;I<=s;I++){let U=I/s,W=U*a+c,L=Math.sin(W),O=Math.cos(W);x.x=R*L,x.y=-S*n+g,x.z=R*O,h.push(x.x,x.y,x.z),v.set(L,E,O).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-S),w.push(p++)}y.push(w)}for(let A=0;A<s;A++)for(let w=0;w<o;w++){let S=y[w][A],R=y[w+1][A],I=y[w+1][A+1],U=y[w][A+1];(t>0||w!==0)&&(u.push(S,R,U),b+=3),(e>0||w!==o-1)&&(u.push(R,I,U),b+=3)}l.addGroup(m,b,0),m+=b}function _(v){let x=p,b=new Jt,E=new Y,A=0,w=v===!0?t:e,S=v===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,g*S,0),d.push(0,S,0),f.push(.5,.5),p++;let R=p;for(let I=0;I<=s;I++){let W=I/s*a+c,L=Math.cos(W),O=Math.sin(W);E.x=w*O,E.y=g*S,E.z=w*L,h.push(E.x,E.y,E.z),d.push(0,S,0),b.x=L*.5+.5,b.y=O*.5*S+.5,f.push(b.x,b.y),p++}for(let I=0;I<s;I++){let U=x+I,W=R+I;v===!0?u.push(W,W+1,U):u.push(W+1,W,U),A+=3}l.addGroup(m,A,v===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_r=class i extends ye{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,c=Math.PI*2){super(0,t,e,n,s,o,r,c),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:c}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xr=class i extends Ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let o=[],r=[];c(s),l(n),u(),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(o.slice(),3)),this.setAttribute("uv",new be(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function c(M){let _=new Y,v=new Y,x=new Y;for(let b=0;b<e.length;b+=3)f(e[b+0],_),f(e[b+1],v),f(e[b+2],x),a(_,v,x,M)}function a(M,_,v,x){let b=x+1,E=[];for(let A=0;A<=b;A++){E[A]=[];let w=M.clone().lerp(v,A/b),S=_.clone().lerp(v,A/b),R=b-A;for(let I=0;I<=R;I++)I===0&&A===b?E[A][I]=w:E[A][I]=w.clone().lerp(S,I/R)}for(let A=0;A<b;A++)for(let w=0;w<2*(b-A)-1;w++){let S=Math.floor(w/2);w%2===0?(d(E[A][S+1]),d(E[A+1][S]),d(E[A][S])):(d(E[A][S+1]),d(E[A+1][S+1]),d(E[A+1][S]))}}function l(M){let _=new Y;for(let v=0;v<o.length;v+=3)_.x=o[v+0],_.y=o[v+1],_.z=o[v+2],_.normalize().multiplyScalar(M),o[v+0]=_.x,o[v+1]=_.y,o[v+2]=_.z}function u(){let M=new Y;for(let _=0;_<o.length;_+=3){M.x=o[_+0],M.y=o[_+1],M.z=o[_+2];let v=g(M)/2/Math.PI+.5,x=m(M)/Math.PI+.5;r.push(v,1-x)}p(),h()}function h(){for(let M=0;M<r.length;M+=6){let _=r[M+0],v=r[M+2],x=r[M+4],b=Math.max(_,v,x),E=Math.min(_,v,x);b>.9&&E<.1&&(_<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),x<.2&&(r[M+4]+=1))}}function d(M){o.push(M.x,M.y,M.z)}function f(M,_){let v=M*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function p(){let M=new Y,_=new Y,v=new Y,x=new Y,b=new Jt,E=new Jt,A=new Jt;for(let w=0,S=0;w<o.length;w+=9,S+=6){M.set(o[w+0],o[w+1],o[w+2]),_.set(o[w+3],o[w+4],o[w+5]),v.set(o[w+6],o[w+7],o[w+8]),b.set(r[S+0],r[S+1]),E.set(r[S+2],r[S+3]),A.set(r[S+4],r[S+5]),x.copy(M).add(_).add(v).divideScalar(3);let R=g(x);y(b,S+0,M,R),y(E,S+2,_,R),y(A,S+4,v,R)}}function y(M,_,v,x){x<0&&M.x===1&&(r[_]=M.x-1),v.x===0&&v.z===0&&(r[_]=x/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Mr=class i extends xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Fa=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,o=n.length,r;e?r=e:r=t*n[o-1];let c=0,a=o-1,l;for(;c<=a;)if(s=Math.floor(c+(a-c)/2),l=n[s]-r,l<0)c=s+1;else if(l>0)a=s-1;else{a=s;break}if(s=a,n[s]===r)return s/(o-1);let u=n[s],d=n[s+1]-u,f=(r-u)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),c=this.getPoint(o),a=e||(r.isVector2?new Jt:new Y);return a.copy(c).sub(r).normalize(),a}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new Y,s=[],o=[],r=[],c=new Y,a=new xe;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new Y)}o[0]=new Y,r[0]=new Y;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),c.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],c),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),c.crossVectors(s[f-1],s[f]),c.length()>Number.EPSILON){c.normalize();let p=Math.acos(fe(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(a.makeRotationAxis(c,p))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(fe(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(c.crossVectors(o[0],o[t]))>0&&(f=-f);for(let p=1;p<=t;p++)o[p].applyMatrix4(a.makeRotationAxis(s[p],f*p)),r[p].crossVectors(s[p],o[p])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function ch(){let i=0,t=0,e=0,n=0;function s(o,r,c,a){i=o,t=c,e=-3*o+3*r-2*c-a,n=2*o-2*r+c+a}return{initCatmullRom:function(o,r,c,a,l){s(r,c,l*(c-o),l*(a-r))},initNonuniformCatmullRom:function(o,r,c,a,l,u,h){let d=(r-o)/l-(c-o)/(l+u)+(c-r)/u,f=(c-r)/u-(a-r)/(u+h)+(a-c)/h;d*=u,f*=u,s(r,c,d,f)},calc:function(o){let r=o*o,c=r*o;return i+t*o+e*r+n*c}}}var xa=new Y,Rl=new ch,Cl=new ch,Pl=new ch,vr=class extends Fa{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Y){let n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,c=Math.floor(r),a=r-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/o)+1)*o:a===0&&c===o-1&&(c=o-2,a=1);let l,u;this.closed||c>0?l=s[(c-1)%o]:(xa.subVectors(s[0],s[1]).add(s[0]),l=xa);let h=s[c%o],d=s[(c+1)%o];if(this.closed||c+2<o?u=s[(c+2)%o]:(xa.subVectors(s[o-1],s[o-2]).add(s[o-1]),u=xa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),Rl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,p,y,g),Cl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,p,y,g),Pl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,p,y,g)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Cl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Pl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Rl.calc(a),Cl.calc(a),Pl.calc(a)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ed(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,o=lf(i,0,s,e,!0),r=[];if(!o||o.next===o.prev)return r;let c,a,l;if(n&&(o=Pd(i,t,o,e)),i.length>80*e){c=1/0,a=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){let f=i[d],p=i[d+1];f<c&&(c=f),p<a&&(a=p),f>u&&(u=f),p>h&&(h=p)}l=Math.max(u-c,h-a),l=l!==0?32767/l:0}return br(o,r,e,c,a,l,0),r}function lf(i,t,e,n,s){let o;if(s===Hd(i,t,e,n)>0)for(let r=t;r<e;r+=n)o=uu(r/n|0,i[r],i[r+1],o);else for(let r=e-n;r>=t;r-=n)o=uu(r/n|0,i[r],i[r+1],o);return o&&To(o,o.next)&&(wr(o),o=o.next),o}function Ds(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(To(e,e.next)||Ve(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Nd(i,n,s,o);let c=i;for(;i.prev!==i.next;){let a=i.prev,l=i.next;if(o?Ad(i,n,s,o):Td(i)){t.push(a.i,i.i,l.i),wr(i),i=l.next,c=l.next;continue}if(i=l,i===c){r?r===1?(i=Rd(Ds(i),t),br(i,t,e,n,s,o,2)):r===2&&Cd(i,t,e,n,s,o):br(Ds(i),t,e,n,s,o,1);break}}}function Td(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,o=e.x,r=n.x,c=t.y,a=e.y,l=n.y,u=Math.min(s,o,r),h=Math.min(c,a,l),d=Math.max(s,o,r),f=Math.max(c,a,l),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&tr(s,c,o,a,r,l,p.x,p.y)&&Ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ad(i,t,e,n){let s=i.prev,o=i,r=i.next;if(Ve(s,o,r)>=0)return!1;let c=s.x,a=o.x,l=r.x,u=s.y,h=o.y,d=r.y,f=Math.min(c,a,l),p=Math.min(u,h,d),y=Math.max(c,a,l),g=Math.max(u,h,d),m=Bl(f,p,t,e,n),M=Bl(y,g,t,e,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=m&&v&&v.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&tr(c,u,a,h,l,d,_.x,_.y)&&Ve(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=y&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&tr(c,u,a,h,l,d,v.x,v.y)&&Ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=y&&_.y>=p&&_.y<=g&&_!==s&&_!==r&&tr(c,u,a,h,l,d,_.x,_.y)&&Ve(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=g&&v!==s&&v!==r&&tr(c,u,a,h,l,d,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Rd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!To(n,s)&&uf(n,e,e.next,s)&&Sr(n,s)&&Sr(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Ds(e)}function Cd(i,t,e,n,s,o){let r=i;do{let c=r.next.next;for(;c!==r.prev;){if(r.i!==c.i&&Od(r,c)){let a=ff(r,c);r=Ds(r,r.next),a=Ds(a,a.next),br(r,t,e,n,s,o,0),br(a,t,e,n,s,o,0);return}c=c.next}r=r.next}while(r!==i)}function Pd(i,t,e,n){let s=[];for(let o=0,r=t.length;o<r;o++){let c=t[o]*n,a=o<r-1?t[o+1]*n:i.length,l=lf(i,c,a,n,!1);l===l.next&&(l.steiner=!0),s.push(Bd(l))}s.sort(Id);for(let o=0;o<s.length;o++)e=Dd(s[o],e);return e}function Id(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Dd(i,t){let e=Ld(i,t);if(!e)return t;let n=ff(e,i);return Ds(n,n.next),Ds(e,e.next)}function Ld(i,t){let e=t,n=i.x,s=i.y,o=-1/0,r;if(To(i,e))return e;do{if(To(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>o&&(o=h,r=e.x<e.next.x?e:e.next,h===n))return r}e=e.next}while(e!==t);if(!r)return null;let c=r,a=r.x,l=r.y,u=1/0;e=r;do{if(n>=e.x&&e.x>=a&&n!==e.x&&hf(s<l?n:o,s,a,l,s<l?o:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Sr(e,i)&&(h<u||h===u&&(e.x>r.x||e.x===r.x&&Ud(r,e)))&&(r=e,u=h)}e=e.next}while(e!==c);return r}function Ud(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function Nd(i,t,e,n){let s=i;do s.z===0&&(s.z=Bl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fd(s)}function Fd(i){let t,e=1;do{let n=i,s;i=null;let o=null;for(t=0;n;){t++;let r=n,c=0;for(let l=0;l<e&&(c++,r=r.nextZ,!!r);l++);let a=e;for(;c>0||a>0&&r;)c!==0&&(a===0||!r||n.z<=r.z)?(s=n,n=n.nextZ,c--):(s=r,r=r.nextZ,a--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;n=r}o.nextZ=null,e*=2}while(t>1);return i}function Bl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hf(i,t,e,n,s,o,r,c){return(s-r)*(t-c)>=(i-r)*(o-c)&&(i-r)*(n-c)>=(e-r)*(t-c)&&(e-r)*(o-c)>=(s-r)*(n-c)}function tr(i,t,e,n,s,o,r,c){return!(i===r&&t===c)&&hf(i,t,e,n,s,o,r,c)}function Od(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!zd(i,t)&&(Sr(i,t)&&Sr(t,i)&&kd(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||To(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function To(i,t){return i.x===t.x&&i.y===t.y}function uf(i,t,e,n){let s=va(Ve(i,t,e)),o=va(Ve(i,t,n)),r=va(Ve(e,n,i)),c=va(Ve(e,n,t));return!!(s!==o&&r!==c||s===0&&Ma(i,e,t)||o===0&&Ma(i,n,t)||r===0&&Ma(e,i,n)||c===0&&Ma(e,t,n))}function Ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function va(i){return i>0?1:i<0?-1:0}function zd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Sr(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function kd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ff(i,t){let e=Ol(i.i,i.x,i.y),n=Ol(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function uu(i,t,e,n){let s=Ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ol(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hd(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}var zl=class{static triangulate(t,e,n=2){return Ed(t,e,n)}},Er=class i{static area(t){let e=t.length,n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],o=[];fu(t),du(n,t);let r=t.length;e.forEach(fu);for(let a=0;a<e.length;a++)s.push(r),r+=e[a].length,du(n,e[a]);let c=zl.triangulate(n,s);for(let a=0;a<c.length;a+=3)o.push(c.slice(a,a+3));return o}};function fu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function du(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var as=class i extends xr{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Gn=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,c=Math.floor(n),a=Math.floor(s),l=c+1,u=a+1,h=t/c,d=e/a,f=[],p=[],y=[],g=[];for(let m=0;m<u;m++){let M=m*d-r;for(let _=0;_<l;_++){let v=_*h-o;p.push(v,-M,0),y.push(0,0,1),g.push(_/c),g.push(1-m/a)}}for(let m=0;m<a;m++)for(let M=0;M<c;M++){let _=M+l*m,v=M+l*(m+1),x=M+1+l*(m+1),b=M+1+l*m;f.push(_,v,b),f.push(v,x,b)}this.setIndex(f),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(y,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ln=class i extends Ye{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:c},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let a=Math.min(r+c,Math.PI),l=0,u=[],h=new Y,d=new Y,f=[],p=[],y=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,v=0;m===0&&r===0?v=.5/e:m===n&&a===Math.PI&&(v=-.5/e);for(let x=0;x<=e;x++){let b=x/e;h.x=-t*Math.cos(s+b*o)*Math.sin(r+_*c),h.y=t*Math.cos(r+_*c),h.z=t*Math.sin(s+b*o)*Math.sin(r+_*c),p.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(b+v,1-_),M.push(l++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let _=u[m][M+1],v=u[m][M],x=u[m+1][M],b=u[m+1][M+1];(m!==0||r>0)&&f.push(_,v,b),(m!==n-1||a<Math.PI)&&f.push(v,x,b)}this.setIndex(f),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(y,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ls=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);let r=[],c=[],a=[],l=[],u=new Y,h=new Y,d=new Y;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let y=p/s*o,g=f/n*Math.PI*2;h.x=(t+e*Math.cos(g))*Math.cos(y),h.y=(t+e*Math.cos(g))*Math.sin(y),h.z=e*Math.sin(g),c.push(h.x,h.y,h.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),d.subVectors(h,u).normalize(),a.push(d.x,d.y,d.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let y=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,M=(s+1)*f+p;r.push(y,g,M),r.push(g,m,M)}this.setIndex(r),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(a,3)),this.setAttribute("uv",new be(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var re=class extends Mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Tr=class extends Mi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ao=class extends Mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ba=class extends Mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ba(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Vd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Us=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let c=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let c=e[1];t<c&&(n=2,o=c);for(let a=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let c=n+r>>>1;t<e[c]?r=c:n=c+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oa=class extends Us{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,c=s[o],a=s[r];if(c===void 0)switch(this.getSettings_().endingStart){case Ul:o=t,c=2*e-n;break;case Nl:o=s.length-2,c=e+s[o]-s[o+1];break;default:o=t,c=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ul:r=t,a=2*n-e;break;case Nl:r=1,a=n+s[1]-s[0];break;default:r=t-1,a=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-c),this._weightNext=l/(a-n),this._offsetPrev=o*u,this._offsetNext=r*u}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,c=this.valueSize,a=t*c,l=a-c,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),y=p*p,g=y*p,m=-d*g+2*d*y-d*p,M=(1+d)*g+(-1.5-2*d)*y+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*y+.5*p,v=f*g-f*y;for(let x=0;x!==c;++x)o[x]=m*r[u+x]+M*r[l+x]+_*r[a+x]+v*r[h+x];return o}},za=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,c=this.valueSize,a=t*c,l=a-c,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==c;++d)o[d]=r[l+d]*h+r[a+d]*u;return o}},ka=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ba(e,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ba(t.times,Array),values:ba(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ka(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case Aa:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let c=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*c,r*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let c=0;c!==o;c++){let a=n[c];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,a),t=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,a,r),t=!1;break}r=a}if(s!==void 0&&Vd(s))for(let c=0,a=s.length;c!==a;++c){let l=s[c];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,o=t.length-1,r=1;for(let c=1;c<o;++c){let a=!1,l=t[c],u=t[c+1];if(l!==u&&(c!==1||l!==t[0]))if(s)a=!0;else{let h=c*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let y=e[h+p];if(y!==e[d+p]||y!==e[f+p]){a=!0;break}}}if(a){if(c!==r){t[r]=t[c];let h=c*n,d=r*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++r}}if(o>0){t[r]=t[o];for(let c=o*n,a=r*n,l=0;l!==n;++l)e[a+l]=e[c+l];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Aa;var cs=class extends kn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=ir;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};Ha.prototype.ValueTypeName="color";var Va=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="number";var Wa=class extends Us{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,c=this.valueSize,a=(n-e)/(s-e),l=t*c;for(let u=l+c;l!==u;l+=4)xn.slerpFlat(o,0,r,l-c,r,l,a);return o}},Ar=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Wa(this.times,this.values,this.getValueSize(),t)}};Ar.prototype.ValueTypeName="quaternion";Ar.prototype.InterpolantFactoryMethodSmooth=void 0;var ls=class extends kn{constructor(t,e,n){super(t,e,n)}};ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=ir;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var qa=class extends kn{constructor(t,e,n,s){super(t,e,n,s)}};qa.prototype.ValueTypeName="vector";var Xa=class{constructor(t,e,n){let s=this,o=!1,r=0,c=0,a,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){c++,o===!1&&s.onStart!==void 0&&s.onStart(u,r,c),o=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,c),r===c&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return a?a(u):u},this.setURLModifier=function(u){return a=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],p=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},df=new Xa,Ya=class{constructor(t){this.manager=t!==void 0?t:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ro=class extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rr=class extends Ro{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Il=new xe,pu=new Y,mu=new Y,Ga=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gu=new xe,Qo=new Y,Dl=new Y,kl=class extends Ga{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Jt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Qo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qo),Dl.copy(n.position),Dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dl),n.updateMatrixWorld(),s.makeTranslation(-Qo.x,-Qo.y,-Qo.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu,n.coordinateSystem,n.reversedDepth)}},Cr=class extends Ro{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Pr=class extends hr{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,c=s+e,a=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,c-=u*this.view.offsetY,a=c-u*this.view.height}this.projectionMatrix.makeOrthographic(o,r,c,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hl=class extends Ga{constructor(){super(new Pr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ir=class extends Ro{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Hl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Za=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lh="\\[\\]\\.:\\/",Wd=new RegExp("["+lh+"]","g"),hh="[^"+lh+"]",qd="[^"+lh.replace("\\.","")+"]",Xd=/((?:WC+[\/:])*)/.source.replace("WC",hh),Yd=/(WCOD+)?/.source.replace("WCOD",qd),Gd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Zd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),$d=new RegExp("^"+Xd+Yd+Gd+Zd+"$"),Jd=["material","materials","bones","map"],Vl=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wd,"")}static parseTrackName(t){let e=$d.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);Jd.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let c=o[r];if(c.name===e||c.uuid===e)return c;let a=n(c.children);if(a)return a}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[s];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Vl;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);var yu=new xe,hs=class{constructor(t,e,n=0,s=1/0){this.ray=new Ps(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(t,e=!0,n=[]){return Wl(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Wl(t[s],this,n,e);return n.sort(_u),n}};function _u(i,t){return i.distance-t.distance}function Wl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let o=i.children;for(let r=0,c=o.length;r<c;r++)Wl(o[r],t,e,!0)}}var Co=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(fe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Dr=class extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function uh(i,t,e,n){let s=jd(n);switch(e){case Ql:return i*t;case hc:return i*t/s.components*s.byteLength;case uc:return i*t/s.components*s.byteLength;case eh:return i*t*2/s.components*s.byteLength;case fc:return i*t*2/s.components*s.byteLength;case th:return i*t*3/s.components*s.byteLength;case Zn:return i*t*4/s.components*s.byteLength;case dc:return i*t*4/s.components*s.byteLength;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:case yc:return Math.max(i,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(i,8)*Math.max(t,8)/2;case _c:case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nc:case Fc:case Bc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oc:case zc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case kc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jd(i){switch(i){case li:case $l:return{byteLength:1,components:1};case Io:case Jl:case Do:return{byteLength:2,components:1};case cc:case lc:return{byteLength:2,components:4};case ps:case ac:case hi:return{byteLength:4,components:1};case jl:case Kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function zf(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function tp(i){let t=new WeakMap;function e(c,a){let l=c.array,u=c.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(a,d),i.bufferData(a,l,u),c.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:h}}function n(c,a,l){let u=a.array,h=a.updateRanges;if(i.bindBuffer(l,c),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],y=h[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let y=h[f];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let a=t.get(c);a&&(i.deleteBuffer(a.buffer),t.delete(c))}function r(c,a){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let u=t.get(c);(!u||u.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let l=t.get(c);if(l===void 0)t.set(c,e(c,a));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,c,a),l.version=c.version}}return{get:s,remove:o,update:r}}var ep=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,up=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yp=`uniform bool receiveShadow;
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
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,Qp=`struct PhysicalMaterial {
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
}`,tm=`
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
#endif`,em=`#if defined( RE_IndirectDiffuse )
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
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zm=`float getShadowMask() {
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,c1=`#define DISTANCE
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
}`,l1=`#define DISTANCE
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
}`,h1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
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
}`,d1=`uniform vec3 diffuse;
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
}`,p1=`#include <common>
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#define LAMBERT
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
}`,y1=`#define LAMBERT
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
}`,_1=`#define MATCAP
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
}`,x1=`#define MATCAP
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
}`,M1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,b1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,w1=`#define STANDARD
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
}`,E1=`#define STANDARD
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
}`,T1=`#define TOON
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
}`,A1=`#define TOON
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
}`,R1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,P1=`#include <common>
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
}`,I1=`uniform vec3 color;
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
}`,D1=`uniform float rotation;
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
}`,L1=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:ep,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:sp,alphatest_fragment:op,alphatest_pars_fragment:rp,aomap_fragment:ap,aomap_pars_fragment:cp,batching_pars_vertex:lp,batching_vertex:hp,begin_vertex:up,beginnormal_vertex:fp,bsdfs:dp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:gp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:xp,color_fragment:Mp,color_pars_fragment:vp,color_pars_vertex:bp,color_vertex:Sp,common:wp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:Ap,displacementmap_vertex:Rp,emissivemap_fragment:Cp,emissivemap_pars_fragment:Pp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Lp,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:Gp,envmap_vertex:Bp,fog_vertex:Op,fog_pars_vertex:zp,fog_fragment:kp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Wp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Xp,lights_pars_begin:Yp,lights_toon_fragment:Zp,lights_toon_pars_fragment:$p,lights_phong_fragment:Jp,lights_phong_pars_fragment:jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:Qp,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:om,logdepthbuf_vertex:rm,map_fragment:am,map_pars_fragment:cm,map_particle_fragment:lm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:fm,morphinstance_vertex:dm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:ym,normal_fragment_begin:_m,normal_fragment_maps:xm,normal_pars_fragment:Mm,normal_pars_vertex:vm,normal_vertex:bm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:Tm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Lm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Bm,shadowmap_vertex:Om,shadowmask_pars_fragment:zm,skinbase_vertex:km,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:qm,specularmap_pars_fragment:Xm,tonemapping_fragment:Ym,tonemapping_pars_fragment:Gm,transmission_fragment:Zm,transmission_pars_fragment:$m,uv_pars_fragment:Jm,uv_pars_vertex:jm,uv_vertex:Km,worldpos_vertex:Qm,background_vert:t1,background_frag:e1,backgroundCube_vert:n1,backgroundCube_frag:i1,cube_vert:s1,cube_frag:o1,depth_vert:r1,depth_frag:a1,distanceRGBA_vert:c1,distanceRGBA_frag:l1,equirect_vert:h1,equirect_frag:u1,linedashed_vert:f1,linedashed_frag:d1,meshbasic_vert:p1,meshbasic_frag:m1,meshlambert_vert:g1,meshlambert_frag:y1,meshmatcap_vert:_1,meshmatcap_frag:x1,meshnormal_vert:M1,meshnormal_frag:v1,meshphong_vert:b1,meshphong_frag:S1,meshphysical_vert:w1,meshphysical_frag:E1,meshtoon_vert:T1,meshtoon_frag:A1,points_vert:R1,points_frag:C1,shadow_vert:P1,shadow_frag:I1,sprite_vert:D1,sprite_frag:L1},Wt={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Si={basic:{uniforms:Mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ee(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Mn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Mn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Mn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ee(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Mn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Mn([Wt.points,Wt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Mn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Mn([Wt.common,Wt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Mn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Mn([Wt.sprite,Wt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:Mn([Wt.common,Wt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:Mn([Wt.lights,Wt.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Si.physical={uniforms:Mn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var qc={r:0,b:0,g:0},zs=new In,U1=new xe;function N1(i,t,e,n,s,o,r){let c=new ee(0),a=o===!0?0:1,l,u,h=null,d=0,f=null;function p(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?e:t).get(v)),v}function y(_){let v=!1,x=p(_);x===null?m(c,a):x&&x.isColor&&(m(x,1),v=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,v){let x=p(v);x&&(x.isCubeTexture||x.mapping===Lr)?(u===void 0&&(u=new Gt(new Te(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:Os(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zs.copy(v.backgroundRotation),zs.x*=-1,zs.y*=-1,zs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(zs)),u.material.toneMapped=ve.getTransfer(x.colorSpace)!==Ie,(h!==x||d!==x.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Gt(new Gn(2,2),new zn({name:"BackgroundMaterial",uniforms:Os(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=ve.getTransfer(x.colorSpace)!==Ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,v){_.getRGB(qc,ah(i)),n.buffers.color.setClear(qc.r,qc.g,qc.b,v,r)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return c},setClearColor:function(_,v=1){c.set(_),a=v,m(c,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(c,a)},render:y,addToRenderList:g,dispose:M}}function F1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),o=s,r=!1;function c(S,R,I,U,W){let L=!1,O=h(U,I,R);o!==O&&(o=O,l(o.object)),L=f(S,U,I,W),L&&p(S,U,I,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(L||r)&&(r=!1,v(S,R,I,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function a(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,R,I){let U=I.wireframe===!0,W=n[S.id];W===void 0&&(W={},n[S.id]=W);let L=W[R.id];L===void 0&&(L={},W[R.id]=L);let O=L[U];return O===void 0&&(O=d(a()),L[U]=O),O}function d(S){let R=[],I=[],U=[];for(let W=0;W<e;W++)R[W]=0,I[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:U,object:S,attributes:{},index:null}}function f(S,R,I,U){let W=o.attributes,L=R.attributes,O=0,H=I.getAttributes();for(let k in H)if(H[k].location>=0){let nt=W[k],it=L[k];if(it===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),nt===void 0||nt.attribute!==it||it&&nt.data!==it.data)return!0;O++}return o.attributesNum!==O||o.index!==U}function p(S,R,I,U){let W={},L=R.attributes,O=0,H=I.getAttributes();for(let k in H)if(H[k].location>=0){let nt=L[k];nt===void 0&&(k==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),k==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor));let it={};it.attribute=nt,nt&&nt.data&&(it.data=nt.data),W[k]=it,O++}o.attributes=W,o.attributesNum=O,o.index=U}function y(){let S=o.newAttributes;for(let R=0,I=S.length;R<I;R++)S[R]=0}function g(S){m(S,0)}function m(S,R){let I=o.newAttributes,U=o.enabledAttributes,W=o.attributeDivisors;I[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),W[S]!==R&&(i.vertexAttribDivisor(S,R),W[S]=R)}function M(){let S=o.newAttributes,R=o.enabledAttributes;for(let I=0,U=R.length;I<U;I++)R[I]!==S[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function _(S,R,I,U,W,L,O){O===!0?i.vertexAttribIPointer(S,R,I,W,L):i.vertexAttribPointer(S,R,I,U,W,L)}function v(S,R,I,U){y();let W=U.attributes,L=I.getAttributes(),O=R.defaultAttributeValues;for(let H in L){let k=L[H];if(k.location>=0){let tt=W[H];if(tt===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(tt=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(tt=S.instanceColor)),tt!==void 0){let nt=tt.normalized,it=tt.itemSize,bt=t.get(tt);if(bt===void 0)continue;let j=bt.buffer,Mt=bt.type,vt=bt.bytesPerElement,K=Mt===i.INT||Mt===i.UNSIGNED_INT||tt.gpuType===ac;if(tt.isInterleavedBufferAttribute){let $=tt.data,ut=$.stride,N=tt.offset;if($.isInstancedInterleavedBuffer){for(let F=0;F<k.locationSize;F++)m(k.location+F,$.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let F=0;F<k.locationSize;F++)g(k.location+F);i.bindBuffer(i.ARRAY_BUFFER,j);for(let F=0;F<k.locationSize;F++)_(k.location+F,it/k.locationSize,Mt,nt,ut*vt,(N+it/k.locationSize*F)*vt,K)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)m(k.location+$,tt.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<k.locationSize;$++)g(k.location+$);i.bindBuffer(i.ARRAY_BUFFER,j);for(let $=0;$<k.locationSize;$++)_(k.location+$,it/k.locationSize,Mt,nt,it*vt,it/k.locationSize*$*vt,K)}}else if(O!==void 0){let nt=O[H];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(k.location,nt);break;case 3:i.vertexAttrib3fv(k.location,nt);break;case 4:i.vertexAttrib4fv(k.location,nt);break;default:i.vertexAttrib1fv(k.location,nt)}}}}M()}function x(){A();for(let S in n){let R=n[S];for(let I in R){let U=R[I];for(let W in U)u(U[W].object),delete U[W];delete R[I]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;let R=n[S.id];for(let I in R){let U=R[I];for(let W in U)u(U[W].object),delete U[W];delete R[I]}delete n[S.id]}function E(S){for(let R in n){let I=n[R];if(I[S.id]===void 0)continue;let U=I[S.id];for(let W in U)u(U[W].object),delete U[W];delete I[S.id]}}function A(){w(),r=!0,o!==s&&(o=s,l(o.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:A,resetDefaultState:w,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:g,disableUnusedAttributes:M}}function B1(i,t,e){let n;function s(l){n=l}function o(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function r(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function c(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,n,1)}function a(l,u,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)r(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let p=0;for(let y=0;y<h;y++)p+=u[y]*d[y];e.update(p,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=c,this.renderMultiDrawInstances=a}function O1(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==Zn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(E){let A=E===Do&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==li&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hi&&!A)}function a(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=a(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:a,textureFormatReadable:r,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:x,maxSamples:b}}function z1(i){let t=this,e=null,n=0,s=!1,o=!1,r=new Xn,c=new ue,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!s||p===null||p.length===0||o&&!g)o?u(null):l();else{let M=o?0:n,_=M*4,v=m.clippingState||null;a.value=v,v=u(p,d,_,f);for(let x=0;x!==_;++x)v[x]=e[x];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function l(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,p){let y=h!==null?h.length:0,g=null;if(y!==0){if(g=a.value,p!==!0||g===null){let m=f+y*4,M=d.matrixWorldInverse;c.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,v=f;_!==y;++_,v+=4)r.copy(h[_]).applyMatrix4(M,c),r.normal.toArray(g,v),g[v+3]=r.constant}a.value=g,a.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}function k1(i){let t=new WeakMap;function e(r,c){return c===sc?r.mapping=Fs:c===oc&&(r.mapping=Bs),r}function n(r){if(r&&r.isTexture){let c=r.mapping;if(c===sc||c===oc)if(t.has(r)){let a=t.get(r).texture;return e(a,r.mapping)}else{let a=r.image;if(a&&a.height>0){let l=new La(a.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){let c=r.target;c.removeEventListener("dispose",s);let a=t.get(c);a!==void 0&&(t.delete(c),a.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}var Fo=4,pf=[.125,.215,.35,.446,.526,.582],Vs=20,fh=new Pr,mf=new ee,dh=null,ph=0,mh=0,gh=!1,Hs=(1+Math.sqrt(5))/2,No=1/Hs,gf=[new Y(-Hs,No,0),new Y(Hs,No,0),new Y(-No,0,Hs),new Y(No,0,Hs),new Y(0,Hs,-No),new Y(0,Hs,No),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],H1=new Y,Oo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,o={}){let{size:r=256,position:c=H1}=o;dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a,c),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,t.scissorTest=!1,Xc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fs||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:Do,format:Zn,colorSpace:Cs,depthBuffer:!1},s=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=V1(o)),this._blurMaterial=W1(o,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,fh)}_sceneToCubeUV(t,e,n,s,o){let a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(mf),h.toneMapping=Vi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new ci({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Gt(new Te,y),m=!1,M=t.background;M?M.isColor&&(y.color.copy(M),t.background=null,m=!0):(y.color.copy(mf),m=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(a.up.set(0,l[_],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x+u[_],o.y,o.z)):v===1?(a.up.set(0,0,l[_]),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y+u[_],o.z)):(a.up.set(0,l[_],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y,o.z+u[_]));let x=this._cubeSize;Xc(s,v*x,_>2?x:0,x,x),h.setRenderTarget(s),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Fs||t.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new Gt(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;let a=this._cubeSize;Xc(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,fh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=gf[(s-o-1)%gf.length];this._blur(t,o-1,o,r,c)}e.autoClear=n}_blur(t,e,n,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,c){let a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Gt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Vs-1),y=o/p,g=isFinite(o)?1+Math.floor(u*y):Vs;g>Vs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vs}`);let m=[],M=0;for(let E=0;E<Vs;++E){let A=E/y,w=Math.exp(-A*A/2);m.push(w),E===0?M+=w:E<g&&(M+=2*w)}for(let E=0;E<m.length;E++)m[E]=m[E]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=r==="latitudinal",c&&(d.poleAxis.value=c);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let v=this._sizeLods[s],x=3*v*(s>_-Fo?s-_+Fo:0),b=4*(this._cubeSize-v);Xc(e,x,b,3*v,2*v),a.setRenderTarget(e),a.render(h,fh)}};function V1(i){let t=[],e=[],n=[],s=i,o=i-Fo+1+pf.length;for(let r=0;r<o;r++){let c=Math.pow(2,s);e.push(c);let a=1/c;r>i-Fo?a=pf[r-i+Fo-1]:r===0&&(a=0),n.push(a);let l=1/(c-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,y=3,g=2,m=1,M=new Float32Array(y*p*f),_=new Float32Array(g*p*f),v=new Float32Array(m*p*f);for(let b=0;b<f;b++){let E=b%3*2/3-1,A=b>2?0:-1,w=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];M.set(w,y*p*b),_.set(d,g*p*b);let S=[b,b,b,b,b,b];v.set(S,m*p*b)}let x=new Ye;x.setAttribute("position",new We(M,y)),x.setAttribute("uv",new We(_,g)),x.setAttribute("faceIndex",new We(v,m)),t.push(x),s>Fo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yf(i,t,e){let n=new Yn(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xc(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function W1(i,t,e){let n=new Float32Array(Vs),s=new Y(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function _f(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Th(),fragmentShader:`

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
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function xf(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Th(){return`

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
	`}function q1(i){let t=new WeakMap,e=null;function n(c){if(c&&c.isTexture){let a=c.mapping,l=a===sc||a===oc,u=a===Fs||a===Bs;if(l||u){let h=t.get(c),d=h!==void 0?h.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return e===null&&(e=new Oo(i)),h=l?e.fromEquirectangular(c,h):e.fromCubemap(c,h),h.texture.pmremVersion=c.pmremVersion,t.set(c,h),h.texture;if(h!==void 0)return h.texture;{let f=c.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Oo(i)),h=l?e.fromEquirectangular(c):e.fromCubemap(c),h.texture.pmremVersion=c.pmremVersion,t.set(c,h),c.addEventListener("dispose",o),h.texture):null}}}return c}function s(c){let a=0,l=6;for(let u=0;u<l;u++)c[u]!==void 0&&a++;return a===l}function o(c){let a=c.target;a.removeEventListener("dispose",o);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function X1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Mo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y1(i,t,e,n){let s={},o=new WeakMap;function r(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",r),delete s[d.id];let f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function c(h,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function a(h){let d=h.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,p=h.attributes.position,y=0;if(f!==null){let M=f.array;y=f.version;for(let _=0,v=M.length;_<v;_+=3){let x=M[_+0],b=M[_+1],E=M[_+2];d.push(x,b,b,E,E,x)}}else if(p!==void 0){let M=p.array;y=p.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let x=_+0,b=_+1,E=_+2;d.push(x,b,b,E,E,x)}}else return;let g=new(rh(d)?lr:cr)(d,1);g.version=y;let m=o.get(h);m&&t.remove(m),o.set(h,g)}function u(h){let d=o.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return o.get(h)}return{get:c,update:a,getWireframeAttribute:u}}function G1(i,t,e){let n;function s(d){n=d}let o,r;function c(d){o=d.type,r=d.bytesPerElement}function a(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,o,d*r,p),e.update(f,n,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function h(d,f,p,y){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/r,f[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,y,0,p);let m=0;for(let M=0;M<p;M++)m+=f[M]*y[M];e.update(m,n,1)}}this.setMode=s,this.setIndex=c,this.render=a,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,c){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=c*(o/3);break;case i.LINES:e.lines+=c*(o/2);break;case i.LINE_STRIP:e.lines+=c*(o-1);break;case i.LINE_LOOP:e.lines+=c*o;break;case i.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $1(i,t,e){let n=new WeakMap,s=new we;function o(r,c,a){let l=r.morphTargetInfluences,u=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(c);if(d===void 0||d.count!==h){let w=function(){E.dispose(),n.delete(c),c.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=c.morphAttributes.position!==void 0,p=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],M=c.morphAttributes.color||[],_=0;f===!0&&(_=1),p===!0&&(_=2),y===!0&&(_=3);let v=c.attributes.position.count*_,x=1;v>t.maxTextureSize&&(x=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*x*4*h),E=new ar(b,v,x,h);E.type=hi,E.needsUpdate=!0;let A=_*4;for(let S=0;S<h;S++){let R=g[S],I=m[S],U=M[S],W=v*x*4*S;for(let L=0;L<R.count;L++){let O=L*A;f===!0&&(s.fromBufferAttribute(R,L),b[W+O+0]=s.x,b[W+O+1]=s.y,b[W+O+2]=s.z,b[W+O+3]=0),p===!0&&(s.fromBufferAttribute(I,L),b[W+O+4]=s.x,b[W+O+5]=s.y,b[W+O+6]=s.z,b[W+O+7]=0),y===!0&&(s.fromBufferAttribute(U,L),b[W+O+8]=s.x,b[W+O+9]=s.y,b[W+O+10]=s.z,b[W+O+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:E,size:new Jt(v,x)},n.set(c,d),c.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let p=c.morphTargetsRelative?1:1-f;a.getUniforms().setValue(i,"morphTargetBaseInfluence",p),a.getUniforms().setValue(i,"morphTargetInfluences",l)}a.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),a.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function J1(i,t,e,n){let s=new WeakMap;function o(a){let l=n.render.frame,u=a.geometry,h=t.get(a,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",c)===!1&&a.addEventListener("dispose",c),s.get(a)!==l&&(e.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,i.ARRAY_BUFFER),s.set(a,l))),a.isSkinnedMesh){let d=a.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function r(){s=new WeakMap}function c(a){let l=a.target;l.removeEventListener("dispose",c),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}var kf=new fn,Mf=new mr(1,1),Hf=new ar,Vf=new Ia,Wf=new ur,vf=[],bf=[],Sf=new Float32Array(16),wf=new Float32Array(9),Ef=new Float32Array(4);function zo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=vf[s];if(o===void 0&&(o=new Float32Array(s),vf[s]=o),t!==0){n.toArray(o,0);for(let r=1,c=0;r!==t;++r)c+=e,i[r].toArray(o,c)}return o}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zc(i,t){let e=bf[t];e===void 0&&(e=new Int32Array(t),bf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function j1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function K1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function Q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function eg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Ef.set(n),i.uniformMatrix2fv(this.addr,!1,Ef),en(e,n)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;wf.set(n),i.uniformMatrix3fv(this.addr,!1,wf),en(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Sf.set(n),i.uniformMatrix4fv(this.addr,!1,Sf),en(e,n)}}function sg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function fg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Mf.compareFunction=nh,o=Mf):o=kf,e.setTexture2D(t||o,s)}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vf,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wf,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hf,s)}function gg(i){switch(i){case 5126:return j1;case 35664:return K1;case 35665:return Q1;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return og;case 35668:case 35672:return rg;case 35669:case 35673:return ag;case 5125:return cg;case 36294:return lg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function yg(i,t){i.uniform1fv(this.addr,t)}function _g(i,t){let e=zo(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){let e=zo(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){let e=zo(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){let e=zo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){let e=zo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sg(i,t){let e=zo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function Ag(i,t){i.uniform4iv(this.addr,t)}function Rg(i,t){i.uniform1uiv(this.addr,t)}function Cg(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Ig(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){let n=this.cache,s=t.length,o=Zc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||kf,o[r])}function Lg(i,t,e){let n=this.cache,s=t.length,o=Zc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Vf,o[r])}function Ug(i,t,e){let n=this.cache,s=t.length,o=Zc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Wf,o[r])}function Ng(i,t,e){let n=this.cache,s=t.length,o=Zc(e,s);tn(n,o)||(i.uniform1iv(this.addr,o),en(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Hf,o[r])}function Fg(i){switch(i){case 5126:return yg;case 35664:return _g;case 35665:return xg;case 35666:return Mg;case 35674:return vg;case 35675:return bg;case 35676:return Sg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}var _h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}},xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fg(e.type)}},Mh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let c=s[o];c.setValue(t,e[c.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function Tf(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){let n=i.name,s=n.length;for(yh.lastIndex=0;;){let o=yh.exec(n),r=yh.lastIndex,c=o[1],a=o[2]==="]",l=o[3];if(a&&(c=c|0),l===void 0||l==="["&&r+2===s){Tf(e,l===void 0?new _h(c,i,t):new xh(c,i,t));break}else{let h=e.map[c];h===void 0&&(h=new Mh(c),Tf(e,h)),e=h}}}var Bo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Bg(o,r,this)}}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let c=e[o],a=n[c.id];a.needsUpdate!==!1&&c.setValue(t,a.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function Af(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Og=37297,zg=0;function kg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let c=r+1;n.push(`${c===t?">":" "} ${c}: ${e[r]}`)}return n.join(`
`)}var Rf=new ue;function Hg(i){ve._getMatrix(Rf,ve.workingColorSpace,i);let t=`mat3( ${Rf.elements.map(e=>e.toFixed(4))} )`;switch(ve.getTransfer(i)){case sr:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),o=(i.getShaderInfoLog(t)||"").trim();if(n&&o==="")return"";let r=/ERROR: 0:(\d+)/.exec(o);if(r){let c=parseInt(r[1]);return e.toUpperCase()+`

`+o+`

`+kg(i.getShaderSource(t),c)}else return o}function Vg(i,t){let e=Hg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wg(i,t){let e;switch(t){case Hu:e="Linear";break;case Vu:e="Reinhard";break;case Wu:e="Cineon";break;case ic:e="ACESFilmic";break;case Xu:e="AgX";break;case Yu:e="Neutral";break;case qu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Yc=new Y;function qg(){ve.getLuminanceCoefficients(Yc);let i=Yc.x.toFixed(4),t=Yc.y.toFixed(4),e=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function Yg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:c}}return e}function zr(i){return i!==""}function Pf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function If(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(Zg,Jg)}var $g=new Map;function Jg(i,t){let e=de[t];if(e===void 0){let n=$g.get(t);if(n!==void 0)e=de[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vh(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(i){return i.replace(jg,Kg)}function Kg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Lf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Qg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===$a?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function ty(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ey(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function ny(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nc:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case ku:t="ENVMAP_BLENDING_ADD";break}return t}function iy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sy(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,c=e.fragmentShader,a=Qg(e),l=ty(e),u=ey(e),h=ny(e),d=iy(e),f=Xg(e),p=Yg(o),y=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(zr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(zr).join(`
`),m.length>0&&(m+=`
`)):(g=[Lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),m=[Lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?de.tonemapping_pars_fragment:"",e.toneMapping!==Vi?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),r=vh(r),r=Pf(r,e),r=If(r,e),c=vh(c),c=Pf(c,e),c=If(c,e),r=Df(r),c=Df(c),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=M+g+r,v=M+m+c,x=Af(s,s.VERTEX_SHADER,_),b=Af(s,s.FRAGMENT_SHADER,v);s.attachShader(y,x),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(y)||"",U=s.getShaderInfoLog(x)||"",W=s.getShaderInfoLog(b)||"",L=I.trim(),O=U.trim(),H=W.trim(),k=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,x,b);else{let nt=Cf(s,x,"vertex"),it=Cf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+nt+`
`+it)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||H==="")&&(tt=!1);tt&&(R.diagnostics={runnable:k,programLog:L,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(x),s.deleteShader(b),A=new Bo(s,y),w=Gg(s,y)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(y,Og)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=x,this.fragmentShader=b,this}var oy=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sh(t),e.set(t,n)),n}},Sh=class{constructor(t){this.id=oy++,this.code=t,this.usedTimes=0}};function ry(i,t,e,n,s,o,r){let c=new bo,a=new bh,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,S,R,I,U){let W=I.fog,L=U.geometry,O=w.isMeshStandardMaterial?I.environment:null,H=(w.isMeshStandardMaterial?e:t).get(w.envMap||O),k=H&&H.mapping===Lr?H.image.height:null,tt=p[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let nt=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,it=nt!==void 0?nt.length:0,bt=0;L.morphAttributes.position!==void 0&&(bt=1),L.morphAttributes.normal!==void 0&&(bt=2),L.morphAttributes.color!==void 0&&(bt=3);let j,Mt,vt,K;if(tt){let Me=Si[tt];j=Me.vertexShader,Mt=Me.fragmentShader}else j=w.vertexShader,Mt=w.fragmentShader,a.update(w),vt=a.getVertexShaderID(w),K=a.getFragmentShaderID(w);let $=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),N=U.isInstancedMesh===!0,F=U.isBatchedMesh===!0,V=!!w.map,G=!!w.matcap,D=!!H,ct=!!w.aoMap,Z=!!w.lightMap,rt=!!w.bumpMap,ft=!!w.normalMap,Dt=!!w.displacementMap,mt=!!w.emissiveMap,wt=!!w.metalnessMap,zt=!!w.roughnessMap,st=w.anisotropy>0,P=w.clearcoat>0,C=w.dispersion>0,z=w.iridescence>0,q=w.sheen>0,Q=w.transmission>0,J=st&&!!w.anisotropyMap,ht=P&&!!w.clearcoatMap,pt=P&&!!w.clearcoatNormalMap,Tt=P&&!!w.clearcoatRoughnessMap,Ct=z&&!!w.iridescenceMap,dt=z&&!!w.iridescenceThicknessMap,Et=q&&!!w.sheenColorMap,Ht=q&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,It=!!w.specularColorMap,Ut=!!w.specularIntensityMap,et=Q&&!!w.transmissionMap,Bt=Q&&!!w.thicknessMap,kt=!!w.gradientMap,Xt=!!w.alphaMap,Lt=w.alphaTest>0,Rt=!!w.alphaHash,Zt=!!w.extensions,ce=Vi;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Re={shaderID:tt,shaderType:w.type,shaderName:w.name,vertexShader:j,fragmentShader:Mt,defines:w.defines,customVertexShaderID:vt,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:F,batchingColor:F&&U._colorsTexture!==null,instancing:N,instancingColor:N&&U.instanceColor!==null,instancingMorph:N&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Cs,alphaToCoverage:!!w.alphaToCoverage,map:V,matcap:G,envMap:D,envMapMode:D&&H.mapping,envMapCubeUVHeight:k,aoMap:ct,lightMap:Z,bumpMap:rt,normalMap:ft,displacementMap:d&&Dt,emissiveMap:mt,normalMapObjectSpace:ft&&w.normalMapType===$u,normalMapTangentSpace:ft&&w.normalMapType===Wc,metalnessMap:wt,roughnessMap:zt,anisotropy:st,anisotropyMap:J,clearcoat:P,clearcoatMap:ht,clearcoatNormalMap:pt,clearcoatRoughnessMap:Tt,dispersion:C,iridescence:z,iridescenceMap:Ct,iridescenceThicknessMap:dt,sheen:q,sheenColorMap:Et,sheenRoughnessMap:Ht,specularMap:Pt,specularColorMap:It,specularIntensityMap:Ut,transmission:Q,transmissionMap:et,thicknessMap:Bt,gradientMap:kt,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Lt,alphaHash:Rt,combine:w.combine,mapUv:V&&y(w.map.channel),aoMapUv:ct&&y(w.aoMap.channel),lightMapUv:Z&&y(w.lightMap.channel),bumpMapUv:rt&&y(w.bumpMap.channel),normalMapUv:ft&&y(w.normalMap.channel),displacementMapUv:Dt&&y(w.displacementMap.channel),emissiveMapUv:mt&&y(w.emissiveMap.channel),metalnessMapUv:wt&&y(w.metalnessMap.channel),roughnessMapUv:zt&&y(w.roughnessMap.channel),anisotropyMapUv:J&&y(w.anisotropyMap.channel),clearcoatMapUv:ht&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:pt&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&y(w.sheenRoughnessMap.channel),specularMapUv:Pt&&y(w.specularMap.channel),specularColorMapUv:It&&y(w.specularColorMap.channel),specularIntensityMapUv:Ut&&y(w.specularIntensityMap.channel),transmissionMapUv:et&&y(w.transmissionMap.channel),thicknessMapUv:Bt&&y(w.thicknessMap.channel),alphaMapUv:Xt&&y(w.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ft||st),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(V||Xt),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ut,skinning:U.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:bt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:V&&w.map.isVideoTexture===!0&&ve.getTransfer(w.map.colorSpace)===Ie,decodeVideoTextureEmissive:mt&&w.emissiveMap.isVideoTexture===!0&&ve.getTransfer(w.emissiveMap.colorSpace)===Ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qe,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Zt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&w.extensions.multiDraw===!0||F)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function m(w){let S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(let R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(M(S,w),_(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){c.disableAll(),S.supportsVertexTextures&&c.enable(0),S.instancing&&c.enable(1),S.instancingColor&&c.enable(2),S.instancingMorph&&c.enable(3),S.matcap&&c.enable(4),S.envMap&&c.enable(5),S.normalMapObjectSpace&&c.enable(6),S.normalMapTangentSpace&&c.enable(7),S.clearcoat&&c.enable(8),S.iridescence&&c.enable(9),S.alphaTest&&c.enable(10),S.vertexColors&&c.enable(11),S.vertexAlphas&&c.enable(12),S.vertexUv1s&&c.enable(13),S.vertexUv2s&&c.enable(14),S.vertexUv3s&&c.enable(15),S.vertexTangents&&c.enable(16),S.anisotropy&&c.enable(17),S.alphaHash&&c.enable(18),S.batching&&c.enable(19),S.dispersion&&c.enable(20),S.batchingColor&&c.enable(21),S.gradientMap&&c.enable(22),w.push(c.mask),c.disableAll(),S.fog&&c.enable(0),S.useFog&&c.enable(1),S.flatShading&&c.enable(2),S.logarithmicDepthBuffer&&c.enable(3),S.reversedDepthBuffer&&c.enable(4),S.skinning&&c.enable(5),S.morphTargets&&c.enable(6),S.morphNormals&&c.enable(7),S.morphColors&&c.enable(8),S.premultipliedAlpha&&c.enable(9),S.shadowMapEnabled&&c.enable(10),S.doubleSided&&c.enable(11),S.flipSided&&c.enable(12),S.useDepthPacking&&c.enable(13),S.dithering&&c.enable(14),S.transmission&&c.enable(15),S.sheen&&c.enable(16),S.opaque&&c.enable(17),S.pointsUvs&&c.enable(18),S.decodeVideoTexture&&c.enable(19),S.decodeVideoTextureEmissive&&c.enable(20),S.alphaToCoverage&&c.enable(21),w.push(c.mask)}function v(w){let S=p[w.type],R;if(S){let I=Si[S];R=af.clone(I.uniforms)}else R=w.uniforms;return R}function x(w,S){let R;for(let I=0,U=u.length;I<U;I++){let W=u[I];if(W.cacheKey===S){R=W,++R.usedTimes;break}}return R===void 0&&(R=new sy(i,S,w,o),u.push(R)),R}function b(w){if(--w.usedTimes===0){let S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function E(w){a.remove(w)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:b,releaseShaderCache:E,programs:u,dispose:A}}function ay(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let c=i.get(r);return c===void 0&&(c={},i.set(r,c)),c}function n(r){i.delete(r)}function s(r,c,a){i.get(r)[c]=a}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function cy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Nf(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(h,d,f,p,y,g){let m=i[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:y,group:g},i[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=y,m.group=g),t++,m}function c(h,d,f,p,y,g){let m=r(h,d,f,p,y,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function a(h,d,f,p,y,g){let m=r(h,d,f,p,y,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||cy),n.length>1&&n.sort(d||Uf),s.length>1&&s.sort(d||Uf)}function u(){for(let h=t,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:c,unshift:a,finish:u,sort:l}}function ly(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new Nf,i.set(n,[r])):s>=o.length?(r=new Nf,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function hy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new ee};break;case"SpotLight":e={position:new Y,direction:new Y,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function uy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var fy=0;function dy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function py(i){let t=new hy,e=uy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Y);let s=new Y,o=new xe,r=new xe;function c(l){let u=0,h=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,p=0,y=0,g=0,m=0,M=0,_=0,v=0,x=0,b=0,E=0;l.sort(dy);for(let w=0,S=l.length;w<S;w++){let R=l[w],I=R.color,U=R.intensity,W=R.distance,L=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(R.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(R.sh.coefficients[O],U);E++}else if(R.isDirectionalLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,k=e.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=L,n.directionalShadowMatrix[f]=R.shadow.matrix,M++}n.directional[f]=O,f++}else if(R.isSpotLight){let O=t.get(R);O.position.setFromMatrixPosition(R.matrixWorld),O.color.copy(I).multiplyScalar(U),O.distance=W,O.coneCos=Math.cos(R.angle),O.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),O.decay=R.decay,n.spot[y]=O;let H=R.shadow;if(R.map&&(n.spotLightMap[x]=R.map,x++,H.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[y]=H.matrix,R.castShadow){let k=e.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=L,v++}y++}else if(R.isRectAreaLight){let O=t.get(R);O.color.copy(I).multiplyScalar(U),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=O,g++}else if(R.isPointLight){let O=t.get(R);if(O.color.copy(R.color).multiplyScalar(R.intensity),O.distance=R.distance,O.decay=R.decay,R.castShadow){let H=R.shadow,k=e.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[p]=k,n.pointShadowMap[p]=L,n.pointShadowMatrix[p]=R.shadow.matrix,_++}n.point[p]=O,p++}else if(R.isHemisphereLight){let O=t.get(R);O.skyColor.copy(R.color).multiplyScalar(U),O.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[m]=O,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Wt.LTC_FLOAT_1,n.rectAreaLTC2=Wt.LTC_FLOAT_2):(n.rectAreaLTC1=Wt.LTC_HALF_1,n.rectAreaLTC2=Wt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==p||A.spotLength!==y||A.rectAreaLength!==g||A.hemiLength!==m||A.numDirectionalShadows!==M||A.numPointShadows!==_||A.numSpotShadows!==v||A.numSpotMaps!==x||A.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,A.directionalLength=f,A.pointLength=p,A.spotLength=y,A.rectAreaLength=g,A.hemiLength=m,A.numDirectionalShadows=M,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=x,A.numLightProbes=E,n.version=fy++)}function a(l,u){let h=0,d=0,f=0,p=0,y=0,g=u.matrixWorldInverse;for(let m=0,M=l.length;m<M;m++){let _=l[m];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),h++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let v=n.rectArea[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(_.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:c,setupView:a,state:n}}function Ff(i){let t=new py(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function o(u){e.push(u)}function r(u){n.push(u)}function c(){t.setup(e)}function a(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:c,setupLightsView:a,pushLight:o,pushShadow:r}}function my(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),c;return r===void 0?(c=new Ff(i),t.set(s,[c])):o>=r.length?(c=new Ff(i),r.push(c)):c=r[o],c}function n(){t=new WeakMap}return{get:e,dispose:n}}var gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yy=`uniform sampler2D shadow_pass;
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
}`;function _y(i,t,e){let n=new Eo,s=new Jt,o=new Jt,r=new we,c=new Ao({depthPacking:Vc}),a=new Ba,l={},u=e.maxTextureSize,h={[zi]:pn,[pn]:zi,[qe]:qe},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:gy,fragmentShader:yy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ye;p.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Gt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let m=this.type;this.render=function(b,E,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let w=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Hi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let U=m!==bi&&this.type===bi,W=m===bi&&this.type!==bi;for(let L=0,O=b.length;L<O;L++){let H=b[L],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let tt=k.getFrameExtents();if(s.multiply(tt),o.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(o.x=Math.floor(u/tt.x),s.x=o.x*tt.x,k.mapSize.x=o.x),s.y>u&&(o.y=Math.floor(u/tt.y),s.y=o.y*tt.y,k.mapSize.y=o.y)),k.map===null||U===!0||W===!0){let it=this.type!==bi?{minFilter:Pn,magFilter:Pn}:{};k.map!==null&&k.map.dispose(),k.map=new Yn(s.x,s.y,it),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let nt=k.getViewportCount();for(let it=0;it<nt;it++){let bt=k.getViewport(it);r.set(o.x*bt.x,o.y*bt.y,o.x*bt.z,o.y*bt.w),I.viewport(r),k.updateMatrices(H,it),n=k.getFrustum(),v(E,A,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===bi&&M(k,A),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(w,S,R)};function M(b,E){let A=t.update(y);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yn(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,A,d,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,A,f,y,null)}function _(b,E,A,w){let S=null,R=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)S=R;else if(S=A.isPointLight===!0?a:c,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=S.uuid,U=E.uuid,W=l[I];W===void 0&&(W={},l[I]=W);let L=W[U];L===void 0&&(L=S.clone(),W[U]=L,E.addEventListener("dispose",x)),S=L}if(S.visible=E.visible,S.wireframe=E.wireframe,w===bi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:h[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=A}return S}function v(b,E,A,w,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===bi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let U=t.update(b),W=b.material;if(Array.isArray(W)){let L=U.groups;for(let O=0,H=L.length;O<H;O++){let k=L[O],tt=W[k.materialIndex];if(tt&&tt.visible){let nt=_(b,tt,w,S);b.onBeforeShadow(i,b,E,A,U,nt,k),i.renderBufferDirect(A,null,U,nt,b,k),b.onAfterShadow(i,b,E,A,U,nt,k)}}}else if(W.visible){let L=_(b,W,w,S);b.onBeforeShadow(i,b,E,A,U,L,null),i.renderBufferDirect(A,null,U,L,b,null),b.onAfterShadow(i,b,E,A,U,L,null)}}let I=b.children;for(let U=0,W=I.length;U<W;U++)v(I[U],E,A,w,S)}function x(b){b.target.removeEventListener("dispose",x);for(let A in l){let w=l[A],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}var xy={[Ja]:ja,[Ka]:Po,[Qa]:ec,[Rs]:tc,[ja]:Ja,[Po]:Ka,[ec]:Qa,[tc]:Rs};function My(i,t){function e(){let et=!1,Bt=new we,kt=null,Xt=new we(0,0,0,0);return{setMask:function(Lt){kt!==Lt&&!et&&(i.colorMask(Lt,Lt,Lt,Lt),kt=Lt)},setLocked:function(Lt){et=Lt},setClear:function(Lt,Rt,Zt,ce,Re){Re===!0&&(Lt*=ce,Rt*=ce,Zt*=ce),Bt.set(Lt,Rt,Zt,ce),Xt.equals(Bt)===!1&&(i.clearColor(Lt,Rt,Zt,ce),Xt.copy(Bt))},reset:function(){et=!1,kt=null,Xt.set(-1,0,0,0)}}}function n(){let et=!1,Bt=!1,kt=null,Xt=null,Lt=null;return{setReversed:function(Rt){if(Bt!==Rt){let Zt=t.get("EXT_clip_control");Rt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Bt=Rt;let ce=Lt;Lt=null,this.setClear(ce)}},getReversed:function(){return Bt},setTest:function(Rt){Rt?$(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Rt){kt!==Rt&&!et&&(i.depthMask(Rt),kt=Rt)},setFunc:function(Rt){if(Bt&&(Rt=xy[Rt]),Xt!==Rt){switch(Rt){case Ja:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case tc:i.depthFunc(i.GEQUAL);break;case Po:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Xt=Rt}},setLocked:function(Rt){et=Rt},setClear:function(Rt){Lt!==Rt&&(Bt&&(Rt=1-Rt),i.clearDepth(Rt),Lt=Rt)},reset:function(){et=!1,kt=null,Xt=null,Lt=null,Bt=!1}}}function s(){let et=!1,Bt=null,kt=null,Xt=null,Lt=null,Rt=null,Zt=null,ce=null,Re=null;return{setTest:function(Me){et||(Me?$(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Me){Bt!==Me&&!et&&(i.stencilMask(Me),Bt=Me)},setFunc:function(Me,ei,Nn){(kt!==Me||Xt!==ei||Lt!==Nn)&&(i.stencilFunc(Me,ei,Nn),kt=Me,Xt=ei,Lt=Nn)},setOp:function(Me,ei,Nn){(Rt!==Me||Zt!==ei||ce!==Nn)&&(i.stencilOp(Me,ei,Nn),Rt=Me,Zt=ei,ce=Nn)},setLocked:function(Me){et=Me},setClear:function(Me){Re!==Me&&(i.clearStencil(Me),Re=Me)},reset:function(){et=!1,Bt=null,kt=null,Xt=null,Lt=null,Rt=null,Zt=null,ce=null,Re=null}}}let o=new e,r=new n,c=new s,a=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],p=null,y=!1,g=null,m=null,M=null,_=null,v=null,x=null,b=null,E=new ee(0,0,0),A=0,w=!1,S=null,R=null,I=null,U=null,W=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=H>=2);let tt=null,nt={},it=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),j=new we().fromArray(it),Mt=new we().fromArray(bt);function vt(et,Bt,kt,Xt){let Lt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(et,Rt),i.texParameteri(et,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(et,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<kt;Zt++)et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?i.texImage3D(Bt,0,i.RGBA,1,1,Xt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(Bt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return Rt}let K={};K[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),c.setClear(0),$(i.DEPTH_TEST),r.setFunc(Rs),rt(!1),ft(ql),$(i.CULL_FACE),ct(Hi);function $(et){u[et]!==!0&&(i.enable(et),u[et]=!0)}function ut(et){u[et]!==!1&&(i.disable(et),u[et]=!1)}function N(et,Bt){return h[et]!==Bt?(i.bindFramebuffer(et,Bt),h[et]=Bt,et===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Bt),et===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Bt),!0):!1}function F(et,Bt){let kt=f,Xt=!1;if(et){kt=d.get(Bt),kt===void 0&&(kt=[],d.set(Bt,kt));let Lt=et.textures;if(kt.length!==Lt.length||kt[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Zt=Lt.length;Rt<Zt;Rt++)kt[Rt]=i.COLOR_ATTACHMENT0+Rt;kt.length=Lt.length,Xt=!0}}else kt[0]!==i.BACK&&(kt[0]=i.BACK,Xt=!0);Xt&&i.drawBuffers(kt)}function V(et){return p!==et?(i.useProgram(et),p=et,!0):!1}let G={[ss]:i.FUNC_ADD,[bu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};G[wu]=i.MIN,G[Eu]=i.MAX;let D={[Tu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(et,Bt,kt,Xt,Lt,Rt,Zt,ce,Re,Me){if(et===Hi){y===!0&&(ut(i.BLEND),y=!1);return}if(y===!1&&($(i.BLEND),y=!0),et!==vu){if(et!==g||Me!==w){if((m!==ss||v!==ss)&&(i.blendEquation(i.FUNC_ADD),m=ss,v=ss),Me)switch(et){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}else switch(et){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",et);break}M=null,_=null,x=null,b=null,E.set(0,0,0),A=0,g=et,w=Me}return}Lt=Lt||Bt,Rt=Rt||kt,Zt=Zt||Xt,(Bt!==m||Lt!==v)&&(i.blendEquationSeparate(G[Bt],G[Lt]),m=Bt,v=Lt),(kt!==M||Xt!==_||Rt!==x||Zt!==b)&&(i.blendFuncSeparate(D[kt],D[Xt],D[Rt],D[Zt]),M=kt,_=Xt,x=Rt,b=Zt),(ce.equals(E)===!1||Re!==A)&&(i.blendColor(ce.r,ce.g,ce.b,Re),E.copy(ce),A=Re),g=et,w=!1}function Z(et,Bt){et.side===qe?ut(i.CULL_FACE):$(i.CULL_FACE);let kt=et.side===pn;Bt&&(kt=!kt),rt(kt),et.blending===As&&et.transparent===!1?ct(Hi):ct(et.blending,et.blendEquation,et.blendSrc,et.blendDst,et.blendEquationAlpha,et.blendSrcAlpha,et.blendDstAlpha,et.blendColor,et.blendAlpha,et.premultipliedAlpha),r.setFunc(et.depthFunc),r.setTest(et.depthTest),r.setMask(et.depthWrite),o.setMask(et.colorWrite);let Xt=et.stencilWrite;c.setTest(Xt),Xt&&(c.setMask(et.stencilWriteMask),c.setFunc(et.stencilFunc,et.stencilRef,et.stencilFuncMask),c.setOp(et.stencilFail,et.stencilZFail,et.stencilZPass)),mt(et.polygonOffset,et.polygonOffsetFactor,et.polygonOffsetUnits),et.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(et){S!==et&&(et?i.frontFace(i.CW):i.frontFace(i.CCW),S=et)}function ft(et){et!==xu?($(i.CULL_FACE),et!==R&&(et===ql?i.cullFace(i.BACK):et===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),R=et}function Dt(et){et!==I&&(O&&i.lineWidth(et),I=et)}function mt(et,Bt,kt){et?($(i.POLYGON_OFFSET_FILL),(U!==Bt||W!==kt)&&(i.polygonOffset(Bt,kt),U=Bt,W=kt)):ut(i.POLYGON_OFFSET_FILL)}function wt(et){et?$(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function zt(et){et===void 0&&(et=i.TEXTURE0+L-1),tt!==et&&(i.activeTexture(et),tt=et)}function st(et,Bt,kt){kt===void 0&&(tt===null?kt=i.TEXTURE0+L-1:kt=tt);let Xt=nt[kt];Xt===void 0&&(Xt={type:void 0,texture:void 0},nt[kt]=Xt),(Xt.type!==et||Xt.texture!==Bt)&&(tt!==kt&&(i.activeTexture(kt),tt=kt),i.bindTexture(et,Bt||K[et]),Xt.type=et,Xt.texture=Bt)}function P(){let et=nt[tt];et!==void 0&&et.type!==void 0&&(i.bindTexture(et.type,null),et.type=void 0,et.texture=void 0)}function C(){try{i.compressedTexImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function q(){try{i.texSubImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Q(){try{i.texSubImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function ht(){try{i.compressedTexSubImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function pt(){try{i.texStorage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Tt(){try{i.texStorage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Ct(){try{i.texImage2D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function dt(){try{i.texImage3D(...arguments)}catch(et){console.error("THREE.WebGLState:",et)}}function Et(et){j.equals(et)===!1&&(i.scissor(et.x,et.y,et.z,et.w),j.copy(et))}function Ht(et){Mt.equals(et)===!1&&(i.viewport(et.x,et.y,et.z,et.w),Mt.copy(et))}function Pt(et,Bt){let kt=l.get(Bt);kt===void 0&&(kt=new WeakMap,l.set(Bt,kt));let Xt=kt.get(et);Xt===void 0&&(Xt=i.getUniformBlockIndex(Bt,et.name),kt.set(et,Xt))}function It(et,Bt){let Xt=l.get(Bt).get(et);a.get(Bt)!==Xt&&(i.uniformBlockBinding(Bt,Xt,et.__bindingPointIndex),a.set(Bt,Xt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,nt={},h={},d=new WeakMap,f=[],p=null,y=!1,g=null,m=null,M=null,_=null,v=null,x=null,b=null,E=new ee(0,0,0),A=0,w=!1,S=null,R=null,I=null,U=null,W=null,j.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),c.reset()}return{buffers:{color:o,depth:r,stencil:c},enable:$,disable:ut,bindFramebuffer:N,drawBuffers:F,useProgram:V,setBlending:ct,setMaterial:Z,setFlipSided:rt,setCullFace:ft,setLineWidth:Dt,setPolygonOffset:mt,setScissorTest:wt,activeTexture:zt,bindTexture:st,unbindTexture:P,compressedTexImage2D:C,compressedTexImage3D:z,texImage2D:Ct,texImage3D:dt,updateUBOMapping:Pt,uniformBlockBinding:It,texStorage2D:pt,texStorage3D:Tt,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:J,compressedTexSubImage3D:ht,scissor:Et,viewport:Ht,reset:Ut}}function vy(i,t,e,n,s,o,r){let c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Jt,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(P,C){return f?new OffscreenCanvas(P,C):rr("canvas")}function y(P,C,z){let q=1,Q=st(P);if((Q.width>z||Q.height>z)&&(q=z/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let J=Math.floor(q*Q.width),ht=Math.floor(q*Q.height);h===void 0&&(h=p(J,ht));let pt=C?p(J,ht):h;return pt.width=J,pt.height=ht,pt.getContext("2d").drawImage(P,0,0,J,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+ht+")."),pt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){i.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,C,z,q,Q=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let J=C;if(C===i.RED&&(z===i.FLOAT&&(J=i.R32F),z===i.HALF_FLOAT&&(J=i.R16F),z===i.UNSIGNED_BYTE&&(J=i.R8)),C===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.R8UI),z===i.UNSIGNED_SHORT&&(J=i.R16UI),z===i.UNSIGNED_INT&&(J=i.R32UI),z===i.BYTE&&(J=i.R8I),z===i.SHORT&&(J=i.R16I),z===i.INT&&(J=i.R32I)),C===i.RG&&(z===i.FLOAT&&(J=i.RG32F),z===i.HALF_FLOAT&&(J=i.RG16F),z===i.UNSIGNED_BYTE&&(J=i.RG8)),C===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RG8UI),z===i.UNSIGNED_SHORT&&(J=i.RG16UI),z===i.UNSIGNED_INT&&(J=i.RG32UI),z===i.BYTE&&(J=i.RG8I),z===i.SHORT&&(J=i.RG16I),z===i.INT&&(J=i.RG32I)),C===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGB8UI),z===i.UNSIGNED_SHORT&&(J=i.RGB16UI),z===i.UNSIGNED_INT&&(J=i.RGB32UI),z===i.BYTE&&(J=i.RGB8I),z===i.SHORT&&(J=i.RGB16I),z===i.INT&&(J=i.RGB32I)),C===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),z===i.UNSIGNED_INT&&(J=i.RGBA32UI),z===i.BYTE&&(J=i.RGBA8I),z===i.SHORT&&(J=i.RGBA16I),z===i.INT&&(J=i.RGBA32I)),C===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),C===i.RGBA){let ht=Q?sr:ve.getTransfer(q);z===i.FLOAT&&(J=i.RGBA32F),z===i.HALF_FLOAT&&(J=i.RGBA16F),z===i.UNSIGNED_BYTE&&(J=ht===Ie?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(P,C){let z;return P?C===null||C===ps||C===Lo?z=i.DEPTH24_STENCIL8:C===hi?z=i.DEPTH32F_STENCIL8:C===Io&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ps||C===Lo?z=i.DEPTH_COMPONENT24:C===hi?z=i.DEPTH_COMPONENT32F:C===Io&&(z=i.DEPTH_COMPONENT16),z}function x(P,C){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pn&&P.minFilter!==ai?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function b(P){let C=P.target;C.removeEventListener("dispose",b),A(C),C.isVideoTexture&&u.delete(C)}function E(P){let C=P.target;C.removeEventListener("dispose",E),S(C)}function A(P){let C=n.get(P);if(C.__webglInit===void 0)return;let z=P.source,q=d.get(z);if(q){let Q=q[C.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(P),Object.keys(q).length===0&&d.delete(z)}n.remove(P)}function w(P){let C=n.get(P);i.deleteTexture(C.__webglTexture);let z=P.source,q=d.get(z);delete q[C.__cacheKey],r.memory.textures--}function S(P){let C=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(C.__webglFramebuffer[q]))for(let Q=0;Q<C.__webglFramebuffer[q].length;Q++)i.deleteFramebuffer(C.__webglFramebuffer[q][Q]);else i.deleteFramebuffer(C.__webglFramebuffer[q]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[q])}else{if(Array.isArray(C.__webglFramebuffer))for(let q=0;q<C.__webglFramebuffer.length;q++)i.deleteFramebuffer(C.__webglFramebuffer[q]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let q=0;q<C.__webglColorRenderbuffer.length;q++)C.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[q]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let z=P.textures;for(let q=0,Q=z.length;q<Q;q++){let J=n.get(z[q]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),r.memory.textures--),n.remove(z[q])}n.remove(P)}let R=0;function I(){R=0}function U(){let P=R;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),R+=1,P}function W(P){let C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.colorSpace),C.join()}function L(P,C){let z=n.get(P);if(P.isVideoTexture&&wt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let q=P.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,P,C);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+C)}function O(P,C){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){K(z,P,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+C)}function H(P,C){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){K(z,P,C);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+C)}function k(P,C){let z=n.get(P);if(P.version>0&&z.__version!==P.version){$(z,P,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+C)}let tt={[ki]:i.REPEAT,[is]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},nt={[Pn]:i.NEAREST,[Gu]:i.NEAREST_MIPMAP_NEAREST,[Ur]:i.NEAREST_MIPMAP_LINEAR,[ai]:i.LINEAR,[rc]:i.LINEAR_MIPMAP_NEAREST,[ds]:i.LINEAR_MIPMAP_LINEAR},it={[Ju]:i.NEVER,[nf]:i.ALWAYS,[ju]:i.LESS,[nh]:i.LEQUAL,[Ku]:i.EQUAL,[ef]:i.GEQUAL,[Qu]:i.GREATER,[tf]:i.NOTEQUAL};function bt(P,C){if(C.type===hi&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ai||C.magFilter===rc||C.magFilter===Ur||C.magFilter===ds||C.minFilter===ai||C.minFilter===rc||C.minFilter===Ur||C.minFilter===ds)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,tt[C.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,tt[C.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,tt[C.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,nt[C.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,nt[C.minFilter]),C.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,it[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Pn||C.minFilter!==Ur&&C.minFilter!==ds||C.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function j(P,C){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",b));let q=C.source,Q=d.get(q);Q===void 0&&(Q={},d.set(q,Q));let J=W(C);if(J!==P.__cacheKey){Q[J]===void 0&&(Q[J]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,z=!0),Q[J].usedTimes++;let ht=Q[P.__cacheKey];ht!==void 0&&(Q[P.__cacheKey].usedTimes--,ht.usedTimes===0&&w(C)),P.__cacheKey=J,P.__webglTexture=Q[J].texture}return z}function Mt(P,C,z){return Math.floor(Math.floor(P/z)/C)}function vt(P,C,z,q){let J=P.updateRanges;if(J.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,z,q,C.data);else{J.sort((dt,Et)=>dt.start-Et.start);let ht=0;for(let dt=1;dt<J.length;dt++){let Et=J[ht],Ht=J[dt],Pt=Et.start+Et.count,It=Mt(Ht.start,C.width,4),Ut=Mt(Et.start,C.width,4);Ht.start<=Pt+1&&It===Ut&&Mt(Ht.start+Ht.count-1,C.width,4)===It?Et.count=Math.max(Et.count,Ht.start+Ht.count-Et.start):(++ht,J[ht]=Ht)}J.length=ht+1;let pt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let dt=0,Et=J.length;dt<Et;dt++){let Ht=J[dt],Pt=Math.floor(Ht.start/4),It=Math.ceil(Ht.count/4),Ut=Pt%C.width,et=Math.floor(Pt/C.width),Bt=It,kt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,et),e.texSubImage2D(i.TEXTURE_2D,0,Ut,et,Bt,kt,z,q,C.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function K(P,C,z){let q=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(q=i.TEXTURE_3D);let Q=j(P,C),J=C.source;e.bindTexture(q,P.__webglTexture,i.TEXTURE0+z);let ht=n.get(J);if(J.version!==ht.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let pt=ve.getPrimaries(ve.workingColorSpace),Tt=C.colorSpace===Wi?null:ve.getPrimaries(C.colorSpace),Ct=C.colorSpace===Wi||pt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let dt=y(C.image,!1,s.maxTextureSize);dt=zt(C,dt);let Et=o.convert(C.format,C.colorSpace),Ht=o.convert(C.type),Pt=_(C.internalFormat,Et,Ht,C.colorSpace,C.isVideoTexture);bt(q,C);let It,Ut=C.mipmaps,et=C.isVideoTexture!==!0,Bt=ht.__version===void 0||Q===!0,kt=J.dataReady,Xt=x(C,dt);if(C.isDepthTexture)Pt=v(C.format===Uo,C.type),Bt&&(et?e.texStorage2D(i.TEXTURE_2D,1,Pt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Pt,dt.width,dt.height,0,Et,Ht,null));else if(C.isDataTexture)if(Ut.length>0){et&&Bt&&e.texStorage2D(i.TEXTURE_2D,Xt,Pt,Ut[0].width,Ut[0].height);for(let Lt=0,Rt=Ut.length;Lt<Rt;Lt++)It=Ut[Lt],et?kt&&e.texSubImage2D(i.TEXTURE_2D,Lt,0,0,It.width,It.height,Et,Ht,It.data):e.texImage2D(i.TEXTURE_2D,Lt,Pt,It.width,It.height,0,Et,Ht,It.data);C.generateMipmaps=!1}else et?(Bt&&e.texStorage2D(i.TEXTURE_2D,Xt,Pt,dt.width,dt.height),kt&&vt(C,dt,Et,Ht)):e.texImage2D(i.TEXTURE_2D,0,Pt,dt.width,dt.height,0,Et,Ht,dt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){et&&Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Pt,Ut[0].width,Ut[0].height,dt.depth);for(let Lt=0,Rt=Ut.length;Lt<Rt;Lt++)if(It=Ut[Lt],C.format!==Zn)if(Et!==null)if(et){if(kt)if(C.layerUpdates.size>0){let Zt=uh(It.width,It.height,C.format,C.type);for(let ce of C.layerUpdates){let Re=It.data.subarray(ce*Zt/It.data.BYTES_PER_ELEMENT,(ce+1)*Zt/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Lt,0,0,ce,It.width,It.height,1,Et,Re)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Lt,0,0,0,It.width,It.height,dt.depth,Et,It.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Lt,Pt,It.width,It.height,dt.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?kt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Lt,0,0,0,It.width,It.height,dt.depth,Et,Ht,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Lt,Pt,It.width,It.height,dt.depth,0,Et,Ht,It.data)}else{et&&Bt&&e.texStorage2D(i.TEXTURE_2D,Xt,Pt,Ut[0].width,Ut[0].height);for(let Lt=0,Rt=Ut.length;Lt<Rt;Lt++)It=Ut[Lt],C.format!==Zn?Et!==null?et?kt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Lt,0,0,It.width,It.height,Et,It.data):e.compressedTexImage2D(i.TEXTURE_2D,Lt,Pt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?kt&&e.texSubImage2D(i.TEXTURE_2D,Lt,0,0,It.width,It.height,Et,Ht,It.data):e.texImage2D(i.TEXTURE_2D,Lt,Pt,It.width,It.height,0,Et,Ht,It.data)}else if(C.isDataArrayTexture)if(et){if(Bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Xt,Pt,dt.width,dt.height,dt.depth),kt)if(C.layerUpdates.size>0){let Lt=uh(dt.width,dt.height,C.format,C.type);for(let Rt of C.layerUpdates){let Zt=dt.data.subarray(Rt*Lt/dt.data.BYTES_PER_ELEMENT,(Rt+1)*Lt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Rt,dt.width,dt.height,1,Et,Ht,Zt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ht,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,dt.width,dt.height,dt.depth,0,Et,Ht,dt.data);else if(C.isData3DTexture)et?(Bt&&e.texStorage3D(i.TEXTURE_3D,Xt,Pt,dt.width,dt.height,dt.depth),kt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Et,Ht,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,dt.width,dt.height,dt.depth,0,Et,Ht,dt.data);else if(C.isFramebufferTexture){if(Bt)if(et)e.texStorage2D(i.TEXTURE_2D,Xt,Pt,dt.width,dt.height);else{let Lt=dt.width,Rt=dt.height;for(let Zt=0;Zt<Xt;Zt++)e.texImage2D(i.TEXTURE_2D,Zt,Pt,Lt,Rt,0,Et,Ht,null),Lt>>=1,Rt>>=1}}else if(Ut.length>0){if(et&&Bt){let Lt=st(Ut[0]);e.texStorage2D(i.TEXTURE_2D,Xt,Pt,Lt.width,Lt.height)}for(let Lt=0,Rt=Ut.length;Lt<Rt;Lt++)It=Ut[Lt],et?kt&&e.texSubImage2D(i.TEXTURE_2D,Lt,0,0,Et,Ht,It):e.texImage2D(i.TEXTURE_2D,Lt,Pt,Et,Ht,It);C.generateMipmaps=!1}else if(et){if(Bt){let Lt=st(dt);e.texStorage2D(i.TEXTURE_2D,Xt,Pt,Lt.width,Lt.height)}kt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Ht,dt)}else e.texImage2D(i.TEXTURE_2D,0,Pt,Et,Ht,dt);g(C)&&m(q),ht.__version=J.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function $(P,C,z){if(C.image.length!==6)return;let q=j(P,C),Q=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+z);let J=n.get(Q);if(Q.version!==J.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let ht=ve.getPrimaries(ve.workingColorSpace),pt=C.colorSpace===Wi?null:ve.getPrimaries(C.colorSpace),Tt=C.colorSpace===Wi||ht===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ct=C.isCompressedTexture||C.image[0].isCompressedTexture,dt=C.image[0]&&C.image[0].isDataTexture,Et=[];for(let Rt=0;Rt<6;Rt++)!Ct&&!dt?Et[Rt]=y(C.image[Rt],!0,s.maxCubemapSize):Et[Rt]=dt?C.image[Rt].image:C.image[Rt],Et[Rt]=zt(C,Et[Rt]);let Ht=Et[0],Pt=o.convert(C.format,C.colorSpace),It=o.convert(C.type),Ut=_(C.internalFormat,Pt,It,C.colorSpace),et=C.isVideoTexture!==!0,Bt=J.__version===void 0||q===!0,kt=Q.dataReady,Xt=x(C,Ht);bt(i.TEXTURE_CUBE_MAP,C);let Lt;if(Ct){et&&Bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,Ut,Ht.width,Ht.height);for(let Rt=0;Rt<6;Rt++){Lt=Et[Rt].mipmaps;for(let Zt=0;Zt<Lt.length;Zt++){let ce=Lt[Zt];C.format!==Zn?Pt!==null?et?kt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,0,0,ce.width,ce.height,Pt,ce.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,Ut,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,0,0,ce.width,ce.height,Pt,It,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt,Ut,ce.width,ce.height,0,Pt,It,ce.data)}}}else{if(Lt=C.mipmaps,et&&Bt){Lt.length>0&&Xt++;let Rt=st(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Xt,Ut,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(dt){et?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Et[Rt].width,Et[Rt].height,Pt,It,Et[Rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ut,Et[Rt].width,Et[Rt].height,0,Pt,It,Et[Rt].data);for(let Zt=0;Zt<Lt.length;Zt++){let Re=Lt[Zt].image[Rt].image;et?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,0,0,Re.width,Re.height,Pt,It,Re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,Ut,Re.width,Re.height,0,Pt,It,Re.data)}}else{et?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,Pt,It,Et[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Ut,Pt,It,Et[Rt]);for(let Zt=0;Zt<Lt.length;Zt++){let ce=Lt[Zt];et?kt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,0,0,Pt,It,ce.image[Rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Zt+1,Ut,Pt,It,ce.image[Rt])}}}g(C)&&m(i.TEXTURE_CUBE_MAP),J.__version=Q.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ut(P,C,z,q,Q,J){let ht=o.convert(z.format,z.colorSpace),pt=o.convert(z.type),Tt=_(z.internalFormat,ht,pt,z.colorSpace),Ct=n.get(C),dt=n.get(z);if(dt.__renderTarget=C,!Ct.__hasExternalTextures){let Et=Math.max(1,C.width>>J),Ht=Math.max(1,C.height>>J);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,Tt,Et,Ht,C.depth,0,ht,pt,null):e.texImage2D(Q,J,Tt,Et,Ht,0,ht,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),mt(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Q,dt.__webglTexture,0,Dt(C)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Q,dt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function N(P,C,z){if(i.bindRenderbuffer(i.RENDERBUFFER,P),C.depthBuffer){let q=C.depthTexture,Q=q&&q.isDepthTexture?q.type:null,J=v(C.stencilBuffer,Q),ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=Dt(C);mt(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,C.width,C.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,J,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,P)}else{let q=C.textures;for(let Q=0;Q<q.length;Q++){let J=q[Q],ht=o.convert(J.format,J.colorSpace),pt=o.convert(J.type),Tt=_(J.internalFormat,ht,pt,J.colorSpace),Ct=Dt(C);z&&mt(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Tt,C.width,C.height):mt(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Tt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function F(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(C.depthTexture);q.__renderTarget=C,(!q.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),L(C.depthTexture,0);let Q=q.__webglTexture,J=Dt(C);if(C.depthTexture.format===_o)mt(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(C.depthTexture.format===Uo)mt(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function V(P){let C=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==P.depthTexture){let q=P.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),q){let Q=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),C.__depthDisposeCallback=Q}C.__boundDepthTexture=q}if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let q=P.texture.mipmaps;q&&q.length>0?F(C.__webglFramebuffer[0],P):F(C.__webglFramebuffer,P)}else if(z){C.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[q]),C.__webglDepthbuffer[q]===void 0)C.__webglDepthbuffer[q]=i.createRenderbuffer(),N(C.__webglDepthbuffer[q],P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}}else{let q=P.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),N(C.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function G(P,C,z){let q=n.get(P);C!==void 0&&ut(q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&V(P)}function D(P){let C=P.texture,z=n.get(P),q=n.get(C);P.addEventListener("dispose",E);let Q=P.textures,J=P.isWebGLCubeRenderTarget===!0,ht=Q.length>1;if(ht||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=C.version,r.memory.textures++),J){z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer[pt]=[];for(let Tt=0;Tt<C.mipmaps.length;Tt++)z.__webglFramebuffer[pt][Tt]=i.createFramebuffer()}else z.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){z.__webglFramebuffer=[];for(let pt=0;pt<C.mipmaps.length;pt++)z.__webglFramebuffer[pt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ht)for(let pt=0,Tt=Q.length;pt<Tt;pt++){let Ct=n.get(Q[pt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&mt(P)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){let Tt=Q[pt];z.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pt]);let Ct=o.convert(Tt.format,Tt.colorSpace),dt=o.convert(Tt.type),Et=_(Tt.internalFormat,Ct,dt,Tt.colorSpace,P.isXRRenderTarget===!0),Ht=Dt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Et,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,z.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),N(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),bt(i.TEXTURE_CUBE_MAP,C);for(let pt=0;pt<6;pt++)if(C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)ut(z.__webglFramebuffer[pt][Tt],P,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Tt);else ut(z.__webglFramebuffer[pt],P,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let pt=0,Tt=Q.length;pt<Tt;pt++){let Ct=Q[pt],dt=n.get(Ct),Et=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,dt.__webglTexture),bt(Et,Ct),ut(z.__webglFramebuffer,P,Ct,i.COLOR_ATTACHMENT0+pt,Et,0),g(Ct)&&m(Et)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,q.__webglTexture),bt(pt,C),C.mipmaps&&C.mipmaps.length>0)for(let Tt=0;Tt<C.mipmaps.length;Tt++)ut(z.__webglFramebuffer[Tt],P,C,i.COLOR_ATTACHMENT0,pt,Tt);else ut(z.__webglFramebuffer,P,C,i.COLOR_ATTACHMENT0,pt,0);g(C)&&m(pt),e.unbindTexture()}P.depthBuffer&&V(P)}function ct(P){let C=P.textures;for(let z=0,q=C.length;z<q;z++){let Q=C[z];if(g(Q)){let J=M(P),ht=n.get(Q).__webglTexture;e.bindTexture(J,ht),m(J),e.unbindTexture()}}}let Z=[],rt=[];function ft(P){if(P.samples>0){if(mt(P)===!1){let C=P.textures,z=P.width,q=P.height,Q=i.COLOR_BUFFER_BIT,J=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(P),pt=C.length>1;if(pt)for(let Ct=0;Ct<C.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let Tt=P.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Ct=0;Ct<C.length;Ct++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]);let dt=n.get(C[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Q,i.NEAREST),a===!0&&(Z.length=0,rt.length=0,Z.push(i.COLOR_ATTACHMENT0+Ct),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Z.push(J),rt.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Ct=0;Ct<C.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,ht.__webglColorRenderbuffer[Ct]);let dt=n.get(C[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&a){let C=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Dt(P){return Math.min(s.maxSamples,P.samples)}function mt(P){let C=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function wt(P){let C=r.render.frame;u.get(P)!==C&&(u.set(P,C),P.update())}function zt(P,C){let z=P.colorSpace,q=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Cs&&z!==Wi&&(ve.getTransfer(z)===Ie?(q!==Zn||Q!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),C}function st(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=G,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=mt}function by(i,t){function e(n,s=Wi){let o,r=ve.getTransfer(s);if(n===li)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===$l)return i.BYTE;if(n===Jl)return i.SHORT;if(n===Io)return i.UNSIGNED_SHORT;if(n===ac)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===Do)return i.HALF_FLOAT;if(n===Ql)return i.ALPHA;if(n===th)return i.RGB;if(n===Zn)return i.RGBA;if(n===_o)return i.DEPTH_COMPONENT;if(n===Uo)return i.DEPTH_STENCIL;if(n===hc)return i.RED;if(n===uc)return i.RED_INTEGER;if(n===eh)return i.RG;if(n===fc)return i.RG_INTEGER;if(n===dc)return i.RGBA_INTEGER;if(n===Nr||n===Fr||n===Br||n===Or)if(r===Ie)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Nr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Nr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Or)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pc||n===mc||n===gc||n===yc)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===pc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_c||n===xc||n===Mc)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===_c||n===xc)return r===Ie?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Mc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vc||n===bc||n===Sc||n===wc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Uc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===vc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ac)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uc)return r===Ie?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nc||n===Fc||n===Bc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Nc)return r===Ie?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oc||n===zc||n===kc||n===Hc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Oc)return o.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Lo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
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

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new zn({vertexShader:Sy,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Gt(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends _i{constructor(t,e){super();let n=this,s=null,o=1,r=null,c="local-floor",a=1,l=null,u=null,h=null,d=null,f=null,p=null,y=typeof XRWebGLBinding<"u",g=new wh,m={},M=e.getContextAttributes(),_=null,v=null,x=[],b=[],E=new Jt,A=null,w=new rn;w.viewport=new we;let S=new rn;S.viewport=new we;let R=[w,S],I=new Za,U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=x[K];return $===void 0&&($=new So,x[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=x[K];return $===void 0&&($=new So,x[K]=$),$.getGripSpace()},this.getHand=function(K){let $=x[K];return $===void 0&&($=new So,x[K]=$),$.getHandSpace()};function L(K){let $=b.indexOf(K.inputSource);if($===-1)return;let ut=x[$];ut!==void 0&&(ut.update(K.inputSource,K.frame,l||r),ut.dispatchEvent({type:K.type,data:K.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let K=0;K<x.length;K++){let $=b[K];$!==null&&(b[K]=null,x[K].disconnect($))}U=null,W=null,g.reset();for(let K in m)delete m[K];t.setRenderTarget(_),f=null,d=null,h=null,s=null,v=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),M.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,N=null,F=null;M.depth&&(F=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=M.stencil?Uo:_o,N=M.stencil?Lo:ps);let V={colorFormat:e.RGBA8,depthFormat:F,scaleFactor:o};h=this.getBinding(),d=h.createProjectionLayer(V),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Yn(d.textureWidth,d.textureHeight,{format:Zn,type:li,depthTexture:new mr(d.textureWidth,d.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await s.requestReferenceSpace(c),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(K){for(let $=0;$<K.removed.length;$++){let ut=K.removed[$],N=b.indexOf(ut);N>=0&&(b[N]=null,x[N].disconnect(ut))}for(let $=0;$<K.added.length;$++){let ut=K.added[$],N=b.indexOf(ut);if(N===-1){for(let V=0;V<x.length;V++)if(V>=b.length){b.push(ut),N=V;break}else if(b[V]===null){b[V]=ut,N=V;break}if(N===-1)break}let F=x[N];F&&F.connect(ut)}}let k=new Y,tt=new Y;function nt(K,$,ut){k.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(ut.matrixWorld);let N=k.distanceTo(tt),F=$.projectionMatrix.elements,V=ut.projectionMatrix.elements,G=F[14]/(F[10]-1),D=F[14]/(F[10]+1),ct=(F[9]+1)/F[5],Z=(F[9]-1)/F[5],rt=(F[8]-1)/F[0],ft=(V[8]+1)/V[0],Dt=G*rt,mt=G*ft,wt=N/(-rt+ft),zt=wt*-rt;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(zt),K.translateZ(wt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),F[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let st=G+wt,P=D+wt,C=Dt-zt,z=mt+(N-zt),q=ct*D/P*st,Q=Z*D/P*st;K.projectionMatrix.makePerspective(C,z,q,Q,st,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function it(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,ut=K.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),I.near=S.near=w.near=$,I.far=S.far=w.far=ut,(U!==I.near||W!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,W=I.far),I.layers.mask=K.layers.mask|6,w.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;let N=K.parent,F=I.cameras;it(I,N);for(let V=0;V<F.length;V++)it(F[V],N);F.length===2?nt(I,w,S):I.projectionMatrix.copy(w.projectionMatrix),bt(K,I,N)};function bt(K,$,ut){ut===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(ut.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=xo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return a},this.setFoveation=function(K){a=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(K){return m[K]};let j=null;function Mt(K,$){if(u=$.getViewerPose(l||r),p=$,u!==null){let ut=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let N=!1;ut.length!==I.cameras.length&&(I.cameras.length=0,N=!0);for(let D=0;D<ut.length;D++){let ct=ut[D],Z=null;if(f!==null)Z=f.getViewport(ct);else{let ft=h.getViewSubImage(d,ct);Z=ft.viewport,D===0&&(t.setRenderTargetTextures(v,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(v))}let rt=R[D];rt===void 0&&(rt=new rn,rt.layers.enable(D),rt.viewport=new we,R[D]=rt),rt.matrix.fromArray(ct.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ct.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Z.x,Z.y,Z.width,Z.height),D===0&&(I.matrix.copy(rt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),N===!0&&I.cameras.push(rt)}let F=s.enabledFeatures;if(F&&F.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let D=h.getDepthInformation(ut[0]);D&&D.isValid&&D.texture&&g.init(D,s.renderState)}if(F&&F.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ut.length;D++){let ct=ut[D].camera;if(ct){let Z=m[ct];Z||(Z=new gr,m[ct]=Z);let rt=h.getCameraImage(ct);Z.sourceTexture=rt}}}}for(let ut=0;ut<x.length;ut++){let N=b[ut],F=x[ut];N!==null&&F!==void 0&&F.update(N,$,l||r)}j&&j(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}let vt=new zf;vt.setAnimationLoop(Mt),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}},ks=new In,Ey=new xe;function Ty(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,ah(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),h(g,m)):m.isMeshPhongMaterial?(o(g,m),u(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),y(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&c(g,m)):m.isPointsMaterial?a(g,m,M,_):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,ks.copy(v),ks.x*=-1,ks.y*=-1,ks.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(ks)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function c(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function a(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ay(i,t,e,n){let s={},o={},r=[],c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=s[M.id];v===void 0&&(p(M),v=u(M),s[M.id]=v,M.addEventListener("dispose",g));let x=_.program;n.updateUBOMapping(M,x);let b=t.render.frame;o[M.id]!==b&&(d(M),o[M.id]=b)}function u(M){let _=h();M.__bindingPointIndex=_;let v=i.createBuffer(),x=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,x,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function h(){for(let M=0;M<c;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],v=M.uniforms,x=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,E=v.length;b<E;b++){let A=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,S=A.length;w<S;w++){let R=A[w];if(f(R,b,w,x)===!0){let I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],W=0;for(let L=0;L<U.length;L++){let O=U[L],H=y(O);typeof O=="number"||typeof O=="boolean"?(R.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,I+W,R.__data)):O.isMatrix3?(R.__data[0]=O.elements[0],R.__data[1]=O.elements[1],R.__data[2]=O.elements[2],R.__data[3]=0,R.__data[4]=O.elements[3],R.__data[5]=O.elements[4],R.__data[6]=O.elements[5],R.__data[7]=0,R.__data[8]=O.elements[6],R.__data[9]=O.elements[7],R.__data[10]=O.elements[8],R.__data[11]=0):(O.toArray(R.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,_,v,x){let b=M.value,E=_+"_"+v;if(x[E]===void 0)return typeof b=="number"||typeof b=="boolean"?x[E]=b:x[E]=b.clone(),!0;{let A=x[E];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return x[E]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function p(M){let _=M.uniforms,v=0,x=16;for(let E=0,A=_.length;E<A;E++){let w=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,R=w.length;S<R;S++){let I=w[S],U=Array.isArray(I.value)?I.value:[I.value];for(let W=0,L=U.length;W<L;W++){let O=U[W],H=y(O),k=v%x,tt=k%H.boundary,nt=k+tt;v+=tt,nt!==0&&x-nt<H.storage&&(v+=x-nt),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=H.storage}}}let b=v%x;return b>0&&(v+=x-b),M.__size=v,M.__cache={},this}function y(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete o[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:a,update:l,dispose:m}}var Gc=class{constructor(t={}){let{canvas:e=sf(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:c=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let p=new Uint32Array(4),y=new Int32Array(4),g=null,m=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,x=!1;this._outputColorSpace=ke;let b=0,E=0,A=null,w=-1,S=null,R=new we,I=new we,U=null,W=new ee(0),L=0,O=e.width,H=e.height,k=1,tt=null,nt=null,it=new we(0,0,O,H),bt=new we(0,0,O,H),j=!1,Mt=new Eo,vt=!1,K=!1,$=new xe,ut=new Y,N=new we,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function G(){return A===null?k:1}let D=n;function ct(B,at){return e.getContext(B,at)}try{let B={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Xt,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),D===null){let at="webgl2";if(D=ct(at,B),D===null)throw ct(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let Z,rt,ft,Dt,mt,wt,zt,st,P,C,z,q,Q,J,ht,pt,Tt,Ct,dt,Et,Ht,Pt,It,Ut;function et(){Z=new X1(D),Z.init(),Pt=new by(D,Z),rt=new O1(D,Z,t,Pt),ft=new My(D,Z),rt.reversedDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),Dt=new Z1(D),mt=new ay,wt=new vy(D,Z,ft,mt,rt,Pt,Dt),zt=new k1(v),st=new q1(v),P=new tp(D),It=new F1(D,P),C=new Y1(D,P,Dt,It),z=new J1(D,C,P,Dt),dt=new $1(D,rt,wt),pt=new z1(mt),q=new ry(v,zt,st,Z,rt,It,pt),Q=new Ty(v,mt),J=new ly,ht=new my(Z),Ct=new N1(v,zt,st,ft,z,f,a),Tt=new _y(v,z,rt),Ut=new Ay(D,Dt,rt,ft),Et=new B1(D,Z,Dt),Ht=new G1(D,Z,Dt),Dt.programs=q.programs,v.capabilities=rt,v.extensions=Z,v.properties=mt,v.renderLists=J,v.shadowMap=Tt,v.state=ft,v.info=Dt}et();let Bt=new Eh(v,D);this.xr=Bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let B=Z.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){let B=Z.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(B){B!==void 0&&(k=B,this.setSize(O,H,!1))},this.getSize=function(B){return B.set(O,H)},this.setSize=function(B,at,_t=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=B,H=at,e.width=Math.floor(B*k),e.height=Math.floor(at*k),_t===!0&&(e.style.width=B+"px",e.style.height=at+"px"),this.setViewport(0,0,B,at)},this.getDrawingBufferSize=function(B){return B.set(O*k,H*k).floor()},this.setDrawingBufferSize=function(B,at,_t){O=B,H=at,k=_t,e.width=Math.floor(B*_t),e.height=Math.floor(at*_t),this.setViewport(0,0,B,at)},this.getCurrentViewport=function(B){return B.copy(R)},this.getViewport=function(B){return B.copy(it)},this.setViewport=function(B,at,_t,xt){B.isVector4?it.set(B.x,B.y,B.z,B.w):it.set(B,at,_t,xt),ft.viewport(R.copy(it).multiplyScalar(k).round())},this.getScissor=function(B){return B.copy(bt)},this.setScissor=function(B,at,_t,xt){B.isVector4?bt.set(B.x,B.y,B.z,B.w):bt.set(B,at,_t,xt),ft.scissor(I.copy(bt).multiplyScalar(k).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(B){ft.setScissorTest(j=B)},this.setOpaqueSort=function(B){tt=B},this.setTransparentSort=function(B){nt=B},this.getClearColor=function(B){return B.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(B=!0,at=!0,_t=!0){let xt=0;if(B){let lt=!1;if(A!==null){let Nt=A.texture.format;lt=Nt===dc||Nt===fc||Nt===uc}if(lt){let Nt=A.texture.type,Vt=Nt===li||Nt===ps||Nt===Io||Nt===Lo||Nt===cc||Nt===lc,$t=Ct.getClearColor(),Yt=Ct.getClearAlpha(),ne=$t.r,ie=$t.g,te=$t.b;Vt?(p[0]=ne,p[1]=ie,p[2]=te,p[3]=Yt,D.clearBufferuiv(D.COLOR,0,p)):(y[0]=ne,y[1]=ie,y[2]=te,y[3]=Yt,D.clearBufferiv(D.COLOR,0,y))}else xt|=D.COLOR_BUFFER_BIT}at&&(xt|=D.DEPTH_BUFFER_BIT),_t&&(xt|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(xt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Xt,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Ct.dispose(),J.dispose(),ht.dispose(),mt.dispose(),zt.dispose(),st.dispose(),z.dispose(),It.dispose(),Ut.dispose(),q.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Nn),Bt.removeEventListener("sessionend",Vo),Wn.stop()};function kt(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Xt(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let B=Dt.autoReset,at=Tt.enabled,_t=Tt.autoUpdate,xt=Tt.needsUpdate,lt=Tt.type;et(),Dt.autoReset=B,Tt.enabled=at,Tt.autoUpdate=_t,Tt.needsUpdate=xt,Tt.type=lt}function Lt(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Rt(B){let at=B.target;at.removeEventListener("dispose",Rt),Zt(at)}function Zt(B){ce(B),mt.remove(B)}function ce(B){let at=mt.get(B).programs;at!==void 0&&(at.forEach(function(_t){q.releaseProgram(_t)}),B.isShaderMaterial&&q.releaseShaderCache(B))}this.renderBufferDirect=function(B,at,_t,xt,lt,Nt){at===null&&(at=F);let Vt=lt.isMesh&&lt.matrixWorld.determinant()<0,$t=jr(B,at,_t,xt,lt);ft.setMaterial(xt,Vt);let Yt=_t.index,ne=1;if(xt.wireframe===!0){if(Yt=C.getWireframeAttribute(_t),Yt===void 0)return;ne=2}let ie=_t.drawRange,te=_t.attributes.position,he=ie.start*ne,Ce=(ie.start+ie.count)*ne;Nt!==null&&(he=Math.max(he,Nt.start*ne),Ce=Math.min(Ce,(Nt.start+Nt.count)*ne)),Yt!==null?(he=Math.max(he,0),Ce=Math.min(Ce,Yt.count)):te!=null&&(he=Math.max(he,0),Ce=Math.min(Ce,te.count));let X=Ce-he;if(X<0||X===1/0)return;It.setup(lt,xt,$t,_t,Yt);let yt,gt=Et;if(Yt!==null&&(yt=P.get(Yt),gt=Ht,gt.setIndex(yt)),lt.isMesh)xt.wireframe===!0?(ft.setLineWidth(xt.wireframeLinewidth*G()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(lt.isLine){let St=xt.linewidth;St===void 0&&(St=1),ft.setLineWidth(St*G()),lt.isLineSegments?gt.setMode(D.LINES):lt.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else lt.isPoints?gt.setMode(D.POINTS):lt.isSprite&&gt.setMode(D.TRIANGLES);if(lt.isBatchedMesh)if(lt._multiDrawInstances!==null)Mo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount,lt._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))gt.renderMultiDraw(lt._multiDrawStarts,lt._multiDrawCounts,lt._multiDrawCount);else{let St=lt._multiDrawStarts,Ft=lt._multiDrawCounts,Ot=lt._multiDrawCount,ae=Yt?P.get(Yt).bytesPerElement:1,me=mt.get(xt).currentProgram.getUniforms();for(let jt=0;jt<Ot;jt++)me.setValue(D,"_gl_DrawID",jt),gt.render(St[jt]/ae,Ft[jt])}else if(lt.isInstancedMesh)gt.renderInstances(he,X,lt.count);else if(_t.isInstancedBufferGeometry){let St=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,Ft=Math.min(_t.instanceCount,St);gt.renderInstances(he,X,Ft)}else gt.render(he,X)};function Re(B,at,_t){B.transparent===!0&&B.side===qe&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,_s(B,at,_t),B.side=zi,B.needsUpdate=!0,_s(B,at,_t),B.side=qe):_s(B,at,_t)}this.compile=function(B,at,_t=null){_t===null&&(_t=B),m=ht.get(_t),m.init(at),_.push(m),_t.traverseVisible(function(lt){lt.isLight&&lt.layers.test(at.layers)&&(m.pushLight(lt),lt.castShadow&&m.pushShadow(lt))}),B!==_t&&B.traverseVisible(function(lt){lt.isLight&&lt.layers.test(at.layers)&&(m.pushLight(lt),lt.castShadow&&m.pushShadow(lt))}),m.setupLights();let xt=new Set;return B.traverse(function(lt){if(!(lt.isMesh||lt.isPoints||lt.isLine||lt.isSprite))return;let Nt=lt.material;if(Nt)if(Array.isArray(Nt))for(let Vt=0;Vt<Nt.length;Vt++){let $t=Nt[Vt];Re($t,_t,lt),xt.add($t)}else Re(Nt,_t,lt),xt.add(Nt)}),m=_.pop(),xt},this.compileAsync=function(B,at,_t=null){let xt=this.compile(B,at,_t);return new Promise(lt=>{function Nt(){if(xt.forEach(function(Vt){mt.get(Vt).currentProgram.isReady()&&xt.delete(Vt)}),xt.size===0){lt(B);return}setTimeout(Nt,10)}Z.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Me=null;function ei(B){Me&&Me(B)}function Nn(){Wn.stop()}function Vo(){Wn.start()}let Wn=new zf;Wn.setAnimationLoop(ei),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(B){Me=B,Bt.setAnimationLoop(B),B===null?Wn.stop():Wn.start()},Bt.addEventListener("sessionstart",Nn),Bt.addEventListener("sessionend",Vo),this.render=function(B,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(at),at=Bt.getCamera()),B.isScene===!0&&B.onBeforeRender(v,B,at,A),m=ht.get(B,_.length),m.init(at),_.push(m),$.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),Mt.setFromProjectionMatrix($,ri,at.reversedDepth),K=this.localClippingEnabled,vt=pt.init(this.clippingPlanes,K),g=J.get(B,M.length),g.init(),M.push(g),Bt.enabled===!0&&Bt.isPresenting===!0){let Nt=v.xr.getDepthSensingMesh();Nt!==null&&mi(Nt,at,-1/0,v.sortObjects)}mi(B,at,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,nt),V=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,V&&Ct.addToRenderList(g,B),this.info.render.frame++,vt===!0&&pt.beginShadows();let _t=m.state.shadowsArray;Tt.render(_t,B,at),vt===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();let xt=g.opaque,lt=g.transmissive;if(m.setupLights(),at.isArrayCamera){let Nt=at.cameras;if(lt.length>0)for(let Vt=0,$t=Nt.length;Vt<$t;Vt++){let Yt=Nt[Vt];Zr(xt,lt,B,Yt)}V&&Ct.render(B);for(let Vt=0,$t=Nt.length;Vt<$t;Vt++){let Yt=Nt[Vt];Js(g,B,Yt,Yt.viewport)}}else lt.length>0&&Zr(xt,lt,B,at),V&&Ct.render(B),Js(g,B,at);A!==null&&E===0&&(wt.updateMultisampleRenderTarget(A),wt.updateRenderTargetMipmap(A)),B.isScene===!0&&B.onAfterRender(v,B,at),It.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(m=_[_.length-1],vt===!0&&pt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function mi(B,at,_t,xt){if(B.visible===!1)return;if(B.layers.test(at.layers)){if(B.isGroup)_t=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(at);else if(B.isLight)m.pushLight(B),B.castShadow&&m.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||Mt.intersectsSprite(B)){xt&&N.setFromMatrixPosition(B.matrixWorld).applyMatrix4($);let Vt=z.update(B),$t=B.material;$t.visible&&g.push(B,Vt,$t,_t,N.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||Mt.intersectsObject(B))){let Vt=z.update(B),$t=B.material;if(xt&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),N.copy(B.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),N.copy(Vt.boundingSphere.center)),N.applyMatrix4(B.matrixWorld).applyMatrix4($)),Array.isArray($t)){let Yt=Vt.groups;for(let ne=0,ie=Yt.length;ne<ie;ne++){let te=Yt[ne],he=$t[te.materialIndex];he&&he.visible&&g.push(B,Vt,he,_t,N.z,te)}}else $t.visible&&g.push(B,Vt,$t,_t,N.z,null)}}let Nt=B.children;for(let Vt=0,$t=Nt.length;Vt<$t;Vt++)mi(Nt[Vt],at,_t,xt)}function Js(B,at,_t,xt){let lt=B.opaque,Nt=B.transmissive,Vt=B.transparent;m.setupLightsView(_t),vt===!0&&pt.setGlobalState(v.clippingPlanes,_t),xt&&ft.viewport(R.copy(xt)),lt.length>0&&js(lt,at,_t),Nt.length>0&&js(Nt,at,_t),Vt.length>0&&js(Vt,at,_t),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Zr(B,at,_t,xt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[xt.id]===void 0&&(m.state.transmissionRenderTarget[xt.id]=new Yn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Do:li,minFilter:ds,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace}));let Nt=m.state.transmissionRenderTarget[xt.id],Vt=xt.viewport||R;Nt.setSize(Vt.z*v.transmissionResolutionScale,Vt.w*v.transmissionResolutionScale);let $t=v.getRenderTarget(),Yt=v.getActiveCubeFace(),ne=v.getActiveMipmapLevel();v.setRenderTarget(Nt),v.getClearColor(W),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear(),V&&Ct.render(_t);let ie=v.toneMapping;v.toneMapping=Vi;let te=xt.viewport;if(xt.viewport!==void 0&&(xt.viewport=void 0),m.setupLightsView(xt),vt===!0&&pt.setGlobalState(v.clippingPlanes,xt),js(B,_t,xt),wt.updateMultisampleRenderTarget(Nt),wt.updateRenderTargetMipmap(Nt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ce=0,X=at.length;Ce<X;Ce++){let yt=at[Ce],gt=yt.object,St=yt.geometry,Ft=yt.material,Ot=yt.group;if(Ft.side===qe&&gt.layers.test(xt.layers)){let ae=Ft.side;Ft.side=pn,Ft.needsUpdate=!0,$r(gt,_t,xt,St,Ft,Ot),Ft.side=ae,Ft.needsUpdate=!0,he=!0}}he===!0&&(wt.updateMultisampleRenderTarget(Nt),wt.updateRenderTargetMipmap(Nt))}v.setRenderTarget($t,Yt,ne),v.setClearColor(W,L),te!==void 0&&(xt.viewport=te),v.toneMapping=ie}function js(B,at,_t){let xt=at.isScene===!0?at.overrideMaterial:null;for(let lt=0,Nt=B.length;lt<Nt;lt++){let Vt=B[lt],$t=Vt.object,Yt=Vt.geometry,ne=Vt.group,ie=Vt.material;ie.allowOverride===!0&&xt!==null&&(ie=xt),$t.layers.test(_t.layers)&&$r($t,at,_t,Yt,ie,ne)}}function $r(B,at,_t,xt,lt,Nt){B.onBeforeRender(v,at,_t,xt,lt,Nt),B.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),lt.onBeforeRender(v,at,_t,xt,B,Nt),lt.transparent===!0&&lt.side===qe&&lt.forceSinglePass===!1?(lt.side=pn,lt.needsUpdate=!0,v.renderBufferDirect(_t,at,xt,lt,B,Nt),lt.side=zi,lt.needsUpdate=!0,v.renderBufferDirect(_t,at,xt,lt,B,Nt),lt.side=qe):v.renderBufferDirect(_t,at,xt,lt,B,Nt),B.onAfterRender(v,at,_t,xt,lt,Nt)}function _s(B,at,_t){at.isScene!==!0&&(at=F);let xt=mt.get(B),lt=m.state.lights,Nt=m.state.shadowsArray,Vt=lt.state.version,$t=q.getParameters(B,lt.state,Nt,at,_t),Yt=q.getProgramCacheKey($t),ne=xt.programs;xt.environment=B.isMeshStandardMaterial?at.environment:null,xt.fog=at.fog,xt.envMap=(B.isMeshStandardMaterial?st:zt).get(B.envMap||xt.environment),xt.envMapRotation=xt.environment!==null&&B.envMap===null?at.environmentRotation:B.envMapRotation,ne===void 0&&(B.addEventListener("dispose",Rt),ne=new Map,xt.programs=ne);let ie=ne.get(Yt);if(ie!==void 0){if(xt.currentProgram===ie&&xt.lightsStateVersion===Vt)return xs(B,$t),ie}else $t.uniforms=q.getUniforms(B),B.onBeforeCompile($t,v),ie=q.acquireProgram($t,Yt),ne.set(Yt,ie),xt.uniforms=$t.uniforms;let te=xt.uniforms;return(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(te.clippingPlanes=pt.uniform),xs(B,$t),xt.needsLights=Ks(B),xt.lightsStateVersion=Vt,xt.needsLights&&(te.ambientLightColor.value=lt.state.ambient,te.lightProbe.value=lt.state.probe,te.directionalLights.value=lt.state.directional,te.directionalLightShadows.value=lt.state.directionalShadow,te.spotLights.value=lt.state.spot,te.spotLightShadows.value=lt.state.spotShadow,te.rectAreaLights.value=lt.state.rectArea,te.ltc_1.value=lt.state.rectAreaLTC1,te.ltc_2.value=lt.state.rectAreaLTC2,te.pointLights.value=lt.state.point,te.pointLightShadows.value=lt.state.pointShadow,te.hemisphereLights.value=lt.state.hemi,te.directionalShadowMap.value=lt.state.directionalShadowMap,te.directionalShadowMatrix.value=lt.state.directionalShadowMatrix,te.spotShadowMap.value=lt.state.spotShadowMap,te.spotLightMatrix.value=lt.state.spotLightMatrix,te.spotLightMap.value=lt.state.spotLightMap,te.pointShadowMap.value=lt.state.pointShadowMap,te.pointShadowMatrix.value=lt.state.pointShadowMatrix),xt.currentProgram=ie,xt.uniformsList=null,ie}function Jr(B){if(B.uniformsList===null){let at=B.currentProgram.getUniforms();B.uniformsList=Bo.seqWithValue(at.seq,B.uniforms)}return B.uniformsList}function xs(B,at){let _t=mt.get(B);_t.outputColorSpace=at.outputColorSpace,_t.batching=at.batching,_t.batchingColor=at.batchingColor,_t.instancing=at.instancing,_t.instancingColor=at.instancingColor,_t.instancingMorph=at.instancingMorph,_t.skinning=at.skinning,_t.morphTargets=at.morphTargets,_t.morphNormals=at.morphNormals,_t.morphColors=at.morphColors,_t.morphTargetsCount=at.morphTargetsCount,_t.numClippingPlanes=at.numClippingPlanes,_t.numIntersection=at.numClipIntersection,_t.vertexAlphas=at.vertexAlphas,_t.vertexTangents=at.vertexTangents,_t.toneMapping=at.toneMapping}function jr(B,at,_t,xt,lt){at.isScene!==!0&&(at=F),wt.resetTextureUnits();let Nt=at.fog,Vt=xt.isMeshStandardMaterial?at.environment:null,$t=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Cs,Yt=(xt.isMeshStandardMaterial?st:zt).get(xt.envMap||Vt),ne=xt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,ie=!!_t.attributes.tangent&&(!!xt.normalMap||xt.anisotropy>0),te=!!_t.morphAttributes.position,he=!!_t.morphAttributes.normal,Ce=!!_t.morphAttributes.color,X=Vi;xt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(X=v.toneMapping);let yt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,gt=yt!==void 0?yt.length:0,St=mt.get(xt),Ft=m.state.lights;if(vt===!0&&(K===!0||B!==S)){let se=B===S&&xt.id===w;pt.setState(xt,B,se)}let Ot=!1;xt.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Ft.state.version||St.outputColorSpace!==$t||lt.isBatchedMesh&&St.batching===!1||!lt.isBatchedMesh&&St.batching===!0||lt.isBatchedMesh&&St.batchingColor===!0&&lt.colorTexture===null||lt.isBatchedMesh&&St.batchingColor===!1&&lt.colorTexture!==null||lt.isInstancedMesh&&St.instancing===!1||!lt.isInstancedMesh&&St.instancing===!0||lt.isSkinnedMesh&&St.skinning===!1||!lt.isSkinnedMesh&&St.skinning===!0||lt.isInstancedMesh&&St.instancingColor===!0&&lt.instanceColor===null||lt.isInstancedMesh&&St.instancingColor===!1&&lt.instanceColor!==null||lt.isInstancedMesh&&St.instancingMorph===!0&&lt.morphTexture===null||lt.isInstancedMesh&&St.instancingMorph===!1&&lt.morphTexture!==null||St.envMap!==Yt||xt.fog===!0&&St.fog!==Nt||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==pt.numPlanes||St.numIntersection!==pt.numIntersection)||St.vertexAlphas!==ne||St.vertexTangents!==ie||St.morphTargets!==te||St.morphNormals!==he||St.morphColors!==Ce||St.toneMapping!==X||St.morphTargetsCount!==gt)&&(Ot=!0):(Ot=!0,St.__version=xt.version);let ae=St.currentProgram;Ot===!0&&(ae=_s(xt,at,lt));let me=!1,jt=!1,Xe=!1,Kt=ae.getUniforms(),Se=St.uniforms;if(ft.useProgram(ae.program)&&(me=!0,jt=!0,Xe=!0),xt.id!==w&&(w=xt.id,jt=!0),me||S!==B){ft.buffers.depth.getReversed()&&B.reversedDepth!==!0&&(B._reversedDepth=!0,B.updateProjectionMatrix()),Kt.setValue(D,"projectionMatrix",B.projectionMatrix),Kt.setValue(D,"viewMatrix",B.matrixWorldInverse);let pe=Kt.map.cameraPosition;pe!==void 0&&pe.setValue(D,ut.setFromMatrixPosition(B.matrixWorld)),rt.logarithmicDepthBuffer&&Kt.setValue(D,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),(xt.isMeshPhongMaterial||xt.isMeshToonMaterial||xt.isMeshLambertMaterial||xt.isMeshBasicMaterial||xt.isMeshStandardMaterial||xt.isShaderMaterial)&&Kt.setValue(D,"isOrthographic",B.isOrthographicCamera===!0),S!==B&&(S=B,jt=!0,Xe=!0)}if(lt.isSkinnedMesh){Kt.setOptional(D,lt,"bindMatrix"),Kt.setOptional(D,lt,"bindMatrixInverse");let se=lt.skeleton;se&&(se.boneTexture===null&&se.computeBoneTexture(),Kt.setValue(D,"boneTexture",se.boneTexture,wt))}lt.isBatchedMesh&&(Kt.setOptional(D,lt,"batchingTexture"),Kt.setValue(D,"batchingTexture",lt._matricesTexture,wt),Kt.setOptional(D,lt,"batchingIdTexture"),Kt.setValue(D,"batchingIdTexture",lt._indirectTexture,wt),Kt.setOptional(D,lt,"batchingColorTexture"),lt._colorsTexture!==null&&Kt.setValue(D,"batchingColorTexture",lt._colorsTexture,wt));let Ne=_t.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&dt.update(lt,_t,ae),(jt||St.receiveShadow!==lt.receiveShadow)&&(St.receiveShadow=lt.receiveShadow,Kt.setValue(D,"receiveShadow",lt.receiveShadow)),xt.isMeshGouraudMaterial&&xt.envMap!==null&&(Se.envMap.value=Yt,Se.flipEnvMap.value=Yt.isCubeTexture&&Yt.isRenderTargetTexture===!1?-1:1),xt.isMeshStandardMaterial&&xt.envMap===null&&at.environment!==null&&(Se.envMapIntensity.value=at.environmentIntensity),jt&&(Kt.setValue(D,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&$i(Se,Xe),Nt&&xt.fog===!0&&Q.refreshFogUniforms(Se,Nt),Q.refreshMaterialUniforms(Se,xt,k,H,m.state.transmissionRenderTarget[B.id]),Bo.upload(D,Jr(St),Se,wt)),xt.isShaderMaterial&&xt.uniformsNeedUpdate===!0&&(Bo.upload(D,Jr(St),Se,wt),xt.uniformsNeedUpdate=!1),xt.isSpriteMaterial&&Kt.setValue(D,"center",lt.center),Kt.setValue(D,"modelViewMatrix",lt.modelViewMatrix),Kt.setValue(D,"normalMatrix",lt.normalMatrix),Kt.setValue(D,"modelMatrix",lt.matrixWorld),xt.isShaderMaterial||xt.isRawShaderMaterial){let se=xt.uniformsGroups;for(let pe=0,Cn=se.length;pe<Cn;pe++){let Qe=se[pe];Ut.update(Qe,ae),Ut.bind(Qe,ae)}}return ae}function $i(B,at){B.ambientLightColor.needsUpdate=at,B.lightProbe.needsUpdate=at,B.directionalLights.needsUpdate=at,B.directionalLightShadows.needsUpdate=at,B.pointLights.needsUpdate=at,B.pointLightShadows.needsUpdate=at,B.spotLights.needsUpdate=at,B.spotLightShadows.needsUpdate=at,B.rectAreaLights.needsUpdate=at,B.hemisphereLights.needsUpdate=at}function Ks(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(B,at,_t){let xt=mt.get(B);xt.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,xt.__autoAllocateDepthBuffer===!1&&(xt.__useRenderToTexture=!1),mt.get(B.texture).__webglTexture=at,mt.get(B.depthTexture).__webglTexture=xt.__autoAllocateDepthBuffer?void 0:_t,xt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,at){let _t=mt.get(B);_t.__webglFramebuffer=at,_t.__useDefaultFramebuffer=at===void 0};let Ri=D.createFramebuffer();this.setRenderTarget=function(B,at=0,_t=0){A=B,b=at,E=_t;let xt=!0,lt=null,Nt=!1,Vt=!1;if(B){let Yt=mt.get(B);if(Yt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(D.FRAMEBUFFER,null),xt=!1;else if(Yt.__webglFramebuffer===void 0)wt.setupRenderTarget(B);else if(Yt.__hasExternalTextures)wt.rebindTextures(B,mt.get(B.texture).__webglTexture,mt.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let te=B.depthTexture;if(Yt.__boundDepthTexture!==te){if(te!==null&&mt.has(te)&&(B.width!==te.image.width||B.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(B)}}let ne=B.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Vt=!0);let ie=mt.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(Array.isArray(ie[at])?lt=ie[at][_t]:lt=ie[at],Nt=!0):B.samples>0&&wt.useMultisampledRTT(B)===!1?lt=mt.get(B).__webglMultisampledFramebuffer:Array.isArray(ie)?lt=ie[_t]:lt=ie,R.copy(B.viewport),I.copy(B.scissor),U=B.scissorTest}else R.copy(it).multiplyScalar(k).floor(),I.copy(bt).multiplyScalar(k).floor(),U=j;if(_t!==0&&(lt=Ri),ft.bindFramebuffer(D.FRAMEBUFFER,lt)&&xt&&ft.drawBuffers(B,lt),ft.viewport(R),ft.scissor(I),ft.setScissorTest(U),Nt){let Yt=mt.get(B.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+at,Yt.__webglTexture,_t)}else if(Vt){let Yt=at;for(let ne=0;ne<B.textures.length;ne++){let ie=mt.get(B.textures[ne]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ne,ie.__webglTexture,_t,Yt)}}else if(B!==null&&_t!==0){let Yt=mt.get(B.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,_t)}w=-1},this.readRenderTargetPixels=function(B,at,_t,xt,lt,Nt,Vt,$t=0){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=mt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Vt!==void 0&&(Yt=Yt[Vt]),Yt){ft.bindFramebuffer(D.FRAMEBUFFER,Yt);try{let ne=B.textures[$t],ie=ne.format,te=ne.type;if(!rt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=B.width-xt&&_t>=0&&_t<=B.height-lt&&(B.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+$t),D.readPixels(at,_t,xt,lt,Pt.convert(ie),Pt.convert(te),Nt))}finally{let ne=A!==null?mt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(B,at,_t,xt,lt,Nt,Vt,$t=0){if(!(B&&B.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=mt.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Vt!==void 0&&(Yt=Yt[Vt]),Yt)if(at>=0&&at<=B.width-xt&&_t>=0&&_t<=B.height-lt){ft.bindFramebuffer(D.FRAMEBUFFER,Yt);let ne=B.textures[$t],ie=ne.format,te=ne.type;if(!rt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,he),D.bufferData(D.PIXEL_PACK_BUFFER,Nt.byteLength,D.STREAM_READ),B.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+$t),D.readPixels(at,_t,xt,lt,Pt.convert(ie),Pt.convert(te),0);let Ce=A!==null?mt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(D.FRAMEBUFFER,Ce);let X=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await of(D,X,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,he),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Nt),D.deleteBuffer(he),D.deleteSync(X),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,at=null,_t=0){let xt=Math.pow(2,-_t),lt=Math.floor(B.image.width*xt),Nt=Math.floor(B.image.height*xt),Vt=at!==null?at.x:0,$t=at!==null?at.y:0;wt.setTexture2D(B,0),D.copyTexSubImage2D(D.TEXTURE_2D,_t,0,0,Vt,$t,lt,Nt),ft.unbindTexture()};let Wo=D.createFramebuffer(),ol=D.createFramebuffer();this.copyTextureToTexture=function(B,at,_t=null,xt=null,lt=0,Nt=null){Nt===null&&(lt!==0?(Mo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=lt,lt=0):Nt=0);let Vt,$t,Yt,ne,ie,te,he,Ce,X,yt=B.isCompressedTexture?B.mipmaps[Nt]:B.image;if(_t!==null)Vt=_t.max.x-_t.min.x,$t=_t.max.y-_t.min.y,Yt=_t.isBox3?_t.max.z-_t.min.z:1,ne=_t.min.x,ie=_t.min.y,te=_t.isBox3?_t.min.z:0;else{let Ne=Math.pow(2,-lt);Vt=Math.floor(yt.width*Ne),$t=Math.floor(yt.height*Ne),B.isDataArrayTexture?Yt=yt.depth:B.isData3DTexture?Yt=Math.floor(yt.depth*Ne):Yt=1,ne=0,ie=0,te=0}xt!==null?(he=xt.x,Ce=xt.y,X=xt.z):(he=0,Ce=0,X=0);let gt=Pt.convert(at.format),St=Pt.convert(at.type),Ft;at.isData3DTexture?(wt.setTexture3D(at,0),Ft=D.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(wt.setTexture2DArray(at,0),Ft=D.TEXTURE_2D_ARRAY):(wt.setTexture2D(at,0),Ft=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,at.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,at.unpackAlignment);let Ot=D.getParameter(D.UNPACK_ROW_LENGTH),ae=D.getParameter(D.UNPACK_IMAGE_HEIGHT),me=D.getParameter(D.UNPACK_SKIP_PIXELS),jt=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ne),D.pixelStorei(D.UNPACK_SKIP_ROWS,ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,te);let Kt=B.isDataArrayTexture||B.isData3DTexture,Se=at.isDataArrayTexture||at.isData3DTexture;if(B.isDepthTexture){let Ne=mt.get(B),se=mt.get(at),pe=mt.get(Ne.__renderTarget),Cn=mt.get(se.__renderTarget);ft.bindFramebuffer(D.READ_FRAMEBUFFER,pe.__webglFramebuffer),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Qe=0;Qe<Yt;Qe++)Kt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.get(B).__webglTexture,lt,te+Qe),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.get(at).__webglTexture,Nt,X+Qe)),D.blitFramebuffer(ne,ie,Vt,$t,he,Ce,Vt,$t,D.DEPTH_BUFFER_BIT,D.NEAREST);ft.bindFramebuffer(D.READ_FRAMEBUFFER,null),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(lt!==0||B.isRenderTargetTexture||mt.has(B)){let Ne=mt.get(B),se=mt.get(at);ft.bindFramebuffer(D.READ_FRAMEBUFFER,Wo),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,ol);for(let pe=0;pe<Yt;pe++)Kt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.__webglTexture,lt,te+pe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ne.__webglTexture,lt),Se?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,se.__webglTexture,Nt,X+pe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,se.__webglTexture,Nt),lt!==0?D.blitFramebuffer(ne,ie,Vt,$t,he,Ce,Vt,$t,D.COLOR_BUFFER_BIT,D.NEAREST):Se?D.copyTexSubImage3D(Ft,Nt,he,Ce,X+pe,ne,ie,Vt,$t):D.copyTexSubImage2D(Ft,Nt,he,Ce,ne,ie,Vt,$t);ft.bindFramebuffer(D.READ_FRAMEBUFFER,null),ft.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?B.isDataTexture||B.isData3DTexture?D.texSubImage3D(Ft,Nt,he,Ce,X,Vt,$t,Yt,gt,St,yt.data):at.isCompressedArrayTexture?D.compressedTexSubImage3D(Ft,Nt,he,Ce,X,Vt,$t,Yt,gt,yt.data):D.texSubImage3D(Ft,Nt,he,Ce,X,Vt,$t,Yt,gt,St,yt):B.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Nt,he,Ce,Vt,$t,gt,St,yt.data):B.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Nt,he,Ce,yt.width,yt.height,gt,yt.data):D.texSubImage2D(D.TEXTURE_2D,Nt,he,Ce,Vt,$t,gt,St,yt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ae),D.pixelStorei(D.UNPACK_SKIP_PIXELS,me),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),Nt===0&&at.generateMipmaps&&D.generateMipmap(Ft),ft.unbindTexture()},this.initRenderTarget=function(B){mt.get(B).__webglFramebuffer===void 0&&wt.setupRenderTarget(B)},this.initTexture=function(B){B.isCubeTexture?wt.setTextureCube(B,0):B.isData3DTexture?wt.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?wt.setTexture2DArray(B,0):wt.setTexture2D(B,0),ft.unbindTexture()},this.resetState=function(){b=0,E=0,A=null,ft.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),e.unpackColorSpace=ve._getUnpackColorSpace()}};var qf={type:"change"},Rh={type:"start"},Yf={type:"end"},$c=new Ps,Xf=new Xn,Ry=Math.cos(70*oh.DEG2RAD),nn=new Y,Un=2*Math.PI,Ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ah=1e-6,Jc=class extends Dr{constructor(t,e=null){super(t,e),this.state=Ue.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new xn,this._lastTargetPosition=new Y,this._quat=new xn().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Co,this._sphericalDelta=new Co,this._scale=1,this._panOffset=new Y,this._rotateStart=new Jt,this._rotateEnd=new Jt,this._rotateDelta=new Jt,this._panStart=new Jt,this._panEnd=new Jt,this._panDelta=new Jt,this._dollyStart=new Jt,this._dollyEnd=new Jt,this._dollyDelta=new Jt,this._dollyDirection=new Y,this._mouse=new Jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Py.bind(this),this._onPointerDown=Cy.bind(this),this._onPointerUp=Iy.bind(this),this._onContextMenu=Oy.bind(this),this._onMouseWheel=Uy.bind(this),this._onKeyDown=Ny.bind(this),this._onTouchStart=Fy.bind(this),this._onTouchMove=By.bind(this),this._onMouseDown=Dy.bind(this),this._onMouseMove=Ly.bind(this),this._interceptControlDown=zy.bind(this),this._interceptControlUp=ky.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=Ue.NONE}update(t=null){let e=this.object.position;nn.copy(e).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===Ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=r!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),e.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let c=nn.length();r=this._clampDistance(c*this._scale);let a=c-r;this.object.position.addScaledVector(this._dollyDirection,a),this.object.updateMatrixWorld(),o=!!a}else if(this.object.isOrthographicCamera){let c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object);let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=a!==this.object.zoom;let l=new Y(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(c),this.object.updateMatrixWorld(),r=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):($c.origin.copy(this.object.position),$c.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($c.direction))<Ry?this.object.lookAt(this.target):(Xf.setFromNormalAndCoplanarPoint(this.object.up,this.target),$c.intersectPlane(Xf,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Ah||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ah||this._lastTargetPosition.distanceToSquared(this.target)>Ah?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){nn.setFromMatrixColumn(e,0),nn.multiplyScalar(-t),this._panOffset.add(nn)}_panUp(t,e){this.screenSpacePanning===!0?nn.setFromMatrixColumn(e,1):(nn.setFromMatrixColumn(e,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(t),this._panOffset.add(nn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;nn.copy(s).sub(this.target);let o=nn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/n.clientHeight,this.object.matrix),this._panUp(2*e*o/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,o=e-n.top,r=n.width,c=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,o=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*.5,c=(t.pageY+e.y)*.5;this._updateZoomParameters(r,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Cy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Py(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Iy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yf),this.state=Ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ue.DOLLY;break;case us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}break;case us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ue.PAN}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Rh)}function Ly(i){switch(this.state){case Ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Uy(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ue.NONE||(i.preventDefault(),this.dispatchEvent(Rh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Yf))}function Ny(i){this.enabled!==!1&&this._handleKeyDown(i)}function Fy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ue.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ue.TOUCH_PAN;break;default:this.state=Ue.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ue.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ue.TOUCH_DOLLY_ROTATE;break;default:this.state=Ue.NONE}break;default:this.state=Ue.NONE}this.state!==Ue.NONE&&this.dispatchEvent(Rh)}function By(i){switch(this._trackPointer(i),this.state){case Ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ue.NONE}}function Oy(i){this.enabled!==!1&&i.preventDefault()}function zy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ky(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var De={x:267.5,y:357.5,z:20};function Gf(i){De.x=i[0],De.y=i[1],De.z=i[2]}var T=(i,t,e)=>[i-De.x,e-De.z,t-De.y],Le=[0,1,0];function Hy(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function vn(i){return Hy(i)>=0?i.slice():i.slice().reverse()}function kr(i){let t=0,e=0;for(let n of i)t+=n[0],e+=n[1];return[t/i.length,e/i.length]}function Hn(i,t){let e=!1,[n,s]=i;for(let o=0,r=t.length-1;o<t.length;r=o++){let[c,a]=t[o],[l,u]=t[r];a>s!=u>s&&n<(l-c)*(s-a)/(u-a)+c&&(e=!e)}return e}function Hr(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],o=n*n+s*s||1e-9,r=((i[0]-t[0])*n+(i[1]-t[1])*s)/o;return r=Math.max(0,Math.min(1,r)),Math.hypot(i[0]-t[0]-r*n,i[1]-t[1]-r*s)}function le(i,t){let e=i.length,n=[],s=typeof t=="number"?new Array(e).fill(t):t,o=[];for(let r=0;r<e;r++){let c=i[r],a=i[(r+1)%e],l=a[0]-c[0],u=a[1]-c[1],h=Math.hypot(l,u)||1e-9,d=u/h,f=-l/h;o.push({a:[c[0]+d*s[r],c[1]+f*s[r]],d:[l/h,u/h],n:[d,f]})}for(let r=0;r<e;r++){let c=o[(r-1+e)%e],a=o[r],l=c.d[0]*a.d[1]-c.d[1]*a.d[0];if(Math.abs(l)<.08){n.push([a.a[0],a.a[1]]);continue}let u=((a.a[0]-c.a[0])*a.d[1]-(a.a[1]-c.a[1])*a.d[0])/l,h=c.a[0]+c.d[0]*u,d=c.a[1]+c.d[1]*u,f=Math.hypot(h-i[r][0],d-i[r][1]),p=3*Math.max(s[r],s[(r-1+e)%e],.01);if(f>p){let y=p/f;h=i[r][0]+(h-i[r][0])*y,d=i[r][1]+(d-i[r][1])*y}n.push([h,d])}return n}function Ws(i,t,e){let n=[],s=o=>o[0]*t[0]+o[1]*t[1]-e;for(let o=0;o<i.length;o++){let r=i[o],c=i[(o+1)%i.length],a=s(r),l=s(c);if(a>=0&&n.push(r),a>=0!=l>=0){let u=a/(a-l);n.push([r[0]+(c[0]-r[0])*u,r[1]+(c[1]-r[1])*u])}}return n.length>=3?n:null}function ms(i){let t=i.map(e=>new Jt(e[0],e[1]));try{return Er.triangulateShape(t,[])}catch{return[]}}function Zf(i,t,e){let n=[];for(let o=0;o<e.length;o++){let r=e[o],c=e[(o+1)%e.length],a=c[0]-r[0],l=c[1]-r[1],u=t[0]*l-t[1]*a;if(Math.abs(u)<1e-9)continue;let h=((r[0]-i[0])*l-(r[1]-i[1])*a)/u,d=((r[0]-i[0])*t[1]-(r[1]-i[1])*t[0])/u;d>=-1e-9&&d<1-1e-9&&n.push(h)}n.sort((o,r)=>o-r);let s=[];for(let o=0;o+1<n.length;o+=2)s.push([n[o],n[o+1]]);return s}var $n=class{constructor(){this.cap=0,this.nv=0,this.col=[1,1,1],this.col2=[1,1,1],this.bid=-1}_grow(t){if(this.nv+t<=this.cap)return;let e=Math.max(3072,this.cap*2);for(;e<this.nv+t;)e*=2;let n=new Float32Array(e*3),s=new Int8Array(e*3),o=new Float32Array(e*2),r=new Uint8Array(e*3),c=new Uint8Array(e*3),a=new Int32Array(Math.ceil(e/3));this.cap&&(n.set(this.P),s.set(this.N),o.set(this.U),r.set(this.K),c.set(this.K2),a.set(this.I)),Object.assign(this,{P:n,N:s,U:o,K:r,K2:c,I:a,cap:e})}_put(t,e,n){let s=this.nv++,o=s*3,r=this.col,c=this.col2;this.P[o]=t[0],this.P[o+1]=t[1],this.P[o+2]=t[2],this.N[o]=Math.round(e[0]*127),this.N[o+1]=Math.round(e[1]*127),this.N[o+2]=Math.round(e[2]*127),this.U[s*2]=n?n[0]:0,this.U[s*2+1]=n?n[1]:0,this.K[o]=Math.min(255,r[0]*255),this.K[o+1]=Math.min(255,r[1]*255),this.K[o+2]=Math.min(255,r[2]*255),this.K2[o]=Math.min(255,c[0]*255),this.K2[o+1]=Math.min(255,c[1]*255),this.K2[o+2]=Math.min(255,c[2]*255)}tri(t,e,n,s,o,r,c){let a=e[0]-t[0],l=e[1]-t[1],u=e[2]-t[2],h=n[0]-t[0],d=n[1]-t[1],f=n[2]-t[2],p=l*f-u*d,y=u*h-a*f,g=a*d-l*h,m=Math.hypot(p,y,g);if(m<1e-10)return;if(c&&p*c[0]+y*c[1]+g*c[2]<0){let _=e;e=n,n=_;let v=o;o=r,r=v,p=-p,y=-y,g=-g}let M=[p/m,y/m,g/m];this._grow(3),this.I[this.nv/3]=this.bid,this._put(t,M,s),this._put(e,M,o),this._put(n,M,r)}triN(t,e,n,s,o,r,c,a,l){this._grow(3),this.I[this.nv/3]=this.bid,this._put(t,s,c),this._put(e,o,a),this._put(n,r,l)}quad(t,e,n,s,o,r,c,a,l){this.tri(t,e,n,o,r,c,l),this.tri(t,n,s,o,c,a,l)}box(t,e,n,s,o,r,c,a=1){let l=Math.cos(c),u=Math.sin(c),h=(g,m,M)=>T(t+l*g-u*m,e+u*g+l*m,M),d=o/2,f=r/2,p=a,y=[[-d,-f],[d,-f],[d,f],[-d,f]];for(let g=0;g<4;g++){let[m,M]=y[g],[_,v]=y[(g+1)%4],x=Math.hypot(_-m,v-M),b=(m+_)/2,E=(M+v)/2,A=[l*b-u*E,0,u*b+l*E];this.quad(h(m,M,n),h(_,v,n),h(_,v,s),h(m,M,s),[0,0],[x*p,0],[x*p,(s-n)*p],[0,(s-n)*p],A)}this.quad(h(-d,-f,s),h(d,-f,s),h(d,f,s),h(-d,f,s),[0,0],[o*p,0],[o*p,r*p],[0,r*p],Le),this.quad(h(-d,-f,n),h(d,-f,n),h(d,f,n),h(-d,f,n),[0,0],[o*p,0],[o*p,r*p],[0,r*p],[0,-1,0])}beam(t,e,n,s){let o=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.hypot(...o);if(r<1e-6)return;let c=o.map(f=>f/r),a=[c[2],0,-c[0]],l=Math.hypot(...a);l<1e-6&&(a=[1,0,0],l=1),a=a.map(f=>f/l);let u=[c[1]*a[2]-c[2]*a[1],c[2]*a[0]-c[0]*a[2],c[0]*a[1]-c[1]*a[0]],h=(f,p,y)=>[f[0]+a[0]*p*n/2+u[0]*y*s/2,f[1]+a[1]*p*n/2+u[1]*y*s/2,f[2]+a[2]*p*n/2+u[2]*y*s/2],d=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let f=0;f<4;f++){let[p,y]=d[f],[g,m]=d[(f+1)%4],M=[a[0]*(p+g)+u[0]*(y+m),a[1]*(p+g)+u[1]*(y+m),a[2]*(p+g)+u[2]*(y+m)];this.quad(h(t,p,y),h(e,p,y),h(e,g,m),h(t,g,m),[0,0],[r,0],[r,.3],[0,.3],M)}for(let[f,p]of[[t,-1],[e,1]])this.quad(h(f,-1,-1),h(f,1,-1),h(f,1,1),h(f,-1,1),[0,0],[1,0],[1,1],[0,1],c.map(y=>y*p))}cyl(t,e,n,s,o,r=8,c=!0){for(let a=0;a<r;a++){let l=a/r*Math.PI*2,u=(a+1)/r*Math.PI*2,h=[t+Math.cos(l)*o,e+Math.sin(l)*o],d=[t+Math.cos(u)*o,e+Math.sin(u)*o],f=(l+u)/2;this.quad(T(h[0],h[1],n),T(d[0],d[1],n),T(d[0],d[1],s),T(h[0],h[1],s),[a/r,0],[(a+1)/r,0],[(a+1)/r,s-n],[a/r,s-n],[Math.cos(f),0,Math.sin(f)]),c&&this.tri(T(t,e,s),T(h[0],h[1],s),T(d[0],d[1],s),[0,0],[0,0],[0,0],Le)}}prism(t,e,n,s=!0,o=!1,r=1){t=vn(t);let c=0;for(let a=0;a<t.length;a++){let l=t[a],u=t[(a+1)%t.length],h=Math.hypot(u[0]-l[0],u[1]-l[1]),d=(u[1]-l[1])/(h||1),f=-(u[0]-l[0])/(h||1);this.quad(T(l[0],l[1],e),T(u[0],u[1],e),T(u[0],u[1],n),T(l[0],l[1],n),[c*r,e*r],[(c+h)*r,e*r],[(c+h)*r,n*r],[c*r,n*r],[d,0,f]),c+=h}if(s||o){let a=ms(t);for(let[l,u,h]of a)s&&this.tri(T(t[l][0],t[l][1],n),T(t[u][0],t[u][1],n),T(t[h][0],t[h][1],n),[t[l][0]*r,t[l][1]*r],[t[u][0]*r,t[u][1]*r],[t[h][0]*r,t[h][1]*r],Le),o&&this.tri(T(t[l][0],t[l][1],e),T(t[u][0],t[u][1],e),T(t[h][0],t[h][1],e),[0,0],[0,0],[0,0],[0,-1,0])}}geometry(){let t=this.nv,e=new Ye;return e.setAttribute("position",new We(this.P.slice(0,t*3),3)),e.setAttribute("normal",new We(this.N.slice(0,t*3),3,!0)),e.setAttribute("uv",new We(this.U.slice(0,t*2),2)),e.setAttribute("color",new We(this.K.slice(0,t*3),3,!0)),e.userData.c1=e.attributes.color,e.userData.c2=new We(this.K2.slice(0,t*3),3,!0),e.userData.ids=this.I.slice(0,t/3),e.computeBoundingSphere(),this.P=this.N=this.U=this.K=this.K2=this.I=null,this.cap=0,this.nv=0,e}get count(){return this.nv/3}};var $f=(i,t,e)=>Math.max(t,Math.min(e,i));function He(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return(t>>>0)%1e5/1e5}function Be(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var ot=256,Qt={woodD:"#35281f",woodM:"#57443a",woodL:"#76604f",red:"#66392f",redD:"#4b2e27",plaster:"#e2dbcd",plasterS:"#cfc6b6",glow:"#e3c597",glowI:"#efdfc0",lat:"#2f241c",stone:"#9a958c",stoneD:"#7b776f",brick:"#8a867e",brickJ:"#69665f",teal:"#4b5856",gold:"#9d8e70"},jf=.68;function Vy(i,t=jf){let e=i.getImageData(0,0,ot,ot),n=e.data;for(let s=0;s<n.length;s+=4){let o=.3*n[s]+.59*n[s+1]+.11*n[s+2];n[s]=o+(n[s]-o)*t+2,n[s+1]=o+(n[s+1]-o)*t+1,n[s+2]=o+(n[s+2]-o)*t-1}i.putImageData(e,0,0)}function Jf(){let i=document.createElement("canvas");return i.width=ot,i.height=ot,i}function Je(i,t,e,n=1,s=ot,o=ot,r=900){let c=Be(n);i.save(),i.globalAlpha=t;for(let a=0;a<r;a++){i.fillStyle=c()<.5?"#000":"#fff";let l=1+c()*e;i.fillRect(c()*s,c()*o,l,l)}i.restore()}function Jn(i,t,e,n,s,o,r,c=2){i.fillStyle=r;for(let a=t;a<=t+n+.1;a+=o)i.fillRect(a-c/2,e,c,s);for(let a=e;a<=e+s+.1;a+=o)i.fillRect(t,a-c/2,n,c)}function jn(i,t,e,n,s,o,r=1){let c=i.createRadialGradient(t+n/2,e+s*.55,4,t+n/2,e+s*.55,Math.max(n,s)*.75);o?(c.addColorStop(0,`rgba(240,190,120,${r*.8})`),c.addColorStop(1,`rgba(190,140,80,${r*.55})`)):(c.addColorStop(0,Qt.glowI),c.addColorStop(1,Qt.glow)),i.fillStyle=c,i.fillRect(t,e,n,s)}function Wy(i,t,e,n,s,o){i.fillStyle=o?"#000":"#2b1a12",i.fillRect(t,e,n,s)}function jc(i,t,e=14){i.fillStyle=t,i.fillRect(0,0,e,ot),i.fillRect(ot-e,0,e,ot),i.fillStyle="rgba(255,255,255,0.10)",i.fillRect(3,0,2,ot),i.fillRect(ot-e+3,0,2,ot)}function Oe(i,t={}){let e=Jf(),n=Jf(),s=e.getContext("2d"),o=n.getContext("2d");i(s,!1),t.mute!==!1&&Vy(s,t.mute||jf),o.fillStyle="#000",o.fillRect(0,0,ot,ot),i(o,!0);let r=new Dn(e);r.colorSpace=ke,r.wrapS=r.wrapT=ki,r.anisotropy=8;let c={map:r};if(!t.noEm){let a=new Dn(n);a.colorSpace=ke,a.wrapS=a.wrapT=ki,c.em=a}return c}function Kf(){let i={};return i.shopA=Oe((t,e)=>{e||(t.fillStyle=Qt.woodM,t.fillRect(0,0,ot,ot),Je(t,.08,2,3));for(let n=0;n<4;n++){let s=18+n*55,o=51;e||(t.fillStyle=Qt.woodD,t.fillRect(s,40,o,192)),jn(t,s+5,46,o-10,118,e,.95),Jn(t,s+5,46,o-10,118,10,e?"#000":Qt.lat,2),e||(t.fillStyle="#5a2c18",t.fillRect(s+5,172,o-10,54),t.strokeStyle="#3a1a0e",t.lineWidth=2,t.strokeRect(s+10,178,o-20,42))}if(e)t.fillStyle="rgba(255,190,110,0.85)",t.fillRect(72,12,112,12);else{jc(t,Qt.woodD,15),t.fillStyle=Qt.woodD,t.fillRect(0,0,ot,34),t.fillStyle="#24130b",t.fillRect(66,6,124,22),t.strokeStyle=Qt.gold,t.lineWidth=2,t.strokeRect(68,8,120,18),t.fillStyle=Qt.stone,t.fillRect(0,234,ot,22),t.fillStyle=Qt.stoneD;for(let n=0;n<ot;n+=64)t.fillRect(n,234,2,22)}}),i.shopB=Oe((t,e)=>{if(e||(t.fillStyle=Qt.woodM,t.fillRect(0,0,ot,ot)),jn(t,16,34,ot-32,200,e,.8),e)t.fillStyle="#000",t.fillRect(0,0,ot,60),t.fillRect(0,168,ot,88);else{t.fillStyle="rgba(60,30,15,0.55)";for(let s=0;s<4;s++)t.fillRect(24,70+s*26,ot-48,4);let n=Be(11);for(let s=0;s<40;s++)t.fillStyle=["#7a3b22","#a8742f","#3f5a4c","#8a2f25"][s%4],t.fillRect(26+n()*(ot-60),52+Math.floor(n()*4)*26,6+n()*10,16);t.fillStyle="#5a2c18",t.fillRect(16,168,ot-32,66),t.fillStyle="#7b4426",t.fillRect(16,168,ot-32,8),t.fillStyle="#9b3426",t.fillRect(16,34,ot-32,26),t.fillStyle="#7d281d";for(let s=16;s<ot-16;s+=24)t.fillRect(s,34,3,26);jc(t,Qt.woodD,15),t.fillStyle=Qt.woodD,t.fillRect(0,0,ot,34),t.fillStyle="#24130b",t.fillRect(80,7,96,20),t.strokeStyle=Qt.gold,t.lineWidth=2,t.strokeRect(82,9,92,16),t.fillStyle=Qt.stone,t.fillRect(0,234,ot,22)}}),i.upT=Oe((t,e)=>{e||(t.fillStyle=Qt.woodM,t.fillRect(0,0,ot,ot),Je(t,.07,2,5)),jn(t,46,58,164,120,e,.7),Jn(t,46,58,164,120,12,e?"#000":Qt.lat,2.5),e?(t.fillStyle="#000",t.fillRect(0,188,ot,68)):(t.strokeStyle=Qt.woodD,t.lineWidth=6,t.strokeRect(43,55,170,126),t.fillStyle=Qt.woodD,t.fillRect(0,226,ot,30),t.fillRect(0,0,ot,14),t.fillStyle="#5a2c18",t.fillRect(30,192,196,30),Jn(t,30,192,196,30,14,"#3a1a0e",2),jc(t,Qt.woodD,13))}),i.upTd=Oe((t,e)=>{e||(t.fillStyle=Qt.woodM,t.fillRect(0,0,ot,ot),Je(t,.07,2,6),t.fillStyle="#3a2418",t.fillRect(46,58,164,120),Jn(t,46,58,164,120,12,"#24130b",2.5),t.strokeStyle=Qt.woodD,t.lineWidth=6,t.strokeRect(43,55,170,126),t.fillStyle=Qt.woodD,t.fillRect(0,226,ot,30),t.fillRect(0,0,ot,14),jc(t,Qt.woodD,13))}),i.upP=Oe((t,e)=>{e||(t.fillStyle=Qt.plaster,t.fillRect(0,0,ot,ot),Je(t,.05,3,7)),jn(t,74,76,108,92,e,.75),Jn(t,74,76,108,92,12,e?"#000":Qt.lat,2.5),e||(t.strokeStyle=Qt.woodD,t.lineWidth=6,t.strokeRect(71,73,114,98),t.fillStyle="#5a2c18",t.fillRect(66,170,124,8),t.fillStyle=Qt.woodD,t.fillRect(0,238,ot,18),t.fillRect(0,0,ot,8),t.fillStyle="rgba(70,40,24,0.75)",t.fillRect(0,0,7,ot),t.fillRect(ot-7,0,7,ot))}),i.upPd=Oe((t,e)=>{e||(t.fillStyle=Qt.plaster,t.fillRect(0,0,ot,ot),Je(t,.05,3,8),t.fillStyle="#4a3427",t.fillRect(74,76,108,92),Jn(t,74,76,108,92,12,"#2a170d",2.5),t.strokeStyle=Qt.woodD,t.lineWidth=6,t.strokeRect(71,73,114,98),t.fillStyle="#5a2c18",t.fillRect(66,170,124,8),t.fillStyle=Qt.woodD,t.fillRect(0,238,ot,18),t.fillRect(0,0,ot,8),t.fillStyle="rgba(70,40,24,0.75)",t.fillRect(0,0,7,ot),t.fillRect(ot-7,0,7,ot))}),i.court=Oe((t,e)=>{e||(t.fillStyle=Qt.plaster,t.fillRect(0,0,ot,ot),Je(t,.05,3,9)),e||(t.fillStyle=Qt.woodD,t.fillRect(92,66,72,168),t.fillStyle="#4e2716",t.fillRect(98,72,29,162),t.fillRect(129,72,29,162)),jn(t,102,78,20,40,e,.5),jn(t,134,78,20,40,e,.5);for(let n of[22,190])jn(t,n,92,44,52,e,.6),Jn(t,n,92,44,52,11,e?"#000":Qt.lat,2),e||(t.strokeStyle=Qt.woodD,t.lineWidth=4,t.strokeRect(n-2,90,48,56));if(!e){t.fillStyle=Qt.brick,t.fillRect(0,206,92,50),t.fillRect(164,206,92,50),t.fillStyle=Qt.brickJ;for(let n=206;n<ot;n+=10)t.fillRect(0,n,ot,1.5);t.fillStyle=Qt.woodD,t.fillRect(0,0,ot,10)}}),i.blank=Oe((t,e)=>{if(e)return;t.fillStyle=Qt.plaster,t.fillRect(0,0,ot,ot),Je(t,.06,3,10);let n=t.createLinearGradient(0,160,0,256);n.addColorStop(0,"rgba(120,100,80,0)"),n.addColorStop(1,"rgba(120,100,80,0.22)"),t.fillStyle=n,t.fillRect(0,160,ot,96),t.fillStyle=Qt.brick,t.fillRect(0,222,ot,34),t.fillStyle=Qt.brickJ;for(let s=222;s<ot;s+=9)t.fillRect(0,s,ot,1.5)},{noEm:!0}),i.hall=Oe((t,e)=>{e||(t.fillStyle=Qt.redD,t.fillRect(0,0,ot,ot));for(let n=0;n<3;n++){let s=24+n*70,o=66;jn(t,s+4,46,o-8,130,e,1),Jn(t,s+4,46,o-8,130,9,e?"#000":Qt.lat,2),e||(t.fillStyle="#62261a",t.fillRect(s+4,182,o-8,52),t.strokeStyle="#3e160d",t.lineWidth=2,t.strokeRect(s+9,188,o-18,40),t.strokeStyle="#4a1a10",t.lineWidth=4,t.strokeRect(s+2,44,o-4,192))}e||(t.fillStyle=Qt.red,t.fillRect(0,0,20,ot),t.fillRect(ot-20,0,20,ot),t.fillStyle="rgba(255,255,255,0.12)",t.fillRect(5,0,3,ot),t.fillRect(ot-15,0,3,ot),t.fillStyle=Qt.teal,t.fillRect(0,0,ot,36),t.fillStyle=Qt.gold,t.fillRect(0,16,ot,3),t.fillStyle="#1f3d3d",t.fillRect(0,30,ot,6),t.fillStyle=Qt.stone,t.fillRect(0,238,ot,18))}),i.hallU=Oe((t,e)=>{e||(t.fillStyle=Qt.redD,t.fillRect(0,0,ot,ot));for(let n=0;n<2;n++){let s=30+n*100,o=96;jn(t,s,60,o-4,110,e,.85),Jn(t,s,60,o-4,110,10,e?"#000":Qt.lat,2),e||(t.strokeStyle="#3e160d",t.lineWidth=4,t.strokeRect(s-2,58,o,114))}e?(t.fillStyle="#000",t.fillRect(0,176,ot,80)):(t.fillStyle="#62261a",t.fillRect(0,180,ot,76),Jn(t,20,190,ot-40,36,12,"#3e160d",2),t.fillStyle=Qt.red,t.fillRect(0,0,18,ot),t.fillRect(ot-18,0,18,ot),t.fillStyle=Qt.teal,t.fillRect(0,0,ot,30),t.fillStyle=Qt.gold,t.fillRect(0,13,ot,3))}),i.ware=Oe((t,e)=>{if(!e){t.fillStyle=Qt.brick,t.fillRect(0,0,ot,ot),t.fillStyle=Qt.brickJ;for(let n=0;n<ot;n+=9)t.fillRect(0,n,ot,1.5);for(let n=0;n<ot;n+=18)for(let s=n/18%2*14;s<ot;s+=28)t.fillRect(s,n,1.5,9);Je(t,.06,2,12)}if(!e){t.fillStyle="#5b3a24",t.fillRect(58,60,140,196),t.fillStyle="#4a2e1c";for(let n=58;n<198;n+=14)t.fillRect(n,60,2,196);t.fillStyle="#2b2a28",t.fillRect(58,120,140,6),t.fillRect(58,200,140,6),t.fillStyle=Qt.stone,t.fillRect(50,46,156,14)}jn(t,120,128,16,128,e,.55)}),i.station=Oe((t,e)=>{if(!e){t.fillStyle="#a7978a",t.fillRect(0,0,ot,ot),t.fillStyle="#8c7d71";for(let n=0;n<ot;n+=9)t.fillRect(0,n,ot,1.5);Je(t,.05,2,13)}t.save(),t.beginPath(),t.moveTo(70,220),t.lineTo(70,100),t.arc(128,100,58,Math.PI,0),t.lineTo(186,220),t.closePath(),t.clip(),jn(t,70,40,116,180,e,.9),Jn(t,70,40,116,180,19,e?"#000":"#2c2a28",3),t.restore(),e||(t.strokeStyle="#efe6d6",t.lineWidth=7,t.beginPath(),t.moveTo(66,222),t.lineTo(66,100),t.arc(128,100,62,Math.PI,0),t.lineTo(190,222),t.stroke(),t.fillStyle="#d9cdb7",t.fillRect(0,232,ot,24),t.fillRect(0,0,ot,12))}),i.factory=Oe((t,e)=>{if(!e){t.fillStyle="#8a5a45",t.fillRect(0,0,ot,ot);let n=Be(31);for(let s=0;s<ot;s+=10)for(let o=s/10%2*15-15;o<ot;o+=30)t.fillStyle=`hsl(${14+n()*8},${30+n()*10}%,${30+n()*9}%)`,t.fillRect(o+1,s+1,28,8)}t.save(),t.beginPath(),t.moveTo(58,236),t.lineTo(58,86),t.arc(128,86,70,Math.PI,0),t.lineTo(198,236),t.closePath(),t.clip(),jn(t,58,16,140,220,e,.75),Jn(t,58,16,140,220,20,e?"#000":"#2a2724",3),t.restore(),e||(t.strokeStyle="#c9b49a",t.lineWidth=6,t.beginPath(),t.moveTo(55,238),t.lineTo(55,86),t.arc(128,86,73,Math.PI,0),t.lineTo(201,238),t.stroke(),t.fillStyle="#6a4636",t.fillRect(0,0,14,ot),t.fillRect(ot-14,0,14,ot),t.fillStyle="#b9a58c",t.fillRect(0,240,ot,16))}),i.stoneF=Oe((t,e)=>{if(!e){t.fillStyle="#857d71",t.fillRect(0,0,ot,ot);let n=Be(32);for(let s=0;s<70;s++){let o=26+n()*40,r=16+n()*20;t.fillStyle=`hsl(${30+n()*12},${6+n()*8}%,${44+n()*16}%)`,t.beginPath(),t.ellipse(n()*ot,n()*ot,o/2,r/2,(n()-.5)*.5,0,7),t.fill()}Je(t,.1,2,33,ot,ot,1600)}if(Wy(t,98,74,60,54,e),!e){t.fillStyle="#3a3836";for(let n=106;n<158;n+=12)t.fillRect(n,74,3,54);t.fillStyle="#b8b0a2",t.fillRect(92,128,72,8)}},{noEm:!0}),i.hut=Oe((t,e)=>{if(e)return;t.fillStyle="#6b5641",t.fillRect(0,0,ot,ot);let n=Be(34);for(let s=0;s<ot;s+=21)t.fillStyle=`hsl(28,${20+n()*12}%,${24+n()*12}%)`,t.fillRect(s+1,0,19,ot),t.fillStyle="rgba(0,0,0,0.35)",t.fillRect(s,0,2,ot);t.fillStyle="#3e3125",t.fillRect(0,60,ot,8),t.fillRect(0,200,ot,8),Je(t,.1,2,35)},{noEm:!0}),i.ruin=Oe((t,e)=>{if(e)return;t.fillStyle="#d6cab4",t.fillRect(0,0,ot,ot),Je(t,.12,4,14,ot,ot,1800);let n=Be(15);for(let s=0;s<9;s++)t.fillStyle="rgba(120,96,74,0.35)",t.beginPath(),t.ellipse(n()*ot,n()*ot,10+n()*30,6+n()*20,n()*3,0,7),t.fill();t.fillStyle="#9a8f80";for(let s=0;s<7;s++)t.fillRect(n()*200,n()*220,26,10);t.fillStyle="#1d1712",t.fillRect(70,64,116,104),t.fillStyle="#4a3a2e",t.fillRect(70,64,116,8),t.fillRect(70,112,60,5),t.fillRect(150,64,6,104),t.strokeStyle="#2c1d14",t.lineWidth=7,t.strokeRect(66,60,124,112),t.fillStyle=Qt.brick,t.fillRect(0,214,ot,42),t.fillStyle="#5a5249",t.fillRect(0,214,ot,2)},{noEm:!0}),i}function Qf(){let i={};return i.tile=Oe((t,e)=>{if(!e){t.fillStyle="#4b5056",t.fillRect(0,0,ot,ot);for(let n=0;n<4;n++){let s=n*64,o=t.createLinearGradient(s,0,s+64,0);o.addColorStop(0,"#2b2e33"),o.addColorStop(.18,"#3b3f45"),o.addColorStop(.5,"#5e646b"),o.addColorStop(.82,"#3b3f45"),o.addColorStop(1,"#2b2e33"),t.fillStyle=o,t.fillRect(s+16,0,34,ot),t.fillStyle="#373b40",t.fillRect(s+50,0,30,ot);for(let r=0;r<ot;r+=85)t.fillStyle="rgba(0,0,0,0.28)",t.fillRect(s+16,r,34,5),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(s+16,r+5,34,3)}Je(t,.06,2,21)}},{noEm:!0}).map,i.stone=Oe((t,e)=>{if(e)return;t.fillStyle="#6f685d",t.fillRect(0,0,ot,ot);let n=Be(22),s=0;for(;s<ot;){let o=28+Math.floor(n()*3)*10,r=-n()*50;for(;r<ot;){let c=46+n()*64,a=50+n()*13,l=7+n()*7;t.fillStyle=`hsl(${30+n()*10},${l}%,${a}%)`,t.fillRect(r+2,s+2,c-3,Math.min(o,ot-s)-3),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(r+2,s+2,c-3,3),r+=c}s+=o}Je(t,.12,2,23,ot,ot,2400)},{noEm:!0}).map,i.brick=Oe((t,e)=>{if(e)return;t.fillStyle="#8a8378",t.fillRect(0,0,ot,ot);let n=Be(24);for(let s=0;s<ot;s+=16)for(let o=s/16%2*24-24;o<ot;o+=48)t.fillStyle=`hsl(32,${6+n()*6}%,${44+n()*10}%)`,t.fillRect(o+1,s+1,46,14)},{noEm:!0}).map,i.wood=Oe((t,e)=>{if(e)return;t.fillStyle=Qt.woodM,t.fillRect(0,0,ot,ot);let n=Be(25);for(let s=0;s<ot;s+=32)t.fillStyle=`hsl(18,${40+n()*10}%,${22+n()*8}%)`,t.fillRect(0,s+1,ot,30);Je(t,.08,2,26)},{noEm:!0}).map,i.plaster=Oe((t,e)=>{e||(t.fillStyle=Qt.plaster,t.fillRect(0,0,ot,ot),Je(t,.05,3,27,ot,ot,1400))},{noEm:!0}).map,i.rubble=Oe((t,e)=>{if(e)return;t.fillStyle="#4b4741",t.fillRect(0,0,ot,ot);let n=Be(31),s=0;for(;s<ot;){let r=30+Math.floor(n()*26),c=-n()*40;for(;c<ot+40;){let a=36+n()*52,l=44+n()*16,u=4+n()*8,h=28+n()*14,d=c+a/2,f=s+r/2,p=[];for(let y=0;y<7;y++){let g=y/7*Math.PI*2+n()*.5,m=a/2-2-n()*5,M=r/2-2-n()*4;p.push([d+Math.cos(g)*m,f+Math.sin(g)*M])}for(let y of[-ot,0,ot])for(let g of[-ot,0,ot])t.beginPath(),p.forEach(([m,M],_)=>_?t.lineTo(m+y,M+g):t.moveTo(m+y,M+g)),t.closePath(),t.fillStyle=`hsl(${h},${u}%,${l}%)`,t.fill(),t.strokeStyle="rgba(255,255,255,0.10)",t.lineWidth=2,t.beginPath(),t.moveTo(p[4][0]+y,p[4][1]+g),t.lineTo(p[5][0]+y,p[5][1]+g),t.lineTo(p[6][0]+y,p[6][1]+g),t.stroke(),t.strokeStyle="rgba(0,0,0,0.22)",t.beginPath(),t.moveTo(p[1][0]+y,p[1][1]+g),t.lineTo(p[2][0]+y,p[2][1]+g),t.lineTo(p[3][0]+y,p[3][1]+g),t.stroke();c+=a}s+=r}Je(t,.1,2,32,ot,ot,2600),t.globalAlpha=.16;let o=Be(33);for(let r=0;r<26;r++)t.fillStyle=o()<.6?"#5f6b48":"#3a3a30",t.beginPath(),t.ellipse(o()*ot,o()*ot,6+o()*18,3+o()*8,0,0,7),t.fill();t.globalAlpha=1},{noEm:!0,mute:1}).map,i.cliff=Oe((t,e)=>{if(e)return;t.fillStyle="#3f3b36",t.fillRect(0,0,ot,ot);let n=Be(41),s=5,o=[];for(let r=0;r<=s;r++){o.push([]);for(let c=0;c<=s;c++)o[r].push([c*ot/s+(c%s?(n()-.5)*30:0),r*ot/s+(r%s?(n()-.5)*30:0)])}for(let r=0;r<=s;r++)o[s][r][0]=o[0][r][0];for(let r=0;r<=s;r++)o[r][s][1]=o[r][0][1];for(let r=0;r<s;r++)for(let c=0;c<s;c++){let a=[o[r][c],o[r][c+1],o[r+1][c+1],o[r+1][c]],l=40+n()*18,u=28+n()*12,h=4+n()*7;t.beginPath(),a.forEach(([f,p],y)=>y?t.lineTo(f,p):t.moveTo(f,p)),t.closePath(),t.fillStyle=`hsl(${u},${h}%,${l}%)`,t.fill();let d=t.createLinearGradient(0,a[0][1],0,a[3][1]);if(d.addColorStop(0,"rgba(255,255,255,0.10)"),d.addColorStop(1,"rgba(0,0,0,0.16)"),t.fillStyle=d,t.fill(),t.strokeStyle="rgba(25,22,19,0.75)",t.lineWidth=3,t.stroke(),n()<.5){t.strokeStyle="rgba(25,22,19,0.5)",t.lineWidth=1.5,t.beginPath();let f=a[0],p=a[2];t.moveTo(f[0]+(p[0]-f[0])*.2,f[1]+(p[1]-f[1])*.3),t.lineTo(f[0]+(p[0]-f[0])*.6,f[1]+(p[1]-f[1])*.7),t.stroke()}}Je(t,.12,3,42,ot,ot,3e3),t.globalAlpha=.14;for(let r=0;r<18;r++)t.fillStyle="#56603f",t.beginPath(),t.ellipse(n()*ot,n()*ot,8+n()*20,3+n()*6,0,0,7),t.fill();t.globalAlpha=1},{noEm:!0,mute:1}).map,i.plank=Oe((t,e)=>{if(e)return;let n=Be(51);for(let s=0;s<ot;s+=32){t.fillStyle=`hsl(${26+n()*8},${12+n()*8}%,${40+n()*10}%)`,t.fillRect(0,s,ot,32),t.fillStyle="rgba(20,16,12,0.7)",t.fillRect(0,s+30,ot,2);for(let o=0;o<3;o++)t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(n()*ot,s+4+n()*22,30+n()*60,1)}Je(t,.1,2,52,ot,ot,1600)},{noEm:!0,mute:1}).map,i.iron=Oe((t,e)=>{if(!e){t.fillStyle="#3d3c3a",t.fillRect(0,0,ot,ot),t.fillStyle="#2c2b2a";for(let n=0;n<ot;n+=64)t.fillRect(n,0,6,ot);t.fillStyle="#56544f";for(let n=0;n<ot;n+=64)for(let s=8;s<ot;s+=24)t.fillRect(n+10,s,3,3);Je(t,.08,2,28)}},{noEm:!0}).map,i.ground=null,i}function qy(i,t,e=.6){return n=>{let s=n/t;return s<=1?i*(e*s+(1-e)*(1-(1-s)*(1-s))):i*(1+e*(s-1))}}function Ae(i,t){let{L:e,D:n,a:s}=t,o=t.ty||"gable",r=(t.ends||["auto","auto"]).slice();if(o!=="gable"&&e<n){let j=e;e=n,n=j,s+=Math.PI/2,r=["auto","auto"]}let c=Math.cos(s),a=Math.sin(s),l=t.c[0],u=t.c[1],h=n/2,d=Math.max(.6,t.top-t.ze),f=t.oh??.6,p=t.ohg??.35,y=qy(d,h,t.sag??.6),g=t.top,m=Math.max(0,e/2-h),M=.5*h,_=o==="xs"?Math.max(m+M,.18*e):m,v=o==="pyr",x=t.lift??0,b=.5*Math.min(e,n),E=(j,Mt)=>{if(!x||o==="gable")return 0;let vt=Math.abs(j)-(e/2+f),K=Math.abs(Mt)-(h+f),$=Math.hypot(Math.min(0,vt),Math.min(0,K)),ut=Math.max(0,1-$/b);return x*ut*ut},A=(j,Mt,vt)=>T(l+c*j-a*Mt,u+a*j+c*Mt,vt),w=j=>r[j>0?1:0]==="open"?"open":o==="gable"?"gable":o,S=(j,Mt)=>{let vt=w(Mt);return vt==="open"?e/2:vt==="gable"?e/2+p:vt==="xs"?$f(m+j,_,e/2+f):Math.min(m+j,e/2+f)},R=7,I=Math.max(4,Math.min(24,Math.round(e/1.6))),U=i.tile;for(let j of[1,-1]){let Mt=[];for(let vt=0;vt<=R;vt++){let K=(h+f)*vt/R,$=g-y(K),ut=-S(K,-1),N=S(K,1),F=[];for(let V=0;V<=I;V++){let G=ut+(N-ut)*V/I;F.push({p:A(G,j*K,$+E(G,K)),uv:[G,K*1.12]})}Mt.push(F)}t0(U,Mt)}for(let j of[1,-1]){let Mt=w(j);if(Mt!=="hip"&&Mt!=="xs"&&Mt!=="pyr")continue;let vt=Mt==="xs"?_:m,K=e/2+f,$=[];for(let ut=0;ut<=R;ut++){let N=vt+(K-vt)*ut/R,F=Math.min(N-m,h+f),V=g-y(N-m),G=[];for(let D=0;D<=6;D++){let ct=-F+2*F*D/6;G.push({p:A(j*N,ct,V+E(N,ct)),uv:[ct,(N-m)*1.12]})}$.push(G)}if(t0(U,$),Mt==="xs"){let ut=g-y(M),N=[];for(let G=0;G<=8;G++){let D=-M+2*M*G/8;N.push([D,g-y(Math.abs(D))])}let F=i.ped,V=j*_;for(let G=0;G<8;G++){let[D,ct]=N[G],[Z,rt]=N[G+1];F.quad(A(V,D,ut),A(V,Z,ut),A(V,Z,rt),A(V,D,ct),[D,0],[Z,0],[Z,rt-ut],[D,ct-ut],[c*j,0,a*j])}for(let G=0;G<8;G++){let[D,ct]=N[G],[Z,rt]=N[G+1];i.wood.beam(A(V+j*.12,D,ct+.05),A(V+j*.12,Z,rt+.05),.12,.32)}i.wood.beam(A(V+j*.1,-M,ut+.06),A(V+j*.1,M,ut+.06),.18,.2)}}for(let j of[1,-1]){if(w(j)!=="gable")continue;let Mt=j*(e/2+p);for(let vt=0;vt<R;vt++){let K=(h+f)*vt/R,$=(h+f)*(vt+1)/R;for(let ut of[1,-1])i.wood.beam(A(Mt,ut*K,g-y(K)-.05),A(Mt,ut*$,g-y($)-.05),.1,.3)}}for(let j of[1,-1]){let Mt=h+f,vt=g-y(Mt),K=-S(Mt,-1),$=S(Mt,1),ut=I;for(let N=0;N<ut;N++){let F=K+($-K)*N/ut,V=K+($-K)*(N+1)/ut,G=vt+E(F,Mt),D=vt+E(V,Mt);i.wood.quad(A(F,j*Mt,G),A(V,j*Mt,D),A(V,j*Mt,D-.24),A(F,j*Mt,G-.24),[0,0],[1,0],[1,.2],[0,.2],[-a*j,0,c*j])}}let W=t.ridgeDeco??e>9,L=j=>{let Mt=w(j);return Mt==="open"?e/2:Mt==="gable"?e/2+p:Mt==="xs"?_:m},O=-L(-1),H=L(1),k=W?.55:.36,tt=W?.7:.38;if(H-O>.3&&i.ridge.beam(A(O,0,g+tt/2-.12),A(H,0,g+tt/2-.12),k,tt),W&&!v)for(let[j,Mt]of[[O,-1],[H,1]])w(Mt)!=="open"&&i.ridge.beam(A(j,0,g+.2),A(j+Mt*.7,0,g+1.25),.5,.42);let nt=W?.34:.24;for(let j of[1,-1]){let Mt=w(j);if(Mt==="hip"||Mt==="pyr")for(let vt of[1,-1]){let K=e/2+f,$=h+f;i.ridge.beam(A(j*m,0,g+.08),A(j*K,vt*$,g-y($)+E(K,$)+.12),nt,nt)}else if(Mt==="xs")for(let vt of[1,-1]){i.ridge.beam(A(j*_,0,g+.08),A(j*_,vt*M,g-y(M)+.1),nt,nt);let K=e/2+f,$=h+f;i.ridge.beam(A(j*(m+M),vt*M,g-y(M)+.1),A(j*K,vt*$,g-y($)+E(K,$)+.14),nt,nt)}}return{zAt:(j,Mt)=>{let vt=j-l,K=Mt-u,$=vt*c+K*a,ut=-vt*a+K*c;return Math.abs($)>e/2+.3||Math.abs(ut)>h+.3?null:o==="gable"||o==="xs"&&Math.abs($)<=_?g-y(Math.abs(ut)):g-y(Math.max(Math.abs(ut),Math.abs($)-m))},kinks:(j,Mt)=>{let vt=(ut,N)=>-(ut-l)*a+(N-u)*c,K=vt(j[0],j[1]),$=vt(Mt[0],Mt[1]);return o==="gable"&&K>0!=$>0?[K/(K-$)]:[]}}}function t0(i,t){for(let e=0;e+1<t.length;e++)for(let n=0;n+1<t[e].length;n++){let s=t[e][n],o=t[e][n+1],r=t[e+1][n+1],c=t[e+1][n];i.tri(s.p,o.p,r.p,s.uv,o.uv,r.uv,Le),i.tri(s.p,r.p,c.p,s.uv,r.uv,c.uv,Le)}}function Ch(i,t,e){let n=e.ze,s=e.top,o=Math.max(.6,s-n),r=e.oh??.6,c=[];for(let h=0;h<t.length;h++){let d=t[h],f=d.p,[p,y]=d.r,g=y[0]-p[0],m=y[1]-p[1],M=Math.hypot(g,m)||1;g/=M,m/=M;let _=[-m,g],v=_[0]*p[0]+_[1]*p[1],x=H=>H[0]*_[0]+H[1]*_[1]-v,b=.5,E=.5;for(let H of f){let k=x(H);k>0?b=Math.max(b,k):E=Math.max(E,-k)}let A=H=>k=>k<=H/2?1.3*o*k/H:.65*o+.7*o*(k-H/2)/H,w=A(b),S=A(E),R=H=>{let k=x(H);return s-(k>=0?w(k):S(-k))},I=f.map((H,k)=>{let tt=f[(k+1)%f.length],nt=[(H[0]+tt[0])/2,(H[1]+tt[1])/2];for(let it=0;it<t.length;it++){if(it===h)continue;let bt=t[it].p;for(let j=0;j<bt.length;j++)if(Hr(nt,bt[j],bt[(j+1)%bt.length])<.06)return 0}return r}),U=le(f,I),W=[],L=Ws(U,_,v),O=Ws(U,[-_[0],-_[1]],-v);if(L){let H=Ws(L,[-_[0],-_[1]],-(v+b/2)),k=Ws(L,_,v+b/2);H&&W.push(H),k&&W.push(k)}if(O){let H=Ws(O,_,v-E/2),k=Ws(O,[-_[0],-_[1]],-(v-E/2));H&&W.push(H),k&&W.push(k)}for(let H of W)for(let[k,tt,nt]of ms(H)){let it=H[k],bt=H[tt],j=H[nt];if(e.skip&&e.skip((it[0]+bt[0]+j[0])/3,(it[1]+bt[1]+j[1])/3))continue;let Mt=vt=>[vt[0]*g+vt[1]*m,Math.abs(x(vt))*1.12];i.tile.tri(T(it[0],it[1],R(it)),T(bt[0],bt[1],R(bt)),T(j[0],j[1],R(j)),Mt(it),Mt(bt),Mt(j),Le)}for(let H=0;H<U.length;H++){if(!I[H])continue;let k=U[H],tt=U[(H+1)%U.length],nt=R(k),it=R(tt),bt=tt[1]-k[1],j=-(tt[0]-k[0]),Mt=Math.hypot(bt,j)||1;i.wood.quad(T(k[0],k[1],nt),T(tt[0],tt[1],it),T(tt[0],tt[1],it-.22),T(k[0],k[1],nt-.22),[0,0],[1,0],[1,.2],[0,.2],[bt/Mt,0,j/Mt])}for(let[H,k]of Zf(p,[g,m],U))k-H<.3||i.ridge.beam(T(p[0]+g*H,p[1]+m*H,s+.12),T(p[0]+g*k,p[1]+m*k,s+.12),.36,.38);c.push({p:f,s:x,zOf:R,Wp:b,Wm:E,n:_,nc:v})}let a=(h,d)=>{for(let y of c)if(Hn([h,d],y.p))return y;let f=null,p=1e9;for(let y of c)for(let g=0;g<y.p.length;g++){let m=Hr([h,d],y.p[g],y.p[(g+1)%y.p.length]);m<p&&(p=m,f=y)}return f};return{zAt:(h,d)=>{let f=a(h,d);return f?f.zOf([h,d]):null},kinks:(h,d)=>{let f=[(h[0]+d[0])/2,(h[1]+d[1])/2],p=a(f[0],f[1]);if(!p)return[];let y=p.s(h),g=p.s(d),m=[];for(let M of[0,p.Wp/2,-p.Wm/2])(y-M)*(g-M)<0&&m.push((y-M)/(y-g));return m.sort((M,_)=>M-_)}}}function e0(i,t,e){let n=t.v,s=t.f,o=c=>T(n[c*3],n[c*3+1],n[c*3+2]);for(let c=0;c<s.length;c+=3){let a=s[c],l=s[c+1],u=s[c+2];i.tile.tri(o(a),o(l),o(u),[n[a*3],n[a*3+1]],[n[l*3],n[l*3+1]],[n[u*3],n[u*3+1]],Le)}let r=e.ze+.28*(t.k||.7);return{zAt:()=>r,kinks:()=>[]}}function Ph(i,t,e){let n=e.top,s=n-.6;for(let[r,c,a]of ms(t))i.flat.tri(T(t[r][0],t[r][1],s),T(t[c][0],t[c][1],s),T(t[a][0],t[a][1],s),t[r],t[c],t[a],Le);let o=le(t,-.3);for(let r=0;r<t.length;r++){let c=t[r],a=t[(r+1)%t.length],l=o[r],u=o[(r+1)%t.length];i.cap.quad(T(c[0],c[1],n),T(a[0],a[1],n),T(u[0],u[1],n),T(l[0],l[1],n),[0,0],[1,0],[1,.3],[0,.3],Le);let h=a[1]-c[1],d=-(a[0]-c[0]),f=Math.hypot(h,d)||1;i.flatWall.quad(T(l[0],l[1],s),T(u[0],u[1],s),T(u[0],u[1],n),T(l[0],l[1],n),[0,0],[1,0],[1,.6],[0,.6],[-h/f,0,-d/f])}return{zAt:()=>n,kinks:()=>[]}}function ui(i,t,e,n,s,o=.25){let r=le(t,n),c=le(t,-.05);for(let a=0;a<t.length;a++){let l=(a+1)%t.length,u=c[a],h=c[l],d=r[a],f=r[l],p=o,y=o;i.tile.quad(T(u[0],u[1],e),T(h[0],h[1],e),T(f[0],f[1],e-s+y),T(d[0],d[1],e-s+p),[0,0],[Math.hypot(h[0]-u[0],h[1]-u[1]),0],[Math.hypot(h[0]-u[0],h[1]-u[1]),n],[0,n],Le);let g=f[1]-d[1],m=-(f[0]-d[0]),M=Math.hypot(g,m)||1;i.wood.quad(T(d[0],d[1],e-s+p),T(f[0],f[1],e-s+y),T(f[0],f[1],e-s+y-.2),T(d[0],d[1],e-s+p-.2),[0,0],[1,0],[1,.2],[0,.2],[g/M,0,m/M])}}var Xy={shop:"\u94FA\u9762",shophouse:"\u524D\u5E97\u540E\u5B85",house:"\u6C11\u5C45",campus:"\u5B66\u9662\u623F\u820D"};var n0={1:[.61,.571,.479],2:[.847,.539,.147],3:[.745,.216,.05],4:[.451,.06,.024],5:[.2,.05,.12]},Kc=(i,t=.035)=>{let e=1+(He(i)-.5)*2*t;return[e,e*(1+(He(i+"g")-.5)*.015),e*(1+(He(i+"b")-.5)*.02)]},Yy=i=>{let t=.95+He(i+"r")*.1,e=1+(He(i+"rb")-.5)*.04;return[t,t,t*e]};function i0(i,t,e){let n=t.length,s=e.hs??3.3,o=e.h0??3.8;for(let r=0;r<n;r++){let c=t[r],a=t[(r+1)%n],l=Math.hypot(a[0]-c[0],a[1]-c[1]);if(l<.05)continue;let u=[(a[1]-c[1])/l,0,-(a[0]-c[0])/l],h=Math.max(1,Math.round(l/(e.bay||3.6))),d=x=>[c[0]+(a[0]-c[0])*x,c[1]+(a[1]-c[1])*x],f=(x,b)=>{let E=d(x);return T(E[0],E[1],b)},p=(x,b,E,A,w,S=0,R=1)=>x.quad(f(b,A),f(E,A),f(E,w),f(b,w),[b*h,S],[E*h,S],[E*h,R],[b*h,R],u);e.z-e.zb>.02&&i.stone.quad(f(0,e.zb),f(1,e.zb),f(1,e.z),f(0,e.z),[0,0],[l/1.6,0],[l/1.6,(e.z-e.zb)/1.6],[0,(e.z-e.zb)/1.6],u);let y=e.z,g=e.hole?e.hole.i.indexOf(r):-1,m=g>=0?{t1:Array.isArray(e.hole.t1)?e.hole.t1[g]:e.hole.t1,t2:Array.isArray(e.hole.t2)?e.hole.t2[g]:e.hole.t2,z1:e.hole.z1}:null;for(let x=0;x<e.st;x++){let b=x===e.st-1?e.ze:y+(x===0?o:s);if(b<=y+.05){y=b;continue}let[E,A]=e.face(r,x,l),S=b-y>5.4&&A,R=S?y+4.3:b,I=i[E]||i.blank,U=i[A]||i.blank;m&&x===0?(p(I,0,m.t1,y,R),p(I,m.t2,1,y,R),m.z1<R&&p(I,m.t1,m.t2,m.z1,R,(m.z1-y)/(R-y),1)):p(I,0,1,y,R),S&&p(U,0,1,R,b),y=b}let M=e.roof;if(!M)continue;let _=[0,...M.kinks(c,a).filter(x=>x>.001&&x<.999),1],v=_.map(x=>{let b=d(x),E=M.zAt(b[0],b[1]);return E==null?e.ze:Math.max(e.ze,E-.04)});if(v.some(x=>x>e.ze+.06)){let x=[[0,e.ze],[1,e.ze]];for(let E=_.length-1;E>=0;E--)x.push([_[E],v[E]]);let b=ms(x);for(let[E,A,w]of b){let S=x[E],R=x[A],I=x[w];i.blank.tri(f(S[0],S[1]),f(R[0],R[1]),f(I[0],I[1]),[S[0]*h,(S[1]-e.ze)/3.3],[R[0]*h,(R[1]-e.ze)/3.3],[I[0]*h,(I[1]-e.ze)/3.3],u)}}}}function s0(i,t,e,n){for(let s in i){let o=i[s];o instanceof $n&&(o.col=t,o.col2=e,o.bid=n)}}function Vr(i,t,e){for(let n of["tile","ridge","ped","flat","cap","flatWall"])i[n]&&(i[n].col=t,i[n].col2=e)}function o0(i,t,e,n){let s=e.length,o=t.st>t.st3;e.push({kind:"bld",id:t.id,t:t.t,name:t.use||Xy[t.t]||"\u623F\u5B50",st:t.st,st3:t.st3,top:t.top,z:t.z,raised:o,rail:!!t.railcap,pid:t.pid,rise:t.rise||0,c:kr(t.p)});let r=n0[Math.min(5,t.st)];s0(i,Kc(t.b),r,s),Vr(i,Yy(t.b),r.map(y=>y*.85));let c=t.roof,a=vn(t.p),l,h=c.m==="flat"?t.top-.6:t.ze;c.m==="rect"?l=Ae(i,{c:c.c,L:c.L,D:c.D,a:c.a,ze:t.ze,top:t.top,ty:c.ty,oh:.6,ohg:.35,lift:c.ty==="gable"?0:.25,sag:.62,ridgeDeco:c.ty==="xs"}):c.m==="ridge"?l=Ch(i,c.pc,{ze:t.ze,top:t.top,oh:.6}):c.m==="mesh"?l=e0(i,c,{ze:t.ze}):l=Ph(i,a,{top:t.top}),Vr(i,Kc(t.b),r);let d=He(t.b+"t")<.68,f=(y,g,m)=>{let M=t.e[y];if(m<1.6||M==="party")return["blank"];if(t.t==="campus")return g===0?["hall","hallU"]:["hallU"];if(M==="street"){if(g===0)return[t.t==="house"?"court":He(t.id+"s"+y)<.5?"shopA":"shopB"];let _=He(t.id+"L"+g+y)<.62;return[d?_?"upT":"upTd":_?"upP":"upPd"]}return g===0?["court"]:[He(t.id+"L"+g+y)<.45?"upP":"upPd"]},p=c.m==="mesh"?l.zAt():h;if(i0(i,a,{zb:Math.min(t.z0,t.z)-.4,z:t.z,st:t.st,h0:3.8,hs:3.3,ze:p,roof:c.m==="rect"||c.m==="ridge"?l:null,face:f}),(t.t==="shop"||t.t==="shophouse")&&(t.prio||0)>=4.2)for(let y=0;y<a.length;y++){if(t.e[y]!=="street")continue;let g=a[y],m=a[(y+1)%a.length],M=Math.hypot(m[0]-g[0],m[1]-g[1]);if(M<3)continue;let _=(m[1]-g[1])/M,v=-(m[0]-g[0])/M,x=(m[0]-g[0])/M,b=(m[1]-g[1])/M,E=He(t.id+"aw"+y);if(E<.55&&n.awnings.push({a:[g[0]+x*.4,g[1]+b*.4],b:[m[0]-x*.4,m[1]-b*.4],n:[_,v],z:t.z+3.25,col:Math.floor(He(t.id+"ac"+y)*5)}),E>.35){let A=M>7?[.3,.7]:[.5];for(let w of A)n.lanterns.push([g[0]+(m[0]-g[0])*w+_*.7,g[1]+(m[1]-g[1])*w+v*.7,t.z+3.1])}}}function Ih(i,t,e){let n=Math.cos(i.a),s=Math.sin(i.a),o=t[0]-i.c[0],r=t[1]-i.c[1];return Math.abs(o*n+r*s)<=i.L/2+e&&Math.abs(-o*s+r*n)<=i.D/2+e}function Dh(i,t,e,n){if(t.sty==="tower"||t.sty==="kiosk")return;let s=e.length;e.push({kind:"key",id:t.id,name:t.name,sty:t.sty,st:t.st,top:t.top,z:t.z,c:kr(t.p)});let o=vn(t.p),r=["hall","gate","tea","colon"],c=t.stilt?0:t.plat||(r.includes(t.sty)?.45:t.sty==="station"?.3:0),a=t.z+c,l=t.h1||3.8,u=3.3,h=t.flatroof?t.top-.6:a+l+u*(t.st-1),d=t.flatroof?t.top:Math.max(t.top,h+1.6),f=t.eave||1,p=n0[Math.min(5,t.st)];s0(i,Kc(t.id,.04),p,s),c>0&&i.stone.prism(le(o,t.platM||(t.plat?2.2:.7)),Math.min(t.z0,t.z)-.4,a,!0),t.stilt&&Gy(i,o,t.z0,a),Vr(i,[1,1,1],p.map(v=>v*.85)),t.sty==="hut"&&Vr(i,[.86,.74,.55],p.map(v=>v*.85));let y=r.includes(t.sty)||t.sty==="boat"?.75:.2,g=t.roof||"gable",m;if(t.flatroof)m=Ph(i,o,{top:d});else if(t.rp){let v=t.sty==="ruin"?$y(t):null;m=Ch(i,t.rp,{ze:h,top:d,oh:f,skip:v})}else{let v=t.rects.map(([A,w,S,R,I])=>S>=R?{c:[A,w],L:S,D:R,a:I}:{c:[A,w],L:R,D:S,a:I+Math.PI/2});for(let A of v){if(A.L/A.D>1.6)continue;let w=Math.cos(A.a),S=Math.sin(A.a),R=[-1,1].some(U=>v.some(W=>W!==A&&Ih(W,[A.c[0]+w*U*A.L/2,A.c[1]+S*U*A.L/2],.3)));if([-1,1].some(U=>v.some(W=>W!==A&&Ih(W,[A.c[0]-S*U*A.D/2,A.c[1]+w*U*A.D/2],.3)))&&!R){let U=A.L;A.L=A.D,A.D=U,A.a+=Math.PI/2}}let x=v.reduce((A,w)=>w.L*w.D>A.L*A.D?w:A,v[0]),b=v.map(A=>{let w=Math.cos(A.a),S=Math.sin(A.a),R=["auto","auto"],I=A.L,U=A.c.slice();for(let W of[-1,1]){let L=[A.c[0]+w*W*A.L/2,A.c[1]+S*W*A.L/2],O=v.find(H=>H!==A&&Ih(H,L,.3));if(O){let H=Math.min(O.D/2,O.L/2);I+=H,U=[U[0]+w*W*H/2,U[1]+S*W*H/2],R[W>0?1:0]="open"}}return{c:U,L:I,D:A.D,a:A.a,ends:R,main:A===x}}),E=b.map(A=>Ae(i,{c:A.c,L:A.L,D:A.D,a:A.a,ends:A.ends,ze:h,top:A.main?d:d-Math.min(.9,.18*(d-h)),ty:g,oh:f,ohg:Math.min(.6,f*.5),lift:A.L*A.D<60?y*.5:y,sag:r.includes(t.sty)?.5:.62,ridgeDeco:!0}));if(m={zAt:(A,w)=>{let S=null;for(let R of E){let I=R.zAt(A,w);I!=null&&(S==null||I>S)&&(S=I)}return S},kinks:(A,w)=>E.flatMap(S=>S.kinks(A,w)).sort((S,R)=>S-R)},t.skylight){let A=b.find(w=>w.main);Zy(i,A,h,d)}}Vr(i,Kc(t.id,.04),p);let M={hall:v=>v===0?["hall","hallU"]:["hallU"],gate:v=>v===0?["hall","hallU"]:["hallU"],tea:v=>v===0?["shopA"]:["upT"],ware:()=>["ware","blank"],shed:()=>["ware","upTd"],shop:v=>v===0?["shopA"]:["upP"],ruin:()=>["ruin"],house:v=>v===0?["court"]:["upP"],boat:v=>v===0?["court"]:["upT"],station:()=>["station"],factory:()=>["factory"],stone:()=>["stoneF"],hut:()=>["hut"]}[t.sty]||(()=>["court"]),_=null;if(t.pass&&t.rects&&t.rects.length){let[v,x,b,E,A]=t.rects[0],w=Math.max(b,E),S=b>=E?A:A+Math.PI/2,R=t.passu||0,I=Math.cos(S),U=Math.sin(S),W=[],L=[],O=[];for(let H=0;H<o.length;H++){let k=o[H],tt=o[(H+1)%o.length],nt=tt[0]-k[0],it=tt[1]-k[1],bt=Math.hypot(nt,it);if(Math.abs((nt*I+it*U)/bt)<.95)continue;let j=N=>(N[0]-v)*I+(N[1]-x)*U,Mt=j(k),vt=j(tt),K=N=>(N-Mt)/(vt-Mt),$=Math.min(K(R-t.pass/2),K(R+t.pass/2)),ut=Math.max(K(R-t.pass/2),K(R+t.pass/2));$>0&&ut<1&&(W.push(H),L.push($),O.push(ut))}if(W.length){_={i:W,t1:L,t2:O,z1:a+Math.min(l-.6,t.pass>5?5.2:4.4)};let H=t.pass/2,k=Math.min(b,E)/2,tt=(nt,it,bt)=>T(v+I*(nt+R)-U*it,x+U*(nt+R)+I*it,bt);for(let nt of[-1,1])i.blank.quad(tt(nt*H,-k,a),tt(nt*H,k,a),tt(nt*H,k,_.z1),tt(nt*H,-k,_.z1),[0,0],[2,0],[2,1],[0,1],[-I*nt,0,-U*nt]);i.wood.quad(tt(-H,-k,_.z1),tt(H,-k,_.z1),tt(H,k,_.z1),tt(-H,k,_.z1),[0,0],[1,0],[1,1],[0,1],[0,-1,0]),i.stone.quad(tt(-H,-k,a+.02),tt(H,-k,a+.02),tt(H,k,a+.02),tt(-H,k,a+.02),[0,0],[1,0],[1,1],[0,1],Le);for(let nt of[-1,1])n.lanterns.push([v+I*(R+nt*(H+.9))-U*(k+.6),x+U*(R+nt*(H+.9))+I*(k+.6),a+3.6])}}if(t.sty==="colon"){let v=le(o,-.4);for(let b=0;b<v.length;b++){let E=v[b],A=v[(b+1)%v.length],w=Math.hypot(A[0]-E[0],A[1]-E[1]),S=Math.max(1,Math.round(w/3.6));for(let R=0;R<S;R++){let I=R/S;i.red.cyl(E[0]+(A[0]-E[0])*I,E[1]+(A[1]-E[1])*I,a,h,.3,10,!1)}}let x=h-.25;for(let b=0;b<v.length;b++){let E=v[b],A=v[(b+1)%v.length];i.wood.beam(T(E[0],E[1],x),T(A[0],A[1],x),.4,.55)}}else i0(i,o,{zb:t.stilt?a:Math.min(t.z0,t.z)-.4,z:a,st:t.st,h0:l,hs:u,ze:h,roof:!t.flatroof&&(g==="gable"||t.rp)?m:null,face:(v,x)=>M(x),hole:_,bay:r.includes(t.sty)?4.2:t.sty==="factory"?4.4:3.6});if(t.door){let v=t.door,x=v.f*Math.PI/180,b=Math.cos(x),E=Math.sin(x),A=-E,w=b,S=v.w,R=v.h,I=a,U=Math.atan2(w,A),W=(k,tt)=>[v.at[0]+A*k+b*tt,v.at[1]+w*k+E*tt];for(let k of[-1,1]){let tt=W(k*S/4,.07);i.red.box(tt[0],tt[1],I,I+R,S/2-.06,.14,U,1);for(let nt=0;nt<5;nt++)for(let it=-1;it<=1;it++){let bt=W(k*S/4+it*S*.12,.16),j=I+.7+nt*(R-1.2)/4;i.brassG.box(bt[0],bt[1],j,j+.09,.09,.05,U,1)}}for(let k of[-1,1]){let tt=W(k*(S/2+.18),.05);i.wood.box(tt[0],tt[1],I,I+R+.3,.32,.26,U,1)}let L=W(0,.05);i.wood.box(L[0],L[1],I+R,I+R+.36,S+.7,.28,U,1),L=W(0,.12),i.stone.box(L[0],L[1],I-.02,I+.22,S+.4,.4,U,1);let O=t.dbl&&t.st===1?a+l*.6+.75:I+R+.55,H=Math.min(O+1.25,h-.45);L=W(0,.08),i.brassG.box(L[0],L[1],O,H,2.9,.12,U,1),L=W(0,.16),i.ridge.box(L[0],L[1],O+.12,H-.12,2.6,.06,U,1);for(let k of[-1,1]){let tt=W(k*(S/2+1.1),.9);n.lanterns.push([tt[0],tt[1],I+R+.2])}}if(t.pent&&t.st>1)for(let v=1;v<t.st;v++)ui(i,o,a+l+u*(v-1)+.5,1.15,.55);if(t.dbl&&ui(i,o,(t.st===1?a+l*.6:a+l)+.4,f+.3,.75),(t.bal||t.gallery)&&t.st>1)for(let v=1;v<t.st;v++){let x=a+l+u*(v-1)-.1,b=le(o,t.gallery?1.6:1);i.wood.prism(b,x-.18,x,!0,!0);for(let E=0;E<b.length;E++){let A=b[E],w=b[(E+1)%b.length],S=Math.hypot(w[0]-A[0],w[1]-A[1]),R=Math.max(1,Math.round(S/1.3));for(let I=0;I<R;I++){let U=I/R;i.wood.cyl(A[0]+(w[0]-A[0])*U,A[1]+(w[1]-A[1])*U,x,x+1,.07,4,!1)}i.wood.beam(T(A[0],A[1],x+1),T(w[0],w[1],x+1),.12,.12),i.wood.beam(T(A[0],A[1],x+.5),T(w[0],w[1],x+.5),.06,.06)}}t.sty==="ruin"&&Jy(i,t,h,d)}function Gy(i,t,e,n){i.plank.prism(le(t,.5),n-.35,n,!0,!0);let s=le(t,.15);for(let o=0;o<s.length;o++){let r=s[o],c=s[(o+1)%s.length],a=Math.hypot(c[0]-r[0],c[1]-r[1]),l=Math.max(1,Math.round(a/2.6));for(let h=0;h<l;h++){let d=h/l,f=r[0]+(c[0]-r[0])*d,p=r[1]+(c[1]-r[1])*d;i.wood.cyl(f,p,e-1.5,n-.35,.18,7,!1)}let u=e+(n-e)*.45;i.wood.beam(T(r[0],r[1],u),T(c[0],c[1],u),.14,.18)}}function Zy(i,t,e,n){let s=t.L*.72,o=Math.max(2.4,t.D*.26),r=n-.5,c=r+1.6,a=Math.cos(t.a),l=Math.sin(t.a),u=(d,f)=>[t.c[0]+a*d-l*f,t.c[1]+l*d+a*f],h=[u(-s/2,-o/2),u(s/2,-o/2),u(s/2,o/2),u(-s/2,o/2)];for(let d=0;d<4;d++){let f=h[d],p=h[(d+1)%4],y=Math.hypot(p[0]-f[0],p[1]-f[1]),g=[(p[1]-f[1])/y,0,-(p[0]-f[0])/y],m=Math.max(1,Math.round(y/3));i.factory.quad(T(f[0],f[1],r),T(p[0],p[1],r),T(p[0],p[1],c),T(f[0],f[1],c),[0,.15],[m,.15],[m,.75],[0,.75],g)}Ae(i,{c:t.c,L:s+.2,D:o+.2,a:t.a,ze:c,top:c+.9,ty:"gable",oh:.4,ohg:.3,lift:0,sag:.3,ridgeDeco:!1})}function r0(i){if(!(i.rp&&i.rp.length&&i.ruin))return null;let[t,e]=i.rp[0].r,n=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(n,s)||1;n/=o,s/=o;let r=-s,c=n,a=i.ruin.face*Math.PI/180;r*Math.cos(a)+c*Math.sin(a)<0&&(r=-r,c=-c);let l=i.rp.flatMap(f=>f.r),u=1e9,h=-1e9;for(let f of l){let p=(f[0]-t[0])*n+(f[1]-t[1])*s;u=Math.min(u,p),h=Math.max(h,p)}let d=(u+h)/2;return{c:[t[0]+n*d,t[1]+s*d],d:[n,s],n:[r,c]}}function $y(i){let t=r0(i);if(t){let s=[t.c[0]+t.d[0]*1.2+t.n[0]*2,t.c[1]+t.d[1]*1.2+t.n[1]*2];return(o,r)=>{let c=(o-s[0])*t.d[0]+(r-s[1])*t.d[1],a=(o-s[0])*t.n[0]+(r-s[1])*t.n[1];return Math.hypot(c/3,a/1.9)<1}}let e=kr(i.p),n=[e[0]+2,e[1]+2.5];return(s,o)=>Math.hypot((s-n[0])/3.4,(o-n[1])/2.6)<1}function Jy(i,t,e,n){let s=r0(t);if(s){let c=[s.c[0]+s.d[0]*1.2,s.c[1]+s.d[1]*1.2];for(let u=-3;u<=3;u++){let h=[c[0]+s.d[0]*u*.75,c[1]+s.d[1]*u*.75];i.wood.beam(T(h[0]+s.n[0]*3.9,h[1]+s.n[1]*3.9,e+.4+(n-e)*.15),T(h[0]+s.n[0]*.2,h[1]+s.n[1]*.2,n-.25),.14,.18)}let a=[c[0]-s.d[0]*3+s.n[0]*3.3,c[1]-s.d[1]*3+s.n[1]*3.3],l=[c[0]+s.d[0]*3+s.n[0]*.9,c[1]+s.d[1]*3+s.n[1]*.9];i.wood.beam(T(a[0],a[1],e+1.4),T(l[0],l[1],e+.9),.22,.26);return}let o=kr(t.p),r=[o[0]+2,o[1]+2.5];for(let c=-3;c<=3;c++){let a=r[1]+c*.75;i.wood.beam(T(r[0]-4.2,a,e+.4+(n-e)*.15),T(o[0]-.2,a,n-.25),.14,.18)}i.wood.beam(T(r[0]-3.6,r[1]-3,e+1.4),T(r[0]+3.2,r[1]+3,e+.9),.22,.26)}function a0(i,t,e){for(let n of t){let s=n.p;if(!(s.length<2))for(let o=0;o+1<s.length;o++){let r=s[o],c=s[o+1],a=Math.hypot(c[0]-r[0],c[1]-r[1]);if(a<.2)continue;let l=Math.max(1,Math.ceil(a/4));for(let u=0;u<l;u++){let h=u/l,d=(u+1)/l,f=[r[0]+(c[0]-r[0])*h,r[1]+(c[1]-r[1])*h],p=[r[0]+(c[0]-r[0])*d,r[1]+(c[1]-r[1])*d],y=n.z!=null?n.z:e(f[0],f[1]),g=n.z!=null?n.z:e(p[0],p[1]),m=-(c[1]-r[1])/a,M=(c[0]-r[0])/a,_=n.t/2,v=[(f[0]+p[0])/2,(f[1]+p[1])/2],x=1/0;for(let I of[f,v,p])for(let U of[-1,1])x=Math.min(x,e(I[0]+U*m*_,I[1]+U*M*_));let b=Math.min(y,g,x)-.4,E=Math.max(y,g)+n.h,A=(f[0]+p[0])/2,w=(f[1]+p[1])/2,S=a/l+.02,R=Math.atan2(c[1]-r[1],c[0]-r[0]);i.wallBody.box(A,w,b,E-.12,S,n.t,R,.5),i.cap.box(A,w,E-.12,E+.02,S+.04,n.t+.42,R,1),i.ridge.box(A,w,E+.02,E+.24,S+.04,.22,R,1)}}}}function Lh(i,t,e){for(let n of t){if(n.onmark)continue;let s=(n.f||0)*Math.PI/180,o=Math.cos(s),r=Math.sin(s),c=-r,a=o,l=n.at[0],u=n.at[1],h=n.z,d=n.w||3,f=(M,_,v)=>[l+c*M+o*_,u+a*M+r*_,h+v],p=Math.atan2(a,c),y=(M,_,v=.28,x=i.red)=>{let b=f(M,0,0);x.cyl(b[0],b[1],h-.3,h+_,v,8,!0),i.stone.box(b[0],b[1],h-.3,h+.5,.9,.9,p,1)},g=(M,_,v,x,b="xs")=>Ae(i,{c:[l,u],L:M,D:_,a:p,ze:v,top:x,ty:b,oh:.45,ohg:.3,lift:.35,sag:.55,ridgeDeco:!0}),m=n.form||"";if(m==="\u724C\u574A"){let M=d/2+.35,_=n.side??2.6,v=!!n.stone,x=v?7.6:6.6,b=v?5.8:5,E=v?i.coping:i.red,A=v?i.coping:i.wood;for(let U of[-1,1])y(U*M,x,v?.42:.34,E),_>0&&y(U*(M+_),b,v?.38:.3,E);if(_>0)for(let U of[-1,1]){let W=f(U*M,0,b+.9),L=f(U*(M+_),0,b+.9);A.beam(T(W[0],W[1],b+h-.6),T(L[0],L[1],b+h-.6),.3,.5)}let w=f(-M,0,x-.7),S=f(M,0,x-.7);A.beam(T(...w),T(...S),.36,.6);let R=f(-M,0,x-1.7),I=f(M,0,x-1.7);if((v?i.coping:i.red).beam(T(...R),T(...I),.3,.4),v){let U=f(0,.05,0);i.brassG.box(U[0],U[1],h+x-1.5,h+x-.95,Math.min(3.4,d*.5),.1,p,1)}if(g(d+1.6,1.9,h+x,h+x+1.1),_>0)for(let U of[-1,1]){let W=f(U*(M+_/2),0,0);Ae(i,{c:[W[0],W[1]],L:_+.8,D:1.6,a:p,ze:h+b,top:h+b+.8,ty:"xs",oh:.35,lift:.25,sag:.55,ridgeDeco:!1})}for(let U of[-1,1])e.lanterns.push([...f(U*(M-.6),.4,4.3)].slice(0,2).concat(h+4.3))}else if(m==="\u95E8\u697C"||m==="\u5927\u95E8"){let M=d/2+.3,_=m==="\u95E8\u697C"?4.4:4,v=n.stub||[1.6,1.6];for(let E of[-1,1]){y(E*M,_);let A=v[E<0?0:1];if(A>.05){let w=f(E*(M+.1+A/2),0,0);i.wallBody.box(w[0],w[1],h-.3,h+_-.3,A,.7,p,.5)}}let x=f(-M,0,_-.2),b=f(M,0,_-.2);i.wood.beam(T(...x),T(...b),.4,.55),g(d+3.2,3,h+_+.2,h+_+1.5);for(let E of[-1,1])e.lanterns.push([...f(E*(M-.4),.9,0)].slice(0,2).concat(h+_-.7))}else if(m==="\u95E8\u6D1E"){let M=d/2;for(let v of[-1,1]){let x=f(v*(M+.6),0,0);i.stone.box(x[0],x[1],h-.3,h+4.6,1.2,1.4,p,.7)}let _=f(0,0,0);i.stone.box(_[0],_[1],h+3.8,h+4.6,d+2.4,1.4,p,.7),g(d+3,2.2,h+4.7,h+5.5)}else if(m==="\u8FC7\u8857\u697C"){let M=d/2,_=4.3,v=h+_+3.3,x=-3,b=.35,E=M+.9;for(let w of[-1,1]){let S=f(w*(M+.5),-.15,0);i.stone.box(S[0],S[1],h-.3,h+_,1,1,p,.7)}let A=[f(-E,b,0),f(E,b,0),f(E,x,0),f(-E,x,0)];for(let w=0;w<4;w++){let S=A[w],R=A[(w+1)%4],I=Math.hypot(R[0]-S[0],R[1]-S[1]),U=[(R[1]-S[1])/I,0,-(R[0]-S[0])/I],W=Math.max(1,Math.round(I/3));i.upP.quad(T(S[0],S[1],h+_),T(R[0],R[1],h+_),T(R[0],R[1],v),T(S[0],S[1],v),[0,0],[W,0],[W,1],[0,1],U)}i.wood.quad(T(A[0][0],A[0][1],h+_),T(A[1][0],A[1][1],h+_),T(A[2][0],A[2][1],h+_),T(A[3][0],A[3][1],h+_),[0,0],[1,0],[1,1],[0,1],[0,-1,0]);{let w=f(0,(x+b)/2,0);i.coping.box(w[0],w[1],h+_-.05,h+_+.3,2*E+.3,b-x+.3,p,.6)}{let w=f(-M-.2,b+.05,_-.2),S=f(M+.2,b+.05,_-.2);i.wood.beam(T(...w),T(...S),.32,.42)}{let w=f(0,(x+b)/2,0);Ae(i,{c:[w[0],w[1]],L:2*E,D:b-x,a:p,ze:v,top:v+1.7,ty:"xs",oh:.7,ohg:.4,lift:.4,sag:.55,ridgeDeco:!0})}{let w=f(0,b+.08,0);i.brassG.box(w[0],w[1],h+_+.75,h+_+1.75,2.6,.08,p,1),i.ridge.box(w[0],w[1],h+_+.82,h+_+1.68,2.4,.1,p,1)}for(let w of[-1,1])e.lanterns.push([...f(w*(M-.3),b+.5,0)].slice(0,2).concat(h+_-.9))}else if(m==="\u5E93\u95E8"){let M=d/2;for(let x of[-1,1])y(x*M,4.6,.3,i.wood);let _=f(-M,0,4.4),v=f(M,0,4.4);i.wood.beam(T(..._),T(...v),.36,.5)}else if(m==="\u94C1\u95E8"){let M=d/2;for(let _ of[-1,1]){let v=f(_*(M+.5),0,0);i.brick.box(v[0],v[1],h-.3,h+3.7,1,1,p,.5),i.coping.box(v[0],v[1],h+3.7,h+3.95,1.3,1.3,p,.6),i.coping.box(v[0],v[1],h-.3,h+.4,1.2,1.2,p,.6);let x=f(_*(M+.5),.62,0);i.iron.box(x[0],x[1],h+3,h+3.1,.1,.3,p,1),i.brassG.box(x[0],x[1],h+2.6,h+3,.3,.3,p,1)}for(let _ of[-1,1]){let v=_*.04,x=_*M;for(let A=0;A<=12;A++){let w=f(v+(x-v)*A/12,0,0);i.iron.cyl(w[0],w[1],h+.1,h+2.8,.035,4,!1)}for(let A of[.25,1.35,2.55]){let w=f(v,0,A),S=f(x,0,A);i.iron.beam(T(...w),T(...S),.07,.1)}let b=f(v,0,.3),E=f(x,0,2.5);i.iron.beam(T(...b),T(...E),.05,.08)}{let _=f(-(M+.5),0,4.6),v=f(M+.5,0,4.6);i.iron.beam(T(..._),T(...v),.18,.24)}for(let _ of[-1,1]){let v=f(_*(M+.5),0,3.95),x=f(_*(M+.5),0,4.7);i.iron.beam(T(...v),T(...x),.14,.14)}{let _=f(0,.03,0);i.brassG.box(_[0],_[1],h+4.72,h+5.62,3.6,.07,p,1),i.ridge.box(_[0],_[1],h+4.78,h+5.56,3.4,.11,p,1)}{let _=f(M+2.6,-2.2,0);i.brick.box(_[0],_[1],h-.2,h+2.7,2.4,2.2,p,.5),Ae(i,{c:[_[0],_[1]],L:2.4,D:2.2,a:p,ze:h+2.7,top:h+3.45,ty:"gable",oh:.35,ohg:.3,lift:0,sag:.3,ridgeDeco:!1});let v=f(M+1.37,-2.2,0);i.ridge.box(v[0],v[1],h+1.1,h+2,1.1,.06,p+Math.PI/2,1);let x=f(M+2.6,-1.07,0);i.red.box(x[0],x[1],h,h+2.1,.9,.06,p,1)}}else if(m==="\u6805\u95E8"){let M=d/2;for(let x=-M;x<=M+.01;x+=.35){let b=f(x,0,0);i.iron.cyl(b[0],b[1],h,h+2.4,.04,4,!1)}let _=f(-M,0,2.3),v=f(M,0,2.3);i.iron.beam(T(..._),T(...v),.08,.12)}else{let M=d/2+.15,_=3;for(let b of[-1,1])y(b*M,_,.2,i.wood);let v=f(-M,0,_-.15),x=f(M,0,_-.15);i.wood.beam(T(...v),T(...x),.28,.35),g(d+1.6,1.8,h+_+.05,h+_+.85,"gable")}}}function Uh(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),o=n?n.count:s.count,r=0,c=Object.keys(i.attributes),a={},l={},u=[],h=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let M=0,_=c.length;M<_;M++){let v=c[M],x=i.attributes[v];a[v]=new x.constructor(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);let b=i.morphAttributes[v];b&&(l[v]||(l[v]=[]),b.forEach((E,A)=>{let w=new E.array.constructor(E.count*E.itemSize);l[v][A]=new E.constructor(w,E.itemSize,E.normalized)}))}let f=t*.5,p=Math.log10(1/t),y=Math.pow(10,p),g=f*y;for(let M=0;M<o;M++){let _=n?n.getX(M):M,v="";for(let x=0,b=c.length;x<b;x++){let E=c[x],A=i.getAttribute(E),w=A.itemSize;for(let S=0;S<w;S++)v+=`${~~(A[h[S]](_)*y+g)},`}if(v in e)u.push(e[v]);else{for(let x=0,b=c.length;x<b;x++){let E=c[x],A=i.getAttribute(E),w=i.morphAttributes[E],S=A.itemSize,R=a[E],I=l[E];for(let U=0;U<S;U++){let W=h[U],L=d[U];if(R[L](r,A[W](_)),w)for(let O=0,H=w.length;O<H;O++)I[O][L](r,w[O][W](_))}}e[v]=r,u.push(r),r++}}let m=i.clone();for(let M in i.attributes){let _=a[M];if(m.setAttribute(M,new _.constructor(_.array.slice(0,r*_.itemSize),_.itemSize,_.normalized)),M in l)for(let v=0;v<l[M].length;v++){let x=l[M][v];m.morphAttributes[M][v]=new x.constructor(x.array.slice(0,r*x.itemSize),x.itemSize,x.normalized)}}return m.setIndex(u),m}var qi=-4;function l0(i,t){let e=i.hgt,n=atob(e.cm),s=n.length/2,o=new Float32Array(s);for(let h=0;h<s;h++){let d=n.charCodeAt(2*h)|n.charCodeAt(2*h+1)<<8;d&32768&&(d-=65536),o[h]=d/100}let{x0:r,y0:c,nx:a,ny:l}=e;return t&&jy(i,o,r,c,a,l),(h,d)=>{let f=h-r,p=d-c;f=Math.max(0,Math.min(a-1.001,f)),p=Math.max(0,Math.min(l-1.001,p));let y=Math.floor(f),g=Math.floor(p),m=f-y,M=p-g,_=o[g*a+y],v=o[g*a+y+1],x=o[(g+1)*a+y],b=o[(g+1)*a+y+1];return(_*(1-m)+v*m)*(1-M)+(x*(1-m)+b*m)*M}}function jy(i,t,e,n,s,o){let r=(c,a)=>{let l=Math.round(c-e),u=Math.round(a-n);return l<0||u<0||l>=s||u>=o?null:t[u*s+l]};for(let c of i.ret||[]){if(c.tag==="cheek"||c.tag==="cut"||c.tag==="rock")continue;let a=Math.min(c.zi,c.zo),l=Math.max(c.zi,c.zo);if(l-a<.35)continue;let u=c.b[0]-c.a[0],h=c.b[1]-c.a[1],d=Math.hypot(u,h);if(d<.05)continue;let f=u/d,p=h/d,y=-p,g=f,m=c.a[0]+u/2,M=c.a[1]+h/2,_=r(m+y*2.5,M+g*2.5),v=r(m-y*2.5,M-g*2.5);if(_==null||v==null||Math.abs(_-v)<.3)continue;_>v&&(y=-y,g=-g);let x=c.t||.55,b=c.o?c.o[0]*y+c.o[1]*g:0,E=b-x/2,A=b+x/2;c._q=[y,g],c._bf=E,c._zh=l;let w=Math.ceil(Math.max(Math.abs(A)+1.1,Math.abs(E)+1.1))+1,S=Math.max(0,Math.floor(Math.min(c.a[0],c.b[0])-w-e)),R=Math.min(s-1,Math.ceil(Math.max(c.a[0],c.b[0])+w-e)),I=Math.max(0,Math.floor(Math.min(c.a[1],c.b[1])-w-n)),U=Math.min(o-1,Math.ceil(Math.max(c.a[1],c.b[1])+w-n));for(let W=I;W<=U;W++)for(let L=S;L<=R;L++){let O=e+L-c.a[0],H=n+W-c.a[1],k=O*f+H*p;if(k<-.35||k>d+.35)continue;let tt=O*y+H*g,nt=W*s+L;tt>E&&tt<=A+1.05?t[nt]>a+.01&&(t[nt]=a+.01):tt>E-1&&tt<=E&&t[nt]<l&&(t[nt]=l)}}}function h0(i,t,e){let[n,s,o,r]=i.meta.bbox,c=128,a=i.meta.board,l=new re({map:e,color:"#d4cbbd",alphaTest:.5,roughness:.96,metalness:0}),u=new _e;u.material=l,u.name="terrain";let h=(M,_)=>Hn([M,_],a),d=Math.min(...a.map(M=>M[0])),f=Math.max(...a.map(M=>M[0])),p=Math.min(...a.map(M=>M[1])),y=Math.max(...a.map(M=>M[1])),g=[],m=(M,_,v,x,b)=>{let E=[],A=[];for(let j=M;j<v;j+=b)E.push(j);E.push(v);for(let j=_;j<x;j+=b)A.push(j);A.push(x);let w=E.length,S=A.length,R=[],I=[],U=[],W=[],L=(j,Mt)=>{let vt=Math.max(.5,b*.5),K=(t(j+vt,Mt)-t(j-vt,Mt))/(2*vt),$=(t(j,Mt+vt)-t(j,Mt-vt))/(2*vt),ut=Math.hypot(K,1,$);return[-K/ut,1/ut,-$/ut]},O=(j,Mt,vt)=>(R.push(...T(j,Mt,t(j,Mt)-vt)),I.push(...L(j,Mt)),U.push((j-n)/(o-n),1-(Mt-s)/(r-s)),R.length/3-1);for(let j=0;j<S;j++)for(let Mt=0;Mt<w;Mt++)O(E[Mt],A[j],0);for(let j=0;j<S-1;j++)for(let Mt=0;Mt<w-1;Mt++){let vt=j*w+Mt,K=vt+1,$=vt+w,ut=$+1;W.push(vt,$,K,K,$,ut)}let H=j=>{let Mt=j.map(vt=>{let K=E[vt%w],$=A[Math.floor(vt/w)];return O(K,$,2)});for(let vt=0;vt<j.length-1;vt++){let K=j[vt],$=j[vt+1],ut=Mt[vt],N=Mt[vt+1];W.push(K,$,ut,$,N,ut,K,ut,$,$,ut,N)}},k=[],tt=[],nt=[],it=[];for(let j=0;j<w;j++)k.push(j),tt.push((S-1)*w+j);for(let j=0;j<S;j++)nt.push(j*w),it.push(j*w+w-1);H(k),H(tt),H(nt),H(it);let bt=new Ye;return bt.setAttribute("position",new be(R,3)),bt.setAttribute("normal",new be(I,3)),bt.setAttribute("uv",new be(U,2)),bt.setIndex(W),bt.computeBoundingSphere(),bt};for(let M=s;M<r;M+=c)for(let _=n;_<o;_+=c){let v=Math.min(o,_+c),x=Math.min(r,M+c);if(v<d-2||_>f+2||x<p-2||M>y+2)continue;let b=!1;for(let S=M;S<=x&&!b;S+=4)for(let R=_;R<=v&&!b;R+=4)h(R,S)&&(b=!0);if(!b)continue;let E=0,A=0;for(let S=M;S<=x;S+=16)for(let R=_;R<=v;R+=16)E+=t(R,S),A++;let w=[1,2,4].map((S,R)=>{let I=new Gt(m(_,M,v,x,S),l);return I.receiveShadow=!0,I.castShadow=!1,I.visible=R===0,u.add(I),I});g.push({x0:_,y0:M,x1:v,y1:x,z:E/A,lv:w,cur:0})}return u.lod=(M,_,v)=>{for(let x of g){let b=Math.max(0,x.x0-M,M-x.x1),E=Math.max(0,x.y0-_,_-x.y1),A=Math.hypot(b,E,v-x.z),w=A<125?0:A<330?1:2;w!==x.cur&&(x.lv[x.cur].visible=!1,x.lv[w].visible=!0,x.cur=w)}},u.lodAll=M=>{for(let _ of g)_.lv[_.cur].visible=!1,_.lv[M].visible=!0,_.cur=M},u}function u0(i,t,e){let n=vn(i.meta.board),s=i.water.map(c=>({z:c.z,rings:c.p})),o=(c,a)=>{for(let l of s)for(let u of l.rings)if(Hn([c,a],u))return l.z;return null},r=0;for(let c=0;c<n.length;c++){let a=n[c],l=n[(c+1)%n.length],u=Math.hypot(l[0]-a[0],l[1]-a[1]),h=Math.max(1,Math.ceil(u/1)),d=[(l[1]-a[1])/u,0,-(l[0]-a[0])/u];for(let f=0;f<h;f++){let p=f/h,y=(f+1)/h,g=[a[0]+(l[0]-a[0])*p,a[1]+(l[1]-a[1])*p],m=[a[0]+(l[0]-a[0])*y,a[1]+(l[1]-a[1])*y],M=t(g[0],g[1]),_=t(m[0],m[1]),v=(r+u*p)/8,x=(r+u*y)/8;e.soil.quad(T(g[0],g[1],qi),T(m[0],m[1],qi),T(m[0],m[1],_),T(g[0],g[1],M),[v,qi/8],[x,qi/8],[x,_/8],[v,M/8],d);let b=o(g[0]-d[0]*.5,g[1]-d[2]*.5),E=o(m[0]-d[0]*.5,m[1]-d[2]*.5);b!=null&&E!=null&&(b>M+.02||E>_+.02)&&e.waterCut.quad(T(g[0],g[1],M),T(m[0],m[1],_),T(m[0],m[1],E),T(g[0],g[1],b),[0,0],[1,0],[1,1],[0,1],d)}r+=u}for(let[c,a,l]of ms(n))e.soil.tri(T(n[c][0],n[c][1],qi),T(n[a][0],n[a][1],qi),T(n[l][0],n[l][1],qi),[0,0],[0,0],[0,0],[0,-1,0])}function f0(i,t,e){for(let n of i.ret){let s=Math.min(n.zi,n.zo)-.3,o=Math.max(n.zi,n.zo)+.3,r=(n.a[0]+n.b[0])/2,c=(n.a[1]+n.b[1])/2,a=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1])+.05,l=Math.atan2(n.b[1]-n.a[1],n.b[0]-n.a[0]);if(n.tag==="cut"||n.tag==="rock"){t.cliff.box(r,c,s,o-.25,a,n.tag==="cut"?1.5:1.2,l,.18);continue}let u=n.o?n.o[0]:0,h=n.o?n.o[1]:0,d=n.t||.55;if(t.stone.box(r+u,c+h,s,o,a,d,l,.6),n._q){let f=n._bf-.5;t.stone.box(r+n._q[0]*f,c+n._q[1]*f,s,n._zh+.03,a,1,l,.6)}t.coping.box(r+u,c+h,o,o+.12,a,d+.15,l,.6)}for(let n of i.quay){let s=(n.a[0]+n.b[0])/2-n.n[0]*.4,o=(n.a[1]+n.b[1])/2-n.n[1]*.4,r=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1])+.06,c=Math.atan2(n.b[1]-n.a[1],n.b[0]-n.a[0]);if(n.zt-n.zw>4.5){t.cliff.box(s,o,n.zw-1.8,n.zt+.05,r,2,c,.18),t.wet.box(s-n.n[0]*.03,o-n.n[1]*.03,n.zw-.25,n.zw+.3,r,2.06,c,.4);continue}t.quay.box(s,o,n.zw-1.8,n.zt+.2,r,2,c,.4),t.quay.box(s-n.n[0]*.05,o-n.n[1]*.05,n.zt+.2,n.zt+.38,r,2.15,c,.4),t.wet.box(s-n.n[0]*.03,o-n.n[1]*.03,n.zw-.25,n.zw+.32,r,2.06,c,.4)}for(let n of i.stairs)if(n.box){let[s,o,r,c]=n.box,[a,l]=n.z,u=/ramp/.test(n.id),h=u?1:Math.max(2,Math.round(Math.abs(l-a)/.16));for(let d=0;d<h;d++){let f=d/h,p=(d+1)/h,y=u?null:a+(l-a)*(a<l?p:f);if(u){let M=(w,S)=>n.ax==="x"?[s+(r-s)*w,S?c:o]:[S?r:s,o+(c-o)*w],_=a,v=l,x=M(0,0),b=M(0,1),E=M(1,0),A=M(1,1);t.stone.quad(T(x[0],x[1],_),T(E[0],E[1],v),T(A[0],A[1],v),T(b[0],b[1],_),[0,0],[4,0],[4,2],[0,2],Le);continue}let g=y,m=Math.min(a,l)-.3;n.ax==="x"?t.stone.box(s+(r-s)*(f+p)/2,(o+c)/2,m,g,Math.abs(r-s)/h+.01,Math.abs(c-o),0,.8):t.stone.box((s+r)/2,o+(c-o)*(f+p)/2,m,g,Math.abs(r-s),Math.abs(c-o)/h+.01,0,.8)}}else if(n.line){let[s,o]=n.line,[r,c]=n.z,a=Math.hypot(o[0]-s[0],o[1]-s[1]),l=Math.atan2(o[1]-s[1],o[0]-s[0]);if(Math.abs(c-r)<.2){let h=e((s[0]+o[0])/2,(s[1]+o[1])/2);r>h+.5&&t.stone.box((s[0]+o[0])/2,(s[1]+o[1])/2,r-.4,r,a,n.w,l,.6);continue}let u=Math.max(2,Math.round(Math.abs(c-r)/.16));for(let h=0;h<u;h++){let d=(h+.5)/u,f=s[0]+(o[0]-s[0])*d,p=s[1]+(o[1]-s[1])*d,y=r+(c-r)*(r<c?(h+1)/u:h/u);t.stone.box(f,p,Math.min(r,c)-.3,y,a/u+.01,n.w,l,.8)}}for(let n of i.steps3){let s=e(n.at[0],n.at[1]),o=Math.abs(n.dz||.3);t.stone.box(n.at[0],n.at[1],s-.2,s+Math.min(.45,o),1.6,1.2,0,.8)}}function d0(i,t,e,n,s){for(let o of i.marks){let[r,c]=o.c,a=o.z;if(o.k==="statue"){t.stone.box(r,c,a-.2,a+.6,5,5,o.a,.7),t.stone.box(r,c,a+.6,a+3,2.2,2.2,o.a,.7),t.coping.box(r,c,a+3,a+3.3,2.6,2.6,o.a,.7);let l=n.bronze,u=new _e,[h,d,f]=T(r,c,a+3.3);u.position.set(h,d,f),u.rotation.y=-Math.PI/2;let p=new Gt(new ye(.45,.85,2.5,12),l);p.position.y=1.25,u.add(p);let y=new Gt(new ye(.42,.48,.9,12),l);y.position.y=2.9,u.add(y);let g=new Gt(new Ln(.3,14,10),l);g.position.y=3.6,u.add(g);let m=new Gt(new ye(.2,.3,.35,10),l);m.position.y=3.95,u.add(m);let M=new Gt(new ye(.09,.09,.9,8),l);M.position.set(.5,2.7,.2),M.rotation.z=1.2,u.add(M),u.traverse(_=>{_.castShadow=!0}),e.add(u)}else if(o.k==="rocks"){let l=Be(Math.floor(He(o.id)*1e6)),u=o.screen?9:14;for(let h=0;h<u;h++){let d=(l()-.5)*o.L*.8,f=(l()-.5)*o.D*.6,p=Math.cos(o.a),y=Math.sin(o.a),g=r+p*d-y*f,m=c+y*d+p*f,M=.8+l()*(o.screen?1.6:1.3),_=new Mr(M,0);_.scale(1,o.screen?1.9:1.2,.8);let v=new Gt(_,n.rock),x=T(g,m,s(g,m)+M*.6);v.position.set(...x),v.rotation.set(l()*3,l()*3,l()*3),v.castShadow=v.receiveShadow=!0,e.add(v)}}else if(o.k==="pavilion-v6"){let l=Math.max(2.6,o.r-.3),u=Array.from({length:8},(f,p)=>[r+Math.cos(p*Math.PI/4+Math.PI/8)*l,c+Math.sin(p*Math.PI/4+Math.PI/8)*l]);t.stone.prism(le(u,.6),a-2.2,a+.3,!0);for(let f of u)t.red.cyl(f[0],f[1],a+.3,a+3.5,.18,8,!1);for(let f=0;f<8;f++){let p=u[f],y=u[(f+1)%8];t.wood.beam(T(p[0],p[1],a+3.4),T(y[0],y[1],a+3.4),.22,.3),t.red.beam(T(p[0],p[1],a+.85),T(y[0],y[1],a+.85),.1,.08)}let h=u.map(f=>[r+(f[0]-r)*1.42,c+(f[1]-c)*1.42]),d=o.top;for(let f=0;f<8;f++){let p=h[f],y=h[(f+1)%8],g=[(p[0]+y[0])/2,(p[1]+y[1])/2];t.tile.tri(T(p[0],p[1],a+3.6+.35),T(g[0],g[1],a+3.6),T(r,c,d),[0,0],[1,0],[.5,3],Le),t.tile.tri(T(g[0],g[1],a+3.6),T(y[0],y[1],a+3.6+.35),T(r,c,d),[1,0],[2,0],[.5,3],Le),t.ridge.beam(T(p[0],p[1],a+4.05),T(r,c,d+.1),.22,.22)}t.coping.cyl(r,c,d-.1,d+.7,.22,8)}else if(o.k==="xie"){t.stone.box(r,c,a-2,a+.3,o.L+1.2,o.D+1.2,o.a,.6);let l=Math.cos(o.a),u=Math.sin(o.a);for(let[h,d]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,-1],[0,1]])t.red.cyl(r+l*h*o.L/2-u*d*o.D/2,c+u*h*o.L/2+l*d*o.D/2,a+.3,a+3.6,.2,8,!1);Ae(t,{c:[r,c],L:o.L,D:o.D,a:o.a,ze:a+3.7,top:o.top,ty:"xs",oh:1,lift:.6,sag:.5,ridgeDeco:!0});for(let h of[-1,1])t.red.beam(T(r-l*o.L/2-u*h*o.D/2,c-u*o.L/2+l*h*o.D/2,a+.9),T(r+l*o.L/2-u*h*o.D/2,c+u*o.L/2+l*h*o.D/2,a+.9),.1,.1)}else if(o.k==="well"){t.stone.cyl(r,c,a-.2,a+.75,1,12),t.wallBody.cyl(r,c,a+.7,a+.78,.7,12);for(let l of[-1,1])t.wood.box(r+l*1.25,c,a,a+2.6,.22,.22,0,1);t.wood.box(r,c,a+2.4,a+2.6,2.8,.18,0,1),Ae(t,{c:[r,c],L:3.4,D:2.4,a:0,ze:a+2.7,top:a+3.5,ty:"gable",oh:.3,ohg:.3,ridgeDeco:!1})}else if(o.k==="watertower"){let l=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([u,h])=>[r+u*2.2,c+h*2.2]);for(let u of l)t.iron.beam(T(u[0],u[1],a),T(r+(u[0]-r)*.7,c+(u[1]-c)*.7,33.2),.35,.35);for(let u of[25.5,29.5])for(let h=0;h<4;h++){let d=l[h],f=l[(h+1)%4],p=1-.3*(u-a)/(33.2-a);t.iron.beam(T(r+(d[0]-r)*p,c+(d[1]-c)*p,u),T(r+(f[0]-r)*p,c+(f[1]-c)*p,u),.18,.18)}t.iron.cyl(r,c,33.2,33.6,3.2,16),t.brassG.cyl(r,c,33.6,38.4,2.9,20);for(let u of[34.8,36.4,37.8])t.iron.cyl(r,c,u,u+.18,2.96,20,!1);for(let u=0;u<14;u++){let h=u/14*Math.PI*2,d=(u+1)/14*Math.PI*2;t.iron.tri(T(r+Math.cos(h)*3.1,c+Math.sin(h)*3.1,38.4),T(r+Math.cos(d)*3.1,c+Math.sin(d)*3.1,38.4),T(r,c,40),[0,0],[1,0],[.5,1],Le)}}else if(o.k==="steelstair"){let u=[[-2.3,-2.3],[2.3,-2.3],[2.3,2.3],[-2.3,2.3]].map(([f,p])=>[r+f,c+p]);for(let f of u)t.iron.box(f[0],f[1],a,31.2,.25,.25,0,1);let h=a,d=0;for(;h<31;){let f=Math.min(31.2,h+2.4);t.iron.box(r,c+(d%2?2.3-.7:-2.3+.7),f-.12,f,2*2.3,1.4,0,1);let p=[r-2.3+.3,c+(d%2?-2.3+.7:2.3-.7)],y=[r+2.3-.3,c+(d%2?2.3-.7:-2.3+.7)];t.iron.beam(T(r-2.3+.4,c,h+.1),T(r+2.3-.4,c,f),1.1,.16),h=f,d++}}else if(o.k==="crane"){let u=[[-1.4,-1.4],[1.4,-1.4],[1.4,1.4],[-1.4,1.4]].map(([y,g])=>[r+y,c+g]),h=33.5;for(let y of u)t.iron.box(y[0],y[1],a,h,.3,.3,0,1);for(let y=a+2.5;y<h;y+=3)for(let g=0;g<4;g++){let m=u[g],M=u[(g+1)%4];t.iron.beam(T(m[0],m[1],y),T(M[0],M[1],y+3),.12,.12),t.iron.beam(T(m[0],m[1],y),T(M[0],M[1],y),.14,.14)}t.wood.box(r,c,h,h+2.4,3.6,3.2,0,1),Ae(t,{c:[r,c],L:4.2,D:3.8,a:0,ze:h+2.4,top:h+3.4,ty:"gable",oh:.3,ohg:.2,ridgeDeco:!1});let d=15,f=c+d;t.iron.beam(T(r,c-6,h+1),T(r,f,h+1),.9,1.1),t.iron.beam(T(r,c,h+4.6),T(r,f-1,h+1.4),.12,.12),t.iron.beam(T(r,c,h+4.6),T(r,c-6,h+1.4),.12,.12),t.iron.cyl(r,c,h+2.4,h+4.8,.18,6),t.stone.box(r,c-5.4,h+.2,h+2,1.8,1.6,0,1);let p=o.zw??0;t.iron.beam(T(r,f-.8,h+.5),T(r,f-.8,p+5.2),.05,.05),t.wood.box(r,f-.8,p+3.6,p+5,2.2,1.6,.3,1)}else if(o.k==="tanks"){let l=[[r-1.6,c-.6],[r+1.5,c-.9],[r,c+1.6]];for(let[u,h]of l){t.brassG.cyl(u,h,a+.4,a+3.6,1.05,16);for(let d=0;d<12;d++){let f=d/12*Math.PI*2,p=(d+1)/12*Math.PI*2;t.brassG.tri(T(u+Math.cos(f)*1.05,h+Math.sin(f)*1.05,a+3.6),T(u+Math.cos(p)*1.05,h+Math.sin(p)*1.05,a+3.6),T(u,h,a+4.3),[0,0],[1,0],[.5,1],Le)}t.iron.cyl(u,h,a+1.2,a+1.35,1.1,16,!1),t.iron.cyl(u,h,a+2.8,a+2.95,1.1,16,!1),t.iron.box(u,h,a,a+.4,2.4,2.4,0,1)}t.iron.beam(T(l[0][0],l[0][1],a+3),T(l[1][0],l[1][1],a+3),.2,.2),t.iron.beam(T(l[1][0],l[1][1],a+2.2),T(l[2][0],l[2][1],a+2.2),.2,.2)}}}var c0={ginkgo:{col:["#e0ac33","#d4962a","#e9c049","#c98426"],h:1.45,trunk:3},green:{col:["#6f8a48","#5d7a3e","#7e9850"],h:1.2,trunk:2.6},pine:{col:["#3f5b3b","#365234","#4a6644"],h:.85,trunk:4.2},maple:{col:["#b8572e","#c86a33","#a3442a"],h:1.15,trunk:2.6},bamboo:{col:["#6f8f45","#7d9b4c","#5f7e3c"],h:3.2,trunk:.6},willow:{col:["#93a85a","#a1b466","#84994f"],h:1.5,trunk:2.2},blossom:{col:["#e7b3bd","#dc9fac","#efc7cc","#d58f9f"],h:1.05,trunk:2.4},screen:{col:["#4d6b3b","#44623a","#587646"],h:2.1,trunk:1.4}};function Ky(i,t){let e=Be(i),n=[],s=t?5:6;for(let l=0;l<s;l++){let u=new as(.55+e()*.25,1),h=e()*Math.PI*2,d=l===0?0:.45+e()*.25;u.translate(Math.cos(h)*d,(t?.15:.35)*(e()-.3)+(l===0?.25:0),Math.sin(h)*d),n.push(u)}let o=n.map(l=>{let u=Uh(l.index?l.toNonIndexed():l);u.deleteAttribute("normal"),u.deleteAttribute("uv");let h=Uh(u),d=h.attributes.position;for(let f=0;f<d.count;f++){let p=d.getX(f),y=d.getY(f),g=d.getZ(f),m=1+(Math.sin(p*7.1+y*3.3)+Math.cos(g*5.7-y*4.1))*.07;d.setXYZ(f,p*m,y*m,g*m)}return h.computeVertexNormals(),h.toNonIndexed()}),r=[],c=[];for(let l of o)r.push(...l.attributes.position.array),c.push(...l.attributes.normal.array);let a=new Ye;return a.setAttribute("position",new be(r,3)),a.setAttribute("normal",new be(c,3)),a}function Qy(i,t){let e=Be(i+7),n=[],s=[];for(let r=0;r<3;r++){let c=new as(.62+e()*.2,0).toNonIndexed(),a=e()*Math.PI*2+r*2.1,l=r===0?0:.42;c.translate(Math.cos(a)*l,(t?.1:.3)*(r===0?1:-.2),Math.sin(a)*l),c.computeVertexNormals(),n.push(...c.attributes.position.array),s.push(...c.attributes.normal.array)}let o=new Ye;return o.setAttribute("position",new be(n,3)),o.setAttribute("normal",new be(s,3)),o}function p0(i,t,e,n){let s={},o=i.trees.map(b=>({...b})).concat(n||[]);for(let b of o)(s[b.sp]=s[b.sp]||[]).push(b);let r=new ye(.16,.26,1,6);r.translate(0,.5,0);let c=new re({color:"#5b4331",roughness:.9}),a=[],l=[],u=[];for(let b in s){let E=s[b],A=c0[b]||c0.green,w=Ky(b.length*97+13,b==="pine"),S=new re({color:"#ffffff",roughness:.88,metalness:0}),R=new vi(w,S,E.length),I=new vi(r,c,E.length),U=new vi(Qy(b.length*97+13,b==="pine"),S,E.length);R.castShadow=!0,R.receiveShadow=!0,I.castShadow=!0,U.castShadow=!0,U.receiveShadow=!0,U.count=0,R.frustumCulled=!1,U.frustumCulled=!1;let W=new xe,L=new xn,O=new Y,H=new Y,k=new ee,tt=u.length,nt={im:R,it:I,lo:U,pc:[],qc:[],sc:[],pt:[],st:[],cc:[]};u.push(nt),E.forEach((it,bt)=>{let j=it.r,Mt=Be(Math.floor(He(it.at.join(","))*1e6)+1),vt=it.z??e(it.at[0],it.at[1]),K=!!it.big,$=K?it.trunk:A.trunk*(.8+Mt()*.4)*(j/2.6),[ut,N,F]=T(it.at[0],it.at[1],vt);L.setFromAxisAngle(new Y(0,1,0),Mt()*Math.PI*2),b==="bamboo"?(O.set(j*.42,j*1.35*(.85+Mt()*.3),j*.42),H.set(ut,N+j*1.25,F)):(O.set(j,j*A.h*(.9+Mt()*.2),j),H.set(ut,N+$+j*A.h*.55,F)),W.compose(H,L,O),R.setMatrixAt(bt,W),nt.pc.push(H.clone()),nt.qc.push(L.clone()),nt.sc.push(O.clone()),K||l.push({X:H.x,Z:H.z,yb:H.y-1*O.y,yt:H.y+1.25*O.y,hr:1.55*O.x,g:tt,i:bt,f:1,tf:1}),O.set(K?2.2:b==="bamboo"?.35:1,b==="bamboo"?j*1.2:$+j*.5,K?2.2:b==="bamboo"?.35:1),H.set(ut,N-.2,F),W.compose(H,L,O),I.setMatrixAt(bt,W),nt.pt.push(H.clone()),nt.st.push(O.clone()),k.set(A.col[Math.floor(Mt()*A.col.length)]),k.multiplyScalar(.92+Mt()*.16),R.setColorAt(bt,k),U.setColorAt(bt,k),nt.cc.push(k.clone())}),R.instanceMatrix.needsUpdate=!0,R.instanceColor&&(R.instanceColor.needsUpdate=!0),R.userData.sp=b,I.userData.sp=b,U.userData.sp=b,t.add(R),t.add(I),t.add(U),a.push(R,I,U)}let h=new xe,d=new Y(1e9,0,0);a.lod=(b,E)=>{if(!E&&b.distanceTo(d)<6)return!1;d.copy(b);for(let A of u){let w=0,S=0;for(let R=0;R<A.pc.length;R++){let I=A.pc[R].distanceTo(b)<110,U=I?A.im:A.lo,W=I?w++:S++;h.compose(A.pc[R],A.qc[R],A.sc[R]),U.setMatrixAt(W,h),U.setColorAt(W,A.cc[R])}A.im.count=w,A.lo.count=S;for(let R of[A.im,A.lo])R.instanceMatrix.needsUpdate=!0,R.instanceColor&&(R.instanceColor.needsUpdate=!0)}return!0};let f=10,p=(b,E)=>b*100003+E,y=new Map;for(let b of l){let E=b.hr+1;for(let A=Math.floor((b.X-E)/f);A<=Math.floor((b.X+E)/f);A++)for(let w=Math.floor((b.Z-E)/f);w<=Math.floor((b.Z+E)/f);w++){let S=p(A,w);y.has(S)||y.set(S,[]),y.get(S).push(b)}}let g=new xe,m=new Y,M=new Y,_=new Y(1e9,0,0),v=new Set,x=b=>{let E=u[b.g],A=b.i,w=Math.max(b.f,1e-4);m.copy(E.sc[A]).multiplyScalar(w),g.compose(E.pc[A],E.qc[A],m),E.im.setMatrixAt(A,g),m.copy(E.st[A]).multiplyScalar(w),g.compose(E.pt[A],E.qc[A],m),E.it.setMatrixAt(A,g)};return a.fade=(b,E,A,w)=>{let S=new Set;if(E){let L=b.distanceTo(E),O=Math.max(1,Math.ceil(L/.5));for(let H=0;H<=O;H++){let k=H/O,tt=b.x+(E.x-b.x)*k,nt=b.y+(E.y-b.y)*k,it=b.z+(E.z-b.z)*k;for(let bt of y.get(p(Math.floor(tt/f),Math.floor(it/f)))||[])!S.has(bt)&&nt>bt.yb-.7&&nt<bt.yt+.7&&Math.hypot(tt-bt.X,it-bt.Z)<bt.hr+.7&&S.add(bt)}w.getWorldDirection(M);for(let H=Math.floor((b.x-6)/f);H<=Math.floor((b.x+6)/f);H++)for(let k=Math.floor((b.z-6)/f);k<=Math.floor((b.z+6)/f);k++)for(let tt of y.get(p(H,k))||[]){if(S.has(tt))continue;let nt=tt.X-b.x,it=tt.Z-b.z,bt=Math.max(tt.yb,Math.min(tt.yt,b.y));if(Math.hypot(nt,it)-tt.hr>4||Math.abs(bt-b.y)>4)continue;let j=(tt.yb+tt.yt)/2-b.y,Mt=Math.hypot(nt,j,it)||1;(nt*M.x+j*M.y+it*M.z)/Mt>-.2&&S.add(tt)}}let R=b.distanceTo(_)>3;_.copy(b);let I=R?1:A*5,U=R?1:A*2.5,W=new Set;for(let L of S)L.tf=0,v.add(L);for(let L of v){S.has(L)||(L.tf=1);let O=L.f;L.f=L.tf<L.f?Math.max(L.tf,L.f-I):Math.min(L.tf,L.f+U),L.f!==O&&(x(L),W.add(L.g)),L.f===1&&L.tf===1&&v.delete(L)}for(let L of W)u[L].im.instanceMatrix.needsUpdate=!0,u[L].it.instanceMatrix.needsUpdate=!0;return S.size},a}var gs=Math.PI*2,Ei=(i,t,e,n,s=0)=>Array.from({length:n},(o,r)=>[i+Math.cos(s+r*gs/n)*e,t+Math.sin(s+r*gs/n)*e]),Ee=(i,t,e,n,s)=>{let o=Math.cos(s),r=Math.sin(s);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([c,a])=>[i+o*c*e/2-r*a*n/2,t+r*c*e/2+o*a*n/2])},bn=(i,t,e)=>{let n=Math.cos(e),s=Math.sin(e);return(o,r)=>[i+n*o-s*r,t+s*o+n*r]};function An(i,t,e,n,s,o=3.6,r=0,c=1){let a=vn(e),l=a.length;for(let u=0;u<l;u++){let h=a[u],d=a[(u+1)%l],f=Math.hypot(d[0]-h[0],d[1]-h[1]);if(f<.05)continue;let p=[(d[1]-h[1])/f,0,-(d[0]-h[0])/f],y=o?Math.max(1,Math.round(f/o)):1;i[t].quad(T(h[0],h[1],n),T(d[0],d[1],n),T(d[0],d[1],s),T(h[0],h[1],s),[0,r],[y,r],[y,c],[0,c],p)}}function Vn(i,t,e,n,s,o,r,c=14,a=!0){for(let l=0;l<c;l++){let u=l/c*gs,h=(l+1)/c*gs,d=(u+h)/2,f=(p,y,g)=>T(t+Math.cos(p)*y,e+Math.sin(p)*y,g);i.quad(f(u,o,n),f(h,o,n),f(h,r,s),f(u,r,s),[l/c*4,n/2],[(l+1)/c*4,n/2],[(l+1)/c*4,s/2],[l/c*4,s/2],[Math.cos(d),(o-r)/Math.max(.1,s-n),Math.sin(d)]),a&&i.tri(T(t,e,s),f(u,r,s),f(h,r,s),[0,0],[0,0],[0,0],Le)}}function Nh(i,t,e,n,s,o,r=1.4,c=.35){let a=t.map(u=>[e+(u[0]-e)*r,n+(u[1]-n)*r]),l=a.length;for(let u=0;u<l;u++){let h=a[u],d=a[(u+1)%l],f=[(h[0]+d[0])/2,(h[1]+d[1])/2];i.tile.tri(T(h[0],h[1],s+c),T(f[0],f[1],s),T(e,n,o),[0,0],[1,0],[.5,3],Le),i.tile.tri(T(f[0],f[1],s),T(d[0],d[1],s+c),T(e,n,o),[1,0],[2,0],[.5,3],Le),i.tile.tri(T(h[0],h[1],s+c-.02),T(e,n,s+.4),T(d[0],d[1],s+c-.02),[0,0],[1,0],[.5,1],[0,-1,0]),i.ridge.beam(T(h[0],h[1],s+c+.12),T(e,n,o+.1),.22,.22)}}function fi(i,t,e,n=1,s=1.3,o="wood",r=!0){let c=t.length;for(let a=0;a<(r?c:c-1);a++){let l=t[a],u=t[(a+1)%c],h=Math.hypot(u[0]-l[0],u[1]-l[1]),d=Math.max(1,Math.round(h/s));for(let f=0;f<d;f++){let p=f/d;i[o].cyl(l[0]+(u[0]-l[0])*p,l[1]+(u[1]-l[1])*p,e,e+n,.06,4,!1)}i[o].beam(T(l[0],l[1],e+n),T(u[0],u[1],e+n),.11,.11)}}function Qc(i,t,e,n,s,o,r=1.1){let c=t.cream,a=new _e,[l,u,h]=T(e,n,s);a.position.set(l,u,h),a.rotation.y=-o;let d=new Gt(new ye(r,r,.14,28),c);d.rotation.z=Math.PI/2,a.add(d);let f=new Gt(new Ls(r+.03,.1,6,28),t.brass);f.rotation.y=Math.PI/2,a.add(f);let p=(y,g)=>{let m=new Gt(new Te(.05,y,.07),t.ironM);m.geometry.translate(0,y/2,0),m.position.x=.09,m.rotation.x=g,a.add(m)};p(r*.55,-.9),p(r*.82,.35),a.traverse(y=>{y.castShadow=!0}),i.add(a)}function m0(i,t,e,n,s,o,r){let c=i.marks.find(a=>a.k==="slipship");for(let a of i.marks){let[l,u]=a.c,h=a.z,d=a.a||0,f=bn(l,u,d);switch(a.k){case"pavilion":{let p=a.sides||8,y=Math.max(2.2,a.r-.3),g=d+Math.PI/p,m=Ei(l,u,y,p,g),M=a.stone?"coping":"red",_=a.stone?"coping":"wood",v=h+3.45,x=Math.max(a.top,v+2.2);t.stone.prism(le(m,.6),Math.min(h,s(l,u))-1.2,h+.3,!0);for(let b of m)a.stone?t.coping.box(b[0],b[1],h+.3,h+3.3,.42,.42,g,1):t.red.cyl(b[0],b[1],h+.3,h+3.5,.18,8,!1);for(let b=0;b<p;b++){let E=m[b],A=m[(b+1)%p];t[_].beam(T(E[0],E[1],h+3.3),T(A[0],A[1],h+3.3),.24,.32),a.stone||t.red.beam(T(E[0],E[1],h+.85),T(A[0],A[1],h+.85),.1,.08)}Nh(t,m,l,u,v,x,p===4?1.55:1.42,p===4?.45:.35),t.coping.cyl(l,u,x-.1,x+.7,.22,8),a.stele&&(t.stone.box(l,u,h+.3,h+.8,1.4,.9,d,1),t.coping.box(l,u,h+.8,h+2.6,1,.28,d,1));break}case"clock":{let p=Math.min(a.L,a.D)*.52,y=a.top,g=y-11.5,m=_=>Ee(l,u,_,_,d);t.stone.prism(m(p+2.6),s(l,u)-.6,h+1,!0),An(t,"station",m(p),h+1,g,3.2);for(let[_,v]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=f(_*p/2,v*p/2);t.coping.box(x[0],x[1],h+1,g+4.4,.7,.7,d,.5)}for(let _ of[h+1,g-.1,h+1+(g-h)*.5])t.coping.prism(m(p+.5),_-.2,_+.25,!0);An(t,"wallBody",m(p+.2),g,g+4.4,0),t.coping.prism(m(p+.7),g+4.4,g+4.8,!0);for(let _=0;_<4;_++){let v=d+_*Math.PI/2,x=[l+Math.cos(v)*(p/2+.2),u+Math.sin(v)*(p/2+.2)];Qc(e,n,x[0],x[1],g+2.2,v,Math.min(1.6,p*.24))}ui(t,m(p+.7),g+5.1,1.2,.6);for(let[_,v]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=f(_*(p/2-.4),v*(p/2-.4));t.red.cyl(x[0],x[1],g+4.8,y-3.2,.22,8,!1)}let M=new Gt(new ye(.5,.9,1.4,14),n.bronze);{let[_,v,x]=T(l,u,y-4.4);M.position.set(_,v,x),M.castShadow=!0,e.add(M)}Ae(t,{c:[l,u],L:p,D:p,a:d,ze:y-3.1,top:y,ty:"pyr",oh:1.3,lift:.6,sag:.5,ridgeDeco:!0}),t.brassG.cyl(l,u,y-.2,y+1.4,.16,6);break}case"lou":{let p=a.n||3,y=a.zb||h,g=2.8,m=Math.max(2.8,(a.top-y-g)/p),M=Math.min(a.L,a.D)/2,_=E=>a.oct?Ei(l,u,M-E*.35,8,d+Math.PI/8):Ee(l,u,a.L-E*.7,a.D-E*.7,d);a.base==="stone"?(t.cityStone.prism(le(_(0),1.2),s(l,u)-1,y,!0),fi(t,le(_(0),1),y,.9,1.4,"coping")):t.stone.prism(le(_(0),.7),Math.min(h,s(l,u))-.6,y+.4,!0);let v=a.ruin?["ruin","ruin"]:["hall","hallU"],x=y+(a.base==="stone"?0:.4);for(let E=0;E<p;E++){let A=_(E),w=x+m-(E===0?0:.2);An(t,E===0?v[0]:v[1],A,x,w,3),E<p-1&&(ui(t,A,w+.25,1.05,.5),t.wood.prism(le(A,.15),w-.05,w+.2,!1,!0),E>=0&&fi(t,le(_(E+1),.75),w+.2,.95)),x=w+.2}let b=_(p-1);if(a.ruin&&(t.tile.col=[.72,.7,.67]),a.oct?Nh(t,b,l,u,x,a.top,1.45,.4):Ae(t,{c:[l,u],L:a.L-(p-1)*.7,D:a.D-(p-1)*.7,a:d,ze:x,top:Math.max(a.top,x+2.2),ty:"xs",oh:1.1,lift:.7,sag:.5,ridgeDeco:!0}),t.tile.col=[1,1,1],a.ruin)for(let E=-2;E<=2;E++){let A=f(E*.8,-a.D/2-.6),w=f(E*.8+.3,0);t.wood.beam(T(A[0],A[1],x+.3),T(w[0],w[1],a.top-.6),.14,.16)}if(a.banner){t.cloth.col=[.62,.17,.12],t.cloth.col2=t.cloth.col;for(let E of[-.32,0,.32]){let A=f(E*a.L,-a.D/2-.25),w=y+m*2.2;t.cloth.quad(T(A[0]-.4,A[1],w),T(A[0]+.4,A[1],w),T(A[0]+.4,A[1],w-5.5),T(A[0]-.4,A[1],w-5.5),[0,0],[1,0],[1,1],[0,1],[-Math.sin(d),0,Math.cos(d)].map(S=>-S))}t.cloth.col=t.cloth.col2=[1,1,1]}break}case"watertower2":case"watertower":{if(a.k==="watertower"&&!a.bt)break;let p=a.top,y=p-6.2,g=Math.max(2.2,Math.min(3,a.r*.8)),m=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([M,_])=>f(M*g*.85,_*g*.85));for(let M of m)t.iron.beam(T(M[0],M[1],h),T(l+(M[0]-l)*.72,u+(M[1]-u)*.72,y),.32,.32);for(let M=h+3;M<y-.5;M+=3.4)for(let _=0;_<4;_++){let v=m[_],x=m[(_+1)%4],b=1-.28*(M-h)/(y-h);t.iron.beam(T(l+(v[0]-l)*b,u+(v[1]-u)*b,M),T(l+(x[0]-l)*b,u+(x[1]-u)*b,M),.16,.16)}t.iron.cyl(l,u,y,y+.4,g+.3,16),t.brassG.cyl(l,u,y+.4,y+4.6,g,20);for(let M of[1.6,3.1])t.iron.cyl(l,u,y+M,y+M+.16,g+.06,20,!1);Vn(t.iron,l,u,y+4.6,p,g+.15,.25,14),fi(t,Ei(l,u,g+.6,12),y+.4,.9,1.2,"iron");break}case"chimney":{let p=a.top,y=Math.min(2.3,a.r*.9),g=y*.62;t.brick.col=[1,.66,.54],t.brick.box(l,u,s(l,u)-.5,h+5,y*2+1.2,y*2+1.2,d,.5),Vn(t.brick,l,u,h+5,p,y,g,16,!1),t.brick.col=[1,1,1],t.coping.box(l,u,h+5,h+5.5,y*2+1.6,y*2+1.6,d,.5);for(let m=h+12;m<p-2;m+=9){let M=y+(g-y)*(m-h-5)/(p-h-5);t.iron.cyl(l,u,m,m+.35,M+.08,16,!1)}Vn(t.iron,l,u,p-1,p+.2,g+.25,g+.1,16,!1),a.smoke&&tl(e,n,o,l,u,p+.6,He(a.id));break}case"canopy":t_(i,t,a,e);break;case"stairclock":{let p=a.top-3.2;t.stone.prism(Ee(l,u,a.L+.6,a.D+.6,d),s(l,u)-.5,h+1,!0),An(t,"station",Ee(l,u,a.L,a.D,d),h+1,p,3.4);for(let[y,g]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let m=f(y*a.L/2,g*a.D/2);t.coping.box(m[0],m[1],h+1,p,.7,.7,d,.5)}t.coping.prism(Ee(l,u,a.L+.5,a.D+.5,d),p-.3,p,!0),Ae(t,{c:[l,u],L:a.L,D:a.D,a:d,ze:p,top:a.top,ty:"xs",oh:.9,lift:.5,sag:.5,ridgeDeco:!0});for(let y of[-1,1]){let g=d+y*Math.PI/2,m=[l+Math.cos(g)*(a.D/2+.1),u+Math.sin(g)*(a.D/2+.1)];Qc(e,n,m[0],m[1],p-1.6,g,1.2)}break}case"dome":{let p=a.r*.78,y=a.top,g=p*.92,m=y-g*.98-2.6,M=16,_=Ei(l,u,p,M,d);t.stone.prism(le(_,.4),s(l,u)-.5,h+1,!0),An(t,"hallU",_,h+1,m-.6,0),t.coping.prism(le(_,.5),m-.6,m,!0);let v=9;for(let b=0;b<v;b++){let E=b/v*Math.PI/2,A=(b+1)/v*Math.PI/2;for(let w=0;w<24;w++){let S=w/24*gs,R=(w+1)/24*gs,I=(W,L)=>T(l+Math.cos(W)*g*Math.cos(L),u+Math.sin(W)*g*Math.cos(L),m+g*1.05*Math.sin(L)),U=(W,L)=>[Math.cos(W)*Math.cos(L),Math.sin(L),Math.sin(W)*Math.cos(L)];t.copper.triN(I(S,E),I(R,E),I(R,A),U(S,E),U(R,E),U(R,A),[w/6,b/3],[(w+1)/6,b/3],[(w+1)/6,(b+1)/3]),t.copper.triN(I(S,E),I(R,A),I(S,A),U(S,E),U(R,A),U(S,A),[w/6,b/3],[(w+1)/6,(b+1)/3],[w/6,(b+1)/3])}}for(let b=0;b<12;b++){let E=b/12*gs;for(let A=0;A<v-1;A++){let w=A/v*Math.PI/2,S=(A+1)/v*Math.PI/2;t.brassG.beam(T(l+Math.cos(E)*(g+.06)*Math.cos(w),u+Math.sin(E)*(g+.06)*Math.cos(w),m+(g*1.05+.06)*Math.sin(w)),T(l+Math.cos(E)*(g+.06)*Math.cos(S),u+Math.sin(E)*(g+.06)*Math.cos(S),m+(g*1.05+.06)*Math.sin(S)),.18,.12)}}let x=m+g*1.03;t.wallBody.cyl(l,u,x-.3,x+1.4,.95,10),Vn(t.copper,l,u,x+1.4,x+2.3,1.2,.2,10),t.brassG.cyl(l,u,x+2.2,y+.6,.1,6);break}case"stage":e_(t,a,s);break;case"crane2":{let p=a.top-4.5,y=1.4,g=[[-y,-y],[y,-y],[y,y],[-y,y]].map(([A,w])=>f(A,w));for(let A of g)t.iron.box(A[0],A[1],h,p,.3,.3,d,1);for(let A=h+2.5;A<p-1;A+=3)for(let w=0;w<4;w++){let S=g[w],R=g[(w+1)%4];t.iron.beam(T(S[0],S[1],A),T(R[0],R[1],A+3),.12,.12),t.iron.beam(T(S[0],S[1],A),T(R[0],R[1],A),.14,.14)}let m=c?Math.atan2(c.c[1]-u,c.c[0]-l):d,M=c?Math.min(20,Math.hypot(c.c[0]-l,c.c[1]-u)+3):15,_=bn(l,u,m);t.wood.box(l,u,p,p+2.4,3.4,3,m,1),Ae(t,{c:[l,u],L:4,D:3.6,a:m,ze:p+2.4,top:p+3.3,ty:"gable",oh:.3,ohg:.2,ridgeDeco:!1});let v=_(-6,0),x=_(M,0);t.iron.beam(T(v[0],v[1],p+1),T(x[0],x[1],p+1),.9,1.1),t.iron.cyl(l,u,p+2.4,p+4.6,.18,6),t.iron.beam(T(l,u,p+4.5),T(x[0],x[1],p+1.4),.1,.1),t.iron.beam(T(l,u,p+4.5),T(v[0],v[1],p+1.4),.1,.1);let b=_(-5.4,0);t.stone.box(b[0],b[1],p+.2,p+2,1.8,1.6,m,1);let E=_(M-1.2,0);t.iron.beam(T(E[0],E[1],p+.5),T(E[0],E[1],h+3.4),.05,.05),t.wood.box(E[0],E[1],h+2,h+3.3,2,1.4,m+.4,1);break}case"screenwall":{let p=Math.max(a.L,a.D),y=Math.max(1.2,Math.min(a.L,a.D)),g=a.L>=a.D?d:d+Math.PI/2,m=a.top,M=.95,_=m-1.5;t.stone.prism(Ee(l,u,p,y+.5,g),Math.min(h,s(l,u))-.5,h+M,!0),t.coping.prism(Ee(l,u,p+.2,y+.7,g),h+M-.12,h+M+.06,!0),An(t,"wallBody",Ee(l,u,p-.5,y-.2,g),h+M+.06,_,0);let v=bn(l,u,g);for(let x of[-1,1]){let b=v(0,x*((y-.2)/2+.04));for(let[E,A]of[[-(p-1.4)/2,.24],[(p-1.4)/2,.24]]){let w=v(E,x*((y-.2)/2+.04));t.coping.box(w[0],w[1],h+M+.3,_-.3,A,.12,g,.5)}t.coping.box(b[0],b[1],_-.42,_-.3,p-1.4,.12,g,.5),t.coping.box(b[0],b[1],h+M+.3,h+M+.42,p-1.4,.12,g,.5),t.brick.box(b[0],b[1],(h+M+_)/2-.9,(h+M+_)/2+.9,1.8,.1,g+Math.PI/4,.5)}t.coping.prism(Ee(l,u,p-.1,y+.15,g),_,_+.22,!0),t.brick.prism(Ee(l,u,p+.1,y+.45,g),_+.22,_+.42,!0),Ae(t,{c:[l,u],L:p+.5,D:y+1.1,a:g,ze:_+.42,top:m,ty:"xs",oh:.35,lift:.35,sag:.45,ridgeDeco:!0});break}case"stonedeck":{let p=h,y=(i.riverz||10)-3.2;t.stone.prism(a.p,y,p-.3,!0),t.coping.prism(le(a.p,.15),p-.3,p,!0);for(let m=0;m<a.p.length;m++){let M=a.p[m];t.iron.cyl(M[0]+(l-M[0])*.08,M[1]+(u-M[1])*.08,p,p+.7,.2,8,!0)}let g=bn(l,u,d);for(let[m,M,_,v,x]of[[-4.5,1.2,2.4,1.6,1.5],[-2,1.6,1.6,1.6,1.1],[3.2,-.6,3,2,1.8],[5.6,1.4,1.4,1.4,.9]]){let b=g(m*Math.min(1,a.L/16),M*Math.min(1,a.D/8));t.wood.box(b[0],b[1],p,p+x,_,v,d+(m>0?.08:-.05),.6)}break}case"portalcrane":{let p=h+7.5,y=3.2,g=[[-1,-1],[1,-1],[1,1],[-1,1]].map(([b,E])=>f(b*y,E*y));for(let b of g)t.iron.beam(T(b[0],b[1],h),T(l+(b[0]-l)*.45,u+(b[1]-u)*.45,p),.4,.4),t.iron.box(b[0],b[1],h,h+.6,1.2,.9,d,1);t.iron.box(l,u,p,p+.9,3.6,3.6,d,1);let m=c?Math.atan2(c.c[1]-u,c.c[0]-l)+.5:d,M=bn(l,u,m);t.wood.box(l,u,p+.9,p+3.6,4.2,3,m,1),Ae(t,{c:[l,u],L:4.6,D:3.4,a:m,ze:p+3.6,top:p+4.4,ty:"gable",oh:.25,ohg:.2,ridgeDeco:!1});let _=M(1.8,0),v=M(15,0);t.iron.beam(T(_[0],_[1],p+1.6),T(v[0],v[1],a.top),.6,.7),t.iron.beam(T(v[0],v[1],a.top-.3),T(v[0],v[1],h+2.8),.05,.05),t.iron.beam(T(l,u,p+4.2),T(v[0],v[1],a.top),.08,.08);let x=M(-2.6,0);t.stone.box(x[0],x[1],p+1,p+2.8,1.2,2.4,m,1);break}case"slipship":{let p=Math.min(a.L-4,27),y=Math.min(a.D*.36,3.6),g=h-.6,m=Math.max(a.top,h+3.6)+.6,M=_=>{let v=Math.abs(_)/(p/2);return y*Math.sqrt(Math.max(0,1-Math.pow(v,2.6)))};for(let _=-p/2;_<=p/2+.01;_+=1.5){let v=M(_);if(v<.25)continue;let x=null;for(let b=0;b<=8;b++){let E=b/8*Math.PI,A=f(_,Math.cos(E)*v),w=g+(m-g)*(1-Math.sin(E)*.92),S=T(A[0],A[1],w);x&&t.wood.beam(x,S,.18,.22),x=S}}{let _=f(-p/2,0),v=f(p/2,0);t.wood.beam(T(_[0],_[1],g+.1),T(v[0],v[1],g+.1),.5,.5)}for(let _=-p/2+1.5;_<p*.15;_+=1.5)for(let v of[-1,1]){let x=M(_),b=M(_+1.5);for(let E=1;E<=3;E++){let A=E/8*Math.PI,w=f(_,v*Math.cos(A)*x),S=f(_+1.5,v*Math.cos(A)*b),R=g+(m-g)*(1-Math.sin(A)*.92);t.plank.quad(T(w[0],w[1],R),T(S[0],S[1],R),T(S[0],S[1],R-.9),T(w[0],w[1],R-.9),[0,0],[1.5,0],[1.5,.5],[0,.5],[-Math.sin(d)*v,0,Math.cos(d)*v])}}for(let _=-p/2;_<=p/2;_+=4)for(let v of[-1,1]){let x=f(_,v*(y+1.4));t.wood.cyl(x[0],x[1],h-1,m+1.5,.09,5,!1)}for(let _=-p/2;_<p/2;_+=4)for(let v of[-1,1])for(let x of[h+1.5,m-.2]){let b=f(_,v*(y+1.4)),E=f(_+4,v*(y+1.4));t.plank.beam(T(b[0],b[1],x),T(E[0],E[1],x),.9,.08)}for(let _=-p/2+2;_<=p/2-2;_+=3)t.wood.box(...f(_,0),h-1.6,g,.8,y*1.6,d,1);break}case"citygate":n_(t,a,s);break;case"derrick":{let p=a.top;t.wood.cyl(l,u,h-.3,p,.38,8,!0);let y=d,g=bn(l,u,y),m=g(14,0);t.wood.beam(T(l,u,h+1.2),T(m[0],m[1],p-6),.4,.4),t.iron.beam(T(l,u,p-.4),T(m[0],m[1],p-6),.05,.05),t.iron.beam(T(m[0],m[1],p-6),T(m[0],m[1],s(m[0],m[1])+3.2),.05,.05),t.stone.box(m[0],m[1],s(m[0],m[1])+1.4,s(m[0],m[1])+3,1.6,1.3,.4,.5);for(let _=0;_<4;_++){let v=y+Math.PI/4+_*Math.PI/2,x=[l+Math.cos(v)*16,u+Math.sin(v)*16];t.iron.beam(T(l,u,p-.3),T(x[0],x[1],s(x[0],x[1])+.3),.04,.04),t.wood.box(x[0],x[1],s(x[0],x[1])-.3,s(x[0],x[1])+.6,.6,.6,v,1)}let M=g(-3.5,2.5);t.hut.prism(Ee(M[0],M[1],3.2,2.6,y),s(M[0],M[1])-.3,s(M[0],M[1])+2.4,!1),Ae(t,{c:M,L:3.2,D:2.6,a:y,ze:s(M[0],M[1])+2.4,top:s(M[0],M[1])+3.2,ty:"gable",oh:.3,ohg:.2,ridgeDeco:!1});break}case"pagoda":{let p=a.n||7,y=a.r*.72,g=5.2,m=a.top-g-(h+1.6),M=m/p,_=a.door!=null?a.door*Math.PI/180+Math.PI/8:d+Math.PI/8;if(t.stone.prism(Ei(l,u,y+2.4,8,_),s(l,u)-1,h+1.6,!0),a.door!=null){let b=a.door*Math.PI/180,E=Math.cos(b),A=Math.sin(b),w=Math.atan2(E,-A);fi(t,Ei(l,u,y+2.2,8,_),h+1.6,.9,1.4,"coping",!1);let S=(y+2.4)*Math.cos(Math.PI/8),R=y*Math.cos(Math.PI/8);for(let I=0;I<5;I++){let U=S+(I+.5)*.45,W=l+E*U,L=u+A*U,O=h+1.6*(5-I)/6;t.stone.box(W,L,Math.min(s(W,L),O)-.3,O,3.2,.45,w,1)}t.red.box(l+E*(R+.06),u+A*(R+.06),h+1.6,h+4.3,1.7,.12,w,1)}else fi(t,Ei(l,u,y+2.2,8,_),h+1.6,.9,1.4,"coping");let v=h+1.6,x=null;for(let b=0;b<p;b++){let E=y*(1-.42*b/(p-1)),A=Ei(l,u,E,8,_),w=v+M*(b===0?1.25:.96);An(t,b===0?"hall":"hallU",A,v,w-.3,0),t.coping.prism(le(A,.2),w-.35,w,!0),b<p-1&&ui(t,A,w+.2,1.25-b*.05,.65),x=A,v=w}Nh(t,x,l,u,v+.1,v+2.8,1.55,.45),t.brassG.cyl(l,u,v+2.6,a.top,.14,6);for(let b=0;b<6;b++)t.brassG.cyl(l,u,v+3+b*.38,v+3.16+b*.38,.5-b*.05,10);t.brassG.cyl(l,u,a.top-.9,a.top-.4,.32,10);break}case"treehouse":{let p=h+8.6;r.push({at:[l,u],r:4.6,sp:"pine",z:h,big:1,trunk:12.5}),t.plank.prism(Ee(l,u,4.6,4.6,d),p-.3,p,!0,!0);for(let[M,_]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let v=f(M*2,_*2);t.wood.beam(T(v[0],v[1],p-.3),T(l+(v[0]-l)*.2,u+(v[1]-u)*.2,p-3),.16,.16)}fi(t,Ee(l,u,4.4,4.4,d),p,1,1.1);let y=f(.6,.4);t.hut.prism(Ee(y[0],y[1],2.4,2.2,d),p,p+2.2,!1),Ae(t,{c:y,L:2.8,D:2.6,a:d,ze:p+2.2,top:p+3.1,ty:"gable",oh:.3,ohg:.25,ridgeDeco:!1});let g=f(-2.4,-2.8),m=f(-2.4,-2.2);for(let M of[-.3,.3])t.wood.beam(T(g[0]+M,g[1],s(g[0],g[1])),T(m[0]+M,m[1],p),.08,.08);break}case"aqueduct":i_(t,a,s);break;case"waterwheel":s_(t,a,e,n,s,o);break;case"stele":{let p=Math.max(1.6,a.top-h-.7);if(t.stone.box(l,u,s(l,u)-.3,h+.6,Math.max(1.6,a.L*.9),Math.max(1,a.D*.7),d,1),a.broken){t.coping.box(l,u,h+.6,h+.6+p*.55,1.3,.32,d,1);let y=f(1.6,.9);t.coping.box(y[0],y[1],s(y[0],y[1])-.1,s(y[0],y[1])+.35,p*.45,1.3,d+.5,1)}else t.coping.box(l,u,h+.6,h+.6+p,1.3,.32,d,1),t.stone.box(l,u,h+.6+p,h+.95+p,1.6,.5,d,1);break}case"bastion":o_(t,a,e,n,s);break;default:break}}}function tl(i,t,e,n,s,o,r){let a=new as(1,1),l=[];for(let f=0;f<9;f++){let p=new Gt(a,t.smoke.clone());p.renderOrder=2,i.add(p),l.push(p)}let u=new Y(...T(n,s,o)),h=Be(Math.floor(r*1e6)+7),d=h();e.push(f=>{for(let p=0;p<9;p++){let y=(f*.045+d+p/9)%1,g=1.2+y*5.5;l[p].position.set(u.x+y*16+Math.sin(p*2.1)*.8,u.y+y*22,u.z-y*6+Math.cos(p*1.7)*.8),l[p].scale.setScalar(g),l[p].material.opacity=.42*(1-y)*Math.min(1,y*6)}})}function t_(i,t,e,n){let[s,o]=e.c,r=e.a,c=bn(s,o,r),a=e.L,l=e.D,u=i.rail?i.rail.z:e.z+12,h=u+4.6,d=Math.max(2.6,(e.top-h)*.95),f=l/2,p=10,y=(m,M)=>{let _=M/p*Math.PI,v=c(m,Math.cos(_)*f);return T(v[0],v[1],h+Math.sin(_)*d)},g=Math.max(2,Math.round(a/4.2));for(let m=0;m<=g;m++){let M=-a/2+a*m/g;for(let _=0;_<p;_++)t.iron.beam(y(M,_),y(M,_+1),.22,.32);for(let _ of[-1,1]){let v=c(M,_*f);t.iron.box(v[0],v[1],u,h+.1,.34,.34,r,1)}}for(let m=0;m<g;m++){let M=-a/2+a*m/g,_=-a/2+a*(m+1)/g;for(let v=0;v<p;v++){let x=v>=3&&v<=6?"glass":"girder",b=(v+.5)/p*Math.PI,E=[-Math.sin(r)*Math.cos(b),Math.sin(b),Math.cos(r)*Math.cos(b)];t[x].quad(y(M,v),y(_,v),y(_,v+1),y(M,v+1),[0,0],[1,0],[1,1],[0,1],E)}}for(let m of[-1,1]){let M=c(0,m*(f-2.4));t.paving.box(M[0],M[1],u-.3,u+.95,a-1,3.6,r,.5);let _=c(0,m*(f-4.15));t.coping.box(_[0],_[1],u+.95,u+1,a-1,.3,r,1)}}function e_(i,t,e){let[n,s]=t.c,o=t.a||0,r=bn(n,s,o),c=t.L,a=t.D,l=t.z,u=1.5,h=(t.face||0)*Math.PI/180,d=Math.cos(h),f=Math.sin(h),p=[[1,0],[-1,0],[0,1],[0,-1]].map(([A,w])=>({u:A,v:w,d:(Math.cos(o)*A-Math.sin(o)*w)*d+(Math.sin(o)*A+Math.cos(o)*w)*f})),y=p.reduce((A,w)=>w.d>A.d?w:A),g=e(n,s),m=t.piles?Math.min(g,l)-3.5:Math.min(g,l)-.5;if(t.piles){i.plank.prism(Ee(n,s,c,a,o),l+u-.4,l+u,!0,!0);for(let A=-c/2+.6;A<=c/2-.5;A+=2.4)for(let w=-a/2+.6;w<=a/2-.5;w+=2.4){let S=r(A,w);i.wood.cyl(S[0],S[1],m,l+u-.4,.2,7,!1)}}else i.stone.prism(Ee(n,s,c,a,o),m,l+u,!0);let M=l+u+4.4,_=(A,w,S,R)=>{let I=r(A,w),U=r(S,R),W=Math.hypot(U[0]-I[0],U[1]-I[1]),L=[(U[1]-I[1])/W,0,-(U[0]-I[0])/W];i.wallBody.quad(T(I[0],I[1],l+u),T(U[0],U[1],l+u),T(U[0],U[1],M),T(I[0],I[1],M),[0,0],[W/3,0],[W/3,1.5],[0,1.5],L),i.wallBody.quad(T(U[0],U[1],l+u),T(I[0],I[1],l+u),T(I[0],I[1],M),T(U[0],U[1],M),[0,0],[W/3,0],[W/3,1.5],[0,1.5],L.map(O=>-O))},v=c/2-.3,x=a/2-.3,b={"1,0":[v,-x,v,x],"-1,0":[-v,x,-v,-x],"0,1":[v,x,-v,x],"0,-1":[-v,-x,v,-x]};for(let A of p)if(A!==y&&!(A.u===-y.u&&A.v===-y.v&&!1)){let w=b[A.u+","+A.v];if(A.u===-y.u&&A.v===-y.v)_(...w);else{let[S,R,I,U]=w;_(S,R,S+(I-S)*.55,R+(U-R)*.55)}}let E=b[y.u+","+y.v];for(let A=0;A<=3;A++){let w=A/3,S=r(E[0]+(E[2]-E[0])*w,E[1]+(E[3]-E[1])*w);i.red.cyl(S[0],S[1],l+u,M,.26,10,!1)}{let A=r(E[0],E[1]),w=r(E[2],E[3]);i.wood.beam(T(A[0],A[1],M-.5),T(w[0],w[1],M-.5),.36,.7),i.red.beam(T(A[0],A[1],l+u+.5),T(w[0],w[1],l+u+.5),.12,.1)}Ae(i,{c:[n,s],L:c-.4,D:a-.4,a:o,ze:M,top:Math.max(t.top,M+3),ty:"xs",oh:1.4,lift:.9,sag:.5,ridgeDeco:!0})}function n_(i,t,e){let[n,s]=t.c,o=t.a||0,r=bn(n,s,o),c=t.L,a=Math.max(t.D,14),l=t.top,u=Math.min(e(n,s),t.z)-1.5,h=6.4,d=6.8,f=t.z+d-h/2;for(let y of[-1,1]){let g=r(0,y*(a/2+h/2)/2);i.cityStone.box(g[0],g[1],u,l,c,a/2-h/2,o,.25)}let p=9;for(let y=0;y<p;y++){let g=y/p*Math.PI,m=(y+1)/p*Math.PI,M=Math.cos(g)*h/2,_=Math.cos(m)*h/2,v=f+Math.sin(g)*h/2,x=f+Math.sin(m)*h/2,b=(M+_)/2,E=Math.min(v,x),A=r(0,b);i.cityStone.box(A[0],A[1],E,l,c,Math.abs(_-M)+.05,o,.25)}for(let y of[-1,1]){let g=null;for(let m=0;m<=p;m++){let M=m/p*Math.PI,_=r(y*(c/2+.05),Math.cos(M)*(h/2+.3)),v=T(_[0],_[1],f+Math.sin(M)*(h/2+.3));g&&i.coping.beam(g,v,.5,.35),g=v}}if(i.paving.prism(Ee(n,s,c+.2,h,o),t.z-.2,t.z+.05,!0),a>=20)for(let y of[-1,1])qs(i,[r(y*c/2,-a/2),r(y*c/2,a/2)],l,!1);else qs(i,Ee(n,s,c,a,o),l,!0)}function qs(i,t,e,n,s){let o=t.length,r=n?o:o-1;for(let c=0;c<r;c++){let a=t[c],l=t[(c+1)%o],u=Math.hypot(l[0]-a[0],l[1]-a[1]);if(u<.3)continue;let h=Math.atan2(l[1]-a[1],l[0]-a[0]),d=Math.max(1,Math.round(u/2.4));i.cityStone.box((a[0]+l[0])/2,(a[1]+l[1])/2,e-.05,e+.75,u+.4,.7,h,.4);for(let f=0;f<d;f++){let p=(f+.5)/d;i.cityStone.box(a[0]+(l[0]-a[0])*p,a[1]+(l[1]-a[1])*p,e+.75,e+1.75,u/d*.55,.7,h,.4)}}}function i_(i,t,e){let[n,s]=t.c,o=t.a||0,r=bn(n,s,o),c=t.L,a=t.top-1.4;for(let p=-c/2+.5;p<=c/2-.4;p+=3.2){for(let M of[-.75,.75]){let _=r(p,M);i.wood.beam(T(_[0],_[1],e(_[0],_[1])-.5),T(_[0],_[1],a),.24,.24)}let y=r(p,-.75),g=r(p,.75),m=Math.min(e(y[0],y[1]),e(g[0],g[1]));i.wood.beam(T(y[0],y[1],m+.6),T(g[0],g[1],a-.4),.12,.12),i.wood.beam(T(y[0],y[1],a-.15),T(g[0],g[1],a-.15),.2,.26)}let l=r(0,0);i.plank.box(l[0],l[1],a,a+.15,c,1.5,o,1);for(let p of[-1,1]){let y=r(0,p*.7);i.plank.box(y[0],y[1],a+.15,a+.85,c,.12,o,1)}let u=r(-c/2,-.6),h=r(c/2,-.6),d=r(c/2,.6),f=r(-c/2,.6);i.waterCut.quad(T(u[0],u[1],a+.62),T(h[0],h[1],a+.6),T(d[0],d[1],a+.6),T(f[0],f[1],a+.62),[0,0],[1,0],[1,1],[0,1],Le)}function s_(i,t,e,n,s,o){let[r,c]=t.c,a=t.a||0,l=bn(r,c,a),u=Math.min(t.L/2,(t.top-t.z)/2)-.3,h=t.z+u-.9,d=Math.max(1.6,t.D*.55),f=new _e;{let[m,M,_]=T(r,c,h);f.position.set(m,M,_),f.rotation.y=-a}let p=new _e;f.add(p);for(let m of[-1,1]){let M=new Gt(new Ls(u,.14,6,40),n.woodM);M.position.z=m*d/2,p.add(M)}let y=16;for(let m=0;m<y;m++){let M=m/y*gs;for(let x of[-1,1]){let b=new Gt(new Te(.12,u,.12),n.woodM);b.position.set(Math.cos(M)*u/2,Math.sin(M)*u/2,x*d/2),b.rotation.z=M-Math.PI/2,p.add(b)}let _=new Gt(new Te(.08,1,d+.2),n.woodM);_.position.set(Math.cos(M)*u,Math.sin(M)*u,0),_.rotation.z=M,p.add(_);let v=new Gt(new ye(.2,.2,1.1,6),n.bamboo);v.position.set(Math.cos(M+.1)*(u+.25),Math.sin(M+.1)*(u+.25),d/2+.25),v.rotation.z=M+.5,p.add(v)}let g=new Gt(new ye(.45,.45,d+1.4,10),n.woodM);g.rotation.x=Math.PI/2,p.add(g),p.traverse(m=>{m.castShadow=!0}),e.add(f),o.push(m=>{p.rotation.z=-m*.25});for(let m of[-1,1]){let M=l(0,0),_=-Math.sin(a),v=Math.cos(a),x=[r+_*m*(d/2+.8),c+v*m*(d/2+.8)];for(let b of[-1,1]){let E=[x[0]+Math.cos(a)*b*(u*.55),x[1]+Math.sin(a)*b*(u*.55)];i.wood.beam(T(E[0],E[1],Math.min(t.z,s(E[0],E[1]))-1.2),T(x[0],x[1],h+.2),.34,.34)}i.wood.box(x[0],x[1],h-.2,h+.5,1,1,a,1)}}function o_(i,t,e,n,s){let[o,r]=t.c,c=t.a||0,a=bn(o,r,c),l=t.L,u=t.D,h=t.z,d=h+1.6,f=Ee(o,r,l,u,c);i.cityStone.prism(le(f,.6),Math.min(h,s(o,r))-6,d,!0),qs(i,f,d,!0);let p=Math.min(l,u)*.5,y=t.top-3.6,g=Ee(o,r,p,p,c);An(i,"stoneF",g,d,y,3);for(let[m,M]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let _=a(m*p/2,M*p/2);i.cityStone.box(_[0],_[1],d,y,.8,.8,c,.4)}i.coping.prism(Ee(o,r,p+.6,p+.6,c),y-.3,y,!0),Ae(i,{c:[o,r],L:p,D:p,a:c,ze:y,top:t.top,ty:"xs",oh:1.1,lift:.6,sag:.5,ridgeDeco:!0}),ui(i,g,d+(y-d)*.5,.9,.45);for(let[m,M]of[[.72,.72],[-.72,.72],[.72,-.72],[.1,.78]]){let _=a(m*l/2*.86,M*u/2*.86),v=Math.atan2(_[1]-r,_[0]-o),x=new _e;{let[A,w,S]=T(_[0],_[1],d);x.position.set(A,w,S),x.rotation.y=-v}let b=new Gt(new Te(1.8,.7,1.2),n.woodM);b.position.y=.45,x.add(b);for(let A of[-1,1]){let w=new Gt(new ye(.42,.42,.14,12),n.woodM);w.rotation.x=Math.PI/2,w.position.set(0,.42,A*.68),x.add(w)}let E=new Gt(new ye(.2,.34,3,12),n.ironM);E.rotation.z=Math.PI/2-.08,E.position.set(.9,1.05,0),x.add(E),x.traverse(A=>{A.castShadow=!0}),e.add(x)}}function g0(i,t){let e=["upP","upT","court","upPd"];for(let n of i.ctx||[]){let[s,o,r,c,a,l,u,h]=n,d=3.5+(u-1)*3.2,f=l+d,p=Ee(s,o,r,c,a),y=.94+He(s+","+o)*.1;for(let g of e)t[g].col=t[g].col2=[y,y,y];An(t,e[h%4],p,l-.6,f,3.6,0,Math.max(1,u)),t.tile.col=t.ridge.col=[y,y,y],Ae(t,{c:[s,o],L:Math.max(r,c),D:Math.min(r,c),a:r>=c?a:a+Math.PI/2,ze:f,top:f+Math.min(r,c)*(h===2?.22:.32),ty:h===2?"xs":"gable",oh:.6,ohg:.35,lift:h===2?.25:0,sag:.62,ridgeDeco:!1})}for(let n of e)t[n].col=t[n].col2=[1,1,1];t.tile.col=t.ridge.col=[1,1,1]}var Xi=Math.PI/180,Ge=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e],an=(i,t)=>Math.hypot(t[0]-i[0],t[1]-i[1]),Sn=(i,t)=>{i.col=t,i.col2=t},r_=1e6,Bh=1000001,a_=1000002,Xs=(i,t)=>{for(let e in i)i[e]&&typeof i[e].bid=="number"&&(i[e].bid=t)},Wr=i=>(i.userData.tag="T9",i);function ko(i,t,e,n,s,o,r){let c=an(t,e),a=-(e[1]-t[1])/c*n/2,l=(e[0]-t[0])/c*n/2,u=[t[0]+a,t[1]+l],h=[t[0]-a,t[1]-l],d=[e[0]+a,e[1]+l],f=[e[0]-a,e[1]-l],p=(e[0]-t[0])/c,y=(e[1]-t[1])/c;i.quad(T(u[0],u[1],s),T(d[0],d[1],s),T(d[0],d[1],r),T(u[0],u[1],o),[0,0],[c,0],[c,r-s],[0,o-s],[a,0,l]),i.quad(T(h[0],h[1],s),T(f[0],f[1],s),T(f[0],f[1],r),T(h[0],h[1],o),[0,0],[c,0],[c,r-s],[0,o-s],[-a,0,-l]),i.quad(T(u[0],u[1],o),T(d[0],d[1],r),T(f[0],f[1],r),T(h[0],h[1],o),[0,0],[c,0],[c,n],[0,n],Le),i.quad(T(u[0],u[1],s),T(h[0],h[1],s),T(h[0],h[1],o),T(u[0],u[1],o),[0,0],[n,0],[n,o-s],[0,o-s],[-p,0,-y]),i.quad(T(d[0],d[1],s),T(f[0],f[1],s),T(f[0],f[1],r),T(d[0],d[1],r),[0,0],[n,0],[n,r-s],[0,r-s],[p,0,y])}function Kn(i,t,e,n,s,o=12){let r=new Y(...T(...e)),c=new Y(...T(...n)),a=new Gt(new ye(s,s,r.distanceTo(c),o,1,!1),t);return a.position.copy(r).add(c).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new Y(0,1,0),c.clone().sub(r).normalize()),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Fh(i,t,e,n,s,o,r,c=52,a=6,l=!0,u="wood"){i[u].cyl(t,e,n,n+s,u==="wood"?.24:.32,8,!1),i[u].box(t,e,n+s-.1,n+s+.35,.8,.8,r,1);let h=c*Xi,d=n+1.4,f=[t+Math.cos(r)*o*Math.cos(h),e+Math.sin(r)*o*Math.cos(h),d+o*Math.sin(h)];if(i[u].beam(T(t,e,d),T(...f),u==="wood"?.3:.42,u==="wood"?.3:.42),u!=="wood")for(let y=2;y<o-1;y+=2.2){let g=[t+(f[0]-t)*y/o,e+(f[1]-e)*y/o,d+(f[2]-d)*y/o],m=[t+(f[0]-t)*(y+1.1)/o,e+(f[1]-e)*(y+1.1)/o,d+(f[2]-d)*(y+1.1)/o];i.iron.beam(T(g[0],g[1],g[2]-.45),T(m[0],m[1],m[2]+.45),.06,.06)}if(i.iron.beam(T(t,e,n+s),T(...f),.05,.05),i.iron.beam(T(...f),T(f[0],f[1],f[2]-a),.04,.04),i.iron.box(f[0],f[1],f[2]-a-.5,f[2]-a,.45,.45,r,1),l)for(let y of[150,210,270]){let g=(r*180/Math.PI+y)*Xi,m=s*.7,M=[t+Math.cos(g)*m,e+Math.sin(g)*m];i.iron.beam(T(t,e,n+s),T(M[0],M[1],n+.2),.035,.035),i.wood.box(M[0],M[1],n-.2,n+.45,.4,.4,g,1)}let p=[t-Math.cos(r)*1.4,e-Math.sin(r)*1.4];return i.wood.box(p[0],p[1],n,n+1,1.4,1,r,1),f}function c_(i,t,e,n,s,o){Xs(i,r_);let[r,c]=t.c,a=t.stair.zt,l=vn(t.podium),u=1e9;for(let Z of l)u=Math.min(u,s(Z[0],Z[1]));i.cityStone.prism(l,u-.8,a-.25,!1),i.coping.prism(le(l,.2),a-.25,a,!0);let[h,d,f,p]=t.stair.box,y=Z=>Z[0]>h-1.5&&Z[1]>d-.3&&Z[1]<p+.3,g=le(l,-.4);for(let Z=0;Z<g.length;Z++){let rt=g[Z],ft=g[(Z+1)%g.length],Dt=Math.max(1,Math.round(an(rt,ft)/1.9)),mt=Math.atan2(ft[1]-rt[1],ft[0]-rt[0]),wt=null;for(let zt=0;zt<=Dt;zt++){let st=Ge(rt,ft,zt/Dt);if(y(st)){wt=null;continue}i.coping.box(st[0],st[1],a,a+1.1,.34,.34,mt,.6),wt&&(i.coping.beam(T(wt[0],wt[1],a+1),T(st[0],st[1],a+1),.26,.16),i.coping.beam(T(wt[0],wt[1],a+.14),T(st[0],st[1],a+.14),.24,.22)),wt=st}}let m=t.stair.zb,M=Math.max(4,Math.round((a-m)/.16)),_=(f-h)/(M-1),v=(a-m)/M;for(let Z=0;Z<M-1;Z++)i.stone.box(h+(Z+.5)*_,(d+p)/2,m-.6,a-(Z+1)*v,_+.01,p-d,0,.8);for(let Z of[d-.45,p+.45])ko(i.cityStone,[h-.6,Z],[f+.4,Z],.9,m-.6,a+.9,m+.9),i.cityStone.box(f+.4,Z,m-.3,m+1.4,1.2,1.2,0,.6),i.brassG.cyl(f+.4,Z,m+1.4,m+2,.22,8),i.lampG.box(f+.4,Z,m+2,m+2.7,.5,.5,0,1),Vn(i.brassG,f+.4,Z,m+2.7,m+3.1,.42,.06,8,!1);let x=t.r0||Math.hypot(t.p[0][0]-r,t.p[0][1]-c),b=Math.atan2(t.p[0][1]-c,t.p[0][0]-r),E=9,A=t.h0||7.2,w=t.hs||6,S=t.tp||.85,R=t.eave||1.35,I=t.scaf||2.3,U=t.lamp||1,W=t.der||[8.5,10.5],L=(Z,rt=0)=>le(Ei(r,c,x-Z*S,8,b),rt),O=[],H=a;for(let Z=0;Z<E;Z++){let rt=H+(Z===0?A:w),ft=L(Z);O.push([H,rt]),An(i,Z===0?"hall":Z%2?"hallU":"upP",ft,H,rt,3.4);for(let Dt of ft)i.red.cyl(Dt[0],Dt[1],H,rt,.4,8,!1);i.red.prism(le(ft,.1),rt-.75,rt-.15,!1),Z<E-1&&(ui(i,ft,rt+.3,R,.6),i.wood.prism(le(L(Z+1),.15),rt-.15,rt+.3,!1,!0)),H=rt+.3}let k=O[E-1][1],tt=L(E-1);i.coping.prism(le(tt,.9),k,k+.5,!0,!0),i.wood.prism(le(tt,.9),k-.35,k,!1,!0),fi(i,le(tt,.7),k+.5,1.1,1.2,"iron");let nt=k+.5,it=Math.atan2(222-c,248-r),bt=Math.cos(it),j=Math.sin(it),Mt=-j,vt=bt,K=U;Vn(i.brassG,r,c,nt,nt+1.3*K,3.4*K,3*K,24,!0),i.iron.cyl(r,c,nt+1.3*K,nt+1.6*K,3.1*K,24,!0);for(let Z of[-1,1])i.brassG.box(r+Mt*Z*2.75*K,c+vt*Z*2.75*K,nt+1.6*K,nt+5.4*K,.9*K,.5*K,it,1);let $=[r,c,nt+4.9*K],ut=-9*Xi,N=[bt*Math.cos(ut),j*Math.cos(ut),Math.sin(ut)],F=Z=>[$[0]+N[0]*Z*K,$[1]+N[1]*Z*K,$[2]+N[2]*Z*K];Wr(Kn(e,n.brass,F(-2.3),F(2),2.25*K,28)),Wr(Kn(e,n.ironM,F(-3.2),F(-2.3),1.3*K,20)),Wr(Kn(e,n.lampW,F(2),F(2.14),2.05*K,28));for(let Z of[-1.4,.2,1.9])Wr(Kn(e,n.ironM,F(Z),F(Z+.16),2.36*K,28));Wr(Kn(e,n.ironM,[$[0]-Mt*2.9*K,$[1]-vt*2.9*K,$[2]],[$[0]+Mt*2.9*K,$[1]+vt*2.9*K,$[2]],.28*K,10));for(let Z of[118,-65]){let rt=it+Z*Xi,ft=x-(E-1)*S-1.6,Dt=[r+Math.cos(rt)*ft,c+Math.sin(rt)*ft];Fh(i,Dt[0],Dt[1],nt,W[0],W[1],rt,40,W[0]*.9,!1)}Sn(i.bamboo,[1,1,1]);for(let Z=1;Z<=7;Z++){let[rt,ft]=O[Z],Dt=L(Z,I),mt=L(Z,.8);for(let wt of[4,5,6,7,0,1]){let zt=Dt[wt],st=Dt[(wt+1)%8],P=an(zt,st),C=Math.max(2,Math.round(P/2.3)),z=Math.atan2(st[1]-zt[1],st[0]-zt[0]);for(let ht=0;ht<=C;ht++){let pt=Ge(zt,st,ht/C);i.bamboo.cyl(pt[0],pt[1],rt-1.2,ft+1.3,.075,5,!1)}for(let ht=rt-.6;ht<ft+1;ht+=1.9)i.bamboo.beam(T(zt[0],zt[1],ht),T(st[0],st[1],ht),.1,.1);i.bamboo.beam(T(zt[0],zt[1],rt-1),T(st[0],st[1],ft+1),.09,.09);let q=mt[wt],Q=mt[(wt+1)%8],J=Ge(Ge(zt,q,.5),Ge(st,Q,.5),.5);i.plank.box(J[0],J[1],ft+.12,ft+.24,P*.92,an(zt,q)*.95,z,1);for(let ht of[.15,.85]){let pt=Ge(zt,st,ht),Tt=Ge(q,Q,ht);i.bamboo.beam(T(pt[0],pt[1],ft+.05),T(Tt[0],Tt[1],ft+.05),.09,.09)}if(Z%2===0&&(wt===4||wt===5||wt===0)){let ht=Ge(zt,st,.5),pt=Math.cos(z-Math.PI/2),Tt=Math.sin(z-Math.PI/2),Ct=[ht[0]-pt*0,ht[1]-Tt*0],dt=ht[0]-r,Et=ht[1]-c,Ht=Math.hypot(dt,Et),Pt=[ht[0]+dt/Ht*.25,ht[1]+Et/Ht*.25];Sn(i.cloth,[.66,.16,.11]);let It=[Pt[0]-Math.cos(z)*.75,Pt[1]-Math.sin(z)*.75],Ut=[Pt[0]+Math.cos(z)*.75,Pt[1]+Math.sin(z)*.75];i.cloth.quad(T(It[0],It[1],ft+.9),T(Ut[0],Ut[1],ft+.9),T(Ut[0],Ut[1],rt+.3),T(It[0],It[1],rt+.3),[0,0],[1,0],[1,1],[0,1],[dt/Ht,0,Et/Ht]),Sn(i.cloth,[1,1,1])}}}Sn(i.cloth,[.7,.18,.12]);for(let Z=2;Z<=7;Z++)for(let rt of[2,3]){let ft=L(Z),Dt=ft[rt],mt=ft[(rt+1)%8],wt=Ge(Dt,mt,.5),zt=wt[0]-r,st=wt[1]-c,P=Math.hypot(zt,st),C=[wt[0]+zt/P*(R-.3),wt[1]+st/P*(R-.3)],z=Math.atan2(mt[1]-Dt[1],mt[0]-Dt[0]),q=[C[0]-Math.cos(z)*.5,C[1]-Math.sin(z)*.5],Q=[C[0]+Math.cos(z)*.5,C[1]+Math.sin(z)*.5],[J,ht]=O[Z];i.cloth.quad(T(q[0],q[1],ht-.2),T(Q[0],Q[1],ht-.2),T(Q[0],Q[1],J+.6),T(q[0],q[1],J+.6),[0,0],[1,0],[1,1],[0,1],[zt/P,0,st/P])}Sn(i.cloth,[1,1,1]);let[V,G,D]=t.crane,ct=Math.atan2(c-G,r-V);return Fh(i,V,G,t.zc,D,t.boom||22,ct,58,(t.boom||22)*.45,!0,"craneY"),Xs(i,-1),{top:nt+7.5*U}}function l_(i,t,e,n,s){Xs(i,Bh);let[o,r]=t.c,c=t.z,a=vn(t.p),l=1e9;for(let g of a)l=Math.min(l,s(g[0],g[1]));i.cityStone.prism(le(a,.9),l-.6,c+1.4,!0),An(i,"station",a,c+1.4,c+18.6,3,0,3);for(let g of[c+1.4,c+10.2,c+18.6])i.coping.prism(le(a,.3),g-.15,g+.3,!0);for(let g=0;g<a.length;g++){let m=a[g],M=a[(g+1)%a.length];if(an(m,M)<4){let _=Ge(m,M,.5);i.coping.box(_[0],_[1],c+1.4,c+24,an(m,M)+.2,.5,Math.atan2(M[1]-m[1],M[0]-m[0]),.5)}}An(i,"wallBody",le(a,-.15),c+18.9,c+24,0);let u=1e9;for(let g=0;g<a.length;g++){let m=a[g],M=a[(g+1)%a.length],_=an(m,M);if(_<.001)continue;let v=Math.abs((M[0]-m[0])*(r-m[1])-(M[1]-m[1])*(o-m[0]))/_;u=Math.min(u,v)}for(let g=0;g<4;g++){let m=g*Math.PI/2;Qc(e,n,o+Math.cos(m)*(u-.05),r+Math.sin(m)*(u-.05),c+21.4,m,2.1)}i.coping.prism(le(a,1),c+24,c+24.5,!0,!0),t.ladder?u_(i,t,a,c,s):t.rgap?h_(i,le(a,.75),t.rgap,c+24.5):fi(i,le(a,.75),c+24.5,1,1.1,"iron");let h=Math.min(5,u-1.6),d=c+25.7;Vn(i.wallBody,o,r,c+24.5,d,h,h,24,!1);for(let g=0;g<12;g++){let m=g/12*Math.PI*2;i.ridge.box(o+Math.cos(m)*(h+.02),r+Math.sin(m)*(h+.02),c+24.8,d-.25,.5,.06,m+Math.PI/2,1)}i.coping.cyl(o,r,d,d+.35,h+.35,24,!0);let f=3.9,p=8;for(let g=0;g<p;g++){let m=g/p*Math.PI/2,M=(g+1)/p*Math.PI/2;Vn(i.domeR,o,r,d+.35+f*Math.sin(m),d+.35+f*Math.sin(M),h*Math.cos(m)+.05,Math.max(.6,h*Math.cos(M)),24,g===p-1)}let y=d+.35+f;for(let g of[0,1,2,3,4,5]){let m=g/6*Math.PI*2;i.coping.cyl(o+Math.cos(m)*.7,r+Math.sin(m)*.7,y-.1,y+1.4,.09,6,!1)}Vn(i.domeR,o,r,y+1.4,y+2.2,1.1,.15,12,!0),i.brassG.cyl(o,r,y+2.1,y+3.6,.09,6),Xs(i,-1)}function h_(i,t,e,n){let s=0,o=0,r=1e9;for(let v=0;v<t.length;v++){let x=t[v],b=t[(v+1)%t.length],E=(b[0]-x[0])**2+(b[1]-x[1])**2,A=Math.max(0,Math.min(1,((e.c[0]-x[0])*(b[0]-x[0])+(e.c[1]-x[1])*(b[1]-x[1]))/E)),w=Math.hypot(x[0]+(b[0]-x[0])*A-e.c[0],x[1]+(b[1]-x[1])*A-e.c[1]);w<r&&(r=w,s=v,o=A)}let c=t[s],a=t[(s+1)%t.length],l=an(c,a),u=Math.max(.02,o-e.w/l),h=Math.min(.98,o+e.w/l),d=Ge(c,a,u),f=Ge(c,a,h),p=[f];for(let v=1;v<=t.length;v++)p.push(t[(s+v)%t.length]);p.push(d),fi(i,p,n,1,1.1,"iron",!1),i.iron.cyl(f[0],f[1],n,n+1,.06,4,!1);let y=-(a[1]-c[1])/l,g=(a[0]-c[0])/l,m=y*(e.c[0]-467)+g*(e.c[1]-125)>0?1:-1,M=y*m,_=g*m;i.iron.beam(T(d[0],d[1],n),T(d[0]+M*.55,d[1]+_*.55,n+.82),.06,.06),i.iron.beam(T(d[0]+M*.55,d[1]+_*.55,n+.82),T(f[0]+M*.7,f[1]+_*.7,n-1.2),.1,.1)}function u_(i,t,e,n,s){let o=t.ladder,r=le(e,.75),c=0,a=-1e9;for(let b=0;b<r.length;b++){let E=r[b],A=r[(b+1)%r.length],w=(E[0]+A[0])/2;Math.abs(E[0]-A[0])<.01&&w>a&&(a=w,c=b)}let l=r[c],u=r[(c+1)%r.length],h=(o.y-.75-l[1])/(u[1]-l[1]),d=(o.y+.75-l[1])/(u[1]-l[1]),f=Math.min(h,d),p=Math.max(h,d),y=[Ge(l,u,p)];for(let b=1;b<=r.length;b++)y.push(r[(c+b)%r.length]);y.push(Ge(l,u,f)),fi(i,y,n+24.5,1,1.1,"iron",!1);for(let b of[y[0],y[y.length-1]])i.iron.cyl(b[0],b[1],n+24.5,n+25.6,.07,6,!1);let g=a-.75,m=g+o.off,M=s(m,o.y),_=n+24.5,v=[o.y-.3,o.y+.3];for(let b of v)i.craneY.box(m,b,M,M+2,.08,.08,0,1),i.iron.box(m,b,M+2,_+1.1,.08,.08,0,1);for(let b=M+.3;b<_+.05;b+=.3)(b<M+2?i.craneY:i.iron).beam(T(m,v[0],b),T(m,v[1],b),.05,.05);for(let b=M+3;b<_;b+=4)for(let E of v)i.iron.beam(T(g-.6,E,b),T(m,E,b),.07,.07);let x=[[m,v[0]-.1],[m+.75,v[0]-.1],[m+.75,v[1]+.1],[m,v[1]+.1]];for(let b=M+2.6;b<_+1;b+=1.2)for(let E=0;E<3;E++)i.iron.beam(T(x[E][0],x[E][1],b),T(x[E+1][0],x[E+1][1],b),.04,.04);for(let b of[x[1],x[2],[m+.75,o.y]])i.iron.beam(T(b[0],b[1],M+2.6),T(b[0],b[1],_+1),.04,.04);i.craneY.box(m+.02,o.y,M,M+.12,1.1,1.2,0,1)}function f_(i,t,e,n){let s=vn(t.p),o=t.z,r=o+t.h;i.cityStone.prism(le(s,.05),o-.6,o+1.2,!0),An(i,"wallBody",s,o+1.2,r,0),i.coping.prism(le(s,.25),r,r+.35,!0,!0);let c=1e9,a=-1e9,l=1e9,u=-1e9;for(let h of s)c=Math.min(c,h[0]),a=Math.max(a,h[0]),l=Math.min(l,h[1]),u=Math.max(u,h[1]);for(let[h,d,f]of[[c+2.2,.36,n.brass],[c+3.4,.22,n.ironM],[a-2,.36,n.brass]]){Kn(e,f,[h,l-.3,r+.35+d],[h,u+.3,r+.35+d],d,14);for(let p of[l+.4,u-.4])i.iron.box(h,p,r+.35,r+.35+d*.8,.5,.12,0,1)}}function d_(i,t,e){let[n,s]=t.a,[o]=t.b,r=t.w,c=t.zt,a=t.zb,l=c+.9,u=o-.4,h=n+.6,d=h-u,f=(u+h)/2;for(let p of[-1,1]){let y=s+p*(r/2+.9);i.cityStone.box(f,y,a-.6,l,d,1.4,0,.5),i.coping.box(f,y,l,l+.22,d+.2,1.65,0,.5);let g=s+p*(r/2+1.6);i.cityStone.box(o-.2,g,a-.6,l+.5,1.8,2.4,0,.5),i.coping.box(o-.2,g,l+.5,l+.75,2.1,2.7,0,.5),i.brassG.cyl(o-.2,g,l+.75,l+1.15,.2,8),i.lampG.box(o-.2,g,l+1.15,l+1.75,.45,.45,0,1)}}function p_(i,t,e){for(let n of t||[]){let s=vn(n);i.hedge.prism(le(s,-.15),e-.2,e+2.3,!0);let o=1e9,r=-1e9,c=1e9,a=-1e9;for(let l of s)o=Math.min(o,l[0]),r=Math.max(r,l[0]),c=Math.min(c,l[1]),a=Math.max(a,l[1]);for(let l=o+.9;l<r-.5;l+=1.6)for(let u=c+.9;u<a-.5;u+=1.6){if(!Hn([l,u],le(s,-.6)))continue;let h=.35+.5*He(`${l.toFixed(1)},${u.toFixed(1)}`);i.hedge.box(l,u,e+2.1,e+2.3+h,1.5,1.5,.3*He(`${u}`),1)}}}function m_(i,t,e,n,s,o){let r=vn(t.p),[c,a]=t.c,l=1.6,u=-1e9;for(let E=0;E<r.length;E++){let A=r[E],w=r[(E+1)%r.length];for(let S=0;S<=1;S+=.05){let R=Ge(A,w,S);u=Math.max(u,s(R[0],R[1]))}}let h=u+4.2,d=t.gates||[],f=E=>{for(let A of d)if(an(E,A.at)<A.w/2+(A.gap?.4:1.5))return A;return null};for(let E=0;E<r.length;E++){let A=r[E],w=r[(E+1)%r.length],S=an(A,w),R=Math.max(1,Math.round(S/1.6)),I=Math.atan2(w[1]-A[1],w[0]-A[0]),U=(w[1]-A[1])/S,W=-(w[0]-A[0])/S,L=[],O=()=>{if(L.length<2){L=[];return}let H=L.map(k=>[k[0]+U*(l/2-.35),k[1]+W*(l/2-.35)]);qs(i,H,h,!1),L=[]};for(let H=0;H<R;H++){let k=Ge(A,w,H/R),tt=Ge(A,w,(H+1)/R),nt=Ge(k,tt,.5);if(f(nt)){O();continue}let bt=Math.min(s(k[0],k[1]),s(tt[0],tt[1])),j=d.find(vt=>vt.gap&&an(nt,vt.at)<vt.w/2+2.6),Mt=j?h-1.6-(2.6-(an(nt,j.at)-j.w/2))*.6:h;if(i.cityStone.box(nt[0]-U*0,nt[1]-W*0,bt-.6,Mt,S/R+.03,l,I,.35),j){O();continue}L.length||L.push(k),L.push(tt)}O()}for(let E=0;E<r.length;E++){let A=r[E],w=A[0]-c,S=A[1]-a,R=Math.hypot(w,S),I=[A[0]+w/R*.6,A[1]+S/R*.6],U=Math.atan2(S,w),W=s(I[0],I[1]);i.cityStone.box(I[0],I[1],W-.6,h+.4,3.6,3.6,U,.35),qs(i,Ee(I[0],I[1],3,3,U).concat([Ee(I[0],I[1],3,3,U)[0]]),h+.4,!1)}for(let E of d){let A=E.f*Xi,w=Math.cos(A),S=Math.sin(A),R=-S,I=w,U=Math.atan2(I,R),W=s(E.at[0],E.at[1]),L=(H,k)=>[E.at[0]+R*H+w*k,E.at[1]+I*H+S*k];if(E.gap){let H=Be(Math.floor(He(E.at.join(","))*1e6)+3);for(let k=0;k<9;k++){let tt=L((H()-.5)*(E.w+2.5),(H()-.3)*3.5),nt=.4+H()*.7;i.cityStone.box(tt[0],tt[1],s(tt[0],tt[1])-.3,s(tt[0],tt[1])+nt*.6,nt,nt*.8,H()*3,.5)}continue}let O=E.w/2;for(let H of[-1,1]){let k=L(H*(O+.8),0);i.cityStone.box(k[0],k[1],W-.6,h+1.4,1.6,l+.8,U,.35)}{let H=L(0,0);i.cityStone.box(H[0],H[1],W+4.2,h+1.4,E.w+.2,l+.8,U,.35)}{let H=L(0,-.2);Ae(i,{c:H,L:E.w+4.6,D:l+2.4,a:U,ze:h+1.4,top:h+2.9,ty:"xs",oh:.6,ohg:.4,lift:.4,sag:.55,ridgeDeco:!0})}for(let H of[-1,1]){let k=L(H*O,-l/2),tt=H*75*Xi,nt=O-.05,it=[Math.cos(U+Math.PI)*H,Math.sin(U+Math.PI)*H],bt=[it[0]*Math.cos(-tt)-it[1]*Math.sin(-tt),it[0]*Math.sin(-tt)+it[1]*Math.cos(-tt)],j=[k[0]+bt[0]*nt/2,k[1]+bt[1]*nt/2];i.red.box(j[0],j[1],W,W+3.9,nt,.16,Math.atan2(bt[1],bt[0]),1)}i.stone.box(...L(0,0),W-.2,W+.05,E.w+.6,l+1.2,U,.8)}let p=Math.max(9,t.r*1.5),y=t.z,g=y+t.h,m=0,M=1e9;for(let E of Ee(c,a,p+2,p+2,m))M=Math.min(M,s(E[0],E[1]));i.cityStone.prism(Ee(c,a,p+1.8,p+1.8,m),M-.6,y+.6,!0),ko(i.cityStone,[c-(p+1.8)/2,a],[c-p/2-.2,a],p+1.8,M-.6,y+.6,y+2.4),i.cityStone.prism(Ee(c,a,p+.6,p+.6,m),y+.6,y+2.6,!0),An(i,"stoneF",Ee(c,a,p,p,m),y+2.6,g-3,3.6,0,Math.round((g-5.6-y)/3.6));for(let E of[y+2.6,y+t.h*.5])i.coping.prism(Ee(c,a,p+.3,p+.3,m),E-.15,E+.25,!1);i.cityStone.prism(Ee(c,a,p+1.4,p+1.4,m),g-3,g-1.75,!0,!0);for(let E=-2;E<=2;E++)for(let[A,w,S]of[[E*p/5.2,-(p+1.4)/2,0],[E*p/5.2,(p+1.4)/2,0],[-(p+1.4)/2,E*p/5.2,Math.PI/2],[(p+1.4)/2,E*p/5.2,Math.PI/2]])i.cityStone.box(c+A,a+w,g-3.8,g-3,.5,.5,S,.5);let _=Ee(c,a,p+.7,p+.7,m);qs(i,_.concat([_[0]]),g-1.75,!1),i.ridge.box(c+p/2+.05,a,y+2.6,y+5.8,.12,2.2,Math.PI/2,1);for(let E of[y+9,y+15,y+20])for(let[A,w,S]of[[0,-p/2-.03,0],[0,p/2+.03,0],[-p/2-.03,0,Math.PI/2],[p/2+.03,0,Math.PI/2]])i.ridge.box(c+A,a+w,E,E+1.4,.3,.08,S,1);i.iron.cyl(c,a,g-1.75,g-.6,.45,8,!0),Vn(i.iron,c,a,g-.6,g+.5,.8,1.6,12,!1);let v=new re({color:"#ffb257",emissive:new ee("#ff7a26"),emissiveIntensity:2.2,transparent:!0,opacity:.92,depthWrite:!1}),x=[];for(let E=0;E<5;E++){let A=new Gt(new _r(.55+E%2*.25,2.2+E%3*.6,7),v),w=E/5*Math.PI*2,S=E?.7:0,[R,I,U]=T(c+Math.cos(w)*S,a+Math.sin(w)*S,g+.4+1.1);A.position.set(R,I,U),e.add(A),x.push(A)}o.push(E=>x.forEach((A,w)=>{let S=.85+.25*Math.sin(E*(7+w)+w*1.7);A.scale.set(1,S,1)}));let b=new Cr("#ff8a3a",40,40,2);{let[E,A,w]=T(c,a,g+2.2);b.position.set(E,A,w),e.add(b)}tl(e,n,o,c,a,g+3,.37)}function g_(i,t,e,n,s,o){let[r,c]=t.p,a=t.z-2.6,l=t.w,u=S=>o.key.some(R=>Hn(S,R.p)),h=c.slice(),d=an(r,c);for(let S=0;S<d;S+=.5){let R=Ge(c,r,S/d);if(!u(R)){h=R;break}}let f=an(r,h),p=Math.atan2(h[1]-r[1],h[0]-r[0]),y=Math.cos(p),g=Math.sin(p),m=-g,M=y,_=(S,R)=>[r[0]+y*S+m*R,r[1]+g*S+M*R],v=t.legU!=null?t.legU:-.4;{let S=_(f/2,0);i.deck.box(S[0],S[1],a-.25,a,f,l,p,1)}let x=Math.max(3,Math.round(f/2.4));for(let S of[-1,1]){let R=S*(l/2+.05),I=_(0,R),U=_(f,R);i.girder.beam(T(I[0],I[1],a-.3),T(U[0],U[1],a-.3),.22,.3),i.girder.beam(T(I[0],I[1],a+1.5),T(U[0],U[1],a+1.5),.2,.22);for(let W=0;W<=x;W++){let L=_(f*W/x,R);if(i.girder.beam(T(L[0],L[1],a-.3),T(L[0],L[1],a+1.5),.14,.14),W<x){let O=_(f*(W+1)/x,R),H=W%2===0;i.girder.beam(T(L[0],L[1],H?a-.3:a+1.5),T(O[0],O[1],H?a+1.5:a-.3),.1,.1)}}}let b=a+.55,E=[l/2-.45,l/2-.95];for(let S=0;S<=x;S+=2){let R=_(f*S/x,E[0]-.25);i.iron.box(R[0],R[1],a,b-.2,.12,1.2,p,1)}Kn(e,n.brass,[..._(v,E[0]),b+.1],[..._(f+.3,E[0]),b+.1],.46,16),Kn(e,n.ironM,[..._(v,E[1]),b-.05],[..._(f+.3,E[1]),b-.05],.2,12),Kn(e,n.brass,[..._(v,E[0]-.3),b+.85],[..._(f+.3,E[0]-.3),b+.85],.2,10);for(let S=1;S<x;S+=3){let R=_(f*S/x,E[0]);Kn(e,n.ironM,[R[0]-y*.14,R[1]-g*.14,b+.1],[R[0]+y*.14,R[1]+g*.14,b+.1],.54,16)}let A=s(r[0],r[1]),w=[[v,-l/2-.3],[v,l/2+.3],[v+2.8,-l/2-.3],[v+2.8,l/2+.3]].map(([S,R])=>_(S,R));for(let S of w){let R=s(S[0],S[1]);i.girder.beam(T(S[0],S[1],R-.3),T(S[0],S[1],a-.3),.3,.3),i.stone.box(S[0],S[1],R-.3,R+.4,1,1,p,1)}for(let S=A+2.4;S<a-.5;S+=2.6)for(let R=0;R<4;R++){let I=w[[0,1,3,2][R]],U=w[[0,1,3,2][(R+1)%4]];i.girder.beam(T(I[0],I[1],S),T(U[0],U[1],S),.12,.12)}for(let[S,R]of[[0,2],[1,3]]){let I=w[S],U=w[R];i.girder.beam(T(I[0],I[1],A+.3),T(U[0],U[1],a-.5),.09,.09),i.girder.beam(T(U[0],U[1],A+.3),T(I[0],I[1],a-.5),.09,.09)}{let S=_(v,E[0]);Kn(e,n.brass,[S[0],S[1],A-.2],[S[0],S[1],b+.55],.46,16);let R=_(v,E[1]);Kn(e,n.ironM,[R[0],R[1],A-.2],[R[0],R[1],b],.2,12)}{let S=_(f-.2,0);i.girder.box(S[0],S[1],a-1.6,a-.25,.4,l+.6,p,1)}if(t.door){let S=_(f-.06,0),R=l-.5,I=2.15;if(t.open){i.ridge.box(S[0],S[1],a,a+I,.16,R,p,1);for(let U of[-1,1]){let W=_(f-.06-R/4,U*(R/2-.05));i.wood.box(W[0],W[1],a,a+I-.05,R/2,.07,p,1)}}else i.wood.box(S[0],S[1],a,a+I,.16,R,p,1);for(let U of[-1,1]){let W=_(f-.1,U*(R/2+.18));i.coping.box(W[0],W[1],a-.25,a+I+.05,.3,.36,p,.6)}{let U=_(f-.1,0);i.coping.box(U[0],U[1],a+I,a+I+.35,.34,R+.9,p,.6)}{let U=_(f-.45,R/2+.55);i.iron.box(U[0],U[1],a+I-.2,a+I-.1,.5,.06,p,1),i.lampG.box(U[0]-y*.25,U[1]-g*.25,a+I-.55,a+I-.2,.26,.26,p,1)}}}function y_(i,t,e){for(let n of t){let s=n.f*Xi,o=Math.cos(s),r=Math.sin(s),c=-r,a=o,l=Math.atan2(a,c),u=n.w,h=2.8,d=n.z,f=(_,v)=>[n.at[0]+c*_+o*v,n.at[1]+a*_+r*v];for(let _ of[-1,1]){let v=f(_*(u/2+.25),h/2-.1);i.stone.box(v[0],v[1],d-.4,d+.75,.5,h+.3,l,.8)}{let _=f(0,h+.15);i.stone.box(_[0],_[1],d-.4,d+.75,u+1,.5,l,.8)}let p=f(-u/2,.05),y=f(u/2,.05),g=f(u/2,h),m=f(-u/2,h);i.deck.quad(T(p[0],p[1],d+.04),T(y[0],y[1],d+.04),T(g[0],g[1],d+.04),T(m[0],m[1],d+.04),[0,0],[1,0],[1,1],[0,1],Le);for(let _=0;_<4;_++){let v=f(0,.35+_*.6);i.ridge.box(v[0],v[1],d+.05,d+.08,u-.1,.08,l,1)}for(let _ of[-1,1]){let v=f(_*(u/2+.55),h/2),x=Math.min(u/2,1.6);i.wood.box(v[0],v[1],d+.75,d+.75+x*.9,.1,h-.4,l,1)}let M=f(u/2+.9,-.3);i.wood.cyl(M[0],M[1],d,d+2.4,.07,6,!1),i.lampG.box(M[0],M[1],d+2,d+2.4,.26,.26,l,1)}}function __(i,t,e,n){Xs(i,a_);let s=vn(t.p),o=t.gate,r=(n.gates.find(b=>an(b.at,o)<2)||{w:6}).w;for(let b=0;b<s.length;b++){let E=s[b],A=s[(b+1)%s.length],w=Math.max(1,Math.round(an(E,A)/2.2)),S=Math.atan2(A[1]-E[1],A[0]-E[0]);for(let R=0;R<w;R++){let I=Ge(E,A,R/w),U=Ge(E,A,(R+1)/w),W=Ge(I,U,.5);if(an(W,o)<r/2+1.4)continue;let L=e(W[0],W[1]);i.plank.box(W[0],W[1],L-.3,L+2.2,an(I,U)+.03,.1,S,1),i.wood.cyl(I[0],I[1],e(I[0],I[1])-.3,e(I[0],I[1])+2.5,.1,6,!1)}}let c=Be(4711),a=vn(t.pit),l=1e9,u=1e9,h=-1e9,d=-1e9;for(let b of a)l=Math.min(l,b[0]),u=Math.min(u,b[1]),h=Math.max(h,b[0]),d=Math.max(d,b[1]);let f=e((l+h)/2,(u+d)/2);for(let b=0;b<6;b++)for(let E=0;E<3;E++){let A=l+4+b*(h-l-8)/5,w=u+4+E*(d-u-8)/2;i.stone.box(A,w,f-.2,f+.5,1.4,1.4,0,.8)}for(let b=0;b<4;b++){let E=l+3+c()*(h-l-6),A=u+3+c()*(d-u-6);for(let w=0;w<3;w++)i.stone.box(E,A+w*.05,f+w*.55,f+.5+w*.55,2.2-w*.3,1,0,.8)}for(let b=0;b<3;b++){let E=l+4+c()*(h-l-8),A=u+3+c()*(d-u-6);for(let w=0;w<4;w++)i.wood.box(E,A,f+w*.3,f+.28+w*.3,5.5,1.6-w*.2,0+w*.02,1)}let p=e(h+2,(u+d)/2);ko(i.plank,[h-5.5,d-2],[h+.6,d-2],2,f-.3,f+.05,p+.08);let[y,g,m]=t.scaffold,M=t.scaffoldz;for(let b=0;b<=8;b++)for(let E of[-.7,.7])i.bamboo.cyl(y-m/2+b*m/8,g+E,M-.2,M+6.6,.07,5,!1);for(let b of[2,4.1,6.2]){for(let E of[-.7,.7])i.bamboo.beam(T(y-m/2,g+E,M+b),T(y+m/2,g+E,M+b),.09,.09);i.plank.box(y,g,M+b+.05,M+b+.15,m,1.5,0,1)}for(let b=0;b<10;b++){let E=y-m/2+1+b*(m-2)/9;i.bamboo.beam(T(E,g-1.2,M),T(E+.6,g-.8,M+7.5),.1,.1)}let[_,v,x]=t.crane;Fh(i,_,v,t.cranez,x,15,Math.atan2((u+d)/2-v,(l+h)/2-_),42,7,t.guys!==!1);for(let b=0;b<5;b++){let E=l+c()*(h-l),A=d+3+c()*5,w=e(E,A);Hn([E,A],s)&&i.brick.box(E,A,w-.2,w+1.1,2,1.2,c()*.3,1)}Xs(i,-1)}function x_(i,t){t.forEach(([e,n,s],o)=>{if(i.iron.cyl(e,n,s-.3,s+.55,.2,8,!0),i.iron.cyl(e,n,s+.55,s+4.2,.08,6,!1),i.lampG.box(e,n,s+4.2,s+4.85,.44,.44,0,1),Vn(i.iron,e,n,s+4.85,s+5.25,.38,.05,6,!1),o%2===0){let r=(He(e+","+n)-.5)*.6,c=[e+Math.cos(r)*1,n+Math.sin(r)*1];i.iron.beam(T(e,n,s+3.9),T(c[0],c[1],s+3.9),.05,.05),Sn(i.cloth,[.7,.17,.12]);let a=[e+Math.cos(r)*.25,n+Math.sin(r)*.25];i.cloth.quad(T(a[0],a[1],s+3.85),T(c[0],c[1],s+3.85),T(c[0],c[1],s+1.9),T(a[0],a[1],s+1.9),[0,0],[1,0],[1,1],[0,1]),Sn(i.cloth,[1,1,1])}})}function M_(i,t,e,n,s){let o=t.nsm.rails;if(!o||o.length<2)return;let r=m=>{let M=null;for(let _=0;_<o.length;_++){let v=o[Math.max(0,_-1)],x=o[Math.min(o.length-1,_+1)],b=x[0]-v[0],E=x[1]-v[1],A=Math.hypot(b,E)||1,w=[o[_][0]-E/A*m,o[_][1]+b/A*m];w.push(s(w[0],w[1])+.07),M&&i.rail.beam(T(...M),T(...w),.08,.07),M=w}};for(let m of[-2.2,2.2])for(let M of[-.72,.72])r(m+M);let c=t.nsm.tram,a=Math.cos(c.a),l=Math.sin(c.a),u=[c.c[0]-l*c.off,c.c[1]+a*c.off],h=s(u[0],u[1]),d=new _e;{let[m,M,_]=T(u[0],u[1],h);d.position.set(m,M,_),d.rotation.y=-c.a}let f=(m,M,_,v,x,b,E)=>{let A=new Gt(new Te(x,b,E),m);return A.position.set(M,v,_),A.castShadow=!0,A.receiveShadow=!0,d.add(A),A},p=10.4,y=2.35;for(let m of[-3.2,3.2])f(n.ironM,m,0,.42,2.4,.5,1.6);f(n.redP,0,0,1.15,p,1,y),f(n.cream,0,0,2.15,p,1,y-.04),f(n.woodM,0,0,2.75,p+.3,.2,y+.2),f(n.cream,0,0,2.98,p-2.4,.26,1.3),f(n.woodM,0,0,3.15,p-2.2,.08,1.45);for(let m=0;m<7;m++)for(let M of[-1,1])f(n.ironM,-3.9+m*1.3,M*(y/2+.005),2.2,.95,.68,.02);for(let m of[-1,1])f(n.ironM,m*(p/2+.005),0,2.2,.02,.68,1.6);for(let m of[-1,1])f(n.brass,m*(p/2+.06),0,.85,.1,.25,1.8);let g=new Gt(new ye(.05,.05,4.2,6),n.ironM);g.position.set(-1.2,4.9,0),g.rotation.z=-1.05,d.add(g),e.add(d)}var y0=[[.85,.75,.55],[.72,.24,.16],[.86,.5,.2],[.93,.88,.76],[.62,.3,.18],[.8,.62,.32]],_0=[[.78,.55,.24],[.5,.62,.32],[.82,.74,.55],[.62,.3,.2],[.85,.82,.7],[.55,.42,.3]];function v_(i,t){for(let e of t){let n=Math.max(e.L,2.2),s=Math.max(e.D,1.8),o=e.a,r=e.z,c=Math.max(1,Math.round(n/2.9)),a=n/c,l=bn(e.c[0],e.c[1],o);for(let u=0;u<c;u++){let h=l(-n/2+(u+.5)*a,0),d=a-.35,f=bn(h[0],h[1],o),p=Be(Math.floor(He(h.join(","))*1e6)+5);for(let[S,R]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let I=f(S*(d/2-.1),R*(s/2-.1));i.wood.cyl(I[0],I[1],r-.1,r+2.5,.06,6,!1)}{let S=f(0,-s*.12);i.wood.box(S[0],S[1],r+.75,r+.85,d-.3,s*.55,o,1);for(let R of[-1,1]){let I=f(R*(d/2-.35),-s*.12);i.wood.box(I[0],I[1],r,r+.75,.1,s*.5,o,1)}}for(let S=0;S<3;S++){let R=f(-d/2+.5+S*(d-1)/2,-s*.12+(p()-.5)*s*.2);Sn(i.cloth,_0[Math.floor(p()*_0.length)]),i.cloth.box(R[0],R[1],r+.85,r+1.05+p()*.25,.5,.42,o+p()*.3,1)}let y=y0[(e.col+u*2+Math.floor(p()*2))%y0.length];Sn(i.cloth,y);let g=r+2.25,m=r+3.15,M=.3,_=d/2+.15,v=f(-_,-s/2-M),x=f(_,-s/2-M),b=f(_,0),E=f(-_,0),A=f(_,s/2+M),w=f(-_,s/2+M);i.cloth.quad(T(v[0],v[1],g),T(x[0],x[1],g),T(b[0],b[1],m),T(E[0],E[1],m),[0,0],[1,0],[1,1],[0,1],Le),i.cloth.quad(T(E[0],E[1],m),T(b[0],b[1],m),T(A[0],A[1],g),T(w[0],w[1],g),[0,0],[1,0],[1,1],[0,1],Le);for(let[S,R]of[[v,x],[A,w]])i.cloth.quad(T(S[0],S[1],g),T(R[0],R[1],g),T(R[0],R[1],g-.35),T(S[0],S[1],g-.35),[0,0],[1,0],[1,1],[0,1]);for(let[S,R,I]of[[x,b,A],[v,E,w]])i.cloth.tri(T(S[0],S[1],g),T(R[0],R[1],m),T(I[0],I[1],g),[0,0],[.5,1],[1,0])}Sn(i.cloth,[1,1,1])}}function b_(i,t,e,n,s){for(let o of t.marks){let[r,c]=o.c,a=o.z,l=o.a||0,u=bn(r,c,l);if(o.k==="board"){for(let h of[-1,1]){let d=u(h*1.3,0);i.wood.cyl(d[0],d[1],a-.2,a+2.9,.1,6,!1)}{let h=u(0,0);i.wood.box(h[0],h[1],a+.9,a+2.5,2.7,.12,l,1)}Sn(i.cloth,[.93,.9,.82]);for(let h=0;h<4;h++){let d=u(-.9+h*.6,-.08);i.cloth.box(d[0],d[1],a+1.2+h%2*.35,a+1.95+h%2*.35,.45,.02,l,1)}Sn(i.cloth,[1,1,1]),Ae(i,{c:[r,c],L:3.2,D:.9,a:l,ze:a+2.8,top:a+3.25,ty:"gable",oh:.25,ohg:.2,lift:.15,sag:.4,ridgeDeco:!1})}else if(o.k==="teashed"){let h=o.L,d=o.D;for(let[p,y]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let g=u(p*(h/2-.2),y*(d/2-.2));i.red.cyl(g[0],g[1],a,a+2.8,.13,8,!1)}Ae(i,{c:[r,c],L:h,D:d,a:l,ze:a+2.8,top:a+4,ty:"xs",oh:.6,ohg:.4,lift:.35,sag:.5,ridgeDeco:!0});{let p=u(0,-d/2+.7);i.wood.box(p[0],p[1],a,a+.95,h-1.2,.6,l,1)}{let p=u(h/2-1,d/2-.8);i.brick.box(p[0],p[1],a,a+.85,1,.8,l,1),i.iron.cyl(p[0],p[1],a+.85,a+1.15,.28,8)}for(let p of[.2,1.6]){let y=u(0,-d/2-p-.9);i.wood.box(y[0],y[1],a+.4,a+.48,h*.7,.35,l,1);for(let g of[-1,1]){let m=u(g*h*.3,-d/2-p-.9);i.wood.box(m[0],m[1],a,a+.4,.08,.3,l,1)}}let f=u(-h/2-.4,-d/2-.4);i.wood.cyl(f[0],f[1],a,a+5,.06,6,!1),Sn(i.cloth,[.7,.2,.13]);{let p=u(-h/2-.4,-d/2-1.5);i.cloth.quad(T(f[0],f[1],a+4.9),T(p[0],p[1],a+4.9),T(p[0],p[1],a+3.3),T(f[0],f[1],a+3.3),[0,0],[1,0],[1,1],[0,1])}Sn(i.cloth,[1,1,1])}else if(o.k==="scale"){for(let h of[-1,1]){let d=u(h*1.5,0);i.wood.cyl(d[0],d[1],a-.2,a+3.4,.12,6,!1)}i.wood.beam(T(...u(-1.6,0),a+3.3),T(...u(1.6,0),a+3.3),.2,.24),i.iron.beam(T(r,c,a+3.2),T(r,c,a+2.4),.04,.04),i.wood.beam(T(...u(-1.2,0),a+2.35),T(...u(.6,0),a+2.45),.08,.08),i.iron.box(...u(-1.1,0),a+1.6,a+2.3,.18,.18,l,1),i.wood.box(r,c,a,a+.18,1.4,1.4,l,1)}else if(o.k==="kiln"){let h=o.r,d=o.top-a,f=7;i.brick.col=[.86,.6,.48],i.brick.col2=[1,1,1];for(let p=0;p<f;p++){let y=p/f,g=(p+1)/f,m=h*Math.cos(y*1.2),M=h*Math.cos(g*1.2);Vn(i.brick,r,c,a-.3+d*Math.sin(y*1.5708)*.98,a-.3+d*Math.sin(g*1.5708)*.98,m,Math.max(1.4,M),20,(p===f-1,!1))}i.brick.col=[1,1,1],i.ridge.box(r+h*.94,c,a,a+2.4,.3,1.8,Math.PI/2,1),i.cityStone.cyl(r,c,a+d-.6,a+d-.3,1.6,12,!1)}}if(t.nsm.compass){let[o,r]=t.nsm.compass,c=s(o,r);i.brassG.cyl(o,r,c-.1,c+.06,1.1,24,!0),i.brassG.cyl(o,r,c,c+.9,.09,6,!0)}}function x0(i,t,e,n,s,o){let r=i.nsm;c_(t,r.tower,e,n,s,o),l_(t,r.clock,e,n,s),r.link&&f_(t,r.link,e,n),r.screens&&p_(t,r.screens,r.screens_z),r.hstair&&d_(t,r.hstair,s),m_(t,r.fort,e,n,s,o),g_(t,r.pipebridge,e,n,s,i),y_(t,r.cellar||[],s),__(t,r.camp,s,i),x_(t,r.lamps||[]),M_(t,i,e,n,s),v_(t,i.stalls||[]),b_(t,i,e,n,s);for(let[c,a,l]of r.smoke||[])tl(e,n,o,c,a,l+.6,(c*7+a)%1)}function M0(i,t,e,n,s,o){let r=i.nsm,c=r.pipebridge,a=c.z-2.6,l=[];Xs(t,-1);let u=(P,C,z,q,Q,J)=>{P.quad(C,z,q,Q,[0,0],[1,0],[1,1],[0,1],J),P.quad(C,z,q,Q,[0,0],[1,0],[1,1],[0,1],J.map(ht=>-ht))},h=517.4,d=520.4,f=120,p=126,y=(h+d)/2,g=(f+p)/2,m=a+1.05,M=(P,C)=>s(P,C);for(let P of[h,y,d])for(let C of[f,g,p])t.bamboo.beam(T(P,C,M(P,C)-.2),T(P,C,m+.25),.11,.11);let _=[[h,f],[d,f],[d,p],[h,p]];for(let P=M(y,g)+1.2;P<a-.4;P+=1.9)for(let C=0;C<4;C++){let z=_[C],q=_[(C+1)%4];t.bamboo.beam(T(z[0],z[1],P),T(q[0],q[1],P),.08,.08)}for(let P of[31.4,34.1,a]){for(let C of[f,g,p])t.bamboo.beam(T(h,C,P-.17),T(d,C,P-.17),.09,.09);for(let C of[h,y,d])t.bamboo.beam(T(C,f,P-.17),T(C,p,P-.17),.08,.08)}t.plank.box(y,(f+g)/2,31.28,31.4,d-h+.2,g-f+.1,0,1),t.plank.box(y,(g+p)/2,33.98,34.1,d-h+.2,p-g+.1,0,1),t.plank.box(y,g,a-.12,a,d-h+.3,p-f+.3,0,1);for(let P of[f,p]){let C=M(y,P)+.3;t.bamboo.beam(T(h,P,C),T(d,P,C+4),.07,.07),t.bamboo.beam(T(d,P,C+4),T(h,P,a-.4),.07,.07)}t.bamboo.beam(T(d,p,M(d,p)+.3),T(d,123,a-.5),.07,.07);let v=121.6,x=d+.14,b=M(x,v);for(let P of[v-.27,v+.27])t.bamboo.beam(T(x,P,b-.1),T(x,P,m+.2),.08,.08);for(let P=b+.3;P<a+.05;P+=.3)t.bamboo.beam(T(x,v-.27,P),T(x,v+.27,P),.045,.045);let E=(P,C)=>{t.bamboo.beam(T(P[0],P[1],m),T(C[0],C[1],m),.07,.07),t.bamboo.beam(T(P[0],P[1],a+.5),T(C[0],C[1],a+.5),.06,.06)};E([h,f],[d,f]),E([h,p],[d,p]),E([d,f],[d,v-.45]),E([d,v+.45],[d,p]),E([h,f],[h,124.15]);for(let P of[v-.45,v+.45])t.bamboo.beam(T(d,P,a),T(d,P,m+.1),.07,.07);Sn(t.cloth,[.68,.17,.12]),u(t.cloth,T(d+.1,122.35,35.7),T(d+.1,124.45,35.7),T(d+.1,124.45,32),T(d+.1,122.35,32),[1,0,0]),Sn(t.cloth,[1,1,1]);let A=c.p[0][0],w=h,S=c.p[0][1],R=.7;t.plank.box((A+w)/2,S,a-.1,a,w-A,R*2,0,1);for(let P of[-1,1])t.bamboo.beam(T(A,S+P*(R-.08),a-.17),T(w,S+P*(R-.08),a-.17),.1,.1);let I=i.key.find(P=>P.id==="X2"),U=506,W=516.5,L=32.29,O=34.49;if(I){let P=I.p.map(C=>C[0]);U=Math.min(...P),W=Math.max(...P),L=I.z+3.8,O=I.top}let H=(U+W)/2,k=P=>O-(O-L)*Math.abs(P-H)/((W-U)/2)+.12;for(let P of[U+2.4,H,W-2.4]){let C=k(P);for(let z of[-1,1])t.bamboo.beam(T(P,S+z*(R-.08),a-.2),T(P,S+z*(R+.35),C+.05),.09,.09),t.wood.box(P,S+z*(R+.35),C-.02,C+.06,.5,.35,0,1);t.bamboo.beam(T(P,S-R-.1,C+.9),T(P,S+R+.1,C+.9),.06,.06)}for(let P=A+.6;P<=w-.2;P+=2.3)for(let C of[-1,1])t.bamboo.beam(T(P,S+C*(R-.02),a-.15),T(P,S+C*(R-.02),a+1),.06,.06);for(let P of[-1,1])t.bamboo.beam(T(A,S+P*(R-.02),a+1),T(w,S+P*(R-.02),a+1),.06,.06),t.bamboo.beam(T(A,S+P*(R-.02),a+.5),T(w,S+P*(R-.02),a+.5),.05,.05);let tt=r.clock,nt=tt.z,it=nt+1.4,bt=1e9;for(let P of tt.p)bt=Math.min(bt,P[0]);let j=122.5,Mt=1.8,vt=2.6;t.ridge.box(bt-.02,j,it,it+vt,.12,Mt,0,1);for(let P of[-1,1])t.coping.box(bt-.08,j+P*(Mt/2+.17),it,it+vt+.1,.3,.34,0,.6);t.coping.box(bt-.08,j,it+vt,it+vt+.4,.32,Mt+.9,0,.6);let K=bt-.9,$=9,ut=.3,N=M(K-$*ut,j),F=(it-N)/$;for(let P=0;P<$;P++)t.stone.box(K-(P+.5)*ut,j,N-.4,it-(P+1)*F,ut+.01,2,0,.8);for(let P of[-1,1])ko(t.cityStone,[K+.05,j+P*1.15],[K-$*ut,j+P*1.15],.3,N-.4,it+.25,N+.2);let V=461.2,G=129,D=nt+24.5;t.wood.box(V,G,D,D+.1,1.15,1.15,0,1),t.ridge.box(V,G,D+.1,D+.11,.86,.86,0,1);{let P=75*Xi;t.wood.beam(T(V,G+.5,D+.14),T(V,G+.5+Math.cos(P)*.9,D+.14+Math.sin(P)*.9),.9,.06)}let ct=i._chest5?i._chest5[0]:459.72,Z=i._chest5?i._chest5[1]:126.6,rt=i._chest5?Math.PI/2:0;t.wood.box(ct,Z,D,D+.32,.42,.62,rt,1),t.wood.box(ct,Z,D+.32,D+.44,.46,.66,rt,1);for(let P of[-.2,.2])t.brassG.box(ct+(rt?P:0),Z+(rt?0:P),D-.005,D+.45,.47,.05,rt,1);let ft=i.key.find(P=>P.id==="X1");if(ft&&ft.plat){let P=ft.z+ft.plat,C=6,z=.34,q=ft.door5,Q=q?q.f*Math.PI/180:Math.PI/2,J=Math.cos(Q),ht=Math.sin(Q),pt=-ht,Tt=J,Ct=q?q.at:[ft.doorX||556,Math.max(...ft.p.map(Ut=>Ut[1]))+2.2],dt=(Ut,et)=>[Ct[0]+pt*Ut+J*et,Ct[1]+Tt*Ut+ht*et],Et=dt(0,1.9),Ht=M(Et[0],Et[1]),Pt=(P-Ht)/C,It=Math.atan2(Tt,pt);for(let Ut=0;Ut<C-1;Ut++){let et=dt(0,(Ut+.5)*z);t.stone.box(et[0],et[1],Ht-.3,P-(Ut+1)*Pt,3.6,z+.01,It,.8)}for(let Ut of[-1,1])ko(t.cityStone,dt(Ut*1.98,-.05),dt(Ut*1.98,(C-1)*z),.36,Ht-.3,P+.18,Ht+.2)}{let P=(C,z,q,Q,J,ht,pt,Tt)=>{t.ridge.box(C+pt*.06,z+Tt*.06,q,q+J,Q,.12,ht,1);for(let Ct of[-1,1])t.coping.box(C+pt*.14+Math.cos(ht)*Ct*(Q/2+.17),z+Tt*.14+Math.sin(ht)*Ct*(Q/2+.17),q-.05,q+J+.1,.34,.3,ht,.6);t.coping.box(C+pt*.14,z+Tt*.14,q+J,q+J+.38,Q+.9,.32,ht,.6),t.stone.box(C+pt*.7,z+Tt*.7,q-.25,q+.06,Q+.8,1.1,ht,.8)};P(372,221.32,23.95,1.8,2.6,0,0,1),P(372,185.95,28.5,1.7,2.5,0,0,-1),P(380.5,226.02,23.85,1.1,2.1,0,0,1)}if(r.fort){let P=r.fort,C=P.c[0],z=P.c[1],q=Math.max(9,P.r*1.5),Q=P.z,J=Q+P.h,ht=Q+2.6,pt=C+(q+.6)/2,Tt=15,Ct=.3,dt=M(pt+Tt*Ct+.3,z),Et=(ht-dt)/Tt;for(let Ut=0;Ut<Tt;Ut++)t.stone.box(pt+(Ut+.5)*Ct,z,dt-.4,ht-(Ut+1)*Et+Et,Ct+.01,2.4,0,.8);for(let Ut of[-1,1])ko(t.cityStone,[pt-.05,z+Ut*1.38],[pt+Tt*Ct,z+Ut*1.38],.36,dt-.4,ht+.3,dt+.25);let Ht=C+3.2,Pt=z+3.4,It=J-1.75;t.wood.box(Ht,Pt,It,It+.1,1.2,1.2,0,1),t.ridge.box(Ht,Pt,It+.1,It+.11,.9,.9,0,1);{let Ut=70*Xi;t.wood.beam(T(Ht,Pt+.52,It+.14),T(Ht,Pt+.52+Math.cos(Ut)*.95,It+.14+Math.sin(Ut)*.95),.95,.06)}}let Dt=new re({color:"#f0c04a",metalness:.65,roughness:.3,emissive:"#a8740c",emissiveIntensity:.85}),mt=new rs({map:S_(),color:"#ffd77a",transparent:!0,depthWrite:!1,blending:Ns,opacity:.85}),wt=new ye(.2,.2,.045,20);wt.rotateX(Math.PI/2);let zt=[],st=(P,C,z,q)=>{let Q=new _e;if(Q.position.set(...T(P,C,z)),!q){let ht=new Gt(wt,Dt);ht.castShadow=!1,Q.add(ht),Q.userData.spin=ht}let J=new Is(mt);J.scale.setScalar(q?1.9:.95),J.renderOrder=5,Q.add(J),Q.userData.glow=J,Q.userData.gs=J.scale.x,Q.userData.ph=(P*1.7+C)%6.28,Q.userData.y0=Q.position.y,e.add(Q),zt.push(Q),l.push({obj:Q,at:[P,C,z],big:!!q})};st(524.2,121.4,M(524.2,121.4)+1.1),st(x+.45,v,31),st(x+.45,v,34),st(y-.3,123.2,a+.95),st(511.3,S,a+.95),st(498,S,a+.95),st(486,S,a+.95),st(ct,Z,D+.75,!0);for(let P of i._coins5||[])st(P[0],P[1],P[2]);return o.push(P=>{for(let C of zt){let z=C.userData;z.spin&&(z.spin.rotation.y=P*2.6+z.ph),C.position.y=z.y0+Math.sin(P*2.1+z.ph)*.07,z.glow.scale.setScalar(z.gs*(.9+.12*Math.sin(P*3+z.ph)))}}),{pickups:l}}function S_(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,240,190,1)"),e.addColorStop(.35,"rgba(255,214,120,0.55)"),e.addColorStop(1,"rgba(255,200,90,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new Dn(i);return n.colorSpace=ke,n}function Oh(i={}){let t=new _e;t.name=i.name||"hero";let e=new re({color:i.cloth||"#34465a",roughness:.75}),n=new re({color:i.pants||"#2a2e35",roughness:.8}),s=new re({color:i.skin||"#d9b48f",roughness:.8}),o=new re({color:i.sash||"#c9822b",roughness:.6}),r=new re({color:i.boot||"#3b2a1e",roughness:.9}),c=i.hair?new re({color:i.hair,roughness:.85}):n,a=[];for(let L of[e,n,s,o,r,c])L.transparent=!0,L.opacity=1;let l=(L,O,H,k,tt,nt)=>{let it=new Gt(L,O);return it.position.set(k,tt,nt),it.castShadow=!0,it.renderOrder=10,H.add(it),a.push(it),it},u=(L,O)=>new yr(L,O,4,10),h=new _e;h.position.y=.94,t.add(h),l(new Te(.3,.14,.18),n,h,0,.02,0);let d=new _e;d.position.y=.06,h.add(d);let f=l(new ye(.19,.15,.48,12),e,d,0,.27,0);f.scale.z=.72;let p=l(new ye(.155,.155,.06,12),o,d,0,.05,0);p.scale.z=.75,i.pack!==!1&&l(new Te(.22,.24,.1),o,d,0,.32,-.14),l(new ye(.05,.06,.08,8),s,d,0,.55,0);let y=l(new Ln(.115,16,12),s,d,0,.67,.01);if(l(new Ln(.118,16,8,0,Math.PI*2,0,Math.PI*.5),c,y,0,.012,-.008),i.helm){let L=new re({color:i.helm,roughness:.45,metalness:.35,transparent:!0,opacity:1});l(new Ln(.135,16,8,0,Math.PI*2,0,Math.PI*.55),L,y,0,.02,0),l(new ye(.17,.17,.018,16),L,y,0,0,0)}if(i.armor){let L=new re({color:i.armor,roughness:.4,metalness:.45,transparent:!0,opacity:1}),O=l(new ye(.205,.17,.4,12,1,!0),L,d,0,.3,0);O.scale.z=.78,O.material.side=qe,l(new Ln(.075,10,8,0,Math.PI*2,0,Math.PI*.5),L,d,.21,.5,0),l(new Ln(.075,10,8,0,Math.PI*2,0,Math.PI*.5),L,d,-.21,.5,0)}if(i.cap){let L=new re({color:i.cap,roughness:.8,transparent:!0,opacity:1});l(new ye(.128,.13,.07,14),L,y,0,.075,-.005);let O=l(new Te(.16,.015,.09),L,y,0,.05,.13);O.rotation.x=.15}if(i.skirt){let L=l(new ye(.16,.27,.62,14,1,!0),e,h,0,-.3,0);L.scale.z=.8,L.material=e.clone(),L.material.side=qe}function g(L){let O=new _e;O.position.set(L*.23,.48,0),d.add(O),l(u(.05,.2),e,O,0,-.14,0);let H=new _e;return H.position.y=-.29,O.add(H),l(u(.044,.18),e,H,0,-.12,0),l(new Ln(.05,10,8),s,H,0,-.27,0),{sh:O,el:H}}function m(L){let O=new _e;O.position.set(L*.1,-.02,0),h.add(O),l(u(.068,.32),n,O,0,-.21,0);let H=new _e;H.position.y=-.44,O.add(H),l(u(.058,.32),n,H,0,-.21,0);let k=l(new Te(.1,.07,.24),r,H,0,-.45,.05);return{hp:O,kn:H,ft:k}}let M={a:g(1),l:m(1)},_={a:g(-1),l:m(-1)};if(i.paper){let L=new re({color:"#eee6d2",roughness:.9,transparent:!0,opacity:1}),O=l(new Te(.07,.22,.28),L,d,.27,.3,.02);O.rotation.z=.12,l(new Te(.03,.26,.2),L,_.a.el,0,-.34,.04)}let v=new ci({color:i.ghostCol||"#ffd166",transparent:!0,opacity:.38,depthTest:!0,depthFunc:Po,depthWrite:!1}),x=a.map(L=>{let O=new Gt(L.geometry,v);return O.renderOrder=9,O.raycast=()=>{},L.add(O),O}),b=0,E=0,A=0,w=!0,S=0,R=0,I=0;function U(L){w=L;for(let O of x)O.visible=L}function W(L,O,H,k,tt,nt){let it=O>0?1:0;E+=(it-E)*(1-Math.exp(-L*10));let bt=Math.abs(H||0)>1.2||tt==="clb"?1:0;A+=(bt-A)*(nt?1:1-Math.exp(-L*8));let j=nt?1:1-Math.exp(-L*9);S+=((tt==="rope"?1:0)-S)*j,R+=((tt==="bal"?1:0)-R)*j,I+=((tt==="jump"||tt==="drop"?1:0)-I)*j;let Mt=(O>=2?2.6:1.8)*(k||1),vt=Math.sin(b*Math.PI*2),K=Math.cos(b*Math.PI*2),$=(O>=2?.8:.45)*E,ut=(O>=2?1.2:.6)*E;if(M.l.hp.rotation.x=-$*vt,_.l.hp.rotation.x=$*vt,M.l.kn.rotation.x=ut*Math.max(0,-K)+.08,_.l.kn.rotation.x=ut*Math.max(0,K)+.08,M.a.sh.rotation.x=.7*$*vt,_.a.sh.rotation.x=-.7*$*vt,M.a.sh.rotation.z=.08,_.a.sh.rotation.z=-.08,M.a.el.rotation.x=-(.25+(O>=2?1:.35)*E),_.a.el.rotation.x=M.a.el.rotation.x,A>.01){let F=A;M.a.sh.rotation.x=M.a.sh.rotation.x*(1-F)+(-2.7+.45*vt)*F,_.a.sh.rotation.x=_.a.sh.rotation.x*(1-F)+(-2.7-.45*vt)*F,M.a.el.rotation.x=M.a.el.rotation.x*(1-F)-.4*F,_.a.el.rotation.x=M.a.el.rotation.x,M.l.hp.rotation.x=M.l.hp.rotation.x*(1-F)+(-.6-.4*vt)*F,_.l.hp.rotation.x=_.l.hp.rotation.x*(1-F)+(-.6+.4*vt)*F,M.l.kn.rotation.x=M.l.kn.rotation.x*(1-F)+1.1*F,_.l.kn.rotation.x=M.l.kn.rotation.x}let N=(F,V,G)=>F*(1-G)+V*G;if(S>.01){let F=S;for(let V of[M,_])V.a.sh.rotation.x=N(V.a.sh.rotation.x,-2.95,F),V.a.el.rotation.x=N(V.a.el.rotation.x,-.2,F),V.l.hp.rotation.x=N(V.l.hp.rotation.x,-.3,F),V.l.kn.rotation.x=N(V.l.kn.rotation.x,.45,F);M.a.sh.rotation.z=N(M.a.sh.rotation.z,-.12,F),_.a.sh.rotation.z=N(_.a.sh.rotation.z,.12,F)}if(R>.01){let F=R;M.a.sh.rotation.z=N(M.a.sh.rotation.z,1.3+.1*vt,F),_.a.sh.rotation.z=N(_.a.sh.rotation.z,-1.3+.1*vt,F),M.a.sh.rotation.x=N(M.a.sh.rotation.x,0,F),_.a.sh.rotation.x=N(_.a.sh.rotation.x,0,F),M.a.el.rotation.x=N(M.a.el.rotation.x,-.15,F),_.a.el.rotation.x=N(_.a.el.rotation.x,-.15,F)}if(I>.01){let F=I;M.l.hp.rotation.x=N(M.l.hp.rotation.x,-1,F),_.l.hp.rotation.x=N(_.l.hp.rotation.x,-.7,F),M.l.kn.rotation.x=N(M.l.kn.rotation.x,1.4,F),_.l.kn.rotation.x=N(_.l.kn.rotation.x,1.1,F),M.a.sh.rotation.x=N(M.a.sh.rotation.x,-1.8,F),_.a.sh.rotation.x=N(_.a.sh.rotation.x,-1.6,F),M.a.sh.rotation.z=N(M.a.sh.rotation.z,.4,F),_.a.sh.rotation.z=N(_.a.sh.rotation.z,-.4,F)}d.rotation.x=(O>=2?.16:.05)*E+.1*A+.22*I-.08*S,h.position.y=.94+(O>=2?.045:.02)*E*Math.abs(K)+(1-E)*.006*Math.sin(performance.now()/700),i.sit&&(M.l.hp.rotation.x=_.l.hp.rotation.x=-1.5,M.l.kn.rotation.x=_.l.kn.rotation.x=1.5,M.a.sh.rotation.x=_.a.sh.rotation.x=-.6,M.a.el.rotation.x=_.a.el.rotation.x=-.85,d.rotation.x=.06,h.position.y=.5+.004*Math.sin(performance.now()/700+(i.ph||0))),i.arms&&(_.a.sh.rotation.x=-1.1+.25*Math.sin(performance.now()/260+(i.ph||0)),_.a.el.rotation.x=-.9)}return i.scale&&t.scale.setScalar(i.scale),{root:t,animate:W,setGhost:U,head:y,spine:d}}var v0=i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,zh=(i,t,e)=>{let n=t-i;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return i+n*e},b0=(i,t,e)=>{let n=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){let r=e[s],c=e[o];r[1]>t!=c[1]>t&&i<(c[0]-r[0])*(t-r[1])/(c[1]-r[1]||1e-9)+r[0]&&(n=!n)}return n};function S0(i){let{S:t,scene:e,camera:n,controls:s,gz:o,host:r}=i,c=Oh();c.root.visible=!1,e.add(c.root);let a=-.12,l=null,u=null,h=(N,F,V)=>N>V[0]&&N<V[2]&&F>V[1]&&F<V[3],d=(N,F)=>{if(u){for(let V of u.open)if(h(N,F,V)){for(let G of u.low)if(h(N,F,G))return u.lowZ;return u.F}}return o(N,F)};function f(){if(l)return l;let[N,F,V,G]=t.meta.bbox,D=Math.ceil(V-N)+2,ct=Math.ceil(G-F)+2,Z=D*ct,rt=new Float32Array(Z).fill(-1e9),ft=new Float32Array(Z).fill(1e9),Dt=new Float32Array(Z).fill(-1e9),mt=(q,Q)=>{let J=1e9,ht=1e9,pt=-1e9,Tt=-1e9;for(let Ct of q)J=Math.min(J,Ct[0]),ht=Math.min(ht,Ct[1]),pt=Math.max(pt,Ct[0]),Tt=Math.max(Tt,Ct[1]);for(let Ct=Math.max(0,Math.floor(ht-F));Ct<=Math.min(ct-1,Math.floor(Tt-F));Ct++)for(let dt=Math.max(0,Math.floor(J-N));dt<=Math.min(D-1,Math.floor(pt-N));dt++)b0(N+dt+.5,F+Ct+.5,q)&&Q(Ct*D+dt)},wt=(q,Q,J)=>{for(let ht=Math.max(0,Math.floor(q[1]-Q-F));ht<=Math.min(ct-1,Math.floor(q[1]+Q-F));ht++)for(let pt=Math.max(0,Math.floor(q[0]-Q-N));pt<=Math.min(D-1,Math.floor(q[0]+Q-N));pt++)Math.hypot(N+pt+.5-q[0],F+ht+.5-q[1])<=Q+.5&&J(ht*D+pt)},zt=q=>Q=>{q>rt[Q]&&(rt[Q]=q)};for(let q of t.bld||[])q.p&&q.p.length>2&&mt(q.p,zt(q.top));for(let q of t.key||[])q.p&&q.p.length>2&&mt(q.p,zt(q.top));let st=t.nsm||{};if(st.clock&&mt(st.clock.p,zt(st.clock.z+24.5+5.6)),st.tower&&mt(st.tower.p,zt(st.tower.z+st.tower.h)),st.link&&mt(st.link.p,zt(st.link.z+st.link.h+.4)),st.fort){let q=st.fort,[Q,J]=q.c,ht=Math.max(9,q.r*1.5)/2+.9;mt([[Q-ht,J-ht],[Q+ht,J-ht],[Q+ht,J+ht],[Q-ht,J+ht]],zt(q.z+q.h-1.75));let pt=q.p,Tt=q.gates||[],Ct=-1e9;for(let dt=0;dt<pt.length;dt++){let Et=pt[dt],Ht=pt[(dt+1)%pt.length];for(let Pt=0;Pt<=1;Pt+=.05)Ct=Math.max(Ct,o(Et[0]+(Ht[0]-Et[0])*Pt,Et[1]+(Ht[1]-Et[1])*Pt))}for(let dt=0;dt<pt.length;dt++){let Et=pt[dt],Ht=pt[(dt+1)%pt.length],Pt=Math.hypot(Ht[0]-Et[0],Ht[1]-Et[1]),It=(Ht[0]-Et[0])/Pt,Ut=(Ht[1]-Et[1])/Pt,et=-Ut*.8,Bt=It*.8;for(let kt=0;kt<Pt;kt+=1){let Xt=[Et[0]+It*(kt+.5),Et[1]+Ut*(kt+.5)];if(Tt.some(Zt=>Math.hypot(Xt[0]-Zt.at[0],Xt[1]-Zt.at[1])<Zt.w/2+.8))continue;let Lt=[Et[0]+It*kt,Et[1]+Ut*kt],Rt=[Et[0]+It*Math.min(Pt,kt+1),Et[1]+Ut*Math.min(Pt,kt+1)];mt([[Lt[0]-et,Lt[1]-Bt],[Rt[0]-et,Rt[1]-Bt],[Rt[0]+et,Rt[1]+Bt],[Lt[0]+et,Lt[1]+Bt]],zt(Ct+4.2))}}}for(let q of t.trees||[]){let Q=o(q.at[0],q.at[1]);wt(q.at,q.r*1.2,J=>{let ht=Q+1.6,pt=Q+2.4+q.r*2.2;ht<ft[J]&&(ft[J]=ht),pt>Dt[J]&&(Dt[J]=pt)})}let P=new Float32Array(Z),C=new Float32Array(Z);for(let q=0;q<ct;q++)for(let Q=0;Q<D;Q++){let J=q*D+Q,ht=rt[J];Q>0&&rt[J-1]>ht&&(ht=rt[J-1]),Q<D-1&&rt[J+1]>ht&&(ht=rt[J+1]),P[J]=ht}for(let q=0;q<ct;q++)for(let Q=0;Q<D;Q++){let J=q*D+Q,ht=P[J];q>0&&P[J-D]>ht&&(ht=P[J-D]),q<ct-1&&P[J+D]>ht&&(ht=P[J+D]),C[J]=ht}let z=null;if(st.clock){let q=st.clock.z;z={c:st.clock.c,r:5.4,z0:q+24.5,top:q+30.6,body:st.clock.p,zb:q+24.5}}return l={solid(q,Q,J,ht,pt){if(u&&u.open.some(Et=>h(q,Q,Et)))return!1;let Tt=Math.floor(q-N),Ct=Math.floor(Q-F);if(Tt<0||Ct<0||Tt>=D||Ct>=ct)return!1;if(z&&b0(q,Q,z.body))return J<z.zb?!0:Math.hypot(q-z.c[0],Q-z.c[1])<z.r&&J<z.top;let dt=Ct*D+Tt;return J<(ht?C[dt]:rt[dt])||!pt&&J>ft[dt]&&J<Dt[dt]}},l}function p(N,F,V,G){let D=f(),ct=Math.hypot(F[0]-N[0],F[1]-N[1],F[2]-N[2]),Z=Math.max(2,Math.ceil(ct/(G||.5)));for(let rt=1;rt<Z;rt++){let ft=rt/Z;if(ct*(1-ft)<(V||.3))break;let Dt=N[0]+(F[0]-N[0])*ft,mt=N[1]+(F[1]-N[1])*ft,wt=N[2]+(F[2]-N[2])*ft;if(wt<d(Dt,mt)+.1||D.solid(Dt,mt,wt,!1,ct*ft<4))return!1}return!0}let y=[-.5,-.25,0,.25,.5],g=[-.6,-.3,0,.3,.6];function m(N,F,V,G,D){let ct=f(),Z=F[0]-N[0],rt=F[1]-N[1],ft=F[2]-N[2],Dt=Math.hypot(Z,rt,ft)||1;Z/=Dt,rt/=Dt,ft/=Dt;let mt=Math.hypot(Z,rt)||1,wt=rt/mt,zt=-Z/mt,st=zt*ft,P=-wt*ft,C=wt*rt-zt*Z;C<0&&(st=-st,P=-P,C=-C);let z=Math.tan(V*Math.PI/360),q=z*G,Q=0,J=0;for(let ht of y)for(let pt of g){let Tt=Z+wt*ht*q+st*pt*z,Ct=rt+zt*ht*q+P*pt*z,dt=ft+C*pt*z,Et=Math.hypot(Tt,Ct,dt);Tt/=Et,Ct/=Et,dt/=Et;let Ht=1.5-Math.abs(ht)-Math.abs(pt)*.5;J+=Ht;for(let Pt=.6;Pt<D;Pt+=.5){let It=N[0]+Tt*Pt,Ut=N[1]+Ct*Pt,et=N[2]+dt*Pt;if(ct.solid(It,Ut,et,!0,!0)||Pt<2.5&&et<d(It,Ut)+.2){Q+=Ht*(1-.5*Pt/D);break}}}return Q/J}let M=()=>r.clientWidth/Math.max(1,r.clientHeight)||1.6;function _(N,F,V,G,D,ct){let Z=Math.hypot(F[0]-N[0],F[1]-N[1])||1,rt=Math.hypot(V-N[0],G-N[1])||1,ft=ct*Math.PI/360,Dt=Math.atan(Math.tan(ft)*M()),mt=Math.atan2(F[1]-N[1],F[0]-N[0]),wt=Math.atan2(G-N[1],V-N[0]),zt=wt-mt;for(;zt>Math.PI;)zt-=2*Math.PI;for(;zt<-Math.PI;)zt+=2*Math.PI;let st=Dt*.65,P=Math.abs(zt)>st?wt-Math.sign(zt)*st:mt,C=N[0]+Math.cos(P)*Z,z=N[1]+Math.sin(P)*Z,q=Math.atan2(F[2]-N[2],Z),Q=Math.atan2(D+.1-N[2],rt),J=Math.atan2(D+1.9-N[2],rt),ht=Q+ft*.78,pt=J-ft*.85;return q=pt<=ht?Math.max(pt,Math.min(ht,q)):(Q+J)/2,[C,z,N[2]+Math.tan(q)*Z]}function v(N,F,V){let G=f(),D=Math.hypot(F[0]-N[0],F[1]-N[1],F[2]-N[2])||1,ct=D;for(let rt=.5;rt<=D+1e-6;rt+=.25){let ft=rt/D,Dt=N[0]+(F[0]-N[0])*ft,mt=N[1]+(F[1]-N[1])*ft,wt=N[2]+(F[2]-N[2])*ft;if(wt<d(Dt,mt)+.5||G.solid(Dt,mt,wt,!1,!0)){ct=Math.max(V,rt-.5);break}}let Z=ct/D;return{c:[N[0]+(F[0]-N[0])*Z,N[1]+(F[1]-N[1])*Z,N[2]+(F[2]-N[2])*Z],r:ct,L:D}}let x=null,b=(N,F)=>{F=Math.max(0,Math.min(N.len,F));let V=0,G=N.cum.length-1;for(;G-V>1;){let mt=V+G>>1;N.cum[mt]<=F?V=mt:G=mt}let D=N.P[V],ct=N.P[G],Z=N.cum[G]-N.cum[V]||1,rt=(F-N.cum[V])/Z,ft=ct[3],Dt=ft==="jump"?D[2]+(ct[2]-D[2])*rt+3.2*rt*(1-rt):ft==="drop"?D[2]+(ct[2]-D[2])*rt*rt:D[2]+(ct[2]-D[2])*rt;return[D[0]+(ct[0]-D[0])*rt,D[1]+(ct[1]-D[1])*rt,Dt,ft==="in"?rt:-1,V,ft||null]};function E(N,F){let V=b(N,F-5),G=b(N,F+7),D=G[0]-V[0],ct=G[1]-V[1],Z=Math.hypot(D,ct);if(Z>1.2)return[D/Z,ct/Z];let rt=b(N,F)[4];for(let ft=Math.min(N.F.length-1,rt+1);ft>=0;ft--)if(N.F[ft])return N.F[ft];return[-1,0]}function A(N){bt();let F=N.pts.map(st=>[st[0],st[1],st[2]!=null?st[2]:o(st[0],st[1]),st[3]||null]),V=[],G=[0],D=N.speed||4.6,ct=null;for(let st=0;st<F.length;st++){if(st){let P=F[st-1],C=F[st],z=Math.hypot(C[0]-P[0],C[1]-P[1]),q=Math.abs(C[2]-P[2]),Q=C[3]==="rope"?.5:C[3]==="jump"||C[3]==="drop"?.9:C[3]==="clb"?2:1.7;G.push(G[st-1]+(C[3]==="in"?D*(N.inT||1.8):Math.hypot(z*(C[3]==="bal"?1.35:1),q*Q))),z>.3&&C[3]!=="in"&&(ct=[(C[0]-P[0])/z,(C[1]-P[1])/z])}V.push(F[st][4]||ct)}for(let st=0;st<F.length;st++)N.pts[st][4]&&(V[st]=N.pts[st][4]);let Z={P:F,cum:G,len:G[G.length-1],F:V},rt=st=>{let P=0,C=1e9;for(let z=1;z<F.length;z++){if(F[z][3]==="in")continue;let q=F[z-1],Q=F[z],J=Math.max(1,Math.ceil((G[z]-G[z-1])/.5));for(let ht=0;ht<=J;ht++){let pt=ht/J,Tt=q[0]+(Q[0]-q[0])*pt,Ct=q[1]+(Q[1]-q[1])*pt,dt=q[2]+(Q[2]-q[2])*pt,Et=Math.hypot(Tt-st[0],Ct-st[1],st[2]!=null?(dt-st[2])*1.5:0);Et<C&&(C=Et,P=G[z-1]+(G[z]-G[z-1])*pt)}}return P},ft=(N.stops||[]).map((st,P)=>({i:P,d:st.d!=null?st.d:rt(st.at),hold:st.hold!=null?st.hold:3.4,look:st.look||null,cam:st.cam||null})).sort((st,P)=>st.d-P.d),Dt=[],mt=0,wt=0;for(let st of ft){if(st.d>wt+.01){let P=mt+(st.d-wt)/D;Dt.push({k:"w",t0:mt,t1:P,d0:wt,d1:st.d}),mt=P,wt=st.d}Dt.push({k:"h",t0:mt,t1:mt+st.hold,d:wt,s:st}),mt+=st.hold}if(Z.len>wt+.01){let st=mt+(Z.len-wt)/D;Dt.push({k:"w",t0:mt,t1:st,d0:wt,d1:Z.len}),mt=st}Dt.push({k:"h",t0:mt,t1:mt+1,d:Z.len,s:null}),mt+=1,x={ws:Object.assign({},S,N.ws||{}),rr:Z,T:Dt,dur:mt,t:0,on:!1,free:!1,rate:Math.max(1,Math.min(1.5,D/4.6)),cb:N.cb||null,cam:Object.assign({fov:50},N.cam||{}),cp:null,ap:null,hs:{}};let zt=st=>{for(let C of Dt)if(C.k==="w"&&st>=C.d0-1e-6&&st<=C.d1+1e-6)return C.t0+(st-C.d0)/(C.d1-C.d0||1)*(C.t1-C.t0);let P=Dt.find(C=>C.k==="h"&&Math.abs(C.d-st)<.01);return P?P.t0:null};for(let st of tt){let P=1e9,C=0;for(let z=1;z<F.length;z++){if(F[z][3]==="in")continue;let q=F[z-1],Q=F[z],J=Math.max(1,Math.ceil((G[z]-G[z-1])/.25));for(let ht=0;ht<=J;ht++){let pt=ht/J,Tt=q[0]+(Q[0]-q[0])*pt,Ct=q[1]+(Q[1]-q[1])*pt,dt=q[2]+(Q[2]-q[2])*pt+1,Et=Math.hypot(Tt-st.at[0],Ct-st.at[1],dt-st.at[2]);Et<P&&(P=Et,C=G[z-1]+(G[z]-G[z-1])*pt)}}st.tp=P<1.5?zt(C):null}return R(),s.enabled=!1,n.near=.25,n.far=3200,n.updateProjectionMatrix(),{dur:mt,len:Z.len,cum:G.slice(),T:Dt.map(st=>({k:st.k,t0:st.t0,t1:st.t1,i:st.s?st.s.i:-1,d:st.k==="h"?st.d:st.d0}))}}function w(N){let F=x.T,V=x.rr,G=F.findIndex(st=>N<st.t1);G<0&&(G=F.length-1);let D=F[G],ct=st=>{let P=E(V,st);return Math.atan2(P[1],P[0])};if(D.k==="w"){let st=Math.max(0,Math.min(1,(N-D.t0)/(D.t1-D.t0||1))),P=D.d0+(D.d1-D.d0)*st,C=b(V,P),z=ct(P),q=null,Q=0,J=null,ht=null,pt=null,Tt=F[G-1];if(Tt&&Tt.s){let Ht=v0(Math.min(1,(N-D.t0)/(Tt.s.cam&&Tt.s.cam.pos?1.5:.9)));if(J=Tt.s.cam,Q=1-Ht,ht=G-1,pt=b(V,Tt.d),Tt.s.look){let Pt=Tt.s.look;z=zh(Math.atan2(Pt[1]-C[1],Pt[0]-C[0]),z,Ht),q=Pt}}let Ct=b(V,P+.4),dt=Math.hypot(Ct[0]-C[0],Ct[1]-C[1]),Et=dt<.12?(Ct[2]-C[2])/.4*4.6:0;return{p:C,yaw:z,mv:1,up:Et,i:-1,k:G,d:P,lk:q,lw:Q,sc:J,hk:ht,hp:pt,cut:C[3],pose:C[5]}}let Z=b(V,D.d),rt=ct(Math.max(.5,Math.min(D.d,V.len-.5))),ft=null,Dt=0,mt=null;D.s&&(Dt=v0(Math.min(1,(N-D.t0)/(D.s.cam&&D.s.cam.pos?1.6:1.1))),mt=D.s.cam);let wt=F[G-1],zt=wt&&wt.k==="h"&&wt.s&&wt.s.look?{hk:G-1,hp:b(V,wt.d),lk:wt.s.look,sc:wt.s.cam}:null;if(D.s&&D.s.look){let st=D.s.look;rt=zh(rt,Math.atan2(st[1]-Z[1],st[0]-Z[0]),Dt),ft=st}return{p:Z,yaw:rt,mv:0,up:0,i:D.s?D.s.i:-1,k:G,d:D.d,lk:ft,lw:Dt,sc:mt,hk:G,hp:Z,cut:-1,ph:zt}}let S={back:6.4,up:3.1,side:.8,ahead:12};function R(){let N=x.rr,F=Math.max(2,Math.ceil(N.len)+1),V=[0,.55,-.55,1.1,-1.1],G=x.ws,D=(P,C,z,q)=>{let Q=Math.cos(q),J=Math.sin(q),ht=C*Q-z*J,pt=C*J+z*Q,Tt=-pt,Ct=ht;return[P[0]-ht*G.back+Tt*G.side,P[1]-pt*G.back+Ct*G.side,P[2]+G.up]},ct=Math.hypot(G.back,G.up,G.side),Z=[];for(let P=0;P<F;P++){let C=Math.min(N.len,P),z=b(N,C),[q,Q]=E(N,C),J=[z[0],z[1],z[2]+1.7];if(z[3]>=0){Z.push(null);continue}let ht=0,pt=-1e9;for(let Tt of V){let Ct=v(J,D(z,q,Q,Tt),1.6).r,dt=Math.min(Ct,ct)/ct-Math.abs(Tt)*.16;dt>pt+1e-6&&(pt=dt,ht=Tt)}Z.push(ht)}let rt=Z.map((P,C)=>{if(P!=null)return P;for(let z=1;z<F;z++){if(C-z>=0&&Z[C-z]!=null)return Z[C-z];if(C+z<F&&Z[C+z]!=null)return Z[C+z]}return 0}),ft=rt.map((P,C)=>{let z=[];for(let q=Math.max(0,C-5);q<=Math.min(F-1,C+5);q++)z.push(rt[q]);return z.sort((q,Q)=>q-Q),z[z.length>>1]}),Dt=ft.map((P,C)=>{let z=0,q=0;for(let Q=Math.max(0,C-4);Q<=Math.min(F-1,C+4);Q++){let J=Math.exp(-((Q-C)**2)/8);z+=ft[Q]*J,q+=J}return z/q}),mt=[];for(let P=0;P<F;P++){let C=Math.min(N.len,P),z=b(N,C),[q,Q]=E(N,C),J=[z[0],z[1],z[2]+1.7];if(z[3]>=0){mt.push(99);continue}mt.push(v(J,D(z,q,Q,Dt[P]),1.6).r)}let wt=Math.round(G.skip0||0),zt=mt.map((P,C)=>{let z=1/0;for(let q=Math.max(0,C-6);q<=Math.min(F-1,C+6);q++)q<wt&&C>=wt||(z=Math.min(z,mt[q]));return z}),st=zt.map((P,C)=>{let z=0,q=0;for(let Q=Math.max(0,C-3);Q<=Math.min(F-1,C+3);Q++){let J=Math.exp(-((Q-C)**2)/4.5);z+=zt[Q]*J,q+=J}return z/q});x.wp={n:F,R:st,DA:Dt,boom:D}}function I(N,F,V,G,D,ct){let Z=Math.hypot(F[0]-N[0],F[1]-N[1])||1,rt=Math.hypot(V-N[0],G-N[1])||1,ft=ct*Math.PI/360,Dt=Math.atan2(F[2]-N[2],Z),mt=Math.atan2(D+.6-N[2],rt),wt=Math.atan2(D+1.9-N[2],rt),zt=mt+ft*.8,st=wt-ft*.8;return Dt=st<=zt?Math.max(st,Math.min(zt,Dt)):(mt+wt)/2,[F[0],F[1],N[2]+Math.tan(Dt)*Z]}function U(N){let F=x.rr,V=x.wp,[G,D,ct]=b(F,N),[Z,rt]=E(F,N),ft=-rt,Dt=Z,mt=[G,D,ct+1.7],wt=Math.max(0,Math.min(V.n-1,N)),zt=Math.floor(wt),st=Math.min(V.n-1,zt+1),P=wt-zt,C=V.R[zt]+(V.R[st]-V.R[zt])*P,z=V.DA[zt]+(V.DA[st]-V.DA[zt])*P,q=V.boom([G,D,ct],Z,rt,z),Q=Math.hypot(q[0]-mt[0],q[1]-mt[1],q[2]-mt[2])||1,J=Math.min(1,C/Q),ht=[mt[0]+(q[0]-mt[0])*J,mt[1]+(q[1]-mt[1])*J,mt[2]+(q[2]-mt[2])*J],pt=b(F,N+3),Tt=pt[2]-ct>1.5&&Math.hypot(pt[0]-G,pt[1]-D)<1.2,Ct=I(ht,[G+Z*x.ws.ahead,D+rt*x.ws.ahead,ct+(Tt?6:x.ws.az!=null?x.ws.az:1.5)],G,D,ct,x.cam.fov);return{c:ht,a:Ct,fov:x.cam.fov}}let W={back:5.6,up:2.8,side:1,fov:50,al:40};function L(N,F,V,G){return N in x.hs?x.hs[N]:x.hs[N]=O(F,V,G)}function O(N,F,V){V=V||{};let[G,D,ct]=N,Z=Math.hypot(F[0]-G,F[1]-D)||1,rt=F[2]!=null?F[2]:ct+1.5,ft=[G,D,ct+1.7];if(V.pos)return{c:V.pos.slice(),a:(V.tgt||F).slice(),fov:V.fov||W.fov,vis:!0};let Dt=Math.atan2(F[1]-D,F[0]-G)+(V.da||0),mt=Object.assign({},W);for(let P of["back","up","side","fov","al"])V[P]!=null&&(mt[P]=V[P]);let wt=P=>{let C=Math.min(Z,mt.al);return _(P,[G+(F[0]-G)/Z*C,D+(F[1]-D)/Z*C,ct+1.4+(rt-ct-1.4)*C/Z],G,D,ct,mt.fov)},zt=null,st=1/0;for(let P of[0,.3,-.3,.6,-.6,.95,-.95]){let C=Dt+P,z=Math.cos(C),q=Math.sin(C),Q=-q,J=z,ht=v(ft,[G-z*mt.back+Q*mt.side,D-q*mt.back+J*mt.side,ct+mt.up],2),pt=ht.c,Tt=V.vis===!1||p(pt,[F[0],F[1],rt],Math.min(10,Z*.3),Z>80?1:.5),Ct=(ht.L-ht.r)/ht.L*.8+(Tt?0:.35)+Math.abs(P)*.12;Ct<st&&(st=Ct,zt={c:pt,a:wt(pt),fov:mt.fov,vis:Tt})}return zt}function H(N,F,V,G,D,ct){if(!F||V<=0)return N;if(V>=1)return F;let Z=[G,D,ct+1.7],rt=q=>{let Q=q[0]-Z[0],J=q[1]-Z[1],ht=q[2]-Z[2],pt=Math.hypot(Q,J,ht)||1;return[Math.atan2(J,Q),Math.asin(Math.max(-1,Math.min(1,ht/pt))),pt]},[ft,Dt,mt]=rt(N.c),[wt,zt,st]=rt(F.c),P=zh(ft,wt,V),C=Dt+(zt-Dt)*V,z=mt+(st-mt)*V;return{c:[Z[0]+Math.cos(P)*Math.cos(C)*z,Z[1]+Math.sin(P)*Math.cos(C)*z,Z[2]+Math.sin(C)*z],a:N.a.map((q,Q)=>q+(F.a[Q]-q)*V),fov:N.fov+(F.fov-N.fov)*V}}function k(N,F){let[V,G,D]=N.p;if(N.cut>=0){x.cp=null;return}let ct=N.ph&&L(N.ph.hk,N.ph.hp,N.ph.lk,N.ph.sc)||U(N.d);if(N.lk&&N.lw>.001&&N.hk!=null){let rt=L(N.hk,N.hp,N.lk,N.sc);rt&&(ct=H(ct,rt,N.lw,V,G,D))}if(!x.cp||F>.5)x.cp=ct.c.slice(),x.ap=ct.a.slice();else{let rt=D+1.7,ft=Math.hypot(ct.c[0]-V,ct.c[1]-G,ct.c[2]-rt),Dt=Math.hypot(x.cp[0]-V,x.cp[1]-G,x.cp[2]-rt),mt=1-Math.exp(-F*(ft<Dt-.3?9:5));for(let wt=0;wt<3;wt++)x.cp[wt]+=(ct.c[wt]-x.cp[wt])*mt,x.ap[wt]+=(ct.a[wt]-x.ap[wt])*(1-Math.exp(-F*5))}n.position.set(...T(...x.cp)),s.target.set(...T(...x.ap)),n.lookAt(s.target);let Z=Math.round(ct.fov*10)/10;n.fov!==Z&&(n.fov=Z,n.updateProjectionMatrix())}let tt=[],nt=()=>{for(let N of tt)N.obj.visible=!(x&&N.tp!=null&&x.t>=N.tp)};function it(N){if(!x)return j.forEach(ct=>ct.h.animate(N,ct.mv||0,0)),!1;x.on&&(x.t+=N,x.t>=x.dur&&(x.t=x.dur,x.on=!1));let F=w(x.t),[V,G,D]=F.p;return c.root.position.set(...T(V,G,D)),c.root.visible=F.cut<0,c.root.rotation.y=Math.atan2(Math.cos(F.yaw),Math.sin(F.yaw)),c.animate(x.on?N:1e-4,F.mv&&x.on?F.pose==="bal"?1:2:0,F.up||0,x.rate,F.pose&&F.pose!=="in"?F.pose:null,!x.on),c.setGhost(!0),j.forEach(ct=>ct.h.animate(N,ct.mv||0,0)),nt(),x.free||k(F,x.on?N:1),x.cb&&x.cb({t:x.t,dur:x.dur,i:F.i,k:F.k,d:F.d,on:x.on,x:V,y:G,z:D,yaw:F.yaw,cut:F.cut}),!x.free}function bt(){x&&(x=null,c.root.visible=!1,s.enabled=!0,nt(),n.near=2,n.far=6e3,n.updateProjectionMatrix())}let j=[];function Mt(N){K();for(let F of N||[]){let V=Oh(Object.assign({pack:!1},F.o||{})),G=F.at[2]!=null?F.at[2]:o(F.at[0],F.at[1]);V.root.position.set(...T(F.at[0],F.at[1],G)),V.root.rotation.y=F.face!=null?F.face:Math.atan2(F.look[0]-F.at[0],F.look[1]-F.at[1]),V.setGhost(!1),e.add(V.root),j.push({h:V,f:F})}}function vt(N,F,V,G){let D=j[N];D&&(D.h.root.position.set(...T(F[0],F[1],F[2]!=null?F[2]:o(F[0],F[1]))),V!=null&&(D.h.root.rotation.y=V),D.mv=G||0)}function K(){for(let N of j)e.remove(N.h.root),N.h.root.traverse(F=>{F.geometry&&F.geometry.dispose()});j=[]}let $=N=>Math.round(N*50);return{hero:c,step:it,script:A,scriptStop:bt,scripting:()=>!!x,sig:()=>{let N=c.root.visible?$(c.root.position.x)+","+$(c.root.position.y)+","+$(c.root.position.z)+","+$(c.root.rotation.y):"-";for(let F of j)N+="|"+$(F.h.root.position.x)+","+$(F.h.root.position.y)+","+$(F.h.root.position.z)+","+$(F.h.root.rotation.y)+(F.h.root.visible?"":"h");return N},moving:()=>!!(x&&x.on),scriptSeek:N=>{x&&(x.t=Math.max(0,Math.min(x.dur,N)),x.cp=null)},scriptPlay:N=>{x&&(N&&x.t>=x.dur-.01&&(x.t=0),x.on=N)},scriptAt:N=>{if(!x)return null;let F=x.rr,V=b(F,N),G=E(F,N);return{p:V,yaw:Math.atan2(G[1],G[0]),len:F.len,act:V[3]||null}},scriptFree:N=>{if(x&&(x.free=N,s.enabled=N,N)){let F=x.rr&&b(x.rr,w(x.t).d);F&&s.target.set(...T(F[0],F[1],F[2]+1.2))}},figures:{set:Mt,clear:K,move:vt},pickups:N=>{tt=(N||[]).map(F=>Object.assign({tp:null},F))},occ:()=>f(),cut:N=>{u=N||null}}}var At=28.25,cn=28,ln=30.45,qt=24,Yi={F:At,Z0:qt,CUT:ln,foot:[[356,186,388,218],[388,196,392,208]],low:[[356.25,203.8,372.25,218],[358.35,199.15,364.2,204.1]],holes:[[391.4,199.6,27.9,392.6,204.4,30.6],[387.4,208.7,27.9,388.6,209.8,30.6],[387.4,187.4,29.15,388.6,190.8,30.55],[356.3,203.85,18,372.2,217.95,28.9],[358.4,199.2,18,364.2,204,28.9]]};function w0(i){let t={},e=x=>t[x]||(t[x]=new $n),n=(x,b,E,A,w,S,R,I=1)=>{A-b<.005||w-E<.005||R-S<.005||e(x).box((b+A)/2,(E+w)/2,S,R,A-b,w-E,0,I)},s=(x,b)=>{let E=e(x);E.col=b,E.col2=b},o=(x,b,E,A,w,S,R,I,U=[])=>{let W=(O,H,k,tt)=>b==="x"?n(x,O,E,H,A,k,tt):n(x,E,O,A,H,k,tt),L=w;for(let[O,H,k,tt]of U.slice().sort((nt,it)=>nt[0]-it[0]))W(L,O,R,I),W(O,H,R,Math.max(R,k)),W(O,H,Math.min(I,tt),I),L=H;W(L,S,R,I)},r=(x,b,E,A,w,S,R=12)=>e(x).cyl(b,E,A,w,S,R,!0),c=(x,b,E,A,w,S,R="red")=>{n(R,x-E/2,b-A/2,x+E/2,b+A/2,S+w-.05,S+w);for(let I of[-1,1])for(let U of[-1,1])n("wood",x+I*(E/2-.09)-.035,b+U*(A/2-.09)-.035,x+I*(E/2-.09)+.035,b+U*(A/2-.09)+.035,S,S+w-.05)},a=(x,b,E)=>{n("wood",x-.17,b-.17,x+.17,b+.17,E+.38,E+.45),n("wood",x-.12,b-.12,x+.12,b+.12,E,E+.38)},l=(x,b,E=At,A=4)=>{c(x,b,.9,.9,.78,E);let w=[[.75,0],[-.75,0],[0,.75],[0,-.75]];for(let S=0;S<A;S++)a(x+w[S][0],b+w[S][1],E);r("iron",x+.12,b-.1,E+.78,E+.92,.07,8)},u=(x,b,E,A=.8,w=A)=>n("wood",x-A/2,b-A/2,x+A/2,b+A/2,E,E+w,.8),h=(x,b,E,A=.24,w=.34)=>n("lampG",x-A/2,b-A/2,x+A/2,b+A/2,E,E+w);n("plank",372.25,186.25,387.75,217.75,cn,At,.5),n("plank",387.75,196.25,391.75,207.75,cn,At,.5),n("paving",356.25,186.25,372,199.15,cn,At,.6),n("plank",364.2,199.15,372,203.8,cn,At,.5),n("paving",360.7,201.05,364.2,203.8,cn,At,.6),n("paving",356.25,199.15,358.35,203.8,cn,At,.6),s("wallBody",[.94,.91,.86]),o("wallBody","x",186,186.25,356,388,cn,ln),o("wallBody","y",387.75,388,186.25,196,cn,ln,[[187.4,190.8,29.15,30.55]]),o("wallBody","x",196,196.25,388,392,cn,ln),o("wallBody","y",391.75,392,196.25,207.75,cn,ln,[[199.6,204.4,cn,30.6]]),o("wallBody","x",207.75,208,388,392,cn,ln),o("wallBody","y",387.75,388,208,218,cn,ln,[[208.7,209.8,cn,30.6]]),o("wallBody","x",217.75,218,372.25,388,cn,ln),o("wallBody","x",217.75,218,356,372.25,At,ln),o("wallBody","y",356,356.25,186,218,cn,ln),o("wallBody","y",372,372.25,186.25,217.75,At,ln,[[191.4,192.6,At,30.5],[202.2,203.3,At,30.5]]),n("wallBody",372,186.25,372.25,203.8,cn,At),s("wallBody",[1,1,1]),n("wood",387.55,187.3,388,190.9,29.05,29.15),n("stone",391.6,199.6,392.15,204.4,cn,At+.04,.6),c(390.2,206.55,.8,.8,.76,At),a(389.45,206.55,At),a(390.95,206.55,At),n("wood",388.4,196.35,391.6,196.85,At,At+.45),n("wood",374.5,194.6,375.2,202.8,At,At+1,.8),n("red",374.4,194.5,375.3,202.9,At+1,At+1.07),n("wood",372.85,194.6,374.5,195.3,At,At+1,.8),n("red",372.85,194.5,374.5,195.4,At+1,At+1.07);for(let x of[196,198.7,201.4])h(374.85,x,At+1.07);for(let x of[194,203.4])r("wood",375.7,x,At,At+1.75,.05,6),h(375.7,x,At+1.75,.3,.42);n("wood",372.25,194.8,372.55,201.6,At,At+2.4,.8);for(let x of[At+.62,At+1.22,At+1.82]){n("wood",372.25,194.8,372.85,201.6,x,x+.04);for(let b=195.1;b<201.4;b+=.55)r((b*7|0)%3?"red":"iron",372.6,b,x+.04,x+.36,.13,8)}o("wallBody","x",191.4,191.65,380.6,387.75,At,ln,[[382,383.1,At,30.5]]),o("wallBody","y",380.6,380.85,186.25,191.4,At,ln),r("wood",384.6,188.9,At,At+.72,.12,8),r("red",384.6,188.9,At+.72,At+.77,.62,20);for(let x of[.4,1.97,3.54,5.11])r("wood",384.6+Math.cos(x)*.95,188.9+Math.sin(x)*.95,At,At+.45,.2,10);n("brassG",384.25,188.62,384.47,188.78,At+.77,At+.88);for(let x of[378.6,381.8,385])for(let b of[199,202.4,205.8])l(x,b);l(378.6,193.6),l(385,193.6),l(377,188.8),l(377,191.6,At,3),l(378.6,211.2),l(381.8,211.2),l(378.6,214.6,At,3),s("brick",[.9,.82,.78]),n("brick",383.4,216.75,385.6,217.75,At,At+.86,.7),s("brick",[1,1,1]),r("iron",383.9,217.25,At+.86,At+1.14,.2,10),r("iron",384.7,217.25,At+.86,At+1.1,.17,10),r("iron",385.3,217.45,At+.86,ln-.05,.08,8),r("wood",386.6,217.2,At,At+.8,.36,12),n("stone",388,208,389.5,210.2,27.6,At,.6),n("stone",388,210.2,389.5,210.6,27.6,At+.3,.6),n("stone",388,210.6,389.5,211,27.6,At+.6,.6),n("plank",389.5,208,391.85,211,27.6,At+.6,.5),n("plank",388,211,391.85,216.6,27.6,At+.6,.5);let d=At+.6;for(let x=388.1;x<=391.8;x+=.92)n("wood",x-.04,216.5,x+.04,216.58,d,d+1);n("wood",388,216.47,391.85,216.62,d+.94,d+1.02),n("wood",388,216.5,391.85,216.58,d+.5,d+.55);for(let x of[208.1,209.1,210.1])n("wood",389.46,x-.04,389.54,x+.04,d,d+1);n("wood",389.43,208,389.57,210.95,d+.94,d+1.02);for(let x of[389.1,390.9])for(let b of[212.2,214.85])c(x,b,.7,.7,.74,d),a(x,b-.6,d),a(x,b+.6,d);r("hedge",391.45,209,d,d+.9,.32,10),r("red",391.45,209,d,d+.4,.3,10),s("brick",[.9,.82,.78]),n("brick",357,186.25,361,187.6,At,At+.9,.7),s("brick",[1,1,1]),r("iron",358,186.95,At+.9,At+1.2,.36,12),r("iron",359.9,186.95,At+.9,At+1.15,.3,12),n("wood",362.6,191.6,365.4,192.6,At,At+.86,.8),r("wood",369.9,187.2,At,At+.9,.45,12),r("wood",371,187.2,At,At+.9,.45,12),u(358,197.6,At),u(358.9,197.8,At,.7),u(358.4,197.7,At+.8,.6),u(370.8,196.9,At),u(370.8,197.8,At,.7),o("wallBody","x",199.15,199.4,356.25,372,At,ln),o("wallBody","y",367,367.25,199.4,203.8,At,ln,[[199.45,200.75,At,30.45]]),o("wallBody","x",203.8,204.05,367.25,372,At,ln);{let x=10*Math.PI/180,b=367.25,E=199.45;e("wood").box(b+Math.cos(x)*.65+Math.sin(x)*.16,E+Math.sin(x)*.65-Math.cos(x)*.16+.32,At,At+2.2,1.3,.3,x,.8);for(let A of[At+.5,At+1.1,At+1.7])r("red",b+Math.cos(x)*.4+.02,E+Math.sin(x)*.4+.32,A,A+.3,.1,8)}u(371.4,199.95,At),u(370.55,199.95,At),u(371.4,200.8,At),u(371,200.4,At+.8,.7),u(367.8,203.3,At,.7,.55),u(368.55,203.35,At,.6,.45),r("cloth",371.5,203.3,At,At+.7,.3,8);let f=26,p=13,y=364.2,g=360.45;for(let x=0;x<p;x++){let b=y-(x+1)*(y-g)/p,E=y-x*(y-g)/p;n("wood",b,199.4,E,200.8,25.7,At-(x+1)*(At-f)/p,.6)}n("wood",358.6,199.4,360.45,201.05,25.7,f,.6);let m=11,M=201.05,_=204.6;for(let x=0;x<m;x++){let b=M+x*(_-M)/m,E=M+(x+1)*(_-M)/m;n("wood",358.6,b,360.45,E,qt-.2,f-(x+1)*(f-qt)/m,.6)}s("stone",[.86,.84,.8]),o("stone","x",199.15,199.4,358.35,364.2,25.7,At),o("stone","y",358.35,358.6,199.15,203.8,qt-.2,ln),o("stone","x",200.8,201.05,360.45,367,25.7,At+.9),o("stone","y",360.45,360.7,201.05,203.8,qt-.2,At+.9),s("stone",[1,1,1]);for(let x of[199.6,200.6])n("wood",364.25,x-.03,364.45,x+.03,At,At+1);n("paving",356.25,204.05,372,217.75,qt-.2,qt,.6),s("stone",[.86,.84,.8]),o("stone","x",203.8,204.05,356,372.25,qt-.2,At,[[358.6,360.45,qt-.2,At+.1]]),o("stone","y",372,372.25,203.8,218,qt-.2,At),o("stone","x",217.75,218,356,372.25,qt-.2,At,[[370.8,372,qt,26.6]]),o("stone","y",356,356.25,203.8,218,qt-.2,At),o("stone","y",367.6,367.85,204.05,209.65,qt,At),o("stone","x",209.4,209.65,367.85,372,qt,At,[[369.4,370.6,qt,26.3]]),o("stone","x",211.8,212.05,356.25,361.6,qt,At,[[357,358.1,qt,26.3]]),o("stone","x",211.8,212.05,366.6,372,qt,At,[[367.2,368.3,qt,26.3]]),o("stone","y",361.35,361.6,212.05,217.75,qt,At),o("stone","y",366.6,366.85,212.05,217.75,qt,At),s("stone",[1,1,1]),n("paving",370.8,218,372.9,220.45,qt-.2,qt,.6),n("stone",370.55,218,370.8,220.45,qt,26.9),n("stone",372.9,218,373.15,220.45,qt,26.9),n("stone",370.55,218,373.15,220.45,26.6,26.9),c(358.4,208.9,1.6,.7,.78,qt),h(357.8,208.9,qt+.78,.2,.28),n("coping",358.6,208.7,359,209,qt+.78,qt+.8),c(364.7,206.2,3.6,1,.78,qt,"wood"),n("wood",362.9,205.05,366.5,205.4,qt,qt+.45),n("wood",362.9,207,366.5,207.35,qt,qt+.45);for(let[x,b]of[[363.5,206],[364.4,206.4],[365.6,206.1]])n("coping",x-.25,b-.18,x+.25,b+.18,qt+.78,qt+.8);h(363.1,206.2,qt+.78,.2,.3),h(366.3,206.2,qt+.78,.2,.3),n("wood",367.42,204.6,367.6,208.7,qt+.9,qt+2.5);for(let x=0;x<9;x++){let b=204.9+x%3*1.3+x*37%5*.06,E=qt+1.1+Math.floor(x/3)*.45;n("coping",367.37,b,367.42,b+.34,E,E+.3)}c(369.9,205.9,1.6,.8,.8,qt,"wood"),h(369.3,205.8,qt+.8,.18,.3),n("wood",369.55,204.4,370.25,204.75,qt,qt+1),n("wood",371.55,204.4,372,208.2,qt,qt+2.2,.8),c(364.1,213.3,1.4,.7,.78,qt,"wood"),h(364.6,213.3,qt+.78,.18,.28),n("wood",362.6,217.3,365.6,217.75,qt,qt+2,.8);for(let x of[213.1,216.6]){n("wood",356.35,x-.45,358.35,x+.45,qt+.35,qt+.5),n("wood",356.35,x-.45,358.35,x+.45,qt+1.5,qt+1.62);for(let b of[356.4,358.3])for(let E of[-1,1])n("wood",b-.04,x+E*.42-.04,b+.04,x+E*.42+.04,qt,qt+1.9);n("cloth",356.4,x-.4,358.3,x+.4,qt+.5,qt+.6)}u(360.4,216.9,qt,.9,.7),u(368,216.9,qt),u(368.85,216.9,qt),u(368.4,216.9,qt+.8,.7),u(371.5,213,qt,.9),r("wood",369.8,216.95,qt,qt+.9,.4,12),r("wood",370.7,216.95,qt,qt+.9,.4,12),n("wood",367,212.6,367.12,215.4,qt,qt+1.6);for(let x=212.9;x<215.3;x+=.4)n("iron",367.14,x-.02,367.2,x+.02,qt+.1,qt+1.75);for(let[x,b]of[[356.35,207.5],[361.55,211],[366.5,211],[356.35,210.8],[371.9,210.6]])h(x,b,qt+2.1,.18,.26);let v=new _e;v.name="teaInside",v.visible=!1;for(let x in t){if(!t[x].count||!i[x])continue;let b=new Gt(t[x].geometry(),i[x]);b.castShadow=!0,b.receiveShadow=!0,b.userData.key="tea-"+x,v.add(b)}return v}var hn=27.8,Ze=31.47,Gs=34.77,Yr=38.07,mn=209.27,Gi=419.4,Ys=421.6,Rn=208.5,Ho=211.5,ze=39.45,Ti=420.98,Zi=209.12,w_={at:[420.25,210.75,ze],street:hn,deck:[Gi,Rn,Ys,Ho,ze],levels:[hn,Ze,Gs,ze],route:[[424.6,206.6,hn],[422.7,208.3,hn],[422.7,208.3,28.85],[421.95,209.9,29.85],[421.95,210.4,30.45],[421.2,208.75,32.5],[420.95,208.85,Ze+.02],[Ti,Zi-.25,Ze+.4],[Ti,Zi-.25,Gs+.1],[420.45,208.75,Gs+.2],[Ti,Zi-.25,Gs+.4],[Ti,Zi-.25,Yr-.05],[421.35,209.6,ze+.02],[420.6,210.3,ze+.02]]},qr=[418.5,419,419.5,420,420.5,421,421.5,422],Xr=[39.55,39.15,38.8,38.6,38.35,38.15,37.95,37.75],E0=i=>{for(let t=0;t<qr.length-1;t++)if(i<=qr[t+1]){let e=Math.max(0,(i-qr[t])/(qr[t+1]-qr[t]));return Xr[t]+(Xr[t+1]-Xr[t])*e}return Xr[Xr.length-1]};function T0(i){let t=()=>{let V={};return V.B=G=>V[G]||(V[G]=new $n),V},e=t(),n=t(),s=(V,G,D,ct,Z,rt,ft,Dt,mt=1)=>V.B(G).box((D+Z)/2,(ct+rt)/2,ft,Dt,Z-D,rt-ct,0,mt),o=(V,G,D,ct,Z)=>V.B(G).beam(T(...D),T(...ct),Z,Z),r=(V,G,D,ct,Z,rt,ft)=>{let Dt=V.B(G);Dt.quad(D,ct,Z,rt,[0,0],[1,0],[1,1],[0,1],ft),Dt.quad(D,ct,Z,rt,[0,0],[1,0],[1,1],[0,1],ft.map(mt=>-mt))},c=(V,G,D)=>{let ct=V.B(G);ct.col=D,ct.col2=D},a=(V,G,D,ct,Z,rt)=>{let ft=mn-rt,Dt=[0,1,-(ct-Z)/rt],mt=V.B("tile");mt.quad(T(G,mn,ct),T(D,mn,ct),T(D,ft,Z),T(G,ft,Z),[0,0],[D-G,0],[D-G,rt],[0,rt],Dt),mt.quad(T(G,mn,ct-.12),T(G,ft,Z-.12),T(D,ft,Z-.12),T(D,mn,ct-.12),[0,0],[rt,0],[rt,1],[0,1],[0,-1,0]);for(let wt of[G,D])mt.quad(T(wt,mn,ct-.12),T(wt,mn,ct),T(wt,ft,Z),T(wt,ft,Z-.12),[0,0],[.1,0],[.1,rt],[0,rt],[wt===G?-1:1,0,0]);V.B("ridge").box((G+D)/2,mn-.1,ct-.05,ct+.16,D-G,.24,0,1),V.B("wood").box((G+D)/2,ft+.04,Z-.26,Z-.04,D-G+.05,.09,0,1);for(let wt of[G+.25,(G+D)/2,D-.25])o(V,"wood",[wt,mn,ct-.85],[wt,ft+.2,Z-.2],.09)},l=419.55,u=421.12,h=mn-.95;s(e,"plank",l,h,u,mn,Ze-.14,Ze+.02,.8),s(e,"wood",l,h-.02,u,h+.08,Ze-.3,Ze-.1);for(let V of[l+.15,u-.15])o(e,"wood",[V,mn,Ze-1.05],[V,h+.12,Ze-.16],.09);let d=Ze+1;for(let V of[l+.04,(l+u)/2,u-.04])s(e,"wood",V-.05,h+.01,V+.05,h+.11,Ze,d);for(let V of[h+.5])for(let G of[l+.04,u-.04])s(e,"wood",G-.05,V-.05,G+.05,V+.05,Ze,d);s(e,"wood",l,h,u,h+.12,d-.08,d+.02),s(e,"wood",l,h+.03,u,h+.09,Ze+.45,Ze+.52);for(let V of[l+.02,u-.02])s(e,"wood",V-.04,h,V+.04,mn,d-.08,d),s(e,"wood",V-.03,h,V+.03,mn,Ze+.45,Ze+.52);for(let V=l+.22;V<u-.15;V+=.2)s(e,"wood",V-.02,h+.04,V+.02,h+.08,Ze+.02,d-.08);s(e,"ridge",420,mn-.04,420.9,mn+.02,Ze+.02,Ze+2.25),a(e,419.45,420.72,Gs+.15,Gs-.35,.85);let f=421.3,p=423.25,y=209.65,g=211.95,m=30.65,M=30.1;for(let V of[y+.1,g-.1])s(e,"wood",p-.12,V-.05,p-.02,V+.05,hn-.05,M);o(e,"wood",[p-.07,y+.05,M-.02],[p-.07,g-.05,M-.02],.08),c(e,"cloth",[.42,.33,.2]),r(e,"cloth",T(f,y,m),T(f,g,m),T(p,g,M),T(p,y,M),[(m-M)/(p-f),0,1]);for(let V of[y,g])r(e,"cloth",T(f,V,m),T(p,V,M),T(p,V,M-.35),T(f+.6,V,m-.45),[0,1,0]);s(e,"plank",f+.5,y+.3,p-.25,g-.3,hn+.75,hn+.85,.8);for(let V of[y+.4,g-.4])s(e,"wood",f+.55,V-.04,f+.63,V+.04,hn-.05,hn+.75);for(let V of[y+.4,g-.4])s(e,"wood",p-.38,V-.04,p-.3,V+.04,hn-.05,hn+.75);s(e,"wood",f+.8,y+.5,f+1.2,y+.9,hn+.85,hn+1.1),s(e,"wood",f+.9,g-.95,f+1.35,g-.5,hn+.85,hn+1.05);let _=[Gi+.15,420.55,Ys-.15],v=[209.3,211.3],x=ze-.25;for(let V of _)for(let G of v)s(e,"wood",V-.08,G-.08,V+.08,G+.08,E0(V)-.12,x);for(let V of v)s(e,"wood",Gi+.05,V-.09,Ys-.05,V+.09,x-.2,x);for(let V of _)s(e,"wood",V-.07,Rn+.04,V+.07,Ho-.04,x,ze-.1);for(let V of[_[0],_[2]])o(e,"wood",[V,209.3,E0(V)+.35],[V,Rn+.12,x-.02],.07);s(e,"plank",Gi,Rn,Ys,Ho,ze-.1,ze,.8);let b=ze+.95,E=ze+.48,A=ze+.62,w=(V,G)=>o(e,"bamboo",[V,G,ze-.12],[V,G,b+.05],.075),S=(V,G)=>o(e,"bamboo",[V[0],V[1],b],[G[0],G[1],b],.07),R=(V,G)=>{S(V,G),o(e,"bamboo",[V[0],V[1],E],[G[0],G[1],E],.06)},I=[Gi+.05,Rn+.05],U=[Ys-.05,Rn+.05],W=[Ys-.05,Ho-.05],L=[Gi+.05,Ho-.05],O=[U[0],209.25],H=[U[0],210.3];for(let V of[I,U,W,L,O,H,[420.5,Rn+.05],[Gi+.05,210],[420.5,Ho-.05]])w(V[0],V[1]);s(e,"wood",Gi,Rn,Ys,Rn+.06,ze-.1,A,.8),S(I,U),R(U,O),R(H,W),R(W,L),R(L,I);let k=Gi+.05,tt=ze+1.7;for(let V of[208.75,211.25])o(e,"bamboo",[k,V,ze-.1],[k,V,tt+.1],.07);o(e,"bamboo",[k,208.6,tt],[k,211.4,tt],.06),c(e,"cloth",[.29,.33,.42]),r(e,"cloth",T(k+.03,209.05,tt-.03),T(k+.03,209.95,tt-.03),T(k+.03,209.95,tt-1),T(k+.03,209.05,tt-1),[1,0,0]);let[nt,it]=w_.at;s(e,"wood",nt-.38,it-.25,nt+.38,it+.25,ze,ze+.36),s(e,"wood",nt-.4,it-.27,nt+.4,it+.27,ze+.36,ze+.5);for(let V of[-.24,.24])s(e,"brassG",nt+V-.03,it-.275,nt+V+.03,it+.275,ze-.005,ze+.51);s(e,"brassG",nt+.39,it-.06,nt+.41,it+.06,ze+.22,ze+.38);let bt=(V,G,D,ct)=>{s(n,"wood",V-ct/2,G-ct/2,V+ct/2,G+ct/2,D,D+ct-.02);for(let Z of[-1,1])s(n,"plank",V-ct/2-.01,G+Z*(ct/2-.06),V+ct/2+.01,G+Z*(ct/2-.02),D+.08,D+ct-.1,.6)};bt(422.7,208.3,hn-.05,1.05),bt(422,209.95,hn-.05,1),bt(422,209.95,hn+.95,.95),c(n,"cloth",[.68,.17,.12]),r(n,"cloth",T(p+.02,y+.45,M-.02),T(p+.02,g-.45,M-.02),T(p+.02,g-.45,M-1.5),T(p+.02,y+.45,M-1.5),[1,0,0]),o(n,"bamboo",[p+.04,y+.35,M-.02],[p+.04,g-.35,M-.02],.05),n.B("copper").cyl(Ti,Zi,Ze+.02,Yr-.1,.12,10,!1),n.B("copper").box(Ti,Zi-.05,Yr-.12,Yr+.28,.4,.4,0,1);for(let V=Ze+1.2;V<Yr-.3;V+=1.4)s(n,"iron",Ti-.17,Zi+.02,Ti+.17,mn,V,V+.1);r(n,"cloth",T(419.9,Rn-.04,b-.03),T(421.05,Rn-.04,b-.03),T(421.05,Rn-.04,b-1.55),T(419.9,Rn-.04,b-1.55),[0,-1,0]),o(n,"bamboo",[419.8,Rn-.06,b],[421.15,Rn-.06,b],.05);let j=(V,G)=>{let D=new _e;D.name=G;for(let ct in V){if(ct==="B"||!V[ct].count||!i[ct])continue;let Z=new Gt(V[ct].geometry(),i[ct]);Z.castShadow=!0,Z.receiveShadow=!0,Z.userData.key=G+"-"+ct,D.add(Z)}return D},Mt=j(e,"chest"),vt=j(n,"chestFix");vt.visible=!1;let K=new re({color:"#f0c04a",metalness:.65,roughness:.3,emissive:"#a8740c",emissiveIntensity:.85}),$=new ye(.2,.2,.045,20);$.rotateX(Math.PI/2);let ut=[[422.7,208.3,29.45],[422,210.5,31.15],[421,208.85,32.2],[Ti,Zi-.32,33.3],[420.3,208.85,Gs+.75],[Ti,Zi-.32,37.2]].map(V=>{let G=new Gt($,K);return G.position.set(...T(...V)),G.userData.ph=(V[0]*1.7+V[2])%6.28,vt.add(G),G}),N=new Is(new rs({map:E_(),color:"#ffd77a",transparent:!0,depthWrite:!1,blending:Ns,opacity:.9}));N.position.set(...T(nt,it,ze+.4)),N.scale.setScalar(1.3),N.renderOrder=5,N.visible=!1;let F=new _e;return F.name="chestRoof",F.add(Mt,vt,N),{root:F,set(V){let G=+V||0;N.visible=G>=1,vt.visible=G>=2,N.userData.s=G>=2?1.9:1.3},tick(V){if(N.visible&&N.scale.setScalar((N.userData.s||1.3)*(.9+.12*Math.sin(V*3))),vt.visible)for(let G of ut)G.rotation.y=V*2.6+G.userData.ph}}}function E_(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);e.addColorStop(0,"rgba(255,240,190,1)"),e.addColorStop(.35,"rgba(255,214,120,0.55)"),e.addColorStop(1,"rgba(255,200,90,0)"),t.fillStyle=e,t.fillRect(0,0,64,64);let n=new Dn(i);return n.colorSpace=ke,n}var $s=Math.PI/180,wn=(i,t)=>{i.col=t,i.col2=t},Zs=(i,t,e,n,s,o)=>{i.quad(t,e,n,s,[0,0],[1,0],[1,1],[0,1],o),i.quad(t,e,n,s,[0,0],[1,0],[1,1],[0,1],o.map(r=>-r))},ge={c:[570.3,104.8],a:18,hw:11,hd:6.5,pm:1.5},Ai=[Math.cos(ge.a*$s),Math.sin(ge.a*$s)],A0=[-Ai[1],Ai[0]],Qn=(i,t)=>[ge.c[0]+Ai[0]*i+A0[0]*t,ge.c[1]+Ai[1]*i+A0[1]*t],R0=(90+ge.a+45)*$s,C0=[Math.cos(R0),Math.sin(R0)],Gr=Qn(0,ge.hd+ge.pm+3.3),kh=[Gr[0]+C0[0]*(120-Gr[1])/C0[1],120],je={door:[...Qn(0,ge.hd+ge.pm),35.62],turn1:Gr,turn2:kh,pole:{a:[462.4,120.4,53.32],b:[457.05,115.05,53.5]},beam:{a:[453,109.6,42.65],b:[445.4,109.6,42.65]},crane:[436.6,118.6,18],deck:{c:[436.6,117.3],z:42.6,L:3.2,D:3}};function D0(i){if(i._open5)return;i._open5=!0;let t=i.key.find(r=>r.id==="X1");t&&Object.assign(t,{p:[Qn(-ge.hw,-ge.hd),Qn(ge.hw,-ge.hd),Qn(ge.hw,ge.hd),Qn(-ge.hw,ge.hd)],rects:[[...ge.c,ge.hw*2,ge.hd*2,ge.a*$s]],platM:ge.pm,door5:{at:Qn(0,ge.hd+ge.pm),f:90+ge.a}});let e=34.62,n=(r,c,a,l,u,h,d,f)=>{let p=e+h*3.45,y=d?l-c:u-a,g=p+y*.27,m=[[c,a],[l,a],[l,u],[c,u]],M=d?[[(c+l)/2,a],[(c+l)/2,u]]:[[c,(a+u)/2],[l,(a+u)/2]];i.bld.push({id:r,b:"p5",t:"house",role:"front",st:h,st3:h,z:e,z0:e-.1,ze:p,top:g,p:m,e:f,corner:!1,pid:"E",use:"\u6C11\u5C45",prio:0,roof:{m:"ridge",pc:[{p:m,r:M}]}})};n("n5a",539,102,547.5,117.5,2,!0,["yard","party","street","yard"]),n("n5b",548.5,110,555,118,2,!1,["yard","yard","street","party"]),n("n5c",540.5,124.8,549.5,135.5,2,!1,["street","party","yard","yard"]),n("n5d",550,124.8,557.5,134.5,1,!0,["street","yard","yard","party"]),n("n5e",569.5,122.5,584,133.5,2,!1,["street","yard","yard","yard"]);let s=i.nsm;s.clock&&(s.clock.ladder=null,s.clock.rgap={c:[460.47,118.47],w:.8}),s.camp&&(s.camp.crane=je.crane.slice(),s.camp.guys=!1),i._chest5=[468.2,117.8],i._coins5=[[474.75,125,41],[474.65,121.75,43.6],[475.75,121.25,50.4]];let o=(i.anchors||[]).find(r=>r.id==="J1");o&&(o.at=Qn(0,ge.hd+ge.pm-.8),o.look=[490,360])}function P0(i,t,e,n,s,o,r,c){let a=t+c*r,l=[c*(s-o)/r,1,0];i.tile.quad(T(t,e,s),T(t,n,s),T(a,n,o),T(a,e,o),[0,0],[n-e,0],[n-e,r],[0,r],l),i.tile.quad(T(t,e,s-.12),T(a,e,o-.12),T(a,n,o-.12),T(t,n,s-.12),[0,0],[r,0],[r,1],[0,1],[0,-1,0]),i.ridge.box(t+c*.1,(e+n)/2,s-.05,s+.16,.24,n-e,0,1),i.wood.box(a-c*.04,(e+n)/2,o-.26,o-.04,.09,n-e+.05,0,1);for(let h of[e,n])i.tile.quad(T(t,h,s-.12),T(t,h,s),T(a,h,o),T(a,h,o-.12),[0,0],[.1,0],[.1,r],[0,r],[0,0,h===e?-1:1]);let u=Math.max(2,Math.round((n-e)/1.8));for(let h=0;h<=u;h++){let d=e+.25+(n-e-.5)*h/u;i.wood.beam(T(t,d,s-.85),T(a-c*.2,d,o-.2),.09,.09)}}function I0(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1]],o=Math.hypot(...s),r=[e[0]-t[0],e[1]-t[1]],c=Math.hypot(...r),a=[s[0]/o,s[1]/o],l=[r[0]/c,r[1]/c],u=Math.acos(Math.max(-1,Math.min(1,a[0]*l[0]+a[1]*l[1]))),h=n*Math.tan(u/2),d=[t[0]-a[0]*h,t[1]-a[1]*h],f=[t[0]+l[0]*h,t[1]+l[1]*h],p=[.25*d[0]+.5*t[0]+.25*f[0],.25*d[1]+.5*t[1]+.25*f[1]];return[d,p,f]}var el=(i,t,e,n,s,o=0)=>{i.wood.box(t,e,n,n+s,s,s,o,1),i.plank.box(t,e,n+s-.06,n+s+.01,s+.04,s+.04,o,1)};function L0(i,t,e,n,s,o,r){let c=L=>{for(let O in t)t[O]&&typeof t[O].bid=="number"&&(t[O].bid=L)};c(-1);let a=34.62,l=[576.6,118.8],u=[583.6,118.8];for(let L of[l,u])t.bamboo.cyl(L[0],L[1],a-.1,a+2.5,.06,6,!1),t.bamboo.beam(T(L[0],L[1]-.45,a+2.35),T(L[0],L[1]+.45,a+2.35),.05,.05);for(let L of[-.4,.4])t.iron.beam(T(l[0],l[1]+L,a+2.36),T(u[0],u[1]+L,a+2.36),.015,.015);let h=[[577.3,.75,1,[.3,.36,.48],-.4],[578.4,.6,.7,[.88,.85,.78],-.4],[579.3,1.7,1.25,[.8,.74,.62],.4],[581.4,.65,.8,[.62,.32,.24],-.4],[582.4,.55,.6,[.88,.85,.78],.4]];for(let[L,O,H,k,tt]of h)wn(t.cloth,k),Zs(t.cloth,T(L,l[1]+tt,a+2.34),T(L+O,l[1]+tt,a+2.34),T(L+O,l[1]+tt,a+2.34-H),T(L,l[1]+tt,a+2.34-H),[0,0,1]);wn(t.cloth,[1,1,1]);let[d,f]=Qn(0,ge.hd+ge.pm+7.5);t.cityStone.cyl(d,f,a-.2,a+.72,.82,14,!1),t.coping.cyl(d,f,a+.72,a+.84,.9,14,!1),t.ridge.cyl(d,f,a+.55,a+.57,.62,14,!0);for(let L of[-1,1])t.wood.box(d+L*Ai[0],f+L*Ai[1],a-.1,a+2,.14,.14,ge.a*$s,1);t.wood.beam(T(d-1.05*Ai[0],f-1.05*Ai[1],a+1.95),T(d+1.05*Ai[0],f+1.05*Ai[1],a+1.95),.12,.12),t.wood.cyl(d,f,a+1.55,a+1.85,.16,8,!0),t.iron.beam(T(d,f,a+1.55),T(d,f,a+.95),.02,.02),t.wood.cyl(d,f,a+.68,a+.95,.17,8,!0);{let k=Math.cos(-.1),tt=Math.sin(-.1),nt=(bt,j)=>[556.4+bt*k-j*tt,123.3+bt*tt+j*k],it=nt(0,0);t.plank.box(it[0],it[1],a+.6,a+.72,2.2,1.2,-.1,1);for(let bt of[-.6,.6]){let j=nt(0,bt);t.wood.box(j[0],j[1],a+.72,a+1,2.2,.06,-.1,1)}for(let bt of[-.7,.7]){let j=nt(.3,bt);T_(t,j,-.1,a+.42,.42)}for(let bt of[-.45,.45]){let j=nt(-1.1,bt),Mt=nt(-2.4,bt);t.wood.beam(T(j[0],j[1],a+.66),T(Mt[0],Mt[1],a+.3),.07,.07)}el(t,it[0]+.3,it[1],a+.72,.6,-.1)}for(let L of[-9.2,-7.2,6.4,8.4]){let[O,H]=Qn(L,ge.hd+ge.pm+.55);t.cityStone.cyl(O,H,a,a+.45,.3,8,!0),t.hedge.box(O,H,a+.45,a+.95,.52,.52,.4,1)}t.wood.box(575.5,121.9,a+.42,a+.5,2.2,.38,0,1);for(let L of[-.9,.9])t.wood.box(575.5+L,121.9,a,a+.42,.08,.32,0,1);for(let L=0;L<4;L++)t.wood.box(555.55,110.35+L*.95,a,a+1.05-L%2*.12,.9,.9,0,1);t.cityStone.box(585.7,119,a-.3,a+.75,.45,36,0,.8),t.coping.box(585.7,119,a+.75,a+.88,.6,36.2,0,.8);for(let[L,O]of[[549.6,118.45],[553.2,118.45],[544.3,124.25],[552.3,124.25]])t.cityStone.cyl(L,O,a-.05,a+.4,.26,8,!0),t.hedge.box(L,O,a+.4,a+.85,.45,.45,.3,1);{let H=a+3.25;t.wood.beam(T(555,117.55,H),T(555+.75,117.55,H),.06,.06),t.iron.beam(T(555+.7,117.55,H),T(555+.7,117.55,H-.35),.015,.015),t.lantern.col=[1,1,1],t.lantern.cyl(555+.7,117.55,H-.95,H-.35,.22,8,!0),t.wood.cyl(555+.7,117.55,H-.38,H-.32,.14,8,!0)}{let k=s(563.5,124.95);t.cityStone.box((557.5+569.5)/2,124.95,k-.3,k+2.2,569.5-557.5,.4,0,.8),t.coping.box((557.5+569.5)/2,124.95,k+2.2,k+2.36,569.5-557.5+.1,.56,0,.8),t.red.box(559.75,124.95-.22,k,k+1.95,1.3,.08,0,1),t.wood.box(559.75,124.95-.24,k+1.95,k+2.12,1.7,.12,0,1)}c(r);let p=474;P0(t,p,122.6,127.4,40.05,39.55,1.3,1);let y=121.75,g=p+.22,m=s(g+.3,y);t.copper.cyl(g,y,m+.25,47.3,.13,10,!1),t.copper.box(g,y,47.3,47.75,.42,.42,0,1),t.copper.box(g+.16,y,m,m+.3,.42,.3,0,1);for(let L=m+1.4;L<47.2;L+=1.4)t.iron.box(p+.1,y,L,L+.1,.24,.34,0,1);P0(t,p-.12,119.9,130.1,48.25,47.65,1.3,1),wn(t.cloth,[.68,.17,.12]);for(let L of[121.25,128.75])t.wood.beam(T(p+1.12,L-.6,52.5),T(p+1.12,L+.6,52.5),.07,.07),Zs(t.cloth,T(p+1.1,L-.47,52.48),T(p+1.1,L+.47,52.48),T(p+1.1,L+.47,48.45),T(p+1.1,L-.47,48.45),[1,0,0]),t.wood.box(p+1.1,L,48.35,48.47,.06,1,0,1);wn(t.cloth,[1,1,1]);let{a:M,b:_}=je.pole;t.wood.beam(T(...M),T(..._),.26,.26);for(let L=0;L<3;L++)t.cityStone.box(M[0]+.25-L*.2,M[1]+.25-L*.2,53.14+.14+L*.36,53.14+.5+L*.36,.62,.5,45*$s,.8);{let L=[M[0]+(_[0]-M[0])*.55,M[1]+(_[1]-M[1])*.55];t.wood.beam(T(L[0],L[1],53.3),T(460.75,118.75,50.6),.14,.14)}for(let L of[.42,.5]){let O=[M[0]+(_[0]-M[0])*L,M[1]+(_[1]-M[1])*L];t.bamboo.cyl(O[0],O[1],53.1,53.75,.3,8,!1)}t.iron.box(_[0],_[1],_[2]-.55,_[2]-.1,.22,.3,45*$s,1),t.bamboo.beam(T(_[0],_[1],_[2]-.4),T(_[0],_[1],42.95+.05),.045,.045),wn(t.cloth,[.68,.17,.12]),Zs(t.cloth,T(_[0]+.12,_[1]+.12,_[2]+.1),T(_[0]+.12,_[1]+.12,_[2]-.9),T(_[0]-.5,_[1]-.5,_[2]-.75),T(_[0]-.5,_[1]-.5,_[2]-.05),[.7,0,-.7]),wn(t.cloth,[1,1,1]),c(-1);let{a:x,b}=je.beam,E=x[1];t.wood.beam(T(...x),T(...b),.28,.26),t.wood.beam(T(452,E,39.4),T(448.4,E,b[2]-.12),.16,.16),t.iron.box(b[0]+.15,E,b[2]-.32,b[2]+.14,.12,.34,0,1),t.bamboo.beam(T(b[0]+.15,E,b[2]-.3),T(b[0]+.15,E,b[2]-2.4),.04,.04),t.iron.box(b[0]+.15,E,b[2]-2.75,b[2]-2.4,.18,.3,0,1),wn(t.cloth,[.68,.17,.12]),Zs(t.cloth,T(b[0]+.5,E-.14,b[2]+.13),T(b[0]+1.3,E-.14,b[2]+.13),T(b[0]+1.25,E-.14,b[2]-.75),T(b[0]+.55,E-.14,b[2]-.65),[0,0,1]),wn(t.cloth,[1,1,1]);let A=je.deck,[w,S]=A.c,R=A.z,I=A.L/2,U=A.D/2;t.plank.box(w,S,R-.14,R,A.L,A.D,0,1);for(let L of[-1,1])for(let O of[-1,1])t.wood.beam(T(w+L*(I-.15),S+O*(U-.15),R-.12),T(je.crane[0]+L*.2,je.crane[1]+O*.2,R-3),.12,.12);for(let L of[-1,1])t.wood.box(w,S+L*(U-.1),R-.36,R-.14,A.L,.16,0,1);let W=[[w-I+.05,S-U+.05],[w-I+.05,S+U-.05],[w+I-.05,S+U-.05],[w+I-.05,S-U+.05]];for(let L=0;L<3;L++){let O=W[L],H=W[L+1];t.wood.beam(T(O[0],O[1],R+1),T(H[0],H[1],R+1),.08,.08),t.wood.beam(T(O[0],O[1],R+.5),T(H[0],H[1],R+.5),.05,.05)}for(let L of W)t.wood.box(L[0],L[1],R,R+1.05,.1,.1,0,1);{let O=S-U,H=42.62;t.plank.box(437,(112+O)/2,Math.min(H,R)-.1,Math.min(H,R)+.02,.9,O-112+.5,Math.atan2(436.75-437.15,O-112)*0,1);for(let k of[-.4,.4])t.bamboo.beam(T(437+k,112-.2,H-.12),T(437+k,O+.3,R-.12),.07,.07)}t.bamboo.beam(T(w-I+.2,S+U-.2,R+1),T(w-I+.2,S+U-.2,29.2),.045,.045),wn(t.cloth,[.72,.16,.11]),Zs(t.cloth,T(je.crane[0],je.crane[1],47.3),T(je.crane[0]+1.6,je.crane[1]-.4,47),T(je.crane[0]+1.6,je.crane[1]-.4,46.6),T(je.crane[0],je.crane[1],46.4),[.25,0,1]),wn(t.cloth,[1,1,1]),t.wood.cyl(je.crane[0],je.crane[1],46.9,47.5,.06,6,!1);for(let L of[[429.2,114.6],[441.6,126.5]])t.iron.beam(T(je.crane[0],je.crane[1],46.8),T(L[0],L[1],s(L[0],L[1])+.2),.035,.035),t.wood.box(L[0],L[1],s(L[0],L[1])-.2,s(L[0],L[1])+.45,.4,.4,0,1);wn(t.cloth,[.36,.42,.5]);{Zs(t.cloth,T(452,110.8,40.05),T(452,114.2,40.05),T(450.55,114.2,39.45),T(450.55,110.8,39.45),[-.35,1,0]);for(let bt of[110.8+.05,114.2-.05])t.wood.beam(T(452,bt,40.05-.7),T(450.55+.05,bt,39.45-.03),.06,.06);t.wood.beam(T(450.55,110.8,39.45),T(450.55,114.2,39.45),.07,.07)}wn(t.cloth,[1,1,1]);{t.plank.box(452-1.7/2,229/2,35.95-.14,35.95,1.7,3,0,1);for(let it of[113+.3,116-.3])t.wood.beam(T(452,it,35.95-1.2),T(450.3+.15,it,35.95-.12),.1,.1);t.wood.beam(T(450.3+.05,113,35.95+1),T(450.3+.05,116-.9,35.95+1),.08,.08),t.wood.beam(T(450.3+.05,113,35.95+1),T(452,113,35.95+1),.08,.08);for(let it=113;it<=116-.85;it+=.5)t.wood.box(450.3+.05,it,35.95,35.95+1,.05,.05,0,1);for(let it=450.3+.05;it<=452;it+=.5)t.wood.box(it,113,35.95,35.95+1,.05,.05,0,1);t.ridge.box(452+.02,229/2-.4,35.95,35.95+2.2,.08,1.1,0,1)}{let it=s(449.9,118);for(let[j,Mt,vt]of[[448.2,116.4,32.35],[451.6,116.4,32.35],[448.2,119.6,31.65],[451.6,119.6,31.65]])t.wood.box(j,Mt,s(j,Mt)-.1,vt,.12,.12,0,1);wn(t.cloth,[.79,.74,.6]),Zs(t.cloth,T(448.2-.2,116.4-.2,32.35+.05),T(451.6+.2,116.4-.2,32.35+.05),T(451.6+.2,119.6+.25,31.65-.05),T(448.2-.2,119.6+.25,31.65-.05),[0,1,-.2]),wn(t.cloth,[1,1,1]),t.plank.box((448.2+451.6)/2,119.6-.5,it+.85,it+.95,451.6-448.2-.3,.9,0,1);for(let j of[448.2+.3,451.6-.3])t.wood.box(j,119.6-.5,it,it+.85,.08,.8,0,1);for(let j=0;j<4;j++)t.wood.box(448.2+.6+j*.75,119.6-.5,it+.95,it+1.2,.55,.45,0,1);let bt=s(449.6,120.6);el(t,449.6,120.6,bt,1,.1),el(t,449.55,120.55,bt+1,.75,.25),el(t,448.5,121.2,s(448.5,121.2),.8,-.2)}{let L=[Qn(0,ge.hd+ge.pm+1.75)].concat(I0(Qn(0,ge.hd+ge.pm),Gr,kh,2.5),I0(Gr,kh,[541.5,121],4),[[549.5,120.52],[542.2,120.96]]);for(let O=1;O<L.length;O++){let H=L[O-1],k=L[O],tt=Math.hypot(k[0]-H[0],k[1]-H[1]),nt=Math.atan2(k[1]-H[1],k[0]-H[0]),it=Math.max(1,Math.round(tt/.95));for(let bt=0;bt<it;bt++)for(let j=-1;j<=1;j++){let Mt=(bt+.5)/it,vt=H[0]+(k[0]-H[0])*Mt-Math.sin(nt)*j*.95,K=H[1]+(k[1]-H[1])*Mt+Math.cos(nt)*j*.95,$=s(vt,K),ut=(O*31+bt*7+j*13)%5/5;wn(t.stone,[.62+ut*.1,.62+ut*.1,.63+ut*.1]),t.stone.box(vt,K,$-.1,$+.05,tt/it-.07,.88,nt,.8)}}wn(t.stone,[1,1,1])}return{}}function T_(i,t,e,n,s){let o=-Math.sin(e),r=Math.cos(e),c=10;for(let a=0;a<c;a++){let l=a/c*Math.PI*2,u=(a+1)/c*Math.PI*2,h=Math.cos(e),d=Math.sin(e),f=(p,y)=>T(t[0]+h*Math.cos(p)*s+o*y,t[1]+d*Math.cos(p)*s+r*y,n+Math.sin(p)*s);i.wood.quad(f(l,-.04),f(u,-.04),f(u,.04),f(l,.04),[0,0],[1,0],[1,1],[0,1],[h*Math.cos((l+u)/2),Math.sin((l+u)/2),d*Math.cos((l+u)/2)])}}function U0(i,t){let e=new _e;e.name="backdrop5",e.visible=!1,t.add(e);let n=(()=>{let $=90210;return()=>($=$*16807%2147483647)/2147483647})(),s=($,ut)=>new Tr(Object.assign({color:$},ut||{})),o=28,r=19,c=[[1350,600],[1100,480],[880,405],[700,368],[560,356],[490,360],[440,385],[410,440],[398,520],[392,640],[388,800]],a=52,l=new vr(c.map(([$,ut])=>new Y(...T($,ut,a)))),u=l.getLength(),h=l.getSpacedPoints(Math.ceil(u/6)).map($=>[$.x+De.x,$.z+De.y]),d=($,ut)=>{let N=1e9;for(let F=0;F+1<h.length;F++)N=Math.min(N,Hr([$,ut],h[F],h[F+1]));return N},f=i.meta&&i.meta.board,p=($,ut)=>f?Hn([$,ut],f):!1,y=($,ut,N,F,V,G)=>{let D=new Gn(N-$,F-ut);D.rotateX(-Math.PI/2);let ct=new Gt(D,s(G)),Z=T(($+N)/2,(ut+F)/2,V);return ct.position.set(...Z),e.add(ct),ct};y(521,-260,598.6,82.5,29.8,"#cfc3a6"),y(598.6,-260,1500,222,o,"#cfc3a6"),y(-300,270,1500,1100,r,"#cfc3a6");{let $=new Gn(901.4,o-r),ut=new Gt($,s("#bfb197"));ut.position.set(...T((598.6+1500)/2,222,(o+r)/2)),e.add(ut)}let g=240,m=new Te(1,1,1),M=new ye(.5,.5,1,3,1);M.rotateZ(Math.PI/2),M.rotateY(Math.PI/2),m.translate(0,.5,0),M.scale(1,.62,1.15),M.translate(0,.16,0);let _=new vi(m,s("#e4dccb",{emissive:"#4f4b44"}),g),v=new vi(M,s("#8e918f",{emissive:"#30312f"}),g),x=new xe,b=new xn,E=new In,A=new Y,w=new Y,S=new ee,R=0,I=($,ut,N,F)=>{let V=7+n()*7,G=6+n()*4,D=4+n()*(F<.3?6:10),ct=(n()<.5?0:Math.PI/2)+(n()-.5)*.2;E.set(0,ct,0),b.setFromEuler(E),w.set(...T($,ut,N-.3)),A.set(V,D+.3,G),x.compose(w,b,A),_.setMatrixAt(R,x),S.setRGB(1,1,1).lerp(new ee("#d7d3c8"),F),_.setColorAt(R,S),w.set(...T($,ut,N+D)),A.set(V+.6,G*.55,G+.6),x.compose(w,b,A),v.setMatrixAt(R,x),S.setRGB(1,1,1).lerp(new ee("#c9c9c4"),F*.9),v.setColorAt(R,S),R++};for(let $=0;$<2e3&&R<150;$++){let ut=602+n()*230,N=-140+n()*360;ut<640&&N>150||I(ut,N,o,Math.min(1,(ut-600)/260))}for(let $=0;$<6e3&&R<g;$++){let ut=360+n()*760,N=330+n()*330;d(ut,N)<14||d(ut,N)>120||p(ut,N)||N<330+Math.max(0,(520-ut)*.25)||I(ut,N,r,Math.min(1,Math.hypot(ut-568,N-112)/700))}_.count=v.count=R,e.add(_,v);let U=s("#bdb5a5",{emissive:"#45413a"}),W=s("#a9a294",{emissive:"#3a3731"}),L=s("#8f8a80",{emissive:"#2c2a26"}),O=new Te(2.2,1,1.6);O.translate(0,.5,0);let H=new Te(6.2,.9,2.4);for(let $=0;$<=u;$+=24){let ut=l.getPointAt($/u),N=l.getTangentAt($/u),F=ut.x+De.x,V=ut.z+De.y;if(p(F,V))continue;let G=Math.atan2(N.x,N.z),D=new Gt(O,U);D.position.set(...T(F,V,r-.5)),D.scale.y=a-1.4-r+.5,D.rotation.y=G,e.add(D);let ct=new Gt(H,U);ct.position.set(...T(F,V,a-1.85)),ct.rotation.y=G,e.add(ct)}let k=Math.ceil(u/8);for(let $=0;$<k;$++){let ut=l.getPointAt($/k),N=l.getPointAt(($+1)/k),F=N.clone().sub(ut),V=F.length(),G=ut.clone().add(N).multiplyScalar(.5),D=Math.atan2(F.x,F.z),ct=new Gt(new Te(5.6,1.4,V+.05),W);ct.position.copy(G),ct.position.y-=.7,ct.rotation.y=D,e.add(ct);for(let Z of[-2.7,2.7]){let rt=new Gt(new Te(.25,.75,V+.05),L);rt.position.copy(G),rt.position.y+=.37,rt.rotation.y=D,rt.translateX(Z),e.add(rt)}}let tt=new Te(2.6,2.9,12.6);tt.translate(0,1.45+.35,0);let nt=new Te(2.64,.55,12.64);nt.translate(0,.95,0);let it=new Te(2.3,.3,12.2);it.translate(0,3.4,0);let bt=new Te(2.66,.8,11.2);bt.translate(0,2.35,0);let j=[];for(let[$,ut,N,F]of[[1,-1.25,"#ece2c8",.05],[-1,1.25,"#e2d6b6",.38],[1,-1.25,"#e2d6b6",.55],[-1,1.25,"#ece2c8",.88],[1,-1.25,"#ece2c8",.72],[-1,1.25,"#e2d6b6",.21]]){let V=[];for(let G=0;G<3;G++){let D=new _e;D.add(new Gt(tt,s(N)),new Gt(nt,s("#8b3a2c")),new Gt(it,s("#5f5d58")),new Gt(bt,s("#4a5560"))),e.add(D),V.push(D)}j.push({dir:$,off:ut,cars:V,ph:F})}let Mt=new Y,vt=new Y,K=-1;return{group:e,update($,ut){let N=$<92;if(e.visible!==N&&(e.visible=N),!(!N||Math.abs(ut-K)<1/40)){K=ut;for(let F of j){let V=u+120,G=(ut*11/V+F.ph)%1*V-60;F.cars.forEach((D,ct)=>{let Z=F.dir>0?u-G-ct*13.3:G+ct*13.3,rt=Math.max(0,Math.min(1,Z/u));D.visible=Z>0&&Z<u,l.getPointAt(rt,Mt),l.getTangentAt(rt,vt),D.position.copy(Mt),D.rotation.y=Math.atan2(vt.x,vt.z),D.translateX(F.off)})}}}}}var sl=Math.PI/180,sn=(i,t)=>{i.col=t,i.col2=t},ys=(i,t,e,n,s,o)=>{i.quad(t,e,n,s,[0,0],[1,0],[1,1],[0,1],o),i.quad(t,e,n,s,[0,0],[1,0],[1,1],[0,1],o.map(r=>-r))},ti={stage:{c:[450,211],f:227,L:14,D:9,h:1.4,back:5.8},teaShed:{c:[420.5,191.2],L:9,D:5.2,a:-8},flag:[429.2,187.6],gateN:[268.7,174.4,29.47]},N0=(i,t)=>{let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let o=t[n],r=t[s];o[1]>i[1]!=r[1]>i[1]&&i[0]<(r[0]-o[0])*(i[1]-o[1])/(r[1]-o[1])+o[0]&&(e=!e)}return e};function F0(i){if(i._r6)return;i._r6=!0,i.bld=i.bld.filter(f=>f.id!=="b69"),i.walls=(i.walls||[]).filter(f=>!f.p.every(p=>p[0]>425&&p[0]<430&&p[1]>193&&p[1]<198));for(let f of i.labels||[])f.k==="place"&&f.t==="\u7535\u8F66\u7AD9"&&(f.t="\u620F\u53F0",f.at=ti.stage.c.slice(),f.z=38.5);let t=i.bld.find(f=>f.id==="b215");if(t){let f=[[219.77,109.7],[241.93,112.44],[241.6,119],[219.6,116.4]],p=3,y=t.z+p*3.43;Object.assign(t,{p:f,st:p,st3:p,ze:y,top:y+2,e:["street","yard","street","street"],roof:{m:"ridge",pc:[{p:f,r:[[219.69,113.05],[239.4,115.45]]}]}}),delete t.rise,i.trees=i.trees.filter(g=>!N0(g.at,f))}let e=i.bld.find(f=>f.id==="b206");e&&(e.st=e.st3=2,e.ze=e.z+2*3.45,e.top=e.ze+1.5);let n=(i.gates||[]).find(f=>f.at&&Math.hypot(f.at[0]-265,f.at[1]-183)<.6);n&&(n.at=ti.gateN.slice(0,2),n.z=ti.gateN[2],n.stub=[1.6,1]);let s=(i.gates||[]).find(f=>f.at&&Math.hypot(f.at[0]-364.01,f.at[1]-231.06)<.3);s&&(s.f=284),i.stalls=(i.stalls||[]).concat([{c:[462.6,198.2],L:4.2,D:3,a:Math.PI/2,z:27.62,col:1},{c:[463.4,204],L:4,D:3,a:Math.PI/2,z:27.52,col:3},{c:[435.5,221.6],L:4.4,D:3,a:Math.PI,z:27.45,col:2},{c:[441.2,222.4],L:3.8,D:2.8,a:Math.PI,z:27.4,col:0}]);let o=ti.stage,r=o.f*sl,c=Math.cos(r),a=Math.sin(r),l=-a,u=c,h=(f,p)=>[o.c[0]+l*f+c*p,o.c[1]+u*f+a*p],d=[h(-8.2,-o.D/2-o.back-1),h(8.2,-o.D/2-o.back-1),h(8.2,o.D/2+10),h(-8.2,o.D/2+10)];i.trees=i.trees.filter(f=>!N0(f.at,d)&&Math.hypot(f.at[0]-ti.teaShed.c[0],f.at[1]-ti.teaShed.c[1])>5.5&&Math.hypot(f.at[0]-ti.flag[0],f.at[1]-ti.flag[1])>2)}function B0(i,t,e,n,s,o,r){return A_(t,s,r),R_(t,s),C_(t,s,r),P_(t,s,r),I_(t,s),F_(t,s),sn(t.cloth,[1,1,1]),{}}var Ke=i=>{let t=parseInt(i.slice(1),16),e=n=>(n/=255,n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4));return[e(t>>16&255),e(t>>8&255),e(t&255)]},Vh=()=>{let i=ti.stage,t=i.f*sl,e=Math.cos(t),n=Math.sin(t),s=-n,o=e;return{S6:i,fx:e,fy:n,ux:s,uy:o,ang:Math.atan2(o,s),P:(r,c)=>[i.c[0]+s*r+e*c,i.c[1]+o*r+n*c]}},Hh=0;function A_(i,t,e){let{S6:n,fx:s,fy:o,ang:r,P:c}=Vh(),a=n.L,l=n.D,u=n.back,h=1e9,d=-1e9;for(let w of[-1,-.5,0,.5,1])for(let S of[-1,-.5,0,.5,1]){let R=c(w*a/2,l/2-(S+1)/2*(l+u)),I=t(R[0],R[1]);h=Math.min(h,I),d=Math.max(d,I)}let f=d+n.h;Hh=f,i.cityStone.box(n.c[0],n.c[1],h-.4,f-.12,a,l,r,1),i.coping.box(n.c[0],n.c[1],f-.2,f-.04,a+.3,l+.3,r,1),i.plank.box(n.c[0],n.c[1],f-.06,f+.02,a-.2,l-.2,r,1);let p=4.6,y=[-a/2+.4,-a/6,a/6,a/2-.4];for(let w of[l/2-.4,-l/2+.45])for(let S of y){let R=c(S,w);i.red.cyl(R[0],R[1],f,f+p,.22,10,!0),i.stone.box(R[0],R[1],f,f+.22,.52,.52,r,1)}let g=-l/2+.45,m=a/6+.25,M=m+1.4,_=(w,S,R,I)=>{let U=c((w+S)/2,g);i.wallBody.box(U[0],U[1],R,I,S-w,.28,r,.5)};_(-a/2+.4,-M,f,f+p),_(-m,m,f,f+p),_(M,a/2-.4,f,f+p),_(-M,-m,f+2.5,f+p),_(m,M,f+2.5,f+p),sn(i.cloth,Ke("#9e2a1c"));for(let w of[-1,1]){let S=c(w*M,g+.05),R=c(w*m,g+.05);ys(i.cloth,T(S[0],S[1],f+2.45),T(R[0],R[1],f+2.45),T(R[0],R[1],f+.05),T(S[0],S[1],f+.05),[s,0,o])}{let w=m-.2,S=c(-w,g+.17),R=c(w,g+.17);sn(i.cloth,Ke("#6e1e16")),ys(i.cloth,T(S[0],S[1],f+4),T(R[0],R[1],f+4),T(R[0],R[1],f+.6),T(S[0],S[1],f+.6),[s,0,o]);let I=c(0,g+.2);i.brassG.box(I[0],I[1],f+3.95,f+4.08,2*w+.2,.06,r,1),i.brassG.box(I[0],I[1],f+.55,f+.66,2*w+.2,.06,r,1)}sn(i.cloth,[1,1,1]);for(let w of[-1,1]){let S=c(w*(a/2-.4),-l/4+.2);i.wallBody.box(S[0],S[1],f,f+p,.28,l/2-.4,r,.5)}{let w=c(-a/2+.2,l/2-.4),S=c(a/2-.2,l/2-.4);i.wood.beam(T(w[0],w[1],f+p-.2),T(S[0],S[1],f+p-.2),.32,.5),i.red.beam(T(w[0],w[1],f+p-.75),T(S[0],S[1],f+p-.75),.18,.18)}{let w=c(0,l/2-.2);i.brassG.box(w[0],w[1],f+p-.62,f+p+.25,2.8,.12,r,1)}for(let w of[-1,1]){let S=c(w*(a/2-.4),l/2-.4),R=c(w*(a/6+.25),l/2-.4);i.wood.beam(T(S[0],S[1],f+.9),T(R[0],R[1],f+.9),.08,.1);for(let I=0;I<=6;I++){let U=I/6,W=S[0]+(R[0]-S[0])*U,L=S[1]+(R[1]-S[1])*U;i.wood.box(W,L,f,f+.9,.06,.06,r,1)}}Ae(i,{c:c(0,.2),L:a+1.6,D:l+1.3,a:r,ze:f+p+.25,top:f+p+3.1,ty:"xs",oh:.6,ohg:.4,lift:.6,sag:.6,ridgeDeco:!0});for(let w of y){let S=c(w,l/2-.15);e.lanterns.push([S[0],S[1],f+p-.85])}sn(i.cloth,Ke("#b0301e"));for(let w of[-1,1]){let S=c(w*(a/6)-.3,l/2-.15),R=c(w*(a/6)+.3,l/2-.15);ys(i.cloth,T(S[0],S[1],f+p-.9),T(R[0],R[1],f+p-.9),T(R[0],R[1],f+1.7),T(S[0],S[1],f+1.7),[s,0,o])}sn(i.cloth,[1,1,1]);let v=-l/2+.25,x=v-u,b=c(0,(v+x)/2),E=a-.8;i.wallBody.box(b[0],b[1],h-.3,f+3.5,E,v-x,r,.5),i.stone.box(b[0],b[1],h-.3,h+.45,E+.12,v-x+.12,r,1);let A=(w,S,R,I,U,W)=>{let L=c(w,S);i.red.box(L[0],L[1],R,I,W?.12:U,W?U:.12,r,1)};for(let w of[-4.6,-1.6,1.6,4.6])A(w,x-.02,f+.9,f+2.3,1.1,!1);{let w=c(-3.1,x-.03);i.wood.box(w[0],w[1],h,h+2.3,1.3,.14,r,1)}for(let w of[-1,1])A(w*(E/2+.02),(v+x)/2,f+.9,f+2.3,1.1,!0);Ae(i,{c:c(0,(v+x)/2-.45),L:E+.4,D:v-x-1.1,a:r,ze:f+3.5,top:f+5.2,ty:"gable",oh:.5,ohg:.35,sag:.4})}var O0=[[2.4,7],[4.4,7.8],[6.4,8.4],[8.4,9]];function R_(i,t){let{S6:e,ux:n,uy:s,fx:o,fy:r,ang:c}=Vh();for(let[a,l]of O0)for(let u of[-1,1]){let h=e.D/2+a,d=u*(l/4+.35),f=e.c[0]+n*d+o*h,p=e.c[1]+s*d+r*h,y=t(f,p),g=l/2-.5;i.wood.box(f,p,y+.4,y+.47,g,.34,c,1);for(let m of[-1,1]){let M=f+n*m*(g/2-.2),_=p+s*m*(g/2-.2);i.wood.box(M,_,y-.05,y+.4,.07,.3,c,1)}}}function C_(i,t,e){let n=ti.teaShed,s=n.a*sl,o=Math.cos(s),r=Math.sin(s),c=(h,d)=>[n.c[0]+o*h-r*d,n.c[1]+r*h+o*d],a=t(n.c[0],n.c[1]),l=2.5,u=3.5;i.paving.box(n.c[0],n.c[1],a-.1,a+.06,n.L+.6,n.D+.6,s,1);for(let[h,d]of[[-1,-1],[1,-1],[1,1],[-1,1],[0,-1],[0,1]]){let f=c(h*(n.L/2-.2),d*(n.D/2-.2));i.wood.cyl(f[0],f[1],a,a+l,.09,6,!0)}{let h=c(-n.L/2-.2,0),d=c(n.L/2+.2,0);i.wood.beam(T(h[0],h[1],a+u-.05),T(d[0],d[1],a+u-.05),.1,.1)}for(let h of[-n.L/2+.2,n.L/2-.2]){let d=c(h,0);i.wood.cyl(d[0],d[1],a,a+u,.08,6,!0)}sn(i.cloth,Ke("#cdbb94"));for(let h of[-1,1]){let d=c(-n.L/2-.3,0),f=c(n.L/2+.3,0),p=c(n.L/2+.3,h*(n.D/2+.45)),y=c(-n.L/2-.3,h*(n.D/2+.45));ys(i.cloth,T(d[0],d[1],a+u),T(f[0],f[1],a+u),T(p[0],p[1],a+l-.1),T(y[0],y[1],a+l-.1),[0,1,0])}sn(i.cloth,Ke("#a3301f"));for(let h of[-1,1]){let d=c(-n.L/2-.3,h*(n.D/2+.45)),f=c(n.L/2+.3,h*(n.D/2+.45));ys(i.cloth,T(d[0],d[1],a+l-.1),T(f[0],f[1],a+l-.1),T(f[0],f[1],a+l-.5),T(d[0],d[1],a+l-.5),[-r*h,0,o*h])}sn(i.cloth,[1,1,1]);for(let h of[-2.8,0,2.8]){let d=c(h,.3);i.wood.box(d[0],d[1],a+.72,a+.78,.9,.9,s,1),i.wood.box(d[0],d[1],a,a+.72,.12,.12,s,1);for(let p of[-1,1]){let y=c(h,.3+p*.8);i.wood.box(y[0],y[1],a+.4,a+.46,1,.28,s,1),i.wood.box(y[0],y[1],a,a+.4,.8,.06,s,1)}let f=c(h+.15,.2);i.lantern.cyl(f[0],f[1],a+.78,a+.86,.05,6,!0)}{let h=c(n.L/2-.9,-n.D/2+.9);i.brick.box(h[0],h[1],a,a+.9,.8,.8,s,1),i.iron.cyl(h[0],h[1],a+.9,a+1.15,.22,8,!0)}for(let h of[-n.L/2+.2,n.L/2-.2]){let d=c(h,n.D/2+.2);e.lanterns.push([d[0],d[1],a+l-.5])}}function P_(i,t,e){for(let[n,s]of[[431.2,196.6],[424.6,197.4],[417.8,197.6],[411,197.8],[404.2,198],[397.4,198.2]]){let o=t(n,s);i.stone.box(n,s,o-.1,o+.35,.45,.45,0,1),i.wood.cyl(n,s,o+.3,o+3.2,.08,6,!0),i.wood.beam(T(n,s,o+3.05),T(n,s+.7,o+3.05),.07,.07),e.lanterns.push([n,s+.65,o+2.95])}}function I_(i,t){let[e,n]=ti.flag,s=t(e,n),o=9.5,r=4.2;i.stone.box(e,n,s-.1,s+.5,.8,.8,0,1),i.wood.cyl(e,n,s+.5,s+o,.11,8,!0);let c=-.94,a=.34;i.wood.beam(T(e,n,s+o-.3),T(e+c*1.5,n+a*1.5,s+o-.3),.08,.08);let l=[e+c*.25,n+a*.25],u=[e+c*1.4,n+a*1.4],h=[-a,0,c];sn(i.cloth,Ke("#8c2a1c")),ys(i.cloth,T(l[0],l[1],s+o-.35),T(u[0],u[1],s+o-.35),T(u[0],u[1],s+o-r),T(l[0],l[1],s+o-r),h),sn(i.cloth,Ke("#e8dcc0"));for(let[d,f]of[[l,[l[0]+c*.14,l[1]+a*.14]],[[u[0]-c*.14,u[1]-a*.14],u]]){let p=[h[0]*.01,h[2]*.01];for(let y of[-1,1])ys(i.cloth,T(d[0]+p[0]*y,d[1]+p[1]*y,s+o-.35),T(f[0]+p[0]*y,f[1]+p[1]*y,s+o-.35),T(f[0]+p[0]*y,f[1]+p[1]*y,s+o-r),T(d[0]+p[0]*y,d[1]+p[1]*y,s+o-r),h)}sn(i.cloth,Ke("#8c2a1c"));for(let d of[.3,.7]){let f=[l[0]+(u[0]-l[0])*d,l[1]+(u[1]-l[1])*d];ys(i.cloth,T(f[0]-c*.1,f[1]-a*.1,s+o-r),T(f[0]+c*.1,f[1]+a*.1,s+o-r),T(f[0]+c*.16,f[1]+a*.16,s+o-r-.7),T(f[0]-c*.04,f[1]-a*.04,s+o-r-.7),h)}sn(i.cloth,[1,1,1])}var D_=["#5a4a3c","#4c5566","#7a6b58","#8a7f6a","#3f4a5a","#6a5040","#9a8a70","#58606a","#6d4f3a","#4a5a50","#7d5a48","#a39272"].map(Ke),L_=["#2e2c2a","#3a3631","#45403a","#33363c"].map(Ke),U_=["#d9b48f","#c9a07a","#e0bf9c"].map(Ke),N_=["#2a2420","#3a3028","#1f1c1a","#4a4038"].map(Ke),il=7,pi=()=>(il=il*16807%2147483647,(il-1)/2147483646),nl=i=>i[Math.floor(pi()*i.length)];function di(i,t,e,n,s,o={}){let r=o.s||1,c=Math.cos(s),a=Math.sin(s),l=-a,u=c,h=(_,v)=>[t+(l*_+c*v)*r,e+(u*_+a*v)*r],d=(_,v,x)=>{let b=h(_,v);return T(b[0],b[1],n+x*r)},f=o.cl||nl(D_),p=o.pa||nl(L_),y=nl(U_),g=nl(N_),m;if(sn(i.cloth,p),o.sit!=null){let _=o.sit/r;for(let v of[-1,1]){let x=h(v*.1,.44);i.cloth.cyl(x[0],x[1],n,n+_*r,.065*r,6,!0),i.cloth.beam(d(v*.1,-.02,_+.07),d(v*.1,.48,_+.07),.14*r,.13*r)}m=_+.02}else{for(let _ of[-1,1]){let v=h(_*.1,0);i.cloth.cyl(v[0],v[1],n,n+.9*r,.07*r,6,!0)}m=.86}sn(i.cloth,f);{let _=h(0,0);i.cloth.cyl(_[0],_[1],n+m*r,n+(m+.56)*r,.175*r,8,!0)}if(o.skirt){let _=h(0,0);i.cloth.cyl(_[0],_[1],n+(m-.5)*r,n+m*r,.22*r,8,!1)}let M=m+.5;for(let _ of[-1,1]){let v;if(o.arms==="up"?v=d(_*.45,.12,M+.5):o.arms==="out"?v=d(_*.62,.2,M+.02):o.arms==="lap"?v=d(_*.13,.32,m+.14):o.arms==="cup"?v=_<0?d(-.13,.32,m+.14):d(.12,.28,M-.08):o.arms==="hip"?v=d(_*.3,.06,m+.1):v=d(_*.25,.03,M-.56),i.cloth.beam(d(_*.22,0,M),v,.1*r,.1*r),o.sleeve&&o.arms==="up"){sn(i.cloth,Ke("#f2ece0"));let x=v;i.cloth.beam(x,[x[0],x[1]-.8*r,x[2]],.18*r,.03*r),sn(i.cloth,f)}}sn(i.cloth,y);{let _=h(0,.01);i.cloth.cyl(_[0],_[1],n+(M+.03)*r,n+(M+.28)*r,.105*r,8,!0)}sn(i.cloth,o.hat||g);{let _=h(0,-.012);i.cloth.cyl(_[0],_[1],n+(M+.19)*r,n+(M+.31)*r,(o.hat?.14:.112)*r,8,!0)}}function F_(i,t){il=7;let{S6:e,fx:n,fy:s,ux:o,uy:r,P:c}=Vh(),a=Math.atan2(-s,-n);{let l=c(-1.4,1.3);di(i,l[0],l[1],Hh,Math.atan2(s,n)+.35,{arms:"up",sleeve:!0,cl:Ke("#b0352a"),pa:Ke("#3a2a24"),skirt:!0})}{let l=c(1.7,.8);di(i,l[0],l[1],Hh,Math.atan2(s,n)-.5,{arms:"out",cl:Ke("#e4dccb"),pa:Ke("#3f5a8a"),hat:Ke("#2b2b33")})}for(let[l,u]of O0)for(let h of[-1,1]){let d=e.D/2+l,f=u/2-.5,p=h*(u/4+.35),y=Math.floor(f/.62);for(let g=0;g<y;g++){if(pi()<.42)continue;let m=p-f/2+.31+g*.62+(pi()-.5)*.08,M=c(m,d+.06),_=t(M[0],M[1]);di(i,M[0],M[1],_,a+(pi()-.5)*.3,{sit:.47,arms:pi()<.5?"lap":null})}}for(let l=0;l<9;l++){let u=-4.8+l*1.2+(pi()-.5)*.4,h=e.D/2+10+(pi()-.5)*.9,d=c(u,h),f=t(d[0],d[1]);l!==4&&di(i,d[0],d[1],f,a+(pi()-.5)*.4,{arms:pi()<.3?"hip":null})}for(let[l,u,h]of[[-6.6,4.4,.5],[-6.9,6.1,.3],[6.5,4.9,-.4],[6.9,6.8,-.3],[7.1,8.8,-.2],[-6.4,9.6,.4]]){let d=c(l,e.D/2+u),f=t(d[0],d[1]);di(i,d[0],d[1],f,a+h,{})}for(let[l,u,h]of[[440.2,216.3,.2],[441.1,217,3.4]])di(i,l,u,t(l,u),h,{arms:"hip"});{let l=ti.teaShed,u=l.a*sl,h=Math.cos(u),d=Math.sin(u),f=(y,g)=>[l.c[0]+h*y-d*g,l.c[1]+d*y+h*g],p=t(l.c[0],l.c[1]);for(let[y,g]of[[-2.8,-1],[-2.8,1],[0,1],[2.8,-1],[2.8,1]]){let m=f(y-.1,.3+g*.8);di(i,m[0],m[1],p,Math.atan2(-g*h,g*d)+(pi()-.5)*.3,{sit:.46,arms:pi()<.6?"cup":"lap"})}{let y=f(l.L/2-1.6,-l.D/2+1);di(i,y[0],y[1],p,u+Math.PI,{cl:Ke("#e2d8c4"),pa:Ke("#3a3631")})}}for(let[l,u,h]of[[464.2,197.6,Math.PI],[465,204.5,Math.PI],[435,223,-Math.PI/2],[441.6,223.7,-Math.PI/2]])di(i,l,u,t(l,u),h,{});for(let[l,u,h]of[[419,200.3,Math.PI+.05],[412.3,199.6,Math.PI-.05],[424.5,205.3,.1],[408,204.5,Math.PI+.1]])di(i,l,u,t(l,u),h,{});for(let[l,u,h]of[[398.4,205.6,-2.2],[399.3,204.8,1]])di(i,l,u,t(l,u),h,{arms:"hip"})}function z0(i){if(i._r7)return;i._r7=!0;let t=i.bld.find(e=>e.id==="b92");t&&(t.st=t.st3=3,t.ze=t.z+3.8+3.3*2,t.top=t.ze+2.12,t.prio=4)}function k0(i,t){let e=je.deck,n=e.c[0]-.75,s=e.c[1]+.7,o=e.z;t.wood.box(n,s,o,o+.32,.62,.42,0,1),t.wood.box(n,s,o+.32,o+.44,.66,.46,0,1);for(let r of[-.2,.2])t.brassG.box(n+r,s,o-.005,o+.45,.05,.47,0,1);return{crateChest:[n,s,o]}}async function B_(i){let t=i.host,e=i.base||"",n=i.data||{},[s,o]=await Promise.all([n.scene?n.scene:fetch(e+"scene.json").then(X=>X.json()),new Promise((X,yt)=>{let gt=new Image;gt.onload=()=>X(gt),gt.onerror=yt,gt.src=n.ground||e+"ground.webp"})]);i.onProgress&&i.onProgress(.4),s.meta.center&&Gf(s.meta.center);let r=window.devicePixelRatio||1,c=i.dpr||Math.min(1.5,r),a=new Gc({antialias:c<1.5,preserveDrawingBuffer:!!i.keep});a.setPixelRatio(c),a.shadowMap.enabled=!0,a.shadowMap.type=$a,a.shadowMap.autoUpdate=!1,a.shadowMap.needsUpdate=!0;let l=2,u="",h=!1,d=0,f=()=>{l=Math.max(l,1)};a.toneMapping=ic,a.toneMappingExposure=1.06,t.appendChild(a.domElement);let p=new wo;p.background=z_(),p.fog=new fr("#dccfb8",3e-4);let y=new Oo(a),g=new wo,m=new Ln(100,32,16),M=new zn({side:pn,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying vec3 vP; void main(){ float h = normalize(vP).y; vec3 top = vec3(0.36,0.52,0.70); vec3 hor = vec3(1.0,0.84,0.62); vec3 gnd = vec3(0.32,0.27,0.21); vec3 c = h > 0. ? mix(hor, top, pow(h, 0.55)) : mix(hor, gnd, pow(-h, 0.4)); vec3 sd = normalize(vec3(-0.62,0.42,0.66)); sd = vec3(sd.x, sd.z, sd.y); float s = max(dot(normalize(vP), sd), 0.); c += vec3(1.0,0.75,0.45) * pow(s, 64.) * 6.; gl_FragColor = vec4(c,1.); }"});g.add(new Gt(m,M)),p.environment=y.fromScene(g,.02).texture,p.environmentIntensity=.34;let _=s.meta.sun,v=new Y(_[0],_[2]*.82,_[1]).normalize(),x=new Ir("#ffcf98",3);x.position.copy(v.clone().multiplyScalar(500)),x.target.position.set(0,0,0),x.castShadow=!0,x.shadow.mapSize.set(i.shadow||4096,i.shadow||4096),Object.assign(x.shadow.camera,{left:-300,right:300,top:300,bottom:-300,near:50,far:1600}),x.shadow.bias=-25e-5,x.shadow.normalBias=.45,p.add(x,x.target),p.add(new Rr("#c9d3dc","#8a6f52",.74));let b=Kf(),E=Qf(),A=a.capabilities.getMaxAnisotropy(),w=new fn(o);w.colorSpace=ke,w.anisotropy=A,w.needsUpdate=!0;let S=X=>new re(Object.assign({roughness:.86,metalness:0,vertexColors:!0},X)),R=X=>S({map:b[X].map,emissiveMap:b[X].em||null,emissive:b[X].em?new ee("#f0c48e"):new ee("#000"),emissiveIntensity:b[X].em?.42:0}),I={};for(let X of Object.keys(b))I[X]=R(X);I.tile=S({map:E.tile,roughness:.74,side:qe}),I.ridge=S({color:"#3d4045",roughness:.7}),I.ped=S({map:E.wood,color:"#9a8574"}),I.wood=S({map:E.wood}),I.red=S({color:"#5f3a31",roughness:.75}),I.stone=S({map:E.stone}),I.coping=S({map:E.stone,color:"#d6cfc2"}),I.quay=S({map:E.rubble,color:"#e6e0d6"}),I.cliff=S({map:E.cliff,color:"#d8d0c4",roughness:.95}),I.wet=S({map:E.rubble,color:"#7d8170",roughness:.6}),I.plank=S({map:E.plank,roughness:.92}),I.brick=S({map:E.brick}),I.wallBody=S({map:E.plaster}),I.cap=S({map:E.tile,color:"#9aa0a8",roughness:.75}),I.flat=S({color:"#8d867c"}),I.flatWall=S({map:E.plaster}),I.iron=S({map:E.iron,roughness:.55,metalness:.45}),I.girder=S({map:E.iron,color:"#9a948c",roughness:.55,metalness:.4}),I.pier=S({map:E.iron,color:"#8f8a82",roughness:.6,metalness:.35}),I.deck=S({color:"#4a4643"}),I.ballast=S({color:"#706960",roughness:1}),I.sleeper=S({color:"#4f3a2a"}),I.rail=S({color:"#9a9ca0",metalness:.85,roughness:.35}),I.paving=S({map:E.stone,color:"#e3dccf"}),I.stationW=S({map:E.brick}),I.brassG=S({color:"#a68c62",metalness:.85,roughness:.32,envMapIntensity:2.2}),I.soil=new re({map:H_(),roughness:1,vertexColors:!0}),I.waterCut=new re({color:"#2f6b70",transparent:!0,opacity:.72,roughness:.3,vertexColors:!0}),I.cloth=S({side:qe,roughness:.9}),I.lantern=S({color:"#9c4d3e",emissive:new ee("#d9773f"),emissiveIntensity:.6,roughness:.6}),I.cityStone=S({map:E.stone,color:"#c9c1b4",roughness:.92}),I.bridgeS=S({map:E.stone,color:"#d9d2c6",roughness:.9}),I.glass=S({color:"#b9c8c8",roughness:.2,metalness:.35,transparent:!0,opacity:.6,side:qe,depthWrite:!1}),I.copper=S({color:"#5f9a88",roughness:.45,metalness:.45,envMapIntensity:1.6}),I.foam=new re({color:"#f4f6f2",transparent:!0,opacity:.7,roughness:.8,depthWrite:!1,vertexColors:!0}),I.bamboo=S({color:"#b39a63",roughness:.8}),I.craneY=S({color:"#c39a45",roughness:.5,metalness:.35,envMapIntensity:1.4}),I.domeR=S({color:"#9c3f2f",roughness:.5,metalness:.15,envMapIntensity:1.2}),I.lampG=S({color:"#f6e6bf",emissive:new ee("#ffd28a"),emissiveIntensity:.9,roughness:.4}),I.hedge=S({color:"#4d6a3a",roughness:.95});let U={bronze:new re({color:"#6f5b3e",metalness:.8,roughness:.45}),rock:new re({color:"#8f8b84",roughness:.95,flatShading:!0}),brass:new re({color:"#ab9163",metalness:.85,roughness:.34,envMapIntensity:2}),ironM:new re({color:"#2f2e2d",metalness:.6,roughness:.45}),cab:new re({color:"#56392f",roughness:.65}),coachA:new re({color:"#5a3c33",roughness:.6}),coachB:new re({color:"#3d4a47",roughness:.6}),winBand:new re({color:"#e6cfa6",emissive:new ee("#e8b878"),emissiveIntensity:.4}),lampW:new re({color:"#fff2c8",emissive:new ee("#ffe0a0"),emissiveIntensity:2}),hull:new re({color:"#4d3d30",roughness:.85}),sail:new re({color:"#cdbf9f",roughness:.95,side:qe}),mat:new re({color:"#a4957b",roughness:.95,side:qe}),crate:new re({color:"#7a6a55",roughness:.9}),cream:new re({color:"#efe6d2",roughness:.6}),redP:new re({color:"#8b3a2c",roughness:.6}),sailR:new re({color:"#9a6a48",roughness:.95,side:qe}),woodM:new re({color:"#5a4434",roughness:.85}),bamboo:new re({color:"#8f8a52",roughness:.8}),smoke:new re({color:"#d9d6d0",roughness:1,transparent:!0,opacity:.4,depthWrite:!1})},W=[],L={};for(let X of Object.keys(I))L[X]=new $n;let O=l0(s,i.caseBits!==!1);i.caseBits!==!1&&z0(s),i.caseBits!==!1&&F0(s),i.caseBits!==!1&&D0(s);let H=h0(s,O,w);p.add(H),u0(s,O,L),i.onProgress&&i.onProgress(.55);let k=[],tt={awnings:[],lanterns:[]};for(let X of s.bld)o0(L,X,k,tt);let nt=i.caseBits!==!1,it=nt?{}:null,bt={awnings:[],lanterns:[]};if(it)for(let X of Object.keys(I))it[X]=new $n;for(let X of s.key)it&&X.id==="P1"?Dh(it,X,k,bt):Dh(L,X,k,tt);(()=>{for(let X in L)L[X].col=[1,1,1],L[X].col2=[1,1,1],L[X].bid=-1})(),a0(L,s.walls,O);let Mt=X=>!!it&&!!X.at&&X.at[0]>354.5&&X.at[0]<393.5&&X.at[1]>184.5&&X.at[1]<219.5;Lh(L,s.gates.filter(X=>!Mt(X)),tt),it&&Lh(it,s.gates.filter(Mt),bt),f0(s,L,O),d0(s,L,p,U,O);let vt=[];m0(s,L,p,U,O,W,vt),g0(s,L);let K=i.caseBits!==!1;K&&s.nsm.pipebridge&&Object.assign(s.nsm.pipebridge,{legU:1.1,open:!0}),K&&(s.trees=s.trees.filter(X=>Math.hypot(X.at[0]-376.6,X.at[1]-228.1)>.8)),x0(s,L,p,U,O,W);let $=K?M0(s,L,p,U,O,W):null,ut=K?L0(s,L,p,U,O,W,Bh):null,N=K?B0(s,L,p,U,O,W,tt):null;K&&k0(s,L);let F=K?U0(s,p):null,V=["#4c5566","#6d7477","#cbc0a6","#3f4a5a","#7a6b58"].map(X=>new ee(X)),G=(X,yt)=>{for(let gt of yt.awnings){X.cloth.col=[V[gt.col].r,V[gt.col].g,V[gt.col].b],X.cloth.col2=X.cloth.col;let St=1.7,Ft=(Ot,ae,me)=>T(Ot[0]+gt.n[0]*ae,Ot[1]+gt.n[1]*ae,me);X.cloth.quad(Ft(gt.a,.05,gt.z),Ft(gt.b,.05,gt.z),Ft(gt.b,St,gt.z-.55),Ft(gt.a,St,gt.z-.55),[0,0],[1,0],[1,1],[0,1],[0,1,0]),X.cloth.quad(Ft(gt.a,St,gt.z-.55),Ft(gt.b,St,gt.z-.55),Ft(gt.b,St,gt.z-.85),Ft(gt.a,St,gt.z-.85),[0,0],[1,0],[1,1],[0,1],[gt.n[0],0,gt.n[1]])}for(let gt of yt.lanterns)X.lantern.col=[1,1,1],X.lantern.cyl(gt[0],gt[1],gt[2]-.55,gt[2],.22,8,!0)};G(L,tt),it&&G(it,bt);let D=s.marks.filter(X=>X.k==="bigtree").map(X=>({at:X.c,r:X.r*1.05,sp:X.sp||"ginkgo",z:X.z,big:1,trunk:Math.max(4,(X.top-X.z)*.32)})).concat(vt),ct=p0(s,p,O,D);i.onProgress&&i.onProgress(.8);let Z={},rt=[];for(let X in L){if(!L[X].count)continue;let yt=L[X].geometry(),gt=new Gt(yt,I[X]);gt.castShadow=!["waterCut","soil"].includes(X),gt.receiveShadow=!0,gt.userData.key=X,p.add(gt),Z[X]=gt,yt.userData.ids.some(St=>St>=0)&&rt.push(gt)}for(let X in I){let yt=I[X];yt.userData.map=yt.map,yt.userData.em=yt.emissiveMap,yt.userData.ei=yt.emissiveIntensity}let ft={uCut:{value:1e5},uHmin:{value:[]},uHmax:{value:[]},uFoot:{value:[new we,new we]},uFootOn:{value:0}};for(let X=0;X<6;X++){let yt=Yi.holes[X];ft.uHmin.value.push(new Y(...yt?T(yt[0],yt[1],yt[2]):[0,0,0])),ft.uHmax.value.push(new Y(...yt?T(yt[3],yt[4],yt[5]):[0,0,0]))}Yi.foot.forEach((X,yt)=>{let gt=T(X[0],X[1],0),St=T(X[2],X[3],0);ft.uFoot.value[yt].set(gt[0],gt[2],St[0],St[2])});let Dt=(X,yt)=>(X.onBeforeCompile=gt=>{Object.assign(gt.uniforms,ft),gt.vertexShader=gt.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTw;`).replace("#include <project_vertex>",`#include <project_vertex>
vTw = (modelMatrix * vec4(transformed, 1.0)).xyz;`);let St=yt==="t"?"if (uFootOn > 0.5) { for (int i = 0; i < 2; i++) { vec4 r = uFoot[i]; if (vTw.x > r.x && vTw.x < r.z && vTw.z > r.y && vTw.z < r.w) discard; } }":"if (vTw.y > uCut) discard; for (int i = 0; i < 6; i++) { if (all(greaterThan(vTw, uHmin[i])) && all(lessThan(vTw, uHmax[i]))) discard; }";gt.fragmentShader=gt.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTw;
uniform float uCut; uniform vec3 uHmin[6]; uniform vec3 uHmax[6]; uniform vec4 uFoot[2]; uniform float uFootOn;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
`+St)},X.customProgramCacheKey=()=>"tea-"+yt,X),mt=(X,yt)=>Dt(new Ao(Object.assign({depthPacking:Vc},yt||{})),X),wt=null,zt=1e5,st=1e5,P=0,C=!1;if(it){let X=mt("b");for(let yt in it){if(!it[yt].count)continue;let gt=Dt(I[yt].clone(),"b");gt.side=qe;let St=new Gt(it[yt].geometry(),gt);St.castShadow=!["waterCut","soil"].includes(yt),St.receiveShadow=!0,St.customDepthMaterial=X,St.userData.key="teaP1-"+yt,p.add(St)}Dt(H.material,"t"),H.customDepthMaterial=mt("t",{map:w,alphaTest:.5}),wt=w0(I),p.add(wt),W.push(yt=>{let gt=Math.min(.1,Math.max(0,yt-P));P=yt,st!==zt&&(st+=(zt-st)*(1-Math.exp(-gt*4.5)),Math.abs(st-zt)<.03&&(st=zt),f(),C&&st>45.5&&(st=zt=1e5,ft.uFootOn.value=0,wt.visible=!1,C=!1),ft.uCut.value=st-De.z)})}function z(X,yt){wt&&(X?(C=!1,wt.visible=!0,ft.uFootOn.value=1,Pt.cut({open:Yi.foot,low:Yi.low,lowZ:Yi.Z0,F:Yi.F}),zt=Yi.CUT,yt?st=Yi.CUT:st>1e4&&(st=46)):(Pt.cut(null),yt||st>1e4?(st=zt=1e5,ft.uFootOn.value=0,wt.visible=!1,C=!1):(zt=46.5,C=!0)),ft.uCut.value=st-De.z,f())}let q=nt?T0(I):null;q&&(p.add(q.root),W.push(X=>q.tick(X)));let[Q,J,ht,pt]=s.meta.bbox,Tt=new Gt(new Gn((ht-Q)*1.16,(pt-J)*1.16),new ci({map:k_(),transparent:!0,depthWrite:!1,opacity:.55}));Tt.rotation.x=-Math.PI/2;let Ct=T((Q+ht)/2,(J+pt)/2,qi-.6);Tt.position.set(Ct[0]+24,Ct[1],Ct[2]+18),p.add(Tt);let dt=new rn(32,1,2,6e3),Et=new Jc(dt,a.domElement);Et.enableDamping=!0,Et.dampingFactor=.08,Et.maxPolarAngle=Math.PI*.495,Et.minDistance=8,Et.maxDistance=2200,Et.screenSpacePanning=!0;let Ht=O_(s),Pt=S0({S:s,scene:p,camera:dt,controls:Et,gz:O,host:t});$&&Pt.pickups($.pickups);let It=(X,yt)=>{let gt=new Y(...T(...X.pos)),St=new Y(...T(...X.tgt)),Ft=X.fov||32;if(yt){dt.position.copy(gt),Et.target.copy(St),dt.fov=Ft,dt.updateProjectionMatrix(),Et.update();return}Ut={t0:performance.now(),dur:X.dur||1300,p0:dt.position.clone(),q0:Et.target.clone(),f0:dt.fov,p1:gt,q1:St,f1:Ft,arc:X.arc||0}},Ut=null;It(Ht.art,!0);let et=document.createElement("div");et.className="sb-labels",t.appendChild(et);let Bt=new Set(s.labels.filter(X=>X.k==="parcel").map(X=>X.t)),kt=s.labels.filter(X=>!(X.k==="place"&&Bt.has(X.t))).map(X=>{let yt=document.createElement("div");yt.className="sb-label sb-"+X.k+(X.kind?" sb-kd-"+X.kind:""),yt.textContent=X.t,et.appendChild(yt);let gt=X.z+(X.k==="parcel"?14:X.k==="road"?1.5:6);return{el:yt,p:new Y(...T(X.at[0],X.at[1],gt)),x:X.at[0],y:X.at[1],z:gt,k:X.k,pri:X.k==="parcel"?0:X.k==="place"?1:2,on:!1,w:0,h:0}}),Xt=!0,Lt=null,Rt=(()=>{let[X,yt,gt,St]=s.meta.bbox,Ft=Math.ceil(gt-X)+1,Ot=Math.ceil(St-yt)+1,ae=new Float32Array(Ft*Ot).fill(-1e9),me=(jt,Xe)=>{let Kt=1e9,Se=1e9,Ne=-1e9,se=-1e9;for(let pe of jt)Kt=Math.min(Kt,pe[0]),Se=Math.min(Se,pe[1]),Ne=Math.max(Ne,pe[0]),se=Math.max(se,pe[1]);for(let pe=Math.max(0,Math.floor(Se-yt));pe<=Math.min(Ot-1,Math.ceil(se-yt));pe++)for(let Cn=Math.max(0,Math.floor(Kt-X));Cn<=Math.min(Ft-1,Math.ceil(Ne-X));Cn++)if(Hn([X+Cn+.5,yt+pe+.5],jt)){let Qe=pe*Ft+Cn;Xe>ae[Qe]&&(ae[Qe]=Xe)}};for(let jt of s.bld)me(jt.p,jt.ze+(jt.top-jt.ze)*.55);for(let jt of s.key)me(jt.p,jt.top-1.5);{let jt=s.nsm.tower;me(jt.p,jt.z+jt.h-4),me(jt.podium,jt.stair.zt)}{let jt=s.nsm.clock;me(jt.p,jt.z+jt.h-2)}return{at:(jt,Xe)=>{let Kt=Math.floor(jt-X),Se=Math.floor(Xe-yt);return Kt<0||Se<0||Kt>=Ft||Se>=Ot?-1e9:ae[Se*Ft+Kt]}}})(),Zt=()=>{let X=dt.position;return[X.x+De.x,X.z+De.y,X.y+De.z]};function ce(X,yt,gt,St){let Ft=X.x-yt,Ot=X.y-gt,ae=X.z-St,me=Math.hypot(Ft,Ot),jt=Math.max(2,Math.ceil(me/1.5));for(let Xe=1;Xe<jt-1;Xe++){let Kt=Xe/jt,Se=yt+Ft*Kt,Ne=gt+Ot*Kt,se=St+ae*Kt;if(me*(1-Kt)<6)break;if(Math.max(Rt.at(Se,Ne),O(Se,Ne))>se+.4)return!0}return!1}let Re=0,Me=new Y(1e9,0,0);function ei(X,yt){let gt=t.clientWidth,St=t.clientHeight,[Ft,Ot,ae]=Zt(),me=dt.position.distanceTo(Me)>.05,jt=yt||X-Re>(me?150:400),Xe=[];for(let Kt of kt)$i.copy(Kt.p).project(dt),Kt.sx=($i.x+1)/2*gt,Kt.sy=(1-$i.y)/2*St,Kt.front=$i.z<1&&Math.abs($i.x)<1.05&&Math.abs($i.y)<1.05,Kt.d=Math.hypot(Kt.x-Ft,Kt.y-Ot,Kt.z-ae);if(jt){Re=X,Me.copy(dt.position);let Kt=ae-O(Ft,Ot)<30,Se=[],Ne=kt.slice().sort((se,pe)=>se.pri-pe.pri||se.d-pe.d);for(let se of Ne){let pe=se.front&&(!Lt||Lt.has(se.k));if(pe&&se.k==="road"&&(Kt||se.d>320)&&(pe=!1),pe&&Kt&&se.d>(se.k==="parcel"?260:170)&&(pe=!1),pe&&(se.k!=="parcel"||Kt)&&ce(se,Ft,Ot,ae)&&(pe=!1),pe){se.w||(se.el.style.display="",se.w=se.el.offsetWidth||60,se.h=se.el.offsetHeight||18);let Cn=Math.max(.78,Math.min(1,1.12-se.d/900)),Qe=se.w*Cn+6,Ms=se.h*Cn+4,gi=[se.sx-Qe/2,se.sy-Ms,se.sx+Qe/2,se.sy];Se.some(oe=>gi[0]<oe[2]&&gi[2]>oe[0]&&gi[1]<oe[3]&&gi[3]>oe[1])?pe=!1:(Se.push(gi),se.sc=Cn)}se.on=pe}}for(let Kt of kt){let Se=Kt.on&&Kt.front;Kt.el.style.display=Se?"":"none",Se&&(Kt.el.style.transform=`translate(${Kt.sx.toFixed(1)}px,${Kt.sy.toFixed(1)}px) translate(-50%,-100%) scale(${(Kt.sc||1).toFixed(3)})`)}}let Nn=new hs,Vo=new Jt,Wn=null;a.domElement.addEventListener("pointerdown",X=>{Wn=[X.clientX,X.clientY]}),a.domElement.addEventListener("pointerup",X=>{if(!Wn||Math.hypot(X.clientX-Wn[0],X.clientY-Wn[1])>5)return;let yt=a.domElement.getBoundingClientRect();Vo.set((X.clientX-yt.left)/yt.width*2-1,-(X.clientY-yt.top)/yt.height*2+1),Nn.setFromCamera(Vo,dt);let gt=Nn.intersectObjects(rt,!1)[0],St=null;if(gt){let Ot=gt.object.geometry.userData.ids[gt.faceIndex];Ot>=0&&(St=k[Ot])}i.onPick&&i.onPick(St),Js(St)});let mi=new Gt(new ye(1,1,1,32,1,!0),new ci({color:"#ffd27a",transparent:!0,opacity:.35,side:qe,depthWrite:!1}));mi.visible=!1,p.add(mi);function Js(X){if(!X){mi.visible=!1;return}let[yt,gt]=X.c,St=T(yt,gt,X.z);mi.position.set(St[0],St[1]+(X.top-X.z)/2+.5,St[2]);let Ft=X.kind==="key"?12:6;mi.scale.set(Ft,X.top-X.z+3,Ft),mi.visible=!0}let Zr=!1;function js(X){Zr=X;for(let yt in Z){let gt=Z[yt],St=gt.geometry;if(!St.userData.c2||["soil","waterCut","cloth","lantern"].includes(yt)||!rt.includes(gt))continue;St.setAttribute("color",X?St.userData.c2:St.userData.c1);let Ot=gt.material;Ot.map=X?null:Ot.userData.map,Ot.emissiveMap=X?null:Ot.userData.em,Ot.emissiveIntensity=X?0:Ot.userData.ei,Ot.needsUpdate=!0}}function $r(X){for(let yt of ct)yt.visible=X;f()}let _s="";function Jr(){let X=Et.target,yt=dt.position.distanceTo(X),gt=Math.min(620,Math.max(70,Math.ceil(yt*.62/20)*20)),St=gt/64,Ft=Math.round(X.x/St)*St,Ot=Math.round(X.z/St)*St,ae=gt+","+Ft+","+Ot;if(ae===_s)return;_s=ae,f(),x.target.position.set(Ft,0,Ot),x.position.set(Ft+v.x*800,v.y*800,Ot+v.z*800),x.target.updateMatrixWorld(),x.updateMatrixWorld();let me=x.shadow.camera;me.left=-gt,me.right=gt,me.top=gt,me.bottom=-gt,me.near=200,me.far=1700,me.updateProjectionMatrix(),x.shadow.normalBias=.3+gt/700}function xs(){let X=t.clientWidth,yt=t.clientHeight;a.setSize(X,yt,!1),a.domElement.style.width=X+"px",a.domElement.style.height=yt+"px",dt.aspect=X/Math.max(1,yt),dt.updateProjectionMatrix()}let jr=new ResizeObserver(()=>{xs(),Ri||te(performance.now())});jr.observe(t),xs();let $i=new Y,Ks=!0,Ri=!0,Wo=performance.now(),ol=(()=>{try{let X=a.getContext(),yt=X.getExtension("WEBGL_debug_renderer_info");return yt?String(X.getParameter(yt.UNMASKED_RENDERER_WEBGL)):""}catch{return""}})(),B=!i.manual&&!i.keep&&!i.dpr&&!/swiftshader|llvmpipe|software/i.test(ol),at=c,_t=0,xt=16,lt=0,Nt=0,Vt=0,$t=0,Yt=c>=1.5?1:Math.min(c,.75),ne=new Float32Array(16);function ie(X){if(!Ri)return;requestAnimationFrame(ie);let yt=_t?X-_t:16;_t=X;let gt=dt.matrixWorld.elements,St=!Ut&&!(Pt.moving&&Pt.moving());for(let Ft=0;Ft<16;Ft++)Math.abs(gt[Ft]-ne[Ft])>1e-5&&(St=!1),ne[Ft]=gt[Ft];Vt=St?Vt+1:0,B&&!St&&yt<250&&!document.hidden&&(xt+=(yt-xt)*.1,xt>30?(lt+=yt,Nt=0,lt>1500&&at>Yt&&(at=Math.max(Yt,at-.25),a.setPixelRatio(at),xs(),lt=0,xt=20)):xt<18?(Nt+=yt,lt=0,Nt>8e3&&at<c&&(at=Math.min(c,at+.25),a.setPixelRatio(at),xs(),Nt=0)):(lt=0,Nt=0)),!(Vt>60&&$t++&1)&&te(X)}function te(X){let yt=Math.min(.05,(X-Wo)/1e3);if(Wo=X,Ut){let Ft=(X-Ut.t0)/Ut.dur;Ft>=1&&(Ft=1);let Ot=Ft<.5?4*Ft*Ft*Ft:1-Math.pow(-2*Ft+2,3)/2;dt.position.lerpVectors(Ut.p0,Ut.p1,Ot),Ut.arc&&(dt.position.y+=Math.sin(Math.PI*Ot)*Ut.arc),Et.target.lerpVectors(Ut.q0,Ut.q1,Ot),dt.fov=Ut.f0+(Ut.f1-Ut.f0)*Ot,dt.updateProjectionMatrix(),Ft>=1&&(Ut=null)}Pt.step(yt)||Et.update(),Jr();let St=X/1e3;for(let Ft of W)Ft(St);F&&F.update(dt.position.y+De.z,St),H.lod(dt.position.x+De.x,dt.position.z+De.y,dt.position.y+De.z),ct.lod&&ct.lod(dt.position)&&f();{let Ft=Pt.sig?Pt.sig():"",Ot=Ft!==u;Ot&&(u=Ft,h=!0),l>0?(a.shadowMap.needsUpdate=!0,l--,h=!1):h&&(!Ot||(++d&1)===0)&&(a.shadowMap.needsUpdate=!0,h=!1)}a.render(p,dt),Xt&&ei(X,!!Ks),Ks=!1}i.manual?Ri=!1:requestAnimationFrame(ie),i.onProgress&&i.onProgress(1);function he(X){Et.maxPolarAngle=Math.PI*(X?.62:.495),dt.near=X?.3:2,dt.far=X?3200:6e3,dt.updateProjectionMatrix()}return{S:s,PICK:k,VIEWS:Ht,camera:dt,controls:Et,renderer:a,scene:p,view:X=>{let yt=Ht[X];yt&&(he(!!yt.eye),It(yt))},viewNow:X=>{let yt=Ht[X];yt&&(he(!!yt.eye),It(yt,!0))},setNow:X=>{he(!!X.eye),It(X,!0)},anchor:(X,yt)=>{let gt=s.anchors.find(jt=>jt.id===X);if(!gt)return;let St=(gt.els||[]).find(jt=>jt.role==="\u4E3B"&&jt.tgt)||null,Ft=gt.ez||O(gt.at[0],gt.at[1])+1.7,Ot=Math.hypot(gt.look[0]-gt.at[0],gt.look[1]-gt.at[1])||1,ae=St&&Math.hypot(St.tgt[0]-gt.at[0],St.tgt[1]-gt.at[1])||Ot,me=St?Ft+(St.tgt[2]-Ft)*Math.min(1,Ot/ae)*.55:Ft-.4;he(!0),It({pos:[gt.at[0],gt.at[1],Ft],tgt:[gt.look[0],gt.look[1],me],fov:62,eye:1},yt)},flyTo:X=>{he(!!X.eye),It(X)},project:(X,yt,gt)=>{let St=new Y(...T(X,yt,gt)).project(dt);return{x:(St.x+1)/2,y:(1-St.y)/2,front:St.z<1&&St.z>-1}},flying:()=>!!Ut,rayZ:(X,yt,gt=200)=>{let St=new hs(new Y(...T(X,yt,gt)),new Y(0,-1,0)),Ft=[];p.traverseVisible(ae=>{ae.isMesh&&!ae.isInstancedMesh&&!ae.isSprite&&ae.name!=="backdrop5"&&Ft.push(ae)});let Ot=St.intersectObjects(Ft,!1).find(ae=>ae.object.parent!==Pt.hero.root);return Ot?+(Ot.point.y+De.z).toFixed(3):null},gz:(X,yt)=>O(X,yt),storey:js,trees:$r,labels:(X,yt)=>{Xt=X,et.style.display=X?"":"none",Lt=yt?new Set(yt):null,Ks=!0},render:()=>{Ut&&(Ut.t0=-1e9),Ks=!0,te(performance.now())},dispose:()=>{Ri=!1,jr.disconnect();try{Et.dispose()}catch{}a.dispose();try{a.forceContextLoss()}catch{}a.domElement.remove()},highlight:Js,pause:()=>{Ri=!1},resume:()=>{Ri||(Ri=!0,Wo=performance.now(),requestAnimationFrame(ie))},idCount:(X,yt={})=>{let gt=yt.w||400,St=yt.h||260,Ft=yt.trees||"screen",Ot=new Yn(gt,St),ae=oe=>new ci({color:oe,toneMapped:!1,fog:!1,side:qe}),me=ae(yt.blk??0),jt=ae(16711680),Xe=ae(65280),Kt=ae(255),Se=[],Ne=[];p.traverse(oe=>{if(!(oe.isMesh||oe.isLine||oe.isPoints||oe.isSprite))return;if(Se.push([oe,oe.material,oe.visible]),oe.isInstancedMesh){oe.visible=oe.visible&&(Ft==="all"||Ft==="screen"&&oe.userData.sp==="screen"),oe.material=me;return}if(!oe.isMesh){oe.visible=!1;return}let Fn=oe.geometry.userData&&oe.geometry.userData.ids;if(Fn&&Fn.some(Ci=>Ci>=1e6)){if(!oe.geometry.userData.idSplit){let Ci=oe.geometry.attributes.position.array,gn=[0,0,0,0],En=new Uint8Array(Fn.length);for(let un=0;un<Fn.length;un++)En[un]=Fn[un]===1e6?1:Fn[un]===1000001?2:Fn[un]===1000002?3:0,gn[En[un]]++;let Pi=gn.map(un=>new Float32Array(un*9)),yi=[0,0,0,0];for(let un=0;un<Fn.length;un++){let vs=En[un];Pi[vs].set(Ci.subarray(un*9,un*9+9),yi[vs]*9),yi[vs]++}oe.geometry.userData.idSplit=Pi.map(un=>{let vs=new Ye;return vs.setAttribute("position",new We(un,3)),vs.computeBoundingSphere(),vs})}oe.geometry.userData.idSplit.forEach((Ci,gn)=>{if(!Ci.attributes.position.count||gn!==1&&yt.only)return;let En=new Gt(Ci,[me,jt,Xe,Kt][gn]);En.matrixAutoUpdate=!1,En.matrix.copy(oe.matrixWorld),En.frustumCulled=!1,Ne.push(En)}),oe.visible=!1;return}if(oe.userData.tag==="T9"){oe.material=jt;return}let Ji=Array.isArray(oe.material)?oe.material[0]:oe.material;if(Ji&&(Ji.transparent||Ji.opacity<1)){oe.visible=!1;return}if(yt.only){oe.visible=!1;return}oe.material=me});for(let oe of Ne)p.add(oe);let se=p.background,pe=p.fog,Cn=a.shadowMap.autoUpdate;p.background=new ee(yt.bg??0),p.fog=null,a.shadowMap.autoUpdate=!1;let Qe=new rn(40,gt/St,.2,4e3),Ms=new Uint8Array(gt*St*4),gi=[];for(let oe of X){Qe.fov=oe.fov||40,Qe.updateProjectionMatrix(),Qe.position.set(...T(...oe.pos)),Qe.lookAt(new Y(...T(...oe.tgt))),a.setRenderTarget(Ot),a.clear(),a.render(p,Qe),a.readRenderTargetPixels(Ot,0,0,gt,St,Ms);let Fn=0,Ji=0,Ci=0;for(let gn=0;gn<gt*St;gn++){let En=Ms[gn*4],Pi=Ms[gn*4+1],yi=Ms[gn*4+2];En>140&&Pi<90?Fn++:Pi>140&&En<90?Ji++:yi>140&&En<90&&Pi<90&&Ci++}if(gi.push([Fn,Ji,Ci]),yt.dump){let gn=document.createElement("canvas");gn.width=gt,gn.height=St;let En=gn.getContext("2d"),Pi=En.createImageData(gt,St);for(let yi=0;yi<St;yi++)Pi.data.set(Ms.subarray((St-1-yi)*gt*4,(St-yi)*gt*4),yi*gt*4);En.putImageData(Pi,0,0),gi[gi.length-1].push(gn.toDataURL())}}a.setRenderTarget(null),Ot.dispose();for(let oe of Ne)p.remove(oe);for(let[oe,Fn,Ji]of Se)oe.material=Fn,oe.visible=Ji;return p.background=se,p.fog=pe,a.shadowMap.autoUpdate=Cn,a.shadowMap.needsUpdate=!0,gi},_scene:()=>p,gz:O,script:X=>Pt.script(X),scriptStop:()=>Pt.scriptStop(),scripting:()=>Pt.scripting(),walk:{play:X=>Pt.scriptPlay(X),seek:X=>Pt.scriptSeek(X),free:X=>Pt.scriptFree(X),at:X=>Pt.scriptAt(X)},figures:Pt.figures,hero:Pt.hero,unstand:()=>he(!1),tea:(X,yt)=>z(X,yt),chest:X=>{q&&q.set(X),f()},shadowDirty:f,ray:(X,yt)=>{let gt=new Y(...T(...X)),St=new Y(...T(...yt)),Ft=St.clone().sub(gt),Ot=Ft.length();Ft.normalize();let ae=new hs(gt,Ft,0,Ot),me=[];p.traverse(Xe=>{Xe.isMesh&&Xe.visible&&!Xe.isSprite&&me.push(Xe)});let jt=ae.intersectObjects(me,!1)[0];return jt?{d:+jt.distance.toFixed(2),L:+Ot.toFixed(2),key:jt.object.userData.key||jt.object.name||jt.object.parent&&jt.object.parent.name||jt.object.type,p:[+(jt.point.x+De.x).toFixed(2),+(jt.point.z+De.y).toFixed(2),+(jt.point.y+De.z).toFixed(2)]}:null},camPlan:()=>{let X=dt.position;return[+(X.x+De.x).toFixed(2),+(X.z+De.y).toFixed(2),+(X.y+De.z).toFixed(2)]},surf:(X,yt)=>{let gt=new hs(new Y(...T(X,yt,300)),new Y(0,-1,0)),St=[];p.traverse(Ot=>{Ot.isMesh&&Ot.visible&&!Ot.isSprite&&!Ot.isInstancedMesh&&St.push(Ot)});let Ft=gt.intersectObjects(St,!1).find(Ot=>!(Ot.object.parent&&(Ot.object.parent.name==="hero"||Ot.object.parent.userData.spin)));return Ft?+(Ft.point.y+De.z).toFixed(2):null},focusPick:X=>{if(!X)return;let[yt,gt]=X.c;he(!1),It({pos:[yt+38,gt+62,X.top+44],tgt:[yt,gt,X.z+4],fov:32}),Js(X)}}}function O_(i){return{art:{pos:[268,492,300],tgt:[254,134,26],fov:38},top:{pos:[241,131,760],tgt:[241,129,30],fov:34},tower:{pos:[300,214,78],tgt:[214,140,62],fov:44},plaza:{pos:[292,178,52],tgt:[244,140,36],fov:46},market:{pos:[300,292,72],tgt:[250,214,26],fov:44},clock:{pos:[428,178,58],tgt:[474,114,42],fov:44},fort:{pos:[138,142,96],tgt:[61,60,56],fov:44},camp:{pos:[446,190,62],tgt:[412,132,28],fov:44},road:{pos:[304,302,38],tgt:[248,268,27],fov:48},home:{pos:[598,168,64],tgt:[486,120,38],fov:46}}}function z_(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d"),e=t.createRadialGradient(256,236,30,256,256,380);e.addColorStop(0,"#ece4d7"),e.addColorStop(.6,"#d6cbbb"),e.addColorStop(1,"#a99b88"),t.fillStyle=e,t.fillRect(0,0,512,512);let n=new Dn(i);return n.colorSpace=ke,n}function k_(){let i=document.createElement("canvas");i.width=i.height=256;let t=i.getContext("2d"),e=t.createRadialGradient(128,128,60,128,128,128);return e.addColorStop(0,"rgba(40,30,20,0.9)"),e.addColorStop(.55,"rgba(40,30,20,0.55)"),e.addColorStop(1,"rgba(40,30,20,0)"),t.fillStyle=e,t.fillRect(0,0,256,256),new Dn(i)}function H_(){let i=document.createElement("canvas");i.width=64,i.height=256;let t=i.getContext("2d"),e=(()=>{let o=7;return()=>(o=o*16807%2147483647)/2147483647})(),n=0;for(;n<256;){let o=6+e()*26,r=30+e()*14;t.fillStyle=`hsl(${26+e()*8},${22+e()*10}%,${r}%)`,t.fillRect(0,n,64,o),n+=o}for(let o=0;o<300;o++)t.fillStyle=e()<.5?"rgba(0,0,0,.12)":"rgba(255,255,255,.08)",t.fillRect(e()*64,e()*256,2,2);let s=new Dn(i);return s.colorSpace=ke,s.wrapS=s.wrapT=ki,s}window.SandBox={boot:B_};window.NS3D=window.SandBox;try{delete window.SandBox}catch{window.SandBox=void 0}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
