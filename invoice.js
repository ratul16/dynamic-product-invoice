$(document).ready(function () {
                var i = 1;
                $("#add_row").click(function () {
                    b = i - 1;
                    $('#addr' + i).html($('#addr' + b).html()).find('td:first-child').html(i + 1);
                    $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
                    i++;
                });
                $("#delete_row").click(function () {
                    if (i > 1) {
                        $("#addr" + (i - 1)).html('');
                        i--;
                    }
                    calc();
                });

                $('#tab_logic tbody').on('keyup change', function () {
                    calc();
                });
                $('#tax').on('keyup change', function () {
                    calc_total();
                });


            });

            function calc() {
                $('#tab_logic tbody tr').each(function (i, element) {
                    var html = $(this).html();
                    if (html != '') {
                        var qty = Number($(this).find('.qty').val());
                        var price = Number($(this).find('.price').val());
                        var tax = Number($(this).find('.tax').val());
                        var vPrice = price + ((price*tax)/100);
                        $(this).find('.total').val(qty * vPrice);

                        calc_total();
                    }
                });
            }

            function calc_total() {
                subTotal = 0;
                $('.total').each(function () {
                    subTotal += parseInt($(this).val());
                });
                $('#sub_total').val(subTotal.toFixed(2));
                tax_sum = subTotal / 100 * $('#tax').val();
                $('#tax_amount').val(tax_sum.toFixed(2));
                $('#total_amount').val((subTotal- tax_sum).toFixed(2));
            }
