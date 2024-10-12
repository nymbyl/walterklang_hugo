---
title: "Makeshift Parallel Calendar"
type: "history"
---

<link rel="stylesheet" href="/css/jquery-ui.css"/>
<script language="javascript" src="/js/jquery.min.js"></script>
<script language="javascript" src="/js/jquery-ui.min.js"></script>
<script language="javascript" src="/js/makeshift.js"></script>

<script language="javascript" type="text/javascript">
  $(document).ready(function() {
      var text = make_display(new Date());

      $("#makeday").text(text);
      $("#pick_date").text(text);

      $("#the_date").datepicker({
         inline:true,
         "onSelect": function() {  
          var the_date = $("#the_date").datepicker('getDate');
          var pick_text = make_display(the_date);
          $("#pick_date").text(pick_text);
        }    
      });

  });
</script>

<style>
  .float-left { float: left; }
  .clear { clear: both; }
  .makeday { background-color: #000; }
</style>
 
<h1>Makeshift Parallel Calendar</h1>

<div class="description">The MakeShift Parallel Calendar was developed by Chad Himmel in 1992.  
  It is based on a 13 month cycle of 28 days each.</div>

<table cellspacing="1" cellpadding="4" style="width:100%;">
  <tr>
    <td colspan="1" rowspan="1">
    </td>
    <td colspan="1" rowspan="1">
            <img alt="An illustration of the makeshift parallel calendar" src="/images/calendar/makeshift_month.png"/>
    </td>
  </tr>
</table>

  <p>Today's date is:&#160;
  <span id="makeday" class="makeday"></span>
  </p>

  <p>Pick a date to see the Makeshift equivalent:</p>
  <div class="float-left">
    <span id="the_date"></span>
  </div>
  <div class="float-left" style="margin: 2em;font-weight: bold;">
    <span id="pick_date"></span>
  </div>
  <br class="clear"/>

<h3>The Months:</h3>
<p>The months of the <em>MakeShift Parallel Calendar</em> are as follow:
</p>

<table cellspacing="1" cellpadding="4" style="width:100%;">
 <tbody>
  <tr>
    <td colspan="1" rowspan="1"></td>
    <td colspan="1" rowspan="1">
      <img alt="Icon for month of Sweep" src="/images/calendar/sweep.gif" />  1) Sweep  
      <br/>
      <img alt="Icon for month of Leap" src="/images/calendar/leap.gif" />  2) Leap  
      <br/>
      <img alt="Icon for month of March" src="/images/calendar/march.gif" />  3) March  
      <br/>
      <img alt="Icon for month of Ram" src="/images/calendar/ram.gif" />  4) Ram  
      <br/>
      <img alt="Icon for month of Gather" src="/images/calendar/gather.gif" />  5) Gather  
      <br/>
      <img alt="Icon for month of Harbor" src="/images/calendar/harbor.gif" />  6) Harbor  
      <br/>
      <img alt="Icon for month of Crawl" src="/images/calendar/crawl.gif" />  7) Crawl  
    </td>
    <td colspan="1" rowspan="1">
      <img alt="Icon for month of Bear" src="/images/calendar/bear.gif" />  8) Bear  
      <br/>
      <img alt="Icon for month of Nestle" src="/images/calendar/nestle.gif" />  9) Nestle  
      <br/>
      <img alt="Icon for month of Turn" src="/images/calendar/turn.gif" /> 10) Turn  
      <br/>
      <img alt="Icon for month of Fall" src="/images/calendar/fall.gif" /> 11) Fall  
      <br/>
      <img alt="Icon for month of Veer" src="/images/calendar/veer.gif" /> 12) Veer  
      <br/>
      <img alt="Icon for month of Wax" src="/images/calendar/wax.gif" /> 13) Wax  
    </td>
  </tr>
</tbody>

</table>

<h3>History:</h3>

<p>The MakeShift Parallel Calendar was developed by Chad Himmel in 1992.  
It is based on a 13 month cycle of 28 days each (as opposed to the Gregorian system 
of a 12 month cycle of alternating 30 and 31 days). This is a combination of ideas
from the World Calendar and the Perpetual Calendar, which were proposed earlier in
the 20th Century and were rejected by the UN and US Congress. 
These are more consistent and orderly calendars.

</p>

<h3>Explanation/Notes:</h3>
<p>
In the MakeShift Parallel Calendar, the first day of each year occurs a Monday, 
and the first day of each month also occurs on a Monday.<br/>
<br/>
The first day of the year is called Day 0, or Day Not.  It is an unnumbered day,
occurring the day after Wax 28, which is the last day of the 13th month. <br/>
<br/>
Day Not adjusts the year to account for the 365 days of the year, and is not counted as 
any day of the week, such as Monday or Tuesday. Therefore, Wax 28 always occurs on a 
Sunday, and Sweep 1, the first day of the first month, always occurs on a Monday. <br/>
<br/>
Leap Years in the Makeshift Parallel Calendar are determined in the same manner as 
in the Gregorian Calendar. During a Leap Year in the Makeshift Parallel Calendar, 
Leap Day occurs on the day after the 28th day of the month Leap, and also is not
counted as a day of the week. Therefore, the 28th day of Leap always occurs on a Sunday,
and the 1st of March always occurs on a Monday.
</p>

<h3>Observance:</h3>
<p>
4-Jan-1999, Monday: informal observance of the mpc initiated (1-Sweep).<br/>
2-Jan-2000, Sunday: the last day of the informal observance year (28-Wax).<br/>
3-Jan-2000, Monday: the mpc formally began on Day Not of Year Not (0-0-0).<br/>
4-Jan-2000, Tuesday: New Year's Day of Year Not (Monday, 1-Sweep-0).
</p>
 
