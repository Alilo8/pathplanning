(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))_(x);new MutationObserver(x=>{for(const v of x)if(v.type==="childList")for(const y of v.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&_(y)}).observe(document,{childList:!0,subtree:!0});function m(x){const v={};return x.integrity&&(v.integrity=x.integrity),x.referrerPolicy&&(v.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?v.credentials="include":x.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function _(x){if(x.ep)return;x.ep=!0;const v=m(x);fetch(x.href,v)}})();const simulator="";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="150",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,RED_RGTC1_Format=36283,SIGNED_RED_RGTC1_Format=36284,RED_GREEN_RGTC2_Format=36285,SIGNED_RED_GREEN_RGTC2_Format=36286,InterpolateDiscrete=2300,InterpolateLinear=2301,InterpolateSmooth=2302,ZeroCurvatureEnding=2400,ZeroSlopeEnding=2401,WrapAroundEnding=2402,NormalAnimationBlendMode=2500,TrianglesDrawMode=0,TriangleStripDrawMode=1,TriangleFanDrawMode=2,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",DisplayP3ColorSpace="display-p3",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(f,m){this._listeners===void 0&&(this._listeners={});const _=this._listeners;_[f]===void 0&&(_[f]=[]),_[f].indexOf(m)===-1&&_[f].push(m)}hasEventListener(f,m){if(this._listeners===void 0)return!1;const _=this._listeners;return _[f]!==void 0&&_[f].indexOf(m)!==-1}removeEventListener(f,m){if(this._listeners===void 0)return;const x=this._listeners[f];if(x!==void 0){const v=x.indexOf(m);v!==-1&&x.splice(v,1)}}dispatchEvent(f){if(this._listeners===void 0)return;const _=this._listeners[f.type];if(_!==void 0){f.target=this;const x=_.slice(0);for(let v=0,y=x.length;v<y;v++)x[v].call(this,f);f.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _seed=1234567;const DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const b=Math.random()*4294967295|0,f=Math.random()*4294967295|0,m=Math.random()*4294967295|0,_=Math.random()*4294967295|0;return(_lut[b&255]+_lut[b>>8&255]+_lut[b>>16&255]+_lut[b>>24&255]+"-"+_lut[f&255]+_lut[f>>8&255]+"-"+_lut[f>>16&15|64]+_lut[f>>24&255]+"-"+_lut[m&63|128]+_lut[m>>8&255]+"-"+_lut[m>>16&255]+_lut[m>>24&255]+_lut[_&255]+_lut[_>>8&255]+_lut[_>>16&255]+_lut[_>>24&255]).toLowerCase()}function clamp(b,f,m){return Math.max(f,Math.min(m,b))}function euclideanModulo(b,f){return(b%f+f)%f}function mapLinear(b,f,m,_,x){return _+(b-f)*(x-_)/(m-f)}function inverseLerp(b,f,m){return b!==f?(m-b)/(f-b):0}function lerp(b,f,m){return(1-m)*b+m*f}function damp(b,f,m,_){return lerp(b,f,1-Math.exp(-m*_))}function pingpong(b,f=1){return f-Math.abs(euclideanModulo(b,f*2)-f)}function smoothstep(b,f,m){return b<=f?0:b>=m?1:(b=(b-f)/(m-f),b*b*(3-2*b))}function smootherstep(b,f,m){return b<=f?0:b>=m?1:(b=(b-f)/(m-f),b*b*b*(b*(b*6-15)+10))}function randInt(b,f){return b+Math.floor(Math.random()*(f-b+1))}function randFloat(b,f){return b+Math.random()*(f-b)}function randFloatSpread(b){return b*(.5-Math.random())}function seededRandom(b){b!==void 0&&(_seed=b);let f=_seed+=1831565813;return f=Math.imul(f^f>>>15,f|1),f^=f+Math.imul(f^f>>>7,f|61),((f^f>>>14)>>>0)/4294967296}function degToRad(b){return b*DEG2RAD}function radToDeg(b){return b*RAD2DEG}function isPowerOfTwo(b){return(b&b-1)===0&&b!==0}function ceilPowerOfTwo(b){return Math.pow(2,Math.ceil(Math.log(b)/Math.LN2))}function floorPowerOfTwo(b){return Math.pow(2,Math.floor(Math.log(b)/Math.LN2))}function setQuaternionFromProperEuler(b,f,m,_,x){const v=Math.cos,y=Math.sin,M=v(m/2),S=y(m/2),w=v((f+_)/2),T=y((f+_)/2),A=v((f-_)/2),E=y((f-_)/2),R=v((_-f)/2),P=y((_-f)/2);switch(x){case"XYX":b.set(M*T,S*A,S*E,M*w);break;case"YZY":b.set(S*E,M*T,S*A,M*w);break;case"ZXZ":b.set(S*A,S*E,M*T,M*w);break;case"XZX":b.set(M*T,S*P,S*R,M*w);break;case"YXY":b.set(S*R,M*T,S*P,M*w);break;case"ZYZ":b.set(S*P,S*R,M*T,M*w);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+x)}}function denormalize(b,f){switch(f.constructor){case Float32Array:return b;case Uint16Array:return b/65535;case Uint8Array:return b/255;case Int16Array:return Math.max(b/32767,-1);case Int8Array:return Math.max(b/127,-1);default:throw new Error("Invalid component type.")}}function normalize(b,f){switch(f.constructor){case Float32Array:return b;case Uint16Array:return Math.round(b*65535);case Uint8Array:return Math.round(b*255);case Int16Array:return Math.round(b*32767);case Int8Array:return Math.round(b*127);default:throw new Error("Invalid component type.")}}const MathUtils={DEG2RAD,RAD2DEG,generateUUID,clamp,euclideanModulo,mapLinear,inverseLerp,lerp,damp,pingpong,smoothstep,smootherstep,randInt,randFloat,randFloatSpread,seededRandom,degToRad,radToDeg,isPowerOfTwo,ceilPowerOfTwo,floorPowerOfTwo,setQuaternionFromProperEuler,normalize,denormalize};class Vector2{constructor(f=0,m=0){Vector2.prototype.isVector2=!0,this.x=f,this.y=m}get width(){return this.x}set width(f){this.x=f}get height(){return this.y}set height(f){this.y=f}set(f,m){return this.x=f,this.y=m,this}setScalar(f){return this.x=f,this.y=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setComponent(f,m){switch(f){case 0:this.x=m;break;case 1:this.y=m;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y)}copy(f){return this.x=f.x,this.y=f.y,this}add(f){return this.x+=f.x,this.y+=f.y,this}addScalar(f){return this.x+=f,this.y+=f,this}addVectors(f,m){return this.x=f.x+m.x,this.y=f.y+m.y,this}addScaledVector(f,m){return this.x+=f.x*m,this.y+=f.y*m,this}sub(f){return this.x-=f.x,this.y-=f.y,this}subScalar(f){return this.x-=f,this.y-=f,this}subVectors(f,m){return this.x=f.x-m.x,this.y=f.y-m.y,this}multiply(f){return this.x*=f.x,this.y*=f.y,this}multiplyScalar(f){return this.x*=f,this.y*=f,this}divide(f){return this.x/=f.x,this.y/=f.y,this}divideScalar(f){return this.multiplyScalar(1/f)}applyMatrix3(f){const m=this.x,_=this.y,x=f.elements;return this.x=x[0]*m+x[3]*_+x[6],this.y=x[1]*m+x[4]*_+x[7],this}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this}clamp(f,m){return this.x=Math.max(f.x,Math.min(m.x,this.x)),this.y=Math.max(f.y,Math.min(m.y,this.y)),this}clampScalar(f,m){return this.x=Math.max(f,Math.min(m,this.x)),this.y=Math.max(f,Math.min(m,this.y)),this}clampLength(f,m){const _=this.length();return this.divideScalar(_||1).multiplyScalar(Math.max(f,Math.min(m,_)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(f){return this.x*f.x+this.y*f.y}cross(f){return this.x*f.y-this.y*f.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(f){return Math.sqrt(this.distanceToSquared(f))}distanceToSquared(f){const m=this.x-f.x,_=this.y-f.y;return m*m+_*_}manhattanDistanceTo(f){return Math.abs(this.x-f.x)+Math.abs(this.y-f.y)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,m){return this.x+=(f.x-this.x)*m,this.y+=(f.y-this.y)*m,this}lerpVectors(f,m,_){return this.x=f.x+(m.x-f.x)*_,this.y=f.y+(m.y-f.y)*_,this}equals(f){return f.x===this.x&&f.y===this.y}fromArray(f,m=0){return this.x=f[m],this.y=f[m+1],this}toArray(f=[],m=0){return f[m]=this.x,f[m+1]=this.y,f}fromBufferAttribute(f,m){return this.x=f.getX(m),this.y=f.getY(m),this}rotateAround(f,m){const _=Math.cos(m),x=Math.sin(m),v=this.x-f.x,y=this.y-f.y;return this.x=v*_-y*x+f.x,this.y=v*x+y*_+f.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(f,m,_,x,v,y,M,S,w){const T=this.elements;return T[0]=f,T[1]=x,T[2]=M,T[3]=m,T[4]=v,T[5]=S,T[6]=_,T[7]=y,T[8]=w,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(f){const m=this.elements,_=f.elements;return m[0]=_[0],m[1]=_[1],m[2]=_[2],m[3]=_[3],m[4]=_[4],m[5]=_[5],m[6]=_[6],m[7]=_[7],m[8]=_[8],this}extractBasis(f,m,_){return f.setFromMatrix3Column(this,0),m.setFromMatrix3Column(this,1),_.setFromMatrix3Column(this,2),this}setFromMatrix4(f){const m=f.elements;return this.set(m[0],m[4],m[8],m[1],m[5],m[9],m[2],m[6],m[10]),this}multiply(f){return this.multiplyMatrices(this,f)}premultiply(f){return this.multiplyMatrices(f,this)}multiplyMatrices(f,m){const _=f.elements,x=m.elements,v=this.elements,y=_[0],M=_[3],S=_[6],w=_[1],T=_[4],A=_[7],E=_[2],R=_[5],P=_[8],C=x[0],L=x[3],D=x[6],U=x[1],I=x[4],O=x[7],V=x[2],H=x[5],$=x[8];return v[0]=y*C+M*U+S*V,v[3]=y*L+M*I+S*H,v[6]=y*D+M*O+S*$,v[1]=w*C+T*U+A*V,v[4]=w*L+T*I+A*H,v[7]=w*D+T*O+A*$,v[2]=E*C+R*U+P*V,v[5]=E*L+R*I+P*H,v[8]=E*D+R*O+P*$,this}multiplyScalar(f){const m=this.elements;return m[0]*=f,m[3]*=f,m[6]*=f,m[1]*=f,m[4]*=f,m[7]*=f,m[2]*=f,m[5]*=f,m[8]*=f,this}determinant(){const f=this.elements,m=f[0],_=f[1],x=f[2],v=f[3],y=f[4],M=f[5],S=f[6],w=f[7],T=f[8];return m*y*T-m*M*w-_*v*T+_*M*S+x*v*w-x*y*S}invert(){const f=this.elements,m=f[0],_=f[1],x=f[2],v=f[3],y=f[4],M=f[5],S=f[6],w=f[7],T=f[8],A=T*y-M*w,E=M*S-T*v,R=w*v-y*S,P=m*A+_*E+x*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/P;return f[0]=A*C,f[1]=(x*w-T*_)*C,f[2]=(M*_-x*y)*C,f[3]=E*C,f[4]=(T*m-x*S)*C,f[5]=(x*v-M*m)*C,f[6]=R*C,f[7]=(_*S-w*m)*C,f[8]=(y*m-_*v)*C,this}transpose(){let f;const m=this.elements;return f=m[1],m[1]=m[3],m[3]=f,f=m[2],m[2]=m[6],m[6]=f,f=m[5],m[5]=m[7],m[7]=f,this}getNormalMatrix(f){return this.setFromMatrix4(f).invert().transpose()}transposeIntoArray(f){const m=this.elements;return f[0]=m[0],f[1]=m[3],f[2]=m[6],f[3]=m[1],f[4]=m[4],f[5]=m[7],f[6]=m[2],f[7]=m[5],f[8]=m[8],this}setUvTransform(f,m,_,x,v,y,M){const S=Math.cos(v),w=Math.sin(v);return this.set(_*S,_*w,-_*(S*y+w*M)+y+f,-x*w,x*S,-x*(-w*y+S*M)+M+m,0,0,1),this}scale(f,m){return this.premultiply(_m3.makeScale(f,m)),this}rotate(f){return this.premultiply(_m3.makeRotation(-f)),this}translate(f,m){return this.premultiply(_m3.makeTranslation(f,m)),this}makeTranslation(f,m){return this.set(1,0,f,0,1,m,0,0,1),this}makeRotation(f){const m=Math.cos(f),_=Math.sin(f);return this.set(m,-_,0,_,m,0,0,0,1),this}makeScale(f,m){return this.set(f,0,0,0,m,0,0,0,1),this}equals(f){const m=this.elements,_=f.elements;for(let x=0;x<9;x++)if(m[x]!==_[x])return!1;return!0}fromArray(f,m=0){for(let _=0;_<9;_++)this.elements[_]=f[_+m];return this}toArray(f=[],m=0){const _=this.elements;return f[m]=_[0],f[m+1]=_[1],f[m+2]=_[2],f[m+3]=_[3],f[m+4]=_[4],f[m+5]=_[5],f[m+6]=_[6],f[m+7]=_[7],f[m+8]=_[8],f}clone(){return new this.constructor().fromArray(this.elements)}}const _m3=new Matrix3;function arrayNeedsUint32(b){for(let f=b.length-1;f>=0;--f)if(b[f]>=65535)return!0;return!1}function createElementNS(b){return document.createElementNS("http://www.w3.org/1999/xhtml",b)}class Quaternion{constructor(f=0,m=0,_=0,x=1){this.isQuaternion=!0,this._x=f,this._y=m,this._z=_,this._w=x}static slerpFlat(f,m,_,x,v,y,M){let S=_[x+0],w=_[x+1],T=_[x+2],A=_[x+3];const E=v[y+0],R=v[y+1],P=v[y+2],C=v[y+3];if(M===0){f[m+0]=S,f[m+1]=w,f[m+2]=T,f[m+3]=A;return}if(M===1){f[m+0]=E,f[m+1]=R,f[m+2]=P,f[m+3]=C;return}if(A!==C||S!==E||w!==R||T!==P){let L=1-M;const D=S*E+w*R+T*P+A*C,U=D>=0?1:-1,I=1-D*D;if(I>Number.EPSILON){const V=Math.sqrt(I),H=Math.atan2(V,D*U);L=Math.sin(L*H)/V,M=Math.sin(M*H)/V}const O=M*U;if(S=S*L+E*O,w=w*L+R*O,T=T*L+P*O,A=A*L+C*O,L===1-M){const V=1/Math.sqrt(S*S+w*w+T*T+A*A);S*=V,w*=V,T*=V,A*=V}}f[m]=S,f[m+1]=w,f[m+2]=T,f[m+3]=A}static multiplyQuaternionsFlat(f,m,_,x,v,y){const M=_[x],S=_[x+1],w=_[x+2],T=_[x+3],A=v[y],E=v[y+1],R=v[y+2],P=v[y+3];return f[m]=M*P+T*A+S*R-w*E,f[m+1]=S*P+T*E+w*A-M*R,f[m+2]=w*P+T*R+M*E-S*A,f[m+3]=T*P-M*A-S*E-w*R,f}get x(){return this._x}set x(f){this._x=f,this._onChangeCallback()}get y(){return this._y}set y(f){this._y=f,this._onChangeCallback()}get z(){return this._z}set z(f){this._z=f,this._onChangeCallback()}get w(){return this._w}set w(f){this._w=f,this._onChangeCallback()}set(f,m,_,x){return this._x=f,this._y=m,this._z=_,this._w=x,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(f){return this._x=f.x,this._y=f.y,this._z=f.z,this._w=f.w,this._onChangeCallback(),this}setFromEuler(f,m){const _=f._x,x=f._y,v=f._z,y=f._order,M=Math.cos,S=Math.sin,w=M(_/2),T=M(x/2),A=M(v/2),E=S(_/2),R=S(x/2),P=S(v/2);switch(y){case"XYZ":this._x=E*T*A+w*R*P,this._y=w*R*A-E*T*P,this._z=w*T*P+E*R*A,this._w=w*T*A-E*R*P;break;case"YXZ":this._x=E*T*A+w*R*P,this._y=w*R*A-E*T*P,this._z=w*T*P-E*R*A,this._w=w*T*A+E*R*P;break;case"ZXY":this._x=E*T*A-w*R*P,this._y=w*R*A+E*T*P,this._z=w*T*P+E*R*A,this._w=w*T*A-E*R*P;break;case"ZYX":this._x=E*T*A-w*R*P,this._y=w*R*A+E*T*P,this._z=w*T*P-E*R*A,this._w=w*T*A+E*R*P;break;case"YZX":this._x=E*T*A+w*R*P,this._y=w*R*A+E*T*P,this._z=w*T*P-E*R*A,this._w=w*T*A-E*R*P;break;case"XZY":this._x=E*T*A-w*R*P,this._y=w*R*A-E*T*P,this._z=w*T*P+E*R*A,this._w=w*T*A+E*R*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+y)}return m!==!1&&this._onChangeCallback(),this}setFromAxisAngle(f,m){const _=m/2,x=Math.sin(_);return this._x=f.x*x,this._y=f.y*x,this._z=f.z*x,this._w=Math.cos(_),this._onChangeCallback(),this}setFromRotationMatrix(f){const m=f.elements,_=m[0],x=m[4],v=m[8],y=m[1],M=m[5],S=m[9],w=m[2],T=m[6],A=m[10],E=_+M+A;if(E>0){const R=.5/Math.sqrt(E+1);this._w=.25/R,this._x=(T-S)*R,this._y=(v-w)*R,this._z=(y-x)*R}else if(_>M&&_>A){const R=2*Math.sqrt(1+_-M-A);this._w=(T-S)/R,this._x=.25*R,this._y=(x+y)/R,this._z=(v+w)/R}else if(M>A){const R=2*Math.sqrt(1+M-_-A);this._w=(v-w)/R,this._x=(x+y)/R,this._y=.25*R,this._z=(S+T)/R}else{const R=2*Math.sqrt(1+A-_-M);this._w=(y-x)/R,this._x=(v+w)/R,this._y=(S+T)/R,this._z=.25*R}return this._onChangeCallback(),this}setFromUnitVectors(f,m){let _=f.dot(m)+1;return _<Number.EPSILON?(_=0,Math.abs(f.x)>Math.abs(f.z)?(this._x=-f.y,this._y=f.x,this._z=0,this._w=_):(this._x=0,this._y=-f.z,this._z=f.y,this._w=_)):(this._x=f.y*m.z-f.z*m.y,this._y=f.z*m.x-f.x*m.z,this._z=f.x*m.y-f.y*m.x,this._w=_),this.normalize()}angleTo(f){return 2*Math.acos(Math.abs(clamp(this.dot(f),-1,1)))}rotateTowards(f,m){const _=this.angleTo(f);if(_===0)return this;const x=Math.min(1,m/_);return this.slerp(f,x),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(f){return this._x*f._x+this._y*f._y+this._z*f._z+this._w*f._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let f=this.length();return f===0?(this._x=0,this._y=0,this._z=0,this._w=1):(f=1/f,this._x=this._x*f,this._y=this._y*f,this._z=this._z*f,this._w=this._w*f),this._onChangeCallback(),this}multiply(f){return this.multiplyQuaternions(this,f)}premultiply(f){return this.multiplyQuaternions(f,this)}multiplyQuaternions(f,m){const _=f._x,x=f._y,v=f._z,y=f._w,M=m._x,S=m._y,w=m._z,T=m._w;return this._x=_*T+y*M+x*w-v*S,this._y=x*T+y*S+v*M-_*w,this._z=v*T+y*w+_*S-x*M,this._w=y*T-_*M-x*S-v*w,this._onChangeCallback(),this}slerp(f,m){if(m===0)return this;if(m===1)return this.copy(f);const _=this._x,x=this._y,v=this._z,y=this._w;let M=y*f._w+_*f._x+x*f._y+v*f._z;if(M<0?(this._w=-f._w,this._x=-f._x,this._y=-f._y,this._z=-f._z,M=-M):this.copy(f),M>=1)return this._w=y,this._x=_,this._y=x,this._z=v,this;const S=1-M*M;if(S<=Number.EPSILON){const R=1-m;return this._w=R*y+m*this._w,this._x=R*_+m*this._x,this._y=R*x+m*this._y,this._z=R*v+m*this._z,this.normalize(),this._onChangeCallback(),this}const w=Math.sqrt(S),T=Math.atan2(w,M),A=Math.sin((1-m)*T)/w,E=Math.sin(m*T)/w;return this._w=y*A+this._w*E,this._x=_*A+this._x*E,this._y=x*A+this._y*E,this._z=v*A+this._z*E,this._onChangeCallback(),this}slerpQuaternions(f,m,_){return this.copy(f).slerp(m,_)}random(){const f=Math.random(),m=Math.sqrt(1-f),_=Math.sqrt(f),x=2*Math.PI*Math.random(),v=2*Math.PI*Math.random();return this.set(m*Math.cos(x),_*Math.sin(v),_*Math.cos(v),m*Math.sin(x))}equals(f){return f._x===this._x&&f._y===this._y&&f._z===this._z&&f._w===this._w}fromArray(f,m=0){return this._x=f[m],this._y=f[m+1],this._z=f[m+2],this._w=f[m+3],this._onChangeCallback(),this}toArray(f=[],m=0){return f[m]=this._x,f[m+1]=this._y,f[m+2]=this._z,f[m+3]=this._w,f}fromBufferAttribute(f,m){return this._x=f.getX(m),this._y=f.getY(m),this._z=f.getZ(m),this._w=f.getW(m),this}_onChange(f){return this._onChangeCallback=f,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(f=0,m=0,_=0){Vector3.prototype.isVector3=!0,this.x=f,this.y=m,this.z=_}set(f,m,_){return _===void 0&&(_=this.z),this.x=f,this.y=m,this.z=_,this}setScalar(f){return this.x=f,this.y=f,this.z=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setZ(f){return this.z=f,this}setComponent(f,m){switch(f){case 0:this.x=m;break;case 1:this.y=m;break;case 2:this.z=m;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(f){return this.x=f.x,this.y=f.y,this.z=f.z,this}add(f){return this.x+=f.x,this.y+=f.y,this.z+=f.z,this}addScalar(f){return this.x+=f,this.y+=f,this.z+=f,this}addVectors(f,m){return this.x=f.x+m.x,this.y=f.y+m.y,this.z=f.z+m.z,this}addScaledVector(f,m){return this.x+=f.x*m,this.y+=f.y*m,this.z+=f.z*m,this}sub(f){return this.x-=f.x,this.y-=f.y,this.z-=f.z,this}subScalar(f){return this.x-=f,this.y-=f,this.z-=f,this}subVectors(f,m){return this.x=f.x-m.x,this.y=f.y-m.y,this.z=f.z-m.z,this}multiply(f){return this.x*=f.x,this.y*=f.y,this.z*=f.z,this}multiplyScalar(f){return this.x*=f,this.y*=f,this.z*=f,this}multiplyVectors(f,m){return this.x=f.x*m.x,this.y=f.y*m.y,this.z=f.z*m.z,this}applyEuler(f){return this.applyQuaternion(_quaternion$4.setFromEuler(f))}applyAxisAngle(f,m){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(f,m))}applyMatrix3(f){const m=this.x,_=this.y,x=this.z,v=f.elements;return this.x=v[0]*m+v[3]*_+v[6]*x,this.y=v[1]*m+v[4]*_+v[7]*x,this.z=v[2]*m+v[5]*_+v[8]*x,this}applyNormalMatrix(f){return this.applyMatrix3(f).normalize()}applyMatrix4(f){const m=this.x,_=this.y,x=this.z,v=f.elements,y=1/(v[3]*m+v[7]*_+v[11]*x+v[15]);return this.x=(v[0]*m+v[4]*_+v[8]*x+v[12])*y,this.y=(v[1]*m+v[5]*_+v[9]*x+v[13])*y,this.z=(v[2]*m+v[6]*_+v[10]*x+v[14])*y,this}applyQuaternion(f){const m=this.x,_=this.y,x=this.z,v=f.x,y=f.y,M=f.z,S=f.w,w=S*m+y*x-M*_,T=S*_+M*m-v*x,A=S*x+v*_-y*m,E=-v*m-y*_-M*x;return this.x=w*S+E*-v+T*-M-A*-y,this.y=T*S+E*-y+A*-v-w*-M,this.z=A*S+E*-M+w*-y-T*-v,this}project(f){return this.applyMatrix4(f.matrixWorldInverse).applyMatrix4(f.projectionMatrix)}unproject(f){return this.applyMatrix4(f.projectionMatrixInverse).applyMatrix4(f.matrixWorld)}transformDirection(f){const m=this.x,_=this.y,x=this.z,v=f.elements;return this.x=v[0]*m+v[4]*_+v[8]*x,this.y=v[1]*m+v[5]*_+v[9]*x,this.z=v[2]*m+v[6]*_+v[10]*x,this.normalize()}divide(f){return this.x/=f.x,this.y/=f.y,this.z/=f.z,this}divideScalar(f){return this.multiplyScalar(1/f)}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this.z=Math.min(this.z,f.z),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this.z=Math.max(this.z,f.z),this}clamp(f,m){return this.x=Math.max(f.x,Math.min(m.x,this.x)),this.y=Math.max(f.y,Math.min(m.y,this.y)),this.z=Math.max(f.z,Math.min(m.z,this.z)),this}clampScalar(f,m){return this.x=Math.max(f,Math.min(m,this.x)),this.y=Math.max(f,Math.min(m,this.y)),this.z=Math.max(f,Math.min(m,this.z)),this}clampLength(f,m){const _=this.length();return this.divideScalar(_||1).multiplyScalar(Math.max(f,Math.min(m,_)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(f){return this.x*f.x+this.y*f.y+this.z*f.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,m){return this.x+=(f.x-this.x)*m,this.y+=(f.y-this.y)*m,this.z+=(f.z-this.z)*m,this}lerpVectors(f,m,_){return this.x=f.x+(m.x-f.x)*_,this.y=f.y+(m.y-f.y)*_,this.z=f.z+(m.z-f.z)*_,this}cross(f){return this.crossVectors(this,f)}crossVectors(f,m){const _=f.x,x=f.y,v=f.z,y=m.x,M=m.y,S=m.z;return this.x=x*S-v*M,this.y=v*y-_*S,this.z=_*M-x*y,this}projectOnVector(f){const m=f.lengthSq();if(m===0)return this.set(0,0,0);const _=f.dot(this)/m;return this.copy(f).multiplyScalar(_)}projectOnPlane(f){return _vector$d.copy(this).projectOnVector(f),this.sub(_vector$d)}reflect(f){return this.sub(_vector$d.copy(f).multiplyScalar(2*this.dot(f)))}angleTo(f){const m=Math.sqrt(this.lengthSq()*f.lengthSq());if(m===0)return Math.PI/2;const _=this.dot(f)/m;return Math.acos(clamp(_,-1,1))}distanceTo(f){return Math.sqrt(this.distanceToSquared(f))}distanceToSquared(f){const m=this.x-f.x,_=this.y-f.y,x=this.z-f.z;return m*m+_*_+x*x}manhattanDistanceTo(f){return Math.abs(this.x-f.x)+Math.abs(this.y-f.y)+Math.abs(this.z-f.z)}setFromSpherical(f){return this.setFromSphericalCoords(f.radius,f.phi,f.theta)}setFromSphericalCoords(f,m,_){const x=Math.sin(m)*f;return this.x=x*Math.sin(_),this.y=Math.cos(m)*f,this.z=x*Math.cos(_),this}setFromCylindrical(f){return this.setFromCylindricalCoords(f.radius,f.theta,f.y)}setFromCylindricalCoords(f,m,_){return this.x=f*Math.sin(m),this.y=_,this.z=f*Math.cos(m),this}setFromMatrixPosition(f){const m=f.elements;return this.x=m[12],this.y=m[13],this.z=m[14],this}setFromMatrixScale(f){const m=this.setFromMatrixColumn(f,0).length(),_=this.setFromMatrixColumn(f,1).length(),x=this.setFromMatrixColumn(f,2).length();return this.x=m,this.y=_,this.z=x,this}setFromMatrixColumn(f,m){return this.fromArray(f.elements,m*4)}setFromMatrix3Column(f,m){return this.fromArray(f.elements,m*3)}setFromEuler(f){return this.x=f._x,this.y=f._y,this.z=f._z,this}equals(f){return f.x===this.x&&f.y===this.y&&f.z===this.z}fromArray(f,m=0){return this.x=f[m],this.y=f[m+1],this.z=f[m+2],this}toArray(f=[],m=0){return f[m]=this.x,f[m+1]=this.y,f[m+2]=this.z,f}fromBufferAttribute(f,m){return this.x=f.getX(m),this.y=f.getY(m),this.z=f.getZ(m),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const f=(Math.random()-.5)*2,m=Math.random()*Math.PI*2,_=Math.sqrt(1-f**2);return this.x=_*Math.cos(m),this.y=_*Math.sin(m),this.z=f,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$d=new Vector3,_quaternion$4=new Quaternion;function SRGBToLinear(b){return b<.04045?b*.0773993808:Math.pow(b*.9478672986+.0521327014,2.4)}function LinearToSRGB(b){return b<.0031308?b*12.92:1.055*Math.pow(b,.41666)-.055}const LINEAR_SRGB_TO_LINEAR_DISPLAY_P3=new Matrix3().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),LINEAR_DISPLAY_P3_TO_LINEAR_SRGB=new Matrix3().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),_vector$c=new Vector3;function DisplayP3ToLinearSRGB(b){return b.convertSRGBToLinear(),_vector$c.set(b.r,b.g,b.b).applyMatrix3(LINEAR_DISPLAY_P3_TO_LINEAR_SRGB),b.setRGB(_vector$c.x,_vector$c.y,_vector$c.z)}function LinearSRGBToDisplayP3(b){return _vector$c.set(b.r,b.g,b.b).applyMatrix3(LINEAR_SRGB_TO_LINEAR_DISPLAY_P3),b.setRGB(_vector$c.x,_vector$c.y,_vector$c.z).convertLinearToSRGB()}const TO_LINEAR={[LinearSRGBColorSpace]:b=>b,[SRGBColorSpace]:b=>b.convertSRGBToLinear(),[DisplayP3ColorSpace]:DisplayP3ToLinearSRGB},FROM_LINEAR={[LinearSRGBColorSpace]:b=>b,[SRGBColorSpace]:b=>b.convertLinearToSRGB(),[DisplayP3ColorSpace]:LinearSRGBToDisplayP3},ColorManagement={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(b){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!b},get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(b){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(b,f,m){if(this.enabled===!1||f===m||!f||!m)return b;const _=TO_LINEAR[f],x=FROM_LINEAR[m];if(_===void 0||x===void 0)throw new Error(`Unsupported color space conversion, "${f}" to "${m}".`);return x(_(b))},fromWorkingColorSpace:function(b,f){return this.convert(b,this.workingColorSpace,f)},toWorkingColorSpace:function(b,f){return this.convert(b,f,this.workingColorSpace)}};let _canvas;class ImageUtils{static getDataURL(f){if(/^data:/i.test(f.src)||typeof HTMLCanvasElement>"u")return f.src;let m;if(f instanceof HTMLCanvasElement)m=f;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=f.width,_canvas.height=f.height;const _=_canvas.getContext("2d");f instanceof ImageData?_.putImageData(f,0,0):_.drawImage(f,0,0,f.width,f.height),m=_canvas}return m.width>2048||m.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",f),m.toDataURL("image/jpeg",.6)):m.toDataURL("image/png")}static sRGBToLinear(f){if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap){const m=createElementNS("canvas");m.width=f.width,m.height=f.height;const _=m.getContext("2d");_.drawImage(f,0,0,f.width,f.height);const x=_.getImageData(0,0,f.width,f.height),v=x.data;for(let y=0;y<v.length;y++)v[y]=SRGBToLinear(v[y]/255)*255;return _.putImageData(x,0,0),m}else if(f.data){const m=f.data.slice(0);for(let _=0;_<m.length;_++)m instanceof Uint8Array||m instanceof Uint8ClampedArray?m[_]=Math.floor(SRGBToLinear(m[_]/255)*255):m[_]=SRGBToLinear(m[_]);return{data:m,width:f.width,height:f.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),f}}class Source{constructor(f=null){this.isSource=!0,this.uuid=generateUUID(),this.data=f,this.version=0}set needsUpdate(f){f===!0&&this.version++}toJSON(f){const m=f===void 0||typeof f=="string";if(!m&&f.images[this.uuid]!==void 0)return f.images[this.uuid];const _={uuid:this.uuid,url:""},x=this.data;if(x!==null){let v;if(Array.isArray(x)){v=[];for(let y=0,M=x.length;y<M;y++)x[y].isDataTexture?v.push(serializeImage(x[y].image)):v.push(serializeImage(x[y]))}else v=serializeImage(x);_.url=v}return m||(f.images[this.uuid]=_),_}}function serializeImage(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap?ImageUtils.getDataURL(b):b.data?{data:Array.from(b.data),width:b.width,height:b.height,type:b.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(f=Texture.DEFAULT_IMAGE,m=Texture.DEFAULT_MAPPING,_=ClampToEdgeWrapping,x=ClampToEdgeWrapping,v=LinearFilter,y=LinearMipmapLinearFilter,M=RGBAFormat,S=UnsignedByteType,w=Texture.DEFAULT_ANISOTROPY,T=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(f),this.mipmaps=[],this.mapping=m,this.wrapS=_,this.wrapT=x,this.magFilter=v,this.minFilter=y,this.anisotropy=w,this.format=M,this.internalFormat=null,this.type=S,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=T,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(f=null){this.source.data=f}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(f){return this.name=f.name,this.source=f.source,this.mipmaps=f.mipmaps.slice(0),this.mapping=f.mapping,this.wrapS=f.wrapS,this.wrapT=f.wrapT,this.magFilter=f.magFilter,this.minFilter=f.minFilter,this.anisotropy=f.anisotropy,this.format=f.format,this.internalFormat=f.internalFormat,this.type=f.type,this.offset.copy(f.offset),this.repeat.copy(f.repeat),this.center.copy(f.center),this.rotation=f.rotation,this.matrixAutoUpdate=f.matrixAutoUpdate,this.matrix.copy(f.matrix),this.generateMipmaps=f.generateMipmaps,this.premultiplyAlpha=f.premultiplyAlpha,this.flipY=f.flipY,this.unpackAlignment=f.unpackAlignment,this.encoding=f.encoding,this.userData=JSON.parse(JSON.stringify(f.userData)),this.needsUpdate=!0,this}toJSON(f){const m=f===void 0||typeof f=="string";if(!m&&f.textures[this.uuid]!==void 0)return f.textures[this.uuid];const _={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(f).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(_.userData=this.userData),m||(f.textures[this.uuid]=_),_}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(f){if(this.mapping!==UVMapping)return f;if(f.applyMatrix3(this.matrix),f.x<0||f.x>1)switch(this.wrapS){case RepeatWrapping:f.x=f.x-Math.floor(f.x);break;case ClampToEdgeWrapping:f.x=f.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(f.x)%2)===1?f.x=Math.ceil(f.x)-f.x:f.x=f.x-Math.floor(f.x);break}if(f.y<0||f.y>1)switch(this.wrapT){case RepeatWrapping:f.y=f.y-Math.floor(f.y);break;case ClampToEdgeWrapping:f.y=f.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(f.y)%2)===1?f.y=Math.ceil(f.y)-f.y:f.y=f.y-Math.floor(f.y);break}return this.flipY&&(f.y=1-f.y),f}set needsUpdate(f){f===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;Texture.DEFAULT_ANISOTROPY=1;class Vector4{constructor(f=0,m=0,_=0,x=1){Vector4.prototype.isVector4=!0,this.x=f,this.y=m,this.z=_,this.w=x}get width(){return this.z}set width(f){this.z=f}get height(){return this.w}set height(f){this.w=f}set(f,m,_,x){return this.x=f,this.y=m,this.z=_,this.w=x,this}setScalar(f){return this.x=f,this.y=f,this.z=f,this.w=f,this}setX(f){return this.x=f,this}setY(f){return this.y=f,this}setZ(f){return this.z=f,this}setW(f){return this.w=f,this}setComponent(f,m){switch(f){case 0:this.x=m;break;case 1:this.y=m;break;case 2:this.z=m;break;case 3:this.w=m;break;default:throw new Error("index is out of range: "+f)}return this}getComponent(f){switch(f){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+f)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(f){return this.x=f.x,this.y=f.y,this.z=f.z,this.w=f.w!==void 0?f.w:1,this}add(f){return this.x+=f.x,this.y+=f.y,this.z+=f.z,this.w+=f.w,this}addScalar(f){return this.x+=f,this.y+=f,this.z+=f,this.w+=f,this}addVectors(f,m){return this.x=f.x+m.x,this.y=f.y+m.y,this.z=f.z+m.z,this.w=f.w+m.w,this}addScaledVector(f,m){return this.x+=f.x*m,this.y+=f.y*m,this.z+=f.z*m,this.w+=f.w*m,this}sub(f){return this.x-=f.x,this.y-=f.y,this.z-=f.z,this.w-=f.w,this}subScalar(f){return this.x-=f,this.y-=f,this.z-=f,this.w-=f,this}subVectors(f,m){return this.x=f.x-m.x,this.y=f.y-m.y,this.z=f.z-m.z,this.w=f.w-m.w,this}multiply(f){return this.x*=f.x,this.y*=f.y,this.z*=f.z,this.w*=f.w,this}multiplyScalar(f){return this.x*=f,this.y*=f,this.z*=f,this.w*=f,this}applyMatrix4(f){const m=this.x,_=this.y,x=this.z,v=this.w,y=f.elements;return this.x=y[0]*m+y[4]*_+y[8]*x+y[12]*v,this.y=y[1]*m+y[5]*_+y[9]*x+y[13]*v,this.z=y[2]*m+y[6]*_+y[10]*x+y[14]*v,this.w=y[3]*m+y[7]*_+y[11]*x+y[15]*v,this}divideScalar(f){return this.multiplyScalar(1/f)}setAxisAngleFromQuaternion(f){this.w=2*Math.acos(f.w);const m=Math.sqrt(1-f.w*f.w);return m<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=f.x/m,this.y=f.y/m,this.z=f.z/m),this}setAxisAngleFromRotationMatrix(f){let m,_,x,v;const S=f.elements,w=S[0],T=S[4],A=S[8],E=S[1],R=S[5],P=S[9],C=S[2],L=S[6],D=S[10];if(Math.abs(T-E)<.01&&Math.abs(A-C)<.01&&Math.abs(P-L)<.01){if(Math.abs(T+E)<.1&&Math.abs(A+C)<.1&&Math.abs(P+L)<.1&&Math.abs(w+R+D-3)<.1)return this.set(1,0,0,0),this;m=Math.PI;const I=(w+1)/2,O=(R+1)/2,V=(D+1)/2,H=(T+E)/4,$=(A+C)/4,F=(P+L)/4;return I>O&&I>V?I<.01?(_=0,x=.707106781,v=.707106781):(_=Math.sqrt(I),x=H/_,v=$/_):O>V?O<.01?(_=.707106781,x=0,v=.707106781):(x=Math.sqrt(O),_=H/x,v=F/x):V<.01?(_=.707106781,x=.707106781,v=0):(v=Math.sqrt(V),_=$/v,x=F/v),this.set(_,x,v,m),this}let U=Math.sqrt((L-P)*(L-P)+(A-C)*(A-C)+(E-T)*(E-T));return Math.abs(U)<.001&&(U=1),this.x=(L-P)/U,this.y=(A-C)/U,this.z=(E-T)/U,this.w=Math.acos((w+R+D-1)/2),this}min(f){return this.x=Math.min(this.x,f.x),this.y=Math.min(this.y,f.y),this.z=Math.min(this.z,f.z),this.w=Math.min(this.w,f.w),this}max(f){return this.x=Math.max(this.x,f.x),this.y=Math.max(this.y,f.y),this.z=Math.max(this.z,f.z),this.w=Math.max(this.w,f.w),this}clamp(f,m){return this.x=Math.max(f.x,Math.min(m.x,this.x)),this.y=Math.max(f.y,Math.min(m.y,this.y)),this.z=Math.max(f.z,Math.min(m.z,this.z)),this.w=Math.max(f.w,Math.min(m.w,this.w)),this}clampScalar(f,m){return this.x=Math.max(f,Math.min(m,this.x)),this.y=Math.max(f,Math.min(m,this.y)),this.z=Math.max(f,Math.min(m,this.z)),this.w=Math.max(f,Math.min(m,this.w)),this}clampLength(f,m){const _=this.length();return this.divideScalar(_||1).multiplyScalar(Math.max(f,Math.min(m,_)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(f){return this.x*f.x+this.y*f.y+this.z*f.z+this.w*f.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(f){return this.normalize().multiplyScalar(f)}lerp(f,m){return this.x+=(f.x-this.x)*m,this.y+=(f.y-this.y)*m,this.z+=(f.z-this.z)*m,this.w+=(f.w-this.w)*m,this}lerpVectors(f,m,_){return this.x=f.x+(m.x-f.x)*_,this.y=f.y+(m.y-f.y)*_,this.z=f.z+(m.z-f.z)*_,this.w=f.w+(m.w-f.w)*_,this}equals(f){return f.x===this.x&&f.y===this.y&&f.z===this.z&&f.w===this.w}fromArray(f,m=0){return this.x=f[m],this.y=f[m+1],this.z=f[m+2],this.w=f[m+3],this}toArray(f=[],m=0){return f[m]=this.x,f[m+1]=this.y,f[m+2]=this.z,f[m+3]=this.w,f}fromBufferAttribute(f,m){return this.x=f.getX(m),this.y=f.getY(m),this.z=f.getZ(m),this.w=f.getW(m),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(f=1,m=1,_={}){super(),this.isWebGLRenderTarget=!0,this.width=f,this.height=m,this.depth=1,this.scissor=new Vector4(0,0,f,m),this.scissorTest=!1,this.viewport=new Vector4(0,0,f,m);const x={width:f,height:m,depth:1};this.texture=new Texture(x,_.mapping,_.wrapS,_.wrapT,_.magFilter,_.minFilter,_.format,_.type,_.anisotropy,_.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=_.generateMipmaps!==void 0?_.generateMipmaps:!1,this.texture.internalFormat=_.internalFormat!==void 0?_.internalFormat:null,this.texture.minFilter=_.minFilter!==void 0?_.minFilter:LinearFilter,this.depthBuffer=_.depthBuffer!==void 0?_.depthBuffer:!0,this.stencilBuffer=_.stencilBuffer!==void 0?_.stencilBuffer:!1,this.depthTexture=_.depthTexture!==void 0?_.depthTexture:null,this.samples=_.samples!==void 0?_.samples:0}setSize(f,m,_=1){(this.width!==f||this.height!==m||this.depth!==_)&&(this.width=f,this.height=m,this.depth=_,this.texture.image.width=f,this.texture.image.height=m,this.texture.image.depth=_,this.dispose()),this.viewport.set(0,0,f,m),this.scissor.set(0,0,f,m)}clone(){return new this.constructor().copy(this)}copy(f){this.width=f.width,this.height=f.height,this.depth=f.depth,this.viewport.copy(f.viewport),this.texture=f.texture.clone(),this.texture.isRenderTargetTexture=!0;const m=Object.assign({},f.texture.image);return this.texture.source=new Source(m),this.depthBuffer=f.depthBuffer,this.stencilBuffer=f.stencilBuffer,f.depthTexture!==null&&(this.depthTexture=f.depthTexture.clone()),this.samples=f.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(f=null,m=1,_=1,x=1){super(null),this.isDataArrayTexture=!0,this.image={data:f,width:m,height:_,depth:x},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(f=null,m=1,_=1,x=1){super(null),this.isData3DTexture=!0,this.image={data:f,width:m,height:_,depth:x},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Box3{constructor(f=new Vector3(1/0,1/0,1/0),m=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=f,this.max=m}set(f,m){return this.min.copy(f),this.max.copy(m),this}setFromArray(f){let m=1/0,_=1/0,x=1/0,v=-1/0,y=-1/0,M=-1/0;for(let S=0,w=f.length;S<w;S+=3){const T=f[S],A=f[S+1],E=f[S+2];T<m&&(m=T),A<_&&(_=A),E<x&&(x=E),T>v&&(v=T),A>y&&(y=A),E>M&&(M=E)}return this.min.set(m,_,x),this.max.set(v,y,M),this}setFromBufferAttribute(f){let m=1/0,_=1/0,x=1/0,v=-1/0,y=-1/0,M=-1/0;for(let S=0,w=f.count;S<w;S++){const T=f.getX(S),A=f.getY(S),E=f.getZ(S);T<m&&(m=T),A<_&&(_=A),E<x&&(x=E),T>v&&(v=T),A>y&&(y=A),E>M&&(M=E)}return this.min.set(m,_,x),this.max.set(v,y,M),this}setFromPoints(f){this.makeEmpty();for(let m=0,_=f.length;m<_;m++)this.expandByPoint(f[m]);return this}setFromCenterAndSize(f,m){const _=_vector$b.copy(m).multiplyScalar(.5);return this.min.copy(f).sub(_),this.max.copy(f).add(_),this}setFromObject(f,m=!1){return this.makeEmpty(),this.expandByObject(f,m)}clone(){return new this.constructor().copy(this)}copy(f){return this.min.copy(f.min),this.max.copy(f.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(f){return this.isEmpty()?f.set(0,0,0):f.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(f){return this.isEmpty()?f.set(0,0,0):f.subVectors(this.max,this.min)}expandByPoint(f){return this.min.min(f),this.max.max(f),this}expandByVector(f){return this.min.sub(f),this.max.add(f),this}expandByScalar(f){return this.min.addScalar(-f),this.max.addScalar(f),this}expandByObject(f,m=!1){f.updateWorldMatrix(!1,!1);const _=f.geometry;if(_!==void 0)if(m&&_.attributes!=null&&_.attributes.position!==void 0){const v=_.attributes.position;for(let y=0,M=v.count;y<M;y++)_vector$b.fromBufferAttribute(v,y).applyMatrix4(f.matrixWorld),this.expandByPoint(_vector$b)}else _.boundingBox===null&&_.computeBoundingBox(),_box$3.copy(_.boundingBox),_box$3.applyMatrix4(f.matrixWorld),this.union(_box$3);const x=f.children;for(let v=0,y=x.length;v<y;v++)this.expandByObject(x[v],m);return this}containsPoint(f){return!(f.x<this.min.x||f.x>this.max.x||f.y<this.min.y||f.y>this.max.y||f.z<this.min.z||f.z>this.max.z)}containsBox(f){return this.min.x<=f.min.x&&f.max.x<=this.max.x&&this.min.y<=f.min.y&&f.max.y<=this.max.y&&this.min.z<=f.min.z&&f.max.z<=this.max.z}getParameter(f,m){return m.set((f.x-this.min.x)/(this.max.x-this.min.x),(f.y-this.min.y)/(this.max.y-this.min.y),(f.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(f){return!(f.max.x<this.min.x||f.min.x>this.max.x||f.max.y<this.min.y||f.min.y>this.max.y||f.max.z<this.min.z||f.min.z>this.max.z)}intersectsSphere(f){return this.clampPoint(f.center,_vector$b),_vector$b.distanceToSquared(f.center)<=f.radius*f.radius}intersectsPlane(f){let m,_;return f.normal.x>0?(m=f.normal.x*this.min.x,_=f.normal.x*this.max.x):(m=f.normal.x*this.max.x,_=f.normal.x*this.min.x),f.normal.y>0?(m+=f.normal.y*this.min.y,_+=f.normal.y*this.max.y):(m+=f.normal.y*this.max.y,_+=f.normal.y*this.min.y),f.normal.z>0?(m+=f.normal.z*this.min.z,_+=f.normal.z*this.max.z):(m+=f.normal.z*this.max.z,_+=f.normal.z*this.min.z),m<=-f.constant&&_>=-f.constant}intersectsTriangle(f){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(f.a,_center),_v1$7.subVectors(f.b,_center),_v2$4.subVectors(f.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$4,_v1$7),_f2.subVectors(_v0$2,_v2$4);let m=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(m,_v0$2,_v1$7,_v2$4,_extents)||(m=[1,0,0,0,1,0,0,0,1],!satForAxes(m,_v0$2,_v1$7,_v2$4,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),m=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(m,_v0$2,_v1$7,_v2$4,_extents))}clampPoint(f,m){return m.copy(f).clamp(this.min,this.max)}distanceToPoint(f){return this.clampPoint(f,_vector$b).distanceTo(f)}getBoundingSphere(f){return this.isEmpty()?f.makeEmpty():(this.getCenter(f.center),f.radius=this.getSize(_vector$b).length()*.5),f}intersect(f){return this.min.max(f.min),this.max.min(f.max),this.isEmpty()&&this.makeEmpty(),this}union(f){return this.min.min(f.min),this.max.max(f.max),this}applyMatrix4(f){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(f),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(f),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(f),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(f),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(f),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(f),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(f),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(f),this.setFromPoints(_points),this)}translate(f){return this.min.add(f),this.max.add(f),this}equals(f){return f.min.equals(this.min)&&f.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$4=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(b,f,m,_,x){for(let v=0,y=b.length-3;v<=y;v+=3){_testAxis.fromArray(b,v);const M=x.x*Math.abs(_testAxis.x)+x.y*Math.abs(_testAxis.y)+x.z*Math.abs(_testAxis.z),S=f.dot(_testAxis),w=m.dot(_testAxis),T=_.dot(_testAxis);if(Math.max(-Math.max(S,w,T),Math.min(S,w,T))>M)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_v2$3=new Vector3;class Sphere{constructor(f=new Vector3,m=-1){this.center=f,this.radius=m}set(f,m){return this.center.copy(f),this.radius=m,this}setFromPoints(f,m){const _=this.center;m!==void 0?_.copy(m):_box$2.setFromPoints(f).getCenter(_);let x=0;for(let v=0,y=f.length;v<y;v++)x=Math.max(x,_.distanceToSquared(f[v]));return this.radius=Math.sqrt(x),this}copy(f){return this.center.copy(f.center),this.radius=f.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(f){return f.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(f){return f.distanceTo(this.center)-this.radius}intersectsSphere(f){const m=this.radius+f.radius;return f.center.distanceToSquared(this.center)<=m*m}intersectsBox(f){return f.intersectsSphere(this)}intersectsPlane(f){return Math.abs(f.distanceToPoint(this.center))<=this.radius}clampPoint(f,m){const _=this.center.distanceToSquared(f);return m.copy(f),_>this.radius*this.radius&&(m.sub(this.center).normalize(),m.multiplyScalar(this.radius).add(this.center)),m}getBoundingBox(f){return this.isEmpty()?(f.makeEmpty(),f):(f.set(this.center,this.center),f.expandByScalar(this.radius),f)}applyMatrix4(f){return this.center.applyMatrix4(f),this.radius=this.radius*f.getMaxScaleOnAxis(),this}translate(f){return this.center.add(f),this}expandByPoint(f){if(this.isEmpty())return this.center.copy(f),this.radius=0,this;_v1$6.subVectors(f,this.center);const m=_v1$6.lengthSq();if(m>this.radius*this.radius){const _=Math.sqrt(m),x=(_-this.radius)*.5;this.center.addScaledVector(_v1$6,x/_),this.radius+=x}return this}union(f){return f.isEmpty()?this:this.isEmpty()?(this.copy(f),this):(this.center.equals(f.center)===!0?this.radius=Math.max(this.radius,f.radius):(_v2$3.subVectors(f.center,this.center).setLength(f.radius),this.expandByPoint(_v1$6.copy(f.center).add(_v2$3)),this.expandByPoint(_v1$6.copy(f.center).sub(_v2$3))),this)}equals(f){return f.center.equals(this.center)&&f.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(f=new Vector3,m=new Vector3(0,0,-1)){this.origin=f,this.direction=m}set(f,m){return this.origin.copy(f),this.direction.copy(m),this}copy(f){return this.origin.copy(f.origin),this.direction.copy(f.direction),this}at(f,m){return m.copy(this.origin).addScaledVector(this.direction,f)}lookAt(f){return this.direction.copy(f).sub(this.origin).normalize(),this}recast(f){return this.origin.copy(this.at(f,_vector$a)),this}closestPointToPoint(f,m){m.subVectors(f,this.origin);const _=m.dot(this.direction);return _<0?m.copy(this.origin):m.copy(this.origin).addScaledVector(this.direction,_)}distanceToPoint(f){return Math.sqrt(this.distanceSqToPoint(f))}distanceSqToPoint(f){const m=_vector$a.subVectors(f,this.origin).dot(this.direction);return m<0?this.origin.distanceToSquared(f):(_vector$a.copy(this.origin).addScaledVector(this.direction,m),_vector$a.distanceToSquared(f))}distanceSqToSegment(f,m,_,x){_segCenter.copy(f).add(m).multiplyScalar(.5),_segDir.copy(m).sub(f).normalize(),_diff.copy(this.origin).sub(_segCenter);const v=f.distanceTo(m)*.5,y=-this.direction.dot(_segDir),M=_diff.dot(this.direction),S=-_diff.dot(_segDir),w=_diff.lengthSq(),T=Math.abs(1-y*y);let A,E,R,P;if(T>0)if(A=y*S-M,E=y*M-S,P=v*T,A>=0)if(E>=-P)if(E<=P){const C=1/T;A*=C,E*=C,R=A*(A+y*E+2*M)+E*(y*A+E+2*S)+w}else E=v,A=Math.max(0,-(y*E+M)),R=-A*A+E*(E+2*S)+w;else E=-v,A=Math.max(0,-(y*E+M)),R=-A*A+E*(E+2*S)+w;else E<=-P?(A=Math.max(0,-(-y*v+M)),E=A>0?-v:Math.min(Math.max(-v,-S),v),R=-A*A+E*(E+2*S)+w):E<=P?(A=0,E=Math.min(Math.max(-v,-S),v),R=E*(E+2*S)+w):(A=Math.max(0,-(y*v+M)),E=A>0?v:Math.min(Math.max(-v,-S),v),R=-A*A+E*(E+2*S)+w);else E=y>0?-v:v,A=Math.max(0,-(y*E+M)),R=-A*A+E*(E+2*S)+w;return _&&_.copy(this.origin).addScaledVector(this.direction,A),x&&x.copy(_segCenter).addScaledVector(_segDir,E),R}intersectSphere(f,m){_vector$a.subVectors(f.center,this.origin);const _=_vector$a.dot(this.direction),x=_vector$a.dot(_vector$a)-_*_,v=f.radius*f.radius;if(x>v)return null;const y=Math.sqrt(v-x),M=_-y,S=_+y;return S<0?null:M<0?this.at(S,m):this.at(M,m)}intersectsSphere(f){return this.distanceSqToPoint(f.center)<=f.radius*f.radius}distanceToPlane(f){const m=f.normal.dot(this.direction);if(m===0)return f.distanceToPoint(this.origin)===0?0:null;const _=-(this.origin.dot(f.normal)+f.constant)/m;return _>=0?_:null}intersectPlane(f,m){const _=this.distanceToPlane(f);return _===null?null:this.at(_,m)}intersectsPlane(f){const m=f.distanceToPoint(this.origin);return m===0||f.normal.dot(this.direction)*m<0}intersectBox(f,m){let _,x,v,y,M,S;const w=1/this.direction.x,T=1/this.direction.y,A=1/this.direction.z,E=this.origin;return w>=0?(_=(f.min.x-E.x)*w,x=(f.max.x-E.x)*w):(_=(f.max.x-E.x)*w,x=(f.min.x-E.x)*w),T>=0?(v=(f.min.y-E.y)*T,y=(f.max.y-E.y)*T):(v=(f.max.y-E.y)*T,y=(f.min.y-E.y)*T),_>y||v>x||((v>_||isNaN(_))&&(_=v),(y<x||isNaN(x))&&(x=y),A>=0?(M=(f.min.z-E.z)*A,S=(f.max.z-E.z)*A):(M=(f.max.z-E.z)*A,S=(f.min.z-E.z)*A),_>S||M>x)||((M>_||_!==_)&&(_=M),(S<x||x!==x)&&(x=S),x<0)?null:this.at(_>=0?_:x,m)}intersectsBox(f){return this.intersectBox(f,_vector$a)!==null}intersectTriangle(f,m,_,x,v){_edge1.subVectors(m,f),_edge2.subVectors(_,f),_normal$1.crossVectors(_edge1,_edge2);let y=this.direction.dot(_normal$1),M;if(y>0){if(x)return null;M=1}else if(y<0)M=-1,y=-y;else return null;_diff.subVectors(this.origin,f);const S=M*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(S<0)return null;const w=M*this.direction.dot(_edge1.cross(_diff));if(w<0||S+w>y)return null;const T=-M*_diff.dot(_normal$1);return T<0?null:this.at(T/y,v)}applyMatrix4(f){return this.origin.applyMatrix4(f),this.direction.transformDirection(f),this}equals(f){return f.origin.equals(this.origin)&&f.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(f,m,_,x,v,y,M,S,w,T,A,E,R,P,C,L){const D=this.elements;return D[0]=f,D[4]=m,D[8]=_,D[12]=x,D[1]=v,D[5]=y,D[9]=M,D[13]=S,D[2]=w,D[6]=T,D[10]=A,D[14]=E,D[3]=R,D[7]=P,D[11]=C,D[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(f){const m=this.elements,_=f.elements;return m[0]=_[0],m[1]=_[1],m[2]=_[2],m[3]=_[3],m[4]=_[4],m[5]=_[5],m[6]=_[6],m[7]=_[7],m[8]=_[8],m[9]=_[9],m[10]=_[10],m[11]=_[11],m[12]=_[12],m[13]=_[13],m[14]=_[14],m[15]=_[15],this}copyPosition(f){const m=this.elements,_=f.elements;return m[12]=_[12],m[13]=_[13],m[14]=_[14],this}setFromMatrix3(f){const m=f.elements;return this.set(m[0],m[3],m[6],0,m[1],m[4],m[7],0,m[2],m[5],m[8],0,0,0,0,1),this}extractBasis(f,m,_){return f.setFromMatrixColumn(this,0),m.setFromMatrixColumn(this,1),_.setFromMatrixColumn(this,2),this}makeBasis(f,m,_){return this.set(f.x,m.x,_.x,0,f.y,m.y,_.y,0,f.z,m.z,_.z,0,0,0,0,1),this}extractRotation(f){const m=this.elements,_=f.elements,x=1/_v1$5.setFromMatrixColumn(f,0).length(),v=1/_v1$5.setFromMatrixColumn(f,1).length(),y=1/_v1$5.setFromMatrixColumn(f,2).length();return m[0]=_[0]*x,m[1]=_[1]*x,m[2]=_[2]*x,m[3]=0,m[4]=_[4]*v,m[5]=_[5]*v,m[6]=_[6]*v,m[7]=0,m[8]=_[8]*y,m[9]=_[9]*y,m[10]=_[10]*y,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,this}makeRotationFromEuler(f){const m=this.elements,_=f.x,x=f.y,v=f.z,y=Math.cos(_),M=Math.sin(_),S=Math.cos(x),w=Math.sin(x),T=Math.cos(v),A=Math.sin(v);if(f.order==="XYZ"){const E=y*T,R=y*A,P=M*T,C=M*A;m[0]=S*T,m[4]=-S*A,m[8]=w,m[1]=R+P*w,m[5]=E-C*w,m[9]=-M*S,m[2]=C-E*w,m[6]=P+R*w,m[10]=y*S}else if(f.order==="YXZ"){const E=S*T,R=S*A,P=w*T,C=w*A;m[0]=E+C*M,m[4]=P*M-R,m[8]=y*w,m[1]=y*A,m[5]=y*T,m[9]=-M,m[2]=R*M-P,m[6]=C+E*M,m[10]=y*S}else if(f.order==="ZXY"){const E=S*T,R=S*A,P=w*T,C=w*A;m[0]=E-C*M,m[4]=-y*A,m[8]=P+R*M,m[1]=R+P*M,m[5]=y*T,m[9]=C-E*M,m[2]=-y*w,m[6]=M,m[10]=y*S}else if(f.order==="ZYX"){const E=y*T,R=y*A,P=M*T,C=M*A;m[0]=S*T,m[4]=P*w-R,m[8]=E*w+C,m[1]=S*A,m[5]=C*w+E,m[9]=R*w-P,m[2]=-w,m[6]=M*S,m[10]=y*S}else if(f.order==="YZX"){const E=y*S,R=y*w,P=M*S,C=M*w;m[0]=S*T,m[4]=C-E*A,m[8]=P*A+R,m[1]=A,m[5]=y*T,m[9]=-M*T,m[2]=-w*T,m[6]=R*A+P,m[10]=E-C*A}else if(f.order==="XZY"){const E=y*S,R=y*w,P=M*S,C=M*w;m[0]=S*T,m[4]=-A,m[8]=w*T,m[1]=E*A+C,m[5]=y*T,m[9]=R*A-P,m[2]=P*A-R,m[6]=M*T,m[10]=C*A+E}return m[3]=0,m[7]=0,m[11]=0,m[12]=0,m[13]=0,m[14]=0,m[15]=1,this}makeRotationFromQuaternion(f){return this.compose(_zero,f,_one)}lookAt(f,m,_){const x=this.elements;return _z.subVectors(f,m),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(_,_z),_x.lengthSq()===0&&(Math.abs(_.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(_,_z)),_x.normalize(),_y.crossVectors(_z,_x),x[0]=_x.x,x[4]=_y.x,x[8]=_z.x,x[1]=_x.y,x[5]=_y.y,x[9]=_z.y,x[2]=_x.z,x[6]=_y.z,x[10]=_z.z,this}multiply(f){return this.multiplyMatrices(this,f)}premultiply(f){return this.multiplyMatrices(f,this)}multiplyMatrices(f,m){const _=f.elements,x=m.elements,v=this.elements,y=_[0],M=_[4],S=_[8],w=_[12],T=_[1],A=_[5],E=_[9],R=_[13],P=_[2],C=_[6],L=_[10],D=_[14],U=_[3],I=_[7],O=_[11],V=_[15],H=x[0],$=x[4],F=x[8],k=x[12],Y=x[1],oe=x[5],ae=x[9],K=x[13],X=x[2],ee=x[6],le=x[10],de=x[14],se=x[3],fe=x[7],ce=x[11],Re=x[15];return v[0]=y*H+M*Y+S*X+w*se,v[4]=y*$+M*oe+S*ee+w*fe,v[8]=y*F+M*ae+S*le+w*ce,v[12]=y*k+M*K+S*de+w*Re,v[1]=T*H+A*Y+E*X+R*se,v[5]=T*$+A*oe+E*ee+R*fe,v[9]=T*F+A*ae+E*le+R*ce,v[13]=T*k+A*K+E*de+R*Re,v[2]=P*H+C*Y+L*X+D*se,v[6]=P*$+C*oe+L*ee+D*fe,v[10]=P*F+C*ae+L*le+D*ce,v[14]=P*k+C*K+L*de+D*Re,v[3]=U*H+I*Y+O*X+V*se,v[7]=U*$+I*oe+O*ee+V*fe,v[11]=U*F+I*ae+O*le+V*ce,v[15]=U*k+I*K+O*de+V*Re,this}multiplyScalar(f){const m=this.elements;return m[0]*=f,m[4]*=f,m[8]*=f,m[12]*=f,m[1]*=f,m[5]*=f,m[9]*=f,m[13]*=f,m[2]*=f,m[6]*=f,m[10]*=f,m[14]*=f,m[3]*=f,m[7]*=f,m[11]*=f,m[15]*=f,this}determinant(){const f=this.elements,m=f[0],_=f[4],x=f[8],v=f[12],y=f[1],M=f[5],S=f[9],w=f[13],T=f[2],A=f[6],E=f[10],R=f[14],P=f[3],C=f[7],L=f[11],D=f[15];return P*(+v*S*A-x*w*A-v*M*E+_*w*E+x*M*R-_*S*R)+C*(+m*S*R-m*w*E+v*y*E-x*y*R+x*w*T-v*S*T)+L*(+m*w*A-m*M*R-v*y*A+_*y*R+v*M*T-_*w*T)+D*(-x*M*T-m*S*A+m*M*E+x*y*A-_*y*E+_*S*T)}transpose(){const f=this.elements;let m;return m=f[1],f[1]=f[4],f[4]=m,m=f[2],f[2]=f[8],f[8]=m,m=f[6],f[6]=f[9],f[9]=m,m=f[3],f[3]=f[12],f[12]=m,m=f[7],f[7]=f[13],f[13]=m,m=f[11],f[11]=f[14],f[14]=m,this}setPosition(f,m,_){const x=this.elements;return f.isVector3?(x[12]=f.x,x[13]=f.y,x[14]=f.z):(x[12]=f,x[13]=m,x[14]=_),this}invert(){const f=this.elements,m=f[0],_=f[1],x=f[2],v=f[3],y=f[4],M=f[5],S=f[6],w=f[7],T=f[8],A=f[9],E=f[10],R=f[11],P=f[12],C=f[13],L=f[14],D=f[15],U=A*L*w-C*E*w+C*S*R-M*L*R-A*S*D+M*E*D,I=P*E*w-T*L*w-P*S*R+y*L*R+T*S*D-y*E*D,O=T*C*w-P*A*w+P*M*R-y*C*R-T*M*D+y*A*D,V=P*A*S-T*C*S-P*M*E+y*C*E+T*M*L-y*A*L,H=m*U+_*I+x*O+v*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/H;return f[0]=U*$,f[1]=(C*E*v-A*L*v-C*x*R+_*L*R+A*x*D-_*E*D)*$,f[2]=(M*L*v-C*S*v+C*x*w-_*L*w-M*x*D+_*S*D)*$,f[3]=(A*S*v-M*E*v-A*x*w+_*E*w+M*x*R-_*S*R)*$,f[4]=I*$,f[5]=(T*L*v-P*E*v+P*x*R-m*L*R-T*x*D+m*E*D)*$,f[6]=(P*S*v-y*L*v-P*x*w+m*L*w+y*x*D-m*S*D)*$,f[7]=(y*E*v-T*S*v+T*x*w-m*E*w-y*x*R+m*S*R)*$,f[8]=O*$,f[9]=(P*A*v-T*C*v-P*_*R+m*C*R+T*_*D-m*A*D)*$,f[10]=(y*C*v-P*M*v+P*_*w-m*C*w-y*_*D+m*M*D)*$,f[11]=(T*M*v-y*A*v-T*_*w+m*A*w+y*_*R-m*M*R)*$,f[12]=V*$,f[13]=(T*C*x-P*A*x+P*_*E-m*C*E-T*_*L+m*A*L)*$,f[14]=(P*M*x-y*C*x-P*_*S+m*C*S+y*_*L-m*M*L)*$,f[15]=(y*A*x-T*M*x+T*_*S-m*A*S-y*_*E+m*M*E)*$,this}scale(f){const m=this.elements,_=f.x,x=f.y,v=f.z;return m[0]*=_,m[4]*=x,m[8]*=v,m[1]*=_,m[5]*=x,m[9]*=v,m[2]*=_,m[6]*=x,m[10]*=v,m[3]*=_,m[7]*=x,m[11]*=v,this}getMaxScaleOnAxis(){const f=this.elements,m=f[0]*f[0]+f[1]*f[1]+f[2]*f[2],_=f[4]*f[4]+f[5]*f[5]+f[6]*f[6],x=f[8]*f[8]+f[9]*f[9]+f[10]*f[10];return Math.sqrt(Math.max(m,_,x))}makeTranslation(f,m,_){return this.set(1,0,0,f,0,1,0,m,0,0,1,_,0,0,0,1),this}makeRotationX(f){const m=Math.cos(f),_=Math.sin(f);return this.set(1,0,0,0,0,m,-_,0,0,_,m,0,0,0,0,1),this}makeRotationY(f){const m=Math.cos(f),_=Math.sin(f);return this.set(m,0,_,0,0,1,0,0,-_,0,m,0,0,0,0,1),this}makeRotationZ(f){const m=Math.cos(f),_=Math.sin(f);return this.set(m,-_,0,0,_,m,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(f,m){const _=Math.cos(m),x=Math.sin(m),v=1-_,y=f.x,M=f.y,S=f.z,w=v*y,T=v*M;return this.set(w*y+_,w*M-x*S,w*S+x*M,0,w*M+x*S,T*M+_,T*S-x*y,0,w*S-x*M,T*S+x*y,v*S*S+_,0,0,0,0,1),this}makeScale(f,m,_){return this.set(f,0,0,0,0,m,0,0,0,0,_,0,0,0,0,1),this}makeShear(f,m,_,x,v,y){return this.set(1,_,v,0,f,1,y,0,m,x,1,0,0,0,0,1),this}compose(f,m,_){const x=this.elements,v=m._x,y=m._y,M=m._z,S=m._w,w=v+v,T=y+y,A=M+M,E=v*w,R=v*T,P=v*A,C=y*T,L=y*A,D=M*A,U=S*w,I=S*T,O=S*A,V=_.x,H=_.y,$=_.z;return x[0]=(1-(C+D))*V,x[1]=(R+O)*V,x[2]=(P-I)*V,x[3]=0,x[4]=(R-O)*H,x[5]=(1-(E+D))*H,x[6]=(L+U)*H,x[7]=0,x[8]=(P+I)*$,x[9]=(L-U)*$,x[10]=(1-(E+C))*$,x[11]=0,x[12]=f.x,x[13]=f.y,x[14]=f.z,x[15]=1,this}decompose(f,m,_){const x=this.elements;let v=_v1$5.set(x[0],x[1],x[2]).length();const y=_v1$5.set(x[4],x[5],x[6]).length(),M=_v1$5.set(x[8],x[9],x[10]).length();this.determinant()<0&&(v=-v),f.x=x[12],f.y=x[13],f.z=x[14],_m1$2.copy(this);const w=1/v,T=1/y,A=1/M;return _m1$2.elements[0]*=w,_m1$2.elements[1]*=w,_m1$2.elements[2]*=w,_m1$2.elements[4]*=T,_m1$2.elements[5]*=T,_m1$2.elements[6]*=T,_m1$2.elements[8]*=A,_m1$2.elements[9]*=A,_m1$2.elements[10]*=A,m.setFromRotationMatrix(_m1$2),_.x=v,_.y=y,_.z=M,this}makePerspective(f,m,_,x,v,y){const M=this.elements,S=2*v/(m-f),w=2*v/(_-x),T=(m+f)/(m-f),A=(_+x)/(_-x),E=-(y+v)/(y-v),R=-2*y*v/(y-v);return M[0]=S,M[4]=0,M[8]=T,M[12]=0,M[1]=0,M[5]=w,M[9]=A,M[13]=0,M[2]=0,M[6]=0,M[10]=E,M[14]=R,M[3]=0,M[7]=0,M[11]=-1,M[15]=0,this}makeOrthographic(f,m,_,x,v,y){const M=this.elements,S=1/(m-f),w=1/(_-x),T=1/(y-v),A=(m+f)*S,E=(_+x)*w,R=(y+v)*T;return M[0]=2*S,M[4]=0,M[8]=0,M[12]=-A,M[1]=0,M[5]=2*w,M[9]=0,M[13]=-E,M[2]=0,M[6]=0,M[10]=-2*T,M[14]=-R,M[3]=0,M[7]=0,M[11]=0,M[15]=1,this}equals(f){const m=this.elements,_=f.elements;for(let x=0;x<16;x++)if(m[x]!==_[x])return!1;return!0}fromArray(f,m=0){for(let _=0;_<16;_++)this.elements[_]=f[_+m];return this}toArray(f=[],m=0){const _=this.elements;return f[m]=_[0],f[m+1]=_[1],f[m+2]=_[2],f[m+3]=_[3],f[m+4]=_[4],f[m+5]=_[5],f[m+6]=_[6],f[m+7]=_[7],f[m+8]=_[8],f[m+9]=_[9],f[m+10]=_[10],f[m+11]=_[11],f[m+12]=_[12],f[m+13]=_[13],f[m+14]=_[14],f[m+15]=_[15],f}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(f=0,m=0,_=0,x=Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=f,this._y=m,this._z=_,this._order=x}get x(){return this._x}set x(f){this._x=f,this._onChangeCallback()}get y(){return this._y}set y(f){this._y=f,this._onChangeCallback()}get z(){return this._z}set z(f){this._z=f,this._onChangeCallback()}get order(){return this._order}set order(f){this._order=f,this._onChangeCallback()}set(f,m,_,x=this._order){return this._x=f,this._y=m,this._z=_,this._order=x,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(f){return this._x=f._x,this._y=f._y,this._z=f._z,this._order=f._order,this._onChangeCallback(),this}setFromRotationMatrix(f,m=this._order,_=!0){const x=f.elements,v=x[0],y=x[4],M=x[8],S=x[1],w=x[5],T=x[9],A=x[2],E=x[6],R=x[10];switch(m){case"XYZ":this._y=Math.asin(clamp(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(-T,R),this._z=Math.atan2(-y,v)):(this._x=Math.atan2(E,w),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(T,-1,1)),Math.abs(T)<.9999999?(this._y=Math.atan2(M,R),this._z=Math.atan2(S,w)):(this._y=Math.atan2(-A,v),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(-A,R),this._z=Math.atan2(-y,w)):(this._y=0,this._z=Math.atan2(S,v));break;case"ZYX":this._y=Math.asin(-clamp(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(E,R),this._z=Math.atan2(S,v)):(this._x=0,this._z=Math.atan2(-y,w));break;case"YZX":this._z=Math.asin(clamp(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(-T,w),this._y=Math.atan2(-A,v)):(this._x=0,this._y=Math.atan2(M,R));break;case"XZY":this._z=Math.asin(-clamp(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(E,w),this._y=Math.atan2(M,v)):(this._x=Math.atan2(-T,R),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+m)}return this._order=m,_===!0&&this._onChangeCallback(),this}setFromQuaternion(f,m,_){return _matrix$1.makeRotationFromQuaternion(f),this.setFromRotationMatrix(_matrix$1,m,_)}setFromVector3(f,m=this._order){return this.set(f.x,f.y,f.z,m)}reorder(f){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,f)}equals(f){return f._x===this._x&&f._y===this._y&&f._z===this._z&&f._order===this._order}fromArray(f){return this._x=f[0],this._y=f[1],this._z=f[2],f[3]!==void 0&&(this._order=f[3]),this._onChangeCallback(),this}toArray(f=[],m=0){return f[m]=this._x,f[m+1]=this._y,f[m+2]=this._z,f[m+3]=this._order,f}_onChange(f){return this._onChangeCallback=f,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Euler.DEFAULT_ORDER="XYZ";class Layers{constructor(){this.mask=1}set(f){this.mask=(1<<f|0)>>>0}enable(f){this.mask|=1<<f|0}enableAll(){this.mask=-1}toggle(f){this.mask^=1<<f|0}disable(f){this.mask&=~(1<<f|0)}disableAll(){this.mask=0}test(f){return(this.mask&f.mask)!==0}isEnabled(f){return(this.mask&(1<<f|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DEFAULT_UP.clone();const f=new Vector3,m=new Euler,_=new Quaternion,x=new Vector3(1,1,1);function v(){_.setFromEuler(m,!1)}function y(){m.setFromQuaternion(_,void 0,!1)}m._onChange(v),_._onChange(y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:f},rotation:{configurable:!0,enumerable:!0,value:m},quaternion:{configurable:!0,enumerable:!0,value:_},scale:{configurable:!0,enumerable:!0,value:x},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(f){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(f),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(f){return this.quaternion.premultiply(f),this}setRotationFromAxisAngle(f,m){this.quaternion.setFromAxisAngle(f,m)}setRotationFromEuler(f){this.quaternion.setFromEuler(f,!0)}setRotationFromMatrix(f){this.quaternion.setFromRotationMatrix(f)}setRotationFromQuaternion(f){this.quaternion.copy(f)}rotateOnAxis(f,m){return _q1.setFromAxisAngle(f,m),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(f,m){return _q1.setFromAxisAngle(f,m),this.quaternion.premultiply(_q1),this}rotateX(f){return this.rotateOnAxis(_xAxis,f)}rotateY(f){return this.rotateOnAxis(_yAxis,f)}rotateZ(f){return this.rotateOnAxis(_zAxis,f)}translateOnAxis(f,m){return _v1$4.copy(f).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(m)),this}translateX(f){return this.translateOnAxis(_xAxis,f)}translateY(f){return this.translateOnAxis(_yAxis,f)}translateZ(f){return this.translateOnAxis(_zAxis,f)}localToWorld(f){return this.updateWorldMatrix(!0,!1),f.applyMatrix4(this.matrixWorld)}worldToLocal(f){return this.updateWorldMatrix(!0,!1),f.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(f,m,_){f.isVector3?_target.copy(f):_target.set(f,m,_);const x=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),x&&(_m1$1.extractRotation(x.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(f){if(arguments.length>1){for(let m=0;m<arguments.length;m++)this.add(arguments[m]);return this}return f===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",f),this):(f&&f.isObject3D?(f.parent!==null&&f.parent.remove(f),f.parent=this,this.children.push(f),f.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",f),this)}remove(f){if(arguments.length>1){for(let _=0;_<arguments.length;_++)this.remove(arguments[_]);return this}const m=this.children.indexOf(f);return m!==-1&&(f.parent=null,this.children.splice(m,1),f.dispatchEvent(_removedEvent)),this}removeFromParent(){const f=this.parent;return f!==null&&f.remove(this),this}clear(){for(let f=0;f<this.children.length;f++){const m=this.children[f];m.parent=null,m.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(f){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),f.parent!==null&&(f.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(f.parent.matrixWorld)),f.applyMatrix4(_m1$1),this.add(f),f.updateWorldMatrix(!1,!0),this}getObjectById(f){return this.getObjectByProperty("id",f)}getObjectByName(f){return this.getObjectByProperty("name",f)}getObjectByProperty(f,m){if(this[f]===m)return this;for(let _=0,x=this.children.length;_<x;_++){const y=this.children[_].getObjectByProperty(f,m);if(y!==void 0)return y}}getObjectsByProperty(f,m){let _=[];this[f]===m&&_.push(this);for(let x=0,v=this.children.length;x<v;x++){const y=this.children[x].getObjectsByProperty(f,m);y.length>0&&(_=_.concat(y))}return _}getWorldPosition(f){return this.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(f){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,f,_scale$2),f}getWorldScale(f){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,f),f}getWorldDirection(f){this.updateWorldMatrix(!0,!1);const m=this.matrixWorld.elements;return f.set(m[8],m[9],m[10]).normalize()}raycast(){}traverse(f){f(this);const m=this.children;for(let _=0,x=m.length;_<x;_++)m[_].traverse(f)}traverseVisible(f){if(this.visible===!1)return;f(this);const m=this.children;for(let _=0,x=m.length;_<x;_++)m[_].traverseVisible(f)}traverseAncestors(f){const m=this.parent;m!==null&&(f(m),m.traverseAncestors(f))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(f){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||f)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,f=!0);const m=this.children;for(let _=0,x=m.length;_<x;_++){const v=m[_];(v.matrixWorldAutoUpdate===!0||f===!0)&&v.updateMatrixWorld(f)}}updateWorldMatrix(f,m){const _=this.parent;if(f===!0&&_!==null&&_.matrixWorldAutoUpdate===!0&&_.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),m===!0){const x=this.children;for(let v=0,y=x.length;v<y;v++){const M=x[v];M.matrixWorldAutoUpdate===!0&&M.updateWorldMatrix(!1,!0)}}}toJSON(f){const m=f===void 0||typeof f=="string",_={};m&&(f={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},_.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const x={};x.uuid=this.uuid,x.type=this.type,this.name!==""&&(x.name=this.name),this.castShadow===!0&&(x.castShadow=!0),this.receiveShadow===!0&&(x.receiveShadow=!0),this.visible===!1&&(x.visible=!1),this.frustumCulled===!1&&(x.frustumCulled=!1),this.renderOrder!==0&&(x.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(x.userData=this.userData),x.layers=this.layers.mask,x.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(x.matrixAutoUpdate=!1),this.isInstancedMesh&&(x.type="InstancedMesh",x.count=this.count,x.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(x.instanceColor=this.instanceColor.toJSON()));function v(M,S){return M[S.uuid]===void 0&&(M[S.uuid]=S.toJSON(f)),S.uuid}if(this.isScene)this.background&&(this.background.isColor?x.background=this.background.toJSON():this.background.isTexture&&(x.background=this.background.toJSON(f).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(x.environment=this.environment.toJSON(f).uuid);else if(this.isMesh||this.isLine||this.isPoints){x.geometry=v(f.geometries,this.geometry);const M=this.geometry.parameters;if(M!==void 0&&M.shapes!==void 0){const S=M.shapes;if(Array.isArray(S))for(let w=0,T=S.length;w<T;w++){const A=S[w];v(f.shapes,A)}else v(f.shapes,S)}}if(this.isSkinnedMesh&&(x.bindMode=this.bindMode,x.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(v(f.skeletons,this.skeleton),x.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const M=[];for(let S=0,w=this.material.length;S<w;S++)M.push(v(f.materials,this.material[S]));x.material=M}else x.material=v(f.materials,this.material);if(this.children.length>0){x.children=[];for(let M=0;M<this.children.length;M++)x.children.push(this.children[M].toJSON(f).object)}if(this.animations.length>0){x.animations=[];for(let M=0;M<this.animations.length;M++){const S=this.animations[M];x.animations.push(v(f.animations,S))}}if(m){const M=y(f.geometries),S=y(f.materials),w=y(f.textures),T=y(f.images),A=y(f.shapes),E=y(f.skeletons),R=y(f.animations),P=y(f.nodes);M.length>0&&(_.geometries=M),S.length>0&&(_.materials=S),w.length>0&&(_.textures=w),T.length>0&&(_.images=T),A.length>0&&(_.shapes=A),E.length>0&&(_.skeletons=E),R.length>0&&(_.animations=R),P.length>0&&(_.nodes=P)}return _.object=x,_;function y(M){const S=[];for(const w in M){const T=M[w];delete T.metadata,S.push(T)}return S}}clone(f){return new this.constructor().copy(this,f)}copy(f,m=!0){if(this.name=f.name,this.up.copy(f.up),this.position.copy(f.position),this.rotation.order=f.rotation.order,this.quaternion.copy(f.quaternion),this.scale.copy(f.scale),this.matrix.copy(f.matrix),this.matrixWorld.copy(f.matrixWorld),this.matrixAutoUpdate=f.matrixAutoUpdate,this.matrixWorldNeedsUpdate=f.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=f.matrixWorldAutoUpdate,this.layers.mask=f.layers.mask,this.visible=f.visible,this.castShadow=f.castShadow,this.receiveShadow=f.receiveShadow,this.frustumCulled=f.frustumCulled,this.renderOrder=f.renderOrder,this.userData=JSON.parse(JSON.stringify(f.userData)),m===!0)for(let _=0;_<f.children.length;_++){const x=f.children[_];this.add(x.clone())}return this}}Object3D.DEFAULT_UP=new Vector3(0,1,0);Object3D.DEFAULT_MATRIX_AUTO_UPDATE=!0;Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(f=new Vector3,m=new Vector3,_=new Vector3){this.a=f,this.b=m,this.c=_}static getNormal(f,m,_,x){x.subVectors(_,m),_v0$1.subVectors(f,m),x.cross(_v0$1);const v=x.lengthSq();return v>0?x.multiplyScalar(1/Math.sqrt(v)):x.set(0,0,0)}static getBarycoord(f,m,_,x,v){_v0$1.subVectors(x,m),_v1$3.subVectors(_,m),_v2$2.subVectors(f,m);const y=_v0$1.dot(_v0$1),M=_v0$1.dot(_v1$3),S=_v0$1.dot(_v2$2),w=_v1$3.dot(_v1$3),T=_v1$3.dot(_v2$2),A=y*w-M*M;if(A===0)return v.set(-2,-1,-1);const E=1/A,R=(w*S-M*T)*E,P=(y*T-M*S)*E;return v.set(1-R-P,P,R)}static containsPoint(f,m,_,x){return this.getBarycoord(f,m,_,x,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(f,m,_,x,v,y,M,S){return this.getBarycoord(f,m,_,x,_v3$1),S.set(0,0),S.addScaledVector(v,_v3$1.x),S.addScaledVector(y,_v3$1.y),S.addScaledVector(M,_v3$1.z),S}static isFrontFacing(f,m,_,x){return _v0$1.subVectors(_,m),_v1$3.subVectors(f,m),_v0$1.cross(_v1$3).dot(x)<0}set(f,m,_){return this.a.copy(f),this.b.copy(m),this.c.copy(_),this}setFromPointsAndIndices(f,m,_,x){return this.a.copy(f[m]),this.b.copy(f[_]),this.c.copy(f[x]),this}setFromAttributeAndIndices(f,m,_,x){return this.a.fromBufferAttribute(f,m),this.b.fromBufferAttribute(f,_),this.c.fromBufferAttribute(f,x),this}clone(){return new this.constructor().copy(this)}copy(f){return this.a.copy(f.a),this.b.copy(f.b),this.c.copy(f.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(f){return f.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(f){return Triangle.getNormal(this.a,this.b,this.c,f)}getPlane(f){return f.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(f,m){return Triangle.getBarycoord(f,this.a,this.b,this.c,m)}getUV(f,m,_,x,v){return Triangle.getUV(f,this.a,this.b,this.c,m,_,x,v)}containsPoint(f){return Triangle.containsPoint(f,this.a,this.b,this.c)}isFrontFacing(f){return Triangle.isFrontFacing(this.a,this.b,this.c,f)}intersectsBox(f){return f.intersectsTriangle(this)}closestPointToPoint(f,m){const _=this.a,x=this.b,v=this.c;let y,M;_vab.subVectors(x,_),_vac.subVectors(v,_),_vap.subVectors(f,_);const S=_vab.dot(_vap),w=_vac.dot(_vap);if(S<=0&&w<=0)return m.copy(_);_vbp.subVectors(f,x);const T=_vab.dot(_vbp),A=_vac.dot(_vbp);if(T>=0&&A<=T)return m.copy(x);const E=S*A-T*w;if(E<=0&&S>=0&&T<=0)return y=S/(S-T),m.copy(_).addScaledVector(_vab,y);_vcp.subVectors(f,v);const R=_vab.dot(_vcp),P=_vac.dot(_vcp);if(P>=0&&R<=P)return m.copy(v);const C=R*w-S*P;if(C<=0&&w>=0&&P<=0)return M=w/(w-P),m.copy(_).addScaledVector(_vac,M);const L=T*P-R*A;if(L<=0&&A-T>=0&&R-P>=0)return _vbc.subVectors(v,x),M=(A-T)/(A-T+(R-P)),m.copy(x).addScaledVector(_vbc,M);const D=1/(L+C+E);return y=C*D,M=E*D,m.copy(_).addScaledVector(_vab,y).addScaledVector(_vac,M)}equals(f){return f.a.equals(this.a)&&f.b.equals(this.b)&&f.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(f){this._alphaTest>0!=f>0&&this.version++,this._alphaTest=f}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(f){if(f!==void 0)for(const m in f){const _=f[m];if(_===void 0){console.warn("THREE.Material: '"+m+"' parameter is undefined.");continue}const x=this[m];if(x===void 0){console.warn("THREE."+this.type+": '"+m+"' is not a property of this material.");continue}x&&x.isColor?x.set(_):x&&x.isVector3&&_&&_.isVector3?x.copy(_):this[m]=_}}toJSON(f){const m=f===void 0||typeof f=="string";m&&(f={textures:{},images:{}});const _={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};_.uuid=this.uuid,_.type=this.type,this.name!==""&&(_.name=this.name),this.color&&this.color.isColor&&(_.color=this.color.getHex()),this.roughness!==void 0&&(_.roughness=this.roughness),this.metalness!==void 0&&(_.metalness=this.metalness),this.sheen!==void 0&&(_.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(_.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(_.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(_.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(_.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(_.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(_.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(_.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(_.shininess=this.shininess),this.clearcoat!==void 0&&(_.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(_.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(_.clearcoatMap=this.clearcoatMap.toJSON(f).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(_.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(f).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(_.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(f).uuid,_.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(_.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(_.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(_.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(_.iridescenceMap=this.iridescenceMap.toJSON(f).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(_.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(f).uuid),this.map&&this.map.isTexture&&(_.map=this.map.toJSON(f).uuid),this.matcap&&this.matcap.isTexture&&(_.matcap=this.matcap.toJSON(f).uuid),this.alphaMap&&this.alphaMap.isTexture&&(_.alphaMap=this.alphaMap.toJSON(f).uuid),this.lightMap&&this.lightMap.isTexture&&(_.lightMap=this.lightMap.toJSON(f).uuid,_.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(_.aoMap=this.aoMap.toJSON(f).uuid,_.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(_.bumpMap=this.bumpMap.toJSON(f).uuid,_.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(_.normalMap=this.normalMap.toJSON(f).uuid,_.normalMapType=this.normalMapType,_.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(_.displacementMap=this.displacementMap.toJSON(f).uuid,_.displacementScale=this.displacementScale,_.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(_.roughnessMap=this.roughnessMap.toJSON(f).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(_.metalnessMap=this.metalnessMap.toJSON(f).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(_.emissiveMap=this.emissiveMap.toJSON(f).uuid),this.specularMap&&this.specularMap.isTexture&&(_.specularMap=this.specularMap.toJSON(f).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(_.specularIntensityMap=this.specularIntensityMap.toJSON(f).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(_.specularColorMap=this.specularColorMap.toJSON(f).uuid),this.envMap&&this.envMap.isTexture&&(_.envMap=this.envMap.toJSON(f).uuid,this.combine!==void 0&&(_.combine=this.combine)),this.envMapIntensity!==void 0&&(_.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(_.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(_.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(_.gradientMap=this.gradientMap.toJSON(f).uuid),this.transmission!==void 0&&(_.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(_.transmissionMap=this.transmissionMap.toJSON(f).uuid),this.thickness!==void 0&&(_.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(_.thicknessMap=this.thicknessMap.toJSON(f).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(_.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(_.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(_.size=this.size),this.shadowSide!==null&&(_.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(_.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(_.blending=this.blending),this.side!==FrontSide&&(_.side=this.side),this.vertexColors&&(_.vertexColors=!0),this.opacity<1&&(_.opacity=this.opacity),this.transparent===!0&&(_.transparent=this.transparent),_.depthFunc=this.depthFunc,_.depthTest=this.depthTest,_.depthWrite=this.depthWrite,_.colorWrite=this.colorWrite,_.stencilWrite=this.stencilWrite,_.stencilWriteMask=this.stencilWriteMask,_.stencilFunc=this.stencilFunc,_.stencilRef=this.stencilRef,_.stencilFuncMask=this.stencilFuncMask,_.stencilFail=this.stencilFail,_.stencilZFail=this.stencilZFail,_.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(_.rotation=this.rotation),this.polygonOffset===!0&&(_.polygonOffset=!0),this.polygonOffsetFactor!==0&&(_.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(_.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(_.linewidth=this.linewidth),this.dashSize!==void 0&&(_.dashSize=this.dashSize),this.gapSize!==void 0&&(_.gapSize=this.gapSize),this.scale!==void 0&&(_.scale=this.scale),this.dithering===!0&&(_.dithering=!0),this.alphaTest>0&&(_.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(_.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(_.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(_.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(_.wireframe=this.wireframe),this.wireframeLinewidth>1&&(_.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(_.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(_.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(_.flatShading=this.flatShading),this.visible===!1&&(_.visible=!1),this.toneMapped===!1&&(_.toneMapped=!1),this.fog===!1&&(_.fog=!1),Object.keys(this.userData).length>0&&(_.userData=this.userData);function x(v){const y=[];for(const M in v){const S=v[M];delete S.metadata,y.push(S)}return y}if(m){const v=x(f.textures),y=x(f.images);v.length>0&&(_.textures=v),y.length>0&&(_.images=y)}return _}clone(){return new this.constructor().copy(this)}copy(f){this.name=f.name,this.blending=f.blending,this.side=f.side,this.vertexColors=f.vertexColors,this.opacity=f.opacity,this.transparent=f.transparent,this.blendSrc=f.blendSrc,this.blendDst=f.blendDst,this.blendEquation=f.blendEquation,this.blendSrcAlpha=f.blendSrcAlpha,this.blendDstAlpha=f.blendDstAlpha,this.blendEquationAlpha=f.blendEquationAlpha,this.depthFunc=f.depthFunc,this.depthTest=f.depthTest,this.depthWrite=f.depthWrite,this.stencilWriteMask=f.stencilWriteMask,this.stencilFunc=f.stencilFunc,this.stencilRef=f.stencilRef,this.stencilFuncMask=f.stencilFuncMask,this.stencilFail=f.stencilFail,this.stencilZFail=f.stencilZFail,this.stencilZPass=f.stencilZPass,this.stencilWrite=f.stencilWrite;const m=f.clippingPlanes;let _=null;if(m!==null){const x=m.length;_=new Array(x);for(let v=0;v!==x;++v)_[v]=m[v].clone()}return this.clippingPlanes=_,this.clipIntersection=f.clipIntersection,this.clipShadows=f.clipShadows,this.shadowSide=f.shadowSide,this.colorWrite=f.colorWrite,this.precision=f.precision,this.polygonOffset=f.polygonOffset,this.polygonOffsetFactor=f.polygonOffsetFactor,this.polygonOffsetUnits=f.polygonOffsetUnits,this.dithering=f.dithering,this.alphaTest=f.alphaTest,this.alphaToCoverage=f.alphaToCoverage,this.premultipliedAlpha=f.premultipliedAlpha,this.forceSinglePass=f.forceSinglePass,this.visible=f.visible,this.toneMapped=f.toneMapped,this.userData=JSON.parse(JSON.stringify(f.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(f){f===!0&&this.version++}}const _colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(b,f,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?b+(f-b)*6*m:m<1/2?f:m<2/3?b+(f-b)*6*(2/3-m):b}class Color{constructor(f,m,_){return this.isColor=!0,this.r=1,this.g=1,this.b=1,m===void 0&&_===void 0?this.set(f):this.setRGB(f,m,_)}set(f){return f&&f.isColor?this.copy(f):typeof f=="number"?this.setHex(f):typeof f=="string"&&this.setStyle(f),this}setScalar(f){return this.r=f,this.g=f,this.b=f,this}setHex(f,m=SRGBColorSpace){return f=Math.floor(f),this.r=(f>>16&255)/255,this.g=(f>>8&255)/255,this.b=(f&255)/255,ColorManagement.toWorkingColorSpace(this,m),this}setRGB(f,m,_,x=ColorManagement.workingColorSpace){return this.r=f,this.g=m,this.b=_,ColorManagement.toWorkingColorSpace(this,x),this}setHSL(f,m,_,x=ColorManagement.workingColorSpace){if(f=euclideanModulo(f,1),m=clamp(m,0,1),_=clamp(_,0,1),m===0)this.r=this.g=this.b=_;else{const v=_<=.5?_*(1+m):_+m-_*m,y=2*_-v;this.r=hue2rgb(y,v,f+1/3),this.g=hue2rgb(y,v,f),this.b=hue2rgb(y,v,f-1/3)}return ColorManagement.toWorkingColorSpace(this,x),this}setStyle(f,m=SRGBColorSpace){function _(v){v!==void 0&&parseFloat(v)<1&&console.warn("THREE.Color: Alpha component of "+f+" will be ignored.")}let x;if(x=/^(\w+)\(([^\)]*)\)/.exec(f)){let v;const y=x[1],M=x[2];switch(y){case"rgb":case"rgba":if(v=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))return this.r=Math.min(255,parseInt(v[1],10))/255,this.g=Math.min(255,parseInt(v[2],10))/255,this.b=Math.min(255,parseInt(v[3],10))/255,ColorManagement.toWorkingColorSpace(this,m),_(v[4]),this;if(v=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M))return this.r=Math.min(100,parseInt(v[1],10))/100,this.g=Math.min(100,parseInt(v[2],10))/100,this.b=Math.min(100,parseInt(v[3],10))/100,ColorManagement.toWorkingColorSpace(this,m),_(v[4]),this;break;case"hsl":case"hsla":if(v=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(M)){const S=parseFloat(v[1])/360,w=parseFloat(v[2])/100,T=parseFloat(v[3])/100;return _(v[4]),this.setHSL(S,w,T,m)}break;default:console.warn("THREE.Color: Unknown color model "+f)}}else if(x=/^\#([A-Fa-f\d]+)$/.exec(f)){const v=x[1],y=v.length;if(y===3)return this.r=parseInt(v.charAt(0)+v.charAt(0),16)/255,this.g=parseInt(v.charAt(1)+v.charAt(1),16)/255,this.b=parseInt(v.charAt(2)+v.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,m),this;if(y===6)return this.r=parseInt(v.charAt(0)+v.charAt(1),16)/255,this.g=parseInt(v.charAt(2)+v.charAt(3),16)/255,this.b=parseInt(v.charAt(4)+v.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,m),this;console.warn("THREE.Color: Invalid hex color "+f)}else if(f&&f.length>0)return this.setColorName(f,m);return this}setColorName(f,m=SRGBColorSpace){const _=_colorKeywords[f.toLowerCase()];return _!==void 0?this.setHex(_,m):console.warn("THREE.Color: Unknown color "+f),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(f){return this.r=f.r,this.g=f.g,this.b=f.b,this}copySRGBToLinear(f){return this.r=SRGBToLinear(f.r),this.g=SRGBToLinear(f.g),this.b=SRGBToLinear(f.b),this}copyLinearToSRGB(f){return this.r=LinearToSRGB(f.r),this.g=LinearToSRGB(f.g),this.b=LinearToSRGB(f.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(f=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),f),clamp(_color.r*255,0,255)<<16^clamp(_color.g*255,0,255)<<8^clamp(_color.b*255,0,255)<<0}getHexString(f=SRGBColorSpace){return("000000"+this.getHex(f).toString(16)).slice(-6)}getHSL(f,m=ColorManagement.workingColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),m);const _=_color.r,x=_color.g,v=_color.b,y=Math.max(_,x,v),M=Math.min(_,x,v);let S,w;const T=(M+y)/2;if(M===y)S=0,w=0;else{const A=y-M;switch(w=T<=.5?A/(y+M):A/(2-y-M),y){case _:S=(x-v)/A+(x<v?6:0);break;case x:S=(v-_)/A+2;break;case v:S=(_-x)/A+4;break}S/=6}return f.h=S,f.s=w,f.l=T,f}getRGB(f,m=ColorManagement.workingColorSpace){return ColorManagement.fromWorkingColorSpace(_color.copy(this),m),f.r=_color.r,f.g=_color.g,f.b=_color.b,f}getStyle(f=SRGBColorSpace){ColorManagement.fromWorkingColorSpace(_color.copy(this),f);const m=_color.r,_=_color.g,x=_color.b;return f!==SRGBColorSpace?`color(${f} ${m.toFixed(3)} ${_.toFixed(3)} ${x.toFixed(3)})`:`rgb(${m*255|0},${_*255|0},${x*255|0})`}offsetHSL(f,m,_){return this.getHSL(_hslA),_hslA.h+=f,_hslA.s+=m,_hslA.l+=_,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(f){return this.r+=f.r,this.g+=f.g,this.b+=f.b,this}addColors(f,m){return this.r=f.r+m.r,this.g=f.g+m.g,this.b=f.b+m.b,this}addScalar(f){return this.r+=f,this.g+=f,this.b+=f,this}sub(f){return this.r=Math.max(0,this.r-f.r),this.g=Math.max(0,this.g-f.g),this.b=Math.max(0,this.b-f.b),this}multiply(f){return this.r*=f.r,this.g*=f.g,this.b*=f.b,this}multiplyScalar(f){return this.r*=f,this.g*=f,this.b*=f,this}lerp(f,m){return this.r+=(f.r-this.r)*m,this.g+=(f.g-this.g)*m,this.b+=(f.b-this.b)*m,this}lerpColors(f,m,_){return this.r=f.r+(m.r-f.r)*_,this.g=f.g+(m.g-f.g)*_,this.b=f.b+(m.b-f.b)*_,this}lerpHSL(f,m){this.getHSL(_hslA),f.getHSL(_hslB);const _=lerp(_hslA.h,_hslB.h,m),x=lerp(_hslA.s,_hslB.s,m),v=lerp(_hslA.l,_hslB.l,m);return this.setHSL(_,x,v),this}equals(f){return f.r===this.r&&f.g===this.g&&f.b===this.b}fromArray(f,m=0){return this.r=f[m],this.g=f[m+1],this.b=f[m+2],this}toArray(f=[],m=0){return f[m]=this.r,f[m+1]=this.g,f[m+2]=this.b,f}fromBufferAttribute(f,m){return this.r=f.getX(m),this.g=f.getY(m),this.b=f.getZ(m),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _color=new Color;Color.NAMES=_colorKeywords;class MeshBasicMaterial extends Material{constructor(f){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.specularMap=f.specularMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.combine=f.combine,this.reflectivity=f.reflectivity,this.refractionRatio=f.refractionRatio,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.fog=f.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(f,m,_=!1){if(Array.isArray(f))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=f,this.itemSize=m,this.count=f!==void 0?f.length/m:0,this.normalized=_,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(f){f===!0&&this.version++}setUsage(f){return this.usage=f,this}copy(f){return this.name=f.name,this.array=new f.array.constructor(f.array),this.itemSize=f.itemSize,this.count=f.count,this.normalized=f.normalized,this.usage=f.usage,this}copyAt(f,m,_){f*=this.itemSize,_*=m.itemSize;for(let x=0,v=this.itemSize;x<v;x++)this.array[f+x]=m.array[_+x];return this}copyArray(f){return this.array.set(f),this}applyMatrix3(f){if(this.itemSize===2)for(let m=0,_=this.count;m<_;m++)_vector2$1.fromBufferAttribute(this,m),_vector2$1.applyMatrix3(f),this.setXY(m,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let m=0,_=this.count;m<_;m++)_vector$9.fromBufferAttribute(this,m),_vector$9.applyMatrix3(f),this.setXYZ(m,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(f){for(let m=0,_=this.count;m<_;m++)_vector$9.fromBufferAttribute(this,m),_vector$9.applyMatrix4(f),this.setXYZ(m,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(f){for(let m=0,_=this.count;m<_;m++)_vector$9.fromBufferAttribute(this,m),_vector$9.applyNormalMatrix(f),this.setXYZ(m,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(f){for(let m=0,_=this.count;m<_;m++)_vector$9.fromBufferAttribute(this,m),_vector$9.transformDirection(f),this.setXYZ(m,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(f,m=0){return this.array.set(f,m),this}getX(f){let m=this.array[f*this.itemSize];return this.normalized&&(m=denormalize(m,this.array)),m}setX(f,m){return this.normalized&&(m=normalize(m,this.array)),this.array[f*this.itemSize]=m,this}getY(f){let m=this.array[f*this.itemSize+1];return this.normalized&&(m=denormalize(m,this.array)),m}setY(f,m){return this.normalized&&(m=normalize(m,this.array)),this.array[f*this.itemSize+1]=m,this}getZ(f){let m=this.array[f*this.itemSize+2];return this.normalized&&(m=denormalize(m,this.array)),m}setZ(f,m){return this.normalized&&(m=normalize(m,this.array)),this.array[f*this.itemSize+2]=m,this}getW(f){let m=this.array[f*this.itemSize+3];return this.normalized&&(m=denormalize(m,this.array)),m}setW(f,m){return this.normalized&&(m=normalize(m,this.array)),this.array[f*this.itemSize+3]=m,this}setXY(f,m,_){return f*=this.itemSize,this.normalized&&(m=normalize(m,this.array),_=normalize(_,this.array)),this.array[f+0]=m,this.array[f+1]=_,this}setXYZ(f,m,_,x){return f*=this.itemSize,this.normalized&&(m=normalize(m,this.array),_=normalize(_,this.array),x=normalize(x,this.array)),this.array[f+0]=m,this.array[f+1]=_,this.array[f+2]=x,this}setXYZW(f,m,_,x,v){return f*=this.itemSize,this.normalized&&(m=normalize(m,this.array),_=normalize(_,this.array),x=normalize(x,this.array),v=normalize(v,this.array)),this.array[f+0]=m,this.array[f+1]=_,this.array[f+2]=x,this.array[f+3]=v,this}onUpload(f){return this.onUploadCallback=f,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const f={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(f.name=this.name),this.usage!==StaticDrawUsage&&(f.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(f.updateRange=this.updateRange),f}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uint16BufferAttribute extends BufferAttribute{constructor(f,m,_){super(new Uint16Array(f),m,_)}}class Uint32BufferAttribute extends BufferAttribute{constructor(f,m,_){super(new Uint32Array(f),m,_)}}class Float32BufferAttribute extends BufferAttribute{constructor(f,m,_){super(new Float32Array(f),m,_)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(f){return Array.isArray(f)?this.index=new(arrayNeedsUint32(f)?Uint32BufferAttribute:Uint16BufferAttribute)(f,1):this.index=f,this}getAttribute(f){return this.attributes[f]}setAttribute(f,m){return this.attributes[f]=m,this}deleteAttribute(f){return delete this.attributes[f],this}hasAttribute(f){return this.attributes[f]!==void 0}addGroup(f,m,_=0){this.groups.push({start:f,count:m,materialIndex:_})}clearGroups(){this.groups=[]}setDrawRange(f,m){this.drawRange.start=f,this.drawRange.count=m}applyMatrix4(f){const m=this.attributes.position;m!==void 0&&(m.applyMatrix4(f),m.needsUpdate=!0);const _=this.attributes.normal;if(_!==void 0){const v=new Matrix3().getNormalMatrix(f);_.applyNormalMatrix(v),_.needsUpdate=!0}const x=this.attributes.tangent;return x!==void 0&&(x.transformDirection(f),x.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(f){return _m1.makeRotationFromQuaternion(f),this.applyMatrix4(_m1),this}rotateX(f){return _m1.makeRotationX(f),this.applyMatrix4(_m1),this}rotateY(f){return _m1.makeRotationY(f),this.applyMatrix4(_m1),this}rotateZ(f){return _m1.makeRotationZ(f),this.applyMatrix4(_m1),this}translate(f,m,_){return _m1.makeTranslation(f,m,_),this.applyMatrix4(_m1),this}scale(f,m,_){return _m1.makeScale(f,m,_),this.applyMatrix4(_m1),this}lookAt(f){return _obj.lookAt(f),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(f){const m=[];for(let _=0,x=f.length;_<x;_++){const v=f[_];m.push(v.x,v.y,v.z||0)}return this.setAttribute("position",new Float32BufferAttribute(m,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const f=this.attributes.position,m=this.morphAttributes.position;if(f&&f.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(f!==void 0){if(this.boundingBox.setFromBufferAttribute(f),m)for(let _=0,x=m.length;_<x;_++){const v=m[_];_box$1.setFromBufferAttribute(v),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const f=this.attributes.position,m=this.morphAttributes.position;if(f&&f.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(f){const _=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(f),m)for(let v=0,y=m.length;v<y;v++){const M=m[v];_boxMorphTargets.setFromBufferAttribute(M),this.morphTargetsRelative?(_vector$8.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$8)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(_);let x=0;for(let v=0,y=f.count;v<y;v++)_vector$8.fromBufferAttribute(f,v),x=Math.max(x,_.distanceToSquared(_vector$8));if(m)for(let v=0,y=m.length;v<y;v++){const M=m[v],S=this.morphTargetsRelative;for(let w=0,T=M.count;w<T;w++)_vector$8.fromBufferAttribute(M,w),S&&(_offset.fromBufferAttribute(f,w),_vector$8.add(_offset)),x=Math.max(x,_.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(x),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const f=this.index,m=this.attributes;if(f===null||m.position===void 0||m.normal===void 0||m.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const _=f.array,x=m.position.array,v=m.normal.array,y=m.uv.array,M=x.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*M),4));const S=this.getAttribute("tangent").array,w=[],T=[];for(let Y=0;Y<M;Y++)w[Y]=new Vector3,T[Y]=new Vector3;const A=new Vector3,E=new Vector3,R=new Vector3,P=new Vector2,C=new Vector2,L=new Vector2,D=new Vector3,U=new Vector3;function I(Y,oe,ae){A.fromArray(x,Y*3),E.fromArray(x,oe*3),R.fromArray(x,ae*3),P.fromArray(y,Y*2),C.fromArray(y,oe*2),L.fromArray(y,ae*2),E.sub(A),R.sub(A),C.sub(P),L.sub(P);const K=1/(C.x*L.y-L.x*C.y);isFinite(K)&&(D.copy(E).multiplyScalar(L.y).addScaledVector(R,-C.y).multiplyScalar(K),U.copy(R).multiplyScalar(C.x).addScaledVector(E,-L.x).multiplyScalar(K),w[Y].add(D),w[oe].add(D),w[ae].add(D),T[Y].add(U),T[oe].add(U),T[ae].add(U))}let O=this.groups;O.length===0&&(O=[{start:0,count:_.length}]);for(let Y=0,oe=O.length;Y<oe;++Y){const ae=O[Y],K=ae.start,X=ae.count;for(let ee=K,le=K+X;ee<le;ee+=3)I(_[ee+0],_[ee+1],_[ee+2])}const V=new Vector3,H=new Vector3,$=new Vector3,F=new Vector3;function k(Y){$.fromArray(v,Y*3),F.copy($);const oe=w[Y];V.copy(oe),V.sub($.multiplyScalar($.dot(oe))).normalize(),H.crossVectors(F,oe);const K=H.dot(T[Y])<0?-1:1;S[Y*4]=V.x,S[Y*4+1]=V.y,S[Y*4+2]=V.z,S[Y*4+3]=K}for(let Y=0,oe=O.length;Y<oe;++Y){const ae=O[Y],K=ae.start,X=ae.count;for(let ee=K,le=K+X;ee<le;ee+=3)k(_[ee+0]),k(_[ee+1]),k(_[ee+2])}}computeVertexNormals(){const f=this.index,m=this.getAttribute("position");if(m!==void 0){let _=this.getAttribute("normal");if(_===void 0)_=new BufferAttribute(new Float32Array(m.count*3),3),this.setAttribute("normal",_);else for(let E=0,R=_.count;E<R;E++)_.setXYZ(E,0,0,0);const x=new Vector3,v=new Vector3,y=new Vector3,M=new Vector3,S=new Vector3,w=new Vector3,T=new Vector3,A=new Vector3;if(f)for(let E=0,R=f.count;E<R;E+=3){const P=f.getX(E+0),C=f.getX(E+1),L=f.getX(E+2);x.fromBufferAttribute(m,P),v.fromBufferAttribute(m,C),y.fromBufferAttribute(m,L),T.subVectors(y,v),A.subVectors(x,v),T.cross(A),M.fromBufferAttribute(_,P),S.fromBufferAttribute(_,C),w.fromBufferAttribute(_,L),M.add(T),S.add(T),w.add(T),_.setXYZ(P,M.x,M.y,M.z),_.setXYZ(C,S.x,S.y,S.z),_.setXYZ(L,w.x,w.y,w.z)}else for(let E=0,R=m.count;E<R;E+=3)x.fromBufferAttribute(m,E+0),v.fromBufferAttribute(m,E+1),y.fromBufferAttribute(m,E+2),T.subVectors(y,v),A.subVectors(x,v),T.cross(A),_.setXYZ(E+0,T.x,T.y,T.z),_.setXYZ(E+1,T.x,T.y,T.z),_.setXYZ(E+2,T.x,T.y,T.z);this.normalizeNormals(),_.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const f=this.attributes.normal;for(let m=0,_=f.count;m<_;m++)_vector$8.fromBufferAttribute(f,m),_vector$8.normalize(),f.setXYZ(m,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function f(M,S){const w=M.array,T=M.itemSize,A=M.normalized,E=new w.constructor(S.length*T);let R=0,P=0;for(let C=0,L=S.length;C<L;C++){M.isInterleavedBufferAttribute?R=S[C]*M.data.stride+M.offset:R=S[C]*T;for(let D=0;D<T;D++)E[P++]=w[R++]}return new BufferAttribute(E,T,A)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const m=new BufferGeometry,_=this.index.array,x=this.attributes;for(const M in x){const S=x[M],w=f(S,_);m.setAttribute(M,w)}const v=this.morphAttributes;for(const M in v){const S=[],w=v[M];for(let T=0,A=w.length;T<A;T++){const E=w[T],R=f(E,_);S.push(R)}m.morphAttributes[M]=S}m.morphTargetsRelative=this.morphTargetsRelative;const y=this.groups;for(let M=0,S=y.length;M<S;M++){const w=y[M];m.addGroup(w.start,w.count,w.materialIndex)}return m}toJSON(){const f={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(f.uuid=this.uuid,f.type=this.type,this.name!==""&&(f.name=this.name),Object.keys(this.userData).length>0&&(f.userData=this.userData),this.parameters!==void 0){const S=this.parameters;for(const w in S)S[w]!==void 0&&(f[w]=S[w]);return f}f.data={attributes:{}};const m=this.index;m!==null&&(f.data.index={type:m.array.constructor.name,array:Array.prototype.slice.call(m.array)});const _=this.attributes;for(const S in _){const w=_[S];f.data.attributes[S]=w.toJSON(f.data)}const x={};let v=!1;for(const S in this.morphAttributes){const w=this.morphAttributes[S],T=[];for(let A=0,E=w.length;A<E;A++){const R=w[A];T.push(R.toJSON(f.data))}T.length>0&&(x[S]=T,v=!0)}v&&(f.data.morphAttributes=x,f.data.morphTargetsRelative=this.morphTargetsRelative);const y=this.groups;y.length>0&&(f.data.groups=JSON.parse(JSON.stringify(y)));const M=this.boundingSphere;return M!==null&&(f.data.boundingSphere={center:M.center.toArray(),radius:M.radius}),f}clone(){return new this.constructor().copy(this)}copy(f){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const m={};this.name=f.name;const _=f.index;_!==null&&this.setIndex(_.clone(m));const x=f.attributes;for(const w in x){const T=x[w];this.setAttribute(w,T.clone(m))}const v=f.morphAttributes;for(const w in v){const T=[],A=v[w];for(let E=0,R=A.length;E<R;E++)T.push(A[E].clone(m));this.morphAttributes[w]=T}this.morphTargetsRelative=f.morphTargetsRelative;const y=f.groups;for(let w=0,T=y.length;w<T;w++){const A=y[w];this.addGroup(A.start,A.count,A.materialIndex)}const M=f.boundingBox;M!==null&&(this.boundingBox=M.clone());const S=f.boundingSphere;return S!==null&&(this.boundingSphere=S.clone()),this.drawRange.start=f.drawRange.start,this.drawRange.count=f.drawRange.count,this.userData=f.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_sphereHitAt=new Vector3,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_morphA=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(f=new BufferGeometry,m=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=f,this.material=m,this.updateMorphTargets()}copy(f,m){return super.copy(f,m),f.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=f.morphTargetInfluences.slice()),f.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},f.morphTargetDictionary)),this.material=f.material,this.geometry=f.geometry,this}updateMorphTargets(){const m=this.geometry.morphAttributes,_=Object.keys(m);if(_.length>0){const x=m[_[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let v=0,y=x.length;v<y;v++){const M=x[v].name||String(v);this.morphTargetInfluences.push(0),this.morphTargetDictionary[M]=v}}}}getVertexPosition(f,m){const _=this.geometry,x=_.attributes.position,v=_.morphAttributes.position,y=_.morphTargetsRelative;m.fromBufferAttribute(x,f);const M=this.morphTargetInfluences;if(v&&M){_morphA.set(0,0,0);for(let S=0,w=v.length;S<w;S++){const T=M[S],A=v[S];T!==0&&(_tempA.fromBufferAttribute(A,f),y?_morphA.addScaledVector(_tempA,T):_morphA.addScaledVector(_tempA.sub(m),T))}m.add(_morphA)}return this.isSkinnedMesh&&this.boneTransform(f,m),m}raycast(f,m){const _=this.geometry,x=this.material,v=this.matrixWorld;if(x===void 0||(_.boundingSphere===null&&_.computeBoundingSphere(),_sphere$3.copy(_.boundingSphere),_sphere$3.applyMatrix4(v),_ray$2.copy(f.ray).recast(f.near),_sphere$3.containsPoint(_ray$2.origin)===!1&&(_ray$2.intersectSphere(_sphere$3,_sphereHitAt)===null||_ray$2.origin.distanceToSquared(_sphereHitAt)>(f.far-f.near)**2))||(_inverseMatrix$2.copy(v).invert(),_ray$2.copy(f.ray).applyMatrix4(_inverseMatrix$2),_.boundingBox!==null&&_ray$2.intersectsBox(_.boundingBox)===!1))return;let y;const M=_.index,S=_.attributes.position,w=_.attributes.uv,T=_.attributes.uv2,A=_.groups,E=_.drawRange;if(M!==null)if(Array.isArray(x))for(let R=0,P=A.length;R<P;R++){const C=A[R],L=x[C.materialIndex],D=Math.max(C.start,E.start),U=Math.min(M.count,Math.min(C.start+C.count,E.start+E.count));for(let I=D,O=U;I<O;I+=3){const V=M.getX(I),H=M.getX(I+1),$=M.getX(I+2);y=checkBufferGeometryIntersection(this,L,f,_ray$2,w,T,V,H,$),y&&(y.faceIndex=Math.floor(I/3),y.face.materialIndex=C.materialIndex,m.push(y))}}else{const R=Math.max(0,E.start),P=Math.min(M.count,E.start+E.count);for(let C=R,L=P;C<L;C+=3){const D=M.getX(C),U=M.getX(C+1),I=M.getX(C+2);y=checkBufferGeometryIntersection(this,x,f,_ray$2,w,T,D,U,I),y&&(y.faceIndex=Math.floor(C/3),m.push(y))}}else if(S!==void 0)if(Array.isArray(x))for(let R=0,P=A.length;R<P;R++){const C=A[R],L=x[C.materialIndex],D=Math.max(C.start,E.start),U=Math.min(S.count,Math.min(C.start+C.count,E.start+E.count));for(let I=D,O=U;I<O;I+=3){const V=I,H=I+1,$=I+2;y=checkBufferGeometryIntersection(this,L,f,_ray$2,w,T,V,H,$),y&&(y.faceIndex=Math.floor(I/3),y.face.materialIndex=C.materialIndex,m.push(y))}}else{const R=Math.max(0,E.start),P=Math.min(S.count,E.start+E.count);for(let C=R,L=P;C<L;C+=3){const D=C,U=C+1,I=C+2;y=checkBufferGeometryIntersection(this,x,f,_ray$2,w,T,D,U,I),y&&(y.faceIndex=Math.floor(C/3),m.push(y))}}}}function checkIntersection(b,f,m,_,x,v,y,M){let S;if(f.side===BackSide?S=_.intersectTriangle(y,v,x,!0,M):S=_.intersectTriangle(x,v,y,f.side===FrontSide,M),S===null)return null;_intersectionPointWorld.copy(M),_intersectionPointWorld.applyMatrix4(b.matrixWorld);const w=m.ray.origin.distanceTo(_intersectionPointWorld);return w<m.near||w>m.far?null:{distance:w,point:_intersectionPointWorld.clone(),object:b}}function checkBufferGeometryIntersection(b,f,m,_,x,v,y,M,S){b.getVertexPosition(y,_vA$1),b.getVertexPosition(M,_vB$1),b.getVertexPosition(S,_vC$1);const w=checkIntersection(b,f,m,_,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(w){x&&(_uvA$1.fromBufferAttribute(x,y),_uvB$1.fromBufferAttribute(x,M),_uvC$1.fromBufferAttribute(x,S),w.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),v&&(_uvA$1.fromBufferAttribute(v,y),_uvB$1.fromBufferAttribute(v,M),_uvC$1.fromBufferAttribute(v,S),w.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const T={a:y,b:M,c:S,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,T.normal),w.face=T}return w}class BoxGeometry extends BufferGeometry{constructor(f=1,m=1,_=1,x=1,v=1,y=1){super(),this.type="BoxGeometry",this.parameters={width:f,height:m,depth:_,widthSegments:x,heightSegments:v,depthSegments:y};const M=this;x=Math.floor(x),v=Math.floor(v),y=Math.floor(y);const S=[],w=[],T=[],A=[];let E=0,R=0;P("z","y","x",-1,-1,_,m,f,y,v,0),P("z","y","x",1,-1,_,m,-f,y,v,1),P("x","z","y",1,1,f,_,m,x,y,2),P("x","z","y",1,-1,f,_,-m,x,y,3),P("x","y","z",1,-1,f,m,_,x,v,4),P("x","y","z",-1,-1,f,m,-_,x,v,5),this.setIndex(S),this.setAttribute("position",new Float32BufferAttribute(w,3)),this.setAttribute("normal",new Float32BufferAttribute(T,3)),this.setAttribute("uv",new Float32BufferAttribute(A,2));function P(C,L,D,U,I,O,V,H,$,F,k){const Y=O/$,oe=V/F,ae=O/2,K=V/2,X=H/2,ee=$+1,le=F+1;let de=0,se=0;const fe=new Vector3;for(let ce=0;ce<le;ce++){const Re=ce*oe-K;for(let Q=0;Q<ee;Q++){const he=Q*Y-ae;fe[C]=he*U,fe[L]=Re*I,fe[D]=X,w.push(fe.x,fe.y,fe.z),fe[C]=0,fe[L]=0,fe[D]=H>0?1:-1,T.push(fe.x,fe.y,fe.z),A.push(Q/$),A.push(1-ce/F),de+=1}}for(let ce=0;ce<F;ce++)for(let Re=0;Re<$;Re++){const Q=E+Re+ee*ce,he=E+Re+ee*(ce+1),ge=E+(Re+1)+ee*(ce+1),Z=E+(Re+1)+ee*ce;S.push(Q,he,Z),S.push(he,ge,Z),se+=6}M.addGroup(R,se,k),R+=se,E+=de}}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new BoxGeometry(f.width,f.height,f.depth,f.widthSegments,f.heightSegments,f.depthSegments)}}function cloneUniforms(b){const f={};for(const m in b){f[m]={};for(const _ in b[m]){const x=b[m][_];x&&(x.isColor||x.isMatrix3||x.isMatrix4||x.isVector2||x.isVector3||x.isVector4||x.isTexture||x.isQuaternion)?f[m][_]=x.clone():Array.isArray(x)?f[m][_]=x.slice():f[m][_]=x}}return f}function mergeUniforms(b){const f={};for(let m=0;m<b.length;m++){const _=cloneUniforms(b[m]);for(const x in _)f[x]=_[x]}return f}function cloneUniformsGroups(b){const f=[];for(let m=0;m<b.length;m++)f.push(b[m].clone());return f}function getUnlitUniformColorSpace(b){return b.getRenderTarget()===null&&b.outputEncoding===sRGBEncoding?SRGBColorSpace:LinearSRGBColorSpace}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(f){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,f!==void 0&&this.setValues(f)}copy(f){return super.copy(f),this.fragmentShader=f.fragmentShader,this.vertexShader=f.vertexShader,this.uniforms=cloneUniforms(f.uniforms),this.uniformsGroups=cloneUniformsGroups(f.uniformsGroups),this.defines=Object.assign({},f.defines),this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.fog=f.fog,this.lights=f.lights,this.clipping=f.clipping,this.extensions=Object.assign({},f.extensions),this.glslVersion=f.glslVersion,this}toJSON(f){const m=super.toJSON(f);m.glslVersion=this.glslVersion,m.uniforms={};for(const x in this.uniforms){const y=this.uniforms[x].value;y&&y.isTexture?m.uniforms[x]={type:"t",value:y.toJSON(f).uuid}:y&&y.isColor?m.uniforms[x]={type:"c",value:y.getHex()}:y&&y.isVector2?m.uniforms[x]={type:"v2",value:y.toArray()}:y&&y.isVector3?m.uniforms[x]={type:"v3",value:y.toArray()}:y&&y.isVector4?m.uniforms[x]={type:"v4",value:y.toArray()}:y&&y.isMatrix3?m.uniforms[x]={type:"m3",value:y.toArray()}:y&&y.isMatrix4?m.uniforms[x]={type:"m4",value:y.toArray()}:m.uniforms[x]={value:y}}Object.keys(this.defines).length>0&&(m.defines=this.defines),m.vertexShader=this.vertexShader,m.fragmentShader=this.fragmentShader;const _={};for(const x in this.extensions)this.extensions[x]===!0&&(_[x]=!0);return Object.keys(_).length>0&&(m.extensions=_),m}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(f,m){return super.copy(f,m),this.matrixWorldInverse.copy(f.matrixWorldInverse),this.projectionMatrix.copy(f.projectionMatrix),this.projectionMatrixInverse.copy(f.projectionMatrixInverse),this}getWorldDirection(f){this.updateWorldMatrix(!0,!1);const m=this.matrixWorld.elements;return f.set(-m[8],-m[9],-m[10]).normalize()}updateMatrixWorld(f){super.updateMatrixWorld(f),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(f,m){super.updateWorldMatrix(f,m),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(f=50,m=1,_=.1,x=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=f,this.zoom=1,this.near=_,this.far=x,this.focus=10,this.aspect=m,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(f,m){return super.copy(f,m),this.fov=f.fov,this.zoom=f.zoom,this.near=f.near,this.far=f.far,this.focus=f.focus,this.aspect=f.aspect,this.view=f.view===null?null:Object.assign({},f.view),this.filmGauge=f.filmGauge,this.filmOffset=f.filmOffset,this}setFocalLength(f){const m=.5*this.getFilmHeight()/f;this.fov=RAD2DEG*2*Math.atan(m),this.updateProjectionMatrix()}getFocalLength(){const f=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/f}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(f,m,_,x,v,y){this.aspect=f/m,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=f,this.view.fullHeight=m,this.view.offsetX=_,this.view.offsetY=x,this.view.width=v,this.view.height=y,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const f=this.near;let m=f*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,_=2*m,x=this.aspect*_,v=-.5*x;const y=this.view;if(this.view!==null&&this.view.enabled){const S=y.fullWidth,w=y.fullHeight;v+=y.offsetX*x/S,m-=y.offsetY*_/w,x*=y.width/S,_*=y.height/w}const M=this.filmOffset;M!==0&&(v+=f*M/this.getFilmWidth()),this.projectionMatrix.makePerspective(v,v+x,m,m-_,f,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(f){const m=super.toJSON(f);return m.object.fov=this.fov,m.object.zoom=this.zoom,m.object.near=this.near,m.object.far=this.far,m.object.focus=this.focus,m.object.aspect=this.aspect,this.view!==null&&(m.object.view=Object.assign({},this.view)),m.object.filmGauge=this.filmGauge,m.object.filmOffset=this.filmOffset,m}}const fov=-90,aspect=1;class CubeCamera extends Object3D{constructor(f,m,_){super(),this.type="CubeCamera",this.renderTarget=_;const x=new PerspectiveCamera(fov,aspect,f,m);x.layers=this.layers,x.up.set(0,1,0),x.lookAt(1,0,0),this.add(x);const v=new PerspectiveCamera(fov,aspect,f,m);v.layers=this.layers,v.up.set(0,1,0),v.lookAt(-1,0,0),this.add(v);const y=new PerspectiveCamera(fov,aspect,f,m);y.layers=this.layers,y.up.set(0,0,-1),y.lookAt(0,1,0),this.add(y);const M=new PerspectiveCamera(fov,aspect,f,m);M.layers=this.layers,M.up.set(0,0,1),M.lookAt(0,-1,0),this.add(M);const S=new PerspectiveCamera(fov,aspect,f,m);S.layers=this.layers,S.up.set(0,1,0),S.lookAt(0,0,1),this.add(S);const w=new PerspectiveCamera(fov,aspect,f,m);w.layers=this.layers,w.up.set(0,1,0),w.lookAt(0,0,-1),this.add(w)}update(f,m){this.parent===null&&this.updateMatrixWorld();const _=this.renderTarget,[x,v,y,M,S,w]=this.children,T=f.getRenderTarget(),A=f.toneMapping,E=f.xr.enabled;f.toneMapping=NoToneMapping,f.xr.enabled=!1;const R=_.texture.generateMipmaps;_.texture.generateMipmaps=!1,f.setRenderTarget(_,0),f.render(m,x),f.setRenderTarget(_,1),f.render(m,v),f.setRenderTarget(_,2),f.render(m,y),f.setRenderTarget(_,3),f.render(m,M),f.setRenderTarget(_,4),f.render(m,S),_.texture.generateMipmaps=R,f.setRenderTarget(_,5),f.render(m,w),f.setRenderTarget(T),f.toneMapping=A,f.xr.enabled=E,_.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(f,m,_,x,v,y,M,S,w,T){f=f!==void 0?f:[],m=m!==void 0?m:CubeReflectionMapping,super(f,m,_,x,v,y,M,S,w,T),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(f){this.image=f}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(f=1,m={}){super(f,f,m),this.isWebGLCubeRenderTarget=!0;const _={width:f,height:f,depth:1},x=[_,_,_,_,_,_];this.texture=new CubeTexture(x,m.mapping,m.wrapS,m.wrapT,m.magFilter,m.minFilter,m.format,m.type,m.anisotropy,m.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=m.generateMipmaps!==void 0?m.generateMipmaps:!1,this.texture.minFilter=m.minFilter!==void 0?m.minFilter:LinearFilter}fromEquirectangularTexture(f,m){this.texture.type=m.type,this.texture.encoding=m.encoding,this.texture.generateMipmaps=m.generateMipmaps,this.texture.minFilter=m.minFilter,this.texture.magFilter=m.magFilter;const _={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},x=new BoxGeometry(5,5,5),v=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(_.uniforms),vertexShader:_.vertexShader,fragmentShader:_.fragmentShader,side:BackSide,blending:NoBlending});v.uniforms.tEquirect.value=m;const y=new Mesh(x,v),M=m.minFilter;return m.minFilter===LinearMipmapLinearFilter&&(m.minFilter=LinearFilter),new CubeCamera(1,10,this).update(f,y),m.minFilter=M,y.geometry.dispose(),y.material.dispose(),this}clear(f,m,_,x){const v=f.getRenderTarget();for(let y=0;y<6;y++)f.setRenderTarget(this,y),f.clear(m,_,x);f.setRenderTarget(v)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(f=new Vector3(1,0,0),m=0){this.isPlane=!0,this.normal=f,this.constant=m}set(f,m){return this.normal.copy(f),this.constant=m,this}setComponents(f,m,_,x){return this.normal.set(f,m,_),this.constant=x,this}setFromNormalAndCoplanarPoint(f,m){return this.normal.copy(f),this.constant=-m.dot(this.normal),this}setFromCoplanarPoints(f,m,_){const x=_vector1.subVectors(_,m).cross(_vector2.subVectors(f,m)).normalize();return this.setFromNormalAndCoplanarPoint(x,f),this}copy(f){return this.normal.copy(f.normal),this.constant=f.constant,this}normalize(){const f=1/this.normal.length();return this.normal.multiplyScalar(f),this.constant*=f,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(f){return this.normal.dot(f)+this.constant}distanceToSphere(f){return this.distanceToPoint(f.center)-f.radius}projectPoint(f,m){return m.copy(f).addScaledVector(this.normal,-this.distanceToPoint(f))}intersectLine(f,m){const _=f.delta(_vector1),x=this.normal.dot(_);if(x===0)return this.distanceToPoint(f.start)===0?m.copy(f.start):null;const v=-(f.start.dot(this.normal)+this.constant)/x;return v<0||v>1?null:m.copy(f.start).addScaledVector(_,v)}intersectsLine(f){const m=this.distanceToPoint(f.start),_=this.distanceToPoint(f.end);return m<0&&_>0||_<0&&m>0}intersectsBox(f){return f.intersectsPlane(this)}intersectsSphere(f){return f.intersectsPlane(this)}coplanarPoint(f){return f.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(f,m){const _=m||_normalMatrix.getNormalMatrix(f),x=this.coplanarPoint(_vector1).applyMatrix4(f),v=this.normal.applyMatrix3(_).normalize();return this.constant=-x.dot(v),this}translate(f){return this.constant-=f.dot(this.normal),this}equals(f){return f.normal.equals(this.normal)&&f.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(f=new Plane,m=new Plane,_=new Plane,x=new Plane,v=new Plane,y=new Plane){this.planes=[f,m,_,x,v,y]}set(f,m,_,x,v,y){const M=this.planes;return M[0].copy(f),M[1].copy(m),M[2].copy(_),M[3].copy(x),M[4].copy(v),M[5].copy(y),this}copy(f){const m=this.planes;for(let _=0;_<6;_++)m[_].copy(f.planes[_]);return this}setFromProjectionMatrix(f){const m=this.planes,_=f.elements,x=_[0],v=_[1],y=_[2],M=_[3],S=_[4],w=_[5],T=_[6],A=_[7],E=_[8],R=_[9],P=_[10],C=_[11],L=_[12],D=_[13],U=_[14],I=_[15];return m[0].setComponents(M-x,A-S,C-E,I-L).normalize(),m[1].setComponents(M+x,A+S,C+E,I+L).normalize(),m[2].setComponents(M+v,A+w,C+R,I+D).normalize(),m[3].setComponents(M-v,A-w,C-R,I-D).normalize(),m[4].setComponents(M-y,A-T,C-P,I-U).normalize(),m[5].setComponents(M+y,A+T,C+P,I+U).normalize(),this}intersectsObject(f){const m=f.geometry;return m.boundingSphere===null&&m.computeBoundingSphere(),_sphere$2.copy(m.boundingSphere).applyMatrix4(f.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(f){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(f.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(f){const m=this.planes,_=f.center,x=-f.radius;for(let v=0;v<6;v++)if(m[v].distanceToPoint(_)<x)return!1;return!0}intersectsBox(f){const m=this.planes;for(let _=0;_<6;_++){const x=m[_];if(_vector$7.x=x.normal.x>0?f.max.x:f.min.x,_vector$7.y=x.normal.y>0?f.max.y:f.min.y,_vector$7.z=x.normal.z>0?f.max.z:f.min.z,x.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(f){const m=this.planes;for(let _=0;_<6;_++)if(m[_].distanceToPoint(f)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let b=null,f=!1,m=null,_=null;function x(v,y){m(v,y),_=b.requestAnimationFrame(x)}return{start:function(){f!==!0&&m!==null&&(_=b.requestAnimationFrame(x),f=!0)},stop:function(){b.cancelAnimationFrame(_),f=!1},setAnimationLoop:function(v){m=v},setContext:function(v){b=v}}}function WebGLAttributes(b,f){const m=f.isWebGL2,_=new WeakMap;function x(w,T){const A=w.array,E=w.usage,R=b.createBuffer();b.bindBuffer(T,R),b.bufferData(T,A,E),w.onUploadCallback();let P;if(A instanceof Float32Array)P=5126;else if(A instanceof Uint16Array)if(w.isFloat16BufferAttribute)if(m)P=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else P=5123;else if(A instanceof Int16Array)P=5122;else if(A instanceof Uint32Array)P=5125;else if(A instanceof Int32Array)P=5124;else if(A instanceof Int8Array)P=5120;else if(A instanceof Uint8Array)P=5121;else if(A instanceof Uint8ClampedArray)P=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:R,type:P,bytesPerElement:A.BYTES_PER_ELEMENT,version:w.version}}function v(w,T,A){const E=T.array,R=T.updateRange;b.bindBuffer(A,w),R.count===-1?b.bufferSubData(A,0,E):(m?b.bufferSubData(A,R.offset*E.BYTES_PER_ELEMENT,E,R.offset,R.count):b.bufferSubData(A,R.offset*E.BYTES_PER_ELEMENT,E.subarray(R.offset,R.offset+R.count)),R.count=-1),T.onUploadCallback()}function y(w){return w.isInterleavedBufferAttribute&&(w=w.data),_.get(w)}function M(w){w.isInterleavedBufferAttribute&&(w=w.data);const T=_.get(w);T&&(b.deleteBuffer(T.buffer),_.delete(w))}function S(w,T){if(w.isGLBufferAttribute){const E=_.get(w);(!E||E.version<w.version)&&_.set(w,{buffer:w.buffer,type:w.type,bytesPerElement:w.elementSize,version:w.version});return}w.isInterleavedBufferAttribute&&(w=w.data);const A=_.get(w);A===void 0?_.set(w,x(w,T)):A.version<w.version&&(v(A.buffer,w,T),A.version=w.version)}return{get:y,remove:M,update:S}}class PlaneGeometry extends BufferGeometry{constructor(f=1,m=1,_=1,x=1){super(),this.type="PlaneGeometry",this.parameters={width:f,height:m,widthSegments:_,heightSegments:x};const v=f/2,y=m/2,M=Math.floor(_),S=Math.floor(x),w=M+1,T=S+1,A=f/M,E=m/S,R=[],P=[],C=[],L=[];for(let D=0;D<T;D++){const U=D*E-y;for(let I=0;I<w;I++){const O=I*A-v;P.push(O,-U,0),C.push(0,0,1),L.push(I/M),L.push(1-D/S)}}for(let D=0;D<S;D++)for(let U=0;U<M;U++){const I=U+w*D,O=U+w*(D+1),V=U+1+w*(D+1),H=U+1+w*D;R.push(I,O,H),R.push(O,V,H)}this.setIndex(R),this.setAttribute("position",new Float32BufferAttribute(P,3)),this.setAttribute("normal",new Float32BufferAttribute(C,3)),this.setAttribute("uv",new Float32BufferAttribute(L,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new PlaneGeometry(f.width,f.height,f.widthSegments,f.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
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
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$h=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$h=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,vertex$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$g=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fragment$d=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,fragment$8=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$6=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,fragment$2=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$h,background_frag:fragment$h,backgroundCube_vert:vertex$g,backgroundCube_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ShaderChunk.backgroundCube_vert,fragmentShader:ShaderChunk.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};const _rgb={r:0,b:0,g:0};function WebGLBackground(b,f,m,_,x,v,y){const M=new Color(0);let S=v===!0?0:1,w,T,A=null,E=0,R=null;function P(L,D){let U=!1,I=D.isScene===!0?D.background:null;I&&I.isTexture&&(I=(D.backgroundBlurriness>0?m:f).get(I));const O=b.xr,V=O.getSession&&O.getSession();V&&V.environmentBlendMode==="additive"&&(I=null),I===null?C(M,S):I&&I.isColor&&(C(I,1),U=!0),(b.autoClear||U)&&b.clear(b.autoClearColor,b.autoClearDepth,b.autoClearStencil),I&&(I.isCubeTexture||I.mapping===CubeUVReflectionMapping)?(T===void 0&&(T=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.backgroundCube.uniforms),vertexShader:ShaderLib.backgroundCube.vertexShader,fragmentShader:ShaderLib.backgroundCube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),T.geometry.deleteAttribute("normal"),T.geometry.deleteAttribute("uv"),T.onBeforeRender=function(H,$,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(T.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),x.update(T)),T.material.uniforms.envMap.value=I,T.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,T.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,T.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,T.material.toneMapped=I.encoding!==sRGBEncoding,(A!==I||E!==I.version||R!==b.toneMapping)&&(T.material.needsUpdate=!0,A=I,E=I.version,R=b.toneMapping),T.layers.enableAll(),L.unshift(T,T.geometry,T.material,0,0,null)):I&&I.isTexture&&(w===void 0&&(w=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),w.geometry.deleteAttribute("normal"),Object.defineProperty(w.material,"map",{get:function(){return this.uniforms.t2D.value}}),x.update(w)),w.material.uniforms.t2D.value=I,w.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,w.material.toneMapped=I.encoding!==sRGBEncoding,I.matrixAutoUpdate===!0&&I.updateMatrix(),w.material.uniforms.uvTransform.value.copy(I.matrix),(A!==I||E!==I.version||R!==b.toneMapping)&&(w.material.needsUpdate=!0,A=I,E=I.version,R=b.toneMapping),w.layers.enableAll(),L.unshift(w,w.geometry,w.material,0,0,null))}function C(L,D){L.getRGB(_rgb,getUnlitUniformColorSpace(b)),_.buffers.color.setClear(_rgb.r,_rgb.g,_rgb.b,D,y)}return{getClearColor:function(){return M},setClearColor:function(L,D=1){M.set(L),S=D,C(M,S)},getClearAlpha:function(){return S},setClearAlpha:function(L){S=L,C(M,S)},render:P}}function WebGLBindingStates(b,f,m,_){const x=b.getParameter(34921),v=_.isWebGL2?null:f.get("OES_vertex_array_object"),y=_.isWebGL2||v!==null,M={},S=L(null);let w=S,T=!1;function A(X,ee,le,de,se){let fe=!1;if(y){const ce=C(de,le,ee);w!==ce&&(w=ce,R(w.object)),fe=D(X,de,le,se),fe&&U(X,de,le,se)}else{const ce=ee.wireframe===!0;(w.geometry!==de.id||w.program!==le.id||w.wireframe!==ce)&&(w.geometry=de.id,w.program=le.id,w.wireframe=ce,fe=!0)}se!==null&&m.update(se,34963),(fe||T)&&(T=!1,F(X,ee,le,de),se!==null&&b.bindBuffer(34963,m.get(se).buffer))}function E(){return _.isWebGL2?b.createVertexArray():v.createVertexArrayOES()}function R(X){return _.isWebGL2?b.bindVertexArray(X):v.bindVertexArrayOES(X)}function P(X){return _.isWebGL2?b.deleteVertexArray(X):v.deleteVertexArrayOES(X)}function C(X,ee,le){const de=le.wireframe===!0;let se=M[X.id];se===void 0&&(se={},M[X.id]=se);let fe=se[ee.id];fe===void 0&&(fe={},se[ee.id]=fe);let ce=fe[de];return ce===void 0&&(ce=L(E()),fe[de]=ce),ce}function L(X){const ee=[],le=[],de=[];for(let se=0;se<x;se++)ee[se]=0,le[se]=0,de[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:le,attributeDivisors:de,object:X,attributes:{},index:null}}function D(X,ee,le,de){const se=w.attributes,fe=ee.attributes;let ce=0;const Re=le.getAttributes();for(const Q in Re)if(Re[Q].location>=0){const ge=se[Q];let Z=fe[Q];if(Z===void 0&&(Q==="instanceMatrix"&&X.instanceMatrix&&(Z=X.instanceMatrix),Q==="instanceColor"&&X.instanceColor&&(Z=X.instanceColor)),ge===void 0||ge.attribute!==Z||Z&&ge.data!==Z.data)return!0;ce++}return w.attributesNum!==ce||w.index!==de}function U(X,ee,le,de){const se={},fe=ee.attributes;let ce=0;const Re=le.getAttributes();for(const Q in Re)if(Re[Q].location>=0){let ge=fe[Q];ge===void 0&&(Q==="instanceMatrix"&&X.instanceMatrix&&(ge=X.instanceMatrix),Q==="instanceColor"&&X.instanceColor&&(ge=X.instanceColor));const Z={};Z.attribute=ge,ge&&ge.data&&(Z.data=ge.data),se[Q]=Z,ce++}w.attributes=se,w.attributesNum=ce,w.index=de}function I(){const X=w.newAttributes;for(let ee=0,le=X.length;ee<le;ee++)X[ee]=0}function O(X){V(X,0)}function V(X,ee){const le=w.newAttributes,de=w.enabledAttributes,se=w.attributeDivisors;le[X]=1,de[X]===0&&(b.enableVertexAttribArray(X),de[X]=1),se[X]!==ee&&((_.isWebGL2?b:f.get("ANGLE_instanced_arrays"))[_.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](X,ee),se[X]=ee)}function H(){const X=w.newAttributes,ee=w.enabledAttributes;for(let le=0,de=ee.length;le<de;le++)ee[le]!==X[le]&&(b.disableVertexAttribArray(le),ee[le]=0)}function $(X,ee,le,de,se,fe){_.isWebGL2===!0&&(le===5124||le===5125)?b.vertexAttribIPointer(X,ee,le,se,fe):b.vertexAttribPointer(X,ee,le,de,se,fe)}function F(X,ee,le,de){if(_.isWebGL2===!1&&(X.isInstancedMesh||de.isInstancedBufferGeometry)&&f.get("ANGLE_instanced_arrays")===null)return;I();const se=de.attributes,fe=le.getAttributes(),ce=ee.defaultAttributeValues;for(const Re in fe){const Q=fe[Re];if(Q.location>=0){let he=se[Re];if(he===void 0&&(Re==="instanceMatrix"&&X.instanceMatrix&&(he=X.instanceMatrix),Re==="instanceColor"&&X.instanceColor&&(he=X.instanceColor)),he!==void 0){const ge=he.normalized,Z=he.itemSize,Me=m.get(he);if(Me===void 0)continue;const be=Me.buffer,we=Me.type,Se=Me.bytesPerElement;if(he.isInterleavedBufferAttribute){const De=he.data,Ne=De.stride,Fe=he.offset;if(De.isInstancedInterleavedBuffer){for(let ze=0;ze<Q.locationSize;ze++)V(Q.location+ze,De.meshPerAttribute);X.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let ze=0;ze<Q.locationSize;ze++)O(Q.location+ze);b.bindBuffer(34962,be);for(let ze=0;ze<Q.locationSize;ze++)$(Q.location+ze,Z/Q.locationSize,we,ge,Ne*Se,(Fe+Z/Q.locationSize*ze)*Se)}else{if(he.isInstancedBufferAttribute){for(let De=0;De<Q.locationSize;De++)V(Q.location+De,he.meshPerAttribute);X.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<Q.locationSize;De++)O(Q.location+De);b.bindBuffer(34962,be);for(let De=0;De<Q.locationSize;De++)$(Q.location+De,Z/Q.locationSize,we,ge,Z*Se,Z/Q.locationSize*De*Se)}}else if(ce!==void 0){const ge=ce[Re];if(ge!==void 0)switch(ge.length){case 2:b.vertexAttrib2fv(Q.location,ge);break;case 3:b.vertexAttrib3fv(Q.location,ge);break;case 4:b.vertexAttrib4fv(Q.location,ge);break;default:b.vertexAttrib1fv(Q.location,ge)}}}}H()}function k(){ae();for(const X in M){const ee=M[X];for(const le in ee){const de=ee[le];for(const se in de)P(de[se].object),delete de[se];delete ee[le]}delete M[X]}}function Y(X){if(M[X.id]===void 0)return;const ee=M[X.id];for(const le in ee){const de=ee[le];for(const se in de)P(de[se].object),delete de[se];delete ee[le]}delete M[X.id]}function oe(X){for(const ee in M){const le=M[ee];if(le[X.id]===void 0)continue;const de=le[X.id];for(const se in de)P(de[se].object),delete de[se];delete le[X.id]}}function ae(){K(),T=!0,w!==S&&(w=S,R(w.object))}function K(){S.geometry=null,S.program=null,S.wireframe=!1}return{setup:A,reset:ae,resetDefaultState:K,dispose:k,releaseStatesOfGeometry:Y,releaseStatesOfProgram:oe,initAttributes:I,enableAttribute:O,disableUnusedAttributes:H}}function WebGLBufferRenderer(b,f,m,_){const x=_.isWebGL2;let v;function y(w){v=w}function M(w,T){b.drawArrays(v,w,T),m.update(T,v,1)}function S(w,T,A){if(A===0)return;let E,R;if(x)E=b,R="drawArraysInstanced";else if(E=f.get("ANGLE_instanced_arrays"),R="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[R](v,w,T,A),m.update(T,v,A)}this.setMode=y,this.render=M,this.renderInstances=S}function WebGLCapabilities(b,f,m){let _;function x(){if(_!==void 0)return _;if(f.has("EXT_texture_filter_anisotropic")===!0){const $=f.get("EXT_texture_filter_anisotropic");_=b.getParameter($.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else _=0;return _}function v($){if($==="highp"){if(b.getShaderPrecisionFormat(35633,36338).precision>0&&b.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";$="mediump"}return $==="mediump"&&b.getShaderPrecisionFormat(35633,36337).precision>0&&b.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const y=typeof WebGL2RenderingContext<"u"&&b instanceof WebGL2RenderingContext;let M=m.precision!==void 0?m.precision:"highp";const S=v(M);S!==M&&(console.warn("THREE.WebGLRenderer:",M,"not supported, using",S,"instead."),M=S);const w=y||f.has("WEBGL_draw_buffers"),T=m.logarithmicDepthBuffer===!0,A=b.getParameter(34930),E=b.getParameter(35660),R=b.getParameter(3379),P=b.getParameter(34076),C=b.getParameter(34921),L=b.getParameter(36347),D=b.getParameter(36348),U=b.getParameter(36349),I=E>0,O=y||f.has("OES_texture_float"),V=I&&O,H=y?b.getParameter(36183):0;return{isWebGL2:y,drawBuffers:w,getMaxAnisotropy:x,getMaxPrecision:v,precision:M,logarithmicDepthBuffer:T,maxTextures:A,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:P,maxAttributes:C,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:I,floatFragmentTextures:O,floatVertexTextures:V,maxSamples:H}}function WebGLClipping(b){const f=this;let m=null,_=0,x=!1,v=!1;const y=new Plane,M=new Matrix3,S={value:null,needsUpdate:!1};this.uniform=S,this.numPlanes=0,this.numIntersection=0,this.init=function(A,E){const R=A.length!==0||E||_!==0||x;return x=E,_=A.length,R},this.beginShadows=function(){v=!0,T(null)},this.endShadows=function(){v=!1},this.setGlobalState=function(A,E){m=T(A,E,0)},this.setState=function(A,E,R){const P=A.clippingPlanes,C=A.clipIntersection,L=A.clipShadows,D=b.get(A);if(!x||P===null||P.length===0||v&&!L)v?T(null):w();else{const U=v?0:_,I=U*4;let O=D.clippingState||null;S.value=O,O=T(P,E,I,R);for(let V=0;V!==I;++V)O[V]=m[V];D.clippingState=O,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=U}};function w(){S.value!==m&&(S.value=m,S.needsUpdate=_>0),f.numPlanes=_,f.numIntersection=0}function T(A,E,R,P){const C=A!==null?A.length:0;let L=null;if(C!==0){if(L=S.value,P!==!0||L===null){const D=R+C*4,U=E.matrixWorldInverse;M.getNormalMatrix(U),(L===null||L.length<D)&&(L=new Float32Array(D));for(let I=0,O=R;I!==C;++I,O+=4)y.copy(A[I]).applyMatrix4(U,M),y.normal.toArray(L,O),L[O+3]=y.constant}S.value=L,S.needsUpdate=!0}return f.numPlanes=C,f.numIntersection=0,L}}function WebGLCubeMaps(b){let f=new WeakMap;function m(y,M){return M===EquirectangularReflectionMapping?y.mapping=CubeReflectionMapping:M===EquirectangularRefractionMapping&&(y.mapping=CubeRefractionMapping),y}function _(y){if(y&&y.isTexture&&y.isRenderTargetTexture===!1){const M=y.mapping;if(M===EquirectangularReflectionMapping||M===EquirectangularRefractionMapping)if(f.has(y)){const S=f.get(y).texture;return m(S,y.mapping)}else{const S=y.image;if(S&&S.height>0){const w=new WebGLCubeRenderTarget(S.height/2);return w.fromEquirectangularTexture(b,y),f.set(y,w),y.addEventListener("dispose",x),m(w.texture,y.mapping)}else return null}}return y}function x(y){const M=y.target;M.removeEventListener("dispose",x);const S=f.get(M);S!==void 0&&(f.delete(M),S.dispose())}function v(){f=new WeakMap}return{get:_,dispose:v}}class OrthographicCamera extends Camera{constructor(f=-1,m=1,_=1,x=-1,v=.1,y=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=f,this.right=m,this.top=_,this.bottom=x,this.near=v,this.far=y,this.updateProjectionMatrix()}copy(f,m){return super.copy(f,m),this.left=f.left,this.right=f.right,this.top=f.top,this.bottom=f.bottom,this.near=f.near,this.far=f.far,this.zoom=f.zoom,this.view=f.view===null?null:Object.assign({},f.view),this}setViewOffset(f,m,_,x,v,y){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=f,this.view.fullHeight=m,this.view.offsetX=_,this.view.offsetY=x,this.view.width=v,this.view.height=y,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const f=(this.right-this.left)/(2*this.zoom),m=(this.top-this.bottom)/(2*this.zoom),_=(this.right+this.left)/2,x=(this.top+this.bottom)/2;let v=_-f,y=_+f,M=x+m,S=x-m;if(this.view!==null&&this.view.enabled){const w=(this.right-this.left)/this.view.fullWidth/this.zoom,T=(this.top-this.bottom)/this.view.fullHeight/this.zoom;v+=w*this.view.offsetX,y=v+w*this.view.width,M-=T*this.view.offsetY,S=M-T*this.view.height}this.projectionMatrix.makeOrthographic(v,y,M,S,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(f){const m=super.toJSON(f);return m.object.zoom=this.zoom,m.object.left=this.left,m.object.right=this.right,m.object.top=this.top,m.object.bottom=this.bottom,m.object.near=this.near,m.object.far=this.far,this.view!==null&&(m.object.view=Object.assign({},this.view)),m}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(f){this._renderer=f,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(f,m=0,_=.1,x=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(f,_,x,v),m>0&&this._blur(v,0,0,m),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(f,m=null){return this._fromTexture(f,m)}fromCubemap(f,m=null){return this._fromTexture(f,m)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(f){this._lodMax=Math.floor(Math.log2(f)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let f=0;f<this._lodPlanes.length;f++)this._lodPlanes[f].dispose()}_cleanup(f){this._renderer.setRenderTarget(_oldTarget),f.scissorTest=!1,_setViewport(f,0,0,f.width,f.height)}_fromTexture(f,m){f.mapping===CubeReflectionMapping||f.mapping===CubeRefractionMapping?this._setSize(f.image.length===0?16:f.image[0].width||f.image[0].image.width):this._setSize(f.image.width/4),_oldTarget=this._renderer.getRenderTarget();const _=m||this._allocateTargets();return this._textureToCubeUV(f,_),this._applyPMREM(_),this._cleanup(_),_}_allocateTargets(){const f=3*Math.max(this._cubeSize,112),m=4*this._cubeSize,_={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},x=_createRenderTarget(f,m,_);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==f||this._pingPongRenderTarget.height!==m){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(f,m,_);const{_lodMax:v}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(v)),this._blurMaterial=_getBlurShader(v,f,m)}return x}_compileMaterial(f){const m=new Mesh(this._lodPlanes[0],f);this._renderer.compile(m,_flatCamera)}_sceneToCubeUV(f,m,_,x){const M=new PerspectiveCamera(90,1,m,_),S=[1,-1,1,1,1,1],w=[1,1,1,-1,-1,-1],T=this._renderer,A=T.autoClear,E=T.toneMapping;T.getClearColor(_clearColor),T.toneMapping=NoToneMapping,T.autoClear=!1;const R=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),P=new Mesh(new BoxGeometry,R);let C=!1;const L=f.background;L?L.isColor&&(R.color.copy(L),f.background=null,C=!0):(R.color.copy(_clearColor),C=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(M.up.set(0,S[D],0),M.lookAt(w[D],0,0)):U===1?(M.up.set(0,0,S[D]),M.lookAt(0,w[D],0)):(M.up.set(0,S[D],0),M.lookAt(0,0,w[D]));const I=this._cubeSize;_setViewport(x,U*I,D>2?I:0,I,I),T.setRenderTarget(x),C&&T.render(P,M),T.render(f,M)}P.geometry.dispose(),P.material.dispose(),T.toneMapping=E,T.autoClear=A,f.background=L}_textureToCubeUV(f,m){const _=this._renderer,x=f.mapping===CubeReflectionMapping||f.mapping===CubeRefractionMapping;x?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=f.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const v=x?this._cubemapMaterial:this._equirectMaterial,y=new Mesh(this._lodPlanes[0],v),M=v.uniforms;M.envMap.value=f;const S=this._cubeSize;_setViewport(m,0,0,3*S,2*S),_.setRenderTarget(m),_.render(y,_flatCamera)}_applyPMREM(f){const m=this._renderer,_=m.autoClear;m.autoClear=!1;for(let x=1;x<this._lodPlanes.length;x++){const v=Math.sqrt(this._sigmas[x]*this._sigmas[x]-this._sigmas[x-1]*this._sigmas[x-1]),y=_axisDirections[(x-1)%_axisDirections.length];this._blur(f,x-1,x,v,y)}m.autoClear=_}_blur(f,m,_,x,v){const y=this._pingPongRenderTarget;this._halfBlur(f,y,m,_,x,"latitudinal",v),this._halfBlur(y,f,_,_,x,"longitudinal",v)}_halfBlur(f,m,_,x,v,y,M){const S=this._renderer,w=this._blurMaterial;y!=="latitudinal"&&y!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const T=3,A=new Mesh(this._lodPlanes[x],w),E=w.uniforms,R=this._sizeLods[_]-1,P=isFinite(v)?Math.PI/(2*R):2*Math.PI/(2*MAX_SAMPLES-1),C=v/P,L=isFinite(v)?1+Math.floor(T*C):MAX_SAMPLES;L>MAX_SAMPLES&&console.warn(`sigmaRadians, ${v}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${MAX_SAMPLES}`);const D=[];let U=0;for(let $=0;$<MAX_SAMPLES;++$){const F=$/C,k=Math.exp(-F*F/2);D.push(k),$===0?U+=k:$<L&&(U+=2*k)}for(let $=0;$<D.length;$++)D[$]=D[$]/U;E.envMap.value=f.texture,E.samples.value=L,E.weights.value=D,E.latitudinal.value=y==="latitudinal",M&&(E.poleAxis.value=M);const{_lodMax:I}=this;E.dTheta.value=P,E.mipInt.value=I-_;const O=this._sizeLods[x],V=3*O*(x>I-LOD_MIN?x-I+LOD_MIN:0),H=4*(this._cubeSize-O);_setViewport(m,V,H,3*O,2*O),S.setRenderTarget(m),S.render(A,_flatCamera)}}function _createPlanes(b){const f=[],m=[],_=[];let x=b;const v=b-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let y=0;y<v;y++){const M=Math.pow(2,x);m.push(M);let S=1/M;y>b-LOD_MIN?S=EXTRA_LOD_SIGMA[y-b+LOD_MIN-1]:y===0&&(S=0),_.push(S);const w=1/(M-2),T=-w,A=1+w,E=[T,T,A,T,A,A,T,T,A,A,T,A],R=6,P=6,C=3,L=2,D=1,U=new Float32Array(C*P*R),I=new Float32Array(L*P*R),O=new Float32Array(D*P*R);for(let H=0;H<R;H++){const $=H%3*2/3-1,F=H>2?0:-1,k=[$,F,0,$+2/3,F,0,$+2/3,F+1,0,$,F,0,$+2/3,F+1,0,$,F+1,0];U.set(k,C*P*H),I.set(E,L*P*H);const Y=[H,H,H,H,H,H];O.set(Y,D*P*H)}const V=new BufferGeometry;V.setAttribute("position",new BufferAttribute(U,C)),V.setAttribute("uv",new BufferAttribute(I,L)),V.setAttribute("faceIndex",new BufferAttribute(O,D)),f.push(V),x>LOD_MIN&&x--}return{lodPlanes:f,sizeLods:m,sigmas:_}}function _createRenderTarget(b,f,m){const _=new WebGLRenderTarget(b,f,m);return _.texture.mapping=CubeUVReflectionMapping,_.texture.name="PMREM.cubeUv",_.scissorTest=!0,_}function _setViewport(b,f,m,_,x){b.viewport.set(f,m,_,x),b.scissor.set(f,m,_,x)}function _getBlurShader(b,f,m){const _=new Float32Array(MAX_SAMPLES),x=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/f,CUBEUV_TEXEL_HEIGHT:1/m,CUBEUV_MAX_MIP:`${b}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:_},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:x}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

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
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

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
	`}function WebGLCubeUVMaps(b){let f=new WeakMap,m=null;function _(M){if(M&&M.isTexture){const S=M.mapping,w=S===EquirectangularReflectionMapping||S===EquirectangularRefractionMapping,T=S===CubeReflectionMapping||S===CubeRefractionMapping;if(w||T)if(M.isRenderTargetTexture&&M.needsPMREMUpdate===!0){M.needsPMREMUpdate=!1;let A=f.get(M);return m===null&&(m=new PMREMGenerator(b)),A=w?m.fromEquirectangular(M,A):m.fromCubemap(M,A),f.set(M,A),A.texture}else{if(f.has(M))return f.get(M).texture;{const A=M.image;if(w&&A&&A.height>0||T&&A&&x(A)){m===null&&(m=new PMREMGenerator(b));const E=w?m.fromEquirectangular(M):m.fromCubemap(M);return f.set(M,E),M.addEventListener("dispose",v),E.texture}else return null}}}return M}function x(M){let S=0;const w=6;for(let T=0;T<w;T++)M[T]!==void 0&&S++;return S===w}function v(M){const S=M.target;S.removeEventListener("dispose",v);const w=f.get(S);w!==void 0&&(f.delete(S),w.dispose())}function y(){f=new WeakMap,m!==null&&(m.dispose(),m=null)}return{get:_,dispose:y}}function WebGLExtensions(b){const f={};function m(_){if(f[_]!==void 0)return f[_];let x;switch(_){case"WEBGL_depth_texture":x=b.getExtension("WEBGL_depth_texture")||b.getExtension("MOZ_WEBGL_depth_texture")||b.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":x=b.getExtension("EXT_texture_filter_anisotropic")||b.getExtension("MOZ_EXT_texture_filter_anisotropic")||b.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":x=b.getExtension("WEBGL_compressed_texture_s3tc")||b.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||b.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":x=b.getExtension("WEBGL_compressed_texture_pvrtc")||b.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:x=b.getExtension(_)}return f[_]=x,x}return{has:function(_){return m(_)!==null},init:function(_){_.isWebGL2?m("EXT_color_buffer_float"):(m("WEBGL_depth_texture"),m("OES_texture_float"),m("OES_texture_half_float"),m("OES_texture_half_float_linear"),m("OES_standard_derivatives"),m("OES_element_index_uint"),m("OES_vertex_array_object"),m("ANGLE_instanced_arrays")),m("OES_texture_float_linear"),m("EXT_color_buffer_half_float"),m("WEBGL_multisampled_render_to_texture")},get:function(_){const x=m(_);return x===null&&console.warn("THREE.WebGLRenderer: "+_+" extension not supported."),x}}}function WebGLGeometries(b,f,m,_){const x={},v=new WeakMap;function y(A){const E=A.target;E.index!==null&&f.remove(E.index);for(const P in E.attributes)f.remove(E.attributes[P]);E.removeEventListener("dispose",y),delete x[E.id];const R=v.get(E);R&&(f.remove(R),v.delete(E)),_.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,m.memory.geometries--}function M(A,E){return x[E.id]===!0||(E.addEventListener("dispose",y),x[E.id]=!0,m.memory.geometries++),E}function S(A){const E=A.attributes;for(const P in E)f.update(E[P],34962);const R=A.morphAttributes;for(const P in R){const C=R[P];for(let L=0,D=C.length;L<D;L++)f.update(C[L],34962)}}function w(A){const E=[],R=A.index,P=A.attributes.position;let C=0;if(R!==null){const U=R.array;C=R.version;for(let I=0,O=U.length;I<O;I+=3){const V=U[I+0],H=U[I+1],$=U[I+2];E.push(V,H,H,$,$,V)}}else{const U=P.array;C=P.version;for(let I=0,O=U.length/3-1;I<O;I+=3){const V=I+0,H=I+1,$=I+2;E.push(V,H,H,$,$,V)}}const L=new(arrayNeedsUint32(E)?Uint32BufferAttribute:Uint16BufferAttribute)(E,1);L.version=C;const D=v.get(A);D&&f.remove(D),v.set(A,L)}function T(A){const E=v.get(A);if(E){const R=A.index;R!==null&&E.version<R.version&&w(A)}else w(A);return v.get(A)}return{get:M,update:S,getWireframeAttribute:T}}function WebGLIndexedBufferRenderer(b,f,m,_){const x=_.isWebGL2;let v;function y(E){v=E}let M,S;function w(E){M=E.type,S=E.bytesPerElement}function T(E,R){b.drawElements(v,R,M,E*S),m.update(R,v,1)}function A(E,R,P){if(P===0)return;let C,L;if(x)C=b,L="drawElementsInstanced";else if(C=f.get("ANGLE_instanced_arrays"),L="drawElementsInstancedANGLE",C===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}C[L](v,R,M,E*S,P),m.update(R,v,P)}this.setMode=y,this.setIndex=w,this.render=T,this.renderInstances=A}function WebGLInfo(b){const f={geometries:0,textures:0},m={frame:0,calls:0,triangles:0,points:0,lines:0};function _(v,y,M){switch(m.calls++,y){case 4:m.triangles+=M*(v/3);break;case 1:m.lines+=M*(v/2);break;case 3:m.lines+=M*(v-1);break;case 2:m.lines+=M*v;break;case 0:m.points+=M*v;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",y);break}}function x(){m.frame++,m.calls=0,m.triangles=0,m.points=0,m.lines=0}return{memory:f,render:m,programs:null,autoReset:!0,reset:x,update:_}}function numericalSort(b,f){return b[0]-f[0]}function absNumericalSort(b,f){return Math.abs(f[1])-Math.abs(b[1])}function WebGLMorphtargets(b,f,m){const _={},x=new Float32Array(8),v=new WeakMap,y=new Vector4,M=[];for(let w=0;w<8;w++)M[w]=[w,0];function S(w,T,A){const E=w.morphTargetInfluences;if(f.isWebGL2===!0){const P=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,C=P!==void 0?P.length:0;let L=v.get(T);if(L===void 0||L.count!==C){let ee=function(){K.dispose(),v.delete(T),T.removeEventListener("dispose",ee)};var R=ee;L!==void 0&&L.texture.dispose();const I=T.morphAttributes.position!==void 0,O=T.morphAttributes.normal!==void 0,V=T.morphAttributes.color!==void 0,H=T.morphAttributes.position||[],$=T.morphAttributes.normal||[],F=T.morphAttributes.color||[];let k=0;I===!0&&(k=1),O===!0&&(k=2),V===!0&&(k=3);let Y=T.attributes.position.count*k,oe=1;Y>f.maxTextureSize&&(oe=Math.ceil(Y/f.maxTextureSize),Y=f.maxTextureSize);const ae=new Float32Array(Y*oe*4*C),K=new DataArrayTexture(ae,Y,oe,C);K.type=FloatType,K.needsUpdate=!0;const X=k*4;for(let le=0;le<C;le++){const de=H[le],se=$[le],fe=F[le],ce=Y*oe*4*le;for(let Re=0;Re<de.count;Re++){const Q=Re*X;I===!0&&(y.fromBufferAttribute(de,Re),ae[ce+Q+0]=y.x,ae[ce+Q+1]=y.y,ae[ce+Q+2]=y.z,ae[ce+Q+3]=0),O===!0&&(y.fromBufferAttribute(se,Re),ae[ce+Q+4]=y.x,ae[ce+Q+5]=y.y,ae[ce+Q+6]=y.z,ae[ce+Q+7]=0),V===!0&&(y.fromBufferAttribute(fe,Re),ae[ce+Q+8]=y.x,ae[ce+Q+9]=y.y,ae[ce+Q+10]=y.z,ae[ce+Q+11]=fe.itemSize===4?y.w:1)}}L={count:C,texture:K,size:new Vector2(Y,oe)},v.set(T,L),T.addEventListener("dispose",ee)}let D=0;for(let I=0;I<E.length;I++)D+=E[I];const U=T.morphTargetsRelative?1:1-D;A.getUniforms().setValue(b,"morphTargetBaseInfluence",U),A.getUniforms().setValue(b,"morphTargetInfluences",E),A.getUniforms().setValue(b,"morphTargetsTexture",L.texture,m),A.getUniforms().setValue(b,"morphTargetsTextureSize",L.size)}else{const P=E===void 0?0:E.length;let C=_[T.id];if(C===void 0||C.length!==P){C=[];for(let O=0;O<P;O++)C[O]=[O,0];_[T.id]=C}for(let O=0;O<P;O++){const V=C[O];V[0]=O,V[1]=E[O]}C.sort(absNumericalSort);for(let O=0;O<8;O++)O<P&&C[O][1]?(M[O][0]=C[O][0],M[O][1]=C[O][1]):(M[O][0]=Number.MAX_SAFE_INTEGER,M[O][1]=0);M.sort(numericalSort);const L=T.morphAttributes.position,D=T.morphAttributes.normal;let U=0;for(let O=0;O<8;O++){const V=M[O],H=V[0],$=V[1];H!==Number.MAX_SAFE_INTEGER&&$?(L&&T.getAttribute("morphTarget"+O)!==L[H]&&T.setAttribute("morphTarget"+O,L[H]),D&&T.getAttribute("morphNormal"+O)!==D[H]&&T.setAttribute("morphNormal"+O,D[H]),x[O]=$,U+=$):(L&&T.hasAttribute("morphTarget"+O)===!0&&T.deleteAttribute("morphTarget"+O),D&&T.hasAttribute("morphNormal"+O)===!0&&T.deleteAttribute("morphNormal"+O),x[O]=0)}const I=T.morphTargetsRelative?1:1-U;A.getUniforms().setValue(b,"morphTargetBaseInfluence",I),A.getUniforms().setValue(b,"morphTargetInfluences",x)}}return{update:S}}function WebGLObjects(b,f,m,_){let x=new WeakMap;function v(S){const w=_.render.frame,T=S.geometry,A=f.get(S,T);return x.get(A)!==w&&(f.update(A),x.set(A,w)),S.isInstancedMesh&&(S.hasEventListener("dispose",M)===!1&&S.addEventListener("dispose",M),m.update(S.instanceMatrix,34962),S.instanceColor!==null&&m.update(S.instanceColor,34962)),A}function y(){x=new WeakMap}function M(S){const w=S.target;w.removeEventListener("dispose",M),m.remove(w.instanceMatrix),w.instanceColor!==null&&m.remove(w.instanceColor)}return{update:v,dispose:y}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(b,f,m){const _=b[0];if(_<=0||_>0)return b;const x=f*m;let v=arrayCacheF32[x];if(v===void 0&&(v=new Float32Array(x),arrayCacheF32[x]=v),f!==0){_.toArray(v,0);for(let y=1,M=0;y!==f;++y)M+=m,b[y].toArray(v,M)}return v}function arraysEqual(b,f){if(b.length!==f.length)return!1;for(let m=0,_=b.length;m<_;m++)if(b[m]!==f[m])return!1;return!0}function copyArray(b,f){for(let m=0,_=f.length;m<_;m++)b[m]=f[m]}function allocTexUnits(b,f){let m=arrayCacheI32[f];m===void 0&&(m=new Int32Array(f),arrayCacheI32[f]=m);for(let _=0;_!==f;++_)m[_]=b.allocateTextureUnit();return m}function setValueV1f(b,f){const m=this.cache;m[0]!==f&&(b.uniform1f(this.addr,f),m[0]=f)}function setValueV2f(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y)&&(b.uniform2f(this.addr,f.x,f.y),m[0]=f.x,m[1]=f.y);else{if(arraysEqual(m,f))return;b.uniform2fv(this.addr,f),copyArray(m,f)}}function setValueV3f(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y||m[2]!==f.z)&&(b.uniform3f(this.addr,f.x,f.y,f.z),m[0]=f.x,m[1]=f.y,m[2]=f.z);else if(f.r!==void 0)(m[0]!==f.r||m[1]!==f.g||m[2]!==f.b)&&(b.uniform3f(this.addr,f.r,f.g,f.b),m[0]=f.r,m[1]=f.g,m[2]=f.b);else{if(arraysEqual(m,f))return;b.uniform3fv(this.addr,f),copyArray(m,f)}}function setValueV4f(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y||m[2]!==f.z||m[3]!==f.w)&&(b.uniform4f(this.addr,f.x,f.y,f.z,f.w),m[0]=f.x,m[1]=f.y,m[2]=f.z,m[3]=f.w);else{if(arraysEqual(m,f))return;b.uniform4fv(this.addr,f),copyArray(m,f)}}function setValueM2(b,f){const m=this.cache,_=f.elements;if(_===void 0){if(arraysEqual(m,f))return;b.uniformMatrix2fv(this.addr,!1,f),copyArray(m,f)}else{if(arraysEqual(m,_))return;mat2array.set(_),b.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(m,_)}}function setValueM3(b,f){const m=this.cache,_=f.elements;if(_===void 0){if(arraysEqual(m,f))return;b.uniformMatrix3fv(this.addr,!1,f),copyArray(m,f)}else{if(arraysEqual(m,_))return;mat3array.set(_),b.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(m,_)}}function setValueM4(b,f){const m=this.cache,_=f.elements;if(_===void 0){if(arraysEqual(m,f))return;b.uniformMatrix4fv(this.addr,!1,f),copyArray(m,f)}else{if(arraysEqual(m,_))return;mat4array.set(_),b.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(m,_)}}function setValueV1i(b,f){const m=this.cache;m[0]!==f&&(b.uniform1i(this.addr,f),m[0]=f)}function setValueV2i(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y)&&(b.uniform2i(this.addr,f.x,f.y),m[0]=f.x,m[1]=f.y);else{if(arraysEqual(m,f))return;b.uniform2iv(this.addr,f),copyArray(m,f)}}function setValueV3i(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y||m[2]!==f.z)&&(b.uniform3i(this.addr,f.x,f.y,f.z),m[0]=f.x,m[1]=f.y,m[2]=f.z);else{if(arraysEqual(m,f))return;b.uniform3iv(this.addr,f),copyArray(m,f)}}function setValueV4i(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y||m[2]!==f.z||m[3]!==f.w)&&(b.uniform4i(this.addr,f.x,f.y,f.z,f.w),m[0]=f.x,m[1]=f.y,m[2]=f.z,m[3]=f.w);else{if(arraysEqual(m,f))return;b.uniform4iv(this.addr,f),copyArray(m,f)}}function setValueV1ui(b,f){const m=this.cache;m[0]!==f&&(b.uniform1ui(this.addr,f),m[0]=f)}function setValueV2ui(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y)&&(b.uniform2ui(this.addr,f.x,f.y),m[0]=f.x,m[1]=f.y);else{if(arraysEqual(m,f))return;b.uniform2uiv(this.addr,f),copyArray(m,f)}}function setValueV3ui(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y||m[2]!==f.z)&&(b.uniform3ui(this.addr,f.x,f.y,f.z),m[0]=f.x,m[1]=f.y,m[2]=f.z);else{if(arraysEqual(m,f))return;b.uniform3uiv(this.addr,f),copyArray(m,f)}}function setValueV4ui(b,f){const m=this.cache;if(f.x!==void 0)(m[0]!==f.x||m[1]!==f.y||m[2]!==f.z||m[3]!==f.w)&&(b.uniform4ui(this.addr,f.x,f.y,f.z,f.w),m[0]=f.x,m[1]=f.y,m[2]=f.z,m[3]=f.w);else{if(arraysEqual(m,f))return;b.uniform4uiv(this.addr,f),copyArray(m,f)}}function setValueT1(b,f,m){const _=this.cache,x=m.allocateTextureUnit();_[0]!==x&&(b.uniform1i(this.addr,x),_[0]=x),m.setTexture2D(f||emptyTexture,x)}function setValueT3D1(b,f,m){const _=this.cache,x=m.allocateTextureUnit();_[0]!==x&&(b.uniform1i(this.addr,x),_[0]=x),m.setTexture3D(f||empty3dTexture,x)}function setValueT6(b,f,m){const _=this.cache,x=m.allocateTextureUnit();_[0]!==x&&(b.uniform1i(this.addr,x),_[0]=x),m.setTextureCube(f||emptyCubeTexture,x)}function setValueT2DArray1(b,f,m){const _=this.cache,x=m.allocateTextureUnit();_[0]!==x&&(b.uniform1i(this.addr,x),_[0]=x),m.setTexture2DArray(f||emptyArrayTexture,x)}function getSingularSetter(b){switch(b){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(b,f){b.uniform1fv(this.addr,f)}function setValueV2fArray(b,f){const m=flatten(f,this.size,2);b.uniform2fv(this.addr,m)}function setValueV3fArray(b,f){const m=flatten(f,this.size,3);b.uniform3fv(this.addr,m)}function setValueV4fArray(b,f){const m=flatten(f,this.size,4);b.uniform4fv(this.addr,m)}function setValueM2Array(b,f){const m=flatten(f,this.size,4);b.uniformMatrix2fv(this.addr,!1,m)}function setValueM3Array(b,f){const m=flatten(f,this.size,9);b.uniformMatrix3fv(this.addr,!1,m)}function setValueM4Array(b,f){const m=flatten(f,this.size,16);b.uniformMatrix4fv(this.addr,!1,m)}function setValueV1iArray(b,f){b.uniform1iv(this.addr,f)}function setValueV2iArray(b,f){b.uniform2iv(this.addr,f)}function setValueV3iArray(b,f){b.uniform3iv(this.addr,f)}function setValueV4iArray(b,f){b.uniform4iv(this.addr,f)}function setValueV1uiArray(b,f){b.uniform1uiv(this.addr,f)}function setValueV2uiArray(b,f){b.uniform2uiv(this.addr,f)}function setValueV3uiArray(b,f){b.uniform3uiv(this.addr,f)}function setValueV4uiArray(b,f){b.uniform4uiv(this.addr,f)}function setValueT1Array(b,f,m){const _=this.cache,x=f.length,v=allocTexUnits(m,x);arraysEqual(_,v)||(b.uniform1iv(this.addr,v),copyArray(_,v));for(let y=0;y!==x;++y)m.setTexture2D(f[y]||emptyTexture,v[y])}function setValueT3DArray(b,f,m){const _=this.cache,x=f.length,v=allocTexUnits(m,x);arraysEqual(_,v)||(b.uniform1iv(this.addr,v),copyArray(_,v));for(let y=0;y!==x;++y)m.setTexture3D(f[y]||empty3dTexture,v[y])}function setValueT6Array(b,f,m){const _=this.cache,x=f.length,v=allocTexUnits(m,x);arraysEqual(_,v)||(b.uniform1iv(this.addr,v),copyArray(_,v));for(let y=0;y!==x;++y)m.setTextureCube(f[y]||emptyCubeTexture,v[y])}function setValueT2DArrayArray(b,f,m){const _=this.cache,x=f.length,v=allocTexUnits(m,x);arraysEqual(_,v)||(b.uniform1iv(this.addr,v),copyArray(_,v));for(let y=0;y!==x;++y)m.setTexture2DArray(f[y]||emptyArrayTexture,v[y])}function getPureArraySetter(b){switch(b){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(f,m,_){this.id=f,this.addr=_,this.cache=[],this.setValue=getSingularSetter(m.type)}}class PureArrayUniform{constructor(f,m,_){this.id=f,this.addr=_,this.cache=[],this.size=m.size,this.setValue=getPureArraySetter(m.type)}}class StructuredUniform{constructor(f){this.id=f,this.seq=[],this.map={}}setValue(f,m,_){const x=this.seq;for(let v=0,y=x.length;v!==y;++v){const M=x[v];M.setValue(f,m[M.id],_)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(b,f){b.seq.push(f),b.map[f.id]=f}function parseUniform(b,f,m){const _=b.name,x=_.length;for(RePathPart.lastIndex=0;;){const v=RePathPart.exec(_),y=RePathPart.lastIndex;let M=v[1];const S=v[2]==="]",w=v[3];if(S&&(M=M|0),w===void 0||w==="["&&y+2===x){addUniform(m,w===void 0?new SingleUniform(M,b,f):new PureArrayUniform(M,b,f));break}else{let A=m.map[M];A===void 0&&(A=new StructuredUniform(M),addUniform(m,A)),m=A}}}class WebGLUniforms{constructor(f,m){this.seq=[],this.map={};const _=f.getProgramParameter(m,35718);for(let x=0;x<_;++x){const v=f.getActiveUniform(m,x),y=f.getUniformLocation(m,v.name);parseUniform(v,y,this)}}setValue(f,m,_,x){const v=this.map[m];v!==void 0&&v.setValue(f,_,x)}setOptional(f,m,_){const x=m[_];x!==void 0&&this.setValue(f,_,x)}static upload(f,m,_,x){for(let v=0,y=m.length;v!==y;++v){const M=m[v],S=_[M.id];S.needsUpdate!==!1&&M.setValue(f,S.value,x)}}static seqWithValue(f,m){const _=[];for(let x=0,v=f.length;x!==v;++x){const y=f[x];y.id in m&&_.push(y)}return _}}function WebGLShader(b,f,m){const _=b.createShader(f);return b.shaderSource(_,m),b.compileShader(_),_}let programIdCount=0;function handleSource(b,f){const m=b.split(`
`),_=[],x=Math.max(f-6,0),v=Math.min(f+6,m.length);for(let y=x;y<v;y++){const M=y+1;_.push(`${M===f?">":" "} ${M}: ${m[y]}`)}return _.join(`
`)}function getEncodingComponents(b){switch(b){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",b),["Linear","( value )"]}}function getShaderErrors(b,f,m){const _=b.getShaderParameter(f,35713),x=b.getShaderInfoLog(f).trim();if(_&&x==="")return"";const v=/ERROR: 0:(\d+)/.exec(x);if(v){const y=parseInt(v[1]);return m.toUpperCase()+`

`+x+`

`+handleSource(b.getShaderSource(f),y)}else return x}function getTexelEncodingFunction(b,f){const m=getEncodingComponents(f);return"vec4 "+b+"( vec4 value ) { return LinearTo"+m[0]+m[1]+"; }"}function getToneMappingFunction(b,f){let m;switch(f){case LinearToneMapping:m="Linear";break;case ReinhardToneMapping:m="Reinhard";break;case CineonToneMapping:m="OptimizedCineon";break;case ACESFilmicToneMapping:m="ACESFilmic";break;case CustomToneMapping:m="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",f),m="Linear"}return"vec3 "+b+"( vec3 color ) { return "+m+"ToneMapping( color ); }"}function generateExtensions(b){return[b.extensionDerivatives||b.envMapCubeUVHeight||b.bumpMap||b.tangentSpaceNormalMap||b.clearcoatNormalMap||b.flatShading||b.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(b.extensionFragDepth||b.logarithmicDepthBuffer)&&b.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",b.extensionDrawBuffers&&b.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(b.extensionShaderTextureLOD||b.envMap||b.transmission)&&b.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(b){const f=[];for(const m in b){const _=b[m];_!==!1&&f.push("#define "+m+" "+_)}return f.join(`
`)}function fetchAttributeLocations(b,f){const m={},_=b.getProgramParameter(f,35721);for(let x=0;x<_;x++){const v=b.getActiveAttrib(f,x),y=v.name;let M=1;v.type===35674&&(M=2),v.type===35675&&(M=3),v.type===35676&&(M=4),m[y]={type:v.type,location:b.getAttribLocation(f,y),locationSize:M}}return m}function filterEmptyLine(b){return b!==""}function replaceLightNums(b,f){const m=f.numSpotLightShadows+f.numSpotLightMaps-f.numSpotLightShadowsWithMaps;return b.replace(/NUM_DIR_LIGHTS/g,f.numDirLights).replace(/NUM_SPOT_LIGHTS/g,f.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,f.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,m).replace(/NUM_RECT_AREA_LIGHTS/g,f.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,f.numPointLights).replace(/NUM_HEMI_LIGHTS/g,f.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,f.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,f.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,f.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,f.numPointLightShadows)}function replaceClippingPlaneNums(b,f){return b.replace(/NUM_CLIPPING_PLANES/g,f.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,f.numClippingPlanes-f.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(b){return b.replace(includePattern,includeReplacer)}function includeReplacer(b,f){const m=ShaderChunk[f];if(m===void 0)throw new Error("Can not resolve #include <"+f+">");return resolveIncludes(m)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(b){return b.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(b,f,m,_){let x="";for(let v=parseInt(f);v<parseInt(m);v++)x+=_.replace(/\[\s*i\s*\]/g,"[ "+v+" ]").replace(/UNROLLED_LOOP_INDEX/g,v);return x}function generatePrecision(b){let f="precision "+b.precision+` float;
precision `+b.precision+" int;";return b.precision==="highp"?f+=`
#define HIGH_PRECISION`:b.precision==="mediump"?f+=`
#define MEDIUM_PRECISION`:b.precision==="lowp"&&(f+=`
#define LOW_PRECISION`),f}function generateShadowMapTypeDefine(b){let f="SHADOWMAP_TYPE_BASIC";return b.shadowMapType===PCFShadowMap?f="SHADOWMAP_TYPE_PCF":b.shadowMapType===PCFSoftShadowMap?f="SHADOWMAP_TYPE_PCF_SOFT":b.shadowMapType===VSMShadowMap&&(f="SHADOWMAP_TYPE_VSM"),f}function generateEnvMapTypeDefine(b){let f="ENVMAP_TYPE_CUBE";if(b.envMap)switch(b.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:f="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:f="ENVMAP_TYPE_CUBE_UV";break}return f}function generateEnvMapModeDefine(b){let f="ENVMAP_MODE_REFLECTION";if(b.envMap)switch(b.envMapMode){case CubeRefractionMapping:f="ENVMAP_MODE_REFRACTION";break}return f}function generateEnvMapBlendingDefine(b){let f="ENVMAP_BLENDING_NONE";if(b.envMap)switch(b.combine){case MultiplyOperation:f="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:f="ENVMAP_BLENDING_MIX";break;case AddOperation:f="ENVMAP_BLENDING_ADD";break}return f}function generateCubeUVSize(b){const f=b.envMapCubeUVHeight;if(f===null)return null;const m=Math.log2(f)-2,_=1/f;return{texelWidth:1/(3*Math.max(Math.pow(2,m),7*16)),texelHeight:_,maxMip:m}}function WebGLProgram(b,f,m,_){const x=b.getContext(),v=m.defines;let y=m.vertexShader,M=m.fragmentShader;const S=generateShadowMapTypeDefine(m),w=generateEnvMapTypeDefine(m),T=generateEnvMapModeDefine(m),A=generateEnvMapBlendingDefine(m),E=generateCubeUVSize(m),R=m.isWebGL2?"":generateExtensions(m),P=generateDefines(v),C=x.createProgram();let L,D,U=m.glslVersion?"#version "+m.glslVersion+`
`:"";m.isRawShaderMaterial?(L=[P].filter(filterEmptyLine).join(`
`),L.length>0&&(L+=`
`),D=[R,P].filter(filterEmptyLine).join(`
`),D.length>0&&(D+=`
`)):(L=[generatePrecision(m),"#define SHADER_NAME "+m.shaderName,P,m.instancing?"#define USE_INSTANCING":"",m.instancingColor?"#define USE_INSTANCING_COLOR":"",m.supportsVertexTextures?"#define VERTEX_TEXTURES":"",m.useFog&&m.fog?"#define USE_FOG":"",m.useFog&&m.fogExp2?"#define FOG_EXP2":"",m.map?"#define USE_MAP":"",m.envMap?"#define USE_ENVMAP":"",m.envMap?"#define "+T:"",m.lightMap?"#define USE_LIGHTMAP":"",m.aoMap?"#define USE_AOMAP":"",m.emissiveMap?"#define USE_EMISSIVEMAP":"",m.bumpMap?"#define USE_BUMPMAP":"",m.normalMap?"#define USE_NORMALMAP":"",m.normalMap&&m.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",m.normalMap&&m.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",m.clearcoatMap?"#define USE_CLEARCOATMAP":"",m.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",m.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",m.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",m.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",m.displacementMap&&m.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",m.specularMap?"#define USE_SPECULARMAP":"",m.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",m.specularColorMap?"#define USE_SPECULARCOLORMAP":"",m.roughnessMap?"#define USE_ROUGHNESSMAP":"",m.metalnessMap?"#define USE_METALNESSMAP":"",m.alphaMap?"#define USE_ALPHAMAP":"",m.transmission?"#define USE_TRANSMISSION":"",m.transmissionMap?"#define USE_TRANSMISSIONMAP":"",m.thicknessMap?"#define USE_THICKNESSMAP":"",m.sheenColorMap?"#define USE_SHEENCOLORMAP":"",m.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",m.vertexTangents?"#define USE_TANGENT":"",m.vertexColors?"#define USE_COLOR":"",m.vertexAlphas?"#define USE_COLOR_ALPHA":"",m.vertexUvs?"#define USE_UV":"",m.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",m.flatShading?"#define FLAT_SHADED":"",m.skinning?"#define USE_SKINNING":"",m.morphTargets?"#define USE_MORPHTARGETS":"",m.morphNormals&&m.flatShading===!1?"#define USE_MORPHNORMALS":"",m.morphColors&&m.isWebGL2?"#define USE_MORPHCOLORS":"",m.morphTargetsCount>0&&m.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",m.morphTargetsCount>0&&m.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+m.morphTextureStride:"",m.morphTargetsCount>0&&m.isWebGL2?"#define MORPHTARGETS_COUNT "+m.morphTargetsCount:"",m.doubleSided?"#define DOUBLE_SIDED":"",m.flipSided?"#define FLIP_SIDED":"",m.shadowMapEnabled?"#define USE_SHADOWMAP":"",m.shadowMapEnabled?"#define "+S:"",m.sizeAttenuation?"#define USE_SIZEATTENUATION":"",m.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",m.logarithmicDepthBuffer&&m.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),D=[R,generatePrecision(m),"#define SHADER_NAME "+m.shaderName,P,m.useFog&&m.fog?"#define USE_FOG":"",m.useFog&&m.fogExp2?"#define FOG_EXP2":"",m.map?"#define USE_MAP":"",m.matcap?"#define USE_MATCAP":"",m.envMap?"#define USE_ENVMAP":"",m.envMap?"#define "+w:"",m.envMap?"#define "+T:"",m.envMap?"#define "+A:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",m.lightMap?"#define USE_LIGHTMAP":"",m.aoMap?"#define USE_AOMAP":"",m.emissiveMap?"#define USE_EMISSIVEMAP":"",m.bumpMap?"#define USE_BUMPMAP":"",m.normalMap?"#define USE_NORMALMAP":"",m.normalMap&&m.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",m.normalMap&&m.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",m.clearcoat?"#define USE_CLEARCOAT":"",m.clearcoatMap?"#define USE_CLEARCOATMAP":"",m.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",m.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",m.iridescence?"#define USE_IRIDESCENCE":"",m.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",m.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",m.specularMap?"#define USE_SPECULARMAP":"",m.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",m.specularColorMap?"#define USE_SPECULARCOLORMAP":"",m.roughnessMap?"#define USE_ROUGHNESSMAP":"",m.metalnessMap?"#define USE_METALNESSMAP":"",m.alphaMap?"#define USE_ALPHAMAP":"",m.alphaTest?"#define USE_ALPHATEST":"",m.sheen?"#define USE_SHEEN":"",m.sheenColorMap?"#define USE_SHEENCOLORMAP":"",m.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",m.transmission?"#define USE_TRANSMISSION":"",m.transmissionMap?"#define USE_TRANSMISSIONMAP":"",m.thicknessMap?"#define USE_THICKNESSMAP":"",m.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",m.vertexTangents?"#define USE_TANGENT":"",m.vertexColors||m.instancingColor?"#define USE_COLOR":"",m.vertexAlphas?"#define USE_COLOR_ALPHA":"",m.vertexUvs?"#define USE_UV":"",m.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",m.gradientMap?"#define USE_GRADIENTMAP":"",m.flatShading?"#define FLAT_SHADED":"",m.doubleSided?"#define DOUBLE_SIDED":"",m.flipSided?"#define FLIP_SIDED":"",m.shadowMapEnabled?"#define USE_SHADOWMAP":"",m.shadowMapEnabled?"#define "+S:"",m.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",m.useLegacyLights?"#define LEGACY_LIGHTS":"",m.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",m.logarithmicDepthBuffer&&m.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",m.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",m.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",m.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",m.toneMapping):"",m.dithering?"#define DITHERING":"",m.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",m.outputEncoding),m.useDepthPacking?"#define DEPTH_PACKING "+m.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),y=resolveIncludes(y),y=replaceLightNums(y,m),y=replaceClippingPlaneNums(y,m),M=resolveIncludes(M),M=replaceLightNums(M,m),M=replaceClippingPlaneNums(M,m),y=unrollLoops(y),M=unrollLoops(M),m.isWebGL2&&m.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,L=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,D=["#define varying in",m.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",m.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const I=U+L+y,O=U+D+M,V=WebGLShader(x,35633,I),H=WebGLShader(x,35632,O);if(x.attachShader(C,V),x.attachShader(C,H),m.index0AttributeName!==void 0?x.bindAttribLocation(C,0,m.index0AttributeName):m.morphTargets===!0&&x.bindAttribLocation(C,0,"position"),x.linkProgram(C),b.debug.checkShaderErrors){const k=x.getProgramInfoLog(C).trim(),Y=x.getShaderInfoLog(V).trim(),oe=x.getShaderInfoLog(H).trim();let ae=!0,K=!0;if(x.getProgramParameter(C,35714)===!1){ae=!1;const X=getShaderErrors(x,V,"vertex"),ee=getShaderErrors(x,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+x.getError()+" - VALIDATE_STATUS "+x.getProgramParameter(C,35715)+`

Program Info Log: `+k+`
`+X+`
`+ee)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(Y===""||oe==="")&&(K=!1);K&&(this.diagnostics={runnable:ae,programLog:k,vertexShader:{log:Y,prefix:L},fragmentShader:{log:oe,prefix:D}})}x.deleteShader(V),x.deleteShader(H);let $;this.getUniforms=function(){return $===void 0&&($=new WebGLUniforms(x,C)),$};let F;return this.getAttributes=function(){return F===void 0&&(F=fetchAttributeLocations(x,C)),F},this.destroy=function(){_.releaseStatesOfProgram(this),x.deleteProgram(C),this.program=void 0},this.name=m.shaderName,this.id=programIdCount++,this.cacheKey=f,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=H,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(f){const m=f.vertexShader,_=f.fragmentShader,x=this._getShaderStage(m),v=this._getShaderStage(_),y=this._getShaderCacheForMaterial(f);return y.has(x)===!1&&(y.add(x),x.usedTimes++),y.has(v)===!1&&(y.add(v),v.usedTimes++),this}remove(f){const m=this.materialCache.get(f);for(const _ of m)_.usedTimes--,_.usedTimes===0&&this.shaderCache.delete(_.code);return this.materialCache.delete(f),this}getVertexShaderID(f){return this._getShaderStage(f.vertexShader).id}getFragmentShaderID(f){return this._getShaderStage(f.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(f){const m=this.materialCache;let _=m.get(f);return _===void 0&&(_=new Set,m.set(f,_)),_}_getShaderStage(f){const m=this.shaderCache;let _=m.get(f);return _===void 0&&(_=new WebGLShaderStage(f),m.set(f,_)),_}}class WebGLShaderStage{constructor(f){this.id=_id++,this.code=f,this.usedTimes=0}}function WebGLPrograms(b,f,m,_,x,v,y){const M=new Layers,S=new WebGLShaderCache,w=[],T=x.isWebGL2,A=x.logarithmicDepthBuffer,E=x.vertexTextures;let R=x.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(F,k,Y,oe,ae){const K=oe.fog,X=ae.geometry,ee=F.isMeshStandardMaterial?oe.environment:null,le=(F.isMeshStandardMaterial?m:f).get(F.envMap||ee),de=le&&le.mapping===CubeUVReflectionMapping?le.image.height:null,se=P[F.type];F.precision!==null&&(R=x.getMaxPrecision(F.precision),R!==F.precision&&console.warn("THREE.WebGLProgram.getParameters:",F.precision,"not supported, using",R,"instead."));const fe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=fe!==void 0?fe.length:0;let Re=0;X.morphAttributes.position!==void 0&&(Re=1),X.morphAttributes.normal!==void 0&&(Re=2),X.morphAttributes.color!==void 0&&(Re=3);let Q,he,ge,Z;if(se){const Ne=ShaderLib[se];Q=Ne.vertexShader,he=Ne.fragmentShader}else Q=F.vertexShader,he=F.fragmentShader,S.update(F),ge=S.getVertexShaderID(F),Z=S.getFragmentShaderID(F);const Me=b.getRenderTarget(),be=F.alphaTest>0,we=F.clearcoat>0,Se=F.iridescence>0;return{isWebGL2:T,shaderID:se,shaderName:F.type,vertexShader:Q,fragmentShader:he,defines:F.defines,customVertexShaderID:ge,customFragmentShaderID:Z,isRawShaderMaterial:F.isRawShaderMaterial===!0,glslVersion:F.glslVersion,precision:R,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:E,outputEncoding:Me===null?b.outputEncoding:Me.isXRRenderTarget===!0?Me.texture.encoding:LinearEncoding,map:!!F.map,matcap:!!F.matcap,envMap:!!le,envMapMode:le&&le.mapping,envMapCubeUVHeight:de,lightMap:!!F.lightMap,aoMap:!!F.aoMap,emissiveMap:!!F.emissiveMap,bumpMap:!!F.bumpMap,normalMap:!!F.normalMap,objectSpaceNormalMap:F.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:F.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!F.map&&F.map.isVideoTexture===!0&&F.map.encoding===sRGBEncoding,clearcoat:we,clearcoatMap:we&&!!F.clearcoatMap,clearcoatRoughnessMap:we&&!!F.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!F.clearcoatNormalMap,iridescence:Se,iridescenceMap:Se&&!!F.iridescenceMap,iridescenceThicknessMap:Se&&!!F.iridescenceThicknessMap,displacementMap:!!F.displacementMap,roughnessMap:!!F.roughnessMap,metalnessMap:!!F.metalnessMap,specularMap:!!F.specularMap,specularIntensityMap:!!F.specularIntensityMap,specularColorMap:!!F.specularColorMap,opaque:F.transparent===!1&&F.blending===NormalBlending,alphaMap:!!F.alphaMap,alphaTest:be,gradientMap:!!F.gradientMap,sheen:F.sheen>0,sheenColorMap:!!F.sheenColorMap,sheenRoughnessMap:!!F.sheenRoughnessMap,transmission:F.transmission>0,transmissionMap:!!F.transmissionMap,thicknessMap:!!F.thicknessMap,combine:F.combine,vertexTangents:!!F.normalMap&&!!X.attributes.tangent,vertexColors:F.vertexColors,vertexAlphas:F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUvs:!!F.map||!!F.bumpMap||!!F.normalMap||!!F.specularMap||!!F.alphaMap||!!F.emissiveMap||!!F.roughnessMap||!!F.metalnessMap||!!F.clearcoatMap||!!F.clearcoatRoughnessMap||!!F.clearcoatNormalMap||!!F.iridescenceMap||!!F.iridescenceThicknessMap||!!F.displacementMap||!!F.transmissionMap||!!F.thicknessMap||!!F.specularIntensityMap||!!F.specularColorMap||!!F.sheenColorMap||!!F.sheenRoughnessMap,uvsVertexOnly:!(F.map||F.bumpMap||F.normalMap||F.specularMap||F.alphaMap||F.emissiveMap||F.roughnessMap||F.metalnessMap||F.clearcoatNormalMap||F.iridescenceMap||F.iridescenceThicknessMap||F.transmission>0||F.transmissionMap||F.thicknessMap||F.specularIntensityMap||F.specularColorMap||F.sheen>0||F.sheenColorMap||F.sheenRoughnessMap)&&!!F.displacementMap,fog:!!K,useFog:F.fog===!0,fogExp2:K&&K.isFogExp2,flatShading:!!F.flatShading,sizeAttenuation:F.sizeAttenuation,logarithmicDepthBuffer:A,skinning:ae.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numSpotLightMaps:k.spotLightMap.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numSpotLightShadowsWithMaps:k.numSpotLightShadowsWithMaps,numClippingPlanes:y.numPlanes,numClipIntersection:y.numIntersection,dithering:F.dithering,shadowMapEnabled:b.shadowMap.enabled&&Y.length>0,shadowMapType:b.shadowMap.type,toneMapping:F.toneMapped?b.toneMapping:NoToneMapping,useLegacyLights:b.useLegacyLights,premultipliedAlpha:F.premultipliedAlpha,doubleSided:F.side===DoubleSide,flipSided:F.side===BackSide,useDepthPacking:!!F.depthPacking,depthPacking:F.depthPacking||0,index0AttributeName:F.index0AttributeName,extensionDerivatives:F.extensions&&F.extensions.derivatives,extensionFragDepth:F.extensions&&F.extensions.fragDepth,extensionDrawBuffers:F.extensions&&F.extensions.drawBuffers,extensionShaderTextureLOD:F.extensions&&F.extensions.shaderTextureLOD,rendererExtensionFragDepth:T||_.has("EXT_frag_depth"),rendererExtensionDrawBuffers:T||_.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:T||_.has("EXT_shader_texture_lod"),customProgramCacheKey:F.customProgramCacheKey()}}function L(F){const k=[];if(F.shaderID?k.push(F.shaderID):(k.push(F.customVertexShaderID),k.push(F.customFragmentShaderID)),F.defines!==void 0)for(const Y in F.defines)k.push(Y),k.push(F.defines[Y]);return F.isRawShaderMaterial===!1&&(D(k,F),U(k,F),k.push(b.outputEncoding)),k.push(F.customProgramCacheKey),k.join()}function D(F,k){F.push(k.precision),F.push(k.outputEncoding),F.push(k.envMapMode),F.push(k.envMapCubeUVHeight),F.push(k.combine),F.push(k.vertexUvs),F.push(k.fogExp2),F.push(k.sizeAttenuation),F.push(k.morphTargetsCount),F.push(k.morphAttributeCount),F.push(k.numDirLights),F.push(k.numPointLights),F.push(k.numSpotLights),F.push(k.numSpotLightMaps),F.push(k.numHemiLights),F.push(k.numRectAreaLights),F.push(k.numDirLightShadows),F.push(k.numPointLightShadows),F.push(k.numSpotLightShadows),F.push(k.numSpotLightShadowsWithMaps),F.push(k.shadowMapType),F.push(k.toneMapping),F.push(k.numClippingPlanes),F.push(k.numClipIntersection),F.push(k.depthPacking)}function U(F,k){M.disableAll(),k.isWebGL2&&M.enable(0),k.supportsVertexTextures&&M.enable(1),k.instancing&&M.enable(2),k.instancingColor&&M.enable(3),k.map&&M.enable(4),k.matcap&&M.enable(5),k.envMap&&M.enable(6),k.lightMap&&M.enable(7),k.aoMap&&M.enable(8),k.emissiveMap&&M.enable(9),k.bumpMap&&M.enable(10),k.normalMap&&M.enable(11),k.objectSpaceNormalMap&&M.enable(12),k.tangentSpaceNormalMap&&M.enable(13),k.clearcoat&&M.enable(14),k.clearcoatMap&&M.enable(15),k.clearcoatRoughnessMap&&M.enable(16),k.clearcoatNormalMap&&M.enable(17),k.iridescence&&M.enable(18),k.iridescenceMap&&M.enable(19),k.iridescenceThicknessMap&&M.enable(20),k.displacementMap&&M.enable(21),k.specularMap&&M.enable(22),k.roughnessMap&&M.enable(23),k.metalnessMap&&M.enable(24),k.gradientMap&&M.enable(25),k.alphaMap&&M.enable(26),k.alphaTest&&M.enable(27),k.vertexColors&&M.enable(28),k.vertexAlphas&&M.enable(29),k.vertexUvs&&M.enable(30),k.vertexTangents&&M.enable(31),k.uvsVertexOnly&&M.enable(32),F.push(M.mask),M.disableAll(),k.fog&&M.enable(0),k.useFog&&M.enable(1),k.flatShading&&M.enable(2),k.logarithmicDepthBuffer&&M.enable(3),k.skinning&&M.enable(4),k.morphTargets&&M.enable(5),k.morphNormals&&M.enable(6),k.morphColors&&M.enable(7),k.premultipliedAlpha&&M.enable(8),k.shadowMapEnabled&&M.enable(9),k.useLegacyLights&&M.enable(10),k.doubleSided&&M.enable(11),k.flipSided&&M.enable(12),k.useDepthPacking&&M.enable(13),k.dithering&&M.enable(14),k.specularIntensityMap&&M.enable(15),k.specularColorMap&&M.enable(16),k.transmission&&M.enable(17),k.transmissionMap&&M.enable(18),k.thicknessMap&&M.enable(19),k.sheen&&M.enable(20),k.sheenColorMap&&M.enable(21),k.sheenRoughnessMap&&M.enable(22),k.decodeVideoTexture&&M.enable(23),k.opaque&&M.enable(24),F.push(M.mask)}function I(F){const k=P[F.type];let Y;if(k){const oe=ShaderLib[k];Y=UniformsUtils.clone(oe.uniforms)}else Y=F.uniforms;return Y}function O(F,k){let Y;for(let oe=0,ae=w.length;oe<ae;oe++){const K=w[oe];if(K.cacheKey===k){Y=K,++Y.usedTimes;break}}return Y===void 0&&(Y=new WebGLProgram(b,k,F,v),w.push(Y)),Y}function V(F){if(--F.usedTimes===0){const k=w.indexOf(F);w[k]=w[w.length-1],w.pop(),F.destroy()}}function H(F){S.remove(F)}function $(){S.dispose()}return{getParameters:C,getProgramCacheKey:L,getUniforms:I,acquireProgram:O,releaseProgram:V,releaseShaderCache:H,programs:w,dispose:$}}function WebGLProperties(){let b=new WeakMap;function f(v){let y=b.get(v);return y===void 0&&(y={},b.set(v,y)),y}function m(v){b.delete(v)}function _(v,y,M){b.get(v)[y]=M}function x(){b=new WeakMap}return{get:f,remove:m,update:_,dispose:x}}function painterSortStable(b,f){return b.groupOrder!==f.groupOrder?b.groupOrder-f.groupOrder:b.renderOrder!==f.renderOrder?b.renderOrder-f.renderOrder:b.material.id!==f.material.id?b.material.id-f.material.id:b.z!==f.z?b.z-f.z:b.id-f.id}function reversePainterSortStable(b,f){return b.groupOrder!==f.groupOrder?b.groupOrder-f.groupOrder:b.renderOrder!==f.renderOrder?b.renderOrder-f.renderOrder:b.z!==f.z?f.z-b.z:b.id-f.id}function WebGLRenderList(){const b=[];let f=0;const m=[],_=[],x=[];function v(){f=0,m.length=0,_.length=0,x.length=0}function y(A,E,R,P,C,L){let D=b[f];return D===void 0?(D={id:A.id,object:A,geometry:E,material:R,groupOrder:P,renderOrder:A.renderOrder,z:C,group:L},b[f]=D):(D.id=A.id,D.object=A,D.geometry=E,D.material=R,D.groupOrder=P,D.renderOrder=A.renderOrder,D.z=C,D.group=L),f++,D}function M(A,E,R,P,C,L){const D=y(A,E,R,P,C,L);R.transmission>0?_.push(D):R.transparent===!0?x.push(D):m.push(D)}function S(A,E,R,P,C,L){const D=y(A,E,R,P,C,L);R.transmission>0?_.unshift(D):R.transparent===!0?x.unshift(D):m.unshift(D)}function w(A,E){m.length>1&&m.sort(A||painterSortStable),_.length>1&&_.sort(E||reversePainterSortStable),x.length>1&&x.sort(E||reversePainterSortStable)}function T(){for(let A=f,E=b.length;A<E;A++){const R=b[A];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:m,transmissive:_,transparent:x,init:v,push:M,unshift:S,finish:T,sort:w}}function WebGLRenderLists(){let b=new WeakMap;function f(_,x){const v=b.get(_);let y;return v===void 0?(y=new WebGLRenderList,b.set(_,[y])):x>=v.length?(y=new WebGLRenderList,v.push(y)):y=v[x],y}function m(){b=new WeakMap}return{get:f,dispose:m}}function UniformsCache(){const b={};return{get:function(f){if(b[f.id]!==void 0)return b[f.id];let m;switch(f.type){case"DirectionalLight":m={direction:new Vector3,color:new Color};break;case"SpotLight":m={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":m={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":m={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":m={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return b[f.id]=m,m}}}function ShadowUniformsCache(){const b={};return{get:function(f){if(b[f.id]!==void 0)return b[f.id];let m;switch(f.type){case"DirectionalLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":m={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return b[f.id]=m,m}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(b,f){return(f.castShadow?2:0)-(b.castShadow?2:0)+(f.map?1:0)-(b.map?1:0)}function WebGLLights(b,f){const m=new UniformsCache,_=ShadowUniformsCache(),x={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let T=0;T<9;T++)x.probe.push(new Vector3);const v=new Vector3,y=new Matrix4,M=new Matrix4;function S(T,A){let E=0,R=0,P=0;for(let oe=0;oe<9;oe++)x.probe[oe].set(0,0,0);let C=0,L=0,D=0,U=0,I=0,O=0,V=0,H=0,$=0,F=0;T.sort(shadowCastingAndTexturingLightsFirst);const k=A===!0?Math.PI:1;for(let oe=0,ae=T.length;oe<ae;oe++){const K=T[oe],X=K.color,ee=K.intensity,le=K.distance,de=K.shadow&&K.shadow.map?K.shadow.map.texture:null;if(K.isAmbientLight)E+=X.r*ee*k,R+=X.g*ee*k,P+=X.b*ee*k;else if(K.isLightProbe)for(let se=0;se<9;se++)x.probe[se].addScaledVector(K.sh.coefficients[se],ee);else if(K.isDirectionalLight){const se=m.get(K);if(se.color.copy(K.color).multiplyScalar(K.intensity*k),K.castShadow){const fe=K.shadow,ce=_.get(K);ce.shadowBias=fe.bias,ce.shadowNormalBias=fe.normalBias,ce.shadowRadius=fe.radius,ce.shadowMapSize=fe.mapSize,x.directionalShadow[C]=ce,x.directionalShadowMap[C]=de,x.directionalShadowMatrix[C]=K.shadow.matrix,O++}x.directional[C]=se,C++}else if(K.isSpotLight){const se=m.get(K);se.position.setFromMatrixPosition(K.matrixWorld),se.color.copy(X).multiplyScalar(ee*k),se.distance=le,se.coneCos=Math.cos(K.angle),se.penumbraCos=Math.cos(K.angle*(1-K.penumbra)),se.decay=K.decay,x.spot[D]=se;const fe=K.shadow;if(K.map&&(x.spotLightMap[$]=K.map,$++,fe.updateMatrices(K),K.castShadow&&F++),x.spotLightMatrix[D]=fe.matrix,K.castShadow){const ce=_.get(K);ce.shadowBias=fe.bias,ce.shadowNormalBias=fe.normalBias,ce.shadowRadius=fe.radius,ce.shadowMapSize=fe.mapSize,x.spotShadow[D]=ce,x.spotShadowMap[D]=de,H++}D++}else if(K.isRectAreaLight){const se=m.get(K);se.color.copy(X).multiplyScalar(ee),se.halfWidth.set(K.width*.5,0,0),se.halfHeight.set(0,K.height*.5,0),x.rectArea[U]=se,U++}else if(K.isPointLight){const se=m.get(K);if(se.color.copy(K.color).multiplyScalar(K.intensity*k),se.distance=K.distance,se.decay=K.decay,K.castShadow){const fe=K.shadow,ce=_.get(K);ce.shadowBias=fe.bias,ce.shadowNormalBias=fe.normalBias,ce.shadowRadius=fe.radius,ce.shadowMapSize=fe.mapSize,ce.shadowCameraNear=fe.camera.near,ce.shadowCameraFar=fe.camera.far,x.pointShadow[L]=ce,x.pointShadowMap[L]=de,x.pointShadowMatrix[L]=K.shadow.matrix,V++}x.point[L]=se,L++}else if(K.isHemisphereLight){const se=m.get(K);se.skyColor.copy(K.color).multiplyScalar(ee*k),se.groundColor.copy(K.groundColor).multiplyScalar(ee*k),x.hemi[I]=se,I++}}U>0&&(f.isWebGL2||b.has("OES_texture_float_linear")===!0?(x.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,x.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):b.has("OES_texture_half_float_linear")===!0?(x.rectAreaLTC1=UniformsLib.LTC_HALF_1,x.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),x.ambient[0]=E,x.ambient[1]=R,x.ambient[2]=P;const Y=x.hash;(Y.directionalLength!==C||Y.pointLength!==L||Y.spotLength!==D||Y.rectAreaLength!==U||Y.hemiLength!==I||Y.numDirectionalShadows!==O||Y.numPointShadows!==V||Y.numSpotShadows!==H||Y.numSpotMaps!==$)&&(x.directional.length=C,x.spot.length=D,x.rectArea.length=U,x.point.length=L,x.hemi.length=I,x.directionalShadow.length=O,x.directionalShadowMap.length=O,x.pointShadow.length=V,x.pointShadowMap.length=V,x.spotShadow.length=H,x.spotShadowMap.length=H,x.directionalShadowMatrix.length=O,x.pointShadowMatrix.length=V,x.spotLightMatrix.length=H+$-F,x.spotLightMap.length=$,x.numSpotLightShadowsWithMaps=F,Y.directionalLength=C,Y.pointLength=L,Y.spotLength=D,Y.rectAreaLength=U,Y.hemiLength=I,Y.numDirectionalShadows=O,Y.numPointShadows=V,Y.numSpotShadows=H,Y.numSpotMaps=$,x.version=nextVersion++)}function w(T,A){let E=0,R=0,P=0,C=0,L=0;const D=A.matrixWorldInverse;for(let U=0,I=T.length;U<I;U++){const O=T[U];if(O.isDirectionalLight){const V=x.directional[E];V.direction.setFromMatrixPosition(O.matrixWorld),v.setFromMatrixPosition(O.target.matrixWorld),V.direction.sub(v),V.direction.transformDirection(D),E++}else if(O.isSpotLight){const V=x.spot[P];V.position.setFromMatrixPosition(O.matrixWorld),V.position.applyMatrix4(D),V.direction.setFromMatrixPosition(O.matrixWorld),v.setFromMatrixPosition(O.target.matrixWorld),V.direction.sub(v),V.direction.transformDirection(D),P++}else if(O.isRectAreaLight){const V=x.rectArea[C];V.position.setFromMatrixPosition(O.matrixWorld),V.position.applyMatrix4(D),M.identity(),y.copy(O.matrixWorld),y.premultiply(D),M.extractRotation(y),V.halfWidth.set(O.width*.5,0,0),V.halfHeight.set(0,O.height*.5,0),V.halfWidth.applyMatrix4(M),V.halfHeight.applyMatrix4(M),C++}else if(O.isPointLight){const V=x.point[R];V.position.setFromMatrixPosition(O.matrixWorld),V.position.applyMatrix4(D),R++}else if(O.isHemisphereLight){const V=x.hemi[L];V.direction.setFromMatrixPosition(O.matrixWorld),V.direction.transformDirection(D),L++}}}return{setup:S,setupView:w,state:x}}function WebGLRenderState(b,f){const m=new WebGLLights(b,f),_=[],x=[];function v(){_.length=0,x.length=0}function y(A){_.push(A)}function M(A){x.push(A)}function S(A){m.setup(_,A)}function w(A){m.setupView(_,A)}return{init:v,state:{lightsArray:_,shadowsArray:x,lights:m},setupLights:S,setupLightsView:w,pushLight:y,pushShadow:M}}function WebGLRenderStates(b,f){let m=new WeakMap;function _(v,y=0){const M=m.get(v);let S;return M===void 0?(S=new WebGLRenderState(b,f),m.set(v,[S])):y>=M.length?(S=new WebGLRenderState(b,f),M.push(S)):S=M[y],S}function x(){m=new WeakMap}return{get:_,dispose:x}}class MeshDepthMaterial extends Material{constructor(f){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(f)}copy(f){return super.copy(f),this.depthPacking=f.depthPacking,this.map=f.map,this.alphaMap=f.alphaMap,this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(f){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(f)}copy(f){return super.copy(f),this.referencePosition.copy(f.referencePosition),this.nearDistance=f.nearDistance,this.farDistance=f.farDistance,this.map=f.map,this.alphaMap=f.alphaMap,this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
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
}`;function WebGLShadowMap(b,f,m){let _=new Frustum;const x=new Vector2,v=new Vector2,y=new Vector4,M=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),S=new MeshDistanceMaterial,w={},T=m.maxTextureSize,A={[FrontSide]:BackSide,[BackSide]:FrontSide,[DoubleSide]:DoubleSide},E=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),R=E.clone();R.defines.HORIZONTAL_PASS=1;const P=new BufferGeometry;P.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Mesh(P,E),L=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(O,V,H){if(L.enabled===!1||L.autoUpdate===!1&&L.needsUpdate===!1||O.length===0)return;const $=b.getRenderTarget(),F=b.getActiveCubeFace(),k=b.getActiveMipmapLevel(),Y=b.state;Y.setBlending(NoBlending),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);for(let oe=0,ae=O.length;oe<ae;oe++){const K=O[oe],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;x.copy(X.mapSize);const ee=X.getFrameExtents();if(x.multiply(ee),v.copy(X.mapSize),(x.x>T||x.y>T)&&(x.x>T&&(v.x=Math.floor(T/ee.x),x.x=v.x*ee.x,X.mapSize.x=v.x),x.y>T&&(v.y=Math.floor(T/ee.y),x.y=v.y*ee.y,X.mapSize.y=v.y)),X.map===null){const de=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};X.map=new WebGLRenderTarget(x.x,x.y,de),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}b.setRenderTarget(X.map),b.clear();const le=X.getViewportCount();for(let de=0;de<le;de++){const se=X.getViewport(de);y.set(v.x*se.x,v.y*se.y,v.x*se.z,v.y*se.w),Y.viewport(y),X.updateMatrices(K,de),_=X.getFrustum(),I(V,H,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===VSMShadowMap&&D(X,H),X.needsUpdate=!1}L.needsUpdate=!1,b.setRenderTarget($,F,k)};function D(O,V){const H=f.update(C);E.defines.VSM_SAMPLES!==O.blurSamples&&(E.defines.VSM_SAMPLES=O.blurSamples,R.defines.VSM_SAMPLES=O.blurSamples,E.needsUpdate=!0,R.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new WebGLRenderTarget(x.x,x.y)),E.uniforms.shadow_pass.value=O.map.texture,E.uniforms.resolution.value=O.mapSize,E.uniforms.radius.value=O.radius,b.setRenderTarget(O.mapPass),b.clear(),b.renderBufferDirect(V,null,H,E,C,null),R.uniforms.shadow_pass.value=O.mapPass.texture,R.uniforms.resolution.value=O.mapSize,R.uniforms.radius.value=O.radius,b.setRenderTarget(O.map),b.clear(),b.renderBufferDirect(V,null,H,R,C,null)}function U(O,V,H,$,F,k){let Y=null;const oe=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(oe!==void 0)Y=oe;else if(Y=H.isPointLight===!0?S:M,b.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){const ae=Y.uuid,K=V.uuid;let X=w[ae];X===void 0&&(X={},w[ae]=X);let ee=X[K];ee===void 0&&(ee=Y.clone(),X[K]=ee),Y=ee}return Y.visible=V.visible,Y.wireframe=V.wireframe,k===VSMShadowMap?Y.side=V.shadowSide!==null?V.shadowSide:V.side:Y.side=V.shadowSide!==null?V.shadowSide:A[V.side],Y.alphaMap=V.alphaMap,Y.alphaTest=V.alphaTest,Y.map=V.map,Y.clipShadows=V.clipShadows,Y.clippingPlanes=V.clippingPlanes,Y.clipIntersection=V.clipIntersection,Y.displacementMap=V.displacementMap,Y.displacementScale=V.displacementScale,Y.displacementBias=V.displacementBias,Y.wireframeLinewidth=V.wireframeLinewidth,Y.linewidth=V.linewidth,H.isPointLight===!0&&Y.isMeshDistanceMaterial===!0&&(Y.referencePosition.setFromMatrixPosition(H.matrixWorld),Y.nearDistance=$,Y.farDistance=F),Y}function I(O,V,H,$,F){if(O.visible===!1)return;if(O.layers.test(V.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&F===VSMShadowMap)&&(!O.frustumCulled||_.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const oe=f.update(O),ae=O.material;if(Array.isArray(ae)){const K=oe.groups;for(let X=0,ee=K.length;X<ee;X++){const le=K[X],de=ae[le.materialIndex];if(de&&de.visible){const se=U(O,de,$,H.near,H.far,F);b.renderBufferDirect(H,null,oe,se,O,le)}}}else if(ae.visible){const K=U(O,ae,$,H.near,H.far,F);b.renderBufferDirect(H,null,oe,K,O,null)}}const Y=O.children;for(let oe=0,ae=Y.length;oe<ae;oe++)I(Y[oe],V,H,$,F)}}function WebGLState(b,f,m){const _=m.isWebGL2;function x(){let W=!1;const ie=new Vector4;let ue=null;const ye=new Vector4(0,0,0,0);return{setMask:function(Te){ue!==Te&&!W&&(b.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){W=Te},setClear:function(Te,je,tt,st,ut){ut===!0&&(Te*=st,je*=st,tt*=st),ie.set(Te,je,tt,st),ye.equals(ie)===!1&&(b.clearColor(Te,je,tt,st),ye.copy(ie))},reset:function(){W=!1,ue=null,ye.set(-1,0,0,0)}}}function v(){let W=!1,ie=null,ue=null,ye=null;return{setTest:function(Te){Te?be(2929):we(2929)},setMask:function(Te){ie!==Te&&!W&&(b.depthMask(Te),ie=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case NeverDepth:b.depthFunc(512);break;case AlwaysDepth:b.depthFunc(519);break;case LessDepth:b.depthFunc(513);break;case LessEqualDepth:b.depthFunc(515);break;case EqualDepth:b.depthFunc(514);break;case GreaterEqualDepth:b.depthFunc(518);break;case GreaterDepth:b.depthFunc(516);break;case NotEqualDepth:b.depthFunc(517);break;default:b.depthFunc(515)}ue=Te}},setLocked:function(Te){W=Te},setClear:function(Te){ye!==Te&&(b.clearDepth(Te),ye=Te)},reset:function(){W=!1,ie=null,ue=null,ye=null}}}function y(){let W=!1,ie=null,ue=null,ye=null,Te=null,je=null,tt=null,st=null,ut=null;return{setTest:function(Ye){W||(Ye?be(2960):we(2960))},setMask:function(Ye){ie!==Ye&&!W&&(b.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,ht,dt){(ue!==Ye||ye!==ht||Te!==dt)&&(b.stencilFunc(Ye,ht,dt),ue=Ye,ye=ht,Te=dt)},setOp:function(Ye,ht,dt){(je!==Ye||tt!==ht||st!==dt)&&(b.stencilOp(Ye,ht,dt),je=Ye,tt=ht,st=dt)},setLocked:function(Ye){W=Ye},setClear:function(Ye){ut!==Ye&&(b.clearStencil(Ye),ut=Ye)},reset:function(){W=!1,ie=null,ue=null,ye=null,Te=null,je=null,tt=null,st=null,ut=null}}}const M=new x,S=new v,w=new y,T=new WeakMap,A=new WeakMap;let E={},R={},P=new WeakMap,C=[],L=null,D=!1,U=null,I=null,O=null,V=null,H=null,$=null,F=null,k=!1,Y=null,oe=null,ae=null,K=null,X=null;const ee=b.getParameter(35661);let le=!1,de=0;const se=b.getParameter(7938);se.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(se)[1]),le=de>=1):se.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),le=de>=2);let fe=null,ce={};const Re=b.getParameter(3088),Q=b.getParameter(2978),he=new Vector4().fromArray(Re),ge=new Vector4().fromArray(Q);function Z(W,ie,ue){const ye=new Uint8Array(4),Te=b.createTexture();b.bindTexture(W,Te),b.texParameteri(W,10241,9728),b.texParameteri(W,10240,9728);for(let je=0;je<ue;je++)b.texImage2D(ie+je,0,6408,1,1,0,6408,5121,ye);return Te}const Me={};Me[3553]=Z(3553,3553,1),Me[34067]=Z(34067,34069,6),M.setClear(0,0,0,1),S.setClear(1),w.setClear(0),be(2929),S.setFunc(LessEqualDepth),Qe(!1),et(CullFaceBack),be(2884),Je(NoBlending);function be(W){E[W]!==!0&&(b.enable(W),E[W]=!0)}function we(W){E[W]!==!1&&(b.disable(W),E[W]=!1)}function Se(W,ie){return R[W]!==ie?(b.bindFramebuffer(W,ie),R[W]=ie,_&&(W===36009&&(R[36160]=ie),W===36160&&(R[36009]=ie)),!0):!1}function De(W,ie){let ue=C,ye=!1;if(W)if(ue=P.get(ie),ue===void 0&&(ue=[],P.set(ie,ue)),W.isWebGLMultipleRenderTargets){const Te=W.texture;if(ue.length!==Te.length||ue[0]!==36064){for(let je=0,tt=Te.length;je<tt;je++)ue[je]=36064+je;ue.length=Te.length,ye=!0}}else ue[0]!==36064&&(ue[0]=36064,ye=!0);else ue[0]!==1029&&(ue[0]=1029,ye=!0);ye&&(m.isWebGL2?b.drawBuffers(ue):f.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ne(W){return L!==W?(b.useProgram(W),L=W,!0):!1}const Fe={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(_)Fe[MinEquation]=32775,Fe[MaxEquation]=32776;else{const W=f.get("EXT_blend_minmax");W!==null&&(Fe[MinEquation]=W.MIN_EXT,Fe[MaxEquation]=W.MAX_EXT)}const ze={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function Je(W,ie,ue,ye,Te,je,tt,st){if(W===NoBlending){D===!0&&(we(3042),D=!1);return}if(D===!1&&(be(3042),D=!0),W!==CustomBlending){if(W!==U||st!==k){if((I!==AddEquation||H!==AddEquation)&&(b.blendEquation(32774),I=AddEquation,H=AddEquation),st)switch(W){case NormalBlending:b.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:b.blendFunc(1,1);break;case SubtractiveBlending:b.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:b.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case NormalBlending:b.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:b.blendFunc(770,1);break;case SubtractiveBlending:b.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:b.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,V=null,$=null,F=null,U=W,k=st}return}Te=Te||ie,je=je||ue,tt=tt||ye,(ie!==I||Te!==H)&&(b.blendEquationSeparate(Fe[ie],Fe[Te]),I=ie,H=Te),(ue!==O||ye!==V||je!==$||tt!==F)&&(b.blendFuncSeparate(ze[ue],ze[ye],ze[je],ze[tt]),O=ue,V=ye,$=je,F=tt),U=W,k=!1}function it(W,ie){W.side===DoubleSide?we(2884):be(2884);let ue=W.side===BackSide;ie&&(ue=!ue),Qe(ue),W.blending===NormalBlending&&W.transparent===!1?Je(NoBlending):Je(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.premultipliedAlpha),S.setFunc(W.depthFunc),S.setTest(W.depthTest),S.setMask(W.depthWrite),M.setMask(W.colorWrite);const ye=W.stencilWrite;w.setTest(ye),ye&&(w.setMask(W.stencilWriteMask),w.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),w.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Xe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?be(32926):we(32926)}function Qe(W){Y!==W&&(W?b.frontFace(2304):b.frontFace(2305),Y=W)}function et(W){W!==CullFaceNone?(be(2884),W!==oe&&(W===CullFaceBack?b.cullFace(1029):W===CullFaceFront?b.cullFace(1028):b.cullFace(1032))):we(2884),oe=W}function qe(W){W!==ae&&(le&&b.lineWidth(W),ae=W)}function Xe(W,ie,ue){W?(be(32823),(K!==ie||X!==ue)&&(b.polygonOffset(ie,ue),K=ie,X=ue)):we(32823)}function ot(W){W?be(3089):we(3089)}function rt(W){W===void 0&&(W=33984+ee-1),fe!==W&&(b.activeTexture(W),fe=W)}function G(W,ie,ue){ue===void 0&&(fe===null?ue=33984+ee-1:ue=fe);let ye=ce[ue];ye===void 0&&(ye={type:void 0,texture:void 0},ce[ue]=ye),(ye.type!==W||ye.texture!==ie)&&(fe!==ue&&(b.activeTexture(ue),fe=ue),b.bindTexture(W,ie||Me[W]),ye.type=W,ye.texture=ie)}function N(){const W=ce[fe];W!==void 0&&W.type!==void 0&&(b.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ne(){try{b.compressedTexImage2D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pe(){try{b.compressedTexImage3D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{b.texSubImage2D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xe(){try{b.texSubImage3D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ce(){try{b.compressedTexSubImage2D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function z(){try{b.compressedTexSubImage3D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function j(){try{b.texStorage2D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ve(){try{b.texStorage3D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _e(){try{b.texImage2D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ae(){try{b.texImage3D.apply(b,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Le(W){he.equals(W)===!1&&(b.scissor(W.x,W.y,W.z,W.w),he.copy(W))}function Ee(W){ge.equals(W)===!1&&(b.viewport(W.x,W.y,W.z,W.w),ge.copy(W))}function Ue(W,ie){let ue=A.get(ie);ue===void 0&&(ue=new WeakMap,A.set(ie,ue));let ye=ue.get(W);ye===void 0&&(ye=b.getUniformBlockIndex(ie,W.name),ue.set(W,ye))}function He(W,ie){const ye=A.get(ie).get(W);T.get(ie)!==ye&&(b.uniformBlockBinding(ie,ye,W.__bindingPointIndex),T.set(ie,ye))}function $e(){b.disable(3042),b.disable(2884),b.disable(2929),b.disable(32823),b.disable(3089),b.disable(2960),b.disable(32926),b.blendEquation(32774),b.blendFunc(1,0),b.blendFuncSeparate(1,0,1,0),b.colorMask(!0,!0,!0,!0),b.clearColor(0,0,0,0),b.depthMask(!0),b.depthFunc(513),b.clearDepth(1),b.stencilMask(4294967295),b.stencilFunc(519,0,4294967295),b.stencilOp(7680,7680,7680),b.clearStencil(0),b.cullFace(1029),b.frontFace(2305),b.polygonOffset(0,0),b.activeTexture(33984),b.bindFramebuffer(36160,null),_===!0&&(b.bindFramebuffer(36009,null),b.bindFramebuffer(36008,null)),b.useProgram(null),b.lineWidth(1),b.scissor(0,0,b.canvas.width,b.canvas.height),b.viewport(0,0,b.canvas.width,b.canvas.height),E={},fe=null,ce={},R={},P=new WeakMap,C=[],L=null,D=!1,U=null,I=null,O=null,V=null,H=null,$=null,F=null,k=!1,Y=null,oe=null,ae=null,K=null,X=null,he.set(0,0,b.canvas.width,b.canvas.height),ge.set(0,0,b.canvas.width,b.canvas.height),M.reset(),S.reset(),w.reset()}return{buffers:{color:M,depth:S,stencil:w},enable:be,disable:we,bindFramebuffer:Se,drawBuffers:De,useProgram:Ne,setBlending:Je,setMaterial:it,setFlipSided:Qe,setCullFace:et,setLineWidth:qe,setPolygonOffset:Xe,setScissorTest:ot,activeTexture:rt,bindTexture:G,unbindTexture:N,compressedTexImage2D:ne,compressedTexImage3D:pe,texImage2D:_e,texImage3D:Ae,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:j,texStorage3D:ve,texSubImage2D:me,texSubImage3D:xe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:z,scissor:Le,viewport:Ee,reset:$e}}function WebGLTextures(b,f,m,_,x,v,y){const M=x.isWebGL2,S=x.maxTextures,w=x.maxCubemapSize,T=x.maxTextureSize,A=x.maxSamples,E=f.has("WEBGL_multisampled_render_to_texture")?f.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),P=new WeakMap;let C;const L=new WeakMap;let D=!1;try{D=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function U(G,N){return D?new OffscreenCanvas(G,N):createElementNS("canvas")}function I(G,N,ne,pe){let me=1;if((G.width>pe||G.height>pe)&&(me=pe/Math.max(G.width,G.height)),me<1||N===!0)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap){const xe=N?floorPowerOfTwo:Math.floor,Ce=xe(me*G.width),z=xe(me*G.height);C===void 0&&(C=U(Ce,z));const j=ne?U(Ce,z):C;return j.width=Ce,j.height=z,j.getContext("2d").drawImage(G,0,0,Ce,z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+Ce+"x"+z+")."),j}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),G;return G}function O(G){return isPowerOfTwo(G.width)&&isPowerOfTwo(G.height)}function V(G){return M?!1:G.wrapS!==ClampToEdgeWrapping||G.wrapT!==ClampToEdgeWrapping||G.minFilter!==NearestFilter&&G.minFilter!==LinearFilter}function H(G,N){return G.generateMipmaps&&N&&G.minFilter!==NearestFilter&&G.minFilter!==LinearFilter}function $(G){b.generateMipmap(G)}function F(G,N,ne,pe,me=!1){if(M===!1)return N;if(G!==null){if(b[G]!==void 0)return b[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let xe=N;return N===6403&&(ne===5126&&(xe=33326),ne===5131&&(xe=33325),ne===5121&&(xe=33321)),N===33319&&(ne===5126&&(xe=33328),ne===5131&&(xe=33327),ne===5121&&(xe=33323)),N===6408&&(ne===5126&&(xe=34836),ne===5131&&(xe=34842),ne===5121&&(xe=pe===sRGBEncoding&&me===!1?35907:32856),ne===32819&&(xe=32854),ne===32820&&(xe=32855)),(xe===33325||xe===33326||xe===33327||xe===33328||xe===34842||xe===34836)&&f.get("EXT_color_buffer_float"),xe}function k(G,N,ne){return H(G,ne)===!0||G.isFramebufferTexture&&G.minFilter!==NearestFilter&&G.minFilter!==LinearFilter?Math.log2(Math.max(N.width,N.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?N.mipmaps.length:1}function Y(G){return G===NearestFilter||G===NearestMipmapNearestFilter||G===NearestMipmapLinearFilter?9728:9729}function oe(G){const N=G.target;N.removeEventListener("dispose",oe),K(N),N.isVideoTexture&&P.delete(N)}function ae(G){const N=G.target;N.removeEventListener("dispose",ae),ee(N)}function K(G){const N=_.get(G);if(N.__webglInit===void 0)return;const ne=G.source,pe=L.get(ne);if(pe){const me=pe[N.__cacheKey];me.usedTimes--,me.usedTimes===0&&X(G),Object.keys(pe).length===0&&L.delete(ne)}_.remove(G)}function X(G){const N=_.get(G);b.deleteTexture(N.__webglTexture);const ne=G.source,pe=L.get(ne);delete pe[N.__cacheKey],y.memory.textures--}function ee(G){const N=G.texture,ne=_.get(G),pe=_.get(N);if(pe.__webglTexture!==void 0&&(b.deleteTexture(pe.__webglTexture),y.memory.textures--),G.depthTexture&&G.depthTexture.dispose(),G.isWebGLCubeRenderTarget)for(let me=0;me<6;me++)b.deleteFramebuffer(ne.__webglFramebuffer[me]),ne.__webglDepthbuffer&&b.deleteRenderbuffer(ne.__webglDepthbuffer[me]);else{if(b.deleteFramebuffer(ne.__webglFramebuffer),ne.__webglDepthbuffer&&b.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&b.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let me=0;me<ne.__webglColorRenderbuffer.length;me++)ne.__webglColorRenderbuffer[me]&&b.deleteRenderbuffer(ne.__webglColorRenderbuffer[me]);ne.__webglDepthRenderbuffer&&b.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(G.isWebGLMultipleRenderTargets)for(let me=0,xe=N.length;me<xe;me++){const Ce=_.get(N[me]);Ce.__webglTexture&&(b.deleteTexture(Ce.__webglTexture),y.memory.textures--),_.remove(N[me])}_.remove(N),_.remove(G)}let le=0;function de(){le=0}function se(){const G=le;return G>=S&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+S),le+=1,G}function fe(G){const N=[];return N.push(G.wrapS),N.push(G.wrapT),N.push(G.wrapR||0),N.push(G.magFilter),N.push(G.minFilter),N.push(G.anisotropy),N.push(G.internalFormat),N.push(G.format),N.push(G.type),N.push(G.generateMipmaps),N.push(G.premultiplyAlpha),N.push(G.flipY),N.push(G.unpackAlignment),N.push(G.encoding),N.join()}function ce(G,N){const ne=_.get(G);if(G.isVideoTexture&&ot(G),G.isRenderTargetTexture===!1&&G.version>0&&ne.__version!==G.version){const pe=G.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(ne,G,N);return}}m.bindTexture(3553,ne.__webglTexture,33984+N)}function Re(G,N){const ne=_.get(G);if(G.version>0&&ne.__version!==G.version){we(ne,G,N);return}m.bindTexture(35866,ne.__webglTexture,33984+N)}function Q(G,N){const ne=_.get(G);if(G.version>0&&ne.__version!==G.version){we(ne,G,N);return}m.bindTexture(32879,ne.__webglTexture,33984+N)}function he(G,N){const ne=_.get(G);if(G.version>0&&ne.__version!==G.version){Se(ne,G,N);return}m.bindTexture(34067,ne.__webglTexture,33984+N)}const ge={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},Z={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function Me(G,N,ne){if(ne?(b.texParameteri(G,10242,ge[N.wrapS]),b.texParameteri(G,10243,ge[N.wrapT]),(G===32879||G===35866)&&b.texParameteri(G,32882,ge[N.wrapR]),b.texParameteri(G,10240,Z[N.magFilter]),b.texParameteri(G,10241,Z[N.minFilter])):(b.texParameteri(G,10242,33071),b.texParameteri(G,10243,33071),(G===32879||G===35866)&&b.texParameteri(G,32882,33071),(N.wrapS!==ClampToEdgeWrapping||N.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),b.texParameteri(G,10240,Y(N.magFilter)),b.texParameteri(G,10241,Y(N.minFilter)),N.minFilter!==NearestFilter&&N.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),f.has("EXT_texture_filter_anisotropic")===!0){const pe=f.get("EXT_texture_filter_anisotropic");if(N.magFilter===NearestFilter||N.minFilter!==NearestMipmapLinearFilter&&N.minFilter!==LinearMipmapLinearFilter||N.type===FloatType&&f.has("OES_texture_float_linear")===!1||M===!1&&N.type===HalfFloatType&&f.has("OES_texture_half_float_linear")===!1)return;(N.anisotropy>1||_.get(N).__currentAnisotropy)&&(b.texParameterf(G,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,x.getMaxAnisotropy())),_.get(N).__currentAnisotropy=N.anisotropy)}}function be(G,N){let ne=!1;G.__webglInit===void 0&&(G.__webglInit=!0,N.addEventListener("dispose",oe));const pe=N.source;let me=L.get(pe);me===void 0&&(me={},L.set(pe,me));const xe=fe(N);if(xe!==G.__cacheKey){me[xe]===void 0&&(me[xe]={texture:b.createTexture(),usedTimes:0},y.memory.textures++,ne=!0),me[xe].usedTimes++;const Ce=me[G.__cacheKey];Ce!==void 0&&(me[G.__cacheKey].usedTimes--,Ce.usedTimes===0&&X(N)),G.__cacheKey=xe,G.__webglTexture=me[xe].texture}return ne}function we(G,N,ne){let pe=3553;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(pe=35866),N.isData3DTexture&&(pe=32879);const me=be(G,N),xe=N.source;m.bindTexture(pe,G.__webglTexture,33984+ne);const Ce=_.get(xe);if(xe.version!==Ce.__version||me===!0){m.activeTexture(33984+ne),b.pixelStorei(37440,N.flipY),b.pixelStorei(37441,N.premultiplyAlpha),b.pixelStorei(3317,N.unpackAlignment),b.pixelStorei(37443,0);const z=V(N)&&O(N.image)===!1;let j=I(N.image,z,!1,T);j=rt(N,j);const ve=O(j)||M,_e=v.convert(N.format,N.encoding);let Ae=v.convert(N.type),Le=F(N.internalFormat,_e,Ae,N.encoding,N.isVideoTexture);Me(pe,N,ve);let Ee;const Ue=N.mipmaps,He=M&&N.isVideoTexture!==!0,$e=Ce.__version===void 0||me===!0,W=k(N,j,ve);if(N.isDepthTexture)Le=6402,M?N.type===FloatType?Le=36012:N.type===UnsignedIntType?Le=33190:N.type===UnsignedInt248Type?Le=35056:Le=33189:N.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),N.format===DepthFormat&&Le===6402&&N.type!==UnsignedShortType&&N.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),N.type=UnsignedIntType,Ae=v.convert(N.type)),N.format===DepthStencilFormat&&Le===6402&&(Le=34041,N.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),N.type=UnsignedInt248Type,Ae=v.convert(N.type))),$e&&(He?m.texStorage2D(3553,1,Le,j.width,j.height):m.texImage2D(3553,0,Le,j.width,j.height,0,_e,Ae,null));else if(N.isDataTexture)if(Ue.length>0&&ve){He&&$e&&m.texStorage2D(3553,W,Le,Ue[0].width,Ue[0].height);for(let ie=0,ue=Ue.length;ie<ue;ie++)Ee=Ue[ie],He?m.texSubImage2D(3553,ie,0,0,Ee.width,Ee.height,_e,Ae,Ee.data):m.texImage2D(3553,ie,Le,Ee.width,Ee.height,0,_e,Ae,Ee.data);N.generateMipmaps=!1}else He?($e&&m.texStorage2D(3553,W,Le,j.width,j.height),m.texSubImage2D(3553,0,0,0,j.width,j.height,_e,Ae,j.data)):m.texImage2D(3553,0,Le,j.width,j.height,0,_e,Ae,j.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){He&&$e&&m.texStorage3D(35866,W,Le,Ue[0].width,Ue[0].height,j.depth);for(let ie=0,ue=Ue.length;ie<ue;ie++)Ee=Ue[ie],N.format!==RGBAFormat?_e!==null?He?m.compressedTexSubImage3D(35866,ie,0,0,0,Ee.width,Ee.height,j.depth,_e,Ee.data,0,0):m.compressedTexImage3D(35866,ie,Le,Ee.width,Ee.height,j.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?m.texSubImage3D(35866,ie,0,0,0,Ee.width,Ee.height,j.depth,_e,Ae,Ee.data):m.texImage3D(35866,ie,Le,Ee.width,Ee.height,j.depth,0,_e,Ae,Ee.data)}else{He&&$e&&m.texStorage2D(3553,W,Le,Ue[0].width,Ue[0].height);for(let ie=0,ue=Ue.length;ie<ue;ie++)Ee=Ue[ie],N.format!==RGBAFormat?_e!==null?He?m.compressedTexSubImage2D(3553,ie,0,0,Ee.width,Ee.height,_e,Ee.data):m.compressedTexImage2D(3553,ie,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?m.texSubImage2D(3553,ie,0,0,Ee.width,Ee.height,_e,Ae,Ee.data):m.texImage2D(3553,ie,Le,Ee.width,Ee.height,0,_e,Ae,Ee.data)}else if(N.isDataArrayTexture)He?($e&&m.texStorage3D(35866,W,Le,j.width,j.height,j.depth),m.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,_e,Ae,j.data)):m.texImage3D(35866,0,Le,j.width,j.height,j.depth,0,_e,Ae,j.data);else if(N.isData3DTexture)He?($e&&m.texStorage3D(32879,W,Le,j.width,j.height,j.depth),m.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,_e,Ae,j.data)):m.texImage3D(32879,0,Le,j.width,j.height,j.depth,0,_e,Ae,j.data);else if(N.isFramebufferTexture){if($e)if(He)m.texStorage2D(3553,W,Le,j.width,j.height);else{let ie=j.width,ue=j.height;for(let ye=0;ye<W;ye++)m.texImage2D(3553,ye,Le,ie,ue,0,_e,Ae,null),ie>>=1,ue>>=1}}else if(Ue.length>0&&ve){He&&$e&&m.texStorage2D(3553,W,Le,Ue[0].width,Ue[0].height);for(let ie=0,ue=Ue.length;ie<ue;ie++)Ee=Ue[ie],He?m.texSubImage2D(3553,ie,0,0,_e,Ae,Ee):m.texImage2D(3553,ie,Le,_e,Ae,Ee);N.generateMipmaps=!1}else He?($e&&m.texStorage2D(3553,W,Le,j.width,j.height),m.texSubImage2D(3553,0,0,0,_e,Ae,j)):m.texImage2D(3553,0,Le,_e,Ae,j);H(N,ve)&&$(pe),Ce.__version=xe.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version}function Se(G,N,ne){if(N.image.length!==6)return;const pe=be(G,N),me=N.source;m.bindTexture(34067,G.__webglTexture,33984+ne);const xe=_.get(me);if(me.version!==xe.__version||pe===!0){m.activeTexture(33984+ne),b.pixelStorei(37440,N.flipY),b.pixelStorei(37441,N.premultiplyAlpha),b.pixelStorei(3317,N.unpackAlignment),b.pixelStorei(37443,0);const Ce=N.isCompressedTexture||N.image[0].isCompressedTexture,z=N.image[0]&&N.image[0].isDataTexture,j=[];for(let ie=0;ie<6;ie++)!Ce&&!z?j[ie]=I(N.image[ie],!1,!0,w):j[ie]=z?N.image[ie].image:N.image[ie],j[ie]=rt(N,j[ie]);const ve=j[0],_e=O(ve)||M,Ae=v.convert(N.format,N.encoding),Le=v.convert(N.type),Ee=F(N.internalFormat,Ae,Le,N.encoding),Ue=M&&N.isVideoTexture!==!0,He=xe.__version===void 0||pe===!0;let $e=k(N,ve,_e);Me(34067,N,_e);let W;if(Ce){Ue&&He&&m.texStorage2D(34067,$e,Ee,ve.width,ve.height);for(let ie=0;ie<6;ie++){W=j[ie].mipmaps;for(let ue=0;ue<W.length;ue++){const ye=W[ue];N.format!==RGBAFormat?Ae!==null?Ue?m.compressedTexSubImage2D(34069+ie,ue,0,0,ye.width,ye.height,Ae,ye.data):m.compressedTexImage2D(34069+ie,ue,Ee,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?m.texSubImage2D(34069+ie,ue,0,0,ye.width,ye.height,Ae,Le,ye.data):m.texImage2D(34069+ie,ue,Ee,ye.width,ye.height,0,Ae,Le,ye.data)}}}else{W=N.mipmaps,Ue&&He&&(W.length>0&&$e++,m.texStorage2D(34067,$e,Ee,j[0].width,j[0].height));for(let ie=0;ie<6;ie++)if(z){Ue?m.texSubImage2D(34069+ie,0,0,0,j[ie].width,j[ie].height,Ae,Le,j[ie].data):m.texImage2D(34069+ie,0,Ee,j[ie].width,j[ie].height,0,Ae,Le,j[ie].data);for(let ue=0;ue<W.length;ue++){const Te=W[ue].image[ie].image;Ue?m.texSubImage2D(34069+ie,ue+1,0,0,Te.width,Te.height,Ae,Le,Te.data):m.texImage2D(34069+ie,ue+1,Ee,Te.width,Te.height,0,Ae,Le,Te.data)}}else{Ue?m.texSubImage2D(34069+ie,0,0,0,Ae,Le,j[ie]):m.texImage2D(34069+ie,0,Ee,Ae,Le,j[ie]);for(let ue=0;ue<W.length;ue++){const ye=W[ue];Ue?m.texSubImage2D(34069+ie,ue+1,0,0,Ae,Le,ye.image[ie]):m.texImage2D(34069+ie,ue+1,Ee,Ae,Le,ye.image[ie])}}}H(N,_e)&&$(34067),xe.__version=me.version,N.onUpdate&&N.onUpdate(N)}G.__version=N.version}function De(G,N,ne,pe,me){const xe=v.convert(ne.format,ne.encoding),Ce=v.convert(ne.type),z=F(ne.internalFormat,xe,Ce,ne.encoding);_.get(N).__hasExternalTextures||(me===32879||me===35866?m.texImage3D(me,0,z,N.width,N.height,N.depth,0,xe,Ce,null):m.texImage2D(me,0,z,N.width,N.height,0,xe,Ce,null)),m.bindFramebuffer(36160,G),Xe(N)?E.framebufferTexture2DMultisampleEXT(36160,pe,me,_.get(ne).__webglTexture,0,qe(N)):(me===3553||me>=34069&&me<=34074)&&b.framebufferTexture2D(36160,pe,me,_.get(ne).__webglTexture,0),m.bindFramebuffer(36160,null)}function Ne(G,N,ne){if(b.bindRenderbuffer(36161,G),N.depthBuffer&&!N.stencilBuffer){let pe=33189;if(ne||Xe(N)){const me=N.depthTexture;me&&me.isDepthTexture&&(me.type===FloatType?pe=36012:me.type===UnsignedIntType&&(pe=33190));const xe=qe(N);Xe(N)?E.renderbufferStorageMultisampleEXT(36161,xe,pe,N.width,N.height):b.renderbufferStorageMultisample(36161,xe,pe,N.width,N.height)}else b.renderbufferStorage(36161,pe,N.width,N.height);b.framebufferRenderbuffer(36160,36096,36161,G)}else if(N.depthBuffer&&N.stencilBuffer){const pe=qe(N);ne&&Xe(N)===!1?b.renderbufferStorageMultisample(36161,pe,35056,N.width,N.height):Xe(N)?E.renderbufferStorageMultisampleEXT(36161,pe,35056,N.width,N.height):b.renderbufferStorage(36161,34041,N.width,N.height),b.framebufferRenderbuffer(36160,33306,36161,G)}else{const pe=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let me=0;me<pe.length;me++){const xe=pe[me],Ce=v.convert(xe.format,xe.encoding),z=v.convert(xe.type),j=F(xe.internalFormat,Ce,z,xe.encoding),ve=qe(N);ne&&Xe(N)===!1?b.renderbufferStorageMultisample(36161,ve,j,N.width,N.height):Xe(N)?E.renderbufferStorageMultisampleEXT(36161,ve,j,N.width,N.height):b.renderbufferStorage(36161,j,N.width,N.height)}}b.bindRenderbuffer(36161,null)}function Fe(G,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(m.bindFramebuffer(36160,G),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!_.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),ce(N.depthTexture,0);const pe=_.get(N.depthTexture).__webglTexture,me=qe(N);if(N.depthTexture.format===DepthFormat)Xe(N)?E.framebufferTexture2DMultisampleEXT(36160,36096,3553,pe,0,me):b.framebufferTexture2D(36160,36096,3553,pe,0);else if(N.depthTexture.format===DepthStencilFormat)Xe(N)?E.framebufferTexture2DMultisampleEXT(36160,33306,3553,pe,0,me):b.framebufferTexture2D(36160,33306,3553,pe,0);else throw new Error("Unknown depthTexture format")}function ze(G){const N=_.get(G),ne=G.isWebGLCubeRenderTarget===!0;if(G.depthTexture&&!N.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Fe(N.__webglFramebuffer,G)}else if(ne){N.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)m.bindFramebuffer(36160,N.__webglFramebuffer[pe]),N.__webglDepthbuffer[pe]=b.createRenderbuffer(),Ne(N.__webglDepthbuffer[pe],G,!1)}else m.bindFramebuffer(36160,N.__webglFramebuffer),N.__webglDepthbuffer=b.createRenderbuffer(),Ne(N.__webglDepthbuffer,G,!1);m.bindFramebuffer(36160,null)}function Je(G,N,ne){const pe=_.get(G);N!==void 0&&De(pe.__webglFramebuffer,G,G.texture,36064,3553),ne!==void 0&&ze(G)}function it(G){const N=G.texture,ne=_.get(G),pe=_.get(N);G.addEventListener("dispose",ae),G.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=b.createTexture()),pe.__version=N.version,y.memory.textures++);const me=G.isWebGLCubeRenderTarget===!0,xe=G.isWebGLMultipleRenderTargets===!0,Ce=O(G)||M;if(me){ne.__webglFramebuffer=[];for(let z=0;z<6;z++)ne.__webglFramebuffer[z]=b.createFramebuffer()}else{if(ne.__webglFramebuffer=b.createFramebuffer(),xe)if(x.drawBuffers){const z=G.texture;for(let j=0,ve=z.length;j<ve;j++){const _e=_.get(z[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=b.createTexture(),y.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(M&&G.samples>0&&Xe(G)===!1){const z=xe?N:[N];ne.__webglMultisampledFramebuffer=b.createFramebuffer(),ne.__webglColorRenderbuffer=[],m.bindFramebuffer(36160,ne.__webglMultisampledFramebuffer);for(let j=0;j<z.length;j++){const ve=z[j];ne.__webglColorRenderbuffer[j]=b.createRenderbuffer(),b.bindRenderbuffer(36161,ne.__webglColorRenderbuffer[j]);const _e=v.convert(ve.format,ve.encoding),Ae=v.convert(ve.type),Le=F(ve.internalFormat,_e,Ae,ve.encoding,G.isXRRenderTarget===!0),Ee=qe(G);b.renderbufferStorageMultisample(36161,Ee,Le,G.width,G.height),b.framebufferRenderbuffer(36160,36064+j,36161,ne.__webglColorRenderbuffer[j])}b.bindRenderbuffer(36161,null),G.depthBuffer&&(ne.__webglDepthRenderbuffer=b.createRenderbuffer(),Ne(ne.__webglDepthRenderbuffer,G,!0)),m.bindFramebuffer(36160,null)}}if(me){m.bindTexture(34067,pe.__webglTexture),Me(34067,N,Ce);for(let z=0;z<6;z++)De(ne.__webglFramebuffer[z],G,N,36064,34069+z);H(N,Ce)&&$(34067),m.unbindTexture()}else if(xe){const z=G.texture;for(let j=0,ve=z.length;j<ve;j++){const _e=z[j],Ae=_.get(_e);m.bindTexture(3553,Ae.__webglTexture),Me(3553,_e,Ce),De(ne.__webglFramebuffer,G,_e,36064+j,3553),H(_e,Ce)&&$(3553)}m.unbindTexture()}else{let z=3553;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(M?z=G.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),m.bindTexture(z,pe.__webglTexture),Me(z,N,Ce),De(ne.__webglFramebuffer,G,N,36064,z),H(N,Ce)&&$(z),m.unbindTexture()}G.depthBuffer&&ze(G)}function Qe(G){const N=O(G)||M,ne=G.isWebGLMultipleRenderTargets===!0?G.texture:[G.texture];for(let pe=0,me=ne.length;pe<me;pe++){const xe=ne[pe];if(H(xe,N)){const Ce=G.isWebGLCubeRenderTarget?34067:3553,z=_.get(xe).__webglTexture;m.bindTexture(Ce,z),$(Ce),m.unbindTexture()}}}function et(G){if(M&&G.samples>0&&Xe(G)===!1){const N=G.isWebGLMultipleRenderTargets?G.texture:[G.texture],ne=G.width,pe=G.height;let me=16384;const xe=[],Ce=G.stencilBuffer?33306:36096,z=_.get(G),j=G.isWebGLMultipleRenderTargets===!0;if(j)for(let ve=0;ve<N.length;ve++)m.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),b.framebufferRenderbuffer(36160,36064+ve,36161,null),m.bindFramebuffer(36160,z.__webglFramebuffer),b.framebufferTexture2D(36009,36064+ve,3553,null,0);m.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),m.bindFramebuffer(36009,z.__webglFramebuffer);for(let ve=0;ve<N.length;ve++){xe.push(36064+ve),G.depthBuffer&&xe.push(Ce);const _e=z.__ignoreDepthValues!==void 0?z.__ignoreDepthValues:!1;if(_e===!1&&(G.depthBuffer&&(me|=256),G.stencilBuffer&&(me|=1024)),j&&b.framebufferRenderbuffer(36008,36064,36161,z.__webglColorRenderbuffer[ve]),_e===!0&&(b.invalidateFramebuffer(36008,[Ce]),b.invalidateFramebuffer(36009,[Ce])),j){const Ae=_.get(N[ve]).__webglTexture;b.framebufferTexture2D(36009,36064,3553,Ae,0)}b.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,me,9728),R&&b.invalidateFramebuffer(36008,xe)}if(m.bindFramebuffer(36008,null),m.bindFramebuffer(36009,null),j)for(let ve=0;ve<N.length;ve++){m.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),b.framebufferRenderbuffer(36160,36064+ve,36161,z.__webglColorRenderbuffer[ve]);const _e=_.get(N[ve]).__webglTexture;m.bindFramebuffer(36160,z.__webglFramebuffer),b.framebufferTexture2D(36009,36064+ve,3553,_e,0)}m.bindFramebuffer(36009,z.__webglMultisampledFramebuffer)}}function qe(G){return Math.min(A,G.samples)}function Xe(G){const N=_.get(G);return M&&G.samples>0&&f.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function ot(G){const N=y.render.frame;P.get(G)!==N&&(P.set(G,N),G.update())}function rt(G,N){const ne=G.encoding,pe=G.format,me=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||G.format===_SRGBAFormat||ne!==LinearEncoding&&(ne===sRGBEncoding?M===!1?f.has("EXT_sRGB")===!0&&pe===RGBAFormat?(G.format=_SRGBAFormat,G.minFilter=LinearFilter,G.generateMipmaps=!1):N=ImageUtils.sRGBToLinear(N):(pe!==RGBAFormat||me!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",ne)),N}this.allocateTextureUnit=se,this.resetTextureUnits=de,this.setTexture2D=ce,this.setTexture2DArray=Re,this.setTexture3D=Q,this.setTextureCube=he,this.rebindTextures=Je,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Xe}function WebGLUtils(b,f,m){const _=m.isWebGL2;function x(v,y=null){let M;if(v===UnsignedByteType)return 5121;if(v===UnsignedShort4444Type)return 32819;if(v===UnsignedShort5551Type)return 32820;if(v===ByteType)return 5120;if(v===ShortType)return 5122;if(v===UnsignedShortType)return 5123;if(v===IntType)return 5124;if(v===UnsignedIntType)return 5125;if(v===FloatType)return 5126;if(v===HalfFloatType)return _?5131:(M=f.get("OES_texture_half_float"),M!==null?M.HALF_FLOAT_OES:null);if(v===AlphaFormat)return 6406;if(v===RGBAFormat)return 6408;if(v===LuminanceFormat)return 6409;if(v===LuminanceAlphaFormat)return 6410;if(v===DepthFormat)return 6402;if(v===DepthStencilFormat)return 34041;if(v===_SRGBAFormat)return M=f.get("EXT_sRGB"),M!==null?M.SRGB_ALPHA_EXT:null;if(v===RedFormat)return 6403;if(v===RedIntegerFormat)return 36244;if(v===RGFormat)return 33319;if(v===RGIntegerFormat)return 33320;if(v===RGBAIntegerFormat)return 36249;if(v===RGB_S3TC_DXT1_Format||v===RGBA_S3TC_DXT1_Format||v===RGBA_S3TC_DXT3_Format||v===RGBA_S3TC_DXT5_Format)if(y===sRGBEncoding)if(M=f.get("WEBGL_compressed_texture_s3tc_srgb"),M!==null){if(v===RGB_S3TC_DXT1_Format)return M.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(v===RGBA_S3TC_DXT1_Format)return M.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(v===RGBA_S3TC_DXT3_Format)return M.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(v===RGBA_S3TC_DXT5_Format)return M.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(M=f.get("WEBGL_compressed_texture_s3tc"),M!==null){if(v===RGB_S3TC_DXT1_Format)return M.COMPRESSED_RGB_S3TC_DXT1_EXT;if(v===RGBA_S3TC_DXT1_Format)return M.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(v===RGBA_S3TC_DXT3_Format)return M.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(v===RGBA_S3TC_DXT5_Format)return M.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(v===RGB_PVRTC_4BPPV1_Format||v===RGB_PVRTC_2BPPV1_Format||v===RGBA_PVRTC_4BPPV1_Format||v===RGBA_PVRTC_2BPPV1_Format)if(M=f.get("WEBGL_compressed_texture_pvrtc"),M!==null){if(v===RGB_PVRTC_4BPPV1_Format)return M.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(v===RGB_PVRTC_2BPPV1_Format)return M.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(v===RGBA_PVRTC_4BPPV1_Format)return M.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(v===RGBA_PVRTC_2BPPV1_Format)return M.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(v===RGB_ETC1_Format)return M=f.get("WEBGL_compressed_texture_etc1"),M!==null?M.COMPRESSED_RGB_ETC1_WEBGL:null;if(v===RGB_ETC2_Format||v===RGBA_ETC2_EAC_Format)if(M=f.get("WEBGL_compressed_texture_etc"),M!==null){if(v===RGB_ETC2_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ETC2:M.COMPRESSED_RGB8_ETC2;if(v===RGBA_ETC2_EAC_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:M.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(v===RGBA_ASTC_4x4_Format||v===RGBA_ASTC_5x4_Format||v===RGBA_ASTC_5x5_Format||v===RGBA_ASTC_6x5_Format||v===RGBA_ASTC_6x6_Format||v===RGBA_ASTC_8x5_Format||v===RGBA_ASTC_8x6_Format||v===RGBA_ASTC_8x8_Format||v===RGBA_ASTC_10x5_Format||v===RGBA_ASTC_10x6_Format||v===RGBA_ASTC_10x8_Format||v===RGBA_ASTC_10x10_Format||v===RGBA_ASTC_12x10_Format||v===RGBA_ASTC_12x12_Format)if(M=f.get("WEBGL_compressed_texture_astc"),M!==null){if(v===RGBA_ASTC_4x4_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:M.COMPRESSED_RGBA_ASTC_4x4_KHR;if(v===RGBA_ASTC_5x4_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:M.COMPRESSED_RGBA_ASTC_5x4_KHR;if(v===RGBA_ASTC_5x5_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:M.COMPRESSED_RGBA_ASTC_5x5_KHR;if(v===RGBA_ASTC_6x5_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:M.COMPRESSED_RGBA_ASTC_6x5_KHR;if(v===RGBA_ASTC_6x6_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:M.COMPRESSED_RGBA_ASTC_6x6_KHR;if(v===RGBA_ASTC_8x5_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:M.COMPRESSED_RGBA_ASTC_8x5_KHR;if(v===RGBA_ASTC_8x6_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:M.COMPRESSED_RGBA_ASTC_8x6_KHR;if(v===RGBA_ASTC_8x8_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:M.COMPRESSED_RGBA_ASTC_8x8_KHR;if(v===RGBA_ASTC_10x5_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:M.COMPRESSED_RGBA_ASTC_10x5_KHR;if(v===RGBA_ASTC_10x6_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:M.COMPRESSED_RGBA_ASTC_10x6_KHR;if(v===RGBA_ASTC_10x8_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:M.COMPRESSED_RGBA_ASTC_10x8_KHR;if(v===RGBA_ASTC_10x10_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:M.COMPRESSED_RGBA_ASTC_10x10_KHR;if(v===RGBA_ASTC_12x10_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:M.COMPRESSED_RGBA_ASTC_12x10_KHR;if(v===RGBA_ASTC_12x12_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:M.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(v===RGBA_BPTC_Format)if(M=f.get("EXT_texture_compression_bptc"),M!==null){if(v===RGBA_BPTC_Format)return y===sRGBEncoding?M.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:M.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(v===RED_RGTC1_Format||v===SIGNED_RED_RGTC1_Format||v===RED_GREEN_RGTC2_Format||v===SIGNED_RED_GREEN_RGTC2_Format)if(M=f.get("EXT_texture_compression_rgtc"),M!==null){if(v===RGBA_BPTC_Format)return M.COMPRESSED_RED_RGTC1_EXT;if(v===SIGNED_RED_RGTC1_Format)return M.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(v===RED_GREEN_RGTC2_Format)return M.COMPRESSED_RED_GREEN_RGTC2_EXT;if(v===SIGNED_RED_GREEN_RGTC2_Format)return M.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return v===UnsignedInt248Type?_?34042:(M=f.get("WEBGL_depth_texture"),M!==null?M.UNSIGNED_INT_24_8_WEBGL:null):b[v]!==void 0?b[v]:null}return{convert:x}}class ArrayCamera extends PerspectiveCamera{constructor(f=[]){super(),this.isArrayCamera=!0,this.cameras=f}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(f){return this._targetRay!==null&&this._targetRay.dispatchEvent(f),this._grip!==null&&this._grip.dispatchEvent(f),this._hand!==null&&this._hand.dispatchEvent(f),this}connect(f){if(f&&f.hand){const m=this._hand;if(m)for(const _ of f.hand.values())this._getHandJoint(m,_)}return this.dispatchEvent({type:"connected",data:f}),this}disconnect(f){return this.dispatchEvent({type:"disconnected",data:f}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(f,m,_){let x=null,v=null,y=null;const M=this._targetRay,S=this._grip,w=this._hand;if(f&&m.session.visibilityState!=="visible-blurred"){if(w&&f.hand){y=!0;for(const C of f.hand.values()){const L=m.getJointPose(C,_),D=this._getHandJoint(w,C);L!==null&&(D.matrix.fromArray(L.transform.matrix),D.matrix.decompose(D.position,D.rotation,D.scale),D.jointRadius=L.radius),D.visible=L!==null}const T=w.joints["index-finger-tip"],A=w.joints["thumb-tip"],E=T.position.distanceTo(A.position),R=.02,P=.005;w.inputState.pinching&&E>R+P?(w.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:f.handedness,target:this})):!w.inputState.pinching&&E<=R-P&&(w.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:f.handedness,target:this}))}else S!==null&&f.gripSpace&&(v=m.getPose(f.gripSpace,_),v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),v.linearVelocity?(S.hasLinearVelocity=!0,S.linearVelocity.copy(v.linearVelocity)):S.hasLinearVelocity=!1,v.angularVelocity?(S.hasAngularVelocity=!0,S.angularVelocity.copy(v.angularVelocity)):S.hasAngularVelocity=!1));M!==null&&(x=m.getPose(f.targetRaySpace,_),x===null&&v!==null&&(x=v),x!==null&&(M.matrix.fromArray(x.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),x.linearVelocity?(M.hasLinearVelocity=!0,M.linearVelocity.copy(x.linearVelocity)):M.hasLinearVelocity=!1,x.angularVelocity?(M.hasAngularVelocity=!0,M.angularVelocity.copy(x.angularVelocity)):M.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return M!==null&&(M.visible=x!==null),S!==null&&(S.visible=v!==null),w!==null&&(w.visible=y!==null),this}_getHandJoint(f,m){if(f.joints[m.jointName]===void 0){const _=new Group;_.matrixAutoUpdate=!1,_.visible=!1,f.joints[m.jointName]=_,f.add(_)}return f.joints[m.jointName]}}class DepthTexture extends Texture{constructor(f,m,_,x,v,y,M,S,w,T){if(T=T!==void 0?T:DepthFormat,T!==DepthFormat&&T!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");_===void 0&&T===DepthFormat&&(_=UnsignedIntType),_===void 0&&T===DepthStencilFormat&&(_=UnsignedInt248Type),super(null,x,v,y,M,S,T,_,w),this.isDepthTexture=!0,this.image={width:f,height:m},this.magFilter=M!==void 0?M:NearestFilter,this.minFilter=S!==void 0?S:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(f,m){super();const _=this;let x=null,v=1,y=null,M="local-floor",S=1,w=null,T=null,A=null,E=null,R=null,P=null;const C=m.getContextAttributes();let L=null,D=null;const U=[],I=[],O=new Set,V=new Map,H=new PerspectiveCamera;H.layers.enable(1),H.viewport=new Vector4;const $=new PerspectiveCamera;$.layers.enable(2),$.viewport=new Vector4;const F=[H,$],k=new ArrayCamera;k.layers.enable(1),k.layers.enable(2);let Y=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=U[Q];return he===void 0&&(he=new WebXRController,U[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=U[Q];return he===void 0&&(he=new WebXRController,U[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=U[Q];return he===void 0&&(he=new WebXRController,U[Q]=he),he.getHandSpace()};function ae(Q){const he=I.indexOf(Q.inputSource);if(he===-1)return;const ge=U[he];ge!==void 0&&ge.dispatchEvent({type:Q.type,data:Q.inputSource})}function K(){x.removeEventListener("select",ae),x.removeEventListener("selectstart",ae),x.removeEventListener("selectend",ae),x.removeEventListener("squeeze",ae),x.removeEventListener("squeezestart",ae),x.removeEventListener("squeezeend",ae),x.removeEventListener("end",K),x.removeEventListener("inputsourceschange",X);for(let Q=0;Q<U.length;Q++){const he=I[Q];he!==null&&(I[Q]=null,U[Q].disconnect(he))}Y=null,oe=null,f.setRenderTarget(L),R=null,E=null,A=null,x=null,D=null,Re.stop(),_.isPresenting=!1,_.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){v=Q,_.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){M=Q,_.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return w||y},this.setReferenceSpace=function(Q){w=Q},this.getBaseLayer=function(){return E!==null?E:R},this.getBinding=function(){return A},this.getFrame=function(){return P},this.getSession=function(){return x},this.setSession=async function(Q){if(x=Q,x!==null){if(L=f.getRenderTarget(),x.addEventListener("select",ae),x.addEventListener("selectstart",ae),x.addEventListener("selectend",ae),x.addEventListener("squeeze",ae),x.addEventListener("squeezestart",ae),x.addEventListener("squeezeend",ae),x.addEventListener("end",K),x.addEventListener("inputsourceschange",X),C.xrCompatible!==!0&&await m.makeXRCompatible(),x.renderState.layers===void 0||f.capabilities.isWebGL2===!1){const he={antialias:x.renderState.layers===void 0?C.antialias:!0,alpha:C.alpha,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:v};R=new XRWebGLLayer(x,m,he),x.updateRenderState({baseLayer:R}),D=new WebGLRenderTarget(R.framebufferWidth,R.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:f.outputEncoding,stencilBuffer:C.stencil})}else{let he=null,ge=null,Z=null;C.depth&&(Z=C.stencil?35056:33190,he=C.stencil?DepthStencilFormat:DepthFormat,ge=C.stencil?UnsignedInt248Type:UnsignedIntType);const Me={colorFormat:32856,depthFormat:Z,scaleFactor:v};A=new XRWebGLBinding(x,m),E=A.createProjectionLayer(Me),x.updateRenderState({layers:[E]}),D=new WebGLRenderTarget(E.textureWidth,E.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(E.textureWidth,E.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:C.stencil,encoding:f.outputEncoding,samples:C.antialias?4:0});const be=f.properties.get(D);be.__ignoreDepthValues=E.ignoreDepthValues}D.isXRRenderTarget=!0,this.setFoveation(S),w=null,y=await x.requestReferenceSpace(M),Re.setContext(x),Re.start(),_.isPresenting=!0,_.dispatchEvent({type:"sessionstart"})}};function X(Q){for(let he=0;he<Q.removed.length;he++){const ge=Q.removed[he],Z=I.indexOf(ge);Z>=0&&(I[Z]=null,U[Z].disconnect(ge))}for(let he=0;he<Q.added.length;he++){const ge=Q.added[he];let Z=I.indexOf(ge);if(Z===-1){for(let be=0;be<U.length;be++)if(be>=I.length){I.push(ge),Z=be;break}else if(I[be]===null){I[be]=ge,Z=be;break}if(Z===-1)break}const Me=U[Z];Me&&Me.connect(ge)}}const ee=new Vector3,le=new Vector3;function de(Q,he,ge){ee.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const Z=ee.distanceTo(le),Me=he.projectionMatrix.elements,be=ge.projectionMatrix.elements,we=Me[14]/(Me[10]-1),Se=Me[14]/(Me[10]+1),De=(Me[9]+1)/Me[5],Ne=(Me[9]-1)/Me[5],Fe=(Me[8]-1)/Me[0],ze=(be[8]+1)/be[0],Je=we*Fe,it=we*ze,Qe=Z/(-Fe+ze),et=Qe*-Fe;he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(et),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const qe=we+Qe,Xe=Se+Qe,ot=Je-et,rt=it+(Z-et),G=De*Se/Xe*qe,N=Ne*Se/Xe*qe;Q.projectionMatrix.makePerspective(ot,rt,G,N,qe,Xe)}function se(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(x===null)return;k.near=$.near=H.near=Q.near,k.far=$.far=H.far=Q.far,(Y!==k.near||oe!==k.far)&&(x.updateRenderState({depthNear:k.near,depthFar:k.far}),Y=k.near,oe=k.far);const he=Q.parent,ge=k.cameras;se(k,he);for(let Me=0;Me<ge.length;Me++)se(ge[Me],he);k.matrixWorld.decompose(k.position,k.quaternion,k.scale),Q.matrix.copy(k.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale);const Z=Q.children;for(let Me=0,be=Z.length;Me<be;Me++)Z[Me].updateMatrixWorld(!0);ge.length===2?de(k,H,$):k.projectionMatrix.copy(H.projectionMatrix)},this.getCamera=function(){return k},this.getFoveation=function(){if(!(E===null&&R===null))return S},this.setFoveation=function(Q){S=Q,E!==null&&(E.fixedFoveation=Q),R!==null&&R.fixedFoveation!==void 0&&(R.fixedFoveation=Q)},this.getPlanes=function(){return O};let fe=null;function ce(Q,he){if(T=he.getViewerPose(w||y),P=he,T!==null){const ge=T.views;R!==null&&(f.setRenderTargetFramebuffer(D,R.framebuffer),f.setRenderTarget(D));let Z=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,Z=!0);for(let Me=0;Me<ge.length;Me++){const be=ge[Me];let we=null;if(R!==null)we=R.getViewport(be);else{const De=A.getViewSubImage(E,be);we=De.viewport,Me===0&&(f.setRenderTargetTextures(D,De.colorTexture,E.ignoreDepthValues?void 0:De.depthStencilTexture),f.setRenderTarget(D))}let Se=F[Me];Se===void 0&&(Se=new PerspectiveCamera,Se.layers.enable(Me),Se.viewport=new Vector4,F[Me]=Se),Se.matrix.fromArray(be.transform.matrix),Se.projectionMatrix.fromArray(be.projectionMatrix),Se.viewport.set(we.x,we.y,we.width,we.height),Me===0&&k.matrix.copy(Se.matrix),Z===!0&&k.cameras.push(Se)}}for(let ge=0;ge<U.length;ge++){const Z=I[ge],Me=U[ge];Z!==null&&Me!==void 0&&Me.update(Z,he,w||y)}if(fe&&fe(Q,he),he.detectedPlanes){_.dispatchEvent({type:"planesdetected",data:he.detectedPlanes});let ge=null;for(const Z of O)he.detectedPlanes.has(Z)||(ge===null&&(ge=[]),ge.push(Z));if(ge!==null)for(const Z of ge)O.delete(Z),V.delete(Z),_.dispatchEvent({type:"planeremoved",data:Z});for(const Z of he.detectedPlanes)if(!O.has(Z))O.add(Z),V.set(Z,he.lastChangedTime),_.dispatchEvent({type:"planeadded",data:Z});else{const Me=V.get(Z);Z.lastChangedTime>Me&&(V.set(Z,Z.lastChangedTime),_.dispatchEvent({type:"planechanged",data:Z}))}}P=null}const Re=new WebGLAnimation;Re.setAnimationLoop(ce),this.setAnimationLoop=function(Q){fe=Q},this.dispose=function(){}}}function WebGLMaterials(b,f){function m(C,L){L.color.getRGB(C.fogColor.value,getUnlitUniformColorSpace(b)),L.isFog?(C.fogNear.value=L.near,C.fogFar.value=L.far):L.isFogExp2&&(C.fogDensity.value=L.density)}function _(C,L,D,U,I){L.isMeshBasicMaterial||L.isMeshLambertMaterial?x(C,L):L.isMeshToonMaterial?(x(C,L),T(C,L)):L.isMeshPhongMaterial?(x(C,L),w(C,L)):L.isMeshStandardMaterial?(x(C,L),A(C,L),L.isMeshPhysicalMaterial&&E(C,L,I)):L.isMeshMatcapMaterial?(x(C,L),R(C,L)):L.isMeshDepthMaterial?x(C,L):L.isMeshDistanceMaterial?(x(C,L),P(C,L)):L.isMeshNormalMaterial?x(C,L):L.isLineBasicMaterial?(v(C,L),L.isLineDashedMaterial&&y(C,L)):L.isPointsMaterial?M(C,L,D,U):L.isSpriteMaterial?S(C,L):L.isShadowMaterial?(C.color.value.copy(L.color),C.opacity.value=L.opacity):L.isShaderMaterial&&(L.uniformsNeedUpdate=!1)}function x(C,L){C.opacity.value=L.opacity,L.color&&C.diffuse.value.copy(L.color),L.emissive&&C.emissive.value.copy(L.emissive).multiplyScalar(L.emissiveIntensity),L.map&&(C.map.value=L.map),L.alphaMap&&(C.alphaMap.value=L.alphaMap),L.bumpMap&&(C.bumpMap.value=L.bumpMap,C.bumpScale.value=L.bumpScale,L.side===BackSide&&(C.bumpScale.value*=-1)),L.displacementMap&&(C.displacementMap.value=L.displacementMap,C.displacementScale.value=L.displacementScale,C.displacementBias.value=L.displacementBias),L.emissiveMap&&(C.emissiveMap.value=L.emissiveMap),L.normalMap&&(C.normalMap.value=L.normalMap,C.normalScale.value.copy(L.normalScale),L.side===BackSide&&C.normalScale.value.negate()),L.specularMap&&(C.specularMap.value=L.specularMap),L.alphaTest>0&&(C.alphaTest.value=L.alphaTest);const D=f.get(L).envMap;if(D&&(C.envMap.value=D,C.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,C.reflectivity.value=L.reflectivity,C.ior.value=L.ior,C.refractionRatio.value=L.refractionRatio),L.lightMap){C.lightMap.value=L.lightMap;const O=b.useLegacyLights===!0?Math.PI:1;C.lightMapIntensity.value=L.lightMapIntensity*O}L.aoMap&&(C.aoMap.value=L.aoMap,C.aoMapIntensity.value=L.aoMapIntensity);let U;L.map?U=L.map:L.specularMap?U=L.specularMap:L.displacementMap?U=L.displacementMap:L.normalMap?U=L.normalMap:L.bumpMap?U=L.bumpMap:L.roughnessMap?U=L.roughnessMap:L.metalnessMap?U=L.metalnessMap:L.alphaMap?U=L.alphaMap:L.emissiveMap?U=L.emissiveMap:L.clearcoatMap?U=L.clearcoatMap:L.clearcoatNormalMap?U=L.clearcoatNormalMap:L.clearcoatRoughnessMap?U=L.clearcoatRoughnessMap:L.iridescenceMap?U=L.iridescenceMap:L.iridescenceThicknessMap?U=L.iridescenceThicknessMap:L.specularIntensityMap?U=L.specularIntensityMap:L.specularColorMap?U=L.specularColorMap:L.transmissionMap?U=L.transmissionMap:L.thicknessMap?U=L.thicknessMap:L.sheenColorMap?U=L.sheenColorMap:L.sheenRoughnessMap&&(U=L.sheenRoughnessMap),U!==void 0&&(U.isWebGLRenderTarget&&(U=U.texture),U.matrixAutoUpdate===!0&&U.updateMatrix(),C.uvTransform.value.copy(U.matrix));let I;L.aoMap?I=L.aoMap:L.lightMap&&(I=L.lightMap),I!==void 0&&(I.isWebGLRenderTarget&&(I=I.texture),I.matrixAutoUpdate===!0&&I.updateMatrix(),C.uv2Transform.value.copy(I.matrix))}function v(C,L){C.diffuse.value.copy(L.color),C.opacity.value=L.opacity}function y(C,L){C.dashSize.value=L.dashSize,C.totalSize.value=L.dashSize+L.gapSize,C.scale.value=L.scale}function M(C,L,D,U){C.diffuse.value.copy(L.color),C.opacity.value=L.opacity,C.size.value=L.size*D,C.scale.value=U*.5,L.map&&(C.map.value=L.map),L.alphaMap&&(C.alphaMap.value=L.alphaMap),L.alphaTest>0&&(C.alphaTest.value=L.alphaTest);let I;L.map?I=L.map:L.alphaMap&&(I=L.alphaMap),I!==void 0&&(I.matrixAutoUpdate===!0&&I.updateMatrix(),C.uvTransform.value.copy(I.matrix))}function S(C,L){C.diffuse.value.copy(L.color),C.opacity.value=L.opacity,C.rotation.value=L.rotation,L.map&&(C.map.value=L.map),L.alphaMap&&(C.alphaMap.value=L.alphaMap),L.alphaTest>0&&(C.alphaTest.value=L.alphaTest);let D;L.map?D=L.map:L.alphaMap&&(D=L.alphaMap),D!==void 0&&(D.matrixAutoUpdate===!0&&D.updateMatrix(),C.uvTransform.value.copy(D.matrix))}function w(C,L){C.specular.value.copy(L.specular),C.shininess.value=Math.max(L.shininess,1e-4)}function T(C,L){L.gradientMap&&(C.gradientMap.value=L.gradientMap)}function A(C,L){C.roughness.value=L.roughness,C.metalness.value=L.metalness,L.roughnessMap&&(C.roughnessMap.value=L.roughnessMap),L.metalnessMap&&(C.metalnessMap.value=L.metalnessMap),f.get(L).envMap&&(C.envMapIntensity.value=L.envMapIntensity)}function E(C,L,D){C.ior.value=L.ior,L.sheen>0&&(C.sheenColor.value.copy(L.sheenColor).multiplyScalar(L.sheen),C.sheenRoughness.value=L.sheenRoughness,L.sheenColorMap&&(C.sheenColorMap.value=L.sheenColorMap),L.sheenRoughnessMap&&(C.sheenRoughnessMap.value=L.sheenRoughnessMap)),L.clearcoat>0&&(C.clearcoat.value=L.clearcoat,C.clearcoatRoughness.value=L.clearcoatRoughness,L.clearcoatMap&&(C.clearcoatMap.value=L.clearcoatMap),L.clearcoatRoughnessMap&&(C.clearcoatRoughnessMap.value=L.clearcoatRoughnessMap),L.clearcoatNormalMap&&(C.clearcoatNormalScale.value.copy(L.clearcoatNormalScale),C.clearcoatNormalMap.value=L.clearcoatNormalMap,L.side===BackSide&&C.clearcoatNormalScale.value.negate())),L.iridescence>0&&(C.iridescence.value=L.iridescence,C.iridescenceIOR.value=L.iridescenceIOR,C.iridescenceThicknessMinimum.value=L.iridescenceThicknessRange[0],C.iridescenceThicknessMaximum.value=L.iridescenceThicknessRange[1],L.iridescenceMap&&(C.iridescenceMap.value=L.iridescenceMap),L.iridescenceThicknessMap&&(C.iridescenceThicknessMap.value=L.iridescenceThicknessMap)),L.transmission>0&&(C.transmission.value=L.transmission,C.transmissionSamplerMap.value=D.texture,C.transmissionSamplerSize.value.set(D.width,D.height),L.transmissionMap&&(C.transmissionMap.value=L.transmissionMap),C.thickness.value=L.thickness,L.thicknessMap&&(C.thicknessMap.value=L.thicknessMap),C.attenuationDistance.value=L.attenuationDistance,C.attenuationColor.value.copy(L.attenuationColor)),C.specularIntensity.value=L.specularIntensity,C.specularColor.value.copy(L.specularColor),L.specularIntensityMap&&(C.specularIntensityMap.value=L.specularIntensityMap),L.specularColorMap&&(C.specularColorMap.value=L.specularColorMap)}function R(C,L){L.matcap&&(C.matcap.value=L.matcap)}function P(C,L){C.referencePosition.value.copy(L.referencePosition),C.nearDistance.value=L.nearDistance,C.farDistance.value=L.farDistance}return{refreshFogUniforms:m,refreshMaterialUniforms:_}}function WebGLUniformsGroups(b,f,m,_){let x={},v={},y=[];const M=m.isWebGL2?b.getParameter(35375):0;function S(U,I){const O=I.program;_.uniformBlockBinding(U,O)}function w(U,I){let O=x[U.id];O===void 0&&(P(U),O=T(U),x[U.id]=O,U.addEventListener("dispose",L));const V=I.program;_.updateUBOMapping(U,V);const H=f.render.frame;v[U.id]!==H&&(E(U),v[U.id]=H)}function T(U){const I=A();U.__bindingPointIndex=I;const O=b.createBuffer(),V=U.__size,H=U.usage;return b.bindBuffer(35345,O),b.bufferData(35345,V,H),b.bindBuffer(35345,null),b.bindBufferBase(35345,I,O),O}function A(){for(let U=0;U<M;U++)if(y.indexOf(U)===-1)return y.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(U){const I=x[U.id],O=U.uniforms,V=U.__cache;b.bindBuffer(35345,I);for(let H=0,$=O.length;H<$;H++){const F=O[H];if(R(F,H,V)===!0){const k=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let oe=0;for(let ae=0;ae<Y.length;ae++){const K=Y[ae],X=C(K);typeof K=="number"?(F.__data[0]=K,b.bufferSubData(35345,k+oe,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=K.elements[0],F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=K.elements[0],F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=K.elements[0]):(K.toArray(F.__data,oe),oe+=X.storage/Float32Array.BYTES_PER_ELEMENT)}b.bufferSubData(35345,k,F.__data)}}b.bindBuffer(35345,null)}function R(U,I,O){const V=U.value;if(O[I]===void 0){if(typeof V=="number")O[I]=V;else{const H=Array.isArray(V)?V:[V],$=[];for(let F=0;F<H.length;F++)$.push(H[F].clone());O[I]=$}return!0}else if(typeof V=="number"){if(O[I]!==V)return O[I]=V,!0}else{const H=Array.isArray(O[I])?O[I]:[O[I]],$=Array.isArray(V)?V:[V];for(let F=0;F<H.length;F++){const k=H[F];if(k.equals($[F])===!1)return k.copy($[F]),!0}}return!1}function P(U){const I=U.uniforms;let O=0;const V=16;let H=0;for(let $=0,F=I.length;$<F;$++){const k=I[$],Y={boundary:0,storage:0},oe=Array.isArray(k.value)?k.value:[k.value];for(let ae=0,K=oe.length;ae<K;ae++){const X=oe[ae],ee=C(X);Y.boundary+=ee.boundary,Y.storage+=ee.storage}if(k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=O,$>0){H=O%V;const ae=V-H;H!==0&&ae-Y.boundary<0&&(O+=V-H,k.__offset=O)}O+=Y.storage}return H=O%V,H>0&&(O+=V-H),U.__size=O,U.__cache={},this}function C(U){const I={boundary:0,storage:0};return typeof U=="number"?(I.boundary=4,I.storage=4):U.isVector2?(I.boundary=8,I.storage=8):U.isVector3||U.isColor?(I.boundary=16,I.storage=12):U.isVector4?(I.boundary=16,I.storage=16):U.isMatrix3?(I.boundary=48,I.storage=48):U.isMatrix4?(I.boundary=64,I.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),I}function L(U){const I=U.target;I.removeEventListener("dispose",L);const O=y.indexOf(I.__bindingPointIndex);y.splice(O,1),b.deleteBuffer(x[I.id]),delete x[I.id],delete v[I.id]}function D(){for(const U in x)b.deleteBuffer(x[U]);y=[],x={},v={}}return{bind:S,update:w,dispose:D}}function createCanvasElement(){const b=createElementNS("canvas");return b.style.display="block",b}function WebGLRenderer(b={}){this.isWebGLRenderer=!0;const f=b.canvas!==void 0?b.canvas:createCanvasElement(),m=b.context!==void 0?b.context:null,_=b.depth!==void 0?b.depth:!0,x=b.stencil!==void 0?b.stencil:!0,v=b.antialias!==void 0?b.antialias:!1,y=b.premultipliedAlpha!==void 0?b.premultipliedAlpha:!0,M=b.preserveDrawingBuffer!==void 0?b.preserveDrawingBuffer:!1,S=b.powerPreference!==void 0?b.powerPreference:"default",w=b.failIfMajorPerformanceCaveat!==void 0?b.failIfMajorPerformanceCaveat:!1;let T;m!==null?T=m.getContextAttributes().alpha:T=b.alpha!==void 0?b.alpha:!1;let A=null,E=null;const R=[],P=[];this.domElement=f,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.useLegacyLights=!0,this.toneMapping=NoToneMapping,this.toneMappingExposure=1;const C=this;let L=!1,D=0,U=0,I=null,O=-1,V=null;const H=new Vector4,$=new Vector4;let F=null,k=f.width,Y=f.height,oe=1,ae=null,K=null;const X=new Vector4(0,0,k,Y),ee=new Vector4(0,0,k,Y);let le=!1;const de=new Frustum;let se=!1,fe=!1,ce=null;const Re=new Matrix4,Q=new Vector3,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return I===null?oe:1}let Z=m;function Me(B,J){for(let te=0;te<B.length;te++){const q=B[te],re=f.getContext(q,J);if(re!==null)return re}return null}try{const B={alpha:!0,depth:_,stencil:x,antialias:v,premultipliedAlpha:y,preserveDrawingBuffer:M,powerPreference:S,failIfMajorPerformanceCaveat:w};if("setAttribute"in f&&f.setAttribute("data-engine",`three.js r${REVISION}`),f.addEventListener("webglcontextlost",Ae,!1),f.addEventListener("webglcontextrestored",Le,!1),f.addEventListener("webglcontextcreationerror",Ee,!1),Z===null){const J=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&J.shift(),Z=Me(J,B),Z===null)throw Me(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let be,we,Se,De,Ne,Fe,ze,Je,it,Qe,et,qe,Xe,ot,rt,G,N,ne,pe,me,xe,Ce,z,j;function ve(){be=new WebGLExtensions(Z),we=new WebGLCapabilities(Z,be,b),be.init(we),Ce=new WebGLUtils(Z,be,we),Se=new WebGLState(Z,be,we),De=new WebGLInfo,Ne=new WebGLProperties,Fe=new WebGLTextures(Z,be,Se,Ne,we,Ce,De),ze=new WebGLCubeMaps(C),Je=new WebGLCubeUVMaps(C),it=new WebGLAttributes(Z,we),z=new WebGLBindingStates(Z,be,it,we),Qe=new WebGLGeometries(Z,it,De,z),et=new WebGLObjects(Z,Qe,it,De),pe=new WebGLMorphtargets(Z,we,Fe),G=new WebGLClipping(Ne),qe=new WebGLPrograms(C,ze,Je,be,we,z,G),Xe=new WebGLMaterials(C,Ne),ot=new WebGLRenderLists,rt=new WebGLRenderStates(be,we),ne=new WebGLBackground(C,ze,Je,Se,et,T,y),N=new WebGLShadowMap(C,et,we),j=new WebGLUniformsGroups(Z,De,we,Se),me=new WebGLBufferRenderer(Z,be,De,we),xe=new WebGLIndexedBufferRenderer(Z,be,De,we),De.programs=qe.programs,C.capabilities=we,C.extensions=be,C.properties=Ne,C.renderLists=ot,C.shadowMap=N,C.state=Se,C.info=De}ve();const _e=new WebXRManager(C,Z);this.xr=_e,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const B=be.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=be.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(B){B!==void 0&&(oe=B,this.setSize(k,Y,!1))},this.getSize=function(B){return B.set(k,Y)},this.setSize=function(B,J,te=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=B,Y=J,f.width=Math.floor(B*oe),f.height=Math.floor(J*oe),te===!0&&(f.style.width=B+"px",f.style.height=J+"px"),this.setViewport(0,0,B,J)},this.getDrawingBufferSize=function(B){return B.set(k*oe,Y*oe).floor()},this.setDrawingBufferSize=function(B,J,te){k=B,Y=J,oe=te,f.width=Math.floor(B*te),f.height=Math.floor(J*te),this.setViewport(0,0,B,J)},this.getCurrentViewport=function(B){return B.copy(H)},this.getViewport=function(B){return B.copy(X)},this.setViewport=function(B,J,te,q){B.isVector4?X.set(B.x,B.y,B.z,B.w):X.set(B,J,te,q),Se.viewport(H.copy(X).multiplyScalar(oe).floor())},this.getScissor=function(B){return B.copy(ee)},this.setScissor=function(B,J,te,q){B.isVector4?ee.set(B.x,B.y,B.z,B.w):ee.set(B,J,te,q),Se.scissor($.copy(ee).multiplyScalar(oe).floor())},this.getScissorTest=function(){return le},this.setScissorTest=function(B){Se.setScissorTest(le=B)},this.setOpaqueSort=function(B){ae=B},this.setTransparentSort=function(B){K=B},this.getClearColor=function(B){return B.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(B=!0,J=!0,te=!0){let q=0;B&&(q|=16384),J&&(q|=256),te&&(q|=1024),Z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){f.removeEventListener("webglcontextlost",Ae,!1),f.removeEventListener("webglcontextrestored",Le,!1),f.removeEventListener("webglcontextcreationerror",Ee,!1),ot.dispose(),rt.dispose(),Ne.dispose(),ze.dispose(),Je.dispose(),et.dispose(),z.dispose(),j.dispose(),qe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ue),_e.removeEventListener("sessionend",ye),ce&&(ce.dispose(),ce=null),Te.stop()};function Ae(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const B=De.autoReset,J=N.enabled,te=N.autoUpdate,q=N.needsUpdate,re=N.type;ve(),De.autoReset=B,N.enabled=J,N.autoUpdate=te,N.needsUpdate=q,N.type=re}function Ee(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function Ue(B){const J=B.target;J.removeEventListener("dispose",Ue),He(J)}function He(B){$e(B),Ne.remove(B)}function $e(B){const J=Ne.get(B).programs;J!==void 0&&(J.forEach(function(te){qe.releaseProgram(te)}),B.isShaderMaterial&&qe.releaseShaderCache(B))}this.renderBufferDirect=function(B,J,te,q,re,Pe){J===null&&(J=he);const Ie=re.isMesh&&re.matrixWorld.determinant()<0,Oe=wt(B,J,te,q,re);Se.setMaterial(q,Ie);let Be=te.index,We=1;q.wireframe===!0&&(Be=Qe.getWireframeAttribute(te),We=2);const Ve=te.drawRange,Ge=te.attributes.position;let Ke=Ve.start*We,lt=(Ve.start+Ve.count)*We;Pe!==null&&(Ke=Math.max(Ke,Pe.start*We),lt=Math.min(lt,(Pe.start+Pe.count)*We)),Be!==null?(Ke=Math.max(Ke,0),lt=Math.min(lt,Be.count)):Ge!=null&&(Ke=Math.max(Ke,0),lt=Math.min(lt,Ge.count));const ft=lt-Ke;if(ft<0||ft===1/0)return;z.setup(re,q,Oe,te,Be);let pt,Ze=me;if(Be!==null&&(pt=it.get(Be),Ze=xe,Ze.setIndex(pt)),re.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*ge()),Ze.setMode(1)):Ze.setMode(4);else if(re.isLine){let ke=q.linewidth;ke===void 0&&(ke=1),Se.setLineWidth(ke*ge()),re.isLineSegments?Ze.setMode(1):re.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else re.isPoints?Ze.setMode(0):re.isSprite&&Ze.setMode(4);if(re.isInstancedMesh)Ze.renderInstances(Ke,ft,re.count);else if(te.isInstancedBufferGeometry){const ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,xt=Math.min(te.instanceCount,ke);Ze.renderInstances(Ke,ft,xt)}else Ze.render(Ke,ft)},this.compile=function(B,J){function te(q,re,Pe){q.transparent===!0&&q.side===DoubleSide&&q.forceSinglePass===!1?(q.side=BackSide,q.needsUpdate=!0,ht(q,re,Pe),q.side=FrontSide,q.needsUpdate=!0,ht(q,re,Pe),q.side=DoubleSide):ht(q,re,Pe)}E=rt.get(B),E.init(),P.push(E),B.traverseVisible(function(q){q.isLight&&q.layers.test(J.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(C.useLegacyLights),B.traverse(function(q){const re=q.material;if(re)if(Array.isArray(re))for(let Pe=0;Pe<re.length;Pe++){const Ie=re[Pe];te(Ie,B,q)}else te(re,B,q)}),P.pop(),E=null};let W=null;function ie(B){W&&W(B)}function ue(){Te.stop()}function ye(){Te.start()}const Te=new WebGLAnimation;Te.setAnimationLoop(ie),typeof self<"u"&&Te.setContext(self),this.setAnimationLoop=function(B){W=B,_e.setAnimationLoop(B),B===null?Te.stop():Te.start()},_e.addEventListener("sessionstart",ue),_e.addEventListener("sessionend",ye),this.render=function(B,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(J),J=_e.getCamera()),B.isScene===!0&&B.onBeforeRender(C,B,J,I),E=rt.get(B,P.length),E.init(),P.push(E),Re.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),de.setFromProjectionMatrix(Re),fe=this.localClippingEnabled,se=G.init(this.clippingPlanes,fe),A=ot.get(B,R.length),A.init(),R.push(A),je(B,J,0,C.sortObjects),A.finish(),C.sortObjects===!0&&A.sort(ae,K),se===!0&&G.beginShadows();const te=E.state.shadowsArray;if(N.render(te,B,J),se===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(A,B),E.setupLights(C.useLegacyLights),J.isArrayCamera){const q=J.cameras;for(let re=0,Pe=q.length;re<Pe;re++){const Ie=q[re];tt(A,B,Ie,Ie.viewport)}}else tt(A,B,J);I!==null&&(Fe.updateMultisampleRenderTarget(I),Fe.updateRenderTargetMipmap(I)),B.isScene===!0&&B.onAfterRender(C,B,J),z.resetDefaultState(),O=-1,V=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,R.pop(),R.length>0?A=R[R.length-1]:A=null};function je(B,J,te,q){if(B.visible===!1)return;if(B.layers.test(J.layers)){if(B.isGroup)te=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(J);else if(B.isLight)E.pushLight(B),B.castShadow&&E.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||de.intersectsSprite(B)){q&&Q.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Re);const Ie=et.update(B),Oe=B.material;Oe.visible&&A.push(B,Ie,Oe,te,Q.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(B.isSkinnedMesh&&B.skeleton.frame!==De.render.frame&&(B.skeleton.update(),B.skeleton.frame=De.render.frame),!B.frustumCulled||de.intersectsObject(B))){q&&Q.setFromMatrixPosition(B.matrixWorld).applyMatrix4(Re);const Ie=et.update(B),Oe=B.material;if(Array.isArray(Oe)){const Be=Ie.groups;for(let We=0,Ve=Be.length;We<Ve;We++){const Ge=Be[We],Ke=Oe[Ge.materialIndex];Ke&&Ke.visible&&A.push(B,Ie,Ke,te,Q.z,Ge)}}else Oe.visible&&A.push(B,Ie,Oe,te,Q.z,null)}}const Pe=B.children;for(let Ie=0,Oe=Pe.length;Ie<Oe;Ie++)je(Pe[Ie],J,te,q)}function tt(B,J,te,q){const re=B.opaque,Pe=B.transmissive,Ie=B.transparent;E.setupLightsView(te),se===!0&&G.setGlobalState(C.clippingPlanes,te),Pe.length>0&&st(re,J,te),q&&Se.viewport(H.copy(q)),re.length>0&&ut(re,J,te),Pe.length>0&&ut(Pe,J,te),Ie.length>0&&ut(Ie,J,te),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function st(B,J,te){const q=we.isWebGL2;ce===null&&(ce=new WebGLRenderTarget(1024,1024,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:q&&v===!0?4:0}));const re=C.getRenderTarget();C.setRenderTarget(ce),C.clear();const Pe=C.toneMapping;C.toneMapping=NoToneMapping,ut(B,J,te),C.toneMapping=Pe,Fe.updateMultisampleRenderTarget(ce),Fe.updateRenderTargetMipmap(ce),C.setRenderTarget(re)}function ut(B,J,te){const q=J.isScene===!0?J.overrideMaterial:null;for(let re=0,Pe=B.length;re<Pe;re++){const Ie=B[re],Oe=Ie.object,Be=Ie.geometry,We=q===null?Ie.material:q,Ve=Ie.group;Oe.layers.test(te.layers)&&Ye(Oe,J,te,Be,We,Ve)}}function Ye(B,J,te,q,re,Pe){B.onBeforeRender(C,J,te,q,re,Pe),B.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),re.onBeforeRender(C,J,te,q,B,Pe),re.transparent===!0&&re.side===DoubleSide&&re.forceSinglePass===!1?(re.side=BackSide,re.needsUpdate=!0,C.renderBufferDirect(te,J,q,re,B,Pe),re.side=FrontSide,re.needsUpdate=!0,C.renderBufferDirect(te,J,q,re,B,Pe),re.side=DoubleSide):C.renderBufferDirect(te,J,q,re,B,Pe),B.onAfterRender(C,J,te,q,re,Pe)}function ht(B,J,te){J.isScene!==!0&&(J=he);const q=Ne.get(B),re=E.state.lights,Pe=E.state.shadowsArray,Ie=re.state.version,Oe=qe.getParameters(B,re.state,Pe,J,te),Be=qe.getProgramCacheKey(Oe);let We=q.programs;q.environment=B.isMeshStandardMaterial?J.environment:null,q.fog=J.fog,q.envMap=(B.isMeshStandardMaterial?Je:ze).get(B.envMap||q.environment),We===void 0&&(B.addEventListener("dispose",Ue),We=new Map,q.programs=We);let Ve=We.get(Be);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===Ie)return dt(B,Oe),Ve}else Oe.uniforms=qe.getUniforms(B),B.onBuild(te,Oe,C),B.onBeforeCompile(Oe,C),Ve=qe.acquireProgram(Oe,Be),We.set(Be,Ve),q.uniforms=Oe.uniforms;const Ge=q.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(Ge.clippingPlanes=G.uniform),dt(B,Oe),q.needsLights=At(B),q.lightsStateVersion=Ie,q.needsLights&&(Ge.ambientLightColor.value=re.state.ambient,Ge.lightProbe.value=re.state.probe,Ge.directionalLights.value=re.state.directional,Ge.directionalLightShadows.value=re.state.directionalShadow,Ge.spotLights.value=re.state.spot,Ge.spotLightShadows.value=re.state.spotShadow,Ge.rectAreaLights.value=re.state.rectArea,Ge.ltc_1.value=re.state.rectAreaLTC1,Ge.ltc_2.value=re.state.rectAreaLTC2,Ge.pointLights.value=re.state.point,Ge.pointLightShadows.value=re.state.pointShadow,Ge.hemisphereLights.value=re.state.hemi,Ge.directionalShadowMap.value=re.state.directionalShadowMap,Ge.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ge.spotShadowMap.value=re.state.spotShadowMap,Ge.spotLightMatrix.value=re.state.spotLightMatrix,Ge.spotLightMap.value=re.state.spotLightMap,Ge.pointShadowMap.value=re.state.pointShadowMap,Ge.pointShadowMatrix.value=re.state.pointShadowMatrix);const Ke=Ve.getUniforms(),lt=WebGLUniforms.seqWithValue(Ke.seq,Ge);return q.currentProgram=Ve,q.uniformsList=lt,Ve}function dt(B,J){const te=Ne.get(B);te.outputEncoding=J.outputEncoding,te.instancing=J.instancing,te.skinning=J.skinning,te.morphTargets=J.morphTargets,te.morphNormals=J.morphNormals,te.morphColors=J.morphColors,te.morphTargetsCount=J.morphTargetsCount,te.numClippingPlanes=J.numClippingPlanes,te.numIntersection=J.numClipIntersection,te.vertexAlphas=J.vertexAlphas,te.vertexTangents=J.vertexTangents,te.toneMapping=J.toneMapping}function wt(B,J,te,q,re){J.isScene!==!0&&(J=he),Fe.resetTextureUnits();const Pe=J.fog,Ie=q.isMeshStandardMaterial?J.environment:null,Oe=I===null?C.outputEncoding:I.isXRRenderTarget===!0?I.texture.encoding:LinearEncoding,Be=(q.isMeshStandardMaterial?Je:ze).get(q.envMap||Ie),We=q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ve=!!q.normalMap&&!!te.attributes.tangent,Ge=!!te.morphAttributes.position,Ke=!!te.morphAttributes.normal,lt=!!te.morphAttributes.color,ft=q.toneMapped?C.toneMapping:NoToneMapping,pt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ze=pt!==void 0?pt.length:0,ke=Ne.get(q),xt=E.state.lights;if(se===!0&&(fe===!0||B!==V)){const ct=B===V&&q.id===O;G.setState(q,B,ct)}let nt=!1;q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==xt.state.version||ke.outputEncoding!==Oe||re.isInstancedMesh&&ke.instancing===!1||!re.isInstancedMesh&&ke.instancing===!0||re.isSkinnedMesh&&ke.skinning===!1||!re.isSkinnedMesh&&ke.skinning===!0||ke.envMap!==Be||q.fog===!0&&ke.fog!==Pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==G.numPlanes||ke.numIntersection!==G.numIntersection)||ke.vertexAlphas!==We||ke.vertexTangents!==Ve||ke.morphTargets!==Ge||ke.morphNormals!==Ke||ke.morphColors!==lt||ke.toneMapping!==ft||we.isWebGL2===!0&&ke.morphTargetsCount!==Ze)&&(nt=!0):(nt=!0,ke.__version=q.version);let mt=ke.currentProgram;nt===!0&&(mt=ht(q,J,re));let bt=!1,_t=!1,vt=!1;const at=mt.getUniforms(),gt=ke.uniforms;if(Se.useProgram(mt.program)&&(bt=!0,_t=!0,vt=!0),q.id!==O&&(O=q.id,_t=!0),bt||V!==B){if(at.setValue(Z,"projectionMatrix",B.projectionMatrix),we.logarithmicDepthBuffer&&at.setValue(Z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),V!==B&&(V=B,_t=!0,vt=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const ct=at.map.cameraPosition;ct!==void 0&&ct.setValue(Z,Q.setFromMatrixPosition(B.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&at.setValue(Z,"isOrthographic",B.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||re.isSkinnedMesh)&&at.setValue(Z,"viewMatrix",B.matrixWorldInverse)}if(re.isSkinnedMesh){at.setOptional(Z,re,"bindMatrix"),at.setOptional(Z,re,"bindMatrixInverse");const ct=re.skeleton;ct&&(we.floatVertexTextures?(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(Z,"boneTexture",ct.boneTexture,Fe),at.setValue(Z,"boneTextureSize",ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const yt=te.morphAttributes;if((yt.position!==void 0||yt.normal!==void 0||yt.color!==void 0&&we.isWebGL2===!0)&&pe.update(re,te,mt),(_t||ke.receiveShadow!==re.receiveShadow)&&(ke.receiveShadow=re.receiveShadow,at.setValue(Z,"receiveShadow",re.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(gt.envMap.value=Be,gt.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),_t&&(at.setValue(Z,"toneMappingExposure",C.toneMappingExposure),ke.needsLights&&Tt(gt,vt),Pe&&q.fog===!0&&Xe.refreshFogUniforms(gt,Pe),Xe.refreshMaterialUniforms(gt,q,oe,Y,ce),WebGLUniforms.upload(Z,ke.uniformsList,gt,Fe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(Z,ke.uniformsList,gt,Fe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&at.setValue(Z,"center",re.center),at.setValue(Z,"modelViewMatrix",re.modelViewMatrix),at.setValue(Z,"normalMatrix",re.normalMatrix),at.setValue(Z,"modelMatrix",re.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const ct=q.uniformsGroups;for(let Mt=0,Et=ct.length;Mt<Et;Mt++)if(we.isWebGL2){const St=ct[Mt];j.update(St,mt),j.bind(St,mt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mt}function Tt(B,J){B.ambientLightColor.needsUpdate=J,B.lightProbe.needsUpdate=J,B.directionalLights.needsUpdate=J,B.directionalLightShadows.needsUpdate=J,B.pointLights.needsUpdate=J,B.pointLightShadows.needsUpdate=J,B.spotLights.needsUpdate=J,B.spotLightShadows.needsUpdate=J,B.rectAreaLights.needsUpdate=J,B.hemisphereLights.needsUpdate=J}function At(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(B,J,te){Ne.get(B.texture).__webglTexture=J,Ne.get(B.depthTexture).__webglTexture=te;const q=Ne.get(B);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=te===void 0,q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,J){const te=Ne.get(B);te.__webglFramebuffer=J,te.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(B,J=0,te=0){I=B,D=J,U=te;let q=!0,re=null,Pe=!1,Ie=!1;if(B){const Be=Ne.get(B);Be.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),q=!1):Be.__webglFramebuffer===void 0?Fe.setupRenderTarget(B):Be.__hasExternalTextures&&Fe.rebindTextures(B,Ne.get(B.texture).__webglTexture,Ne.get(B.depthTexture).__webglTexture);const We=B.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ie=!0);const Ve=Ne.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(re=Ve[J],Pe=!0):we.isWebGL2&&B.samples>0&&Fe.useMultisampledRTT(B)===!1?re=Ne.get(B).__webglMultisampledFramebuffer:re=Ve,H.copy(B.viewport),$.copy(B.scissor),F=B.scissorTest}else H.copy(X).multiplyScalar(oe).floor(),$.copy(ee).multiplyScalar(oe).floor(),F=le;if(Se.bindFramebuffer(36160,re)&&we.drawBuffers&&q&&Se.drawBuffers(B,re),Se.viewport(H),Se.scissor($),Se.setScissorTest(F),Pe){const Be=Ne.get(B.texture);Z.framebufferTexture2D(36160,36064,34069+J,Be.__webglTexture,te)}else if(Ie){const Be=Ne.get(B.texture),We=J||0;Z.framebufferTextureLayer(36160,36064,Be.__webglTexture,te||0,We)}O=-1},this.readRenderTargetPixels=function(B,J,te,q,re,Pe,Ie){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ne.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){Se.bindFramebuffer(36160,Oe);try{const Be=B.texture,We=Be.format,Ve=Be.type;if(We!==RGBAFormat&&Ce.convert(We)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ve===HalfFloatType&&(be.has("EXT_color_buffer_half_float")||we.isWebGL2&&be.has("EXT_color_buffer_float"));if(Ve!==UnsignedByteType&&Ce.convert(Ve)!==Z.getParameter(35738)&&!(Ve===FloatType&&(we.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=B.width-q&&te>=0&&te<=B.height-re&&Z.readPixels(J,te,q,re,Ce.convert(We),Ce.convert(Ve),Pe)}finally{const Be=I!==null?Ne.get(I).__webglFramebuffer:null;Se.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(B,J,te=0){const q=Math.pow(2,-te),re=Math.floor(J.image.width*q),Pe=Math.floor(J.image.height*q);Fe.setTexture2D(J,0),Z.copyTexSubImage2D(3553,te,0,0,B.x,B.y,re,Pe),Se.unbindTexture()},this.copyTextureToTexture=function(B,J,te,q=0){const re=J.image.width,Pe=J.image.height,Ie=Ce.convert(te.format),Oe=Ce.convert(te.type);Fe.setTexture2D(te,0),Z.pixelStorei(37440,te.flipY),Z.pixelStorei(37441,te.premultiplyAlpha),Z.pixelStorei(3317,te.unpackAlignment),J.isDataTexture?Z.texSubImage2D(3553,q,B.x,B.y,re,Pe,Ie,Oe,J.image.data):J.isCompressedTexture?Z.compressedTexSubImage2D(3553,q,B.x,B.y,J.mipmaps[0].width,J.mipmaps[0].height,Ie,J.mipmaps[0].data):Z.texSubImage2D(3553,q,B.x,B.y,Ie,Oe,J.image),q===0&&te.generateMipmaps&&Z.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(B,J,te,q,re=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=B.max.x-B.min.x+1,Ie=B.max.y-B.min.y+1,Oe=B.max.z-B.min.z+1,Be=Ce.convert(q.format),We=Ce.convert(q.type);let Ve;if(q.isData3DTexture)Fe.setTexture3D(q,0),Ve=32879;else if(q.isDataArrayTexture)Fe.setTexture2DArray(q,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,q.flipY),Z.pixelStorei(37441,q.premultiplyAlpha),Z.pixelStorei(3317,q.unpackAlignment);const Ge=Z.getParameter(3314),Ke=Z.getParameter(32878),lt=Z.getParameter(3316),ft=Z.getParameter(3315),pt=Z.getParameter(32877),Ze=te.isCompressedTexture?te.mipmaps[0]:te.image;Z.pixelStorei(3314,Ze.width),Z.pixelStorei(32878,Ze.height),Z.pixelStorei(3316,B.min.x),Z.pixelStorei(3315,B.min.y),Z.pixelStorei(32877,B.min.z),te.isDataTexture||te.isData3DTexture?Z.texSubImage3D(Ve,re,J.x,J.y,J.z,Pe,Ie,Oe,Be,We,Ze.data):te.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Ve,re,J.x,J.y,J.z,Pe,Ie,Oe,Be,Ze.data)):Z.texSubImage3D(Ve,re,J.x,J.y,J.z,Pe,Ie,Oe,Be,We,Ze),Z.pixelStorei(3314,Ge),Z.pixelStorei(32878,Ke),Z.pixelStorei(3316,lt),Z.pixelStorei(3315,ft),Z.pixelStorei(32877,pt),re===0&&q.generateMipmaps&&Z.generateMipmap(Ve),Se.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?Fe.setTextureCube(B,0):B.isData3DTexture?Fe.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?Fe.setTexture2DArray(B,0):Fe.setTexture2D(B,0),Se.unbindTexture()},this.resetState=function(){D=0,U=0,I=null,Se.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(WebGLRenderer.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(b){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!b}}});class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Fog{constructor(f,m=1,_=1e3){this.isFog=!0,this.name="",this.color=new Color(f),this.near=m,this.far=_}clone(){return new Fog(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(f,m){return super.copy(f,m),f.background!==null&&(this.background=f.background.clone()),f.environment!==null&&(this.environment=f.environment.clone()),f.fog!==null&&(this.fog=f.fog.clone()),this.backgroundBlurriness=f.backgroundBlurriness,this.backgroundIntensity=f.backgroundIntensity,f.overrideMaterial!==null&&(this.overrideMaterial=f.overrideMaterial.clone()),this.matrixAutoUpdate=f.matrixAutoUpdate,this}toJSON(f){const m=super.toJSON(f);return this.fog!==null&&(m.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(m.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(m.object.backgroundIntensity=this.backgroundIntensity),m}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(f){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=f}}class InterleavedBuffer{constructor(f,m){this.isInterleavedBuffer=!0,this.array=f,this.stride=m,this.count=f!==void 0?f.length/m:0,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=generateUUID()}onUploadCallback(){}set needsUpdate(f){f===!0&&this.version++}setUsage(f){return this.usage=f,this}copy(f){return this.array=new f.array.constructor(f.array),this.count=f.count,this.stride=f.stride,this.usage=f.usage,this}copyAt(f,m,_){f*=this.stride,_*=m.stride;for(let x=0,v=this.stride;x<v;x++)this.array[f+x]=m.array[_+x];return this}set(f,m=0){return this.array.set(f,m),this}clone(f){f.arrayBuffers===void 0&&(f.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),f.arrayBuffers[this.array.buffer._uuid]===void 0&&(f.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const m=new this.array.constructor(f.arrayBuffers[this.array.buffer._uuid]),_=new this.constructor(m,this.stride);return _.setUsage(this.usage),_}onUpload(f){return this.onUploadCallback=f,this}toJSON(f){return f.arrayBuffers===void 0&&(f.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=generateUUID()),f.arrayBuffers[this.array.buffer._uuid]===void 0&&(f.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _vector$6=new Vector3;class InterleavedBufferAttribute{constructor(f,m,_,x=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=f,this.itemSize=m,this.offset=_,this.normalized=x}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(f){this.data.needsUpdate=f}applyMatrix4(f){for(let m=0,_=this.data.count;m<_;m++)_vector$6.fromBufferAttribute(this,m),_vector$6.applyMatrix4(f),this.setXYZ(m,_vector$6.x,_vector$6.y,_vector$6.z);return this}applyNormalMatrix(f){for(let m=0,_=this.count;m<_;m++)_vector$6.fromBufferAttribute(this,m),_vector$6.applyNormalMatrix(f),this.setXYZ(m,_vector$6.x,_vector$6.y,_vector$6.z);return this}transformDirection(f){for(let m=0,_=this.count;m<_;m++)_vector$6.fromBufferAttribute(this,m),_vector$6.transformDirection(f),this.setXYZ(m,_vector$6.x,_vector$6.y,_vector$6.z);return this}setX(f,m){return this.normalized&&(m=normalize(m,this.array)),this.data.array[f*this.data.stride+this.offset]=m,this}setY(f,m){return this.normalized&&(m=normalize(m,this.array)),this.data.array[f*this.data.stride+this.offset+1]=m,this}setZ(f,m){return this.normalized&&(m=normalize(m,this.array)),this.data.array[f*this.data.stride+this.offset+2]=m,this}setW(f,m){return this.normalized&&(m=normalize(m,this.array)),this.data.array[f*this.data.stride+this.offset+3]=m,this}getX(f){let m=this.data.array[f*this.data.stride+this.offset];return this.normalized&&(m=denormalize(m,this.array)),m}getY(f){let m=this.data.array[f*this.data.stride+this.offset+1];return this.normalized&&(m=denormalize(m,this.array)),m}getZ(f){let m=this.data.array[f*this.data.stride+this.offset+2];return this.normalized&&(m=denormalize(m,this.array)),m}getW(f){let m=this.data.array[f*this.data.stride+this.offset+3];return this.normalized&&(m=denormalize(m,this.array)),m}setXY(f,m,_){return f=f*this.data.stride+this.offset,this.normalized&&(m=normalize(m,this.array),_=normalize(_,this.array)),this.data.array[f+0]=m,this.data.array[f+1]=_,this}setXYZ(f,m,_,x){return f=f*this.data.stride+this.offset,this.normalized&&(m=normalize(m,this.array),_=normalize(_,this.array),x=normalize(x,this.array)),this.data.array[f+0]=m,this.data.array[f+1]=_,this.data.array[f+2]=x,this}setXYZW(f,m,_,x,v){return f=f*this.data.stride+this.offset,this.normalized&&(m=normalize(m,this.array),_=normalize(_,this.array),x=normalize(x,this.array),v=normalize(v,this.array)),this.data.array[f+0]=m,this.data.array[f+1]=_,this.data.array[f+2]=x,this.data.array[f+3]=v,this}clone(f){if(f===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const m=[];for(let _=0;_<this.count;_++){const x=_*this.data.stride+this.offset;for(let v=0;v<this.itemSize;v++)m.push(this.data.array[x+v])}return new BufferAttribute(new this.array.constructor(m),this.itemSize,this.normalized)}else return f.interleavedBuffers===void 0&&(f.interleavedBuffers={}),f.interleavedBuffers[this.data.uuid]===void 0&&(f.interleavedBuffers[this.data.uuid]=this.data.clone(f)),new InterleavedBufferAttribute(f.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(f){if(f===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const m=[];for(let _=0;_<this.count;_++){const x=_*this.data.stride+this.offset;for(let v=0;v<this.itemSize;v++)m.push(this.data.array[x+v])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:m,normalized:this.normalized}}else return f.interleavedBuffers===void 0&&(f.interleavedBuffers={}),f.interleavedBuffers[this.data.uuid]===void 0&&(f.interleavedBuffers[this.data.uuid]=this.data.toJSON(f)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _basePosition=new Vector3,_skinIndex=new Vector4,_skinWeight=new Vector4,_vector$5=new Vector3,_matrix=new Matrix4;class SkinnedMesh extends Mesh{constructor(f,m){super(f,m),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Matrix4,this.bindMatrixInverse=new Matrix4}copy(f,m){return super.copy(f,m),this.bindMode=f.bindMode,this.bindMatrix.copy(f.bindMatrix),this.bindMatrixInverse.copy(f.bindMatrixInverse),this.skeleton=f.skeleton,this}bind(f,m){this.skeleton=f,m===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),m=this.matrixWorld),this.bindMatrix.copy(m),this.bindMatrixInverse.copy(m).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const f=new Vector4,m=this.geometry.attributes.skinWeight;for(let _=0,x=m.count;_<x;_++){f.fromBufferAttribute(m,_);const v=1/f.manhattanLength();v!==1/0?f.multiplyScalar(v):f.set(1,0,0,0),m.setXYZW(_,f.x,f.y,f.z,f.w)}}updateMatrixWorld(f){super.updateMatrixWorld(f),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(f,m){const _=this.skeleton,x=this.geometry;_skinIndex.fromBufferAttribute(x.attributes.skinIndex,f),_skinWeight.fromBufferAttribute(x.attributes.skinWeight,f),_basePosition.copy(m).applyMatrix4(this.bindMatrix),m.set(0,0,0);for(let v=0;v<4;v++){const y=_skinWeight.getComponent(v);if(y!==0){const M=_skinIndex.getComponent(v);_matrix.multiplyMatrices(_.bones[M].matrixWorld,_.boneInverses[M]),m.addScaledVector(_vector$5.copy(_basePosition).applyMatrix4(_matrix),y)}}return m.applyMatrix4(this.bindMatrixInverse)}}class Bone extends Object3D{constructor(){super(),this.isBone=!0,this.type="Bone"}}class DataTexture extends Texture{constructor(f=null,m=1,_=1,x,v,y,M,S,w=NearestFilter,T=NearestFilter,A,E){super(null,y,M,S,w,T,x,v,A,E),this.isDataTexture=!0,this.image={data:f,width:m,height:_},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _offsetMatrix=new Matrix4,_identityMatrix$1=new Matrix4;class Skeleton{constructor(f=[],m=[]){this.uuid=generateUUID(),this.bones=f.slice(0),this.boneInverses=m,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const f=this.bones,m=this.boneInverses;if(this.boneMatrices=new Float32Array(f.length*16),m.length===0)this.calculateInverses();else if(f.length!==m.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let _=0,x=this.bones.length;_<x;_++)this.boneInverses.push(new Matrix4)}}calculateInverses(){this.boneInverses.length=0;for(let f=0,m=this.bones.length;f<m;f++){const _=new Matrix4;this.bones[f]&&_.copy(this.bones[f].matrixWorld).invert(),this.boneInverses.push(_)}}pose(){for(let f=0,m=this.bones.length;f<m;f++){const _=this.bones[f];_&&_.matrixWorld.copy(this.boneInverses[f]).invert()}for(let f=0,m=this.bones.length;f<m;f++){const _=this.bones[f];_&&(_.parent&&_.parent.isBone?(_.matrix.copy(_.parent.matrixWorld).invert(),_.matrix.multiply(_.matrixWorld)):_.matrix.copy(_.matrixWorld),_.matrix.decompose(_.position,_.quaternion,_.scale))}}update(){const f=this.bones,m=this.boneInverses,_=this.boneMatrices,x=this.boneTexture;for(let v=0,y=f.length;v<y;v++){const M=f[v]?f[v].matrixWorld:_identityMatrix$1;_offsetMatrix.multiplyMatrices(M,m[v]),_offsetMatrix.toArray(_,v*16)}x!==null&&(x.needsUpdate=!0)}clone(){return new Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let f=Math.sqrt(this.bones.length*4);f=ceilPowerOfTwo(f),f=Math.max(f,4);const m=new Float32Array(f*f*4);m.set(this.boneMatrices);const _=new DataTexture(m,f,f,RGBAFormat,FloatType);return _.needsUpdate=!0,this.boneMatrices=m,this.boneTexture=_,this.boneTextureSize=f,this}getBoneByName(f){for(let m=0,_=this.bones.length;m<_;m++){const x=this.bones[m];if(x.name===f)return x}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(f,m){this.uuid=f.uuid;for(let _=0,x=f.bones.length;_<x;_++){const v=f.bones[_];let y=m[v];y===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",v),y=new Bone),this.bones.push(y),this.boneInverses.push(new Matrix4().fromArray(f.boneInverses[_]))}return this.init(),this}toJSON(){const f={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};f.uuid=this.uuid;const m=this.bones,_=this.boneInverses;for(let x=0,v=m.length;x<v;x++){const y=m[x];f.bones.push(y.uuid);const M=_[x];f.boneInverses.push(M.toArray())}return f}}class InstancedBufferAttribute extends BufferAttribute{constructor(f,m,_,x=1){super(f,m,_),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=x}copy(f){return super.copy(f),this.meshPerAttribute=f.meshPerAttribute,this}toJSON(){const f=super.toJSON();return f.meshPerAttribute=this.meshPerAttribute,f.isInstancedBufferAttribute=!0,f}}const _instanceLocalMatrix=new Matrix4,_instanceWorldMatrix=new Matrix4,_instanceIntersects=[],_identity=new Matrix4,_mesh=new Mesh;class InstancedMesh extends Mesh{constructor(f,m,_){super(f,m),this.isInstancedMesh=!0,this.instanceMatrix=new InstancedBufferAttribute(new Float32Array(_*16),16),this.instanceColor=null,this.count=_,this.frustumCulled=!1;for(let x=0;x<_;x++)this.setMatrixAt(x,_identity)}copy(f,m){return super.copy(f,m),this.instanceMatrix.copy(f.instanceMatrix),f.instanceColor!==null&&(this.instanceColor=f.instanceColor.clone()),this.count=f.count,this}getColorAt(f,m){m.fromArray(this.instanceColor.array,f*3)}getMatrixAt(f,m){m.fromArray(this.instanceMatrix.array,f*16)}raycast(f,m){const _=this.matrixWorld,x=this.count;if(_mesh.geometry=this.geometry,_mesh.material=this.material,_mesh.material!==void 0)for(let v=0;v<x;v++){this.getMatrixAt(v,_instanceLocalMatrix),_instanceWorldMatrix.multiplyMatrices(_,_instanceLocalMatrix),_mesh.matrixWorld=_instanceWorldMatrix,_mesh.raycast(f,_instanceIntersects);for(let y=0,M=_instanceIntersects.length;y<M;y++){const S=_instanceIntersects[y];S.instanceId=v,S.object=this,m.push(S)}_instanceIntersects.length=0}}setColorAt(f,m){this.instanceColor===null&&(this.instanceColor=new InstancedBufferAttribute(new Float32Array(this.instanceMatrix.count*3),3)),m.toArray(this.instanceColor.array,f*3)}setMatrixAt(f,m){m.toArray(this.instanceMatrix.array,f*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class LineBasicMaterial extends Material{constructor(f){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.linewidth=f.linewidth,this.linecap=f.linecap,this.linejoin=f.linejoin,this.fog=f.fog,this}}const _start$1=new Vector3,_end$1=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere;class Line extends Object3D{constructor(f=new BufferGeometry,m=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=f,this.material=m,this.updateMorphTargets()}copy(f,m){return super.copy(f,m),this.material=f.material,this.geometry=f.geometry,this}computeLineDistances(){const f=this.geometry;if(f.index===null){const m=f.attributes.position,_=[0];for(let x=1,v=m.count;x<v;x++)_start$1.fromBufferAttribute(m,x-1),_end$1.fromBufferAttribute(m,x),_[x]=_[x-1],_[x]+=_start$1.distanceTo(_end$1);f.setAttribute("lineDistance",new Float32BufferAttribute(_,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(f,m){const _=this.geometry,x=this.matrixWorld,v=f.params.Line.threshold,y=_.drawRange;if(_.boundingSphere===null&&_.computeBoundingSphere(),_sphere$1.copy(_.boundingSphere),_sphere$1.applyMatrix4(x),_sphere$1.radius+=v,f.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(x).invert(),_ray$1.copy(f.ray).applyMatrix4(_inverseMatrix$1);const M=v/((this.scale.x+this.scale.y+this.scale.z)/3),S=M*M,w=new Vector3,T=new Vector3,A=new Vector3,E=new Vector3,R=this.isLineSegments?2:1,P=_.index,L=_.attributes.position;if(P!==null){const D=Math.max(0,y.start),U=Math.min(P.count,y.start+y.count);for(let I=D,O=U-1;I<O;I+=R){const V=P.getX(I),H=P.getX(I+1);if(w.fromBufferAttribute(L,V),T.fromBufferAttribute(L,H),_ray$1.distanceSqToSegment(w,T,E,A)>S)continue;E.applyMatrix4(this.matrixWorld);const F=f.ray.origin.distanceTo(E);F<f.near||F>f.far||m.push({distance:F,point:A.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}else{const D=Math.max(0,y.start),U=Math.min(L.count,y.start+y.count);for(let I=D,O=U-1;I<O;I+=R){if(w.fromBufferAttribute(L,I),T.fromBufferAttribute(L,I+1),_ray$1.distanceSqToSegment(w,T,E,A)>S)continue;E.applyMatrix4(this.matrixWorld);const H=f.ray.origin.distanceTo(E);H<f.near||H>f.far||m.push({distance:H,point:A.clone().applyMatrix4(this.matrixWorld),index:I,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const m=this.geometry.morphAttributes,_=Object.keys(m);if(_.length>0){const x=m[_[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let v=0,y=x.length;v<y;v++){const M=x[v].name||String(v);this.morphTargetInfluences.push(0),this.morphTargetDictionary[M]=v}}}}}const _start=new Vector3,_end=new Vector3;class LineSegments extends Line{constructor(f,m){super(f,m),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const f=this.geometry;if(f.index===null){const m=f.attributes.position,_=[];for(let x=0,v=m.count;x<v;x+=2)_start.fromBufferAttribute(m,x),_end.fromBufferAttribute(m,x+1),_[x]=x===0?0:_[x-1],_[x+1]=_[x]+_start.distanceTo(_end);f.setAttribute("lineDistance",new Float32BufferAttribute(_,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LineLoop extends Line{constructor(f,m){super(f,m),this.isLineLoop=!0,this.type="LineLoop"}}class PointsMaterial extends Material{constructor(f){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Color(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.map=f.map,this.alphaMap=f.alphaMap,this.size=f.size,this.sizeAttenuation=f.sizeAttenuation,this.fog=f.fog,this}}const _inverseMatrix=new Matrix4,_ray=new Ray,_sphere=new Sphere,_position$2=new Vector3;class Points extends Object3D{constructor(f=new BufferGeometry,m=new PointsMaterial){super(),this.isPoints=!0,this.type="Points",this.geometry=f,this.material=m,this.updateMorphTargets()}copy(f,m){return super.copy(f,m),this.material=f.material,this.geometry=f.geometry,this}raycast(f,m){const _=this.geometry,x=this.matrixWorld,v=f.params.Points.threshold,y=_.drawRange;if(_.boundingSphere===null&&_.computeBoundingSphere(),_sphere.copy(_.boundingSphere),_sphere.applyMatrix4(x),_sphere.radius+=v,f.ray.intersectsSphere(_sphere)===!1)return;_inverseMatrix.copy(x).invert(),_ray.copy(f.ray).applyMatrix4(_inverseMatrix);const M=v/((this.scale.x+this.scale.y+this.scale.z)/3),S=M*M,w=_.index,A=_.attributes.position;if(w!==null){const E=Math.max(0,y.start),R=Math.min(w.count,y.start+y.count);for(let P=E,C=R;P<C;P++){const L=w.getX(P);_position$2.fromBufferAttribute(A,L),testPoint(_position$2,L,S,x,f,m,this)}}else{const E=Math.max(0,y.start),R=Math.min(A.count,y.start+y.count);for(let P=E,C=R;P<C;P++)_position$2.fromBufferAttribute(A,P),testPoint(_position$2,P,S,x,f,m,this)}}updateMorphTargets(){const m=this.geometry.morphAttributes,_=Object.keys(m);if(_.length>0){const x=m[_[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let v=0,y=x.length;v<y;v++){const M=x[v].name||String(v);this.morphTargetInfluences.push(0),this.morphTargetDictionary[M]=v}}}}}function testPoint(b,f,m,_,x,v,y){const M=_ray.distanceSqToPoint(b);if(M<m){const S=new Vector3;_ray.closestPointToPoint(b,S),S.applyMatrix4(_);const w=x.ray.origin.distanceTo(S);if(w<x.near||w>x.far)return;v.push({distance:w,distanceToRay:Math.sqrt(M),point:S,index:f,face:null,object:y})}}class SphereGeometry extends BufferGeometry{constructor(f=1,m=32,_=16,x=0,v=Math.PI*2,y=0,M=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:f,widthSegments:m,heightSegments:_,phiStart:x,phiLength:v,thetaStart:y,thetaLength:M},m=Math.max(3,Math.floor(m)),_=Math.max(2,Math.floor(_));const S=Math.min(y+M,Math.PI);let w=0;const T=[],A=new Vector3,E=new Vector3,R=[],P=[],C=[],L=[];for(let D=0;D<=_;D++){const U=[],I=D/_;let O=0;D==0&&y==0?O=.5/m:D==_&&S==Math.PI&&(O=-.5/m);for(let V=0;V<=m;V++){const H=V/m;A.x=-f*Math.cos(x+H*v)*Math.sin(y+I*M),A.y=f*Math.cos(y+I*M),A.z=f*Math.sin(x+H*v)*Math.sin(y+I*M),P.push(A.x,A.y,A.z),E.copy(A).normalize(),C.push(E.x,E.y,E.z),L.push(H+O,1-I),U.push(w++)}T.push(U)}for(let D=0;D<_;D++)for(let U=0;U<m;U++){const I=T[D][U+1],O=T[D][U],V=T[D+1][U],H=T[D+1][U+1];(D!==0||y>0)&&R.push(I,O,H),(D!==_-1||S<Math.PI)&&R.push(O,V,H)}this.setIndex(R),this.setAttribute("position",new Float32BufferAttribute(P,3)),this.setAttribute("normal",new Float32BufferAttribute(C,3)),this.setAttribute("uv",new Float32BufferAttribute(L,2))}copy(f){return super.copy(f),this.parameters=Object.assign({},f.parameters),this}static fromJSON(f){return new SphereGeometry(f.radius,f.widthSegments,f.heightSegments,f.phiStart,f.phiLength,f.thetaStart,f.thetaLength)}}class MeshStandardMaterial extends Material{constructor(f){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Color(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.defines={STANDARD:""},this.color.copy(f.color),this.roughness=f.roughness,this.metalness=f.metalness,this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.emissive.copy(f.emissive),this.emissiveMap=f.emissiveMap,this.emissiveIntensity=f.emissiveIntensity,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.roughnessMap=f.roughnessMap,this.metalnessMap=f.metalnessMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.envMapIntensity=f.envMapIntensity,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.flatShading=f.flatShading,this.fog=f.fog,this}}class MeshPhysicalMaterial extends MeshStandardMaterial{constructor(f){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vector2(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return clamp(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(m){this.ior=(1+.4*m)/(1-.4*m)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Color(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Color(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Color(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(f)}get sheen(){return this._sheen}set sheen(f){this._sheen>0!=f>0&&this.version++,this._sheen=f}get clearcoat(){return this._clearcoat}set clearcoat(f){this._clearcoat>0!=f>0&&this.version++,this._clearcoat=f}get iridescence(){return this._iridescence}set iridescence(f){this._iridescence>0!=f>0&&this.version++,this._iridescence=f}get transmission(){return this._transmission}set transmission(f){this._transmission>0!=f>0&&this.version++,this._transmission=f}copy(f){return super.copy(f),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=f.clearcoat,this.clearcoatMap=f.clearcoatMap,this.clearcoatRoughness=f.clearcoatRoughness,this.clearcoatRoughnessMap=f.clearcoatRoughnessMap,this.clearcoatNormalMap=f.clearcoatNormalMap,this.clearcoatNormalScale.copy(f.clearcoatNormalScale),this.ior=f.ior,this.iridescence=f.iridescence,this.iridescenceMap=f.iridescenceMap,this.iridescenceIOR=f.iridescenceIOR,this.iridescenceThicknessRange=[...f.iridescenceThicknessRange],this.iridescenceThicknessMap=f.iridescenceThicknessMap,this.sheen=f.sheen,this.sheenColor.copy(f.sheenColor),this.sheenColorMap=f.sheenColorMap,this.sheenRoughness=f.sheenRoughness,this.sheenRoughnessMap=f.sheenRoughnessMap,this.transmission=f.transmission,this.transmissionMap=f.transmissionMap,this.thickness=f.thickness,this.thicknessMap=f.thicknessMap,this.attenuationDistance=f.attenuationDistance,this.attenuationColor.copy(f.attenuationColor),this.specularIntensity=f.specularIntensity,this.specularIntensityMap=f.specularIntensityMap,this.specularColor.copy(f.specularColor),this.specularColorMap=f.specularColorMap,this}}class MeshPhongMaterial extends Material{constructor(f){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Color(16777215),this.specular=new Color(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.color.copy(f.color),this.specular.copy(f.specular),this.shininess=f.shininess,this.map=f.map,this.lightMap=f.lightMap,this.lightMapIntensity=f.lightMapIntensity,this.aoMap=f.aoMap,this.aoMapIntensity=f.aoMapIntensity,this.emissive.copy(f.emissive),this.emissiveMap=f.emissiveMap,this.emissiveIntensity=f.emissiveIntensity,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.specularMap=f.specularMap,this.alphaMap=f.alphaMap,this.envMap=f.envMap,this.combine=f.combine,this.reflectivity=f.reflectivity,this.refractionRatio=f.refractionRatio,this.wireframe=f.wireframe,this.wireframeLinewidth=f.wireframeLinewidth,this.wireframeLinecap=f.wireframeLinecap,this.wireframeLinejoin=f.wireframeLinejoin,this.flatShading=f.flatShading,this.fog=f.fog,this}}class MeshMatcapMaterial extends Material{constructor(f){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Color(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(f)}copy(f){return super.copy(f),this.defines={MATCAP:""},this.color.copy(f.color),this.matcap=f.matcap,this.map=f.map,this.bumpMap=f.bumpMap,this.bumpScale=f.bumpScale,this.normalMap=f.normalMap,this.normalMapType=f.normalMapType,this.normalScale.copy(f.normalScale),this.displacementMap=f.displacementMap,this.displacementScale=f.displacementScale,this.displacementBias=f.displacementBias,this.alphaMap=f.alphaMap,this.flatShading=f.flatShading,this.fog=f.fog,this}}function arraySlice(b,f,m){return isTypedArray(b)?new b.constructor(b.subarray(f,m!==void 0?m:b.length)):b.slice(f,m)}function convertArray(b,f,m){return!b||!m&&b.constructor===f?b:typeof f.BYTES_PER_ELEMENT=="number"?new f(b):Array.prototype.slice.call(b)}function isTypedArray(b){return ArrayBuffer.isView(b)&&!(b instanceof DataView)}function getKeyframeOrder(b){function f(x,v){return b[x]-b[v]}const m=b.length,_=new Array(m);for(let x=0;x!==m;++x)_[x]=x;return _.sort(f),_}function sortedArray(b,f,m){const _=b.length,x=new b.constructor(_);for(let v=0,y=0;y!==_;++v){const M=m[v]*f;for(let S=0;S!==f;++S)x[y++]=b[M+S]}return x}function flattenJSON(b,f,m,_){let x=1,v=b[0];for(;v!==void 0&&v[_]===void 0;)v=b[x++];if(v===void 0)return;let y=v[_];if(y!==void 0)if(Array.isArray(y))do y=v[_],y!==void 0&&(f.push(v.time),m.push.apply(m,y)),v=b[x++];while(v!==void 0);else if(y.toArray!==void 0)do y=v[_],y!==void 0&&(f.push(v.time),y.toArray(m,m.length)),v=b[x++];while(v!==void 0);else do y=v[_],y!==void 0&&(f.push(v.time),m.push(y)),v=b[x++];while(v!==void 0)}class Interpolant{constructor(f,m,_,x){this.parameterPositions=f,this._cachedIndex=0,this.resultBuffer=x!==void 0?x:new m.constructor(_),this.sampleValues=m,this.valueSize=_,this.settings=null,this.DefaultSettings_={}}evaluate(f){const m=this.parameterPositions;let _=this._cachedIndex,x=m[_],v=m[_-1];n:{e:{let y;t:{i:if(!(f<x)){for(let M=_+2;;){if(x===void 0){if(f<v)break i;return _=m.length,this._cachedIndex=_,this.copySampleValue_(_-1)}if(_===M)break;if(v=x,x=m[++_],f<x)break e}y=m.length;break t}if(!(f>=v)){const M=m[1];f<M&&(_=2,v=M);for(let S=_-2;;){if(v===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(_===S)break;if(x=v,v=m[--_-1],f>=v)break e}y=_,_=0;break t}break n}for(;_<y;){const M=_+y>>>1;f<m[M]?y=M:_=M+1}if(x=m[_],v=m[_-1],v===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(x===void 0)return _=m.length,this._cachedIndex=_,this.copySampleValue_(_-1)}this._cachedIndex=_,this.intervalChanged_(_,v,x)}return this.interpolate_(_,v,f,x)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(f){const m=this.resultBuffer,_=this.sampleValues,x=this.valueSize,v=f*x;for(let y=0;y!==x;++y)m[y]=_[v+y];return m}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class CubicInterpolant extends Interpolant{constructor(f,m,_,x){super(f,m,_,x),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ZeroCurvatureEnding,endingEnd:ZeroCurvatureEnding}}intervalChanged_(f,m,_){const x=this.parameterPositions;let v=f-2,y=f+1,M=x[v],S=x[y];if(M===void 0)switch(this.getSettings_().endingStart){case ZeroSlopeEnding:v=f,M=2*m-_;break;case WrapAroundEnding:v=x.length-2,M=m+x[v]-x[v+1];break;default:v=f,M=_}if(S===void 0)switch(this.getSettings_().endingEnd){case ZeroSlopeEnding:y=f,S=2*_-m;break;case WrapAroundEnding:y=1,S=_+x[1]-x[0];break;default:y=f-1,S=m}const w=(_-m)*.5,T=this.valueSize;this._weightPrev=w/(m-M),this._weightNext=w/(S-_),this._offsetPrev=v*T,this._offsetNext=y*T}interpolate_(f,m,_,x){const v=this.resultBuffer,y=this.sampleValues,M=this.valueSize,S=f*M,w=S-M,T=this._offsetPrev,A=this._offsetNext,E=this._weightPrev,R=this._weightNext,P=(_-m)/(x-m),C=P*P,L=C*P,D=-E*L+2*E*C-E*P,U=(1+E)*L+(-1.5-2*E)*C+(-.5+E)*P+1,I=(-1-R)*L+(1.5+R)*C+.5*P,O=R*L-R*C;for(let V=0;V!==M;++V)v[V]=D*y[T+V]+U*y[w+V]+I*y[S+V]+O*y[A+V];return v}}class LinearInterpolant extends Interpolant{constructor(f,m,_,x){super(f,m,_,x)}interpolate_(f,m,_,x){const v=this.resultBuffer,y=this.sampleValues,M=this.valueSize,S=f*M,w=S-M,T=(_-m)/(x-m),A=1-T;for(let E=0;E!==M;++E)v[E]=y[w+E]*A+y[S+E]*T;return v}}class DiscreteInterpolant extends Interpolant{constructor(f,m,_,x){super(f,m,_,x)}interpolate_(f){return this.copySampleValue_(f-1)}}class KeyframeTrack{constructor(f,m,_,x){if(f===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(m===void 0||m.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+f);this.name=f,this.times=convertArray(m,this.TimeBufferType),this.values=convertArray(_,this.ValueBufferType),this.setInterpolation(x||this.DefaultInterpolation)}static toJSON(f){const m=f.constructor;let _;if(m.toJSON!==this.toJSON)_=m.toJSON(f);else{_={name:f.name,times:convertArray(f.times,Array),values:convertArray(f.values,Array)};const x=f.getInterpolation();x!==f.DefaultInterpolation&&(_.interpolation=x)}return _.type=f.ValueTypeName,_}InterpolantFactoryMethodDiscrete(f){return new DiscreteInterpolant(this.times,this.values,this.getValueSize(),f)}InterpolantFactoryMethodLinear(f){return new LinearInterpolant(this.times,this.values,this.getValueSize(),f)}InterpolantFactoryMethodSmooth(f){return new CubicInterpolant(this.times,this.values,this.getValueSize(),f)}setInterpolation(f){let m;switch(f){case InterpolateDiscrete:m=this.InterpolantFactoryMethodDiscrete;break;case InterpolateLinear:m=this.InterpolantFactoryMethodLinear;break;case InterpolateSmooth:m=this.InterpolantFactoryMethodSmooth;break}if(m===void 0){const _="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(f!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(_);return console.warn("THREE.KeyframeTrack:",_),this}return this.createInterpolant=m,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return InterpolateSmooth}}getValueSize(){return this.values.length/this.times.length}shift(f){if(f!==0){const m=this.times;for(let _=0,x=m.length;_!==x;++_)m[_]+=f}return this}scale(f){if(f!==1){const m=this.times;for(let _=0,x=m.length;_!==x;++_)m[_]*=f}return this}trim(f,m){const _=this.times,x=_.length;let v=0,y=x-1;for(;v!==x&&_[v]<f;)++v;for(;y!==-1&&_[y]>m;)--y;if(++y,v!==0||y!==x){v>=y&&(y=Math.max(y,1),v=y-1);const M=this.getValueSize();this.times=arraySlice(_,v,y),this.values=arraySlice(this.values,v*M,y*M)}return this}validate(){let f=!0;const m=this.getValueSize();m-Math.floor(m)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),f=!1);const _=this.times,x=this.values,v=_.length;v===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),f=!1);let y=null;for(let M=0;M!==v;M++){const S=_[M];if(typeof S=="number"&&isNaN(S)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,M,S),f=!1;break}if(y!==null&&y>S){console.error("THREE.KeyframeTrack: Out of order keys.",this,M,S,y),f=!1;break}y=S}if(x!==void 0&&isTypedArray(x))for(let M=0,S=x.length;M!==S;++M){const w=x[M];if(isNaN(w)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,M,w),f=!1;break}}return f}optimize(){const f=arraySlice(this.times),m=arraySlice(this.values),_=this.getValueSize(),x=this.getInterpolation()===InterpolateSmooth,v=f.length-1;let y=1;for(let M=1;M<v;++M){let S=!1;const w=f[M],T=f[M+1];if(w!==T&&(M!==1||w!==f[0]))if(x)S=!0;else{const A=M*_,E=A-_,R=A+_;for(let P=0;P!==_;++P){const C=m[A+P];if(C!==m[E+P]||C!==m[R+P]){S=!0;break}}}if(S){if(M!==y){f[y]=f[M];const A=M*_,E=y*_;for(let R=0;R!==_;++R)m[E+R]=m[A+R]}++y}}if(v>0){f[y]=f[v];for(let M=v*_,S=y*_,w=0;w!==_;++w)m[S+w]=m[M+w];++y}return y!==f.length?(this.times=arraySlice(f,0,y),this.values=arraySlice(m,0,y*_)):(this.times=f,this.values=m),this}clone(){const f=arraySlice(this.times,0),m=arraySlice(this.values,0),_=this.constructor,x=new _(this.name,f,m);return x.createInterpolant=this.createInterpolant,x}}KeyframeTrack.prototype.TimeBufferType=Float32Array;KeyframeTrack.prototype.ValueBufferType=Float32Array;KeyframeTrack.prototype.DefaultInterpolation=InterpolateLinear;class BooleanKeyframeTrack extends KeyframeTrack{}BooleanKeyframeTrack.prototype.ValueTypeName="bool";BooleanKeyframeTrack.prototype.ValueBufferType=Array;BooleanKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete;BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0;BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class ColorKeyframeTrack extends KeyframeTrack{}ColorKeyframeTrack.prototype.ValueTypeName="color";class NumberKeyframeTrack extends KeyframeTrack{}NumberKeyframeTrack.prototype.ValueTypeName="number";class QuaternionLinearInterpolant extends Interpolant{constructor(f,m,_,x){super(f,m,_,x)}interpolate_(f,m,_,x){const v=this.resultBuffer,y=this.sampleValues,M=this.valueSize,S=(_-m)/(x-m);let w=f*M;for(let T=w+M;w!==T;w+=4)Quaternion.slerpFlat(v,0,y,w-M,y,w,S);return v}}class QuaternionKeyframeTrack extends KeyframeTrack{InterpolantFactoryMethodLinear(f){return new QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),f)}}QuaternionKeyframeTrack.prototype.ValueTypeName="quaternion";QuaternionKeyframeTrack.prototype.DefaultInterpolation=InterpolateLinear;QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class StringKeyframeTrack extends KeyframeTrack{}StringKeyframeTrack.prototype.ValueTypeName="string";StringKeyframeTrack.prototype.ValueBufferType=Array;StringKeyframeTrack.prototype.DefaultInterpolation=InterpolateDiscrete;StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear=void 0;StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth=void 0;class VectorKeyframeTrack extends KeyframeTrack{}VectorKeyframeTrack.prototype.ValueTypeName="vector";class AnimationClip{constructor(f,m=-1,_,x=NormalAnimationBlendMode){this.name=f,this.tracks=_,this.duration=m,this.blendMode=x,this.uuid=generateUUID(),this.duration<0&&this.resetDuration()}static parse(f){const m=[],_=f.tracks,x=1/(f.fps||1);for(let y=0,M=_.length;y!==M;++y)m.push(parseKeyframeTrack(_[y]).scale(x));const v=new this(f.name,f.duration,m,f.blendMode);return v.uuid=f.uuid,v}static toJSON(f){const m=[],_=f.tracks,x={name:f.name,duration:f.duration,tracks:m,uuid:f.uuid,blendMode:f.blendMode};for(let v=0,y=_.length;v!==y;++v)m.push(KeyframeTrack.toJSON(_[v]));return x}static CreateFromMorphTargetSequence(f,m,_,x){const v=m.length,y=[];for(let M=0;M<v;M++){let S=[],w=[];S.push((M+v-1)%v,M,(M+1)%v),w.push(0,1,0);const T=getKeyframeOrder(S);S=sortedArray(S,1,T),w=sortedArray(w,1,T),!x&&S[0]===0&&(S.push(v),w.push(w[0])),y.push(new NumberKeyframeTrack(".morphTargetInfluences["+m[M].name+"]",S,w).scale(1/_))}return new this(f,-1,y)}static findByName(f,m){let _=f;if(!Array.isArray(f)){const x=f;_=x.geometry&&x.geometry.animations||x.animations}for(let x=0;x<_.length;x++)if(_[x].name===m)return _[x];return null}static CreateClipsFromMorphTargetSequences(f,m,_){const x={},v=/^([\w-]*?)([\d]+)$/;for(let M=0,S=f.length;M<S;M++){const w=f[M],T=w.name.match(v);if(T&&T.length>1){const A=T[1];let E=x[A];E||(x[A]=E=[]),E.push(w)}}const y=[];for(const M in x)y.push(this.CreateFromMorphTargetSequence(M,x[M],m,_));return y}static parseAnimation(f,m){if(!f)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const _=function(A,E,R,P,C){if(R.length!==0){const L=[],D=[];flattenJSON(R,L,D,P),L.length!==0&&C.push(new A(E,L,D))}},x=[],v=f.name||"default",y=f.fps||30,M=f.blendMode;let S=f.length||-1;const w=f.hierarchy||[];for(let A=0;A<w.length;A++){const E=w[A].keys;if(!(!E||E.length===0))if(E[0].morphTargets){const R={};let P;for(P=0;P<E.length;P++)if(E[P].morphTargets)for(let C=0;C<E[P].morphTargets.length;C++)R[E[P].morphTargets[C]]=-1;for(const C in R){const L=[],D=[];for(let U=0;U!==E[P].morphTargets.length;++U){const I=E[P];L.push(I.time),D.push(I.morphTarget===C?1:0)}x.push(new NumberKeyframeTrack(".morphTargetInfluence["+C+"]",L,D))}S=R.length*y}else{const R=".bones["+m[A].name+"]";_(VectorKeyframeTrack,R+".position",E,"pos",x),_(QuaternionKeyframeTrack,R+".quaternion",E,"rot",x),_(VectorKeyframeTrack,R+".scale",E,"scl",x)}}return x.length===0?null:new this(v,S,x,M)}resetDuration(){const f=this.tracks;let m=0;for(let _=0,x=f.length;_!==x;++_){const v=this.tracks[_];m=Math.max(m,v.times[v.times.length-1])}return this.duration=m,this}trim(){for(let f=0;f<this.tracks.length;f++)this.tracks[f].trim(0,this.duration);return this}validate(){let f=!0;for(let m=0;m<this.tracks.length;m++)f=f&&this.tracks[m].validate();return f}optimize(){for(let f=0;f<this.tracks.length;f++)this.tracks[f].optimize();return this}clone(){const f=[];for(let m=0;m<this.tracks.length;m++)f.push(this.tracks[m].clone());return new this.constructor(this.name,this.duration,f,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function getTrackTypeForValueTypeName(b){switch(b.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return NumberKeyframeTrack;case"vector":case"vector2":case"vector3":case"vector4":return VectorKeyframeTrack;case"color":return ColorKeyframeTrack;case"quaternion":return QuaternionKeyframeTrack;case"bool":case"boolean":return BooleanKeyframeTrack;case"string":return StringKeyframeTrack}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+b)}function parseKeyframeTrack(b){if(b.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const f=getTrackTypeForValueTypeName(b.type);if(b.times===void 0){const m=[],_=[];flattenJSON(b.keys,m,_,"value"),b.times=m,b.values=_}return f.parse!==void 0?f.parse(b):new f(b.name,b.times,b.values,b.interpolation)}const Cache={enabled:!1,files:{},add:function(b,f){this.enabled!==!1&&(this.files[b]=f)},get:function(b){if(this.enabled!==!1)return this.files[b]},remove:function(b){delete this.files[b]},clear:function(){this.files={}}};class LoadingManager{constructor(f,m,_){const x=this;let v=!1,y=0,M=0,S;const w=[];this.onStart=void 0,this.onLoad=f,this.onProgress=m,this.onError=_,this.itemStart=function(T){M++,v===!1&&x.onStart!==void 0&&x.onStart(T,y,M),v=!0},this.itemEnd=function(T){y++,x.onProgress!==void 0&&x.onProgress(T,y,M),y===M&&(v=!1,x.onLoad!==void 0&&x.onLoad())},this.itemError=function(T){x.onError!==void 0&&x.onError(T)},this.resolveURL=function(T){return S?S(T):T},this.setURLModifier=function(T){return S=T,this},this.addHandler=function(T,A){return w.push(T,A),this},this.removeHandler=function(T){const A=w.indexOf(T);return A!==-1&&w.splice(A,2),this},this.getHandler=function(T){for(let A=0,E=w.length;A<E;A+=2){const R=w[A],P=w[A+1];if(R.global&&(R.lastIndex=0),R.test(T))return P}return null}}}const DefaultLoadingManager=new LoadingManager;class Loader{constructor(f){this.manager=f!==void 0?f:DefaultLoadingManager,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(f,m){const _=this;return new Promise(function(x,v){_.load(f,x,m,v)})}parse(){}setCrossOrigin(f){return this.crossOrigin=f,this}setWithCredentials(f){return this.withCredentials=f,this}setPath(f){return this.path=f,this}setResourcePath(f){return this.resourcePath=f,this}setRequestHeader(f){return this.requestHeader=f,this}}const loading={};class HttpError extends Error{constructor(f,m){super(f),this.response=m}}class FileLoader extends Loader{constructor(f){super(f)}load(f,m,_,x){f===void 0&&(f=""),this.path!==void 0&&(f=this.path+f),f=this.manager.resolveURL(f);const v=Cache.get(f);if(v!==void 0)return this.manager.itemStart(f),setTimeout(()=>{m&&m(v),this.manager.itemEnd(f)},0),v;if(loading[f]!==void 0){loading[f].push({onLoad:m,onProgress:_,onError:x});return}loading[f]=[],loading[f].push({onLoad:m,onProgress:_,onError:x});const y=new Request(f,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),M=this.mimeType,S=this.responseType;fetch(y).then(w=>{if(w.status===200||w.status===0){if(w.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||w.body===void 0||w.body.getReader===void 0)return w;const T=loading[f],A=w.body.getReader(),E=w.headers.get("Content-Length")||w.headers.get("X-File-Size"),R=E?parseInt(E):0,P=R!==0;let C=0;const L=new ReadableStream({start(D){U();function U(){A.read().then(({done:I,value:O})=>{if(I)D.close();else{C+=O.byteLength;const V=new ProgressEvent("progress",{lengthComputable:P,loaded:C,total:R});for(let H=0,$=T.length;H<$;H++){const F=T[H];F.onProgress&&F.onProgress(V)}D.enqueue(O),U()}})}}});return new Response(L)}else throw new HttpError(`fetch for "${w.url}" responded with ${w.status}: ${w.statusText}`,w)}).then(w=>{switch(S){case"arraybuffer":return w.arrayBuffer();case"blob":return w.blob();case"document":return w.text().then(T=>new DOMParser().parseFromString(T,M));case"json":return w.json();default:if(M===void 0)return w.text();{const A=/charset="?([^;"\s]*)"?/i.exec(M),E=A&&A[1]?A[1].toLowerCase():void 0,R=new TextDecoder(E);return w.arrayBuffer().then(P=>R.decode(P))}}}).then(w=>{Cache.add(f,w);const T=loading[f];delete loading[f];for(let A=0,E=T.length;A<E;A++){const R=T[A];R.onLoad&&R.onLoad(w)}}).catch(w=>{const T=loading[f];if(T===void 0)throw this.manager.itemError(f),w;delete loading[f];for(let A=0,E=T.length;A<E;A++){const R=T[A];R.onError&&R.onError(w)}this.manager.itemError(f)}).finally(()=>{this.manager.itemEnd(f)}),this.manager.itemStart(f)}setResponseType(f){return this.responseType=f,this}setMimeType(f){return this.mimeType=f,this}}class ImageLoader extends Loader{constructor(f){super(f)}load(f,m,_,x){this.path!==void 0&&(f=this.path+f),f=this.manager.resolveURL(f);const v=this,y=Cache.get(f);if(y!==void 0)return v.manager.itemStart(f),setTimeout(function(){m&&m(y),v.manager.itemEnd(f)},0),y;const M=createElementNS("img");function S(){T(),Cache.add(f,this),m&&m(this),v.manager.itemEnd(f)}function w(A){T(),x&&x(A),v.manager.itemError(f),v.manager.itemEnd(f)}function T(){M.removeEventListener("load",S,!1),M.removeEventListener("error",w,!1)}return M.addEventListener("load",S,!1),M.addEventListener("error",w,!1),f.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(M.crossOrigin=this.crossOrigin),v.manager.itemStart(f),M.src=f,M}}class TextureLoader extends Loader{constructor(f){super(f)}load(f,m,_,x){const v=new Texture,y=new ImageLoader(this.manager);return y.setCrossOrigin(this.crossOrigin),y.setPath(this.path),y.load(f,function(M){v.image=M,v.needsUpdate=!0,m!==void 0&&m(v)},_,x),v}}class Light extends Object3D{constructor(f,m=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(f),this.intensity=m}dispose(){}copy(f,m){return super.copy(f,m),this.color.copy(f.color),this.intensity=f.intensity,this}toJSON(f){const m=super.toJSON(f);return m.object.color=this.color.getHex(),m.object.intensity=this.intensity,this.groundColor!==void 0&&(m.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(m.object.distance=this.distance),this.angle!==void 0&&(m.object.angle=this.angle),this.decay!==void 0&&(m.object.decay=this.decay),this.penumbra!==void 0&&(m.object.penumbra=this.penumbra),this.shadow!==void 0&&(m.object.shadow=this.shadow.toJSON()),m}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(f){this.camera=f,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(f){const m=this.camera,_=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(f.matrixWorld),m.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(f.target.matrixWorld),m.lookAt(_lookTarget$1),m.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(m.projectionMatrix,m.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(_projScreenMatrix$1)}getViewport(f){return this._viewports[f]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(f){return this.camera=f.camera.clone(),this.bias=f.bias,this.radius=f.radius,this.mapSize.copy(f.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const f={};return this.bias!==0&&(f.bias=this.bias),this.normalBias!==0&&(f.normalBias=this.normalBias),this.radius!==1&&(f.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(f.mapSize=this.mapSize.toArray()),f.camera=this.camera.toJSON(!1).object,delete f.camera.matrix,f}}class SpotLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(f){const m=this.camera,_=RAD2DEG*2*f.angle*this.focus,x=this.mapSize.width/this.mapSize.height,v=f.distance||m.far;(_!==m.fov||x!==m.aspect||v!==m.far)&&(m.fov=_,m.aspect=x,m.far=v,m.updateProjectionMatrix()),super.updateMatrices(f)}copy(f){return super.copy(f),this.focus=f.focus,this}}class SpotLight extends Light{constructor(f,m,_=0,x=Math.PI/3,v=0,y=2){super(f,m),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.distance=_,this.angle=x,this.penumbra=v,this.decay=y,this.map=null,this.shadow=new SpotLightShadow}get power(){return this.intensity*Math.PI}set power(f){this.intensity=f/Math.PI}dispose(){this.shadow.dispose()}copy(f,m){return super.copy(f,m),this.distance=f.distance,this.angle=f.angle,this.penumbra=f.penumbra,this.decay=f.decay,this.target=f.target.clone(),this.shadow=f.shadow.clone(),this}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(f,m=0){const _=this.camera,x=this.matrix,v=f.distance||_.far;v!==_.far&&(_.far=v,_.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(f.matrixWorld),_.position.copy(_lightPositionWorld),_lookTarget.copy(_.position),_lookTarget.add(this._cubeDirections[m]),_.up.copy(this._cubeUps[m]),_.lookAt(_lookTarget),_.updateMatrixWorld(),x.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(f,m,_=0,x=2){super(f,m),this.isPointLight=!0,this.type="PointLight",this.distance=_,this.decay=x,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(f){this.intensity=f/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(f,m){return super.copy(f,m),this.distance=f.distance,this.decay=f.decay,this.shadow=f.shadow.clone(),this}}class DirectionalLightShadow extends LightShadow{constructor(){super(new OrthographicCamera(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DirectionalLight extends Light{constructor(f,m){super(f,m),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Object3D.DEFAULT_UP),this.updateMatrix(),this.target=new Object3D,this.shadow=new DirectionalLightShadow}dispose(){this.shadow.dispose()}copy(f){return super.copy(f),this.target=f.target.clone(),this.shadow=f.shadow.clone(),this}}class AmbientLight extends Light{constructor(f,m){super(f,m),this.isAmbientLight=!0,this.type="AmbientLight"}}class LoaderUtils{static decodeText(f){if(typeof TextDecoder<"u")return new TextDecoder().decode(f);let m="";for(let _=0,x=f.length;_<x;_++)m+=String.fromCharCode(f[_]);try{return decodeURIComponent(escape(m))}catch{return m}}static extractUrlBase(f){const m=f.lastIndexOf("/");return m===-1?"./":f.slice(0,m+1)}static resolveURL(f,m){return typeof f!="string"||f===""?"":(/^https?:\/\//i.test(m)&&/^\//.test(f)&&(m=m.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(f)||/^data:.*,.*$/i.test(f)||/^blob:.*$/i.test(f)?f:m+f)}}class ImageBitmapLoader extends Loader{constructor(f){super(f),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(f){return this.options=f,this}load(f,m,_,x){f===void 0&&(f=""),this.path!==void 0&&(f=this.path+f),f=this.manager.resolveURL(f);const v=this,y=Cache.get(f);if(y!==void 0)return v.manager.itemStart(f),setTimeout(function(){m&&m(y),v.manager.itemEnd(f)},0),y;const M={};M.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",M.headers=this.requestHeader,fetch(f,M).then(function(S){return S.blob()}).then(function(S){return createImageBitmap(S,Object.assign(v.options,{colorSpaceConversion:"none"}))}).then(function(S){Cache.add(f,S),m&&m(S),v.manager.itemEnd(f)}).catch(function(S){x&&x(S),v.manager.itemError(f),v.manager.itemEnd(f)}),v.manager.itemStart(f)}}class Clock{constructor(f=!0){this.autoStart=f,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let f=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const m=now();f=(m-this.oldTime)/1e3,this.oldTime=m,this.elapsedTime+=f}return f}}function now(){return(typeof performance>"u"?Date:performance).now()}const _RESERVED_CHARS_RE="\\[\\]\\.:\\/",_reservedRe=new RegExp("["+_RESERVED_CHARS_RE+"]","g"),_wordChar="[^"+_RESERVED_CHARS_RE+"]",_wordCharOrDot="[^"+_RESERVED_CHARS_RE.replace("\\.","")+"]",_directoryRe=/((?:WC+[\/:])*)/.source.replace("WC",_wordChar),_nodeRe=/(WCOD+)?/.source.replace("WCOD",_wordCharOrDot),_objectRe=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_wordChar),_propertyRe=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_wordChar),_trackRe=new RegExp("^"+_directoryRe+_nodeRe+_objectRe+_propertyRe+"$"),_supportedObjectNames=["material","materials","bones","map"];class Composite{constructor(f,m,_){const x=_||PropertyBinding.parseTrackName(m);this._targetGroup=f,this._bindings=f.subscribe_(m,x)}getValue(f,m){this.bind();const _=this._targetGroup.nCachedObjects_,x=this._bindings[_];x!==void 0&&x.getValue(f,m)}setValue(f,m){const _=this._bindings;for(let x=this._targetGroup.nCachedObjects_,v=_.length;x!==v;++x)_[x].setValue(f,m)}bind(){const f=this._bindings;for(let m=this._targetGroup.nCachedObjects_,_=f.length;m!==_;++m)f[m].bind()}unbind(){const f=this._bindings;for(let m=this._targetGroup.nCachedObjects_,_=f.length;m!==_;++m)f[m].unbind()}}class PropertyBinding{constructor(f,m,_){this.path=m,this.parsedPath=_||PropertyBinding.parseTrackName(m),this.node=PropertyBinding.findNode(f,this.parsedPath.nodeName),this.rootNode=f,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(f,m,_){return f&&f.isAnimationObjectGroup?new PropertyBinding.Composite(f,m,_):new PropertyBinding(f,m,_)}static sanitizeNodeName(f){return f.replace(/\s/g,"_").replace(_reservedRe,"")}static parseTrackName(f){const m=_trackRe.exec(f);if(m===null)throw new Error("PropertyBinding: Cannot parse trackName: "+f);const _={nodeName:m[2],objectName:m[3],objectIndex:m[4],propertyName:m[5],propertyIndex:m[6]},x=_.nodeName&&_.nodeName.lastIndexOf(".");if(x!==void 0&&x!==-1){const v=_.nodeName.substring(x+1);_supportedObjectNames.indexOf(v)!==-1&&(_.nodeName=_.nodeName.substring(0,x),_.objectName=v)}if(_.propertyName===null||_.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+f);return _}static findNode(f,m){if(m===void 0||m===""||m==="."||m===-1||m===f.name||m===f.uuid)return f;if(f.skeleton){const _=f.skeleton.getBoneByName(m);if(_!==void 0)return _}if(f.children){const _=function(v){for(let y=0;y<v.length;y++){const M=v[y];if(M.name===m||M.uuid===m)return M;const S=_(M.children);if(S)return S}return null},x=_(f.children);if(x)return x}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(f,m){f[m]=this.targetObject[this.propertyName]}_getValue_array(f,m){const _=this.resolvedProperty;for(let x=0,v=_.length;x!==v;++x)f[m++]=_[x]}_getValue_arrayElement(f,m){f[m]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(f,m){this.resolvedProperty.toArray(f,m)}_setValue_direct(f,m){this.targetObject[this.propertyName]=f[m]}_setValue_direct_setNeedsUpdate(f,m){this.targetObject[this.propertyName]=f[m],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(f,m){this.targetObject[this.propertyName]=f[m],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(f,m){const _=this.resolvedProperty;for(let x=0,v=_.length;x!==v;++x)_[x]=f[m++]}_setValue_array_setNeedsUpdate(f,m){const _=this.resolvedProperty;for(let x=0,v=_.length;x!==v;++x)_[x]=f[m++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(f,m){const _=this.resolvedProperty;for(let x=0,v=_.length;x!==v;++x)_[x]=f[m++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(f,m){this.resolvedProperty[this.propertyIndex]=f[m]}_setValue_arrayElement_setNeedsUpdate(f,m){this.resolvedProperty[this.propertyIndex]=f[m],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(f,m){this.resolvedProperty[this.propertyIndex]=f[m],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(f,m){this.resolvedProperty.fromArray(f,m)}_setValue_fromArray_setNeedsUpdate(f,m){this.resolvedProperty.fromArray(f,m),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(f,m){this.resolvedProperty.fromArray(f,m),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(f,m){this.bind(),this.getValue(f,m)}_setValue_unbound(f,m){this.bind(),this.setValue(f,m)}bind(){let f=this.node;const m=this.parsedPath,_=m.objectName,x=m.propertyName;let v=m.propertyIndex;if(f||(f=PropertyBinding.findNode(this.rootNode,m.nodeName),this.node=f),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!f){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(_){let w=m.objectIndex;switch(_){case"materials":if(!f.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!f.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}f=f.material.materials;break;case"bones":if(!f.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}f=f.skeleton.bones;for(let T=0;T<f.length;T++)if(f[T].name===w){w=T;break}break;case"map":if("map"in f){f=f.map;break}if(!f.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!f.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}f=f.material.map;break;default:if(f[_]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}f=f[_]}if(w!==void 0){if(f[w]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,f);return}f=f[w]}}const y=f[x];if(y===void 0){const w=m.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+w+"."+x+" but it wasn't found.",f);return}let M=this.Versioning.None;this.targetObject=f,f.needsUpdate!==void 0?M=this.Versioning.NeedsUpdate:f.matrixWorldNeedsUpdate!==void 0&&(M=this.Versioning.MatrixWorldNeedsUpdate);let S=this.BindingType.Direct;if(v!==void 0){if(x==="morphTargetInfluences"){if(!f.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!f.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}f.morphTargetDictionary[v]!==void 0&&(v=f.morphTargetDictionary[v])}S=this.BindingType.ArrayElement,this.resolvedProperty=y,this.propertyIndex=v}else y.fromArray!==void 0&&y.toArray!==void 0?(S=this.BindingType.HasFromToArray,this.resolvedProperty=y):Array.isArray(y)?(S=this.BindingType.EntireArray,this.resolvedProperty=y):this.propertyName=x;this.getValue=this.GetterByBindingType[S],this.setValue=this.SetterByBindingTypeAndVersioning[S][M]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}PropertyBinding.Composite=Composite;PropertyBinding.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};PropertyBinding.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};PropertyBinding.prototype.GetterByBindingType=[PropertyBinding.prototype._getValue_direct,PropertyBinding.prototype._getValue_array,PropertyBinding.prototype._getValue_arrayElement,PropertyBinding.prototype._getValue_toArray];PropertyBinding.prototype.SetterByBindingTypeAndVersioning=[[PropertyBinding.prototype._setValue_direct,PropertyBinding.prototype._setValue_direct_setNeedsUpdate,PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_array,PropertyBinding.prototype._setValue_array_setNeedsUpdate,PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_arrayElement,PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[PropertyBinding.prototype._setValue_fromArray,PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Raycaster{constructor(f,m,_=0,x=1/0){this.ray=new Ray(f,m),this.near=_,this.far=x,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(f,m){this.ray.set(f,m)}setFromCamera(f,m){m.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(m.matrixWorld),this.ray.direction.set(f.x,f.y,.5).unproject(m).sub(this.ray.origin).normalize(),this.camera=m):m.isOrthographicCamera?(this.ray.origin.set(f.x,f.y,(m.near+m.far)/(m.near-m.far)).unproject(m),this.ray.direction.set(0,0,-1).transformDirection(m.matrixWorld),this.camera=m):console.error("THREE.Raycaster: Unsupported camera type: "+m.type)}intersectObject(f,m=!0,_=[]){return intersectObject(f,this,_,m),_.sort(ascSort),_}intersectObjects(f,m=!0,_=[]){for(let x=0,v=f.length;x<v;x++)intersectObject(f[x],this,_,m);return _.sort(ascSort),_}}function ascSort(b,f){return b.distance-f.distance}function intersectObject(b,f,m,_){if(b.layers.test(f.layers)&&b.raycast(f,m),_===!0){const x=b.children;for(let v=0,y=x.length;v<y;v++)intersectObject(x[v],f,m,!0)}}class Spherical{constructor(f=1,m=0,_=0){return this.radius=f,this.phi=m,this.theta=_,this}set(f,m,_){return this.radius=f,this.phi=m,this.theta=_,this}copy(f){return this.radius=f.radius,this.phi=f.phi,this.theta=f.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(f){return this.setFromCartesianCoords(f.x,f.y,f.z)}setFromCartesianCoords(f,m,_){return this.radius=Math.sqrt(f*f+m*m+_*_),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(f,_),this.phi=Math.acos(clamp(m/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class AxesHelper extends LineSegments{constructor(f=1){const m=[0,0,0,f,0,0,0,0,0,0,f,0,0,0,0,0,0,f],_=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],x=new BufferGeometry;x.setAttribute("position",new Float32BufferAttribute(m,3)),x.setAttribute("color",new Float32BufferAttribute(_,3));const v=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(x,v),this.type="AxesHelper"}setColors(f,m,_){const x=new Color,v=this.geometry.attributes.color.array;return x.set(f),x.toArray(v,0),x.toArray(v,3),x.set(m),x.toArray(v,6),x.toArray(v,9),x.set(_),x.toArray(v,12),x.toArray(v,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);var Stats=function(){var b=0,f=document.createElement("div");f.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",f.addEventListener("click",function(T){T.preventDefault(),_(++b%f.children.length)},!1);function m(T){return f.appendChild(T.dom),T}function _(T){for(var A=0;A<f.children.length;A++)f.children[A].style.display=A===T?"block":"none";b=T}var x=(performance||Date).now(),v=x,y=0,M=m(new Stats.Panel("FPS","#0ff","#002")),S=m(new Stats.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var w=m(new Stats.Panel("MB","#f08","#201"));return _(0),{REVISION:16,dom:f,addPanel:m,showPanel:_,begin:function(){x=(performance||Date).now()},end:function(){y++;var T=(performance||Date).now();if(S.update(T-x,200),T>=v+1e3&&(M.update(y*1e3/(T-v),100),v=T,y=0,w)){var A=performance.memory;w.update(A.usedJSHeapSize/1048576,A.jsHeapSizeLimit/1048576)}return T},update:function(){x=this.end()},domElement:f,setMode:_}};Stats.Panel=function(b,f,m){var _=1/0,x=0,v=Math.round,y=v(window.devicePixelRatio||1),M=80*y,S=48*y,w=3*y,T=2*y,A=3*y,E=15*y,R=74*y,P=30*y,C=document.createElement("canvas");C.width=M,C.height=S,C.style.cssText="width:80px;height:48px";var L=C.getContext("2d");return L.font="bold "+9*y+"px Helvetica,Arial,sans-serif",L.textBaseline="top",L.fillStyle=m,L.fillRect(0,0,M,S),L.fillStyle=f,L.fillText(b,w,T),L.fillRect(A,E,R,P),L.fillStyle=m,L.globalAlpha=.9,L.fillRect(A,E,R,P),{dom:C,update:function(D,U){_=Math.min(_,D),x=Math.max(x,D),L.fillStyle=m,L.globalAlpha=1,L.fillRect(0,0,M,E),L.fillStyle=f,L.fillText(v(D)+" "+b+" ("+v(_)+"-"+v(x)+")",w,T),L.drawImage(C,A+y,E,R-y,P,A,E,R-y,P),L.fillRect(A+R-y,E,y,P),L.fillStyle=m,L.globalAlpha=.9,L.fillRect(A+R-y,E,y,v((1-D/U)*P))}}};const Stats$1=Stats;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class t{constructor(f,m,_,x,v="div"){this.parent=f,this.object=m,this.property=_,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(x),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement(v),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(_)}name(f){return this._name=f,this.$name.innerHTML=f,this}onChange(f){return this._onChange=f,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(f){return this._onFinishChange=f,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(f=!0){return this.disable(!f)}disable(f=!0){return f===this._disabled||(this._disabled=f,this.domElement.classList.toggle("disabled",f),this.$disable.toggleAttribute("disabled",f)),this}show(f=!0){return this._hidden=!f,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(f){const m=this.parent.add(this.object,this.property,f);return m.name(this._name),this.destroy(),m}min(f){return this}max(f){return this}step(f){return this}decimals(f){return this}listen(f=!0){return this._listening=f,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const f=this.save();f!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=f}getValue(){return this.object[this.property]}setValue(f){return this.object[this.property]=f,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(f){return this.setValue(f),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class i extends t{constructor(f,m,_){super(f,m,_,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function e(b){let f,m;return(f=b.match(/(#|0x)?([a-f0-9]{6})/i))?m=f[2]:(f=b.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?m=parseInt(f[1]).toString(16).padStart(2,0)+parseInt(f[2]).toString(16).padStart(2,0)+parseInt(f[3]).toString(16).padStart(2,0):(f=b.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(m=f[1]+f[1]+f[2]+f[2]+f[3]+f[3]),!!m&&"#"+m}const s={isPrimitive:!0,match:b=>typeof b=="string",fromHexString:e,toHexString:e},n={isPrimitive:!0,match:b=>typeof b=="number",fromHexString:b=>parseInt(b.substring(1),16),toHexString:b=>"#"+b.toString(16).padStart(6,0)},l={isPrimitive:!1,match:Array.isArray,fromHexString(b,f,m=1){const _=n.fromHexString(b);f[0]=(_>>16&255)/255*m,f[1]=(_>>8&255)/255*m,f[2]=(255&_)/255*m},toHexString:([b,f,m],_=1)=>n.toHexString(b*(_=255/_)<<16^f*_<<8^m*_<<0)},r={isPrimitive:!1,match:b=>Object(b)===b,fromHexString(b,f,m=1){const _=n.fromHexString(b);f.r=(_>>16&255)/255*m,f.g=(_>>8&255)/255*m,f.b=(255&_)/255*m},toHexString:({r:b,g:f,b:m},_=1)=>n.toHexString(b*(_=255/_)<<16^f*_<<8^m*_<<0)},o=[s,n,l,r];class a extends t{constructor(f,m,_,x){var v;super(f,m,_,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(v=this.initialValue,o.find(y=>y.match(v))),this._rgbScale=x,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const y=e(this.$text.value);y&&this._setValueFromHexString(y)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(f){if(this._format.isPrimitive){const m=this._format.fromHexString(f);this.setValue(m)}else this._format.fromHexString(f,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(f){return this._setValueFromHexString(f),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class h extends t{constructor(f,m,_){super(f,m,_,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",x=>{x.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class d extends t{constructor(f,m,_,x,v,y){super(f,m,_,"number"),this._initInput(),this.min(x),this.max(v);const M=y!==void 0;this.step(M?y:this._getImplicitStep(),M),this.updateDisplay()}decimals(f){return this._decimals=f,this.updateDisplay(),this}min(f){return this._min=f,this._onUpdateMinMax(),this}max(f){return this._max=f,this._onUpdateMinMax(),this}step(f,m=!0){return this._step=f,this._stepExplicit=m,this}updateDisplay(){const f=this.getValue();if(this._hasSlider){let m=(f-this._min)/(this._max-this._min);m=Math.max(0,Math.min(m,1)),this.$fill.style.width=100*m+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?f:f.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const f=T=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+T),this.$input.value=this.getValue())};let m,_,x,v,y,M=!1;const S=T=>{if(M){const A=T.clientX-m,E=T.clientY-_;Math.abs(E)>5?(T.preventDefault(),this.$input.blur(),M=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>5&&w()}if(!M){const A=T.clientY-x;y-=A*this._step*this._arrowKeyMultiplier(T),v+y>this._max?y=this._max-v:v+y<this._min&&(y=this._min-v),this._snapClampSetValue(v+y)}x=T.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",S),window.removeEventListener("mouseup",w)};this.$input.addEventListener("input",()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))}),this.$input.addEventListener("keydown",T=>{T.code==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),f(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),f(this._step*this._arrowKeyMultiplier(T)*-1))}),this.$input.addEventListener("wheel",T=>{this._inputFocused&&(T.preventDefault(),f(this._step*this._normalizeMouseWheel(T)))},{passive:!1}),this.$input.addEventListener("mousedown",T=>{m=T.clientX,_=x=T.clientY,M=!0,v=this.getValue(),y=0,window.addEventListener("mousemove",S),window.addEventListener("mouseup",w)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const f=E=>{const R=this.$slider.getBoundingClientRect();let P=(C=E,L=R.left,D=R.right,U=this._min,I=this._max,(C-L)/(D-L)*(I-U)+U);var C,L,D,U,I;this._snapClampSetValue(P)},m=E=>{f(E.clientX)},_=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",_)};let x,v,y=!1;const M=E=>{E.preventDefault(),this._setDraggingStyle(!0),f(E.touches[0].clientX),y=!1},S=E=>{if(y){const R=E.touches[0].clientX-x,P=E.touches[0].clientY-v;Math.abs(R)>Math.abs(P)?M(E):(window.removeEventListener("touchmove",S),window.removeEventListener("touchend",w))}else E.preventDefault(),f(E.touches[0].clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",S),window.removeEventListener("touchend",w)},T=this._callOnFinishChange.bind(this);let A;this.$slider.addEventListener("mousedown",E=>{this._setDraggingStyle(!0),f(E.clientX),window.addEventListener("mousemove",m),window.addEventListener("mouseup",_)}),this.$slider.addEventListener("touchstart",E=>{E.touches.length>1||(this._hasScrollBar?(x=E.touches[0].clientX,v=E.touches[0].clientY,y=!0):M(E),window.addEventListener("touchmove",S,{passive:!1}),window.addEventListener("touchend",w))},{passive:!1}),this.$slider.addEventListener("wheel",E=>{if(Math.abs(E.deltaX)<Math.abs(E.deltaY)&&this._hasScrollBar)return;E.preventDefault();const R=this._normalizeMouseWheel(E)*this._step;this._snapClampSetValue(this.getValue()+R),this.$input.value=this.getValue(),clearTimeout(A),A=setTimeout(T,400)},{passive:!1})}_setDraggingStyle(f,m="horizontal"){this.$slider&&this.$slider.classList.toggle("active",f),document.body.classList.toggle("lil-gui-dragging",f),document.body.classList.toggle("lil-gui-"+m,f)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(f){let{deltaX:m,deltaY:_}=f;return Math.floor(f.deltaY)!==f.deltaY&&f.wheelDelta&&(m=0,_=-f.wheelDelta/120,_*=this._stepExplicit?1:10),m+-_}_arrowKeyMultiplier(f){let m=this._stepExplicit?1:10;return f.shiftKey?m*=10:f.altKey&&(m/=10),m}_snap(f){const m=Math.round(f/this._step)*this._step;return parseFloat(m.toPrecision(15))}_clamp(f){return f<this._min&&(f=this._min),f>this._max&&(f=this._max),f}_snapClampSetValue(f){this.setValue(this._clamp(this._snap(f)))}get _hasScrollBar(){const f=this.parent.root.$children;return f.scrollHeight>f.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class c extends t{constructor(f,m,_,x){super(f,m,_,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(x)?x:Object.values(x),this._names=Array.isArray(x)?x:Object.keys(x),this._names.forEach(v=>{const y=document.createElement("option");y.innerHTML=v,this.$select.appendChild(y)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const f=this.getValue(),m=this._values.indexOf(f);return this.$select.selectedIndex=m,this.$display.innerHTML=m===-1?f:this._names[m],this}}class u extends t{constructor(f,m,_){super(f,m,_,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",x=>{x.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let p=!1;class g{constructor({parent:f,autoPlace:m=f===void 0,container:_,width:x,title:v="Controls",injectStyles:y=!0,touchStyles:M=!0}={}){if(this.parent=f,this.root=f?f.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",S=>{S.code!=="Enter"&&S.code!=="Space"||(S.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(v),M&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!p&&y&&(function(S){const w=document.createElement("style");w.innerHTML=S;const T=document.querySelector("head link[rel=stylesheet], head style");T?document.head.insertBefore(w,T):document.head.appendChild(w)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),p=!0),_?_.appendChild(this.domElement):m&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),x&&this.domElement.style.setProperty("--width",x+"px"),this.domElement.addEventListener("keydown",S=>S.stopPropagation()),this.domElement.addEventListener("keyup",S=>S.stopPropagation())}add(f,m,_,x,v){if(Object(_)===_)return new c(this,f,m,_);const y=f[m];switch(typeof y){case"number":return new d(this,f,m,_,x,v);case"boolean":return new i(this,f,m);case"string":return new u(this,f,m);case"function":return new h(this,f,m)}console.error(`gui.add failed
	property:`,m,`
	object:`,f,`
	value:`,y)}addColor(f,m,_=1){return new a(this,f,m,_)}addFolder(f){return new g({parent:this,title:f})}load(f,m=!0){return f.controllers&&this.controllers.forEach(_=>{_ instanceof h||_._name in f.controllers&&_.load(f.controllers[_._name])}),m&&f.folders&&this.folders.forEach(_=>{_._title in f.folders&&_.load(f.folders[_._title])}),this}save(f=!0){const m={controllers:{},folders:{}};return this.controllers.forEach(_=>{if(!(_ instanceof h)){if(_._name in m.controllers)throw new Error(`Cannot save GUI with duplicate property "${_._name}"`);m.controllers[_._name]=_.save()}}),f&&this.folders.forEach(_=>{if(_._title in m.folders)throw new Error(`Cannot save GUI with duplicate folder "${_._title}"`);m.folders[_._title]=_.save()}),m}open(f=!0){return this._closed=!f,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(f=!0){return this._hidden=!f,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(f=!0){return this._closed=!f,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const m=this.$children.clientHeight;this.$children.style.height=m+"px",this.domElement.classList.add("transition");const _=v=>{v.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",_))};this.$children.addEventListener("transitionend",_);const x=f?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!f),requestAnimationFrame(()=>{this.$children.style.height=x+"px"})}),this}title(f){return this._title=f,this.$title.innerHTML=f,this}reset(f=!0){return(f?this.controllersRecursive():this.controllers).forEach(m=>m.reset()),this}onChange(f){return this._onChange=f,this}_callOnChange(f){this.parent&&this.parent._callOnChange(f),this._onChange!==void 0&&this._onChange.call(this,{object:f.object,property:f.property,value:f.getValue(),controller:f})}onFinishChange(f){return this._onFinishChange=f,this}_callOnFinishChange(f){this.parent&&this.parent._callOnFinishChange(f),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:f.object,property:f.property,value:f.getValue(),controller:f})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(f=>f.destroy())}controllersRecursive(){let f=Array.from(this.controllers);return this.folders.forEach(m=>{f=f.concat(m.controllersRecursive())}),f}foldersRecursive(){let f=Array.from(this.folders);return this.folders.forEach(m=>{f=f.concat(m.foldersRecursive())}),f}}const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"};class OrbitControls extends EventDispatcher{constructor(f,m){super(),this.object=f,this.domElement=m,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return M.phi},this.getAzimuthalAngle=function(){return M.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",rt),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){_.target0.copy(_.target),_.position0.copy(_.object.position),_.zoom0=_.object.zoom},this.reset=function(){_.target.copy(_.target0),_.object.position.copy(_.position0),_.object.zoom=_.zoom0,_.object.updateProjectionMatrix(),_.dispatchEvent(_changeEvent),_.update(),v=x.NONE},this.update=function(){const z=new Vector3,j=new Quaternion().setFromUnitVectors(f.up,new Vector3(0,1,0)),ve=j.clone().invert(),_e=new Vector3,Ae=new Quaternion,Le=2*Math.PI;return function(){const Ue=_.object.position;z.copy(Ue).sub(_.target),z.applyQuaternion(j),M.setFromVector3(z),_.autoRotate&&v===x.NONE&&k($()),_.enableDamping?(M.theta+=S.theta*_.dampingFactor,M.phi+=S.phi*_.dampingFactor):(M.theta+=S.theta,M.phi+=S.phi);let He=_.minAzimuthAngle,$e=_.maxAzimuthAngle;return isFinite(He)&&isFinite($e)&&(He<-Math.PI?He+=Le:He>Math.PI&&(He-=Le),$e<-Math.PI?$e+=Le:$e>Math.PI&&($e-=Le),He<=$e?M.theta=Math.max(He,Math.min($e,M.theta)):M.theta=M.theta>(He+$e)/2?Math.max(He,M.theta):Math.min($e,M.theta)),M.phi=Math.max(_.minPolarAngle,Math.min(_.maxPolarAngle,M.phi)),M.makeSafe(),M.radius*=w,M.radius=Math.max(_.minDistance,Math.min(_.maxDistance,M.radius)),_.enableDamping===!0?_.target.addScaledVector(T,_.dampingFactor):_.target.add(T),z.setFromSpherical(M),z.applyQuaternion(ve),Ue.copy(_.target).add(z),_.object.lookAt(_.target),_.enableDamping===!0?(S.theta*=1-_.dampingFactor,S.phi*=1-_.dampingFactor,T.multiplyScalar(1-_.dampingFactor)):(S.set(0,0,0),T.set(0,0,0)),w=1,A||_e.distanceToSquared(_.object.position)>y||8*(1-Ae.dot(_.object.quaternion))>y?(_.dispatchEvent(_changeEvent),_e.copy(_.object.position),Ae.copy(_.object.quaternion),A=!1,!0):!1}}(),this.dispose=function(){_.domElement.removeEventListener("contextmenu",ne),_.domElement.removeEventListener("pointerdown",Je),_.domElement.removeEventListener("pointercancel",et),_.domElement.removeEventListener("wheel",ot),_.domElement.removeEventListener("pointermove",it),_.domElement.removeEventListener("pointerup",Qe),_._domElementKeyEvents!==null&&(_._domElementKeyEvents.removeEventListener("keydown",rt),_._domElementKeyEvents=null)};const _=this,x={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let v=x.NONE;const y=1e-6,M=new Spherical,S=new Spherical;let w=1;const T=new Vector3;let A=!1;const E=new Vector2,R=new Vector2,P=new Vector2,C=new Vector2,L=new Vector2,D=new Vector2,U=new Vector2,I=new Vector2,O=new Vector2,V=[],H={};function $(){return 2*Math.PI/60/60*_.autoRotateSpeed}function F(){return Math.pow(.95,_.zoomSpeed)}function k(z){S.theta-=z}function Y(z){S.phi-=z}const oe=function(){const z=new Vector3;return function(ve,_e){z.setFromMatrixColumn(_e,0),z.multiplyScalar(-ve),T.add(z)}}(),ae=function(){const z=new Vector3;return function(ve,_e){_.screenSpacePanning===!0?z.setFromMatrixColumn(_e,1):(z.setFromMatrixColumn(_e,0),z.crossVectors(_.object.up,z)),z.multiplyScalar(ve),T.add(z)}}(),K=function(){const z=new Vector3;return function(ve,_e){const Ae=_.domElement;if(_.object.isPerspectiveCamera){const Le=_.object.position;z.copy(Le).sub(_.target);let Ee=z.length();Ee*=Math.tan(_.object.fov/2*Math.PI/180),oe(2*ve*Ee/Ae.clientHeight,_.object.matrix),ae(2*_e*Ee/Ae.clientHeight,_.object.matrix)}else _.object.isOrthographicCamera?(oe(ve*(_.object.right-_.object.left)/_.object.zoom/Ae.clientWidth,_.object.matrix),ae(_e*(_.object.top-_.object.bottom)/_.object.zoom/Ae.clientHeight,_.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),_.enablePan=!1)}}();function X(z){_.object.isPerspectiveCamera?w/=z:_.object.isOrthographicCamera?(_.object.zoom=Math.max(_.minZoom,Math.min(_.maxZoom,_.object.zoom*z)),_.object.updateProjectionMatrix(),A=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),_.enableZoom=!1)}function ee(z){_.object.isPerspectiveCamera?w*=z:_.object.isOrthographicCamera?(_.object.zoom=Math.max(_.minZoom,Math.min(_.maxZoom,_.object.zoom/z)),_.object.updateProjectionMatrix(),A=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),_.enableZoom=!1)}function le(z){E.set(z.clientX,z.clientY)}function de(z){U.set(z.clientX,z.clientY)}function se(z){C.set(z.clientX,z.clientY)}function fe(z){R.set(z.clientX,z.clientY),P.subVectors(R,E).multiplyScalar(_.rotateSpeed);const j=_.domElement;k(2*Math.PI*P.x/j.clientHeight),Y(2*Math.PI*P.y/j.clientHeight),E.copy(R),_.update()}function ce(z){I.set(z.clientX,z.clientY),O.subVectors(I,U),O.y>0?X(F()):O.y<0&&ee(F()),U.copy(I),_.update()}function Re(z){L.set(z.clientX,z.clientY),D.subVectors(L,C).multiplyScalar(_.panSpeed),K(D.x,D.y),C.copy(L),_.update()}function Q(z){z.deltaY<0?ee(F()):z.deltaY>0&&X(F()),_.update()}function he(z){let j=!1;switch(z.code){case _.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?Y(2*Math.PI*_.rotateSpeed/_.domElement.clientHeight):K(0,_.keyPanSpeed),j=!0;break;case _.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?Y(-2*Math.PI*_.rotateSpeed/_.domElement.clientHeight):K(0,-_.keyPanSpeed),j=!0;break;case _.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?k(2*Math.PI*_.rotateSpeed/_.domElement.clientHeight):K(_.keyPanSpeed,0),j=!0;break;case _.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?k(-2*Math.PI*_.rotateSpeed/_.domElement.clientHeight):K(-_.keyPanSpeed,0),j=!0;break}j&&(z.preventDefault(),_.update())}function ge(){if(V.length===1)E.set(V[0].pageX,V[0].pageY);else{const z=.5*(V[0].pageX+V[1].pageX),j=.5*(V[0].pageY+V[1].pageY);E.set(z,j)}}function Z(){if(V.length===1)C.set(V[0].pageX,V[0].pageY);else{const z=.5*(V[0].pageX+V[1].pageX),j=.5*(V[0].pageY+V[1].pageY);C.set(z,j)}}function Me(){const z=V[0].pageX-V[1].pageX,j=V[0].pageY-V[1].pageY,ve=Math.sqrt(z*z+j*j);U.set(0,ve)}function be(){_.enableZoom&&Me(),_.enablePan&&Z()}function we(){_.enableZoom&&Me(),_.enableRotate&&ge()}function Se(z){if(V.length==1)R.set(z.pageX,z.pageY);else{const ve=Ce(z),_e=.5*(z.pageX+ve.x),Ae=.5*(z.pageY+ve.y);R.set(_e,Ae)}P.subVectors(R,E).multiplyScalar(_.rotateSpeed);const j=_.domElement;k(2*Math.PI*P.x/j.clientHeight),Y(2*Math.PI*P.y/j.clientHeight),E.copy(R)}function De(z){if(V.length===1)L.set(z.pageX,z.pageY);else{const j=Ce(z),ve=.5*(z.pageX+j.x),_e=.5*(z.pageY+j.y);L.set(ve,_e)}D.subVectors(L,C).multiplyScalar(_.panSpeed),K(D.x,D.y),C.copy(L)}function Ne(z){const j=Ce(z),ve=z.pageX-j.x,_e=z.pageY-j.y,Ae=Math.sqrt(ve*ve+_e*_e);I.set(0,Ae),O.set(0,Math.pow(I.y/U.y,_.zoomSpeed)),X(O.y),U.copy(I)}function Fe(z){_.enableZoom&&Ne(z),_.enablePan&&De(z)}function ze(z){_.enableZoom&&Ne(z),_.enableRotate&&Se(z)}function Je(z){_.enabled!==!1&&(V.length===0&&(_.domElement.setPointerCapture(z.pointerId),_.domElement.addEventListener("pointermove",it),_.domElement.addEventListener("pointerup",Qe)),pe(z),z.pointerType==="touch"?G(z):qe(z))}function it(z){_.enabled!==!1&&(z.pointerType==="touch"?N(z):Xe(z))}function Qe(z){me(z),V.length===0&&(_.domElement.releasePointerCapture(z.pointerId),_.domElement.removeEventListener("pointermove",it),_.domElement.removeEventListener("pointerup",Qe)),_.dispatchEvent(_endEvent),v=x.NONE}function et(z){me(z)}function qe(z){let j;switch(z.button){case 0:j=_.mouseButtons.LEFT;break;case 1:j=_.mouseButtons.MIDDLE;break;case 2:j=_.mouseButtons.RIGHT;break;default:j=-1}switch(j){case MOUSE.DOLLY:if(_.enableZoom===!1)return;de(z),v=x.DOLLY;break;case MOUSE.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(_.enablePan===!1)return;se(z),v=x.PAN}else{if(_.enableRotate===!1)return;le(z),v=x.ROTATE}break;case MOUSE.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(_.enableRotate===!1)return;le(z),v=x.ROTATE}else{if(_.enablePan===!1)return;se(z),v=x.PAN}break;default:v=x.NONE}v!==x.NONE&&_.dispatchEvent(_startEvent)}function Xe(z){switch(v){case x.ROTATE:if(_.enableRotate===!1)return;fe(z);break;case x.DOLLY:if(_.enableZoom===!1)return;ce(z);break;case x.PAN:if(_.enablePan===!1)return;Re(z);break}}function ot(z){_.enabled===!1||_.enableZoom===!1||v!==x.NONE||(z.preventDefault(),_.dispatchEvent(_startEvent),Q(z),_.dispatchEvent(_endEvent))}function rt(z){_.enabled===!1||_.enablePan===!1||he(z)}function G(z){switch(xe(z),V.length){case 1:switch(_.touches.ONE){case TOUCH.ROTATE:if(_.enableRotate===!1)return;ge(),v=x.TOUCH_ROTATE;break;case TOUCH.PAN:if(_.enablePan===!1)return;Z(),v=x.TOUCH_PAN;break;default:v=x.NONE}break;case 2:switch(_.touches.TWO){case TOUCH.DOLLY_PAN:if(_.enableZoom===!1&&_.enablePan===!1)return;be(),v=x.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(_.enableZoom===!1&&_.enableRotate===!1)return;we(),v=x.TOUCH_DOLLY_ROTATE;break;default:v=x.NONE}break;default:v=x.NONE}v!==x.NONE&&_.dispatchEvent(_startEvent)}function N(z){switch(xe(z),v){case x.TOUCH_ROTATE:if(_.enableRotate===!1)return;Se(z),_.update();break;case x.TOUCH_PAN:if(_.enablePan===!1)return;De(z),_.update();break;case x.TOUCH_DOLLY_PAN:if(_.enableZoom===!1&&_.enablePan===!1)return;Fe(z),_.update();break;case x.TOUCH_DOLLY_ROTATE:if(_.enableZoom===!1&&_.enableRotate===!1)return;ze(z),_.update();break;default:v=x.NONE}}function ne(z){_.enabled!==!1&&z.preventDefault()}function pe(z){V.push(z)}function me(z){delete H[z.pointerId];for(let j=0;j<V.length;j++)if(V[j].pointerId==z.pointerId){V.splice(j,1);return}}function xe(z){let j=H[z.pointerId];j===void 0&&(j=new Vector2,H[z.pointerId]=j),j.set(z.pageX,z.pageY)}function Ce(z){const j=z.pointerId===V[0].pointerId?V[1]:V[0];return H[j.pointerId]}_.domElement.addEventListener("contextmenu",ne),_.domElement.addEventListener("pointerdown",Je),_.domElement.addEventListener("pointercancel",et),_.domElement.addEventListener("wheel",ot,{passive:!1}),this.update()}}function toTrianglesDrawMode(b,f){if(f===TrianglesDrawMode)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),b;if(f===TriangleFanDrawMode||f===TriangleStripDrawMode){let m=b.getIndex();if(m===null){const y=[],M=b.getAttribute("position");if(M!==void 0){for(let S=0;S<M.count;S++)y.push(S);b.setIndex(y),m=b.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),b}const _=m.count-2,x=[];if(f===TriangleFanDrawMode)for(let y=1;y<=_;y++)x.push(m.getX(0)),x.push(m.getX(y)),x.push(m.getX(y+1));else for(let y=0;y<_;y++)y%2===0?(x.push(m.getX(y)),x.push(m.getX(y+1)),x.push(m.getX(y+2))):(x.push(m.getX(y+2)),x.push(m.getX(y+1)),x.push(m.getX(y)));x.length/3!==_&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const v=b.clone();return v.setIndex(x),v.clearGroups(),v}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",f),b}class GLTFLoader extends Loader{constructor(f){super(f),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(m){return new GLTFMaterialsClearcoatExtension(m)}),this.register(function(m){return new GLTFTextureBasisUExtension(m)}),this.register(function(m){return new GLTFTextureWebPExtension(m)}),this.register(function(m){return new GLTFTextureAVIFExtension(m)}),this.register(function(m){return new GLTFMaterialsSheenExtension(m)}),this.register(function(m){return new GLTFMaterialsTransmissionExtension(m)}),this.register(function(m){return new GLTFMaterialsVolumeExtension(m)}),this.register(function(m){return new GLTFMaterialsIorExtension(m)}),this.register(function(m){return new GLTFMaterialsEmissiveStrengthExtension(m)}),this.register(function(m){return new GLTFMaterialsSpecularExtension(m)}),this.register(function(m){return new GLTFMaterialsIridescenceExtension(m)}),this.register(function(m){return new GLTFLightsExtension(m)}),this.register(function(m){return new GLTFMeshoptCompression(m)}),this.register(function(m){return new GLTFMeshGpuInstancing(m)})}load(f,m,_,x){const v=this;let y;this.resourcePath!==""?y=this.resourcePath:this.path!==""?y=this.path:y=LoaderUtils.extractUrlBase(f),this.manager.itemStart(f);const M=function(w){x?x(w):console.error(w),v.manager.itemError(f),v.manager.itemEnd(f)},S=new FileLoader(this.manager);S.setPath(this.path),S.setResponseType("arraybuffer"),S.setRequestHeader(this.requestHeader),S.setWithCredentials(this.withCredentials),S.load(f,function(w){try{v.parse(w,y,function(T){m(T),v.manager.itemEnd(f)},M)}catch(T){M(T)}},_,M)}setDRACOLoader(f){return this.dracoLoader=f,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(f){return this.ktx2Loader=f,this}setMeshoptDecoder(f){return this.meshoptDecoder=f,this}register(f){return this.pluginCallbacks.indexOf(f)===-1&&this.pluginCallbacks.push(f),this}unregister(f){return this.pluginCallbacks.indexOf(f)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(f),1),this}parse(f,m,_,x){let v;const y={},M={},S=new TextDecoder;if(typeof f=="string")v=JSON.parse(f);else if(f instanceof ArrayBuffer)if(S.decode(new Uint8Array(f,0,4))===BINARY_EXTENSION_HEADER_MAGIC){try{y[EXTENSIONS.KHR_BINARY_GLTF]=new GLTFBinaryExtension(f)}catch(A){x&&x(A);return}v=JSON.parse(y[EXTENSIONS.KHR_BINARY_GLTF].content)}else v=JSON.parse(S.decode(f));else v=f;if(v.asset===void 0||v.asset.version[0]<2){x&&x(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const w=new GLTFParser(v,{path:m||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});w.fileLoader.setRequestHeader(this.requestHeader);for(let T=0;T<this.pluginCallbacks.length;T++){const A=this.pluginCallbacks[T](w);M[A.name]=A,y[A.name]=!0}if(v.extensionsUsed)for(let T=0;T<v.extensionsUsed.length;++T){const A=v.extensionsUsed[T],E=v.extensionsRequired||[];switch(A){case EXTENSIONS.KHR_MATERIALS_UNLIT:y[A]=new GLTFMaterialsUnlitExtension;break;case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:y[A]=new GLTFDracoMeshCompressionExtension(v,this.dracoLoader);break;case EXTENSIONS.KHR_TEXTURE_TRANSFORM:y[A]=new GLTFTextureTransformExtension;break;case EXTENSIONS.KHR_MESH_QUANTIZATION:y[A]=new GLTFMeshQuantizationExtension;break;default:E.indexOf(A)>=0&&M[A]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+A+'".')}}w.setExtensions(y),w.setPlugins(M),w.parse(_,x)}parseAsync(f,m){const _=this;return new Promise(function(x,v){_.parse(f,m,x,v)})}}function GLTFRegistry(){let b={};return{get:function(f){return b[f]},add:function(f,m){b[f]=m},remove:function(f){delete b[f]},removeAll:function(){b={}}}}const EXTENSIONS={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GLTFLightsExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const f=this.parser,m=this.parser.json.nodes||[];for(let _=0,x=m.length;_<x;_++){const v=m[_];v.extensions&&v.extensions[this.name]&&v.extensions[this.name].light!==void 0&&f._addNodeRef(this.cache,v.extensions[this.name].light)}}_loadLight(f){const m=this.parser,_="light:"+f;let x=m.cache.get(_);if(x)return x;const v=m.json,S=((v.extensions&&v.extensions[this.name]||{}).lights||[])[f];let w;const T=new Color(16777215);S.color!==void 0&&T.fromArray(S.color);const A=S.range!==void 0?S.range:0;switch(S.type){case"directional":w=new DirectionalLight(T),w.target.position.set(0,0,-1),w.add(w.target);break;case"point":w=new PointLight(T),w.distance=A;break;case"spot":w=new SpotLight(T),w.distance=A,S.spot=S.spot||{},S.spot.innerConeAngle=S.spot.innerConeAngle!==void 0?S.spot.innerConeAngle:0,S.spot.outerConeAngle=S.spot.outerConeAngle!==void 0?S.spot.outerConeAngle:Math.PI/4,w.angle=S.spot.outerConeAngle,w.penumbra=1-S.spot.innerConeAngle/S.spot.outerConeAngle,w.target.position.set(0,0,-1),w.add(w.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+S.type)}return w.position.set(0,0,0),w.decay=2,assignExtrasToUserData(w,S),S.intensity!==void 0&&(w.intensity=S.intensity),w.name=m.createUniqueName(S.name||"light_"+f),x=Promise.resolve(w),m.cache.add(_,x),x}getDependency(f,m){if(f==="light")return this._loadLight(m)}createNodeAttachment(f){const m=this,_=this.parser,v=_.json.nodes[f],M=(v.extensions&&v.extensions[this.name]||{}).light;return M===void 0?null:this._loadLight(M).then(function(S){return _._getNodeRef(m.cache,M,S)})}}class GLTFMaterialsUnlitExtension{constructor(){this.name=EXTENSIONS.KHR_MATERIALS_UNLIT}getMaterialType(){return MeshBasicMaterial}extendParams(f,m,_){const x=[];f.color=new Color(1,1,1),f.opacity=1;const v=m.pbrMetallicRoughness;if(v){if(Array.isArray(v.baseColorFactor)){const y=v.baseColorFactor;f.color.fromArray(y),f.opacity=y[3]}v.baseColorTexture!==void 0&&x.push(_.assignTexture(f,"map",v.baseColorTexture,sRGBEncoding))}return Promise.all(x)}}class GLTFMaterialsEmissiveStrengthExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(f,m){const x=this.parser.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=x.extensions[this.name].emissiveStrength;return v!==void 0&&(m.emissiveIntensity=v),Promise.resolve()}}class GLTFMaterialsClearcoatExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_CLEARCOAT}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const _=this.parser,x=_.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=[],y=x.extensions[this.name];if(y.clearcoatFactor!==void 0&&(m.clearcoat=y.clearcoatFactor),y.clearcoatTexture!==void 0&&v.push(_.assignTexture(m,"clearcoatMap",y.clearcoatTexture)),y.clearcoatRoughnessFactor!==void 0&&(m.clearcoatRoughness=y.clearcoatRoughnessFactor),y.clearcoatRoughnessTexture!==void 0&&v.push(_.assignTexture(m,"clearcoatRoughnessMap",y.clearcoatRoughnessTexture)),y.clearcoatNormalTexture!==void 0&&(v.push(_.assignTexture(m,"clearcoatNormalMap",y.clearcoatNormalTexture)),y.clearcoatNormalTexture.scale!==void 0)){const M=y.clearcoatNormalTexture.scale;m.clearcoatNormalScale=new Vector2(M,M)}return Promise.all(v)}}class GLTFMaterialsIridescenceExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_IRIDESCENCE}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const _=this.parser,x=_.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=[],y=x.extensions[this.name];return y.iridescenceFactor!==void 0&&(m.iridescence=y.iridescenceFactor),y.iridescenceTexture!==void 0&&v.push(_.assignTexture(m,"iridescenceMap",y.iridescenceTexture)),y.iridescenceIor!==void 0&&(m.iridescenceIOR=y.iridescenceIor),m.iridescenceThicknessRange===void 0&&(m.iridescenceThicknessRange=[100,400]),y.iridescenceThicknessMinimum!==void 0&&(m.iridescenceThicknessRange[0]=y.iridescenceThicknessMinimum),y.iridescenceThicknessMaximum!==void 0&&(m.iridescenceThicknessRange[1]=y.iridescenceThicknessMaximum),y.iridescenceThicknessTexture!==void 0&&v.push(_.assignTexture(m,"iridescenceThicknessMap",y.iridescenceThicknessTexture)),Promise.all(v)}}class GLTFMaterialsSheenExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_SHEEN}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const _=this.parser,x=_.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=[];m.sheenColor=new Color(0,0,0),m.sheenRoughness=0,m.sheen=1;const y=x.extensions[this.name];return y.sheenColorFactor!==void 0&&m.sheenColor.fromArray(y.sheenColorFactor),y.sheenRoughnessFactor!==void 0&&(m.sheenRoughness=y.sheenRoughnessFactor),y.sheenColorTexture!==void 0&&v.push(_.assignTexture(m,"sheenColorMap",y.sheenColorTexture,sRGBEncoding)),y.sheenRoughnessTexture!==void 0&&v.push(_.assignTexture(m,"sheenRoughnessMap",y.sheenRoughnessTexture)),Promise.all(v)}}class GLTFMaterialsTransmissionExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_TRANSMISSION}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const _=this.parser,x=_.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=[],y=x.extensions[this.name];return y.transmissionFactor!==void 0&&(m.transmission=y.transmissionFactor),y.transmissionTexture!==void 0&&v.push(_.assignTexture(m,"transmissionMap",y.transmissionTexture)),Promise.all(v)}}class GLTFMaterialsVolumeExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_VOLUME}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const _=this.parser,x=_.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=[],y=x.extensions[this.name];m.thickness=y.thicknessFactor!==void 0?y.thicknessFactor:0,y.thicknessTexture!==void 0&&v.push(_.assignTexture(m,"thicknessMap",y.thicknessTexture)),m.attenuationDistance=y.attenuationDistance||1/0;const M=y.attenuationColor||[1,1,1];return m.attenuationColor=new Color(M[0],M[1],M[2]),Promise.all(v)}}class GLTFMaterialsIorExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_IOR}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const x=this.parser.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=x.extensions[this.name];return m.ior=v.ior!==void 0?v.ior:1.5,Promise.resolve()}}class GLTFMaterialsSpecularExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_MATERIALS_SPECULAR}getMaterialType(f){const _=this.parser.json.materials[f];return!_.extensions||!_.extensions[this.name]?null:MeshPhysicalMaterial}extendMaterialParams(f,m){const _=this.parser,x=_.json.materials[f];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const v=[],y=x.extensions[this.name];m.specularIntensity=y.specularFactor!==void 0?y.specularFactor:1,y.specularTexture!==void 0&&v.push(_.assignTexture(m,"specularIntensityMap",y.specularTexture));const M=y.specularColorFactor||[1,1,1];return m.specularColor=new Color(M[0],M[1],M[2]),y.specularColorTexture!==void 0&&v.push(_.assignTexture(m,"specularColorMap",y.specularColorTexture,sRGBEncoding)),Promise.all(v)}}class GLTFTextureBasisUExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.KHR_TEXTURE_BASISU}loadTexture(f){const m=this.parser,_=m.json,x=_.textures[f];if(!x.extensions||!x.extensions[this.name])return null;const v=x.extensions[this.name],y=m.options.ktx2Loader;if(!y){if(_.extensionsRequired&&_.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return m.loadTextureImage(f,v.source,y)}}class GLTFTextureWebPExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(f){const m=this.name,_=this.parser,x=_.json,v=x.textures[f];if(!v.extensions||!v.extensions[m])return null;const y=v.extensions[m],M=x.images[y.source];let S=_.textureLoader;if(M.uri){const w=_.options.manager.getHandler(M.uri);w!==null&&(S=w)}return this.detectSupport().then(function(w){if(w)return _.loadTextureImage(f,y.source,S);if(x.extensionsRequired&&x.extensionsRequired.indexOf(m)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return _.loadTexture(f)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(f){const m=new Image;m.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",m.onload=m.onerror=function(){f(m.height===1)}})),this.isSupported}}class GLTFTextureAVIFExtension{constructor(f){this.parser=f,this.name=EXTENSIONS.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(f){const m=this.name,_=this.parser,x=_.json,v=x.textures[f];if(!v.extensions||!v.extensions[m])return null;const y=v.extensions[m],M=x.images[y.source];let S=_.textureLoader;if(M.uri){const w=_.options.manager.getHandler(M.uri);w!==null&&(S=w)}return this.detectSupport().then(function(w){if(w)return _.loadTextureImage(f,y.source,S);if(x.extensionsRequired&&x.extensionsRequired.indexOf(m)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return _.loadTexture(f)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(f){const m=new Image;m.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",m.onload=m.onerror=function(){f(m.height===1)}})),this.isSupported}}class GLTFMeshoptCompression{constructor(f){this.name=EXTENSIONS.EXT_MESHOPT_COMPRESSION,this.parser=f}loadBufferView(f){const m=this.parser.json,_=m.bufferViews[f];if(_.extensions&&_.extensions[this.name]){const x=_.extensions[this.name],v=this.parser.getDependency("buffer",x.buffer),y=this.parser.options.meshoptDecoder;if(!y||!y.supported){if(m.extensionsRequired&&m.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return v.then(function(M){const S=x.byteOffset||0,w=x.byteLength||0,T=x.count,A=x.byteStride,E=new Uint8Array(M,S,w);return y.decodeGltfBufferAsync?y.decodeGltfBufferAsync(T,A,E,x.mode,x.filter).then(function(R){return R.buffer}):y.ready.then(function(){const R=new ArrayBuffer(T*A);return y.decodeGltfBuffer(new Uint8Array(R),T,A,E,x.mode,x.filter),R})})}else return null}}class GLTFMeshGpuInstancing{constructor(f){this.name=EXTENSIONS.EXT_MESH_GPU_INSTANCING,this.parser=f}createNodeMesh(f){const m=this.parser.json,_=m.nodes[f];if(!_.extensions||!_.extensions[this.name]||_.mesh===void 0)return null;const x=m.meshes[_.mesh];for(const w of x.primitives)if(w.mode!==WEBGL_CONSTANTS.TRIANGLES&&w.mode!==WEBGL_CONSTANTS.TRIANGLE_STRIP&&w.mode!==WEBGL_CONSTANTS.TRIANGLE_FAN&&w.mode!==void 0)return null;const y=_.extensions[this.name].attributes,M=[],S={};for(const w in y)M.push(this.parser.getDependency("accessor",y[w]).then(T=>(S[w]=T,S[w])));return M.length<1?null:(M.push(this.parser.createNodeMesh(f)),Promise.all(M).then(w=>{const T=w.pop(),A=T.isGroup?T.children:[T],E=w[0].count,R=[];for(const P of A){const C=new Matrix4,L=new Vector3,D=new Quaternion,U=new Vector3(1,1,1),I=new InstancedMesh(P.geometry,P.material,E);for(let O=0;O<E;O++)S.TRANSLATION&&L.fromBufferAttribute(S.TRANSLATION,O),S.ROTATION&&D.fromBufferAttribute(S.ROTATION,O),S.SCALE&&U.fromBufferAttribute(S.SCALE,O),I.setMatrixAt(O,C.compose(L,D,U));for(const O in S)O!=="TRANSLATION"&&O!=="ROTATION"&&O!=="SCALE"&&P.geometry.setAttribute(O,S[O]);Object3D.prototype.copy.call(I,P),I.frustumCulled=!1,this.parser.assignFinalMaterial(I),R.push(I)}return T.isGroup?(T.clear(),T.add(...R),T):R[0]}))}}const BINARY_EXTENSION_HEADER_MAGIC="glTF",BINARY_EXTENSION_HEADER_LENGTH=12,BINARY_EXTENSION_CHUNK_TYPES={JSON:1313821514,BIN:5130562};class GLTFBinaryExtension{constructor(f){this.name=EXTENSIONS.KHR_BINARY_GLTF,this.content=null,this.body=null;const m=new DataView(f,0,BINARY_EXTENSION_HEADER_LENGTH),_=new TextDecoder;if(this.header={magic:_.decode(new Uint8Array(f.slice(0,4))),version:m.getUint32(4,!0),length:m.getUint32(8,!0)},this.header.magic!==BINARY_EXTENSION_HEADER_MAGIC)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const x=this.header.length-BINARY_EXTENSION_HEADER_LENGTH,v=new DataView(f,BINARY_EXTENSION_HEADER_LENGTH);let y=0;for(;y<x;){const M=v.getUint32(y,!0);y+=4;const S=v.getUint32(y,!0);if(y+=4,S===BINARY_EXTENSION_CHUNK_TYPES.JSON){const w=new Uint8Array(f,BINARY_EXTENSION_HEADER_LENGTH+y,M);this.content=_.decode(w)}else if(S===BINARY_EXTENSION_CHUNK_TYPES.BIN){const w=BINARY_EXTENSION_HEADER_LENGTH+y;this.body=f.slice(w,w+M)}y+=M}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class GLTFDracoMeshCompressionExtension{constructor(f,m){if(!m)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=EXTENSIONS.KHR_DRACO_MESH_COMPRESSION,this.json=f,this.dracoLoader=m,this.dracoLoader.preload()}decodePrimitive(f,m){const _=this.json,x=this.dracoLoader,v=f.extensions[this.name].bufferView,y=f.extensions[this.name].attributes,M={},S={},w={};for(const T in y){const A=ATTRIBUTES[T]||T.toLowerCase();M[A]=y[T]}for(const T in f.attributes){const A=ATTRIBUTES[T]||T.toLowerCase();if(y[T]!==void 0){const E=_.accessors[f.attributes[T]],R=WEBGL_COMPONENT_TYPES[E.componentType];w[A]=R.name,S[A]=E.normalized===!0}}return m.getDependency("bufferView",v).then(function(T){return new Promise(function(A){x.decodeDracoFile(T,function(E){for(const R in E.attributes){const P=E.attributes[R],C=S[R];C!==void 0&&(P.normalized=C)}A(E)},M,w)})})}}class GLTFTextureTransformExtension{constructor(){this.name=EXTENSIONS.KHR_TEXTURE_TRANSFORM}extendTexture(f,m){return m.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),m.offset===void 0&&m.rotation===void 0&&m.scale===void 0||(f=f.clone(),m.offset!==void 0&&f.offset.fromArray(m.offset),m.rotation!==void 0&&(f.rotation=m.rotation),m.scale!==void 0&&f.repeat.fromArray(m.scale),f.needsUpdate=!0),f}}class GLTFMeshQuantizationExtension{constructor(){this.name=EXTENSIONS.KHR_MESH_QUANTIZATION}}class GLTFCubicSplineInterpolant extends Interpolant{constructor(f,m,_,x){super(f,m,_,x)}copySampleValue_(f){const m=this.resultBuffer,_=this.sampleValues,x=this.valueSize,v=f*x*3+x;for(let y=0;y!==x;y++)m[y]=_[v+y];return m}interpolate_(f,m,_,x){const v=this.resultBuffer,y=this.sampleValues,M=this.valueSize,S=M*2,w=M*3,T=x-m,A=(_-m)/T,E=A*A,R=E*A,P=f*w,C=P-w,L=-2*R+3*E,D=R-E,U=1-L,I=D-E+A;for(let O=0;O!==M;O++){const V=y[C+O+M],H=y[C+O+S]*T,$=y[P+O+M],F=y[P+O]*T;v[O]=U*V+I*H+L*$+D*F}return v}}const _q=new Quaternion;class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant{interpolate_(f,m,_,x){const v=super.interpolate_(f,m,_,x);return _q.fromArray(v).normalize().toArray(v),v}}const WEBGL_CONSTANTS={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},WEBGL_COMPONENT_TYPES={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},WEBGL_FILTERS={9728:NearestFilter,9729:LinearFilter,9984:NearestMipmapNearestFilter,9985:LinearMipmapNearestFilter,9986:NearestMipmapLinearFilter,9987:LinearMipmapLinearFilter},WEBGL_WRAPPINGS={33071:ClampToEdgeWrapping,33648:MirroredRepeatWrapping,10497:RepeatWrapping},WEBGL_TYPE_SIZES={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ATTRIBUTES={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},PATH_PROPERTIES={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},INTERPOLATION={CUBICSPLINE:void 0,LINEAR:InterpolateLinear,STEP:InterpolateDiscrete},ALPHA_MODES={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function createDefaultMaterial(b){return b.DefaultMaterial===void 0&&(b.DefaultMaterial=new MeshStandardMaterial({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:FrontSide})),b.DefaultMaterial}function addUnknownExtensionsToUserData(b,f,m){for(const _ in m.extensions)b[_]===void 0&&(f.userData.gltfExtensions=f.userData.gltfExtensions||{},f.userData.gltfExtensions[_]=m.extensions[_])}function assignExtrasToUserData(b,f){f.extras!==void 0&&(typeof f.extras=="object"?Object.assign(b.userData,f.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+f.extras))}function addMorphTargets(b,f,m){let _=!1,x=!1,v=!1;for(let w=0,T=f.length;w<T;w++){const A=f[w];if(A.POSITION!==void 0&&(_=!0),A.NORMAL!==void 0&&(x=!0),A.COLOR_0!==void 0&&(v=!0),_&&x&&v)break}if(!_&&!x&&!v)return Promise.resolve(b);const y=[],M=[],S=[];for(let w=0,T=f.length;w<T;w++){const A=f[w];if(_){const E=A.POSITION!==void 0?m.getDependency("accessor",A.POSITION):b.attributes.position;y.push(E)}if(x){const E=A.NORMAL!==void 0?m.getDependency("accessor",A.NORMAL):b.attributes.normal;M.push(E)}if(v){const E=A.COLOR_0!==void 0?m.getDependency("accessor",A.COLOR_0):b.attributes.color;S.push(E)}}return Promise.all([Promise.all(y),Promise.all(M),Promise.all(S)]).then(function(w){const T=w[0],A=w[1],E=w[2];return _&&(b.morphAttributes.position=T),x&&(b.morphAttributes.normal=A),v&&(b.morphAttributes.color=E),b.morphTargetsRelative=!0,b})}function updateMorphTargets(b,f){if(b.updateMorphTargets(),f.weights!==void 0)for(let m=0,_=f.weights.length;m<_;m++)b.morphTargetInfluences[m]=f.weights[m];if(f.extras&&Array.isArray(f.extras.targetNames)){const m=f.extras.targetNames;if(b.morphTargetInfluences.length===m.length){b.morphTargetDictionary={};for(let _=0,x=m.length;_<x;_++)b.morphTargetDictionary[m[_]]=_}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function createPrimitiveKey(b){const f=b.extensions&&b.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];let m;return f?m="draco:"+f.bufferView+":"+f.indices+":"+createAttributesKey(f.attributes):m=b.indices+":"+createAttributesKey(b.attributes)+":"+b.mode,m}function createAttributesKey(b){let f="";const m=Object.keys(b).sort();for(let _=0,x=m.length;_<x;_++)f+=m[_]+":"+b[m[_]]+";";return f}function getNormalizedComponentScale(b){switch(b){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function getImageURIMimeType(b){return b.search(/\.jpe?g($|\?)/i)>0||b.search(/^data\:image\/jpeg/)===0?"image/jpeg":b.search(/\.webp($|\?)/i)>0||b.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const _identityMatrix=new Matrix4;class GLTFParser{constructor(f={},m={}){this.json=f,this.extensions={},this.plugins={},this.options=m,this.cache=new GLTFRegistry,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let _=!1,x=!1,v=-1;typeof navigator<"u"&&(_=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,x=navigator.userAgent.indexOf("Firefox")>-1,v=x?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||_||x&&v<98?this.textureLoader=new TextureLoader(this.options.manager):this.textureLoader=new ImageBitmapLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new FileLoader(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(f){this.extensions=f}setPlugins(f){this.plugins=f}parse(f,m){const _=this,x=this.json,v=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(y){return y._markDefs&&y._markDefs()}),Promise.all(this._invokeAll(function(y){return y.beforeRoot&&y.beforeRoot()})).then(function(){return Promise.all([_.getDependencies("scene"),_.getDependencies("animation"),_.getDependencies("camera")])}).then(function(y){const M={scene:y[0][x.scene||0],scenes:y[0],animations:y[1],cameras:y[2],asset:x.asset,parser:_,userData:{}};addUnknownExtensionsToUserData(v,M,x),assignExtrasToUserData(M,x),Promise.all(_._invokeAll(function(S){return S.afterRoot&&S.afterRoot(M)})).then(function(){f(M)})}).catch(m)}_markDefs(){const f=this.json.nodes||[],m=this.json.skins||[],_=this.json.meshes||[];for(let x=0,v=m.length;x<v;x++){const y=m[x].joints;for(let M=0,S=y.length;M<S;M++)f[y[M]].isBone=!0}for(let x=0,v=f.length;x<v;x++){const y=f[x];y.mesh!==void 0&&(this._addNodeRef(this.meshCache,y.mesh),y.skin!==void 0&&(_[y.mesh].isSkinnedMesh=!0)),y.camera!==void 0&&this._addNodeRef(this.cameraCache,y.camera)}}_addNodeRef(f,m){m!==void 0&&(f.refs[m]===void 0&&(f.refs[m]=f.uses[m]=0),f.refs[m]++)}_getNodeRef(f,m,_){if(f.refs[m]<=1)return _;const x=_.clone(),v=(y,M)=>{const S=this.associations.get(y);S!=null&&this.associations.set(M,S);for(const[w,T]of y.children.entries())v(T,M.children[w])};return v(_,x),x.name+="_instance_"+f.uses[m]++,x}_invokeOne(f){const m=Object.values(this.plugins);m.push(this);for(let _=0;_<m.length;_++){const x=f(m[_]);if(x)return x}return null}_invokeAll(f){const m=Object.values(this.plugins);m.unshift(this);const _=[];for(let x=0;x<m.length;x++){const v=f(m[x]);v&&_.push(v)}return _}getDependency(f,m){const _=f+":"+m;let x=this.cache.get(_);if(!x){switch(f){case"scene":x=this.loadScene(m);break;case"node":x=this._invokeOne(function(v){return v.loadNode&&v.loadNode(m)});break;case"mesh":x=this._invokeOne(function(v){return v.loadMesh&&v.loadMesh(m)});break;case"accessor":x=this.loadAccessor(m);break;case"bufferView":x=this._invokeOne(function(v){return v.loadBufferView&&v.loadBufferView(m)});break;case"buffer":x=this.loadBuffer(m);break;case"material":x=this._invokeOne(function(v){return v.loadMaterial&&v.loadMaterial(m)});break;case"texture":x=this._invokeOne(function(v){return v.loadTexture&&v.loadTexture(m)});break;case"skin":x=this.loadSkin(m);break;case"animation":x=this._invokeOne(function(v){return v.loadAnimation&&v.loadAnimation(m)});break;case"camera":x=this.loadCamera(m);break;default:if(x=this._invokeOne(function(v){return v!=this&&v.getDependency&&v.getDependency(f,m)}),!x)throw new Error("Unknown type: "+f);break}this.cache.add(_,x)}return x}getDependencies(f){let m=this.cache.get(f);if(!m){const _=this,x=this.json[f+(f==="mesh"?"es":"s")]||[];m=Promise.all(x.map(function(v,y){return _.getDependency(f,y)})),this.cache.add(f,m)}return m}loadBuffer(f){const m=this.json.buffers[f],_=this.fileLoader;if(m.type&&m.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+m.type+" buffer type is not supported.");if(m.uri===void 0&&f===0)return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);const x=this.options;return new Promise(function(v,y){_.load(LoaderUtils.resolveURL(m.uri,x.path),v,void 0,function(){y(new Error('THREE.GLTFLoader: Failed to load buffer "'+m.uri+'".'))})})}loadBufferView(f){const m=this.json.bufferViews[f];return this.getDependency("buffer",m.buffer).then(function(_){const x=m.byteLength||0,v=m.byteOffset||0;return _.slice(v,v+x)})}loadAccessor(f){const m=this,_=this.json,x=this.json.accessors[f];if(x.bufferView===void 0&&x.sparse===void 0){const y=WEBGL_TYPE_SIZES[x.type],M=WEBGL_COMPONENT_TYPES[x.componentType],S=x.normalized===!0,w=new M(x.count*y);return Promise.resolve(new BufferAttribute(w,y,S))}const v=[];return x.bufferView!==void 0?v.push(this.getDependency("bufferView",x.bufferView)):v.push(null),x.sparse!==void 0&&(v.push(this.getDependency("bufferView",x.sparse.indices.bufferView)),v.push(this.getDependency("bufferView",x.sparse.values.bufferView))),Promise.all(v).then(function(y){const M=y[0],S=WEBGL_TYPE_SIZES[x.type],w=WEBGL_COMPONENT_TYPES[x.componentType],T=w.BYTES_PER_ELEMENT,A=T*S,E=x.byteOffset||0,R=x.bufferView!==void 0?_.bufferViews[x.bufferView].byteStride:void 0,P=x.normalized===!0;let C,L;if(R&&R!==A){const D=Math.floor(E/R),U="InterleavedBuffer:"+x.bufferView+":"+x.componentType+":"+D+":"+x.count;let I=m.cache.get(U);I||(C=new w(M,D*R,x.count*R/T),I=new InterleavedBuffer(C,R/T),m.cache.add(U,I)),L=new InterleavedBufferAttribute(I,S,E%R/T,P)}else M===null?C=new w(x.count*S):C=new w(M,E,x.count*S),L=new BufferAttribute(C,S,P);if(x.sparse!==void 0){const D=WEBGL_TYPE_SIZES.SCALAR,U=WEBGL_COMPONENT_TYPES[x.sparse.indices.componentType],I=x.sparse.indices.byteOffset||0,O=x.sparse.values.byteOffset||0,V=new U(y[1],I,x.sparse.count*D),H=new w(y[2],O,x.sparse.count*S);M!==null&&(L=new BufferAttribute(L.array.slice(),L.itemSize,L.normalized));for(let $=0,F=V.length;$<F;$++){const k=V[$];if(L.setX(k,H[$*S]),S>=2&&L.setY(k,H[$*S+1]),S>=3&&L.setZ(k,H[$*S+2]),S>=4&&L.setW(k,H[$*S+3]),S>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return L})}loadTexture(f){const m=this.json,_=this.options,v=m.textures[f].source,y=m.images[v];let M=this.textureLoader;if(y.uri){const S=_.manager.getHandler(y.uri);S!==null&&(M=S)}return this.loadTextureImage(f,v,M)}loadTextureImage(f,m,_){const x=this,v=this.json,y=v.textures[f],M=v.images[m],S=(M.uri||M.bufferView)+":"+y.sampler;if(this.textureCache[S])return this.textureCache[S];const w=this.loadImageSource(m,_).then(function(T){T.flipY=!1,T.name=y.name||M.name||"";const E=(v.samplers||{})[y.sampler]||{};return T.magFilter=WEBGL_FILTERS[E.magFilter]||LinearFilter,T.minFilter=WEBGL_FILTERS[E.minFilter]||LinearMipmapLinearFilter,T.wrapS=WEBGL_WRAPPINGS[E.wrapS]||RepeatWrapping,T.wrapT=WEBGL_WRAPPINGS[E.wrapT]||RepeatWrapping,x.associations.set(T,{textures:f}),T}).catch(function(){return null});return this.textureCache[S]=w,w}loadImageSource(f,m){const _=this,x=this.json,v=this.options;if(this.sourceCache[f]!==void 0)return this.sourceCache[f].then(A=>A.clone());const y=x.images[f],M=self.URL||self.webkitURL;let S=y.uri||"",w=!1;if(y.bufferView!==void 0)S=_.getDependency("bufferView",y.bufferView).then(function(A){w=!0;const E=new Blob([A],{type:y.mimeType});return S=M.createObjectURL(E),S});else if(y.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+f+" is missing URI and bufferView");const T=Promise.resolve(S).then(function(A){return new Promise(function(E,R){let P=E;m.isImageBitmapLoader===!0&&(P=function(C){const L=new Texture(C);L.needsUpdate=!0,E(L)}),m.load(LoaderUtils.resolveURL(A,v.path),P,void 0,R)})}).then(function(A){return w===!0&&M.revokeObjectURL(S),A.userData.mimeType=y.mimeType||getImageURIMimeType(y.uri),A}).catch(function(A){throw console.error("THREE.GLTFLoader: Couldn't load texture",S),A});return this.sourceCache[f]=T,T}assignTexture(f,m,_,x){const v=this;return this.getDependency("texture",_.index).then(function(y){if(!y)return null;if(_.texCoord!==void 0&&_.texCoord!=0&&!(m==="aoMap"&&_.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+_.texCoord+" for texture "+m+" not yet supported."),v.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]){const M=_.extensions!==void 0?_.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]:void 0;if(M){const S=v.associations.get(y);y=v.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(y,M),v.associations.set(y,S)}}return x!==void 0&&(y.encoding=x),f[m]=y,y})}assignFinalMaterial(f){const m=f.geometry;let _=f.material;const x=m.attributes.tangent===void 0,v=m.attributes.color!==void 0,y=m.attributes.normal===void 0;if(f.isPoints){const M="PointsMaterial:"+_.uuid;let S=this.cache.get(M);S||(S=new PointsMaterial,Material.prototype.copy.call(S,_),S.color.copy(_.color),S.map=_.map,S.sizeAttenuation=!1,this.cache.add(M,S)),_=S}else if(f.isLine){const M="LineBasicMaterial:"+_.uuid;let S=this.cache.get(M);S||(S=new LineBasicMaterial,Material.prototype.copy.call(S,_),S.color.copy(_.color),this.cache.add(M,S)),_=S}if(x||v||y){let M="ClonedMaterial:"+_.uuid+":";x&&(M+="derivative-tangents:"),v&&(M+="vertex-colors:"),y&&(M+="flat-shading:");let S=this.cache.get(M);S||(S=_.clone(),v&&(S.vertexColors=!0),y&&(S.flatShading=!0),x&&(S.normalScale&&(S.normalScale.y*=-1),S.clearcoatNormalScale&&(S.clearcoatNormalScale.y*=-1)),this.cache.add(M,S),this.associations.set(S,this.associations.get(_))),_=S}_.aoMap&&m.attributes.uv2===void 0&&m.attributes.uv!==void 0&&m.setAttribute("uv2",m.attributes.uv),f.material=_}getMaterialType(){return MeshStandardMaterial}loadMaterial(f){const m=this,_=this.json,x=this.extensions,v=_.materials[f];let y;const M={},S=v.extensions||{},w=[];if(S[EXTENSIONS.KHR_MATERIALS_UNLIT]){const A=x[EXTENSIONS.KHR_MATERIALS_UNLIT];y=A.getMaterialType(),w.push(A.extendParams(M,v,m))}else{const A=v.pbrMetallicRoughness||{};if(M.color=new Color(1,1,1),M.opacity=1,Array.isArray(A.baseColorFactor)){const E=A.baseColorFactor;M.color.fromArray(E),M.opacity=E[3]}A.baseColorTexture!==void 0&&w.push(m.assignTexture(M,"map",A.baseColorTexture,sRGBEncoding)),M.metalness=A.metallicFactor!==void 0?A.metallicFactor:1,M.roughness=A.roughnessFactor!==void 0?A.roughnessFactor:1,A.metallicRoughnessTexture!==void 0&&(w.push(m.assignTexture(M,"metalnessMap",A.metallicRoughnessTexture)),w.push(m.assignTexture(M,"roughnessMap",A.metallicRoughnessTexture))),y=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(f)}),w.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(f,M)})))}v.doubleSided===!0&&(M.side=DoubleSide);const T=v.alphaMode||ALPHA_MODES.OPAQUE;if(T===ALPHA_MODES.BLEND?(M.transparent=!0,M.depthWrite=!1):(M.transparent=!1,T===ALPHA_MODES.MASK&&(M.alphaTest=v.alphaCutoff!==void 0?v.alphaCutoff:.5)),v.normalTexture!==void 0&&y!==MeshBasicMaterial&&(w.push(m.assignTexture(M,"normalMap",v.normalTexture)),M.normalScale=new Vector2(1,1),v.normalTexture.scale!==void 0)){const A=v.normalTexture.scale;M.normalScale.set(A,A)}return v.occlusionTexture!==void 0&&y!==MeshBasicMaterial&&(w.push(m.assignTexture(M,"aoMap",v.occlusionTexture)),v.occlusionTexture.strength!==void 0&&(M.aoMapIntensity=v.occlusionTexture.strength)),v.emissiveFactor!==void 0&&y!==MeshBasicMaterial&&(M.emissive=new Color().fromArray(v.emissiveFactor)),v.emissiveTexture!==void 0&&y!==MeshBasicMaterial&&w.push(m.assignTexture(M,"emissiveMap",v.emissiveTexture,sRGBEncoding)),Promise.all(w).then(function(){const A=new y(M);return v.name&&(A.name=v.name),assignExtrasToUserData(A,v),m.associations.set(A,{materials:f}),v.extensions&&addUnknownExtensionsToUserData(x,A,v),A})}createUniqueName(f){const m=PropertyBinding.sanitizeNodeName(f||"");let _=m;for(let x=1;this.nodeNamesUsed[_];++x)_=m+"_"+x;return this.nodeNamesUsed[_]=!0,_}loadGeometries(f){const m=this,_=this.extensions,x=this.primitiveCache;function v(M){return _[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(M,m).then(function(S){return addPrimitiveAttributes(S,M,m)})}const y=[];for(let M=0,S=f.length;M<S;M++){const w=f[M],T=createPrimitiveKey(w),A=x[T];if(A)y.push(A.promise);else{let E;w.extensions&&w.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]?E=v(w):E=addPrimitiveAttributes(new BufferGeometry,w,m),x[T]={primitive:w,promise:E},y.push(E)}}return Promise.all(y)}loadMesh(f){const m=this,_=this.json,x=this.extensions,v=_.meshes[f],y=v.primitives,M=[];for(let S=0,w=y.length;S<w;S++){const T=y[S].material===void 0?createDefaultMaterial(this.cache):this.getDependency("material",y[S].material);M.push(T)}return M.push(m.loadGeometries(y)),Promise.all(M).then(function(S){const w=S.slice(0,S.length-1),T=S[S.length-1],A=[];for(let R=0,P=T.length;R<P;R++){const C=T[R],L=y[R];let D;const U=w[R];if(L.mode===WEBGL_CONSTANTS.TRIANGLES||L.mode===WEBGL_CONSTANTS.TRIANGLE_STRIP||L.mode===WEBGL_CONSTANTS.TRIANGLE_FAN||L.mode===void 0)D=v.isSkinnedMesh===!0?new SkinnedMesh(C,U):new Mesh(C,U),D.isSkinnedMesh===!0&&D.normalizeSkinWeights(),L.mode===WEBGL_CONSTANTS.TRIANGLE_STRIP?D.geometry=toTrianglesDrawMode(D.geometry,TriangleStripDrawMode):L.mode===WEBGL_CONSTANTS.TRIANGLE_FAN&&(D.geometry=toTrianglesDrawMode(D.geometry,TriangleFanDrawMode));else if(L.mode===WEBGL_CONSTANTS.LINES)D=new LineSegments(C,U);else if(L.mode===WEBGL_CONSTANTS.LINE_STRIP)D=new Line(C,U);else if(L.mode===WEBGL_CONSTANTS.LINE_LOOP)D=new LineLoop(C,U);else if(L.mode===WEBGL_CONSTANTS.POINTS)D=new Points(C,U);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+L.mode);Object.keys(D.geometry.morphAttributes).length>0&&updateMorphTargets(D,v),D.name=m.createUniqueName(v.name||"mesh_"+f),assignExtrasToUserData(D,v),L.extensions&&addUnknownExtensionsToUserData(x,D,L),m.assignFinalMaterial(D),A.push(D)}for(let R=0,P=A.length;R<P;R++)m.associations.set(A[R],{meshes:f,primitives:R});if(A.length===1)return A[0];const E=new Group;m.associations.set(E,{meshes:f});for(let R=0,P=A.length;R<P;R++)E.add(A[R]);return E})}loadCamera(f){let m;const _=this.json.cameras[f],x=_[_.type];if(!x){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return _.type==="perspective"?m=new PerspectiveCamera(MathUtils.radToDeg(x.yfov),x.aspectRatio||1,x.znear||1,x.zfar||2e6):_.type==="orthographic"&&(m=new OrthographicCamera(-x.xmag,x.xmag,x.ymag,-x.ymag,x.znear,x.zfar)),_.name&&(m.name=this.createUniqueName(_.name)),assignExtrasToUserData(m,_),Promise.resolve(m)}loadSkin(f){const m=this.json.skins[f],_=[];for(let x=0,v=m.joints.length;x<v;x++)_.push(this._loadNodeShallow(m.joints[x]));return m.inverseBindMatrices!==void 0?_.push(this.getDependency("accessor",m.inverseBindMatrices)):_.push(null),Promise.all(_).then(function(x){const v=x.pop(),y=x,M=[],S=[];for(let w=0,T=y.length;w<T;w++){const A=y[w];if(A){M.push(A);const E=new Matrix4;v!==null&&E.fromArray(v.array,w*16),S.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',m.joints[w])}return new Skeleton(M,S)})}loadAnimation(f){const _=this.json.animations[f],x=[],v=[],y=[],M=[],S=[];for(let w=0,T=_.channels.length;w<T;w++){const A=_.channels[w],E=_.samplers[A.sampler],R=A.target,P=R.node,C=_.parameters!==void 0?_.parameters[E.input]:E.input,L=_.parameters!==void 0?_.parameters[E.output]:E.output;x.push(this.getDependency("node",P)),v.push(this.getDependency("accessor",C)),y.push(this.getDependency("accessor",L)),M.push(E),S.push(R)}return Promise.all([Promise.all(x),Promise.all(v),Promise.all(y),Promise.all(M),Promise.all(S)]).then(function(w){const T=w[0],A=w[1],E=w[2],R=w[3],P=w[4],C=[];for(let D=0,U=T.length;D<U;D++){const I=T[D],O=A[D],V=E[D],H=R[D],$=P[D];if(I===void 0)continue;I.updateMatrix();let F;switch(PATH_PROPERTIES[$.path]){case PATH_PROPERTIES.weights:F=NumberKeyframeTrack;break;case PATH_PROPERTIES.rotation:F=QuaternionKeyframeTrack;break;case PATH_PROPERTIES.position:case PATH_PROPERTIES.scale:default:F=VectorKeyframeTrack;break}const k=I.name?I.name:I.uuid,Y=H.interpolation!==void 0?INTERPOLATION[H.interpolation]:InterpolateLinear,oe=[];PATH_PROPERTIES[$.path]===PATH_PROPERTIES.weights?I.traverse(function(K){K.morphTargetInfluences&&oe.push(K.name?K.name:K.uuid)}):oe.push(k);let ae=V.array;if(V.normalized){const K=getNormalizedComponentScale(ae.constructor),X=new Float32Array(ae.length);for(let ee=0,le=ae.length;ee<le;ee++)X[ee]=ae[ee]*K;ae=X}for(let K=0,X=oe.length;K<X;K++){const ee=new F(oe[K]+"."+PATH_PROPERTIES[$.path],O.array,ae,Y);H.interpolation==="CUBICSPLINE"&&(ee.createInterpolant=function(de){const se=this instanceof QuaternionKeyframeTrack?GLTFCubicSplineQuaternionInterpolant:GLTFCubicSplineInterpolant;return new se(this.times,this.values,this.getValueSize()/3,de)},ee.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),C.push(ee)}}const L=_.name?_.name:"animation_"+f;return new AnimationClip(L,void 0,C)})}createNodeMesh(f){const m=this.json,_=this,x=m.nodes[f];return x.mesh===void 0?null:_.getDependency("mesh",x.mesh).then(function(v){const y=_._getNodeRef(_.meshCache,x.mesh,v);return x.weights!==void 0&&y.traverse(function(M){if(M.isMesh)for(let S=0,w=x.weights.length;S<w;S++)M.morphTargetInfluences[S]=x.weights[S]}),y})}loadNode(f){const m=this.json,_=this,x=m.nodes[f],v=_._loadNodeShallow(f),y=[],M=x.children||[];for(let w=0,T=M.length;w<T;w++)y.push(_.getDependency("node",M[w]));const S=x.skin===void 0?Promise.resolve(null):_.getDependency("skin",x.skin);return Promise.all([v,Promise.all(y),S]).then(function(w){const T=w[0],A=w[1],E=w[2];E!==null&&T.traverse(function(R){R.isSkinnedMesh&&R.bind(E,_identityMatrix)});for(let R=0,P=A.length;R<P;R++)T.add(A[R]);return T})}_loadNodeShallow(f){const m=this.json,_=this.extensions,x=this;if(this.nodeCache[f]!==void 0)return this.nodeCache[f];const v=m.nodes[f],y=v.name?x.createUniqueName(v.name):"",M=[],S=x._invokeOne(function(w){return w.createNodeMesh&&w.createNodeMesh(f)});return S&&M.push(S),v.camera!==void 0&&M.push(x.getDependency("camera",v.camera).then(function(w){return x._getNodeRef(x.cameraCache,v.camera,w)})),x._invokeAll(function(w){return w.createNodeAttachment&&w.createNodeAttachment(f)}).forEach(function(w){M.push(w)}),this.nodeCache[f]=Promise.all(M).then(function(w){let T;if(v.isBone===!0?T=new Bone:w.length>1?T=new Group:w.length===1?T=w[0]:T=new Object3D,T!==w[0])for(let A=0,E=w.length;A<E;A++)T.add(w[A]);if(v.name&&(T.userData.name=v.name,T.name=y),assignExtrasToUserData(T,v),v.extensions&&addUnknownExtensionsToUserData(_,T,v),v.matrix!==void 0){const A=new Matrix4;A.fromArray(v.matrix),T.applyMatrix4(A)}else v.translation!==void 0&&T.position.fromArray(v.translation),v.rotation!==void 0&&T.quaternion.fromArray(v.rotation),v.scale!==void 0&&T.scale.fromArray(v.scale);return x.associations.has(T)||x.associations.set(T,{}),x.associations.get(T).nodes=f,T}),this.nodeCache[f]}loadScene(f){const m=this.extensions,_=this.json.scenes[f],x=this,v=new Group;_.name&&(v.name=x.createUniqueName(_.name)),assignExtrasToUserData(v,_),_.extensions&&addUnknownExtensionsToUserData(m,v,_);const y=_.nodes||[],M=[];for(let S=0,w=y.length;S<w;S++)M.push(x.getDependency("node",y[S]));return Promise.all(M).then(function(S){for(let T=0,A=S.length;T<A;T++)v.add(S[T]);const w=T=>{const A=new Map;for(const[E,R]of x.associations)(E instanceof Material||E instanceof Texture)&&A.set(E,R);return T.traverse(E=>{const R=x.associations.get(E);R!=null&&A.set(E,R)}),A};return x.associations=w(v),v})}}function computeBounds(b,f,m){const _=f.attributes,x=new Box3;if(_.POSITION!==void 0){const M=m.json.accessors[_.POSITION],S=M.min,w=M.max;if(S!==void 0&&w!==void 0){if(x.set(new Vector3(S[0],S[1],S[2]),new Vector3(w[0],w[1],w[2])),M.normalized){const T=getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[M.componentType]);x.min.multiplyScalar(T),x.max.multiplyScalar(T)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const v=f.targets;if(v!==void 0){const M=new Vector3,S=new Vector3;for(let w=0,T=v.length;w<T;w++){const A=v[w];if(A.POSITION!==void 0){const E=m.json.accessors[A.POSITION],R=E.min,P=E.max;if(R!==void 0&&P!==void 0){if(S.setX(Math.max(Math.abs(R[0]),Math.abs(P[0]))),S.setY(Math.max(Math.abs(R[1]),Math.abs(P[1]))),S.setZ(Math.max(Math.abs(R[2]),Math.abs(P[2]))),E.normalized){const C=getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[E.componentType]);S.multiplyScalar(C)}M.max(S)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}x.expandByVector(M)}b.boundingBox=x;const y=new Sphere;x.getCenter(y.center),y.radius=x.min.distanceTo(x.max)/2,b.boundingSphere=y}function addPrimitiveAttributes(b,f,m){const _=f.attributes,x=[];function v(y,M){return m.getDependency("accessor",y).then(function(S){b.setAttribute(M,S)})}for(const y in _){const M=ATTRIBUTES[y]||y.toLowerCase();M in b.attributes||x.push(v(_[y],M))}if(f.indices!==void 0&&!b.index){const y=m.getDependency("accessor",f.indices).then(function(M){b.setIndex(M)});x.push(y)}return assignExtrasToUserData(b,f),computeBounds(b,f,m),Promise.all(x).then(function(){return f.targets!==void 0?addMorphTargets(b,f.targets,m):b})}class Env{constructor(b,f,m){this.scene=b,this.start=f,this.end=m,new GLTFLoader().load("../3d_models/collision-world.glb",x=>{this.model=x,x.scene.position.set(-10,0,0),x.scene.scale.set(5,5,5),x.scene.children[0].material.transparent=!0,x.scene.traverse(v=>{v.isMesh})})}initGeometry(mapName){const plane_geom=new PlaneGeometry(1e3,1e3);plane_geom.rotateX(-Math.PI/2);const plane_mat=new MeshMatcapMaterial({color:9861888}),plane_mesh=new Mesh(plane_geom,plane_mat);plane_mesh.position.y-=50,this.scene.add(plane_mesh);const color=new Color,temp=new Object3D;let box_geom=new BoxGeometry(.25,.25,.25);const se_mat=new MeshMatcapMaterial({color:"white"});let mesh=new InstancedMesh(box_geom,se_mat,2);temp.position.set(this.start[0],this.start[1],this.start[1]),temp.updateMatrix(),mesh.setMatrixAt(0,temp.matrix),mesh.setColorAt(0,color.setHex(65280)),temp.position.set(this.end[0],this.end[1],this.end[2]),temp.updateMatrix(),mesh.setMatrixAt(1,temp.matrix),mesh.setColorAt(1,color.setHex(16711680)),this.seMesh=mesh,this.scene.add(mesh);const slice=mapName.slice(0,6);return slice=="Random"?eval("this."+slice+"('"+mapName+"')"):eval("this."+mapName+"()"),[this.instancedMesh,this.obstacles]}NewRandomCubes(){const b=new BoxGeometry(1,1,1),f=new MeshMatcapMaterial({color:"white",transparent:!0}),m=new InstancedMesh(b,f,3800),_=new Color,x=new Object3D;let v=[];for(let y=0;y<3800;y++)x.position.set(Math.floor(Math.random()*50),Math.floor(Math.random()*20),Math.floor(Math.random()*50)),!(x.position.x===this.start[0]&&x.position.y==this.start[1]&&x.position.z==this.start[2])&&(x.position.x===this.end[0]&&x.position.y==this.end[1]&&x.position.z==this.end[2]||(x.updateMatrix(),v.push([x.position.x,x.position.y,x.position.z]),x.position.set(x.position.x+.5,x.position.y+.5,x.position.z+.5),x.updateMatrix(),m.setMatrixAt(y,x.matrix),m.setColorAt(y,_.setHex(16777215))));this.scene.add(m),this.instancedMesh=m,this.obstacles=v}Random(b){const f=localStorage.getItem(b),m=JSON.parse(f),_=new BoxGeometry(1,1,1),x=new MeshMatcapMaterial({color:"white",transparent:!0}),v=new InstancedMesh(_,x,3800),y=new Color,M=new Object3D;for(const[S,w]of m.entries())M.position.set(w[0],w[1],w[2]),!(M.position.x===this.start[0]&&M.position.y==this.start[1]&&M.position.z==this.start[2])&&(M.position.x===this.end[0]&&M.position.y==this.end[1]&&M.position.z==this.end[2]||(M.updateMatrix(),M.position.set(M.position.x+.5,M.position.y+.5,M.position.z+.5),M.updateMatrix(),v.setMatrixAt(S,M.matrix),v.setColorAt(S,y.setHex(16777215))));this.scene.add(v),this.instancedMesh=v,this.obstacles=m}StructuredCubes(){const b=new BoxGeometry(1,1,1),f=new MeshMatcapMaterial({color:"white",transparent:!0}),m=new InstancedMesh(b,f,2e3),_=new Color,x=new Object3D;let v=[],y=0;for(let M=0;M<13;M++)for(let S=0;S<50;S++)x.position.set(S,M,20),x.updateMatrix(),v.push([x.position.x,x.position.y,x.position.z]),x.position.set(x.position.x+.5,x.position.y+.5,x.position.z+.5),x.updateMatrix(),m.setMatrixAt(y,x.matrix),m.setColorAt(y,_.setHex(16777215)),y++;for(let M=7;M<20;M++)for(let S=0;S<50;S++)x.position.set(S,M,30),x.updateMatrix(),v.push([x.position.x,x.position.y,x.position.z]),x.position.set(x.position.x+.5,x.position.y+.5,x.position.z+.5),x.updateMatrix(),m.setMatrixAt(y,x.matrix),m.setColorAt(y,_.setHex(16777215)),y++;this.scene.add(m),this.instancedMesh=m,this.obstacles=v}RealWorld(){this.scene.add(this.model.scene),this.instancedMesh=this.model.scene.children[0],this.obstacles=null}getObstacles(){return this.scene.remove(this.model.scene),this.scene.add(this.instancedMesh),[this.instancedMesh,this.obstacles]}getCollisionWorld(){return this.scene.remove(this.instancedMesh),this.scene.add(this.model.scene),this.model.scene.children[0]}change_start_end(b,f){this.start=b,this.end=f;const m=new Object3D;m.position.set(this.start[0],this.start[1],this.start[1]),m.updateMatrix(),this.seMesh.setMatrixAt(0,m.matrix),this.seMesh.instanceMatrix.needsUpdate=!0,m.position.set(this.end[0],this.end[1],this.end[2]),m.updateMatrix(),this.seMesh.setMatrixAt(1,m.matrix),this.seMesh.instanceMatrix.needsUpdate=!0}dispose_obstacle(){this.instancedMesh.geometry.dispose(),this.instancedMesh.material.dispose(),this.scene.remove(this.instancedMesh)}}class Astar{constructor(f,m,_,x,v,y=!0){this.scene=f,this.open_set=new Map,this.close_set=[_],this.ground_truth=new Map,this.parents=new Map,this.check=!0,this.current=_,this.start=_,this.end=x,this.obstacles=v,this.simulation=y,this.ground_truth.set(_,0);const M=new BoxGeometry(.25,.25,.25),S=new MeshMatcapMaterial({color:"white"});this.instanceMesh=new InstancedMesh(M,S,50*20*50),this.instanceMesh.count=0,this.instanceMesh.setColorAt(0,new Color(0)),f.add(this.instanceMesh)}run(){for(;!this.planning(););this.find_path()}planning(){let f={...this.current},m;const _=[.25,.25,.25,-.25,-.25,-.25];for(let y=0;y<6;y++)m={...f},m[y%3]+=_[y],0<=m[0]&&m[0]<50&&0<=m[1]&&m[1]<20&&0<=m[2]&&m[2]<50&&!this.checkOpenSet(m)&&!this.checkCloseSet(m)&&!this.checkCollision(m)&&(this.ground_truth.set(m,this.getFromMap(this.ground_truth,f)+1),this.open_set.set(m,this.heuristic(m,this.end)),this.parents.set(m,f));if(this.open_set.size==0)return!0;const x=Math.min(...this.open_set.values()),v=[...this.open_set].find(([y,M])=>M===x)[0];return this.open_set.delete(v),this.close_set.push(v),f=v,f[0]==this.end[0]&&f[1]==this.end[1]&&f[2]==this.end[2]?!0:(this.current=f,this.simulation&&this.draw(),!1)}checkOpenSet(f){const m=this.open_set.keys();let _;for(let x=0;x<this.open_set.size;x++)if(_=m.next().value,f[0]==_[0]&&f[1]==_[1]&&f[2]==_[2])return!0;return!1}checkCloseSet(f){for(let m=0;m<this.close_set.length;m++)if(this.close_set[m][0]==f[0]&&this.close_set[m][1]==f[1]&&this.close_set[m][2]==f[2])return!0;return!1}checkCollision(f){for(let m=0;m<this.obstacles.length;m++)if(this.obstacles[m][0]==Math.floor(f[0])&&this.obstacles[m][1]==Math.floor(f[1])&&this.obstacles[m][2]==Math.floor(f[2]))return!0;return!1}getFromMap(f,m){const _=f.keys();let x;for(let v=0;v<f.size;v++)if(x=_.next().value,m[0]==x[0]&&m[1]==x[1]&&m[2]==x[2])return f.get(x)}heuristic(f,m){return Math.sqrt((f[0]-m[0])**2+(f[1]-m[1])**2+(f[2]-m[2])**2)}find_path(){let f=this.end;for(;f=this.getFromMap(this.parents,f),!this.arrayIsEqual(f,this.start);)this.addMesh(f,15732720)}arrayIsEqual(f,m){const _=Object.keys(f).length;if(_==m.length){for(let x=0;x<_;x++)if(f[x]!=m[x])return!1;return!0}return!1}addMesh(f,m){const _=new Object3D;_.position.set(f[0]+.125,f[1]+.125,f[2]+.125),_.updateMatrix(),this.instanceMesh.setMatrixAt(this.instanceMesh.count,_.matrix),this.instanceMesh.setColorAt(this.instanceMesh.count,new Color(m)),this.instanceMesh.count++,this.instanceMesh.instanceMatrix.needsUpdate=!0,this.instanceMesh.instanceColor.needsUpdate=!0}draw(){this.addMesh(this.current,255)}dispose(){this.instanceMesh.geometry.dispose(),this.instanceMesh.material.dispose(),this.scene.remove(this.instanceMesh)}}class RRT{constructor(f,m,_,x,v,y){this.scene=f,this.sizes=m,this.start=_,this.end=x,this.lowerLimit=[0,0,0],this.upperLimit=[49,19,49],this.obstacles=v,this.simulation=y,this.step_size=1,this.nodes=[this.start],this.parents=new Map;let M=new SphereGeometry(.1),S=new MeshPhongMaterial({color:"white"});this.mesh_node=new InstancedMesh(M,S,50*50*20),this.mesh_node.count=0,this.mesh_node.setColorAt(0,new Color(0)),this.scene.add(this.mesh_node),M=new BufferGeometry;const w=new Float32Array(50*50*20*3);M.setAttribute("position",new BufferAttribute(w,3)),M.setAttribute("color",new BufferAttribute(w,3)),M.setDrawRange(0,0),S=new LineBasicMaterial,this.mesh_line=new LineSegments(M,S),this.scene.add(this.mesh_line),this.raycaster=new Raycaster}run(){for(;!this.planning(););this.find_path()}planning(){let f,m,_,x;for(;f=this.get_rand(),[m,x]=this.get_near(f),!(this.get_distance(m,this.end)<this.step_size+3&&(_=this.end,!this.is_colliding(m,_)));)if(_=this.get_new(m,f,x),!(_[0]<this.lowerLimit[0]||_[0]>this.upperLimit[0]||_[1]<this.lowerLimit[1]||_[1]>this.upperLimit[1]||_[2]<this.lowerLimit[2]||_[2]>this.upperLimit[2])&&!this.is_colliding(m,_))break;return this.checkNodes(_)&&(this.nodes.push(_),this.parents.set(_,m),this.simulation&&this.draw_node(_,m,0)),this.get_distance(_,this.end)==0}get_rand(){return[Math.random()*50*(Math.round(Math.random())*2-1),Math.random()*30,Math.random()*50]}get_near(f){let m=1/0,_=this.nodes.at(-1),x;for(const v of this.nodes)x=this.get_distance(v,f),x<m&&(m=x,_={...v});return[_,m]}get_distance(f,m){return Math.hypot(f[0]-m[0],f[1]-m[1],f[2]-m[2])}get_new(f,m,_){const x=m[0]-f[0],v=m[1]-f[1],y=m[2]-f[2],M=Math.abs(x)+Math.abs(v)+Math.abs(y),S=Math.min(_,this.step_size);return[f[0]+x/M*S,f[1]+v/M*S,f[2]+y/M*S]}is_colliding(f,m){const _=new Vector3(f[0],f[1],f[2]),x=new Vector3(m[0],m[1],m[2]),v=new Vector3;v.subVectors(x,_).normalize(),this.raycaster.set(_,v);const y=new Vector3;return this.raycaster.far=y.subVectors(_,x).length(),this.raycaster.intersectObject(this.obstacles).length!=0}checkNodes(f){for(const m of this.nodes)if(this.get_distance(m,f)<.1)return!1;return!0}draw_test(f,m){const _=new Object3D;if(_.position.set(f[0],f[1],f[2]),_.updateMatrix(),this.mesh_node.setMatrixAt(this.mesh_node.count,_.matrix),this.mesh_node.setColorAt(this.mesh_node.count,new Color(255)),this.mesh_node.count++,this.mesh_node.instanceMatrix.needsUpdate=!0,this.mesh_node.instanceColor.needsUpdate=!0,m){const x=this.mesh_line.geometry.drawRange.count;this.mesh_line.geometry.getAttribute("position").setXYZ(x,m[0],m[1],m[2]),this.mesh_line.geometry.getAttribute("position").setXYZ(x+1,f[0],f[1],f[2]),this.mesh_line.geometry.setDrawRange(0,x+2),this.mesh_line.geometry.attributes.position.needsUpdate=!0}}get_parent(f){const m=this.parents.keys();let _;for(let x=0;x<this.parents.size;x++)if(_=m.next().value,f[0]==_[0]&&f[1]==_[1]&&f[2]==_[2])return this.parents.get(_)}find_path(){let f=this.end,m=f;for(;f;)this.draw_node(f,m,16776960),m=f,f=this.get_parent(f)}draw_node(f,m,_){const x=new Object3D;x.position.set(f[0],f[1],f[2]),x.updateMatrix(),this.mesh_node.setMatrixAt(this.mesh_node.count,x.matrix),this.mesh_node.setColorAt(this.mesh_node.count,new Color(_)),this.mesh_node.count++,this.mesh_node.instanceColor.needsUpdate=!0,this.mesh_node.instanceMatrix.needsUpdate=!0;const v=this.mesh_line.geometry.drawRange.count;this.mesh_line.geometry.getAttribute("position").setXYZ(v,m[0],m[1],m[2]),this.mesh_line.geometry.getAttribute("position").setXYZ(v+1,f[0],f[1],f[2]),this.mesh_line.geometry.setDrawRange(0,v+2),this.mesh_line.geometry.attributes.position.needsUpdate=!0}dispose(){this.mesh_node.geometry.dispose(),this.mesh_node.material.dispose(),this.scene.remove(this.mesh_node),this.scene.remove(this.mesh_line)}}class RBT{constructor(f,m,_,x,v,y,M){this.scene=f,this.sizes=m,this.start=_,this.end=x,this.obstacles_mesh=v,this.obstacles=y,this.simulation=M,this.nodes=[this.start],this.parents=new Map,this.open_set=new Map;const S=new Vector3(0,0,0);this.open_set.set(this.start,[0,S,S,!1]),this.step_size=1;let w=new SphereGeometry(.1),T=new MeshMatcapMaterial({color:"white"});this.mesh_node=new InstancedMesh(w,T,50*50*20),this.mesh_node.count=0,this.mesh_node.setColorAt(0,new Color(0)),this.scene.add(this.mesh_node),w=new BufferGeometry;const A=new Float32Array(50*50*20*3);w.setAttribute("position",new BufferAttribute(A,3)),w.setAttribute("color",new BufferAttribute(A,3)),w.setDrawRange(0,0),T=new MeshMatcapMaterial,this.mesh_line=new LineSegments(w,T),this.scene.add(this.mesh_line),this.raycaster=new Raycaster}run(){for(;!this.planning(););this.simulation=!0,this.find_path()}planning(){if(this.open_set.size==0)return!0;const f=[...this.open_set.values()],m=Math.min(...f.map((x,v)=>x[0])),_=[...this.open_set].find(([x,v])=>v[0]===m)[0];return this.isEqual(_,this.start)?this.open_set.delete(_):this.wallFollow(_),this.targetFollow(_)}isEqual(f,m){for(let _=0;_<f.length;_++)if(f[_]!=m[_])return!1;return!0}targetFollow(f){const m=this.raycast(f,this.end);if(!m)return this.drawNode(this.end,f,255),this.addNode(this.end,f),!0;const _=m.point,x=m.face.normal,v=[_.x+x.x*.1,_.y+x.y*.1,_.z+x.z*.1];if(this.checkExistence(v,v))return!1;this.drawNode(v,f,255),this.parents.set(v,f);const y=this.getCost(v,f);let M=this.rotate(x,Math.PI/2);const S=this.rotate(x,Math.PI);let w=new Vector3;return w.crossVectors(M,S),this.open_set.set(v,[y,M,S,w]),this.wallFollow(v),M=this.rotate(M,Math.PI),w=this.rotate(w,Math.PI),this.open_set.set(v,[y,M,S,w]),this.wallFollow(v),this.addNode(v,f),!1}raycast(f,m){const _=new Vector3(f[0],f[1],f[2]),x=new Vector3(m[0],m[1],m[2]),v=new Vector3;v.subVectors(x,_).normalize(),this.raycaster.set(_,v);const y=new Vector3;this.raycaster.far=y.subVectors(_,x).length();const M=this.raycaster.intersectObject(this.obstacles_mesh);return M.length==0?!1:M[0]}wallFollow(f){let[m,_,x,v]=this.open_set.get(f);this.open_set.delete(f);let y=[...f],M,S;Object.values(_).map((E,R)=>{E&&(M=R,S=E)}),y[M]=Math.round(y[M]);let w;v?(y[M]==f[M]&&(w=[y[0]+x.x*.2,y[1]+x.y*.2,y[2]+x.z*.2],this.checkCollision(w)&&(y[M]+=1)),S>0?y[M]-=.1:y[M]>=f[M]&&(y[M]-=1)):S>0?y[M]+=.1:y[M]-=.1;let T=!1,A=y;for(;;){if(w=[y[0]+x.x*.2,y[1]+x.y*.2,y[2]+x.z*.2],this.checkCollision(y)?(T=!0,y=A,v||(v=this.rotate(x,Math.PI),x=_)):this.checkCollision(w)||(T=!0,v?y=A:(v=x,x=this.rotate(_,Math.PI))),T){if(this.checkExistence(y,f))return;this.drawNode(y,f,255),this.addNode(y,f);const E=this.getCost(y,f);this.open_set.set(y,[E,v,x,!1]);return}A=[...y],y=[y[0]+_.x*this.step_size,y[1]+_.y*this.step_size,y[2]+_.z*this.step_size]}}checkCollision(f){for(let m=0;m<this.obstacles.length;m++)if(this.obstacles[m][0]==Math.floor(f[0])&&this.obstacles[m][1]==Math.floor(f[1])&&this.obstacles[m][2]==Math.floor(f[2]))return!0;return!1}checkExistence(f,m){for(const _ of this.nodes)if(this.getDistance(_,f)<.3){if(_[0]==m[0]&&_[1]==m[1]&&_[2]==m[2])continue;return!0}return!1}getCost(f,m){return this.getDistance(f,this.end)}getDistance(f,m){return Math.hypot(f[0]-m[0],f[1]-m[1],f[2]-m[2])}getMapValue(f,m){const _=m.keys();let x;for(let v=0;v<m.size;v++)if(x=_.next().value,f[0]==x[0]&&f[1]==x[1]&&f[2]==x[2])return m.get(x)}del(f,m){const _=m.keys();let x;for(let v=0;v<m.size;v++)if(x=_.next().value,f[0]==x[0]&&f[1]==x[1]&&f[2]==x[2])return m.delete(x),!0;return!1}addNode(f,m){this.nodes.push(f),this.parents.set(f,m)}getDirection(f,m){const _=[f[0]-m[0],f[1]-m[1],f[2]-m[2]],x=Math.sqrt(_[0]**2+_[1]**2+_[2]**2);return[_[0]/x,_[1]/x,_[2]/x]}rotate(f,m){let _={...f};return f.y!=0?(_.x=Math.round(Math.cos(m)*f.x-Math.sin(m)*f.y),_.y=Math.round(Math.sin(m)*f.x+Math.cos(m)*f.y)):(_.x=Math.round(Math.cos(m)*f.x-Math.sin(m)*f.z),_.z=Math.round(Math.sin(m)*f.x+Math.cos(m)*f.z)),_}find_path(){let f=this.end,m=f;for(;f;)this.drawNode(f,m,16776960),m=f,f=this.getMapValue(f,this.parents)}drawNode(f,m,_){if(this.simulation){const x=new Object3D;x.position.set(f[0],f[1],f[2]),x.updateMatrix(),this.mesh_node.setMatrixAt(this.mesh_node.count,x.matrix),this.mesh_node.setColorAt(this.mesh_node.count,new Color(_)),this.mesh_node.count++,this.mesh_node.instanceColor.needsUpdate=!0,this.mesh_node.instanceMatrix.needsUpdate=!0;const v=this.mesh_line.geometry.drawRange.count;this.mesh_line.geometry.getAttribute("position").setXYZ(v,m[0],m[1],m[2]),this.mesh_line.geometry.getAttribute("position").setXYZ(v+1,f[0],f[1],f[2]),this.mesh_line.geometry.setDrawRange(0,v+2),this.mesh_line.geometry.attributes.position.needsUpdate=!0}}drawCircle(f,m){const _=new Object3D;_.position.set(f[0],f[1],f[2]),_.updateMatrix(),this.mesh_node.setMatrixAt(this.mesh_node.count,_.matrix),this.mesh_node.setColorAt(this.mesh_node.count,new Color(m)),this.mesh_node.count++,this.mesh_node.instanceColor.needsUpdate=!0,this.mesh_node.instanceMatrix.needsUpdate=!0}dispose(){this.mesh_node.geometry.dispose(),this.mesh_node.material.dispose(),this.scene.remove(this.mesh_node),this.scene.remove(this.mesh_line)}}class Simulator{constructor(){this.scene=new Scene,this.clock=new Clock,this.delta=0,this.FPS=100,this.getWinSize(),this.initFPS(),this.initGUI(),this.initEvenListeners(),this.initHelpers(),this.check=!1,this.start=[0,0,0],this.end=[40,15,40],this.initLight(),this.initCamera(),this.initAction(),this.env=new Env(this.scene,this.start,this.end),[this.obstacles_mesh,this.obstacles]=this.env.initGeometry("Random2")}getWinSize(){this.winSize={width:window.innerWidth,height:window.innerHeight}}initFPS(){this.stats=new Stats$1,this.stats.showPanel(0),document.body.append(this.stats.dom)}initGUI(){const f=new g({width:200}),m=f.addFolder("Start Position"),_=f.addFolder("End Position"),x=f.addFolder("Settings"),v=this;this.props={Simulation:!0,Speed:100,Env:"Random2",Algo:"RBT",Apply:function(){v.onApply()},Run:function(){v.onRun()},"Pause/Resume":function(){v.check=!v.check},Save:function(){v.onSave()}},this.startObj={x:0,y:0,z:0},this.endObj={x:40,y:15,z:40},m.add(this.startObj,"x",-50,50),m.add(this.startObj,"y",-50,50),m.add(this.startObj,"z",-50,50),_.add(this.endObj,"x",-50,50),_.add(this.endObj,"y",-50,50),_.add(this.endObj,"z",-50,50),x.add(this.props,"Simulation"),x.add(this.props,"Speed",1,200),x.add(this.props,"Env",["New Random Cubes","Structured Cubes","Real World","Random1","Random2"]),x.add(this.props,"Apply"),x.add(this.props,"Algo",["Astar","RRT","RBT"]),x.add(this.props,"Run"),x.add(this.props,"Pause/Resume"),x.add(this.props,"Save"),f.close()}onApply(){this.start=[this.startObj.x,this.startObj.y,this.startObj.z],this.end=[this.endObj.x,this.endObj.y,this.endObj.z],this.env.change_start_end(this.start,this.end),this.env.dispose_obstacle(),this.algo&&this.algo.dispose(),[this.obstacles_mesh,this.obstacles]=this.env.initGeometry(this.props.Env.replace(/ /g,""))}onRun(){this.algo&&this.algo.dispose(),this.props.Algo=="Astar"?this.algo=new Astar(this.scene,this.winSize,this.start,this.end,this.obstacles,this.props.Simulation):this.props.Algo=="RBT"?this.algo=new RBT(this.scene,this.winSize,this.start,this.end,this.obstacles_mesh,this.obstacles,this.props.Simulation):this.algo=new RRT(this.scene,this.winSize,this.start,this.end,this.obstacles_mesh,this.props.Simulation),this.check=!0}onSave(){const f=JSON.stringify(this.obstacles);localStorage.setItem("Random2",f)}initEvenListeners(){window.addEventListener("resize",()=>{this.getWinSize(),this.canvas.width=this.winSize.width,this.canvas.height=this.winSize.height,this.camera.aspect=this.winSize.width/this.winSize.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.winSize.width,this.winSize.height)}),window.addEventListener("keypress",_=>{_.code==="KeyH"&&(this.obstacles_mesh.visible=!this.obstacles_mesh.visible),_.code==="KeyT"&&(this.obstacles_mesh.material.opacity==.5?this.obstacles_mesh.material.opacity=1:this.obstacles_mesh.material.opacity=.5)});const f=document.getElementById("blocker"),m=document.getElementById("instructions");m.addEventListener("click",function(){m.style.display="none",f.style.display="none"})}initHelpers(){const f=new AxesHelper(5);this.scene.add(f)}initLight(){this.scene.background=new Color(43775),this.scene.fog=new Fog(43775,0,500),new AmbientLight(13421772);const f=new DirectionalLight(16777215,2);f.position.set(0,10,10),this.scene.add(f)}initCamera(){this.camera=new PerspectiveCamera(45,this.winSize.width/this.winSize.height),this.camera.position.set(19,73,19),this.scene.add(this.camera)}initAction(){const f=document.querySelector(".webgl");this.renderer=new WebGLRenderer({canvas:f}),new PMREMGenerator(this.renderer),this.renderer.setSize(this.winSize.width,this.winSize.height),this.controls=new OrbitControls(this.camera,f),this.canvas=f}loop(){var f=this;const m=document.getElementById("result");this.renderer.setAnimationLoop(()=>{if(f.delta+=1,f.FPS=Math.round(100/f.props.Speed),f.delta%f.FPS==0&&f.check)if(f.props.Simulation)f.algo.planning()&&(f.check=!1);else{const _=new Date;f.algo.run();const x=new Date-_+" ms";console.log(x),m.innerHTML=x,f.check=!1}f.stats.update(),f.controls.update(),f.renderer.render(f.scene,f.camera)})}}const sim=new Simulator;sim.loop();
