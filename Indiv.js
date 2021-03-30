	  function showDiv() {
	      document.getElementById('Div1').style.display = "block";
	  }

	  function showDiv2() {
	      document.getElementById('Div2').style.display = "block";
	  }

	  $(document).ready(function() {
	      $('select').change(function() {
	          if ($('select option[value="' + $(this).val() + '"]:selected').length > 1) {
	              $(this).val('-1').change();
	              alert('You have already selected this option previously - please choose another.')
	          }
	      });
	  });