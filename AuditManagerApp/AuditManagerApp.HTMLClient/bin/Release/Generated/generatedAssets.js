﻿window.myapp=msls.application,function(n){function s(n){i.call(this,n)}function e(n){i.call(this,n)}function h(n){i.call(this,n)}function f(n){i.call(this,n)}function l(n){i.call(this,n)}function a(n){i.call(this,n)}function o(n){i.call(this,n)}function c(n){i.call(this,n)}function v(n){y.call(this,n)}function k(){p.call(this)}var i=msls.Entity,y=msls.DataService,p=msls.DataWorkspace,r=msls._defineEntity,w=msls._defineDataService,b=msls._defineDataWorkspace,t=msls.DataServiceQuery,u=msls._toODataString;msls._addToNamespace("msls.application",{AuditAuditor:r(s,[{name:"Id",type:Number},{name:"Audit",kind:"reference",type:f},{name:"Auditor",kind:"reference",type:h},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AuditFinding:r(e,[{name:"Id",type:Number},{name:"FindingReference",type:String},{name:"FindingDescription",type:String},{name:"FindingDate",type:Date},{name:"TargetResolutionDate",type:Date},{name:"FindingImpactAssessment",type:String},{name:"ImmediateAction",type:String},{name:"CorrectiveAndPreventativeAction",type:String},{name:"CorrectiveAndPreventativeActionTargetDate",type:Date},{name:"DateCorrectiveAndPreventativeActionClosed",type:Date},{name:"DateFindingClosed",type:Date},{name:"AssignedTo",kind:"reference",type:o},{name:"Notes",type:String},{name:"FindingAction",kind:"collection",elementType:c},{name:"Audit",kind:"reference",type:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Auditor:r(h,[{name:"Id",type:Number},{name:"DateTrained",type:Date},{name:"CurrentAuditor",type:Boolean},{name:"Employee",kind:"reference",type:o},{name:"AuditAuditors",kind:"collection",elementType:s},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Audit:r(f,[{name:"Id",type:Number},{name:"AuditCode",type:String},{name:"AuditDescription",type:String},{name:"SchduledDate",type:Date},{name:"DateStarted",type:Date},{name:"DateCompleted",type:Date},{name:"AuditType",kind:"reference",type:a},{name:"AuditStatus",kind:"reference",type:l},{name:"AuditAuditors",kind:"collection",elementType:s},{name:"AuditFindings",kind:"collection",elementType:e},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AuditStatus:r(l,[{name:"Id",type:Number},{name:"AuditStatusDescription",type:String},{name:"InUse",type:Boolean},{name:"Audits",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),AuditType:r(a,[{name:"Id",type:Number},{name:"AuditTypeDescription",type:String},{name:"inUse",type:Boolean},{name:"Audits",kind:"collection",elementType:f},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),Employee:r(o,[{name:"Id",type:Number},{name:"LastName",type:String},{name:"FirstName",type:String},{name:"UserName",type:String},{name:"Email",type:String},{name:"Current",type:Boolean},{name:"Auditors",kind:"collection",elementType:h},{name:"AuditFindings",kind:"collection",elementType:e},{name:"FindingAction",kind:"collection",elementType:c},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),FindingAction:r(c,[{name:"Id",type:Number},{name:"Action",type:String},{name:"ActionComment",type:String},{name:"DateActionAssigned",type:Date},{name:"ActionTargetCompletionDate",type:Date},{name:"DateActionCompleted",type:Date},{name:"AssignedTo",kind:"reference",type:o},{name:"AuditFinding",kind:"reference",type:e},{name:"CreatedBy",type:String,isReadOnly:!0},{name:"Created",type:Date,isReadOnly:!0},{name:"ModifiedBy",type:String,isReadOnly:!0},{name:"Modified",type:Date,isReadOnly:!0},{name:"RowVersion",type:Array}]),ApplicationData:w(v,n.rootUri+"/ApplicationData.svc",[{name:"AuditAuditors",elementType:s},{name:"AuditFindings",elementType:e},{name:"Auditors",elementType:h},{name:"Audits",elementType:f},{name:"AuditStatuses",elementType:l},{name:"AuditTypes",elementType:a},{name:"Employees",elementType:o},{name:"FindingActions",elementType:c}],[{name:"AuditAuditors_SingleOrDefault",value:function(i){return new t({_entitySet:this.AuditAuditors},n.rootUri+"/ApplicationData.svc/AuditAuditors(Id="+u(i,"Int32?")+")")}},{name:"AuditFindings_SingleOrDefault",value:function(i){return new t({_entitySet:this.AuditFindings},n.rootUri+"/ApplicationData.svc/AuditFindings(Id="+u(i,"Int32?")+")")}},{name:"MyAssignedAuditFindings",value:function(){return new t({_entitySet:this.AuditFindings},n.rootUri+"/ApplicationData.svc/MyAssignedAuditFindings()",{})}},{name:"Auditors_SingleOrDefault",value:function(i){return new t({_entitySet:this.Auditors},n.rootUri+"/ApplicationData.svc/Auditors(Id="+u(i,"Int32?")+")")}},{name:"Audits_SingleOrDefault",value:function(i){return new t({_entitySet:this.Audits},n.rootUri+"/ApplicationData.svc/Audits(Id="+u(i,"Int32?")+")")}},{name:"AuditStatuses_SingleOrDefault",value:function(i){return new t({_entitySet:this.AuditStatuses},n.rootUri+"/ApplicationData.svc/AuditStatuses(Id="+u(i,"Int32?")+")")}},{name:"AuditTypes_SingleOrDefault",value:function(i){return new t({_entitySet:this.AuditTypes},n.rootUri+"/ApplicationData.svc/AuditTypes(Id="+u(i,"Int32?")+")")}},{name:"Employees_SingleOrDefault",value:function(i){return new t({_entitySet:this.Employees},n.rootUri+"/ApplicationData.svc/Employees(Id="+u(i,"Int32?")+")")}},{name:"FindingActions_SingleOrDefault",value:function(i){return new t({_entitySet:this.FindingActions},n.rootUri+"/ApplicationData.svc/FindingActions(Id="+u(i,"Int32?")+")")}},{name:"MyAuditFindingActions",value:function(){return new t({_entitySet:this.FindingActions},n.rootUri+"/ApplicationData.svc/MyAuditFindingActions()",{})}}]),DataWorkspace:b(k,[{name:"ApplicationData",type:v}])})}(msls.application),function(n){function f(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditAudit",t)}function e(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditAuditAuditor",t)}function o(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditAuditFinding",t)}function s(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditAuditor",t)}function h(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditAuditStatus",t)}function c(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditAuditType",t)}function l(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditEmployee",t)}function a(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"AddEditFindingAction",t)}function v(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseAllAuditFindings",t)}function y(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseAuditors",t)}function p(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseAudits",t)}function w(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseAuditStatuses",t)}function b(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseAuditTypes",t)}function k(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseEmployees",t)}function d(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyAssignedAuditFindings",t)}function g(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"BrowseMyAuditFindingActions",t)}function nt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"Home",t)}function tt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"MobileHome",t)}function it(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"MobileSettings",t)}function rt(t,r){r||(r=new n.DataWorkspace),i.call(this,r,"Settings",t)}var i=msls.Screen,r=msls._defineScreen,ut=msls.DataServiceQuery,t=msls._toODataString,u=msls._defineShowScreen;msls._addToNamespace("msls.application",{AddEditAudit:r(f,[{name:"Audit",kind:"local",type:n.Audit},{name:"AuditAuditors",kind:"collection",elementType:n.AuditAuditor,getNavigationProperty:function(){return this.owner.Audit?this.owner.Audit.details.properties.AuditAuditors:null},appendQuery:function(){return this.expand("Auditor").expand("Auditor.Employee")}},{name:"AuditFindings",kind:"collection",elementType:n.AuditFinding,getNavigationProperty:function(){return this.owner.Audit?this.owner.Audit.details.properties.AuditFindings:null},appendQuery:function(){return this.expand("AssignedTo")}}],[]),AddEditAuditAuditor:r(e,[{name:"AuditAuditor",kind:"local",type:n.AuditAuditor}],[]),AddEditAuditFinding:r(o,[{name:"AuditFinding",kind:"local",type:n.AuditFinding},{name:"FindingAction",kind:"collection",elementType:n.FindingAction,getNavigationProperty:function(){return this.owner.AuditFinding?this.owner.AuditFinding.details.properties.FindingAction:null},appendQuery:function(){return this.expand("AssignedTo")}}],[]),AddEditAuditor:r(s,[{name:"Auditor",kind:"local",type:n.Auditor},{name:"AuditAuditors",kind:"collection",elementType:n.AuditAuditor,getNavigationProperty:function(){return this.owner.Auditor?this.owner.Auditor.details.properties.AuditAuditors:null},appendQuery:function(){return this.expand("Audit")}}],[]),AddEditAuditStatus:r(h,[{name:"AuditStatus",kind:"local",type:n.AuditStatus}],[]),AddEditAuditType:r(c,[{name:"AuditType",kind:"local",type:n.AuditType}],[]),AddEditEmployee:r(l,[{name:"Employee",kind:"local",type:n.Employee}],[]),AddEditFindingAction:r(a,[{name:"FindingAction",kind:"local",type:n.FindingAction}],[]),BrowseAllAuditFindings:r(v,[{name:"AuditFindings",kind:"collection",elementType:n.AuditFinding,createQuery:function(n){return this.dataWorkspace.ApplicationData.AuditFindings.filter("((("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", CorrectiveAndPreventativeAction)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FindingDescription)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FindingImpactAssessment)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FindingReference)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ImmediateAction)")+"").expand("Audit").expand("AssignedTo")}},{name:"Search",kind:"local",type:String}],[]),BrowseAuditors:r(y,[{name:"Auditors",kind:"collection",elementType:n.Auditor,createQuery:function(n){return this.dataWorkspace.ApplicationData.Auditors.filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Employee/LastName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", Employee/FirstName)")+") or ((Created ne null) and (Created eq datetimeoffset'2013-11-04T00:00:00+00:00'))").orderBy("Employee/LastName").thenBy("Employee/FirstName").expand("Employee")}},{name:"Search",kind:"local",type:String}],[]),BrowseAudits:r(p,[{name:"Audits",kind:"collection",elementType:n.Audit,createQuery:function(n){return this.dataWorkspace.ApplicationData.Audits.filter("(("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AuditCode)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AuditDescription)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AuditStatus/AuditStatusDescription)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AuditType/AuditTypeDescription)")+"").orderByDescending("SchduledDate").expand("AuditType").expand("AuditStatus")}},{name:"Search",kind:"local",type:String}],[]),BrowseAuditStatuses:r(w,[{name:"AuditStatuses",kind:"collection",elementType:n.AuditStatus,createQuery:function(n){return this.dataWorkspace.ApplicationData.AuditStatuses.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AuditStatusDescription)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseAuditTypes:r(b,[{name:"AuditTypes",kind:"collection",elementType:n.AuditType,createQuery:function(n){return this.dataWorkspace.ApplicationData.AuditTypes.filter(""+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", AuditTypeDescription)")+"").orderBy("AuditTypeDescription")}},{name:"Search",kind:"local",type:String}],[]),BrowseEmployees:r(k,[{name:"Employees",kind:"collection",elementType:n.Employee,createQuery:function(n){return this.dataWorkspace.ApplicationData.Employees.filter("("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", LastName)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FirstName)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", UserName)")+"")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyAssignedAuditFindings:r(d,[{name:"MyAssignedAuditFindings",kind:"collection",elementType:n.AuditFinding,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyAssignedAuditFindings().filter("((("+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", CorrectiveAndPreventativeAction)")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FindingDescription)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FindingImpactAssessment)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", FindingReference)")+") or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ImmediateAction)")+"").expand("Audit").expand("AssignedTo")}},{name:"Search",kind:"local",type:String}],[]),BrowseMyAuditFindingActions:r(g,[{name:"MyAuditFindingActions",kind:"collection",elementType:n.FindingAction,createQuery:function(n){return this.dataWorkspace.ApplicationData.MyAuditFindingActions().filter(""+(n===undefined||n===null?"true":"(Action eq "+t(n,"String?")+")")+" or "+(n===undefined||n===null?"true":"substringof("+t(n,"String?")+", ActionComment)")+"").expand("AssignedTo")}},{name:"Search",kind:"local",type:String}],[]),Home:r(nt,[],[]),MobileHome:r(tt,[],[]),MobileSettings:r(it,[],[]),Settings:r(rt,[],[]),showAddEditAudit:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAudit",r,i)}),showAddEditAuditAuditor:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAuditAuditor",r,i)}),showAddEditAuditFinding:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAuditFinding",r,i)}),showAddEditAuditor:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAuditor",r,i)}),showAddEditAuditStatus:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAuditStatus",r,i)}),showAddEditAuditType:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditAuditType",r,i)}),showAddEditEmployee:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditEmployee",r,i)}),showAddEditFindingAction:u(function(t,i){var r=Array.prototype.slice.call(arguments,0,1);return n.showScreen("AddEditFindingAction",r,i)}),showBrowseAllAuditFindings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAllAuditFindings",i,t)}),showBrowseAuditors:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAuditors",i,t)}),showBrowseAudits:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAudits",i,t)}),showBrowseAuditStatuses:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAuditStatuses",i,t)}),showBrowseAuditTypes:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseAuditTypes",i,t)}),showBrowseEmployees:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseEmployees",i,t)}),showBrowseMyAssignedAuditFindings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyAssignedAuditFindings",i,t)}),showBrowseMyAuditFindingActions:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("BrowseMyAuditFindingActions",i,t)}),showHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Home",i,t)}),showMobileHome:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileHome",i,t)}),showMobileSettings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("MobileSettings",i,t)}),showSettings:u(function(t){var i=Array.prototype.slice.call(arguments,0,0);return n.showScreen("Settings",i,t)})})}(msls.application),myapp.AddEditAudit.created=function(n){var t,i;n.Audit.AuditCode!==undefined?(t=n.Audit.AuditCode,i=n.Audit.AuditDescription,n.details.displayName="Audit "+t+": "+i):n.details.displayName="Add new Audit",myapp.permissions["LightSwitchApplication:CanEditAudits"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("AuditorsTab").isReadOnly=!1,n.findContentItem("AuditFindingsTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("AuditorsTab").isReadOnly=!0,n.findContentItem("AuditFindingsTab").isReadOnly=!0)},myapp.AddEditAuditAuditor.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAuditAuditors"]?!1:!0},myapp.AddEditAuditFinding.created=function(n){var t,i;n.AuditFinding.FindingReference!==undefined?(t=n.AuditFinding.FindingReference,i=n.AuditFinding.FindingDescription,n.details.displayName="Audit Finding "+t+": "+i):n.details.displayName="Add new Audit Finding for Audit: "+n.AuditFinding.Audit.AuditCode,myapp.permissions["LightSwitchApplication:CanEditAuditFindings"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("ImpactAssessmentTab").isReadOnly=!1,n.findContentItem("ImmediateActionTab").isReadOnly=!1,n.findContentItem("FurtherActionsTab").isReadOnly=!1,n.findContentItem("CAPATab").isReadOnly=!1,n.findContentItem("NotesTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("ImpactAssessmentTab").isReadOnly=!0,n.findContentItem("ImmediateActionTab").isReadOnly=!0,n.findContentItem("FurtherActionsTab").isReadOnly=!0,n.findContentItem("CAPATab").isReadOnly=!0,n.findContentItem("NotesTab").isReadOnly=!0)},myapp.AddEditAuditor.created=function(n){var t,i;n.Auditor.Employee!==undefined?(t=n.Auditor.Employee.LastName,i=n.Auditor.Employee.FirstName,n.details.displayName="Auditor: "+i+" "+t):n.details.displayName="Add new Auditor",myapp.permissions["LightSwitchApplication:CanEditAuditors"]?(n.findContentItem("DetailsTab").isReadOnly=!1,n.findContentItem("AuditsUndertakenTab").isReadOnly=!1):(n.findContentItem("DetailsTab").isReadOnly=!0,n.findContentItem("AuditsUndertakenTab").isReadOnly=!0)},myapp.AddEditAuditStatus.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAuditStatuses"]?!1:!0},myapp.AddEditAuditType.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditAuditTypes"]?!1:!0},myapp.AddEditEmployee.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!1:!0},myapp.AddEditFindingAction.created=function(n){n.findContentItem("DetailsTab").isReadOnly=myapp.permissions["LightSwitchApplication:CanEditFindingActions"]?!1:!0},myapp.BrowseAuditors.created=function(n){n.findContentItem("AddAuditor").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAuditors"]?!0:!1},myapp.BrowseAudits.created=function(n){n.findContentItem("AddAudit").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAudits"]?!0:!1},myapp.BrowseAuditStatuses.created=function(n){n.findContentItem("AddAuditStatus").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAuditStatuses"]?!0:!1},myapp.BrowseAuditTypes.created=function(n){n.findContentItem("AddAuditType").isEnabled=myapp.permissions["LightSwitchApplication:CanEditAuditTypes"]?!0:!1},myapp.BrowseEmployees.created=function(n){n.findContentItem("AddEmployee").isEnabled=myapp.permissions["LightSwitchApplication:CanEditEmployees"]?!0:!1},myapp.Home.ManageAudits_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Audits.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.ManageAuditors_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Auditors.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.Settings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Settings.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.MyFindingActions_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AuditActions.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.MyAuditFindings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MyAuditFindings.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.AllAuditFindings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AllAuditFindings.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Home.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileHome.Audits_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAudits.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.Auditors_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAuditors.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.AllFindings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAllAuditFindings.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.MyFindings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileMyAuditFindings.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.MyActions_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAuditActions.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.Settings_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileSettings.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileHome.created=function(){$.getJSON("../UserPermissions/UserPermissions/",function(n){myapp.permissions=n})},myapp.MobileSettings.AuditTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAuditTypes.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileSettings.AuditStatuses_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileAuditStatuses.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.MobileSettings.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/MobileEmployees.png)","background-repeat":"no-repeat","background-position":"center",width:"90px",height:"90px"})},myapp.Settings.AuditTypes_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AuditTypes.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Settings.Employees_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/Employees.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})},myapp.Settings.AuditStatuses_postRender=function(n){$(n).find("a").css({"background-image":"url(Content/Images/AuditStatuses.png)","background-repeat":"no-repeat","background-position":"center",width:"250px",height:"250px"})};