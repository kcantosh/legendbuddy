Sortable.create(itemList, {
  animation: 200,
  group: {
    name: 'a',
    pull: 'clone',
    put: false
  },
  sort: false
});

Sortable.create(sortable2, {
  animation: 200,
  group: "a"
});

var legend = $('#yourLegend').find('.cartodb-legend').parent();

$('#html').find('.panel-body').text(legend.html());
  
$('#yourLegend').find('.cartodb-legend').on('drop',function(){
  $('#html').find('.panel-body').text(legend.html());
});