// JavaScript Document
//课程代码：
var CourseCode="itx0101"

//课程名称
var sCourseTitle = "应用信息技术改变课堂教学的发展概述";

//课程相关信息
var arrkcjs = ["课程简介-kj","课程大纲-dg","课程导学-dx","专家简介-zj","授课PPT-ppt","学习评价-pj","学习建议-jy","拓展资料-tz"]
var arrkcjscnt

/*下方栏目的二级*/
var arrkcjsli1=[];
var arrkcjsli2=[];
var arrkcjsli3=[];
var arrkcjsli4=[];
var arrkcjsli5=[];
var arrkcjsli6=[];
var arrkcjsli7=[];
var arrkcjsli8=["信息技术带给学生学习方式的几个转变","信息技术在小学科学教学中的运用之我见"];

//各级栏目信息（层级，课程名称，栏目文档类型，所连接文件的文件名（视频填CC的vid），没有就留空。不管有没有2级，最底层栏目的层级统一填3级）
var arrList = [
{
	"level":"1",
	"coursename":"情境导入"
},{
	"level":"3",
	"coursename":"情境导入",
	"filetype":"v",
	"filename":"C9646DD0C099277C9C33DC5901307461",
	"localpath":"sp1"
},{
	"level":"1",
	"coursename":"发展概述"
},{
	"level":"3",
	"coursename":"信息技术发展对科学教育带来的机遇与挑战",
	"filetype":"v",
	"filename":"D466ED26278B360F9C33DC5901307461",
	"localpath":"sp2"
},{
	"level":"3",
	"coursename":"信息技术改变学生学习科学的视野和方式",
	"filetype":"v",
	"filename":"493AB5E73876C0939C33DC5901307461",
	"localpath":"sp3"
},{
	"level":"3",
	"coursename":"信息技术促进教师教育观念、教学策略的改变",
	"filetype":"v",
	"filename":"7945C95A520FF5739C33DC5901307461",
	"localpath":"sp4"
},{
	"level":"3",
	"coursename":"信息技术应用于科学教育对教师提出了更高的要求",
	"filetype":"v",
	"filename":"C8EE9F123FCE18F79C33DC5901307461",
	"localpath":"sp5"
},{
	"level":"1",
	"coursename":"实践任务"
},{
	"level":"3",
	"coursename":"实践任务",
	"filetype":"v",
	"filename":"6C1F04023706DD969C33DC5901307461",
	"localpath":"sp6"
}]



var arrNum = ["第一部分","第二部分","第三部分","第四部分","第五部分","第六部分","第七部分","第八部分","第九部分","第十部分"]