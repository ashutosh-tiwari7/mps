(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"AJ6+":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n("tk/3"),i=n("fXoL");let o=(()=>{class t{constructor(t){this.httpClient=t,this.baseurl="https://virtuosmind.com/api/mps/",this.headers=new a.c({"content-type":"application/json"})}register_user(t){const e=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("user-auth-api/create_user/"),e,{headers:this.headers})}register_user_contact(t){const e=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("user-auth-api/user_contact/"),e,{headers:this.headers})}login_user(t){const e=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("user-auth-api/login_user/"),e,{headers:this.headers})}auth_user(t){const e=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("user-auth-api/auth_user/"),e,{headers:this.headers})}get_profile(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("user-auth-api/get_profile/"),{headers:e})}update_profile(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("user-auth-api/update_profile/"),i,{headers:n})}create_property(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("property-api/"),i,{headers:n})}list_property(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("property-api/"),{headers:e})}list_property_home(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("property-api/list_home/"),{headers:e})}get_property(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/").concat(t).concat("/"),{headers:n})}update_property(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.put(this.baseurl.concat("property-api/").concat(t).concat("/"),o,{headers:i})}update_property_m(t,e,n){var i=new a.c({Authorization:n});return this.httpClient.put(this.baseurl.concat("property-api/").concat(t).concat("/"),e,{headers:i})}get_property_purchase(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_property_purchase/?id=").concat(t),{headers:n})}update_property_purchase(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_property_purchase/?id=").concat(t),o,{headers:i})}get_property_sale(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_property_sale/?id=").concat(t),{headers:n})}update_property_sale(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_property_sale/?id=").concat(t),o,{headers:i})}create_contact(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("contact-api/"),i,{headers:n})}update_contact(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.put(this.baseurl.concat("contact-api/").concat(t).concat("/"),o,{headers:i})}update_contact_media(t,e,n){var i=new a.c({Authorization:n});return this.httpClient.put(this.baseurl.concat("contact-api/").concat(t).concat("/"),e,{headers:i})}list_contact(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("contact-api/?category=").concat(t),{headers:n})}get_contact(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("contact-api/").concat(t).concat("/"),{headers:n})}delete_contact(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("contact-api/").concat(t).concat("/"),{headers:n})}entity_smsf(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("entity-api/update_smsf/"),i,{headers:n})}entity_smsf_get(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("entity-api/get_smsf/"),{headers:e})}entity_trust(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("entity-api/update_trust/"),i,{headers:n})}entity_trust_get(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("entity-api/get_trust/"),{headers:e})}entity_company(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("entity-api/update_company/"),i,{headers:n})}entity_company_get(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("entity-api/get_company/"),{headers:e})}entity_individual(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("entity-api/create_individual/"),i,{headers:n})}entity_individual_update(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("entity-api/update_individual/?id=").concat(t),o,{headers:i})}entity_individual_get(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("entity-api/get_individual/"),{headers:e})}entity_individual_single_get(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("entity-api/get_single_individual/?id=").concat(t),{headers:n})}entity_individual_delete(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("entity-api/delete_individual/?id=").concat(t),{headers:n})}create_checklist(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});const i=JSON.stringify(t);return this.httpClient.post(this.baseurl.concat("checklist-api/"),i,{headers:n})}list_checklist(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("checklist-api/"),{headers:e})}list_checklist_wprop(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("checklist-api/list_with_property/?id=").concat(t),{headers:n})}checklist_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("checklist-api/").concat(t).concat("/"),{headers:n})}update_checklist(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.put(this.baseurl.concat("checklist-api/").concat(t).concat("/"),o,{headers:i})}delete_checklist(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("checklist-api/").concat(t).concat("/"),{headers:n})}update_mydetails_entity(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_mydetails_entity/?id=").concat(t),o,{headers:i})}create_mydetails_entity(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_mydetails_entity/?id=").concat(t),o,{headers:i})}get_mydetails_entity(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_entity/?id=").concat(t),{headers:n})}get_mydetails_entity_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_entity_single/?id=").concat(t),{headers:n})}delete_mydetails_entity(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_mydetails_entity/?id=").concat(t),{headers:n})}update_mydetails_finance(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_mydetails_finance/?id=").concat(t),o,{headers:i})}get_mydetails_finance(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_finance/?id=").concat(t),{headers:n})}search_mydetails_finance(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/search_mydetails_finance/?id=").concat(t).concat("&t=").concat(e),{headers:i})}get_mydetails_finance_priv_lender(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_finance_priv_lender/?id=").concat(t),{headers:n})}get_mydetails_finance_priv_lender_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_finance_priv_lender_single/?id=").concat(t),{headers:n})}update_mydetails_finance_priv_lender(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_mydetails_finance_private_lender/?id=").concat(t),o,{headers:i})}create_mydetails_finance_priv_lender(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_mydetails_finance_private_lender/?id=").concat(t),o,{headers:i})}delete_mydetails_finance_priv_lender(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_mydetails_finance_private_lender/?id=").concat(t),{headers:n})}update_mydetails_team(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_mydetails_team/?id=").concat(t),o,{headers:i})}create_mydetails_team(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_mydetails_team/?id=").concat(t),o,{headers:i})}get_mydetails_team(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_team_list/?id=").concat(t).concat("&type=").concat(e),{headers:i})}get_mydetails_team_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_mydetails_team/?id=").concat(t),{headers:n})}search_mydetails_contacts(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});return this.httpClient.get(this.baseurl.concat("property-api/search_mydetails_finance/?id=").concat(t).concat("&type=").concat(e).concat("&t=").concat(n),{headers:o})}delete_mydetails_team(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_mydetails_team/?id=").concat(t),{headers:n})}update_vendordetails_name(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_vendordetails_name/?id=").concat(t),o,{headers:i})}create_vendordetails_name(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_vendordetails_name/?id=").concat(t),o,{headers:i})}get_vendordetails_name(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_name/?id=").concat(t),{headers:n})}get_vendordetails_name_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_name_single/?id=").concat(t),{headers:n})}delete_vendordetails_name(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_vendordetails_name/?id=").concat(t),{headers:n})}update_vendordetails_loan(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_vendordetails_reg_loans/?id=").concat(t),o,{headers:i})}get_vendordetails_loan(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_reg_loans/?id=").concat(t),{headers:n})}update_vendordetails_personal_loan(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_vendordetails_personal_loan/?id=").concat(t),o,{headers:i})}create_vendordetails_personal_loan(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_vendordetails_personal_loan/?id=").concat(t),o,{headers:i})}get_vendordetails_personal_loan(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_personal_loan/?id=").concat(t),{headers:n})}get_vendordetails_personal_loan_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_personal_loan_single/?id=").concat(t),{headers:n})}delete_vendordetails_personal_loan(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_vendordetails_personal_loan/?id=").concat(t),{headers:n})}update_vendordetails_title(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_vendordetails_title/?id=").concat(t),o,{headers:i})}create_vendordetails_title(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_vendordetails_title/?id=").concat(t),o,{headers:i})}get_vendordetails_title(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_title/?id=").concat(t),{headers:n})}get_vendordetails_title_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_title_single/?id=").concat(t),{headers:n})}delete_vendordetails_title(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_vendordetails_title/?id=").concat(t),{headers:n})}update_vendordetails_afca(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_vendordetails_afca/?id=").concat(t),o,{headers:i})}create_vendordetails_afca(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_vendordetails_afca/?id=").concat(t),o,{headers:i})}get_vendordetails_afca(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_afca/?id=").concat(t),{headers:n})}get_vendordetails_afca_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_afca_single/?id=").concat(t),{headers:n})}delete_vendordetails_afca(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_vendordetails_afca/?id=").concat(t),{headers:n})}update_vendordetails_contacts(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_vendordetails_contacts/?id=").concat(t),o,{headers:i})}create_vendordetails_contacts(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_vendordetails_contacts/?id=").concat(t),o,{headers:i})}get_vendordetails_contacts(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_contacts/?id=").concat(t).concat("&type=").concat(e),{headers:i})}get_vendordetails_contacts_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_vendordetails_contacts_single/?id=").concat(t),{headers:n})}delete_vendordetails_contacts(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_vendordetails_contacts/?id=").concat(t),{headers:n})}search_vendordetails_contacts(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});return this.httpClient.get(this.baseurl.concat("property-api/search_vendordetails_contacts/?id=").concat(t).concat("&type=").concat(e).concat("&t=").concat(n),{headers:o})}update_saledetails(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_saledetails/?id=").concat(t),o,{headers:i})}get_saledetails(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_saledetails/?id=").concat(t),{headers:n})}update_reminders(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_reminders/?id=").concat(t),o,{headers:i})}create_reminders(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_reminders/?id=").concat(t),o,{headers:i})}get_reminders(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_reminders/?id=").concat(t),{headers:n})}get_reminders_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_reminders_single/?id=").concat(t),{headers:n})}delete_reminders(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_reminders/?id=").concat(t),{headers:n})}update_offerdetails_purchase_sale_details(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_offerdetails_purchase_sale_details/?id=").concat(t),o,{headers:i})}create_offerdetails_purchase_sale_details(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_offerdetails_purchase_sale_details/?id=").concat(t),o,{headers:i})}get_offerdetails_purchase_sale_details(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_purchase_sale_details/?id=").concat(t).concat("&type=").concat(e),{headers:i})}get_offerdetails_purchase_sale_details_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_purchase_sale_details_single/?id=").concat(t),{headers:n})}delete_offerdetails_purchase_sale_details(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_offerdetails_purchase_sale_details/?id=").concat(t),{headers:n})}update_offerdetails_purchase(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_offerdetails_purchase/?id=").concat(t),o,{headers:i})}get_offerdetails_purchase(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_purchase/?id=").concat(t),{headers:n})}update_offerdetails_purchase_sale_extra(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_offerdetails_purchase_sale_extra/?id=").concat(t),o,{headers:i})}create_offerdetails_purchase_sale_extra(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_offerdetails_purchase_sale_extra/?id=").concat(t),o,{headers:i})}get_offerdetails_purchase_sale_extra(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_purchase_sale_extra/?id=").concat(t).concat("&type=").concat(e),{headers:i})}get_offerdetails_purchase_sale_extra_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_purchase_sale_extra_single/?id=").concat(t),{headers:n})}delete_offerdetails_purchase_sale_extra(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_offerdetails_purchase_sale_extra/?id=").concat(t),{headers:n})}update_offerdetails_feasibility(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_offerdetails_feasibility/?id=").concat(t),o,{headers:i})}get_offerdetails_feasibility(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_feasibility/?id=").concat(t),{headers:n})}update_offerdetails_feasibility_extra(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_offerdetails_feasibility_extra/?id=").concat(t),o,{headers:i})}create_offerdetails_feasibility_extra(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_offerdetails_feasibility_extra/?id=").concat(t),o,{headers:i})}get_offerdetails_feasibility_extra(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_feasibility_extra/?id=").concat(t).concat("&type=").concat(e),{headers:i})}get_offerdetails_feasibility_extra_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_feasibility_extra_single/?id=").concat(t),{headers:n})}delete_offerdetails_feasibility_extra(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_offerdetails_feasibility_extra/?id=").concat(t),{headers:n})}update_inspection_external(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});const r=JSON.stringify(n);return this.httpClient.post(this.baseurl.concat("property-api/update_inspection_external/?id=").concat(t).concat("&gran=").concat(e),r,{headers:o})}get_inspection_external(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_inspection_external/?id=").concat(t).concat("&gran=").concat(e),{headers:i})}update_inspection_internal(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_inspection_internal/?id=").concat(t),o,{headers:i})}create_inspection_internal(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});const r=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_inspection_internal/?id=").concat(t).concat("&gran=").concat(n),r,{headers:o})}get_inspection_internal(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});return this.httpClient.get(this.baseurl.concat("property-api/get_inspection_internal/?id=").concat(t).concat("&gran=").concat(e).concat("&cat=").concat(n),{headers:o})}get_inspection_internal_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_inspection_internal_single/?id=").concat(t),{headers:n})}delete_inspection_internal(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_inspection_internal/?id=").concat(t),{headers:n})}update_inspection_internal_window(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_inspection_internal_window/?id=").concat(t),o,{headers:i})}create_inspection_internal_window(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_inspection_internal_window/?id=").concat(t),o,{headers:i})}delete_inspection_internal_window(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_inspection_internal_window/?id=").concat(t),{headers:n})}update_inspection_internal_wall(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_inspection_internal_wall/?id=").concat(t),o,{headers:i})}create_inspection_internal_wall(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_inspection_internal_wall/?id=").concat(t),o,{headers:i})}delete_inspection_internal_wall(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_inspection_internal_wall/?id=").concat(t),{headers:n})}update_renovation_overview(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_renovation_overview/?id=").concat(t),o,{headers:i})}get_renovation_overview(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_overview/?id=").concat(t),{headers:n})}update_renovation_professionals(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_renovation_professionals/?id=").concat(t),o,{headers:i})}create_renovation_professionals(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_renovation_professionals/?id=").concat(t),o,{headers:i})}get_renovation_professionals(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_professionals_list/?id=").concat(t),{headers:n})}get_renovation_professionals_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_professionals/?id=").concat(t),{headers:n})}delete_renovation_professionals(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_renovation_professionals/?id=").concat(t),{headers:n})}update_renovation_int_ext(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_renovation_int_ext/?id=").concat(t),o,{headers:i})}create_renovation_int_ext(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/create_renovation_int_ext/?id=").concat(t),o,{headers:i})}get_renovation_int_ext(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext/?id=").concat(t).concat("&type=").concat(e),{headers:i})}get_renovation_int_ext_rooms(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext_roomls/?id=").concat(t),{headers:n})}get_renovation_int_ext_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext_single/?id=").concat(t),{headers:n})}delete_renovation_int_ext(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_renovation_int_ext/?id=").concat(t),{headers:n})}get_renovation_int_ext_task(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext_task/?id=").concat(t).concat("&rid=").concat(e),{headers:i})}update_renovation_int_ext_task(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_renovation_int_ext_task/?id=").concat(t),o,{headers:i})}create_renovation_int_ext_task(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});const r=JSON.stringify(n);return this.httpClient.post(this.baseurl.concat("property-api/create_renovation_int_ext_task/?id=").concat(t).concat("&rid=").concat(e),r,{headers:o})}get_renovation_int_ext_task_single(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext_task_single/?id=").concat(t),{headers:n})}delete_renovation_int_ext_task(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_renovation_int_ext_task/?id=").concat(t),{headers:n})}get_renovation_int_ext_mat(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext_mat/?id=").concat(t).concat("&rid=").concat(e),{headers:i})}update_renovation_int_ext_mat(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});const o=JSON.stringify(e);return this.httpClient.post(this.baseurl.concat("property-api/update_renovation_int_ext_mat/?id=").concat(t),o,{headers:i})}create_renovation_int_ext_mat(t,e,n,i){var o=new a.c({"content-type":"application/json",Authorization:i});const r=JSON.stringify(n);return this.httpClient.post(this.baseurl.concat("property-api/create_renovation_int_ext_mat/?id=").concat(t).concat("&rid=").concat(e),r,{headers:o})}delete_renovation_int_ext_mat(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_renovation_int_ext_mat/?id=").concat(t),{headers:n})}get_renovation_int_ext_home(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_int_ext_home/"),{headers:e})}get_reminders_home(t){var e=new a.c({"content-type":"application/json",Authorization:t});return this.httpClient.get(this.baseurl.concat("property-api/get_reminders_home/"),{headers:e})}get_correspondance(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_correspondance/?id=").concat(t),{headers:n})}create_correspondance(t,e,n){var i=new a.c({Authorization:n});return this.httpClient.post(this.baseurl.concat("property-api/create_correspondance/?id=").concat(t),e,{headers:i})}delete_correspondance(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_correspondance/?id=").concat(t),{headers:n})}get_inspection_internal_media(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_inspection_internal_media/?id=").concat(t),{headers:n})}create_inspection_internal_media(t,e,n,i){var o=new a.c({Authorization:i});return this.httpClient.post(this.baseurl.concat("property-api/create_inspection_internal_media/?id=").concat(t).concat("&rid=").concat(e),n,{headers:o})}delete_inspection_internal_media(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_inspection_internal_media/?id=").concat(t),{headers:n})}get_offerdetails_purchase_sale_media(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.get(this.baseurl.concat("property-api/get_offerdetails_purchase_sale_media/?id=").concat(t),{headers:n})}create_offerdetails_purchase_sale_media(t,e,n,i){var o=new a.c({Authorization:i});return this.httpClient.post(this.baseurl.concat("property-api/create_offerdetails_purchase_sale_media/?id=").concat(t).concat("&cid=").concat(e),n,{headers:o})}delete_offerdetails_purchase_sale_media(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_offerdetails_purchase_sale_media/?id=").concat(t),{headers:n})}get_renovation_media(t,e,n){var i=new a.c({"content-type":"application/json",Authorization:n});return this.httpClient.get(this.baseurl.concat("property-api/get_renovation_media/?id=").concat(t).concat("&cat=").concat(e),{headers:i})}create_renovation_media(t,e,n,i){var o=new a.c({Authorization:i});return this.httpClient.post(this.baseurl.concat("property-api/create_renovation_media/?id=").concat(t).concat("&cat=").concat(e),n,{headers:o})}delete_renovation_media(t,e){var n=new a.c({"content-type":"application/json",Authorization:e});return this.httpClient.delete(this.baseurl.concat("property-api/delete_renovation_media/?id=").concat(t),{headers:n})}upload_file(t,e){var n=new a.c({Authorization:e});return this.httpClient.post(this.baseurl.concat("property-api/upload_file_image/"),t,{headers:n})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(a.a))},t.\u0275prov=i.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);