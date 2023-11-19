<template>
  <div id="FMC">
    <table>
      <tbody><tr>
        <td colspan="4" class="large">
          <center>TAKE OFF</center>
        </td>
      </tr>
      <tr>
        <td class="small" width="33%">
          V1
        </td>
        <td colspan="2" class="small">
          FLP RETR
        </td>
        <td class="small">
        </td>
      </tr>
      <tr>
        <td class="large">
          <font class="orange">□□□</font>
        </td>
        <td class="large">
          F=<font class="green">XXX<font>
        </font></font></td>
        <td class="large">
        </td>
      </tr>
      <tr>
        <td class="small">
          VR
        </td>
        <td colspan="2" class="small">
          SLT RETR
        </td>
        <td class="small" align="right">
          TO SHIFT
        </td>
      </tr>
      <tr>
        <td class="large">
          <font class="orange">□□□</font>
        </td>
        <td class="large" colspan="2">
          S=<font class="green">XXX<font>
        </font></font></td>
        <td class="large" align="right">
          [M]<font class="blue">[&nbsp;&nbsp;&nbsp;]*</font>
        </td>
      </tr>
      <tr>
        <td class="small">
          V2
        </td>
        <td colspan="2" class="small">
          CLEAN
        </td>
        <td class="small" align="right">
          FLAPS/THS
        </td>
      </tr>
      <tr>
        <td class="large">
          <font class="orange">□□□</font>
        </td>
        <td class="large" colspan="2">
          O=<font class="green">XXX<font>
        </font></font></td>
        <td class="large" align="right">
          <font class="blue">[&nbsp;&nbsp;]/[&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</font>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="small">
          TRANS ALT
        </td>
        <td colspan="2" class="small" align="right">
          FLEX TO TEMP
        </td>
      </tr>
      <tr>
        <td colspan="2" class="small">
          <font class="blue">5000</font>
        </td>
        <td colspan="2" class="large" align="right">
          <font class="blue">[&nbsp;&nbsp;&nbsp;]°</font>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="small">
          THR RED/ACC
        </td>
        <td colspan="2" class="small" align="right">
          ENG OUT ACC
        </td>
      </tr>
      <tr>
        <td colspan="2" class="small">
          <font class="blue">5000/5000</font>
        </td>
        <td colspan="2" class="small" align="right">
          <font class="blue">5000</font>
        </td>
      </tr>
      <tr>
        <td colspan="2" class="small">

        </td>
        <td colspan="2" class="small" align="right">
          NEXT&nbsp;&nbsp;
        </td>
      </tr>
      <tr>
        <td colspan="2" class="small">

        </td>
        <td colspan="2" class="large" align="right">
          PHASE&gt;
        </td>
      </tr>
      </tbody></table>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
div{
  display: block;
}
table {
  color: white;
  width: 100%;
  border: 0;
  margin: 0;
  padding: 0;
}
tr {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  border: 0;
}
.large {
  padding-bottom: 7px;
  vertical-align: top;
  line-height: 14px;
}
td {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  border: 0;
}
.small {
  font-size: 8pt;
  vertical-align: bottom;
  line-height: 10px;
  letter-spacing: 0.2em;
}
.orange {
  color: #FE9A2E;
}
#FMC {
  background-color: black;
  width: 275px;
  height: 225px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px black;
  font-family: 'Sarpanch', sans-serif;
  color: white;
  font-size: 15pt;
  font-weight: bold;
  -ms-user-select: None;
  -moz-user-select: None;
  -webkit-user-select: None;
  user-select: None;
  padding-left: 4px;
  padding-right: 4px;
  top: 0%;
  margin-top: -200px;
}

</style>