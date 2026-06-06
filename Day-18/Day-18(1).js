function generateInvoice() {
    let customer = document.getElementById("customer").value || "Walk-in Client";
    let product = document.getElementById("product").value || "Consulting Services";
    let quantity = parseFloat(document.getElementById("quantity").value) || 1;
    let price = parseFloat(document.getElementById("price").value) || 0.00;

    let subtotal = quantity * price;
    let tax = subtotal * 0.18; // 18% AI Tax
    let total = subtotal + tax;
    
    let date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    let invoiceId = "INV-" + Math.floor(100000 + Math.random() * 900000);

    let invoiceHtml = `
        <div class="invoice-header">
            <h3>INVOICE</h3>
            <div class="invoice-meta">
                <p><strong>Receipt #:</strong> ${invoiceId}</p>
                <p><strong>Date:</strong> ${date}</p>
            </div>
        </div>
        
        <div class="bill-to">
            <h4>Billed To</h4>
            <p>${customer}</p>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th class="text-right">Qty</th>
                    <th class="text-right">Unit Price</th>
                    <th class="text-right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${product}</td>
                    <td class="text-right">${quantity}</td>
                    <td class="text-right">₹${price.toFixed(2)}</td>
                    <td class="text-right">₹${subtotal.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
        
        <div style="text-align: right; color: #64748b; font-size: 15px; margin-bottom: 15px;">
            Subtotal: ₹${subtotal.toFixed(2)}<br>
            Estimated Tax (18%): ₹${tax.toFixed(2)}
        </div>

        <div class="invoice-total">
            Total Due: <span>₹${total.toFixed(2)}</span>
        </div>
        
        <button class="btn-print" onclick="window.print()">🖨️ Print / Save as PDF</button>
    `;

    let previewCard = document.getElementById("previewCard");
    let invoiceDiv = document.getElementById("invoice");
    let aiLoading = document.getElementById("aiLoading");
    
    // Show the right side wrapper to split the screen layout evenly
    previewCard.classList.remove("hidden");
    
    invoiceDiv.classList.add("hidden");
    aiLoading.classList.remove("hidden");

    setTimeout(() => {
        aiLoading.classList.add("hidden");
        invoiceDiv.innerHTML = invoiceHtml;
        invoiceDiv.classList.remove("hidden");
    }, 1200);
}
